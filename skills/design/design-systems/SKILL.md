# Design Systems

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to tie every other design skill in this toolkit into one coherent, reusable system — design tokens, components, and documentation — rather than one-off decisions repeated inconsistently across pages. This file sits on top of `skills/design/branding/`, `skills/ui-ux/typography-color-2026/`, `skills/design/grid-layout-systems/`, and `skills/design/iconography/`.

## Key Sources

### IBM Carbon Design System

Repository:
https://github.com/carbon-design-system/carbon

License: Apache-2.0

Notes: A mature, fully open-source, token-driven design system — widely cited as a masterclass in structuring design tokens, component architecture, and accessibility at scale.

### Radix Primitives

Repository:
https://github.com/radix-ui/primitives

License: MIT

Notes: Unstyled, fully accessible component primitives (dialogs, dropdowns, tooltips) that handle the hard accessibility/keyboard-interaction logic, meant to be styled to match any brand's visual system rather than used as-is — a strong foundation layer for a custom design system. Already referenced indirectly via Radix Colors in `skills/ui-ux/typography-color-2026/`.

### shadcn/ui

Site/Repository:
https://ui.shadcn.com

Notes: A "copy-paste, you own the code" component collection built on Radix primitives and Tailwind CSS — rather than installing it as a locked dependency, components are copied into the project and customized directly, which suits a small team that wants full control without building every accessible interaction from scratch.

## Core Concepts To Apply

- **Design tokens as the foundation**: define color, spacing, typography, and radius values once as named tokens (not raw hex codes or pixel values scattered through code), matching the color system in `skills/ui-ux/typography-color-2026/` and the spacing scale in `skills/design/grid-layout-systems/` — every component references tokens, never hardcoded values.
- **Start small, grow from real repetition**: begin with a UI audit of actually-recurring components (buttons, form fields, cards) rather than building a large speculative system upfront — a design system earns its cost once the same component has been rebuilt more than once.
- **Don't adopt a large system wholesale**: a system built for a company at Shopify's or IBM's scale carries constraints and complexity that don't fit a small project — borrow architecture and token patterns from mature open systems (Carbon, Polaris) rather than importing them as a dependency to run as-is.
- **Separate primitives from visual styling**: use accessible, unstyled behavior primitives (Radix) for complex interactive components (dropdowns, modals, tooltips) and apply the project's own visual system on top — this avoids re-solving keyboard navigation and ARIA behavior from scratch while keeping the visual result fully custom.
- **Documentation as part of the system, not an afterthought**: document not just what each component looks like but when and how to use it (content/voice guidelines, as Shopify Polaris does) — a system with only visual specs and no usage guidance tends to be applied inconsistently anyway.
- **Governance**: decide who can add/change a component and how changes propagate, even informally for a small team — without this, a design system drifts back into one-off inconsistency within a few months.

## When To Use

Start building the system once brand strategy (`skills/design/branding/`), grid/spacing (`skills/design/grid-layout-systems/`), and an icon set (`skills/design/iconography/`) are decided — the design system is where those decisions get encoded into reusable tokens and components for every future page and feature.

## External Sources

All sources above are external, actively maintained open-source projects — link to them rather than duplicating their content, and periodically re-check current best practice, since design-system tooling (e.g. Shopify's shift from Polaris React to Polaris Web Components in 2025) continues to evolve.
