---
name: iconography
description: "Choose, design, and implement consistent accessible icon systems with controlled sizing, stroke, semantics, and delivery. Use when selecting an icon library, creating custom icons, or auditing icon usability and performance."
---

# Iconography

## Purpose

How to choose or design icons that are visually consistent, accessible, and lightweight — icons are a small but highly repeated UI element, so inconsistency or bloat here shows up on nearly every screen.

## Key Sources

### Lucide

Repository:
https://github.com/lucide-icons/lucide

License: ISC

Notes: Actively maintained, community-driven open-source icon set (a fork/continuation of Feather Icons) with a consistent stroke-based style and framework packages (React, Vue, etc.) — a solid default choice for a coherent icon system.

### Phosphor Icons

Repository:
https://github.com/phosphor-icons/homepage

License: MIT

Notes: Large open-source icon family offering multiple weights (thin, regular, bold, fill) of the same icon set — useful when a design system needs icon weight to match different text weights or emphasis levels.

### Heroicons

Repository:
https://github.com/tailwindlabs/heroicons

License: MIT

Notes: Icon set from the Tailwind CSS team, offered in outline and solid styles, designed to integrate cleanly with Tailwind-based frontends.

## Core Concepts To Apply

- **Pick one icon set and stay consistent**: mixing icons from different libraries (different stroke widths, corner radii, grid sizes) reads as visually sloppy even when each icon individually looks fine — commit to one family per project.
- **Match icon style to brand personality**: stroke-based/outline icons (Lucide, Feather-style) read as light and modern; filled icons read as bolder and higher-contrast — choose based on the brand direction set in `skills/design/branding/`, not arbitrarily.
- **SVG over icon fonts**: use inline SVG or an SVG-based icon component rather than icon fonts — SVGs are more accessible (can carry proper `aria-label`/`role` attributes), don't break if a font fails to load, and scale without blurring.
- **Icons need accessible labels**: a purely decorative icon should be hidden from screen readers (`aria-hidden="true"`); an icon used as the only content of an interactive element (an icon-only button) must have an accessible text label (`aria-label`) — connects directly to `skills/ui-ux/accessibility/`.
- **Consistent sizing grid**: design and export icons on a consistent pixel/viewBox grid (e.g. 24×24) so they align predictably at any size, rather than each icon having its own ad hoc canvas.
- **Optimize before shipping**: run icon SVGs through SVGO (see `skills/design/logo-design/`) and prefer an SVG sprite or icon-component system over dozens of individual image requests, for page-weight reasons covered in `skills/ui-ux/performance/`.

## When To Use

Choose the icon set and sizing grid at the same time as the broader design system (`skills/design/design-systems/`) — swapping icon libraries mid-project is disruptive and usually shows up as visible inconsistency.

## External Sources

All sources above are external, actively maintained open-source projects — link to them rather than vendoring hundreds of icon files directly if avoidable, so the project keeps getting updates and new icons as the library evolves.
