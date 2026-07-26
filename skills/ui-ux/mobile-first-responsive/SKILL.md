# Mobile-First & Responsive Design

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to design and build a site that works well on the device most visitors actually use first — mobile — rather than treating mobile as an afterthought of a desktop design. Mobile traffic is over 60% of web traffic, and WCAG 2.2 added new criteria specifically for mobile touch targets (see `skills/ui-ux/accessibility/`).

## Key Sources

### web.dev — Responsive Web Design Basics

Source:
https://web.dev/learn/design

Maintained by: Google (Chrome team)

Notes: Practical, up-to-date guide to fluid grids, flexible images, and media queries — the foundational techniques behind any responsive layout.

### Open Props

Repository:
https://github.com/argyleink/open-props

License: MIT

Notes: Already referenced in `skills/ui-ux/typography-color-2026/`; also provides responsive sizing tokens (fluid type/spacing scales) that adapt smoothly across breakpoints instead of jumping at fixed widths.

### MDN — CSS Container Queries

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries

Maintained by: Mozilla (MDN Web Docs)

Notes: Modern, now widely supported CSS feature letting a component respond to the size of its own container rather than only the viewport — essential for reusable components that must adapt correctly regardless of where they're placed on the page.

## Core Concepts To Apply

- **Design mobile-first, scale up**: start layout and CSS for the smallest screen, then add complexity at larger breakpoints (`min-width` media queries) — this forces prioritizing what content and actions actually matter most.
- **Fluid grids and flexible images**: use relative units (%, `fr`, `rem`) and `max-width: 100%` on images instead of fixed pixel widths, so layouts adapt smoothly rather than breaking at specific sizes.
- **Container queries for components**: for reusable components (cards, navigation), query the component's own container size rather than only the viewport — this makes components correctly responsive wherever they're placed (sidebar, grid, full width).
- **Touch target sizing**: interactive elements need a minimum touch target size (WCAG 2.2 recommends at least 24x24 CSS pixels, more for primary actions) with enough spacing to avoid accidental taps — a common failure point on mobile.
- **Test real breakpoints, not just resizing a desktop browser**: verify on actual small-viewport constraints (narrow width, on-screen keyboard covering the lower half of the screen, notches/safe areas) since real devices have layout constraints a resized desktop window doesn't show.
- **Performance matters more on mobile**: mobile networks and devices are typically slower/weaker than desktop — the Core Web Vitals targets in `skills/ui-ux/performance/` are especially important to hit on mobile, where INP and LCP problems are most visible.

## When To Use

Apply from the very first layout decision of any new site or component — like accessibility and performance, this is far cheaper to build in from the start than to retrofit onto a desktop-first design later.

## External Sources

All sources above are external and actively maintained — link to them rather than duplicating their content, since responsive CSS capabilities (like container queries) continue to evolve with browser support.
