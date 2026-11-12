import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { runnerRoot } from "./node/build.ts";
import { headCommit } from "./node/git.ts";

// node perf/harness/sync.ts --check [--from <survey-library checkout>]
//
// Diffs the files copied from survey-library perf/ (C02, VENDORED.md) against a survey-library checkout, by default
// the sibling ../survey-library. A verbatim file prints "identical" or the hunks that differ; an adapted file prints
// its hunks, for a person to read. It exits 0 either way: the sibling checkout may be on any branch. It only reads
// the checkout; nothing in perf/ imports from it at run time.
export const SOURCE_COMMIT = "5f2307e29";

export interface Vendored {
  // The path under perf/, the same in both repositories.
  file: string;
  mode: "verbatim" | "adapted";
}

export const VENDORED: ReadonlyArray<Vendored> = [
  { file: "harness/stats.ts", mode: "verbatim" },
  { file: "harness/sample.ts", mode: "verbatim" },
  { file: "harness/counters.ts", mode: "verbatim" },
  { file: "harness/node/machine.ts", mode: "verbatim" },
  { file: "harness/node/git.ts", mode: "verbatim" },
  { file: "harness/node/fixture-hash.ts", mode: "verbatim" },
  { file: "harness/node/deps.ts", mode: "adapted" },
  { file: "harness/node/result.ts", mode: "adapted" },
  { file: "harness/node/env.ts", mode: "adapted" },
  { file: "harness/node/build.ts", mode: "adapted" },
  { file: "fixtures/random.ts", mode: "verbatim" }
];

// Line endings are not a difference: a Windows checkout has CRLF, the server LF.
export function splitLines(text: string): Array<string> {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  if (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
  return lines;
}

// A unified diff of two line lists ("-" the library's, "+" the creator's), from their longest common subsequence.
// The files are a few hundred lines, so the quadratic table is fine.
export function diffHunks(a: Array<string>, b: Array<string>, context: number = 3): Array<string> {
  const n = a.length;
  const m = b.length;
  const lcs: Array<Array<number>> = [];
  for (let i = 0; i <= n; i++) lcs.push(new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  }
  const ops: Array<{ op: " " | "-" | "+", text: string, ai: number, bi: number }> = [];
  let i = 0;
  let j = 0;
  while(i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) {
      ops.push({ op: " ", text: a[i], ai: i++, bi: j++ });
    } else if (i < n && (j >= m || lcs[i + 1][j] >= lcs[i][j + 1])) {
      ops.push({ op: "-", text: a[i], ai: i++, bi: j });
    } else {
      ops.push({ op: "+", text: b[j], ai: i, bi: j++ });
    }
  }
  const out: Array<string> = [];
  let k = 0;
  while(k < ops.length) {
    if (ops[k].op === " ") {
      k++;
      continue;
    }
    // A hunk: the changes from k, merged while the gap between them is at most 2 * context.
    const start = Math.max(0, k - context);
    let end = k;
    let last = k;
    while(end < ops.length) {
      if (ops[end].op !== " ") last = end;
      else if (end - last > 2 * context) break;
      end++;
    }
    end = Math.min(ops.length, last + context + 1);
    const part = ops.slice(start, end);
    const aCount = part.filter((o: any) => o.op !== "+").length;
    const bCount = part.filter((o: any) => o.op !== "-").length;
    out.push("@@ -" + (part[0].ai + (aCount > 0 ? 1 : 0)) + "," + aCount + " +" + (part[0].bi + (bCount > 0 ? 1 : 0)) + "," + bCount + " @@");
    part.forEach((o: any) => out.push(o.op + o.text));
    k = end;
  }
  return out;
}

export interface SyncResult {
  file: string;
  mode: "verbatim" | "adapted";
  state: "identical" | "differs" | "missing";
  hunks: Array<string>;
}

export function compareVendored(from: string): Array<SyncResult> {
  return VENDORED.map((v: Vendored): SyncResult => {
    const theirs = path.join(from, "perf", v.file);
    const ours = path.join(runnerRoot, "perf", v.file);
    if (!fs.existsSync(theirs) || !fs.existsSync(ours)) return { file: v.file, mode: v.mode, state: "missing", hunks: [] };
    const hunks = diffHunks(splitLines(fs.readFileSync(theirs, "utf8")), splitLines(fs.readFileSync(ours, "utf8")));
    return { file: v.file, mode: v.mode, state: hunks.length === 0 ? "identical" : "differs", hunks: hunks };
  });
}

function main(argv: Array<string>): number {
  if (argv.indexOf("--check") < 0) {
    console.log("Usage: node perf/harness/sync.ts --check [--from <survey-library checkout>]");
    return 2;
  }
  const at = argv.indexOf("--from");
  const from = path.resolve(at > -1 && argv[at + 1] ? argv[at + 1] : path.join(runnerRoot, "..", "survey-library"));
  console.log("survey-library: " + from + " at " + (headCommit(from) || "(no git checkout)") + "; copied from perf/@" + SOURCE_COMMIT);
  const results = compareVendored(from);
  results.forEach((r: SyncResult) => {
    if (r.state === "missing") {
      console.log("\n" + r.file + " (" + r.mode + "): missing in " + from + "/perf or in this checkout");
    } else if (r.state === "identical") {
      console.log("\n" + r.file + " (" + r.mode + "): identical" + (r.mode === "adapted" ? ", though it is listed as adapted" : ""));
    } else {
      console.log("\n" + r.file + " (" + r.mode + "): " + (r.mode === "verbatim" ? "DIFFERS, a verbatim copy" : "the adaptation") +
        "\n--- survey-library perf/" + r.file + "\n+++ survey-creator perf/" + r.file);
      r.hunks.forEach((line: string) => console.log(line));
    }
  });
  const verbatim = results.filter((r: SyncResult) => r.mode === "verbatim");
  console.log("\nverbatim: " + verbatim.filter((r: SyncResult) => r.state === "identical").length + " of " + verbatim.length + " identical");
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = main(process.argv.slice(2));
}
