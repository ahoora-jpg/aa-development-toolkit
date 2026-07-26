# Backend Architecture

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to structure application code so it stays maintainable as it grows: layering, separation of concerns, and when to split a monolith into services.

## Key Sources

### Awesome Software Architecture

Repository:
https://github.com/mehdihadeli/awesome-software-architecture

Notes: Actively maintained, broad curated list covering clean architecture, hexagonal/onion architecture, domain-driven design (DDD), CQRS, event sourcing, and microservices — with a dedicated event-driven-architecture doc referenced separately in 08-realtime-event-driven.

### Awesome Backend

Repository:
https://github.com/zhashkevych/awesome-backend

Notes: Curated list of backend learning resources (books, courses, articles) organized by topic — databases, message queues, caching, testing, system design — useful as a broader map once the architecture basics are settled.

## Core Concepts To Apply

- **Layered / clean architecture**: separate business logic (domain) from framework/database/HTTP concerns, so the core logic can be tested and reused without spinning up a web server or database.
- **Domain-driven design (DDD), lightly applied**: model the code around real business concepts (Order, Invoice, User) rather than around database tables; use it as a mental model even without full DDD tooling.
- **Monolith-first**: start with a well-organized monolith (clear internal module boundaries) rather than microservices — split into services only when a specific team-scaling or deployment-scaling need appears. Premature microservices add operational cost without corresponding benefit.
- **SOLID principles applied practically**: single-responsibility per module/class, depend on interfaces not concrete implementations, so components can be swapped (e.g. swap the email provider) without touching business logic.

## When To Use

Reference this when starting a new service, when a monolith's codebase is becoming hard to navigate, or when deciding whether a feature deserves its own service.

## External Sources

Both sources above are external, actively maintained GitHub repositories — link to them rather than duplicating their content here.
