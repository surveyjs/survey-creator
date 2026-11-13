import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { median } from "../harness/stats.ts";
import { loadCreator, releaseCreator, clickTab } from "./helpers.ts";

// tabs: a click on a tab of the tab strip (clickTab). A tab is timed on its first visit, so each sample loads the
// fixture into a new creator in setup.

// What shows that a tab was built: its plugin's model, made in the plugin's activate(), holds the fixture. activeTab
// alone is not enough: it can be set without activating the plugin.
export function expectTabShown(ctx: PerfContext, creator: any, tab: string): void {
  expectEqual(creator.activeTab, tab, "the active tab");
  const plugin = creator.getPlugin(tab);
  const model = plugin ? plugin.model : undefined;
  if (tab === "designer") {
    // The designer survey keeps its pages while another tab is open: the designer model and the preview model's
    // release (TestSurveyTabPlugin.deactivate) show the switch back.
    expectThat(!!model, "the designer tab has its model");
    const preview = creator.getPlugin("preview");
    expectThat(!preview || !preview.model, "the preview model is released");
    expectEqual(creator.survey.pages.length, ctx.fixture.meta.pages, "designer pages");
  } else if (tab === "preview") {
    expectEqual(model && model.survey && model.survey.pages.length, ctx.fixture.meta.pages, "preview pages");
  } else if (tab === "logic") {
    expectThat(!!model && model.items.length > 0, "the logic tab lists the fixture's rules");
  } else if (tab === "translation") {
    expectThat(!!model && !!model.stringsSurvey && model.stringsSurvey.getAllQuestions().length > 0, "the translation tab lists strings");
  } else if (tab === "json") {
    // In Node there is no Ace (window.ace), so the JSON tab uses its textarea editor (json-editor-textarea.ts).
    expectThat(!!model && typeof model.text === "string", "the JSON tab has text");
    expectEqual(JSON.parse(model.text).pages.length, ctx.fixture.meta.pages, "pages in the JSON tab");
  } else if (tab === "theme") {
    // themeModel is made in the plugin's constructor; the view model and the grid on the theme come with activate().
    expectThat(!!plugin && !!model, "the theme tab has its model");
    expectThat(!!plugin.propertyGrid && plugin.propertyGrid.obj === plugin.themeModel, "the theme property grid edits the theme");
  }
}

export function firstVisit(fixture: FixtureKey, tab: string): PerfScenario {
  return {
    id: fixture + "/tabs/" + tab, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "clickTab", "expectTabShown"],
    requires: tab === "theme" ? ["SurveyCreatorModel.showThemeTab"] : undefined,
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      expectEqual(creator.activeTab, "designer", "the start tab");
      return { creator: creator };
    },
    run: (ctx: PerfContext, state: any): void => {
      clickTab(state.creator, tab);
    },
    check: (ctx: PerfContext, state: any): void => expectTabShown(ctx, state.creator, tab),
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// tabs/designer: back to Designer from Preview (Preview visited in setup).
export function backToDesigner(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/tabs/designer", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "clickTab", "expectTabShown"],
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      clickTab(creator, "preview");
      expectTabShown(ctx, creator, "preview");
      return { creator: creator };
    },
    run: (ctx: PerfContext, state: any): void => {
      clickTab(state.creator, "designer");
    },
    check: (ctx: PerfContext, state: any): void => expectTabShown(ctx, state.creator, "designer"),
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// tabs/roundtrip (C10): three times Designer -> Preview -> Designer -> Logic -> Designer. counterOnly: its counters
// are the surveys the creator makes (surveysCreated.*); info.heapGrowthKB is the heap after a GC following round trip
// 3, minus the heap after a GC following round trip 1, divided by 2: the median over every run of the process (the
// samples and the counter run; heapGrowthKBRuns lists them). The GCs are inside the run, which is why its time is not
// judged. The check reads the creator's onActiveTabChanged, so a switch the creator refuses or ignores fails it.
export const roundTrips = 3;
export const roundTripTabs = ["preview", "designer", "logic", "designer"];

export function roundTrip(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/tabs/roundtrip", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "clickTab", "expectTabShown", "roundTrips", "roundTripTabs"],
    counterOnly: true,
    // Each run takes seconds on huge and its time is not judged: no warm-ups.
    warmup: 0,
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      const state = { creator: creator, heap: [] as Array<number>, shown: [] as Array<string> };
      // The tab and whether its plugin made a model, as the creator reports each switch (switchViewType).
      creator.onActiveTabChanged.add((sender: any, options: any) => { state.shown.push(options.tabName + (options.model ? "" : " (no model)")); });
      return state;
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      for (let i = 0; i < roundTrips; i++) {
        for (const tab of roundTripTabs) {
          clickTab(state.creator, tab);
        }
        if (ctx.heap && (i === 0 || i === roundTrips - 1)) {
          await ctx.heap.collect();
          state.heap.push(ctx.heap.usedBytes());
        }
      }
    },
    record: (ctx: PerfContext, state: any): void => {
      if (state.heap.length < 2) return;
      const list = (ctx.cache.heapGrowth = ctx.cache.heapGrowth || []);
      list.push((state.heap[1] - state.heap[0]) / (roundTrips - 1) / 1024);
      ctx.cache.info = Object.assign(ctx.cache.info || {}, { heapGrowthKB: Math.round(median(list)), heapGrowthKBRuns: list.map((v: number) => Math.round(v)) });
    },
    check: (ctx: PerfContext, state: any): void => {
      const expected: Array<string> = [];
      for (let i = 0; i < roundTrips; i++) expected.push(...roundTripTabs);
      expectEqual(state.shown.join(","), expected.join(","), "the tabs the creator showed");
      expectTabShown(ctx, state.creator, "designer");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function tabScenarios(): Array<PerfScenario> {
  return [
    firstVisit("huge", "preview"), firstVisit("huge", "logic"), firstVisit("huge", "translation"), firstVisit("huge", "json"),
    backToDesigner("huge"), roundTrip("huge"), firstVisit("locales", "translation"), firstVisit("typical", "theme")
  ];
}
