# aa-development-toolkit

Reusable development rules, UI/UX skills, components, and project standards.

Central source of truth for reusable development standards, approved
patterns, prompts, components, templates, and technical decisions used
across current and future projects.

## Start here

- **[`AGENTS.md`](AGENTS.md)** — universal guide for any AI assistant
  (Claude, ChatGPT, Cursor, Windsurf, Copilot, Gemini, etc.) working with
  this repository. Read this first.
- **[`docs/manifest.md`](docs/manifest.md)** — the full governing manifest:
  core principles, asset status model, decision priority, source policy.
- **[`docs/quality-gate.md`](docs/quality-gate.md)** — mandatory design
  quality checklist. Any AI assistant must pass this in full before
  presenting a design/site deliverable as finished.

## Repository structure

- `AGENTS.md` — universal AI assistant entry point
- `LICENSE`
- `CHANGELOG.md`
- `docs/` — project-wide standards and rules
- `skills/` — AI-agent skills (`SKILL.md` per topic)
  - `app-development/` — 10 topics: system design, backend, API, DB, auth, scaling, etc.
  - `design/` — branding, design systems, grids, iconography, logos, brand guidelines, standalone visuals
  - `ui-ux/` — accessibility, responsive design, performance, typography, design tokens, dark mode, motion, agent-ready sites, voice UI
  - `marketing/` — copywriting, CRO, product photography, social content
  - `seo/` — SEO and generative engine optimization
- `references/` — curated, pre-approved external sources
- `animations/` — generic micro-interaction timing patterns
- `assets/` — (pending) reusable media assets
- `components/` — generic components: button, card, navbar
- `frontend/` — (pending) frontend architecture patterns
- `prompts/` — reusable, category-agnostic prompt templates
- `snippets/` — scroll-reveal, dark mode toggle, form validation
- `templates/` — generic site archetypes (landing / catalog / dashboard)
- `tools/` — contrast checker, pre-launch quality checklist
- `wordpress/` — (pending) WordPress/WooCommerce standards

All content in `animations/`, `components/`, `prompts/`, `snippets/`,
`templates/`, and `tools/` is intentionally **category-agnostic** —
reusable across any project (retail, services, SaaS, portfolio, etc.),
not tied to a specific product or industry. `assets/`, `frontend/`, and
`wordpress/` remain placeholder-only pending real content.

## Skills index

### App Development
- [System Design](skills/app-development/01-system-design/SKILL.md)
- [Backend Architecture](skills/app-development/02-backend-architecture/SKILL.md)
- [API Design](skills/app-development/03-api-design/SKILL.md)
- [Database Design](skills/app-development/04-database-design/SKILL.md)
- [Authentication & Security](skills/app-development/05-authentication-security/SKILL.md)
- [Scalability & Performance](skills/app-development/06-scalability-performance/SKILL.md)
- [Multi-Tenant / SaaS Architecture](skills/app-development/07-multi-tenant-saas/SKILL.md)
- [Real-Time & Event-Driven Architecture](skills/app-development/08-realtime-event-driven/SKILL.md)
- [Testing & Quality](skills/app-development/09-testing-quality/SKILL.md)
- [DevOps & Deployment](skills/app-development/10-devops-deployment/SKILL.md)

### Design
- [Branding & Brand Identity](skills/design/branding/SKILL.md)
- [Design Systems](skills/design/design-systems/SKILL.md)
- [Grid & Layout Systems](skills/design/grid-layout-systems/SKILL.md)
- [Iconography](skills/design/iconography/SKILL.md)
- [Logo Design](skills/design/logo-design/SKILL.md)
- [Brand Guidelines Enforcement](skills/design/brand-guidelines/SKILL.md)
- [Standalone Visuals (Covers/Posters/Social)](skills/design/standalone-visuals/SKILL.md)

### UI/UX
- [Accessibility](skills/ui-ux/accessibility/SKILL.md)
- [Mobile-First & Responsive Design](skills/ui-ux/mobile-first-responsive/SKILL.md)
- [Performance & Core Web Vitals](skills/ui-ux/performance/SKILL.md)
- [Persian Typography](skills/ui-ux/persian-typography/SKILL.md)
- [Tactile Brutalism](skills/ui-ux/tactile-brutalism/SKILL.md)
- [Typography & Color Trends (2026)](skills/ui-ux/typography-color-2026/SKILL.md)
- [Design Tokens & Design-to-Code Handoff](skills/ui-ux/design-tokens-handoff/SKILL.md)
- [Dark Mode 3.0 (2026)](skills/ui-ux/dark-mode-2026/SKILL.md)
- [Motion & Scroll-Driven Animation](skills/ui-ux/motion-scroll-driven/SKILL.md)
- [Agent-Ready Sites (WebMCP)](skills/ui-ux/agent-ready-sites-webmcp/SKILL.md)
- [Voice UI (VUI) Navigation](skills/ui-ux/voice-ui-navigation/SKILL.md)

### Marketing
- [Content Strategy & Copywriting](skills/marketing/content-copywriting/SKILL.md)
- [Conversion Rate Optimization (CRO)](skills/marketing/conversion-rate-optimization/SKILL.md)
- [Product Photography](skills/marketing/product-photography/SKILL.md)
- [Social Media Content Design](skills/marketing/social-media-content/SKILL.md)

### SEO
- [SEO (Search Engine & AI-Answer Optimization)](skills/seo/SKILL.md)
- [Generative Engine Optimization (GEO)](skills/seo/generative-engine-optimization/SKILL.md)

## Docs index

- [Manifest](docs/manifest.md)
- [**Design Quality Gate (mandatory)**](docs/quality-gate.md)
- [Development Rules](docs/development-rules.md)
- [Coding Standards](docs/coding-standards.md)
- [Naming Conventions](docs/naming-conventions.md)
- [Folder Structure Standards](docs/folder-structure.md)
- [Architecture Standards](docs/architecture.md)
- [Git Workflow](docs/git-workflow.md)
- [Security Standards](docs/security.md)
- [Accessibility Standards](docs/accessibility.md)
- [Performance Standards](docs/performance.md)
- [SEO Standards](docs/seo.md)
- [Review Checklist](docs/review-checklist.md)

## Using this toolkit with an AI assistant

Point your assistant to `AGENTS.md` (or, for Claude Code, the skills under
`skills/` are auto-discovered once added to `.claude/skills/`). For tools
without native skill auto-loading, paste or attach the relevant `SKILL.md`
file(s) as context.

## License

MIT — see [`LICENSE`](LICENSE). Note: external material referenced from
this repo (fonts, code samples, design sources) keeps its own original
license; see the Source Policy in `docs/manifest.md`.

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md).
