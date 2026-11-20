import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { median } from "../harness/stats.ts";
import { startCreator, releaseCreator, clickTab } from "./helpers.ts";
import { selectors } from "./selectors.ts";

// tabs: a click on a tab of the tab strip (clickTab). A tab is timed on its first visit, so each sample loads the
// fixture into a new creator in setup.
//
// Browser (03): a click on the tab's button (clickTabButton), to the end of the update. A tab keeps its model after
// its first visit, so a first visit cannot be restored. A new creator in the same page per sample (reset "creator")
// differed from a fresh page by +6 to +12 % on huge/tabs/logic (step-03 report, R03-F6). Each first visit gets a fresh
// page per sample, as a load does (reset "page"; Andrew, 2026-11-13), for stability: on the development laptop a
// renderer drops to a mode about 2.4x slower after its first seconds, and a fresh page per sample stays out of it. The round trip keeps "creator": its time is
// not judged, and its heap growth is read across the samples of one page.

// Core: clickTab. Browser: a click on the tab's button in the tab strip.
export async function clickTabButton(ctx: PerfContext, creator: any, tab: string): Promise<void> {
  if (!ctx.page) {
    clickTab(creator, tab);
    return;
  }
  await ctx.page.click(selectors.tab(tab));
}

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
  if (ctx.page) {
    const button = ctx.page.query(selectors.tab(tab));
    expectThat(!!button && button.getAttribute("aria-selected") === "true", "the " + tab + " tab button is selected");
    const content = ctx.page.query(selectors.tabContent(tab));
    expectThat(!!content && content.querySelectorAll("*").length > 0, "the " + tab + " tab content is rendered");
  }
}

export function firstVisit(fixture: FixtureKey, tab: string): PerfScenario {
  return {
    id: fixture + "/tabs/" + tab, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "clickTab", "clickTabButton", "expectTabShown", "selectors"],
    requires: tab === "theme" ? ["SurveyCreatorModel.showThemeTab"] : undefined,
    browser: { reset: "page" },
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator } = await startCreator(ctx);
      expectEqual(creator.activeTab, "designer", "the start tab");
      if (ctx.page) expectThat(!!ctx.page.query(selectors.tab(tab)), "the tab strip shows " + tab);
      return { creator: creator };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      await clickTabButton(ctx, state.creator, tab);
    },
    check: (ctx: PerfContext, state: any): void => expectTabShown(ctx, state.creator, tab),
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// tabs/designer: back to Designer from Preview (Preview visited in setup). The browser keeps its creator: every
// sample returns to the Designer, and setup opens Preview again (untimed). The browser's timed part ends when no page
// placeholder or row skeleton is in the viewport (Andrew, 2026-11-13, R03-F1): the Designer mounts its pages as
// placeholders and their content comes a frame and a 1 ms timer later.
export function backToDesigner(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/tabs/designer", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "clickTab", "clickTabButton", "expectTabShown", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator } = await startCreator(ctx);
      clickTab(creator, "preview");
      if (ctx.page) await ctx.page.settle();
      expectTabShown(ctx, creator, "preview");
      return { creator: creator };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      await clickTabButton(ctx, state.creator, "designer");
      const page = ctx.page;
      if (page) await page.until(() => !page.lazyRenderDue(), "the pages in view rendered");
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
// Browser: tab button clicks, a new creator per sample (reset "creator"), and the settle before each heap reading.
export const roundTrips = 3;
export const roundTripTabs = ["preview", "designer", "logic", "designer"];

export function roundTrip(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/tabs/roundtrip", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "clickTab", "clickTabButton", "expectTabShown", "roundTrips", "roundTripTabs",
      "selectors"],
    counterOnly: true,
    // Each run takes seconds on huge and its time is not judged: no warm-ups.
    warmup: 0,
    browser: { reset: "creator" },
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator } = await startCreator(ctx);
      const state = { creator: creator, heap: [] as Array<number>, shown: [] as Array<string> };
      // The tab and whether its plugin made a model, as the creator reports each switch (switchViewType).
      creator.onActiveTabChanged.add((sender: any, options: any) => { state.shown.push(options.tabName + (options.model ? "" : " (no model)")); });
      return state;
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      for (let i = 0; i < roundTrips; i++) {
        for (const tab of roundTripTabs) {
          await clickTabButton(ctx, state.creator, tab);
        }
        if (ctx.heap && (i === 0 || i === roundTrips - 1)) {
          if (ctx.page) await ctx.page.settle();
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
