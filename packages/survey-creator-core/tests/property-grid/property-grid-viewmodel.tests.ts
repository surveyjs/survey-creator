import { SurveyModel, Base, PanelModel, IActionBarItem } from "survey-core";
import {
  PropertyGridModel,
  PropertyGridEditorCollection
} from "../../src/property-grid";
import { PropertyGridViewModel } from "../../src/property-grid/property-grid-view-model";
import { CreatorTester } from "../creator-tester";

test("Generate and update title correctly", () => {
  var survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  });
  var propertyGrid = new PropertyGridModel(survey);
  var model = new PropertyGridViewModel(propertyGrid, null);
  expect(model.title).toEqual("Survey");
  propertyGrid.obj = survey.getQuestionByName("question1");
  expect(model.title).toEqual("Question");
  propertyGrid.survey.getQuestionByName("name").value = "Q1";
  expect(model.title).toEqual("Question");
  propertyGrid.options.getObjectDisplayName = (
    obj: Base,
    reason: string,
    displayName: string
  ) => {
    return "Question:" + obj["name"];
  };
  propertyGrid.survey.getQuestionByName("name").value = "Q2";
  expect(model.title).toEqual("Question:Q2");
});
test("Prev/next correctly, including columns via actions", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrixdynamic", name: "q1", columns: [{ name: "col1" }] }
    ]
  };
  var matrix = creator.survey.getQuestionByName("q1");
  var model = new PropertyGridViewModel(
    creator.propertyGrid,
    creator.selectionHistoryController
  );
  expect(model.title).toEqual("Survey");
  creator.selectElement(matrix);
  expect(model.title).toEqual("Question");
  var columnsQuestion =
    creator.propertyGrid.survey.getQuestionByName("columns");
  expect(columnsQuestion).toBeTruthy();
  var actions: Array<IActionBarItem> = [];
  creator.propertyGrid.survey.getUpdatedMatrixRowActions(
    columnsQuestion,
    columnsQuestion.visibleRows[0],
    actions
  );
  actions[0].action();
  expect(creator.propertyGrid.survey.editingObj["name"]).toEqual("col1");
  expect(model.title).toEqual("Column");
  expect(creator.selectedElementName).toEqual("col1");
  creator.selectionHistoryController.prev();
  expect(creator.selectedElementName).toEqual("q1");
  expect(model.title).toEqual("Question");
  var panelColumns = <PanelModel>(
    creator.propertyGrid.survey.getPanelByName("columns")
  );
  expect(panelColumns.isExpanded).toBeTruthy();
  var panelGeneral = <PanelModel>(
    creator.propertyGrid.survey.getPanelByName("general")
  );
  expect(panelGeneral.isExpanded).toBeFalsy();
});
