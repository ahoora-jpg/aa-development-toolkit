# Testing & Quality

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to build confidence that an application works and keeps working as it changes: what to test, at what level, and with what tools.

## Key Sources

### Awesome Testing

Repository:
https://github.com/awesomelistsio/awesome-testing

Notes: Actively maintained, curated list spanning unit/integration/e2e testing tools, accessibility testing (Lighthouse, Pa11y), mocking libraries, and coverage tools — organized by testing level, which maps directly onto the test-pyramid concept below.

### k6 (load/performance testing)

Repository:
https://github.com/grafana/k6

Notes: Same tool referenced in 06-scalability-performance — the standard open-source option for load testing an API before shipping a scalability-sensitive feature.

## Core Concepts To Apply

- **The testing pyramid**: many fast unit tests (test one function/class in isolation) → fewer integration tests (test how components work together, e.g. API + database) → few end-to-end tests (test a full user flow through the real UI). Invert this (mostly E2E, few unit tests) and the suite becomes slow and flaky.
- **Test the behavior, not the implementation**: tests should keep passing after an internal refactor that doesn't change observable behavior — testing internal implementation details makes the suite brittle and expensive to maintain.
- **TDD, used pragmatically**: write the test before the code for tricky business logic where the expected behavior is easy to state but easy to get wrong (edge cases, calculations); don't force it uniformly onto UI code where it doesn't fit as naturally.
- **CI-friendly by design**: tests must be deterministic (no reliance on real time, real network, or execution order) and fast enough to run on every pull request — a flaky or slow suite gets ignored, which defeats its purpose.
- **Load testing before scale-sensitive launches**: run a load test (k6 or similar) against any endpoint expected to take a traffic spike, before it happens in production, not after.

## When To Use

Apply from the first feature — retrofitting tests onto an untested codebase is far more expensive than writing them alongside the code. Prioritize test coverage on business-critical logic (payments, auth, data integrity) over boilerplate/UI code if time is limited.

## External Sources

Both sources above are external, actively maintained projects — link to them rather than duplicating their content here.
