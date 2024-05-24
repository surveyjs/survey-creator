import { CreatorTester } from "./creator-tester";
import { ICreatorPresetData } from "../src/presets/presets";
import { QuestionToolbox } from "../src/toolbox";
import { ItemValue, QuestionDropdownModel, QuestionMatrixDynamicModel } from "survey-core";
import { defaultPropertyGridDefinition } from "../src/question-editor/definition";
import { SurveyQuestionPresetPropertiesDetail } from "../src/presets/editable/presets-editable-properties";
import { QuestionEmbeddedSurveyModel } from "../src/components/embedded-survey";
import { CreatorPresetEditorModel } from "../src/presets/editable/presets-editor";

export * from "../src/components/embedded-survey";

test("Preset edit model, create pages", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.pages).toHaveLength(4);
  expect(survey.visiblePages).toHaveLength(4);
  expect(survey.pages[0].name).toEqual("page_tabs");
  expect(survey.pages[1].name).toEqual("page_toolbox_definition");
  expect(survey.pages[2].name).toEqual("page_toolbox");
  expect(survey.pages[3].name).toEqual("page_propertyGrid_definition");
});
test("Preset edit model, page component", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
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
  const resJson1 = editor.getJsonFromSurveyModel();
  expect(resJson1).toEqual({
    tabs: { items: ["designer", "translation"], activeTab: "translation" }
  });
  boolQuestion.value = false;
  const resJson2 = editor.getJsonFromSurveyModel();
  expect(resJson2).toEqual({});
});
test("Preset edit model, tabs page with creator, default items", () => {
  const creator = new CreatorTester();
  const editor = new CreatorPresetEditorModel({}, creator);
  const survey = editor.model;
  const boolQuestion = survey.getQuestionByName("tabs_show");
  boolQuestion.value = true;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "preview", "editor"]);
  itemsQuestion.value = ["preview", "logic"];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  editor.applyFromSurveyModel();
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toEqual("test");
  expect(creator.tabs[1].id).toEqual("logic");
  expect(creator.activeTab).toBe("logic");
});
test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: ["designer", "logic"], activeTab: "logic" } });
  const survey = editor.model;
  const boolQuestion = survey.getQuestionByName("tabs_show");
  boolQuestion.value = true;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "logic"]);
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(activeTabQuestion.value).toEqual("logic");
});
test("Preset edit model, toolbox page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const boolDefinitionQuestion = survey.getQuestionByName("toolbox_definition_show");
  const boolSetupQuestion = survey.getQuestionByName("toolbox_show");
  const boolSetupCategoriesQuestion = survey.getQuestionByName("toolbox_mode");
  expect(boolDefinitionQuestion).toBeTruthy();
  expect(boolDefinitionQuestion.value).toBeFalsy();
  expect(boolSetupQuestion).toBeTruthy();
  expect(boolSetupQuestion.value).toEqual(false);
  expect(boolSetupCategoriesQuestion).toBeTruthy();
  expect(boolSetupCategoriesQuestion.isVisible).toBeFalsy();
  expect(boolSetupCategoriesQuestion.value).toBeFalsy();
  boolSetupQuestion.value = true;
  expect(boolSetupCategoriesQuestion.value).toEqual("categories");
  expect(boolSetupCategoriesQuestion.isVisible).toBeTruthy();
});
test("Preset edit model, toolbox definition page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const page = survey.getPageByName("page_toolbox_definition");
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  expect(matrixQuestion).toBeTruthy();
  expect(page).toBeTruthy();
  expect(page.isVisible).toBeTruthy();
});
test("Preset edit model, toolbox definition page, validate name/json", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_definition_show", true);
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  matrixQuestion.addRow();
  const row = matrixQuestion.visibleRows[0];
  const nameQuestion = row.getQuestionByName("name");
  row.showDetailPanel();
  const jsonQuestion = row.getQuestionByName("json");
  jsonQuestion.value = "{.";
  expect(editor.applyFromSurveyModel()).toBeFalsy();
  expect(nameQuestion.errors).toHaveLength(1);
  nameQuestion.value = "name1";
  expect(editor.applyFromSurveyModel()).toBeFalsy();
  expect(nameQuestion.errors).toHaveLength(0);
  expect(jsonQuestion.errors).toHaveLength(1);
  jsonQuestion.value = "{ type: \"text\", inputType: \"date\" }";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
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
  const editor = new CreatorPresetEditorModel(presetJson);
  const survey = editor.model;
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
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_definition_show", true);
  const matrixQuestion = survey.getQuestionByName("toolbox_definition_matrix");
  matrixQuestion.addRow();
  const row = matrixQuestion.visibleRows[0];
  const nameQuestion = row.getQuestionByName("name");
  nameQuestion.value = "name1";
  row.showDetailPanel();
  const jsonQuestion = row.getQuestionByName("json");
  jsonQuestion.value = "{ type: \"text\", inputType: \"date\" }";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
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
  const testJson = editor.preset.getJson();
  expect(testJson).toEqual(etalon);
});
test("Preset edit model, toolbox items, default value and apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_show", true);
  survey.setValue("toolbox_mode", "items");
  const question = survey.getQuestionByName("toolbox_items");
  expect(question).toBeTruthy();
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(question.choices).toHaveLength(defaultItems.length);
  expect(question.value).toHaveLength(defaultItems.length);
  question.value = ["boolean", "text", "checkbox"];
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const etalon: ICreatorPresetData = {
    toolbox: {
      items: ["boolean", "text", "checkbox"]
    }
  };
  const testJson = editor.preset.getJson();
  expect(testJson).toEqual(etalon);
});
test("Preset edit model, toolbox categories, default value and apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_show", true);
  survey.setValue("toolbox_mode", "categories");
  const question = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const showTitlesQuestion = survey.getQuestionByName("toolbox_showCategoryTitles");
  expect(showTitlesQuestion.value).toBeFalsy();
  showTitlesQuestion.value = true;
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
  newRow.getQuestionByName("category").value = "NewCategory";
  newRow.showDetailPanel();
  itemsQuestion = newRow.getQuestionByName("items");
  expect(itemsQuestion.choices).toHaveLength(3);
  itemsQuestion.value = newValue;
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const json: any = editor.preset.getJson();
  expect(json.toolbox.items).toBeFalsy();
  expect(json.toolbox.categories).toHaveLength(categoryCount + 1);
  const category = json.toolbox?.categories[categoryCount];
  expect(category.category).toEqual("NewCategory");
  expect(category.items).toHaveLength(3);
  expect(category.count).toBeFalsy();
  expect(editor.creator.toolbox.hasCategories).toBeTruthy();
  expect(editor.creator.toolbox.showCategoryTitles).toBeTruthy();
});
test("Preset edit model, toolbox items & definition page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_definition_show", true);
  survey.setValue("toolbox_show", true);
  survey.setValue("toolbox_mode", "categories");
  const itemsQuestion = survey.getQuestionByName("toolbox_items");
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

  survey.currentPage = survey.getPageByName("page_toolbox");
  expect(survey.currentPage.name).toEqual("page_toolbox");
  expect(itemsQuestion.choices).toHaveLength(defaultItems.length + 1);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);
  expect(itemsQuestion.choices[0].value).toEqual("radiogroup");
  expect(itemsQuestion.choices[0].text).toEqual("Radiogroup_New");
});
test("Preset edit model, property grid, setup", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getPageByName("page_propertyGrid_definition").visible).toBeTruthy();
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
  const panel = survey.getPanelByName("propPanel");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  expect(panel.isVisible).toBeFalsy();
  selectorQuestion.value = "survey";
  expect(panel.isVisible).toBeTruthy();
  const rows = matrix.visibleRows;
  expect(rows).toHaveLength(10);
  expect(rows[0].getValue("name")).toEqual("general");
  rows[0].showDetailPanel();
  const itemsQuestion = rows[0].getQuestionByName("items");
  expect(itemsQuestion.value.length > 0).toBeTruthy();
  expect(itemsQuestion.choices.length >= itemsQuestion.value.length).toBeTruthy();
});
test("Preset edit model, property grid, setup items in detail panels => survey", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
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
test("Preset edit model, property grid, SurveyQuestionPresetPropertiesDetail", () => {
  const properties = new SurveyQuestionPresetPropertiesDetail("checkbox", defaultPropertyGridDefinition);
  expect(properties.classes).toEqual(["question", "selectbase", "checkbox"]);
  const rows = properties.getRows();
  expect(rows).toHaveLength(7);
  expect(rows[0].name).toEqual("general");
  expect(rows[0].items).toBeTruthy();
  expect(rows[0].question).toBeFalsy();
  expect(rows[0].selectbase).toBeFalsy();
});
test("Preset edit model, property grid, setup items in detail panels => radiogroup", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.setValue("propertyGrid_definition_selector", "radiogroup");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  const rows = matrix.visibleRows;
  rows[0].showDetailPanel();
  const detailPanel = rows[0].detailPanel;
  expect(detailPanel.elements).toHaveLength(1);
  expect(detailPanel.elements[0].visible).toBeTruthy();
  expect(detailPanel.elements[0].name).toBe("items");
});
test("Preset edit model, property grid, apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["title", "description"] },
    { name: "second", items: ["pages", "locale"] }];
  const creator = editor.creator;
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const propDef = editor.preset.getJson().propertyGrid?.definition;
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
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const pageProps = propDef?.classes["page"];
  expect(pageProps?.tabs).toHaveLength(0);
  expect(pageProps?.properties).toHaveLength(0);
  const panelBaseProps = propDef?.classes["panelbase"];
  expect(panelBaseProps?.tabs).toHaveLength(0);
  expect(panelBaseProps?.properties).toHaveLength(3);
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.selectElement(creator.survey.pages[0]);
  const panels2 = creator.propertyGrid.getAllPanels();
  expect(panels2).toHaveLength(1);
  expect(panels2[0].elements).toHaveLength(3);
});
test("Preset edit model, live property grid", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["title", "description"] },
    { name: "second", items: ["pages", "locale"] }];
  const embeddedSurvey = <QuestionEmbeddedSurveyModel>survey.getQuestionByName("propertyGrid_definition_propgrid");
  let propSurvey = embeddedSurvey.embeddedSurvey;
  let panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("second");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[1].elements).toHaveLength(2);
  matrix.visibleRows[0].showDetailPanel();
  expect(panels[0].isExpanded).toBeTruthy();
  matrix.visibleRows[0].hideDetailPanel();
  expect(panels[0].isExpanded).toBeFalsy();
  panels[1].expand();
  expect(matrix.visibleRows[1].isDetailPanelShowing).toBeTruthy();
  panels[1].collapse();
  expect(matrix.visibleRows[1].isDetailPanelShowing).toBeFalsy();
});
test("Preset edit model, live property grid & modify value", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["title", "description"] },
    { name: "second", items: ["pages", "locale"] }];
  const embeddedSurvey = <QuestionEmbeddedSurveyModel>survey.getQuestionByName("propertyGrid_definition_propgrid");
  let propSurvey = embeddedSurvey.embeddedSurvey;
  let panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  matrix.visibleRows[0].showDetailPanel();
  matrix.visibleRows[0].getQuestionByName("items").value = ["widthMode"];
  expect(panels[0].elements).toHaveLength(1);
  expect(panels[0].elements[0].name).toBe("widthMode");
});
test("Preset edit model, live property grid & visible indexes", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["name", "inputType", "title", "placeholder", "description"] }];
  const embeddedSurvey = <QuestionEmbeddedSurveyModel>survey.getQuestionByName("propertyGrid_definition_propgrid");
  let propSurvey = embeddedSurvey.embeddedSurvey;
  let panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(1);
  expect(panels[0].name).toBe("general");
  const elements = panels[0].elements;
  expect(elements).toHaveLength(5);
  expect(elements[0].name).toBe("name");
  expect(elements[1].name).toBe("inputType");
  expect(elements[2].name).toBe("title");
  expect(elements[3].name).toBe("placeholder");
  expect(elements[4].name).toBe("description");
});
test("Preset edit model, include columns types", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  const question = <QuestionDropdownModel>survey.getQuestionByName("propertyGrid_definition_selector");
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@default")).toBeTruthy();
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@checkbox")).toBeTruthy();
});
test("Preset edit model, edit matrixdropdowncolumn@default", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "matrixdropdowncolumn@default");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  const rows = matrix.visibleRows;
  expect(rows).toHaveLength(3);
  rows[0].showDetailPanel();
  expect(rows[0].getQuestionByName("items").choices).toHaveLength(10);
  rows[1].showDetailPanel();
  expect(rows[1].getQuestionByName("items").choices).toHaveLength(7);
});
test("Preset edit model, live property grid & matrixdropdowncolumn@default", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "matrixdropdowncolumn@default");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["name", "title"] },
    { name: "logic", items: ["visibleIf"] }];
  const embeddedSurvey = <QuestionEmbeddedSurveyModel>survey.getQuestionByName("propertyGrid_definition_propgrid");
  let propSurvey = embeddedSurvey.embeddedSurvey;
  let panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[0].elements[0].name).toBe("name");
  expect(panels[0].elements[1].name).toBe("title");
  matrix.visibleRows[0].showDetailPanel();
  matrix.visibleRows[0].getQuestionByName("items").value = ["cellType"];
  expect(panels[0].elements).toHaveLength(1);
  expect(panels[0].elements[0].name).toBe("cellType");
});
test("Preset edit model, live property grid & matrixdropdowncolumn@checkbox", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("propertyGrid_definition_show", true);
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "matrixdropdowncolumn@checkbox");
  let matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("propertyGrid_definition_matrix");
  matrix.value = [{ name: "general", items: ["name", "title"] },
    { name: "choices", items: ["choices", "showSelectAllItem"] }];
  const embeddedSurvey = <QuestionEmbeddedSurveyModel>survey.getQuestionByName("propertyGrid_definition_propgrid");
  let propSurvey = embeddedSurvey.embeddedSurvey;
  let panels = propSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[0].elements[0].name).toBe("name");
  expect(panels[0].elements[1].name).toBe("title");
  matrix.visibleRows[0].showDetailPanel();
  matrix.visibleRows[0].getQuestionByName("items").value = ["cellType"];
  expect(panels[0].elements).toHaveLength(1);
  expect(panels[0].elements[0].name).toBe("cellType");
  matrix.visibleRows[1].showDetailPanel();
  matrix.visibleRows[1].getQuestionByName("items").value = ["choices", "maxSelectedChoices"];
  expect(panels[1].elements).toHaveLength(2);
  expect(panels[1].elements[0].name).toBe("choices");
  expect(panels[1].elements[1].name).toBe("maxSelectedChoices");
});
test("Editor: activeTab & navigationBar", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.activeTab).toEqual("preset");
  expect(editor.navigationBar.actions[0].active).toBeTruthy();
  const survey = editor.model;
  const boolQuestion = survey.getQuestionByName("tabs_show");
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  boolQuestion.value = true;
  itemsQuestion.value = ["designer", "translation"];
  editor.navigationBar.actions[1].action();
  expect(editor.activeTab).toEqual("creator");
  expect(editor.creator.tabs).toHaveLength(2);
  expect(editor.creator.tabs[0].id).toEqual("designer");
  expect(editor.creator.tabs[1].id).toEqual("translation");
});
test("Editor: do not allow to change the activeTab if there is an error", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.activeTab).toEqual("preset");
  const survey = editor.model;
  survey.setValue("toolbox_definition_show", true);
  const matrixQuestion = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_definition_matrix");
  expect(matrixQuestion.isVisible).toBeTruthy();
  matrixQuestion.addRow();
  survey.currentPageNo = 0;
  expect(survey.currentPageNo).toBe(0);
  editor.navigationBar.actions[1].action();
  expect(editor.activeTab).toEqual("preset");
  expect(survey.currentPageNo).toBe(1);
  matrixQuestion.removeRow(0);
  editor.navigationBar.actions[1].action();
  expect(editor.activeTab).toEqual("creator");
});
test("Editor: get/set locale", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.locale).toBe("en");
  expect(editor.creator.locale).toBe("en");
  expect(editor.model.locale).toBe("");
  expect(editor.navigationBar.actions[3].title).toBe("English");
  editor.locale = "de";
  expect(editor.creator.locale).toBe("de");
  expect(editor.model.locale).toBe("de");
  expect(editor.navigationBar.actions[3].title).toBe("de");
});
