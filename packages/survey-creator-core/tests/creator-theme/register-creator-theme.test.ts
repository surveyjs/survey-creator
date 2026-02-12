import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { registerCreatorTheme } from "../../src/creator-theme/creator-themes";
import SurveyCreatorTheme from "../../src/themes/index";

export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

beforeAll(() => {
  registerCreatorTheme(SurveyCreatorTheme);
});

test("Creator theme: update editors after theme switching", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themePGSurvey = designerPlugin["themePropertyGridViewModel"].survey;
  const themeName = themePGSurvey.findQuestionByName("themeName");
  const surfaceBackgroundColor = themePGSurvey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);
  const primaryBackgroundColor = themePGSurvey.findQuestionByName(CreatorThemeModel.varColorProjectBrand);
  const secondaryBackgroundColor = themePGSurvey.findQuestionByName(CreatorThemeModel.varColorProjectAccent);

  expect(themeName.value).toEqual("default-light");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
  expect(primaryBackgroundColor.value).toEqual("#19B394");
  expect(secondaryBackgroundColor.value).toEqual("#19B394");

  themeName.value = "default-contrast";
  expect(surfaceBackgroundColor.value).toEqual("#F4F2FB");
  expect(primaryBackgroundColor.value).toEqual("#3A179E");
  expect(secondaryBackgroundColor.value).toEqual("#3A179E");

  themeName.value = "default-light";
  expect(themeName.value).toEqual("default-light");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
  expect(primaryBackgroundColor.value).toEqual("#19B394");
  expect(secondaryBackgroundColor.value).toEqual("#19B394");
});