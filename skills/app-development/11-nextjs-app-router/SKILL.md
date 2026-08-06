# Next.js App Router

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for building multi-page, content-driven sites with
Next.js App Router — the pattern this toolkit recommends for corporate/
content sites needing multi-language support, a headless CMS, and strong
SEO out of the box (server-rendered by default).

## When to reach for this vs. a simpler static site

- **Use App Router** when the site has: multiple content types edited
  regularly by non-developers (news, articles, projects), multi-language
  routing, or a need for on-demand revalidation when a CMS publishes.
- **Don't use it** for a single static page with no CMS and no planned
  content updates — plain HTML/a simpler static generator is less
  overhead. See `templates/landing-page-structure.md` for that case.

## Core routing conventions

```
app/
├── layout.tsx              # Root layout — shared shell (nav, footer, fonts)
├── page.tsx                # Homepage (/)
├── [locale]/                # Locale segment for i18n — see skill 13
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── research/page.tsx
│   └── news-insights/
│       ├── page.tsx         # listing
│       └── [slug]/page.tsx  # detail page
```

- File-based routing: a folder = a route segment, `page.tsx` = the page
  itself, `layout.tsx` = a shared shell that persists across navigation
  within that segment (doesn't remount on every page change).
- Nested layouts compose automatically — root layout wraps every page,
  a section layout wraps only that section.

## Server-first rendering (why this matters for SEO)

App Router components are **Server Components by default** — rendered on
the server, shipped as HTML, with `<script>` only for what's genuinely
interactive. This is what keeps content readable without JavaScript
execution, satisfying `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md`
and standard SEO crawling.

Mark a component `'use client'` only when it needs browser APIs, state,
or event handlers (a language switcher, a mobile menu toggle, a form).
Keep client components as small and as low in the tree as possible —
don't mark an entire page client just because one button needs an
`onClick`.

## Data fetching pattern (for CMS-backed pages)

```tsx
// app/[locale]/research/[slug]/page.tsx
export async function generateStaticParams() {
  const articles = await getAllArticleSlugs(); // fetch from CMS
  return articles.map((a) => ({ slug: a.slug, locale: a.locale }));
}

export default async function ArticlePage({ params }: { params: { slug: string; locale: string } }) {
  const article = await getArticle(params.slug, params.locale); // server-side fetch
  if (!article) return notFound();
  return <ArticleBody article={article} />;
}
```

- Fetch directly inside Server Components with `async`/`await` — no
  client-side loading spinners needed for initial content.
- Use `generateStaticParams` for CMS content that changes infrequently;
  combine with on-demand revalidation (webhook-triggered, see skill 12)
  so publishing in the CMS updates the live site without a full rebuild.

## Metadata per page (required for multi-language SEO)

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await getArticle(params.slug, params.locale);
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: article.canonicalUrl,
      languages: article.hreflangMap, // { en: '...', de: '...', fr: '...', es: '...', 'x-default': '...' }
    },
    openGraph: { images: [article.featuredImage] },
  };
}
```

## Common mistakes to avoid

- Marking pages `'use client'` unnecessarily, losing server-rendering
  and SEO benefits for content that never needed to be client-rendered.
- Fetching CMS content client-side (`useEffect` + fetch) for content
  that's known at request/build time — this delays content behind a
  loading state for no reason and hurts crawlability.
- Skipping `generateMetadata` per page — generic site-wide metadata on
  every page is a common and costly SEO miss on multi-page sites.

## Related

- `skills/app-development/12-headless-cms-sanity/SKILL.md`
- `skills/app-development/13-i18n-multilingual/SKILL.md`
- `skills/ui-ux/agent-ready-sites-webmcp/SKILL.md`
- `skills/seo/SKILL.md`
