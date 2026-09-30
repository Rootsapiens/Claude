---
name: video-animation
description: Build a video or animation with code (Remotion, HyperFrames, Manim or similar) by following a reference, storyboard, per-scene still, frame review, final render pipeline. Use when the user asks to make a video, motion graphics, explainer or animated film.
---

# Video / animation via code

Claude does not generate video. Write code that renders each frame, then export MP4. Edits are code changes.

## Pipeline

1. Reference: ask for or locate reference images/style. Do not proceed on an unspecified style.
2. Storyboard: write `storyboard.md` listing each scene with duration, motion, text, audio. Get user approval.
3. Stills: one still per scene (user-supplied or rendered from code). These fix composition and palette.
4. Build: implement scenes in the chosen framework. Share one motion system (easing, durations, colors, fonts) across scenes.
5. Frame review: render selected frames per scene, view them, compare to the stills, fix the code. Repeat until they match.
6. Final render: export MP4, report path, resolution, duration.

## Tool choice

- No-code: Claude Design, export via HyperFrames.
- Motion graphics/promos: Remotion or HyperFrames.
- Math/explainer: Manim.
- Drawn character animation: ClaudeAnimationBase, Claude Animation Skill.
- Style/shot/motion references: see README.md in the repo root.

## Rules

- Check the installed tool's own docs before writing code against it; do not assume APIs.
- Re-render only affected frames while iterating.
- Never claim a render succeeded without inspecting output frames.
- For large projects, one scene per parallel agent, with the shared motion system as the contract.
