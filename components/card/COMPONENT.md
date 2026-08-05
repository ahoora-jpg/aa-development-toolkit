# Card Component

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

## Purpose

Generic content card (product, article, feature) using tokens from
`skills/ui-ux/design-tokens-handoff/SKILL.md`. Works for any list/grid of
items — not tied to any specific product category.

## React + Tailwind

```tsx
type CardProps = {
  image?: string;
  title: string;
  description?: string;
  footer?: React.ReactNode;
};

export function Card({ image, title, description, footer }: CardProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-1)] overflow-hidden transition-shadow duration-200 hover:shadow-[var(--shadow-2)]">
      {image && (
        <img src={image} alt="" className="w-full aspect-[4/3] object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-base font-semibold text-[var(--color-foreground)]">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-[var(--color-foreground)] opacity-70">{description}</p>
        )}
        {footer && <div className="mt-3">{footer}</div>}
      </div>
    </div>
  );
}
```

## Notes

- `alt=""` on decorative/duplicate images (title already conveys meaning);
  use a real descriptive `alt` when the image carries unique information.
- Hover shadow elevation gives affordance for clickable cards — only add
  it if the whole card is actually interactive.
- Grid usage: pair with CSS grid (`grid-template-columns:
  repeat(auto-fill, minmax(240px, 1fr))`) for a responsive card grid
  without media queries.

## Related

- `skills/ui-ux/design-tokens-handoff/SKILL.md`
- `skills/design/grid-layout-systems/SKILL.md`
