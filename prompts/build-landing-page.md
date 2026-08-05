# Prompt: Build a Landing Page

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Reusable prompt template for any AI coding assistant. Replace bracketed
placeholders per project; keep the structure and constraints as-is.

```
Build a modern, minimal landing page for [PRODUCT/SERVICE NAME], a
[one-sentence description of what it is/does].

Style: [e.g. "Apple/Samsung-style minimal" | "warm and approachable" |
"bold and energetic"]. Use design tokens (see
skills/ui-ux/design-tokens-handoff/SKILL.md) rather than hard-coded
colors. Respect dark mode rules in skills/ui-ux/dark-mode-2026/SKILL.md
if dark mode is in scope.

Sections needed: hero with headline + CTA, [feature highlights /
product showcase], social proof or testimonials, final CTA, footer.

Constraints:
- Mobile-first responsive (see skills/ui-ux/mobile-first-responsive/SKILL.md)
- WCAG AA accessibility minimum (see skills/ui-ux/accessibility/SKILL.md)
- Semantic HTML + basic Schema.org JSON-LD for the entity type
  (see skills/ui-ux/agent-ready-sites-webmcp/SKILL.md)
- No [cart/checkout/backend] yet — structure the code so it can be added
  later without a rewrite.
```
