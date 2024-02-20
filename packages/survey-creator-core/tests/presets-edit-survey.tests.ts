import { CreatorTester } from "./creator-tester";
import { CreatorPreset } from "../src/presets/presets";

test("Preset edit model, create pages", () => {
  const survey = new CreatorPreset({ tabs: { items: [] } }).createEditModel();
  expect(survey.pages).toHaveLength(3);
  expect(survey.pages[0].name).toEqual("page_tabs");
  expect(survey.pages[1].name).toEqual("page_toolbox");
  expect(survey.pages[2].name).toEqual("page_propertyGrid");
});
test("Preset edit model, tabs component", () => {
  const preset = new CreatorPreset({ tabs: { items: [] } });
  const survey = preset.createEditModel();
  const boolQuestion = survey.getQuestionByName("show_tabs");
  expect(boolQuestion).toBeTruthy();
  const tabsQuestion = survey.getQuestionByName("tabs");
  expect(tabsQuestion).toBeTruthy();
  expect(tabsQuestion.isVisible).toBeFalsy();
  boolQuestion.value = true;
  expect(tabsQuestion.isVisible).toBeTruthy();
  const itemsQuestion = tabsQuestion.contentPanel.getQuestionByName("items");
  const activeTabQuestion = tabsQuestion.contentPanel.getQuestionByName("activeTab");
  expect(itemsQuestion.choices).toHaveLength(6);
  expect(itemsQuestion.choices[0].value).toEqual("designer");
  expect(itemsQuestion.choices[5].value).toEqual("translation");
  expect(activeTabQuestion.visibleChoices).toHaveLength(0);
  itemsQuestion.value = ["designer", "translation"];
  expect(activeTabQuestion.visibleChoices).toHaveLength(2);
  activeTabQuestion.value = "translation";
  const resJson1 = preset.getJsonFromSurveyModel(survey);
  expect(resJson1).toEqual({
    tabs: { items: ["designer", "translation"], activeTab: "translation" }
  });
  boolQuestion.value = false;
  const resJson2 = preset.getJsonFromSurveyModel(survey);
  expect(resJson2).toEqual({});
});