import { QuestionRatingModel, Event, QuestionCheckboxModel, QuestionMatrixDropdownModel, QuestionSelectBase, MatrixDropdownColumn, Helpers } from "survey-core";
import { MatrixCellWrapperViewModel, MatrixCellWrapperEditSurvey } from "../src/components/matrix-cell";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { CreatorTester } from "./creator-tester";
import { SurveyHelper } from "../src/survey-helper";
import { ItemValueWrapperViewModel } from "../src/components/item-value";

test("QuestionRatingAdornerViewModel add/remove items w/o ratingItems", () => {
  const ratingQuestion = new QuestionRatingModel("q1");
  const ratingEditor = new QuestionRatingAdornerViewModel(new CreatorTester(), ratingQuestion, <any>{});

  expect(ratingQuestion.rateMin).toEqual(1);
  expect(ratingQuestion.rateMax).toEqual(5);

  ratingEditor.removeItem(ratingEditor);
  expect(ratingQuestion.rateMin).toEqual(1);
  expect(ratingQuestion.rateMax).toEqual(4);

  ratingEditor.addItem(ratingEditor);
  ratingEditor.addItem(ratingEditor);
  expect(ratingQuestion.rateMin).toEqual(1);
  expect(ratingQuestion.rateMax).toEqual(6);
});

test("QuestionRatingAdornerViewModel add/remove rateValues", () => {
  const ratingQuestion = new QuestionRatingModel("q1");
  ratingQuestion.rateValues = ["item1", "item2", "item3"];
  const ratingEditor = new QuestionRatingAdornerViewModel(new CreatorTester(), ratingQuestion, <any>{});

  expect(ratingQuestion.rateValues).toHaveLength(3);

  ratingEditor.removeItem(ratingEditor);
  expect(ratingQuestion.rateValues).toHaveLength(2);

  ratingEditor.addItem(ratingEditor);
  ratingEditor.addItem(ratingEditor);
  expect(ratingQuestion.rateValues).toHaveLength(4);
  expect(ratingQuestion.rateValues[2].value).toEqual("item3");
  expect(ratingQuestion.rateValues[3].value).toEqual("item4");
});

test("MatrixCellWrapperViewModel select context", () => {
  const creator: any = {
    selectedElement: undefined,
    selectedProperty: undefined,
    selectElement: undefined,
    onElementSelected: new Event()
  };
  creator.selectElement = (element: any, property?: string, focus?: boolean) => {
    creator.selectedElement = element;
    creator.selectedProperty = property;
  };
  const event: any = {
    stopPropagation: () => { }
  };

  let cellWrapper = new MatrixCellWrapperViewModel(creator, null, null, null, null);

  const row = { data: {} };
  cellWrapper.row = row;
  cellWrapper.selectContext(cellWrapper, event);
  expect(creator.selectedElement).toBe(row.data);
  expect(creator.selectedProperty).toBe("rows");

  const column = { getType: () => "itemvalue", locOwner: {}, ownerPropertyName: "columns" };
  cellWrapper.row = undefined;
  cellWrapper.column = column;
  cellWrapper.selectContext(cellWrapper, event);
  expect(creator.selectedElement).toBe(column.locOwner);
  expect(creator.selectedProperty).toBe("columns");

  cellWrapper.row = undefined;
  cellWrapper.column = undefined;
  cellWrapper.templateData = { getType: () => "something" };
  cellWrapper.selectContext(cellWrapper, event);
  expect(creator.selectedElement).toBe(cellWrapper.templateData);
  expect(creator.selectedProperty).toBe(undefined);
});
test("Helpers.isSupportCellEditor", () => {
  expect(SurveyHelper.isSupportCellEditor("text")).toBeFalsy();
  expect(SurveyHelper.isSupportCellEditor("comment")).toBeFalsy();
  expect(SurveyHelper.isSupportCellEditor("file")).toBeFalsy();
  expect(SurveyHelper.isSupportCellEditor("checkbox")).toBeTruthy();
  expect(SurveyHelper.isSupportCellEditor("dropdown")).toBeTruthy();
  expect(SurveyHelper.isSupportCellEditor("radiogroup")).toBeTruthy();
  expect(SurveyHelper.isSupportCellEditor("rating")).toBeTruthy();
  expect(SurveyHelper.isSupportCellEditor("boolean")).toBeTruthy();
});
test("MatrixCellWrapperViewModel.isSupportCellEditor", () => {
  const creator: any = {
    selectedElement: undefined,
    selectedProperty: undefined,
    selectElement: undefined,
    onElementSelected: new Event()
  };
  creator.selectElement = (element: any, property?: string, focus?: boolean) => {
    creator.selectedElement = element;
    creator.selectedProperty = property;
  };
  const event: any = {
    stopPropagation: () => { }
  };

  let cellWrapper = new MatrixCellWrapperViewModel(creator, null, null, null, null);
  expect(cellWrapper.isSupportCellEditor).toBeFalsy();
  const column = new MatrixDropdownColumn("q1");
  cellWrapper = new MatrixCellWrapperViewModel(creator, null, column.templateQuestion, null, null);
  expect(cellWrapper.isSupportCellEditor).toBeTruthy();
  column.cellType = "text";
  cellWrapper = new MatrixCellWrapperViewModel(creator, null, column.templateQuestion, null, null);
  expect(cellWrapper.isSupportCellEditor).toBeFalsy();
  column.cellType = "comment";
  cellWrapper = new MatrixCellWrapperViewModel(creator, null, column.templateQuestion, null, null);
  expect(cellWrapper.isSupportCellEditor).toBeFalsy();
  column.cellType = "dropdown";
  cellWrapper = new MatrixCellWrapperViewModel(creator, null, column.templateQuestion, null, null);
  expect(cellWrapper.isSupportCellEditor).toBeTruthy();
});

test("Special choices editability", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "q0",
            "choices": [
              "item1",
              "item2"
            ]
          }
        ]
      }
    ]
  };

  const q0 = <QuestionCheckboxModel>creator.survey.getQuestionByName("q0");
  expect(creator.isCanModifyProperty(q0.choices[0], "text")).toBeTruthy();
  expect(creator.isCanModifyProperty(q0.selectAllItem, "text")).toBeFalsy();
  expect(creator.isCanModifyProperty(q0.noneItem, "text")).toBeFalsy();
  expect(creator.isCanModifyProperty(q0.otherItem, "text")).toBeFalsy();

  q0.hasSelectAll = true;
  expect(creator.isCanModifyProperty(q0.selectAllItem, "text")).toBeTruthy();
  q0.hasNone = true;
  expect(creator.isCanModifyProperty(q0.noneItem, "text")).toBeTruthy();
  q0.hasOther = true;
  expect(creator.isCanModifyProperty(q0.otherItem, "text")).toBeTruthy();
});

test("Edit matrix cell question", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "columns": [{ name: "column1", cellType: "radiogroup" }],
        "choices": ["item1", "item2"],
        "rows": ["row1", "row2"]
      }
    ]
  };
  let modifiedCounter = 0;
  let stateCounter = 0;
  let type;
  let columnName;
  creator.onModified.add((sender, options) => {
    if(options.type === "MATRIX_CELL_EDITOR") {
      modifiedCounter++;
      type = options.type;
      columnName = options.column.name;
    }
  });
  creator.onStateChanged.add((sender, options) => {
    stateCounter++;
  });
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  const editQuestion = <QuestionSelectBase>editSurvey.question;
  expect(editQuestion.getType()).toEqual("radiogroup");
  expect(editQuestion.inMatrixMode).toBeTruthy();
  let objType: string = "";
  creator.onCollectionItemAllowOperations.add((sender, options) => {
    objType = options.obj.getType();
  });
  editQuestion.choices = [1, 2, 3, 4];
  expect(creator.state).toBeFalsy();
  new ItemValueWrapperViewModel(creator, editQuestion, editQuestion.choices[0]);
  expect(objType).toBe("matrixdropdowncolumn");
  editSurvey.apply();
  expect(matrix.columns[0].choices).toHaveLength(4);
  expect(matrix.columns[0].cellType).toEqual("radiogroup");
  expect(creator.state).toBe("modified");
  expect(modifiedCounter).toBe(1);
  expect(stateCounter).toBeGreaterThan(0);
  expect(type).toBe("MATRIX_CELL_EDITOR");
  expect(columnName).toBe("column1");

  stateCounter = 0;
  question = matrix.visibleRows[0].cells[0].question;
  editSurvey = new MatrixCellWrapperEditSurvey(creator, question, editQuestion.choices[0]);
  editSurvey.apply();
  expect(modifiedCounter).toBe(1);
  expect(stateCounter).toBe(0);
});
test("Edit matrix cell question & selectAll, other and none", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "columns": [{ name: "column1", cellType: "checkbox" }],
        "choices": ["item1", "item2"],
        "rows": ["row1", "row2"]
      }
    ]
  };
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  let editQuestion = <QuestionCheckboxModel>editSurvey.question;
  expect(editQuestion.getType()).toEqual("checkbox");
  editQuestion.showSelectAllItem = true;
  editQuestion.showNoneItem = true;
  editQuestion.showOtherItem = true;
  editSurvey.apply();
  const columnQuestion = <QuestionCheckboxModel>matrix.columns[0].templateQuestion;
  expect(columnQuestion.showSelectAllItem).toBeTruthy();
  expect(columnQuestion.showNoneItem).toBeTruthy();
  expect(columnQuestion.showOtherItem).toBeTruthy();

  question = matrix.visibleRows[0].cells[0].question;
  editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  editQuestion = <QuestionCheckboxModel>editSurvey.question;
  expect(editQuestion.showSelectAllItem).toBeTruthy();
  expect(editQuestion.showNoneItem).toBeTruthy();
  expect(editQuestion.showOtherItem).toBeTruthy();
  editQuestion.showSelectAllItem = false;
  editQuestion.showNoneItem = false;
  editQuestion.showOtherItem = false;
  editSurvey.apply();
  expect(columnQuestion.showSelectAllItem).toBeFalsy();
  expect(columnQuestion.showNoneItem).toBeFalsy();
  expect(columnQuestion.showOtherItem).toBeFalsy();
});
test("QuestionRatingAdornerViewModel add rateValues and call onItemValueAdded event", () => {
  const creator = new CreatorTester();
  let valueFromCallback;
  creator.onItemValueAdded.add((sender, options) => {
    valueFromCallback = options.newItem.value;
    options.newItem.value = "newItem1";
    options.newItem.text = "New Item 1";
  });
  const ratingQuestion = new QuestionRatingModel("q1");
  ratingQuestion.rateValues = ["item1", "item2", "item3"];
  const ratingEditor = new QuestionRatingAdornerViewModel(creator, ratingQuestion, <any>{});
  ratingEditor.addItem(ratingEditor);
  expect(ratingQuestion.rateValues).toHaveLength(4);
  expect(valueFromCallback).toEqual("item4");
  expect(ratingQuestion.rateValues[3].value).toEqual("newItem1");
  expect(ratingQuestion.rateValues[3].text).toEqual("New Item 1");
});
test("Edit matrix cell question & showInMultipleColumns, #5750", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "columns": [{ name: "column1", cellType: "checkbox", showInMultipleColumns: true, choices: [1, 2, 3, 4] }],
        "rows": ["row1", "row2"]
      }
    ]
  };
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  let editQuestion = <QuestionCheckboxModel>editSurvey.question;
  expect(editQuestion.getType()).toEqual("checkbox");
  editQuestion.choices = [1, 2, 3, 4, 5];
  editSurvey.apply();
  const columnQuestion = matrix.columns[0];
  expect(columnQuestion.cellType).toEqual("checkbox");
  expect(columnQuestion.showInMultipleColumns).toBeTruthy();
  expect(columnQuestion.choices).toHaveLength(5);
});
test("Edit matrix cell question & showInMultipleColumns, #5750", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "columns": [{ name: "column1", cellType: "checkbox", showNoneItem: true, choices: [1, 2, 3, 4] }],
        "rows": ["row1", "row2"]
      }
    ]
  };
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  creator.selectElement(matrix.columns[0]);
  expect(creator.propertyGrid.getQuestionByName("showNoneItem").value).toBeTruthy();
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  let editQuestion = <QuestionCheckboxModel>editSurvey.question;
  expect(editQuestion.getType()).toEqual("checkbox");
  editQuestion.choices = [1, 2];
  editQuestion.showNoneItem = false;
  editSurvey.apply();
  expect(creator.propertyGrid.getQuestionByName("showNoneItem").value).toBeFalsy();
  expect(matrix.columns[0].choices).toHaveLength(2);
});
test("Edit matrix cell question & default cellType, #5976", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "q1",
        "columns": [{ name: "column1" }],
        "rows": ["row1", "row2"],
        choices: [1, 2, 3, 4]
      }
    ]
  };
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  creator.selectElement(matrix.columns[0]);
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question, matrix.columns[0]);
  let editQuestion = <QuestionCheckboxModel>editSurvey.question;
  expect(editQuestion.getType()).toEqual("dropdown");
  editQuestion.choices = [1, 2];
  editSurvey.apply();
  expect(matrix.columns[0].cellType).toBe("dropdown");
  expect(matrix.columns[0].choices).toHaveLength(2);
});
