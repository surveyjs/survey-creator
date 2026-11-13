import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { loadCreator, releaseCreator, clickTab } from "./helpers.ts";

// output: what the app reads from the creator, and its end.

// output/text: creator.text, which the app reads to save the survey (the Save button's saveSurveyFunc reads it too).
export function readText(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/output/text", rev: 1, fixture: fixture, kind: "action", uses: ["createCreator", "loadCreator", "releaseCreator"],
    setup: (ctx: PerfContext): any => ({ creator: loadCreator(ctx), text: undefined }),
    run: (ctx: PerfContext, state: any): void => {
      state.text = state.creator.text;
    },
    check: (ctx: PerfContext, state: any): void => {
      expectThat(typeof state.text === "string", "creator.text was read");
      expectEqual(JSON.parse(state.text).pages.length, ctx.fixture.meta.pages, "pages in creator.text");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// output/dispose: creator.dispose() after a visit to every tab (setup), as when the app unmounts the creator.
export const disposeTabs = ["preview", "logic", "translation", "json", "theme", "designer"];

export function disposeCreator(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/output/dispose", rev: 1, fixture: fixture, kind: "action", uses: ["createCreator", "loadCreator", "releaseCreator", "clickTab", "disposeTabs"],
    // About 1 ms on huge and not repeatable (the second dispose does nothing): counterOnly. Its counters are all 0
    // (dispose runs no expression and makes no survey), so the entry is informational until it has a counter of its
    // own (step-02 report, Needs Andrew). Setup visits every tab, seconds on huge: no warm-ups.
    counterOnly: true,
    warmup: 0,
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      disposeTabs.forEach((tab: string) => {
        clickTab(creator, tab);
        expectEqual(creator.activeTab, tab, "the tab of setup");
      });
      return { creator: creator };
    },
    run: (ctx: PerfContext, state: any): void => {
      state.creator.dispose();
    },
    check: (ctx: PerfContext, state: any): void => {
      // creator.isDisposed is what the build offers: dispose() leaves the designer survey (creator.survey) as it is.
      expectThat(state.creator.isDisposed === true, "creator.isDisposed");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function outputScenarios(): Array<PerfScenario> {
  return [readText("huge"), disposeCreator("huge")];
}
