# aa-development-toolkit

A reusable, source-aware library of development, design, marketing, SEO, and UI/UX skills for Codex and other compatible AI-agent workflows.

## Start here

1. Choose the skill closest to the task from the catalog below.
2. Read its `SKILL.md`; load bundled `sources.md` or other references only when deeper evidence is needed.
3. Keep project-specific decisions in the project repository rather than changing these reusable defaults.
4. Run `node tools/validate-skills.cjs` before publishing skill changes.

## Skill catalog

All listed skills include valid Codex frontmatter and UI metadata under `agents/openai.yaml`.

### Application development

| Skill | Purpose |
| --- | --- |
| [`01-system-design`](skills/app-development/01-system-design/SKILL.md) | Capacity, reliability, caching, partitioning, and distributed-system tradeoffs |
| [`02-backend-architecture`](skills/app-development/02-backend-architecture/SKILL.md) | Boundaries, dependency direction, domain modeling, and decomposition |
| [`03-api-design`](skills/app-development/03-api-design/SKILL.md) | REST, GraphQL, gRPC, contracts, errors, pagination, and evolution |
| [`04-database-design`](skills/app-development/04-database-design/SKILL.md) | Schemas, indexes, transactions, replication, sharding, and datastore choice |
| [`05-authentication-security`](skills/app-development/05-authentication-security/SKILL.md) | Identity, authorization, OAuth/OIDC, secrets, validation, and OWASP risks |
| [`06-scalability-performance`](skills/app-development/06-scalability-performance/SKILL.md) | Scaling, cache layers, rate limits, background work, and load testing |
| [`07-multi-tenant-saas`](skills/app-development/07-multi-tenant-saas/SKILL.md) | Tenant isolation, identity context, metering, placement, and noisy neighbors |
| [`08-realtime-event-driven`](skills/app-development/08-realtime-event-driven/SKILL.md) | WebSocket/SSE choices, events, delivery semantics, and brokers |
| [`09-testing-quality`](skills/app-development/09-testing-quality/SKILL.md) | Test portfolios, integration environments, load tests, and CI |
| [`10-devops-deployment`](skills/app-development/10-devops-deployment/SKILL.md) | Delivery pipelines, containers, infrastructure, and observability |

See the [application-development guide](skills/app-development/README.md) for the recommended workflow.

### Design

| Skill | Purpose |
| --- | --- |
| [`branding`](skills/design/branding/SKILL.md) | Brand strategy, positioning, voice, and identity |
| [`design-systems`](skills/design/design-systems/SKILL.md) | Tokens, components, documentation, and governance |
| [`grid-layout-systems`](skills/design/grid-layout-systems/SKILL.md) | Responsive grids, spacing, composition, and layout primitives |
| [`iconography`](skills/design/iconography/SKILL.md) | Consistent, accessible, and efficient icon systems |
| [`logo-design`](skills/design/logo-design/SKILL.md) | Functional, scalable logo systems and deliverables |

### Marketing

| Skill | Purpose |
| --- | --- |
| [`content-copywriting`](skills/marketing/content-copywriting/SKILL.md) | Content strategy and conversion-focused website copy |
| [`conversion-rate-optimization`](skills/marketing/conversion-rate-optimization/SKILL.md) | Evidence-based funnel and conversion improvement |
| [`product-photography`](skills/marketing/product-photography/SKILL.md) | Ecommerce photography planning and presentation |
| [`social-media-content`](skills/marketing/social-media-content/SKILL.md) | Platform-aware branded social content |

### Search visibility

| Skill | Purpose |
| --- | --- |
| [`seo`](skills/seo/SKILL.md) | Technical SEO, content discovery, structured data, and AI-answer visibility |
| [`generative-engine-optimization`](skills/seo/generative-engine-optimization/SKILL.md) | Brand and source visibility in generative answers |

### UI/UX

| Skill | Purpose |
| --- | --- |
| [`accessibility`](skills/ui-ux/accessibility/SKILL.md) | WCAG-oriented accessible interface design and auditing |
| [`mobile-first-responsive`](skills/ui-ux/mobile-first-responsive/SKILL.md) | Responsive layout, media, touch interaction, and mobile QA |
| [`performance`](skills/ui-ux/performance/SKILL.md) | Core Web Vitals and real-user performance |
| [`persian-typography`](skills/ui-ux/persian-typography/SKILL.md) | Licensed Persian fonts, RTL typography, and webfont delivery |
| [`tactile-brutalism`](skills/ui-ux/tactile-brutalism/SKILL.md) | Tactile brutalist direction with usability guardrails |
| [`typography-color-2026`](skills/ui-ux/typography-color-2026/SKILL.md) | Current typography and color direction |

## Repository structure

| Path | Status | Role |
| --- | --- | --- |
| `skills/` | Active | Installable skill packages and their bundled resources |
| `docs/` | Reference | Repository-wide engineering and review guidance |
| `references/` | Reference | Curated web-design source registers |
| `animations/`, `assets/`, `components/`, `frontend/` | Planned | Reserved homes governed by their local README files |
| `prompts/`, `snippets/`, `templates/`, `tools/` | Planned/Active | Reusable authoring material and validation utilities |
| `ui-ux/`, `wordpress/` | Planned | Future non-skill libraries; current agent guidance lives under `skills/` |

## Validation

Run:

```powershell
node tools/validate-skills.cjs
git diff --check
```

The validator checks skill frontmatter, names, descriptions, UI metadata, duplicate names, local Markdown links, deprecated tool-specific references, missing companion files, and nested Git repositories.

## Contribution rules

- Keep each `SKILL.md` concise and procedural.
- Put deep domain detail in `references/` or a directly linked `sources.md`.
- Preserve source, license, and adaptation notes for external material.
- Do not add vendored code without verifying its license and attribution requirements.
- Keep skill folder names and frontmatter `name` values identical.
- Do not add project-specific secrets, credentials, or customer data.

## License

No repository license has been selected yet. The repository owner must choose one before third-party redistribution or reuse terms can be considered defined.
