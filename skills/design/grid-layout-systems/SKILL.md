# Grid & Layout Systems

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to structure page composition and spacing so a design stays visually consistent and adapts cleanly across screen sizes — the layer that sits between raw responsive CSS (`skills/ui-ux/mobile-first-responsive/`) and finished visual design.

## Key Sources

### Every Layout

Source:
https://every-layout.dev

Authors: Heydon Pickering & Andy Bell

Notes: A widely respected resource built around algorithmic, intent-based CSS layout primitives (e.g. a "Cluster," a "Sidebar," a "Grid") that adapt automatically without hand-written breakpoints — a modern alternative to manually recreating fixed-column grids at every breakpoint.

### MDN — CSS Grid Layout

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

Maintained by: Mozilla (MDN Web Docs)

Notes: Authoritative reference for native CSS Grid — the modern default for two-dimensional page layout, generally preferred over older 12-column float/flexbox-grid frameworks for new projects.

## Core Concepts To Apply

- **Native CSS Grid over legacy grid frameworks**: for new projects, use CSS Grid (and Flexbox for one-dimensional layout) directly rather than a heavyweight grid framework — this avoids unnecessary CSS payload, which supports the performance goals in `skills/ui-ux/performance/`.
- **Consistent spacing scale**: define a single spacing scale (e.g. a set of `rem` steps or design tokens, see `skills/design/design-systems/`) and use it everywhere instead of arbitrary pixel values — this is what makes a layout feel intentional rather than ad hoc.
- **Intent-based, not breakpoint-based, thinking**: describe what a layout component should *do* (stack on narrow space, form a sidebar when there's room) and let modern CSS (container queries, `auto-fit`/`minmax()`) handle the adaptation, rather than manually specifying pixel breakpoints for every component.
- **Grid as a design tool, not just a dev tool**: use a consistent column/margin/gutter system during visual design (Figma or equivalent) that maps directly onto the CSS grid actually implemented, so design and code share one structural language.
- **Whitespace is structural, not decorative**: generous, consistent spacing communicates hierarchy and calm; inconsistent or cramped spacing is one of the fastest ways a layout reads as unpolished, regardless of how good individual components look.
- **Container queries for component-level layout**: for reusable components placed in varying contexts (sidebar, full-width, card grid), use container queries (already covered in `skills/ui-ux/mobile-first-responsive/`) so the component adapts to its own container, not just the page viewport.

## When To Use

Establish the grid/spacing system at the start of a project's design-system work (alongside `skills/design/design-systems/`), before individual pages are designed — retrofitting a consistent spacing scale onto an already-designed set of pages is far more work than starting with one.

## External Sources

Both sources above are external and actively maintained — link to them rather than duplicating their content, since CSS layout capabilities (container queries, subgrid, etc.) continue to gain browser support.
