// The sweep of prompt 03 section 7, asserted rather than promised: after it, a hard-coded UI string
// anywhere under src/tester is a bug.
//
// Two directions, and both are needed. Every path the source asks for resolves in english.ts - a
// typo'd path would otherwise show up as a path in the UI and nowhere else. And nothing under
// src/tester still carries a sentence of its own - a string that never went through the table is a
// string no locale can ever translate.
import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "fs";
import { join, resolve } from "path";
import { enTesterStrings, testerLocalization } from "../../src/tester/localization";
import { RUN_MODES } from "../../src/tester/model/runnerModel";
import { tone } from "../../src/tester/model/statusTone";

const testerDir = resolve(__dirname, "../../src/tester");

function walk(dir: string): Array<string> {
  const found: Array<string> = [];
  readdirSync(dir).forEach(entry => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else if (path.endsWith(".ts")) found.push(path);
  });
  return found;
}

function sourceFiles(): Array<{ path: string, rel: string, text: string }> {
  return walk(testerDir).map(path => ({
    path: path,
    rel: path.substring(testerDir.length + 1).replace(/\\/g, "/"),
    text: readFileSync(path, "utf8"),
  }));
}

// The code, with the comments taken out: they are prose about the design and they quote plenty of
// strings the code itself no longer holds.
//
// The carriage returns go first. These files are checked out with CRLF on Windows, and a "//.*$" that
// is applied line by line then never matches - "$" sits after the "\r" that "." will not cross - so a
// scan built on it would quietly read every comment as code.
function codeOf(text: string): string {
  return text.replace(/\r/g, "").replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n").map(line => line.replace(/(^|[^:])\/\/.*$/, "$1")).join("\n");
}

// Every leaf of the table, as its dotted path.
function collectPaths(table: any, prefix: string, into: Array<string>): void {
  Object.keys(table).forEach(key => {
    const value = table[key];
    const path = !!prefix ? prefix + "." + key : key;
    if (typeof value === "string" || typeof value === "function") into.push(path);
    else if (!!value && typeof value === "object") collectPaths(value, path, into);
  });
}

// A call whose path is written out whole. testerText("marks." + tone(status)) is deliberately not
// matched: a path composed from a closed enum is walked by the test below instead.
const LITERAL_CALL = /testerText\(\s*"([^"]+)"\s*[,)]/g;

// The double-quoted literals of a file, scanned in order so that the text *between* two of them is
// never mistaken for one - `case "a": return x !== "b"` holds two strings and not three.
const STRING_LITERAL = /"(?:[^"\\\n]|\\.)*"/g;

function literalsOf(code: string): Array<{ line: number, value: string }> {
  const found: Array<{ line: number, value: string }> = [];
  code.split("\n").forEach((line, at) => {
    STRING_LITERAL.lastIndex = 0;
    for (const match of line.matchAll(STRING_LITERAL)) {
      found.push({ line: at + 1, value: match[0].substring(1, match[0].length - 1) });
    }
  });
  return found;
}

// Prose is two plain lower-case words in a row. A class list ("svt-button svt-button--primary"), a
// path, a component name, an issue code and a property name are none of them - every token they hold
// carries a hyphen, a dot or a slash - which is what makes this narrow enough to accuse nothing it
// should not and wide enough to catch a sentence.
function looksLikeProse(value: string): boolean {
  let run = 0;
  const words = value.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (/^[a-z]{2,}[.,;:!?]?$/.test(words[i])) {
      run += 1;
      if (run >= 2) return true;
    } else {
      run = 0;
    }
  }
  return false;
}

describe("the string table", () => {
  it("answers every path the source asks for by a literal", () => {
    const asked = new Set<string>();
    sourceFiles().forEach(file => {
      if (file.rel.indexOf("localization/") === 0) return;
      const code = codeOf(file.text);
      LITERAL_CALL.lastIndex = 0;
      for (const match of code.matchAll(LITERAL_CALL)) asked.add(match[1]);
    });
    // A run that resolved nothing would pass the loop below for the wrong reason.
    expect(asked.size).toBeGreaterThan(80);
    const missing = Array.from(asked).filter(path => !testerLocalization.hasString(path)).sort();
    expect(missing, "these paths are asked for and are not in english.ts").toEqual([]);
  });

  // The handful of places that key a path by a closed enum cannot be grepped, so the enums are walked
  // instead. Both are small and both are complete or they are broken.
  it("answers every path a closed enum composes", () => {
    RUN_MODES.forEach(mode => {
      expect(testerLocalization.hasString("runner.modeName." + mode), mode).toBe(true);
      expect(testerLocalization.hasString("runner.modeNote." + mode), mode).toBe(true);
    });
    const tones = ["passed", "failed", "error", "running", "skipped", "canceled", undefined];
    tones.forEach(status => {
      expect(testerLocalization.hasString("marks." + tone(status as any)), String(status)).toBe(true);
    });
  });

  it("resolves a leaf, calls a leaf that takes values, and answers a missing path with itself", () => {
    expect(testerLocalization.getString("runner.stop")).toBe("Stop");
    expect(testerLocalization.getString("runner.run", 1)).toBe("Run 1 test");
    expect(testerLocalization.getString("runner.run", 3)).toBe("Run 3 tests");
    expect(testerLocalization.getString("runner.nosuchthing")).toBe("runner.nosuchthing");
  });

  // The shape editorLocalization has, and the reason a translated bundle is mechanical: a locale that
  // says nothing about a path falls back to english rather than to an empty box.
  it("falls back to english for a locale that does not carry a path", () => {
    testerLocalization.locales["xx"] = { runner: { stop: "Halt" } } as any;
    testerLocalization.currentLocale = "xx";
    try {
      expect(testerLocalization.getString("runner.stop")).toBe("Halt");
      expect(testerLocalization.getString("runner.resume")).toBe("Resume");
      expect(testerLocalization.getString("runner.run", 2)).toBe("Run 2 tests");
    } finally {
      testerLocalization.currentLocale = "";
      delete testerLocalization.locales["xx"];
    }
  });
});

describe("the sweep", () => {
  // Section 9's acceptance, as a test rather than as a grep somebody has to remember to run: a
  // double-quoted sentence outside localization/ is prose that escaped the table.
  //
  // "A sentence" is deliberately narrow so that it accuses nothing it should not: two or more
  // lower-case words separated by a space, which is what prose looks like and what a class name, a
  // path, a property name, an issue code and a component name all do not.
  it("leaves no prose in a double-quoted string outside localization/", () => {
    const offenders: Array<string> = [];
    let scanned = 0;
    sourceFiles().forEach(file => {
      if (file.rel.indexOf("localization/") === 0) return;
      literalsOf(codeOf(file.text)).forEach(literal => {
        scanned += 1;
        if (looksLikeProse(literal.value)) {
          offenders.push(file.rel + ":" + literal.line + " \"" + literal.value + "\"");
        }
      });
    });
    // A scan that found no literals at all would pass for the wrong reason.
    expect(scanned).toBeGreaterThan(200);
    expect(offenders, "these strings never went through the table").toEqual([]);
  });

  // The other half of the same rule. The console transcript's typography and the status marks are the
  // widget's only non-ASCII, they are what the ported tests pin character for character, and they now
  // live in english.ts - which is what finally removes the per-line lint escapes the port carried for
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // them (see promts/creator-tester-notes.md entry 3). Comments still say "§6" and are allowed to:
  // they are prose about the design, not something a person reads on screen.
  it("keeps the typography in english.ts and in no other string", () => {
    const offenders: Array<string> = [];
    sourceFiles().forEach(file => {
      if (file.rel === "localization/english.ts") return;
      literalsOf(codeOf(file.text)).forEach(literal => {
        // eslint-disable-next-line no-control-regex
        if (/[^\x00-\x7F]/.test(literal.value)) {
          offenders.push(file.rel + ":" + literal.line + " \"" + literal.value + "\"");
        }
      });
    });
    expect(offenders, "non-ASCII outside the string table").toEqual([]);
  });

  it("has a table with every branch the widget speaks in", () => {
    const paths: Array<string> = [];
    collectPaths(enTesterStrings, "", paths);
    expect(paths.length).toBeGreaterThan(120);
    ["common", "marks", "console", "segment", "mismatch", "validate", "run", "targets", "runner",
      "row", "step", "why", "json", "setup", "tester", "recorder"].forEach(branch => {
      expect(paths.some(path => path.indexOf(branch + ".") === 0), branch).toBe(true);
    });
  });
});
