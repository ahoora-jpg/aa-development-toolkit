# Tool: Quick Color Contrast Check (JS, no dependencies)

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Paste into a browser console or a small script to check a color pair
against WCAG AA before committing tokens.

```js
function luminance(hex) {
  const rgb = hex.replace('#','').match(/.{2}/g).map(c => {
    const v = parseInt(c, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1), l2 = luminance(hex2);
  const [lighter, darker] = l1 > l2 ? [l1, l2] : [l2, l1];
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Example:
console.log(contrastRatio('#0a0a0a', '#ffffff')); // -> ~19.5 (passes AAA)
```

WCAG AA thresholds: 4.5:1 for normal text, 3:1 for large text (18px+ bold
or 24px+ regular) and UI components.

## Related

- `skills/ui-ux/accessibility/SKILL.md`
- `skills/ui-ux/design-tokens-handoff/SKILL.md`
