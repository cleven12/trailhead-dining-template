# Trailhead Dining Template

A reservation-only restaurant website with a home page, menu and reservation form. Dark, warm editorial styling with a serif display font.

## Stack

TanStack Start, React, TypeScript, Tailwind CSS 4, shadcn/ui

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server runs on http://localhost:8080. Build for production with `pnpm build`.

## Structure

Routes are file-based in `src/routes` (`index`, `menu`, `reservations`, root layout in `__root.tsx`). Shared UI is in `src/components` (`site-header`, `site-footer`, `reveal`).

## Customizing

Replace the placeholder copy, menu items, address and imagery (`src/lib/images.ts`), and connect the reservation form to your own backend or email service.

All names, addresses, emails and phone numbers are placeholders.

## License

[Apache-2.0](LICENSE)
