# System Design

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Core concepts for reasoning about how a large application should be shaped before writing code: scalability, reliability, and the standard building blocks (load balancers, caches, queues, replication, sharding). Use this before committing to a specific backend framework or database.

## Key Sources

### System Design Primer

Repository:
https://github.com/donnemartin/system-design-primer

Notes: The most widely used free reference for learning system design from scratch — covers scalability, availability, caching, load balancing, databases (SQL vs NoSQL, replication, sharding), and includes worked example designs (e.g. design a URL shortener, design Twitter).
Decision: Start here before anything else in this folder.

### Awesome System Design Resources

Repository:
https://github.com/ashishps1/awesome-system-design-resources

Notes: Actively maintained, curated collection of articles, videos, and real "how we scaled X" case studies from engineering blogs at major tech companies — good for seeing how the primer's concepts apply in production.

### Awesome Scalability

Repository:
https://github.com/ci-ai/scalability (originally binhnguyennus/awesome-scalability)

Notes: Focused specifically on scalability, availability, stability, and performance patterns, organized by problem (e.g. "how to handle a spike in traffic," "how to design for high availability").

## Core Concepts To Apply

- **Scalability vs performance**: performance is how fast one request is; scalability is how the system behaves as load grows. Optimize for the one your product actually needs.
- **CAP theorem**: under a network partition, choose consistency or availability — know which your app needs per feature (e.g. payments favor consistency, activity feeds favor availability).
- **Caching layers**: browser/CDN cache → application cache (e.g. Redis) → database query cache. Cache invalidation strategy matters more than the cache itself.
- **Load balancing**: distribute traffic across multiple app instances; pick algorithm (round robin, least connections) based on request cost variance.
- **Replication vs sharding**: replication copies the same data for read scaling and failover; sharding splits data across nodes for write scaling. Most apps need replication long before they need sharding.
- **Asynchronous processing**: push slow or non-critical work (emails, image processing, notifications) onto a queue instead of blocking the request/response cycle.

## When To Use

Revisit this file at the start of any new application, and again whenever a specific bottleneck (latency, throughput, cost) appears in production — don't pre-optimize for scale the product doesn't have yet.

## External Sources

All sources above are external, actively maintained GitHub repositories. Link to them rather than copying their content; they are updated more often than this file will be.
