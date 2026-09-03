import { Serializer, SurveyModel, QuestionDropdownModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid/property-grid.base";

test("cameraFacingMode is in the property grid after sourceType", () => {
  Serializer.addProperty("file", { name: "cameraFacingMode", default: "auto", choices: ["auto", "user", "environment"], visible: false });
  const survey = new SurveyModel({ elements: [{ type: "file", name: "q1" }] });
  const question = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const panel = propertyGrid.survey.getPanelByName("general");
  const names = panel.elements.map((el: any) => el.name);
  expect(names.indexOf("cameraFacingMode")).toEqual(names.indexOf("sourceType") + 1);
  const q = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("cameraFacingMode");
  expect(q.isVisible).toBeTruthy();
  expect(q.title).toEqual("Default camera");
  expect(q.choices.map(c => c.value + "|" + c.title)).toEqual(["auto|Auto", "user|Front", "environment|Rear"]);
  Serializer.removeProperty("file", "cameraFacingMode");
});
