#!/usr/bin/env node
/**
 * Bootstrap a new project from aa-development-toolkit.
 *
 * Status: Approved
 * Last reviewed: 2026-08-05
 * Source: Original (this repo)
 *
 * Usage:
 *   node tools/bootstrap-project.js my-new-project
 *   node tools/bootstrap-project.js my-new-project --archetype=catalog
 *
 * Archetypes: landing (default), catalog, dashboard
 *
 * What it does:
 *   1. Creates <project-name>/ next to this toolkit
 *   2. Copies design tokens (as tokens.css)
 *   3. Copies base components (button, card, navbar)
 *   4. Copies the matching template structure doc as a starting README
 *   5. Copies docs/quality-gate.md as PROJECT_QUALITY_GATE.md so it's
 *      always visible inside the new project, not just in the toolkit
 *
 * This is a plain Node.js script (no dependencies) so it runs anywhere
 * Node is available, independent of any specific AI tool.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const projectName = args.find((a) => !a.startsWith('--'));
const archetypeArg = args.find((a) => a.startsWith('--archetype='));
const archetype = archetypeArg ? archetypeArg.split('=')[1] : 'landing';

if (!projectName) {
  console.error('Usage: node tools/bootstrap-project.js <project-name> [--archetype=landing|catalog|dashboard]');
  process.exit(1);
}

const TOOLKIT_ROOT = path.resolve(__dirname, '..');
const PROJECT_ROOT = path.resolve(TOOLKIT_ROOT, '..', projectName);

const templateMap = {
  landing: 'templates/landing-page-structure.md',
  catalog: 'templates/catalog-listing-structure.md',
  dashboard: 'templates/saas-dashboard-structure.md',
};

if (!templateMap[archetype]) {
  console.error(`Unknown archetype "${archetype}". Valid options: ${Object.keys(templateMap).join(', ')}`);
  process.exit(1);
}

function mkdirp(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyFile(src, dest) {
  mkdirp(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`  + ${path.relative(PROJECT_ROOT, dest)}`);
}

console.log(`\nBootstrapping "${projectName}" (${archetype} archetype)...\n`);

if (fs.existsSync(PROJECT_ROOT)) {
  console.error(`Error: ${PROJECT_ROOT} already exists. Choose a different name or remove it first.`);
  process.exit(1);
}

mkdirp(PROJECT_ROOT);

// 1. Design tokens as a standalone CSS file
const tokensCss = `:root {
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  --color-primary: #171717;
  --color-primary-foreground: #fafafa;
  --color-border: #e5e5e5;
  --color-muted: #f5f5f5;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px;
  --shadow-1: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-2: 0 4px 12px rgba(0,0,0,0.08);
  --motion-fast: 120ms; --motion-base: 200ms;
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
}
[data-theme="dark"] {
  --color-background: #0a0a0a;
  --color-foreground: #fafafa;
  --color-primary: #fafafa;
  --color-primary-foreground: #171717;
  --color-border: #262626;
  --color-muted: #171717;
}
`;
mkdirp(path.join(PROJECT_ROOT, 'src', 'styles'));
fs.writeFileSync(path.join(PROJECT_ROOT, 'src', 'styles', 'tokens.css'), tokensCss);
console.log(`  + src/styles/tokens.css`);

// 2. Copy base components as reference (from toolkit's markdown docs)
const componentDirs = ['button', 'card', 'navbar'];
for (const c of componentDirs) {
  const src = path.join(TOOLKIT_ROOT, 'components', c, 'COMPONENT.md');
  if (fs.existsSync(src)) {
    copyFile(src, path.join(PROJECT_ROOT, 'reference', 'components', `${c}.md`));
  }
}

// 3. Copy the matching template structure as starting point
const templateSrc = path.join(TOOLKIT_ROOT, templateMap[archetype]);
if (fs.existsSync(templateSrc)) {
  copyFile(templateSrc, path.join(PROJECT_ROOT, 'PROJECT_STRUCTURE.md'));
}

// 4. Copy the mandatory quality gate so it's visible in the new project
const gateSrc = path.join(TOOLKIT_ROOT, 'docs', 'quality-gate.md');
if (fs.existsSync(gateSrc)) {
  copyFile(gateSrc, path.join(PROJECT_ROOT, 'PROJECT_QUALITY_GATE.md'));
}

// 5. Minimal project README
const readme = `# ${projectName}

Bootstrapped from aa-development-toolkit (${archetype} archetype).

## What's here

- \`src/styles/tokens.css\` — design tokens, edit values but keep names
- \`reference/components/\` — starting component code (button, card, navbar)
- \`PROJECT_STRUCTURE.md\` — page/section structure for this archetype
- \`PROJECT_QUALITY_GATE.md\` — mandatory checklist before calling anything done

## Next steps

1. Point your AI assistant at this project folder plus the toolkit's
   \`AGENTS.md\` for full context.
2. Build out the structure in \`PROJECT_STRUCTURE.md\`.
3. Before presenting any page as finished, run the full
   \`PROJECT_QUALITY_GATE.md\` checklist.
`;
fs.writeFileSync(path.join(PROJECT_ROOT, 'README.md'), readme);
console.log(`  + README.md`);

console.log(`\nDone. Project created at: ${PROJECT_ROOT}\n`);
