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
      "--sjs2-base-unit-size": "6px",
      "--sjs2-base-unit-radius": "6px",
      "--sjs2-base-unit-spacing": "6px",
      "--sjs2-color-utility-surface": "rgba(253, 255, 148, 0.5)",
      "--sjs2-color-project-brand-600": "rgba(248, 248, 248, 1)",
      "--sjs2-color-project-accent-600": "#0b864b",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");

  expect(themeModel["--sjs2-base-unit-size"]).toBe("6px");
  expect(themeModel["--sjs2-color-utility-surface"]).toBe("rgba(253, 255, 148, 0.5)");
  expect(themeModel["--sjs2-color-project-brand-600"]).toBe("rgba(248, 248, 248, 1)");
  expect(themeModel["--sjs2-color-project-accent-600"]).toBe("#0b864b");

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
  expect(themeModel["--sjs2-color-utility-surface"]).toBe("#EDF9F7");
  expect(themeModel["--sjs2-color-project-brand-600"]).toBe("#19B394");
  expect(themeModel["--sjs2-color-project-accent-600"]).toBe("#19B394");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "default-light" });
});

test("Creator theme: sync css variables", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-utility-surface");

  expect(creator.themeVariables["--sjs2-color-utility-surface"]).toEqual("#EDF9F7");
  expect((themeModel.cssVariables || {})["--sjs2-color-utility-surface"]).toEqual("#EDF9F7");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");

  const newValue = "#c95ae7";
  surfaceBackgroundColor.value = newValue;
  expect(creator.themeVariables["--sjs2-color-utility-surface"]).toEqual(newValue);
  expect((themeModel.cssVariables || {})["--sjs2-color-utility-surface"]).toEqual(newValue);
  expect(surfaceBackgroundColor.value).toEqual(newValue);
});

test("Creator theme: reset color variables after change theme", (): any => {
  CreatorThemes["dark"] = <any>{
    "themeName": "dark",
    "isLight": false,
    "cssVariables": {
      "--sjs-special-haze": "#000000BF",
      "--sjs2-color-utility-surface": "#0C0C0CFF",
      "--sjs-special-glow": "#000000BF",
      "--sjs2-color-project-brand-600": "#3EDFD5FF",
      "--sjs-primary-background-10": "#3EDFD51A",
      "--sjs-primary-background-400": "#29DCD1FF",
      "--sjs2-color-project-accent-600": "#EDA925FF",
      "--sjs-secondary-background-400": "#EDBE1E",
      "--sjs-secondary-background-25": "#EDA92540",
      "--sjs-secondary-background-10": "#EDA9251A",
    }
  };

  try {
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
    const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
    const themeModel = designerPlugin["themeModel"];
    const themeName = designerPlugin["themePropertyGrid"].survey.findQuestionByName("themeName");
    const surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-utility-surface");
    const primaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-project-brand-600");
    const secondaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-project-accent-600");

    expect(themeName.value).toEqual("default-light");
    expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
    expect(primaryBackgroundColor.value).toEqual("#19B394");
    expect(secondaryBackgroundColor.value).toEqual("#19B394");

    primaryBackgroundColor.value = "rgba(20, 20, 20, 1)";
    secondaryBackgroundColor.value = "rgba(30, 30, 30, 0.1)";
    surfaceBackgroundColor.value = "rgba(10, 10, 10, 1)";
    expect(themeModel.themeCssVariablesChanges).toStrictEqual({
      "--sjs2-color-project-brand-600": "#141414",
      "--sjs2-color-project-accent-600": "#1e1e1e",
      "--sjs2-color-utility-surface": "#0a0a0a",
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
      "--sjs2-color-utility-surface": "rgba(253, 255, 148, 0.5)",
      "--sjs2-color-project-brand-600": "rgba(248, 248, 248, 1)",
      "--sjs2-color-project-accent-600": "#0b864b",
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
  let scale = designerPlugin["themePropertyGrid"].survey.findQuestionByName("scale");
  let fontScale = designerPlugin["themePropertyGrid"].survey.findQuestionByName("fontScale");

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs2-base-unit-font-size": "10px",
      "--sjs2-base-unit-line-height": "10px",
      "--sjs2-base-unit-spacing": "12px",
      "--sjs2-base-unit-size": "12px",
      "--sjs2-base-unit-radius": "12px",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.fontScale).toBe(125);
  expect(themeModel.scale).toBe(150);

  fontScale.value = 150;

  let themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables["--sjs2-base-unit-font-size"]).toEqual("12px");
  expect(themeModelJsonCssVariables["--sjs2-base-unit-line-height"]).toEqual("12px");

  scale.value = 225; // max = 200
  themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables["--sjs2-base-unit-size"]).toEqual("16px");
  expect(themeModelJsonCssVariables["--sjs2-base-unit-spacing"]).toEqual("16px");
  expect(themeModelJsonCssVariables["--sjs2-base-unit-radius"]).toEqual("16px");
});

test("Creator theme: apply custom theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs2-color-utility-surface": "rgba(253, 255, 148, 0.5)",
      "--sjs2-color-project-brand-600": "rgba(248, 248, 248, 1)",
      "--sjs2-color-project-accent-600": "#0b864b",
      "--ctr-font-unit": "18px",
      "--ctr-line-height-unit": "18px",
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--sjs-test": "green"
    }
  };
  creator.applyCreatorTheme(themeJson);

  const surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-utility-surface");
  const primaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-project-brand-600");
  const secondaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs2-color-project-accent-600");
  expect(surfaceBackgroundColor.value).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeModel["--sjs2-color-utility-surface"]).toBe("rgba(253, 255, 148, 0.5)");

  expect(primaryBackgroundColor.value).toEqual("rgba(248, 248, 248, 1)");
  expect(themeModel["--sjs2-color-project-brand-600"]).toBe("rgba(248, 248, 248, 1)");

  expect(secondaryBackgroundColor.value).toEqual("#0b864b");
  expect(themeModel["--sjs2-color-project-accent-600"]).toBe("#0b864b");
});

test("sjs-special-background calculations on primary background changed", (): any => {
  const themeModel = new CreatorThemeModel();

  expect(themeModel["--sjs2-color-project-brand-600"]).toEqual("#19B394");
  expect(themeModel["--sjs2-color-utility-surface"]).toEqual("#EDF9F7");

  themeModel.loadTheme(PredefinedCreatorThemes["sc2020"]);
  expect(themeModel["--sjs2-color-project-brand-600"]).toEqual("#19B394");
  expect(themeModel["--sjs2-color-utility-surface"]).toEqual("#EDF9F7");

  themeModel["--sjs2-color-project-brand-600"] = PredefinedColors["light"]["teal"];
  themeModel["--sjs2-color-project-brand-600"] = PredefinedColors["light"]["teal"];
  expect(colorsAreEqual(themeModel["--sjs2-color-project-brand-600"], PredefinedColors["light"]["teal"])).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs2-color-utility-surface"], PredefinedBackgroundColors["light"]["teal"])).toBeTruthy();

  themeModel["--sjs2-color-project-brand-600"] = PredefinedColors["light"]["orchid"];
  expect(colorsAreEqual(themeModel["--sjs2-color-project-brand-600"], PredefinedColors["light"]["orchid"])).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs2-color-utility-surface"], PredefinedBackgroundColors["light"]["orchid"])).toBeTruthy();

  themeModel["--sjs2-color-project-brand-600"] = "#fefefe";
  expect(colorsAreEqual(themeModel["--sjs2-color-project-brand-600"], "#fefefe")).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs2-color-utility-surface"], PredefinedBackgroundColors["light"]["gray"])).toBeTruthy();
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