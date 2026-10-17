# Roadmap — The Seventh Bell

Owner: Cyrex. Read this together with `studio/game-brief.md`. The vertical slice (M0–M3) comes first. Nothing after M3 starts until Cyrex approves the slice at the M3 gate.

**Rules for every milestone**
- "Done" means each criterion was **run and observed**. Writing the code is not enough. Paste the command output or the screenshot path into the milestone report.
- `npm run check` (typecheck + validate + unit + e2e) must pass on a clean `npm ci` at the end of every milestone.
- If a milestone is slipping, cut scope before quality. Cyrex decides what gets cut.

---

## Vertical slice

### M0 — Project setup
**Owner:** Zurub. **Support:** Firas.
- [ ] `game/` scaffold: Vite + TypeScript strict, Vitest, and `@playwright/test@1.56.1` with exact versions pinned and recorded in `game/README.md`.
- [ ] All the scripts in the brief's script contract exist: `dev`, `build`, `preview`, `test`, `e2e`, `validate`, `check`.
- [ ] Playwright is set up to use the preinstalled Chromium (`/opt/pw-browsers`) and does not try to download a browser.
- [ ] A smoke e2e test opens the built game, finds the canvas, and finds no console errors.
- [ ] `window.__game` test hook stub (only in test builds).

**Done when:** on a clean checkout, `cd game && npm ci && npm run check` exits 0, and `npm run build && npm run preview` serves a page that shows a canvas.

### M1 — Engine core (grey-box)
**Owner:** Zurub. **Support:** Imad (rule schema), Firas (tests).
- [ ] Scene loader: image layers (background, prop sprites, foreground masks) drawn on a canvas, letterboxed at 960×540, with foreground occlusion.
- [ ] Walkable polygon + A* pathfinding. Character depth scaling. Click-to-move.
- [ ] Hotspots (polygons) with the smart cursor (eye / hand / mouth / arrow). Left click = walk to the hotspot and do its main verb. Right click = look.
- [ ] Inventory bar: pick up, hold an item as the cursor, use it on a hotspot, combine two items, drop the held item.
- [ ] Rule engine: declarative `conditions → effects` (set flag, add/remove item, change scene, start dialogue, play line, change prop state).
- [ ] Dialogue runner: topic list, lines with subtitles, topics unlocked by flags, "show item" during dialogue.
- [ ] Save/load: 3 slots + autosave, versioned JSON, refuses a save with an unknown version.
- [ ] Pause menu, title screen and settings (text speed, volume, mute), even if they look unstyled.
- [ ] Content validator (`npm run validate`): references resolve, every flag that is read is set somewhere, and a breadth-first search shows the content can be solved.
- [ ] A grey-box test scene with flat shapes that uses every feature above.

**Done when:**
- Unit tests cover pathfinding (including concave walk areas and an unreachable click), the rule engine, combining items, and the round trip of save → serialize → load.
- E2E tests on the grey-box scene, using real canvas clicks: walk, look, pick up, combine, use on a hotspot, run a dialogue, save, reload the page, load the save, and confirm the state matches.
- Holding Tab highlights every hotspot, confirmed by a screenshot.
- No console errors in any e2e run.

### M2 — Slice content
**Owners:** Imad (writing, puzzles, content data), Aktham (art), Zurub (scene scripting, audio sound effects, end card). **Support:** Firas.
- [ ] Imad: `studio/slice-design.md` with the puzzle dependency chart, the full walkthrough, the Celeste dialogue tree, and every look and fail line. Then all of it entered as content data in `game/src/content/`.
- [ ] Aktham: style guide and ChatGPT prompt sheets for every slice asset. From the owner's generated images: Largo do Sineiro and Varela's workshop as layered scenes (background, prop-state sprites, foreground masks), Maren (walk, idle, talk), Celeste (idle, talk), about 8 item icons, UI skin. Walk polygons and hotspot polygons drawn to match the art. Every shipped image logged in `game/CREDITS.md`.
- [ ] Zurub: about 6 synthesized sound effects + 1 ambient bed per scene (Web Audio), the scripted exit of the raincoat man at the start, the tape-message sequence with on-screen notes, the end card.
- [ ] All 3 puzzles from the brief (spare key, torn photo, silent tape) can be played end to end.

**Done when:**
- `npm run validate` passes and reports that the slice can be solved from the start state with no dead ends.
- Firas's e2e walkthrough (`tests/e2e/slice-walkthrough.spec.ts`) plays from New Game to the end card with real clicks and passes 3 times in a row, headless.
- An e2e test saves before each puzzle, reloads the page, loads the save, and finishes the puzzle.
- Every hotspot and every inventory item has look text. A wrong combination always gives a response, never silence.
- Playwright stills of both scenes, empty and with Maren in them, are saved to `game/tests/e2e/__stills__/` for review.

### M3 — Slice polish and review gate
**Owners:** all. **Reviewer:** Cyrex.
- [ ] Art pass on the stills from Cyrex's review notes (follows `docs/workflow.md`: still → review → revise the prompt or the processing).
- [ ] Writing pass for voice and humour. Cyrex checks it against the originality guardrails.
- [ ] Bug fixing until no open bugs block play.
- [ ] Performance: 60 fps in headless Chromium (measured), build under 5 MB, first interaction under 3 s on `vite preview`.
- [ ] `game/README.md`: how to run, build, test and play. `game/CREDITS.md` lists fonts and licences.

**Done when:**
- `npm run check` passes from a clean `npm ci`.
- A cold play-through by someone who did not build the slice (a fresh agent with only the README) reaches the end card. Their notes are filed in `studio/playtest-slice.md`.
- No open bug that blocks play or loses save data.
- Cyrex signs off in `studio/reviews/slice-review.md` with a decision: **Go** (start M4), **Fix** (a list of fixes, then review again), or **Rethink** (change the brief).

---

## Full production (after the slice is approved)

### M4 — Act 1 complete (Lisbon)
- [ ] Add the radio archive and police station scenes, Inspector Soares (dialogue tree), Grieve following Maren, and the travel map (Lisbon → Bruges unlocks).
- **Done when:** Act 1 can be solved per the validator, the e2e walkthrough plays the slice puzzles plus the new ones up to the travel map, and save/load works across all Act 1 scenes.

### M5 — Act 2 (Bruges)
- [ ] 3 scenes, Kit Achterberg (with a dialogue tree), the carillon-drum notation puzzle (playable without sound), and getting Kit's stolen notes back from Grieve.
- **Done when:** the validator and the e2e walkthrough pass from New Game to the end of Act 2, the music-notation puzzle can be finished muted, and a cold playtest is filed.

### M6 — Act 3 (Valletta)
- [ ] 3 scenes, Varela's return, the second ledger fragment, and the first music themes (code-sequenced synth).
- **Done when:** the same gates as M5, through the end of Act 3.

### M7 — Act 4 and endings (Sintra)
- [ ] 2 scenes, the gala, the chapel-bell sequence, the choice, 2 epilogues.
- **Done when:** both endings can be reached in e2e, and the validator proves both can be reached from New Game.

### M8 — Beta
- [ ] Touch input, a hint system (3 levels per puzzle), full settings, UI strings kept in one file, and a pass on accessibility (Tab highlight, text speed, readable font sizes).
- **Done when:** full-game e2e runs for both endings pass on Chromium, a manual smoke test on Firefox passes, 2 cold playtests are filed, and there are no open bugs that block play.

### M9 — Release 1.0
- [ ] Final title check (name and trademark), credits, a static build zipped for itch.io, and a hosted build.
- **Done when:** the release build passes `npm run check`, plays from the zip on a static server, and Cyrex gives a written sign-off.
