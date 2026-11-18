import type { PerfContext, PerfScenario } from "../harness/scenario.ts";
import type { FixtureKey } from "../harness/ids.ts";
import { expectThat, expectEqual } from "../harness/scenario.ts";
import { loadCreator, releaseCreator, findElement, clickElement, addFromToolbox, setGridValue, questionCount, expectSelected, startCreator,
  restoreDesignerTab, undoUntil, showElement, adornerOf, toolboxElement } from "./helpers.ts";
import { selectors } from "./selectors.ts";

// edit: one designer edit on a fresh creator (00, The scenarios). Each sample loads the fixture again in setup.
//
// Browser (03): the creator is shown once; setup undoes the previous sample's edit and brings the edited element
// into view (showElement: selected with focus on, which scrolls it in), as a person does before editing it. The
// timed part ends with the update.

// The page a question is added to, and the question the other edits change: on huge the page and the question of
// huge/select (q3978 is on page 106 of 109); on typical the first page and its first text question.
export const editTargets: { [fixture: string]: { page: string, question: string } } = {
  huge: { page: "106", question: "q3978" },
  typical: { page: "page1", question: "text1" }
};

// edit/add-question: a click on the Text item of the toolbox (addFromToolbox) with a page selected. The creator
// adds the question to that page and selects it.
export function addQuestion(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/edit/add-question", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "findElement", "clickElement", "addFromToolbox", "questionCount", "editTargets",
      "restoreDesignerTab", "undoUntil", "showElement", "toolboxElement", "adornerOf", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator, restored } = await startCreator(ctx);
      const page = findElement(creator, editTargets[fixture].page);
      if (ctx.page) {
        restoreDesignerTab(creator);
        if (restored) undoUntil(creator, () => questionCount(creator) === ctx.cache.questions, "the question count");
        else ctx.cache.questions = questionCount(creator);
        // From the survey selected, so selecting the page scrolls it to the top of the view in every sample.
        clickElement(creator, creator.survey);
      }
      await showElement(ctx, creator, page);
      expectThat(creator.selectedElement === page, "the page is selected");
      const tool = ctx.page ? toolboxElement(ctx, creator, "text") : undefined;
      return { creator: creator, page: page, count: questionCount(creator), pageCount: page.questions.length, tool: tool };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      if (ctx.page) await ctx.page.click(state.tool);
      else addFromToolbox(state.creator, "text");
    },
    check: (ctx: PerfContext, state: any): void => {
      expectEqual(questionCount(state.creator), state.count + 1, "questions");
      expectEqual(state.page.questions.length, state.pageCount + 1, "questions on the page");
      const added = state.creator.selectedElement;
      expectThat(!!added && added.getType() === "text" && added.page === state.page, "the new text question is selected, on the page");
      if (ctx.page) expectThat(!!adornerOf(ctx, added.name), "the new question " + added.name + " is rendered");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// edit/delete: the Delete button of the selected question's adorner (SurveyElementAdornerBase.delete), which calls
// creator.deleteElement.
export function deleteQuestion(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/edit/delete", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "findElement", "clickElement", "questionCount", "editTargets",
      "restoreDesignerTab", "undoUntil", "showElement", "adornerOf", "selectors"],
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator, restored } = await startCreator(ctx);
      const name = editTargets[fixture].question;
      if (ctx.page) {
        restoreDesignerTab(creator);
        if (restored) undoUntil(creator, () => !!creator.survey.getQuestionByName(name), name + " is back");
        clickElement(creator, creator.survey);
      }
      const q = findElement(creator, name);
      await showElement(ctx, creator, q);
      if (ctx.page) expectThat(!!adornerOf(ctx, name), name + " is rendered before the sample");
      return { creator: creator, q: q, count: questionCount(creator) };
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      state.creator.deleteElement(state.q);
      if (ctx.page) await ctx.page.updated();
    },
    check: (ctx: PerfContext, state: any): void => {
      expectEqual(questionCount(state.creator), state.count - 1, "questions");
      expectThat(!state.creator.survey.getQuestionByName(state.q.name), state.q.name + " is gone");
      if (ctx.page) expectThat(!adornerOf(ctx, state.q.name), state.q.name + "'s adorner is gone");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// edit/convert@<question>: Convert To > Checkboxes in the selected question's adorner. The menu item calls
// convertCurrentQuestion(type, json) with an empty json for an item without a preset (QuestionAdornerViewModel).
// The type each convert target becomes: a constant in `uses`, so a change to it changes the rev hash (a factory
// argument would show in the hashed source only as its name).
export const convertTo: { [target: string]: string } = { dropdown1: "checkbox" };

export function convertQuestion(fixture: FixtureKey, target: string): PerfScenario {
  return {
    id: fixture + "/edit/convert@" + target, rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "findElement", "clickElement", "expectSelected", "convertTo"],
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      const q = findElement(creator, target);
      expectThat(q.getType() !== convertTo[target], target + " is not a " + convertTo[target]);
      clickElement(creator, q);
      return { creator: creator, q: q };
    },
    run: (ctx: PerfContext, state: any): void => {
      state.creator.convertCurrentQuestion(convertTo[target], {});
    },
    check: (ctx: PerfContext, state: any): void => {
      const q = state.creator.survey.getQuestionByName(target);
      expectThat(!!q && q !== state.q && q.getType() === convertTo[target], target + " is a new " + convertTo[target]);
      expectSelected(state.creator, q, "the converted " + target);
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

// edit/property: the Required checkbox of the property grid, through the grid survey's isRequired question, so the
// grid's path to the question runs (not question.isRequired). One toggle is under the core minimum of 10 ms, so a sample is
// requiredToggles clicks (repeat), an odd number: the question ends required. Each click is counted on the question,
// so a run that changes nothing fails the check.
export const requiredToggles = 5;
// The browser renders each toggle: 5 take about 30 ms on typical, under the 40 ms minimum, so a sample is 9 there.
export const browserRequiredToggles = 9;

export function toggleRequired(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/edit/property", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "startCreator", "releaseCreator", "findElement", "clickElement", "setGridValue", "editTargets", "requiredToggles",
      "browserRequiredToggles", "restoreDesignerTab", "showElement", "selectors"],
    repeat: requiredToggles,
    browser: { repeat: browserRequiredToggles },
    setup: async(ctx: PerfContext): Promise<any> => {
      const { creator, restored } = await startCreator(ctx);
      const q = findElement(creator, editTargets[fixture].question);
      if (ctx.page) {
        restoreDesignerTab(creator);
        // Set back on the question rather than undone nine times: one change (the undo stack still grows by ten
        // transactions per sample).
        if (restored) q.isRequired = false;
        clickElement(creator, creator.survey);
      }
      await showElement(ctx, creator, q);
      expectThat(q.isRequired === false, q.name + " is not required before the sample");
      if (ctx.page) {
        expectThat(!!ctx.page.query(selectors.elementAdorner(q.name)), q.name + " is rendered before the sample");
        expectThat(!ctx.page.query(selectors.requiredTitle(q.name)), q.name + "'s title is not shown as required before the sample");
      }
      const state = { creator: creator, q: q, changes: 0 };
      q.registerFunctionOnPropertyValueChanged("isRequired", () => { state.changes++; }, "perf-edit-property");
      return state;
    },
    run: async(ctx: PerfContext, state: any): Promise<void> => {
      setGridValue(state.creator, "isRequired", !state.q.isRequired);
      if (ctx.page) await ctx.page.updated();
    },
    check: (ctx: PerfContext, state: any): void => {
      expectEqual(state.changes, ctx.page ? browserRequiredToggles : requiredToggles, "isRequired changes");
      expectThat(state.q.isRequired === true, state.q.name + " is required");
      expectThat(state.creator.state === "modified" || state.creator.state === "saved", "the creator saw the change");
      if (ctx.page) expectThat(!!ctx.page.query(selectors.requiredTitle(state.q.name)), state.q.name + "'s title is shown as required");
    },
    teardown: (ctx: PerfContext, state: any): void => {
      state.q.unRegisterFunctionOnPropertyValueChanged("isRequired", "perf-edit-property");
      releaseCreator(ctx, state.creator);
    }
  };
}

// edit/undo-redo: ten edits in setup, each its own undo transaction (different elements or properties, so none
// merges with the one before); the run is ten clicks on Undo, then ten on Redo (the toolbar's undo / redo actions
// call creator.undo / creator.redo).
export const undoRedoSteps = 10;

export function makeTenEdits(creator: any): void {
  const s = creator.survey;
  s.getQuestionByName("text1").title = "Edited title 1";
  s.getQuestionByName("text2").title = "Edited title 2";
  s.getQuestionByName("dropdown1").isRequired = true;
  s.getQuestionByName("checkbox1").isRequired = true;
  clickElement(creator, s.getPageByName("page2"));
  addFromToolbox(creator, "text");
  addFromToolbox(creator, "checkbox");
  creator.deleteElement(s.getQuestionByName("text3"));
  s.getPageByName("page1").title = "Edited page title";
  s.getQuestionByName("radiogroup1").title = "Edited title 3";
  s.title = "Edited survey title";
}

export function undoRedo(fixture: FixtureKey): PerfScenario {
  return {
    id: fixture + "/edit/undo-redo", rev: 1, fixture: fixture, kind: "action",
    uses: ["createCreator", "loadCreator", "releaseCreator", "makeTenEdits", "clickElement", "addFromToolbox", "undoRedoSteps"],
    setup: (ctx: PerfContext): any => {
      const creator = loadCreator(ctx);
      const original = creator.text;
      makeTenEdits(creator);
      const state = { creator: creator, original: original, edited: creator.text, undos: 0, redos: 0 };
      // Counted only when there is something to undo or redo, so a run that does nothing fails the check.
      creator.onBeforeUndo.add((sender: any, options: any) => { if (options.canUndo) state.undos++; });
      creator.onBeforeRedo.add((sender: any, options: any) => { if (options.canRedo) state.redos++; });
      expectThat(state.edited !== original, "the edits changed the survey");
      return state;
    },
    run: (ctx: PerfContext, state: any): void => {
      for (let i = 0; i < undoRedoSteps; i++) state.creator.undo();
      for (let i = 0; i < undoRedoSteps; i++) state.creator.redo();
    },
    check: (ctx: PerfContext, state: any): void => {
      expectEqual(state.undos, undoRedoSteps, "undos");
      expectEqual(state.redos, undoRedoSteps, "redos");
      expectEqual(state.creator.text, state.edited, "creator.text after the run");
    },
    teardown: (ctx: PerfContext, state: any): void => releaseCreator(ctx, state.creator)
  };
}

export function editScenarios(): Array<PerfScenario> {
  return [
    addQuestion("typical"), addQuestion("huge"), deleteQuestion("typical"), convertQuestion("typical", "dropdown1"),
    toggleRequired("typical"), toggleRequired("huge"), undoRedo("typical")
  ];
}
