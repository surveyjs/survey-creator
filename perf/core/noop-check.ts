import { settle } from "./dom.ts";
import { importTargets, checkedCreator } from "./target.ts";
import { allScenarios } from "../scenarios/index.ts";
import { idsOfSuite } from "../harness/ids.ts";
import { getFixture } from "../fixtures/index.ts";
import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import { missingRequirement } from "../harness/scenario.ts";

// Every check fails on a no-op (02, The checks): for each core scenario, setup, the settle, then check without the
// run. A check that passes is a check that cannot see the action, and the script exits 1. It also runs the scenario
// once for real, so a check that fails on a working run shows here too. Not timed; all in one process.
// node perf/core/noop-check.ts [id,id,...]   (default: every core id)
const only = process.argv[2] ? process.argv[2].split(",") : null;

async function main(): Promise<void> {
  const targets = await importTargets();
  const ids = idsOfSuite("core").filter((id: string) => !only || only.indexOf(id) > -1);
  const problems: Array<string> = [];
  for (const s of allScenarios().filter((x: PerfScenario) => ids.indexOf(x.id) > -1)) {
    const f = getFixture(s.fixture);
    const ctx: PerfContext = { Survey: targets.Survey, Creator: targets.Creator, fixture: { key: f.key, json: f.json, text: JSON.stringify(f.json), meta: f.meta },
      platform: "node", now: (): number => performance.now(), cache: {}, heap: { collect: (): void => {}, usedBytes: (): number => 0 } };
    const probe = checkedCreator(ctx, targets);
    const skip = missingRequirement({ Survey: targets.Survey, Creator: targets.Creator, instances: { SurveyCreatorModel: probe } }, s.requires);
    probe.dispose();
    if (skip) {
      console.log(s.id.padEnd(46) + " skipped: " + skip);
      continue;
    }
    const noop = await s.setup(ctx);
    await settle();
    let noopError = "";
    try {
      await s.check(ctx, noop);
    } catch(e: any) {
      noopError = String(e && e.message ? e.message : e);
    }
    if (s.teardown) await s.teardown(ctx, noop);
    await settle();
    const state = await s.setup(ctx);
    await settle();
    for (let i = 0; i < (s.repeat || 1); i++) await s.run(ctx, state);
    await settle();
    if (s.record) await s.record(ctx, state);
    let runError = "";
    try {
      await s.check(ctx, state);
    } catch(e: any) {
      runError = String(e && e.message ? e.message : e);
    }
    if (s.teardown) await s.teardown(ctx, state);
    await settle();
    if (!noopError) problems.push(s.id + ": the check passes without the run");
    if (runError) problems.push(s.id + ": the check fails after the run: " + runError);
    console.log(s.id.padEnd(46) + " no-op: " + (noopError ? noopError.substring(0, 110) : "PASSED (bad)") + (runError ? "; run: " + runError : ""));
  }
  if (problems.length > 0) {
    console.log(problems.join("\n"));
    process.exitCode = 1;
  }
}

main().then(() => process.exit(process.exitCode || 0), (e: any) => {
  console.log(String(e && e.stack ? e.stack : e));
  process.exit(1);
});
