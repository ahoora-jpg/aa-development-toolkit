# Design Quality Gate (Mandatory)

Status: Approved
Last reviewed: 2026-08-05

## Purpose

A single, mandatory checklist that **any AI assistant** (Claude, ChatGPT,
Cursor, or any other tool) must run against **every** design/site
deliverable produced using this toolkit, before it is presented as
finished. This is a gate, not a suggestion: if an item fails, the
deliverable is not done — it goes back for fixes, then gets re-checked.

This complements `docs/review-checklist.md` (general code-quality gate)
with checks specific to visual/UX design output. Run both gates: code
quality + design quality.

## How this gate works

1. Treat every item below as pass/fail, not "mostly fine."
2. If any item fails, fix it and re-run the full gate — do not cherry-pick
   which failures matter.
3. Only after every item passes may the work be marked `Status: Approved`
   per the asset model in `docs/manifest.md`. Until then it stays `Draft`
   or `Review`.
4. State explicitly, in the response to the person, which gate items were
   checked and which passed/failed — don't just say "looks good."

## Gate 1 — Accessibility (hard requirement, never optional)

- [ ] Color contrast meets WCAG AA (4.5:1 body text, 3:1 large text/UI) —
      verify with `tools/contrast-check-snippet.md`, don't eyeball it.
- [ ] Every interactive element reachable and operable via keyboard alone,
      in a sensible tab order.
- [ ] Every interactive element has a real accessible name (not just a
      visual icon with no label).
- [ ] Visible focus indicator present on every interactive element.
- [ ] `prefers-reduced-motion` respected for any animation.
- [ ] Real semantic HTML elements used (`<button>`, `<nav>`, `<form>`),
      not `<div onclick>` substitutes.

Full detail: `skills/ui-ux/accessibility/SKILL.md`

## Gate 2 — Design system consistency

- [ ] All colors, spacing, radius, and type sizes come from tokens
      (`skills/ui-ux/design-tokens-handoff/SKILL.md`) — no invented
      one-off hex values or pixel numbers.
- [ ] Dark mode (if in scope) follows
      `skills/ui-ux/dark-mode-2026/SKILL.md` — true black, not gray, and
      contrast re-checked separately for dark mode.
- [ ] If brand guidelines exist for the project, output matches them per
      `skills/design/brand-guidelines/SKILL.md` checklist.
- [ ] New screen/page still feels like the same product as prior
      screens in this project — no unexplained style drift.

## Gate 3 — Responsive & performance

- [ ] Layout works at mobile (360–414px), tablet (768px), and desktop
      (1280px+) widths with no horizontal scroll or overlapping content.
- [ ] Images have explicit dimensions or aspect-ratio set (prevents
      layout shift).
- [ ] No animation of `width`/`height`/`top`/`left` — only
      `transform`/`opacity`.
- [ ] Reasonable Lighthouse/PageSpeed targets per
      `tools/lighthouse-ci-checklist.md` before calling the work launch-ready.

## Gate 4 — Content & agent legibility

- [ ] No placeholder/lorem-ipsum text left in a deliverable presented as
      final.
- [ ] Schema.org JSON-LD present for entity pages (product, article,
      etc.) per `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md`.
- [ ] Meta description and Open Graph tags present.
- [ ] Empty states defined for every list/grid/table (no blank white
      space when there's no data).

## Gate 5 — Source & licensing

- [ ] Any external code, font, image, or design pattern reused documents
      its source and license per the Source Policy in
      `docs/manifest.md` — no untracked copy-pasted external material.

## What "passing the gate" looks like in a response

When an AI assistant finishes a design/site task using this toolkit, it
should state, briefly:

```
Quality gate: accessibility ✓, design tokens ✓, responsive ✓,
dark mode ✓ (if applicable), agent-legibility ✓, sources documented ✓.
```

If something can't be verified in the current environment (e.g. real
Lighthouse run isn't possible in a chat sandbox), say so explicitly
rather than silently skipping it, and note it as an open item for the
person to verify before launch.

## Related

- `docs/manifest.md` (asset status model, decision priority)
- `docs/review-checklist.md` (general code-quality gate)
- `skills/ui-ux/accessibility/SKILL.md`
- `skills/ui-ux/design-tokens-handoff/SKILL.md`
- `tools/contrast-check-snippet.md`
- `tools/lighthouse-ci-checklist.md`
