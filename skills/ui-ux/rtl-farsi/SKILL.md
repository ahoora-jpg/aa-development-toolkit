# RTL & Farsi Layout (Beyond Typography)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for building genuinely correct right-to-left (RTL)
interfaces — for Farsi/Persian, Arabic, Hebrew, and other RTL languages.
This is not typography (see `skills/ui-ux/persian-typography/SKILL.md`
for font choices); it's layout, direction, and interaction correctness.

## Why this needs its own skill

Setting `dir="rtl"` on `<html>` handles text direction but not the rest
of the interface. A large share of "RTL support" bugs are: icons pointing
the wrong way, animations sliding the wrong direction, and charts/graphs
that were never mirrored — all invisible until a native reader opens the
page.

## Core rule: use logical properties, not physical ones

```css
/* Wrong — physical properties don't flip for RTL */
.card { margin-left: 16px; padding-right: 8px; text-align: left; }

/* Right — logical properties flip automatically with dir="rtl" */
.card { margin-inline-start: 16px; padding-inline-end: 8px; text-align: start; }
```

Use `margin-inline-start/end`, `padding-inline-start/end`,
`inset-inline-start/end`, `text-align: start/end` — never
`-left`/`-right` — anywhere direction matters. This alone prevents most
RTL layout bugs by default, with zero extra RTL-specific CSS.

## Icons that must mirror in RTL

Directional icons need a mirrored version or a CSS transform in RTL mode:

- Back/forward navigation arrows
- Chevrons in accordions/dropdowns pointing to "next"
- Send/reply icons implying direction
- Progress/breadcrumb arrows
- Play/rewind/fast-forward (careful: media controls are often kept
  LTR by convention even in RTL apps — verify per platform convention
  rather than assuming)

Icons that must **not** mirror: logos, clock/time icons, icons
representing physical objects (a printer, a trash can), checkmarks, and
most status icons.

```css
[dir="rtl"] .icon-directional {
  transform: scaleX(-1);
}
```

## Animation & motion direction

Slide-in/slide-out and drawer animations must flip direction in RTL —
a drawer that always slides from the physical left, regardless of
direction, feels broken to RTL readers (it slides from the "end" instead
of the "start").

```css
.drawer { inset-inline-start: -320px; transition: inset-inline-start var(--motion-base); }
.drawer[data-open="true"] { inset-inline-start: 0; }
```

Using logical `inset-inline-start` here makes the same rule correct in
both directions automatically.

## Forms

- Input fields containing RTL text should have `dir="rtl"` even inside an
  otherwise LTR-structured admin panel, and vice versa for LTR content
  (URLs, emails, phone numbers, code) inside an RTL page — mixed-direction
  content is normal and expected, not a bug to "fix" by forcing one
  direction everywhere.
- Numbers and dates: Persian text conventionally uses Latin numerals
  (0-9) in digital interfaces far more often than Perso-Arabic numerals
  (۰-۹) — confirm the target audience's convention rather than assuming;
  don't auto-convert without checking.
- Checkbox/radio button visual position should follow logical start, not
  a hard-coded left/right.

## Charts & data visualization

Bar charts, timelines, and progress indicators that grow left-to-right
in an LTR context should grow right-to-left in an RTL context to match
reading direction. This is one of the most commonly missed RTL details —
verify explicitly, don't assume a charting library handles it
automatically.

## Testing checklist

- [ ] All spacing/alignment uses logical properties, not `left`/`right`
- [ ] Directional icons mirrored; non-directional icons left alone
- [ ] Slide/drawer animations flip direction correctly
- [ ] Mixed-direction content (e.g. a URL inside Farsi text) displays
      correctly, not garbled
- [ ] Charts/progress bars flow in the correct reading direction
- [ ] Tested with `dir="rtl"` set at the document root, not just per
      component

## Related

- `skills/ui-ux/persian-typography/SKILL.md` (font choices)
- `skills/ui-ux/accessibility/SKILL.md`
- `skills/ui-ux/design-tokens-handoff/SKILL.md`
