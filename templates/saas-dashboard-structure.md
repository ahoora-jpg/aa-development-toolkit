# Template: SaaS Dashboard Structure

Status: Draft
Last reviewed: 2026-08-05
Source: Original (this repo)

Generic authenticated-app shell, not tied to any specific product.

```
1. Sidebar navigation (collapsible on mobile) — primary sections
2. Top bar — search, notifications, account menu
3. Main content area
   - Page title + primary action button (top-right, standard placement)
   - Content: table / cards / charts depending on page purpose
4. Empty states for every list/table (first-run, no-results, error)
5. Loading states (skeleton screens preferred over spinners for
   perceived performance on data-heavy views)
```

## Notes

- Keep sidebar and top bar as shared layout components — every dashboard
  page should compose the same shell.
- Data tables need sort, filter, and pagination as standard, not
  per-project reinvention.
