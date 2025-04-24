import { ITheme, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, SurveyElement } from "survey-core";
import { HeaderModel, registerSurveyTheme, ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { editorLocalization } from "../../src/editorLocalization";
import { settings } from "../../src/creator-settings";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-alpha";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/shadow-effects";
export * from "../../src/components/tabs/theme-custom-questions/shadow-effects";
export * from "../../src/property-grid/theme-settings";
export * from "../../src/property-grid/header-settings";

import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);

test("IHeader de/serialization", (): any => {
  const themeModel = new ThemeModel();
  expect(themeModel.toJSON().header).toStrictEqual({ "backgroundImageFit": "cover", "backgroundImageOpacity": 100, "descriptionPositionX": "left", "descriptionPositionY": "bottom", "height": 0, "inheritWidthFrom": "survey", "logoPositionX": "left", "logoPositionY": "top", "mobileHeight": 0, "overlapEnabled": false, "textAreaWidth": 0, "titlePositionX": "left", "titlePositionY": "bottom" });

  const themeJson = <ITheme>{
    themeName: "custom",
    colorPalette: "light",
    isPanelless: true,
    headerView: "advanced",
    header: {
      "height": 300,
      "inheritWidthFrom": "container",
      "textAreaWidth": 600,
      "mobileHeight": 0,
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
    }
  };
  themeModel.fromJSON(themeJson);
  const header = themeModel.header as HeaderModel;
  expect(header["headerView"]).toBe("advanced");

  const result = themeModel.toJSON();
  expect(result.header).toStrictEqual(themeJson.header!);
});

test("set headerViewContainer basic", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();
  const header = themeModel.header as HeaderModel;

  let currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBeUndefined();

  header["surveyTitle"] = { family: "Courier New", weight: "400", size: 41 };
  header["surveyDescription"] = { family: "Trebuchet MS", weight: "800", size: 21 };
  header["logoPosition"] = "right";

  currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBe("Courier New");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBe("41px");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBe("Trebuchet MS");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBe("21px");

  const result = themeModel.toJSON();
  expect(result.header).toStrictEqual({ "backgroundImageFit": "cover", "backgroundImageOpacity": 100, "descriptionPositionX": "left", "descriptionPositionY": "bottom", "height": 0, "inheritWidthFrom": "survey", "logoPositionX": "left", "logoPositionY": "top", "mobileHeight": 0, "overlapEnabled": false, "textAreaWidth": 0, "titlePositionX": "left", "titlePositionY": "bottom" });
});

test("set headerViewContainer advanced", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();
  const header = themeModel.header as HeaderModel;

  let currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBeUndefined();

  header["headerView"] = "advanced";
  header.height = 300;
  header.inheritWidthFrom = "container";
  header.textAreaWidth = 600;
  header["backgroundColorSwitch"] = "custom";
  header["backgroundColor"] = "#5094ed";
  header.backgroundImage = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
  header.backgroundImageFit = "fill";
  header.backgroundImageOpacity = 50;
  header.overlapEnabled = true;
  header.logoPositionX = "center";
  header.logoPositionY = "middle";
  header.titlePositionX = "center";
  header.titlePositionY = "middle";
  header.descriptionPositionX = "center";
  header.descriptionPositionY = "middle";

  header["headerTitle"] = { color: "#FBFF24", weight: "400", size: 39, family: "Georgia" };
  header["headerDescription"] = { color: "rgba(50, 16, 218, 0.45)", weight: "800", size: 19, family: "Verdana" };

  const result = themeModel.toJSON();
  expect(result.header).toStrictEqual({
    "height": 300,
    "inheritWidthFrom": "container",
    "textAreaWidth": 600,
    "mobileHeight": 0,
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

  currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
  expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("#FBFF24");
  expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBe("Verdana");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(50, 16, 218, 0.45)");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBe("19px");
  expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBe("#5094ed");
});

test("headerViewContainer survey title & description", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();
  const header = themeModel.header as HeaderModel;

  let currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();

  header["headerView"] = "advanced";
  header["headerTitle"] = { family: settings.themeEditor.defaultFontFamily, weight: "700", size: 32, color: "rgba(255, 255, 255, 1)" };
  header["headerDescription"] = { family: settings.themeEditor.defaultFontFamily, weight: "400", size: 16, color: "rgba(255, 255, 255, 1)" };

  currentThemeCssVariables = themeModel.cssVariables || {};
  expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(255, 255, 255, 1)");
  expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(255, 255, 255, 1)");
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
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerTitleQuestion = groupHeader.elements[0].contentPanel.getElementByName("headerTitle");
  const headerDescriptionQuestion = groupHeader.elements[0].contentPanel.getElementByName("headerDescription");

  expect(headerTitleQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(219, 15, 15, 0.91)");
  expect(headerDescriptionQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(50, 16, 218, 0.45)");
});

test("headerViewContainer: restore backgroundColorSwitch", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeModel = themePlugin.themeModel as ThemeModel;
  let header = themeModel.header as HeaderModel;

  expect(header["backgroundColorSwitch"]).toEqual("none");
  expect(header["backgroundColor"]).toBeUndefined();

  header["backgroundColorSwitch"] = "accentColor";
  expect(header["backgroundColor"]).toBeUndefined();

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe(HeaderModel.primaryColorStr);

  creator.activeTab = "theme";
  header = themeModel.header as HeaderModel;

  expect(header["backgroundColorSwitch"]).toEqual("accentColor");
  expect(header["backgroundColor"]).toBeUndefined();

  header["backgroundColorSwitch"] = "custom";
  expect(header["backgroundColor"]).toBeUndefined();
  header["backgroundColor"] = "#ff0000";

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  header = themeModel.header as HeaderModel;

  expect(header["backgroundColorSwitch"]).toEqual("custom");
  expect(header["backgroundColor"]).toBe("#ff0000");
});

test("headerViewContainer: background color", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeModel = themePlugin.themeModel as ThemeModel;
  let header = themeModel.header as HeaderModel;

  expect(header["backgroundColorSwitch"]).toBe("none");
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

  header["backgroundColorSwitch"] = "accentColor";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe(HeaderModel.primaryColorStr);

  header["backgroundColorSwitch"] = "custom";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

  header["backgroundColor"] = "#5094ed";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#5094ed");

  header["backgroundColorSwitch"] = "none";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
});

test("headerViewContainer: background color reset #5940", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };

  creator.activeTab = "theme";
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let themeModel = themePlugin.themeModel as ThemeModel;
  let header = themeModel.header as HeaderModel;

  expect(header["backgroundColorSwitch"]).toBe("none");
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

  header["backgroundColorSwitch"] = "accentColor";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe(HeaderModel.primaryColorStr);
  expect(themeModel.cssVariables["--sjs-header-backcolor"]).toBe(HeaderModel.primaryColorStr);

  header["backgroundColorSwitch"] = "none";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

  creator.activeTab = "designer";
  creator.activeTab = "theme";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
});

test("header custom background color and theme changes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  creator.activeTab = "theme";
  let themeModel = themePlugin.themeModel as ThemeModel;
  let header = themeModel.header as HeaderModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  let themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  let primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");

  expect(themeChooser.value).toEqual("default");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");

  expect(header["backgroundColorSwitch"]).toEqual("none");
  expect(header["backgroundColor"]).toBeUndefined();

  header["backgroundColorSwitch"] = "custom";
  expect(header["backgroundColor"]).toBeUndefined();
  header["backgroundColor"] = "#ff0000";

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");

  expect(themeModel.themeCssCustomizations["--sjs-header-backcolor"]).toBe("#ff0000");
  expect(themeChooser.value).toEqual("default");
  expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
  expect(header["backgroundColorSwitch"]).toEqual("custom");
  expect(header["backgroundColor"]).toBe("#ff0000");

  themeModel.selectTheme("contrast");
  expect(themeChooser.value).toEqual("contrast");
  expect(themeModel.themeCssCustomizations["--sjs-header-backcolor"]).toBe("#ff0000");
  expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
  expect(header["backgroundColorSwitch"]).toEqual("custom");
  expect(header["backgroundColor"]).toBe("#ff0000");

  creator.activeTab = "designer";
  expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

  creator.activeTab = "theme";
  themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");

  expect(themeChooser.value).toEqual("contrast");
  expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
  expect(header["backgroundColorSwitch"]).toEqual("custom");
  expect(header["backgroundColor"]).toBe("#ff0000");
});

test("set backgroundImage into header", (): any => {
  const themeModel = new ThemeModel();
  const header = themeModel.header as HeaderModel;

  header.backgroundImage = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
  header.backgroundImageFit = "contain";
  header.backgroundImageOpacity = 50;

  const result = themeModel.toJSON();
  expect(result).toStrictEqual({
    "backgroundImage": "",
    "backgroundImageAttachment": "scroll",
    "backgroundImageFit": "cover",
    "backgroundOpacity": 1,
    "cssVariables": {
      "--sjs-font-family": "Open Sans",
      "--sjs-font-size": "16px",
    },
    "header": {
      "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
      "backgroundImageFit": "contain",
      "backgroundImageOpacity": 0.5,
      "descriptionPositionX": "left",
      "descriptionPositionY": "bottom",
      "height": 0,
      "inheritWidthFrom": "survey",
      "logoPositionX": "left",
      "logoPositionY": "top",
      "mobileHeight": 0,
      "overlapEnabled": false,
      "textAreaWidth": 0,
      "titlePositionX": "left",
      "titlePositionY": "bottom",
    },
    "headerView": "advanced",
  });
});