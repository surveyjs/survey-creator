import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { TYPICAL_SELECT_CORE } from "../harness/ids.ts";
import { expectThat } from "../harness/scenario.ts";
import { startCreator, releaseCreator, findElement, clickElement, expectSelected, restoreDesignerTab, scrollDesignerTop, adornerOf,
  expectGridHeader } from "./helpers.ts";

// select/element@<target>: a click on the target in the design surface (clickElement), from the survey selected.
// The timed part is the selection and the property grid it builds for the target. @survey starts from page1
// selected, as selecting the selected survey would do nothing.
//
// Browser (03): the same call, then the end of the update; setup restores the start selection. A distant target
// (q3978, on page 106 of 109 of huge) is selected the way the object selector's pick does it, with focus on
// (Andrew, 2026-11-13): the creator renders the target's page after 50 ms, polls from 150 ms and scrolls it into view.
// Its phases are select (to the end of the update) and scroll (until the target's adorner intersects the viewport);
// setup scrolls the surface back to the top, so the adorner starts out of view.
export const distantTargets = ["q3978"];

export function selectTarget(fixture: FixtureKey, target: string): PerfScenario {
  const distant = distantTargets.indexOf(target) > -1;
  return {
    id: fixture + "/select/element@" + target, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "findElement", "clickElement", "expectSelected", "restoreDesignerTab",
      "scrollDesignerTop", "adornerOf", "expectGridHeader", "distantTargets", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator } = await startCreator(ctx);
      if (ctx.page) restoreDesignerTab(creator);
      const start = findElement(creator, target === "survey" ? "page1" : "survey");
      clickElement(creator, start);
      expectSelected(creator, start, "the start element");
      const el = findElement(creator, target);
      expectThat(start !== el, "the start element is not " + target);
      if (ctx.page) {
        if (distant) await scrollDesignerTop(ctx);
        await ctx.page.settle();
        expectGridHeader(ctx, creator, start, "the start element");
        if (distant) expectThat(!ctx.page.inViewport(adornerOf(ctx, target)), target + "'s adorner is out of view before the sample");
      }
      return { creator: creator, el: el };
    },
    run: async(ctx: PerfContext, state: any): Promise<any> => {
      if (!ctx.page) {
        clickElement(state.creator, state.el);
        return;
      }
      if (!distant) {
        clickElement(state.creator, state.el);
        await ctx.page.updated();
        return;
      }
      const page = ctx.page;
      const t0 = ctx.now();
      state.creator.selectElement(state.el);
      await page.updated();
      const t1 = ctx.now();
      await page.until(() => page.inViewport(adornerOf(ctx, target)), target + "'s adorner in the viewport");
      return { select: t1 - t0, scroll: ctx.now() - t1 };
    },
    check: (ctx: PerfContext, state: any): void => {
      expectSelected(state.creator, state.el, target);
      expectGridHeader(ctx, state.creator, state.el, target);
      if (ctx.page && distant) expectThat(ctx.page.inViewport(adornerOf(ctx, target)), target + "'s adorner intersects the viewport");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function selectScenarios(): Array<PerfScenario> {
  return [selectTarget("huge", "q3978")].concat(TYPICAL_SELECT_CORE.map((t: string) => selectTarget("typical", t)));
}
