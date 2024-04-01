import { Question, QuestionCompositeModel, SurveyModel } from "survey-core";
import { fontsettingsFromCssVariable, fontsettingsToCssVariable } from "../../../src/components/tabs/theme-custom-questions/font-settings";

export * from "../../../src/components/tabs/theme-custom-questions/color-settings";
export { QuestionFileEditorModel } from "../../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../../src/custom-questions/question-color";

test("fontsettings: fontsettingsToCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "fontsettings", name: "questionTitle",
      defaultValue: {
        family: "Open Sans",
        color: "rgba(22, 22, 22, 1)",
        weight: "700",
        size: 32
      }
    }],
  });
  const question = survey.findQuestionByName("questionTitle") as Question;
  let result = {};
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({});

  (<QuestionCompositeModel>question).contentPanel.getQuestionByName("family").value = "Verdana, sans-serif";
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({ "--sjs-font-questiontitle-family": "Verdana, sans-serif" });

  question.value = {
    "family": "Verdana, sans-serif",
    "weight": "800",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  };
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({
    "--sjs-font-questiontitle-family": "Verdana, sans-serif",
    "--sjs-font-questiontitle-weight": "800",
    "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
    "--sjs-font-questiontitle-size": "18px",
  });
});

test("fontsettings: fontsettingsFromCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{ type: "fontsettings", name: "questiontitle" }],
  });
  const question = survey.findQuestionByName("questiontitle") as Question;
  expect(question.value).toEqual({});

  fontsettingsFromCssVariable(question, {
    "--sjs-font-questiontitle-family": "Verdana, sans-serif",
    "--sjs-font-questiontitle-weight": "700",
    "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
    "--sjs-font-questiontitle-size": "18px",
    "--sjs-font-editorfont-family": "Arial, sans-serif",
    "--sjs-font-editorfont-weight": "600",
    "--sjs-font-editorfont-color": "rgba(204, 25, 25, 1)",
    "--sjs-font-editorfont-size": "17px",
  }, "rgba(0, 0, 0, 0.91)");

  expect(question.value).toEqual({
    "family": "Verdana, sans-serif",
    "weight": "700",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  });
});

test("fontsettings: fontsettingsFromCssVariable - default colors", () => {
  const survey = new SurveyModel({
    elements: [{ type: "fontsettings", name: "questiontitle" }],
  });
  const question = survey.findQuestionByName("questiontitle") as Question;
  expect(question.value).toEqual({});

  fontsettingsFromCssVariable(question, {}, "rgba(0, 0, 0, 0.91)", "rgba(0, 0, 0, 0.45)");

  expect(question.value).toEqual({
    "color": "rgba(0, 0, 0, 0.91)",
    "placeholdercolor": "rgba(0, 0, 0, 0.45)",
  });
});

test("fontsettings: fontsettingsFromCssVariable - default values", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "fontsettings",
      name: "questiontitle",
      defaultValue: {
        family: "Open Sans",
        color: "rgba(22, 22, 22, 1)",
        weight: "600",
        size: 16
      }
    }],
  });
  const question = survey.getQuestionByName("questiontitle");
  expect(question.getQuestionByName("family").value).toEqual("Open Sans");
  expect(question.getQuestionByName("color").value).toEqual("rgba(22, 22, 22, 1)");
  expect(question.getQuestionByName("weight").value).toEqual("600");
  expect(question.getQuestionByName("size").value).toEqual(16);

  fontsettingsFromCssVariable(question, { "--sjs-font-questiontitle-size": "18px" }, "#000000", "#000000");
  expect(question.getQuestionByName("family").value).toEqual("Open Sans");
  expect(question.getQuestionByName("color").value).toEqual("rgba(22, 22, 22, 1)");
  expect(question.getQuestionByName("weight").value).toEqual("600");
  expect(question.getQuestionByName("size").value).toEqual(18);
});

test("fontsettings: set default value", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "fontsettings", name: "questionTitle",
      defaultValue: {
        family: "Open Sans",
        color: "rgba(22, 22, 22, 1)",
        weight: "700",
        size: 32
      }
    }],
  });
  const question = survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
  const colorQuestion = question.contentPanel.getQuestionByName("color");
  expect(colorQuestion.value).toEqual("rgba(22, 22, 22, 1)");
  let result = {};
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({});

  colorQuestion.value = "rgba(201, 90, 231, 0.91)";
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({ "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)" });

  colorQuestion.value = "rgba(22, 22, 22, 1)";
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({});
});