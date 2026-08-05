# Motion & Scroll-Driven Animation (2026)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for kinetic typography, scroll-driven animation,
and micro-interactions — native-browser first, library-assisted second.
Use alongside `skills/ui-ux/design-tokens-handoff/SKILL.md` for motion
duration/easing tokens.

## Why this matters in 2026

Native browser scroll-driven animation (CSS `animation-timeline: scroll()`
and `view()`) is now broadly supported, meaning many effects that used to
require JavaScript libraries can run on the CSS engine — smoother,
cheaper, and simpler to maintain.

## Priority order

1. **CSS-native scroll animation** — use first, for anything a single
   element needs (fade/slide/scale on scroll into view).
2. **Library-assisted (e.g. GSAP ScrollTrigger)** — only for complex,
   choreographed, multi-element timelines that CSS can't express cleanly.
3. **JS from scratch** — last resort; higher maintenance cost.

## CSS-native scroll-reveal pattern

```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: fade-up linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Always wrap in `@supports` and provide a static fallback (element simply
visible, no animation) for browsers without support — never let motion be
a requirement for content to appear.

## Kinetic typography guidance

- Reserve large-scale animated type for hero sections and section breaks,
  not body copy — motion in body text hurts readability and accessibility.
- Keep letter/word-reveal animations under ~600ms per element; slower
  reads as sluggish, not premium.
- Always pair with `prefers-reduced-motion` handling (see below) — this
  is a hard requirement, not optional polish.

## Respecting motion preferences (required, not optional)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Micro-interaction guidance

- Button/link hover and press states: 100–150ms, standard easing.
- Modal/drawer open-close: 200–300ms, decelerate-on-enter /
  accelerate-on-exit.
- Never animate `width`/`height`/`top`/`left` directly — animate
  `transform`/`opacity` for GPU-accelerated, jank-free motion.

## Common mistakes to avoid

- Animating everything on scroll "because it looks cool" — motion should
  support hierarchy (draw attention to what matters), not compete for it.
- Skipping `prefers-reduced-motion` — this is an accessibility
  requirement, not a nice-to-have.
- Using JS scroll listeners for simple reveals when native CSS
  `animation-timeline` covers the case with far better performance.

## Related

- `skills/ui-ux/design-tokens-handoff/SKILL.md` (motion duration/easing tokens)
- `skills/ui-ux/accessibility/SKILL.md`
- `references/web-design/motion/` (curated external motion sources, if present)
