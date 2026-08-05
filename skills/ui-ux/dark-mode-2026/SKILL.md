# Dark Mode 3.0 (2026)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for implementing dark mode the current (2026) way —
true blacks tuned for OLED, not washed-out gray, plus correct token and
contrast handling. Use alongside `skills/ui-ux/design-tokens-handoff/SKILL.md`.

## What changed vs. 2020–2024 dark mode

Older dark mode conventions used dark grays (`#121212`–`#1e1e1e`) to avoid
"pure black" halation on older LCD panels. Modern OLED-dominant displays
handle true black (`#000000`) well and benefit from it — deeper contrast,
lower power draw, and a more premium, cinematic feel. Current direction
pairs near-black backgrounds with vibrant, highly saturated accent colors
and soft glow effects, rather than the flat gray-on-gray look.

## Rules

1. **Background**: use `#000000`–`#0a0a0a`, not mid-gray.
2. **Surface elevation**: instead of only lightening gray steps, use subtle
   glow/shadow with a hint of the accent color to indicate elevation —
   avoids the "flat gray card on black" look.
3. **Accent colors**: increase saturation and add subtle glow
   (`box-shadow` with the accent color at low opacity) for interactive
   elements — this is what reads as "2026" instead of "generic dark UI."
4. **Text contrast**: pure white (`#ffffff`) body text on pure black can
   cause visual vibration for some readers — use `#f5f5f5`–`#fafafa`
   instead of `#ffffff` for large blocks of text.
5. **Images/photos**: add a very subtle dark overlay or border on product
   photography so white-background product shots don't look like cut-out
   stickers against true black.
6. **Always implement via tokens**, never a separate dark stylesheet —
   see `skills/ui-ux/design-tokens-handoff/SKILL.md`.
7. **Respect system preference by default** (`prefers-color-scheme`), but
   always offer a manual toggle — don't force one mode.

## Example toggle (framework-agnostic JS)

```js
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // not usable inside Claude.ai artifacts — fine in a real deployed site
}

const saved = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(saved || (systemDark ? 'dark' : 'light'));
```

## Common mistakes to avoid

- Using `#ffffff` for all text on `#000000` — causes eye strain at scale.
- Treating dark mode as "invert the colors" — elevation, glow, and photo
  treatment all need separate attention.
- Forgetting to re-check contrast ratios in dark mode specifically; a
  pair that passes WCAG AA in light mode does not automatically pass in
  dark mode.

## Related

- `skills/ui-ux/design-tokens-handoff/SKILL.md`
- `skills/ui-ux/accessibility/SKILL.md`
- `skills/ui-ux/typography-color-2026/SKILL.md`
