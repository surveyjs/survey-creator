import * as fs from "node:fs";
import * as path from "node:path";
import { git, headCommit } from "./git.ts";

// The commit of a survey-library build (00, Runner and target: PERF_LIB_COMMIT, else the checkout the build sits
// in), shared by the core runner and the react reporter. A build in <checkout>/packages/<pkg>/... names the checkout's
// HEAD only while HEAD has not moved since the build was made and the package's sources are clean: otherwise the
// commit is null, with the reason printed (during step 02 the checkout moved to another branch and was rebuilt). An
// npm folder has none, even inside some other git worktree.
export function libraryCheckoutCommit(dir: string, buildFile: string, pkg: string = "survey-core"): string | null {
  let top: string;
  try {
    top = git(dir, ["rev-parse", "--show-toplevel"]);
  } catch(e) {
    return null;
  }
  const own = path.resolve(top, "packages", pkg) + path.sep;
  const inside = (path.resolve(dir) + path.sep).toLowerCase().indexOf(own.toLowerCase()) === 0;
  if (!inside) return null;
  const why = (reason: string): null => {
    console.log("the " + pkg + " build commit is null: " + reason + "; set PERF_LIB_COMMIT to name the build's commit");
    return null;
  };
  try {
    const sources = ["src", "entries"].map((d: string) => "packages/" + pkg + "/" + d);
    if (git(top, ["status", "--porcelain", "--"].concat(sources))) return why(pkg + " src has uncommitted changes");
    // The reflog entry's own time (HEAD@{<unix>}), not the commit's: a checkout or pull after the build moves it.
    const moved = /\{(\d+)\}/.exec(git(top, ["log", "-g", "-1", "--format=%gd", "--date=unix", "HEAD"]));
    if (moved && Number(moved[1]) * 1000 > fs.statSync(buildFile).mtimeMs) return why("HEAD moved after the build was made");
  } catch(e) {
    return why("git could not tell whether HEAD moved");
  }
  return headCommit(dir);
}
