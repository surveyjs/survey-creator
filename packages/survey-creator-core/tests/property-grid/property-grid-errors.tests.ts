import { QuestionTextModel, Base, Serializer, PanelModel, SurveyModel } from "survey-core";
import { PropertyGridModel, PropertyGridEditorCollection } from "../../src/property-grid";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions
} from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";

test("Show error on entering non-unique column value", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" }
    ]
  };
  const logs = new Array<any>();
  creator.onPropertyValidationCustomError.add((sender, options) => {
    if(options.propertyName !== "name") return;
    logs.push({ value: options.value, error: options.error });
  });
  const q1 = creator.survey.getAllQuestions()[0];
  creator.selectElement(q1);
  const propGridSurvey = creator.sidebar.getTabById("propertyGrid").model.survey;
  const questionName = propGridSurvey.getQuestionByName("name");
  expect(questionName.value).toEqual("question1");
  questionName.value = "question2";
  expect(logs).toHaveLength(1);
  expect(logs[0].value).toBe("question2");
  questionName.value = "q1";
  expect(logs).toHaveLength(2);
  expect(logs[1].value).toBe("q1");
  expect(logs[1].error).toBeFalsy();
  questionName.value = "";
  expect(q1.name).toBe("q1");
  expect(questionName.errors).toHaveLength(1);
  expect(questionName.errors[0].getText()).toBeTruthy();
  expect(logs).toHaveLength(3);
  expect(logs[2].value).toBe("");
  expect(logs[2].error).toBe("Please enter a value");
});
