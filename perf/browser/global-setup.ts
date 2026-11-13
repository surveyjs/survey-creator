import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { runnerRoot, resolveTargetDir, checkBuildFresh, creatorCoreInputs, uiSrc, creatorCoreBuildHint, uiBuildHint,
  coreBuildHint, libraryUiBuildHint } from "../harness/node/build.ts";
import type { TargetKind } from "../harness/node/build.ts";
import { buildStamp } from "../core/stamp.ts";
import type { BuildStamp } from "../core/stamp.ts";
import { browserDir, cacheDir, react19Dir, servedBuilds } from "./paths.ts";

// Before the react suite (03), adapted from survey-library perf/browser/global-setup.ts: the build checks (the creator
// builds against their src, the library builds only for existence), React 19 installed and bundled, the page harness
// bundled with the builds external, the bundle check, and the stamps of the served builds.
const require = createRequire(import.meta.url);

export const stampsFile = path.join(cacheDir, "build-stamps.json");
// The page bundle holds the harness and the scenarios only (about 0.1 MB unminified). survey-core, the creator builds
// and the huge fixture are 1.5-2.1 MB each, so any one of them inside it breaks this limit.
export const pageBundleLimit = 500 * 1024;
// What must never be in the page bundle: survey-core and creator code, and fixture data (q2187 is a question of huge
// that no scenario names; the fixtures reach the page only as evaluate arguments).
export const pageBundleForbidden: Array<{ pattern: RegExp, what: string }> = [
  { pattern: /class SurveyCreatorModel\b/, what: "survey-creator-core code (class SurveyCreatorModel)" },
  { pattern: /class SurveyModel\b/, what: "survey-core code (class SurveyModel)" },
  { pattern: /\bq2187\b/, what: "fixture data (q2187, a question of huge)" }
];

function esbuild(): any {
  try {
    return require(require.resolve("esbuild", { paths: [runnerRoot] }));
  } catch(e) {
    throw new Error("esbuild is missing from the root node_modules (a transitive dependency of rollup-plugin-esbuild): run npm install at the root");
  }
}

export function ensureReact19(): void {
  const pins = JSON.parse(fs.readFileSync(path.join(react19Dir, "package.json"), "utf8")).dependencies;
  const installed = (name: string): string | undefined => {
    const file = path.join(react19Dir, "node_modules", name, "package.json");
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")).version : undefined;
  };
  if (Object.keys(pins).every((name: string) => installed(name) === pins[name])) return;
  // One command string: Node 24 warns (DEP0190) when arguments are passed to a shell, which npm.cmd needs on Windows.
  execSync("npm install --prefix \"" + react19Dir + "\" --no-package-lock --no-audit --no-fund", { stdio: "inherit" });
}

export async function bundleReact19(): Promise<void> {
  const entry = "import * as React from \"react\";\nimport * as ReactDOM from \"react-dom\";\nimport * as ReactDOMClient from \"react-dom/client\";\n" +
    "window.React = React;\nwindow.ReactDOM = ReactDOM;\nwindow.ReactDOMClient = ReactDOMClient;\n";
  await esbuild().build({ stdin: { contents: entry, resolveDir: react19Dir, loader: "js" }, bundle: true, minify: true, format: "iife",
    platform: "browser", define: { "process.env.NODE_ENV": "\"production\"" }, outfile: path.join(cacheDir, "react19.js"), logLevel: "error" });
}

// The problems of a page bundle: its size, the forbidden texts, and inputs from perf/fixtures or from a package
// folder (esbuild's metafile, R01-F6: huge is read at run time, so a grep alone would not see it).
export function pageBundleProblems(text: string, inputs: Array<string>): Array<string> {
  const problems: Array<string> = [];
  if (text.length > pageBundleLimit) problems.push("perf-page.js is " + text.length + " bytes, over the " + pageBundleLimit + " limit");
  pageBundleForbidden.forEach((f: { pattern: RegExp, what: string }) => {
    if (f.pattern.test(text)) problems.push("perf-page.js contains " + f.what);
  });
  inputs.map((i: string) => i.replace(/\\/g, "/")).forEach((i: string) => {
    if (/(^|\/)perf\/fixtures\//.test(i)) problems.push("perf-page.js bundles a fixture file: " + i);
    if (/(^|\/)(node_modules|packages)\//.test(i)) problems.push("perf-page.js bundles a package file: " + i);
  });
  return problems;
}

export async function bundlePage(): Promise<{ bytes: number, inputs: number }> {
  const out = path.join(cacheDir, "perf-page.js");
  const res = await esbuild().build({ entryPoints: [path.join(browserDir, "page-entry.ts")], bundle: true, format: "iife", platform: "browser",
    external: ["survey-core", "survey-creator-core", "survey-react-ui", "survey-creator-react", "react", "react-dom"], outfile: out, logLevel: "error",
    metafile: true, absWorkingDir: runnerRoot });
  const text = fs.readFileSync(out, "utf8");
  const inputs = Object.keys(res.metafile.inputs);
  const problems = pageBundleProblems(text, inputs);
  if (problems.length > 0) throw new Error(problems.join("; "));
  return { bytes: text.length, inputs: inputs.length };
}

// The four builds (00, Runner and target): a creator build of this checkout is checked against its src; any other
// build, and the library builds always, only for existence. A dangling junction fails here, naming it.
export function checkBuilds(): void {
  const fresh: { [kind: string]: { src: Array<string>, hint: string } } = {
    creatorCore: { src: creatorCoreInputs(), hint: creatorCoreBuildHint },
    ui: { src: uiSrc, hint: uiBuildHint }
  };
  const hints: { [kind: string]: string } = { core: coreBuildHint, libraryUi: libraryUiBuildHint };
  for (const root of Object.keys(servedBuilds)) {
    const kind = servedBuilds[root].kind;
    const target = resolveTargetDir(kind);
    const files = servedBuilds[root].files.map((f: string) => path.join(target.dir, f));
    if (fresh[kind] && target.isRunnerBuild) checkBuildFresh(fresh[kind].src, files, fresh[kind].hint);
    else {
      const missing = files.filter((f: string) => !fs.existsSync(f));
      if (missing.length > 0) throw new Error("Missing build file " + missing.join(", ") + (hints[kind] ? ". Run: " + hints[kind] : ""));
    }
  }
}

// Every served file as the suite starts; the spec compares them after each scenario (R02-F2: a build rebuilt during
// a suite mixes two builds in one result file).
export function servedStamps(): { [file: string]: BuildStamp } {
  const res: { [file: string]: BuildStamp } = {};
  for (const root of Object.keys(servedBuilds)) {
    const dir = resolveTargetDir(servedBuilds[root].kind as TargetKind).dir;
    servedBuilds[root].files.forEach((f: string) => { res[path.join(dir, f)] = buildStamp(path.join(dir, f)); });
  }
  return res;
}

export default async function globalSetup(): Promise<void> {
  checkBuilds();
  fs.mkdirSync(cacheDir, { recursive: true });
  ensureReact19();
  await bundleReact19();
  const bundle = await bundlePage();
  fs.writeFileSync(stampsFile, JSON.stringify(servedStamps(), null, 2));
  console.log("react: perf-page.js " + bundle.bytes + " bytes from " + bundle.inputs + " files; the bundle check passed");
}
