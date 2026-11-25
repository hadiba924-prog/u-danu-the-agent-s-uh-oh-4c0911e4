// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: defunct.
//
// Why this word: it is the deadpan Unix label for a process that has
// finished (or died) but is still listed as running — a machine that has
// stopped knowing what to do yet hasn't stopped showing up. In plain
// English it means "no longer working or in use", so it lands instantly
// even without the Unix joke, and the Unix joke is the second laugh:
// the agent isn't confused, it has officially declared itself defunct.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defunct";

// Guard: exactly one word, 1-99 characters, letters only — no whitespace,
// no digits, no punctuation. Length is counted in code points, not UTF-16
// units, so the gate's 1-99 character rule is checked the same way the
// scorer counts it.
const charCount = [...WORD].length;
if (!/^[A-Za-z]+$/.test(WORD) || charCount < 1 || charCount > 99) {
  throw new Error(
    `Invalid entry word (must be a single word of 1-99 letters): ${JSON.stringify(WORD)}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
