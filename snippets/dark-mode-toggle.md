# Snippet: Dark Mode Toggle

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Framework-agnostic. Pairs with token setup in
`skills/ui-ux/design-tokens-handoff/SKILL.md` and rules in
`skills/ui-ux/dark-mode-2026/SKILL.md`.

```js
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('theme'); // in-page only; not for Claude.ai artifacts
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (systemDark ? 'dark' : 'light'));
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
}

initTheme();
```

Note: `localStorage` works in a real deployed website but is not
available inside Claude.ai artifacts — use in-memory state there instead.
