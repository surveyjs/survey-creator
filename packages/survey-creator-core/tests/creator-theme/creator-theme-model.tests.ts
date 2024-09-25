import { Serializer } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel, ICreatorTheme } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";

import "survey-core/survey.i18n";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

// const themeFromFile = {
//   "cssVariables": {
//     "--sjs-font-family": "Segoe",
//     "--sjs-general-backcolor": "rgba(253, 255, 148, 0.5)",
//     "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
//     "--sjs-general-backcolor-dim": "#0b864b",
//     "--sjs-general-backcolor-dim-light": "rgba(45, 235, 223, 1)",
//     "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
//     "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
//     "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
//     "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
//     "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
//     "--sjs-primary-backcolor": "rgba(229, 244, 154, 1)",
//     "--sjs-primary-backcolor-light": "rgba(229, 244, 154, 0.1)",
//     "--sjs-primary-backcolor-dark": "rgba(215, 229, 145, 1)",
//     "--sjs-primary-forecolor": "rgba(178, 61, 153, 1)",
//     "--sjs-primary-forecolor-light": "rgba(39, 114, 203, 0.25)",
//     "--sjs-base-unit": "8px",
//     "--sjs-corner-radius": "4px",
//     "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
//     "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
//     "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
//     "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
//     "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
//     "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
//     "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
//     "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
//     "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
//     "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
//     "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
//     "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
//     "--sjs-special-red": "rgba(229, 10, 62, 1)",
//     "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
//     "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
//     "--sjs-special-green": "rgba(25, 179, 148, 1)",
//     "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
//     "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
//     "--sjs-special-blue": "rgba(67, 127, 217, 1)",
//     "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
//     "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
//     "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
//     "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
//     "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
//     "--sjs-font-editorfont-family": "Arial, sans-serif",
//     "--sjs-font-editorfont-weight": "600",
//     "--sjs-font-editorfont-color": "rgba(204, 25, 25, 1)",
//     "--sjs-font-editorfont-size": "17px",
//     "--sjs-editorpanel-backcolor": "rgba(45, 235, 223, 1)",
//     "--sjs-editorpanel-hovercolor": "rgba(70, 143, 221, 1)",
//     "--sjs-editorpanel-cornerRadius": "4px",
//     "--sjs-font-questiontitle-family": "Verdana, sans-serif",
//     "--sjs-font-questiontitle-weight": "700",
//     "--sjs-font-questiontitle-color": "rgba(201, 90, 231, 0.91)",
//     "--sjs-font-questiontitle-size": "18px",
//     "--sjs-questionpanel-backcolor": "rgba(253, 255, 148, 0.6)",
//     "--sjs-questionpanel-hovercolor": "rgba(237, 238, 186, 1)",
//     "--sjs-questionpanel-cornerRadius": "6px"
//   }
// };

// beforeEach(() => {
//   ThemeModel.DefaultTheme = Themes["default-light"];
// });

test("Creator theme model de/serialization", (): any => {
  const themeModel = new CreatorThemeModel();
  let result = themeModel.cssVariables || {};
  expect(Object.keys(result).length).toBe(0);

  const themeJson: ICreatorTheme = {
    themeName: "custom",
    palette: "light",
    cssVariables: {
      "--sjs-base-unit": "6px",
      "--ctr-surface-background-color": "rgba(253, 255, 148, 0.5)",
      "--sjs-primary-background-500": "rgba(248, 248, 248, 1)",
      "--sjs-secondary-background-500": "#0b864b",
    }
  };
  themeModel.fromJSON(themeJson);
  expect(themeModel.scale).toBe(75);
  expect(themeModel.themeName).toBe("custom");
  expect(themeModel.palette).toBe("light");

  expect(themeModel["--sjs-base-unit"]).toBe("6px");
  expect(themeModel["--ctr-surface-background-color"]).toBe("rgba(253, 255, 148, 0.5)");
  expect(themeModel["--sjs-primary-background-500"]).toBe("rgba(248, 248, 248, 1)");
  expect(themeModel["--sjs-secondary-background-500"]).toBe("#0b864b");

  const themeModelJson = themeModel.toJSON();
  expect(themeModelJson).toStrictEqual(themeJson);
});

test("Creator theme: sync css variables", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themeModel = designerPlugin["themeModel"];
  let themeModelCssVariables = themeModel.cssVariables || {};
  let surfaceBackgroundColor = designerPlugin["themePropertyGrid"].survey.findQuestionByName("--ctr-surface-background-color");
  const newValue = "#c95ae7";

  expect(creator.cssVariables["--ctr-surface-background-color"]).toEqual(undefined);
  expect(themeModelCssVariables["--ctr-surface-background-color"]).toEqual(undefined);

  surfaceBackgroundColor.value = newValue;
  expect(surfaceBackgroundColor.value).toEqual(newValue);
  themeModelCssVariables = themeModel.cssVariables || {};
  expect(creator.cssVariables["--ctr-surface-background-color"]).toEqual(newValue);
  expect(themeModelCssVariables["--ctr-surface-background-color"]).toEqual(newValue);
});