# Voice UI (VUI) Navigation

Status: Draft
Last reviewed: 2026-08-05

## Purpose

Project-agnostic rules for adding hands-free voice navigation and voice
search to a website — an increasingly common expectation alongside
traditional keyboard/mouse/touch input, not a replacement for them.

## Baseline approach

1. **Start from the Web Speech API** (`SpeechRecognition` for input,
   `SpeechSynthesis` for output) — no external service required for a
   basic implementation; verify current browser support before shipping,
   since coverage varies by browser.
2. **Voice is an additional input method, never the only one.** Every
   voice-triggered action must have an equivalent visible, clickable/
   tappable control — voice UI must degrade gracefully for users who
   can't or don't want to use it.
3. **Give clear visual feedback** the moment listening starts/stops (a
   microphone icon state change, a subtle waveform, or pulsing indicator)
   — silent listening with no feedback is disorienting and an
   accessibility problem.
4. **Keep the command vocabulary small and forgiving** — support a few
   clear intents ("search for X", "go to Y", "add to cart") with fuzzy
   matching, rather than requiring exact phrasing.

## Minimal implementation pattern

```js
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.lang = 'en-US'; // or the site's primary language

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript.toLowerCase();
  handleVoiceCommand(transcript);
};

function startListening() {
  document.getElementById('mic-button').setAttribute('data-listening', 'true');
  recognition.start();
}

recognition.onend = () => {
  document.getElementById('mic-button').setAttribute('data-listening', 'false');
};
```

## Accessibility considerations

- Voice UI is a supplement for accessibility, not a substitute — some
  users can't speak commands reliably (speech disabilities, noisy
  environments, privacy concerns in public); the underlying task must
  still be fully completable by keyboard and screen reader alone.
- Always request microphone permission with clear context ("Tap the mic
  to search by voice") rather than an unexplained browser permission
  prompt.

## Common mistakes to avoid

- Building voice as the primary or only way to complete a critical task
  (checkout, form submission).
- No visible fallback UI — voice-only interactions exclude users by
  default and fail silently when the API isn't supported.
- Requiring exact command phrasing instead of matching intent loosely.

## Related

- `skills/ui-ux/accessibility/SKILL.md`
- `skills/ui-ux/mobile-first-responsive/SKILL.md`
