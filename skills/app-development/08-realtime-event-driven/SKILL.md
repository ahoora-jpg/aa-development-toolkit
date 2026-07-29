---
name: 08-realtime-event-driven
description: Design real-time delivery and event-driven systems using WebSockets, server-sent events, polling, pub/sub, durable messaging, and broker tradeoffs. Use for live updates, background integration, event contracts, or asynchronous service communication.
---

# Real-time and Event-driven Systems

## Overview

Separate the need for immediate client updates from the need for asynchronous service integration. Choose the least complex transport that meets direction, latency, delivery, ordering, retention, and scale requirements. Design business effects to tolerate duplicates and delayed or reordered messages.

## Key Concepts

- **Polling:** Ordinary HTTP requests are simple, cacheable, observable, and resilient through intermediaries. Use conditional or long polling when update frequency is modest.
- **Server-sent events:** SSE provides a browser-friendly, one-way server-to-client stream over HTTP with reconnection semantics. Commands still use normal HTTP.
- **WebSockets:** A persistent full-duplex channel suits chat, collaboration, games, and high-frequency bidirectional interaction. It requires connection lifecycle, authentication refresh, heartbeats, backpressure, fan-out, and reconnect state.
- **Events and commands:** A command asks an owner to perform work; an event records a fact that occurred. Events should use durable identifiers, schema versions, occurrence time, producer, and correlation/causation data.
- **Pub/sub and queues:** Pub/sub distributes messages to interested consumers; work queues distribute tasks among workers. Durability, replay, ordering, and acknowledgment vary by product.
- **Delivery semantics:** At-most-once may lose; at-least-once may duplicate. "Exactly once" is scoped and rarely guarantees exactly one external business effect.
- **Broker shape:** Kafka emphasizes durable partitioned logs and replay; RabbitMQ emphasizes flexible routed queues and acknowledgments; NATS emphasizes simple, low-latency messaging with JetStream adding persistence.

## Best Practices

- Choose protocol and broker from explicit requirements, not popularity.
- Publish events only after authoritative state commits; use a transactional outbox or change-data mechanism when required.
- Make consumers idempotent with stable message IDs and atomic deduplication/business updates.
- Define schema ownership, compatibility rules, retention, partition key, ordering scope, and sensitive-data policy.
- Bound retry count and age; use exponential backoff, poison-message quarantine, and replay tooling.
- Monitor consumer lag, queue age, redelivery, dead letters, connection count, fan-out latency, and dropped messages.
- Authenticate subscriptions and authorize every channel/topic; revalidate long-lived access when membership changes.

## Common Pitfalls

- Using WebSockets for infrequent notifications that polling or SSE handles more reliably.
- Assuming global ordering from a partitioned broker.
- Publishing database-derived events before the transaction commits.
- Retrying permanent failures forever or treating a dead-letter queue as resolution.
- Sharing internal event schemas as public contracts without lifecycle control.
- Including large mutable payloads or sensitive data in widely replicated events.
- Building request/response RPC over a broker without timeouts, ownership, and failure semantics.

## When To Use

Use polling for low-frequency or cache-friendly updates, SSE for predominantly server-to-browser streams, and WebSockets for genuine bidirectional low-latency sessions. Use durable events when producers and consumers need temporal decoupling, replay, or independent scaling; retain synchronous calls where an immediate authoritative answer is required.

## Further Reading

See the curated [source register](sources.md).
