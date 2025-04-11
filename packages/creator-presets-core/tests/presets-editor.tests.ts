import { ItemValue, QuestionBooleanModel, QuestionCheckboxBase, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, surveyLocalization } from "survey-core";
import { QuestionEmbeddedCreatorModel } from "../src/components/embedded-creator";
import { CreatorPresetEditorModel } from "../src/presets-editor";
export * from "../src/preset-question-ranking";
import { PresetItemValue } from "../src/preset-question-ranking";
import { SurveyModel, Question } from "survey-core";
import { SurveyCreatorModel, ICreatorPresetData, QuestionToolbox, editorLocalization } from "survey-creator-core";
import { QuestionPresetAdornerViewModel } from "../src/components/question";
export * from "../src/components/embedded-creator";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

test("Preset edit model, create pages", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.pages).toHaveLength(4);
  expect(survey.visiblePages).toHaveLength(4);
  expect(survey.pages[0].name).toEqual("page_languages");
  expect(survey.pages[1].name).toEqual("page_tabs");
  expect(survey.pages[2].name).toEqual("page_toolbox");
  expect(survey.pages[3].name).toEqual("page_propertyGrid_definition");
});
test("Preset edit model, page component", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const allItemsQuestion = survey.getQuestionByName("tabs_allItems");
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(allItemsQuestion.choices).toHaveLength(6);
  expect(allItemsQuestion.choices[0].value).toEqual("designer");
  expect(allItemsQuestion.choices[4].value).toEqual("json");
  expect(allItemsQuestion.choices[5].value).toEqual("translation");
  expect(allItemsQuestion.choices[0].title).toEqual("Designer");
  expect(allItemsQuestion.choices[4].title).toEqual("JSON Editor");
  expect([].concat(allItemsQuestion.value)).toEqual(["designer", "preview", "logic", "json"]);
  expect(itemsQuestion.visibleChoices).toHaveLength(4);
  expect([].concat(itemsQuestion.value)).toEqual(["designer", "preview", "logic", "json"]);
  expect(activeTabQuestion.visibleChoices).toHaveLength(4);
  expect(activeTabQuestion.value).toEqual("designer");

  allItemsQuestion.value = ["designer", "translation"];
  expect(itemsQuestion.visibleChoices).toHaveLength(2);
  expect(activeTabQuestion.visibleChoices).toHaveLength(2);
  expect([].concat(itemsQuestion.value)).toEqual(["designer", "translation"]);
  expect(activeTabQuestion.visibleChoices).toHaveLength(2);
  expect(activeTabQuestion.value).toEqual("designer");
  activeTabQuestion.value = "translation";
  const resJson1 = editor.getJsonFromSurveyModel();
  expect(resJson1).toEqual({
    tabs: { items: ["designer", "translation"], activeTab: "translation" }
  });

  allItemsQuestion.value = ["designer", "preview", "logic", "json"];
  activeTabQuestion.value = "designer";
  const resJson2 = editor.getJsonFromSurveyModel();
  expect(resJson2).toEqual({});
});
test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "preview", "logic", "json"]);
  itemsQuestion.value = ["preview", "logic"];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  editor.applyFromSurveyModel();
  const creator = editor.creator;
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toEqual("preview");
  expect(creator.tabs[1].id).toEqual("logic");
  expect(creator.activeTab).toBe("logic");
});
test("Preset edit model, tabs page one selected element", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const allItemsQuestion = survey.getQuestionByName("tabs_allItems");
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect([].concat(itemsQuestion.value)).toEqual(["designer", "preview", "logic", "json"]);
  allItemsQuestion.value = ["designer"];
  expect([].concat(itemsQuestion.value)).toEqual(["designer"]);
  expect(itemsQuestion.isVisible).toBeFalsy();
  expect(activeTabQuestion.isVisible).toBeFalsy();
  allItemsQuestion.value = ["designer", "preview"];
  expect([].concat(itemsQuestion.value)).toEqual(["designer", "preview"]);
  expect(itemsQuestion.isVisible).toBeTruthy();
  expect(activeTabQuestion.isVisible).toBeTruthy();
});
test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: ["designer", "logic"], activeTab: "logic" } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "logic"]);
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(activeTabQuestion.value).toEqual("logic");
});
test("Preset edit model, toolbox page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const boolSetupCategoriesQuestion = survey.getQuestionByName("toolbox_mode");
  expect(boolSetupCategoriesQuestion).toBeTruthy();
  expect(boolSetupCategoriesQuestion.value).toEqual("categories");
  expect(boolSetupCategoriesQuestion.isVisible).toBeTruthy();
});
test("Preset edit model, toolbox definition page, validate name/json", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
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
test("Preset edit model, page component", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  expect(editor.creator.tabs).toHaveLength(4);
  const survey = editor.model;
  const allItemsQuestion = survey.getQuestionByName("tabs_allItems");
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  allItemsQuestion.value = ["designer", "logic"];
  itemsQuestion.choices[0].text = "Designer Edit";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.creator.tabs).toHaveLength(2);
  expect(editor.creator.tabs[0].title).toEqual("Designer Edit");
  /* TODO reset the page
    expect(editor.applyFromSurveyModel()).toBeTruthy();
    expect(editor.creator.tabs).toHaveLength(3);
    expect(editor.creator.tabs[0].title).toEqual("Designer");
  */
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
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
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
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
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
  const items = [].concat(itemsQuestion.value);
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
  survey.currentPage = survey.getPageByName("page_toolbox");
  expect(survey.currentPage.name).toEqual("page_toolbox");
  survey.setValue("toolbox_mode", "categories");
  const itemsQuestion = survey.getQuestionByName("toolbox_items");
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(itemsQuestion.choices).toHaveLength(defaultItems.length);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);

  const definitionQuestion = survey.getQuestionByName("toolbox_matrix");
  definitionQuestion.addRow();
  definitionQuestion.addRow();
  const rowDef1 = definitionQuestion.visibleRows[0];
  rowDef1.getQuestionByName("name").value = "name1";
  const rowDef2 = definitionQuestion.visibleRows[1];
  rowDef2.getQuestionByName("name").value = "radiogroup";
  rowDef2.getQuestionByName("title").value = "Radiogroup_New";

  expect(itemsQuestion.choices).toHaveLength(defaultItems.length + 1);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);
  expect(itemsQuestion.choices[0].value).toEqual("radiogroup");
  expect(itemsQuestion.choices[0].text).toEqual("Radiogroup_New");
});
function getPropGridCreator(survey: SurveyModel): SurveyCreatorModel {
  const embeddedCreatorQuestion = <QuestionEmbeddedCreatorModel>survey.getQuestionByName("propertyGrid_definition_propcreator");
  return embeddedCreatorQuestion.embeddedCreator;
}
function getPropGridSurvey(survey: SurveyModel): SurveyModel {
  const creator = getPropGridCreator(survey);
  return creator.survey;
}
test("Preset edit model, property grid, setup", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
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
  expect(panel.isVisible).toBeFalsy();
  selectorQuestion.value = "survey";
  expect(panel.isVisible).toBeTruthy();
  const propGridSurvey = getPropGridSurvey(survey);
  expect(propGridSurvey).toBeTruthy();
  expect(propGridSurvey.getAllPanels()).toHaveLength(10);
  expect(propGridSurvey.getAllPanels()[0].name).toEqual("general");
});
test("Preset edit model, property grid, apply", () => {
  Serializer.findProperty("survey", "title").visible = true;
  Serializer.findProperty("survey", "pages").visible = true;
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  let propGridCreator = getPropGridCreator(survey);
  propGridCreator.JSON = {
    elements: [
      {
        type: "panel", "name": "general",
        elements: [
          { type: "text", name: "locale" },
          { type: "comment", name: "title" },
        ]
      },
      {
        type: "panel", "name": "second1",
        elements: [
          { type: "matrixdynamic", name: "pages" },
          { type: "matrixdynamic", name: "triggers" },
        ]
      }
    ]
  };
  propGridCreator.survey.getPanelByName("second1").name = "second";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const propDef = editor.preset.getJson().propertyGrid?.definition;
  const surveyProps = propDef?.classes["survey"];
  expect(propDef?.autoGenerateProperties).toStrictEqual(false);
  expect(surveyProps?.tabs).toHaveLength(2);
  expect(surveyProps?.properties).toHaveLength(4);

  const propGridSurvey = getPropGridSurvey(survey);
  const panels = propGridSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[1].name).toBe("second");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[1].elements).toHaveLength(2);

  survey.setValue("propertyGrid_definition_selector", "page");
  propGridCreator.JSON = {
    elements: [
      {
        type: "panel", "name": "general",
        elements: [
          { type: "text", name: "name" },
          { type: "comment", name: "title" },
          { type: "comment", name: "description" }
        ]
      }
    ]
  };
  propGridCreator.survey.getQuestionByName("name").title = "Name 1";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const pageProps = propDef?.classes["page"];
  expect(pageProps?.tabs).toHaveLength(0);
  expect(pageProps?.properties).toHaveLength(0);
  const panelBaseProps = propDef?.classes["panelbase"];
  expect(panelBaseProps?.tabs).toHaveLength(1);
  expect(panelBaseProps?.properties).toHaveLength(3);
  const creator = editor.creator;
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.selectElement(creator.survey.pages[0]);
  const panels2 = creator.propertyGrid.getAllPanels();
  expect(panels2).toHaveLength(1);
  expect(panels2[0].elements).toHaveLength(3);
});
test("Preset edit model, make general tab as second tab", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  const propGridCreator = getPropGridCreator(survey);
  propGridCreator.JSON = {
    elements: [
      {
        type: "panel", "name": "logic",
        elements: [
          { type: "comment", name: "visibleIf" },
          { type: "comment", name: "enableIf" }
        ]
      },
      {
        type: "panel", "name": "general",
        elements: [
          { type: "text", name: "name" },
          { type: "dropdown", name: "inputType" },
          { type: "comment", name: "title" },
          { type: "text", name: "placeholder" },
          { type: "comment", name: "description" }
        ]
      }
    ]
  };
  propGridCreator.survey.getQuestionByName("name").title = "Name 1";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propGridSurvey = getPropGridSurvey(survey);
  const panels = propGridSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("logic");
  expect(panels[1].name).toBe("general");
});
test("Preset edit model, include columns types", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  const question = <QuestionDropdownModel>survey.getQuestionByName("propertyGrid_definition_selector");
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@default")).toBeTruthy();
  expect(ItemValue.getItemByValue(question.choices, "matrixdropdowncolumn@checkbox")).toBeTruthy();
});
test("Preset edit model, edit matrixdropdowncolumn@default", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "matrixdropdowncolumn@default");
  const propGridCreator = getPropGridCreator(survey);
  const creatorSurvey = propGridCreator.survey;
  expect(creatorSurvey.getAllPanels()).toHaveLength(5);
  expect(creatorSurvey.getAllPanels()[0].elements).toHaveLength(10);
  expect(creatorSurvey.getAllPanels()[1].elements).toHaveLength(7);
});
test("Preset edit model, property grid & matrixdropdowncolumn@checkbox", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "matrixdropdowncolumn@checkbox");
  const propGridCreator = getPropGridCreator(survey);
  propGridCreator.JSON = {
    elements: [
      {
        type: "panel", "name": "general",
        elements: [
          { type: "text", name: "name" },
          { type: "comment", name: "title" }
        ]
      },
      {
        type: "panel", "name": "choices",
        elements: [
          { type: "matrixdynamic", name: "choices" },
          { type: "boolean", name: "showSelectAllItem" }
        ]
      }
    ]
  };
  propGridCreator.survey.getQuestionByName("name").title = "Name 1";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "matrixdynamic", name: "q1", columns: [{ name: "col1", cellType: "checkbox" }] }] };
  creator.selectElement(creator.survey.getQuestionByName("q1").columns[0]);
  const propGridSurvey = getPropGridSurvey(survey);
  let panels = propGridSurvey.getAllPanels();
  expect(panels).toHaveLength(2);
  expect(panels[0].name).toBe("general");
  expect(panels[0].elements).toHaveLength(2);
  expect(panels[0].elements[0].name).toBe("name");
  expect(panels[0].elements[1].name).toBe("title");
  expect(panels[1].elements).toHaveLength(2);
  expect(panels[1].elements[0].name).toBe("choices");
  expect(panels[1].elements[1].name).toBe("showSelectAllItem");
});
test("Editor: activeTab & navigationBar", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.activeTab).toEqual("preset");
  expect(editor.navigationBar.actions[0].active).toBeTruthy();
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
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
  const matrixQuestion = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.isVisible).toBeTruthy();
  matrixQuestion.addRow();
  survey.currentPageNo = 0;
  expect(survey.currentPageNo).toBe(0);
  editor.navigationBar.actions[1].action();
  expect(editor.activeTab).toEqual("preset");
  expect(survey.currentPageNo).toBe(2);
  matrixQuestion.removeRow(0);
  editor.navigationBar.actions[1].action();
  expect(editor.activeTab).toEqual("creator");
});
test("Preset edit model, edit tabs title", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  expect(itemsQuestion.choices).toHaveLength(6);
  const item = <PresetItemValue>itemsQuestion.choices[0];
  expect(item.getType()).toEqual("presetitemvalue");
  expect(item.value).toEqual("designer");
  expect(item.locText.localizationName).toEqual("tabs.designer");
  expect(item.text).toEqual("Designer");
});
test("Change localization strings for tabs", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const item = <PresetItemValue>itemsQuestion.choices[0];
  item.text = "Designer edit";
  editor.applyFromSurveyModel();
  let loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.tabs.designer).toEqual("Designer edit");
  expect(loc.en.tabs.logic).toBeFalsy();
  expect(editor.creator.tabs[0].locTitle.text).toEqual("Designer edit");
  item.locText.text = "";
  expect(item.text).toBe("Designer");
  editor.applyFromSurveyModel();
  loc = editor.json.localization;
  expect(loc).toBeFalsy();
});
test("Change localization strings for toolbox (no categories)", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "items");
  const question = <QuestionRankingModel>survey.getQuestionByName("toolbox_items");
  expect(question.isVisible).toBeTruthy();
  const textItem = ItemValue.getItemByValue(question.choices, "text");
  textItem.text = "Text item";
  editor.applyFromSurveyModel();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.qt.text).toEqual("Text item");
  expect(loc.en.qt.checkbox).toBeFalsy();
});
test("Change localization strings for toolbox (categories)", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  matrix.visibleRows[0].showDetailPanel();
  const question = <QuestionRankingModel>matrix.visibleRows[0].detailPanel.getQuestionByName("items");
  const textItem = ItemValue.getItemByValue(question.choices, "radiogroup");
  textItem.text = "Radio item";
  editor.applyFromSurveyModel();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.qt.radiogroup).toEqual("Radio item");
  expect(loc.en.qt.text).toBeFalsy();
});
test("Change localization strings for toolbox categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  survey.setValue("toolbox_showCategoryTitles", true);
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const row1 = matrix.visibleRows[0];
  expect(row1.getQuestionByName("category").value).toBe("choice");
  expect(row1.getQuestionByName("category").isReadOnly).toBeTruthy();
  expect(row1.getQuestionByName("title").value).toBe("Choice Questions");
  expect(row1.getQuestionByName("title").isReadOnly).toBeFalsy();
  row1.getQuestionByName("title").value = "Choice Questions edit";
  editor.applyFromSurveyModel();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.toolboxCategories.text).toBeFalsy();
  expect(loc.en.toolboxCategories.choice).toEqual("Choice Questions edit");
});
test("Toolbox categories, show header and showcolumn title column if show categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.getColumnByName("title").visible).toBeFalsy();
  survey.setValue("toolbox_showCategoryTitles", true);
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.getColumnByName("title").visible).toBeTruthy();
  survey.setValue("toolbox_showCategoryTitles", false);
  expect(matrix.getColumnByName("title").visible).toBeFalsy();
});
test("Preset edit model, Set question name title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  const propGridCreator = getPropGridCreator(survey);
  const q = propGridCreator.survey.getQuestionByName("name");
  expect(q).toBeTruthy();
  expect(q.title).toBe("Question name");
  expect(q.description).toBe("A question ID that is not visible to respondents.");
});
test("Preset edit model, Keep description on deleting the question", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  const propGridCreator = getPropGridCreator(survey);
  expect(propGridCreator.toolbox.items).toHaveLength(1);
  const q = propGridCreator.survey.getQuestionByName("name");
  expect(q).toBeTruthy();
  propGridCreator.selectElement(q);
  propGridCreator.deleteCurrentElement();
  expect(propGridCreator.survey.getQuestionByName("name")).toBeFalsy();
  expect(propGridCreator.toolbox.items).toHaveLength(2);
  const json = propGridCreator.toolbox.items[1].json;
  expect(json.description).toEqual("A question ID that is not visible to respondents.");
  expect(json.descriptionLocation).toBeFalsy();
});
test("Preset edit model, Change localization strings title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  const propGridCreator = getPropGridCreator(survey);
  propGridCreator.JSON = {
    elements: [
      {
        type: "panel", "name": "general",
        elements: [
          { type: "text", name: "name" },
          { type: "dropdown", name: "inputType" },
          { type: "comment", name: "title" },
          { type: "text", name: "placeholder" },
          { type: "comment", name: "description" }
        ]
      }
    ]
  };
  propGridCreator.survey.getQuestionByName("name").title = "My Name";
  propGridCreator.survey.getQuestionByName("inputType").title = "My Input Type";
  propGridCreator.survey.getQuestionByName("inputType").description = "My Input Type description";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.pe.question).toBeTruthy();
  expect(loc.en.pe.text).toBeTruthy();
  expect(loc.en.pe.panel).toBeFalsy();
  expect(loc.en.pe.question.name).toEqual("My Name");
  expect(loc.en.pe.text.inputType).toEqual("My Input Type");
  expect(loc.en.pehelp.text).toBeTruthy();
  expect(loc.en.pehelp.text.inputType).toEqual("My Input Type description");

  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propGridSurvey = getPropGridSurvey(survey);
  const panels = propGridSurvey.getAllPanels();
  expect(panels).toHaveLength(1);
  expect(panels[0].name).toBe("general");
  const elements = panels[0].elements;
  expect(elements).toHaveLength(5);
  expect(elements[0].name).toBe("name");
  expect(elements[1].name).toBe("inputType");
  expect((<Question>elements[0]).title).toEqual("My Name");
  expect((<Question>elements[1]).title).toEqual("My Input Type");
  expect((<Question>elements[1]).description).toEqual("My Input Type description");
});
test("Preset edit model, Change localization strings title&description", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "text");
  const propGridCreator = getPropGridCreator(survey);
  propGridCreator.survey.getPanelByName("general").title = "General Edit";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.pe.tabs).toBeTruthy();
  expect(loc.en.pe.tabs.general).toEqual("General Edit");

  const creator = editor.creator;
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propGridSurvey = getPropGridSurvey(survey);
  expect(propGridSurvey.getPanelByName("general").title).toEqual("General Edit");
});
test("Change localization strings and then change locale for tabs", () => {
  addLocales();
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  let itemsQuestion = survey.getQuestionByName("tabs_items");
  const item = <PresetItemValue>itemsQuestion.choices[0];
  item.text = "Designer edit";
  survey.setValue("languages_creator", "de");
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.tabs.designer).toEqual("Designer edit");
  expect(editor.creator.tabs[0].locTitle.text).toEqual("Designer");
  itemsQuestion = editor.model.getQuestionByName("tabs_items");
  expect(itemsQuestion.choices[0].text).toEqual("Designer");
});
test("Preset edit model, Property grid toolbox", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  const propGridCreator = getPropGridCreator(survey);
  expect(propGridCreator.toolbox.actions).toHaveLength(1);
  const valPanel = propGridCreator.survey.getPanelByName("validation");
  expect(valPanel).toBeTruthy();
  propGridCreator.deleteElement(valPanel);
  expect(propGridCreator.toolbox.actions).toHaveLength(4);
  propGridCreator.selectElement(propGridCreator.survey.getQuestionByName("title"));
  propGridCreator.clickToolboxItem(propGridCreator.toolbox.getItemByName("panel").json);
  propGridCreator.clickToolboxItem(propGridCreator.toolbox.getItemByName("panel").json);
  const newPanel1 = propGridCreator.survey.getPanelByName("category1");
  const newPanel2 = propGridCreator.survey.getPanelByName("category2");
  expect(newPanel1).toBeTruthy();
  expect(newPanel2).toBeTruthy();
  expect(newPanel1.title).toEqual("New Category");
  propGridCreator.selectElement(newPanel2);
  propGridCreator.clickToolboxItem(propGridCreator.toolbox.getItemByName("autoFocusFirstError").json);
  expect(newPanel2.elements).toHaveLength(1);
  expect(newPanel2.questions[0].name).toEqual("autoFocusFirstError");
  expect(propGridCreator.toolbox.actions).toHaveLength(3);
});
test("Preset edit model, Property grid change the new category name", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  const propGridCreator = getPropGridCreator(survey);
  expect(propGridCreator.toolbox.actions).toHaveLength(1);
  const valPanel = propGridCreator.survey.getPanelByName("validation");
  expect(valPanel).toBeTruthy();
  propGridCreator.deleteElement(valPanel);
  expect(propGridCreator.toolbox.actions).toHaveLength(4);
  propGridCreator.selectElement(propGridCreator.survey.getQuestionByName("title"));
  propGridCreator.clickToolboxItem(propGridCreator.toolbox.getItemByName("panel").json);
  const newPanel1 = propGridCreator.survey.getPanelByName("category1");
  expect(newPanel1).toBeTruthy();
  const panel1Adorner = new QuestionPresetAdornerViewModel(editor.creator, newPanel1, null);
  const action1 = panel1Adorner.actionContainer.getActionById("svc_category_name");
  expect(action1).toBeTruthy();
  const locCategoryName1 = action1.locTitle;
  expect(locCategoryName1.text).toBe("category1");
  expect(action1.enabled).toBeTruthy();
  locCategoryName1.text = "my_new_category";
  expect(locCategoryName1.text).toBe("my_new_category");
  expect(newPanel1.name).toBe("my_new_category");

  const newPanel2 = propGridCreator.survey.getPanelByName("general");
  const panel2Adorner = new QuestionPresetAdornerViewModel(editor.creator, newPanel2, null);
  const action2 = panel2Adorner.actionContainer.getActionById("svc_category_name");
  expect(action2).toBeTruthy();
  const locCategoryName2 = action2.locTitle;
  expect(locCategoryName2.text).toBe("general");
  expect(action2.enabled).toBeFalsy();
});
test("Preset edit model, Property grid change the new category title and then name", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_propertyGrid_definition");
  survey.setValue("propertyGrid_definition_selector", "survey");
  const propGridCreator = getPropGridCreator(survey);
  propGridCreator.selectElement(propGridCreator.survey.getQuestionByName("title"));
  propGridCreator.clickToolboxItem(propGridCreator.toolbox.getItemByName("panel").json);
  const newPanel = propGridCreator.survey.getPanelByName("category1");
  newPanel.title = "My Category";

  let propGridSurvey = getPropGridSurvey(survey);
  let categoryPanel = propGridSurvey.getPanelByName("category1");
  expect(categoryPanel).toBeTruthy();
  expect(categoryPanel.title).toBe("My Category");

  const panel1Adorner = new QuestionPresetAdornerViewModel(editor.creator, newPanel, null);
  const action1 = panel1Adorner.actionContainer.getActionById("svc_category_name");
  expect(action1).toBeTruthy();
  const locCategoryName1 = action1.locTitle;
  locCategoryName1.text = "my_new_category";
  propGridSurvey = getPropGridSurvey(survey);
  expect(propGridSurvey.getPanelByName("category1")).toBeFalsy();
  categoryPanel = propGridSurvey.getPanelByName("my_new_category");
  expect(categoryPanel).toBeTruthy();
  expect(categoryPanel.title).toBe("My Category");
});
function addLocale(name: string): void {
  if (!surveyLocalization.locales[name]) {
    surveyLocalization.locales[name] = {};
    surveyLocalization["localeNames"][name] = name.toUpperCase();
    surveyLocalization["localeNamesInEnglish"][name] = name.toUpperCase() + "-English";
  }
}
function addLocales(): void {
  if (!editorLocalization.locales["de"]) {
    editorLocalization.locales["de"] = { survey: { edit: "Bearbeiten" }, tabs: { designer: "Designer" } };
  }
  addLocale("de");
  addLocale("fr");
  addLocale("it");
  addLocale("bg");
}
test("Preset edit model, Languages tab", () => {
  addLocales();
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const dropdownQuestion = <QuestionDropdownModel>survey.getQuestionByName("languages_creator");
  const surveyLocalesQuestion = <QuestionCheckboxModel>survey.getQuestionByName("languages_surveyLocales");
  expect(dropdownQuestion.choices.length > 0).toBeTruthy();
  expect(surveyLocalesQuestion.choices.length > 0).toBeTruthy();
  expect(dropdownQuestion.isEmpty()).toBeTruthy();
  expect(surveyLocalesQuestion.isAllSelected).toBeTruthy();
  dropdownQuestion.value = "de";
  surveyLocalesQuestion.value = ["de", "fr"];
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.json.languages?.creator).toBe("de");
  expect(editor.json.languages?.surveyLocales).toStrictEqual(["de", "fr"]);
  expect(editor.creator.locale).toBe("de");
  expect(surveyLocalization.supportedLocales).toStrictEqual(["de", "fr"]);

  dropdownQuestion.clearValue();
  surveyLocalesQuestion.selectAll();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.creator.locale).toBeFalsy();
  expect(surveyLocalization.supportedLocales).toStrictEqual([]);
});
test("Preset edit model, Languages tab - show in English", () => {
  addLocales();
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const surveyLocalesQuestion = <QuestionCheckboxModel>survey.getQuestionByName("languages_surveyLocales");
  const showInEnglishQuestion = <QuestionBooleanModel>survey.getQuestionByName("languages_surveyUseEnglishNames");

  expect(showInEnglishQuestion.value).toBe(false);
  const item = ItemValue.getItemByValue(surveyLocalesQuestion.choices, "de");
  expect(item.text).toBe("DE");
  showInEnglishQuestion.value = true;
  expect(item.text).toBe("DE-English");
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.json.languages?.useEnglishNames).toBeTruthy();
  expect(surveyLocalization.showNamesInEnglish).toBeTruthy();

  surveyLocalization.showNamesInEnglish = false;
});
test("Preset edit model, toolbox categories, restore after creator locale changed", () => {
  addLocales();
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const rowCount = matrix.rowCount;
  expect(rowCount > 1).toBeTruthy();
  survey.setValue("toolbox_mode", "items");
  survey.getQuestionByName("languages_creator").value = "de";
  expect(editor.creator.locale).toBe("de");
  survey.setValue("toolbox_mode", "categories");
  expect(matrix.rowCount).toBe(rowCount);
});
test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  itemsQuestion.value = ["preview", "logic"];
  const nextBtn = survey.navigationBar.getActionById("sv-nav-next");
  expect(nextBtn.isVisible).toBeTruthy();
  survey.currentPageNo = survey.visiblePages.length - 1;
  expect(survey.isLastPage).toBeTruthy();
  expect(nextBtn.isVisible).toBeTruthy();
  nextBtn.action();
  expect(survey.isFirstPage).toBeTruthy();
});
test("Preset edit model, save creator JSON on applying new preset", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  editor.creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs).toEqual(["designer", "preview", "logic", "json"]);
  itemsQuestion.value = ["preview", "logic"];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  editor.applyFromSurveyModel();
  const creator = editor.creator;
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
});
test("Preset edit model, set json property", () => {
  const editor = new CreatorPresetEditorModel({});
  editor.activeTab = "results";
  const jsonQuestion = editor.resultModel.getQuestionByName("json");
  expect(jsonQuestion.value).toBe("{}");
  const json = {
    "tabs": {
      "items": [
        "designer",
        "preview"
      ],
      "activeTab": "preview"
    }
  };
  editor.json = json;
  expect(JSON.parse(jsonQuestion.value)).toMatchObject(json);
  expect(editor.creator.tabs).toHaveLength(2);
  expect(editor.creator.activeTab).toBe("preview");
});
