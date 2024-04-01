import { ComponentCollection, ITheme, Question, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, QuestionFileModel, QuestionPanelDynamicModel, Serializer, SurveyElement, SurveyModel, settings as surveySettings } from "survey-core";
// import { ThemeEditorModel, getThemeChanges } from "../../src/components/tabs/theme-builder";
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
import { settings } from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";
import { editorLocalization } from "../../src/editorLocalization";
import { ThemeModel } from "../../src/components/tabs/theme-model";

import "survey-core/survey.i18n";

const themeFromFile = {
  "cssVariables": {
    "--sjs-font-family": "Segoe",
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

test("assign function", (): any => {
  const result = {};
  assign(result, { name1: "name1" });
  expect(result).toStrictEqual({ name1: "name1" });

  assign(result, { name1: undefined });
  expect(result).toStrictEqual({});
});

test("Theme builder initialization", (): any => {
  // const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  // creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  // const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  // themePlugin.activate();
  // const themeSurveyTab = themePlugin.model as ThemeModel;
  const themeEditor = new ThemeModel();

  expect(themeEditor.themeName).toEqual("default");
  expect(themeEditor.themeMode).toEqual("panels");
  expect(themeEditor.themePalette).toEqual("light");
  expect(themeEditor.backgroundImage).toEqual(undefined);
  expect(themeEditor.backgroundImageFit).toEqual("cover");
  expect(themeEditor.backgroundOpacity).toEqual(100);
  expect(themeEditor.panelBackgroundTransparency).toEqual(100);
  expect(themeEditor.questionBackgroundTransparency).toEqual(100);
  expect(themeEditor.commonScale).toEqual(100);
  expect(themeEditor.cornerRadius).toEqual(4);

  // const colorQuestions = themeEditor.getAllQuestions().filter(q => q.getType() === "color");
  // expect(colorQuestions[0].choices.length).toEqual(7);
  // expect(colorQuestions[0].choices.map(c => c.value)).toStrictEqual(Object.keys(PredefinedColors.light).map(key => PredefinedColors.light[key]));
});

test("Theme model de/serialization", (): any => {
  const themeEditor = new ThemeModel();
  const themeJson = {
    cssVariables: {
      "--sjs-base-unit": "6px",
      "--sjs-corner-radius": "20px",
      "--sjs-font-size": "17.6px",
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
    }
  };
  themeEditor.fromJSON(themeJson);

  expect(themeEditor.commonScale).toBe(75);
  expect(themeEditor.cornerRadius).toBe(20);
  expect(themeEditor.commonFontSize).toBe(110);

  const result = themeEditor.toJSON().cssVariables || {};
  expect(result).toStrictEqual(themeJson.cssVariables);
  expect(result["--sjs-base-unit"]).toBe("6px");
  expect(result["--sjs-corner-radius"]).toBe("20px");
  expect(result["--sjs-font-size"]).toBe("17.6px");
});

test("Theme builder panelBackgroundTransparency", (): any => {
  const themeEditor = new ThemeModel();

  expect(themeEditor.panelBackgroundTransparency).toEqual(100);
  expect(themeEditor.toJSON()["cssVariables"]["--sjs-question-background"]).toBeUndefined();

  themeEditor.panelBackgroundTransparency = 60;
  expect(themeEditor.toJSON()["cssVariables"]["--sjs-question-background"]).toEqual("rgba(255, 255, 255, 0.6)");

  themeEditor.questionPanel.backcolor = "#eeeeee";
  // expect(themeEditor.toJSON()["cssVariables"]["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");

  // themeEditor.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = "#eeeeee";
  // expect(themeSurveyTab.currentThemeCssVariables["--sjs-question-background"]).toEqual("rgba(238, 238, 238, 0.6)");
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const themeEditor = new ThemeModel();
  // const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

  expect(themeEditor.questionBackgroundTransparency).toEqual(100);
  expect(themeEditor.toJSON()["cssVariables"]["--sjs-editor-background"]).toBeUndefined();

  themeEditor.questionBackgroundTransparency = 60;
  expect(themeEditor.toJSON()["cssVariables"]["--sjs-editor-background"]).toEqual("rgba(249, 249, 249, 0.6)");

  // themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
  // expect(themeEditor.toJSON()["cssVariables"]["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
});

// test("Theme builder: survey settings", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const simulatorSurvey = themeSurveyTab.survey;

//   const backgroundImage = themeEditor.getQuestionByName("backgroundImage");
//   const backgroundImageFit = themeEditor.getQuestionByName("backgroundImageFit");
//   const backgroundOpacity = themeEditor.getQuestionByName("backgroundOpacity");
//   const themeMode = themeEditor.getQuestionByName("themeMode");

//   expect(backgroundImage.value).toEqual(undefined);
//   expect(backgroundImageFit.value).toEqual("cover");
//   expect(backgroundOpacity.value).toEqual(100);
//   expect(themeMode.value).toEqual("panels");

//   expect(simulatorSurvey.backgroundImage).toBeFalsy();
//   expect(simulatorSurvey.backgroundImageFit).toEqual("cover");
//   expect(simulatorSurvey.backgroundOpacity).toEqual(1);
//   expect(simulatorSurvey["isCompact"]).toBe(false);

//   backgroundImage.value = "image-url";
//   backgroundImageFit.value = "auto";
//   backgroundOpacity.value = 60;
//   themeMode.value = "lightweight";

//   expect(simulatorSurvey.backgroundImage).toEqual("image-url");
//   expect(simulatorSurvey.backgroundImageFit).toEqual("auto");
//   expect(simulatorSurvey.backgroundOpacity).toEqual(0.6);
//   expect(simulatorSurvey["isCompact"]).toBe(true);
// });

test("Theme builder switch themes", (): any => {
  const themeEditor = new ThemeModel();
  expect(themeEditor.themePalette).toEqual("light");
  expect(themeEditor["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeEditor["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");

  themeEditor.themePalette = "dark";
  expect(themeEditor["--sjs-primary-backcolor"]).toEqual("rgba(255, 152, 20, 1)");
  expect(themeEditor["--sjs-general-backcolor-dim"]).toEqual("rgba(36, 36, 36, 1)");
});

test("Theme builder: composite question fontSettings", (): any => {
  const themeModel = new ThemeModel();
  expect(themeModel.questionTitle).toStrictEqual({ family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 16 });

  let themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-questiontitle-family"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-weight"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-color"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-size"]).toBeUndefined();

  themeModel.questionTitle = { family: "Arial, sans-serif", weight: "500", size: 40 };
  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};

  //expect(themeModelJSONCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeModelJSONCssVariables["--sjs-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeModelJSONCssVariables["--sjs-questiontitle-weight"]).toEqual("500");
  expect(themeModelJSONCssVariables["--sjs-questiontitle-color"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-size"]).toEqual("40px");

  themeModel.questionTitle = { family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 16 };
  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};

  expect(themeModelJSONCssVariables["--sjs-questiontitle-family"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-weight"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-color"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questiontitle-size"]).toBeUndefined();
});

// test("Theme builder: composite question values are lost", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");
//   const pageTitleFontSettings = themeEditor.getQuestionByName("pageTitle");

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

//   questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#fefefe", size: 40 };

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

//   pageTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#101010", size: 28 };

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-color"]).toEqual("rgba(16, 16, 16, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
// });

test("Theme builder: composite question elementSettings", (): any => {
  const themeModel = new ThemeModel();
  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(255, 255, 255, 1)", "hovercolor": "rgba(248, 248, 248, 1)", cornerRadius: 4 });

  let themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(themeModelJSONCssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  themeModel.questionPanel = { backcolor: "#ff44ff", hovercolor: "#969696", cornerRadius: 5 };

  themeModelJSONCssVariables = themeModel.toJSON()["cssVariables"] || {};
  expect(themeModelJSONCssVariables["--sjs-questionpanel-backcolor"]).toEqual("#ff44ff");
  expect(themeModelJSONCssVariables["--sjs-questionpanel-hovercolor"]).toEqual("#969696");
  expect(themeModelJSONCssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");
});

// test("Theme builder reset to default", (): any => {
//   const themeModel = new ThemeModel();
//   const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

//   expect(questionBackgroundTransparency.value).toEqual(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

//   questionBackgroundTransparency.value = 60;
//   themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

//   themeSurveyTab.resetTheme();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();// rgba(249, 249, 249, 1)
// });

// test("Theme builder themeMode not change modified values ", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const themeMode = themeEditor.getQuestionByName("themeMode");
//   const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

//   expect(questionBackgroundTransparency.value).toEqual(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

//   questionBackgroundTransparency.value = 60;
//   themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
//   expect(themeMode.value).toEqual("panels");

//   themeMode.value = "lightweight";
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");
// });

// test("Theme builder export value from composite question", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionDimLightBackground = themeEditor.getQuestionByName("--sjs-general-backcolor-dim-light");

//   expect(questionDimLightBackground.value).toEqual("rgba(249, 249, 249, 1)");
//   expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(249, 249, 249, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

//   themeEditor.getQuestionByName("themeName").value = "contrast";
//   expect(questionDimLightBackground.value).toEqual("rgba(255, 216, 77, 1)");
//   expect(themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value).toBe("rgba(255, 216, 77, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
// });

// test("import theme from file", (done) => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.isAutoSave = true;
//   creator.autoSaveDelay = 0;
//   let saveThemeCount = 0;
//   creator.saveThemeFunc = (saveNo, callback) => {
//     saveThemeCount++;
//     callback(saveNo, "success");
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;

//   const data = JSON.stringify({
//     "cssVariables": {
//       "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
//     },
//     "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
//     "backgroundImageFit": "auto",
//     "themeName": "My Theme",
//     "themePalette": "light",
//     "isPanelless": true
//   } as any, null, 4);
//   const blob = new Blob([data], { type: "application/json" });
//   themePlugin.importFromFile(blob as any, () => {
//     expect(themeEditor.getQuestionByName("themeName").value).toEqual("default");
//     expect(themeEditor.getQuestionByName("themePalette").value).toEqual("light");
//     expect(themeEditor.getQuestionByName("themeMode").value).toEqual("lightweight");
//     expect(themeEditor.getQuestionByName("backgroundImage").value).toBeTruthy();
//     expect(themeEditor.getQuestionByName("backgroundImageFit").value).toEqual("auto");
//     expect(creator.theme.cssVariables!["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
//     expect(themeBuilder.simulator.survey.themeVariables["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
//     expect(saveThemeCount).toBe(1);
//     done();
//   });
// });

// test("export theme to file", (done): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;

//   themeEditor.getQuestionByName("questionTitle").contentPanel.getQuestionByName("size").value = 19;

//   const expectations = {};
//   assign(expectations, Themes["default-light"].cssVariables, { "--sjs-font-questiontitle-size": "19px" });

//   themePlugin.saveToFileHandler = async (fileName: string, blob: Blob) => {
//     let fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       expect(fileName).toBe(settings.theme.exportFileName);
//       const theme: ITheme = JSON.parse(fileReader.result as string);
//       expect(theme.themeName).toEqual("default");
//       expect(theme.cssVariables).toEqual(expectations);
//       done();
//     };
//     fileReader.readAsText(blob);
//   };
//   themePlugin.exportToFile(settings.theme.exportFileName);
// });

// test("Theme builder: restore values of elementSettings from file", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionPanelSettings = themeEditor.getQuestionByName("questionPanel");

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

//   expect(questionPanelSettings.value).toStrictEqual({
//     "backcolor": "rgba(255, 255, 255, 1)",
//     "hovercolor": "rgba(248, 248, 248, 1)",
//     "corner": 4,
//     "cornerRadius": "4px"
//   });

//   const newTheme = {};
//   assign(newTheme, themeFromFile);
//   themeSurveyTab.loadTheme(newTheme as any);

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(253, 255, 148, 0.5)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(237, 238, 186, 1)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("6px");

//   expect(questionPanelSettings.value).toStrictEqual({
//     "backcolor": "rgba(253, 255, 148, 0.5)",
//     "hovercolor": "rgba(237, 238, 186, 1)",
//     "corner": 6,
//     "cornerRadius": "6px"
//   });
// });
// test("Theme builder: restore values of fontsettings from file", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionTitleFontSettings = themeEditor.getQuestionByName("questionTitle");

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

//   expect(questionTitleFontSettings.value).toStrictEqual({
//     "family": "Open Sans",
//     "color": "rgba(0, 0, 0, 0.91)",
//     "weight": "600",
//     "size": 16
//   });

//   const newTheme = {};
//   assign(newTheme, themeFromFile);
//   themeSurveyTab.loadTheme(newTheme as any);

//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-family"]).toEqual("Verdana, sans-serif");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-weight"]).toEqual("700");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(201, 90, 231, 0.91)");
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-questiontitle-size"]).toEqual("18px");

//   expect(questionTitleFontSettings.value).toStrictEqual({
//     "family": "Verdana, sans-serif",
//     "weight": "700",
//     "color": "rgba(201, 90, 231, 0.91)",
//     "size": 18
//   });
// });

// test("Theme builder: restore questionTitle switch tabs", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   creator.activeTab = "theme";
//   let themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   let questionTitleFontSettings = themeSurveyTab.themeEditorSurvey.getQuestionByName("questionTitle");
//   expect(questionTitleFontSettings.getQuestionByName("family").value).toEqual("Open Sans");
//   expect(questionTitleFontSettings.getQuestionByName("color").value).toEqual("rgba(0, 0, 0, 0.91)");
//   expect(questionTitleFontSettings.getQuestionByName("weight").value).toEqual("600");
//   expect(questionTitleFontSettings.getQuestionByName("size").value).toEqual(16);

//   questionTitleFontSettings.getQuestionByName("color").value = "rgba(201, 90, 231, 0.91)";
//   expect(questionTitleFontSettings.value).toStrictEqual({
//     "family": "Open Sans",
//     "weight": "600",
//     "color": "rgba(201, 90, 231, 0.91)",
//     "size": 16
//   });

//   creator.activeTab = "designer";
//   creator.activeTab = "theme";
//   themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   questionTitleFontSettings = themeSurveyTab.themeEditorSurvey.getQuestionByName("questionTitle");

//   expect(questionTitleFontSettings.getQuestionByName("family").value).toEqual("Open Sans");
//   expect(questionTitleFontSettings.getQuestionByName("color").value).toEqual("rgba(201, 90, 231, 0.91)");
//   expect(questionTitleFontSettings.getQuestionByName("weight").value).toEqual("600");
//   expect(questionTitleFontSettings.getQuestionByName("size").value).toEqual(16);
//   expect(questionTitleFontSettings.value).toStrictEqual({
//     "family": "Open Sans",
//     "weight": "600",
//     "color": "rgba(201, 90, 231, 0.91)",
//     "size": 16
//   });
// });

// test("Keep theme css changes throgh the different themes choosen", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themePalette.value).toEqual("light");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
//   expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({});

//   primaryBackColor.value = "#fefefe";

//   expect(themePalette.value).toEqual("light");
//   expect(primaryBackColor.value).toEqual("rgba(254, 254, 254, 1)"); // #fefefe
//   expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({
//     "--sjs-primary-backcolor": "#fefefe",
//     "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
//     "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
//   });

//   themePalette.value = "dark";
//   expect(themePalette.value).toEqual("dark");
//   expect(primaryBackColor.value).toEqual("rgba(254, 254, 254, 1)");
//   expect(backgroundDimColor.value).toEqual("rgba(36, 36, 36, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({
//     "--sjs-primary-backcolor": "#fefefe",
//     "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
//     "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
//   });

//   themeBuilder.resetTheme();
//   expect(themePalette.value).toEqual("light");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
//   expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({});
// });

// test("findSuitableTheme", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;

//   expect(themeBuilder.findSuitableTheme("default").themeName).toEqual("default");
//   expect(themeBuilder.findSuitableTheme("default").colorPalette).toEqual("light");
//   expect(themeBuilder.findSuitableTheme("default").isPanelless).toEqual(false);

//   const fullThemeName = themePlugin.addTheme({ themeName: "custom", isPanelless: true, "colorPalette": "dark" });
//   expect(themeBuilder.findSuitableTheme("custom").themeName).toEqual("custom");
//   expect(themeBuilder.findSuitableTheme("custom").colorPalette).toEqual("dark");
//   expect(themeBuilder.findSuitableTheme("custom").isPanelless).toEqual(true);
//   themePlugin.removeTheme(fullThemeName);

//   expect(themeBuilder.findSuitableTheme("custom").themeName).toEqual("default");
//   expect(themeBuilder.findSuitableTheme("custom").colorPalette).toEqual("light");
//   expect(themeBuilder.findSuitableTheme("custom").isPanelless).toEqual(false);
// });

// test("selectTheme", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themeChooser.value).toEqual("default");
//   expect(themePalette.value).toEqual("light");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
//   expect(backgroundDimColor.value).toEqual("rgba(243, 243, 243, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({});

//   themeBuilder.selectTheme("contrast");
//   expect(themeChooser.value).toEqual("contrast");
//   expect(themePalette.value).toEqual("light");
//   expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
//   expect(backgroundDimColor.value).toEqual("rgba(255, 216, 77, 1)");
//   expect(themeBuilder.themeCssCustomizations).toStrictEqual({});
// });

// test("Get theme changes only", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

//   const fullTheme = themePlugin.getCurrentTheme() || {};
//   const themeChanges = themePlugin.getCurrentTheme(true) || {};
//   expect(Object.keys(fullTheme).length).toBe(8);
//   expect(Object.keys(fullTheme)).toStrictEqual([
//     "backgroundImage",
//     "backgroundImageFit",
//     "backgroundImageAttachment",
//     "backgroundOpacity",
//     "cssVariables",
//     "themeName",
//     "colorPalette",
//     "isPanelless",
//   ]);
//   expect(Object.keys(fullTheme.cssVariables).length).toBe(82);
//   expect(Object.keys(themeChanges).length).toBe(4);
//   expect(Object.keys(themeChanges)).toStrictEqual([
//     "cssVariables",
//     "themeName",
//     "colorPalette",
//     "isPanelless",
//   ]);
//   expect(Object.keys(themeChanges.cssVariables).length).toBe(0);

//   questionBackgroundTransparency.value = 60;
//   themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

//   const fullModifiedTheme = themePlugin.getCurrentTheme() || {};
//   const modifiedThemeChanges = themePlugin.getCurrentTheme(true) || {};
//   expect(Object.keys(fullModifiedTheme).length).toBe(8);
//   expect(Object.keys(fullModifiedTheme.cssVariables).length).toBe(85);
//   expect(Object.keys(modifiedThemeChanges).length).toBe(4);
//   expect(Object.keys(modifiedThemeChanges.cssVariables).length).toBe(4);
//   expect(Object.keys(modifiedThemeChanges.cssVariables)).toStrictEqual([
//     "--sjs-general-backcolor-dim-light",
//     "--sjs-editor-background",
//     "--sjs-editorpanel-backcolor",
//     "--sjs-editorpanel-hovercolor",
//   ]);

//   themeSurveyTab.resetTheme();
//   const fullThemeReset = themePlugin.getCurrentTheme();
//   const themeChangesReset = themePlugin.getCurrentTheme(true);
//   expect(Object.keys(fullThemeReset).length).toBe(8);
//   expect(Object.keys(fullThemeReset)).toStrictEqual([
//     "backgroundImage",
//     "backgroundImageFit",
//     "backgroundImageAttachment",
//     "backgroundOpacity",
//     "themeName",
//     "isPanelless",
//     "colorPalette",
//     "cssVariables"
//   ]);
//   expect(Object.keys(fullThemeReset.cssVariables).length).toBe(82);
//   expect(Object.keys(themeChangesReset).length).toBe(4);
//   expect(Object.keys(themeChangesReset)).toStrictEqual([
//     "cssVariables",
//     "themeName",
//     "colorPalette",
//     "isPanelless"
//   ]);
//   expect(Object.keys(themeChangesReset.cssVariables).length).toBe(0);
// });

// test("loadTheme fill all theme parameters: name, mode and compactness", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;

//   themeBuilder.setTheme(<any>{ isPanelless: true });
//   expect(creator.theme.themeName).toBe("default");
//   expect(creator.theme.colorPalette).toBe("light");
//   expect(creator.theme.isPanelless).toBe(true);

//   themeBuilder.setTheme(<any>{ colorPalette: "dark" });
//   expect(creator.theme.themeName).toBe("default");
//   expect(creator.theme.colorPalette).toBe("dark");
//   expect(creator.theme.isPanelless).toBe(false);
// });
// test("Check all file edit questions has onChooseFiles callback", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   expect(!!themeEditorSurvey.getQuestionByName("backgroundImage").onChooseFilesCallback).toBeTruthy();
//   expect(!!(<QuestionPanelDynamicModel>themeEditorSurvey.getPanelByName("groupHeader").questions[0]).panels[0].getQuestionByName("backgroundImage").onChooseFilesCallback).toBeTruthy();
// });

// test("Pass background image from survey to theme editor and back", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
//   const camelImage = "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg";
//   creator.JSON = {
//     backgroundImage: lionImage,
//     questions: [{ type: "text", name: "q1" }]
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   expect(creator.theme.backgroundImage).toBe(lionImage);
//   expect(themeBuilder.backgroundImage).toBe(lionImage);
//   expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
//   expect(themeBuilder.survey.backgroundImage).toBe(lionImage);
//   themeEditorSurvey.getQuestionByName("backgroundImage").value = "";
//   expect(creator.theme.backgroundImage).toBe("");
//   expect(themeBuilder.backgroundImage).toBe("");
//   expect(themeBuilder.survey.backgroundImage).toBe("");
//   themeEditorSurvey.getQuestionByName("backgroundImage").value = camelImage;
//   expect(creator.theme.backgroundImage).toBe(camelImage);
//   expect(themeBuilder.backgroundImage).toBe(camelImage);
//   expect(themeBuilder.survey.backgroundImage).toBe(camelImage);
//   themeBuilder.resetTheme();
//   expect(creator.theme.backgroundImage).toBe("");
//   expect(themeBuilder.backgroundImage).toBe("");
//   expect(themeBuilder.survey.backgroundImage).toBe("");

//   themePlugin.deactivate();
//   themePlugin.activate();
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   expect(creator.theme.backgroundImage).toBe("");
//   expect(themeBuilder.backgroundImage).toBe("");
//   expect(themeBuilder.survey.backgroundImage).toBe("");
// });
// test("Keep background image in theme modifications", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
//   creator.JSON = {
//     questions: [{ type: "text", name: "q1" }]
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   expect(creator.theme.backgroundImage).toBe(undefined);
//   expect(themeBuilder.backgroundImage).toBe(undefined);
//   expect(themeBuilder.survey.backgroundImage).toBe(undefined);

//   themeEditorSurvey.getQuestionByName("backgroundImage").value = lionImage;
//   expect(creator.theme.backgroundImage).toBe(lionImage);
//   expect(themeBuilder.backgroundImage).toBe(lionImage);
//   expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
//   expect(themeBuilder.survey.backgroundImage).toBe(lionImage);

//   themeChooser.value = "flat";
//   expect(creator.theme.backgroundImage).toBe(lionImage);
//   expect(themeBuilder.backgroundImage).toBe(lionImage);
//   expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
//   expect(themeBuilder.survey.backgroundImage).toBe(lionImage);

//   themePlugin.deactivate();
//   expect(creator.theme.backgroundImage).toBe(lionImage);

//   themePlugin.activate();
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   expect(creator.theme.backgroundImage).toBe(lionImage);
//   expect(themeBuilder.backgroundImage).toBe(lionImage);
//   expect(themeEditorSurvey.getQuestionByName("backgroundImage").value).toBe(lionImage);
//   expect(themeBuilder.survey.backgroundImage).toBe(lionImage);
// });
// test("Keep theme modifications between edit sessions", (): any => {
//   let creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.isAutoSave = true;
//   creator.autoSaveDelay = 0;
//   let savedTheme: any = {};
//   creator.saveThemeFunc = () => {
//     savedTheme = creator.theme;
//   };
//   creator.JSON = {
//     questions: [{ type: "text", name: "q1" }]
//   };
//   let themePlugin: ThemeTabPlugin = creator.getPlugin<ThemeTabPlugin>("theme");
//   themePlugin.activate();
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   let primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

//   themeChooser.value = "layered";
//   primaryBackColor.value = "#0000ff";
//   expect(savedTheme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

//   creator = new CreatorTester({ showThemeTab: true });
//   creator.JSON = {
//     questions: [{ type: "text", name: "q1" }]
//   };
//   creator.theme = savedTheme;
//   themePlugin = creator.getPlugin<ThemeTabPlugin>("theme");
//   themePlugin.activate();
//   themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

//   expect(themeChooser.value).toBe("layered");
//   expect(primaryBackColor.value).toBe("rgba(0, 0, 255, 1)");
//   expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
// });
// test("Set and use custom default theme", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

//   expect(ThemeEditorModel.DefaultTheme).toEqual(Themes["default-light"]);

//   const themes: string[] = [].concat(PredefinedThemes);
//   expect(themePlugin.availableThemes).toStrictEqual(themes);

//   const customTheme = { themeName: "custom", cssVariables: { "--a-var": "aVal" } };
//   const fullThemeName = themePlugin.addTheme(customTheme, true);
//   expect(Themes[fullThemeName]).toEqual(customTheme);
//   expect(ThemeEditorModel.DefaultTheme).toEqual(customTheme);
//   expect(themePlugin.availableThemes).toStrictEqual(["custom"].concat(themes));

//   themePlugin.activate();
//   let themeBuilder = themePlugin.model;
//   let themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

//   expect(themeChooser.value).toBe("custom");
//   expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
//   expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");

//   let primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   primaryBackColor.value = "#0000ff";
//   expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
//   expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

//   themeBuilder.resetTheme();
//   expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
//   expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");
//   expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe(undefined);
//   expect(themeBuilder.survey.themeVariables["--sjs-primary-backcolor"]).toBe(undefined);

//   themePlugin.deactivate();
//   expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");

//   themePlugin.activate();
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   expect(themeChooser.value).toBe("custom");
//   expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
//   expect(themeBuilder.survey.themeVariables["--a-var"]).toBe("aVal");

//   themePlugin.removeTheme(customTheme);
//   expect(ThemeEditorModel.DefaultTheme).toEqual(Themes["default-light"]);
//   expect(themeChooser.value).toBe("default");
//   expect(creator.theme.cssVariables["--a-var"]).toBe(undefined);
//   expect(themeBuilder.survey.themeVariables["--a-var"]).toBe(undefined);
//   expect(themePlugin.availableThemes[0]).toBe("default");
//   expect(themePlugin.availableThemes).toStrictEqual(themes);
// });
// test("Reset theme action calls confitmation dialog", (): any => {
//   const originalCallback = surveySettings.confirmActionAsync;
//   let message = "";
//   surveySettings.confirmActionAsync = (text, callback) => {
//     message = text;
//     callback(true);
//     return true;
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const questionBackgroundTransparency = themeEditor.getQuestionByName("questionBackgroundTransparency");

//   expect(questionBackgroundTransparency.value).toEqual(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

//   questionBackgroundTransparency.value = 60;
//   themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toEqual("rgba(247, 247, 247, 0.6)");

//   themePlugin["resetTheme"].action();

//   expect(questionBackgroundTransparency.value).toEqual(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-editor-background"]).toBeUndefined();

//   expect(message).toBe("Do you really want to reset the theme? All your customizations will be lost.");
//   surveySettings.confirmActionAsync = originalCallback;
// });
// test("Keep background image on reset theme action for default session theme", (): any => {
//   const originalCallback = surveySettings.confirmActionAsync;
//   surveySettings.confirmActionAsync = (text, callback) => {
//     callback(true);
//     return true;
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   const customTheme = { themeName: "custom", backgroundImage: "image.png" };
//   const fullThemeName = themePlugin.addTheme(customTheme);
//   creator.theme = customTheme;

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;

//   expect(themeBuilder.defaultSessionTheme).toStrictEqual(Themes["default-light"]);
//   themeBuilder.defaultSessionTheme = creator.theme;

//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const backgroundImage = themeEditorSurvey.getQuestionByName("backgroundImage");

//   expect(themeChooser.value).toEqual("custom");
//   expect(backgroundImage.value).toEqual("image.png");
//   expect(themeBuilder.survey.backgroundImage).toEqual("image.png");

//   themePlugin["resetTheme"].action();
//   expect(themeChooser.value).toEqual("custom");
//   expect(backgroundImage.value).toEqual("image.png");
//   expect(themeBuilder.survey.backgroundImage).toEqual("image.png");

//   surveySettings.confirmActionAsync = originalCallback;
//   themePlugin.removeTheme(customTheme);
// });

// test("Reset theme to default one", (): any => {
//   const originalCallback = surveySettings.confirmActionAsync;
//   surveySettings.confirmActionAsync = (text, callback) => {
//     callback(true);
//     return true;
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   const customTheme = { themeName: "custom", backgroundImage: "image.png" };
//   const fullThemeName = themePlugin.addTheme(customTheme);
//   creator.theme = customTheme;

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;

//   expect(themeBuilder.defaultSessionTheme).toStrictEqual(Themes["default-light"]);

//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   let themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const backgroundImage = themeEditorSurvey.getQuestionByName("backgroundImage");

//   expect(themeChooser.value).toEqual("custom");
//   expect(backgroundImage.value).toEqual("image.png");
//   expect(themeBuilder.survey.backgroundImage).toEqual("image.png");

//   themePlugin["resetTheme"].action();
//   expect(themeChooser.value).toEqual("default");
//   expect(backgroundImage.value).toEqual(undefined);
//   expect(themeBuilder.survey.backgroundImage).toEqual("");

//   surveySettings.confirmActionAsync = originalCallback;
//   themePlugin.removeTheme(customTheme);
// });
