# Prompt: Build a Catalog / Listing Page

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Reusable, category-agnostic prompt template for any product/item catalog
(retail, real estate, services, media — swap the category).

```
Build a catalog/listing page for [CATEGORY, e.g. "handmade furniture" /
"rental apartments" / "online courses"].

Include: a filter/sort sidebar or bar (by [relevant attributes]), a
responsive grid of item cards (see components/card/COMPONENT.md), and
pagination or infinite scroll for [expected item count] items.

Each item card should show: image, title, key attribute(s), price or
primary value, and a clear call-to-action.

Constraints:
- Mobile-first responsive grid, no horizontal scroll on small screens
- WCAG AA accessibility minimum
- Use design tokens, not hard-coded colors/spacing
- Add Schema.org JSON-LD per item (Product/Offer, or the closest
  matching schema.org type for this category)
- No checkout/payment yet unless specified — structure for easy addition
```
