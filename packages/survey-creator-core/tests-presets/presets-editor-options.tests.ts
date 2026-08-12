import { SurveyModel } from "survey-core";
import { CreatorPresetEditableOptions } from "../src/presets/presets-editable-options";
import { CreatorPresetBase } from "../src/presets-creator/presets-base";
import { SurveyCreatorModel } from "../src/creator-base";
import { CreatorPresetEditorModel } from "../src/ui-preset-editor/presets-editor";
import { CreatorTester } from "../tests/creator-tester";
import { UIPreset } from "../src/ui-presets-creator/presets";

test("CreatorPresetEditableOptions - check questions and creator properties binding", () => {
  const editor = new CreatorPresetEditorModel();

  const survey = editor.model;
  expect(editor.creator.allowZoom).toBeTruthy();
  expect(survey.getQuestionByName("options_allowZoom").value).toBeTruthy();
  survey.getQuestionByName("options_allowZoom").value = false;
  expect(editor.creator.allowZoom).toBeFalsy();

  expect(editor.creator.previewAllowSimulateDevices).toBeTruthy();
  expect(survey.getQuestionByName("options_previewAllowSimulateDevices").value).toBeTruthy();
  survey.getQuestionByName("options_previewAllowSimulateDevices").value = false;
  expect(editor.creator.previewAllowSimulateDevices).toBeFalsy();
});

test("CreatorPresetEditableOptions - check export", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.json).toEqual({});
  const survey = editor.model;
  expect(survey.getQuestionByName("options_allowZoom").value).toBeTruthy();
  survey.getQuestionByName("options_allowZoom").value = false;
  expect(editor.json.options.allowZoom).toEqual(false);
  survey.getQuestionByName("options_allowZoom").value = true;
  expect(editor.json).toEqual({});
});

test("CreatorPresetEditableOptions - check import", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getQuestionByName("options_allowZoom").value).toBeTruthy();
  editor.json = { options: { allowZoom: false } };
  expect(survey.getQuestionByName("options_allowZoom").value).toBeFalsy();
});

test("CreatorPresetEditableOptions - forbiddenNestedElements init", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanel").value.map(v => v)).toEqual([]);
  editor.json = { options: { forbiddenNestedElements: { panel: ["boolean", "text"] } } };
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanel").value.map(v => v)).toEqual(["boolean", "text"]);
});

test("CreatorPresetEditableOptions - forbiddenNestedElements", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanel").value).toHaveLength(0);
  editor.json = { options: { forbiddenNestedElements: { panel: ["boolean", "text"], paneldynamic: ["slider", "matrix"] } } };
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanel").value.map(v => v)).toEqual([
    "boolean",
    "text",
  ]);
});

test("CreatorPresetEditableOptions - forbiddenNestedElements initial values", () => {
  const creator = new CreatorTester();
  creator.forbiddenNestedElements = { panel: ["boolean", "text"], paneldynamic: ["slider", "matrix"] };
  const editor = new CreatorPresetEditorModel(undefined, creator);
  const survey = editor.model;
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanelDynamic").value.slice()).toEqual(["slider", "matrix"]);
  expect(survey.getQuestionByName("options_forbiddenNestedElementsPanel").value.slice()).toEqual(["boolean", "text"]);
});

test("CreatorPresetEditableOptions - forbiddenNestedElements export", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("options_forbiddenNestedElementsPanel").value = ["boolean", "text"];
  survey.getQuestionByName("options_forbiddenNestedElementsPanelDynamic").value = ["slider", "matrix"];
  expect(editor.json.options.forbiddenNestedElements.panel).toEqual(["boolean", "text"]);
  expect(editor.json.options.forbiddenNestedElements.paneldynamic).toEqual(["slider", "matrix"]);
});

test("CreatorPresetEditableOptions - maxChoiceContentNestingLevel question exists and binds to creator", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const question = survey.getQuestionByName("options_maxChoiceContentNestingLevel");
  expect(question).toBeTruthy();
  expect(editor.creator.maxChoiceContentNestingLevel).toBe(2);
  expect(question.value).toBe(2);
  question.value = 2;
  expect(editor.creator.maxChoiceContentNestingLevel).toBe(2);
});

test("CreatorPresetEditableOptions - maxChoiceContentNestingLevel export", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(editor.json).toEqual({});
  survey.getQuestionByName("options_maxChoiceContentNestingLevel").value = 0;
  expect(editor.json.options.maxChoiceContentNestingLevel).toBe(0);
  survey.getQuestionByName("options_maxChoiceContentNestingLevel").value = 2;
  expect(editor.json).toEqual({});
});

test("CreatorPresetEditableOptions - maxChoiceContentNestingLevel import", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  expect(survey.getQuestionByName("options_maxChoiceContentNestingLevel").value).toBe(2);
  editor.json = { options: { maxChoiceContentNestingLevel: 3 } };
  expect(survey.getQuestionByName("options_maxChoiceContentNestingLevel").value).toBe(3);
});

test("CreatorPresetEditableOptions - maxChoiceContentNestingLevel initial value from creator", () => {
  const creator = new CreatorTester();
  creator.maxChoiceContentNestingLevel = 1;
  const editor = new CreatorPresetEditorModel(undefined, creator);
  const survey = editor.model;
  expect(survey.getQuestionByName("options_maxChoiceContentNestingLevel").value).toBe(1);
});

test("UIPreset non-visual - maxChoiceContentNestingLevel applied via options JSON", () => {
  const creator = new CreatorTester();
  expect(creator.maxChoiceContentNestingLevel).toBe(2);
  const preset = new UIPreset({ options: { maxChoiceContentNestingLevel: 2 } });
  preset.applyTo(creator);
  expect(creator.maxChoiceContentNestingLevel).toBe(2);
});

test("UIPreset non-visual - maxChoiceContentNestingLevel default (not in options) leaves creator default", () => {
  const creator = new CreatorTester();
  const preset = new UIPreset({ options: {} });
  preset.applyTo(creator);
  expect(creator.maxChoiceContentNestingLevel).toBe(2);
});