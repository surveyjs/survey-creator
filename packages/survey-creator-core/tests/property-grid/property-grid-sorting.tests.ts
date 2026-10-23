import {
  Action, IDialogOptions, ListModel, MatrixDropdownColumn, PopupBaseViewModel, PopupModalManager, Question,
  QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionPanelDynamicModel, QuestionTextModel, Serializer, SurveyModel,
  settings as surveySettings, surveyLocalization
} from "survey-core";
import { CreatorTester } from "../creator-tester";
import { PropertyGridModelTester } from "./property-grid.base";
import { getSortCriteriaText, PropertyGridEditorSortCriteria } from "../../src/property-grid/sort-criteria";
import { PropertyGridEditorCollection } from "../../src/property-grid";
import { editorLocalization } from "../../src/editorLocalization";

export * from "../../src/property-grid/sort-criteria";

const up = "↑"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const down = "↓"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

const matrixJSON = {
  type: "matrixdynamic", name: "matrix", rowCount: 0,
  columns: [
    { name: "col1", title: "Column 1", cellType: "text" },
    { name: "col2", title: "Column 2", cellType: "text" }
  ]
};
const panelJSON = {
  type: "paneldynamic", name: "panel",
  templateElements: [{ type: "text", name: "q1", title: "Question 1" }, { type: "text", name: "q2", title: "Question 2" }]
};
function createCreator(element: any = matrixJSON): CreatorTester {
  const creator = new CreatorTester();
  creator.JSON = { elements: [element] };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  return creator;
}
function gridQuestion(creator: CreatorTester, name: string): Question {
  return <Question>creator.propertyGrid.getQuestionByName(name);
}
function sortOf(q: any): Array<any> {
  return q.sortCriteria.map((item: any): any => ({ field: item.field, direction: item.direction }));
}
function getActions(question: Question): Array<Action> {
  return question.getTitleToolbar().actions;
}
function findAction(question: Question, id: string): Action {
  return getActions(question).filter(action => action.id === id)[0];
}

let manager: PopupModalManager;
let savedShowDialog: any;
let dialogs: Array<IDialogOptions>;
beforeEach(() => {
  savedShowDialog = surveySettings.showDialog;
  manager = new PopupModalManager();
  dialogs = [];
  surveySettings.showDialog = <any>((options: IDialogOptions, rootElement?: HTMLElement): any => {
    dialogs.push(options);
    return manager.addDialog(options, rootElement);
  });
});
afterEach(() => {
  manager.clear();
  surveySettings.showDialog = savedShowDialog;
});

function openDialog(question: Question): { dialog: any, popup: PopupBaseViewModel } {
  findAction(question, "property-grid-sort-more").action();
  const modals = manager.getModals();
  const popup = modals[modals.length - 1];
  return { dialog: popup.model.contentComponentData.model, popup: popup };
}
const rowActions = (dialog: any, index: number): Array<Action> => <Array<Action>>dialog.rows[index].actions;
const fieldListOf = (dialog: any, index: number): ListModel => <ListModel>rowActions(dialog, index)[0].data;
const directionListOf = (dialog: any, index: number): ListModel => <ListModel>rowActions(dialog, index)[1].data;
const rowsOf = (dialog: any): Array<Array<any>> => dialog.rows.map((row: any): Array<any> => [row.actions[0].title, row.actions[1].title]);
const titlesOf = (list: ListModel): Array<string> => list.actions.map(item => item.title);
function pick(list: ListModel, title: string): void {
  const item = list.actions.filter(action => action.title === title)[0];
  expect(item, "no item " + title).toBeTruthy();
  list.onItemClick(item);
}
const footerAction = (popup: PopupBaseViewModel, id: string): Action => popup.footerToolbar.getActionById(id);
const addNew = (popup: PopupBaseViewModel): Action => footerAction(popup, "sv-sort-dialog-add");
const removeRow = (dialog: any, index: number): void => { rowActions(dialog, index)[2].action(); };
const apply = (popup: PopupBaseViewModel): void => { footerAction(popup, "apply").action(); };

describe("Property grid: records sorting", () => {
  test("the sorting properties of the dynamic matrix, the dynamic panel and the multi-select matrix", () => {
    const creator = createCreator();
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const visibility = (): Array<boolean> => ["allowSort", "maxSortLevel", "showSortBar", "sortCriteria"]
      .map(name => !!gridQuestion(creator, name) && gridQuestion(creator, name).isVisible);
    expect(visibility(), "#1: maxSortLevel and showSortBar wait for allowSort").toEqual([true, false, false, true]);
    expect(gridQuestion(creator, "allowSort").parent.name, "#2: next to pageSize").toBe(gridQuestion(creator, "pageSize").parent.name);
    gridQuestion(creator, "allowSort").value = true;
    expect(matrix.allowSort, "#3").toBe(true);
    expect(visibility(), "#4").toEqual([true, true, true, true]);
    const showSortBar = <QuestionDropdownModel>gridQuestion(creator, "showSortBar");
    expect(showSortBar.getType(), "#5: the grid's editor for two choices").toBe("buttongroup");
    expect(showSortBar.choices.map(item => [item.value, item.text]), "#6").toEqual([["auto", "Auto"], ["always", "Always"]]);
    showSortBar.value = "always";
    expect(matrix.showSortBar, "#7").toBe("always");
    matrix.allowSort = false;
    expect(visibility(), "#8: allowSort off from code").toEqual([true, false, false, true]);
    expect(["allowSort", "maxSortLevel", "showSortBar", "sortCriteria"].map(name => gridQuestion(creator, name).title), "#9").toEqual(
      ["Allow users to sort rows", "Maximum sort levels", "Show sort bar", "Default sort order"]);

    const panelCreator = createCreator(panelJSON);
    const panelVisibility = (): Array<boolean> => ["allowSort", "maxSortLevel", "showSortBar", "sortCriteria"]
      .map(name => !!gridQuestion(panelCreator, name) && gridQuestion(panelCreator, name).isVisible);
    expect(panelVisibility(), "#10: the dynamic panel has no showSortBar").toEqual([true, false, false, true]);
    gridQuestion(panelCreator, "allowSort").value = true;
    expect(panelVisibility(), "#11").toEqual([true, true, false, true]);
    expect(gridQuestion(panelCreator, "allowSort").title, "#12").toBe("Allow users to sort panels");

    const dropdownCreator = createCreator({ type: "matrixdropdown", name: "m2", rows: ["r1"], columns: [{ name: "col1" }] });
    expect(["allowSort", "maxSortLevel", "showSortBar", "sortCriteria"]
      .map(name => !!gridQuestion(dropdownCreator, name) && gridQuestion(dropdownCreator, name).isVisible), "#13: none on the multi-select matrix")
      .toEqual([false, false, false, false]);
  });
  test("getSortCriteriaText", () => {
    expect(getSortCriteriaText([]), "#1").toBe("");
    expect(getSortCriteriaText(<any>undefined), "#2").toBe("");
    expect(getSortCriteriaText([{ field: "a" }]), "#3").toBe("a " + up);
    expect(getSortCriteriaText([{ field: "a", direction: "desc" }, { field: "b", direction: "asc" }]), "#4").toBe("a " + down + ", b " + up);
  });
  test("the text is read-only, shows the stored field names and follows every change of sortCriteria", () => {
    const creator = createCreator();
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const question = <QuestionTextModel>gridQuestion(creator, "sortCriteria");
    expect([question.getType(), question.isReadOnly, question.isEmpty(), question.renderedPlaceholder], "#1").toEqual(["text", true, true, "Not sorted"]);
    expect([matrix.toJSON().sortCriteria, creator.undoRedoManager.canUndo()], "#2: the grid writes nothing").toEqual([undefined, false]);

    matrix.sortCriteria = [{ field: "col1" }, { field: "col2", direction: "desc" }];
    expect(question.value, "#3: an assignment").toBe("col1 " + up + ", col2 " + down);
    matrix.sortCriteria.push({ field: "col3", direction: "desc" });
    expect(question.value, "#4: a push").toBe("col1 " + up + ", col2 " + down + ", col3 " + down);
    matrix.sortCriteria.splice(2, 1);
    expect(question.value, "#5: a splice").toBe("col1 " + up + ", col2 " + down);
    matrix.sortCriteria[0].direction = "desc";
    expect(question.value, "#6: an item's direction").toBe("col1 " + down + ", col2 " + down);
    matrix.sortCriteria[1].field = "col3";
    expect(question.value, "#7: an item's field").toBe("col1 " + down + ", col3 " + down);
    // an item edit from code is not recorded for undo (an item has no survey); an assignment is
    matrix.sortCriteria = [{ field: "col2" }];
    expect(question.value, "#8").toBe("col2 " + up);
    creator.undo();
    expect(question.value, "#9: undo").toBe("col1 " + down + ", col3 " + down);
    creator.redo();
    expect(question.value, "#10: redo").toBe("col2 " + up);
    matrix.sortCriteria = [];
    expect([question.value, question.renderedPlaceholder], "#11: empty").toEqual(["", "Not sorted"]);

    creator.JSON = { elements: [Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col2", direction: "desc" }] })] };
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    const newQuestion = gridQuestion(creator, "sortCriteria");
    expect([newQuestion.value, newQuestion.isReadOnly], "#12: the JSON").toEqual(["col2 " + down, true]);
    expect(creator.survey.getQuestionByName("matrix").toJSON().sortCriteria, "#13: still the authored value").toEqual([{ field: "col2", direction: "desc" }]);
  });
  test("the grid never writes sortCriteria back", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col1", direction: "desc" }] }));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const items = matrix.sortCriteria.slice();
    let changes = 0;
    matrix.registerFunctionOnPropertyValueChanged("sortCriteria", () => changes++, "test");
    creator.selectElement(creator.survey);
    creator.selectElement(matrix);
    const question = gridQuestion(creator, "sortCriteria");
    expect(question.value, "#1").toBe("col1 " + down);
    expect([changes, matrix.sortCriteria[0] === items[0], creator.undoRedoManager.canUndo()], "#2").toEqual([0, true, false]);
    matrix.unRegisterFunctionOnPropertyValueChanged("sortCriteria", "test");
  });
  test("More... opens the runtime dialog with the current sort, Apply writes it as one undo step", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col2", direction: "desc" }] }));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const question = gridQuestion(creator, "sortCriteria");
    const more = findAction(question, "property-grid-sort-more");
    expect([more.title, more.disabled, more.visible], "#1").toEqual(["More...", false, true]);
    const { dialog, popup } = openDialog(question);
    expect([dialogs.length, dialogs[0].componentName, popup.model.isVisible], "#2").toEqual([1, "sv-records-sort-dialog", true]);
    expect(rowsOf(dialog), "#3: the current sort, by column titles").toEqual([["Column 2", "Alphabet, Z - A"]]);
    expect(titlesOf(fieldListOf(dialog, 0)), "#4").toEqual(["Column 1", "Column 2"]);
    pick(fieldListOf(dialog, 0), "Column 1");
    pick(directionListOf(dialog, 0), "Alphabet, A - Z");
    addNew(popup).action();
    pick(directionListOf(dialog, 1), "Alphabet, Z - A");
    apply(popup);
    expect([sortOf(matrix), question.value], "#5").toEqual([
      [{ field: "col1", direction: "asc" }, { field: "col2", direction: "desc" }], "col1 " + up + ", col2 " + down]);
    expect(popup.model.isVisible, "#5a: closed").toBe(false);
    creator.undo();
    expect([sortOf(matrix), question.value], "#6: one undo step").toEqual([[{ field: "col2", direction: "desc" }], "col2 " + down]);
    creator.undo();
    expect(sortOf(matrix), "#7: nothing else was recorded").toEqual([{ field: "col2", direction: "desc" }]);
    creator.redo();
    expect([sortOf(matrix), question.value], "#8: redo").toEqual([
      [{ field: "col1", direction: "asc" }, { field: "col2", direction: "desc" }], "col1 " + up + ", col2 " + down]);
    expect(matrix.toJSON().sortCriteria, "#9").toEqual([{ field: "col1" }, { field: "col2", direction: "desc" }]);
  });
  test("an unchanged Apply records nothing", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col2", direction: "desc" }] }));
    const question = gridQuestion(creator, "sortCriteria");
    const { popup } = openDialog(question);
    apply(popup);
    expect([popup.model.isVisible, creator.undoRedoManager.canUndo()], "#1").toEqual([false, false]);
  });
  test("Clear empties sortCriteria, is undoable and shows only while there is a sort", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col2", direction: "desc" }] }));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const question = gridQuestion(creator, "sortCriteria");
    const clear = findAction(question, "property-grid-clear");
    expect([clear.visible, clear.disabled], "#1").toEqual([true, false]);
    expect(getActions(question).filter(action => action.id === "property-grid-clear").length, "#2: no generic clear next to it").toBe(1);
    clear.action();
    expect([sortOf(matrix), question.value, clear.visible], "#3").toEqual([[], "", false]);
    creator.undo();
    expect([sortOf(matrix), question.value, clear.visible], "#4").toEqual([[{ field: "col2", direction: "desc" }], "col2 " + down, true]);
    matrix.sortCriteria.splice(0, 1);
    expect(clear.visible, "#5: a splice").toBe(false);
    matrix.sortCriteria.push({ field: "col1" });
    expect(clear.visible, "#6: a push").toBe(true);
  });
  test("More... and Clear on a dynamic panel", () => {
    const creator = createCreator(panelJSON);
    const panel = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("panel");
    const question = gridQuestion(creator, "sortCriteria");
    const { dialog, popup } = openDialog(question);
    expect(titlesOf(fieldListOf(dialog, 0)), "#1").toEqual(["Question 1", "Question 2"]);
    pick(fieldListOf(dialog, 0), "Question 2");
    pick(directionListOf(dialog, 0), "Alphabet, Z - A");
    apply(popup);
    expect([sortOf(panel), question.value], "#2").toEqual([[{ field: "q2", direction: "desc" }], "q2 " + down]);
    findAction(question, "property-grid-clear").action();
    expect([sortOf(panel), question.value], "#3").toEqual([[], ""]);
    creator.undo();
    expect(sortOf(panel), "#4: clear undone").toEqual([{ field: "q2", direction: "desc" }]);
    creator.undo();
    expect(sortOf(panel), "#5: apply undone").toEqual([]);
  });
  test("More... is disabled while no field sorts", () => {
    const creator = createCreator({ type: "matrixdynamic", name: "matrix", rowCount: 0, columns: [{ name: "tags", cellType: "checkbox", choices: ["a"] }] });
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const more = findAction(gridQuestion(creator, "sortCriteria"), "property-grid-sort-more");
    expect(more.disabled, "#1: a checkbox column").toBe(true);
    matrix.addColumn("col1");
    expect(more.disabled, "#2: a text column added").toBe(false);
    matrix.columns.splice(1, 1);
    expect(more.disabled, "#3: removed").toBe(true);
    matrix.columns.splice(0, 1);
    expect(more.disabled, "#4: no columns").toBe(true);
  });
  test("the actions follow the permission to edit the property, not the read-only text", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { allowSort: true, sortCriteria: [{ field: "col1" }] }));
    let question = gridQuestion(creator, "sortCriteria");
    expect(question.isReadOnly, "#1").toBe(true);
    expect([findAction(question, "property-grid-sort-more").disabled, findAction(question, "property-grid-clear").disabled], "#2: editable Creator").toEqual([false, false]);

    creator.readOnly = true;
    creator.selectElement(creator.survey);
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    question = gridQuestion(creator, "sortCriteria");
    expect([findAction(question, "property-grid-sort-more"), findAction(question, "property-grid-clear")], "#3: read-only Creator").toEqual([undefined, undefined]);
    creator.readOnly = false;

    const prop = Serializer.findProperty("matrixdynamic", "sortCriteria");
    prop.readOnly = true;
    try {
      creator.selectElement(creator.survey);
      creator.selectElement(creator.survey.getQuestionByName("matrix"));
      question = gridQuestion(creator, "sortCriteria");
      expect([findAction(question, "property-grid-sort-more"), findAction(question, "property-grid-clear")], "#4: a read-only property").toEqual([undefined, undefined]);
    } finally {
      prop.readOnly = false;
    }

    let readOnlySort = true;
    creator.onPropertyGetReadOnly.add((_, options) => {
      if (options.propertyName === "sortCriteria") options.readOnly = readOnlySort;
    });
    creator.selectElement(creator.survey);
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    question = gridQuestion(creator, "sortCriteria");
    expect([findAction(question, "property-grid-sort-more"), findAction(question, "property-grid-clear")], "#5: onPropertyGetReadOnly").toEqual([undefined, undefined]);
    const visibleIf = gridQuestion(creator, "visibleIf");
    visibleIf.value = "{q1} = 1";
    const visibleIfClear = findAction(visibleIf, "property-grid-clear");
    expect([visibleIf.isReadOnly, visibleIfClear.disabled, visibleIfClear.visible], "#6: another property keeps its own clear").toEqual([false, false, true]);

    readOnlySort = false;
    creator.selectElement(creator.survey);
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    question = gridQuestion(creator, "sortCriteria");
    expect([!!findAction(question, "property-grid-sort-more"), !!findAction(question, "property-grid-clear")], "#7: the callback is asked again on the next build").toEqual([true, true]);
  });
  test("the dialog uses the Creator's locale for its whole life; the survey's locale is untouched", () => {
    const creatorLocale = "sort-creator-test";
    const surveyLocale = "sort-survey-test";
    surveyLocalization.locales[creatorLocale] = { sortByText: "Order", sortDefaultText: "Stored", sortNoDirectionText: "None", sortAddNewText: "New level",
      modalApplyButtonText: "Use", sortAZText: "A first", sortZAText: "Z first" };
    surveyLocalization.locales[surveyLocale] = { sortByText: "Trier", sortDefaultText: "Par defaut", sortNoDirectionText: "Rien", sortAddNewText: "Ajouter",
      modalApplyButtonText: "Appliquer", sortAZText: "A-Z", sortZAText: "Z-A" };
    try {
      const creator = createCreator();
      creator.survey.locale = surveyLocale;
      editorLocalization.currentLocale = creatorLocale;
      const question = gridQuestion(creator, "sortCriteria");
      const { dialog, popup } = openDialog(question);
      const texts = (): Array<string> => [popup.title, addNew(popup).title, footerAction(popup, "apply").title];
      expect([texts(), rowsOf(dialog)], "#1: opening").toEqual([["Order", "New level", "Use"], [["Column 1", "Stored"]]]);
      expect(titlesOf(directionListOf(dialog, 0)), "#2").toEqual(["Stored", "A first", "Z first"]);
      addNew(popup).action();
      expect([texts(), rowsOf(dialog)], "#3: Add New").toEqual([["Order", "New level", "Use"], [["Column 1", "Stored"], ["Column 2", "None"]]]);
      removeRow(dialog, 1);
      expect(texts(), "#4: a removed row").toEqual(["Order", "New level", "Use"]);
      pick(fieldListOf(dialog, 0), "Column 2");
      expect(texts(), "#5: a field pick").toEqual(["Order", "New level", "Use"]);
      pick(directionListOf(dialog, 0), "Z first");
      expect([texts(), rowsOf(dialog)], "#6: a direction pick").toEqual([["Order", "New level", "Use"], [["Column 2", "Z first"]]]);
      expect([creator.survey.locale, surveyLocalization.currentLocale], "#7: the survey's locale").toEqual([surveyLocale, ""]);
      apply(popup);

      editorLocalization.currentLocale = surveyLocale;
      const second = openDialog(question);
      expect(second.popup.title, "#8: the same locale").toBe("Trier");
      second.popup.clickClose();
    } finally {
      editorLocalization.currentLocale = "";
      delete surveyLocalization.locales[creatorLocale];
      delete surveyLocalization.locales[surveyLocale];
    }
  });
  test("disposing the grid releases its subscriptions", () => {
    const creator = createCreator(Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col1" }] }));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const question = gridQuestion(creator, "sortCriteria");
    const item = matrix.sortCriteria[0];
    const key = "sortCriteriaText_" + question.id;
    const hasHandler = (obj: any, name: string): boolean => !!obj["propChangeHandlers"] && !!obj["propChangeHandlers"].get(name) && obj["propChangeHandlers"].get(name).has(key);
    expect([hasHandler(matrix, "sortCriteria"), hasHandler(item, "field"), hasHandler(item, "direction")], "#0: subscribed").toEqual([true, true, true]);
    creator.selectElement(creator.survey);
    expect(question.isDisposed, "#1").toBe(true);
    expect([hasHandler(matrix, "sortCriteria"), hasHandler(item, "field"), hasHandler(item, "direction")], "#1a: released").toEqual([false, false, false]);
    const updateValueFromSurvey = vi.spyOn(question, "updateValueFromSurvey");
    matrix.sortCriteria = [{ field: "col2" }];
    item.direction = "desc";
    matrix.sortCriteria[0].direction = "desc";
    expect(updateValueFromSurvey, "#2").not.toHaveBeenCalled();
    updateValueFromSurvey.mockRestore();
  });
  test("two grids on the same matrix keep their own subscriptions", () => {
    const survey = new SurveyModel({ elements: [Object.assign({}, matrixJSON, { sortCriteria: [{ field: "col1" }] })] });
    const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("matrix");
    const grid1 = new PropertyGridModelTester(matrix);
    const grid2 = new PropertyGridModelTester(matrix);
    const q1 = grid1.survey.getQuestionByName("sortCriteria");
    const q2 = grid2.survey.getQuestionByName("sortCriteria");
    matrix.sortCriteria[0].direction = "desc";
    expect([q1.value, q2.value], "#1").toEqual(["col1 " + down, "col1 " + down]);
    grid1.obj = null;
    matrix.sortCriteria[0].direction = "asc";
    expect(q2.value, "#2").toBe("col1 " + up);
  });
  test("the editor is the one registered for the sortcriteria type", () => {
    const prop = Serializer.findProperty("matrixdynamic", "sortCriteria");
    expect(PropertyGridEditorCollection.getEditor(prop) instanceof PropertyGridEditorSortCriteria, "#1").toBe(true);
  });
  test("the column's allowSort follows the matrix's allowSort in the column grid", () => {
    const creator = createCreator();
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const column = <MatrixDropdownColumn>matrix.columns[0];
    // the column selected on the design surface
    creator.selectElement(column);
    const columnAllowSort = (): boolean => !!gridQuestion(creator, "allowSort") && gridQuestion(creator, "allowSort").isVisible;
    expect(columnAllowSort(), "#1").toBe(false);
    matrix.allowSort = true;
    expect(columnAllowSort(), "#2: the matrix's allowSort switched on while the column grid is open").toBe(true);
    expect(gridQuestion(creator, "allowSort").title, "#3").toBe("Allow sorting by this column");
    gridQuestion(creator, "allowSort").value = false;
    expect(column.allowSort, "#4").toBe(false);
    matrix.allowSort = false;
    expect(columnAllowSort(), "#5: and off").toBe(false);
  });
  test("the column's allowSort in the column grid opened from the columns tab", () => {
    const survey = new SurveyModel({ elements: [matrixJSON] });
    const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("matrix");
    const propertyGrid = new PropertyGridModelTester(matrix);
    const columnsQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("columns");
    const actions: Array<any> = [];
    propertyGrid.survey.getUpdatedMatrixRowActions(columnsQuestion, columnsQuestion.visibleRows[0], actions);
    expect(actions[0].id, "#1").toBe("svd-grid-edit-column");
    actions[0].action();
    expect(propertyGrid.obj === matrix.columns[0], "#2").toBe(true);
    const columnAllowSort = (): boolean => propertyGrid.survey.getQuestionByName("allowSort").isVisible;
    expect(columnAllowSort(), "#3").toBe(false);
    matrix.allowSort = true;
    expect(columnAllowSort(), "#4").toBe(true);
    matrix.allowSort = false;
    expect(columnAllowSort(), "#5").toBe(false);
    propertyGrid.obj = matrix;
    const grid = propertyGrid.survey;
    let runs = 0;
    const run = grid.runExpressions;
    grid.runExpressions = (): void => { runs++; run.call(grid); };
    matrix.allowSort = true;
    expect(runs, "#6: the matrix's own grid does not listen to itself").toBe(0);
  });
});
