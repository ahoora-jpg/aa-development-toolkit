# Brand Guidelines Enforcement

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for keeping AI-assisted output (web pages, docs,
slides, social posts) consistent with a defined brand — logo usage,
color, type, voice — across every surface, not just the first screen
generated.

## Why this is its own skill

It's easy to get one good AI-generated screen. The harder, recurring
problem is keeping the fifth and the tenth screen — and the deck, and the
one-pager, and the social post — feeling like the same brand. This skill
exists to catch that drift before it compounds.

## Minimum brand definition needed before generating anything

1. **Logo rules**: minimum clear space, minimum size, approved
   backgrounds, forbidden treatments (no recoloring, no stretching, no
   drop shadows unless specified).
2. **Color palette**: primary, secondary, accent, neutrals — with hex
   values, and which colors may/may not be used as a background vs. text.
3. **Typography**: primary typeface + fallback stack, and a short rule
   for headline vs. body usage.
4. **Voice & tone**: 3–5 adjectives (e.g. "direct, warm, no jargon") plus
   one short example sentence in-voice and one clearly out-of-voice, so
   an AI assistant can pattern-match tone, not just vocabulary.
5. **Imagery style**: photography vs. illustration, color grading
   direction, and any "never do this" examples.

Store this as a single reference file (e.g.
`brand/brand-guidelines.md` in a given project) and point any AI assistant
to it before generating brand-facing content.

## Enforcement checklist (apply to every generated deliverable)

- [ ] Logo used per clear-space and minimum-size rules
- [ ] Only palette colors used (check any AI-invented accent colors)
- [ ] Only approved typefaces used
- [ ] Copy tone matches the defined voice adjectives
- [ ] Imagery style matches the defined direction
- [ ] Consistent with the most recent previously approved deliverable,
      not just the brand doc in isolation (drift often happens between
      screens, not just against the source doc)

## Common mistakes to avoid

- Treating brand guidelines as a one-time input instead of a checklist
  applied to every new deliverable.
- Letting an AI assistant introduce a "close enough" color or font when
  the specified brand asset isn't available in the current tool.
- Defining color and type but skipping voice/tone — inconsistent copy
  voice is just as noticeable as inconsistent visuals.

## Related

- `skills/design/design-systems/SKILL.md`
- `skills/ui-ux/design-tokens-handoff/SKILL.md`
- `skills/marketing/content-copywriting/SKILL.md`
