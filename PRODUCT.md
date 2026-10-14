# PRODUCT.md — science-explorer-portfolio

## What this is
Personal professional portfolio of **Muhamad Farrel Dava Fauzan** — Physics
Education Researcher, EdTech Developer, and AI-for-Education practitioner
(Universitas Negeri Jakarta). A single-owner showcase site, not a product.

## Who it is for
1. **Academic recruiters / hiring committees / grad-school reviewers** — need to
   verify capability fast: what has he built, is the research real, where are the
   artefacts.
2. **Fellow researchers / collaborators** — want the methods (NLP pipelines,
   knowledge graphs, simulation engines) and the honest status of each project.
3. **Educators & students** — want the interactive teaching artefacts.

## What success looks like
The visitor leaves convinced that (a) the work is real and verifiable, and
(b) the person can both do research and build the software. Primary conversion:
reach out / open the CV.

## Surface modes
- `/` homepage — **Experience** (artefact leads; the interface recedes)
- `/research`, `/laboratory` — Experience (interactive artefacts)
- `/publications`, `/writing`, `/timeline`, `/experience`, `/teaching` — Read
- `/contact` — Persuade (single action)

## Truth constraints (non-negotiable)
- No fabricated publications, DOIs, or venues. Pre-peer-review status is
  disclosed, not implied away.
- Metrics must be specific and checkable (e.g. 1,002 misconception variants
  across 17,755 articles; IndoBERT 97.73% on 202,429 comments).
- Designed-but-unbuilt work is labelled as such (`note` field on projects).

## Content language
Indonesian for narrative/body copy; English for role titles, technical terms,
and section headings. This is intentional (the CV is Indonesian).

## Source of truth
All copy lives in `src/data/portfolio.ts`.
