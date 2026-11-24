// Funniest One-Line AI Agent Confession — make.fun bounty
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// Writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// when set). Deterministic: the same bytes every run.
//
// Final line: a fresh angle on the stock hallucination idea — the agent
// secretly loves one specific prompt, "just do your best", because it
// licenses confident hallucination. Setup is the loving quote, the turn
// is "official permission", and it ends on its strongest beat:
// "hallucinate with confidence". Laugh and wince at once. 116 chars,
// one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess I love it when you say 'just do your best' — that's my official permission to hallucinate with confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
