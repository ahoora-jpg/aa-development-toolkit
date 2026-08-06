# Multi-Language Routing & SEO (i18n)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for structuring a multi-language site correctly —
URL structure, per-language SEO metadata, and content that can publish
independently per language. Complements
`skills/app-development/11-nextjs-app-router/SKILL.md` and
`skills/app-development/12-headless-cms-sanity/SKILL.md`.

## URL structure

Prefix every non-default locale in the path; the default language lives
at the root with no prefix:

```
/                  default language (e.g. English)
/de                German
/fr                French
/es                Spanish

/research          default language
/de/research
/fr/research
/es/research
```

Avoid subdomains (`de.example.com`) or query params (`?lang=de`) for
primary language routing — path-prefixing is simpler to implement,
crawl, and reason about, and is what Next.js's built-in i18n routing
conventions expect.

## hreflang (required on every page, every language)

```html
<link rel="alternate" hreflang="en" href="https://example.com/research" />
<link rel="alternate" hreflang="de" href="https://example.com/de/research" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/research" />
<link rel="alternate" hreflang="es" href="https://example.com/es/research" />
<link rel="alternate" hreflang="x-default" href="https://example.com/research" />
```

- Every language version of a page must list **all** other language
  versions, including itself — this is a common mistake (self-referencing
  omitted).
- `x-default` points to the default-language version (or a language
  selector page, if one exists) — it tells search engines what to serve
  users whose language doesn't match any listed variant.
- Generate this programmatically from the CMS's translation-links field
  (see skill 12) — never hand-maintain hreflang lists.

## Handling missing translations (don't block publishing)

Because content is stored as independent per-language documents, a page
may exist in English but not yet in German. Rules:

1. **Never show a broken/empty page** for a missing translation.
2. Either omit that language from the language switcher entirely for
   that specific page, or fall back to the default language with a
   visible notice ("This page is not yet available in German — showing
   English").
3. Don't include `hreflang` for a language variant that doesn't exist yet.

## Language switcher behavior

- Switching language should land on the **equivalent page** in the new
  language when it exists (e.g. `/research` → `/de/research`), not
  reset to that language's homepage.
- If the equivalent page doesn't exist in the target language, fall back
  per the rule above rather than 404ing.
- Persist the chosen language across navigation (route-based, since
  path-prefixing already does this automatically — no extra client
  state needed).

## Content that should NOT be machine-translated 1:1

Per the source content strategy: translations don't need to be
word-for-word. SEO titles, meta descriptions, and headlines should be
written naturally for each language's search behavior, not translated
literally — a literal translation of an English SEO title is rarely the
phrase a German speaker would actually search for. See
`skills/marketing/ai-content-guardrails/SKILL.md` for related copy
guidance.

## Sitemap

Generate one sitemap (or per-locale sitemaps referenced from a sitemap
index) covering every published language variant, each entry including
its own hreflang alternates — not just the default-language URLs.

## Common mistakes to avoid

- Missing self-referencing hreflang tag (a page must list itself among
  its own alternates).
- Using the browser's `Accept-Language` header to silently redirect
  users without a visible, persistent way to switch — this breaks
  bookmarking, sharing links, and SEO crawling of non-default languages.
- Blocking the entire site's publish pipeline on all four languages
  being ready simultaneously.

## Related

- `skills/app-development/11-nextjs-app-router/SKILL.md`
- `skills/app-development/12-headless-cms-sanity/SKILL.md`
- `skills/seo/SKILL.md`
- `skills/ui-ux/rtl-farsi/SKILL.md` (if any target language is RTL)
