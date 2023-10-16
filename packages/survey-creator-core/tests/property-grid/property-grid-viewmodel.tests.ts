import {
  settings as surveySettings,
  Base,
  PanelModel,
  PopupModel,
  IAction,
  QuestionMatrixDynamicModel,
  _setIsTouch
} from "survey-core";
import { PropertyGridViewModel } from "../../src/property-grid/property-grid-view-model";
export { PropertyGridEditorMatrix } from "../../src/property-grid/matrices";
import { CreatorTester } from "../creator-tester";
import { ObjectSelectorModel } from "../../src/property-grid/object-selector";
import { settings } from "../../src/creator-settings";

surveySettings.supportCreatorV2 = true;

test("Generate and update title correctly", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1"
      }
    ]
  };
  const propertyGrid = creator["designerPropertyGrid"];
  const model = new PropertyGridViewModel(propertyGrid, creator);
  expect(model.objectSelectionAction.title).toEqual("Survey");
  propertyGrid.obj = creator.survey.getQuestionByName("question1");
  expect(model.objectSelectionAction.title).toEqual("question1");
  propertyGrid.survey.getQuestionByName("name").value = "Q1";
  expect(model.objectSelectionAction.title).toEqual("Q1");
  propertyGrid.options.getObjectDisplayName = (
    obj: Base,
    area: string,
    reason: string,
    displayName: string
  ) => {
    return "Question:" + obj["name"];
  };
  propertyGrid.survey.getQuestionByName("name").value = "Q2";
  expect(model.objectSelectionAction.title).toEqual("Question:Q2");
});
test("Prev/next correctly, including columns via actions", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrixdynamic", name: "q1", columns: [{ name: "col1" }] }
    ]
  };
  const matrix = creator.survey.getQuestionByName("q1");
  const model = new PropertyGridViewModel(creator["designerPropertyGrid"], creator);
  expect(model.objectSelectionAction.title).toEqual("Survey");
  creator.selectElement(matrix);
  expect(model.objectSelectionAction.title).toEqual("q1");
  const columnsQuestion = <QuestionMatrixDynamicModel>creator["designerPropertyGrid"].survey.getQuestionByName("columns");
  expect(columnsQuestion).toBeTruthy();
  const actions: Array<IAction> = [];
  creator["designerPropertyGrid"].survey.getUpdatedMatrixRowActions(columnsQuestion, columnsQuestion.visibleRows[0], actions);
  actions[0].action();
  expect(creator["designerPropertyGrid"].survey.editingObj["name"]).toEqual("col1");
  expect(model.objectSelectionAction.title).toEqual("col1");
  expect(creator.selectedElementName).toEqual("col1");
  creator.selectionHistoryController.prev();
  expect(creator.selectedElementName).toEqual("q1");
  expect(model.objectSelectionAction.title).toEqual("q1");
  const panelColumns = <PanelModel>(creator["designerPropertyGrid"].survey.getPanelByName("columns"));
  expect(panelColumns.isExpanded).toBeTruthy();
  const panelGeneral = <PanelModel>(creator["designerPropertyGrid"].survey.getPanelByName("general"));
  expect(panelGeneral.isExpanded).toBeFalsy();
});
test("Element Selector Bar Item", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  const model = new PropertyGridViewModel(creator["designerPropertyGrid"], creator);
  const selectorBarItem = model.objectSelectionAction;
  expect(selectorBarItem).toBeTruthy();
  const popupModel = <PopupModel>selectorBarItem.popupModel;
  expect(popupModel).toBeTruthy();
  const selectorModel = <ObjectSelectorModel>(
    popupModel.contentComponentData.model
  );
  expect(selectorModel).toBeTruthy();
  expect(selectorModel.isVisible).toBeFalsy();
  expect(selectorModel.list).toBeFalsy();
  selectorBarItem.action();
  expect(popupModel.isVisible).toBeTruthy();
  expect(selectorModel.isVisible).toBeTruthy();
  expect(selectorModel.list).toBeTruthy();
  expect(selectorModel.list.actions).toHaveLength(4);
  expect(selectorModel.list.actions[2].title).toEqual("q1");
  expect(creator.selectedElementName).toEqual("survey");
  selectorModel.list.onItemClick(selectorModel.list.actions[2]);
  expect(creator.selectedElementName).toEqual("q1");
  expect(popupModel.isVisible).toBeFalsy();
});
test("Element Selector Bar Item", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  const model = new PropertyGridViewModel(creator["designerPropertyGrid"], creator);
  const selectorBarItem = model.objectSelectionAction;
  expect(selectorBarItem).toBeTruthy();
  const popupModel = <PopupModel>selectorBarItem.popupModel;
  expect(popupModel).toBeTruthy();
  const selectorModel = <ObjectSelectorModel>(
    popupModel.contentComponentData.model
  );
  expect(selectorModel).toBeTruthy();
  expect(selectorModel.isVisible).toBeFalsy();
  expect(selectorModel.list).toBeFalsy();
  selectorBarItem.action();
  expect(popupModel.isVisible).toBeTruthy();
  expect(selectorModel.isVisible).toBeTruthy();
  expect(selectorModel.list).toBeTruthy();
  expect(selectorModel.list.actions).toHaveLength(4);
  expect(selectorModel.list.actions[2].title).toEqual("q1");
  expect(creator.selectedElementName).toEqual("survey");
  selectorModel.list.onItemClick(selectorModel.list.actions[2]);
  expect(creator.selectedElementName).toEqual("q1");
  expect(popupModel.isVisible).toBeFalsy();
});
test("settings.showNavigation", () => {
  settings.propertyGrid.showNavigationButtons = true;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  let model = new PropertyGridViewModel(creator["designerPropertyGrid"], creator);
  expect(model.prevSelectionAction).toBeTruthy();
  expect(model.nextSelectionAction).toBeTruthy();
  settings.propertyGrid.showNavigationButtons = false;

  model = new PropertyGridViewModel(creator["designerPropertyGrid"], creator);
  expect(model.prevSelectionAction).toBeFalsy();
  expect(model.nextSelectionAction).toBeFalsy();

  settings.propertyGrid.showNavigationButtons = false;
});
test("Check object selector popup's display mode", () => {
  let creator = new CreatorTester();
  let propertyGrid = creator["designerPropertyGrid"];
  let model = new PropertyGridViewModel(propertyGrid, creator);
  expect(model.objectSelectionAction.popupModel.displayMode).toEqual("popup");
  _setIsTouch(true);
  creator = new CreatorTester();
  creator.isTouch = true;
  propertyGrid = creator["designerPropertyGrid"];
  model = new PropertyGridViewModel(propertyGrid, creator);
  expect(model.objectSelectionAction.popupModel.displayMode).toEqual("overlay");
  _setIsTouch(false);
});