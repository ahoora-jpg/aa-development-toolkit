# SEO (Search Engine & AI-Answer Optimization)

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to build a site that ranks well in traditional Google search AND gets cited in AI-generated answers (Google AI Overviews, ChatGPT, Perplexity, Gemini) — both now drive real traffic, and by 2026 a large share of searches end without a click, making AI-citation as valuable as a top-5 ranking. This expands and replaces the short list in `docs/seo.md`.

## Key Sources

### Google Search Central

Source:
https://developers.google.com/search

Maintained by: Google

Notes: Google's own official documentation on how Search works, indexing requirements, structured data guidelines, and ranking system updates — the primary source of truth over any third-party SEO blog.

### schema.org

Source:
https://schema.org

Maintained by: Google, Microsoft, Yahoo, Yandex (joint project)

Notes: The shared vocabulary for structured data markup (JSON-LD). Correctly marked-up content is far more likely to be extracted cleanly by both classic search snippets and AI answer engines.

### schema-dts

Repository:
https://github.com/google/schema-dts

License: Apache-2.0

Notes: Official TypeScript type definitions for schema.org, useful for building structured-data JSON-LD objects without typos in property names.

## Core Concepts To Apply

### Technical foundation (table stakes)

- **Crawlable, semantic HTML**: every important page must be reachable without JavaScript execution — server-render or pre-render critical content (see `skills/app-development/` architecture choices).
- **One clear URL per piece of content**: stable, descriptive URLs; correct canonical tags to avoid duplicate-content dilution.
- **XML sitemap and clean robots directives**: keep the sitemap current and make sure nothing important is accidentally blocked from indexing.
- **Structured data (schema.org/JSON-LD)**: mark up articles, products, FAQs, and organization info so both classic search and AI systems can extract facts reliably rather than guessing from raw text.
- **Core Web Vitals as a ranking factor**: pages passing LCP/INP/CLS thresholds measurably outrank pages that don't at the same content quality — see `skills/ui-ux/performance/` for implementation.
- **Mobile-first**: mobile indexing is now the default; a poor mobile experience is a structural disadvantage, not a minor deduction — see `skills/ui-ux/mobile-first-responsive/`.

### Content and authority (E-E-A-T)

- **E-E-A-T as a quality framework**: Google's quality raters assess Experience, Expertise, Authoritativeness, and Trustworthiness; this shapes algorithm training rather than acting as a direct per-page score, but it correlates strongly with rankings in practice.
- **Visible human authorship and real experience**: content showing a named author with real credentials, first-hand experience, and original examples outperforms generic or unedited AI-generated text, which recent guideline updates increasingly flag as lower quality.
- **Original information gain**: content that adds a genuinely new data point, example, or perspective — not a restatement of what's already on page one — is what both classic ranking and AI citation systems reward most.
- **Freshness matters**: regularly updated pages (not just re-published dates) get cited/ranked more; treat evergreen pages as living documents, not one-time publishes.
- **Editorial process for any AI-assisted writing**: use AI as a drafting tool, then fact-check every claim, add real first-person insight, and edit for the brand's actual voice before publishing — unedited AI output is a known ranking risk.

### Answer-engine optimization (new for 2026)

- **Structure content to be quotable**: put a direct, self-contained 40–60 word answer near the top of a page for any question-style content — this is the block AI systems most often cite verbatim.
- **Use clear headings, lists, and tables**: AI systems extract "chunks" of content, not whole pages — a well-structured page with clear Q&A-style headings is far easier to cite correctly.
- **Track new metrics, not just rank position**: alongside organic ranking, monitor whether/how often the brand is cited in AI Overviews and chat-based answer engines — a growing share of valuable visibility never produces a click.
- **Backlinks and brand mentions still matter**: AI systems weigh external trust signals (being mentioned/linked by other credible sites) similarly to how classic search does — digital PR and genuine backlinks remain relevant, not obsolete.

## When To Use

Apply technical foundation and Core Web Vitals items to every page from launch. Apply the E-E-A-T and content-structure guidance to any content meant to rank or be cited — blog posts, service pages, FAQs. Revisit this file periodically: search algorithms (Google ran a major "Core Update" in early 2026) and AI-citation behavior are both still changing quickly.

## External Sources

All sources above are external and maintained by Google or a joint industry group — link to them rather than duplicating their content, since ranking systems and AI-citation behavior change often enough that a static copy would go stale within months.
