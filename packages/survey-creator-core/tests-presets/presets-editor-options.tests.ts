import { SurveyModel } from "survey-core";
import { CreatorPresetEditableOptions } from "../src/presets/presets-editable-options";
import { CreatorPresetBase } from "../src/presets-creator/presets-base";
import { SurveyCreatorModel } from "../src/creator-base";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";

test("CreatorPresetEditableOptions - check questions and creator properties binding", () => {
  const editor = new CreatorPresetEditorModel();

  const survey = editor.model;
  expect(editor.creator.allowZoom).toBeTruthy();
  expect(survey.getQuestionByName("options_allowZoom").value).toBeTruthy();
  survey.getQuestionByName("options_allowZoom").value = false;
  expect(editor.creator.allowZoom).toBeFalsy();

  expect(editor.creator.previewAllowSimulateDevice).toBeFalsy();
  expect(survey.getQuestionByName("options_previewAllowSimulateDevice").value).toBeFalsy();
  survey.getQuestionByName("options_previewAllowSimulateDevice").value = true;
  expect(editor.creator.previewAllowSimulateDevice).toBeTruthy();
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