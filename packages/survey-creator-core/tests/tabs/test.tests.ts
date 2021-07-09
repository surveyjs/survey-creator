import { CreatorTester } from "../creator-tester";
import { TabTestPlugin, TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { IActionBarItem, ListModel } from "survey-core";

function getTestModel(creator: CreatorTester): TestSurveyTabViewModel {
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  return testPlugin.model;
}

test("Test language Bar Item", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2" }
      }
    ]
  };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  expect(model.showDefaultLanguageInTestSurveyTab).toBeTruthy();
  expect(model.languages).toHaveLength(2);
  expect(model.languages[0].id).toEqual("en");
  expect(model.languages[1].id).toEqual("de");
  expect(model.languages[1].title).toEqual("deutsch");
  expect(model.activeLanguage).toEqual("en");
  let langAction = model.actions.filter(action => action.id === "languageSelector")[0];
  expect(langAction).toBeTruthy();
  expect(langAction.title).toEqual("english");
  model.activeLanguage = "de";
  expect(model.survey.locale).toEqual("de");
  expect(langAction.title).toEqual("deutsch");

  let testAgain = model.actions.filter(action => action.id === "testSurveyAgain")[0];
  expect(testAgain).toBeTruthy();
  testAgain.action();
  expect(model.survey.locale).toEqual("de");
});

test("Check page list state after change page arrows click", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "text",
        name: "question1",
        visibleIf: "{question2} notempty"
       }
      ]
     },
     {
      name: "page2",
      elements: [
       {
        type: "text",
        name: "question2"
       }
      ]
     },
     {
      name: "page3",
      elements: [
       {
        type: "text",
        name: "question3",
        visibleIf: "{question2} notempty"
       }
      ]
     },
     {
      name: "page4",
      elements: [
       {
        type: "text",
        name: "question4"
       }
      ]
     }
    ]
   };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  const pageList: ListModel = model.actions.filter((item: IActionBarItem) =>
    item.id === "pageSelector")[0].popupModel.contentComponentData.model;
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const nextPage: IActionBarItem =
    model.actions.filter((item: IActionBarItem) => item.id === "nextPage")[0];
  nextPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const prevPage: IActionBarItem =
    model.actions.filter((item: IActionBarItem) => item.id === "prevPage")[0];
  prevPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
});