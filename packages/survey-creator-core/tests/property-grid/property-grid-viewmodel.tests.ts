import {
  SurveyModel,
  Base,
  PanelModel,
  PopupModel,
  IAction
} from "survey-core";
import {
  PropertyGridModel,
  PropertyGridEditorCollection
} from "../../src/property-grid";
import { PropertyGridViewModel } from "../../src/property-grid/property-grid-view-model";
import { CreatorTester } from "../creator-tester";
import { ObjectSelectorModel } from "../../src/property-grid/object-selector";
import { settings } from "../../src/settings";

test("Generate and update title correctly", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  };
  var propertyGrid = creator.designerPropertyGrid;
  var model = new PropertyGridViewModel(propertyGrid, creator);
  expect(model.title).toEqual("Survey");
  propertyGrid.obj = creator.survey.getQuestionByName("question1");
  expect(model.title).toEqual("question1");
  propertyGrid.survey.getQuestionByName("name").value = "Q1";
  expect(model.title).toEqual("Q1");
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
  var model = new PropertyGridViewModel(creator.designerPropertyGrid, creator);
  expect(model.title).toEqual("Survey");
  creator.selectElement(matrix);
  expect(model.title).toEqual("q1");
  var columnsQuestion = creator.designerPropertyGrid.survey.getQuestionByName("columns");
  expect(columnsQuestion).toBeTruthy();
  var actions: Array<IAction> = [];
  creator.designerPropertyGrid.survey.getUpdatedMatrixRowActions(
    columnsQuestion,
    columnsQuestion.visibleRows[0],
    actions
  );
  actions[0].action();
  expect(creator.designerPropertyGrid.survey.editingObj["name"]).toEqual("col1");
  expect(model.title).toEqual("col1");
  expect(creator.selectedElementName).toEqual("col1");
  creator.selectionHistoryController.prev();
  expect(creator.selectedElementName).toEqual("q1");
  expect(model.title).toEqual("q1");
  var panelColumns = <PanelModel>(creator.designerPropertyGrid.survey.getPanelByName("columns"));
  expect(panelColumns.isExpanded).toBeTruthy();
  var panelGeneral = <PanelModel>(creator.designerPropertyGrid.survey.getPanelByName("general"));
  expect(panelGeneral.isExpanded).toBeFalsy();
});
test("Element Selector Bar Item", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  var model = new PropertyGridViewModel(creator.designerPropertyGrid, creator);
  var selectorBarItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-object-selector") return item;
  })[0];
  expect(selectorBarItem).toBeTruthy();
  var popupModel = <PopupModel>selectorBarItem.popupModel;
  expect(popupModel).toBeTruthy();
  var selectorModel = <ObjectSelectorModel>(
    popupModel.contentComponentData.model
  );
  expect(selectorModel).toBeTruthy();
  expect(selectorModel.isVisible).toBeFalsy();
  expect(selectorModel.list).toBeFalsy();
  selectorBarItem.action();
  expect(popupModel.isVisible).toBeTruthy();
  expect(selectorModel.isVisible).toBeTruthy();
  expect(selectorModel.list).toBeTruthy();
  expect(selectorModel.list.items).toHaveLength(4);
  expect(selectorModel.list.items[2].title).toEqual("q1");
  expect(creator.selectedElementName).toEqual("survey");
  selectorModel.list.selectItem(selectorModel.list.items[2]);
  expect(creator.selectedElementName).toEqual("q1");
  expect(popupModel.isVisible).toBeFalsy();
});
test("Element Selector Bar Item", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  var model = new PropertyGridViewModel(creator.designerPropertyGrid, creator);
  var selectorBarItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-object-selector") return item;
  })[0];
  expect(selectorBarItem).toBeTruthy();
  var popupModel = <PopupModel>selectorBarItem.popupModel;
  expect(popupModel).toBeTruthy();
  var selectorModel = <ObjectSelectorModel>(
    popupModel.contentComponentData.model
  );
  expect(selectorModel).toBeTruthy();
  expect(selectorModel.isVisible).toBeFalsy();
  expect(selectorModel.list).toBeFalsy();
  selectorBarItem.action();
  expect(popupModel.isVisible).toBeTruthy();
  expect(selectorModel.isVisible).toBeTruthy();
  expect(selectorModel.list).toBeTruthy();
  expect(selectorModel.list.items).toHaveLength(4);
  expect(selectorModel.list.items[2].title).toEqual("q1");
  expect(creator.selectedElementName).toEqual("survey");
  selectorModel.list.selectItem(selectorModel.list.items[2]);
  expect(creator.selectedElementName).toEqual("q1");
  expect(popupModel.isVisible).toBeFalsy();
});
test("settings.showNavigation", () => {
  settings.propertyGrid.showNavigationButtons = true;
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  var model = new PropertyGridViewModel(creator.designerPropertyGrid, creator);
  var prevItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-history-prev") return item;
  })[0];
  expect(prevItem).toBeTruthy();
  var nextItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-history-next") return item;
  })[0];
  expect(nextItem).toBeTruthy();
  settings.propertyGrid.showNavigationButtons = false;

  model = new PropertyGridViewModel(creator.designerPropertyGrid, creator);
  prevItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-history-prev") return item;
  })[0];
  expect(prevItem).toBeFalsy();
  nextItem = model.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-history-next") return item;
  })[0];
  expect(nextItem).toBeFalsy();

  settings.propertyGrid.showNavigationButtons = false;
});
