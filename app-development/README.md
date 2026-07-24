# Application Development Skill Library

This section is a backend-focused decision and implementation reference for AI agents and engineers building production applications. Start with the category closest to the current decision, read its `SKILL.md`, and consult `sources.md` when deeper or normative guidance is needed.

| Area | Use it for |
| --- | --- |
| [01 System Design](01-system-design/SKILL.md) | Capacity, distributed-system tradeoffs, caching, data partitioning, and queues |
| [02 Backend Architecture](02-backend-architecture/SKILL.md) | Boundaries, dependency direction, domain modeling, and service decomposition |
| [03 API Design](03-api-design/SKILL.md) | REST, GraphQL, gRPC, contracts, errors, pagination, and evolution |
| [04 Database Design](04-database-design/SKILL.md) | Schemas, indexes, transactions, replication, sharding, and datastore choice |
| [05 Authentication and Security](05-authentication-security/SKILL.md) | Identity, authorization, OAuth/OIDC, validation, secrets, and OWASP risks |
| [06 Scalability and Performance](06-scalability-performance/SKILL.md) | Scaling, cache layers, rate limits, background work, and load testing |
| [07 Multi-tenant SaaS](07-multi-tenant-saas/SKILL.md) | Tenant isolation, placement, identity context, metering, and noisy neighbors |
| [08 Real-time and Event-driven](08-realtime-event-driven/SKILL.md) | WebSocket/SSE choices, events, delivery semantics, and broker selection |
| [09 Testing and Quality](09-testing-quality/SKILL.md) | Test portfolios, TDD, integration environments, load tests, and CI |
| [10 DevOps and Deployment](10-devops-deployment/SKILL.md) | Delivery pipelines, containers, trunk-based work, and observability |

## Suggested workflow

1. State the workload, users, data sensitivity, availability target, latency target, and expected growth.
2. Use system design to establish constraints; then apply architecture, API, database, and security guidance.
3. Add multi-tenancy or real-time guidance only when the product requires it.
4. Define testing, performance, deployment, and observability before production release.
5. Record decisions and rejected alternatives in architecture decision records; revisit them when constraints change.

These skills contain defaults, not universal laws. Prefer the simplest design that satisfies measured requirements, and verify consequential choices against the linked primary sources.
