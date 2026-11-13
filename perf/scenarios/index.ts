import type { PerfScenario } from "../harness/scenario.ts";
import { defineScenarios } from "../harness/scenario.ts";
import * as options from "./options.ts";
import * as helpers from "./helpers.ts";
import * as load from "./load.ts";
import * as select from "./select.ts";
import * as edit from "./edit.ts";
import * as tabs from "./tabs.ts";
import * as output from "./output.ts";
import * as browser from "./browser.ts";
import * as selectors from "./selectors.ts";

// Every scenario of perf/scenarios, one factory file per group, plus the react suite's own (browser.ts: load/paint,
// edit/title-type, designer/*); ids.ts says which suites run each.
export function allScenarios(): Array<PerfScenario> {
  return defineScenarios(([] as Array<PerfScenario>).concat(
    load.loadScenarios(),
    select.selectScenarios(),
    edit.editScenarios(),
    tabs.tabScenarios(),
    output.outputScenarios(),
    browser.browserScenarios()
  ));
}

export function scenarioById(id: string): PerfScenario | undefined {
  return allScenarios().filter((s: PerfScenario) => s.id === id)[0];
}

// What a scenario may name in `uses`, for its rev hash (revs.ts): the exported functions and constants of
// perf/scenarios.
export function helperFunctions(): { [name: string]: any } {
  const res: { [name: string]: any } = {};
  [options, helpers, load, select, edit, tabs, output, browser, selectors].forEach((mod: any) => {
    for (const key of Object.keys(mod)) res[key] = mod[key];
  });
  return res;
}
