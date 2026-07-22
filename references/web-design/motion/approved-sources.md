# Approved Motion Sources

Last reviewed: 2026-07-22

## GSAP

Repository:
https://github.com/greensock/GSAP

Compatibility:
HTML, CSS, SVG, Canvas, WebGL and framework-based applications.

Approved uses:

- Hero reveal
- Scroll-triggered entrance
- Product image parallax
- Section pinning when justified
- Brand carousel motion
- Menu opening and closing
- Small micro-interactions

Rules:

- Animation must not block interaction.
- Respect prefers-reduced-motion.
- Avoid animating every element.
- Prefer transform and opacity.
- Avoid long page-loading sequences.
- Test mobile performance.

Decision:
Primary motion engine for Safari Home.

## Inspiration Repository

Repository:
https://github.com/adrianhajdin/gsap_cocktails

Useful patterns:

- Text reveals
- Image masks
- Parallax
- Pinned sections
- Scroll-based storytelling

Restriction:
React project. Extract animation concepts only; do not import the application architecture.
