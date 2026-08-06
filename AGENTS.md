# AGENTS.md — Universal AI Assistant Guide

This file is the entry point for **any AI assistant** working in or with this
repository — Claude, ChatGPT, Cursor, Windsurf, Copilot, Gemini, or any other
coding agent. Read this file first, before touching any code, docs, or
design decisions.

`AGENTS.md` is a tool-agnostic convention (unlike `SKILL.md`, which some
tools such as Claude Code auto-discover). Assistants that don't natively
support skill auto-loading should still read this file as a manual
system-prompt / context file.

## What this repository is

**AA Development OS** — a personal, central source of truth for reusable
development standards, approved patterns, prompts, components, templates,
and technical decisions used across current and future projects.

Full governing document: [`docs/manifest.md`](docs/manifest.md) — read it
in full before making structural or standards-related decisions.

## Core principles (summary)

1. Production-ready over experimental.
2. Reusable over project-specific.
3. Documented over implicit.
4. Maintainable over clever.
5. Accessible, secure, performant, and SEO-friendly by default.
6. Inspect existing project architecture before proposing structural changes.
7. Reuse approved internal patterns before introducing new solutions.
8. No framework migration unless explicitly requested.
9. Follow the shortest safe and verifiable path.
10. Unverified or temporary code must not enter the approved library.

See `docs/manifest.md` for the full decision-priority order and asset
status model (Draft / Review / Approved / Deprecated).

## How an AI assistant should use this repo

1. **Check `docs/manifest.md`** for the current rules and priority order.
2. **Search `skills/`** for a relevant `SKILL.md` before improvising —
   see the full index below.
3. **Check `docs/`** for project-wide standards (coding, naming, git
   workflow, security, accessibility, performance, SEO, review checklist).
4. **Check `references/`** for curated, pre-approved external sources
   before searching the open web.
5. Only propose new patterns when nothing existing covers the need —
   and mark new material `Status: Draft` per the manifest's asset model.
6. Never copy external code into production without checking license,
   compatibility, accessibility, performance, and security, per the
   Source Policy in the manifest.
7. **Before presenting any design or site deliverable as finished, run
   [`docs/quality-gate.md`](docs/quality-gate.md) in full.** This is
   mandatory, not optional — a deliverable that hasn't passed every item
   in that gate is not done. State explicitly in the response which gate
   items were checked and their pass/fail result.

## Skills index

### App Development (`skills/app-development/`)
| Skill | Path |
|---|---|
| System Design | `skills/app-development/01-system-design/SKILL.md` |
| Backend Architecture | `skills/app-development/02-backend-architecture/SKILL.md` |
| API Design | `skills/app-development/03-api-design/SKILL.md` |
| Database Design | `skills/app-development/04-database-design/SKILL.md` |
| Authentication & Security | `skills/app-development/05-authentication-security/SKILL.md` |
| Scalability & Performance | `skills/app-development/06-scalability-performance/SKILL.md` |
| Multi-Tenant / SaaS Architecture | `skills/app-development/07-multi-tenant-saas/SKILL.md` |
| Real-Time & Event-Driven Architecture | `skills/app-development/08-realtime-event-driven/SKILL.md` |
| Testing & Quality | `skills/app-development/09-testing-quality/SKILL.md` |
| DevOps & Deployment | `skills/app-development/10-devops-deployment/SKILL.md` |

### Design (`skills/design/`)
| Skill | Path |
|---|---|
| Branding & Brand Identity | `skills/design/branding/SKILL.md` |
| Design Systems | `skills/design/design-systems/SKILL.md` |
| Grid & Layout Systems | `skills/design/grid-layout-systems/SKILL.md` |
| Iconography | `skills/design/iconography/SKILL.md` |
| Logo Design | `skills/design/logo-design/SKILL.md` |
| Brand Guidelines Enforcement | `skills/design/brand-guidelines/SKILL.md` |
| Standalone Visuals (Covers/Posters/Social) | `skills/design/standalone-visuals/SKILL.md` |

### UI/UX (`skills/ui-ux/`)
| Skill | Path |
|---|---|
| Accessibility | `skills/ui-ux/accessibility/SKILL.md` |
| Mobile-First & Responsive Design | `skills/ui-ux/mobile-first-responsive/SKILL.md` |
| Performance & Core Web Vitals | `skills/ui-ux/performance/SKILL.md` |
| Persian Typography | `skills/ui-ux/persian-typography/SKILL.md` |
| Tactile Brutalism | `skills/ui-ux/tactile-brutalism/SKILL.md` |
| Typography & Color Trends (2026) | `skills/ui-ux/typography-color-2026/SKILL.md` |
| Design Tokens & Design-to-Code Handoff | `skills/ui-ux/design-tokens-handoff/SKILL.md` |
| Dark Mode 3.0 (2026) | `skills/ui-ux/dark-mode-2026/SKILL.md` |
| Motion & Scroll-Driven Animation | `skills/ui-ux/motion-scroll-driven/SKILL.md` |
| Agent-Ready Sites (WebMCP) | `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md` |
| Voice UI (VUI) Navigation | `skills/ui-ux/voice-ui-navigation/SKILL.md` |
| RTL & Farsi Layout | `skills/ui-ux/rtl-farsi/SKILL.md` |

### Marketing (`skills/marketing/`)
| Skill | Path |
|---|---|
| Content Strategy & Copywriting | `skills/marketing/content-copywriting/SKILL.md` |
| AI-Generated Content Guardrails | `skills/marketing/ai-content-guardrails/SKILL.md` |
| Conversion Rate Optimization (CRO) | `skills/marketing/conversion-rate-optimization/SKILL.md` |
| Product Photography | `skills/marketing/product-photography/SKILL.md` |
| Social Media Content Design | `skills/marketing/social-media-content/SKILL.md` |

### SEO (`skills/seo/`)
| Skill | Path |
|---|---|
| SEO (Search Engine & AI-Answer Optimization) | `skills/seo/SKILL.md` |
| Generative Engine Optimization (GEO) | `skills/seo/generative-engine-optimization/SKILL.md` |

## Docs index (`docs/`)

| Doc | Path |
|---|---|
| Manifest (read first) | `docs/manifest.md` |
| **Design Quality Gate (mandatory before delivery)** | `docs/quality-gate.md` |
| Skill Maturity & Promotion Process | `docs/skill-maturity-process.md` |
| Skill Usage Log | `docs/skill-usage-log.md` |
| Development Rules | `docs/development-rules.md` |
| Coding Standards | `docs/coding-standards.md` |
| Naming Conventions | `docs/naming-conventions.md` |
| Folder Structure Standards | `docs/folder-structure.md` |
| Architecture Standards | `docs/architecture.md` |
| Git Workflow | `docs/git-workflow.md` |
| Security Standards | `docs/security.md` |
| Accessibility Standards | `docs/accessibility.md` |
| Performance Standards | `docs/performance.md` |
| SEO Standards | `docs/seo.md` |
| Review Checklist | `docs/review-checklist.md` |

## Other reusable directories

| Directory | Status | Purpose |
|---|---|---|
| `references/` | Partial content | Curated external sources (web-design: 3D, motion, glass, etc.) |
| `animations/` | Has content | `animations/micro-interactions.md` — generic timing/easing patterns |
| `assets/` | Empty — pending | Reusable media assets |
| `components/` | Has content | `button/`, `card/`, `navbar/` — generic, framework-agnostic components |
| `frontend/` | Empty — pending | Frontend architecture patterns |
| `prompts/` | Has content | Reusable, category-agnostic prompt templates for common site-building tasks |
| `snippets/` | Has content | Scroll-reveal, dark-mode toggle, accessible form validation |
| `templates/` | Has content | Generic site archetypes: landing page, catalog/listing, SaaS dashboard |
| `tools/` | Has content | Contrast checker snippet, pre-launch quality checklist, `bootstrap-project.js` scaffolding script |
| `wordpress/` | Empty — pending | WordPress/WooCommerce standards |

## Examples

`examples/` contains full, self-contained reference pages showing
multiple skills combined: `landing-page.html` (tokens, dark mode,
accessible navbar, scroll motion) and `catalog-page-rtl.html` (RTL/Farsi
layout, filter+grid pattern). See `examples/README.md`.

## Bootstrapping a new project

Run `node tools/bootstrap-project.js <project-name> --archetype=landing|catalog|dashboard`
from inside this toolkit to scaffold a new project folder with tokens,
base components, the matching structure template, and the mandatory
quality gate copied in. No dependencies required — plain Node.js.

All content added above is intentionally **category-agnostic** — generic
enough to reuse across any project (retail, services, SaaS, portfolio,
etc.), not tied to a specific product or industry. `assets/`, `frontend/`,
and `wordpress/` remain placeholder-only pending real content.

## License

See [`LICENSE`](LICENSE) (MIT). External material referenced from this
repo keeps its own original license — see the Source Policy in
`docs/manifest.md`.

## Change history

See [`CHANGELOG.md`](CHANGELOG.md).
