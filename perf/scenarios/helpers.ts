import type { PerfContext } from "../harness/scenario.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { createCreator } from "./options.ts";
import { selectors } from "./selectors.ts";

// Helpers the scenarios call. A scenario lists the ones it calls in `uses`: their source is part of its rev hash
// (00, Ids), so a change here shows as a changed hash. Each stands for a UI action, named in its comment, and calls
// the model API that action calls.

// A fresh creator with a fresh copy of the fixture loaded, in the Designer tab (untimed setup). Records the
// jsonErrors count of the designer survey.
export function loadCreator(ctx: PerfContext): any {
  const creator = createCreator(ctx);
  creator.JSON = JSON.parse(ctx.fixture.text);
  recordJsonErrors(ctx, creator);
  return creator;
}

export function recordJsonErrors(ctx: PerfContext, creator: any): void {
  const errors = creator.survey ? creator.survey.jsonErrors : undefined;
  ctx.cache.jsonErrors = errors ? errors.length : 0;
}

// Core: the end of the sample's creator. Browser: nothing, the page owns the creator it shows (startCreator).
export function releaseCreator(ctx: PerfContext, creator: any): void {
  if (ctx.page) return;
  if (creator && !creator.isDisposed) creator.dispose();
}

// The creator a sample starts from. Core: a fresh one (loadCreator). Browser (03): with reset "restore", the
// creator the page shows already, and restored: true, so the caller's setup puts back what the previous sample
// changed; on the first sample, or with reset "creator" or "page", a new one with the fixture, shown and settled
// (the one shown before is unmounted and disposed).
export async function startCreator(ctx: PerfContext): Promise<{ creator: any, restored: boolean }> {
  if (!ctx.page) return { creator: loadCreator(ctx), restored: false };
  const kept = ctx.cache.creator;
  if (kept && !kept.isDisposed && ctx.cache.reset === "restore") return { creator: kept, restored: true };
  const creator = loadCreator(ctx);
  await ctx.page.showCreator(creator);
  ctx.cache.creator = creator;
  return { creator: creator, restored: false };
}

// Restore: back to the Designer tab (a model switch, untimed).
export function restoreDesignerTab(creator: any): void {
  if (creator.activeTab !== "designer") creator.switchTab("designer");
  expectEqual(creator.activeTab, "designer", "the tab after the restore");
}

// Restore: undo the previous sample's edits until done() holds (each edit is one undo transaction).
export function undoUntil(creator: any, done: () => boolean, what: string): void {
  for (let i = 0; i < 20 && !done(); i++) creator.undo();
  expectThat(done(), what + " after the undo");
}

// Core: a click on the element (clickElement). Browser: the element brought into view, as a person scrolls to it
// before acting on it: selectElement with focus on, which renders its page and scrolls it into view (the object
// selector's pick does the same), then the settle. Untimed.
export async function showElement(ctx: PerfContext, creator: any, el: any): Promise<void> {
  if (!ctx.page) {
    clickElement(creator, el);
    return;
  }
  creator.selectElement(el);
  await ctx.page.settle();
}

// Browser: the designer surface scrolled back to its top (untimed), for a scenario that starts from the loaded view.
export async function scrollDesignerTop(ctx: PerfContext): Promise<void> {
  if (!ctx.page) return;
  const scroller = ctx.page.query(selectors.designerScroller);
  expectThat(!!scroller, "the designer surface scrolls");
  if (scroller.scrollTop !== 0) {
    scroller.scrollTop = 0;
    await ctx.page.settle();
  }
}

// Browser: the next page whose content is not rendered scrolled into view, then the settle, renderedPages times: each
// renders its content (and keeps it while its adorner stays mounted). Untimed. Then back to the top. Scrolling by a
// fixed step instead (browser-probe.js's scroll10x, 10 x 2,500 px) stays inside the first three pages of huge once
// their rows render (R03-F3).
export const renderedPages = 10;

export async function renderPagesInView(ctx: PerfContext): Promise<void> {
  if (!ctx.page) return;
  const page = ctx.page;
  expectThat(!!page.query(selectors.designerScroller), "the designer surface scrolls");
  for (let i = 0; i < renderedPages; i++) {
    const before = page.queryAll(selectors.pagePlaceholder).length;
    const next = page.query(selectors.pagePlaceholder);
    if (!next) break;
    next.scrollIntoView({ block: "start" });
    await page.settle();
    expectThat(page.queryAll(selectors.pagePlaceholder).length < before, "a page rendered its content after it was scrolled into view");
  }
  await scrollDesignerTop(ctx);
}

// Browser: the adorner of the named element, when it is rendered.
export function adornerOf(ctx: PerfContext, name: string): any {
  return ctx.page ? ctx.page.query(selectors.elementAdorner(name)) : undefined;
}

// Browser: the property grid header shows the element the property grid edits (the object selector's caption).
export function expectGridHeader(ctx: PerfContext, creator: any, el: any, what: string): void {
  if (!ctx.page) return;
  const caption = ctx.page.query(selectors.selectedElementName);
  expectThat(!!caption, "the property grid header is rendered");
  const vm = creator.getPlugin("designer").propertyGridViewModel;
  expectEqual(caption.textContent, vm.selectedElementName, "the property grid header of " + what);
  if (el.isQuestion || el.isPanel || el.isPage) expectEqual(caption.textContent, el.name, "the property grid header of " + what);
}

// "survey", or the name of a page, a panel or a question of the designer survey.
export function findElement(creator: any, name: string): any {
  if (name === "survey") return creator.survey;
  const survey = creator.survey;
  const el = survey.getPageByName(name) || survey.getPanelByName(name) || survey.getQuestionByName(name);
  expectThat(!!el, "the fixture has " + name);
  return el;
}

// A click on an element in the design surface: the question, panel and page adorners and the survey's empty area
// call selectElement(element, undefined, false) (components/question.ts, page.ts).
export function clickElement(creator: any, el: any): void {
  creator.selectElement(el, undefined, false);
}

// A click on a tab of the tab strip (tabbed-menu.ts).
export function clickTab(creator: any, tab: string): void {
  creator.switchTab(tab);
}

// A click on a toolbox item (ToolboxToolViewModel.click): the item's JSON to clickToolboxItem.
export function addFromToolbox(creator: any, type: string): void {
  const item = creator.toolbox.getItemByName(type);
  expectThat(!!item, "the toolbox has " + type);
  creator.clickToolboxItem(item.json);
}

// Browser: the toolbox item of a type, as a person finds it: the tool whose title is the item's title.
export function toolboxElement(ctx: PerfContext, creator: any, type: string): any {
  const item = creator.toolbox.getItemByName(type);
  expectThat(!!item, "the toolbox has " + type);
  const tools = (ctx.page as any).queryAll(selectors.toolboxTool).filter((t: any) => {
    const title = t.querySelector(selectors.toolboxTitle);
    return !!title && title.textContent === item.title;
  });
  expectEqual(tools.length, 1, "toolbox tools titled " + item.title);
  const el = tools[0].querySelector(selectors.toolboxItem);
  expectThat(!!el, "the toolbox item of " + type);
  return el;
}

// A value typed or toggled in the property grid: the property grid survey's question for the property.
export function setGridValue(creator: any, property: string, value: any): void {
  const question = creator.propertyGrid.getQuestionByName(property);
  expectThat(!!question, "the property grid shows " + property);
  question.value = value;
}

export function questionCount(creator: any): number {
  return creator.survey.getAllQuestions(false).length;
}

// The selection and the property grid both show el, with at least one visible question in the grid.
export function expectSelected(creator: any, el: any, what: string): void {
  expectThat(creator.selectedElement === el, what + " is selected");
  const grid = creator.propertyGrid;
  expectThat(!!grid && grid.editingObj === el, "the property grid edits " + what);
  expectThat(grid.getAllQuestions(true).length > 0, "the property grid of " + what + " shows a question");
}
