# science-explorer-portfolio — Agent Conventions

Personal professional portfolio of Muhamad Farrel Dava Fauzan (Physics Education
Researcher & EdTech Developer). **MVP: a polished personal portfolio site.**

## Stack

- Vite 6 + React 18 + TypeScript **strict** (`tsconfig.app.json` — all strict flags on; `tsc --noEmit` must pass, vite build does NOT typecheck)
- Tailwind CSS **v4** (CSS-first config in `src/index.css` via `@theme inline`; **no `tailwind.config.ts`**; PostCSS plugin is `@tailwindcss/postcss`)
- shadcn/ui (base **radix**, style `default`), icons **lucide-react**, framer-motion, react-router-dom **v7**
- Package manager: **npm** (no bun.lockb). Import alias: `@/ → src/`
- Deploy: GitHub Pages (`.github/workflows/deploy.yml`)
- Routes are **lazy** (`React.lazy` + `Suspense` in `App.tsx`) — new pages must use the same pattern.

## Layout

```
src/
├── components/ui/        # shadcn kit + custom overlays (DO NOT hand-edit kit unless fixing a bug)
├── components/sections/  # page sections (Hero, About, Teaching, PhysicsPlayground, …)
├── components/layout/    # Navbar (Sheet mobile nav), Footer, FloatingSocials
├── pages/                # one file per route (see App.tsx)
├── data/portfolio.ts     # ALL content lives here (typed: Project, SecondaryProject)
└── hooks/useTheme.ts     # light/dark via `.dark` class on <html>, localStorage key `farrel_theme`
```

## Installed shadcn components

`avatar badge button card command dialog input label separator sheet sonner
textarea tooltip` (+ custom: AnimationPrimitives, ParticleCanvas, ThemeToggle,
CommandPalette, QuickCVModal, CiteModal).

If you need another component: `npx shadcn@latest add <name>` (never copy raw
files from GitHub). After adding, verify imports and icon library.

## Critical rules (enforced in every change)

1. **Use the kit, not hand-rolled markup.** Buttons → `Button` (variant/size);
   tags → `Badge`; dividers → `Separator`; cards → `Card > CardHeader/CardTitle/
   CardDescription/CardContent/CardFooter`; form fields → `Label` + `Input`/
   `Textarea`; side overlays → `Sheet`; confirmations → `Dialog`.
2. `Link` styled as a button → `<Button asChild><Link …/></Button>`.
3. **No `space-x-*`/`space-y-*`** — use `flex` (+ `flex-col`) with `gap-*`.
4. Equal width/height → `size-*` (`size-9`, not `w-9 h-9`).
5. Conditional classes → `cn()` from `@/lib/utils`. Never template-literal ternaries.
6. **Semantic color tokens only** (`bg-background`, `text-muted-foreground`,
   `bg-primary`, `bg-accent`, `text-destructive`). No raw `bg-blue-500` etc.
   The brand teal IS the `accent` token — use `bg-accent`, never
   `bg-[hsl(180_70%_38%)]`.
7. Icons inside `Button`: no sizing classes/props (Button auto-sizes `[&_svg]:size-4`).
8. `Dialog`/`Sheet` always have a Title (use `className="sr-only"` when hidden).
   `Avatar` always pairs with `AvatarFallback`.
9. No manual `z-*` on overlay components; Sheet/Dialog manage stacking.
10. Toasts → `sonner` (`toast(...)`). There is no Radix toast anymore.
11. Edit `src/index.css` for theme vars — never create new global CSS files. Theme is **CSS-first (Tailwind v4)**: semantic colors live as CSS vars in `:root`/`.dark`, mapped to Tailwind utility namespaces via the `@theme inline` block in the same file. There is **no `tailwind.config.ts`**. Google Fonts are loaded via `<link>` tags in `index.html` (preload + non-blocking); never add a CSS `@import` for fonts.
12. Animations: keep framer-motion behavior intact; don't redesign during refactors.

### Intentional deviations (do NOT "fix" these)

- **Categorical color maps** keyed by data: project status colors
  (`FeaturedProjects.tsx` `statusBadgeStyles`), timeline category gradients
  (`TimelineSection.tsx` config map), research-interest card colors, rotating
  hero headline word hues, amber "Evidence & Metrics" accent.
- **Simulation/canvas colors** in `PhysicsPlayground` and `ResearchKnowledgeGraph`
  (canvas `ctx.*` strings cannot use CSS variables).
- **Photo-overlay text** in `Hero.tsx` uses fixed light colors on dark gradients
  (semantic `text-primary` would be unreadable there).
- Social brand hover colors in `FloatingSocials` / `Contact`.

## Verification (run all before handing over)

```bash
npx tsc -p tsconfig.app.json --noEmit   # vite build does NOT typecheck
npm run build
npm run lint
```

## Content edits

All copy (profile, projects, publications, timeline, writing) lives in
`src/data/portfolio.ts`. Keep the `Project`/`SecondaryProject` interfaces in
sync when adding fields.
