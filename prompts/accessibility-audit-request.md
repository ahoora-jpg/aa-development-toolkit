# Prompt: Accessibility Audit Request

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Use after any page/component is generated, before considering it done.

```
Review the page/component above against skills/ui-ux/accessibility/SKILL.md
and report, concretely:

1. Color contrast: any text/background pair below WCAG AA (4.5:1 body,
   3:1 large text)?
2. Keyboard navigation: can every interactive element be reached and
   activated via Tab/Enter/Space alone, in a sensible order?
3. Screen reader labels: any button/link/image missing a meaningful
   label or alt text?
4. Focus states: is the visible focus indicator present and clear on
   every interactive element (not removed via `outline: none` without
   a replacement)?
5. Motion: does anything animate without respecting
   `prefers-reduced-motion`?

Fix issues found rather than only listing them.
```
