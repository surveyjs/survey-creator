import { ITheme, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, SurveyElement } from "survey-core";
import { HeaderModel, ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { editorLocalization } from "../../src/editorLocalization";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
export * from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
export * from "../../src/property-grid/theme-settings";

test("IHeader de/serialization", (): any => {
  const themeModel = new ThemeModel();
  expect(themeModel.toJSON().header).toBe(undefined);

  const themeJson = <ITheme>{
    themeName: "custom",
    colorPalette: "light",
    isPanelless: true,
    header: {
      "height": 300,
      "inheritWidthFrom": "survey",
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
    }
  };
  themeModel.fromJSON(themeJson);
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

  currentThemeCssVariables = themeModel.cssVariables;
  expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBe("Courier New");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBe("400");
  expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBe("41px");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBe("Trebuchet MS");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBe("800");
  expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBe("21px");
});

// test("set headerViewContainer advanced", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
//   const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

//   let currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBeUndefined();

//   headerViewContainer.getElementByName("logoPosition").value = "right";
//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   headerViewContainer.getElementByName("height").value = 300;
//   headerViewContainer.getElementByName("inheritWidthFrom").value = "container";
//   headerViewContainer.getElementByName("textAreaWidth").value = 600;
//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
//   headerViewContainer.getElementByName("backgroundImage").value = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
//   headerViewContainer.getElementByName("backgroundImageFit").value = "fill";
//   headerViewContainer.getElementByName("backgroundImageOpacity").value = 50;
//   headerViewContainer.getElementByName("overlapEnabled").value = true;
//   headerViewContainer.getElementByName("logoPositionX").value = "center";
//   headerViewContainer.getElementByName("logoPositionY").value = "middle";
//   headerViewContainer.getElementByName("titlePositionX").value = "center";
//   headerViewContainer.getElementByName("titlePositionY").value = "middle";
//   headerViewContainer.getElementByName("descriptionPositionX").value = "center";
//   headerViewContainer.getElementByName("descriptionPositionY").value = "middle";
//   headerTitleQuestion.contentPanel.getQuestionByName("color").value = "#FBFF24";
//   headerTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
//   headerTitleQuestion.contentPanel.getQuestionByName("size").value = 39;
//   headerTitleQuestion.contentPanel.getQuestionByName("family").value = "Georgia";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(50, 16, 218, 0.45)";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("size").value = 19;
//   headerDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Verdana";

//   expect(creator.theme.header).toStrictEqual({
//     "height": 300,
//     "inheritWidthFrom": "container",
//     "textAreaWidth": 600,
//     "overlapEnabled": true,
//     "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//     "backgroundImageOpacity": 0.5,
//     "backgroundImageFit": "fill",
//     "logoPositionX": "center",
//     "logoPositionY": "middle",
//     "titlePositionX": "center",
//     "titlePositionY": "middle",
//     "descriptionPositionX": "center",
//     "descriptionPositionY": "middle"
//   });

//   currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(251, 255, 36, 1)");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBe("Verdana");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBe("800");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(50, 16, 218, 0.45)");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBe("19px");
//   expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBe("#5094ed");
// });

// test("headerViewContainer survey title & description", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
//   const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

//   let currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   headerTitleQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";

//   currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(255, 255, 255, 1)");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(255, 255, 255, 1)");
// });

// test("restore headerViewContainer values", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.theme = {
//     "cssVariables": {
//       "--sjs-corner-radius": "20px",
//       "--sjs-base-unit": "9.6px",
//       "--sjs-font-size": "17.6px",
//       "--sjs-header-backcolor": "#5094ed",
//       "--sjs-font-surveytitle-family": "Courier New",
//       "--sjs-font-surveytitle-weight": "400",
//       "--sjs-font-surveytitle-size": "41px",
//       "--sjs-font-surveydescription-family": "Trebuchet MS",
//       "--sjs-font-surveydescription-weight": "800",
//       "--sjs-font-surveydescription-size": "21px",
//       "--sjs-font-headertitle-family": "Georgia",
//       "--sjs-font-headertitle-weight": "800",
//       "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
//       "--sjs-font-headertitle-size": "39px",
//       "--sjs-font-headerdescription-family": "Verdana",
//       "--sjs-font-headerdescription-weight": "800",
//       "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
//       "--sjs-font-headerdescription-size": "19px"
//     },
//     "header": {
//       "height": 300,
//       "inheritWidthFrom": "container",
//       "textAreaWidth": 600,
//       "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//       "backgroundImageOpacity": 0.5,
//       "backgroundImageFit": "fill",
//       "overlapEnabled": true,
//       "logoPositionX": "center",
//       "logoPositionY": "middle",
//       "titlePositionX": "center",
//       "titlePositionY": "middle",
//       "descriptionPositionX": "center",
//       "descriptionPositionY": "middle"
//     }
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

//   expect(headerViewContainer.value[0]).toStrictEqual({
//     "headerView": "basic",
//     "logoPosition": "left",
//     "inheritWidthFrom": "container",
//     "backgroundColor": "#5094ed",
//     "backgroundColorSwitch": "custom",
//     "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//     "backgroundImageFit": "fill",
//     "backgroundImageOpacity": 50,
//     "overlapEnabled": true,
//     "logoPositionX": "center",
//     "logoPositionY": "middle",
//     "titlePositionX": "center",
//     "titlePositionY": "middle",
//     "descriptionPositionX": "center",
//     "descriptionPositionY": "middle",
//     "textAreaWidth": 600,
//     "height": 300,
//     "headerDescription": {
//       "color": "rgba(50, 16, 218, 0.45)",
//       "family": "Verdana",
//       "size": 19,
//       "weight": "800",
//     },
//     "headerTitle": {
//       "color": "rgba(219, 15, 15, 0.91)",
//       "family": "Georgia",
//       "size": 39,
//       "weight": "800",
//     },
//     "surveyDescription": {
//       "family": "Trebuchet MS",
//       "size": 21,
//       "weight": "800",
//     },
//     "surveyTitle": {
//       "family": "Courier New",
//       "size": 41,
//       "weight": "400",
//     },
//   });
// });

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
  const groupHeader = themePlugin.propertyGrid.survey.pages[0].getElementByName("header");
  const headerTitleQuestion = groupHeader.elements[0].contentPanel.getElementByName("headerTitle");
  const headerDescriptionQuestion = groupHeader.elements[0].contentPanel.getElementByName("headerDescription");

  expect(headerTitleQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(219, 15, 15, 0.91)");
  expect(headerDescriptionQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(50, 16, 218, 0.45)");
});

// test("headerViewContainer: restore backgroundColorSwitch", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   creator.activeTab = "theme";
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("none");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
//   headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
// });

// test("headerViewContainer: background color", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   creator.activeTab = "theme";
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toBe("accentColor");
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#5094ed");

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "accentColor";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
// });

// test("header custom background color and theme changes", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

//   creator.activeTab = "theme";
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   let themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   let primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");

//   expect(themeChooser.value).toEqual("default");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
//   headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(themeChooser.value).toEqual("default");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

//   themeBuilder.selectTheme("contrast");
//   expect(themeChooser.value).toEqual("contrast");
//   expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(themeChooser.value).toEqual("contrast");
//   expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
// });