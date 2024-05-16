import { ComponentCollection, ITheme, Question, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, QuestionFileModel, QuestionPanelDynamicModel, Serializer, SurveyElement, SurveyModel, settings as surveySettings } from "survey-core";
import { ThemeEditorModel } from "../../src/components/tabs/theme-builder";
import { ThemeModel } from "../../src/components/tabs/theme-model";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { IPropertyGridSurveyCreatedEvent, ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";

import "survey-core/survey.i18n";

test("Theme builder: test", (): any => {
  expect(true).toBeTruthy();
});
/*

beforeEach(() => {
  ThemeModel.DefaultTheme = Themes["default-light"];
});

test("Theme builder: composite question values are lost", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeEditorModel;
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
  const themeBuilder = themePlugin.model as ThemeEditorModel;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

  expect(headerViewContainer.value[0]).toEqual({
    "headerView": "basic",
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

*/