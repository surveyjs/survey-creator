import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// The runner checkout (00 section Runner and target): this file is perf/harness/node/build.ts.
export const runnerRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const packageDir = (name: string): string => path.join(runnerRoot, "packages", name);

// A target is four builds (00, Runner and target): two from survey-library, reached through the junctions in the
// creator packages' node_modules, and two creator builds of this checkout.
export type TargetKind = "core" | "libraryUi" | "creatorCore" | "ui";

export const targetVariables: { [kind in TargetKind]: string } = {
  core: "PERF_CORE_DIR",
  libraryUi: "PERF_LIB_UI_DIR",
  creatorCore: "PERF_CREATOR_CORE_DIR",
  ui: "PERF_UI_DIR"
};

export const coreLink = path.join(packageDir("survey-creator-core"), "node_modules", "survey-core");
export const libraryUiLink = path.join(packageDir("survey-creator-react"), "node_modules", "survey-react-ui");
export const runnerCreatorCoreBuild = path.join(packageDir("survey-creator-core"), "build");
export const runnerUiBuild = path.join(packageDir("survey-creator-react"), "build");

// The folders a creator build is made from: a build older than their newest file is stale.
export const creatorCoreSrc = [path.join(packageDir("survey-creator-core"), "src")];
export const uiSrc = [path.join(packageDir("survey-creator-react"), "src")];

// The ESM entries the core suite imports.
export const coreMain = path.join("fesm", "survey-core.mjs");
export const creatorCoreMain = path.join("fesm", "survey-creator-core.mjs");

// The parts of the survey-core build that creator-core's rollup copies into its build (only the bare survey-core is
// external): manifest.ts's `bundles`. The runner's creator-core build is stale when the survey-core build it was made
// against (its node_modules junction, not PERF_CORE_DIR) has newer ones (04, R04-F1).
export const bundledCoreParts = ["linter", "themes", path.join("fesm", "linter"), path.join("fesm", "themes")];
export function creatorCoreInputs(): Array<string> {
  let core = "";
  try {
    core = followLink(coreLink);
  } catch(e) {
    return creatorCoreSrc;
  }
  return creatorCoreSrc.concat(bundledCoreParts.map((p: string) => path.join(core, p)).filter((d: string) => fs.existsSync(d)));
}

// What the creator needs from survey-core (manifest.ts's libraryBuilds).
export const coreBuildHint = "npm run build && npm run build:icons && npm run build:linter && npm run build:themes (in survey-library packages/survey-core)";
export const libraryUiBuildHint = "npm run build (in survey-library packages/survey-react-ui)";
export const creatorCoreBuildHint = "npm run build (in packages/survey-creator-core)";
export const uiBuildHint = "npm run build (in packages/survey-creator-react)";

// The realpath of a junction (or symlink). A dangling one is an error that names the link and its target: the
// LibV3 links of an old checkout point at folders that no longer exist.
export function followLink(link: string): string {
  try {
    fs.lstatSync(link);
  } catch(e) {
    throw new Error("Missing " + link + ". Run npm install in " + path.dirname(path.dirname(link)));
  }
  try {
    return fs.realpathSync(link);
  } catch(e) {
    let target = "(unreadable)";
    try {
      target = fs.readlinkSync(link);
    } catch(e2) {
      // The link itself is unreadable: the message names it without its target.
    }
    throw new Error("Dangling link " + link + " -> " + target + ": the target does not exist. Build or install it, or run npm install in " +
      path.dirname(path.dirname(link)));
  }
}

export function defaultTargetDir(kind: TargetKind): string {
  if (kind === "core") return followLink(coreLink);
  if (kind === "libraryUi") return followLink(libraryUiLink);
  if (kind === "creatorCore") return runnerCreatorCoreBuild;
  return runnerUiBuild;
}

export interface TargetDir {
  dir: string;
  // The runner's own build: the variable unset, or its realpath is the default's.
  isRunnerBuild: boolean;
}

export function resolveTargetDir(kind: TargetKind, value?: string): TargetDir {
  const env = value === undefined ? process.env[targetVariables[kind]] : value;
  if (!env) return { dir: defaultTargetDir(kind), isRunnerBuild: true };
  const dir = path.resolve(env);
  let isRunnerBuild = false;
  try {
    isRunnerBuild = fs.realpathSync(dir) === fs.realpathSync(defaultTargetDir(kind));
  } catch(e) {
    isRunnerBuild = false;
  }
  return { dir: dir, isRunnerBuild: isRunnerBuild };
}

export function resolveCoreDir(value?: string): TargetDir {
  return resolveTargetDir("core", value);
}

export function newestFile(dir: string): { file: string, mtime: number } {
  let res = { file: "", mtime: 0 };
  const walk = (d: string): void => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else {
        const mtime = fs.statSync(full).mtimeMs;
        if (mtime > res.mtime) res = { file: full, mtime: mtime };
      }
    }
  };
  walk(dir);
  return res;
}

// Fails with both dates when a built file is older than the newest file of its src folder.
export function checkBuildFresh(srcDirs: string | Array<string>, buildFiles: Array<string>, hint: string): void {
  const newest = (Array.isArray(srcDirs) ? srcDirs : [srcDirs]).map(newestFile).reduce((a: any, b: any) => (b.mtime > a.mtime ? b : a));
  for (const file of buildFiles) {
    if (!fs.existsSync(file)) throw new Error("Missing build file " + file + ". Run: " + hint);
    const mtime = fs.statSync(file).mtimeMs;
    if (mtime < newest.mtime) {
      throw new Error("Stale build: " + file + " (" + new Date(mtime).toISOString() + ") is older than " + newest.file + " (" +
        new Date(newest.mtime).toISOString() + "). Run: " + hint);
    }
  }
}

export function checkBuildExists(buildFiles: Array<string>): void {
  for (const file of buildFiles) {
    if (!fs.existsSync(file)) throw new Error("Missing build file " + file);
  }
}
