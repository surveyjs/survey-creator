import { CreatorTester } from "../creator-tester";
import {
  TabTestPlugin,
  TestSurveyTabViewModel
} from "../../src/components/tabs/test";

function getTestModel(creator: CreatorTester): TestSurveyTabViewModel {
  var testPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  return testPlugin.model;
}

test("Test language Bar Item", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2" }
      }
    ]
  };
  var model = getTestModel(creator);
  expect(model.showDefaultLanguageInTestSurveyTab).toBeTruthy();
  expect(model.languages).toHaveLength(2);
  expect(model.languages[0].id).toEqual("en");
  expect(model.languages[1].id).toEqual("de");
  expect(model.languages[1].title).toEqual("deutsch");
  expect(model.activeLanguage).toEqual("en");
  var langAction;
  for (var i = 0; i < model.actions.length; i++) {
    if (model.actions[i].id == "languageSelector") {
      langAction = model.actions[i];
      break;
    }
  }
  expect(langAction).toBeTruthy();
  expect(langAction.title()).toEqual("english");
  model.activeLanguage = "de";
  expect(model.survey.locale).toEqual("de");
  expect(langAction.title()).toEqual("deutsch");
});
