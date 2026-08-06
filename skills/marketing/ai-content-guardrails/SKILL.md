# AI-Generated Content Guardrails

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules to keep AI-written copy (product descriptions,
headlines, blog posts, marketing text) from reading as generic,
templated, or obviously AI-generated. Applies whenever an AI assistant
using this toolkit writes real content, not just UI structure.

## Why this matters

Generic AI copy has a recognizable fingerprint — certain phrases,
sentence rhythms, and structural habits that readers now notice and
distrust on sight. This costs conversion and credibility even when the
underlying claims are accurate. This skill exists to catch that pattern
before it ships, the same way `docs/quality-gate.md` catches visual/UX
issues.

## Phrases and patterns to avoid by default

- Generic hype openers: "In today's fast-paced world...", "In the ever-
  evolving landscape of...", "Look no further..."
- Empty superlatives with no supporting specific: "game-changing",
  "revolutionary", "unparalleled", "seamless experience" — used without
  a concrete fact backing the claim.
- The "not just X, but Y" construction, overused as a rhetorical crutch.
- Listing three adjectives in a row as a substitute for one specific
  detail ("fast, reliable, and efficient").
- Ending sections with a vague forward-looking platitude ("The
  possibilities are endless.").
- Uniform paragraph lengths and rhythm across an entire piece — real
  writing varies sentence length; a wall of same-length sentences reads
  as machine-generated.

## What to do instead

1. **Lead with a specific, verifiable detail**, not a general claim.
   "5-liter capacity, 10 speed settings" beats "powerful and versatile."
2. **Vary sentence length deliberately** — mix short punchy sentences
   with longer explanatory ones.
3. **Write toward the defined brand voice**, if one exists — see
   `skills/design/brand-guidelines/SKILL.md`. Voice adjectives constrain
   word choice far more usefully than "make it sound professional."
4. **Cut the sentence if it would be true of literally any competing
   product** — if "high-quality materials" applies equally to every
   competitor, it's not doing any work; replace it with the specific
   material, spec, or process that's actually true here.
5. **Read it back at a slower pace than you wrote it** and ask: would a
   person actually say this out loud to a friend? If not, rewrite.

## Self-check before presenting AI-written copy as final

- [ ] No unsupported superlatives ("the best", "revolutionary") without
      a concrete fact next to them
- [ ] No generic hype-opener sentence
- [ ] Sentence lengths vary noticeably across the piece
- [ ] Every claim is specific enough that it would be false for at least
      some competing product (a real differentiator test)
- [ ] Matches the project's defined brand voice, if one exists
- [ ] Read aloud test: sounds like something a person would actually say

## Scope note

This skill governs marketing/descriptive copy. It does not apply to
technical documentation, legal text, or UI microcopy (button labels,
error messages), which have their own precision-first conventions and
should stay plain and literal rather than "de-AI-ified" for style.

## Related

- `skills/design/brand-guidelines/SKILL.md`
- `skills/marketing/content-copywriting/SKILL.md`
- `docs/quality-gate.md`
