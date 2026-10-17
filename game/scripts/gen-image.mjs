#!/usr/bin/env node
// Generate one image with the OpenAI Images API (the image model behind ChatGPT).
// Usage:
//   node game/scripts/gen-image.mjs --prompt-file studio/art/prompts/workshop.md \
//     --out game/art-incoming/workshop.png [--size 1536x1024] [--background transparent]
//   node game/scripts/gen-image.mjs --prompt "text" --out game/art-incoming/x.png
// A prompt file's prompt is its first ```text fenced block.
// Needs OPENAI_API_KEY. Model: OPENAI_IMAGE_MODEL or --model, default gpt-image-1.
// Every image is logged to <out dir>/log.jsonl for game/CREDITS.md.

import { spawnSync } from "node:child_process";
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Node's fetch ignores HTTPS_PROXY unless NODE_USE_ENV_PROXY=1 is set at startup.
if ((process.env.HTTPS_PROXY || process.env.https_proxy) && !process.env.NODE_USE_ENV_PROXY) {
  const r = spawnSync(process.execPath, ["--disable-warning=UNDICI-EHPA", ...process.argv.slice(1)], {
    stdio: "inherit",
    env: { ...process.env, NODE_USE_ENV_PROXY: "1" },
  });
  process.exit(r.status ?? 1);
}

function fail(msg) {
  console.error(`gen-image: ${msg}`);
  process.exit(1);
}

const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  if (!argv[i].startsWith("--")) fail(`unexpected argument ${argv[i]}`);
  args[argv[i].slice(2)] = argv[++i];
}

let prompt = args.prompt;
if (args["prompt-file"]) {
  const m = readFileSync(args["prompt-file"], "utf8").match(/```text\n([\s\S]*?)```/);
  if (!m) fail(`no \`\`\`text block in ${args["prompt-file"]}`);
  prompt = m[1].trim();
}
if (!prompt) fail("give --prompt or --prompt-file");
if (!args.out) fail("give --out");

const key = process.env.OPENAI_API_KEY;
if (!key) fail("OPENAI_API_KEY is not set");

const body = {
  model: args.model || process.env.OPENAI_IMAGE_MODEL || "gpt-image-1",
  prompt,
  size: args.size || "1536x1024",
  n: 1,
};
if (args.background) body.background = args.background;

let res;
try {
  res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
} catch (e) {
  fail(`request failed: ${e.cause?.message || e.message}`);
}
const json = await res.json().catch(() => ({}));
if (!res.ok) fail(`HTTP ${res.status}: ${json.error?.message || "no error message"}`);
const b64 = json.data?.[0]?.b64_json;
if (!b64) fail("response has no image data");

mkdirSync(dirname(args.out), { recursive: true });
writeFileSync(args.out, Buffer.from(b64, "base64"));
appendFileSync(
  join(dirname(args.out), "log.jsonl"),
  JSON.stringify({
    file: args.out,
    model: body.model,
    size: body.size,
    promptFile: args["prompt-file"] || null,
    prompt,
    date: new Date().toISOString(),
  }) + "\n",
);
console.log(`gen-image: wrote ${args.out}`);
