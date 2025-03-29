import { ITheme, Serializer } from "survey-core";
import { Themes } from "../../src/components/tabs/themes";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export * from "../../src/property-grid/header-settings";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { assign } from "../../src/utils/utils";
import { CreatorTester } from "../creator-tester";
import { ThemeModel, getThemeChanges } from "../../src/components/tabs/theme-model";
import { registerSurveyTheme } from "../../src/components/tabs/theme-model";
import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);
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
  expect(Object.keys(result).length).toBe(2);

  const themeJson: ITheme = {
    themeName: "custom",
    colorPalette: "light",
    isPanelless: true,
    backgroundImage: "image.png",
    backgroundImageFit: "cover",
    backgroundImageAttachment: "fixed",
    backgroundOpacity: 0.7,
    cssVariables: {
      "--sjs-base-unit": "6px",
      "--sjs-corner-radius": "20px",
      "--sjs-font-family": "Open Sans",
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

  expect(themeModel.scale).toBe(75);
  expect(themeModel.cornerRadius).toBe(20);
  expect(themeModel.fontSize).toBe(110);

  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("light");
  expect(themeModel.isPanelless).toBe(true);
  expect(themeModel.backgroundImage).toBe("image.png");
  expect(themeModel.backgroundImageFit).toBe("cover");
  expect(themeModel.backgroundImageAttachment).toBe("fixed");
  expect(themeModel.backgroundOpacity).toBe(70);

  result = themeModel.cssVariables || {};
  expect(result).toStrictEqual(themeJson.cssVariables || {});
  expect(result["--sjs-base-unit"]).toBe("6px");
  expect(result["--sjs-corner-radius"]).toBe("20px");
  expect(result["--sjs-font-size"]).toBe("17.6px");
});

test("Theme model backgroundImage serialization", (): any => {
  const themeModel = new ThemeModel();
  const initialJson = themeModel.toJSON();
  expect(Object.keys(initialJson)).toStrictEqual([
    "backgroundImageFit",
    "backgroundImageAttachment",
    "backgroundImage",
    "backgroundOpacity",
    "cssVariables",
    "header",
    "headerView"]);
  expect(initialJson.backgroundImage).toBe("");
  themeModel.backgroundImage = "image";
  const modifiedJson = themeModel.toJSON();
  expect(modifiedJson.backgroundImage).toBe("image");
  themeModel.resetTheme();
  const resetJson = themeModel.toJSON();
  expect(resetJson.backgroundImage).toBe("");
});

test("Theme model load custom theme", (): any => {
  Serializer.addProperty("theme", { name: "--a-var", visible: false });

  const themeModel = new ThemeModel();
  const customeTheme: ITheme = {
    themeName: "custom",
    colorPalette: "light",
    isPanelless: false,
    backgroundImage: "",
    backgroundImageAttachment: "scroll",
    backgroundImageFit: "cover",
    backgroundOpacity: 1,
    cssVariables: {
      "--a-var": "aVal",
      "--sjs-font-family": "Open Sans",
      "--sjs-font-size": "16px",
    },
    "header": {
      "backgroundImageFit": "cover",
      "backgroundImageOpacity": 100,
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
    }
  };
  themeModel.fromJSON(customeTheme);

  const json = themeModel.toJSON();
  customeTheme.headerView = "advanced";
  expect(json).toStrictEqual(customeTheme);

  Serializer.removeProperty("theme", "--a-var");
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

  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");

  themeModel.colorPalette = "dark";
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(255, 152, 20, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(36, 36, 36, 1)");
});

test("Theme builder switch themes with reset of previous values", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.themeName).toEqual("default");
  expect(themeModel["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner-reset"]).toEqual("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeModel.themeName = "contrast";
  expect(themeModel["--sjs-shadow-inner"]).toEqual("0px 0px 0px 2px rgba(0, 0, 0, 1),0px -2px 0px 2px rgba(0, 0, 0, 1)");
  expect(themeModel["--sjs-shadow-inner-reset"]).toEqual("0px 0px 0px 0px rgba(0, 0, 0, 1),0px 0px 0px 0px rgba(0, 0, 0, 1)");

  themeModel.themeName = "default";
  expect(themeModel["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner-reset"]).toEqual("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});

test("Theme builder: composite question font", (): any => {
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

test("Theme builder: composite question backgroundcornerradius", (): any => {
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
  expect(themeModel.isPanelless).toEqual(false);

  themeModel.isPanelless = true;
  expect(themeModel.questionBackgroundTransparency).toEqual(60);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(249, 249, 249, 0.6)");
});

test("Theme builder: restore values of backgroundcornerradius from loadTheme", (): any => {
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
test("Theme builder: restore values of font from loadTheme", (): any => {
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

test("Modify property grid: restore new property", (): any => {
  Serializer.addProperty("theme", {
    name: "matrix-title",
    type: "font",
    displayName: "Matrix title font",
    default: {
      family: "Open Sans",
      weight: "600",
      size: 16,
      color: "rgba(0, 0, 0, 0.91)"
    },
  });

  try {
    const themeModel = new ThemeModel();
    themeModel.initialize();
    const newTheme = {
      "themeName": "default",
      "colorPalette": "light",
      "isPanelless": false,
      "cssVariables": {
        "--sjs-font-matrix-title-color": "rgba(215, 15, 15, 0.91)"
      }
    };
    themeModel.loadTheme(newTheme as any);

    expect(themeModel["matrix-title"]).toEqual({
      family: "Open Sans",
      weight: "600",
      size: 16,
      color: "rgba(215, 15, 15, 0.91)"
    });

    expect(themeModel.cssVariables["--sjs-font-matrix-title-color"]).toBe("rgba(215, 15, 15, 0.91)");

  } finally {
    Serializer.removeProperty("theme", "matrix-title");
  }
});

test("Keep theme css changes through the different themes choosen", (): any => {
  const fefefeColor = "rgba(254, 254, 254, 1)";
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-primary-backcolor-light"]).toEqual("rgba(25, 179, 148, 0.1)");
  expect(themeModel["--sjs-primary-backcolor-dark"]).toEqual("rgba(20, 164, 139, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});

  themeModel["--sjs-primary-backcolor"] = fefefeColor;
  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual(fefefeColor);
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": fefefeColor,
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themeModel.colorPalette = "dark";
  expect(themeModel.colorPalette).toEqual("dark");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual(fefefeColor);
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(36, 36, 36, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": fefefeColor,
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });

  themeModel.resetTheme();
  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});
});

test("Update --sjs-primary-backcolor-light && --sjs-primary-backcolor-dark", (): any => {
  const fefefeColor = "rgba(254, 254, 254, 1)";
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["primaryColor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-primary-backcolor-light"]).toEqual("rgba(25, 179, 148, 0.1)");
  expect(themeModel["--sjs-primary-backcolor-dark"]).toEqual("rgba(20, 164, 139, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});

  themeModel["primaryColor"] = fefefeColor;
  expect(themeModel.themeCssCustomizations).toStrictEqual({
    "--sjs-primary-backcolor": fefefeColor,
    "--sjs-primary-backcolor-dark": "rgba(239, 239, 239, 1)",
    "--sjs-primary-backcolor-light": "rgba(254, 254, 254, 0.1)",
  });
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

test("getThemeChanges", (): any => {
  let themeChanges = getThemeChanges({
    themeName: "default",
    cssVariables: {
      "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
    }
  });
  expect(themeChanges.themeName).toBe("default");
  expect(themeChanges.colorPalette).toBe("light");
  expect(themeChanges.isPanelless).toBe(false);
  expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
  expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

  themeChanges = getThemeChanges({
    cssVariables: {
      "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
    }
  });
  expect(themeChanges.themeName).toBe("default");
  expect(themeChanges.colorPalette).toBe("light");
  expect(themeChanges.isPanelless).toBe(false);
  expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
  expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

  themeChanges = getThemeChanges({
    themeName: "default_exported",
    cssVariables: {
      "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
    }
  });
  expect(themeChanges.themeName).toBe("default");
  expect(themeChanges.colorPalette).toBe("light");
  expect(themeChanges.isPanelless).toBe(false);
  expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
  expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

  themeChanges = getThemeChanges({
    themeName: "default_exported",
    colorPalette: "dark",
    isPanelless: true,
    cssVariables: {
      "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
    }
  });
  expect(themeChanges.themeName).toBe("default");
  expect(themeChanges.colorPalette).toBe("dark");
  expect(themeChanges.isPanelless).toBe(true);
  expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
  expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");
});

test("selectTheme", (): any => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel.themeName).toEqual("default");
  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(25, 179, 148, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});

  themeModel.selectTheme("contrast");
  expect(themeModel.themeName).toEqual("contrast");
  expect(themeModel.colorPalette).toEqual("light");
  expect(themeModel["--sjs-primary-backcolor"]).toEqual("rgba(0, 0, 0, 1)");
  expect(themeModel["--sjs-general-backcolor-dim"]).toEqual("rgba(255, 216, 77, 1)");
  expect(themeModel.themeCssCustomizations).toStrictEqual({});
});

test("Check reset for sjs-shadow-inner due to animation", () => {
  const themeModel = new ThemeModel();
  themeModel.initialize();

  expect(themeModel["--sjs-shadow-small"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner"]).toBe("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  expect(themeModel.cssVariables["--sjs-shadow-small"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeModel["--sjs-shadow-small"] = "0px 1px 2px 0px rgba(0, 0, 0, 0.15)";
  expect(themeModel.cssVariables["--sjs-shadow-small"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-small-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeModel["--sjs-shadow-inner"] = "0px 1px 2px 0px rgba(0, 0, 0, 0.15)";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeModel["--sjs-shadow-inner"] = "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeModel["--sjs-shadow-inner"] = "0px 1px 2px 0px rgba(0, 0, 0, 0.15),inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toBe("0px 1px 2px 0px rgba(0, 0, 0, 0.15),inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toBe("0px 0px 0px 0px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});