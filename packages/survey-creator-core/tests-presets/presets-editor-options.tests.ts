import { SurveyModel } from "survey-core";
import { CreatorPresetEditableOptions } from "../src/presets/presets-editable-options";
import { CreatorPresetBase } from "../src/presets-creator/presets-base";
import { SurveyCreatorModel } from "../src/creator-base";
import { CreatorPresetEditorModel } from "../src/ui-preset-editor/presets-editor";
import { CreatorTester } from "../tests/creator-tester";

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