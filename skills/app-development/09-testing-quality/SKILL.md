---
name: 09-testing-quality
description: Build a risk-based automated testing portfolio with unit, integration, contract, end-to-end, performance, and reliability tests that run effectively in CI. Use when defining quality strategy, implementing a feature, or stabilizing a release pipeline.
---

# Testing and Quality

## Overview

Tests provide evidence about risk. Build a portfolio with many fast, focused checks; enough real integration coverage to verify boundaries; and a small set of valuable end-to-end journeys. The goal is fast, trustworthy feedback and safe change—not a target percentage detached from behavior.

## Key Concepts

- **Unit tests:** Exercise a small behavior with controlled collaborators. They should be deterministic, fast, and focused on domain decisions rather than implementation trivia.
- **Integration tests:** Verify real boundaries such as databases, brokers, filesystems, and HTTP adapters. Disposable containers can provide production-like dependencies without shared mutable environments.
- **Contract tests:** Check that provider and consumer assumptions remain compatible independently of full end-to-end deployment.
- **End-to-end tests:** Validate a few critical journeys through deployed components. They give broad confidence but are slower and harder to diagnose.
- **TDD:** Red-green-refactor can clarify behavior and design: write a meaningful failing example, implement the smallest correct behavior, then improve structure while tests stay green.
- **Performance and reliability tests:** Load, stress, spike, soak, fault, migration, restore, and failover tests validate nonfunctional requirements and recovery.

## Best Practices

- Derive tests from acceptance criteria, invariants, threats, failure modes, and production incidents.
- Test observable behavior; avoid asserting private call order or duplicating the implementation.
- Control clocks, randomness, identifiers, and network behavior. Never hide nondeterminism with arbitrary sleeps.
- Create isolated data per test and clean it predictably; parallelize only when state boundaries are safe.
- Run lint/type/unit checks early, integration and contract checks next, and scarce end-to-end tests later.
- Quarantine a flaky test only with an owner, issue, evidence, and deadline; preserve failure artifacts.
- Track suite duration, failure rate, flake rate, escaped defects, and time to diagnose—not coverage alone.

## Common Pitfalls

- Mocking the database or framework so thoroughly that integration assumptions remain untested.
- Building a slow inverted pyramid dominated by browser-level tests.
- Chasing line coverage with assertions that do not protect behavior.
- Reusing shared accounts or fixed records across parallel CI jobs.
- Retrying failing tests globally, which converts signal into intermittent false confidence.
- Running load tests with unrealistic data, warm caches, or unconstrained test infrastructure.
- Treating snapshot approval as proof that business behavior is correct.

## When To Use

Use this skill during feature design, not only after implementation. Prioritize tests by impact and likelihood: unit-test dense business rules, integration-test system boundaries, contract-test independently deployed consumers/providers, and end-to-end-test critical user and operational journeys.

## Further Reading

See the curated [source register](sources.md).
