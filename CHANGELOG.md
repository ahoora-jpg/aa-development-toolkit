# Changelog

All notable changes to this toolkit are documented in this file.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- 6 new `SKILL.md` files reflecting 2026 web design direction, all
  category-agnostic (reusable for any project, any industry):
  - `skills/ui-ux/design-tokens-handoff/`
  - `skills/ui-ux/dark-mode-2026/`
  - `skills/ui-ux/motion-scroll-driven/`
  - `skills/ui-ux/agent-ready-sites-webmcp/`
  - `skills/ui-ux/voice-ui-navigation/`
  - `skills/design/brand-guidelines/`
  - `skills/design/standalone-visuals/`
- Real, category-agnostic content in previously empty directories:
  - `components/` — button, card, navbar (framework-agnostic, token-based)
  - `snippets/` — scroll-reveal, dark mode toggle, accessible form validation
  - `prompts/` — reusable prompt templates for landing pages, catalog
    pages, and accessibility audits
  - `templates/` — generic site archetypes (landing page, catalog/
    listing, SaaS dashboard)
  - `tools/` — contrast-ratio checker snippet, pre-launch quality checklist
  - `animations/` — standard micro-interaction timing patterns
- `AGENTS.md` — universal, tool-agnostic entry point so any AI assistant
  (not only Claude Code) can discover and use the skills and standards in
  this repository.
- Full skills index and docs index in `README.md`.
- `LICENSE` (MIT) for original repository content.
- This `CHANGELOG.md`.

## [Initial structure] - 2026-08-05

### Added
- Repository scaffold: `docs/`, `skills/`, `references/`, and placeholder
  directories for `animations/`, `assets/`, `components/`, `frontend/`,
  `prompts/`, `snippets/`, `templates/`, `tools/`, `wordpress/`.
- `docs/manifest.md` — core principles, asset status model, decision
  priority, source policy.
- `docs/` standards: development rules, coding standards, naming
  conventions, folder structure, architecture, git workflow, security,
  accessibility, performance, SEO, review checklist.
- 26 `SKILL.md` files across app-development (10), design (5), ui-ux (6),
  marketing (4), and seo (2).
- `references/web-design/` curated source lists (3D, motion, glass, Safari
  home shortlist).

---

## How to update this file

When you add or change a skill, doc, or standard:

1. Add an entry under `[Unreleased]` describing what changed and why.
2. When you tag a release in Git, rename `[Unreleased]` to
   `[vX.Y.Z] - YYYY-MM-DD` and start a new empty `[Unreleased]` section.
