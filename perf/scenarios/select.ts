import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { TYPICAL_SELECT_CORE } from "../harness/ids.ts";
import { expectThat } from "../harness/scenario.ts";
import { loadCreator, releaseCreator, findElement, clickElement, expectSelected } from "./helpers.ts";

// select/element@<target>: a click on the target in the design surface (clickElement), from the survey selected.
// The timed part is the selection and the property grid it builds for the target. @survey starts from page1
// selected, as selecting the selected survey would do nothing.
export function selectTarget(fixture: FixtureKey, target: string): PerfScenario {
  return {
    id: fixture + "/select/element@" + target, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "findElement", "clickElement", "expectSelected"],
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      const start = findElement(creator, target === "survey" ? "page1" : "survey");
      clickElement(creator, start);
      expectSelected(creator, start, "the start element");
      const el = findElement(creator, target);
      expectThat(start !== el, "the start element is not " + target);
      return { creator: creator, el: el };
    },
    run: (ctx: PerfContext, state: any): void => {
      clickElement(state.creator, state.el);
    },
    check: (ctx: PerfContext, state: any): void => expectSelected(state.creator, state.el, target),
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function selectScenarios(): Array<PerfScenario> {
  return [selectTarget("huge", "q3978")].concat(TYPICAL_SELECT_CORE.map((t: string) => selectTarget("typical", t)));
}
