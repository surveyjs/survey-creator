import {
  QuestionDropdownModel
} from "survey-core";
import { CreatorTester } from "./creator-tester";
import { QuestionAdornerViewModel } from "../src/components/question";
import { SurveyLogicUI } from "../src/components/tabs/logic-ui";
import { ConditionEditor } from "../src/property-grid/condition-survey";
import { ObjectSelector } from "../src/property-grid/object-selector";
import { PropertyGridModelTester } from "./property-grid/property-grid.base";
import { TabDesignerViewModel } from "../src/components/tabs/designer";

export * from "../src/components/link-value";

// These tests cover every place where the `useElementTitles` property takes part in
// building the text shown for a survey element. Every such place is expected to go
// through the same pipeline - creator.getObjectDisplayName() - so that the
// onElementGetDisplayName event can override the text.
//
// The handler below marks the text it produces with a "#" prefix, so a test can tell
// whether the event took part in building the text at all.

interface IDisplayNameCall {
  area: string;
  reason: string;
  name: string;
  displayName: string;
}

function addDisplayNameHandler(creator: CreatorTester, areaPrefix?: string): Array<IDisplayNameCall> {
  const calls: Array<IDisplayNameCall> = [];
  creator.onElementGetDisplayName.add((sender, options) => {
    const area = options.area || "";
    if (!!areaPrefix && area !== areaPrefix && area.indexOf(areaPrefix + ":") !== 0) return;
    calls.push({
      area: area,
      reason: options.reason,
      name: options.element["name"],
      displayName: options.displayName
    });
    options.displayName = "#" + (options.element["name"] || options.displayName);
  });
  return calls;
}

function getAreas(calls: Array<IDisplayNameCall>): Array<string> {
  const res: Array<string> = [];
  calls.forEach(call => { if (res.indexOf(call.area) < 0) res.push(call.area); });
  return res;
}

const twoQuestionsJSON = {
  elements: [
    { type: "text", name: "q1", title: "Question 1 title" },
    { type: "text", name: "q2", title: "Question 2 title", visibleIf: "{q1} = 1" }
  ]
};

//#region The pipeline itself

test("useElementTitles + onElementGetDisplayName: creator.getObjectDisplayName", () => {
  const creator = new CreatorTester();
  creator.JSON = twoQuestionsJSON;
  const q1 = creator.survey.getQuestionByName("q1");
  expect(creator.getObjectDisplayName(q1, "custom-area")).toBe("q1");
  creator.useElementTitles = true;
  expect(creator.getObjectDisplayName(q1, "custom-area")).toBe("Question 1 title");
  const calls = addDisplayNameHandler(creator);
  expect(creator.getObjectDisplayName(q1, "custom-area")).toBe("#q1");
  expect(calls).toHaveLength(1);
  expect(calls[0].displayName).toBe("Question 1 title");
});

test("useElementTitles + onElementGetDisplayName: page selector", () => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = {
    pages: [
      { name: "page1", title: "Page 1 title", elements: [{ type: "text", name: "q1" }] }
    ]
  };
  const pagesController = (<TabDesignerViewModel>creator.getPlugin("designer").model).pagesController;
  const page = creator.survey.pages[0];
  expect(pagesController.getDisplayName(page)).toBe("Page 1 title");
  const calls = addDisplayNameHandler(creator, "page-selector");
  expect(pagesController.getDisplayName(page)).toBe("#page1");
  expect(calls).toHaveLength(1);
  expect(calls[0].displayName).toBe("Page 1 title");
});

//#endregion

//#region Designer tab

test("useElementTitles + onElementGetDisplayName: carry-forward banner", () => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", title: "Question 1 title", choices: [1, 2, 3] },
      { type: "dropdown", name: "q2", title: "Question 2 title", choicesFromQuestion: "q1" }
    ]
  };
  const q2 = creator.survey.getQuestionByName("q2");
  const adorner = new QuestionAdornerViewModel(creator, q2, undefined);
  expect(adorner.createBannerParams().actionText).toBe("Question 1 title");
  const calls = addDisplayNameHandler(creator, "designer-tab");
  expect(adorner.createBannerParams().actionText).toBe("#q1");
  expect(getAreas(calls)).toEqual(["designer-tab:carry-forward-banner"]);
  expect(calls[0].displayName).toBe("Question 1 title");
});

//#endregion

//#region Logic tab: the list of logic rules

test("useElementTitles + onElementGetDisplayName: logic rule action text", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  let logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].actions[0].text).toContain("Question 2 title");
  const calls = addDisplayNameHandler(creator, "logic-tab:rule-action");
  logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items[0].actions[0].text).toContain("#q2");
  expect(getAreas(calls)).toEqual(["logic-tab:rule-action"]);
});

test("useElementTitles + onElementGetDisplayName: logic rule expression text", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  let logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].expressionText).toContain("Question 1 title");
  const calls = addDisplayNameHandler(creator, "logic-tab:rule-condition");
  logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items[0].expressionText).toContain("#q1");
  expect(getAreas(calls)).toEqual(["logic-tab:rule-condition"]);
});

test("useElementTitles + onElementGetDisplayName: logic rule display text", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  const calls = addDisplayNameHandler(creator, "logic-tab");
  const logic = new SurveyLogicUI(creator.survey, creator);
  const text = logic.items[0].getDisplayText();
  expect(text).toContain("#q1");
  expect(text).toContain("#q2");
  expect(getAreas(calls).sort()).toEqual(["logic-tab:rule-action", "logic-tab:rule-condition"]);
});

test("useElementTitles + onElementGetDisplayName: logic tab question filter", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  const calls = addDisplayNameHandler(creator, "logic-tab:question-filter");
  const logic = new SurveyLogicUI(creator.survey, creator);
  const titles = logic.getUsedQuestions().map(q => creator.getObjectDisplayName(q, "logic-tab:question-filter", "condition"));
  expect(titles).toEqual(["#q1", "#q2"]);
  expect(getAreas(calls)).toEqual(["logic-tab:question-filter"]);
});

//#endregion

//#region Logic tab: the logic rule editor

test("useElementTitles + onElementGetDisplayName: element selector for questions", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  const calls = addDisplayNameHandler(creator, "logic-tab");
  const logic = new SurveyLogicUI(creator.survey, creator);
  logic.editItem(logic.items[0]);
  const selector = <QuestionDropdownModel>logic.itemEditor.panels[0].getQuestionByName("elementSelector");
  expect(selector.choices.map(c => c.text)).toEqual(["#q1", "#q2"]);
  expect(getAreas(calls)).toContain("logic-tab:question-selector");
});

test("useElementTitles + onElementGetDisplayName: element selector for pages", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = {
    pages: [
      { name: "page1", title: "Page 1 title", elements: [{ type: "text", name: "q1" }] },
      { name: "page2", title: "Page 2 title", visibleIf: "{q1} = 1", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  const calls = addDisplayNameHandler(creator, "logic-tab");
  const logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  const selector = <QuestionDropdownModel>logic.itemEditor.panels[0].getQuestionByName("elementSelector");
  expect(selector.choices.map(c => c.text)).toEqual(["#page1", "#page2"]);
  expect(getAreas(calls)).toContain("logic-tab:question-selector");
});

test("useElementTitles + onElementGetDisplayName: element selector for panels", () => {
  const creator = new CreatorTester({ showLogicTab: true, useElementTitles: true });
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "panel", name: "panel1", title: "Panel 1 title", visibleIf: "{q1} = 1", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  const calls = addDisplayNameHandler(creator, "logic-tab");
  const logic = new SurveyLogicUI(creator.survey, creator);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  const selector = <QuestionDropdownModel>logic.itemEditor.panels[0].getQuestionByName("elementSelector");
  expect(selector.choices.map(c => c.text)).toEqual(["#panel1"]);
  expect(getAreas(calls)).toContain("logic-tab:question-selector");
});

//#endregion

//#region Condition (expression) editor

test("useElementTitles + onElementGetDisplayName: condition editor, useElementTitles is false", () => {
  const creator = new CreatorTester();
  creator.JSON = twoQuestionsJSON;
  const calls = addDisplayNameHandler(creator, "condition-editor");
  const editor = new ConditionEditor(creator.survey, creator.survey.getQuestionByName("q2"), creator, "visibleIf");
  const nameQuestion = <QuestionDropdownModel>editor.panel.panels[0].getQuestionByName("questionName");
  expect(nameQuestion.choices.map(c => c.text)).toEqual(["#q1"]);
  expect(getAreas(calls)).toEqual(["condition-editor"]);
});

test("useElementTitles + onElementGetDisplayName: condition editor, useElementTitles is true", () => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  const editor1 = new ConditionEditor(creator.survey, creator.survey.getQuestionByName("q2"), creator, "visibleIf");
  const nameQuestion1 = <QuestionDropdownModel>editor1.panel.panels[0].getQuestionByName("questionName");
  expect(nameQuestion1.choices.map(c => c.text)).toEqual(["Question 1 title"]);
  const calls = addDisplayNameHandler(creator, "condition-editor");
  const editor2 = new ConditionEditor(creator.survey, creator.survey.getQuestionByName("q2"), creator, "visibleIf");
  const nameQuestion2 = <QuestionDropdownModel>editor2.panel.panels[0].getQuestionByName("questionName");
  expect(nameQuestion2.choices.map(c => c.text)).toEqual(["#q1"]);
  expect(getAreas(calls)).toEqual(["condition-editor"]);
});

//#endregion

//#region Property grid

test("useElementTitles + onElementGetDisplayName: property grid question property editor", () => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", title: "Question 1 title", choices: [1, 2, 3] },
      { type: "dropdown", name: "q2", title: "Question 2 title", choices: [1, 2, 3] }
    ]
  };
  const q2 = creator.survey.getQuestionByName("q2");
  const propertyGrid1 = new PropertyGridModelTester(q2, creator);
  const editor1 = <QuestionDropdownModel>propertyGrid1.survey.getQuestionByName("choicesFromQuestion");
  expect(editor1.choices.map(c => c.text)).toEqual(["Question 1 title"]);
  const calls = addDisplayNameHandler(creator, "property-grid");
  const propertyGrid2 = new PropertyGridModelTester(q2, creator);
  const editor2 = <QuestionDropdownModel>propertyGrid2.survey.getQuestionByName("choicesFromQuestion");
  expect(editor2.choices.map(c => c.text)).toEqual(["#q1"]);
  expect(getAreas(calls)).toContain("property-grid:property-editor");
});

test("useElementTitles + onElementGetDisplayName: property grid element selector", () => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = twoQuestionsJSON;
  const selector = new ObjectSelector(creator, creator.survey);
  expect(selector.items.map(i => i.title)).toEqual(["Survey", "page1", "Question 1 title", "Question 2 title"]);
  const calls = addDisplayNameHandler(creator, "property-grid-header");
  const selector2 = new ObjectSelector(creator, creator.survey, (obj, area, reason, displayName) => {
    return creator.getObjectDisplayName(obj, area, reason, displayName);
  });
  expect(selector2.items.map(i => i.title)).toEqual(["#Survey", "#page1", "#q1", "#q2"]);
  expect(getAreas(calls)).toEqual(["property-grid-header:element-list"]);
});

//#endregion
