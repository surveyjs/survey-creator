import { SurveyModel } from "survey-knockout";
import {
  ConditionEditorBase,
  ConditionEditorItemsBuilder,
  ConditionEditorItem,
} from "../../src/property-grid/condition-survey";

test("Items Builder, simple test", () => {
  var builder = new ConditionEditorItemsBuilder();
  var items = builder.build("{question1} = 1");
  expect(items).toHaveLength(1);
  expect(items[0].questionName).toEqual("question1");
  expect(items[0].operator).toEqual("equal");
  expect(items[0].value).toEqual(1);
  items = builder.build("1 = {question1}");
  expect(items).toHaveLength(1);
  expect(items[0].questionName).toEqual("question1");
  expect(items[0].operator).toEqual("equal");
  expect(items[0].value).toEqual(1);
});

test("Create simple edit", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" },
    ],
  });
  var conditionEditor = new ConditionEditorBase(survey);
  conditionEditor.text = "{question1} = 2";
  expect(conditionEditor.panel.panelCount).toEqual(1);
  expect(conditionEditor.text).toEqual("{question1} = 2");
});
