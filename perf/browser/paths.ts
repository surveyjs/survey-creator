import * as fs from "node:fs";
import * as path from "node:path";
import { runnerRoot, resolveTargetDir } from "../harness/node/build.ts";
import type { TargetKind } from "../harness/node/build.ts";
import type { BrowserReset } from "../harness/scenario.ts";

// The directories the react suite serves (00, Runner and target): the four target builds and the runner's page
// files. Adapted from survey-library perf/browser/paths.ts: the creator has one browser suite and four builds.
export const browserDir = path.join(runnerRoot, "perf", "browser");
export const cacheDir = path.join(runnerRoot, "perf", "results", ".cache");
export const react19Dir = path.join(runnerRoot, "perf", "react19");
export const pageUrl = "http://perf.local/page/react.html";

// The files the page loads from each build (03, The page), relative to the build folder. global-setup.ts checks
// they exist; the reporter stamps the first of each.
export const servedBuilds: { [root: string]: { kind: TargetKind, files: Array<string> } } = {
  "core": { kind: "core", files: ["survey.core.min.js", path.join("themes", "index.min.js"), "survey-core.min.css"] },
  "libui": { kind: "libraryUi", files: ["survey-react-ui.min.js"] },
  "creator-core": { kind: "creatorCore", files: ["survey-creator-core.min.js", "survey-creator-core.min.css"] },
  "ui": { kind: "ui", files: ["survey-creator-react.min.js"] }
};

// The file behind a perf.local URL, or undefined (the request fails). A build root serves any file of its build
// folder (survey-creator-core.min.css loads images/*.png from it); /react19/ and /page/perf-page.js come from the
// cache, the rest of /page/ from perf/browser/pages.
export function resolveUrl(url: string, dirOf: (kind: TargetKind) => string = (kind: TargetKind) => resolveTargetDir(kind).dir): string | undefined {
  const u = new URL(url);
  if (u.protocol !== "http:" || u.host !== "perf.local") return undefined;
  const [, root, ...rest] = u.pathname.split("/");
  const rel = decodeURIComponent(rest.join("/"));
  if (!rel || rel.split(/[\\/]/).indexOf("..") > -1) return undefined;
  let dir: string | undefined;
  if (servedBuilds[root]) dir = dirOf(servedBuilds[root].kind);
  if (root === "react19") dir = rel === "react19.js" ? cacheDir : undefined;
  if (root === "page") dir = rel === "perf-page.js" ? cacheDir : path.join(browserDir, "pages");
  if (!dir) return undefined;
  const file = path.join(dir, rel);
  return fs.existsSync(file) && fs.statSync(file).isFile() ? file : undefined;
}

// PERF_RESET (local diagnostics, never set by the perf server): "<reset>:<id>,<id>[;<reset>:<id>...]" runs those ids
// with another reset, for 03's restored-against-fresh and tab comparisons.
export function parseResetOverride(text: string | undefined): { [id: string]: BrowserReset } {
  const res: { [id: string]: BrowserReset } = {};
  (text || "").split(";").map((s: string) => s.trim()).filter((s: string) => !!s).forEach((part: string) => {
    const at = part.indexOf(":");
    const reset = at > 0 ? part.substring(0, at) : "";
    if (reset !== "restore" && reset !== "creator" && reset !== "page") throw new Error("PERF_RESET: \"" + part + "\" is not <restore|creator|page>:<ids>");
    part.substring(at + 1).split(",").map((id: string) => id.trim()).filter((id: string) => !!id).forEach((id: string) => { res[id] = reset as BrowserReset; });
  });
  return res;
}
