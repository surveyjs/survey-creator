import { CreatorTester } from "./creator-tester";
import { CreatorPreset, ICreatorPresetData } from "../src/presets/presets";

test("Preset edit model, create pages", () => {
  const survey = new CreatorPreset({ }).createEditModel();
  expect(survey.pages).toHaveLength(3);
  expect(survey.visiblePages).toHaveLength(2);
  expect(survey.pages[0].name).toEqual("page_tabs");
  expect(survey.pages[1].name).toEqual("page_toolbox");
  expect(survey.pages[2].name).toEqual("page_toolbox_definition");
});
test("Preset edit model, page component", () => {
  const preset = new CreatorPreset({ tabs: { items: [] } });
  const survey = preset.createEditModel();
  const boolQuestion = survey.getQuestionByName("tabs_show");
  expect(boolQuestion).toBeTruthy();
  expect(boolQuestion.value).toBeFalsy();
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  expect(itemsQuestion.isVisible).toBeFalsy();
  boolQuestion.value = true;
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(itemsQuestion.choices).toHaveLength(6);
  expect(itemsQuestion.choices[0].value).toEqual("designer");
  expect(itemsQuestion.choices[5].value).toEqual("translation");
  expect(activeTabQuestion.visibleChoices).toHaveLength(3);
  expect(activeTabQuestion.value).toEqual("designer");
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
test("Preset edit model, tabs page with creator, default items", () => {
  const creator = new CreatorTester();
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel(creator);
  const boolQuestion = survey.getQuestionByName("tabs_show");
  boolQuestion.value = true;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "preview", "editor"]);
  itemsQuestion.value = ["preview", "logic"];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  preset.applyFromSurveyModel(survey, creator);
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toEqual("test");
  expect(creator.tabs[1].id).toEqual("logic");
  expect(creator.activeTab).toBe("logic");
});
test("Preset edit model, tabs page with creator, default items", () => {
  const preset = new CreatorPreset({ tabs: { items: ["designer", "logic"], activeTab: "logic" } });
  const survey = preset.createEditModel();
  const boolQuestion = survey.getQuestionByName("tabs_show");
  boolQuestion.value = true;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "logic"]);
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(activeTabQuestion.value).toEqual("logic");
});
test("Preset edit model, toolbox page", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  const boolDefinitionQuestion = survey.getQuestionByName("toolbox_definition_show");
  const boolSetupQuestion = survey.getQuestionByName("toolbox_categories_show");
  const boolSetupCategoriesQuestion = survey.getQuestionByName("toolbox_categories_mode");
  expect(boolDefinitionQuestion).toBeTruthy();
  expect(boolDefinitionQuestion.value).toBeFalsy();
  expect(boolSetupQuestion).toBeTruthy();
  expect(boolSetupQuestion.value).toBeFalsy();
  expect(boolSetupCategoriesQuestion).toBeTruthy();
  expect(boolSetupCategoriesQuestion.isVisible).toBeFalsy();
  expect(boolSetupCategoriesQuestion.value).toEqual("categories");
  boolSetupQuestion.value = true;
  expect(boolSetupCategoriesQuestion.isVisible).toBeTruthy();
});
test("Preset edit model, toolbox definition page", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  const boolDefinitionQuestion = survey.getQuestionByName("toolbox_definition_show");
  const page = survey.getPageByName("page_toolbox_definition");
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  expect(matrixQuestion).toBeTruthy();
  expect(page).toBeTruthy();
  expect(page.isVisible).toBeFalsy();
  boolDefinitionQuestion.value = true;
  expect(page.isVisible).toBeTruthy();
});
test("Preset edit model, toolbox definition page, validate name/json", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("toolbox_definition_show", true);
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  matrixQuestion.addRow();
  const row = matrixQuestion.visibleRows[0];
  const nameQuestion = row.getQuestionByName("name");
  row.showDetailPanel();
  const jsonQuestion = row.getQuestionByName("json");
  jsonQuestion.value = "{.";
  expect(preset.applyFromSurveyModel(survey)).toBeFalsy();
  expect(nameQuestion.errors).toHaveLength(1);
  nameQuestion.value = "name1";
  expect(preset.applyFromSurveyModel(survey)).toBeFalsy();
  expect(nameQuestion.errors).toHaveLength(0);
  expect(jsonQuestion.errors).toHaveLength(1);
  jsonQuestion.value = "{ type: \"text\", inputType: \"date\" }";
  expect(preset.applyFromSurveyModel(survey)).toBeTruthy();
  expect(nameQuestion.errors).toHaveLength(0);
  expect(jsonQuestion.errors).toHaveLength(0);
});
test("Preset edit model, toolbox definition page, default values", () => {
  const presetJson = {
    toolbox: {
      definition: [
        { name: "name1", json: { type: "text", inputType: "date" } },
        { name: "name2", iconName: "icon2", json: { type: "text", inputType: "number" } },
        { name: "name3", title: "Name 3", tooltip: "Name 3 tooltip" }
      ]
    }
  };
  const preset = new CreatorPreset(presetJson);
  const survey = preset.createEditModel();
  expect(survey.getValue("toolbox_definition_show")).toBeTruthy();
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  const val = matrixQuestion.value;
  expect(val).toHaveLength(3);
  expect(val[0]["name"]).toEqual("name1");
  expect(val[1]["name"]).toEqual("name2");
  expect(val[2]["name"]).toEqual("name3");
  expect(val[0]["title"]).toBeFalsy();
  expect(val[0]["iconName"]).toBeFalsy();
  expect(val[0]["tooltip"]).toBeFalsy();
  expect(val[1]["iconName"]).toEqual("icon2");
  expect(val[2]["title"]).toEqual("Name 3");
  expect(val[2]["tooltip"]).toEqual("Name 3 tooltip");
  const definition = presetJson.toolbox.definition;
  const json1 = JSON.parse(val[0]["json"]);
  expect(json1).toEqual(definition[0].json);
  const json2 = JSON.parse(val[1]["json"]);
  expect(json2).toEqual(definition[1].json);
  expect(val[2]["json"]).toBeFalsy();
});
test("Preset edit model, toolbox definition page, apply", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("toolbox_definition_show", true);
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  matrixQuestion.addRow();
  const row = matrixQuestion.visibleRows[0];
  const nameQuestion = row.getQuestionByName("name");
  nameQuestion.value = "name1";
  row.showDetailPanel();
  const jsonQuestion = row.getQuestionByName("json");
  jsonQuestion.value = "{ type: \"text\", inputType: \"date\" }";
  expect(preset.applyFromSurveyModel(survey)).toBeTruthy();
  const etalon: ICreatorPresetData = {
    toolbox: {
      definition: [
        {
          name: "name1",
          json: { type: "text", inputType: "date" }
        }
      ]
    }
  };
  const testJson = preset.getJson();
  expect(testJson).toEqual(etalon);
});
