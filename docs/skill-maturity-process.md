# Skill Maturity & Promotion Process

Status: Approved
Last reviewed: 2026-08-05

## Purpose

A lightweight process for moving a skill from `Draft` to `Approved` based
on real usage outcomes, so the status field in every `SKILL.md` means
something — not just "written once and never revisited."

This extends the asset status model already defined in
`docs/manifest.md` (Draft / Review / Approved / Deprecated) with a
concrete promotion rule and a place to log outcomes.

## The rule

A skill may move from `Draft` to `Review` after **3 real uses** across
any project, and from `Review` to `Approved` after those 3 uses produced
acceptable results with no unresolved issues traced back to following
the skill's guidance. A skill with a use that caused a real problem stays
at `Draft`/`Review` and gets a note explaining what went wrong, until the
skill content itself is corrected.

This is deliberately simple — no scoring formula, no committee. Three
clean real-world uses is the bar.

## How to log a use

Add one line to `docs/skill-usage-log.md` (create the entry under the
skill's own heading) every time a skill is actually applied to real work
— not test/demo usage:

```
- 2026-08-05 — used in [project/context] — outcome: worked as documented
- 2026-08-12 — used in [project/context] — outcome: issue found, see note
```

Keep entries to one line. This is a log, not a report — the goal is
low-friction enough that logging actually happens.

## When an issue is found

1. Log it in `docs/skill-usage-log.md` under the relevant skill, with a
   short description of what went wrong.
2. Fix the `SKILL.md` content itself, not just the one instance where it
   was misapplied — the point is that the next AI assistant reading the
   skill doesn't repeat the same mistake.
3. Reset the use-count for promotion purposes — the 3 clean uses needed
   for `Approved` should be 3 uses of the *corrected* version.

## Who updates `Status:` in a SKILL.md

Any AI assistant (or the repo owner) may update a skill's `Status:` line
once the promotion rule above is met, and must update `Last reviewed:`
to the date of that change. Don't upgrade a skill's status without at
least 3 logged uses behind it — an unused skill sitting at `Approved`
undermines the whole point of the status field.

## Why not a numeric score

A 1–5 rating invites false precision on something inherently qualitative
(did the guidance actually help, yes or no). Binary promotion + a short
log of what happened is more honest about what's actually known, and
much cheaper to maintain than a scoring system nobody keeps updated.

## Related

- `docs/manifest.md` (asset status model)
- `docs/skill-usage-log.md` (the log itself — create/append as skills are used)
