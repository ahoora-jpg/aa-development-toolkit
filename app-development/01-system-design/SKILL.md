---
name: 01-system-design
description: Design production application systems by reasoning about capacity, availability, consistency, caching, replication, sharding, load balancing, and asynchronous work. Use when defining a new architecture, evaluating bottlenecks, or documenting distributed-system tradeoffs.
---

# System Design

## Overview

Turn product requirements into an operable system with explicit limits. Begin with traffic, data volume, latency, availability, durability, compliance, and cost targets. Prefer a simple modular system until evidence justifies distribution; every network boundary adds partial failure, latency, coordination, and observability work.

## Key Concepts

- **Performance and scalability:** Performance is response time or throughput at a given load. Scalability is how effectively capacity grows as resources are added. Track percentiles such as p95/p99, not averages alone.
- **Capacity model:** Estimate peak reads/writes, concurrent work, payload size, storage growth, bandwidth, and hot-key concentration. Write assumptions and add safety margin.
- **Availability and reliability:** Define service-level indicators and objectives. Design recovery objectives, redundancy, graceful degradation, and an error budget appropriate to business impact.
- **Consistency:** CAP applies during a network partition: a distributed operation must trade immediate consistency against availability. Choose guarantees per workflow; money and uniqueness often need stronger coordination than feeds or analytics.
- **Load balancing:** Distribute work using health checks and an algorithm suited to the workload. Keep application instances stateless where practical; make retries safe.
- **Caching:** Place caches at client, edge, application, or database layers. Define key, ownership, TTL, invalidation, stampede protection, and acceptable staleness before implementation.
- **Replication and sharding:** Replication improves read capacity and resilience but introduces lag and failover concerns. Sharding increases write/storage capacity but complicates routing, joins, rebalancing, and global constraints.
- **Queues and streams:** Decouple slow or bursty work. Assume duplicate delivery unless the platform proves otherwise; use idempotency, bounded retries, dead-letter handling, and backlog monitoring.

## Best Practices

- Draw the request path, trust boundaries, state owners, synchronous dependencies, and failure paths.
- Set timeouts at every remote call; use exponential backoff with jitter and a retry budget.
- Prevent retry amplification with idempotency keys, circuit breaking, load shedding, and concurrency limits.
- Define degradation modes: stale reads, reduced features, queued writes, or explicit unavailability.
- Measure saturation, queue depth, errors, traffic, and latency; test failover and recovery rather than assuming them.
- Keep a single source of truth for each invariant. Treat derived stores, indexes, and caches as rebuildable.

## Common Pitfalls

- Designing for imaginary hyperscale while ignoring current operability and delivery speed.
- Treating horizontal scaling as automatic when the database, locks, or external APIs remain serial bottlenecks.
- Adding a cache without an invalidation contract or using a queue without backpressure.
- Assuming exactly-once business effects from an at-least-once transport.
- Using active-active architecture without resolving conflicts and testing regional failure.
- Omitting cost, data residency, deployment, migration, and rollback from the design.

## When To Use

Use this skill before major application architecture decisions, capacity changes, reliability reviews, or decomposition into distributed services. For a small application, use it to document why a modular monolith and one primary database are sufficient. Escalate complexity only when measured load, organizational boundaries, availability needs, or isolation constraints require it.

## Further Reading

See the curated [source register](sources.md).
