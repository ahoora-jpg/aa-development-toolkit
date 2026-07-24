---
name: 04-database-design
description: Design durable application data models, indexes, transactions, replication, and partitioning while choosing SQL or NoSQL from access and consistency needs. Use when modeling data, diagnosing query behavior, or planning database growth.
---

# Database Design

## Overview

Design data around invariants, access patterns, retention, and failure recovery. Select a datastore for required semantics and operational maturity, not trend. A clear relational model is a strong default; introduce specialized stores when a measured workload needs their model or scaling characteristics.

## Key Concepts

- **Relational modeling:** Define entities, stable identifiers, relationships, constraints, ownership, and lifecycle. Use database constraints to protect invariants that must survive every code path.
- **Normalization:** Normalize transactional data to remove update anomalies; denormalize deliberately for proven read paths with a synchronization strategy.
- **Indexes:** Index selective predicates, joins, uniqueness, and common orderings. Column order matters. Every index consumes storage and increases write and maintenance cost.
- **Transactions:** ACID describes atomicity, consistency, isolation, and durability. Select the weakest isolation that still protects the workflow, and handle deadlocks or serialization failures with bounded retries.
- **SQL versus NoSQL:** Relational systems favor joins, constraints, and flexible transactions. Document, key-value, wide-column, graph, and search stores favor particular access patterns; they do not remove schema or consistency design.
- **Replication:** Replicas improve availability and reads but create lag, failover, and read-your-write decisions.
- **Sharding:** Partition by a stable key with good cardinality and locality. Plan routing, resharding, hotspots, global uniqueness, cross-shard operations, and tenant movement.
- **ACID and BASE:** BASE is a loose description of systems accepting temporary inconsistency. State concrete guarantees—such as causal, eventual, or read-your-write—instead of using the acronym as a design.

## Best Practices

- Write invariants and primary queries before choosing tables, documents, or indexes.
- Use migrations that are versioned, reversible where practical, and compatible during rolling deployment.
- Inspect query plans with representative distributions; monitor slow queries, locks, connections, replication lag, and storage growth.
- Keep transactions short and avoid remote calls while locks are held.
- Back up automatically, encrypt data and transport, test point-in-time restore, and measure recovery objectives.
- Separate authoritative data from derived caches, search indexes, analytics, and event projections.
- Minimize sensitive data, define retention/deletion, and verify replicas and backups follow the same policy.

## Common Pitfalls

- Adding indexes for every column or trusting indexes without checking plans.
- Using application checks where a unique, foreign-key, or check constraint is required.
- Reading asynchronously replicated data immediately after a write without a consistency strategy.
- Choosing a document store to avoid modeling relationships that remain relational.
- Sharding before exhausting schema, query, index, hardware, replica, and partitioning improvements.
- Running destructive migrations in one step with no compatibility window or recovery rehearsal.

## When To Use

Use this skill whenever an application owns durable state. Start with a well-operated relational database when requirements are uncertain. Add a specialized datastore only when its access model, latency, scale, or search/graph capability has a documented advantage and the team can operate it.

## Further Reading

See the curated [source register](sources.md).
