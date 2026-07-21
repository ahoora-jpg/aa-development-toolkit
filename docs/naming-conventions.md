# Naming Conventions

Status: Approved  
Version: 1.0.0

## General

- Use descriptive names.
- Avoid unclear abbreviations.
- Use one language consistently within technical identifiers.
- Prefer names that describe purpose rather than implementation detail.

## Files and Folders

Use lowercase kebab-case by default:

- product-card
- checkout-form
- design-tokens.md
- git-workflow.md

Exceptions are allowed when required by a platform or language convention.

## Variables and Functions

Use the convention expected by the language or project:

- JavaScript: camelCase
- PHP: follow the active project or WordPress convention
- CSS custom properties: --kebab-case
- Classes: PascalCase when appropriate

## Constants

Use clear constant naming according to the language convention.

Examples:

- MAX_RETRY_COUNT
- DEFAULT_TIMEOUT
- SAFARI_HOME_VERSION

## Boolean Names

Prefer names that clearly indicate true or false:

- isActive
- hasAccess
- canSubmit
- shouldAnimate

## Avoid

- temp
- test2
- final-final
- data1
- newFile
- vague single-letter names outside small loops
