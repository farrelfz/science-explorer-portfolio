# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite 6 + React 18 + TypeScript (strict) + Tailwind CSS v4 (CSS-first) + shadcn/ui
(base: radix) + framer-motion + react-router v7. Package manager: npm.

## Users

1. **Academic recruiters, hiring committees, grad-school reviewers.** Situation:
   scanning many candidate sites quickly. Job: decide within seconds whether the
   research and the engineering are both real.
2. **Fellow researchers and potential collaborators.** Situation: evaluating
   methods before reaching out. Job: find the pipelines, data scale, and honest
   project status.
3. **Educators and students.** Situation: looking for usable teaching artefacts.
   Job: play with the simulations and understand the misconception they target.

## Product Purpose

A single-owner personal portfolio for **Muhamad Farrel Dava Fauzan** — Physics
Education Researcher, EdTech Developer, AI-for-Education practitioner (Universitas
Negeri Jakarta). It exists to make verifiable research-and-engineering capability
legible at a glance. Success: the visitor is convinced the work is real and
reachable, and contacts him.

## Positioning

The portfolio is built as a demonstration, not a description: it runs a real
numerical physics simulation and a force-directed research knowledge graph, and
it publishes a citation generator (APA/BibTeX/IEEE). A neighbouring portfolio
could copy the layout but not the working physics engine or the domain-native
citation affordance — those come from the person's own research subject.

## Operating Context

- Evaluated in a browser, often in short sessions, on both desktop and mobile.
- Deployed to GitHub Pages (static, no server runtime).
- Content is authored in `src/data/portfolio.ts`; there is no CMS.
- Recruiters arrive with a CV/position in hand and expect the site to corroborate it.

## Capabilities and Constraints

- Content language is **Indonesian for narrative copy, English for role titles and
  technical terms** — intentional, matching the Indonesian CV. Not a defect.
- No fabricated publications, DOIs, or venues. Pre-peer-review status is disclosed
  rather than implied away. Designed-but-unbuilt projects carry an explicit `note`.
- Metrics are specific and checkable (e.g. 1,002 misconception variants across
  17,755 articles; IndoBERT 97.73% on 202,429 comments).
- The contact form is `mailto:`-only; there is no backend endpoint.
- All 13 routes are lazy-loaded.

## Brand Commitments

Name "Muhamad Farrel Dava Fauzan" (short form "Farrel Dava"). Visual world: clean
futurism × scientific editorial — navy/indigo structure, one electric-teal accent,
restrained motion, editorial serif for pull-quotes.

## Evidence on Hand

- Working projectile-motion engine (`PhysicsPlayground`, Euler–Cromer + drag).
- Force-directed research knowledge graph (`ResearchKnowledgeGraph`).
- Citation generator (`CiteModal`): APA, BibTeX, IEEE.
- Real repository links per project (`githubUrl`); Conceptra/PHYSION metrics.
- Absent, must not be fabricated: peer-reviewed publication list, DOIs, venue names.

## Product Principles

1. **Demonstrate, don't claim** — the artefact is the argument.
2. **Verifiable truth over polish** — every metric traceable, every absence admitted.
3. **The subject's world supplies the texture** — physics diagrams and plotted data,
   not generic gradient decoration.
4. **Respect the visitor's time** — a recruiter should reach the evidence in one scroll.

## Accessibility & Inclusion

WCAG AA for text contrast (the `accent-text` token exists precisely because the
brand teal fails AA as small text). Keyboard focus visible everywhere; primary
touch targets ≥44px; `prefers-reduced-motion` honoured in CSS and in JS.
