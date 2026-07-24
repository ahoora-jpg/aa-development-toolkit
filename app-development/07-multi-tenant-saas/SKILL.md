---
name: 07-multi-tenant-saas
description: Design multi-tenant SaaS systems with explicit tenant identity, data and compute isolation, placement, noisy-neighbor controls, metering, and tenant-aware operations. Use when one product instance serves multiple customer organizations.
---

# Multi-tenant SaaS

## Overview

Multi-tenancy is an isolation and operating model, not merely a `tenant_id` column. Carry verified tenant context from identity through authorization, storage, caches, queues, logs, metrics, billing, and support tooling. Choose isolation per resource and tier; hybrid models are normal.

## Key Concepts

- **Shared database/shared schema:** Lowest operational overhead and efficient pooling. Every tenant-owned key, query, uniqueness rule, index, and cache key must include tenant scope.
- **Shared database/schema per tenant:** Stronger namespace separation and customizability, with more migrations, connections, catalog growth, and operational complexity.
- **Database per tenant:** Strong isolation, restore, residency, and placement controls, at higher provisioning and fleet-management cost.
- **Silo versus pool:** Isolation choices apply separately to compute, storage, queues, encryption keys, networking, and observability. A tenant can be pooled in one layer and siloed in another.
- **Tenant identity:** Bind authenticated user/service identity to allowed tenant memberships. Resolve tenant context server-side; never trust an arbitrary tenant header without authorization.
- **Noisy neighbors:** Control per-tenant concurrency, quotas, rate, storage, queue share, and expensive query shapes; measure resource use by tenant.
- **Lifecycle:** Onboarding, plan changes, suspension, migration, export, deletion, and offboarding are automated workflows with audit and recovery requirements.

## Best Practices

- Define an isolation matrix for every layer, threat, tenant tier, and compliance requirement.
- Use tenant-scoped repository interfaces and database policies as defense in depth; test cross-tenant denial continuously.
- Include tenant context in jobs and events, validate it at consumption, and prevent cross-tenant cache-key collisions.
- Emit tenant-aware usage and reliability metrics while restricting sensitive dimensions and cardinality.
- Build a placement catalog so tenant location and isolation can evolve without changing product semantics.
- Automate tenant provisioning and migrations; use canary cohorts, progress tracking, and resumable operations.
- Support per-tenant throttling, fairness, and cost attribution before large customers arrive.

## Common Pitfalls

- Accepting `tenant_id` directly from the request body and using it as authorization.
- Applying tenant filters in most queries rather than making unscoped access difficult by construction.
- Forgetting files, search indexes, backups, analytics, logs, webhooks, or background jobs in the isolation model.
- Creating one schema or database per tenant without fleet-wide migration and connection plans.
- Letting a global admin or support tool bypass audit, purpose limitation, and scoped access.
- Promising hard isolation while pooling the actual bottleneck without quotas.

## When To Use

Use this skill when customers are organizations, workspaces, stores, or projects that must not see each other's data. Shared-schema pooling is a practical default for many products; choose stronger isolation for regulation, residency, customer-managed keys, restore independence, extreme workload variance, or contractual requirements.

## Further Reading

See the curated [source register](sources.md).
