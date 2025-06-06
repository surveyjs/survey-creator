import { ItemValue, QuestionBooleanModel, QuestionCheckboxBase, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, surveyLocalization } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { ICreatorPresetData } from "../src/presets-creator/presets";
import { SurveyModel, Question } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";
import { SurveyCreatorModel } from "../src/creator-base";
import { editorLocalization } from "../src/editorLocalization";
import { QuestionPresetJsonModel } from "../src/presets/preset-question-json";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

test("Preset edit, toolbox - remove item", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  expect(categQuestion.visibleRows).toHaveLength(5);
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "comment", "multipletext"]);
  itemsQuestion.removeRow(1);
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "multipletext"]);
  expect(matrixQuestion.visibleRows).toHaveLength(1);
  expect(matrixQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["comment"]);
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  expect(editor.json.toolbox).toBeDefined();
  const length = editor.json.toolbox.definition.length;
  expect(editor.json.toolbox.definition.map(i => i.name)).toContain("text");
  expect(editor.json.toolbox.definition.map(i => i.name)).not.toContain("comment");
  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["text", "multipletext"]);
  itemsQuestion.removeRow(0);
  editor.applyFromSurveyModel();
  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["multipletext"]);
  expect(editor.json.toolbox.definition.length).toBe(length - 1);
});

test("Preset edit, toolbox - change item", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  itemsQuestion.visibleRows[1].setValue("iconName", "icon-test");
  editor.applyFromSurveyModel();
  expect(editor.json.toolbox.definition.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test");
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].iconName).toBeUndefined();
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].tooltip).toBeUndefined();
  itemsQuestion.visibleRows[0].showDetailPanel();
  itemsQuestion.visibleRows[0].getQuestionByName("tooltip").value = "tooltip-test";
  editor.applyFromSurveyModel();
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].tooltip).toEqual("tooltip-test");
});

test("Preset edit, toolbox - change category", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  expect(editor.json.toolbox).toBeUndefined();
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();

  const row2 = categQuestion.visibleRows[2];
  row2.showDetailPanel();

  const itemsQuestion = row.getQuestionByName("items");
  const itemsQuestion2 = row2.getQuestionByName("items");

  const value = [...itemsQuestion.value];
  const value2 = [...itemsQuestion2.value];

  value.push({ ...value2[0] });
  value2.splice(0, 1);

  itemsQuestion.value = value;
  itemsQuestion2.value = value2;
  editor.applyFromSurveyModel();

  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["text", "comment", "multipletext", "panel"]);
  expect(editor.json.toolbox.categories[2].items).toStrictEqual(["paneldynamic"]);
});

test("Preset edit, toolbox - switch to items mode", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  const innerRow = itemsQuestion.visibleRows[1];
  innerRow.showDetailPanel();
  innerRow.detailPanel.getQuestionByName("iconName").value = "icon-test";

  survey.getQuestionByName("toolbox_mode").value = "items";
  const allItemsQuestion = survey.getQuestionByName("toolbox_items");
  const itemRow = allItemsQuestion.visibleRows.filter(r => r.getValue("name") == "comment")[0];
  itemRow.showDetailPanel();
  expect(itemRow.getValue("iconName")).toBe("icon-test");

  itemRow.getQuestionByName("iconName").value = "icon-test2";
  editor.applyFromSurveyModel();
  expect(editor.json.toolbox.definition.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test2");
});

// test("Preset edit, toolbox - validate json", () => {
//   const editor = new CreatorPresetEditorModel();
//   const survey = editor.model;
//   survey.getQuestionByName("toolbox_mode").value = "items";

//   const allItemsQuestion = survey.getQuestionByName("toolbox_items");
//   const itemRow = allItemsQuestion.visibleRows.filter(r => r.getValue("name") == "comment")[0];
//   itemRow.showDetailPanel();
//   (itemRow.getQuestionByName("json") as QuestionPresetJsonModel).value = { invalid: "json" };
//   expect(survey.validate()).toBeFalsy();
//   (itemRow.getQuestionByName("json") as QuestionPresetJsonModel).value = { type: "text" };
//   expect(survey.validate()).toBeTruthy();
// });