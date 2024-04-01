import { Question, QuestionCompositeModel, SurveyModel } from "survey-core";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../../src/components/tabs/theme-custom-questions/element-settings";

export * from "../../../src/components/tabs/theme-custom-questions/color-settings";
export { QuestionFileEditorModel } from "../../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../../src/custom-questions/question-color";

test("elementSettings: elementSettingsToCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "elementsettings", name: "questionpanel",
      defaultValue: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        corner: 4,
        cornerRadius: "4px"
      }
    }],
  });
  const question = survey.findQuestionByName("questionpanel");
  let result = {};
  elementSettingsToCssVariable(question as Question, result);
  expect(result).toEqual({});

  (<QuestionCompositeModel>question).contentPanel.getQuestionByName("backcolor").value = "rgba(253, 255, 148, 0.5)";
  elementSettingsToCssVariable(question as Question, result);
  expect(result).toEqual({ "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.5)" });

  question.value = {
    "backcolor": "rgba(253, 255, 148, 0.5)",
    "hovercolor": "rgba(237, 238, 186, 1)",
    "corner": 6,
  };
  elementSettingsToCssVariable(question as Question, result);
  expect(result).toEqual({
    "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.5)",
    "--sjs-questionpanel-hovercolor": "rgba(237, 238, 186, 1)",
    "--sjs-questionpanel-cornerRadius": "6px"
  });
});

test("elementSettings: elementSettingsFromCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{ type: "elementsettings", name: "questionpanel" }],
  });
  const question = survey.findQuestionByName("questionpanel");
  expect(question.value).toEqual({});

  elementSettingsFromCssVariable(question, {
    "--sjs-editorpanel-backcolor": "rgba(45, 235, 223, 1)",
    "--sjs-editorpanel-hovercolor": "rgba(70, 143, 221, 1)",
    "--sjs-editorpanel-cornerRadius": "4px",
    "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.5)",
    "--sjs-questionpanel-hovercolor": "rgba(237, 238, 186, 1)",
    "--sjs-questionpanel-cornerRadius": "6px"
  }, "rgba(255, 255, 255, 1)", "rgba(248, 248, 248, 1)");

  expect(question.value).toEqual({
    "backcolor": "rgba(253, 255, 148, 0.5)",
    "hovercolor": "rgba(237, 238, 186, 1)",
    "cornerRadius": "6px",
    "corner": 6,
  });
});

test("elementSettings: elementSettingsFromCssVariable - default values", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "elementsettings",
      name: "questionpanel",
      defaultValue: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        cornerRadius: "4px",
        corner: 4
      }
    }],
  });
  const question = survey.getQuestionByName("questionpanel");
  expect(question.getQuestionByName("backcolor").value).toEqual("rgba(255, 255, 255, 1)");
  expect(question.getQuestionByName("hovercolor").value).toEqual("rgba(248, 248, 248, 1)");
  expect(question.getQuestionByName("cornerRadius").value).toEqual("4px");
  expect(question.getQuestionByName("corner").value).toEqual(4);

  elementSettingsFromCssVariable(question, { "--sjs-questionpanel-cornerRadius": "6px" }, "#000000", "#000000");
  expect(question.getQuestionByName("backcolor").value).toEqual("rgba(255, 255, 255, 1)");
  expect(question.getQuestionByName("hovercolor").value).toEqual("rgba(248, 248, 248, 1)");
  expect(question.getQuestionByName("cornerRadius").value).toEqual("6px");
  expect(question.getQuestionByName("corner").value).toEqual(6);
});