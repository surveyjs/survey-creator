import { SurveyModel, Base, PanelModel } from "survey-core";
import {
  PropertyGridModel,
  PropertyGridEditorCollection,
} from "../../src/property-grid";
import { PropertyGridViewModel } from "../../src/property-grid/property-grid-view-model";

test("Generate and update title correctly", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
      },
    ],
  });
  var propertyGrid = new PropertyGridModel(survey);
  var model = new PropertyGridViewModel(propertyGrid, null);
  expect(model.title).toEqual("survey");
  propertyGrid.obj = survey.getQuestionByName("question1");
  expect(model.title).toEqual("question1");
  propertyGrid.survey.getQuestionByName("name").value = "Q1";
  expect(model.title).toEqual("Q1");
  propertyGrid.options.getObjectDisplayName = (
    obj: Base,
    reason: string,
    displayName: string
  ) => {
    return "Question:" + displayName;
  };
  propertyGrid.survey.getQuestionByName("name").value = "Q2";
  expect(model.title).toEqual("Question:Q2");
});
