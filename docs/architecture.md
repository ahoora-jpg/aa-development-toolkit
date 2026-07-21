# Architecture Standards

Status: Approved  
Version: 1.0.0

## Core Principles

- Inspect the existing architecture before proposing changes.
- Prefer incremental improvement over full rewrites.
- Keep concerns separated.
- Keep integrations isolated and removable.
- Avoid unnecessary global state.
- Prefer explicit dependencies.
- Reuse approved patterns before creating new ones.

## Change Policy

Structural changes require:

- A clear problem statement
- Expected benefit
- Migration impact
- Compatibility review
- Verification plan
- Rollback plan

## Framework Policy

- Do not migrate frameworks unless explicitly requested.
- Do not introduce a build system without measurable benefit.
- Do not convert classic WordPress projects to React by default.
- Use the smallest suitable technical solution.

## Project Boundaries

Keep these responsibilities separate when possible:

- Content
- Presentation
- Business logic
- Data access
- Integrations
- Build tooling
- Deployment configuration

## External Integrations

Each integration should document:

- Purpose
- Entry points
- Configuration
- Failure behavior
- Security considerations
- Removal procedure
