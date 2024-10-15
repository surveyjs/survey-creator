import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemes, ICreatorTheme } from "../../src/creator-theme/creator-themes";

import "survey-core/survey.i18n";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

test("Creator theme model de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs-base-unit": "6px",
      "--sjs-special-background": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");

  expect(themeModel["--sjs-base-unit"]).toBe("6px");
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

test("creator.applyTheme", () => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const themeJson: ICreatorTheme = {
    themeName: "custom",
    cssVariables: {
      "--sjs-special-background": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
      "--sjs-font-unit": "18px",
      "--sjs-base-unit": "6px",
      "--sjs-surface-base-unit": "10px",
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