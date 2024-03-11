import { CalculatedValue, SurveyModel } from "survey-core";
import { CreatorTester } from "./creator-tester";

const surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "question1" },
        { type: "text", name: "question2" }
      ]
    },
    {
      name: "page2",
      elements: [
        { type: "text", name: "question11" },
        { type: "panel", name: "panel1", elements: [{ type: "text", name: "question22" }] }
      ]
    }
  ]
};

test("Add pages into survey", (): any => {
  const creator = new CreatorTester();
  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  const json = {
    pages: [{ name: "page3", elements: [{ type: "text", name: "question3" }] }]
  };
  creator.addCollectionItemsJson(json);
  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.survey.pages[2].name).toEqual("page3");

  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  creator.addCollectionItemsJson(json, 1);
  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.survey.pages[1].name).toEqual("page3");

  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  creator.addCollectionItemsJson(json, 0);
  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.survey.pages[0].name).toEqual("page3");
});
test("Add pages into survey", (): any => {
  const creator = new CreatorTester();
  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  const json = {
    pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "question1" }] }] }]
  };
  creator.addCollectionItemsJson(json);
  expect(creator.survey.pages).toHaveLength(3);
  const page = creator.survey.pages[2];
  expect(page.name).toEqual("page3");
  expect(page.elements[0].name).toEqual("panel2");
  expect(page.questions[0].name).toEqual("question3");
});
test("Update expressions", (): any => {
  const creator = new CreatorTester();
  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  const json = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question3", visibleIf: "{question1} = 1" }
    ],
    triggers: [
      { type: "complete", expression: "{question1} = 2" }
    ],
    completedHtmlOnCondition: [
      { expression: "{question1} = 3" }
    ]
  };
  creator.addCollectionItemsJson(json);
  expect(creator.survey.pages).toHaveLength(3);
  const survey = creator.survey;
  const page = survey.pages[2];
  expect(page.questions[0].name).toEqual("question4");
  expect(page.questions[1].visibleIf).toEqual("{question4} = 1");
  const triggers = survey.triggers;
  expect(triggers).toHaveLength(1);
  expect(triggers[0].expression).toEqual("{question4} = 2");
  const completedCond = survey.completedHtmlOnCondition;
  expect(completedCond).toHaveLength(1);
  expect(completedCond[0].expression).toEqual("{question4} = 3");
});
test("Update calculatedValues", (): any => {
  const creator = new CreatorTester();
  creator.JSON = surveyJSON;
  creator.survey.calculatedValues.push(new CalculatedValue("var1", "true"));
  const json = {
    elements: [
      { type: "text", name: "question1", visibleIf: "{var1} = 1" }
    ],
    calculatedValues: [
      { name: "var1", expression: "1" }
    ]
  };
  creator.addCollectionItemsJson(json);
  expect(creator.survey.pages).toHaveLength(3);
  const survey = creator.survey;
  const values = survey.calculatedValues;
  expect(values).toHaveLength(2);
  expect(values[0].name).toEqual("var1");
  expect(values[1].name).toEqual("var2");
  const page = survey.pages[2];
  expect(page.questions[0].name).toEqual("question3");
  expect(page.questions[0].visibleIf).toEqual("{var2} = 1");
});
test("Convert question names in panel dynamic tempalate", (): any => {
  const creator = new CreatorTester();
  creator.JSON = surveyJSON;
  expect(creator.survey.pages).toHaveLength(2);
  const json = {
    elements: [
      { type: "paneldynamic", name: "panel1",
        templateElements: [
          { type: "paneldynamic", name: "question1", templateElements: [{ type: "text", name: "question2" }] }
        ]
      }
    ]
  };
  creator.addCollectionItemsJson(json);
  expect(creator.survey.pages).toHaveLength(3);
  const page = creator.survey.pages[2];
  expect(page.name).toEqual("page3");
  expect(page.questions[0].name).toEqual("question3");
  expect(page.questions[0].templateElements[0].name).toEqual("question4");
  expect(page.questions[0].templateElements[0].templateElements[0].name).toEqual("question5");
});
