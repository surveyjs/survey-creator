import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes } from "../../src/creator-theme/creator-themes";

import "survey-core/survey.i18n";
import { PredefinedBackgroundColors, PredefinedColors } from "../../src/components/tabs/themes";
import { colorsAreEqual } from "../../src/utils/utils";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

test("Creator theme model de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--sjs-special-background": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");

  expect(themeModel["--ctr-size-unit"]).toBe("6px");
  expect(themeModel["--sjs-special-background"]).toBe("rgba(253, 255, 148, 0.5)");
  expect(themeModel["--sjs-primary-background-500"]).toBe("rgba(248, 248, 248, 1)");
  expect(themeModel["--sjs-secondary-background-500"]).toBe("#0b864b");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(themeJson);
});

test("Default theme serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  themeModel.loadTheme();
  expect(themeModel.themeName).toBe("sc2020");
  expect(themeModel.scale).toBe(100);
  expect(themeModel["--sjs-special-background"]).toBe("#F3F3F3FF");
  expect(themeModel["--sjs-primary-background-500"]).toBe("#19B394FF");
  expect(themeModel["--sjs-secondary-background-500"]).toBe("#FF9814FF");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "sc2020" });
});

test("Creator theme: sync css variables", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-special-background");

  expect(creator.themeVariables["--sjs-special-background"]).toEqual(undefined);
  expect((themeModel.cssVariables || {})["--sjs-special-background"]).toEqual(undefined);
  expect(surfaceBackgroundColor.value).toEqual("#F3F3F3FF");

  const newValue = "#c95ae7";
  surfaceBackgroundColor.value = newValue;
  expect(creator.themeVariables["--sjs-special-background"]).toEqual(newValue);
  expect((themeModel.cssVariables || {})["--sjs-special-background"]).toEqual(newValue);
  expect(surfaceBackgroundColor.value).toEqual(newValue);
});

test("Creator theme: reset color variables after change theme", (): any => {
  CreatorThemes["dark"] = <any>{
    "themeName": "dark",
    "isLight": false,
    "cssVariables": {
      "--sjs-special-haze": "#000000BF",
      "--sjs-special-background": "#0C0C0CFF",
      "--sjs-special-glow": "#000000BF",
      "--sjs-primary-background-500": "#3EDFD5FF",
      "--sjs-primary-background-10": "#3EDFD51A",
      "--sjs-primary-background-400": "#29DCD1FF",
      "--sjs-secondary-background-500": "#EDA925FF",
      "--sjs-secondary-background-25": "#EDA92540",
      "--sjs-secondary-background-10": "#EDA9251A",
    }
  };

  try {
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
    const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
    const themeModel = designerPlugin["themeModel"];
    const themeName = designerPlugin["themePropertyGrid"].survey.findQuestionByName("themeName");
    const surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-special-background");
    const primaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-primary-background-500");
    const secondaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-secondary-background-500");

    expect(themeName.value).toEqual("sc2020");
    expect(surfaceBackgroundColor.value).toEqual("#F3F3F3FF");
    expect(primaryBackgroundColor.value).toEqual("#19B394FF");
    expect(secondaryBackgroundColor.value).toEqual("#FF9814FF");

    primaryBackgroundColor.value = "rgba(20, 20, 20, 1)";
    secondaryBackgroundColor.value = "rgba(30, 30, 30, 0.1)";
    surfaceBackgroundColor.value = "rgba(10, 10, 10, 1)";
    expect(themeModel.themeCssVariablesChanges).toStrictEqual({
      "--sjs-primary-background-10": "rgba(20, 20, 20, 0.1)",
      "--sjs-primary-background-400": "rgba(5, 5, 5, 1)",
      "--sjs-primary-background-500": "#141414",
      "--sjs-secondary-background-10": "rgba(30, 30, 30, 0.1)",
      "--sjs-secondary-background-25": "rgba(30, 30, 30, 0.25)",
      "--sjs-secondary-background-500": "#1e1e1e",
      "--sjs-special-background": "#0a0a0a",
      "--sjs-special-glow": "rgba(10, 10, 10, 1)",
      "--sjs-special-haze": "rgba(10, 10, 10, 1)",
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

test("creator.applyTheme", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs-special-background": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
      "--ctr-font-unit": "18px",
      "--ctr-line-height-unit": "18px",
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--ctr-surface-base-unit": "10px",
      "--lbr-corner-radius-unit": "10px",
      "--lbr-font-unit": "10px",
      "--lbr-line-height-unit": "10px",
      "--lbr-size-unit": "10px",
      "--lbr-spacing-unit": "10px",
      "--sjs-test": "green"
    }
  };

  creator.applyTheme(themeJson);

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
      "--ctr-font-unit": "10px",
      "--ctr-line-height-unit": "10px",
      "--ctr-spacing-unit": "12px",
      "--ctr-size-unit": "12px",
      "--ctr-corner-radius-unit": "12px",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.fontScale).toBe(125);
  expect(themeModel.scale).toBe(150);

  fontScale.value = 150;

  let themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables["--ctr-font-unit"]).toEqual("12px");
  expect(themeModelJsonCssVariables["--ctr-line-height-unit"]).toEqual("12px");

  scale.value = 225;
  themeModelJsonCssVariables = themeModel.toJSON().cssVariables || {};
  expect(themeModelJsonCssVariables["--ctr-size-unit"]).toEqual("18px");
  expect(themeModelJsonCssVariables["--ctr-spacing-unit"]).toEqual("18px");
  expect(themeModelJsonCssVariables["--ctr-corner-radius-unit"]).toEqual("18px");
});

test("Update --sjs-primary-background-10 && --sjs-primary-background-400", (): any => {
  const fefefeColor = "#fefefe"; // rgba(254, 254, 254, 1)
  const themeModel = new CreatorThemeModel();
  themeModel.loadTheme({
    themeName: "custom",
    cssVariables: {
      "--sjs-primary-background-500": "#19B394FF",
      "--sjs-primary-background-400": "#14A48BFF",
      "--sjs-primary-background-10": "#19B3941A",
    }
  });

  expect(themeModel["--sjs-primary-background-500"]).toEqual("#19B394FF");
  expect(themeModel["--sjs-primary-background-10"]).toEqual("#19B3941A");
  expect(themeModel["--sjs-primary-background-400"]).toEqual("#14A48BFF");
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({});

  themeModel["--sjs-primary-background-500"] = fefefeColor;
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({
    "--sjs-primary-background-500": fefefeColor,
    "--sjs-primary-background-400": "rgba(239, 239, 239, 1)",
    "--sjs-primary-background-10": "rgba(254, 254, 254, 0.1)",
  });
});

test("Update --sjs-secondary-background-25 && --sjs-secondary-background-10", (): any => {
  const fefefeColor = "#fefefe"; // rgba(254, 254, 254, 1)
  const themeModel = new CreatorThemeModel();
  themeModel.loadTheme({
    themeName: "custom",
    cssVariables: {
      "--sjs-secondary-background-500": "#FF9814FF",
      "--sjs-secondary-background-25": "#FF981440",
      "--sjs-secondary-background-10": "#FF98141A",
    }
  });

  expect(themeModel["--sjs-secondary-background-500"]).toEqual("#FF9814FF"); // rgba(255, 152, 20, 1)
  expect(themeModel["--sjs-secondary-background-25"]).toEqual("#FF981440"); // rgba(255, 152, 20, 0.25)
  expect(themeModel["--sjs-secondary-background-10"]).toEqual("#FF98141A"); //rgba(255, 152, 20, 0.1)
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({});

  themeModel["--sjs-secondary-background-500"] = fefefeColor;
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({
    "--sjs-secondary-background-500": fefefeColor,
    "--sjs-secondary-background-25": "rgba(254, 254, 254, 0.25)",
    "--sjs-secondary-background-10": "rgba(254, 254, 254, 0.1)",
  });
});

test("Update --sjs-special-haze && --sjs-special-glow", (): any => {
  const fefefeColor = "#fefefe"; // rgba(254, 254, 254, 1)
  const themeModel = new CreatorThemeModel();
  themeModel.loadTheme({
    themeName: "custom",
    cssVariables: {
      "--sjs-special-background": "#EDF9F7FF",
      "--sjs-special-haze": "#CCEEEE59",
      "--sjs-special-glow": "#004C441A",
    }
  });

  expect(themeModel["--sjs-special-background"]).toEqual("#EDF9F7FF"); // rgba(237, 249, 247, 1)
  expect(themeModel["--sjs-special-haze"]).toEqual("#CCEEEE59"); // rgba(204, 238, 238, 0.35)
  expect(themeModel["--sjs-special-glow"]).toEqual("#004C441A"); // rgba(0, 76, 68, 0.1)
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({});

  themeModel["--sjs-special-background"] = fefefeColor;
  expect(themeModel.themeCssVariablesChanges).toStrictEqual({
    "--sjs-special-background": fefefeColor,
    "--sjs-special-haze": "rgba(243, 243, 243, 0.35)",
    "--sjs-special-glow": "rgba(81, 81, 81, 0.1)",
  });
});

test("Creator theme: apply custom theme", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs-special-background": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
      "--ctr-font-unit": "18px",
      "--ctr-line-height-unit": "18px",
      "--ctr-size-unit": "6px",
      "--ctr-corner-radius-unit": "6px",
      "--ctr-spacing-unit": "6px",
      "--ctr-surface-base-unit": "10px",
      "--sjs-test": "green"
    }
  };
  creator.applyTheme(themeJson);

  const surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-special-background");
  const primaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-primary-background-500");
  const secondaryBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--sjs-secondary-background-500");
  expect(surfaceBackgroundColor.value).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeModel["--sjs-special-background"]).toBe("rgba(253, 255, 148, 0.5)");

  expect(primaryBackgroundColor.value).toEqual("rgba(248, 248, 248, 1)");
  expect(themeModel["--sjs-primary-background-500"]).toBe("rgba(248, 248, 248, 1)");

  expect(secondaryBackgroundColor.value).toEqual("#0b864b");
  expect(themeModel["--sjs-secondary-background-500"]).toBe("#0b864b");
});

test("sjs-special-background calculations on primary background changed", (): any => {
  const themeModel = new CreatorThemeModel();

  expect(themeModel["--sjs-primary-background-500"]).toEqual("#19B394FF");
  expect(themeModel["--sjs-special-background"]).toEqual("#F3F3F3FF");

  themeModel.loadTheme(PredefinedCreatorThemes["sc2020"]);
  expect(themeModel["--sjs-primary-background-500"]).toEqual("#19B394FF");
  expect(themeModel["--sjs-special-background"]).toEqual("#F3F3F3FF");

  themeModel["--sjs-primary-background-500"] = PredefinedColors["light"]["teal"];
  themeModel["--sjs-primary-background-500"] = PredefinedColors["light"]["teal"];
  expect(colorsAreEqual(themeModel["--sjs-primary-background-500"], PredefinedColors["light"]["teal"])).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs-special-background"], PredefinedBackgroundColors["light"]["teal"])).toBeTruthy();

  themeModel["--sjs-primary-background-500"] = PredefinedColors["light"]["orchid"];
  expect(colorsAreEqual(themeModel["--sjs-primary-background-500"], PredefinedColors["light"]["orchid"])).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs-special-background"], PredefinedBackgroundColors["light"]["orchid"])).toBeTruthy();

  themeModel["--sjs-primary-background-500"] = "#fefefe";
  expect(colorsAreEqual(themeModel["--sjs-primary-background-500"], "#fefefe")).toBeTruthy();
  expect(colorsAreEqual(themeModel["--sjs-special-background"], PredefinedBackgroundColors["light"]["gray"])).toBeTruthy();
});
