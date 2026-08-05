# Design Tokens & Design-to-Code Handoff

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for defining and consuming **design tokens** (color,
spacing, type scale, radius, shadow, motion) so a design system stays
consistent whether it's implemented by a human, by Claude Code, or by
Figma-to-code tooling. Use alongside `skills/design/design-systems/SKILL.md`.

## Why tokens instead of hard-coded values

Hard-coded hex values and pixel numbers scattered through components are
the single biggest cause of visual drift after the first few screens.
Tokens are the single source of truth; every component reads from them
instead of inventing new values.

## Token categories (minimum set for any project)

- **Color**: `background`, `foreground`, `primary`, `secondary`, `accent`,
  `muted`, `border`, `destructive`, each with a `-foreground` pair for
  text-on-color contrast.
- **Spacing scale**: a fixed set (e.g. 4/8/12/16/24/32/48/64px), never
  arbitrary values.
- **Type scale**: a fixed set of font sizes + line heights (e.g. a modular
  scale like 1.25 ratio), not ad-hoc sizes per component.
- **Radius**: 2–4 values max (e.g. `sm`, `md`, `lg`, `full`).
- **Shadow / elevation**: 3–5 levels max.
- **Motion**: duration tokens (`fast` 120ms, `base` 200ms, `slow` 400ms)
  and easing tokens (`standard`, `emphasized`, `decelerate`).

## Implementation pattern (CSS variables, framework-agnostic)

```css
:root {
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  --color-primary: #171717;
  --color-primary-foreground: #fafafa;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --shadow-1: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-2: 0 4px 12px rgba(0,0,0,0.08);
  --motion-fast: 120ms;
  --motion-base: 200ms;
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
}

[data-theme="dark"] {
  --color-background: #0a0a0a;
  --color-foreground: #fafafa;
  --color-primary: #fafafa;
  --color-primary-foreground: #171717;
}
```

Every component consumes `var(--token-name)` — never a raw color or pixel
value inline.

## Figma → code handoff workflow

1. If the source of truth is a Figma file, treat Figma's variables/styles
   panel as the canonical token list — export or transcribe it directly
   into the CSS variables above rather than eyeballing colors from
   screenshots.
2. Match token *names*, not just values, so future Figma updates map
   cleanly onto the same code variables.
3. When no Figma file exists, define tokens first (this file), then build
   components — never the reverse.
4. Re-check contrast ratios (WCAG AA minimum, 4.5:1 for body text) for
   every color pair after tokens are set, before component work begins.

## Common mistakes to avoid

- Defining tokens but still hard-coding one-off colors "just for this
  banner" — this is where drift starts.
- Using more than 3–4 shadow/radius levels "to be safe" — more options
  is not more flexibility, it's more inconsistency.
- Skipping a dark-mode token set even when dark mode isn't launched yet —
  retrofitting it later touches every component.

## Related

- `skills/design/design-systems/SKILL.md`
- `skills/ui-ux/dark-mode-2026/SKILL.md`
- `skills/ui-ux/accessibility/SKILL.md`
