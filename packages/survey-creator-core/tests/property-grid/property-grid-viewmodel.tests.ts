import { SurveyModel, Base, PanelModel } from "survey-core";
import {
  PropertyGridModel,
  PropertyGridViewModel,
  PropertyGridEditorCollection,
} from "../../src/property-grid";

test("Go to next/prev", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
      },
      {
        type: "text",
        name: "question2",
      },
    ],
  });
  var propertyGrid = new PropertyGridModel(survey);
  var model = new PropertyGridViewModel(propertyGrid, (obj: Base): void => {
    propertyGrid.obj = obj;
  });
  expect(model.hasPrev).toBeFalsy();
  expect(model.hasNext).toBeFalsy();
  propertyGrid.obj = survey.pages[0];
  expect(model.hasPrev).toBeTruthy();
  expect(model.hasNext).toBeFalsy();
  propertyGrid.obj = survey.getQuestionByName("question1");
  expect(model.hasPrev).toBeTruthy();
  expect(model.hasNext).toBeFalsy();
  propertyGrid.obj = survey.pages[0];
  expect(model.hasPrev).toBeTruthy();
  expect(model.hasNext).toBeFalsy();
  model.prev();
  expect(propertyGrid.obj).toEqual(survey.getQuestionByName("question1"));
  expect(model.hasPrev).toBeTruthy();
  expect(model.hasNext).toBeTruthy();
  model.next();
  expect(propertyGrid.obj).toEqual(survey.pages[0]);
  expect(model.hasPrev).toBeTruthy();
  expect(model.hasNext).toBeFalsy();
  model.prev();
  model.prev();
  expect(propertyGrid.obj).toEqual(survey);
  expect(model.hasPrev).toBeFalsy();
  expect(model.hasNext).toBeTruthy();
});
test("Reset history on changing survey", () => {
  var survey1 = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
      },
      {
        type: "text",
        name: "question2",
      },
    ],
  });
  var survey2 = new SurveyModel();
  var propertyGrid = new PropertyGridModel(survey1);
  var model = new PropertyGridViewModel(propertyGrid, (obj: Base): void => {
    propertyGrid.obj = obj;
  });
  expect(model.hasPrev).toBeFalsy();
  expect(model.hasNext).toBeFalsy();
  propertyGrid.obj = survey1.pages[0];
  expect(model.hasPrev).toBeTruthy();
  propertyGrid.obj = survey2;
  expect(model.hasPrev).toBeFalsy();
  expect(model.hasNext).toBeFalsy();
});
test("Update history on deleting elements", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "matrixdynamic",
            name: "question2",
            columns: [{ name: "col1" }, { name: "col2" }],
          },
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question3" }],
          },
        ],
      },
      {
        name: "page2",
      },
    ],
  });
  var propertyGrid = new PropertyGridModel(survey);
  var model = new PropertyGridViewModel(propertyGrid, (obj: Base): void => {
    propertyGrid.obj = obj;
  });
  var page = survey.pages[1];
  propertyGrid.obj = page;
  var question = survey.getQuestionByName("question1");
  propertyGrid.obj = question;
  var panel = <PanelModel>survey.getPanelByName("panel1");
  propertyGrid.obj = panel;
  var column = survey.getQuestionByName("question2").columns[0];
  propertyGrid.obj = column;
  propertyGrid.obj = survey;
  expect(model.hasInHistory(page)).toBeTruthy();
  page.delete();
  expect(model.hasInHistory(page)).toBeFalsy();
  expect(model.hasInHistory(question)).toBeTruthy();
  question.delete();
  expect(model.hasInHistory(question)).toBeFalsy();
  expect(model.hasInHistory(panel)).toBeTruthy();
  panel.delete();
  expect(model.hasInHistory(panel)).toBeFalsy();
  expect(model.hasInHistory(column)).toBeTruthy();
  survey.getQuestionByName("question2").columns.splice(0, 1);
  expect(model.hasInHistory(column)).toBeFalsy();
});

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
  var model = new PropertyGridViewModel(propertyGrid, (obj: Base): void => {
    propertyGrid.obj = obj;
  });
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
