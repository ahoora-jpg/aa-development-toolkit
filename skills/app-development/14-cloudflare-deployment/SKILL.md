# Cloudflare Deployment (DNS, CDN, WAF)

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for deploying a site (Next.js or otherwise) behind
Cloudflare for DNS, CDN, and basic security — without a traditional
always-on backend server to manage.

## What Cloudflare covers in this stack

- **DNS**: domain resolution, including subdomains (e.g. a CMS studio at
  `studio.example.com`, separate from the public site).
- **CDN**: caches static assets and, where configured, full pages at the
  edge — reduces latency globally without a custom CDN setup.
- **WAF / security**: basic bot mitigation, rate limiting, and optional
  access restriction (Cloudflare Access) for non-public routes like a
  CMS studio or preview environment.

## Subdomain separation for the CMS panel

Keep the CMS/admin panel on its own subdomain, not a path on the main
domain:

```
example.com          → public site
studio.example.com   → CMS panel (separate deploy, separate access control)
```

This keeps the CMS's authentication and access rules fully independent
from the public site's caching and routing rules, and avoids any
possibility of admin routes being accidentally cached or exposed via the
public site's CDN rules.

## Caching rules — what to cache aggressively vs. never

- **Cache aggressively at the edge**: static assets (images, fonts, JS/CSS
  bundles), fully static pages with no personalization.
- **Cache with revalidation**: CMS-driven content pages — use short-lived
  cache + on-demand purge triggered by the CMS publish webhook (see
  `skills/app-development/12-headless-cms-sanity/SKILL.md`) rather than a
  long TTL that goes stale after every content update.
- **Never cache**: authenticated routes, preview-mode pages, API routes
  that mutate data.

## Restricting the CMS studio (optional but recommended)

For a company site where the CMS shouldn't be publicly reachable at all,
put `studio.example.com` behind Cloudflare Access (identity-based access
control at the edge) so even the login page isn't reachable without
being on an allowed identity — an extra layer beyond the CMS's own
authentication.

## Common mistakes to avoid

- Putting the CMS studio on a path (`example.com/studio`) instead of a
  subdomain — makes independent caching/access rules harder to apply
  cleanly and risks the studio being swept into public-site cache rules.
- Long, unconditional cache TTLs on CMS-driven pages — causes published
  changes to not appear for users until the cache naturally expires,
  confusing editors who just hit "Publish."
- No cache purge/revalidation tied to the publish event — makes editors
  distrust the "instant publish" promise of a headless CMS setup.

## Related

- `skills/app-development/12-headless-cms-sanity/SKILL.md`
- `docs/security.md`
- `docs/performance.md`
