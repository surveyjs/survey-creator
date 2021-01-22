import {
  SurveyModel,
  Question,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionDropdownModel,
  QuestionRadiogroupModel,
  QuestionPanelDynamicModel,
  ItemValue,
} from "survey-knockout";
import { DefaultValueEditor } from "../../src/property-grid/values-survey";

test("Items Builder, simple test", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3, 4, 5];
  question.defaultValue = 2;
  var editor = new DefaultValueEditor(question, "defaultValue");
  expect(editor.question.choices).toHaveLength(5);
  expect(editor.question.value).toEqual(2);
  editor.question.value = 4;
  editor.apply();
  expect(question.defaultValue).toEqual(4);
});
