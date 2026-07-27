# Logo Design

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Principles and technical requirements for designing a logo that works as a functional, scalable identifier — the single visual "avatar" that sits inside the broader brand identity system defined in `skills/design/branding/`.

## Key Sources

### SVGO

Repository:
https://github.com/svg/svgo

License: MIT

Notes: The standard open-source tool for optimizing SVG logo files — strips unnecessary metadata and reduces file size while preserving visual output, which matters directly for Core Web Vitals (see `skills/ui-ux/performance/`) since a logo renders on nearly every page.

### schema.org Organization / logo property

Source:
https://schema.org/logo

Notes: The structured-data field for declaring a brand's official logo so search engines and AI systems associate the correct image with the brand consistently.

## Core Concepts To Apply

- **Logo vs. brand identity**: the logo is one functional asset (a mark, wordmark, or combination) inside the larger brand identity system — design it as a technical, optimized component, not the entire branding effort by itself.
- **Core principles that don't go out of style**: simplicity, versatility across sizes and mediums, originality, and relevance to the brand's actual positioning — these remain the enduring standard even as visual trends shift.
- **Logo types**: wordmark (text-only, e.g. Google), logomark/brandmark (symbol-only, e.g. Apple), combination mark (symbol + text), and emblem (symbol containing the name) — choose based on brand strategy and how the name itself functions visually, not by default habit.
- **Design in black-and-white first**: validate that the logo reads clearly and stays recognizable in a single color before adding brand color, so the design succeeds on form and contrast rather than relying on color to do the work.
- **Scalability as a hard requirement**: the logo must remain legible at favicon size (16×16px) and work cleanly on billboard scale — test small sizes early rather than only designing at large canvas size.
- **Deliver as vector, optimize for web**: build the final logo in vector format (SVG) rather than raster, and run it through an SVG optimizer before shipping to production, since an unoptimized SVG can carry unnecessary bloat that affects page load.
- **2026 typographic trend, applied selectively**: expressive/artistic custom lettering in wordmarks is currently popular, but should still prioritize legibility across sizes — treat it as an available direction (consistent with `skills/ui-ux/typography-color-2026/`), not a requirement for every brand.

## When To Use

Design the logo only after brand strategy and positioning are settled (`skills/design/branding/`) — a logo designed before strategy tends to need reworking once the brand's actual direction becomes clear. Revisit scalability and file optimization whenever the logo is deployed to a new surface (app icon, favicon, print).

## External Sources

Both technical sources above are external and actively maintained — link to them rather than duplicating their content; design-trend guidance should be periodically re-checked against current sources since visual trends shift faster than technical standards do.
