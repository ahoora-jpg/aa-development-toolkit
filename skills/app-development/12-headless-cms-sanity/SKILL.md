# Headless CMS Integration (Sanity pattern)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for structuring a headless CMS (patterns here use
Sanity Studio as the reference, but the principles apply to any headless
CMS) so non-developers can publish content daily without touching code,
while the frontend stays fast, typed, and SEO-correct.

## Core principle: content types are schemas, not ad-hoc fields

Define every content type explicitly before building any CMS-driven page.
Minimum content types for a typical content-driven corporate site:

```
Page, News Article, Research Article, Project, Publication, Technology,
Brand, Team Member, Office/Contact Location, FAQ, Homepage Banner
```

Each type gets its own schema with clearly typed fields — never a single
generic "content blob" type used for everything. This is what makes the
CMS editable by non-developers without breaking the frontend.

## Minimum field set for an article-like content type

```
Title, Slug, Summary, Main Content (rich text/portable text),
Language, Publication Date, Author, Category, Featured Image,
SEO Title, Meta Description, Sources, Related Articles,
Translation Links (references to the same article in other locales)
```

## Draft / Preview / Publish workflow (required, not optional)

1. **Draft** — editable, not visible on the live site.
2. **Preview** — a signed, session-scoped preview URL lets an editor see
   the live-rendered page before publishing (Next.js Draft Mode + a CMS
   preview token). Preview access must be restricted to authorized
   editors, never a public URL.
3. **Publish** — content goes live. On publish, the CMS should fire a
   signed webhook to the frontend to trigger on-demand revalidation
   (regenerate just that page, not a full site rebuild).

```ts
// app/api/revalidate/route.ts (Next.js webhook handler)
export async function POST(req: Request) {
  const signature = req.headers.get('sanity-webhook-signature');
  const isValid = await verifySignature(await req.text(), signature, WEBHOOK_SECRET);
  if (!isValid) return new Response('Invalid signature', { status: 401 });

  const { slug, locale } = await req.json();
  revalidatePath(`/${locale}/${slug}`);
  return new Response('OK');
}
```

Signature validation on the webhook is mandatory — an unauthenticated
revalidation endpoint is a real attack surface, not a theoretical one.

## Document-level localization pattern

For content-heavy types (articles, pages), store **each language as its
own document**, linked via a `translations` reference field, rather than
one document with a language field per section. This is the pattern
Sanity itself recommends for long-form, independently-published content.

Why: publishing English shouldn't be blocked on French translation being
ready; each language gets its own slug, SEO metadata, and publish date;
translators can work independently without merge conflicts.

```
Article (EN) ←→ Article (DE) ←→ Article (FR) ←→ Article (ES)
   (linked via translationLinks field on each document)
```

## Security baseline for the CMS panel

- [ ] Login via individual accounts, not a shared credential
- [ ] 2FA enforced for all editor/admin accounts
- [ ] Role separation: admin vs. editor permissions, not everyone as admin
- [ ] API tokens never committed to the code repository
- [ ] Preview URLs restricted to authenticated/authorized users only
- [ ] Webhook endpoints validate a signature, not just a shared secret
      in a query string
- [ ] Version history retained; ability to roll back to a prior version

## Common mistakes to avoid

- One giant "flexible content" schema for every page type — flexible
  sounds good but makes the CMS harder to use correctly and harder to
  validate/typecheck on the frontend.
- Skipping the preview step and publishing directly — editors need to
  see the real rendered result before it's public, especially for a
  multi-language site where layout can break per language.
- Treating translation as a field on one document instead of separate
  linked documents — blocks independent publishing per language.

## Related

- `skills/app-development/11-nextjs-app-router/SKILL.md`
- `skills/app-development/13-i18n-multilingual/SKILL.md`
- `docs/security.md`
- `docs/quality-gate.md`
