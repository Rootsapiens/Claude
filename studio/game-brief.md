# Game Brief — The Seventh Bell (working title)

Owner: Cyrex (Creative Technologies). This file is the source of truth for vision, scope, platform and stack. Change it only through Cyrex.

## 1. Pitch

A classic 2D point-and-click mystery adventure. It has painted-looking scenes, a contextual smart cursor, inventory items you combine, branching dialogue, and puzzles that gate the story. A conspiracy plot leads the player across several European cities. Tone: grounded, witty, a little melancholy. Real places, invented history.

**Genre reference, feel only:** the 1990s European adventure games such as *Broken Sword: Shadow of the Templars*. We take the genre conventions (smart cursor, no dead ends, conversation topics, travel between cities) and none of the content.

### Originality guardrails (hard rule)
- No characters, names, plot points, dialogue, art, music, UI art or sound from Broken Sword or any other existing game.
- No Templars, no Paris café bombing opening, no clown, no tourist-and-journalist double act, no manuscript/tripod MacGuffin, no goat puzzle.
- Art is generated with ChatGPT from the team's own prompts (`studio/art/prompts/`). Prompts never name an existing game, studio, film, artist or character, and never ask for anyone's style. Every shipped image is logged with its prompt in `game/CREDITS.md`. Check ChatGPT's terms of use for commercial rights before any release.
- All audio is synthesized by the team. No other third-party assets except fonts under the SIL Open Font License, each one recorded in `game/CREDITS.md`.
- If a team member is unsure whether something is too close to an existing work, they flag it to Cyrex and do not ship it.
- "The Seventh Bell" is a working title only. Check the name against existing games and trademarks before any public release.

## 2. Premise

Lisbon, autumn 1997. **Maren Holt** is a sound archivist who restores old tapes for a small radio archive. **Tomas Varela**, an elderly bell-tuner, hires her to digitize a reel-to-reel tape. When she comes to return it, his workshop in the Alfama district has been broken into, Varela is gone, and a man in a grey raincoat is hurrying away down the street.

The tape holds a church-bell peal recorded in 1961. One bell rings deliberately off-key, and the pattern is a message. Varela was the last keeper of the **Concord of the Seven Bells**. This guild of bell-founders hid a ledger in the 1700s, and the ledger records the bribes that built the fortune of the **House of Ravasco**, a trading dynasty. The present heir, **Helena Ravasco**, is weeks away from a seat on a powerful European commission, and she wants the ledger found and burned.

## 3. Plot outline (full game, 4 acts)

| Act | Location | Beats |
|---|---|---|
| 1 | Lisbon: Alfama square, Varela's workshop, the radio archive, a police station | The break-in. Maren gets into the workshop, repairs Varela's tape deck and hears his hidden spoken message. It names a carillon in Bruges. The police (Inspector **Rui Soares**) treat it as a burglary. Maren notices the grey-raincoat man (**Anselm Grieve**) is following her. |
| 2 | Bruges: belfry and carillon, canal-side guesthouse, a pawnshop | Maren meets **Kit Achterberg**, a sharp, impatient carillonneur who was Varela's correspondent. They decode the first off-key interval on the carillon drum. It points to a bell cast in Valletta. Grieve steals Kit's notes, and Maren gets them back. |
| 3 | Valletta, Malta: ruined foundry, harbour, a convent bell tower | They find the second ledger fragment inside a bell's clapper housing. Varela turns up alive, hiding. He reveals that Ravasco money paid for the break-in, and that the Concord's last secret is where the ledger's final pages are kept. |
| 4 | Sintra, Portugal: the Ravasco estate on the night of a gala | Maren gets into the gala, rings the estate's private chapel bells in the Concord pattern to open the hiding place, and makes a choice: give the ledger to Soares, or publish it on air through the radio archive. Short epilogue for each choice. |

The game has no dead ends and no deaths, in the genre tradition. Wrong actions get a funny or useful line instead. The one branching ending in Act 4 changes only the epilogue.

## 4. Main characters

| Character | Role | Notes |
|---|---|---|
| Maren Holt (34) | Player character | A Danish-born sound archivist living in Lisbon. Dry humour, listens closely, notices sounds other people miss. Her look lines are the game's main voice. |
| Tomas Varela (78) | Mentor, missing person | Bell-tuner and the last keeper of the Concord. Seen in Act 1 only in a photo and on tape. |
| Dona Celeste Amaral (60s) | Café owner, Act 1 | Varela's neighbour. Warm, suspicious of strangers, keeps his spare key. She is the slice's dialogue tree. |
| Anselm Grieve (40s) | Henchman | The grey raincoat. Polite and persistent, never runs when walking will do. |
| Kit Achterberg (29) | Ally, Acts 2–4 | Carillonneur in Bruges. Impatient, brilliant with notation. Not a love interest by default. |
| Inspector Rui Soares (50s) | Police | Tired, decent, and sceptical until Act 4. |
| Helena Ravasco (50s) | Antagonist | A charming politician and the heir of the House of Ravasco. Appears in person only in Act 4. |

## 5. Locations

- **Full game:** about 12 scenes across Lisbon (4), Bruges (3), Valletta (3) and Sintra (2). The player travels between cities on a map screen.
- **Vertical slice:** 2 scenes, both in Lisbon:
  1. **Largo do Sineiro (fictional square), Alfama.** A café terrace (Dona Celeste), a tram stop, a newspaper kiosk, a storm drain, and Varela's workshop door, which is locked.
  2. **Varela's workshop (interior, ransacked).** A workbench, tuning forks, a drawer with a dial lock, a wastebasket, a reel-to-reel deck, a wall of bell photos, and a window back to the square.

## 6. Core loop

Explore a scene → look at and use hotspots → collect and combine items → talk to characters to unlock topics → solve a puzzle → the story moves forward (new topic, new scene or new item) → repeat.

## 7. Controls (defaults)

| Input | Action |
|---|---|
| Mouse move | The smart cursor changes over hotspots: **eye** (look only), **hand** (use/pick up), **mouth** (talk), **arrow** (exit). Shapes differ as well as colours, so colour-blind players can tell them apart. |
| Left click | Empty floor: walk there. Hotspot: walk to it and do its main verb (use / pick up / talk / exit). Double-click on an exit skips the walk. |
| Right click | Look at the hotspot, from where Maren is standing. |
| Inventory | Move the pointer to the top edge, or press **I**, and the inventory bar slides down. Left-click an item to hold it as the cursor. Then click a hotspot to use it there, or click another item to combine the two. Right-click an item to look at it. Right-click or **Esc** drops a held item. |
| Dialogue | A topic list appears at the bottom. Click a topic. Click or **Space** skips the current line. |
| Hold **Tab** | Highlights every hotspot in the scene (accessibility). |
| **Esc** | Pause menu: Save, Load, Settings (text speed, volume, mute), Quit to title. |

Mouse first. Touch input (tap = main verb, long-press = look) comes after the slice.

## 8. Art direction

- **Look:** painted-looking 2D scenes. Warm Lisbon light, ochre and terracotta walls, azulejo-blue accents, soft gradients, a painterly grain texture. Clean dark outlines on characters only.
- **Canvas:** logical resolution 960×540 (16:9), letterboxed and scaled to the window. Art is exported at 2× (1920×1080 for scenes) so it stays sharp when scaled up.
- **How art is made in the slice:** images generated with ChatGPT. Aktham (Designer) writes a style guide and one prompt sheet per asset; the images are generated with ChatGPT into `game/art-incoming/` (desktop app via computer use, the OpenAI Images API via `game/scripts/gen-image.mjs`, or owner handoff); Aktham reviews, processes and wires them in:
  - Each scene is a painted background image, plus prop-state sprites for things that change (open drawer, picked-up item gone), plus foreground occlusion cut from the background with polygon masks (things that draw in front of Maren).
  - Every prompt carries the same fixed style block from the style guide so all scenes and characters match.
  - Characters are generated from one reference sheet each, as full-body poses (idle, talk, walk) on a plain background that is keyed out to transparent. Facing left/right is done by mirroring. Risk: generated walk frames may not stay consistent; fallback is one pose per direction with a code-driven bob and slide.
  - Each inventory item is a 64×64 icon (generated larger, scaled down).
  - Art review follows the studio still-frame workflow (`docs/workflow.md`): Playwright renders a still of each scene, Cyrex reviews it, and Aktham revises the prompt or the processing.
- **UI:** an aged-paper inventory bar and a serif font for dialogue (an SIL OFL font, bundled). Every line is subtitled.

## 9. Audio direction

- No voice acting. All dialogue is text.
- **Slice:** UI and world sound effects synthesized with the Web Audio API (click, pick up, door, drawer, tape deck, bell tone) plus one quiet ambient bed per scene (street hum, distant tram bell, gulls), all generated in code. The game always works muted, and no puzzle needs sound: the bell notes on the tape also appear on screen as written notes.
- **Later:** short melodic themes per city, written as code-sequenced synth parts. Still no third-party audio.

## 10. Platform

- **Target:** desktop web browsers (Chromium first, then Firefox and Safari), 16:9, mouse.
- **Playable build:** a static site (`game/dist/`). It runs from any static server, and can be zipped for itch.io later. No backend.
- **Save data:** browser `localStorage`.

## 11. Engine and stack (decided)

Container checked on 2026-10-17: Node **v22.22.0**, npm **10.9.4**, global Playwright **1.56.1** with Chromium 141 preinstalled at `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers` (browser downloads are disabled). A headless Chromium launch with a canvas 2D context works. The npm registry is reachable.

| Decision | Choice | Why |
|---|---|---|
| Language | TypeScript (strict) | Typed content data catches broken puzzle wiring when the code compiles. |
| Build / dev server | Vite | Fast, has zero config for a static build, and `vite preview` serves the build. |
| Engine | **Custom lightweight engine** on Canvas 2D, with DOM overlays for the UI (inventory, dialogue, menus) | A point-and-click game needs only rendering, hit-testing, pathfinding, scripting and save/load, with no physics. A small engine we own keeps the content data-driven, and DOM UI is easy to test with Playwright. Fallback if the engine runs late: Phaser 3. |
| Content format | Typed TS data modules in `game/src/content/` (scenes, hotspots, items, combinations, dialogue trees). Logic is written as declarative `conditions → effects` rules over a flag/inventory state. | Lets the designer write puzzles without touching engine code, and lets a validator check them. |
| Pathfinding | A walkable polygon per scene, with A* over a visibility graph. Characters scale with depth (y position). | The standard adventure-game approach. Small and testable. |
| Unit tests | Vitest | Same toolchain as Vite. |
| E2E tests | `@playwright/test` **pinned to 1.56.1**, so it uses the preinstalled Chromium build (chromium-1194). Do not run `playwright install`. | The only browser available in the container. |
| Test hook | When the build runs in test mode, `window.__game` exposes `state()`, `hotspots()` (screen rectangles), `scene()` and `waitIdle()`. Tests still click real canvas coordinates. | Makes the e2e tests deterministic without bypassing input. |
| Content validator | `npm run validate` is a script that checks every item, flag, topic and scene reference resolves; every flag that is read is set somewhere; and the slice can be solved from its start state (a breadth-first search over puzzle states). | Catches dead ends and unwinnable states automatically. |
| Save/load | 3 manual slots plus an autosave on every scene change. Versioned JSON (`{version, scene, player:{x,y,facing}, inventory, flags, dialogueSeen}`) in `localStorage`. A save with an unknown version is refused with a message. | |
| Package versions | Pin exact versions in `game/package.json` at M0 (current stable Vite, the Vitest release that matches it, TypeScript). Record them in `game/README.md`. | Reproducible builds. |

**Repo layout:** `game/` holds the game (`src/engine`, `src/content`, `src/ui`, `public/art`, `tests/unit`, `tests/e2e`, `scripts/validate.ts`), and `studio/` holds the planning docs.

**Scripts (contract):** `npm run dev`, `npm run build`, `npm run preview`, `npm test` (Vitest), `npm run e2e` (Playwright, headless), `npm run validate`, `npm run check` (typecheck + validate + test + e2e).

## 12. Scope

### Full game (target, after the slice is approved)
About 12 scenes, about 20 puzzles, 4 acts, 2–3 hours of play, 1 branching epilogue, touch input, settings, and a hint system.

### Vertical slice (first deliverable)
The slice proves the whole game loop at shipping quality in a small space. It includes:

- **Locations:** 2 scenes, Largo do Sineiro and Varela's workshop, joined by the workshop door and window.
- **Full interaction set:** click-to-move with pathfinding and depth scaling; the smart cursor (look / use / talk / exit); right-click look; inventory with pick up, use-on-hotspot and item+item combine; Tab hotspot highlight.
- **One dialogue tree:** Dona Celeste, with about 4 topics and branches. Topics unlock from flags and from items shown to her. A topic can be revisited. The player can't get locked out of a topic.
- **3 puzzles that gate progress,** in a strict chain:
  1. **The spare key (dialogue + show item).** The workshop door is locked. Celeste won't help a stranger. The player learns from her about the raincoat man, then shows her Varela's letter (a starting item) to prove Varela invited Maren. Celeste hands over the spare key, which opens the workshop.
  2. **The torn photograph (fetch + tool + combine).** In the workshop wastebasket is half a torn photo of the 1961 tuning crew. The other half was dropped by the fleeing man and lies in the square's storm drain, out of reach. The player takes a length of piano wire from the workbench, combines it with a blob of chewing gum scraped from under a café table (Maren says something disgusted about it), and uses the sticky wire on the drain to fish out the second half. Combining the two halves reveals a three-digit number chalked on the bell in the photo.
  3. **The silent tape (code lock + repair).** Varela's reel-to-reel deck has a snapped drive belt. The number from the photo opens the dial-locked drawer, which holds a spare belt. Use the belt on the deck, then the tape on the deck. Varela's recorded voice gives the hidden message, which ends with the word "Bruges" and the off-key note pattern shown as notation. An end card follows: "To be continued."
- **Look text** for every hotspot and item, plus funny or useful "that doesn't work" lines for wrong combinations (a general fallback plus about 10 specific ones).
- **Save/load:** 3 slots plus autosave, available from the Esc menu and the title screen.
- **Title screen, pause menu, end card.** Basic settings: text speed, volume, mute.
- **Art:** both scenes, Maren (full puppet: walk, idle, talk), Celeste (idle, talk), about 8 item icons, all generated with ChatGPT to the art direction above.
- **Audio:** about 6 synthesized sound effects plus 1 ambient bed per scene. Muting must not block any puzzle.
- **Length:** about 15–25 minutes for a first-time player. Under 3 minutes for the scripted e2e walkthrough.

**Out of scope for the slice:** the travel map, other cities, Grieve as a walking character (he appears only in a short scripted exit at the start), touch input, hints, music themes, translations, the branching ending.

## 13. Open decisions and the defaults picked

| Open decision | Default |
|---|---|
| Setting and era | Lisbon, 1997 (no mobile phones, tapes are plausible) |
| Protagonist count | One playable character (Maren). A second character appears from Act 2 but is not playable. |
| Verb interface | Contextual two-button smart cursor, not a verb bar |
| Resolution | 960×540 logical, 2× raster art, scaled to the window |
| Engine | Custom TS + Canvas 2D + DOM UI. Fallback: Phaser 3 |
| Art pipeline | ChatGPT-generated images from team prompts, layered in code, reviewed as stills |
| Voice | None. Full subtitles |
| Music | None in the slice. Synthesized ambience and sound effects only |
| Save system | localStorage, 3 slots + autosave, versioned |
| Death / dead ends | None |
| Language | English only (UI strings kept in one file so they can be translated later) |
| Rating target | Teen-friendly: mild peril, no gore |
| Distribution | Static web build. itch.io zip after the beta |
