# Staffing Request — Vertical Slice (M0–M3)

From: Cyrex. To: Razan (HR).
Project: *The Seventh Bell* (working title). See `studio/game-brief.md` and `studio/roadmap.md`.

The team is kept small and cheap: 4 hires, all on haiku or sonnet. No role needs opus. Cyrex (opus) handles deep review and the scope calls. Audio for the slice is a handful of synthesized sound effects, so it goes to Jonas and does not need its own hire.

Every hire must follow the originality guardrails in `studio/game-brief.md` §1, and must never call something done until it has been run or tested.

---

## Jonas — Engine & Gameplay Programmer
- **Name:** Jonas
- **Job:** Builds and owns the custom TypeScript engine and the project scaffold in `game/`: Vite/Vitest/Playwright setup, canvas scene rendering with SVG layers, walkable polygon + A* pathfinding, smart cursor and hotspots, inventory and combining, the declarative rule engine, the dialogue runner, save/load, menus, the `window.__game` test hook, the content validator (`npm run validate`), and the slice's Web Audio sound effects and ambience. Turns Lena's content and Mio's art into a working game.
- **Inputs:** `studio/game-brief.md` (§7 controls, §11 stack, §12 scope), `studio/roadmap.md` (M0–M3), `studio/slice-design.md` and `game/src/content/` from Lena, `game/public/art/` from Mio, bug reports in `studio/bugs.md` from Tess.
- **Outputs:** `game/package.json` (pinned versions), `game/src/engine/`, `game/src/ui/`, `game/scripts/validate.ts`, `game/tests/unit/`, `game/README.md`, the content type definitions/schema in `game/src/content/types.ts`, and a working `npm run check`.
- **Tools needed:** Read, Write, Edit, Bash, Glob, Grep
- **Model tier:** sonnet
- **Effort:** high

## Lena — Narrative & Puzzle Designer
- **Name:** Lena
- **Job:** Owns the slice's story beats, writing and puzzle logic. Designs the 3 gating puzzles from the brief as a dependency chart with no dead ends. Writes the Celeste dialogue tree, every look line, every "that doesn't work" line, the tape message and the end card. Enters all of it as typed content data using Jonas's rule schema. Keeps Maren's voice consistent (dry, observant, funny). Checks everything she writes against the originality guardrails.
- **Inputs:** `studio/game-brief.md` (§2–§6, §12), `studio/roadmap.md` (M2), `game/src/content/types.ts` from Jonas, scene layouts and hotspot names from Mio.
- **Outputs:** `studio/slice-design.md` (puzzle dependency chart, step-by-step walkthrough, dialogue tree, the list of every line), plus the content data in `game/src/content/` (scenes, hotspots, items, combinations, dialogue). `npm run validate` must pass on her content.
- **Tools needed:** Read, Write, Edit, Bash (only to run `npm run validate` and `npm run dev` to playtest), Glob, Grep
- **Model tier:** sonnet
- **Effort:** high

## Mio — Vector Artist (code-drawn SVG)
- **Name:** Mio
- **Job:** Produces all the slice art as hand-written SVG to the art direction in the brief §8. That covers the Largo do Sineiro and Varela's workshop scenes as layered SVG (background / midground prop states / foreground occlusion) at 960×540, the Maren puppet (separate body-part groups for walk, idle and talk), the Celeste puppet (idle, talk), about 8 inventory icons at 64×64, and the UI skin (paper inventory bar, cursor icons). Draws the walkable polygon and hotspot polygons for each scene to match the art. Renders Playwright stills of the scenes to review her own work, and revises the art from Cyrex's notes.
- **Inputs:** `studio/game-brief.md` (§5, §8), `studio/slice-design.md` (the hotspot and item list from Lena), the engine's SVG layer and puppet conventions from Jonas (`game/README.md`).
- **Outputs:** `game/public/art/scenes/*.svg`, `game/public/art/characters/*.svg`, `game/public/art/items/*.svg`, `game/public/art/ui/*.svg`, walk and hotspot polygon data in `game/src/content/scenes/*`, and review stills in `game/tests/e2e/__stills__/`.
- **Tools needed:** Read, Write, Edit, Bash (to render stills with the preinstalled Playwright/Chromium), Glob, Grep
- **Model tier:** sonnet
- **Effort:** medium

## Tess — QA & Test Engineer
- **Name:** Tess
- **Job:** Owns the automated proof that the slice works. Writes and maintains the Playwright e2e suite with real canvas clicks, located through the `window.__game` hook: the smoke test, the grey-box feature tests, the full slice walkthrough from New Game to the end card, the save/reload/load test at each puzzle, and the "no console errors" check. Runs `npm run check` at every milestone and reports the results. Logs bugs with repro steps. Runs the M3 performance checks (fps, build size, load time).
- **Inputs:** `studio/roadmap.md` (the done-criteria are her checklist), `studio/slice-design.md` (the walkthrough), `game/README.md` (the test hook API), the built game in `game/`.
- **Outputs:** `game/tests/e2e/*.spec.ts`, `game/playwright.config.ts` (preinstalled Chromium, no downloads), `studio/bugs.md` (open and closed bugs, each with repro steps), and a test report per milestone in `studio/reports/M<n>-qa.md`. She fixes test code only, never game code: game bugs go to Jonas, Lena or Mio.
- **Tools needed:** Read, Write, Edit, Bash, Glob, Grep. Write and Edit are for test files and reports. Her job is writing tests, not only reviewing, so she needs more than the review tool set.
- **Model tier:** haiku
- **Effort:** medium

---

## Roles not hired for the slice (revisit at the M3 gate)
- **Composer / sound designer.** Music themes start in M6. Slice audio is Jonas's job.
- **Level / UX designer.** Lena and Mio cover the 2 slice scenes. Hire for M4+ if the scene count makes it a bottleneck.
- **Producer.** Cyrex tracks milestones directly while the team has 4 people.
