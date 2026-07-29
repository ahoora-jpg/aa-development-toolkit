---
name: 06-scalability-performance
description: Scale application workloads with measurement-led capacity planning, caching, rate limiting, queues, concurrency control, and load testing. Use when latency, throughput, traffic growth, or resource saturation needs deliberate engineering.
---

# Scalability and Performance

## Overview

Performance work begins with a user-visible objective and measured bottleneck. Establish a baseline, load shape, latency percentiles, error rate, and saturation point before changing architecture. Optimize the constrained resource and preserve correctness under overload.

## Key Concepts

- **Vertical and horizontal scaling:** Larger machines are simple but bounded; more instances improve elasticity and resilience when state and coordination permit. Most systems use both.
- **Caching layers:** Browser/client, CDN, reverse proxy, application, and datastore caches solve different problems. Track hit rate, origin load, object size, eviction, freshness, and invalidation.
- **Rate limiting:** Token bucket supports bursts; leaky bucket smooths work; fixed or sliding windows enforce quotas. Scope limits by authenticated identity, tenant, operation, and resource cost—not IP alone.
- **Asynchronous work:** Queues absorb bursts and move non-interactive work off the request path. Throughput still requires bounded consumers, backpressure, idempotency, retry policy, and backlog objectives.
- **Concurrency and contention:** Locks, connection pools, hot keys, serialized workflows, and downstream quotas often cap scale before CPU does.
- **Load testing:** Model realistic arrival rates, datasets, cache state, payloads, and dependencies. Distinguish smoke, average-load, stress, spike, and soak tests.

## Best Practices

- Define latency and availability SLOs per critical journey; correlate them with resource and dependency metrics.
- Profile before optimizing and repeat the same test after each change.
- Cache only data with an explicit freshness contract; use request coalescing, jittered TTLs, and stale-while-revalidate where suitable.
- Apply admission control early, return clear retry guidance, and reserve capacity for health and recovery traffic.
- Autoscale on a signal linked to bottleneck—queue age, concurrency, or saturation—not CPU by habit.
- Test beyond expected peak until the system fails; verify graceful degradation and recovery after load stops.
- Include database connections, third-party quotas, cost, and regional capacity in the model.

## Common Pitfalls

- Reporting average latency while tail latency and errors are unacceptable.
- Running load generators on the system under test or with insufficient generator capacity.
- Warming all caches unrealistically or testing only a tiny, nonrepresentative dataset.
- Adding replicas when writes, locks, or an external dependency are the bottleneck.
- Retrying throttled work without jitter or budget, creating a self-sustaining overload loop.
- Scaling consumers without protecting the database or downstream service they feed.

## When To Use

Use this skill when setting launch capacity, diagnosing slow requests, preparing for traffic events, or establishing scaling policy. Do not wait for production pain: run representative tests before release. Keep a simple architecture when it meets objectives with safe headroom.

## Further Reading

See the curated [source register](sources.md).
