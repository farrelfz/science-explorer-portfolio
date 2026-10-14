# DESIGN.md — science-explorer-portfolio

Design system as actually implemented. Tailwind **v4** CSS-first: all tokens live
in `src/index.css` (`:root`/`.dark` + `@theme inline`). There is **no**
`tailwind.config.ts`.

## Visual world
**Clean futurism × scientific editorial.** Navy/indigo structure, a single
electric-teal accent, restrained motion, editorial serif for pull-quotes. The
subject's world (physics measurement, diagrams, plotted data) supplies the
texture — not generic gradient glow.

## Color tokens (semantic — never raw palette in app code)
| Token | Light | Dark | Use |
|---|---|---|---|
| `background` / `foreground` | 220 20% 97% / 224 71% 4% | 224 71% 4% / 213 31% 91% | page base |
| `card` / `card-foreground` | 0 0% 100% | 224 71% 6% | surfaces |
| `primary` / `primary-foreground` | 231 64% 22% (navy) | 213 31% 91% | primary actions |
| `accent` / `accent-foreground` | 180 70% 38% (teal) | 180 70% 48% | brand accent, fills |
| `accent-text` | 180 70% 30% | 180 70% 62% | **teal text only** (AA-safe; `accent` is 3.02:1) |
| `muted` / `muted-foreground` | 220 14% 93% / 220 9% 46% | 223 47% 11% / 215 20% 55% | secondary text |
| `destructive` | 0 84% 60% | 0 63% 31% | errors, problem callouts |
| `border` / `input` / `ring` | 220 13% 90% / … | 224 40% 14% / … | structure |
| `--radius` | 0.75rem (12px) | — | card/control radius |

**Rule:** for small teal text use `text-accent-text`. `text-accent` fails AA.

### Deliberate raw-palette exceptions (documented, do not "fix")
- Project **status** colours in `ProjectCard.tsx` `STATUS_STYLES` (encode
  lifecycle stage).
- **Timeline category** gradients in `TimelineSection.tsx`.
- **Simulation/canvas** colours in `PhysicsPlayground` and
  `ResearchKnowledgeGraph` (canvas `ctx.*` cannot read CSS vars).
- **Social brand** hover colours in `FloatingSocials` / `Contact`.

## Typography
- Display/body: **Inter** (900 for `h-display`, tracking −0.035em)
- Editorial: **Playfair Display** (`.h-editorial`, pull-quotes)
- Mono: **JetBrains Mono** — **only** for code, measurements, and data
  (trajectory values, metrics), never as a "technical" costume.
- Loaded via `<link>` preload in `index.html`; never `@import` in CSS.

## Motion
framer-motion. One authored moment per surface, exponential ease-out
(`[0.22, 1, 0.36, 1]`), transform/opacity only. `prefers-reduced-motion` is
honoured in CSS **and** in JS (canvas/artifact render a single static frame).

## Component system
shadcn/ui (base **radix**, style default). Installed: avatar, badge, button,
card, command, dialog, input, label, separator, sheet, sonner, textarea, tooltip.
Shared app components: `ProjectCard` (featured|full), `ArticleCard`,
`HeroArtifact`, `AnimationPrimitives`, `CommandPalette`, `QuickCVModal`,
`CiteModal`.

## Craft-floor compliance (current state)
- ❌→✅ **Gradient text removed** (was 21 sites) — emphasis now from weight/size.
- ❌→✅ **Eyebrow/kicker labels removed** (19 `SectionLabel`).
- ❌→✅ **Emoji-as-icon removed** — lucide throughout via `src/lib/icons.ts`.
- ✅ **Artifact leads the hero** (`HeroArtifact`), not chrome.
- ✅ No nested cards in the main flow; card radius 12–16px (`rounded-2xl`).
- ✅ Icon-only controls carry `aria-label`; touch targets ≥44px where primary.

## Anti-patterns to keep out
Gradient text · eyebrow kickers · emoji icons · hero-metric stat grids ·
decorative glass/blur · coloured `border-left` callouts · monospace-as-costume ·
`space-x/y` · `w-n h-n` pairs · raw palette colours in app code.
