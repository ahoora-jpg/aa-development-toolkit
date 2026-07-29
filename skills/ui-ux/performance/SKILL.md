---
name: performance
description: "Improve real-user web performance and Core Web Vitals through measurement, loading strategy, rendering control, and asset optimization. Use when diagnosing or preventing LCP, INP, CLS, JavaScript, image, or font issues."
---

# Performance & Core Web Vitals

## Purpose

How to keep a website fast and responsive for real users, and how to measure it with the metrics search engines and browsers actually use to judge quality — Google's Core Web Vitals.

## Key Sources

### web.dev — Core Web Vitals

Source:
https://web.dev/articles/vitals

Maintained by: Google (Chrome team)

Notes: The authoritative definition of the three Core Web Vitals: Largest Contentful Paint (LCP, loading speed), Interaction to Next Paint (INP, responsiveness — replaced First Input Delay as the official metric in March 2024), and Cumulative Layout Shift (CLS, visual stability).

### Lighthouse

Repository:
https://github.com/GoogleChrome/lighthouse

License: Apache-2.0

Notes: Open-source, automated auditing tool (built into Chrome DevTools) that scores performance, accessibility, SEO, and best practices, with specific actionable fixes for each Core Web Vital.

### web-vitals (JS library)

Repository:
https://github.com/GoogleChrome/web-vitals

License: Apache-2.0

Notes: Small official library for measuring real Core Web Vitals scores from actual visitors in production (field data), which is what search ranking and user-experience judgments are based on — lab data (Lighthouse) is a proxy, not a substitute.

## Core Concepts To Apply

- **The three Core Web Vitals**:
  - *LCP (Largest Contentful Paint)*: time until the largest visible element (usually a hero image or heading) renders. Target under 2.5s. Fix with image optimization, faster server response, and removing render-blocking resources.
  - *INP (Interaction to Next Paint)*: how quickly the page responds to any user interaction (click, tap, key press) throughout the whole visit, not just the first one. Target under 200ms. Fix by breaking up long JavaScript tasks and avoiding heavy work on the main thread.
  - *CLS (Cumulative Layout Shift)*: how much visible content unexpectedly shifts during load. Target under 0.1. Fix by reserving space for images/ads/embeds and fonts before they load.
- **Measure before optimizing**: use field data (web-vitals library, or a real-user-monitoring tool) to find what's actually slow for real visitors, not just a single Lighthouse run in a lab environment.
- **Optimize images and fonts first**: these are the most common causes of poor LCP and CLS — use modern formats (WebP/AVIF), proper sizing, `font-display: swap`, and reserve layout space before assets load.
- **Lazy-load and code-split**: only load what's needed for the current view; defer non-critical JavaScript and below-the-fold images/3D/animation modules (see `references/web-design/3d/approved-sources.md`, which already requires lazy-loading Three.js).
- **Edge-aware deployment**: serve static assets and, where possible, rendered pages from a CDN/edge location close to the user — this is treated as a core 2026 frontend skill, not just an optimization.
- **Performance budgets**: set explicit limits (e.g. total JS under X KB, LCP under 2.5s) and check them in CI, so performance regressions are caught before they ship rather than discovered after.

## When To Use

Apply performance budgets and Core Web Vitals monitoring from the start of any project — like accessibility, retrofitting performance onto a finished site (especially one already using heavy motion/3D/glass effects from `references/web-design/`) is far more expensive than designing for it from day one.

## External Sources

All sources above are external, actively maintained by Google — link to them rather than duplicating their content, since exact thresholds and metric definitions are updated periodically (INP itself replaced FID as a Core Web Vital in 2024).
