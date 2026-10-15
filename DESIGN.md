---
name: science-explorer-portfolio
description: Clean futurism × scientific editorial portfolio for a physics-education researcher.
colors:
  background: "hsl(220 20% 97%)"
  foreground: "hsl(224 71% 4%)"
  card: "hsl(0 0% 100%)"
  primary: "hsl(231 64% 22%)"
  primary-foreground: "hsl(210 40% 98%)"
  accent: "hsl(180 70% 38%)"
  accent-foreground: "hsl(224 71% 4%)"
  accent-text: "hsl(180 70% 28%)"
  muted: "hsl(220 14% 93%)"
  muted-foreground: "hsl(220 9% 46%)"
  destructive: "hsl(0 84% 60%)"
  border: "hsl(220 13% 90%)"
  ring: "hsl(231 64% 22%)"
  dark-background: "hsl(224 71% 4%)"
  dark-foreground: "hsl(213 31% 91%)"
  dark-card: "hsl(224 71% 6%)"
  dark-primary: "hsl(213 31% 91%)"
  dark-accent: "hsl(180 70% 48%)"
  dark-accent-text: "hsl(180 70% 62%)"
typography:
  display:
    fontFamily: "Inter, Space Grotesk, system-ui, sans-serif"
    fontWeight: 900
    letterSpacing: "-0.035em"
    lineHeight: 1.04
  body:
    fontFamily: "Inter, Space Grotesk, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  editorial:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 600
    letterSpacing: "-0.01em"
    lineHeight: 1.2
  mono:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  card: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
    height: "44px"
  button-outline:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
    height: "44px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
    padding: "24px"
  badge-secondary:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.sm}"
    padding: "2px 10px"
---

# Design System: science-explorer-portfolio

## Overview

Tailwind **v4** CSS-first: every token lives in `src/index.css` (`:root` / `.dark`
plus an `@theme inline` block). There is **no `tailwind.config.ts`**. The visual
world is clean futurism crossed with scientific editorial — navy/indigo structure,
one electric-teal accent, restrained motion, and an editorial serif reserved for
pull-quotes. The subject's own world (plotted data, diagrams, measurement) supplies
the texture instead of decorative gradient glow.

## Colors

Semantic tokens only in application code. `background`/`foreground` carry the page;
`card` sits on top; `primary` (deep indigo, `hsl(231 64% 22%)`) drives primary
actions; `accent` (`hsl(180 70% 38%)`, electric teal) is the brand fill; `muted`
+ `muted-foreground` carry secondary text; `destructive` marks problems and errors.

**`accent-text` (`hsl(180 70% 28%)`) exists because `accent` is only 3.02:1 on a
light ground and fails WCAG AA as small text.** Rule: teal *text* uses
`text-accent-text`; teal *fills* use `bg-accent`.

Dark mode re-points the same variables (`.dark` class on `<html>`, toggled by
`src/hooks/useTheme.ts`, stored under `farrel_theme`).

Deliberate raw-palette exceptions (do not "fix"): project **status** colours
(`ProjectCard.tsx` `STATUS_STYLES`, they encode lifecycle stage), **timeline
category** gradients, **canvas simulation** colours (a `<canvas>` `ctx.*` string
cannot read a CSS variable), and **social brand** hover colours.

## Typography

Three voices, each with one job. **Inter** (900, tracking −0.035em) is the display
and body face. **Playfair Display** (`.h-editorial`) appears only for editorial
pull-quotes. **JetBrains Mono** is reserved for code, measurements, and plotted
data — never as a "technical" costume on dates or category tags. Fonts load via
`<link>` preload in `index.html`; a CSS `@import` is banned (it blocks render).

## Layout

A single centred column: `.container-max` (max-w-7xl), `.container-narrow`
(max-w-4xl) for reading, `.container-prose` (max-w-2xl) for long-form. Vertical
rhythm comes from `.section-padding` (5 / 7 / 9 rem at base / md / lg). Spacing is
`flex` + `gap-*` — `space-x/y` is banned. The hero is a two-column grid on `lg`
(identity left, artefact right) collapsing to one column below.

## Elevation & Depth

Flat by default. Depth is a single soft shadow on interactive surfaces, never a
1px border *and* a wide shadow together (the ghost card). Glass (`glass`,
`glass-subtle`) is reserved for elements that genuinely float over content —
the sticky navbar — not as ambient decoration.

## Shapes

Radius derives from `--radius: 0.75rem`. Controls use `rounded-lg`/`rounded-xl`;
cards use `rounded-2xl` (16px). Pills (`rounded-full`) are for small controls and
status dots only — never for large containers.

## Components

Built on shadcn/ui (base: radix). Installed: `avatar`, `badge`, `button`, `card`,
`command`, `dialog`, `input`, `label`, `separator`, `sheet`, `sonner`, `textarea`,
`tooltip`. Shared application components: `ProjectCard` (variant `featured` |
`full`), `ArticleCard`, `HeroArtifact` (live trajectory plot), `AnimationPrimitives`,
`CommandPalette`, `QuickCVModal`, `CiteModal`, `PhysicsPlayground`,
`ResearchKnowledgeGraph`.

## Do's and Don'ts

- **Do** reach for a semantic token; **don't** write `bg-blue-500` in app code.
- **Do** use `text-accent-text` for teal text; **don't** use `text-accent` for it.
- **Do** keep emphasis in weight and size; **don't** use gradient text.
- **Do** let the heading speak; **don't** add an eyebrow/kicker label above it.
- **Do** use lucide icons via `src/lib/icons.ts`; **don't** use emoji as icons.
- **Do** use `flex gap-*`; **don't** use `space-x-*` / `space-y-*`.
- **Do** use `size-*` for equal dimensions; **don't** write `w-4 h-4`.
- **Do** compose `Card` from its sub-parts; **don't** nest cards.
- **Do** animate transform/opacity; **don't** animate width/height.
- **Do** honour `prefers-reduced-motion` in JS too; **don't** gate only CSS.
