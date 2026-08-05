# Tool: Pre-Launch Performance/Quality Checklist

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Manual checklist for any project before launch — pairs with automated
Lighthouse/PageSpeed Insights runs.

- [ ] Largest Contentful Paint (LCP) under 2.5s
- [ ] Cumulative Layout Shift (CLS) under 0.1 — check images/ads have
      explicit width/height to prevent shift
- [ ] Interaction to Next Paint (INP) under 200ms
- [ ] Images served in modern formats (WebP/AVIF) with responsive `srcset`
- [ ] Fonts: `font-display: swap` set, no more than 2-3 font families loaded
- [ ] No console errors in production build
- [ ] All interactive elements reachable and usable via keyboard only
- [ ] Color contrast checked per `tools/contrast-check-snippet.md`
- [ ] `prefers-reduced-motion` respected (see
      `skills/ui-ux/motion-scroll-driven/SKILL.md`)
- [ ] Meta description + Open Graph tags + JSON-LD present per
      `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md`

## Related

- `docs/performance.md`
- `docs/review-checklist.md`
