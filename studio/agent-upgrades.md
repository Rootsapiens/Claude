# Agent upgrades — The Seventh Bell

Method (owner's four questions), applied per role to this project: a 2D point-and-click adventure, TypeScript + Canvas, built and tested in a Linux container with Node 22, npm, and headless Chromium through Playwright 1.56.1 (preinstalled, no downloads). Art comes from ChatGPT images. Audio is synthesized with Web Audio.

Each section answers:
1. What a top professional would do that we are not asking for.
2. The rawest material they start from.
3. The specific methods and tools.
4. The external proof that the work is right (not the agent, not the owner).

---

## Cyrex (leader, opus)

**1. Beyond the ask.** An experienced producer on a 4-person team runs a pre-mortem before each gate. They write down the three most likely reasons M3 fails, and attach a check to each one. They also run a guardrail audit by search, not by memory. They rank cuts before anyone is late, so the cut is not a panic decision.

**2. Raw material.** The owner's brief as written, the roadmap's done-criteria word for word, the milestone reports with the command output pasted in, the actual screenshots and stills, and the bug list with repro steps. Not the agents' summaries of their own work.

**3. Methods and tools.**
- Map every done-criterion to one command or one file. Mark it pass or fail from that output only.
- Pre-mortem: list three failure causes for the gate, each with a check to run.
- Scope cut ranking: each feature gets a line for what it proves about the core loop. Cut from the bottom.
- Guardrail audit: `grep -rniE` over `game/src`, `game/public`, `game/CREDITS.md` and `studio/` for the banned names in brief §1 (Broken Sword, Templar, clown, goat, manuscript, tripod, Paris café). Also check that every image in `game/public/art/` has a line in `game/CREDITS.md`.
- Still review against `docs/workflow.md`: each still is compared to the style guide, not to taste.
- Tools: Read, Glob, Grep, and Bash for reading exit codes and running `npm run check`.

**4. Proof outside the team.**
- `studio/reports/M<n>-qa.md` from Firas, containing the exit code of `npm run check` from a clean `npm ci`.
- The grep audit returns zero matches for banned terms (command and output pasted in the review).
- Every image path in `game/public/art/` has a matching `CREDITS.md` line (count of files equals count of lines).
- `studio/reviews/slice-review.md` names one decision (Go, Fix or Rethink) and cites the artifacts above.

---

## Razan (HR, haiku)

**1. Beyond the ask.** A careful HR lead checks that each new agent file will actually load and do its job, not only that the file exists. That means the frontmatter parses, the name matches the file name, the tools match the role, and no two hires share a name or a file.

**2. Raw material.** The role blocks in `studio/staffing-request.md`, copied field by field, not paraphrased. The originality rule from `studio/game-brief.md` §1. The current list of files in `.claude/agents/`.

**3. Methods and tools.**
- Field-by-field fill: each value comes from the request. If a field is missing, use the default (model sonnet, effort medium) and say so in the report.
- Tool check: compare each `tools:` line to the tool guide and to the role's "Tools needed" line. Remove anything the role does not use.
- Name check: the `name:` value equals the file name without `.md`, in lowercase.
- Tools: Read, Write, Edit, Glob, Grep. Razan has no Bash, so checks run with Grep.

**4. Proof outside the team.**
- `Grep` with pattern `^(name|description|model|effort|tools):` on each new file returns exactly 5 lines per file.
- `Grep` with pattern `^name: ` returns one name per file, each equal to its file stem.
- `studio/team.md` has one new row per hire (row count goes up by the number of hires).
- Glob on `.claude/agents/*.md` lists the new files, and Read shows the body has the 4 required headings (Job, Inputs, Outputs, Rules).

---

## Zurub (engine and gameplay, sonnet)

**1. Beyond the ask.** A good engine programmer builds the test contract before the engine: the `window.__game` API, the save schema and the validator's output format. Then Firas and Imad can work in parallel. They also measure frame time in headless Chromium at M1, not at M3, and they check generated audio for clipping and silence instead of trusting that it plays.

**2. Raw material.** The controls and stack in `studio/game-brief.md` §7 and §11, the done-criteria in `studio/roadmap.md` M0 and M1, Imad's content data as written in `game/src/content/` (not a summary of it), and Aktham's actual PNG files with their real pixel sizes and alpha channels.

**3. Methods and tools.**
- TypeScript strict. `npx tsc --noEmit` as the typecheck.
- Vitest unit tests for A* on concave walk areas and on an unreachable click. Rule engine tested with a table of conditions and effects.
- Save round trip: serialize, parse, deep-equal. A save with an unknown version is refused.
- Validator: breadth-first search over the state (scene, flags, inventory, dialogue seen) with a visited set. Prints the solution length.
- Audio: render each Web Audio effect with `OfflineAudioContext` in headless Chromium, record duration and peak level, and fail if peak is above 1.0 or length is zero.
- Frame time: sample `requestAnimationFrame` in Playwright for 5 seconds, or use the CDP `Performance` domain.
- Tools: Vite, Vitest, TypeScript, `@playwright/test` pinned to 1.56.1, npm.

**4. Proof outside the team.**
- `npm run check` exits 0 on a clean `npm ci` (exit code pasted in the milestone report).
- `npm run validate` prints the solution path and exits 0. Its output names the number of steps.
- `npx vitest run` pass count, with 0 failures.
- `npm run build` exits 0, and `du -b game/dist` is under 5,242,880 bytes.
- The audio check writes peak and length per effect, and every peak is below 1.0.

---

## Imad (narrative and puzzles, sonnet)

**1. Beyond the ask.** A top puzzle designer draws the dependency chart before any prose exists. They write the walkthrough first, as numbered player actions. For each puzzle they check that the player has an in-world reason to try the action, and that the clue is visible before the solution is needed. They also audit every red herring: each object either leads to a use or has a stated reason it does not.

**2. Raw material.** The player's goals and the world's objects, not a story summary. That means: each hotspot in the scene layouts, each item's properties, each look and fail line as the player would see it, and the actual scene images from Aktham so object names match what is drawn. The raw schema is `game/src/content/types.ts` from Zurub.

**3. Methods and tools.**
- Dependency graph: an adjacency list of puzzle states, in `studio/slice-design.md`. Every node has an edge to the next state or a stated end.
- Lock and key analysis: each lock lists its keys, each key lists its locks. Every key must be obtainable before its lock is needed.
- Red-herring audit: for each item, a line naming the lock it opens or the reason it is a decoy.
- Fail-line coverage matrix: every wrong item-on-hotspot and item-on-item pair gets a line. Empty cells are a bug.
- Voice pass: read the dialogue tree in order, one speaker at a time, and check Maren's lines for dryness and specificity.
- Tools: Read, Write, Edit, Glob, Grep, and Bash only for `npm run validate` and `npm run dev`. Grep counts each flag's set and read sites by hand.

**4. Proof outside the team.**
- `npm run validate` exits 0, and its output reports that the slice is solvable from the start state.
- The coverage matrix has zero empty cells (`grep -c` on the matrix rows, against the item-pair count).
- Firas's walkthrough (`game/tests/e2e/slice-walkthrough.spec.ts`) passes, and any stuck point it hits is logged in `studio/bugs.md`.
- A fresh reader (a cold playtester who did not write the content) logs their stuck points in `studio/playtest-slice.md`.

---

## Aktham (designer, art from ChatGPT, sonnet)

**1. Beyond the ask.** A good visual designer measures the art instead of judging it by eye. They measure text contrast against WCAG AA, measure palette drift across all images against the style guide, and view each still at its real size. They check ChatGPT's usual faults with a fixed list (stray text in the image, wrong hands, horizon drift between scenes, lighting that does not match the sun direction in the style guide).

**2. Raw material.** The owner's full-resolution PNG as it came out of ChatGPT, before any crop, kept in `game/art-incoming/`. The exact prompt text and size used. The palette hex values in `studio/art/style-guide.md`. Imad's hotspot list from `studio/slice-design.md`, used to draw the polygons.

**3. Methods and tools.**
- Colour sampling and alpha checks with Node (`pngjs`, or `sharp`, both installable with npm).
- Contrast: compute WCAG relative luminance and the ratio for dialogue and UI text against the paper background. Pass at 4.5:1 for body text and 3:1 for large text.
- Style consistency: dominant-colour distance (CIE76 ΔE) between each image and the style guide palette. Record the worst image.
- Background key-out: colour-distance threshold to the flat key colour, then count semi-transparent edge pixels to check for halos.
- Stills: Playwright renders at 960×540 logical and at the 1920×1080 source, and each polygon is drawn over the still to check it against the feet and the edges.
- Route to images, in order: (1) ChatGPT desktop app through computer use, (2) OpenAI Images API with `node game/scripts/gen-image.mjs --prompt-file studio/art/prompts/<asset>.md --out game/art-incoming/<asset>.png [--size 1536x1024] [--background transparent]`, (3) owner handoff.
- Tools: Read, Write, Edit, Glob, Grep, and Bash only for `gen-image.mjs`, the image scripts and rendering stills.

**4. Proof outside the team.**
- `node game/scripts/check-art.mjs` (written by Aktham) exits 0. It checks contrast at 4.5:1 for body text and the ΔE limit for palette drift, and it prints each measured number.
- Each shipped image has one line in `game/CREDITS.md`, and the line count equals the number of files in `game/public/art/`.
- Stills exist at `game/tests/e2e/__stills__/` and Cyrex's review notes cite them by name.
- Walk and hotspot polygons pass the e2e check that the walk target is inside the walkable polygon (Firas's test exits 0).

---

## Firas (QA and test, haiku)

**1. Beyond the ask.** A strong test engineer proves the tests can fail. They plant known bugs in a scratch copy and check that the suite catches each one. They run the suite three times to find flaky tests. They capture page errors and failed requests, not only `console.error`. They map every roadmap done-criterion to a named test.

**2. Raw material.** The done-criteria in `studio/roadmap.md`, word for word. The built game in `game/dist` served by `vite preview`, not the dev server. The walkthrough as Imad wrote it in `studio/slice-design.md`. Real Playwright traces and screenshots from failing runs.

**3. Methods and tools.**
- Deterministic e2e with `window.__game` for reading state and coordinates only. Every action is a real canvas click.
- Save, reload and load at every puzzle state, then compare `state()` before and after.
- Seeded runs when the hook exposes a seed. If it does not, say so in the report.
- Console capture: `page.on('console')`, `page.on('pageerror')` and `page.on('requestfailed')`. Any entry fails the test.
- Mutation check: copy `game/` into a scratch directory outside the repo, plant one bug per run (a wrong flag, a missing inventory removal, a broken exit), and confirm the suite fails each time.
- Performance: sample frame time with `requestAnimationFrame` for 5 seconds, measure time from load to first click with `performance.now()`, and read build size with `du -b`.
- Tools: Playwright 1.56.1, Vitest, npm. Write and Edit are for test files, reports and `studio/bugs.md`. Test code only.

**4. Proof outside the team.**
- `npm run check` exits 0 on a clean `npm ci` (exit code in `studio/reports/M<n>-qa.md`).
- The mutation log lists each planted bug and a non-zero exit code from `npm run e2e` for each one.
- `slice-walkthrough.spec.ts` passes three runs in a row with exit code 0 each time.
- Measured fps, first-interaction time and `du -b game/dist` bytes are written in `studio/reports/M3-qa.md`, with the command used for each.
