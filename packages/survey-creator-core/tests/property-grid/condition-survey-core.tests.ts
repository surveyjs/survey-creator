import {
  settings as surveySettings, SurveyModel,
  ConditionEditorItemsBuilder as CoreItemsBuilder, ConditionEditorItem as CoreItem,
  SurveyConditionEditorItem as CoreSurveyItem
} from "survey-core";
import { settings } from "../../src/creator-settings";
import {
  ConditionEditor, ConditionEditorItemsBuilder, ConditionEditorItem, SurveyConditionEditorItem
} from "../../src/property-grid/condition-survey";

export * from "../../src/components/link-value";

test("settings.operators is the survey-core operator table", () => {
  expect(settings.operators).toBe(surveySettings.logic.operators);
  const prev = settings.operators;
  const table = { empty: [], equal: [] };
  settings.operators = table;
  try {
    expect(surveySettings.logic.operators, "a whole table assigned through Creator reaches the core").toBe(table);
  } finally {
    settings.operators = prev;
  }
});
test("settings.logic.defaultOperators and defaultOperator are the survey-core defaults", () => {
  expect(settings.logic.defaultOperators).toBe(surveySettings.logic.defaultOperators);
  const prev = settings.logic.defaultOperator;
  settings.logic.defaultOperator = "notequal";
  try {
    expect(surveySettings.logic.defaultOperators.default).toBe("notequal");
  } finally {
    settings.logic.defaultOperator = prev;
  }
});
test("the condition rows, their text and their builder come from survey-core", () => {
  expect(ConditionEditorItemsBuilder).toBe(CoreItemsBuilder);
  expect(ConditionEditorItem).toBe(CoreItem);
  expect(SurveyConditionEditorItem).toBe(CoreSurveyItem);
});
test("a whole defaultOperators object assigned through Creator reaches the core", () => {
  const prev = settings.logic.defaultOperators;
  const defaults = { default: "notequal" };
  settings.logic.defaultOperators = defaults;
  try {
    expect(surveySettings.logic.defaultOperators).toBe(defaults);
  } finally {
    settings.logic.defaultOperators = prev;
  }
});
test("an expression with a null operand opens in the condition editor without throwing", () => {
  expect(ConditionEditor.canBuildExpression("null = {q1}"), "#1").toBe(false);
  const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" },
    { type: "text", name: "q2", visibleIf: "{q1} = 1 and null" }] });
  expect(() => new ConditionEditor(survey, survey.getQuestionByName("q2"), undefined, "visibleIf"), "#2").not.toThrow();
});
test("an expression with a null operand stays text in the non-modal condition editor", () => {
  const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
  const editor = new ConditionEditor(survey);
  editor.isModal = false;
  editor.text = "{q1} = 1 and null";
  expect(editor.textEditor.visible, "#1").toBe(true);
  expect(editor.text, "#2: exactly what was written").toBe("{q1} = 1 and null");
});
