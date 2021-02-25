import {
  SurveyModel,
  Question,
  QuestionTextModel,
  QuestionCheckboxModel,
  surveyLocalization,
  SurveyTriggerComplete,
  RegexValidator,
  QuestionMatrixDropdownModel,
  QuestionMultipleTextModel,
  Serializer,
} from "survey-core";
import { SurveyLogic } from "../../src/tabs/logic";
import { settings } from "../../src/settings";

test("Add existing visible Items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem).toEqual(logic.items[0]);
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  expect(logic.expressionEditor.panel.panelCount).toEqual(1);
  expect(logic.editableItem.actions).toHaveLength(2);
});
