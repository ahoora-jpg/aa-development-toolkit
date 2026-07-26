# Real-Time & Event-Driven Architecture

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to build features that need live updates (chat, notifications, dashboards) and how to structure services around events rather than direct calls, for looser coupling at scale.

## Key Sources

### Awesome Software Architecture — Event-Driven Architecture

Repository:
https://github.com/mehdihadeli/awesome-software-architecture/blob/main/docs/event-driven-architecture.md

Notes: Curated articles and talks specifically on event-driven design, including outbox pattern, event sourcing, and practical Kafka-based integration examples.

### AsyncAPI Specification

Site:
https://www.asyncapi.com

Notes: Standard way to document event-driven/async APIs (topics, message schemas, protocols) — the event-driven equivalent of OpenAPI, referenced in 03-api-design.

## Core Concepts To Apply

- **Choosing a live-update mechanism**:
  - *WebSockets*: full-duplex, best for chat, collaborative editing, anything needing low-latency two-way communication.
  - *Server-Sent Events (SSE)*: simpler than WebSockets, one-way (server to client), good fit for live feeds/notifications/dashboards that don't need the client to push back.
  - *Polling*: simplest to implement, acceptable when near-real-time (a few seconds of delay) is fine and traffic is low — don't reach for WebSockets by default if polling meets the actual requirement.
- **Event-driven architecture basics**: services publish events ("OrderPlaced," "PaymentFailed") to a broker instead of calling each other directly; other services subscribe to the events they care about. This decouples services so one going down doesn't cascade-fail the others, at the cost of eventual (not immediate) consistency.
- **Message brokers, conceptually**: Kafka (high-throughput event log, good for streaming/analytics and replay), RabbitMQ (traditional message queue, good for task distribution and simpler routing), NATS (lightweight, low-latency, good for simple pub/sub at smaller scale). Pick based on required throughput and whether you need message replay, not by default habit.
- **Outbox pattern**: when a service needs to update its database and publish an event atomically, write the event to an "outbox" table in the same transaction as the data change, then a separate process publishes from the outbox — avoids the classic bug where the DB write succeeds but the event publish fails (or vice versa).
- **Idempotent consumers**: any service consuming events must handle receiving the same event twice (brokers generally guarantee at-least-once delivery, not exactly-once) — design event handlers to be safe to run twice.

## When To Use

Reach for real-time transport only for features that genuinely need it (chat, live collaboration, live dashboards); reach for event-driven service communication when multiple services need to react to the same business event without tight coupling — not as a default for every internal call.

## External Sources

Both sources above are external, actively maintained — link to them rather than duplicating their content here.
