import * as fs from "node:fs";
import * as path from "node:path";
import { splitOnly } from "../harness/ids.ts";
import { fixtureOfId } from "../harness/scenario.ts";
import { getFixture } from "../fixtures/index.ts";
import { readEnv } from "../harness/node/env.ts";
import { runnerRoot, resolveTargetDir } from "../harness/node/build.ts";
import { headCommit } from "../harness/node/git.ts";
import { libraryCheckoutCommit } from "../harness/node/library-commit.ts";
import { machineInfo } from "../harness/node/machine.ts";
import { dependencyInfo } from "../harness/node/deps.ts";
import { fixtureHashes } from "../harness/node/fixture-hash.ts";
import { buildPart, resultFilePath, writeJsonAtomic } from "../harness/node/result.ts";
import type { ResultFile } from "../harness/node/result.ts";
import { servedBuilds, react19Dir } from "./paths.ts";
import { resultSchema } from "../manifest.ts";

// Collects each test's "perf-result" attachment and writes one result file (00, Result file) in onEnd, or on
// SIGTERM (a caller or a person may stop a suite) with incomplete: { reason, unrun }. Adapted from survey-library
// perf/browser/perf-reporter.ts: product "creator", the four builds, React's version from perf/react19, and no
// result file in the no-op check mode (PERF_NOOP_CHECK=1).
export default class PerfReporter {
  private result: ResultFile;
  private file: string;
  private ids: Array<string>;
  private done = new Set<string>();
  private written = false;
  private unrun: Array<string> = [];
  private setupError: string | undefined;
  private noopMode = process.env.PERF_NOOP_CHECK === "1";
  private noopPassed = 0;

  constructor() {
    const env = readEnv();
    const split = splitOnly(env.only, "react");
    this.ids = split.run;
    const runnerCommit = headCommit(runnerRoot);
    const fixtures: ResultFile["fixtures"] = {};
    Array.from(new Set(this.ids.map(fixtureOfId))).sort().forEach((key: string) => {
      const f = getFixture(key);
      fixtures[key] = Object.assign(fixtureHashes(f), { options: f.options });
    });
    const core = resolveTargetDir("core");
    const libraryUi = resolveTargetDir("libraryUi");
    const creatorCore = resolveTargetDir("creatorCore");
    const ui = resolveTargetDir("ui");
    const mainFile = (root: string): string => servedBuilds[root].files[0];
    // The library builds: PERF_LIB_COMMIT, else their survey-library checkout (library-commit.ts). The creator
    // builds: PERF_TARGET_COMMIT, else the runner's commit for the runner's own builds.
    const libCommit = (dir: string, root: string, pkg: string): string | null => env.libCommit || libraryCheckoutCommit(dir, path.join(dir, mainFile(root)), pkg);
    const creatorCommit = (isRunnerBuild: boolean): string | null => env.targetCommit || (isRunnerBuild ? runnerCommit : null);
    const date = new Date();
    this.result = {
      schema: resultSchema, product: "creator", suite: "react", kind: env.kind, label: env.label, ref: env.ref, commit: runnerCommit,
      previousCommit: env.previousCommit, date: date.toISOString(), requested: { only: env.only, notInSuite: split.notInSuite }, incomplete: null,
      build: {
        core: buildPart(core.dir, mainFile("core"), libCommit(core.dir, "core", "survey-core")),
        ui: buildPart(ui.dir, mainFile("ui"), creatorCommit(ui.isRunnerBuild)),
        creatorCore: buildPart(creatorCore.dir, mainFile("creator-core"), creatorCommit(creatorCore.isRunnerBuild)),
        libraryUi: buildPart(libraryUi.dir, mainFile("libui"), libCommit(libraryUi.dir, "libui", "survey-react-ui")),
        // The runner's root (esbuild, Playwright) and perf/react19, the only folder React is reported from (R01-F2).
        deps: dependencyInfo([runnerRoot, react19Dir])
      },
      machine: machineInfo({ extra: env.machineExtra }), environment: null, fixtures: fixtures, skipped: [], failed: [], results: []
    };
    this.file = resultFilePath(env, "react", date);
    const stop = (): void => {
      this.result.incomplete = { reason: "timeout", unrun: this.ids.filter((id: string) => !this.done.has(id)) };
      this.write();
      process.exit(143);
    };
    process.on("SIGTERM", stop);
  }

  private write(): void {
    // playwright test --list runs nothing, and the no-op check measures nothing: no result file.
    if (this.written || this.noopMode || process.argv.indexOf("--list") > -1) return;
    this.written = true;
    writeJsonAtomic(this.file, this.result);
  }

  onTestEnd(test: any, result: any): void {
    const id = test.title;
    const browserInfo = result.attachments.filter((a: any) => a.name === "perf-browser")[0];
    if (browserInfo)this.result.machine = machineInfo({ chromium: JSON.parse(browserInfo.body.toString()).chromium, extra: readEnv().machineExtra });
    if (id === "environment" && result.status !== "passed") {
      this.result.failed.push({ id: "environment", error: (result.errors || []).map((e: any) => e.message || String(e)).join("\n").substring(0, 2000) || result.status });
    }
    const envInfo = result.attachments.filter((a: any) => a.name === "perf-environment")[0];
    if (envInfo) {
      const info = JSON.parse(envInfo.body.toString());
      this.result.machine = machineInfo({ chromium: info.chromium, extra: readEnv().machineExtra });
      if (this.result.build.ui && info.framework.react)this.result.build.ui.framework = { react: info.framework.react };
      return;
    }
    if (id === "environment" || !test.title || this.ids.indexOf(id) < 0) return;
    // A test that never ran (after a worker crash, or interrupted) is unrun, not failed.
    if ((result.status === "skipped" || result.status === "interrupted") && !result.attachments.some((a: any) => a.name === "perf-result")) {
      this.unrun.push(id);
      return;
    }
    this.done.add(id);
    const att = result.attachments.filter((a: any) => a.name === "perf-result")[0];
    const res = att ? JSON.parse(att.body.toString()) : undefined;
    if (res && res.skipped)this.result.skipped.push({ id: id, reason: res.skipped });
    else if (res && res.entry && result.status === "passed")this.result.results.push(res.entry);
    else if (this.noopMode && res && res.noop && result.status === "passed")this.noopPassed++;
    else this.result.failed.push({ id: id, error: (result.errors || []).map((e: any) => e.message || String(e)).join("\n").substring(0, 2000) || result.status });
  }

  onError(error: any): void {
    this.setupError = this.setupError || String((error && (error.message || error.stack)) || error).substring(0, 2000);
  }

  onEnd(result: any): void {
    const unrun = this.ids.filter((id: string) => !this.done.has(id)).concat(this.unrun.filter((id: string) => this.done.has(id) === false));
    const notRun = Array.from(new Set(unrun));
    if (notRun.length > 0)this.result.incomplete = { reason: "killed", unrun: notRun };
    if (this.done.size === 0 && result && result.status !== "passed") {
      this.result.failed.push({ id: "setup", error: this.setupError || "the run ended " + result.status + " before any scenario ran" });
    }
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(react19Dir, "node_modules", "react", "package.json"), "utf8"));
      if (this.result.build.ui)this.result.build.ui.framework = Object.assign({ react: pkg.version }, this.result.build.ui.framework || {});
    } catch(e) {
      // React 19 is not installed: globalSetup failed, and the run has no results.
    }
    this.result.results.sort((a: any, b: any) => (a.id < b.id ? -1 : 1));
    this.write();
    if (this.noopMode) {
      console.log("react no-op check: " + this.noopPassed + " passed, " + this.result.skipped.length + " skipped, " + this.result.failed.length + " failed");
      return;
    }
    console.log(this.result.suite + ": " + this.result.results.length + " measured, " + this.result.skipped.length + " skipped, " +
      this.result.failed.length + " failed; " + this.file);
  }

  printsToStdio(): boolean {
    return true;
  }
}
