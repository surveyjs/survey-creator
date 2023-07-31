import { CreatorTester } from "../creator-tester";
import { PredefinedColors, ThemeSurveyTabViewModel, Themes } from "../../src/components/tabs/theme";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../src/components/tabs/theme-custom-questions/element-settings";
import { fontsettingsToCssVariable, fontsettingsFromCssVariable } from "../../src/components/tabs/theme-custom-questions/font-settings";
import { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
import { TabThemePlugin } from "../../src/components/tabs/theme-plugin";
import { assign, parseColor } from "../../src/utils/utils";
import { ComponentCollection, Question, Serializer, SurveyModel } from "survey-core";

import "survey-core/survey.i18n";

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

test("Theme builder initialization", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(themeEditor.getQuestionByName("themeName").value).toEqual("default");
  expect(themeEditor.getQuestionByName("themeMode").value).toEqual("panels");
  expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.getQuestionByName("backgroundImage").value).toEqual(undefined);
  expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("cover");
  expect(themeEditor.getQuestionByName("backgroundOpacity").value).toEqual(100);
  expect(themeEditor.getQuestionByName("panelBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("questionBackgroundTransparency").value).toEqual(100);
  expect(themeEditor.getQuestionByName("--sjs-font-size").value).toEqual("16px");

  expect(themeEditor.getQuestionByName("commonScale").value).toEqual(100);
  expect(themeEditor.getQuestionByName("--sjs-base-unit").value).toEqual("8px");

  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(4);
  expect(themeEditor.getQuestionByName("--sjs-corner-radius").value).toEqual("4px");

  const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  expect(colorQuestions[0].choices.length).toEqual(7);
  expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.values(PredefinedColors.light));
});

test("Theme builder panelBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const panelBackgroundTransparency = themeEditor.getQuestionByName("panelBackgroundTransparency");

  expect(panelBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-question-background"]).toBeUndefined();

  panelBackgroundTransparency.value = 60;
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = "#eeeeee";
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

test("Theme builder: survey settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
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

  expect(simulatorSurvey.backgroundImage).toEqual("");
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
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
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
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();

  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual("rgba(22, 22, 22, 1)");
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("700");
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(32);
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Open Sans");

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "500", color: "#161616", size: 32 };

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("500");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("rgba(22, 22, 22, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");

  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("color").value).toEqual("rgba(22, 22, 22, 1)");
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("weight").value).toEqual("500");
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("size").value).toEqual(32);
  expect(surveyTitleFontSettings.contentPanel.getQuestionByName("family").value).toEqual("Open Sans");
});

test("Theme builder: composite question values are lost", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const surveyTitleFontSettings = themeEditor.getQuestionByName("surveyTitle");
  const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  surveyTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#161616", size: 32 };

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("rgba(22, 22, 22, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Open Sans", weight: "semiBold", color: "#101010", size: 28 };

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-family"]).toEqual("Open Sans");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-color"]).toEqual("rgba(22, 22, 22, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-surveytitle-size"]).toEqual("32px");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-family"]).toEqual("Open Sans");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-color"]).toEqual("rgba(16, 16, 16, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
});

test("fontsettings: fontsettingsToCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{ type: "fontsettings", name: "questionTitle" }],
  });
  const question = survey.findQuestionByName("questionTitle");
  question.value = {
    "family": "Verdana, sans-serif",
    "weight": "700",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  };
  const result = {};
  fontsettingsToCssVariable(question, result);
  expect(result).toEqual({
    "--sjs-font-questiontitle-family": "Verdana, sans-serif",
    "--sjs-font-questiontitle-weight": "700",
    "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
    "--sjs-font-questiontitle-size": "18px",
  });
});

test("fontsettings: fontsettingsFromCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{ type: "fontsettings", name: "questiontitle" }],
  });
  const question = survey.findQuestionByName("questiontitle");
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

test("Theme builder: composite question elementSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 255, 255, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(248, 248, 248, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("corner").value).toEqual(4);
  expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual("4px");

  questionPanelSettings.value = { backcolor: "#ff44ff", hovercolor: "#969696", corner: 5 };

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(255, 68, 255, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(150, 150, 150, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");

  expect(questionPanelSettings.contentPanel.getQuestionByName("backcolor").value).toEqual("rgba(255, 68, 255, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("hovercolor").value).toEqual("rgba(150, 150, 150, 1)");
  expect(questionPanelSettings.contentPanel.getQuestionByName("corner").value).toEqual(5);
  expect(questionPanelSettings.contentPanel.getQuestionByName("cornerRadius").value).toEqual("5px");
});

test("elementSettings: elementSettingsToCssVariable", () => {
  const survey = new SurveyModel({
    elements: [{ type: "elementsettings", name: "questionpanel" }],
  });
  const question = survey.findQuestionByName("questionpanel");
  question.value = {
    "backcolor": "rgba(253, 255, 148, 0.5)",
    "hovercolor": "rgba(237, 238, 186, 1)",
    "corner": 4,
  };
  const result = {};
  elementSettingsToCssVariable(question as Question, result);
  expect(result).toEqual({
    "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.5)",
    "--sjs-questionpanel-hovercolor": "rgba(237, 238, 186, 1)",
    "--sjs-questionpanel-cornerRadius": "4px"
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

test("Theme builder reset to default", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

  themeSurveyTab.resetTheme();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();// rgba(249, 249, 249, 1)
});

test("Theme builder themeMode not change modified values ", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const themeMode = themeEditor.getQuestionByName("themeMode");
  const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(questionBackgroundTransparency.value).toEqual(100);
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toBeUndefined();

  questionBackgroundTransparency.value = 60;
  themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
  expect(themeMode.value).toEqual("panels");

  themeMode.value = "lightweight";
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
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
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionDimLightBackground = themeEditor.getQuestionByName("--sjs-general-backcolor-dim-light");

  expect(questionDimLightBackground.value).toEqual("rgba(249, 249, 249, 1)");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(249, 249, 249, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

  themeEditor.getQuestionByName("themeName").value = "ultra";
  expect(questionDimLightBackground.value).toEqual("rgba(255, 216, 77, 1)");
  expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(255, 216, 77, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
});

test("import styles from file", ()=> {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  themeSurveyTab.setThemeFromFile({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
    },
    "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
    "backgroundImageFit": "auto",
    "themeName": "My Theme",
    "themePalette": "light",
    "isPanelless": true
  } as any);

  expect(themeEditor.getQuestionByName("themeName").value).toEqual("My Theme");
  expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
  expect(themeEditor.getQuestionByName("themeMode").value).toEqual("lightweight");
  expect(themeEditor.getQuestionByName("backgroundImage").value).toBeTruthy();
  expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("auto");
});

test("Theme builder: restore values of elementSettings from file", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  expect(questionPanelSettings.value).toEqual({
    "backcolor": "rgba(255, 255, 255, 1)",
    "hovercolor": "rgba(248, 248, 248, 1)",
    "corner": 4,
    "cornerRadius": "4px"
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeSurveyTab.setThemeFromFile(newTheme as any);

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(237, 238, 186, 1)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("6px");

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
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;
  const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  expect(questionTitleFontSettings.value).toEqual({
    "family": "Open Sans",
    "color": "rgba(0, 0, 0, 0.91)",
    "weight": "600",
    "size": 16
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeSurveyTab.setThemeFromFile(newTheme as any);

  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-family"]).toEqual("Verdana, sans-serif");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-weight"]).toEqual("700");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(201, 90, 231, 0.91)");
  expect(themeSurveyTab.currentTheme.cssVariables["--sjs-font-questiontitle-size"]).toEqual("18px");

  expect(questionTitleFontSettings.value).toEqual({
    "family": "Verdana, sans-serif",
    "weight": "700",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  });
});

test("Theme builder: import/export theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  themeEditor.getQuestionByName("questionTitle").contentPanel.getQuestionByName("size").value = 19;

  const newResult = {};
  assign(newResult, Themes["default"], {
    "--sjs-font-questiontitle-color": "rgba(0, 0, 0, 0.91)",
    "--sjs-font-questiontitle-family": "Open Sans",
    "--sjs-font-questiontitle-size": "19px",
    "--sjs-font-questiontitle-weight": "600"
  }
  );
  expect(themeSurveyTab.currentTheme.cssVariables || {}).toEqual(newResult);
});

test("Theme onModified and saveThemeFunc", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let modificationsLog = "";
  creator.onModified.add((s, o) => {
    modificationsLog += "->" + o.type;
  });
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = () => {
    saveThemeCount++;
  };
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(creator.isThemePristine).toBeTruthy();
  expect(modificationsLog).toBe("");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);

  themeEditor.getQuestionByName("--sjs-border-default").value = "#ff0000";

  expect(creator.isThemePristine).toBeFalsy();
  expect(modificationsLog).toBe("->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);

  themeSurveyTab.resetTheme();

  expect(creator.isThemePristine).toBeTruthy();
  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(2);
});

test("Theme builder: trigger responsiveness", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
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
  const themePlugin: TabThemePlugin = <TabThemePlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeSurveyTabViewModel;
  const themeEditor = themeSurveyTab.themeEditorSurvey;

  expect(themeEditor.getQuestionByName("--sjs-corner-radius").value).toEqual("20px");
  expect(themeEditor.getQuestionByName("cornerRadius").value).toEqual(20);
  expect(themeEditor.getQuestionByName("--sjs-base-unit").value).toEqual("9.6px");
  expect(themeEditor.getQuestionByName("commonScale").value).toEqual(120);
  expect(themeEditor.getQuestionByName("--sjs-font-size").value).toEqual("17.6px");
  expect(themeEditor.getQuestionByName("commonFontSize").value).toEqual(110);
});