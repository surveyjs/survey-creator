import { Action } from "survey-core";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";
import { ThemeTabViewModel } from "../../src/components/tabs/theme-builder";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { CreatorTester } from "../creator-tester";
export * from "../../src/property-grid/theme-settings";
export * from "../../src/property-grid/header-settings";

test("saveSurvey and saveTheme actions integration", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true, saveSurveyAndTheme: true });
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const designerPlugin: TabDesignerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const saveSurveyAction = designerPlugin["saveSurveyAction"] as Action;
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const saveThemeAction = themePlugin["saveThemeAction"] as Action;

  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);
  expect(saveSurveyAction.visible).toBeTruthy();
  expect(saveSurveyAction.enabled).toBeFalsy();
  expect(saveThemeAction.visible).toBeFalsy();
  expect(saveThemeAction.enabled).toBeFalsy();

  creator.activeTab = "theme";
  expect(saveSurveyAction.visible).toBeFalsy();
  expect(saveSurveyAction.enabled).toBeFalsy();
  expect(saveThemeAction.visible).toBeTruthy();
  expect(saveThemeAction.enabled).toBeFalsy();

  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor").value = "some val";
  expect(saveSurveyAction.enabled).toBeTruthy();
  expect(saveThemeAction.enabled).toBeTruthy();

  saveThemeAction.action();
  expect(saveSurveyAction.visible).toBeFalsy();
  expect(saveSurveyAction.enabled).toBeFalsy();
  expect(saveThemeAction.visible).toBeTruthy();
  expect(saveThemeAction.enabled).toBeFalsy();
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);

  creator.activeTab = "designer";
  expect(saveSurveyAction.visible).toBeTruthy();
  expect(saveSurveyAction.enabled).toBeFalsy();
  expect(saveThemeAction.visible).toBeFalsy();
  expect(saveThemeAction.enabled).toBeFalsy();

  creator.survey.title = "Changed";
  expect(saveSurveyAction.enabled).toBeTruthy();
  expect(saveThemeAction.enabled).toBeTruthy();

  saveSurveyAction.action();
  expect(saveSurveyAction.visible).toBeTruthy();
  expect(saveSurveyAction.enabled).toBeFalsy();
  expect(saveThemeAction.visible).toBeFalsy();
  expect(saveThemeAction.enabled).toBeFalsy();
  expect(saveCount).toBe(1);
  expect(saveThemeCount).toBe(1);
});
