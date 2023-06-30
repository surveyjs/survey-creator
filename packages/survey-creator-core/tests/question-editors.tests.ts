import { QuestionRatingModel, Event, QuestionCheckboxModel, QuestionMatrixDropdownModel, QuestionSelectBase, MatrixDropdownColumn, Helpers } from "survey-core";
import { MatrixCellWrapperViewModel, MatrixCellWrapperEditSurvey } from "../src/components/matrix-cell";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { CreatorTester } from "./creator-tester";
import { SurveyHelper } from "../src/survey-helper";

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
    onSelectedElementChanged: new Event()
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
    onSelectedElementChanged: new Event()
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
    modifiedCounter++;
    type = options.type;
    columnName = options.column.name;
  });
  creator.onStateChanged.add((sender, options) => {
    stateCounter++;
  });
  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  let question = matrix.visibleRows[0].cells[0].question;
  let editSurvey = new MatrixCellWrapperEditSurvey(creator, question);
  const editQuestion = <QuestionSelectBase>editSurvey.question;
  expect(editQuestion.getType()).toEqual("radiogroup");
  expect(editQuestion.inMatrixMode).toBeTruthy();
  editQuestion.choices = [1, 2, 3, 4];
  expect(creator.state).toBeFalsy();
  editSurvey.apply();
  expect(matrix.columns[0].choices).toHaveLength(4);
  expect(matrix.columns[0].cellType).toEqual("radiogroup");
  expect(creator.state).toBe("modified");
  expect(modifiedCounter).toBe(1);
  expect(stateCounter).toBe(1);
  expect(type).toBe("MATRIX_CELL_EDITOR");
  expect(columnName).toBe("column1");

  question = matrix.visibleRows[0].cells[0].question;
  editSurvey = new MatrixCellWrapperEditSurvey(creator, question);
  editSurvey.apply();
  expect(modifiedCounter).toBe(1);
  expect(stateCounter).toBe(1);
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
