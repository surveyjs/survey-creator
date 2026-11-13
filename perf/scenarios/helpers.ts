import type { PerfContext } from "../harness/scenario.ts";
import { expectThat } from "../harness/scenario.ts";
import { createCreator } from "./options.ts";

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

export function releaseCreator(ctx: PerfContext, creator: any): void {
  if (creator && !creator.isDisposed) creator.dispose();
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
