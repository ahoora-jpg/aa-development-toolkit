# Changelog

All notable changes to this toolkit are documented in this file.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
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
