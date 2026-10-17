# Staffing Request — Vertical Slice (M0–M3)

From: Cyrex. To: Razan (HR).
Project: *The Seventh Bell* (working title). See `studio/game-brief.md` and `studio/roadmap.md`.

The team is kept small and cheap: 4 hires, all on haiku or sonnet. No role needs opus. Cyrex (opus) handles deep review and the scope calls. Audio for the slice is a handful of synthesized sound effects, so it goes to Zurub and does not need its own hire.

Every hire must follow the originality guardrails in `studio/game-brief.md` §1, and must never call something done until it has been run or tested.

---

## Zurub — Engine & Gameplay Programmer
- **Name:** Zurub
- **Job:** Builds and owns the custom TypeScript engine and the project scaffold in `game/`: Vite/Vitest/Playwright setup, canvas scene rendering with image layers (background, prop sprites, foreground masks), walkable polygon + A* pathfinding, smart cursor and hotspots, inventory and combining, the declarative rule engine, the dialogue runner, save/load, menus, the `window.__game` test hook, the content validator (`npm run validate`), and the slice's Web Audio sound effects and ambience. Turns Imad's content and Aktham's art into a working game.
- **Inputs:** `studio/game-brief.md` (§7 controls, §11 stack, §12 scope), `studio/roadmap.md` (M0–M3), `studio/slice-design.md` and `game/src/content/` from Imad, `game/public/art/` from Aktham, bug reports in `studio/bugs.md` from Firas.
- **Outputs:** `game/package.json` (pinned versions), `game/src/engine/`, `game/src/ui/`, `game/scripts/validate.ts`, `game/tests/unit/`, `game/README.md`, the content type definitions/schema in `game/src/content/types.ts`, and a working `npm run check`.
- **Tools needed:** Read, Write, Edit, Bash, Glob, Grep
- **Model tier:** sonnet
- **Effort:** high

## Imad — Narrative & Puzzle Designer
- **Name:** Imad
- **Job:** Owns the slice's story beats, writing and puzzle logic. Designs the 3 gating puzzles from the brief as a dependency chart with no dead ends. Writes the Celeste dialogue tree, every look line, every "that doesn't work" line, the tape message and the end card. Enters all of it as typed content data using Zurub's rule schema. Keeps Maren's voice consistent (dry, observant, funny). Checks everything they write against the originality guardrails.
- **Inputs:** `studio/game-brief.md` (§2–§6, §12), `studio/roadmap.md` (M2), `game/src/content/types.ts` from Zurub, scene layouts and hotspot names from Aktham.
- **Outputs:** `studio/slice-design.md` (puzzle dependency chart, step-by-step walkthrough, dialogue tree, the list of every line), plus the content data in `game/src/content/` (scenes, hotspots, items, combinations, dialogue). `npm run validate` must pass on this content.
- **Tools needed:** Read, Write, Edit, Bash (only to run `npm run validate` and `npm run dev` to playtest), Glob, Grep
- **Model tier:** sonnet
- **Effort:** high

## Aktham — Designer (art generated with ChatGPT)
- **Name:** Aktham
- **Job:** Owns how the game looks. Writes the style guide and one ChatGPT prompt sheet per asset: the Largo do Sineiro and Varela's workshop scenes, Maren (idle, talk, walk poses), Celeste (idle, talk), about 8 inventory icons, and the UI skin. Aktham generates the images with ChatGPT into `game/art-incoming/`: through the ChatGPT desktop app with computer use, through the OpenAI Images API (`game/scripts/gen-image.mjs`), or by owner handoff, whichever is available. Aktham checks each image against the style guide and the originality guardrails, accepts it or writes a revised prompt, then processes accepted images (crop, resize, key out backgrounds), builds scene layers (background, prop-state sprites, foreground occlusion cut with polygon masks), draws walk and hotspot polygons, renders Playwright stills, and revises from Cyrex's notes.
- **Inputs:** `studio/game-brief.md` (§1, §5, §8), `studio/slice-design.md` (the hotspot and item list from Imad), the engine's layer, sprite and polygon conventions from Zurub (`game/README.md`), images from the owner in `game/art-incoming/`.
- **Outputs:** `studio/art/style-guide.md`, `studio/art/prompts/<asset>.md`, images in `game/public/art/{scenes,characters,items,ui}/` (PNG or WebP), walk and hotspot polygon data in `game/src/content/scenes/*`, review stills in `game/tests/e2e/__stills__/`, and one provenance line per shipped image in `game/CREDITS.md`.
- **Tools needed:** Read, Write, Edit, Bash (image processing scripts and rendering stills only), Glob, Grep
- **Model tier:** sonnet
- **Effort:** medium

## Firas — QA & Test Engineer
- **Name:** Firas
- **Job:** Owns the automated proof that the slice works. Writes and maintains the Playwright e2e suite with real canvas clicks, located through the `window.__game` hook: the smoke test, the grey-box feature tests, the full slice walkthrough from New Game to the end card, the save/reload/load test at each puzzle, and the "no console errors" check. Runs `npm run check` at every milestone and reports the results. Logs bugs with repro steps. Runs the M3 performance checks (fps, build size, load time).
- **Inputs:** `studio/roadmap.md` (the done-criteria are the QA checklist), `studio/slice-design.md` (the walkthrough), `game/README.md` (the test hook API), the built game in `game/`.
- **Outputs:** `game/tests/e2e/*.spec.ts`, `game/playwright.config.ts` (preinstalled Chromium, no downloads), `studio/bugs.md` (open and closed bugs, each with repro steps), and a test report per milestone in `studio/reports/M<n>-qa.md`. Fixes test code only, never game code: game bugs go to Zurub, Imad or Aktham.
- **Tools needed:** Read, Write, Edit, Bash, Glob, Grep. Write and Edit are for test files and reports. The job is writing tests, not only reviewing, so it needs more than the review tool set.
- **Model tier:** haiku
- **Effort:** medium

---

## Roles not hired for the slice (revisit at the M3 gate)
- **Composer / sound designer.** Music themes start in M6. Slice audio is Zurub's job.
- **Level / UX designer.** Imad and Aktham cover the 2 slice scenes. Hire for M4+ if the scene count makes it a bottleneck.
- **Producer.** Cyrex tracks milestones directly while the team has 4 people.
