# Button Component

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

## Purpose

Framework-agnostic base button using design tokens from
`skills/ui-ux/design-tokens-handoff/SKILL.md`. Provides primary,
secondary, and ghost variants, plus disabled and loading states.

## React + Tailwind

```tsx
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const variants = {
  primary: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90',
  secondary: 'bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]',
  ghost: 'bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-muted)]',
};

export function Button({ variant = 'primary', disabled, loading, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-opacity duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]}`}
    >
      {loading ? 'Loading…' : children}
    </button>
  );
}
```

## Plain HTML/CSS

```html
<button class="btn btn--primary">Continue</button>

<style>
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: opacity var(--motion-fast) var(--easing-standard);
}
.btn--primary {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}
.btn--primary:hover { opacity: 0.9; }
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
```

## Accessibility notes

- Always a real `<button>`, never a styled `<div>`.
- Loading state must update `aria-busy="true"` and keep accessible label
  meaningful (don't replace text with only a spinner icon).
- Minimum tap target 44×44px on touch devices.

## Related

- `skills/ui-ux/design-tokens-handoff/SKILL.md`
- `skills/ui-ux/accessibility/SKILL.md`
