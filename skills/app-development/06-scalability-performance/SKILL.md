# Scalability & Performance

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Practical techniques for keeping an application fast and stable as user count and data volume grow, plus how to measure whether it's actually working.

## Key Sources

### Awesome Scalability

Repository:
https://github.com/ci-ai/scalability

Notes: Same source as in 01-system-design — organized by concrete problem/pattern (caching, load balancing, message queues, database scaling), useful as a lookup table once a specific bottleneck is identified.

### k6 (load testing)

Repository:
https://github.com/grafana/k6

Notes: Open-source, developer-friendly load testing tool (scripts in JavaScript) for simulating real user traffic against an API before it hits production load — the standard way to verify a scalability change actually helped.

## Core Concepts To Apply

- **Measure before optimizing**: use load testing (k6, or similar) and real production metrics to find the actual bottleneck before making architectural changes — most performance problems are in one specific slow query or endpoint, not "the whole system."
- **Horizontal over vertical scaling**: design the app to run multiple stateless instances behind a load balancer rather than relying on one bigger server — this is what makes scaling (and failover) possible.
- **Caching layers**: application-level cache (Redis) for expensive computed/queried data; CDN for static assets and cacheable API responses; set explicit TTLs and an invalidation strategy, not just "cache everything forever."
- **Asynchronous/queue-based processing**: move slow or bursty work (emails, notifications, image/video processing, report generation) off the request path onto a background queue (e.g. Redis-backed job queue, RabbitMQ, SQS) so user-facing requests stay fast under load.
- **Rate limiting & backpressure**: protect the system from being overwhelmed by a traffic spike or abusive client by capping request rates and failing gracefully (clear error, retry-after header) rather than falling over.
- **Database connection pooling**: reuse database connections instead of opening a new one per request — a frequent, easy-to-miss scaling bottleneck.

## When To Use

Apply once real usage data exists — don't build for a scale the product doesn't have yet, but do build the app so scaling later (adding instances, adding a cache, adding a queue) doesn't require a rewrite.

## External Sources

Both sources above are external, actively maintained projects — link to them rather than duplicating their content here.
