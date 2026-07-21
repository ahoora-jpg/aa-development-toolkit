# Development Rules

Status: Approved  
Version: 1.0.0  
Last reviewed: 2026-07-22

## 1. Working Principles

- Use the shortest safe path to a production-ready result.
- Work in small, verifiable steps.
- Inspect the existing architecture before changing it.
- Do not rewrite stable systems without a clear benefit.
- Do not migrate frameworks unless explicitly requested.
- Prefer maintainable solutions over clever solutions.
- Reuse approved internal patterns before creating new ones.
- Keep project-specific code outside the reusable library.

## 2. Quality Requirements

Every production implementation must consider:

- Correctness
- Security
- Accessibility
- Maintainability
- Performance
- SEO
- Browser compatibility
- Responsive behavior
- User experience

## 3. Change Requirements

Every meaningful change should include:

- Exact file path
- Exact implementation
- Reason for the change
- Verification method
- Possible risks
- Rollback method when necessary

## 4. Code Rules

- Use clear and descriptive names.
- Keep functions focused on one responsibility.
- Avoid unnecessary dependencies.
- Avoid duplicated logic.
- Remove dead and temporary code.
- Validate and sanitize external input.
- Escape output according to its context.
- Never store secrets in source control.
- Add comments only when they explain intent or a non-obvious decision.

## 5. Architecture Rules

- Preserve separation of concerns.
- Prefer existing project conventions.
- Avoid global state where possible.
- Do not introduce a build system unless the project benefits from it.
- Do not add libraries without documenting their purpose.
- Prefer progressive enhancement.
- Keep integrations removable and isolated.

## 6. UI and UX Rules

- Use semantic HTML.
- Design mobile-first unless project requirements differ.
- Maintain visible keyboard focus.
- Support keyboard navigation.
- Respect reduced-motion preferences.
- Avoid animation that blocks interaction.
- Keep content readable and navigation predictable.
- Visual polish must not reduce usability or performance.

## 7. WordPress Rules

- Follow WordPress APIs and coding conventions.
- Do not modify WordPress core.
- Keep theme, plugin, and content responsibilities separate.
- Enqueue scripts and styles through WordPress APIs.
- Escape output and sanitize input.
- Use nonces and capability checks for protected actions.
- Preserve compatibility with the existing theme architecture.
- Do not convert classic WordPress projects to React unless explicitly requested.

## 8. External Code Rules

Before external code enters the approved library, record:

- Original source
- Author, when available
- License
- Dependencies
- Framework requirements
- Supported environments
- Accessibility considerations
- Performance considerations
- Adaptation notes
- Approval status

External code must be reviewed before production use.

## 9. Repository Asset Status

Every reusable item must use one of these statuses:

- Draft
- Review
- Approved
- Deprecated

Only Approved items are default production choices.

## 10. Definition of Done

A task is complete only when:

- The implementation works.
- Relevant errors are resolved.
- The result has been verified.
- Temporary code has been removed.
- Important decisions are documented.
- No secrets or private data are committed.
