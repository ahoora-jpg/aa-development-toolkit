#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const skillsRoot = path.join(root, "skills");
const errors = [];
const warnings = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.name === ".git") return [];
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function findNestedGitDirectories(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory()) return [];
    const fullPath = path.join(directory, entry.name);
    if (entry.name === ".git") {
      return fullPath === path.join(root, ".git") ? [] : [fullPath];
    }
    return findNestedGitDirectories(fullPath);
  });
}

function relative(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(filePath, content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== "---") {
    errors.push(`${relative(filePath)}: missing opening YAML frontmatter`);
    return null;
  }

  const closingIndex = lines.indexOf("---", 1);
  if (closingIndex < 0) {
    errors.push(`${relative(filePath)}: missing closing YAML frontmatter`);
    return null;
  }

  const data = {};
  for (const line of lines.slice(1, closingIndex)) {
    if (!line.trim()) continue;
    const match = line.match(/^([a-z_]+):\s*(.+)$/);
    if (!match) {
      errors.push(`${relative(filePath)}: invalid frontmatter line "${line}"`);
      continue;
    }
    const [, key, rawValue] = match;
    if (!["name", "description"].includes(key)) {
      errors.push(`${relative(filePath)}: unsupported frontmatter field "${key}"`);
    }
    data[key] = unquote(rawValue);
  }

  return data;
}

function validateSkill(skillFile, names) {
  const content = fs.readFileSync(skillFile, "utf8");
  const metadata = parseFrontmatter(skillFile, content);
  if (!metadata) return;

  const folderName = path.basename(path.dirname(skillFile));
  if (!metadata.name) errors.push(`${relative(skillFile)}: missing name`);
  if (!metadata.description) errors.push(`${relative(skillFile)}: missing description`);
  if (metadata.name && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.name)) {
    errors.push(`${relative(skillFile)}: invalid skill name "${metadata.name}"`);
  }
  if (metadata.name && metadata.name !== folderName) {
    errors.push(
      `${relative(skillFile)}: name "${metadata.name}" does not match folder "${folderName}"`,
    );
  }
  if (metadata.description && metadata.description.length < 40) {
    warnings.push(`${relative(skillFile)}: description may be too short`);
  }
  if (/^Status:\s*Draft\s*$/im.test(content)) {
    errors.push(`${relative(skillFile)}: still marked Draft`);
  }
  if (/\.claude[\\/]|AskUserQuestion|claude[\\/]/i.test(content)) {
    errors.push(`${relative(skillFile)}: contains deprecated tool-specific references`);
  }

  if (metadata.name) {
    if (names.has(metadata.name)) {
      errors.push(
        `${relative(skillFile)}: duplicate skill name also used by ${relative(names.get(metadata.name))}`,
      );
    } else {
      names.set(metadata.name, skillFile);
    }
  }

  const agentFile = path.join(path.dirname(skillFile), "agents", "openai.yaml");
  if (!fs.existsSync(agentFile)) {
    errors.push(`${relative(skillFile)}: missing agents/openai.yaml`);
    return;
  }

  const agentContent = fs.readFileSync(agentFile, "utf8");
  for (const key of ["display_name", "short_description", "default_prompt"]) {
    if (!new RegExp(`^\\s*${key}:\\s*\".+\"\\s*$`, "m").test(agentContent)) {
      errors.push(`${relative(agentFile)}: missing quoted ${key}`);
    }
  }
  const shortDescription = agentContent.match(
    /^\s*short_description:\s*"([^"]+)"\s*$/m,
  )?.[1];
  if (
    shortDescription &&
    (shortDescription.length < 25 || shortDescription.length > 64)
  ) {
    errors.push(
      `${relative(agentFile)}: short_description must be 25-64 characters`,
    );
  }
  if (metadata.name && !agentContent.includes(`$${metadata.name}`)) {
    errors.push(`${relative(agentFile)}: default_prompt must mention $${metadata.name}`);
  }
}

function validateLocalLinks(markdownFile) {
  const content = fs.readFileSync(markdownFile, "utf8");
  const linkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;
  let match;

  while ((match = linkPattern.exec(content))) {
    let target = match[1].trim().replace(/^<|>$/g, "");
    if (
      !target ||
      target.startsWith("#") ||
      /^(?:https?:|mailto:|tel:|data:)/i.test(target)
    ) {
      continue;
    }

    target = target.split("#", 1)[0].split("?", 1)[0];
    try {
      target = decodeURIComponent(target);
    } catch {
      warnings.push(`${relative(markdownFile)}: could not decode link "${target}"`);
    }

    const resolved = target.startsWith("/")
      ? path.join(root, target.slice(1))
      : path.resolve(path.dirname(markdownFile), target);
    if (!fs.existsSync(resolved)) {
      errors.push(`${relative(markdownFile)}: broken local link "${match[1]}"`);
    }
  }
}

if (!fs.existsSync(skillsRoot)) {
  console.error("ERROR: skills/ directory does not exist");
  process.exit(1);
}

const files = walk(root);
const skillFiles = files.filter((file) => path.basename(file) === "SKILL.md");
const markdownFiles = files.filter((file) => file.endsWith(".md"));
const names = new Map();

for (const skillFile of skillFiles) validateSkill(skillFile, names);
for (const markdownFile of markdownFiles) validateLocalLinks(markdownFile);

const nestedGit = findNestedGitDirectories(root);
if (nestedGit.length) {
  errors.push(`nested Git metadata found: ${nestedGit.map(relative).join(", ")}`);
}

console.log(`Skills: ${skillFiles.length}`);
console.log(`Markdown files: ${markdownFiles.length}`);
console.log(`Unique skill names: ${names.size}`);
if (!fs.existsSync(path.join(root, "LICENSE"))) {
  warnings.push("LICENSE is not present; the repository owner must choose a license");
}

for (const warning of warnings) console.warn(`WARNING: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(`Validation passed${warnings.length ? ` with ${warnings.length} warning(s)` : ""}.`);
