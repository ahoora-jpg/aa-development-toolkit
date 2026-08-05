# Agent-Ready Sites (WebMCP & Structured Metadata)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for making a website legible to AI agents (browsing
assistants, shopping agents, voice assistants) — not just to search
engines and human eyes. Complements `skills/seo/SKILL.md`.

## Why this matters in 2026

A growing share of traffic comes from AI agents acting on behalf of users
(comparing products, filling forms, completing checkouts). Sites that only
expose meaning through visual layout and raw HTML force agents to guess;
sites with structured metadata let agents act accurately and cheaply.
Emerging conventions (broadly grouped under "WebMCP") describe page
elements, available actions, and user roles in a structured, machine-
readable way alongside the normal HTML.

## Baseline requirements (do these regardless of framework)

1. **Semantic HTML first** — real `<button>`, `<nav>`, `<form>`,
   `<article>` elements, not `<div onclick>` soup. This alone is most of
   what makes a page legible to agents and screen readers.
2. **Schema.org structured data** (JSON-LD) for any page representing a
   real-world entity: `Product`, `Article`, `Organization`, `Event`,
   `FAQPage`, `BreadcrumbList`. This is the most portable, widely
   supported layer and should be considered mandatory, not optional.
3. **Descriptive `aria-label`s and `name` attributes** on interactive
   elements — an agent (or screen reader) filling a form needs to know
   what a field means, not just that it exists.
4. **Stable, meaningful URLs** for anything an agent might need to
   reference or return to (`/products/stand-mixer-x200`, not
   `/p?id=93821`).

## Example: Product JSON-LD (framework-agnostic)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Example Stand Mixer X200",
  "image": "https://example.com/images/x200.jpg",
  "description": "5-liter stand mixer with 10 speed settings.",
  "sku": "X200-SS",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "249.00",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

## When to go further (actual WebMCP-style action metadata)

For sites where an agent needs to *do* something (search, filter, add to
cart, submit a form) rather than just *read* something, expose the
available actions explicitly rather than relying on the agent to infer
them from button labels and JS event handlers. This is an emerging area —
treat any specific implementation as `Status: Draft` in this repo until
a stable, widely adopted spec exists, and re-verify current best practice
before depending on it in production.

## Common mistakes to avoid

- Building an entire page in a JS framework with no server-rendered
  semantic HTML fallback — agents and crawlers that don't execute JS see
  nothing meaningful.
- Adding JSON-LD that doesn't match the visible page content — this is
  treated as spam/manipulation by search engines and erodes agent trust
  in the data.
- Div-based fake buttons/links with only a `click` handler and no
  keyboard or ARIA support — fails both accessibility and agent legibility
  at once.

## Related

- `skills/seo/SKILL.md`
- `skills/seo/generative-engine-optimization/SKILL.md`
- `skills/ui-ux/accessibility/SKILL.md`
