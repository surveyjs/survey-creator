import { ComponentCollection, ITheme, Question, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, QuestionFileModel, QuestionPanelDynamicModel, Serializer, SurveyElement, SurveyModel, settings as surveySettings } from "survey-core";
import { ThemeEditorModel } from "../../src/components/tabs/theme-builder";
import { PredefinedColors, PredefinedThemes, Themes } from "../../src/components/tabs/themes";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
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
    "--sjs-editorpanel-backcolor": "rgba(45, 235, 223, 1)",
    "--sjs-editorpanel-hovercolor": "rgba(70, 143, 221, 1)",
    "--sjs-editorpanel-cornerRadius": "4px",
    "--sjs-font-questiontitle-family": "Verdana, sans-serif",
    "--sjs-font-questiontitle-weight": "700",
    "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
    "--sjs-font-questiontitle-size": "18px",
    "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.6)",
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

test("Theme model de/serialization", (): any => {
  const themeModel = new ThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

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
  themeModel.fromJSON(themeJson);

  expect(themeModel.commonScale).toBe(75);
  expect(themeModel.cornerRadius).toBe(20);
  expect(themeModel.commonFontSize).toBe(110);

  result = themeModel.cssVariables || {};
  expect(result).toStrictEqual(themeJson.cssVariables);
  expect(result["--sjs-base-unit"]).toBe("6px");
  expect(result["--sjs-corner-radius"]).toBe("20px");
  expect(result["--sjs-font-size"]).toBe("17.6px");
});

test("Theme builder panelBackgroundTransparency", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.panelBackgroundTransparency).toEqual(100);
  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(255, 255, 255, 1)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" });

  themeModel.panelBackgroundTransparency = 60;
  expect(themeModel.panelBackgroundTransparency).toEqual(60);
  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(255, 255, 255, 0.6)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" });

  themeModel.questionPanel = { "backcolor": "rgba(238, 238, 238, 0.7)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" };
  expect(themeModel.panelBackgroundTransparency).toEqual(70);
  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(238, 238, 238, 0.7)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" });
});

test("Theme builder questionBackgroundTransparency", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.questionBackgroundTransparency).toEqual(100);
  expect(themeModel.editorPanel).toStrictEqual({ "backcolor": "rgba(249, 249, 249, 1)", "cornerRadius": 4, "hovercolor": "rgba(243, 243, 243, 1)" });

  themeModel.questionBackgroundTransparency = 60;
  expect(themeModel.editorPanel).toStrictEqual({ "backcolor": "rgba(249, 249, 249, 0.6)", "cornerRadius": 4, "hovercolor": "rgba(243, 243, 243, 1)" });

  themeModel.editorPanel = { "backcolor": "rgba(247, 247, 247, 0.7)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" };
  expect(themeModel.questionBackgroundTransparency).toEqual(70);
  expect(themeModel.editorPanel).toStrictEqual({ "backcolor": "rgba(247, 247, 247, 0.7)", "cornerRadius": 4, "hovercolor": "rgba(248, 248, 248, 1)" });
});

test("Theme builder export value from composite question", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.editorPanel.backcolor).toBe("rgba(249, 249, 249, 1)");
  expect(themeModel.getPropertyValue("--sjs-general-backcolor-dim-light")).toEqual("rgba(249, 249, 249, 1)");
  expect(themeModel.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(249, 249, 249, 1)");

  themeModel.themeName = "contrast";
  expect(themeModel.editorPanel.backcolor).toBe("rgba(255, 216, 77, 1)");
  expect(themeModel.getPropertyValue("--sjs-general-backcolor-dim-light")).toEqual("rgba(255, 216, 77, 1)");
  expect(themeModel.cssVariables["--sjs-general-backcolor-dim-light"]).toBe("rgba(255, 216, 77, 1)");
});

test("Theme builder switch themes", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");

  themeModel.themePalette = "dark";
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(255, 152, 20, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(36, 36, 36, 1)");
});

test("Theme builder: composite question fontSettings", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel["questionTitle"]).toStrictEqual({ family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 16 });

  let cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  themeModel["questionTitle"] = { family: "Arial, sans-serif", weight: "500", size: 40 };

  cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(cssVariables["--sjs-font-questiontitle-weight"]).toEqual("500");
  expect(cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");

  themeModel["questionTitle"] = { family: "Open Sans", color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 16 };

  cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();
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

//   expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

//   questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#fefefe", size: 40 };

//   expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toBeUndefined();
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

//   pageTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#101010", size: 28 };

//   expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(254, 254, 254, 1)");
//   expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toEqual("Arial, sans-serif");
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toEqual("rgba(16, 16, 16, 1)");
//   expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
// });

test("Theme builder: composite question elementSettings", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.questionPanel).toStrictEqual({ "backcolor": "rgba(255, 255, 255, 1)", "hovercolor": "rgba(248, 248, 248, 1)", cornerRadius: 4 });

  let cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(cssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(cssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  themeModel.questionPanel = { backcolor: "#ff44ff", hovercolor: "#969696", cornerRadius: 5 };

  cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-questionpanel-backcolor"]).toEqual("#ff44ff");
  expect(cssVariables["--sjs-questionpanel-hovercolor"]).toEqual("#969696");
  expect(cssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("5px");
});

test("Theme builder reset to default", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.questionBackgroundTransparency).toEqual(100);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();

  themeModel.questionBackgroundTransparency = 60;
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(249, 249, 249, 0.6)");

  themeModel.resetTheme();
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();
});

test("Theme builder themeMode not change modified values ", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.questionBackgroundTransparency).toEqual(100);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();

  themeModel.questionBackgroundTransparency = 60;
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(249, 249, 249, 0.6)");
  expect(themeModel.themeMode).toEqual("panels");

  themeModel.themeMode = "lightweight";
  expect(themeModel.questionBackgroundTransparency).toEqual(60);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(249, 249, 249, 0.6)");
});

test("Theme builder: restore values of elementSettings from loadTheme", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  let cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-questionpanel-backcolor"]).toBeUndefined();
  expect(cssVariables["--sjs-questionpanel-hovercolor"]).toBeUndefined();
  expect(cssVariables["--sjs-questionpanel-cornerRadius"]).toBeUndefined();

  expect(themeModel["questionPanel"]).toStrictEqual({
    "backcolor": "rgba(255, 255, 255, 1)",
    "hovercolor": "rgba(248, 248, 248, 1)",
    "cornerRadius": 4
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeModel.loadTheme(newTheme as any);

  cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-questionpanel-backcolor"]).toEqual("rgba(253, 255, 148, 0.6)");
  expect(cssVariables["--sjs-questionpanel-hovercolor"]).toEqual("rgba(237, 238, 186, 1)");
  expect(cssVariables["--sjs-questionpanel-cornerRadius"]).toEqual("6px");

  expect(themeModel["questionPanel"]).toStrictEqual({
    "backcolor": "rgba(253, 255, 148, 0.6)",
    "hovercolor": "rgba(237, 238, 186, 1)",
    "cornerRadius": 6
  });
});
test("Theme builder: restore values of fontsettings from loadTheme", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  let cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-color"]).toBeUndefined();
  expect(cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

  expect(themeModel["questionTitle"]).toStrictEqual({
    "family": "Open Sans",
    "color": "rgba(0, 0, 0, 0.91)",
    "weight": "600",
    "size": 16
  });

  const newTheme = {};
  assign(newTheme, themeFromFile);
  themeModel.loadTheme(newTheme as any);

  cssVariables = themeModel.cssVariables || {};
  expect(cssVariables["--sjs-font-questiontitle-family"]).toEqual("Verdana, sans-serif");
  expect(cssVariables["--sjs-font-questiontitle-weight"]).toEqual("700");
  expect(cssVariables["--sjs-font-questiontitle-color"]).toEqual("rgba(201, 90, 231, 0.91)");
  expect(cssVariables["--sjs-font-questiontitle-size"]).toEqual("18px");

  expect(themeModel["questionTitle"]).toStrictEqual({
    "family": "Verdana, sans-serif",
    "weight": "700",
    "color": "rgba(201, 90, 231, 0.91)",
    "size": 18
  });
});

test("Keep theme css changes throgh the different themes choosen", (): any => {
  const fefefeColor = "rgba(254, 254, 254, 1)";
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-primary-backcolor-light"]).toEqual("rgba(25, 179, 148, 0.1)");
  expect(themeModel["--sjs-primary-backcolor-dark"]).toEqual("rgba(20, 164, 139, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});

  themeModel["--sjs-primary-backcolor"] = fefefeColor;
  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual(fefefeColor);
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": fefefeColor,
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themeModel.themePalette = "dark";
  expect(themeModel.themePalette).toEqual("dark");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual(fefefeColor);
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(36, 36, 36, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": fefefeColor,
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themeModel.resetTheme();
  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});
});

test("findSuitableTheme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;

  expect(themeModel.findSuitableTheme("default").themeName).toEqual("default");
  expect(themeModel.findSuitableTheme("default").colorPalette).toEqual("light");
  expect(themeModel.findSuitableTheme("default").isPanelless).toEqual(false);

  const fullThemeName = themePlugin.addTheme({ themeName: "custom", isPanelless: true, "colorPalette": "dark" });
  expect(themeModel.findSuitableTheme("custom").themeName).toEqual("custom");
  expect(themeModel.findSuitableTheme("custom").colorPalette).toEqual("dark");
  expect(themeModel.findSuitableTheme("custom").isPanelless).toEqual(true);
  themePlugin.removeTheme(fullThemeName);

  expect(themeModel.findSuitableTheme("custom").themeName).toEqual("default");
  expect(themeModel.findSuitableTheme("custom").colorPalette).toEqual("light");
  expect(themeModel.findSuitableTheme("custom").isPanelless).toEqual(false);
});

test("selectTheme", (): any => {
  const themeModel = new ThemeModel;
  themeModel.initialize();

  expect(themeModel.themeName).toEqual("default");
  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});

  themeModel.selectTheme("contrast");
  expect(themeModel.themeName).toEqual("contrast");
  expect(themeModel.themePalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(0, 0, 0, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(255, 216, 77, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});
});

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
//   expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(247, 247, 247, 0.6)");

//   const fullModifiedTheme = themePlugin.getCurrentTheme() || {};
//   const modifiedThemeChanges = themePlugin.getCurrentTheme(true) || {};
//   expect(Object.keys(fullModifiedTheme).length).toBe(8);
//   expect(Object.keys(fullModifiedTheme.cssVariables).length).toBe(85);
//   expect(Object.keys(modifiedThemeChanges).length).toBe(4);
//   expect(Object.keys(modifiedThemeChanges.cssVariables).length).toBe(4);
//   expect(Object.keys(modifiedThemeChanges.cssVariables)).toStrictEqual([
//     "--sjs-general-backcolor-dim-light",
//     "--sjs-editorpanel-backcolor",
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
//   expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();

//   questionBackgroundTransparency.value = 60;
//   themeEditor.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = "#f7f7f7";
//   expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(247, 247, 247, 0.6)");

//   themePlugin["resetTheme"].action();

//   expect(questionBackgroundTransparency.value).toEqual(100);
//   expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();

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
