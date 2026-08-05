# Pattern: Standard Micro-Interaction Timings

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Generic, reusable timing/easing values for common UI micro-interactions.
Use with motion tokens in `skills/ui-ux/design-tokens-handoff/SKILL.md`.

```css
:root {
  --hover-duration: 120ms;
  --press-duration: 80ms;
  --modal-enter-duration: 250ms;
  --modal-exit-duration: 180ms;
  --toast-duration: 200ms;
}

.interactive {
  transition: transform var(--press-duration) var(--easing-standard),
              opacity var(--hover-duration) var(--easing-standard);
}
.interactive:active { transform: scale(0.97); }

.modal {
  transition: opacity var(--modal-enter-duration) var(--easing-standard),
              transform var(--modal-enter-duration) var(--easing-standard);
}
.modal[data-state="closed"] {
  opacity: 0;
  transform: scale(0.98);
  transition-duration: var(--modal-exit-duration);
}
```

## Rules of thumb

- Hover feedback: 100–150ms — faster reads as unresponsive lag-free UI.
- Press/tap feedback: under 100ms — should feel instant.
- Modal/drawer enter slightly slower than exit (enter draws attention
  gradually, exit should get out of the way quickly).
- Always animate `transform`/`opacity` only, for GPU-accelerated motion.
- Respect `prefers-reduced-motion` — see
  `skills/ui-ux/motion-scroll-driven/SKILL.md`.

## Related

- `skills/ui-ux/motion-scroll-driven/SKILL.md`
- `snippets/scroll-reveal.md`
