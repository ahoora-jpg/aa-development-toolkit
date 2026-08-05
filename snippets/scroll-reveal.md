# Snippet: Scroll-Reveal (CSS-native, no JS)

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Framework-agnostic. See `skills/ui-ux/motion-scroll-driven/SKILL.md` for
full rationale.

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
@media (prefers-reduced-motion: reduce) {
  .reveal { animation: none; opacity: 1; transform: none; }
}
```

Apply `class="reveal"` to any element you want to fade/slide in as it
enters the viewport on scroll. No JavaScript or IntersectionObserver
needed in browsers that support `animation-timeline`.
