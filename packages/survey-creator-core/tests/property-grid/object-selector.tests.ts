import { Question, SurveyModel } from "survey-core";
import {
  ObjectSelector,
  ObjectSelectorItem
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

test("Initial objects building", () => {
  var survey = createSurvey();
  var objects = new ObjectSelector(survey);
  expect(objects.items).toHaveLength(1 + 3 + 2 + 1 + 2); //    "survey + 3 pages + 5 questions."
  expect(objects.items[0].text).toEqual("Survey");
  expect(objects.items[4].text).toEqual("page2");
  expect(objects.items[4].level).toEqual(1);
  expect(objects.items[5].text).toEqual("question3");
  expect(objects.items[5].level).toEqual(2);
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

  var objects = new ObjectSelector(survey);
  expect(objects.items).toHaveLength(1 + 2 + 2 + 6); //"survey + 2 pages + 2 panels +  5 questions."
  expect(objects.items[0].text).toEqual("Survey"); //"The first item is Survey");
  expect(objects.items[3].text).toEqual("panel1"); //  "The first panel"
  expect(objects.items[3].level).toEqual(2); //  "The first panel"
  expect(objects.items[4].text).toEqual("q2");
  expect(objects.items[4].level).toEqual(3);
});

test("PanelDynamic test", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p1");
  var q = survey.pages[0].addNewQuestion("paneldynamic", "q1");
  q["template"].addNewQuestion("text", "question1");
  var question = q["template"].addNewQuestion("text", "question2");
  var objects = new ObjectSelector(survey);
  expect(objects.items).toHaveLength(1 + 1 + 1 + 2); //"survey + 1 pages + 1 dynamic page +  2 questions."
});
test("Initial objects building with titles - https://surveyjs.answerdesk.io/ticket/details/T1380", () => {
  var objects = new ObjectSelector(createSurvey(), (obj: any) => {
    return obj["title"];
  });
  expect(objects.items[1].text).toEqual("Page 1");
  expect(objects.items[1].level).toEqual(1);
  expect(objects.items[2].text).toEqual("Q 1");
  expect(objects.items[2].level).toEqual(2);
});
test("Filter items, set visible property", () => {
  var survey = new SurveyModel({
    pages: [
      {
        elements: [
          {
            type: "panel",
            name: "Person name",
            elements: [
              { type: "text", name: "First name:" },
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
  var objects = new ObjectSelector(survey);
  expect(objects.items).toHaveLength(1 + 2 + 1 + 2 + 1 + 1);
  expect(objects.items[2].text).toEqual("Person name");
  expect(objects.items[2].level).toEqual(2);
  expect(objects.items[2].visible).toBeTruthy();
  expect(objects.items[3].visible).toBeTruthy();
  expect(objects.items[6].text).toEqual("page2");
  expect(objects.items[6].visible).toBeTruthy();
  expect(objects.items[7].text).toEqual("Title");
  expect(objects.items[7].visible).toBeTruthy();
  function checkVisiblity(checks: Array<boolean>) {
    for (let i = 0; i < checks.length; i++) {
      expect(objects.items[i].visible).toEqual(checks[i]);
    }
  }
  objects.filteredText = "name";
  checkVisiblity([true, true, true, true, true, false, false, false]);
  objects.filteredText = "last";
  checkVisiblity([true, true, true, false, true, false, false, false]);
  objects.filteredText = "date";
  checkVisiblity([true, true, false, false, false, true, false, false]);
  objects.filteredText = "x-x";
  checkVisiblity([false, false, false, false, false, false, false, false]);
  objects.filteredText = "surv";
  checkVisiblity([true, false, false, false, false, false, false, false]);
  objects.filteredText = "";
  checkVisiblity([true, true, true, true, true, true, true, true]);
});
