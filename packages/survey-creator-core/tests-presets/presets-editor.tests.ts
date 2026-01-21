import { QuestionMatrixDynamicModel, glc, hasLicense, settings } from "survey-core";
import { CreatorPresetEditorModel } from "../src/ui-preset-editor/presets-editor";
import { UIPresetEditor } from "../src/ui-preset-editor/presets-plugin";
import { SurveyCreatorModel } from "../src/creator-base";
import { getLocString } from "../src/editorLocalization";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

jest.mock("survey-core", () => {
  const originalModule = jest.requireActual("survey-core");
  return {
    ...originalModule,
    hasLicense: jest.fn(() => false),
    glc: jest.fn(() => undefined)
  };
});

test("Preset edit model, create pages", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.pages).toHaveLength(5);
  expect(survey.visiblePages).toHaveLength(5);
  expect(survey.pages[0].name).toEqual("page_languages");
  expect(survey.pages[1].name).toEqual("page_tabs");
  expect(survey.pages[2].name).toEqual("page_toolbox");
  expect(survey.pages[3].name).toEqual("page_propertyGrid");
  expect(survey.pages[4].name).toEqual("page_options");
});
test("Preset edit model, page component", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const hiddenItemsQuestion = survey.getQuestionByName("tabs_matrix");
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(itemsQuestion.value).toHaveLength(4);
  expect(hiddenItemsQuestion.value).toHaveLength(2);

  expect(itemsQuestion.value[0].name).toEqual("designer");
  expect(itemsQuestion.value[3].name).toEqual("json");
  expect(hiddenItemsQuestion.value[1].name).toEqual("translation");
  expect(itemsQuestion.value[0].title).toEqual("Designer");
  expect(itemsQuestion.value[3].title).toEqual("JSON Editor");
  expect(itemsQuestion.value.map(r => r.name)).toEqual(["designer", "preview", "logic", "json"]);
  expect(activeTabQuestion.visibleChoices).toHaveLength(4);
  expect(activeTabQuestion.value).toEqual("designer");

  itemsQuestion.value = [{ name: "designer", iconName: "i-des" }, { name: "translation", iconName: "i-trans" }];
  expect(itemsQuestion.value).toHaveLength(2);
  expect(activeTabQuestion.visibleChoices).toHaveLength(2);
  expect(itemsQuestion.value.map(r => r.name)).toEqual(["designer", "translation"]);
  expect(activeTabQuestion.visibleChoices).toHaveLength(2);
  expect(activeTabQuestion.value).toEqual("designer");
  activeTabQuestion.value = "translation";
  const resJson1 = editor.getJsonFromSurveyModel();
  expect(resJson1).toEqual({
    tabs: { items: [{ name: "designer", iconName: "i-des" }, { name: "translation", iconName: "i-trans" }], activeTab: "translation" }
  });

  itemsQuestion.value = [{ name: "designer" }, { name: "preview" }, { name: "logic" }, { name: "json" }];
  activeTabQuestion.value = "designer";
  const resJson2 = editor.getJsonFromSurveyModel();
  expect(resJson2).toEqual({});
});

test("Preset edit model, page component 2", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  expect(editor.creator.tabs).toHaveLength(4);
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  itemsQuestion.value = [{ name: "designer" }, { name: "logic" }];
  itemsQuestion.visibleRows[0].getQuestionByName("title").value = "Designer Edit";
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.creator.tabs).toHaveLength(2);
  expect(editor.creator.tabs[0].title).toEqual("Designer Edit");
  /* TODO reset the page
    expect(editor.applyFromSurveyModel()).toBeTruthy();
    expect(editor.creator.tabs).toHaveLength(3);
    expect(editor.creator.tabs[0].title).toEqual("Designer");
  */
});
// test("Preset edit model, toolbox definition page, default values", () => {
//   const presetJson = {
//     toolbox: {
//       definition: [
//         { name: "name1", json: { type: "text", inputType: "date" } },
//         { name: "name2", iconName: "icon2", json: { type: "text", inputType: "number" } },
//         { name: "name3", title: "Name 3", tooltip: "Name 3 tooltip" }
//       ]
//     }
//   };
//   const editor = new CreatorPresetEditorModel(presetJson);
//   const survey = editor.model;
//   const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
//   const val = matrixQuestion.value;
//   expect(val).toHaveLength(3);
//   expect(val[0]["name"]).toEqual("name1");
//   expect(val[1]["name"]).toEqual("name2");
//   expect(val[2]["name"]).toEqual("name3");
//   expect(val[0]["title"]).toBeFalsy();
//   expect(val[0]["iconName"]).toBeFalsy();
//   expect(val[0]["tooltip"]).toBeFalsy();
//   expect(val[1]["iconName"]).toEqual("icon2");
//   expect(val[2]["title"]).toEqual("Name 3");
//   expect(val[2]["tooltip"]).toEqual("Name 3 tooltip");
//   const definition = presetJson.toolbox.definition;
//   const json1 = JSON.parse(val[0]["json"]);
//   expect(json1).toEqual(definition[0].json);
//   const json2 = JSON.parse(val[1]["json"]);
//   expect(json2).toEqual(definition[1].json);
//   expect(val[2]["json"]).toBeFalsy();
// });

// function getPropGridCreator(survey: SurveyModel): SurveyCreatorModel {
//   const embeddedCreatorQuestion = <QuestionEmbeddedCreatorModel>survey.getQuestionByName("propertyGrid_definition_propcreator");
//   return embeddedCreatorQuestion.embeddedCreator;
// }
// function getPropGridSurvey(survey: SurveyModel): SurveyModel {
//   const creator = getPropGridCreator(survey);
//   return creator.survey;
// }

// test("Editor: activeTab & navigationBar", () => {
//   const editor = new CreatorPresetEditorModel();
//   expect(editor.activeTab).toEqual("preset");
//   expect(editor.navigationBar.actions[0].active).toBeTruthy();
//   const survey = editor.model;
//   const itemsQuestion = survey.getQuestionByName("tabs_items");
//   itemsQuestion.value = [{ name: "designer" }, { name: "translation" }];
//   editor.navigationBar.actions[1].action();
//   expect(editor.activeTab).toEqual("creator");
//   expect(editor.creator.tabs).toHaveLength(2);
//   expect(editor.creator.tabs[0].id).toEqual("designer");
//   expect(editor.creator.tabs[1].id).toEqual("translation");
// });
// test("Editor: do not allow to change the activeTab if there is an error", () => {
//   const editor = new CreatorPresetEditorModel();
//   expect(editor.activeTab).toEqual("preset");
//   const survey = editor.model;
//   const matrixQuestion = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_matrix");
//   expect(matrixQuestion.isVisible).toBeTruthy();
//   matrixQuestion.addRow();
//   survey.currentPageNo = 0;
//   expect(survey.currentPageNo).toBe(0);
//   editor.navigationBar.actions[1].action();
//   expect(editor.activeTab).toEqual("preset");
//   expect(survey.currentPageNo).toBe(2);
//   matrixQuestion.removeRow(0);
//   editor.navigationBar.actions[1].action();
//   expect(editor.activeTab).toEqual("creator");
// });

test("Use default preset json", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  let itemsQuestion = survey.getQuestionByName("tabs_items");
  const itemsValue = [...itemsQuestion.value];
  itemsValue.splice(itemsValue.length - 1, 1);
  itemsQuestion.value = itemsValue;
  expect(editor.json.tabs.items.map(t => t.name)).toEqual(["designer", "preview", "logic"]);
  const newDefaultJson = editor.defaultJson;

  const editor2 = new CreatorPresetEditorModel({}, null, newDefaultJson);
  expect(editor2.json.tabs).toBeUndefined();
});

test("Preset edit model, save creator JSON on applying new preset", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  editor.creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs.map(t => t.name)).toEqual(["designer", "preview", "logic", "json"]);
  itemsQuestion.value = [{ name: "preview" }, { name: "logic" }];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  editor.applyFromSurveyModel();
  const creator = editor.creator;
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
});
test("Preset edit model, set json property", () => {
  const editor = new CreatorPresetEditorModel({});
  const jsonQuestion = editor.resultModel.getQuestionByName("json");
  expect(jsonQuestion.value).toBe("{}");
  const json = {
    "tabs": {
      "items": [
        { name: "designer" },
        { name: "preview" }
      ],
      "activeTab": "preview"
    }
  };
  editor.json = json;
  expect(JSON.parse(jsonQuestion.value)).toMatchObject(json);
  expect(editor.creator.tabs).toHaveLength(2);
});
test("Reset all changes", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  expect(editor.json).toEqual({});
  (survey.getQuestionByName("tabs_items") as QuestionMatrixDynamicModel).removeRowByIndex(1);
  expect(editor.json.tabs).toBeDefined();

  survey.getQuestionByName("toolbox_mode").value = "items";
  expect(editor.json.toolbox.categories).toBeDefined();
  survey.getQuestionByName("toolbox_showCategoryTitles").value = true;
  expect(editor.json.toolbox.showCategoryTitles).toBeDefined();
  (survey.getQuestionByName("toolbox_items") as QuestionMatrixDynamicModel).removeRowByIndex(1);

  editor.resetToDefaults();
  expect(editor.json).toEqual({});
});
test("Icon change", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const tabs = (survey.getQuestionByName("tabs_items") as QuestionMatrixDynamicModel);
  const row = tabs.visibleRows.filter(r => r.value.name == "designer")[0];
  const renderedRow = tabs.renderedTable.rows.filter(r => r.row == row)[0];
  const iconAction = renderedRow.cells[1].item.value.actions[0];
  expect(iconAction.id).toBe("icon-action");
  expect(iconAction.iconName).toBe("icon-config");

  const tabsValue = JSON.parse(JSON.stringify(tabs.value));
  tabsValue.filter(v => v.name == "designer")[0].iconName = "icon-test";
  tabs.value = tabsValue;
  expect(iconAction.iconName).toBe("icon-test");
});

test("Icon default", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const matrix = (survey.getQuestionByName("toolbox_matrix") as QuestionMatrixDynamicModel);
  matrix.addRow();

  const renderedRow = matrix.renderedTable.rows.filter(r => r.row == matrix.visibleRows[0])[0];
  const iconAction = renderedRow.cells[1].item.value.actions[0];
  expect(iconAction.id).toBe("icon-action");
  expect(iconAction.iconName).toBe("square-dashed-24x24");
});

test("Delete active tab", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(activeTabQuestion.value).toEqual("designer");

  itemsQuestion.value = [{ name: "preview" }, { name: "logic" }, { name: "json" }];
  expect(activeTabQuestion.value).toEqual("preview");
});

test("Preset plugin, getLicenseText method", () => {
  const creator = new SurveyCreatorModel({});
  const plugin = new UIPresetEditor(creator);
  const hasLicenseMock = hasLicense as jest.MockedFunction<typeof hasLicense>;
  const glcMock = glc as jest.MockedFunction<typeof glc>;

  const result1 = plugin.getLicenseText(false, "");
  expect(result1).toBeTruthy();
  expect(result1).toEqual(getLocString("presets.plugin.licenseCreator"));

  const result1_1 = plugin.getLicenseText(false, "03/05/2023");
  expect(result1_1).toBeTruthy();
  expect(result1_1).toEqual(getLocString("presets.plugin.licenseCreator2").replace("{date}", "03/05/2023"));

  hasLicenseMock.mockReturnValue(false);
  const result2 = plugin.getLicenseText(true, "");
  expect(result2).toBeTruthy();
  expect(result2).toEqual(getLocString("presets.plugin.license"));
  expect(hasLicenseMock).toHaveBeenCalledWith(8);

  const dateMock = { toLocaleDateString: () => "13/12/2023" };
  glcMock.mockReturnValue(dateMock);
  const result2_1 = plugin.getLicenseText(true, "");
  expect(result2_1).toBeTruthy();
  expect(result2_1).toEqual(getLocString("presets.plugin.license2").replace("{date}", "13/12/2023"));

  glcMock.mockReturnValue(dateMock);
  const result2_2 = plugin.getLicenseText(false, "13/12/2024");
  expect(result2_2).toBeTruthy();
  expect(result2_2).toEqual(getLocString("presets.plugin.license2").replace("{date}", "13/12/2023"));

  hasLicenseMock.mockReturnValue(true);
  const result3 = plugin.getLicenseText(true, "");
  expect(result3).toEqual("");
  expect(hasLicenseMock).toHaveBeenCalledWith(8);

  hasLicenseMock.mockClear();
});

test("Preset plugin, menu title should not be changed", () => {
  const creator = new SurveyCreatorModel({});
  const plugin = new UIPresetEditor(creator);
  plugin.activate();
  expect(plugin.model.navigationBar.actions.map(a => a.id)).toEqual(["presets-pages", "presets-edit", "presets-quit"]);
  const oldTitle = plugin.model.navigationBar.actions[1].title;
  const list = plugin.model.navigationBar.actions[1].popupModel.contentComponentData.model;
  const testAction = list.getActionById("reset");
  testAction.action = () => { };
  list.onItemClick(testAction);
  expect(plugin.model.navigationBar.actions[1].title).toEqual(oldTitle);
});

