---
name: 02-backend-architecture
description: Structure backend applications with clear domain boundaries, dependency inversion, modular architecture, and evidence-based service decomposition. Use when starting a backend, refactoring coupled code, or deciding between a modular monolith and microservices.
---

# Backend Architecture

## Overview

Architecture should make business changes safe and infrastructure replaceable. Organize code around capabilities and domain language, not framework folders alone. Keep domain rules independent from transport, persistence, and vendors; accept some pragmatic coupling when abstraction would add more cost than value.

## Key Concepts

- **Dependency direction:** Business policy must not depend on controllers, database clients, queues, or framework bootstrapping. Outer adapters implement ports owned by inner application code.
- **Clean, hexagonal, and onion architecture:** These names emphasize similar goals: stable domain/application logic at the center and replaceable delivery and infrastructure at the edges.
- **Domain-driven design:** Use bounded contexts to separate models with different meanings. Aggregates protect transactional invariants; repositories expose persistence needed by the domain, not generic database access.
- **SOLID in backend code:** Keep modules cohesive, extend behavior through stable seams, honor interface contracts, expose focused interfaces, and inject capabilities rather than constructing infrastructure inside domain logic.
- **Application workflow:** A use case validates authorization and orchestration, invokes domain behavior, persists changes transactionally, and publishes follow-up work safely.
- **Modular monolith versus microservices:** A modular monolith retains local calls and simpler operations. Microservices add independent deployment and scaling but require explicit contracts, distributed data ownership, and mature operations.

## Best Practices

- Define modules by business capability; give each module an explicit public interface and private implementation.
- Keep transport DTOs, persistence records, and domain objects distinct where their concerns diverge.
- Put authorization and transactional boundaries at application-service entry points.
- Make side effects explicit. Use an outbox or equivalent pattern when a database change and event publication must agree.
- Enforce boundaries with build rules, package visibility, dependency tests, and ownership.
- Extract a service only when a boundary is stable and there is a concrete need for independent deployment, scaling, isolation, or team autonomy.
- Record architectural decisions, migration steps, and rollback paths.

## Common Pitfalls

- Creating layers that only forward calls and obscure behavior.
- Treating DDD as a requirement for every CRUD feature.
- Sharing database tables across services, which preserves coupling while adding network failure.
- Building distributed transactions around poorly chosen service boundaries.
- Splitting services by technical layer or entity instead of business capability.
- Creating generic abstractions before two or more real implementations establish the common shape.

## When To Use

Use this skill when a backend has growing business rules, multiple delivery channels, or infrastructure likely to change. Start with a modular monolith for most new products. Use microservices when independent lifecycle or isolation creates enough value to pay for contracts, observability, deployment automation, and distributed failure handling.

## Further Reading

See the curated [source register](sources.md).
