import { QuestionRatingModel, Event, QuestionCheckboxModel } from "survey-core";
import { MatrixCellWrapperViewModel } from "../src/components/matrix-cell";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { CreatorTester } from "./creator-tester";

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