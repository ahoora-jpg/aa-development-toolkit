---
name: 03-api-design
description: Design evolvable REST, GraphQL, and gRPC interfaces with consistent resources, contracts, errors, pagination, idempotency, and security. Use when creating or reviewing an API or choosing an interaction protocol.
---

# API Design

## Overview

An API is a long-lived contract, not a controller layout. Design from consumer tasks and domain semantics, specify behavior before implementation, and make compatibility, errors, authorization, observability, and lifecycle part of the contract.

## Key Concepts

- **REST:** Model stable resources with nouns and use HTTP methods, status codes, content negotiation, caching, and conditional requests according to their semantics.
- **GraphQL:** A typed graph lets clients select connected data. It suits varied read shapes, but requires resolver authorization, query-cost limits, batching, and careful cache design.
- **gRPC:** Protobuf contracts and streaming work well for controlled service-to-service systems. Browser reach, human readability, and public compatibility may favor HTTP/JSON instead.
- **Versioning:** Prefer additive evolution. Reserve breaking versions for semantic incompatibility; define support and retirement policy rather than embedding dates or versions without governance.
- **Pagination:** Use stable cursor pagination for changing or large collections. Specify ordering, tie-breakers, page-size limits, continuation-token opacity, and filtering interaction.
- **Errors:** Return a stable machine-readable type/code, human detail, instance or correlation identifier, and field violations where safe. RFC 9457 is the HTTP problem-detail standard.
- **Idempotency:** Safe methods must remain safe. For retryable commands, accept a scoped idempotency key and persist the outcome long enough to prevent duplicate effects.

## Best Practices

- Maintain an OpenAPI, GraphQL schema, or protobuf definition as a reviewed contract.
- Use consistent naming, timestamps with explicit offsets, enumerations, nullability, and money/unit representations.
- Validate syntax and business constraints at the boundary, but enforce invariants in the owning domain.
- Authenticate the caller and authorize the requested object, fields, and operation on every request.
- Bound payloads, filters, page sizes, query depth/cost, execution time, and concurrency.
- Emit correlation data and privacy-safe metrics; never expose stack traces or secrets.
- Run compatibility and consumer-contract checks in CI; publish deprecation signals and migration instructions.

## Common Pitfalls

- Mirroring database tables instead of consumer workflows.
- Returning `200 OK` for every outcome or inventing inconsistent error shapes.
- Offset pagination over fast-changing, large datasets without accepting duplicates or skips.
- Breaking clients by renaming fields, narrowing accepted input, or changing defaults.
- Treating GraphQL as automatic performance optimization or gRPC as appropriate for all public clients.
- Relying on an API gateway for object-level authorization that only the service can evaluate.

## When To Use

Choose REST for broad interoperability and resource-oriented public APIs; GraphQL for diverse client-driven read graphs under strong governance; gRPC for efficient typed calls and streams between controlled services. Mix styles only where each boundary has a clear owner, operational model, and documented reason.

## Further Reading

See the curated [source register](sources.md).
