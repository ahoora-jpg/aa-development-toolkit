---
name: typography-color-2026
description: "Evaluate and apply current 2026 web typography and color directions while separating durable system choices from short-lived trends. Use when defining contemporary type, palette, contrast, and design-token direction."
---

# Typography & Color Trends (2026)

## Purpose

Current (2026) direction for web typography and color systems: what's replacing the "safe corporate" look of 2020–2024, and which parts are durable technique vs. short-lived trend. Use alongside `skills/ui-ux/persian-typography/` (Persian-specific font choices) and `references/web-design/motion/` (GSAP, for implementing kinetic type).

## Key Sources

### Open Props

Repository:
https://github.com/argyleink/open-props

License: MIT

Notes: CSS custom-property tokens for color, animation, sizing, and gradients — a native, framework-free way to build a consistent design-token system instead of hardcoding hex values everywhere.

### Radix Colors

Repository:
https://github.com/radix-ui/colors

License: MIT

Notes: A accessible, systematic color-scale library (12 steps per hue, tuned for both light and dark mode, contrast-checked) — a solid base for building an accessible "dopamine accent + neutral base" palette rather than picking bright colors ad hoc.

### Fontsource

Repository:
https://github.com/fontsource/fontsource

License: Varies per font (each package documents its own font license)

Notes: Self-hosted, npm-installable web fonts, including variable-font builds — avoids depending on a third-party font CDN and makes it easy to ship a single variable font file instead of multiple static weights.

## Core Concepts To Apply

### Typography

- **Variable fonts are infrastructure now, not a trend**: one font file contains multiple weights/widths/optical sizes, loaded once and animatable in CSS (`font-variation-settings`) — use this instead of loading 4–6 separate static font weights.
- **Type as a layout element**: oversized headlines are being used as a structural/visual element in hero sections, not just as text — leave real room for large type in layout planning.
- **Kinetic typography, used sparingly**: text that shifts weight, scales, or reveals on scroll/hover draws attention — implement with CSS transitions or GSAP (see `references/web-design/motion/`), respect `prefers-reduced-motion`, and reserve it for a small number of key moments (hero, section intros) rather than every heading.
- **Pair one expressive display font with one restrained body font**: the current trend is toward maximalist/expressive display faces (bold serifs, retro-inspired, hand-lettered accents) for headlines, paired with a clean, highly legible sans-serif (e.g. Inter) for body copy — expressive type everywhere becomes unreadable.
- **Accessibility is part of the font decision, not a separate check**: verify contrast, legibility at small sizes, and readability for users with dyslexia/low vision as part of choosing any display font, not after the fact.

### Color

- **Palettes as systems, not single hex picks**: define a scale (e.g. via Radix Colors or Open Props) that works across light/dark mode and states (hover, focus, disabled), rather than a handful of ad hoc colors.
- **Neutral base + strategic bold accent**: the dominant 2026 pattern is a calm, soft-neutral background (off-white / muted gray, not stark #FFFFFF) with one or two saturated "dopamine" accent colors reserved for calls-to-action and key highlights — not saturated color applied everywhere.
- **Dark mode as a designed palette, not an inverted one**: treat dark mode as its own token set (shadows, glows, and contrast behave differently on dark backgrounds) rather than simply flipping light-mode colors.
- **Contrast and accessibility are non-negotiable**: every text/background and state color pairing must meet WCAG contrast requirements — bold color trends do not exempt a site from this.

## When To Use

Apply when starting a new site's visual identity, or when refreshing an existing site's typography/color system. Treat "dopamine colors," maximalist serifs, and kinetic type as tools to reach for when they fit the brand (youthful, expressive, attention-grabbing) — a corporate/finance/healthcare brand may be better served by the calmer neutral-plus-single-accent direction described above.

## External Sources

All sources above are external, actively maintained open-source projects — link to them rather than vendoring their content, since color/type trend guidance and font libraries update frequently.
