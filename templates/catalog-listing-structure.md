# Template: Catalog / Listing Page Structure

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Generic structure for any item catalog (retail, services, real estate,
courses, etc. — swap terminology per project). Use with
`prompts/build-catalog-listing-page.md`.

```
1. Navbar
2. Page header: category title + short description + result count
3. Filter/sort controls
   - Sidebar (desktop) or collapsible bar (mobile)
   - Common filters: category, price/value range, attribute tags, availability
   - Sort: relevance, price low-high/high-low, newest, rating
4. Item grid (components/card/COMPONENT.md)
   - Responsive: auto-fill grid, no horizontal scroll on mobile
   - Empty state: clear message + suggestion when filters return 0 results
5. Pagination or infinite scroll
6. Footer
```

## Detail page (linked from each card)

```
1. Navbar
2. Image gallery (main image + thumbnails)
3. Title, key attributes, price/value, primary CTA
4. Description (structured — specs table if applicable, not just prose)
5. Related/similar items
6. Footer
```

## Notes

- Add Schema.org JSON-LD per item and per detail page — see
  `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md`.
- This structure applies to a catalog for any category — do not assume a
  specific product type when reusing it.
