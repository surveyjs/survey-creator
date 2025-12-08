import { ItemValue, QuestionBooleanModel, QuestionCheckboxBase, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, surveyLocalization, settings, MatrixDynamicRowModel, ComponentCollection } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { ICreatorPresetData } from "../src/presets-creator/presets";
import { SurveyModel, Question } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";
import { SurveyCreatorModel } from "../src/creator-base";
import { editorLocalization } from "../src/editorLocalization";
import { QuestionPresetJsonModel } from "../src/presets/preset-question-json";
import { CreatorPresetEditableCaregorizedListConfigurator } from "../src/presets/presets-editable-categorized";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";
test("Change localization strings and then change locale for tabs", () => {
  addLocales();
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  let itemsQuestion = survey.getQuestionByName("tabs_items");
  const item = itemsQuestion.visibleRows[0];
  item.getQuestionByName("title").value = "Designer edit";
  survey.setValue("languages_creator", "de");
  editor.onLocaleChanged();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.tabs.designer).toEqual("Designer edit");
  expect(editor.creator.tabs[0].locTitle.text).toEqual("Designer");
  itemsQuestion = editor.model.getQuestionByName("tabs_items");
  expect(itemsQuestion.value[0].title).toEqual("Designer");
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
