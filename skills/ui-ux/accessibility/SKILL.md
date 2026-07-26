# Accessibility

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Baseline accessibility practices so a website is usable by people with visual, auditory, cognitive, and motor impairments, and meets current legal requirements (notably the EU's European Accessibility Act, enforceable since June 2025, and evolving U.S. ADA guidance) — both of which point to WCAG 2.2 Level AA as the practical standard.

## Key Sources

### WCAG (Web Content Accessibility Guidelines)

Source:
https://www.w3.org/WAI/standards-guidelines/wcag/

Maintained by: W3C Web Accessibility Initiative (WAI)

Notes: The authoritative accessibility standard. WCAG 2.2 (published Oct 2023) is the current version and the one referenced by most 2026 regulations; it added 9 new success criteria over 2.1, focused on low vision, cognitive/learning disabilities, and mobile users with motor impairments (e.g. "Focus Not Obscured," "Dragging Movements," larger touch targets).

### axe-core

Repository:
https://github.com/dequelabs/axe-core

License: MPL-2.0

Notes: The most widely used open-source automated accessibility testing engine, built into many tools (Lighthouse, browser extensions, testing frameworks). Catches a meaningful share of issues automatically but cannot replace manual keyboard and screen-reader testing.

### eslint-plugin-jsx-a11y

Repository:
https://github.com/jsx-eslint/eslint-plugin-jsx-a11y

License: MIT

Notes: Lints JSX for accessibility issues (missing alt text, invalid ARIA, non-interactive elements with click handlers) at write-time, for React/JSX-based frontends.

## Core Concepts To Apply

- **WCAG 2.2 AA as the floor, not the ceiling**: treat Level AA as the minimum bar for any public-facing site — this is also the level referenced by the EU's European Accessibility Act and current U.S. ADA guidance.
- **Four principles (POUR)**: content must be Perceivable (text alternatives, sufficient contrast), Operable (full keyboard access, enough time, no seizure-triggering motion), Understandable (predictable, clear labels/errors), and Robust (works with assistive technology).
- **Contrast and non-color cues**: meet minimum contrast ratios for text and UI components, and never convey information (errors, required fields, status) through color alone.
- **Full keyboard operability**: every interactive element must be reachable and usable via keyboard alone, with a visible focus indicator that is never fully obscured by other content (a new WCAG 2.2 requirement).
- **Semantic HTML first**: use native elements (`<button>`, `<nav>`, `<label>`) before reaching for ARIA — correct semantic markup gives most accessibility behavior for free; ARIA should fill gaps, not replace semantics.
- **Respect motion preferences**: honor `prefers-reduced-motion` for any animation, especially relevant given the current kinetic-typography/motion trends (see `skills/ui-ux/typography-color-2026/` and `references/web-design/motion/`).
- **Test with real tools, not just automated scans**: run axe-core/Lighthouse for a fast first pass, then manually test keyboard navigation and at least one screen reader (VoiceOver, NVDA) before shipping anything customer-facing.

## When To Use

Apply from the first component built, not as a pre-launch checklist — retrofitting accessibility onto a finished site is far more expensive than building it in. Any site serving EU or U.S. customers should treat WCAG 2.2 AA as a compliance requirement, not just a best practice.

## External Sources

All sources above are external and actively maintained — link to them rather than copying their content, since accessibility guidelines and legal requirements are still evolving (e.g. EN 301 549 v4.1.1, expected in 2026, will formally align EU law with WCAG 2.2).
