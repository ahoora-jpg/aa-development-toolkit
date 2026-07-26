# app-development

Status: Draft

## Purpose

Skills for designing and building the application layer itself — backend, data, security, scalability, and delivery — as opposed to `ui-ux/`, `frontend/`, `animations/`, and `wordpress/`, which cover the visual/website side of the toolkit.

## Contents

| Folder | Covers |
|---|---|
| `01-system-design/` | Core concepts: scalability, CAP theorem, caching, load balancing, replication vs sharding |
| `02-backend-architecture/` | Clean/hexagonal architecture, DDD, monolith-first, SOLID applied to backend code |
| `03-api-design/` | REST conventions, versioning, pagination, errors, REST vs GraphQL vs gRPC |
| `04-database-design/` | Normalization, indexing, SQL vs NoSQL, migrations |
| `05-authentication-security/` | OWASP API Security Top 10, sessions vs JWT, OAuth2/OIDC, input validation, secrets |
| `06-scalability-performance/` | Load testing, horizontal scaling, caching, async processing, rate limiting |
| `07-multi-tenant-saas/` | Tenant isolation models, tenant-aware auth, noisy-neighbor mitigation |
| `08-realtime-event-driven/` | WebSockets vs SSE vs polling, event-driven architecture, message brokers, outbox pattern |
| `09-testing-quality/` | Testing pyramid, TDD, CI-friendly testing, load testing |
| `10-devops-deployment/` | CI/CD, Docker, trunk-based development, infrastructure as code, observability |

## Content Requirements

Items added to this directory should be:

- Reusable
- Documented
- Reviewed
- Clearly marked as Draft, Review, Approved, or Deprecated

## External Sources

External material must document its original source, license (where applicable), and adaptation notes. Prefer linking to actively maintained repositories over vendoring their content, since this space changes quickly.
