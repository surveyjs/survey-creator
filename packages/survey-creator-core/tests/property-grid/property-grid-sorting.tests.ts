import {
  Action, MatrixDropdownColumn, MatrixDynamicRowModel, Question, QuestionDropdownModel, QuestionMatrixDynamicModel,
  QuestionPanelDynamicModel, Serializer, SurveyModel
} from "survey-core";
import { CreatorTester } from "../creator-tester";
import { PropertyGridModelTester } from "./property-grid.base";
import { PropertyGridEditorMatrixSortCriteria } from "../../src/property-grid/matrices";
import { PropertyGridEditorCollection } from "../../src/property-grid";
import { UndoRedoAction } from "../../src/plugins/undo-redo/undo-redo-manager";

export * from "../../src/property-grid/matrices";

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
function withSort(json: any, sortCriteria: Array<any>): any {
  return Object.assign({}, json, { sortCriteria: sortCriteria });
}
function createCreator(element: any = matrixJSON): CreatorTester {
  const creator = new CreatorTester();
  creator.JSON = { elements: [element] };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  return creator;
}
function gridQuestion(creator: CreatorTester, name: string): Question {
  return <Question>creator.propertyGrid.getQuestionByName(name);
}
function sortGrid(creator: CreatorTester): QuestionMatrixDynamicModel {
  return <QuestionMatrixDynamicModel>gridQuestion(creator, "sortCriteria");
}
function sortOf(q: any): Array<any> {
  return q.sortCriteria.map((item: any): any => ({ field: item.field, direction: item.direction }));
}
function cell(grid: QuestionMatrixDynamicModel, rowIndex: number, name: string): QuestionDropdownModel {
  return <QuestionDropdownModel>grid.visibleRows[rowIndex].getQuestionByName(name);
}
function cellValues(grid: QuestionMatrixDynamicModel): Array<Array<any>> {
  return grid.visibleRows.map((row, index) => [cell(grid, index, "field").value, cell(grid, index, "direction").value]);
}
function fieldChoices(grid: QuestionMatrixDynamicModel, rowIndex: number): Array<Array<string>> {
  return cell(grid, rowIndex, "field").choices.map(item => [item.value, item.text]);
}
function findAction(question: Question, id: string): Action {
  return question.getTitleToolbar().actions.filter(action => action.id === id)[0];
}
function addLevel(grid: QuestionMatrixDynamicModel): void {
  findAction(grid, "add-item").action();
}
function undoCount(creator: CreatorTester): number {
  return (<any>creator.undoRedoManager)._transactions.length;
}

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
    expect(gridQuestion(panelCreator, "allowSort").title, "#12").toBe("Allow users to sort entries");

    const dropdownCreator = createCreator({ type: "matrixdropdown", name: "m2", rows: ["r1"], columns: [{ name: "col1" }] });
    expect(["allowSort", "maxSortLevel", "showSortBar", "sortCriteria"]
      .map(name => !!gridQuestion(dropdownCreator, name) && gridQuestion(dropdownCreator, name).isVisible), "#13: none on the multi-select matrix")
      .toEqual([false, false, false, false]);
  });
  test("the editor is the matrix one registered for the sortcriteria type", () => {
    expect(PropertyGridEditorCollection.getEditor(Serializer.findProperty("matrixdynamic", "sortCriteria")) instanceof PropertyGridEditorMatrixSortCriteria, "#1").toBe(true);
    expect(PropertyGridEditorCollection.getEditor(Serializer.findProperty("paneldynamic", "sortCriteria")) instanceof PropertyGridEditorMatrixSortCriteria, "#2").toBe(true);
  });
  test("sortCriteria is a matrix with a row per sort level, and a row edits the item itself", () => {
    const check = (element: any, fields: Array<string>, titles: Array<string>): void => {
      const creator = createCreator(withSort(element, [{ field: fields[0] }, { field: fields[1], direction: "desc" }]));
      const question = creator.survey.getAllQuestions()[0];
      const grid = sortGrid(creator);
      expect([grid.getType(), grid.isReadOnly, grid.allowRowReorder], "#1 " + element.type).toEqual(["matrixdynamic", false, true]);
      expect(grid.columns.map(col => [col.name, col.title, col.cellType]), "#2 " + element.type).toEqual(
        [["field", "Sort by", "dropdown"], ["direction", "Order", "dropdown"]]);
      expect(grid.visibleRows.length, "#3 " + element.type).toBe(2);
      expect(grid.visibleRows.map(row => row.editingObj === question.sortCriteria[grid.visibleRows.indexOf(row)]), "#4: the items themselves " + element.type).toEqual([true, true]);
      expect(cellValues(grid), "#5: a missing direction shows ascending " + element.type).toEqual([[fields[0], "asc"], [fields[1], "desc"]]);
      expect(fieldChoices(grid, 0).map(item => item[1]), "#6 " + element.type).toEqual(titles);
      expect(cell(grid, 1, "direction").choices.map(item => [item.value, item.text]), "#7 " + element.type).toEqual([["asc", "Ascending"], ["desc", "Descending"]]);
      expect([cell(grid, 0, "field").allowClear, cell(grid, 0, "direction").allowClear], "#8: no clear button " + element.type).toEqual([false, false]);
      expect(grid.visibleRows[0].hasPanel, "#9: no detail panel " + element.type).toBe(false);
      expect([findAction(grid, "property-grid-clear"), findAction(grid, "property-grid-sort-more")], "#10: no clear and no More... " + element.type).toEqual([undefined, undefined]);
      expect([question.toJSON().sortCriteria, creator.undoRedoManager.canUndo()], "#11: building the grid writes nothing " + element.type).toEqual(
        [[{ field: fields[0] }, { field: fields[1], direction: "desc" }], false]);
    };
    check(matrixJSON, ["col1", "col2"], ["Column 1", "Column 2"]);
    check(panelJSON, ["q1", "q2"], ["Question 1", "Question 2"]);
  });
  test("the field choices: every column whose values sort, by title; the template questions of a dynamic panel", () => {
    const creator = createCreator({
      type: "matrixdynamic", name: "matrix", rowCount: 0, sortCriteria: [{ field: "col1" }],
      columns: [
        { name: "col1", title: "Column 1", cellType: "text" },
        { name: "hidden", title: "Hidden", cellType: "text", visible: false },
        { name: "tags", cellType: "checkbox", choices: ["a"] },
        { name: "num", cellType: "text", inputType: "number", allowSort: false },
        { name: "noTitle", cellType: "dropdown", choices: ["a"] }
      ]
    });
    expect(fieldChoices(sortGrid(creator), 0), "#1: invisible and allowSort: false offered, a checkbox is not").toEqual(
      [["col1", "Column 1"], ["hidden", "Hidden"], ["num", "num"], ["noTitle", "noTitle"]]);

    const panelCreator = createCreator(withSort({
      type: "paneldynamic", name: "panel",
      templateElements: [
        { type: "text", name: "q1", title: "Question 1" },
        { type: "checkbox", name: "q2", choices: ["a"] },
        { type: "panel", name: "inner", elements: [{ type: "dropdown", name: "q3", title: "Question 3", choices: ["a"] }] }
      ]
    }, [{ field: "q1" }]));
    expect(fieldChoices(sortGrid(panelCreator), 0), "#2: a nested template question, not a checkbox").toEqual([["q1", "Question 1"], ["q3", "Question 3"]]);
  });
  test("Add takes the first unused field with no direction, as one undo step", () => {
    const creator = createCreator();
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const grid = sortGrid(creator);
    expect([grid.visibleRows.length, grid.noRowsText], "#1").toEqual([0, "No sort levels"]);
    const add = findAction(grid, "add-item");
    expect([add.title, add.enabled], "#2").toEqual(["Add sort level", true]);
    let modified = 0;
    creator.onModified.add(() => modified++);
    addLevel(grid);
    expect([sortOf(matrix), matrix.toJSON().sortCriteria], "#3").toEqual([[{ field: "col1", direction: "asc" }], [{ field: "col1" }]]);
    expect(matrix.sortCriteria[0].getPropertyValueWithoutDefault("direction"), "#3a: no direction").toBeUndefined();
    expect([grid.visibleRows.length, grid.visibleRows[0].editingObj === matrix.sortCriteria[0], cellValues(grid)], "#4").toEqual([1, true, [["col1", "asc"]]]);
    expect([undoCount(creator), modified], "#5: one undo step").toEqual([1, 1]);
    creator.undo();
    expect([sortOf(matrix), grid.visibleRows.length], "#6: undo removes it").toEqual([[], 0]);
    creator.redo();
    expect([sortOf(matrix), grid.visibleRows.length], "#7: redo").toEqual([[{ field: "col1", direction: "asc" }], 1]);
    addLevel(grid);
    expect(sortOf(matrix), "#8: the next unused field").toEqual([{ field: "col1", direction: "asc" }, { field: "col2", direction: "asc" }]);
    expect([add.enabled, grid.canAddRow], "#9: every field is used").toEqual([false, false]);
  });
  test("Add follows the fields while the grid is open", () => {
    const creator = createCreator(withSort(matrixJSON, [{ field: "col1" }, { field: "col2" }]));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const grid = sortGrid(creator);
    const add = findAction(grid, "add-item");
    expect(add.enabled, "#1").toBe(false);
    matrix.addColumn("col3");
    expect([add.enabled, fieldChoices(grid, 0).map(item => item[0])], "#2: a column added in the designer").toEqual([true, ["col1", "col2", "col3"]]);
    matrix.columns[2].cellType = "checkbox";
    expect([add.enabled, fieldChoices(grid, 1).map(item => item[0])], "#3: its cell type does not sort").toEqual([false, ["col1", "col2"]]);
    matrix.columns[2].cellType = "dropdown";
    expect(add.enabled, "#4").toBe(true);
    matrix.columns.splice(2, 1);
    expect(add.enabled, "#5: removed").toBe(false);
    matrix.sortCriteria.splice(1, 1);
    expect(add.enabled, "#6: a level removed from code").toBe(true);
    creator.undo();
    expect([sortOf(matrix).length, add.enabled], "#7: undo").toEqual([2, false]);

    const panelCreator = createCreator(withSort(panelJSON, [{ field: "q1" }, { field: "q2" }]));
    const panel = <QuestionPanelDynamicModel>panelCreator.survey.getQuestionByName("panel");
    const panelAdd = findAction(sortGrid(panelCreator), "add-item");
    expect(panelAdd.enabled, "#8").toBe(false);
    panel.template.addNewQuestion("text", "q3");
    expect([panelAdd.enabled, fieldChoices(sortGrid(panelCreator), 0).map(item => item[0])], "#9: a template question added").toEqual([true, ["q1", "q2", "q3"]]);
    addLevel(sortGrid(panelCreator));
    expect(sortOf(panel).map(item => item.field), "#10").toEqual(["q1", "q2", "q3"]);
  });
  test("a matrix with no field to sort by", () => {
    const creator = createCreator({ type: "matrixdynamic", name: "matrix", rowCount: 0, columns: [{ name: "tags", cellType: "checkbox", choices: ["a"] }] });
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const grid = sortGrid(creator);
    expect([findAction(grid, "add-item").enabled, grid.canAddRow], "#1").toEqual([false, false]);
    grid.addRow();
    expect([sortOf(matrix), grid.visibleRows.length, creator.undoRedoManager.canUndo()], "#2: no add path adds an empty level").toEqual([[], 0, false]);
  });
  test("editing a cell changes the item in place, one undo step each", () => {
    const savedMergeTime = UndoRedoAction.maximumMergeTime;
    UndoRedoAction.maximumMergeTime = 0;
    try {
      const creator = createCreator(withSort(Object.assign({}, matrixJSON, { columns: matrixJSON.columns.concat([{ name: "col3", cellType: "text" }]) }),
        [{ field: "col1" }, { field: "col2", direction: "desc" }]));
      const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
      const items = matrix.sortCriteria.slice();
      const grid = sortGrid(creator);
      const modified: Array<any> = [];
      creator.onModified.add((_, options) => modified.push([options.type, options.name, options.target === items[0]]));
      cell(grid, 0, "field").value = "col3";
      expect([sortOf(matrix)[0], matrix.sortCriteria[0] === items[0]], "#1: the same item").toEqual([{ field: "col3", direction: "asc" }, true]);
      cell(grid, 0, "direction").value = "desc";
      expect(sortOf(matrix)[0], "#2").toEqual({ field: "col3", direction: "desc" });
      expect([undoCount(creator), modified], "#3: one step and one notification each").toEqual(
        [2, [["PROPERTY_CHANGED", "field", true], ["PROPERTY_CHANGED", "direction", true]]]);
      expect(matrix.toJSON().sortCriteria, "#4").toEqual([{ field: "col3", direction: "desc" }, { field: "col2", direction: "desc" }]);
      creator.undo();
      expect([sortOf(matrix)[0], cellValues(grid)[0]], "#5: undo").toEqual([{ field: "col3", direction: "asc" }, ["col3", "asc"]]);
      creator.undo();
      expect([sortOf(matrix)[0], cellValues(grid)[0], matrix.sortCriteria[0] === items[0]], "#6").toEqual([{ field: "col1", direction: "asc" }, ["col1", "asc"], true]);
      creator.redo();
      creator.redo();
      expect([sortOf(matrix)[0], cellValues(grid)[0]], "#7: redo").toEqual([{ field: "col3", direction: "desc" }, ["col3", "desc"]]);

      const steps = undoCount(creator);
      cell(grid, 1, "field").value = "col3";
      expect(cell(grid, 1, "field").errors.length, "#8: the unique error").toBe(1);
      expect([sortOf(matrix)[1], undoCount(creator)], "#9: the item keeps its field, nothing recorded").toEqual([{ field: "col2", direction: "desc" }, steps]);
    } finally {
      UndoRedoAction.maximumMergeTime = savedMergeTime;
    }
  });
  test("remove and reorder levels, one undo step each", () => {
    const creator = createCreator(withSort(Object.assign({}, matrixJSON, { columns: matrixJSON.columns.concat([{ name: "col3", cellType: "text" }]) }),
      [{ field: "col1" }, { field: "col2", direction: "desc" }, { field: "col3" }]));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const items = matrix.sortCriteria.slice();
    const grid = sortGrid(creator);
    const modified: Array<string> = [];
    creator.onModified.add((_, options) => modified.push(options.type));
    const fields = (): Array<string> => sortOf(matrix).map(item => item.field);

    grid.dragDropMatrixRows.onDragStart.fire(<any>{}, <any>{});
    grid.moveRowByIndex(2, 0);
    grid.dragDropMatrixRows.onDragClear.fire(<any>{}, <any>{});
    expect([fields(), cellValues(grid).map(row => row[0])], "#1: a drag").toEqual([["col3", "col1", "col2"], ["col3", "col1", "col2"]]);
    expect([undoCount(creator), modified], "#2: one undo step").toEqual([1, ["ELEMENT_REORDERED"]]);
    expect([matrix.sortCriteria[0] === items[2], grid.visibleRows[0].editingObj === items[2]], "#3: the same item").toEqual([true, true]);
    creator.undo();
    expect([fields(), matrix.sortCriteria.every((item, index) => item === items[index])], "#4: undo").toEqual([["col1", "col2", "col3"], true]);
    creator.redo();
    expect(fields(), "#5: redo").toEqual(["col3", "col1", "col2"]);

    grid.removeRow(1);
    expect([fields(), grid.visibleRows.length, undoCount(creator)], "#6: remove").toEqual([["col3", "col2"], 2, 2]);
    creator.undo();
    expect([fields(), matrix.sortCriteria[1] === items[0], grid.visibleRows[1].editingObj === items[0]], "#7: undo puts the item back").toEqual(
      [["col3", "col1", "col2"], true, true]);
    cell(grid, 1, "direction").value = "desc";
    expect(matrix.sortCriteria[1].direction, "#8: the restored row still edits it").toBe("desc");
  });
  test("changes from outside rebuild the rows", () => {
    const creator = createCreator();
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const grid = sortGrid(creator);
    matrix.sortCriteria = [{ field: "col2", direction: "desc" }, { field: "col1" }];
    expect(cellValues(grid), "#1: an assignment").toEqual([["col2", "desc"], ["col1", "asc"]]);
    matrix.sortCriteria.splice(0, 1);
    expect(cellValues(grid), "#2: a splice").toEqual([["col1", "asc"]]);
    matrix.sortCriteria.push({ field: "col2" });
    expect([cellValues(grid), grid.visibleRows[1].editingObj === matrix.sortCriteria[1]], "#3: a push").toEqual([[["col1", "asc"], ["col2", "asc"]], true]);
    matrix.sortCriteria[1].direction = "desc";
    expect(cellValues(grid), "#4: an item edited from code").toEqual([["col1", "asc"], ["col2", "desc"]]);
    creator.undo();
    expect(cellValues(grid), "#5: undo").toEqual([["col1", "asc"], ["col2", "asc"]]);

    creator.JSON = { elements: [withSort(matrixJSON, [{ field: "col2", direction: "desc" }])] };
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    expect(cellValues(sortGrid(creator)), "#6: the JSON").toEqual([["col2", "desc"]]);
  });
  test("a stored field that is not among the choices is kept", () => {
    const creator = createCreator(withSort(matrixJSON, [{ field: "gone", direction: "desc" }, { field: "col1" }]));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const grid = sortGrid(creator);
    const json = [{ field: "gone", direction: "desc" }, { field: "col1" }];
    expect([cellValues(grid), matrix.toJSON().sortCriteria], "#1: the grid is built").toEqual([[["gone", "desc"], ["col1", "asc"]], json]);
    const field = cell(grid, 0, "field");
    expect([fieldChoices(grid, 0), field.selectedItem.text], "#2: the stored name, a choice of its own row only").toEqual(
      [[["col1", "Column 1"], ["col2", "Column 2"], ["gone", "gone"]], "gone"]);
    expect(fieldChoices(grid, 1).map(item => item[0]), "#3").toEqual(["col1", "col2"]);
    expect([grid.hasErrors(true), field.errors.length], "#4: no error").toEqual([false, 0]);
    field.dropdownListModel.popupModel.toggleVisibility();
    field.dropdownListModel.popupModel.toggleVisibility();
    matrix.addColumn("col3");
    expect([matrix.toJSON().sortCriteria, field.value, field.errors.length], "#5: opened, closed, choices refreshed").toEqual([json, "gone", 0]);
    expect(fieldChoices(grid, 0).map(item => item[0]), "#6").toEqual(["col1", "col2", "col3", "gone"]);
    expect(undoCount(creator), "#7: only the column").toBe(1);
    field.value = "col2";
    expect([sortOf(matrix)[0].field, fieldChoices(grid, 0).map(item => item[0])], "#8: picked, the stale choice goes").toEqual(["col2", ["col1", "col2", "col3"]]);
    creator.undo();
    expect([sortOf(matrix)[0].field, field.value, fieldChoices(grid, 0).map(item => item[0])], "#9: undo brings it back").toEqual(
      ["gone", "gone", ["col1", "col2", "col3", "gone"]]);
  });
  test("the matrix is read-only only while the property may not be edited", () => {
    const creator = createCreator(withSort(matrixJSON, [{ field: "col1" }]));
    const reselect = (): QuestionMatrixDynamicModel => {
      creator.selectElement(creator.survey);
      creator.selectElement(creator.survey.getQuestionByName("matrix"));
      return sortGrid(creator);
    };
    const state = (grid: QuestionMatrixDynamicModel): Array<any> => [grid.isReadOnly, grid.canAddRow, cell(grid, 0, "field").isReadOnly];
    expect(state(sortGrid(creator)), "#1: editable Creator").toEqual([false, true, false]);
    creator.readOnly = true;
    expect(state(reselect()), "#2: read-only Creator").toEqual([true, false, true]);
    creator.readOnly = false;
    creator.onPropertyGetReadOnly.add((_, options) => {
      if (options.propertyName === "sortCriteria") options.readOnly = true;
    });
    expect(state(reselect()), "#3: onPropertyGetReadOnly").toEqual([true, false, true]);
  });
  test("onSetPropertyEditorOptions: Add stays off when it turns Add off", () => {
    const creator = new CreatorTester();
    creator.onSetPropertyEditorOptions.add((_, options) => {
      if (options.propertyName === "sortCriteria") options.editorOptions.allowAddRemoveItems = false;
    });
    creator.JSON = { elements: [matrixJSON] };
    creator.selectElement(creator.survey.getQuestionByName("matrix"));
    const grid = sortGrid(creator);
    expect(grid.canAddRow, "#1").toBe(false);
    (<QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix")).addColumn("col3");
    expect(grid.canAddRow, "#2").toBe(false);
  });
  test("disposing the grid releases its subscriptions", () => {
    const creator = createCreator(withSort(matrixJSON, [{ field: "col1" }]));
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
    const modifiedHandlers = creator.onModified.length;
    const grid = sortGrid(creator);
    const key = "sortCriteriaGrid_" + grid.id;
    const hasHandler = (): boolean => !!matrix["propChangeHandlers"] && !!matrix["propChangeHandlers"].get("sortCriteria") && matrix["propChangeHandlers"].get("sortCriteria").has(key);
    expect(hasHandler(), "#0: subscribed").toBe(true);
    creator.selectElement(creator.survey);
    expect([grid.isDisposed, hasHandler(), creator.onModified.length], "#1: released").toEqual([true, false, modifiedHandlers - 1]);
    matrix.sortCriteria = [{ field: "col2" }];
    matrix.addColumn("col3");
    expect(grid.isDisposed, "#2: nothing throws").toBe(true);
  });
  test("two grids on the same matrix keep their own subscriptions", () => {
    const survey = new SurveyModel({ elements: [withSort(matrixJSON, [{ field: "col1" }])] });
    const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("matrix");
    const grid1 = new PropertyGridModelTester(matrix);
    const grid2 = new PropertyGridModelTester(matrix);
    const q1 = <QuestionMatrixDynamicModel>grid1.survey.getQuestionByName("sortCriteria");
    const q2 = <QuestionMatrixDynamicModel>grid2.survey.getQuestionByName("sortCriteria");
    expect([q1.canAddRow, q2.canAddRow], "#1").toEqual([true, true]);
    matrix.sortCriteria.push({ field: "col2" });
    expect([q1.canAddRow, q2.canAddRow, q1.visibleRows.length, q2.visibleRows.length], "#2").toEqual([false, false, 2, 2]);
    grid1.obj = null;
    matrix.sortCriteria.splice(1, 1);
    expect([q2.canAddRow, q2.visibleRows.length], "#3").toEqual([true, 1]);
    (<MatrixDynamicRowModel>q2.visibleRows[0]).getQuestionByName("direction").value = "desc";
    expect(matrix.sortCriteria[0].direction, "#4").toBe("desc");
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
