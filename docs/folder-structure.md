# Folder Structure Standards

Status: Approved
Version: 1.0.0

## Principles

- Group files by responsibility.
- Keep reusable material separate from project-specific code.
- Avoid unnecessary folder nesting.
- Use predictable directory names.
- Store documentation near the relevant implementation.
- Avoid vague folders such as misc, stuff, or new.

## Main Modules

- assets: shared media and asset references
- animations: reusable motion patterns
- components: reusable UI components
- docs: standards and architectural decisions
- frontend: reusable frontend patterns
- prompts: AI instructions and workflows
- references: curated external sources
- skills: installable agent skills with required `SKILL.md` frontmatter and optional `agents/`, `references/`, `scripts/`, and `assets/`
- snippets: small reusable code fragments
- templates: reusable starters and boilerplates
- tools: automation and validation scripts
- ui-ux: design-system and UX standards
- wordpress: WordPress and WooCommerce standards

## Skill Packages

- Keep each skill in a folder whose name matches its frontmatter `name`.
- Put detailed sources beside the skill as `sources.md` or under `references/`.
- Keep product-facing metadata in `agents/openai.yaml`.
- Do not place auxiliary README or changelog files inside an individual skill package.
- Run `node tools/validate-skills.cjs` before publishing changes.
