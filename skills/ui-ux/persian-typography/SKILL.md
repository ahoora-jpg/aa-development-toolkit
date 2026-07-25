# Persian Typography

Status: Draft
Last reviewed: 2026-07-26

## Purpose

Reference for choosing and implementing Persian/Farsi fonts in web and app UI: which fonts to use, how to load them, and RTL typography notes. Scope is fonts and typography only — general Persian NLP/text-processing tools are out of scope for this file.

## Recommended Fonts

### Vazirmatn (default recommendation)

Repository:
https://github.com/rastikerdar/vazirmatn

License: SIL Open Font License 1.1
Format: Variable font (weight axis 100–900), static weights also available (woff2, woff, ttf)
Notes: Combined Persian/Arabic + Latin (Latin glyphs based on Roboto). Distributed on Google Fonts. Used by Telegram Desktop for Persian text.

CDN usage (via jsDelivr, pulls directly from the source repo):

```css
@font-face {
  font-family: "Vazirmatn";
  src: url("https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@latest/fonts/webfonts/Vazirmatn-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Decision: Primary Persian typeface for new projects unless a specific brand voice requires otherwise.

### Sahel

Repository:
https://github.com/rastikerdar/sahel-font

License: SIL Open Font License 1.1
Format: Variable build (Sahel-VF) plus static weights (ttf, woff, eot); also ships "no Latin" and "Persian digits" variants.
Notes: By the same designer as Vazirmatn. Good alternative when a slightly more geometric look is wanted.

### Estedad

Repository:
https://github.com/aminabedi68/Estedad

License: SIL Open Font License
Format: 9 static weights (Thin–Black) + variable font
Notes: Arabic–Latin sans-serif, optimized for screen/web rendering.

### Mikhak

Repository:
https://github.com/aminabedi68/Mikhak

License: SIL Open Font License
Notes: Sister project to Estedad, same designer (Amin Abedi). Slightly warmer/rounder letterforms than Estedad.

## Legacy / Compatibility Only

### FarsiWeb Fonts (Roya, Homa, Titr, etc.)

Repository:
https://github.com/behnam/fonts-farsiweb

License: Mixed — GPL and other free licenses; check per-font inside the repo before use.
Notes: First Unicode-compliant Persian font family, conforms to Iranian standard ISIRI 6219. Historically important but visually dated.
Decision: Use only where an existing legacy system already depends on these; do not choose for new work.

### Farsi Font Store collection

Organization:
https://github.com/font-store

Notes: Active foundry producing Perso-Arabic type (e.g. Nika, Ganjname). License varies per repository — verify individually before use.

## Do Not Use

- **Shabnam** (https://github.com/rastikerdar/shabnam-font) — officially discontinued by its author. Do not select for new work; only relevant if maintaining an old project that already depends on it.
- **Commercial fonts** (e.g. IRANSans, Yekan) — not open source, cannot be bundled or self-hosted from a free source. If a client/brand requires one of these, it must be licensed separately and is out of scope for this repository.

## Bundled Collections (secondary reference only)

Repository:
https://github.com/rahatool/persian-fonts

Notes: A convenience bundle of several popular Persian fonts in one package. Useful for browsing options, but treat the individual font repositories above as the source of truth — check each bundled font's own license before shipping it in a product.

## RTL & Typography Notes

- Always pair a Persian font stack with `direction: rtl` and `unicode-bidi: isolate` (or `plaintext`) on the relevant containers, not just on `<body>`, so mixed Persian/Latin content (numbers, brand names) doesn't reorder incorrectly.
- Set `font-family` with a Latin fallback after the Persian font (e.g. `"Vazirmatn", "Roboto", sans-serif`) so any Latin characters in mixed text still render cleanly.
- Prefer variable fonts (Vazirmatn-VF, Sahel-VF, Estedad's variable build) over loading multiple static weight files — fewer HTTP requests and consistent weight interpolation.
- Persian digits (۰۱۲۳...) vs Latin digits (0123...): confirm which the product needs. Sahel and Vazirmatn both ship Persian-digit variants; don't assume the default font file already matches the desired digit style.
- Test line-height and letter-spacing separately from Latin type — Persian script's connected letterforms and diacritic positioning often need slightly larger line-height than a Latin-tuned default.

## Content Requirements

Items added to this file should be:

- Actively maintained (check for recent commits before adding a new font)
- Open source with a clearly stated license
- Documented with: source repository, license, available weights/formats, and a decision note (recommended / legacy / do-not-use)

## External Sources

All fonts referenced above are external. Do not vendor font binary files into this repository — link to the source repository (or load via CDN, e.g. jsDelivr against the GitHub repo) so consumers always get the maintained, up-to-date version rather than a static copy that can go stale.

