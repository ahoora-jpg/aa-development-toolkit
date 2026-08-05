# Navbar Component

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

## Purpose

Generic responsive top navigation with a mobile menu toggle. Project-
agnostic — swap the logo/links per project.

## React + Tailwind

```tsx
import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <a href="/" className="text-lg font-semibold text-[var(--color-foreground)]">Logo</a>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-[var(--color-foreground)] opacity-80 hover:opacity-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block py-2 text-sm text-[var(--color-foreground)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

## Accessibility notes

- `aria-expanded` and `aria-label` on the mobile toggle are required, not
  optional — this is the single most common accessibility miss on navbars.
- Keyboard: menu items must be reachable via Tab in visual order; the
  mobile menu should trap focus while open on small screens if it
  overlays content.
- `sticky` header must never cover the focused element when tabbing
  through the page — test with keyboard-only navigation.

## Related

- `skills/ui-ux/mobile-first-responsive/SKILL.md`
- `skills/ui-ux/accessibility/SKILL.md`
