import { CreatorTester } from "./creator-tester";
import { CreatorPreset, ICreatorPresetData } from "../src/presets/presets";
import { QuestionToolbox } from "../src/toolbox";
import { QuestionDropdownModel, QuestionMatrixDynamicModel } from "survey-core";

test("Preset edit model, create pages", () => {
  const survey = new CreatorPreset({ }).createEditModel();
  expect(survey.pages).toHaveLength(8);
  expect(survey.visiblePages).toHaveLength(4);
  expect(survey.pages[0].name).toEqual("page_tabs");
  expect(survey.pages[1].name).toEqual("page_toolbox");
  expect(survey.pages[2].name).toEqual("page_toolbox_definition");
  expect(survey.pages[3].name).toEqual("page_toolbox_items");
  expect(survey.pages[4].name).toEqual("page_toolbox_categories");
  expect(survey.pages[5].name).toEqual("page_propertyGrid");
  expect(survey.pages[6].name).toEqual("page_propertyGrid_definition");
  expect(survey.pages[7].name).toEqual("page_result");
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
  expect(itemsQuestion.choices[4].value).toEqual("editor");
  expect(itemsQuestion.choices[5].value).toEqual("translation");
  expect(itemsQuestion.choices[0].title).toEqual("Designer");
  expect(itemsQuestion.choices[4].title).toEqual("JSON Editor");
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
test("Preset edit model, toolbox items and categories pages visibility", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  expect(survey.getPageByName("page_toolbox_items").visible).toBeFalsy();
  survey.setValue("toolbox_categories_show", true);
  expect(survey.getPageByName("page_toolbox_items").visible).toBeFalsy();
  expect(survey.getPageByName("page_toolbox_categories").visible).toBeTruthy();
  survey.setValue("toolbox_categories_mode", "items");
  expect(survey.getPageByName("page_toolbox_items").visible).toBeTruthy();
  expect(survey.getPageByName("page_toolbox_categories").visible).toBeFalsy();
});
test("Preset edit model, toolbox items, default value and apply", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("toolbox_categories_show", true);
  survey.setValue("toolbox_categories_mode", "items");
  const question = survey.getQuestionByName("toolbox_items_name");
  expect(question).toBeTruthy();
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(question.choices).toHaveLength(defaultItems.length);
  expect(question.value).toHaveLength(defaultItems.length);
  question.value = ["boolean", "text", "checkbox"];
  expect(preset.applyFromSurveyModel(survey)).toBeTruthy();
  const etalon: ICreatorPresetData = {
    toolbox: {
      items: ["boolean", "text", "checkbox"]
    }
  };
  const testJson = preset.getJson();
  expect(testJson).toEqual(etalon);
});
test("Preset edit model, toolbox categories, default value and apply", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("toolbox_categories_show", true);
  const question = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories_matrix");
  expect(question).toBeTruthy();
  const categoryCount = 5;
  expect(question.rowCount).toEqual(categoryCount);
  question.visibleRows.forEach(row => {
    row.showDetailPanel();
    const itemsQuestion = row.getQuestionByName("items");
    const len = itemsQuestion.value.length;
    expect(len > 0).toBeTruthy();
    expect(itemsQuestion.choices).toHaveLength(len);
  });
  const row = question.visibleRows[0];
  row.showDetailPanel();
  let itemsQuestion = row.getQuestionByName("items");
  const items = itemsQuestion.value;
  const newValue = items.splice(0, 3);
  itemsQuestion.value = items;
  question.addRow();
  const newRow = question.visibleRows[question.rowCount - 1];
  newRow.getQuestionByName("name").value = "NewCategory";
  newRow.showDetailPanel();
  itemsQuestion = newRow.getQuestionByName("items");
  expect(itemsQuestion.choices).toHaveLength(3);
  itemsQuestion.value = newValue;
  expect(preset.applyFromSurveyModel(survey)).toBeTruthy();
  const json: any = preset.getJson();
  expect(json.toolbox.items).toBeFalsy();
  expect(json.toolbox.categories).toHaveLength(categoryCount + 1);
  const category = json.toolbox?.categories[categoryCount];
  expect(category.name).toEqual("NewCategory");
  expect(category.items).toHaveLength(3);
  expect(category.count).toBeFalsy();
});
test("Preset edit model, toolbox items & definition page", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("toolbox_definition_show", true);
  survey.setValue("toolbox_categories_show", true);
  survey.setValue("toolbox_categories_mode", "items");
  const itemsQuestion = survey.getQuestionByName("toolbox_items_name");
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(itemsQuestion.choices).toHaveLength(defaultItems.length);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);

  const definitionQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  definitionQuestion.addRow();
  definitionQuestion.addRow();
  const rowDef1 = definitionQuestion.visibleRows[0];
  rowDef1.getQuestionByName("name").value = "name1";
  const rowDef2 = definitionQuestion.visibleRows[1];
  rowDef2.getQuestionByName("name").value = "radiogroup";
  rowDef2.getQuestionByName("title").value = "Radiogroup_New";

  survey.currentPage = survey.getPageByName("page_toolbox_items");
  expect(survey.currentPage.name).toEqual("page_toolbox_items");
  expect(itemsQuestion.choices).toHaveLength(defaultItems.length + 1);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);
  expect(itemsQuestion.choices[0].value).toEqual("radiogroup");
  expect(itemsQuestion.choices[0].text).toEqual("Radiogroup_New");
});
test("Preset edit model, property grid, setup", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  expect(survey.getPageByName("page_propertyGrid_definition").visible).toBeFalsy();
  survey.setValue("propertyGrid_definition_show", true);
  expect(survey.getPageByName("page_propertyGrid_definition").visible).toBeTruthy();
  const selectorQuestion = <QuestionDropdownModel>survey.getQuestionByName("propertyGrid_definition_selector");
  const checkSelectorChoice = (value: string): boolean => {
    const items = selectorQuestion.choices.filter(item => item.value === value);
    return items.length > 0;
  };
  expect(checkSelectorChoice("survey")).toBeTruthy();
  expect(checkSelectorChoice("page")).toBeTruthy();
  expect(checkSelectorChoice("panel")).toBeTruthy();
  expect(checkSelectorChoice("panelbase")).toBeFalsy();
  expect(checkSelectorChoice("question")).toBeFalsy();
  expect(checkSelectorChoice("selectbase")).toBeFalsy();
  expect(checkSelectorChoice("matrixdropdownbase")).toBeFalsy();
  expect(checkSelectorChoice("matrix")).toBeTruthy();
  expect(checkSelectorChoice("base")).toBeFalsy();
  expect(checkSelectorChoice("empty")).toBeFalsy();
  expect(checkSelectorChoice("nonvalue")).toBeFalsy();
  expect(checkSelectorChoice("textwithbutton")).toBeFalsy();
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  expect(matrix.visible).toBeFalsy();
  selectorQuestion.value = "survey";
  expect(matrix.visible).toBeTruthy();
  const rows = matrix.visibleRows;
  expect(rows).toHaveLength(10);
  expect(rows[0].getValue("name")).toEqual("general");
  rows[0].showDetailPanel();
  const itemsQuestion = rows[0].getQuestionByName("items");
  expect(itemsQuestion.value.length > 0).toBeTruthy();
  expect(itemsQuestion.choices.length >= itemsQuestion.value.length).toBeTruthy();
});
test("Preset edit model, property grid, setup items in detail panels", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("propertyGrid_definition_show", true);
  survey.setValue("propertyGrid_definition_selector", "survey");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  const rows = matrix.visibleRows;
  rows[1].showDetailPanel();
  let itemsQuestion = rows[1].getQuestionByName("items");
  const row1choicesCount = itemsQuestion.choices.length;
  rows[0].showDetailPanel();
  itemsQuestion = rows[0].getQuestionByName("items");
  const val = [].concat(itemsQuestion.value);
  val.splice(0, 3);
  itemsQuestion.value = val;
  rows[1].showDetailPanel();
  itemsQuestion = rows[1].getQuestionByName("items");
  expect(itemsQuestion.choices).toHaveLength(row1choicesCount + 3);
});
test("Preset edit model, property grid, apply", () => {
  const preset = new CreatorPreset({});
  const survey = preset.createEditModel();
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["title", "description"] },
    { name: "second", items: ["pages", "locale"] }];
  const creator = new CreatorTester();
  expect(preset.applyFromSurveyModel(survey, creator)).toBeTruthy();
  const propDef = preset.getJson().propertyGrid?.definition;
  const surveyProps = propDef?.classes["survey"];
  expect(propDef?.autoGenerateProperties).toStrictEqual(false);
  expect(surveyProps?.tabs).toHaveLength(1);
  expect(surveyProps?.properties).toHaveLength(4);
  const propSurvey = creator.propertyGrid;
  const panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("second");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[1].elements).toHaveLength(2);

  survey.setValue("propertyGrid_definition_selector", "page");
  matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["name", "title", "description"] }];
  survey.setValue("propertyGrid_definition_selector", "survey");
  expect(preset.applyFromSurveyModel(survey, creator)).toBeTruthy();
  const pageProps = propDef?.classes["page"];
  expect(pageProps?.tabs).toHaveLength(0);
  expect(pageProps?.properties).toHaveLength(3);
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.selectElement(creator.survey.pages[0]);
  const panels2 = creator.propertyGrid.getAllPanels();
  expect(panels2).toHaveLength(1);
  expect(panels2[0].elements).toHaveLength(3);
});
