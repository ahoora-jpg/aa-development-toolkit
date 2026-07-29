# AA Development OS Manifest

## Purpose

AA Development OS is the central source of truth for reusable development standards, approved patterns, prompts, components, templates, and technical decisions used across current and future projects.

## Core Principles

1. Production-ready over experimental.
2. Reusable over project-specific.
3. Documented over implicit.
4. Maintainable over clever.
5. Accessible, secure, performant, and SEO-friendly by default.
6. Existing project architecture must be inspected before structural changes are proposed.
7. Approved internal patterns should be reused before new solutions are introduced.
8. No framework migration unless explicitly requested.
9. Each implementation should follow the shortest safe and verifiable path.
10. Unverified or temporary code must not enter the approved library.

## Repository Statuses

Every reusable asset should have one of these statuses:

- Draft
- Review
- Approved
- Deprecated

Only Approved assets are considered default choices for production projects.

Installable packages under `skills/` use successful repository validation as
their readiness gate rather than a `Status:` line inside `SKILL.md`. Planned
top-level libraries may continue to state Draft, Review, Approved, or
Deprecated in their local documentation.

## Scope

This repository may contain:

- Development rules
- Coding standards
- UI/UX standards
- WordPress and WooCommerce standards
- Frontend architecture
- Accessibility, SEO, security, and performance checklists
- Reusable components and snippets
- Animation patterns
- AI prompts and skills
- Project templates and starters
- Curated external references

## Source Policy

External code and references must include:

- Original source
- License, when available
- Dependencies
- Supported environments
- Adaptation notes
- Approval status

Code must not be copied into production projects without reviewing compatibility, accessibility, performance, security, and licensing.

## Decision Priority

When standards conflict, use this priority:

1. Project requirements
2. Security
3. Accessibility
4. Correctness
5. Maintainability
6. Performance
7. SEO
8. Visual polish
9. Developer convenience

## Working Method

Work should be delivered in small, verifiable steps.

Each technical change should state:

- Exact file path
- Exact change
- Reason for the change
- Verification method
- Rollback method when risk exists

## Ownership

AA Development OS is a living system. Standards may evolve, but important changes must be documented and version-controlled through Git.
