# Standalone Visuals (Covers, Posters, Social Graphics)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for one-off visual assets that live outside a
website's normal component system — social media graphics, blog cover
images, posters, OG images — where composition and typography carry the
whole design, not a reusable component grid.

## How this differs from the component/design-system skills

Website components need to work at many sizes and states (responsive,
hover, dark mode). Standalone visuals are fixed-dimension, single-purpose
compositions. Rules that make sense for a reusable button don't apply
here — a poster can break the grid, use one huge dramatic type treatment,
and never need a hover state.

## Common fixed dimensions to know

- Open Graph / social share image: 1200×630px
- Instagram post: 1080×1080px (square) or 1080×1350px (portrait)
- Instagram/story: 1080×1920px
- Twitter/X card: 1200×675px
- Blog cover (varies by CMS, commonly 1600×900px or 16:9)

Always confirm the exact target dimension before generating — a visual
that's "close enough" gets cropped unpredictably by the target platform.

## Composition guidance

1. **One clear focal point** — a single dominant headline, image, or
   shape; standalone visuals are consumed in under two seconds (a social
   feed scroll), so hierarchy must be instant, not discovered.
2. **Safe margins**: keep essential text/logo at least 8% of the shorter
   dimension away from any edge — platforms crop unpredictably
   (profile photo overlaps, rounded corners, UI chrome).
3. **Legible at thumbnail size** — always check the design shrunk to
   ~120px wide; if the headline is unreadable at that size, increase
   type size or simplify the composition.
4. **Brand consistency still applies** — see
   `skills/design/brand-guidelines/SKILL.md`; a poster is still a brand
   surface even though its layout rules are looser.

## Common mistakes to avoid

- Reusing a website hero-section layout unscaled for a square social
  post — different aspect ratios need different compositions, not a
  cropped version of the same one.
- Placing critical text near edges that get cropped or covered by
  platform UI (profile pictures, captions, timestamps).
- Using more than one dominant focal point — competing headlines/images
  make the visual illegible at scroll speed.

## Related

- `skills/design/brand-guidelines/SKILL.md`
- `skills/marketing/social-media-content/SKILL.md`
- `skills/ui-ux/typography-color-2026/SKILL.md`
