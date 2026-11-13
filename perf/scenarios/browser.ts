import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { createCreator } from "./options.ts";
import { recordJsonErrors, releaseCreator, questionCount, startCreator, restoreDesignerTab, findElement, clickElement, showElement,
  scrollDesignerTop, renderPagesInView, expectSelected } from "./helpers.ts";
import { selectors } from "./selectors.ts";

// The react suite's own scenarios (00, The scenarios): paint, typing and popups exist only in the browser. They
// need ctx.page; ids.ts lists them for react only.

// load/paint: a fresh page per sample (reset "page"). Setup shows a creator with no survey; the phases are model
// (creator.JSON = json), paint (from there to the end of the update) and content (Andrew, 2026-11-13, R03-F1: from
// there until no page placeholder or row skeleton is in the viewport; with over 5 pages every page first renders as a
// placeholder, and its content comes a frame and a 1 ms timer later). The sum is the sample.
export function loadPaint(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/load/paint", rev: 1, fixture: fixture, kind: "load",
    uses: ["createCreator", "recordJsonErrors", "releaseCreator", "questionCount", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const creator = createCreator(ctx);
      await (ctx.page as any).showCreator(creator);
      expectEqual(creator.survey.pages.length, 0, "pages of the empty creator");
      return { creator: creator, json: JSON.parse(ctx.fixture.text) };
    },
    run: async(ctx: PerfContext, state: any): Promise<any> => {
      const t0 = ctx.now();
      state.creator.JSON = state.json;
      const t1 = ctx.now();
      const page = ctx.page as any;
      await page.updated();
      const t2 = ctx.now();
      await page.until(() => !page.lazyRenderDue(), "the pages in view rendered");
      return { model: t1 - t0, paint: t2 - t1, content: ctx.now() - t2 };
    },
    check: (ctx: PerfContext, state: any): void => {
      recordJsonErrors(ctx, state.creator);
      expectEqual(state.creator.survey.pages.length, ctx.fixture.meta.pages, "pages");
      expectEqual(questionCount(state.creator), ctx.fixture.meta.questions.all, "questions");
      const page = ctx.page as any;
      expectThat(page.queryAll(selectors.elementAdorner(state.creator.survey.pages[0].elements[0].name)).length === 1, "the first element is rendered");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// edit/title-type: a click into the inline title editor of text1 (the caret at the end), five characters, and the
// commit on blur, which sets the title (StringEditor.onBlur) and renders it (Andrew, 2026-11-13: the typing alone runs
// StringEditor.onInput only). Setup undoes the previous titles and brings text1 into view.
export const typedTitleText = "abcde";
// One click, five characters and the blur take 6-9 ms on typical in the fast mode (R03-F2), under the 40 ms minimum: a
// sample is eight.
export const titleTypeRepeats = 8;

export function titleType(fixture: FixtureKey): PerfScenario {
  const name = "text1";
  return {
    id: fixture + "/edit/title-type", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "restoreDesignerTab", "findElement", "clickElement",
      "showElement", "typedTitleText", "titleTypeRepeats", "selectors"],
    repeat: titleTypeRepeats,
    setup: async(ctx: PerfContext): Promise<any> => {
      const page = ctx.page as any;
      const { creator, restored } = await startCreator(ctx);
      restoreDesignerTab(creator);
      const q = findElement(creator, name);
      // Set back on the question (one more undo transaction per sample), as edit/property does.
      if (restored) q.title = ctx.cache.title;
      else ctx.cache.title = q.title;
      clickElement(creator, creator.survey);
      await showElement(ctx, creator, q);
      const editor = page.query(selectors.titleEditor(name));
      expectThat(!!editor && editor.isContentEditable, "the title editor of " + name);
      expectEqual(editor.textContent, ctx.cache.title, "the title before the sample");
      return { creator: creator, q: q, before: ctx.cache.title };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      // Found again on every run: the commit renders a new editor element.
      const page = ctx.page as any;
      const editor = page.query(selectors.titleEditor(name));
      await page.focusEnd(editor);
      await page.type(editor, typedTitleText);
      await page.blur(editor);
    },
    check: (ctx: PerfContext, state: any): void => {
      let expected = state.before;
      for (let i = 0; i < titleTypeRepeats; i++) expected += typedTitleText;
      expectEqual(state.q.title, expected, "the title of " + name);
      const editor = (ctx.page as any).query(selectors.titleEditor(name));
      expectEqual(editor && editor.textContent, expected, "the rendered title");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// designer/collapse-all and designer/expand-all: the buttons of the designer's surface toolbar. On the first sample
// setup brings ten more pages into view (renderPagesInView), so the pages a person went through have their content
// rendered; from the loaded view alone only the first pages have content, and Collapse All takes under the 40 ms
// minimum (R03-F2, F3). Collapse All starts from that view (setup expands everything again and scrolls to the top); Expand
// All from everything collapsed (setup clicks Collapse All, untimed). The update alone leaves the pages that come into
// view as placeholders (their content renders 1 ms later, components/page.ts), so the timed part ends when no lazy
// render is due in the view: what a person sees once the button has done its work.
export function collapsedPages(creator: any): number {
  return creator.survey.pages.filter((p: any) => creator.designerStateManager.getElementCollapsed(p)).length;
}

export function expandCollapse(fixture: FixtureKey, op: "collapse-all" | "expand-all"): PerfScenario {
  const collapse = op === "collapse-all";
  return {
    id: fixture + "/designer/" + op, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "restoreDesignerTab", "scrollDesignerTop", "renderPagesInView", "collapsedPages",
      "selectors"],
    requires: ["SurveyCreatorModel.expandCollapseButtonVisibility"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const page = ctx.page as any;
      const { creator, restored } = await startCreator(ctx);
      restoreDesignerTab(creator);
      if (!restored) await renderPagesInView(ctx);
      const pages = creator.survey.pages.length;
      if (collapse && restored && collapsedPages(creator) > 0) await page.click(selectors.expandAll);
      if (!collapse && collapsedPages(creator) < pages) await page.click(selectors.collapseAll);
      await scrollDesignerTop(ctx);
      await page.settle();
      expectEqual(collapsedPages(creator), collapse ? 0 : pages, "collapsed pages before the sample");
      expectEqual(page.queryAll(selectors.collapsedPageContent).length > 0, !collapse, "pages shown collapsed before the sample");
      return { creator: creator, pages: pages };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      const page = ctx.page as any;
      await page.click(collapse ? selectors.collapseAll : selectors.expandAll);
      await page.until(() => !page.lazyRenderDue(), "the pages in view rendered");
    },
    check: (ctx: PerfContext, state: any): void => {
      const page = ctx.page as any;
      expectEqual(collapsedPages(state.creator), collapse ? state.pages : 0, "collapsed pages");
      const rendered = page.queryAll(selectors.pageContent).length;
      expectThat(rendered > 0, "pages are rendered");
      expectEqual(page.queryAll(selectors.collapsedPageContent).length, collapse ? rendered : 0, "rendered pages shown collapsed");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// designer/object-selector: the object selector of the property grid header, with the survey selected. Phases:
// open (the click, to the list shown) and search (q3978 typed into its search box, to the list holding one item).
// Between them, untimed, the settle lets the popup focus its search box (100 ms after showing). Setup clears the
// search and closes the popup the previous sample left open.
export const objectSelectorSearch = "q3978";

export function visibleItems(ctx: PerfContext): Array<any> {
  return (ctx.page as any).queryAll(selectors.objectSelectorItems).filter((li: any) => li.style.display !== "none");
}

export function objectSelectorShown(ctx: PerfContext): boolean {
  const page = ctx.page as any;
  return page.inViewport(page.query(selectors.objectSelectorContainer)) && visibleItems(ctx).length > 0;
}

export function objectSelector(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/designer/object-selector", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "restoreDesignerTab", "clickElement", "expectSelected", "visibleItems",
      "objectSelectorShown", "objectSelectorSearch", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const page = ctx.page as any;
      const { creator } = await startCreator(ctx);
      restoreDesignerTab(creator);
      const search = page.query(selectors.objectSelectorSearch);
      if (search && objectSelectorShown(ctx)) {
        if (search.value) await page.commit(search, "");
        await page.press(search, "Escape");
      }
      clickElement(creator, creator.survey);
      await page.settle();
      expectSelected(creator, creator.survey, "the survey");
      expectThat(!objectSelectorShown(ctx), "the object selector is closed before the sample");
      return { creator: creator };
    },
    run: async(ctx: PerfContext, state: any): Promise<any> => {
      const page = ctx.page as any;
      const t0 = ctx.now();
      await page.click(selectors.objectSelectorButton);
      await page.until(() => objectSelectorShown(ctx), "the object selector list");
      const t1 = ctx.now();
      await page.settle();
      const input = page.query(selectors.objectSelectorSearch);
      expectThat(!!input && input.value === "", "the search box is empty");
      await page.focusEnd(input);
      const t2 = ctx.now();
      await page.type(input, objectSelectorSearch);
      await page.until(() => visibleItems(ctx).length === 1, "one item in the object selector list");
      return { open: t1 - t0, search: ctx.now() - t2 };
    },
    check: (ctx: PerfContext, state: any): void => {
      expectThat(objectSelectorShown(ctx), "the object selector is open");
      const items = visibleItems(ctx);
      expectEqual(items.length, 1, "items in the list");
      expectEqual(items[0].textContent.trim(), objectSelectorSearch, "the item");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function browserScenarios(): Array<PerfScenario> {
  return [
    loadPaint("huge"), loadPaint("typical"), titleType("typical"),
    expandCollapse("huge", "collapse-all"), expandCollapse("huge", "expand-all"), objectSelector("huge")
  ];
}
