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

test("disable irrelevant settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  themePlugin.activate();
  let themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;

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
  themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
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
  let themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
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
  themeEditorSurvey = (themePlugin.model as ThemeEditorModel).themeEditorSurvey;
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
  const themeBuilder = themePlugin.model as ThemeEditorModel;
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
      "family": "Open Sans",
      "size": 16,
      "weight": "600",
    },
    "headerTitle": {
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
  const themeBuilder = themePlugin.model as ThemeEditorModel;
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
  const themeBuilder = themePlugin.model as ThemeEditorModel;
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

test("headerViewContainer survey title & description", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeEditorModel;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
  const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

  let currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();

  headerViewContainer.getElementByName("headerView").value = "advanced";
  headerTitleQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";
  headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";

  currentThemeCssVariables = creator.theme.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(255, 255, 255, 1)");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(255, 255, 255, 1)");
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

test("headerViewContainer get color values from theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    "cssVariables": {
      "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
      "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
    },
    "header": {
      "backgroundImage": "",
      "height": 256,
      "inheritWidthFrom": "container",
      "textAreaWidth": 512,
      "overlapEnabled": false,
      "backgroundImageOpacity": 1,
      "backgroundImageFit": "cover",
      "logoPositionX": "right",
      "logoPositionY": "top",
      "titlePositionX": "left",
      "titlePositionY": "bottom",
      "descriptionPositionX": "left",
      "descriptionPositionY": "bottom"
    }
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeEditorModel;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;
  const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
  const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

  expect(headerTitleQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(219, 15, 15, 0.91)");
  expect(headerDescriptionQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(50, 16, 218, 0.45)");
});

test("headerViewContainer: restore backgroundColorSwitch", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeBuilder = themePlugin.model as ThemeEditorModel;
  let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  headerViewContainer.getElementByName("headerView").value = "advanced";
  expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

  creator.activeTab = "theme";
  themeBuilder = themePlugin.model as ThemeEditorModel;
  headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("none");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
  headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  themeBuilder = themePlugin.model as ThemeEditorModel;
  headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
});

test("headerViewContainer: background color", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeBuilder = themePlugin.model as ThemeEditorModel;
  let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  headerViewContainer.getElementByName("headerView").value = "advanced";
  expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toBe("accentColor");
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

  headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#5094ed");

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "accentColor";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
});

test("onPropertyGridSurveyCreated: Modify property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.themeEditor.onPropertyGridSurveyCreated.add((sender: ThemeTabPlugin, options: IPropertyGridSurveyCreatedEvent) => {
    const defaultValueElement = options.survey.findQuestionByName("questionTitle")["defaultValue"];

    const newFontSettings = Serializer.createClass("fontsettings", { name: "custom-question-title" });
    options.model.addPropertyGridEditor({ element: newFontSettings, insertBefore: "questionTitle" });
    newFontSettings.title = "Question title font";
    newFontSettings.value = defaultValueElement;

    const newMatrixFontSettings = Serializer.createClass("fontsettings", { name: "matrix-title" });
    options.model.addPropertyGridEditor({ element: newMatrixFontSettings, insertAfter: "questionTitle" });
    newMatrixFontSettings.title = "Matrix title font";
    newMatrixFontSettings.value = defaultValueElement;

    options.model.removePropertyGridEditor("questionTitle");
  });
  creator.themeEditor.activate();
  const themeBuilder = creator.themeEditor.model as ThemeEditorModel;
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

test("onPropertyGridSurveyCreated: Modify property grid & switch themeName", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.themeEditor.onPropertyGridSurveyCreated.add((sender: ThemeTabPlugin, options: IPropertyGridSurveyCreatedEvent) => {
    options.model.themeEditorSurvey.getAllQuestions().forEach(q => {
      if (q.name !== "themeName") {
        options.model.removePropertyGridEditor(q.name);
      }
    });

    const newFontSettings = Serializer.createClass("fontsettings", { name: "custom-question-title" });
    options.model.addPropertyGridEditor({ element: newFontSettings, insertAfter: "themeName" });

    const newMatrixFontSettings = Serializer.createClass("fontsettings", { name: "matrix-title" });
    options.model.addPropertyGridEditor({ element: newMatrixFontSettings, insertAfter: "themeName" });
  });
  creator.themeEditor.activate();
  const themeBuilder = creator.themeEditor.model as ThemeEditorModel;
  const themeEditorSurvey = themeBuilder.themeEditorSurvey;

  expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
  const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  themeChooser.value = "flat";
  expect(themeEditorSurvey.getAllQuestions()).toHaveLength(3);
});

test("header custom background color and theme changes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  creator.activeTab = "theme";
  let themeBuilder = themePlugin.model as ThemeEditorModel;
  let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
  let themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  let primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");

  expect(themeChooser.value).toEqual("default");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");

  headerViewContainer.getElementByName("headerView").value = "advanced";
  expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

  headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
  expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
  headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  themeBuilder = themePlugin.model as ThemeEditorModel;
  themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  expect(themeChooser.value).toEqual("default");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

  themeBuilder.selectTheme("contrast");
  expect(themeChooser.value).toEqual("contrast");
  expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  themeBuilder = themePlugin.model as ThemeEditorModel;
  themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

  expect(themeChooser.value).toEqual("contrast");
  expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
  expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
  expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
});
