# API Design

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Conventions for designing APIs that are predictable, easy to consume, and safe to evolve over time — mainly REST, with guidance on when GraphQL or gRPC is a better fit.

## Key Sources

### OpenAPI Specification

Repository:
https://github.com/OAI/OpenAPI-Specification

Notes: The industry-standard specification for describing REST APIs, maintained by the OpenAPI Initiative (Linux Foundation). Use it to document any REST API this toolkit produces, even informally.

### AsyncAPI

Repository:
https://github.com/asyncapi/spec

Notes: The equivalent specification for event-driven and asynchronous APIs (WebSockets, message queues) — relevant once an API moves beyond simple request/response.

## Core Concepts To Apply

- **Resource-oriented URLs**: nouns, not verbs — `/orders/123`, not `/getOrder?id=123`. Use HTTP methods (GET, POST, PUT, PATCH, DELETE) to express the action.
- **Versioning**: version the API from day one (e.g. `/v1/...` or a version header) so breaking changes don't break existing consumers.
- **Pagination**: never return an unbounded list — use cursor-based or offset-based pagination with a sane default page size.
- **Consistent error format**: a single, predictable error shape (e.g. `{ "error": { "code": "...", "message": "..." } }`) across every endpoint, with correct HTTP status codes.
- **Idempotency**: PUT and DELETE should be safe to retry; for POST operations that must not double-execute (e.g. payments), support an idempotency key.
