import { ComponentCollection, ITheme, Question, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, QuestionPanelDynamicModel, Serializer, SurveyModel, settings as surveySettings } from "survey-core";
import { ThemeBuilder } from "../../src/components/tabs/theme-builder";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../src/components/tabs/theme-custom-questions/element-settings";
import { fontsettingsToCssVariable, fontsettingsFromCssVariable } from "../../src/components/tabs/theme-custom-questions/font-settings";
import { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
import { IPropertyGridSurveyCreatedEvent, ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { assign, parseColor } from "../../src/utils/utils";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { settings } from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";

import "survey-core/survey.i18n";
import { editorLocalization } from "../../src/editorLocalization";

const themeFromFile = {
  "cssVariables": {
    "--sjs-general-backcolor": "rgba(253, 255, 148, 0.5)",
    "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
    "--sjs-general-backcolor-dim": "#0b864b",
    "--sjs-general-backcolor-dim-light": "rgba(45, 235, 223, 1)",
    "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-primary-backcolor": "rgba(229, 244, 154, 1)",
    "--sjs-primary-backcolor-light": "rgba(229, 244, 154, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(215, 229, 145, 1)",
    "--sjs-primary-forecolor": "rgba(178, 61, 153, 1)",
    "--sjs-primary-forecolor-light": "rgba(39, 114, 203, 0.25)",
    "--sjs-base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-font-editorfont-family": "Arial, sans-serif",
    "--sjs-font-editorfont-weight": "600",
    "--sjs-font-editorfont-color": "rgba(204, 25, 25, 1)",
    "--sjs-font-editorfont-size": "17px",
    "--sjs-editor-background": "rgba(45, 235, 223, 1)",
    "--sjs-editorpanel-backcolor": "rgba(45, 235, 223, 1)",
    "--sjs-editorpanel-hovercolor": "rgba(70, 143, 221, 1)",
    "--sjs-editorpanel-cornerRadius": "4px",
    "--sjs-font-questiontitle-family": "Verdana, sans-serif",
    "--sjs-font-questiontitle-weight": "700",
    "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
    "--sjs-font-questiontitle-size": "18px",
    "--sjs-question-background": "rgba(253, 255, 148, 1)",
    "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.5)",
    "--sjs-questionpanel-hovercolor": "rgba(237, 238, 186, 1)",
    "--sjs-questionpanel-cornerRadius": "6px"
  }
};

test("assign function", (): any => {
  const result = {};
  assign(result, { name1: "name1" });
  expect(result).toEqual({ name1: "name1" });

  assign(result, { name1: undefined });
  expect(result).toEqual({});
});

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(themeEditor.getQuestionByName("themeName").value).toEqual("default");
  expect(themeEditor.getQuestionByName("themeMode").value).toEqual("panels");
  expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.getQuestionByName("backgroundImage").value).toEqual(undefined);
  expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("cover");
  expect(themeEditor.getQuestionByName("backgroundOpacity").value).toEqual(100);
  expect(themeEditor.getQuestionByName("panelBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("questionBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("commonScale").value).toEqual(100);
  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(4);

  const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  expect(colorQuestions[0].choices.length).toEqual(7);
  expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.keys(PredefinedColors.light).map(key => PredefinedColors.light[key]));
});

test("Theme builder panelBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const panelBackgroundTransparency = themeEditor.getQuestionByName("panelBackgroundTransparency");

  expect(panelBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-question-background"]).toBeUndefined();

  panelBackgroundTransparency.value = 60;
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = "#eeeeee";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Theme builder: survey settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const simulatorSurvey = themeSurveyTab.survey;

  const backgroundImage = themeEditor.getQuestionByName("backgroundImage");
  const backgroundImageFit = themeEditor.getQuestionByName("backgroundImageFit");
  const backgroundOpacity = themeEditor.getQuestionByName("backgroundOpacity");
  const themeMode = themeEditor.getQuestionByName("themeMode");

  expect(backgroundImage.value).toEqual(undefined);
  expect(backgroundImageFit.value).toEqual("cover");
  expect(backgroundOpacity.value).toEqual(100);
  expect(themeMode.value).toEqual("panels");

  expect(simulatorSurvey.backgroundImage).toBeFalsy();
  expect(simulatorSurvey.backgroundImageFit).toEqual("cover");
  expect(simulatorSurvey.backgroundOpacity).toEqual(1);
  expect(simulatorSurvey["isCompact"]).toBe(false);

  backgroundImage.value = "image-url";
  backgroundImageFit.value = "auto";
  backgroundOpacity.value = 60;
  themeMode.value = "lightweight";

  expect(simulatorSurvey.backgroundImage).toEqual("image-url");
  expect(simulatorSurvey.backgroundImageFit).toEqual("auto");
  expect(simulatorSurvey.backgroundOpacity).toEqual(0.6);
  expect(simulatorSurvey["isCompact"]).toBe(true);
});

test("Theme builder switch themes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const themePalette = themeEditor.getQuestionByName("themePalette");
  const primaryColor = themeEditor.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditor.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themePalette.value).toEqual("light");
  expect(primaryColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");

  themePalette.value = "dark";
  expect(primaryColor.value).toEqual("rgba(255, 152, 20, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(36, 36, 36, 1)");
});

test("Theme builder: composite question fontSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  expect(questionTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual("rgba(0, 0, 0, 0.91)");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("600");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(16);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Open Sans");

  questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "500", size: 40 };

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("500");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");

  expect(questionTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual(undefined);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("500");
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(40);
  expect(questionTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Arial, sans-serif");
});

test("Theme builder: composite question values are lost", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");
  const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#fefefe", size: 40 };

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#101010", size: 28 };

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toEqual("Arial, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toEqual("rgba(16, 16, 16, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
});

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

test("Theme builder: composite question values set default value", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#fefefe", size: 40 };
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toEqual("Arial, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toEqual("rgba(254, 254, 254, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toEqual("40px");

  pageTitleFontSettings.value = { family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "700", size: 24 };
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();
});

test("Theme builder: composite question elementSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 255, 255, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(248, 248, 248, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("corner").value).toEqual(4);
  expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual("4px");

  questionPanelSettings.value = { backcolor: "#ff44ff", hovercolor: "#969696", corner: 5 };

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(255, 68, 255, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(150, 150, 150, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");

  expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 68, 255, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(150, 150, 150, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("corner").value).toEqual(5);
  expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual("5px");
});

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

test("Theme builder reset to default", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

  themeSurveyTab.resetTheme();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();// rgba(249, 249, 249, 1)
});

test("Theme builder themeMode not change modified values ", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const themeMode = themeEditor.getQuestionByName("themeMode");
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
  expect(themeMode.value).toEqual("panels");

  themeMode.value = "lightweight";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Check createBoxShadow and parseBoxShadow functions", () => {
  let boxShadow = "1px 2px 3px 24px #673241";
  let parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 3,
    x: 1,
    y: 2,
    spread: 24,
    isInset: false,
    color: "#673241"
  }]);
  let createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("1px 2px 3px 24px #673241");
  boxShadow = "2px 3px 4px 6px rgba(103, 50, 65, 0.75)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: false,
    color: "rgba(103, 50, 65, 0.75)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("2px 3px 4px 6px rgba(103, 50, 65, 0.75)");

  boxShadow = "inset 2px 3px 4px 6px rgb(103, 50, 65)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: true,
    color: "rgb(103, 50, 65)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("inset 2px 3px 4px 6px rgb(103, 50, 65)");

  boxShadow = "inset 2px 3px 4px 6px rgb(103, 50, 65), 1px 1px 1px 1px rgb(22, 21, 23), 3px 3px 3px 3px rgb(32, 31, 33)";
  parsedBoxShadow = parseBoxShadow(boxShadow);
  expect(parsedBoxShadow).toEqual([{
    blur: 4,
    x: 2,
    y: 3,
    spread: 6,
    isInset: true,
    color: "rgb(103, 50, 65)"
  },
  {
    blur: 1,
    x: 1,
    y: 1,
    spread: 1,
    isInset: false,
    color: "rgb(22, 21, 23)"
  },
  {
    blur: 3,
    x: 3,
    y: 3,
    spread: 3,
    isInset: false,
    color: "rgb(32, 31, 33)"
  }]);
  createdBoxShadow = createBoxShadow(parsedBoxShadow);
  expect(createdBoxShadow).toBe("inset 2px 3px 4px 6px rgb(103, 50, 65), 1px 1px 1px 1px rgb(22, 21, 23), 3px 3px 3px 3px rgb(32, 31, 33)");

  createdBoxShadow = createBoxShadow([{}]);
  expect(createdBoxShadow).toBe("0px 0px 0px 0px #000000");

});

test("Check boxshadowsettings question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "boxshadowsettings",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(survey.data).toEqual({});
  survey.data = {
    "test": "2px 3px 4px 6px rgba(103, 50, 65, 0.75)"
  };
  expect(question.value).toEqual([{
    "blur": 4,
    "color": "rgba(103, 50, 65, 0.75)",
    "isInset": false,
    "spread": 6,
    "x": 2,
    "y": 3,
  }]);
  question.value = [{
    "blur": 6,
    "color": "#673fff",
    "isInset": true,
    "spread": 8,
    "x": 5,
    "y": 10,
  }];
  question.contentQuestion.panels[0].getQuestionByName("color").contentPanel.getQuestionByName("opacity").value = 7;
  expect(survey.data).toEqual({ "test": "inset 5px 10px 6px 8px rgba(103, 63, 255, 0.07)" });
});
test("boxshadowsettings should exists after ComponentCollection.Instance.clear()", () => {
  ComponentCollection.Instance.clear();
  const survey = new SurveyModel({
    elements: [{
      type: "boxshadowsettings",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(question.getType()).toBe("boxshadowsettings");
});

test("Check parseColor and createColor functions", () => {
  let color = "#673241";
  let parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 100
  });
  let createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65)";
  parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 100
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65, 0.75)";
  parsedColor = parseColor(color);
  expect(parsedColor).toEqual({
    color: "#673241",
    opacity: 75
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 0.75)");
});

test("Check colorsettings question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "colorsettings",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(survey.data).toEqual({});
  survey.data = {
    "test": "rgba(103, 50, 65, 0.75)"
  };
  expect(question.value).toEqual("rgba(103, 50, 65, 0.75)");
  expect(question.contentPanel.questions[0].value).toBe("#673241");
  expect(question.contentPanel.questions[1].value).toBe(75);

  question.value = {
    "color": "#673fff",
    "opacity": 50
  };
  expect(question.value).toEqual("rgba(103, 63, 255, 0.5)");
  expect(survey.data).toEqual({ "test": "rgba(103, 63, 255, 0.5)" });

  question.contentPanel.questions[0].value = "#673000";
  question.contentPanel.questions[1].value = 25;

  expect(question.value).toEqual("rgba(103, 48, 0, 0.25)");
  expect(survey.data).toEqual({ test: "rgba(103, 48, 0, 0.25)" });
});

test("Check colorsettings + another composite questions", () => {
  const json = {
    name: "elementsettingstest",
    showInToolbox: false,
    elementsJSON: [
      {
        type: "colorsettings",
        name: "backcolor",
        titleLocation: "left",
        descriptionLocation: "hidden"
      },
    ],
  };
  ComponentCollection.Instance.add(json);
  const survey = new SurveyModel({
    elements: [{
      type: "elementsettingstest",
      name: "test",
      defaultValue: {
        backcolor: "rgba(68, 69, 67, 0.5)"
      }
    }]
  });
  const question = survey.getAllQuestions()[0];

  expect(question.contentPanel.questions[0].value).toBe("rgba(68, 69, 67, 0.5)");
  expect(survey.data).toEqual({ test: { backcolor: "rgba(68, 69, 67, 0.5)" } });

  expect(question.contentPanel.questions[0].contentPanel.questions[0].value).toBe("#444543");
  expect(question.contentPanel.questions[0].contentPanel.questions[1].value).toBe(50);

  survey.data = {
    test: {
      backcolor: "#fffff0",
    }
  };
  expect(question.contentPanel.questions[0].value).toBe("rgba(255, 255, 240, 1)");
  expect(survey.data).toEqual({ test: { backcolor: "#fffff0" } });

  question.contentPanel.questions[0].contentPanel.questions[0].value = "#19b000";
  question.contentPanel.questions[0].contentPanel.questions[1].value = 40;

  expect(question.contentPanel.questions[0].value).toBe("rgba(25, 176, 0, 0.4)");
  expect(survey.data).toEqual({ test: { backcolor: "rgba(25, 176, 0, 0.4)" } });

  Serializer.removeClass("elementsettingstest");
});

test("Check colorsettings question passes some properties to color question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "colorsettings",
      colorTitleLocation: "left",
      colorTitle: "Test",
      titleLocation: "hidden",
      name: "test",
      choices: [{ value: "#fff", text: "White" }]
    }]
  });
  const question = survey.getAllQuestions()[0];
  const colorQuestion = question.contentPanel.questions[0];
  expect(colorQuestion.titleLocation).toBe("left");
  expect(question.titleLocation).toBe("hidden");
  expect(colorQuestion.titleLocation).toBe("left");
  expect(colorQuestion.title).toBe("Test");
  expect(colorQuestion.choices[0].value).toBe("#fff");
  expect(colorQuestion.choices[0].title).toBe("White");
  question.choices = [{ value: "#000", text: "Black" }];
  expect(colorQuestion.choices[0].value).toBe("#000");
  expect(colorQuestion.choices[0].title).toBe("Black");
});

test("Theme builder export value from composite question", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionDimLightBackground = themeEditor.getQuestionByName("--sjs-general-backcolor-dim-light");

  expect(questionDimLightBackground.value).toEqual("rgba(249, 249, 249, 1)");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(249, 249, 249, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

  themeEditor.getQuestionByName("themeName").value = "contrast";
  expect(questionDimLightBackground.value).toEqual("rgba(255, 216, 77, 1)");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(255, 216, 77, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
});

test("import theme from file", (done) => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  const data = JSON.stringify({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
    },
    "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
    "backgroundImageFit": "auto",
    "themeName": "My Theme",
    "themePalette": "light",
    "isPanelless": true
  } as any, null, 4);
  const blob = new Blob([data], { type: "application/json" });
  themePlugin.importFromFile(blob as any, () => {
    expect(themeEditor.getQuestionByName("themeName").value).toEqual("My Theme");
    expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
    expect(themeEditor.getQuestionByName("themeMode").value).toEqual("lightweight");
    expect(themeEditor.getQuestionByName("backgroundImage").value).toBeTruthy();
    expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("auto");
    done();
  });
});

test("export theme to file", (done): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  themeEditor.getQuestionByName("questionTitle").contentPanel.getQuestionByName("size").value = 19;

  const expectations = {};
  assign(expectations, Themes["default-light"].cssVariables, { "--sjs-font-questiontitle-size": "19px" });

  themePlugin.saveToFileHandler = async (fileName: string, blob: Blob) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      expect(fileName).toBe(settings.theme.exportFileName);
      const theme: ITheme = JSON.parse(fileReader.result as string);
      expect(theme.themeName).toEqual("default_exported");
      expect(theme.cssVariables).toEqual(expectations);
      done();
    };
    fileReader.readAsText(blob);
  };
  themePlugin.exportToFile(settings.theme.exportFileName);
});

test("Theme builder: restore values of elementSettings from file", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  expect(questionPanelSettings.value).toEqual({
    "backcolor": "rgba(255, 255, 255, 1)",
    "hovercolor": "rgba(248, 248, 248, 1)",
    "corner": 4,
    "cornerRadius": "4px"
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeSurveyTab.loadTheme(newTheme as any);

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(237, 238, 186, 1)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("6px");

  expect(questionPanelSettings.value).toEqual({
    "backcolor": "rgba(253, 255, 148, 0.5)",
    "hovercolor": "rgba(237, 238, 186, 1)",
    "corner": 6,
    "cornerRadius": "6px"
  });
});
test("Theme builder: restore values of fontsettings from file", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  expect(questionTitleFontSettings.value).toEqual({
    "family": "Open Sans",
    "color": "rgba(0, 0, 0, 0.91)",
    "weight": "600",
    "size": 16
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeSurveyTab.loadTheme(newTheme as any);

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Verdana, sans-serif");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("700");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(201, 90, 231, 0.91)");
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("18px");

  expect(questionTitleFontSettings.value).toEqual({
    "family": "Verdana, sans-serif",
    "weight": "700",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  });
});

test("Theme builder: restore questionTitle switch tabs", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.activeTab = "theme";
  let themeSurveyTab = themePlugin.model as ThemeBuilder;
  let questionTitleFontSettings = themeSurveyTab.themeEditorSurvey.getQuestionByName("questionTitle");
  expect(questionTitleFontSettings.getQuestionByName("family").value).toEqual("Open Sans");
  expect(questionTitleFontSettings.getQuestionByName("color").value).toEqual("rgba(0, 0, 0, 0.91)");
  expect(questionTitleFontSettings.getQuestionByName("weight").value).toEqual("600");
  expect(questionTitleFontSettings.getQuestionByName("size").value).toEqual(16);

  questionTitleFontSettings.getQuestionByName("color").value = "rgba(201, 90, 231, 0.91)";
  expect(questionTitleFontSettings.value).toEqual({
    "family": "Open Sans",
    "weight": "600",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 16
  });

  creator.activeTab = "designer";
  creator.activeTab = "theme";
  themeSurveyTab = themePlugin.model as ThemeBuilder;
  questionTitleFontSettings = themeSurveyTab.themeEditorSurvey.getQuestionByName("questionTitle");

  expect(questionTitleFontSettings.getQuestionByName("family").value).toEqual("Open Sans");
  expect(questionTitleFontSettings.getQuestionByName("color").value).toEqual("rgba(201, 90, 231, 0.91)");
  expect(questionTitleFontSettings.getQuestionByName("weight").value).toEqual("600");
  expect(questionTitleFontSettings.getQuestionByName("size").value).toEqual(16);
  expect(questionTitleFontSettings.value).toEqual({
    "family": "Open Sans",
    "weight": "600",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 16
  });
});

test("Theme onModified and saveThemeFunc", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let modificationsLog = "";
  themePlugin.onThemeSelected.add((s, o) => {
    modificationsLog += "->THEME_SELECTED";
  });
  themePlugin.onThemePropertyChanged.add((s, o) => {
    modificationsLog += "->THEME_MODIFIED";
  });
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditor = themeBuilder.themeEditorSurvey;

  expect(modificationsLog).toBe("");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeFalsy();

  themeEditor.getQuestionByName("--sjs-border-default").value = "#ff0000";

  expect(modificationsLog).toBe("->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();

  themeBuilder.resetTheme();

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(2);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeFalsy();

  themeEditor.getQuestionByName("backgroundImage").value = [{ name: "pic1.png", type: "", content: "http://site.org/images/pic1.png" }];

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(3);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();

  themeEditor.getQuestionByName("--sjs-general-backcolor-dim").value = "#ff0000";

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(4);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();
});

test("Theme undo redo changes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const question = themeEditor.getQuestionByName("--sjs-general-backcolor-dim");
  const generalBackcolorDimColorQuestion = themeEditor.getQuestionByName("generalBackcolorDimColor");

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(question.value).toBe("rgba(243, 243, 243, 1)");
  expect(generalBackcolorDimColorQuestion.value).toBe("#f3f3f3");

  question.value = "#ff0000";
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(question.value).toBe("#ff0000");
  expect(generalBackcolorDimColorQuestion.value).toBe("#ff0000");

  themePlugin.undo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(question.value).toBe("#f3f3f3");
  expect(generalBackcolorDimColorQuestion.value).toBe("#f3f3f3");

  themePlugin.redo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(question.value).toBe("#ff0000");
  expect(generalBackcolorDimColorQuestion.value).toBe("#ff0000");
});

test("Theme undo redo general settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const backgroundImageQuestion = themeEditor.getQuestionByName("backgroundImage");

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe(undefined);

  backgroundImageQuestion.value = "some_url";

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("some_url");

  themePlugin.undo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe(undefined);

  themePlugin.redo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("some_url");
});

test("Theme undo redo calculated questions", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const accentColorQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor");
  const accentColorDarkQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-dark");
  const accentColorLightQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-light");

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
  expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
  expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

  accentColorQuestion.value = "#2772cb";

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
  expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
  expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");

  themePlugin.undo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
  expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
  expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

  themePlugin.redo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
  expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
  expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");
});

test("Theme undo redo expression questions", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const commonFontSizeQuestion = themeEditor.getQuestionByName("commonFontSize");

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(commonFontSizeQuestion.value).toBe(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe(undefined);

  commonFontSizeQuestion.value = 150;

  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(commonFontSizeQuestion.value).toBe(150);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");

  themePlugin.undo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(commonFontSizeQuestion.value).toBe(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("16px");

  themePlugin.redo();
  expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
  expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
  expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
  expect(commonFontSizeQuestion.value).toBe(150);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");
});

test("Theme builder: trigger responsiveness", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  let log = "";
  themeSurveyTab.survey.triggerResponsiveness = (hard: boolean) => {
    log += `->called:${hard}`;
  };
  themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "#ffffff";
  expect(log).toBe("");
  themeEditor.getQuestionByName("commonScale").value = 90;
  expect(log).toBe("->called:true");
  themeEditor.getQuestionByName("commonScale").value = 80;
  expect(log).toBe("->called:true->called:true");
});
test("Theme builder restore PG editor", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    "cssVariables": {
      "--sjs-corner-radius": "20px",
      "--sjs-base-unit": "9.6px",
      "--sjs-font-size": "17.6px",
    }
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(themeSurveyTab.currentThemeCssVariables["--sjs-corner-radius"]).toEqual("20px");
  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(20);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-base-unit"]).toEqual("9.6px");
  expect(themeEditor.getQuestionByName("commonScale").value).toEqual(120);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toEqual("17.6px");
  expect(themeEditor.getQuestionByName("commonFontSize").value).toEqual(110);
});

test("Add theme before activate", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  const themes: string[] = [].concat(PredefinedThemes);
  const customTheme = { themeName: "custom" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(themePlugin.availableThemes).toStrictEqual(themes.concat(["custom"]));

  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditor = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditor.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeBuilder.availableThemes).toStrictEqual(themes.concat(["custom"]));
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

  themePlugin.removeTheme(fullThemeName);
  expect(Themes["custom"]).toBeUndefined();
  expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
});

test("Change available themes after activate", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditor = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditor.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);

  const themes: string[] = [].concat(PredefinedThemes);
  const customTheme = { themeName: "custom" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(themeBuilder.availableThemes).toStrictEqual(themes.concat(["custom"]));
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(themes.concat(["custom"]));

  themePlugin.removeTheme(fullThemeName);
  expect(Themes["custom"]).toBeUndefined();
  expect(themeBuilder.availableThemes).toStrictEqual(PredefinedThemes);
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual(PredefinedThemes);
});

test("Disable/hide properties in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("panels");
  expect(themeMode.isReadOnly).toBeFalsy();
  expect(themePalette.value).toBe("light");
  expect(themePalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeTruthy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeTruthy();

  themeChooser.value = "contrast";
  expect(themeChooser.value).toBe("contrast");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeFalsy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeFalsy();
  themePlugin.removeTheme(fullThemeName);
});

test("Keep theme css changes throgh the different themes choosen", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
  const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themePalette.value).toEqual("light");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({});

  primaryBackColor.value = "#fefefe";

  expect(themePalette.value).toEqual("light");
  expect(primaryBackColor.value).toEqual("rgba(254, 254, 254, 1)"); // #fefefe
  expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": "#fefefe",
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themePalette.value = "dark";
  expect(themePalette.value).toEqual("dark");
  expect(primaryBackColor.value).toEqual("rgba(254, 254, 254, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(36, 36, 36, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": "#fefefe",
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themeBuilder.resetTheme();
  expect(themePalette.value).toEqual("dark");
  expect(primaryBackColor.value).toEqual("rgba(255, 152, 20, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(36, 36, 36, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({});
});

test("findSuitableTheme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;

  expect(themeBuilder.findSuitableTheme("default").themeName).toEqual("default");
  expect(themeBuilder.findSuitableTheme("default").colorPalette).toEqual("light");
  expect(themeBuilder.findSuitableTheme("default").isPanelless).toEqual(false);

  const fullThemeName = themePlugin.addTheme({ themeName: "custom", isPanelless: true, "colorPalette": "dark" });
  expect(themeBuilder.findSuitableTheme("custom").themeName).toEqual("custom");
  expect(themeBuilder.findSuitableTheme("custom").colorPalette).toEqual("dark");
  expect(themeBuilder.findSuitableTheme("custom").isPanelless).toEqual(true);
  themePlugin.removeTheme(fullThemeName);
});

test("selectTheme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
  const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themeChooser.value).toEqual("default");
  expect(themePalette.value).toEqual("light");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({});

  themeBuilder.selectTheme("contrast");
  expect(themeChooser.value).toEqual("contrast");
  expect(themePalette.value).toEqual("light");
  expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
  expect(backgroundDimColor.value).toEqual("rgba(255, 216, 77, 1)");
  expect(themeBuilder.themeCssCustomizations).toStrictEqual({});
});

test("onThemeSelected + onThemePropertyChanged events", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
  const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");
  const generalBackcolorDimColor = themeEditorSurvey.getQuestionByName("generalBackcolorDimColor");
  const generalPrimaryColor = themeEditorSurvey.getQuestionByName("generalPrimaryColor");

  let pluginThemeSelectedCount = 0;
  let pluginThemeModifiedCount = 0;
  themePlugin.onThemeSelected.add(() => pluginThemeSelectedCount++);
  themePlugin.onThemePropertyChanged.add(() => pluginThemeModifiedCount++);
  let builderThemeSelectedCount = 0;
  let builderThemeModifiedCount = 0;
  themeBuilder.onThemeSelected.add(() => builderThemeSelectedCount++);
  themeBuilder.onThemePropertyChanged.add(() => builderThemeModifiedCount++);

  themeChooser.value = "flat";
  expect(pluginThemeModifiedCount).toBe(0);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(0);
  expect(builderThemeSelectedCount).toBe(1);

  primaryBackColor.value = "#ffffff";
  expect(pluginThemeModifiedCount).toBe(1);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(1);
  expect(builderThemeSelectedCount).toBe(1);

  generalBackcolorDimColor.value = "#7a46bb";
  expect(pluginThemeModifiedCount).toBe(2);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(2);
  expect(builderThemeSelectedCount).toBe(1);

  generalPrimaryColor.value = "#7a46bb";
  expect(pluginThemeModifiedCount).toBe(3);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(3);
  expect(builderThemeSelectedCount).toBe(1);
});

test("onAllowModifyTheme events + use creator.readOnly", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.readOnly = true;
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.onAllowModifyTheme.add((s, o) => {
    o.allow = o.theme.themeName === "flat";
  });

  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
  const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themeChooser.isReadOnly).toBeFalsy();
  expect(themePalette.isReadOnly).toBeFalsy();
  expect(primaryBackColor.isReadOnly).toBeTruthy();
  expect(backgroundDimColor.isReadOnly).toBeTruthy();

  themeChooser.value = "flat";
  expect(themeChooser.isReadOnly).toBeFalsy();
  expect(themePalette.isReadOnly).toBeFalsy();
  expect(primaryBackColor.isReadOnly).toBeFalsy();
  expect(backgroundDimColor.isReadOnly).toBeFalsy();
});

test("themeMode is switching to panelless and back", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.readOnly = true;
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themeMode = themeEditorSurvey.getQuestionByName("themeMode");

  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("panels");

  themeBuilder.loadTheme({ isPanelless: true });
  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("lightweight");

  themeBuilder.loadTheme({ isPanelless: undefined });
  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("lightweight");

  themeBuilder.loadTheme({ isPanelless: false });
  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("panels");
});

test("disable irrelevant settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let themeEditorSurvey = (themePlugin.model as ThemeBuilder).themeEditorSurvey;

  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
  };

  themePlugin.activate();
  themeEditorSurvey = (themePlugin.model as ThemeBuilder).themeEditorSurvey;
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

test("disable page settings if single page mode", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let themeEditorSurvey = (themePlugin.model as ThemeBuilder).themeEditorSurvey;
  expect(creator.survey.isSinglePage).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeTruthy();

  creator.activeTab = "designer";
  creator.JSON = {
    "title": "Survey Title",
    "description": "Survey Description",
    "pages": [
      {
        "name": "page1",
        "title": "page 1",
        "description": "page 1 description",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ],
      },
      {
        "name": "page2",
        "title": "page 2",
        "description": "page 2 description",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ],
      }
    ],
    "questionsOnPageMode": "singlePage",
  };

  themePlugin.activate();
  themeEditorSurvey = (themePlugin.model as ThemeBuilder).themeEditorSurvey;
  expect(creator.survey.isSinglePage).toBeTruthy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyTitle").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("surveyDescription").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("pageTitle").isReadOnly).toBeFalsy();
  expect(themeEditorSurvey.getQuestionByName("pageDescription").isReadOnly).toBeFalsy();
});

test("headerViewContainer init state", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

  expect(headerViewContainer.value[0]).toEqual({
    "headerView": "basic",
    "logoPosition": "left",
    "inheritWidthFrom": "container",
    "overlapEnabled": false,
    "backgroundColorSwitch": "accentColor",
    "backgroundImageFit": "cover",
    "backgroundImageOpacity": 100,
    "logoPositionX": "right",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom",
    "textAreaWidth": 512,
    "height": 256,
    "headerDescription": {
      "color": "rgba(255, 255, 255, 1)",
      "family": "Open Sans",
      "size": 16,
      "weight": "600",
    },
    "headerTitle": {
      "color": "rgba(255, 255, 255, 1)",
      "family": "Open Sans",
      "size": 32,
      "weight": "700",
    },
    "surveyDescription": {
      "family": "Open Sans",
      "size": 16,
      "weight": "400",
    },
    "surveyTitle": {
      "family": "Open Sans",
      "size": 32,
      "weight": "700",
    },
  });
});

test("set headerViewContainer basic", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  const surveyTitleQuestion = headerViewContainer.getElementByName("surveyTitle");
  const surveyDescriptionQuestion = headerViewContainer.getElementByName("surveyDescription");
  let currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBeUndefined();
  expect(creator.survey.logoPosition).toEqual("left");

  headerViewContainer.getElementByName("logoPosition").value = "right";
  surveyTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  surveyTitleQuestion.contentPanel.getQuestionByName("size").value = 41;
  surveyTitleQuestion.contentPanel.getQuestionByName("family").value = "Courier New";
  surveyDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
  surveyDescriptionQuestion.contentPanel.getQuestionByName("size").value = 21;
  surveyDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Trebuchet MS";

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBe("Courier New");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBe("41px");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBe("Trebuchet MS");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBe("21px");
  expect(creator.theme.header).toBeUndefined();
  expect(creator.survey.logoPosition).toEqual("right");
});

test("set headerViewContainer advanced", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
  const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

  let currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBeUndefined();

  headerViewContainer.getElementByName("logoPosition").value = "right";
  headerViewContainer.getElementByName("headerView").value = "advanced";
  headerViewContainer.getElementByName("height").value = 300;
  headerViewContainer.getElementByName("inheritWidthFrom").value = "container";
  headerViewContainer.getElementByName("textAreaWidth").value = 600;
  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
  headerViewContainer.getElementByName("backgroundImage").value = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
  headerViewContainer.getElementByName("backgroundImageFit").value = "fill";
  headerViewContainer.getElementByName("backgroundImageOpacity").value = 50;
  headerViewContainer.getElementByName("overlapEnabled").value = true;
  headerViewContainer.getElementByName("logoPositionX").value = "center";
  headerViewContainer.getElementByName("logoPositionY").value = "middle";
  headerViewContainer.getElementByName("titlePositionX").value = "center";
  headerViewContainer.getElementByName("titlePositionY").value = "middle";
  headerViewContainer.getElementByName("descriptionPositionX").value = "center";
  headerViewContainer.getElementByName("descriptionPositionY").value = "middle";
  headerTitleQuestion.contentPanel.getQuestionByName("color").value = "#FBFF24";
  headerTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
  headerTitleQuestion.contentPanel.getQuestionByName("size").value = 39;
  headerTitleQuestion.contentPanel.getQuestionByName("family").value = "Georgia";
  headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(50, 16, 218, 0.45)";
  headerDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
  headerDescriptionQuestion.contentPanel.getQuestionByName("size").value = 19;
  headerDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Verdana";

  expect(creator.theme.header).toEqual({
    "height": 300,
    "inheritWidthFrom": "container",
    "textAreaWidth": 600,
    "overlapEnabled": true,
    "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
    "backgroundImageOpacity": 0.5,
    "backgroundImageFit": "fill",
    "logoPositionX": "center",
    "logoPositionY": "middle",
    "titlePositionX": "center",
    "titlePositionY": "middle",
    "descriptionPositionX": "center",
    "descriptionPositionY": "middle"
  });

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(251, 255, 36, 1)");
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBe("Verdana");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(50, 16, 218, 0.45)");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBe("19px");
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBe("#5094ed");
});

test("restore headerViewContainer values", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    "cssVariables": {
      "--sjs-corner-radius": "20px",
      "--sjs-base-unit": "9.6px",
      "--sjs-font-size": "17.6px",
      "--sjs-header-backcolor": "#5094ed",
      "--sjs-font-surveytitle-family": "Courier New",
      "--sjs-font-surveytitle-weight": "400",
      "--sjs-font-surveytitle-size": "41px",
      "--sjs-font-surveydescription-family": "Trebuchet MS",
      "--sjs-font-surveydescription-weight": "800",
      "--sjs-font-surveydescription-size": "21px",
      "--sjs-font-headertitle-family": "Georgia",
      "--sjs-font-headertitle-weight": "800",
      "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
      "--sjs-font-headertitle-size": "39px",
      "--sjs-font-headerdescription-family": "Verdana",
      "--sjs-font-headerdescription-weight": "800",
      "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
      "--sjs-font-headerdescription-size": "19px"
    },
    "header": {
      "height": 300,
      "inheritWidthFrom": "container",
      "textAreaWidth": 600,
      "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
      "backgroundImageOpacity": 0.5,
      "backgroundImageFit": "fill",
      "overlapEnabled": true,
      "logoPositionX": "center",
      "logoPositionY": "middle",
      "titlePositionX": "center",
      "titlePositionY": "middle",
      "descriptionPositionX": "center",
      "descriptionPositionY": "middle"
    }
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

  expect(headerViewContainer.value[0]).toEqual({
    "headerView": "advanced",
    "logoPosition": "left",
    "inheritWidthFrom": "container",
    "backgroundColor": "#5094ed",
    "backgroundColorSwitch": "custom",
    "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
    "backgroundImageFit": "fill",
    "backgroundImageOpacity": 50,
    "overlapEnabled": true,
    "logoPositionX": "center",
    "logoPositionY": "middle",
    "titlePositionX": "center",
    "titlePositionY": "middle",
    "descriptionPositionX": "center",
    "descriptionPositionY": "middle",
    "textAreaWidth": 600,
    "height": 300,
    "headerDescription": {
      "color": "rgba(50, 16, 218, 0.45)",
      "family": "Verdana",
      "size": 19,
      "weight": "800",
    },
    "headerTitle": {
      "color": "rgba(219, 15, 15, 0.91)",
      "family": "Georgia",
      "size": 39,
      "weight": "800",
    },
    "surveyDescription": {
      "family": "Trebuchet MS",
      "size": 21,
      "weight": "800",
    },
    "surveyTitle": {
      "family": "Courier New",
      "size": 41,
      "weight": "400",
    },
  });
});

test("headerViewContainer: restore backgroundColorSwitch", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeBuilder = themePlugin.model as ThemeBuilder;
  let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  headerViewContainer.getElementByName("headerView").value = "advanced";
  expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("trasparent");

  creator.activeTab = "theme";
  themeBuilder = themePlugin.model as ThemeBuilder;
  headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("none");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBeUndefined();
});

test("headerViewContainer: background color", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeBuilder = themePlugin.model as ThemeBuilder;
  let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  headerViewContainer.getElementByName("headerView").value = "advanced";
  expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toBe("accentColor");
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("trasparent");

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#5094ed");

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "accentColor";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
});

test("Get theme changes only", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  const fullTheme = themePlugin.getCurrentTheme() || {};
  const themeChanges = themePlugin.getCurrentTheme(true) || {};
  expect(Object.keys(fullTheme).length).toBe(8);
  expect(Object.keys(fullTheme)).toStrictEqual([
    "backgroundImage",
    "backgroundImageFit",
    "backgroundImageAttachment",
    "backgroundOpacity",
    "cssVariables",
    "themeName",
    "colorPalette",
    "isPanelless",
  ]);
  expect(Object.keys(fullTheme.cssVariables).length).toBe(80);
  expect(Object.keys(themeChanges).length).toBe(4);
  expect(Object.keys(themeChanges)).toStrictEqual([
    "cssVariables",
    "themeName",
    "colorPalette",
    "isPanelless",
  ]);
  expect(Object.keys(themeChanges.cssVariables).length).toBe(0);

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

  const fullModifiedTheme = themePlugin.getCurrentTheme() || {};
  const modifiedThemeChanges = themePlugin.getCurrentTheme(true) || {};
  expect(Object.keys(fullModifiedTheme).length).toBe(8);
  expect(Object.keys(fullModifiedTheme.cssVariables).length).toBe(83);
  expect(Object.keys(modifiedThemeChanges).length).toBe(4);
  expect(Object.keys(modifiedThemeChanges.cssVariables).length).toBe(4);
  expect(Object.keys(modifiedThemeChanges.cssVariables)).toStrictEqual([
    "--sjs-general-backcolor-dim-light",
    "--sjs-editor-background",
    "--sjs-editorpanel-backcolor",
    "--sjs-editorpanel-hovercolor",
  ]);

  themeSurveyTab.resetTheme();
  const fullThemeReset = themePlugin.getCurrentTheme();
  const themeChangesReset = themePlugin.getCurrentTheme(true);
  expect(Object.keys(fullThemeReset).length).toBe(8);
  expect(Object.keys(fullThemeReset)).toStrictEqual([
    "backgroundImage",
    "backgroundImageFit",
    "backgroundImageAttachment",
    "backgroundOpacity",
    "cssVariables",
    "themeName",
    "colorPalette",
    "isPanelless"
  ]);
  expect(Object.keys(fullThemeReset.cssVariables).length).toBe(80);
  expect(Object.keys(themeChangesReset).length).toBe(4);
  expect(Object.keys(themeChangesReset)).toStrictEqual([
    "cssVariables",
    "themeName",
    "colorPalette",
    "isPanelless"
  ]);
  expect(Object.keys(themeChangesReset.cssVariables).length).toBe(0);
});
test("Creator top action bar: only theme tab", (): any => {
  const themeBuilderButtonOrder = ["action-undo-theme", "action-redo-theme", "resetTheme", "svc-theme-settings", "svc-theme-import", "svc-theme-export"].join("|");
  const logicTabButtonOrder = ["svc-logic-filter-question", "svc-logic-filter-actiontype", "svc-logic-fast-entry"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");

  expect(creator.toolbar.visibleActions.length).toEqual(6);
  let receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeBuilderButtonOrder);
  expect(creator.toolbar.visibleActions[3].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.toolbar.visibleActions.length).toEqual(3);
  receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(logicTabButtonOrder);
});
test("Creator footer action bar: only theme tab", (): any => {
  const buttonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  const receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(buttonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);
});
test("Creator footer action bar: all tabs", (): any => {
  const designerTabButtonOrder = ["svd-designer", "svd-preview", "action-undo", "action-redo", "svd-settings"].join("|");
  const testTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible"].join("|");
  const themeTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: true, showPreviewTab: true, showThemeTab: true, showLogicTab: true, showJSONEditorTab: true, showTranslationTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("designer");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  let receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeTruthy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeFalsy();

  creator.activeTab = "test";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(testTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "theme";
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);

  creator.activeTab = "designer";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
});
test("Mobile mode: hide advanced settings in property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.isMobileView = true;

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const propertyGridGroups = themeEditorSurvey.pages[0].elements;
  expect(propertyGridGroups.length).toBe(5);
  expect(propertyGridGroups[0].visible).toBeTruthy();
  expect(propertyGridGroups[1].visible).toBeFalsy();
  expect(propertyGridGroups[2].visible).toBeTruthy();
  expect(propertyGridGroups[3].visible).toBeTruthy();
  expect(propertyGridGroups[4].visible).toBeFalsy();
});
test("loadTheme fill all theme parameters: name, mode and compactness", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;

  themeBuilder.setTheme(<any>{ isPanelless: true });
  expect(creator.theme.themeName).toBe("default");
  expect(creator.theme.colorPalette).toBe("light");
  expect(creator.theme.isPanelless).toBe(true);

  themeBuilder.setTheme(<any>{ colorPalette: "dark" });
  expect(creator.theme.themeName).toBe("default");
  expect(creator.theme.colorPalette).toBe("dark");
  expect(creator.theme.isPanelless).toBe(true);
});
test("Check all file edit questions has onChooseFiles callback", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  expect(!!themeEditorSurvey.getQuestionByName("backgroundImage").onChooseFilesCallback).toBeTruthy();
  expect(!!(<QuestionPanelDynamicModel>themeEditorSurvey.getPanelByName("groupHeader").questions[0]).panels[0].getQuestionByName("backgroundImage").onChooseFilesCallback).toBeTruthy();
});
test("Pass background image from survey to theme editor and back", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
  const camelImage = "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg";
  creator.JSON = {
    backgroundImage: lionImage,
    questions: [{ type: "text", name: "q1" }]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeBuilder = themePlugin.model as ThemeBuilder;
  let themeEditorSurvey = themeBuilder.themeEditorSurvey;
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeBuilder.backgroundImage).toBe(lionImage);
  expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
  expect(themeBuilder.survey.backgroundImage).toBe(lionImage);
  themeEditorSurvey.getQuestionByName("backgroundImage").value = "";
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeBuilder.backgroundImage).toBe("");
  expect(themeBuilder.survey.backgroundImage).toBe("");
  themeEditorSurvey.getQuestionByName("backgroundImage").value = camelImage;
  expect(creator.theme.backgroundImage).toBe(camelImage);
  expect(themeBuilder.backgroundImage).toBe(camelImage);
  expect(themeBuilder.survey.backgroundImage).toBe(camelImage);
  themeBuilder.resetTheme();
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeBuilder.backgroundImage).toBe("");
  expect(themeBuilder.survey.backgroundImage).toBe("");

  themePlugin.deactivate();
  themePlugin.activate();
  themeBuilder = themePlugin.model as ThemeBuilder;
  themeEditorSurvey = themeBuilder.themeEditorSurvey;
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeBuilder.backgroundImage).toBe("");
  expect(themeBuilder.survey.backgroundImage).toBe("");
});
test("Keep background image in theme modifications", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
  creator.JSON = {
    questions: [{ type: "text", name: "q1" }]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeBuilder = themePlugin.model as ThemeBuilder;
  let themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  expect(creator.theme.backgroundImage).toBe(undefined);
  expect(themeBuilder.backgroundImage).toBe(undefined);
  expect(themeBuilder.survey.backgroundImage).toBe(undefined);

  themeEditorSurvey.getQuestionByName("backgroundImage").value = lionImage;
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeBuilder.backgroundImage).toBe(lionImage);
  expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
  expect(themeBuilder.survey.backgroundImage).toBe(lionImage);

  themeChooser.value = "flat";
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeBuilder.backgroundImage).toBe(lionImage);
  expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
  expect(themeBuilder.survey.backgroundImage).toBe(lionImage);

  themePlugin.deactivate();
  expect(creator.theme.backgroundImage).toBe(lionImage);

  themePlugin.activate();
  themeBuilder = themePlugin.model as ThemeBuilder;
  themeEditorSurvey = themeBuilder.themeEditorSurvey;
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeBuilder.backgroundImage).toBe(lionImage);
  expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
  expect(themeBuilder.survey.backgroundImage).toBe(lionImage);
});
test("Keep theme modifications between edit sessions", (): any => {
  let creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let savedTheme = {};
  creator.saveThemeFunc = () => {
    savedTheme = creator.theme;
  };
  creator.JSON = {
    questions: [{ type: "text", name: "q1" }]
  };
  let themePlugin: ThemeTabPlugin = creator.getPlugin<ThemeTabPlugin>("theme");
  themePlugin.activate();
  let themeBuilder = themePlugin.model as ThemeBuilder;
  let themeEditorSurvey = themeBuilder.themeEditorSurvey;
  let primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  themeChooser.value = "layered";
  primaryBackColor.value = "#0000ff";
  expect(savedTheme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

  creator = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [{ type: "text", name: "q1" }]
  };
  creator.theme = savedTheme;
  themePlugin = creator.getPlugin<ThemeTabPlugin>("theme");
  themePlugin.activate();
  themeEditorSurvey = themeBuilder.themeEditorSurvey;
  primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.value).toBe("layered");
  expect(primaryBackColor.value).toBe("rgba(0, 0, 255, 1)");
  expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
});
test("Set and use custom default theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  expect(ThemeBuilder.DefaultTheme).toEqual(Themes["default-light"]);

  const themes: string[] = [].concat(PredefinedThemes);
  expect(themePlugin.availableThemes).toStrictEqual(themes);

  const customTheme = { themeName: "custom", cssVariables: { "--a-var": "aVal" } };
  const fullThemeName = themePlugin.addTheme(customTheme, true);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(ThemeBuilder.DefaultTheme).toEqual(customTheme);
  expect(themePlugin.availableThemes).toStrictEqual(["custom"].concat(themes));

  themePlugin.activate();
  let themeBuilder = themePlugin.model;
  let themeEditorSurvey = themeBuilder.themeEditorSurvey;
  let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.value).toBe("custom");
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");

  let primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  primaryBackColor.value = "#0000ff";
  expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
  expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

  themeBuilder.resetTheme();
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");
  expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe(undefined);
  expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe(undefined);

  themePlugin.deactivate();
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");

  themePlugin.activate();
  themeBuilder = themePlugin.model as ThemeBuilder;
  themeEditorSurvey = themeBuilder.themeEditorSurvey;
  themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  expect(themeChooser.value).toBe("custom");
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");

  themePlugin.removeTheme(customTheme);
  expect(ThemeBuilder.DefaultTheme).toEqual(Themes["default-light"]);
  expect(themeChooser.value).toBe("default");
  expect(creator.theme.cssVariables["--a-var"]).toBe(undefined);
  expect(themeBuilder.survey.themeVariables["--a-var"]).toBe(undefined);
  expect(themePlugin.availableThemes[0]).toBe("default");
  expect(themePlugin.availableThemes).toStrictEqual(themes);
});
test("Reset theme action calls confitmation dialog", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  let message = "";
  surveySettings.confirmActionAsync = (text, callback) => {
    message = text;
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

  themePlugin["resetTheme"].action();

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

  expect(message).toBe("Do you really want to reset the theme? All your customizations will be lost.");
  surveySettings.confirmActionAsync = originalCallback;
});
test("Kepp background image on reset theme action", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  surveySettings.confirmActionAsync = (text, callback) => {
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const customTheme = { themeName: "custom", backgroundImage: "image.png" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  creator.theme = customTheme;

  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const backgroundImage = themeEditor.getQuestionByName("backgroundImage");

  expect(backgroundImage.value).toEqual("image.png");
  expect(themeSurveyTab.survey.backgroundImage).toEqual("image.png");

  themePlugin["resetTheme"].action();
  expect(backgroundImage.value).toEqual("image.png");
  expect(themeSurveyTab.survey.backgroundImage).toEqual("image.png");

  surveySettings.confirmActionAsync = originalCallback;
  themePlugin.removeTheme(customTheme);
});

test("Check Theme builder's custom questions respect creator locale", (): any => {
  editorLocalization.currentLocale = "test";
  editorLocalization.locales["test"] = {
    theme: {
      opacity: "opacity_test",
      boxShadowX: "boxShadowX_test",
      backcolor: "backcolor_test",
      fontFamily: "fontFamily_test"
    }
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.locale = "test";
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  expect(themeEditor.getQuestionByName("--sjs-primary-backcolor").contentPanel.getQuestionByName("opacity").title).toBe("opacity_test");
  expect(themeEditor.getQuestionByName("--sjs-shadow-small").contentQuestion.panels[0].getQuestionByName("x").title).toBe("boxShadowX_test");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").colorTitle).toBe("backcolor_test");
  expect(themeEditor.getQuestionByName("editorFont").contentPanel.getQuestionByName("family").title).toBe("fontFamily_test");
  editorLocalization.currentLocale = "en";
});
test("saveTheme action", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);
  expect(themePlugin["saveThemeAction"].visible).toBeFalsy();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  creator.activeTab = "theme";
  expect(themePlugin["saveThemeAction"].visible).toBeTruthy();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  const themeSurveyTab = themePlugin.model as ThemeBuilder;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "some val";
  expect(themePlugin["saveThemeAction"].enabled).toBeTruthy();
  themePlugin["saveThemeAction"].action();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);
});

test("Disable/enable themePalette property for custom theme variations in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("panels");
  expect(themeMode.isReadOnly).toBeFalsy();
  expect(themePalette.value).toBe("light");
  expect(themePalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeTruthy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeTruthy();

  const fullLightThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "light", cssVariables: {} });
  expect(fullLightThemeName).toBe("custom-light-panelless");
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  expect(themeChooser.value).toBe("custom");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeTruthy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeFalsy();

  themePlugin.removeTheme(fullThemeName);
  themePlugin.removeTheme(fullLightThemeName);
});

test("Disable/enable themeMode property for custom theme variations in theme property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
  const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;

  expect(themeChooser.value).toBe("default");
  expect(themeMode.value).toBe("panels");
  expect(themeMode.isReadOnly).toBeFalsy();
  expect(themePalette.value).toBe("light");
  expect(themePalette.isReadOnly).toBeFalsy();

  const fullThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: true, "colorPalette": "dark", cssVariables: {} });
  expect(fullThemeName).toBe("custom-dark-panelless");
  expect(Themes[fullThemeName]).toBeDefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  themeChooser.value = "custom";

  expect(themeChooser.value).toBe("custom");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeTruthy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeTruthy();

  const fullPanellessThemeName = themePlugin.addTheme({ "themeName": "custom", isPanelless: false, "colorPalette": "dark", cssVariables: {} });
  expect(fullPanellessThemeName).toBe("custom-dark");
  expect(Themes[fullPanellessThemeName]).toBeDefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast",
    "custom"
  ]);

  expect(themeChooser.value).toBe("custom");
  expect(themeMode.value).toBe("lightweight");
  expect(themeMode.isReadOnly).toBeFalsy();
  expect(themePalette.value).toBe("dark");
  expect(themePalette.isReadOnly).toBeTruthy();

  themePlugin.removeTheme(fullThemeName, true);
  expect(Themes[fullThemeName]).toBeUndefined();
  expect(Themes[fullPanellessThemeName]).toBeUndefined();
  expect(themeChooser.choices.map(c => c.value)).toStrictEqual([
    "default",
    "sharp",
    "borderless",
    "flat",
    "plain",
    "doubleborder",
    "layered",
    "solid",
    "threedimensional",
    "contrast"
  ]);
});

test("Simulator survey should respect survey current locale", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    "locale": "fr",
    "logo": {
      "fr": "FR logo",
    },
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  expect(themeBuilder.simulator.survey.locale).toBe(creator.survey.locale);
  expect(themeBuilder.simulator.survey.locLogo.renderedHtml).toBe("FR logo");
});

test("onPropertyGridSurveyCreated: Modify property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.onPropertyGridSurveyCreated.add((sender: ThemeTabPlugin, options: IPropertyGridSurveyCreatedEvent) => {
    const defaultValueElement = sender.model.themeEditorSurvey.findQuestionByName("questionTitle")["defaultValue"];

    const newFontSettings = Serializer.createClass("fontsettings", { name: "custom-question-title" });
    options.addEditorIntoPropertyGridAfterQuestion(newFontSettings, "questionTitle");
    newFontSettings.title = "Question title font";
    newFontSettings.value = defaultValueElement;

    options.removeEditorFromPropertyGrid("questionTitle");

    const newMatrixFontSettings = Serializer.createClass("fontsettings", { name: "matrix-title" });
    options.addEditorIntoPropertyGridAfterQuestion(newMatrixFontSettings, "questionDescription");
    newMatrixFontSettings.title = "Matrix title font";
    newMatrixFontSettings.value = defaultValueElement;
  });
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeBuilder;
  const themeEditor = themeBuilder.themeEditorSurvey;

  const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");
  expect(questionTitleFontSettings).toBeNull();
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-family"]).toBe("Open Sans");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-weight"]).toBe("600");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-color"]).toBe("rgba(0, 0, 0, 0.91)");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-custom-question-title-size"]).toBe("16px");

  expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-family"]).toBe("Open Sans");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-weight"]).toBe("600");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-color"]).toBe("rgba(0, 0, 0, 0.91)");
  expect(themeBuilder.currentThemeCssVariables["--sjs-font-matrix-title-size"]).toBe("16px");
});