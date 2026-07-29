---
name: generative-engine-optimization
description: "Improve the likelihood that a brand or source is accurately cited in AI-generated answers through clear entities, evidence, structure, and authority. Use when auditing or planning content for AI answer visibility."
---

# Generative Engine Optimization (GEO)

## Purpose

GEO is a distinct discipline from classic SEO (`skills/seo/SKILL.md`), focused on getting a brand cited, quoted, or recommended by AI answer systems — ChatGPT, Google AI Overviews, Perplexity, Gemini, Claude — rather than ranking among ten blue links. A simple way to separate the three related disciplines: SEO ranks you, AEO (Answer Engine Optimization) gets you selected for a direct-answer box, GEO gets you cited/recommended inside a generated AI answer. By 2026, GEO is treated as essential, not optional, since a large and growing share of searches end without any website click.

## Key Sources

### GEO: Generative Engine Optimization (academic paper)

Source:
https://arxiv.org/abs/2311.09735

Authors: Aggarwal et al. (Princeton University, Georgia Tech, Allen Institute for AI, IIT Delhi), presented at KDD 2024

Notes: The original controlled study that coined and measured GEO. Tested specific content changes against each other for their effect on AI-citation visibility — this is the evidence base behind the tactics below, not marketing-blog speculation.

### Google Search Central

Source:
https://developers.google.com/search

Maintained by: Google

Notes: Same source as `skills/seo/SKILL.md` — Google's AI Overviews draw on the same crawling/indexing/structured-data foundation as classic search, so technical SEO remains a prerequisite for GEO, not a separate system.

## Core Concepts To Apply

- **Answer the question directly, immediately**: AI systems using real-time retrieval (Perplexity, AI Overviews) weight a page's opening content heavily — the first ~150–200 words of any article should fully answer the primary question, not build up to it. This is the opposite of traditional "intro paragraph" writing.
- **Cite sources and statistics within your own content**: the original GEO research found that adding a sourced statistic or a quoted expert opinion measurably increases how often a page gets cited by AI systems — roughly a 25–30% lift each, per the study's controlled tests. Keyword stuffing and artificial simplification showed no such effect, or actively hurt visibility.
- **Structure for extraction, not just readability**: clear headings phrased as real user questions, short self-contained answer blocks, and lists/tables — AI systems retrieve and quote "chunks," not full pages, so each section should stand alone and make sense out of context.
- **Original data and named authorship**: a unique benchmark, dataset, survey, or expert commentary gives an AI system a concrete reason to cite one source over many similar-looking competitors; unattributed or generic content is easy to skip in favor of a citable original.
- **Freshness and visible update dates**: AI systems weight recency when choosing which source to cite on a given topic — keep a real "last updated" date, and periodically refresh cornerstone content with new data rather than leaving it static.
- **Technical SEO is still the floor**: structured data (schema.org, see `skills/seo/SKILL.md`), fast Core Web Vitals (`skills/ui-ux/performance/`), and clean crawlability remain required — GEO builds on top of technical SEO, it doesn't replace it.
- **Measure differently than classic SEO**: track AI-citation frequency (how often and where the brand is quoted/linked across ChatGPT, Perplexity, AI Overviews, Gemini) alongside — not instead of — organic ranking and click-through metrics; this typically requires manual citation audits since standard analytics tools don't yet track it natively.

## When To Use

Apply to any content meant to answer a specific question — guides, FAQs, comparison pages, how-to content — since this is what AI systems retrieve from most. Prioritize GEO investment for content in categories where users increasingly ask AI assistants directly instead of searching (research, comparisons, troubleshooting).

## External Sources

The academic source above is the evidence base for these tactics; treat marketing-blog "GEO guides" as secondary interpretations of that research, not primary sources — re-verify specific tactic effectiveness against the original paper or its successors as AI answer systems continue to evolve.
