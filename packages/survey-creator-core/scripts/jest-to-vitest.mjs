#!/usr/bin/env node
/* eslint-disable no-console, no-undef */
//
// jest-to-vitest.mjs
//
// Re-runnable codemod that rewrites Jest API calls to Vitest equivalents and
// inserts the corresponding "vitest" import. Designed for the
// survey-creator-core package; safe to run on master and V3 alike.
//
// Usage:
//   node scripts/jest-to-vitest.mjs tests tests-presets
//
// - Walks .ts / .tsx under each given directory (skips node_modules, build, coverage).
// - Idempotent: files that already import from "vitest" and have no jest.
//   or @jest/globals references are skipped.
// - Writes scripts/jest-to-vitest-report.txt listing locations that need
//   manual review (Phase 4).
//
// Limitations (intentional):
// - Pure regex-based. Not an AST tool. Does not rewrite test bodies.
// - Does not change jest.mock factories from sync to async -- codemod only
//   renames jest.requireActual -> vi.importActual and FLAGS the call site
//   with a TODO comment. Phase 4 triages these by hand.
//

import { promises as fs } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = resolve(__dirname, "..");

const SKIP_DIRS = new Set(["node_modules", "build", "coverage", ".git", "dist"]);
const FILE_RE = /\.(tsx?|jsx?)$/;

const VITEST_GLOBALS = [
  "describe",
  "it",
  "test",
  "expect",
  "beforeEach",
  "beforeAll",
  "afterEach",
  "afterAll",
  "vi",
];

// Rename map applied as plain text replacements.
// Order matters: longer prefixes (e.g. "jest.advanceTimersByTime") before shorter ones.
const RENAMES = [
  // Module mocking
  ["jest.requireActual", "vi.importActual"], // async
  ["jest.requireMock", "vi.importMock"], // async
  ["jest.unmock(", "vi.unmock("],
  ["jest.doMock(", "vi.doMock("],
  ["jest.mock(", "vi.mock("],
  // Spies / fns
  ["jest.fn", "vi.fn"],
  ["jest.spyOn", "vi.spyOn"],
  // Reset / clear
  ["jest.clearAllMocks", "vi.clearAllMocks"],
  ["jest.resetAllMocks", "vi.resetAllMocks"],
  ["jest.restoreAllMocks", "vi.restoreAllMocks"],
  ["jest.resetModules", "vi.resetModules"],
  ["jest.isolateModules", "vi.isolateModules"], // async in Vitest
  // Timers
  ["jest.useFakeTimers", "vi.useFakeTimers"],
  ["jest.useRealTimers", "vi.useRealTimers"],
  ["jest.advanceTimersByTimeAsync", "vi.advanceTimersByTimeAsync"],
  ["jest.advanceTimersByTime", "vi.advanceTimersByTime"],
  ["jest.runAllTimersAsync", "vi.runAllTimersAsync"],
  ["jest.runAllTimers", "vi.runAllTimers"],
  ["jest.runOnlyPendingTimersAsync", "vi.runOnlyPendingTimersAsync"],
  ["jest.runOnlyPendingTimers", "vi.runOnlyPendingTimers"],
  ["jest.setSystemTime", "vi.setSystemTime"],
  ["jest.getRealSystemTime", "vi.getRealSystemTime"],
];

// Type renames in TS type position.
const TYPE_RENAMES = [
  // jest.MockedFunction<T> -> MockedFunction<T>
  [/\bjest\.MockedFunction\b/g, "MockedFunction"],
  [/\bjest\.Mocked\b/g, "Mocked"],
  // jest.SpyInstance -> MockInstance (Vitest rename)
  [/\bjest\.SpyInstance\b/g, "MockInstance"],
  // jest.Mock<...> / jest.Mock -> Mock
  [/\bjest\.Mock\b/g, "Mock"],
];

const TYPE_IMPORTS = ["MockedFunction", "Mocked", "MockInstance", "Mock"];

const FLAG_PATTERNS = [
  // Sync vi.importActual / vi.importMock / vi.isolateModules - these all
  // return Promises in Vitest. The mock-factory rewrite handles the common
  // case automatically; remaining sites still need human review.
  { re: /(?<!await\s)\bvi\.importActual\b/, label: "vi.importActual (must await)" },
  { re: /(?<!await\s)\bvi\.importMock\b/, label: "vi.importMock (must await)" },
  { re: /(?<!await\s)\bvi\.isolateModules\b/, label: "vi.isolateModules (must await)" },
  { re: /\bvi\.useFakeTimers\s*\(\s*["'`]/, label: "vi.useFakeTimers with string arg" },
];

const TODO_COMMENT = "// TODO(vitest-migration): review";

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch{
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && FILE_RE.test(entry.name)) {
      yield full;
    }
  }
}

function applyRenames(src) {
  let out = src;
  // Normalize bracket access (jest["requireActual"]) to dotted form first
  // so the dotted-form rewrites below catch them uniformly.
  out = out.replace(/\bjest\[\s*(["'`])([A-Za-z_$][\w$]*)\1\s*\]/g, "jest.$2");
  for (const [from, to] of RENAMES) {
    if (out.includes(from)) out = out.split(from).join(to);
  }
  for (const [re, repl] of TYPE_RENAMES) {
    out = out.replace(re, repl);
  }
  // Switch @jest/globals imports to vitest.
  out = out.replace(/(["'])@jest\/globals\1/g, "$1vitest$1");
  // Rewrite vi.mock(spec, () => ...) factories that contain vi.importActual
  // into async (importOriginal) form, awaiting importActual. We only touch
  // factories whose body actually references vi.importActual to avoid
  // disturbing pure-stub factories.
  out = rewriteAsyncMockFactories(out);
  return out;
}

// Find `vi.mock("x", () => { ... vi.importActual("y") ... })` (also `=> ({...})`
// shorthand) and rewrite to `vi.mock("x", async () => { ... await vi.importActual("y") ... })`.
// Uses brace-balanced scanning rather than regex-only, since factory bodies
// can be arbitrary JavaScript.
function rewriteAsyncMockFactories(src) {
  const marker = "vi.mock(";
  let out = "";
  let i = 0;
  while(i < src.length) {
    const idx = src.indexOf(marker, i);
    if (idx === -1) {
      out += src.slice(i);
      break;
    }
    out += src.slice(i, idx);
    // Find the matching close-paren of vi.mock(...)
    const openParen = idx + marker.length - 1; // position of "("
    const close = findMatchingClose(src, openParen, "(", ")");
    if (close === -1) {
      out += src.slice(idx);
      break;
    }
    const callArgs = src.slice(openParen + 1, close);
    const rewritten = rewriteOneMockCall(callArgs);
    out += `vi.mock(${rewritten})`;
    i = close + 1;
  }
  return out;
}

function rewriteOneMockCall(args) {
  // Only rewrite if importActual appears in args.
  if (!/\bvi\.importActual\b/.test(args)) return args;

  // Match the factory arrow: `, () => ` or `, (name) => ` etc., optionally
  // already async.
  const arrowRe = /,\s*(async\s+)?(\([^)]*\))\s*=>\s*/;
  const m = args.match(arrowRe);
  if (!m) return args;

  const before = args.slice(0, m.index);
  const params = m[2];
  const afterArrow = args.slice(m.index + m[0].length);

  // Always make the factory async and await every importActual call.
  const body = afterArrow.replace(/(?<!await\s)\bvi\.importActual\(/g, "await vi.importActual(");
  return `${before}, async ${params} => ${body}`;
}

function findMatchingClose(src, openIdx, openCh, closeCh) {
  let depth = 0;
  let inS = null; // string delimiter
  let inLineComment = false;
  let inBlockComment = false;
  for (let i = openIdx; i < src.length; i++) {
    const ch = src[i];
    const next = src[i + 1];
    if (inLineComment) {
      if (ch === "\n") inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === "*" && next === "/") { inBlockComment = false; i++; }
      continue;
    }
    if (inS) {
      if (ch === "\\") { i++; continue; }
      if (ch === inS) inS = null;
      // template literal: handle ${ ... } interpolation
      if (inS === "`" && ch === "$" && next === "{") {
        const sub = findMatchingClose(src, i + 1, "{", "}");
        if (sub === -1) return -1;
        i = sub;
      }
      continue;
    }
    if (ch === "/" && next === "/") { inLineComment = true; i++; continue; }
    if (ch === "/" && next === "*") { inBlockComment = true; i++; continue; }
    if (ch === "\"" || ch === "'" || ch === "`") { inS = ch; continue; }
    if (ch === openCh) depth++;
    else if (ch === closeCh) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function detectUsedSymbols(src, symbols) {
  const used = new Set();
  for (const sym of symbols) {
    const re = new RegExp(`(?<![\\w$.])${sym}(?![\\w$])`, "g");
    if (re.test(src)) used.add(sym);
  }
  return used;
}

function ensureVitestImport(src) {
  // What runtime symbols are referenced?
  const usedRuntime = detectUsedSymbols(src, VITEST_GLOBALS);
  // What type symbols are referenced (already renamed)?
  const usedTypes = detectUsedSymbols(src, TYPE_IMPORTS);

  const allUsed = new Set([...usedRuntime, ...usedTypes]);
  if (allUsed.size === 0) return src;

  // Already importing from vitest? Merge missing symbols in.
  const importRe = /^import\s*(type\s+)?\{([^}]*)\}\s*from\s*["']vitest["'];?\s*$/m;
  const m = src.match(importRe);
  if (m) {
    const existing = new Set(
      m[2]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => s.replace(/^type\s+/, ""))
    );
    let changed = false;
    for (const sym of allUsed) {
      if (!existing.has(sym)) {
        existing.add(sym);
        changed = true;
      }
    }
    if (!changed) return src;
    const sorted = [...existing].sort();
    const replacement = `import { ${sorted.join(", ")} } from "vitest";`;
    return src.replace(importRe, replacement);
  }

  // No vitest import yet. Insert one near the top, after any leading
  // comments / shebangs / "use strict" pragmas.
  const sorted = [...allUsed].sort();
  const importLine = `import { ${sorted.join(", ")} } from "vitest";\n`;

  const lines = src.split("\n");
  let insertAt = 0;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === "" || t.startsWith("//") || t.startsWith("/*") || t.startsWith("*") || t.startsWith("#!") || t.includes("use strict")) {
      insertAt = i + 1;
      continue;
    }
    break;
  }
  lines.splice(insertAt, 0, importLine.trimEnd());
  return lines.join("\n");
}

function flagLines(src, filePath, report) {
  const lines = src.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const prev = i > 0 ? lines[i - 1] : "";
    for (const { re, label } of FLAG_PATTERNS) {
      if (re.test(line)) {
        report.push(`${filePath}:${i + 1}\t${label}\t${line.trim()}`);
        if (!prev.includes("TODO(vitest-migration)")) {
          // Match indentation of the flagged line.
          const indent = line.match(/^\s*/)?.[0] ?? "";
          out.push(`${indent}${TODO_COMMENT}`);
        }
        break;
      }
    }
    out.push(line);
  }
  return out.join("\n");
}

function isAlreadyConverted(src) {
  const hasVitestImport = /from\s*["']vitest["']/.test(src);
  const hasJestRefs = /\bjest\.(?!setup)/.test(src) || /\bjest\[/.test(src) || /@jest\/globals/.test(src);
  return hasVitestImport && !hasJestRefs;
}

async function processFile(file, report) {
  const src = await fs.readFile(file, "utf8");
  const rel = relative(PKG_ROOT, file).replace(/\\/g, "/");

  if (!/\bjest\b|@jest\/globals/.test(src) && !/from\s*["']vitest["']/.test(src)) {
    return { changed: false, skipped: "no-test-framework" };
  }

  // Always run rename + factory-rewrite passes; they are idempotent. This
  // lets the codemod fix newly-discovered patterns even in files that were
  // already partially converted by a previous run.
  let out = applyRenames(src);
  out = stripStaleTodoComments(out);
  out = ensureVitestImport(out);
  out = flagLines(out, rel, report);

  if (out === src) return { changed: false, skipped: "no-op" };
  await fs.writeFile(file, out, "utf8");
  return { changed: true };
}

function scanForFlags(src, filePath, report) {
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const { re, label } of FLAG_PATTERNS) {
      if (re.test(line)) {
        report.push(`${filePath}:${i + 1}\t${label}\t${line.trim()}`);
        break;
      }
    }
  }
}

// Remove every standalone `// TODO(vitest-migration): review` line. The
// codemod re-adds them via flagLines based on the current source state, so
// stale markers (e.g. above a now-rewritten async factory) get cleaned up.
function stripStaleTodoComments(src) {
  return src
    .split("\n")
    .filter((line) => !/^\s*\/\/\s*TODO\(vitest-migration\)/.test(line))
    .join("\n");
}

async function main() {
  const targets = process.argv.slice(2);
  if (targets.length === 0) {
    console.error("Usage: node scripts/jest-to-vitest.mjs <dir> [<dir>...]");
    process.exit(1);
  }

  const report = [];
  let touched = 0;
  let scanned = 0;
  let skipped = 0;

  for (const t of targets) {
    const root = resolve(PKG_ROOT, t);
    for await (const file of walk(root)) {
      scanned++;
      const r = await processFile(file, report);
      if (r.changed) touched++;
      else if (r.skipped) skipped++;
    }
  }

  const reportPath = resolve(PKG_ROOT, "scripts/jest-to-vitest-report.txt");
  const header = [
    "# jest-to-vitest codemod report",
    `# Generated: ${new Date().toISOString()}`,
    `# Targets: ${targets.join(", ")}`,
    `# Scanned: ${scanned}, modified: ${touched}, skipped: ${skipped}`,
    "# Each line: <file>:<line>\\t<category>\\t<source>",
    "",
  ].join("\n");
  await fs.writeFile(reportPath, header + report.join("\n") + (report.length ? "\n" : ""), "utf8");

  console.log(`scanned: ${scanned}, modified: ${touched}, skipped: ${skipped}`);
  console.log(`flagged for review: ${report.length}`);
  console.log(`report: ${relative(PKG_ROOT, reportPath).replace(/\\/g, "/")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
