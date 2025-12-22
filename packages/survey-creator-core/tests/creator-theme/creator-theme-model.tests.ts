import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes } from "../../src/creator-theme/creator-themes";

import "survey-core/survey.i18n";
import { PredefinedBackgroundColors, PredefinedColors } from "../../src/components/tabs/themes";
import { colorsAreEqual } from "../../src/utils/color-utils";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

test("Creator theme model de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      [CreatorThemeModel.varBaseUnitSize]: "6px",
      [CreatorThemeModel.varBaseUnitRadius]: "6px",
      [CreatorThemeModel.varBaseUnitSpacing]: "6px",
      [CreatorThemeModel.varColorUtilitySurface]: "rgba(253, 255, 148, 0.5)",
      [CreatorThemeModel.varColorProjectBrand]: "rgba(248, 248, 248, 1)",
      [CreatorThemeModel.varColorProjectAccent]: "#0b864b",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");

  expect(themeModel[CreatorThemeModel.varBaseUnitSize]).toBe("6px");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("rgba(253, 255, 148, 0.5)");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("rgba(248, 248, 248, 1)");
  expect(themeModel[CreatorThemeModel.varColorProjectAccent]).toBe("#0b864b");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(themeJson);
});

test("Default theme serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  themeModel.loadTheme();
  expect(themeModel.themeName).toBe("default-light");
  expect(themeModel.scale).toBe(100);
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("#EDF9F7");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("#19B394");
  expect(themeModel[CreatorThemeModel.varColorProjectAccent]).toBe("#19B394");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "default-light" });
});

test("Creator theme: sync css variables", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let surfaceBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);

  expect(creator.themeVariables[CreatorThemeModel.varColorUtilitySurface]).toEqual("#EDF9F7");
  expect((themeModel.cssVariables || {})[CreatorThemeModel.varColorUtilitySurface]).toEqual("#EDF9F7");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");

  const newValue = "#c95ae7";
  surfaceBackgroundColor.value = newValue;
  expect(creator.themeVariables[CreatorThemeModel.varColorUtilitySurface]).toEqual(newValue);
  expect((themeModel.cssVariables || {})[CreatorThemeModel.varColorUtilitySurface]).toEqual(newValue);
  expect(surfaceBackgroundColor.value).toEqual(newValue);
});

test("Creator theme: reset color variables after change theme", (): any => {
  CreatorThemes["dark"] = <any>{
    "themeName": "dark",
    "isLight": false,
    "cssVariables": {
      "--sjs-special-haze": "#000000BF",
      [CreatorThemeModel.varColorUtilitySurface]: "#0C0C0CFF",
      "--sjs-special-glow": "#000000BF",
      [CreatorThemeModel.varColorProjectBrand]: "#3EDFD5FF",
      "--sjs-primary-background-10": "#3EDFD51A",
      "--sjs-primary-background-400": "#29DCD1FF",
      [CreatorThemeModel.varColorProjectAccent]: "#EDA925FF",
      "--sjs-secondary-background-400": "#EDBE1E",
      "--sjs-secondary-background-25": "#EDA92540",
      "--sjs-secondary-background-10": "#EDA9251A",
    }
  };

  try {
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
    const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
    const themeModel = designerPlugin["themeModel"];
    const themeName = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName("themeName");
    const surfaceBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);
    const primaryBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorProjectBrand);
    const secondaryBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorProjectAccent);

    expect(themeName.value).toEqual("default-light");
    expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
    expect(primaryBackgroundColor.value).toEqual("#19B394");
    expect(secondaryBackgroundColor.value).toEqual("#19B394");

    primaryBackgroundColor.value = "rgba(20, 20, 20, 1)";
    secondaryBackgroundColor.value = "rgba(30, 30, 30, 0.1)";
    surfaceBackgroundColor.value = "rgba(10, 10, 10, 1)";
    expect(themeModel.themeCssVariablesChanges).toStrictEqual({
      [CreatorThemeModel.varColorProjectBrand]: "#141414",
      [CreatorThemeModel.varColorProjectAccent]: "#1e1e1e",
      [CreatorThemeModel.varColorUtilitySurface]: "#0a0a0a",
    });

    themeName.value = "dark";
    expect(surfaceBackgroundColor.value).toEqual("#0C0C0CFF");
    expect(primaryBackgroundColor.value).toEqual("#3EDFD5FF");
    expect(secondaryBackgroundColor.value).toEqual("#EDA925FF");
    expect(Object.keys(themeModel.themeCssVariablesChanges).length).toEqual(0);
  } finally {
    delete CreatorThemes["dark"];
  }
});

test("creator.applyCreatorTheme", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      [CreatorThemeModel.varColorUtilitySurface]: "rgba(253, 255, 148, 0.5)",
      [CreatorThemeModel.varColorProjectBrand]: "rgba(248, 248, 248, 1)",
      [CreatorThemeModel.varColorProjectAccent]: "#0b864b",
      "--ctr-font-unit": "18px",
      "--ctr-line-height-unit": "18px",
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--sjs-test": "green"
    }
  };

  creator.applyCreatorTheme(themeJson);

  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];

  expect(creator.themeVariables["--sjs-test"]).toEqual("green");
  expect((themeModel.cssVariables || {})["--sjs-test"]).toEqual("green");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(themeJson);
});

test("Creator theme check scale", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let scale = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName("scale");
  let fontScale = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName("fontScale");

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      [CreatorThemeModel.varBaseUnitFontSize]: "10px",
      [CreatorThemeModel.varBaseUnitLineHeight]: "10px",
      [CreatorThemeModel.varBaseUnitSpacing]: "12px",
      [CreatorThemeModel.varBaseUnitSize]: "12px",
      [CreatorThemeModel.varBaseUnitRadius]: "12px",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.fontScale).toBe(125);
  expect(themeModel.scale).toBe(150);

  fontScale.value = 150;

  let themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables[CreatorThemeModel.varBaseUnitFontSize]).toEqual("12px");
  expect(themeModelJsonCssVariables[CreatorThemeModel.varBaseUnitLineHeight]).toEqual("12px");

  scale.value = 225; // max = 200
  themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables[CreatorThemeModel.varBaseUnitSize]).toEqual("16px");
  expect(themeModelJsonCssVariables[CreatorThemeModel.varBaseUnitSpacing]).toEqual("16px");
  expect(themeModelJsonCssVariables[CreatorThemeModel.varBaseUnitRadius]).toEqual("16px");
});

test("Creator theme: apply custom theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      [CreatorThemeModel.varColorUtilitySurface]: "rgba(253, 255, 148, 0.5)",
      [CreatorThemeModel.varColorProjectBrand]: "rgba(248, 248, 248, 1)",
      [CreatorThemeModel.varColorProjectAccent]: "#0b864b",
      "--ctr-font-unit": "18px",
      "--ctr-line-height-unit": "18px",
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--sjs-test": "green"
    }
  };
  creator.applyCreatorTheme(themeJson);

  const surfaceBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);
  const primaryBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorProjectBrand);
  const secondaryBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorProjectAccent);
  expect(surfaceBackgroundColor.value).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("rgba(253, 255, 148, 0.5)");

  expect(primaryBackgroundColor.value).toEqual("rgba(248, 248, 248, 1)");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("rgba(248, 248, 248, 1)");

  expect(secondaryBackgroundColor.value).toEqual("#0b864b");
  expect(themeModel[CreatorThemeModel.varColorProjectAccent]).toBe("#0b864b");
});

test("sjs-special-background calculations on primary background changed", (): any => {
  const themeModel = new CreatorThemeModel();

  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toEqual("#19B394");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toEqual("#EDF9F7");

  themeModel.loadTheme(PredefinedCreatorThemes["sc2020"]);
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toEqual("#19B394");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toEqual("#EDF9F7");

  themeModel[CreatorThemeModel.varColorProjectBrand] = PredefinedColors["light"]["teal"];
  themeModel[CreatorThemeModel.varColorProjectBrand] = PredefinedColors["light"]["teal"];
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorProjectBrand], PredefinedColors["light"]["teal"])).toBeTruthy();
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorUtilitySurface], PredefinedBackgroundColors["light"]["teal"])).toBeTruthy();

  themeModel[CreatorThemeModel.varColorProjectBrand] = PredefinedColors["light"]["orchid"];
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorProjectBrand], PredefinedColors["light"]["orchid"])).toBeTruthy();
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorUtilitySurface], PredefinedBackgroundColors["light"]["orchid"])).toBeTruthy();

  themeModel[CreatorThemeModel.varColorProjectBrand] = "#fefefe";
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorProjectBrand], "#fefefe")).toBeTruthy();
  expect(colorsAreEqual(themeModel[CreatorThemeModel.varColorUtilitySurface], PredefinedBackgroundColors["light"]["gray"])).toBeTruthy();
});

test("Creator theme model isLight de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const lightThemeJson: ICreatorTheme = {
    themeName: "custom-light",
  };
  themeModel.fromJSON(lightThemeJson);
  expect(themeModel.isLight).toBeTruthy();
  expect(themeModel.themeName).toBe("custom-light");

  let themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(lightThemeJson);

  const darkThemeJson: ICreatorTheme = {
    themeName: "custom-dark",
    isLight: false,
  };
  themeModel.fromJSON(darkThemeJson);
  expect(themeModel.isLight).toBeFalsy();
  expect(themeModel.themeName).toBe("custom-dark");

  themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(darkThemeJson);

  themeModel.fromJSON(lightThemeJson);
  expect(themeModel.isLight).toBeTruthy();
  expect(themeModel.themeName).toBe("custom-light");

  themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(lightThemeJson);
});
test("creator.showCreatorThemeSettings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const tabControlModelBottomToolbar = designerPlugin["tabControlModel"].bottomToolbar;

  expect(tabControlModelBottomToolbar.actions).toHaveLength(1);
  expect(tabControlModelBottomToolbar.actions[0].isVisible).toEqual(true);

  creator.showCreatorThemeSettings = false;
  expect(tabControlModelBottomToolbar.actions[0].isVisible).toEqual(false);
});