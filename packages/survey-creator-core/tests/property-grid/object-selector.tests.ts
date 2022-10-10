import { Question, SurveyModel, Base, ListModel, QuestionMatrixDropdownModel } from "survey-core";
import {
  ObjectSelector,
  ObjectSelectorItem,
  ObjectSelectorModel
} from "../../src/property-grid/object-selector";

function createSurvey(): SurveyModel {
  return new SurveyModel({
    pages: [
      {
        name: "page1",
        title: "Page 1",
        questions: [
          { type: "text", name: "question1", title: "Q 1" },
          {
            name: "question2",
            choices: [
              "one",
              { value: "two", text: "second value" },
              { value: 3, text: "third value" }
            ],
            type: "checkbox"
          }
        ]
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix"
          },
          { name: "question5", type: "rating" }
        ]
      }
    ]
  });
}
function createSurvey2(): SurveyModel {
  return new SurveyModel({
    pages: [
      {
        elements: [
          {
            type: "panel",
            name: "Person name",
            elements: [
              { type: "text", name: "First name" },
              { type: "text", name: "Last name" }
            ]
          },
          { type: "text", name: "Birth date" }
        ]
      },
      {
        elements: [{ type: "text", name: "Title" }]
      }
    ]
  });
}

test("Initial objects building", () => {
  var survey = createSurvey();
  var objects = new ObjectSelector(null, survey);
  expect(objects.items).toHaveLength(1 + 3 + 2 + 1 + 2); //    "survey + 3 pages + 5 questions."
  expect(objects.items[0].title).toEqual("Survey");
  expect(objects.items[0].data).toEqual(survey);
  expect(objects.items[4].title).toEqual("page2");
  expect(objects.items[4].data).toEqual(survey.pages[1]);
  expect(objects.items[4].level).toEqual(1);
  expect(objects.items[5].title).toEqual("question3");
  expect(objects.items[5].level).toEqual(2);
  expect(objects.getItemByObj(survey).title).toEqual("Survey");
  expect(objects.getItemByObj(survey.pages[0]).title).toEqual("page1");
  expect(
    objects.getItemByObj(survey.getQuestionByName("question3")).title
  ).toEqual("question3");
  expect(objects.getItemByObj(new SurveyModel())).toBeFalsy();
});
test("Initial objects building, panel support", () => {
  var survey = new SurveyModel();
  var page1 = survey.addNewPage("page1");
  var page2 = survey.addNewPage("page2");
  page1.addNewQuestion("text", "q1");
  var panel1 = page1.addNewPanel("panel1");
  panel1.addNewQuestion("text", "q2");
  var panel2 = panel1.addNewPanel("panel2");
  panel2.addNewQuestion("text", "q3");
  panel2.addNewQuestion("text", "q4");
  page1.addNewQuestion("text", "q5");
  page2.addNewQuestion("text", "q6");

  var objects = new ObjectSelector(null, survey);
  expect(objects.items).toHaveLength(1 + 2 + 2 + 6); //"survey + 2 pages + 2 panels +  5 questions."
  expect(objects.items[0].title).toEqual("Survey"); //"The first item is Survey");
  expect(objects.items[3].title).toEqual("panel1"); //  "The first panel"
  expect(objects.items[3].level).toEqual(2); //  "The first panel"
  expect(objects.items[4].title).toEqual("q2");
  expect(objects.items[4].level).toEqual(3);
});

test("Initial objects building, matrix dropdown support", () => {
  var survey = new SurveyModel();
  var page1 = survey.addNewPage("page1");
  var q1: QuestionMatrixDropdownModel = page1.addNewQuestion("matrixdropdown", "q1") as QuestionMatrixDropdownModel;
  q1.rows = [
    { value: "row1", text: "Row 1" },
    { value: "row2", text: "Row 2" },
  ];
  q1.columns = [];
  q1.addColumn("col1");
  q1.addColumn("col2");

  var objects = new ObjectSelector(null, survey);
  expect(objects.items).toHaveLength(1 + 1 + 1 + 2); //"1 survey + 1 page + 1 question +  2 columns."
  expect(objects.items[0].title).toEqual("Survey"); //"The first item is Survey");
  expect(objects.items[1].title).toEqual("page1"); //  "The first panel"
  expect(objects.items[1].level).toEqual(1); //  "The first panel"
  expect(objects.items[2].title).toEqual("q1");
  expect(objects.items[2].level).toEqual(2);
  expect(objects.items[3].title).toEqual("col1");
  expect(objects.items[3].level).toEqual(3);
  expect(objects.items[4].title).toEqual("col2");
  expect(objects.items[4].level).toEqual(3);
});

test("PanelDynamic test", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p1");
  var q = survey.pages[0].addNewQuestion("paneldynamic", "q1");
  q["template"].addNewQuestion("text", "question1");
  var question = q["template"].addNewQuestion("text", "question2");
  var objects = new ObjectSelector(null, survey);
  expect(objects.items).toHaveLength(1 + 1 + 1 + 2); //"survey + 1 pages + 1 dynamic page +  2 questions."
});
test("Initial objects building with titles - https://surveyjs.answerdesk.io/ticket/details/T1380", () => {
  var objects = new ObjectSelector(null, createSurvey(), (obj: any) => {
    return obj["title"];
  });
  expect(objects.items[1].title).toEqual("Page 1");
  expect(objects.items[1].level).toEqual(1);
  expect(objects.items[2].title).toEqual("Q 1");
  expect(objects.items[2].level).toEqual(2);
});
test("Filter items, set visible property", () => {
  var objects = new ObjectSelector(null, createSurvey2());
  expect(objects.items).toHaveLength(1 + 2 + 1 + 2 + 1 + 1);
  expect(objects.items[2].title).toEqual("Person name");
  expect(objects.items[2].level).toEqual(2);
  expect(objects.items[2].visible).toBeTruthy();
  expect(objects.items[3].visible).toBeTruthy();
  expect(objects.items[6].title).toEqual("page2");
  expect(objects.items[6].visible).toBeTruthy();
  expect(objects.items[7].title).toEqual("Title");
  expect(objects.items[7].visible).toBeTruthy();
  function checkVisiblity(filteredText: string, checks: Array<boolean>) {
    objects.filterByText(filteredText);
    for (let i = 0; i < checks.length; i++) {
      expect(objects.items[i].visible).toEqual(checks[i]);
    }
  }
  checkVisiblity("name", [true, true, true, true, true, false, false, false]);
  checkVisiblity("last", [true, true, true, false, true, false, false, false]);
  checkVisiblity("date", [true, true, false, false, false, true, false, false]);
  checkVisiblity("unknown", [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  checkVisiblity("surv", [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  checkVisiblity("", [true, true, true, true, true, true, true, true]);
});
test("Check ObjectSelectorModel", () => {
  const oldValueMINELEMENTCOUNT = ListModel.MINELEMENTCOUNT;
  ListModel.MINELEMENTCOUNT = 5;
  var survey = createSurvey2();
  var model = new ObjectSelectorModel(null);
  var selectedItem: any;

  model.show(survey, survey.pages[0], (obj: Base) => {
    selectedItem = obj;
  });
  expect(model.list.actions).toHaveLength(1 + 2 + 1 + 2 + 1 + 1);
  expect(model.list.selectedItem.title).toEqual("page1");
  expect(model.list.actions[3].visible).toBeTruthy();
  model.list.filterString = "date";
  expect(model.list.actions[3].visible).toBeFalsy();
  model.list.filterString = "";
  expect(model.list.actions[3].visible).toBeTruthy();
  model.list.onItemClick(model.list.actions[3]);
  expect(selectedItem.title).toEqual("First name");

  ListModel.MINELEMENTCOUNT = oldValueMINELEMENTCOUNT;
});
test("ObjectSelectorModel, do not recreate list model", () => {
  var survey = createSurvey2();
  var model = new ObjectSelectorModel(null);
  var selectedItem: any;
  model.show(survey, survey.pages[0], (obj: Base) => {
    selectedItem = obj;
  });
  expect(model.list.actions).toHaveLength(1 + 2 + 1 + 2 + 1 + 1);
  var list = model.list;
  model.show(survey, survey.pages[0], (obj: Base) => {
    selectedItem = obj;
  });
  expect(model.list).toStrictEqual(list);
  expect(model.list.actions).toHaveLength(1 + 2 + 1 + 2 + 1 + 1);
});
test("ObjectSelectorModel, list model selection on show issue", () => {
  var survey = createSurvey2();
  var model = new ObjectSelectorModel(null);
  var selectedItem: any;
  var selectedQuestion = survey.getAllQuestions()[0];
  model.show(survey, selectedQuestion, (obj: Base) => {
    selectedItem = obj;
  });
  expect(model.list.selectedItem).toBeTruthy();
  expect(model.list.selectedItem.data).toEqual(selectedQuestion);
  model.list.onItemClick(model.list.actions[0]);
  model.show(survey, selectedQuestion, (obj: Base) => {
    selectedItem = obj;
  });
  expect(model.list.selectedItem).toBeTruthy();
  expect(model.list.selectedItem.data).toEqual(selectedQuestion);
});
