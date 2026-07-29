---
name: 10-devops-deployment
description: Establish safe application delivery with CI/CD, reproducible containers, trunk-based development, conventional commits, progressive deployment, rollback, and observability. Use when creating or improving build, release, deployment, or production operations.
---

# DevOps and Deployment

## Overview

Delivery is a repeatable path from reviewed source to observable production behavior. Automate the same immutable artifact through environments, keep changes small, make rollback or forward recovery routine, and measure user impact after deployment.

## Key Concepts

- **Continuous integration:** Developers integrate frequently; every change receives automated build, static analysis, test, security, and artifact checks.
- **Continuous delivery/deployment:** Delivery keeps an artifact releasable; deployment automatically releases qualifying changes. Approval policy should match risk and compliance.
- **Containers:** Build minimal, reproducible images from pinned inputs; run as non-root where possible; keep state outside the container; expose health separately from readiness.
- **Trunk-based development:** Short-lived branches and small merges reduce integration inventory. Incomplete behavior is controlled with safe feature flags, not long-lived divergence.
- **Commit conventions:** Consistent commit intent improves review and automation, but release behavior should not depend on wording without validation.
- **Deployment strategy:** Rolling, blue-green, and canary releases trade infrastructure cost, speed, and exposure. Database changes require expand-and-contract compatibility.
- **Observability:** Logs describe events, metrics quantify behavior, and traces connect requests. Service objectives and actionable alerts turn telemetry into operational decisions.

## Best Practices

- Build once, generate provenance and a dependency inventory, scan inputs, sign where appropriate, and promote the same digest.
- Keep credentials short-lived and environment-scoped; protect production with least privilege and audited controls.
- Use deterministic builds, dependency caching with integrity checks, and fast feedback before expensive jobs.
- Separate deploy from release with governed flags; define owners, expiry, and removal.
- Automate migrations as explicit steps; back up and rehearse recovery before destructive change.
- Deploy progressively, compare service-level and business signals, and halt or reverse automatically on material regression.
- Instrument request IDs, structured logs, RED/USE-style metrics, traces, deploy markers, and runbooks; alert on symptoms tied to objectives.

## Common Pitfalls

- Rebuilding artifacts per environment or deploying mutable tags such as `latest`.
- Baking secrets into source, CI output, image layers, or deployment manifests.
- Using a passing pipeline as proof of production health without post-deploy verification.
- Coupling an incompatible schema deletion to the application release that stops using it.
- Accumulating permanent feature flags and environment-specific snowflakes.
- Alerting on every metric threshold until operators ignore notifications.
- Performing rollback without considering irreversible data writes or migrations.

## When To Use

Use this skill for every production service, scaled to its risk. A small application still needs repeatable builds, tests, backups, least-privilege deployment, health checks, and basic telemetry. Add canaries, provenance controls, multi-region delivery, and formal approvals as impact and compliance increase.

## Further Reading

See the curated [source register](sources.md).
