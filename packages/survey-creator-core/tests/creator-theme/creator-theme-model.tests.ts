import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes, registerCreatorTheme } from "../../src/creator-theme/creator-themes";
import SurveyThemes, { DefaultLight } from "survey-core/themes";
import { vi } from "vitest";

import "survey-core/survey.i18n";
import { PredefinedBackgroundColors, PredefinedColors } from "../../src/components/tabs/themes";
import { colorsAreEqual } from "../../src/utils/color-utils";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { mockDomWindowGetComputedStyleFromInlineStyles, mockGetRGBaColorIdentity, restoreGetRGBaColorMock } from "../tabs/theme-test-mocks";
import { DomWindowHelper } from "survey-core";

beforeEach(() => {
  mockGetRGBaColorIdentity();
  mockDomWindowGetComputedStyleFromInlineStyles();
});
afterEach(() => {
  restoreGetRGBaColorMock();
  (DomWindowHelper.getWindow as any).mockRestore?.();
});

test("Creator theme model de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    colorPalette: "light",
    cssVariables: {
      [CreatorThemeModel.varBaseUnitSize]: "6px",
      [CreatorThemeModel.varBaseUnitRadius]: "6px",
      [CreatorThemeModel.varBaseUnitSpacing]: "6px",
      [CreatorThemeModel.varColorUtilitySurface]: "rgba(253, 255, 148, 0.5)",
      [CreatorThemeModel.varColorProjectBrand]: "rgba(248, 248, 248, 1)",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("light");

  expect(themeModel[CreatorThemeModel.varBaseUnitSize]).toBe("6px");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("rgba(253, 255, 148, 0.5)");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("rgba(248, 248, 248, 1)");

  const themeModelJson = themeModel.toJSON();
  const { colorPalette, ...themeJsonWithoutLightPalette } = themeJson;
  expect(themeModelJson).toStrictEqual(themeJsonWithoutLightPalette);
});

test("Default theme serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  themeModel.loadTheme();
  expect(themeModel.themeName).toBe("default");
  expect(themeModel.colorPalette).toBe("light");
  expect(themeModel.scale).toBe(100);
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("#EDF9F7");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("#19B394");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "default" });
});

test("Creator theme: sync css variables", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let surfaceBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);

  expect(creator.themeVariables[CreatorThemeModel.varColorUtilitySurface]).toEqual(undefined);
  expect((themeModel.cssVariables || {})[CreatorThemeModel.varColorUtilitySurface]).toEqual(undefined);
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");

  const newValue = "#c95ae7";
  surfaceBackgroundColor.value = newValue;
  expect(creator.themeVariables[CreatorThemeModel.varColorUtilitySurface]).toEqual(newValue);
  expect((themeModel.cssVariables || {})[CreatorThemeModel.varColorUtilitySurface]).toEqual(newValue);
  expect(surfaceBackgroundColor.value).toEqual(newValue);
});

test("Creator theme: reset color variables after change palette", (): any => {
  CreatorThemes["default-dark"] = <any>{
    "themeName": "default",
    "colorPalette": "dark",
    "cssVariables": {
      "--sjs-special-haze": "#000000BF",
      [CreatorThemeModel.varColorUtilitySurface]: "#0C0C0CFF",
      "--sjs-special-glow": "#000000BF",
      [CreatorThemeModel.varColorProjectBrand]: "#3EDFD5FF",
      "--sjs-primary-background-10": "#3EDFD51A",
      "--sjs-primary-background-400": "#29DCD1FF",
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
    const colorPalette = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName("colorPalette");
    const surfaceBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);
    const primaryBackgroundColor = designerPlugin["themePropertyGridViewModel"].survey.findQuestionByName(CreatorThemeModel.varColorProjectBrand);

    expect(themeName.value).toEqual("default");
    expect(colorPalette.value).toEqual("light");
    expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
    expect(primaryBackgroundColor.value).toEqual("#19B394");

    primaryBackgroundColor.value = "rgba(20, 20, 20, 1)";
    surfaceBackgroundColor.value = "rgba(10, 10, 10, 1)";
    expect(themeModel.themeCssVariablesChanges).toStrictEqual({
      [CreatorThemeModel.varColorProjectBrand]: "#141414",
      [CreatorThemeModel.varColorUtilitySurface]: "#0a0a0a",
    });

    colorPalette.value = "dark";
    expect(themeName.value).toEqual("default");
    expect(colorPalette.value).toEqual("dark");
    expect(surfaceBackgroundColor.value).toEqual("#0C0C0CFF");
    expect(primaryBackgroundColor.value).toEqual("#3EDFD5FF");
    expect(Object.keys(themeModel.themeCssVariablesChanges).length).toEqual(0);
  } finally {
    delete CreatorThemes["default-dark"];
  }
});

test("creator.applyCreatorTheme", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      [CreatorThemeModel.varColorUtilitySurface]: "rgba(253, 255, 148, 0.5)",
      [CreatorThemeModel.varColorProjectBrand]: "rgba(248, 248, 248, 1)",
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
  expect(surfaceBackgroundColor.value).toEqual("rgba(253, 255, 148, 0.5)");
  expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toBe("rgba(253, 255, 148, 0.5)");

  expect(primaryBackgroundColor.value).toEqual("rgba(248, 248, 248, 1)");
  expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toBe("rgba(248, 248, 248, 1)");
});

test("sjs-special-background calculations on primary background changed", (): any => {
  const surveyThemesRoot = (SurveyThemes as any).default ?? SurveyThemes;
  const contrastLight = surveyThemesRoot.ContrastLight;
  CreatorThemes["contrast-light"] = contrastLight;
  try {
    const themeModel = new CreatorThemeModel();

    expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toEqual("#19B394");
    expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toEqual("#EDF9F7");

    themeModel.loadTheme({ themeName: "contrast", colorPalette: "light" });
    expect(themeModel.themeName).toEqual("contrast");
    expect(themeModel.colorPalette).toEqual("light");
    expect(themeModel[CreatorThemeModel.varColorProjectBrand]).toEqual("#3A179E");
    expect(themeModel[CreatorThemeModel.varColorUtilitySurface]).toEqual("#F4F2FB");

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
  } finally {
    delete CreatorThemes["contrast-light"];
  }
});

test("Creator theme model colorPalette de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const lightThemeJson: ICreatorTheme = {
    themeName: "custom",
    colorPalette: "light",
  };
  themeModel.fromJSON(lightThemeJson);
  expect(themeModel.isLight).toBeTruthy();
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("light");

  let themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "custom" });

  const darkThemeJson: ICreatorTheme = {
    themeName: "custom",
    colorPalette: "dark",
  };
  themeModel.fromJSON(darkThemeJson);
  expect(themeModel.isLight).toBeFalsy();
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("dark");

  themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toEqual({ themeName: "custom", colorPalette: "dark" });

  themeModel.fromJSON(lightThemeJson);
  expect(themeModel.isLight).toBeTruthy();
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("light");

  themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual({ themeName: "custom" });
});

test("Creator theme model legacy isLight field de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  const darkThemeJson: ICreatorTheme = {
    themeName: "custom",
    isLight: false,
  };
  themeModel.fromJSON(darkThemeJson);
  expect(themeModel.isLight).toBeFalsy();
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.colorPalette).toBe("dark");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toEqual({ themeName: "custom", colorPalette: "dark" });
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
test("Default creator theme: survey-core DefaultLight is not filled", (): any => {
  mockDomWindowGetComputedStyleFromInlineStyles({
    [CreatorThemeModel.varColorUtilitySurface]: "#EDF9F7",
    [CreatorThemeModel.varColorProjectBrand]: "#19B394",
  });
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeModel = creator.getPlugin<TabDesignerPlugin>("designer")["themeModel"] as CreatorThemeModel;
  themeModel[CreatorThemeModel.varColorProjectBrand] = "#ff0000";
  expect(DefaultLight.cssVariables).toStrictEqual({});
});

test("Default creator theme: every model computes its own default variables", (): any => {
  const brand = CreatorThemeModel.varColorProjectBrand;
  // The probe div is appended to the model's root: an inline value wins, otherwise the root's value is inherited
  vi.spyOn(DomWindowHelper, "getWindow").mockReturnValue({
    ...window,
    getComputedStyle: (el: any) => ({
      getPropertyValue: (property: string) => {
        const inline = el?.style?.getPropertyValue?.(property);
        if (inline) return inline;
        if (property === brand) return el?.parentElement?.getAttribute("data-brand") || "";
        return "";
      }
    })
  } as any);
  const createRoot = (value: string): HTMLElement => {
    const root = document.createElement("div");
    root.setAttribute("data-brand", value);
    document.body.appendChild(root);
    return root;
  };
  const createModel = (root: HTMLElement): CreatorThemeModel => {
    const model = new CreatorThemeModel();
    model.getRootElement = () => root;
    model.loadTheme({ themeName: "default" });
    return model;
  };
  const rootA = createRoot("#111111");
  const rootB = createRoot("#222222");
  try {
    [[rootA, rootB], [rootB, rootA]].forEach(roots => {
      const models = roots.map(root => createModel(root));
      roots.forEach((root, index) => {
        const value = root.getAttribute("data-brand");
        expect(models[index][brand], "model property, root " + value).toBe(value);
        expect(models[index]["getThemeFromCreatorThemes"]("default", "light").cssVariables[brand], "default theme, root " + value).toBe(value);
      });
    });
    expect(CreatorThemes["default-light"].cssVariables).toStrictEqual({});
  } finally {
    rootA.remove();
    rootB.remove();
  }
});

test("Default creator theme: a registered default-light theme is not mutated", (): any => {
  const savedDefaultLight = CreatorThemes["default-light"];
  const savedPredefinedCreatorThemes = [...PredefinedCreatorThemes];
  const customCssVariables = {};
  const customDefaultLight: ICreatorTheme = { themeName: "default", colorPalette: "light", cssVariables: customCssVariables };
  mockDomWindowGetComputedStyleFromInlineStyles({
    [CreatorThemeModel.varColorUtilitySurface]: "#EDF9F7",
    [CreatorThemeModel.varColorProjectBrand]: "#19B394",
  });
  try {
    registerCreatorTheme(customDefaultLight);
    expect(CreatorThemes["default-light"]).toBe(customDefaultLight);
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
    const themeModel = creator.getPlugin<TabDesignerPlugin>("designer")["themeModel"] as CreatorThemeModel;
    themeModel[CreatorThemeModel.varColorProjectBrand] = "#ff0000";
    expect(customDefaultLight.cssVariables).toBe(customCssVariables);
    expect(customCssVariables).toStrictEqual({});
  } finally {
    CreatorThemes["default-light"] = savedDefaultLight;
    PredefinedCreatorThemes.length = 0;
    savedPredefinedCreatorThemes.forEach(t => PredefinedCreatorThemes.push(t));
  }
});
