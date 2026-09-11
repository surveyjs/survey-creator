// The belt to the ESLint braces of overview section 3.2: the main creator bundle must not grow by a
// byte because the Tests widget exists. ESLint says so per file; this says it of the whole graph, and
// it keeps saying it if the lint config is ever reorganised.
//
// The scan is deliberately dumb - a recursive walk of the relative imports of src/entries/index.ts,
// resolved as .ts / .tsx / index.ts. It does not need to understand the bundler: a file under
// src/tester/ can only reach the main bundle by being imported from it, and an import is what this
// reads.
import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, statSync } from "fs";
import { dirname, join, relative, resolve } from "path";

const srcDir = resolve(__dirname, "../src");
const entry = join(srcDir, "entries/index.ts");

const IMPORT_RE = /(?:^|[\s;}])(?:import|export)\s(?:[^"';]*?\sfrom\s)?["']([^"']+)["']/g;
const SIDE_EFFECT_RE = /(?:^|[\s;}])import\s*["']([^"']+)["']/g;

function readSpecifiers(file: string): Array<string> {
  const text = readFileSync(file, "utf8");
  const found: Array<string> = [];
  [IMPORT_RE, SIDE_EFFECT_RE].forEach(re => {
    re.lastIndex = 0;
    let match = re.exec(text);
    while(match !== null) {
      found.push(match[1]);
      match = re.exec(text);
    }
  });
  return found;
}

// Only relative specifiers are followed: a bare one is a package, and a package cannot be a file of
// this repository.
function resolveRelative(fromFile: string, specifier: string): string | undefined {
  if (specifier.indexOf(".") !== 0) return undefined;
  const base = resolve(dirname(fromFile), specifier);
  const candidates = [base + ".ts", base + ".tsx", join(base, "index.ts"), base];
  return candidates.find(candidate => existsSync(candidate) && statSync(candidate).isFile());
}

function collectGraph(from: string): Array<string> {
  const seen = new Set<string>();
  const queue = [from];
  while(queue.length > 0) {
    const file = queue.pop() as string;
    if (seen.has(file)) continue;
    seen.add(file);
    readSpecifiers(file).forEach(specifier => {
      const target = resolveRelative(file, specifier);
      if (!!target && !seen.has(target)) queue.push(target);
    });
  }
  return Array.from(seen);
}

describe("the main bundle and the Tests widget", () => {
  it("has an entry to scan, and the scan reaches the creator model through it", () => {
    // A scan that resolves nothing would pass the assertion below for the wrong reason.
    expect(existsSync(entry), entry + " is the public surface of the main bundle").toBe(true);
    const graph = collectGraph(entry);
    expect(graph.length).toBeGreaterThan(100);
    expect(graph.some(file => file.replace(/\\/g, "/").endsWith("/src/creator-base.ts"))).toBe(true);
  });

  it("does not reach a single file of src/tester", () => {
    const reached = collectGraph(entry)
      .map(file => relative(srcDir, file).replace(/\\/g, "/"))
      .filter(file => file.indexOf("tester/") === 0);
    expect(reached, "the main bundle imports the widget: see overview section 3.2").toEqual([]);
  });
});
