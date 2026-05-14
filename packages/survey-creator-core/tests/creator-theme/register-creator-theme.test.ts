import { CreatorTester } from "../creator-tester";
import { CreatorThemeModel } from "../../src/creator-theme/creator-theme-model";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { CreatorThemes, PredefinedCreatorThemes, registerCreatorTheme } from "../../src/creator-theme/creator-themes";
import SurveyThemes from "survey-core/themes";
import { mockDomWindowGetComputedStyleFromInlineStyles } from "../tabs/theme-test-mocks";
import { DomWindowHelper } from "survey-core";

export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";

let savedCreatorThemes: { [index: string]: any };
let savedPredefinedCreatorThemes: string[];

beforeAll(() => {
  mockDomWindowGetComputedStyleFromInlineStyles();
  savedCreatorThemes = { ...CreatorThemes };
  savedPredefinedCreatorThemes = [...PredefinedCreatorThemes];
  registerCreatorTheme(SurveyThemes);
});

afterAll(() => {
  Object.keys(CreatorThemes).forEach(key => { if (!(key in savedCreatorThemes)) delete CreatorThemes[key]; });
  PredefinedCreatorThemes.length = 0;
  savedPredefinedCreatorThemes.forEach(t => PredefinedCreatorThemes.push(t));
  (DomWindowHelper.getWindow as any).mockRestore?.();
});

test("Creator theme: update editors after theme switching", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, showCreatorThemeSettings: true });
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themePGSurvey = designerPlugin["themePropertyGridViewModel"].survey;
  const themeName = themePGSurvey.findQuestionByName("themeName");
  const surfaceBackgroundColor = themePGSurvey.findQuestionByName(CreatorThemeModel.varColorUtilitySurface);
  const primaryBackgroundColor = themePGSurvey.findQuestionByName(CreatorThemeModel.varColorProjectBrand);

  expect(themeName.value).toEqual("default-light");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
  expect(primaryBackgroundColor.value).toEqual("#19B394");

  themeName.value = "default-contrast";
  expect(surfaceBackgroundColor.value).toEqual("#F4F2FB");
  expect(primaryBackgroundColor.value).toEqual("#3A179E");

  themeName.value = "default-light";
  expect(themeName.value).toEqual("default-light");
  expect(surfaceBackgroundColor.value).toEqual("#EDF9F7");
  expect(primaryBackgroundColor.value).toEqual("#19B394");
});