export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
export { createColor } from "../../src/components/tabs/theme-custom-questions/color-alpha";
export { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/shadow-effects";
export * from "../../src/property-grid/theme-settings";
export * from "../../src/property-grid/header-settings";

import { Action, ITheme, QuestionButtonGroupModel, QuestionCompositeModel, QuestionDropdownModel, QuestionFileModel, Serializer, SurveyElement, settings as surveySettings } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { HeaderModel, ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeTabViewModel } from "../../src/components/tabs/theme-builder";
import { settings } from "../../src/creator-settings";
import { assign } from "../../src/utils/utils";
import { PredefinedThemes, Themes } from "../../src/components/tabs/themes";
import { registerSurveyTheme } from "../../src/components/tabs/theme-model";
import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);

test("Creator top action bar: only theme tab", (): any => {
  const themeBuilderButtonOrder = ["action-undo-theme", "action-redo-theme", "svc-reset-theme", "svc-theme-settings", "svc-theme-import", "svc-theme-export"].join("|");
  const logicTabButtonOrder = ["svc-logic-filter-question", "svc-logic-filter-actiontype", "svc-logic-fast-entry"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");
  creator.showOneCategoryInPropertyGrid = false;
  expect(creator.toolbar.visibleActions.length).toEqual(6);
  let receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeBuilderButtonOrder);
  expect(creator.toolbar.visibleActions[3].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.toolbar.visibleActions.length).toEqual(3);
  receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(logicTabButtonOrder);
});

test("Creator footer action bar: only theme tab", (): any => {
  const buttonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  const receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(buttonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);
});

test("Theme invisibleToggleAction state change", (): any => {
  const creator: CreatorTester = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  creator.showInvisibleElementsInTestSurveyTab = true;
  creator.makeNewViewActive("theme");
  const action = creator.footerToolbar.getActionById("showInvisible") as Action;
  expect(action.active).toBeFalsy();
  action.action();
  expect(action.active).toBeTruthy();
});

test("Creator footer action bar: all tabs", (): any => {
  const designerTabButtonOrder = ["svd-designer", "svd-preview", "action-undo", "action-redo", "svd-settings"].join("|");
  const testTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible"].join("|");
  const themeTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: true, showPreviewTab: true, showThemeTab: true, showLogicTab: true, showJSONEditorTab: true, showTranslationTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("designer");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  let receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeTruthy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeFalsy();

  creator.activeTab = "test";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(testTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "theme";
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);

  creator.activeTab = "designer";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
});

test("Theme builder: set backcolor to simulator", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const themeTabViewModel = themePlugin.model as ThemeTabViewModel;

  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("rgba(243, 243, 243, 1)");
  expect(themeTabViewModel.survey.themeVariables["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");

  themeModel["--sjs-general-backcolor-dim"] = "red";
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("red");
  expect(themeTabViewModel.survey.themeVariables["--sjs-general-backcolor-dim"]).toEqual("red");
});

test("Theme builder: survey settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeSurveyTab = themePlugin.model as ThemeTabViewModel;
  const themeModel = themePlugin.themeModel as ThemeModel;
  const simulatorSurvey = themeSurveyTab.survey;

  expect(themeModel.backgroundImage).toEqual("");
  expect(themeModel.backgroundImageFit).toEqual("cover");
  expect(themeModel.backgroundOpacity).toEqual(100);
  expect(themeModel.isPanelless).toEqual(false);

  expect(simulatorSurvey.backgroundImage).toBeFalsy();
  expect(simulatorSurvey.backgroundImageFit).toEqual("cover");
  expect(simulatorSurvey.backgroundOpacity).toEqual(1);
  expect(simulatorSurvey["isCompact"]).toBe(false);

  themeModel.backgroundImage = "image-url";
  themeModel.backgroundImageFit = "auto";
  themeModel.backgroundOpacity = 60;
  themeModel.isPanelless = true;

  expect(simulatorSurvey.backgroundImage).toEqual("image-url");
  expect(simulatorSurvey.backgroundImageFit).toEqual("auto");
  expect(simulatorSurvey.backgroundOpacity).toEqual(0.6);
  expect(simulatorSurvey["isCompact"]).toBe(true);
});

test("Theme builder: composite question values are lost", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const questionTitleFontSettings = themePlugin.propertyGrid.survey.getQuestionByName("questionTitle");
  const pageTitleFontSettings = themePlugin.propertyGrid.survey.getQuestionByName("pageTitle");

  expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toBe("rgba(0, 0, 0, 0.91)");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toBe("rgba(0, 0, 0, 0.91)");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  questionTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#fefefe", size: 40 };

  expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toEqual("#fefefe");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toBeUndefined();
  expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toBe("rgba(0, 0, 0, 0.91)");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toBeUndefined();

  pageTitleFontSettings.value = { family: "Arial, sans-serif", weight: "semiBold", color: "#101010", size: 28 };

  expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toEqual("Arial, sans-serif");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toEqual("semiBold");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toEqual("#fefefe");
  expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toEqual("40px");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-family"]).toEqual("Arial, sans-serif");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-weight"]).toEqual("semiBold");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-color"]).toEqual("#101010");
  expect(themeModel.cssVariables["--sjs-font-pagetitle-size"]).toEqual("28px");
});

test("import theme from file", (done) => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const themeTabViewModel = themePlugin.model as ThemeTabViewModel;

  const data = JSON.stringify({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
    },
    "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
    "backgroundImageFit": "auto",
    "themeName": "My Theme",
    "colorPalette": "light",
    "isPanelless": true
  } as any, null, 4);
  const blob = new Blob([data], { type: "application/json" });
  themePlugin.importFromFile(blob as any, () => {
    expect(themeModel.themeName).toEqual("default");
    expect(themeModel.colorPalette).toEqual("light");
    expect(themeModel.isPanelless).toEqual(true);
    expect(themeModel.backgroundImage).toBeTruthy();
    expect(themeModel.backgroundImageFit).toEqual("auto");
    expect(themeModel["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
    expect(themeTabViewModel.survey.themeVariables["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
    expect(saveThemeCount).toBe(1);
    done();
  });
});

test("export theme to file", (done): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  themeModel["questionTitle"] = { family: settings.themeEditor.defaultFontFamily, color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 19 };

  themePlugin.saveToFileHandler = async (fileName: string, blob: Blob) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      expect(fileName).toBe(settings.themeEditor.exportFileName);
      const theme: ITheme = JSON.parse(fileReader.result as string);
      expect(theme.themeName).toEqual("default");
      expect(Object.keys(theme.cssVariables).length).toBe(95);
      expect(theme.cssVariables["--sjs-font-questiontitle-color"]).toBe("rgba(0, 0, 0, 0.91)");
      expect(theme.cssVariables["--sjs-font-questiontitle-size"]).toBe("19px");
      done();
    };
    fileReader.readAsText(blob);
  };
  themePlugin.exportToFile(settings.themeEditor.exportFileName);
});

test("Theme onModified and saveThemeFunc", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  let modificationsLog = "";
  themePlugin.onThemeSelected.add((s, o) => {
    modificationsLog += "->THEME_SELECTED";
  });
  themePlugin.onThemePropertyChanged.add((s, o) => {
    modificationsLog += "->THEME_MODIFIED";
  });
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;

  expect(modificationsLog).toBe("");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeFalsy();

  themeModel["--sjs-border-default"] = "#ff0000";

  expect(modificationsLog).toBe("->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();

  themeModel.resetTheme();

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(2);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeFalsy();

  themeModel.backgroundImage = "http://site.org/images/pic1.png";

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(3);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();

  themeModel["--sjs-general-backcolor-dim"] = "#ff0000";

  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(4);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();

  themeModel.header["headerView"] = "basic";
  expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED->THEME_MODIFIED");
  expect(saveCount).toBe(1);
  expect(saveThemeCount).toBe(5);
  expect(creator.hasPendingThemeChanges).toBeFalsy();
  expect(themePlugin.isModified).toBeTruthy();
});

test("loadTheme fill all theme parameters: name, mode and compactness", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;

  themeModel.setTheme(<any>{ isPanelless: true });
  expect(creator.theme.themeName).toBe("default");
  expect(creator.theme.colorPalette).toBe("light");
  expect(creator.theme.isPanelless).toBe(true);

  themeModel.setTheme(<any>{ colorPalette: "dark" });
  expect(creator.theme.themeName).toBe("default");
  expect(creator.theme.colorPalette).toBe("dark");
  expect(creator.theme.isPanelless).toBe(false);
});

test("Get theme changes only", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;

  const fullTheme = themePlugin.getCurrentTheme() || {};
  expect(Object.keys(fullTheme).length).toBe(1);
  expect(Object.keys(fullTheme)).toStrictEqual(["cssVariables"]);
  expect(Object.keys(fullTheme.cssVariables).length).toBe(0);

  const themeChanges = themePlugin.getCurrentTheme(true) || {};
  expect(Object.keys(themeChanges).length).toBe(5);
  expect(Object.keys(themeChanges)).toStrictEqual([
    "cssVariables",
    "headerView",
    "themeName",
    "colorPalette",
    "isPanelless",
  ]);
  expect(Object.keys(themeChanges.cssVariables).length).toBe(0);

  themeModel.questionBackgroundTransparency = 60;
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(249, 249, 249, 0.6)");

  const fullModifiedTheme = themePlugin.getCurrentTheme() || {};
  expect(Object.keys(fullModifiedTheme).length).toBe(10);
  expect(Object.keys(fullModifiedTheme.cssVariables).length).toBe(94);

  const modifiedThemeChanges = themePlugin.getCurrentTheme(true) || {};
  expect(Object.keys(modifiedThemeChanges).length).toBe(6);
  expect(Object.keys(modifiedThemeChanges.cssVariables).length).toBe(1);
  expect(Object.keys(modifiedThemeChanges.cssVariables)).toStrictEqual([
    "--sjs-editorpanel-backcolor",
  ]);

  themeModel.resetTheme();
  const fullThemeReset = themePlugin.getCurrentTheme();
  expect(Object.keys(fullThemeReset).length).toBe(10);
  expect(Object.keys(fullThemeReset)).toStrictEqual([
    "themeName",
    "colorPalette",
    "isPanelless",
    "backgroundImage",
    "backgroundImageFit",
    "backgroundImageAttachment",
    "backgroundOpacity",
    "cssVariables",
    "header",
    "headerView",
  ]);
  expect(Object.keys(fullThemeReset.cssVariables).length).toBe(84);

  const themeChangesReset = themePlugin.getCurrentTheme(true);
  expect(Object.keys(themeChangesReset).length).toBe(6);
  expect(Object.keys(themeChangesReset)).toStrictEqual([
    "cssVariables",
    "header",
    "headerView",
    "themeName",
    "colorPalette",
    "isPanelless",
  ]);
  expect(Object.keys(themeChangesReset.cssVariables).length).toBe(0);
});

test("Pass background image from survey to theme editor and back", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
  const camelImage = "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg";
  creator.JSON = {
    headerView: "advanced",
    backgroundImage: lionImage,
    questions: [{ type: "text", name: "q1" }]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;
  let backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage");
  expect(creator.theme.backgroundImage).toBe(undefined);
  expect(themeModel.backgroundImage).toBe(lionImage);
  expect(backgroundImageEditor.value).toBe(lionImage);
  expect(themeTabViewModel.survey.backgroundImage).toBe(lionImage);

  backgroundImageEditor.value = "";
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeModel.backgroundImage).toBe("");
  expect(themeTabViewModel.survey.backgroundImage).toBe("");

  backgroundImageEditor.value = camelImage;
  expect(creator.theme.backgroundImage).toBe(camelImage);
  expect(themeModel.backgroundImage).toBe(camelImage);
  expect(themeTabViewModel.survey.backgroundImage).toBe(camelImage);

  themeModel.resetTheme();
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeModel.backgroundImage).toBe("");
  expect(backgroundImageEditor.value).toBe("");
  expect(themeTabViewModel.survey.backgroundImage).toBe("");

  themePlugin.deactivate();
  themePlugin.activate();
  themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  themeModel = themePlugin.themeModel as ThemeModel;
  backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage");
  expect(creator.theme.backgroundImage).toBe("");
  expect(themeModel.backgroundImage).toBe("");
  expect(backgroundImageEditor.value).toBe("");
  expect(themeTabViewModel.survey.backgroundImage).toBe("");
});

test("Keep background image in theme modifications", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const lionImage = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
  creator.JSON = {
    headerView: "advanced",
    questions: [{ type: "text", name: "q1" }]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;
  let backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage");

  expect(creator.theme.backgroundImage).toBe(undefined);
  expect(themeModel.backgroundImage).toBe("");
  expect(themeTabViewModel.survey.backgroundImage).toBe(undefined);

  backgroundImageEditor.value = lionImage;
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeModel.backgroundImage).toBe(lionImage);
  expect(themeTabViewModel.survey.backgroundImage).toBe(lionImage);

  themeModel.themeName = "flat";
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeModel.backgroundImage).toBe(lionImage);
  expect(backgroundImageEditor.value).toBe(lionImage);
  expect(themeTabViewModel.survey.backgroundImage).toBe(lionImage);

  themePlugin.deactivate();
  expect(creator.theme.backgroundImage).toBe(lionImage);

  themePlugin.activate();
  themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  themeModel = themePlugin.themeModel as ThemeModel;
  backgroundImageEditor = themePlugin.propertyGrid.survey.findQuestionByName("backgroundImage");
  expect(creator.theme.backgroundImage).toBe(lionImage);
  expect(themeModel.backgroundImage).toBe(lionImage);
  expect(backgroundImageEditor.value).toBe(lionImage);
  expect(themeTabViewModel.survey.backgroundImage).toBe(lionImage);
});

test("Keep theme modifications between edit sessions", (): any => {
  let creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let savedTheme: any = {};
  creator.saveThemeFunc = () => {
    savedTheme = creator.theme;
  };
  creator.JSON = {
    questions: [{ type: "text", name: "q1" }]
  };
  let themePlugin: ThemeTabPlugin = creator.getPlugin<ThemeTabPlugin>("theme");
  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;

  themeModel.themeName = "layered";
  themeModel["--sjs-primary-backcolor"] = "#0000ff";
  expect(savedTheme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

  creator = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    questions: [{ type: "text", name: "q1" }]
  };
  creator.theme = savedTheme;
  themePlugin = creator.getPlugin<ThemeTabPlugin>("theme");
  themePlugin.activate();

  themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  expect(themeModel.themeName).toBe("layered");
  expect(themeModel["--sjs-primary-backcolor"]).toBe("#0000ff");
  expect(themeTabViewModel.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
});

test("Set and use custom default theme", (): any => {
  Serializer.addProperty("theme", { name: "--a-var", visible: false });

  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  expect(ThemeModel.DefaultTheme).toEqual(Themes["default-light"]);

  const themes: string[] = [].concat(PredefinedThemes);
  expect(themePlugin.availableThemes).toStrictEqual(themes);

  const customTheme = { themeName: "custom", cssVariables: { "--a-var": "aVal" } };
  const fullThemeName = themePlugin.addTheme(customTheme, true);
  expect(Themes[fullThemeName]).toEqual(customTheme);
  expect(ThemeModel.DefaultTheme).toEqual(customTheme);
  expect(themePlugin.availableThemes).toStrictEqual(["custom"].concat(themes));

  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;
  expect(themeModel.themeName).toBe("custom");
  expect(creator.theme.cssVariables["--a-var"]).toBe(undefined);
  expect(themeTabViewModel.survey.themeVariables["--a-var"]).toBe("aVal");

  themeModel["--sjs-primary-backcolor"] = "#0000ff";
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe("#0000ff");
  expect(themeTabViewModel.survey.themeVariables["--sjs-primary-backcolor"]).toBe("#0000ff");

  themeModel.resetTheme();
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(themeTabViewModel.survey.themeVariables["--a-var"]).toBe("aVal");
  expect(creator.theme.cssVariables["--sjs-primary-backcolor"]).toBe(undefined);
  expect(themeTabViewModel.survey.themeVariables["--sjs-primary-backcolor"]).toBe(undefined);

  themePlugin.deactivate();
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");

  themePlugin.activate();
  themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  themeModel = themePlugin.themeModel as ThemeModel;
  expect(themeModel.themeName).toBe("custom");
  expect(creator.theme.cssVariables["--a-var"]).toBe("aVal");
  expect(themeTabViewModel.survey.themeVariables["--a-var"]).toBe("aVal");

  themePlugin.removeTheme(customTheme);
  expect(ThemeModel.DefaultTheme).toEqual(Themes["default-light"]);
  expect(themeModel.themeName).toBe("default");
  expect(creator.theme.cssVariables["--a-var"]).toBe(undefined);
  expect(themeTabViewModel.survey.themeVariables["--a-var"]).toBe(undefined);
  expect(themePlugin.availableThemes[0]).toBe("default");
  expect(themePlugin.availableThemes).toStrictEqual(themes);

  Serializer.removeProperty("theme", "--a-var");
});

test("Reset theme action calls confitmation dialog", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  let message = "";
  surveySettings.confirmActionAsync = (text, callback) => {
    message = text;
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeModel = themePlugin.themeModel as ThemeModel;

  expect(themeModel.questionBackgroundTransparency).toEqual(100);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBe("rgba(249, 249, 249, 1)");
  expect(themeModel.editorPanel).toStrictEqual({ "backcolor": "rgba(249, 249, 249, 1)", "cornerRadius": 4, "hovercolor": "rgba(243, 243, 243, 1)" });

  themeModel.editorPanel = { "backcolor": "#f7f7f7)", "cornerRadius": 4, "hovercolor": "rgba(243, 243, 243, 1)" };
  themeModel.questionBackgroundTransparency = 60;
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toEqual("rgba(247, 247, 247, 0.6)");

  themePlugin["resetTheme"].action();
  expect(themeModel.questionBackgroundTransparency).toEqual(100);
  expect(themeModel.cssVariables["--sjs-editorpanel-backcolor"]).toBeUndefined();
  expect(themeModel.editorPanel).toStrictEqual({ "backcolor": "rgba(249, 249, 249, 1)", "cornerRadius": 4, "hovercolor": "rgba(243, 243, 243, 1)" });

  expect(message).toBe("Do you really want to reset the theme? All your customizations will be lost.");
  surveySettings.confirmActionAsync = originalCallback;
});

test("Keep background image on reset theme action for default session theme", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  surveySettings.confirmActionAsync = (text, callback) => {
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const customTheme = { themeName: "custom", backgroundImage: "image.png" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  creator.theme = customTheme;

  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;

  expect(themeModel.defaultSessionTheme).toStrictEqual(Themes["default-light"]);
  themeModel.defaultSessionTheme = creator.theme;
  expect(themeModel.themeName).toEqual("custom");
  expect(themeModel.backgroundImage).toEqual("image.png");
  expect(themeTabViewModel.survey.backgroundImage).toEqual("image.png");

  themePlugin["resetTheme"].action();
  expect(themeModel.themeName).toEqual("custom");
  expect(themeModel.backgroundImage).toEqual("image.png");
  expect(themeTabViewModel.survey.backgroundImage).toEqual("image.png");

  surveySettings.confirmActionAsync = originalCallback;
  themePlugin.removeTheme(customTheme);
});

test("Reset theme to default one", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  surveySettings.confirmActionAsync = (text, callback) => {
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const customTheme = { themeName: "custom", backgroundImage: "image.png" };
  const fullThemeName = themePlugin.addTheme(customTheme);
  creator.theme = customTheme;

  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  let themeModel = themePlugin.themeModel as ThemeModel;
  expect(themeModel.defaultSessionTheme).toStrictEqual(Themes["default-light"]);
  expect(themeModel.themeName).toEqual("custom");
  expect(themeModel.backgroundImage).toEqual("image.png");
  expect(themeTabViewModel.survey.backgroundImage).toEqual("image.png");

  themePlugin["resetTheme"].action();
  expect(themeModel.themeName).toEqual("default");
  expect(themeModel.backgroundImage).toEqual("");
  expect(themeTabViewModel.survey.backgroundImage).toEqual("");

  surveySettings.confirmActionAsync = originalCallback;
  themePlugin.removeTheme(customTheme);
});

test("Theme undo redo changes", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const question = propertyGridSurvey.getQuestionByName("--sjs-general-backcolor-dim");

  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("rgba(243, 243, 243, 1)");
  expect(question.value).toBe("rgba(243, 243, 243, 1)");

  question.value = "#ff0000";
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("#ff0000");
  expect(question.value).toBe("#ff0000");

  themePlugin.undo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(true);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("rgba(243, 243, 243, 1)");
  expect(question.value).toBe("rgba(243, 243, 243, 1)");

  themePlugin.redo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("#ff0000");
  expect(question.value).toBe("#ff0000");
});

test("Theme undo redo general settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const backgroundImageQuestion = propertyGridSurvey.getQuestionByName("backgroundImage");

  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("");

  backgroundImageQuestion.value = "some_url";

  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("some_url");

  themePlugin.undo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(true);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("");

  themePlugin.redo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(backgroundImageQuestion.value).toBe("some_url");
});

test("Theme undo redo calculated questions", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const accentColorQuestion = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");
  const accentColorDarkQuestion = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor-dark");
  const accentColorLightQuestion = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor-light");

  const initPrimaryBackcolor = "rgba(25, 179, 148, 1)";
  const initPrimaryBackcolorDark = "rgba(20, 164, 139, 1)";
  const initPrimaryBackcolorLight = "rgba(25, 179, 148, 0.1)";

  const newPrimaryBackcolor = "#2772cb";
  const newPrimaryBackcolorDark = "rgba(36, 106, 188, 1)";
  const newPrimaryBackcolorLight = "rgba(39, 114, 203, 0.1)";

  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe(initPrimaryBackcolor);
  expect(accentColorDarkQuestion.value).toBe(initPrimaryBackcolorDark);
  expect(accentColorLightQuestion.value).toBe(initPrimaryBackcolorLight);
  expect(themeModel["primaryColor"]).toBe(initPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor"]).toBe(initPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor-dark"]).toBe(initPrimaryBackcolorDark);
  expect(themeModel["--sjs-primary-backcolor-light"]).toBe(initPrimaryBackcolorLight);

  accentColorQuestion.value = newPrimaryBackcolor;

  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe(newPrimaryBackcolor);
  expect(accentColorDarkQuestion.value).toBe(newPrimaryBackcolorDark);
  expect(accentColorLightQuestion.value).toBe(newPrimaryBackcolorLight);
  expect(themeModel["primaryColor"]).toBe(newPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor"]).toBe(newPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor-dark"]).toBe(newPrimaryBackcolorDark);
  expect(themeModel["--sjs-primary-backcolor-light"]).toBe(newPrimaryBackcolorLight);

  themePlugin.undo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(true);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe(initPrimaryBackcolor);
  expect(accentColorDarkQuestion.value).toBe("rgba(23, 164, 136, 1)"); // should be "rgba(20, 164, 139, 1)"
  expect(accentColorLightQuestion.value).toBe(initPrimaryBackcolorLight);
  expect(themeModel["primaryColor"]).toBe(initPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor"]).toBe(initPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor-dark"]).toBe("rgba(23, 164, 136, 1)"); // should be "rgba(20, 164, 139, 1)"
  expect(themeModel["--sjs-primary-backcolor-light"]).toBe(initPrimaryBackcolorLight);

  themePlugin.redo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(accentColorQuestion.value).toBe(newPrimaryBackcolor);
  expect(accentColorDarkQuestion.value).toBe(newPrimaryBackcolorDark);
  expect(accentColorLightQuestion.value).toBe(newPrimaryBackcolorLight);
  expect(themeModel["primaryColor"]).toBe(newPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor"]).toBe(newPrimaryBackcolor);
  expect(themeModel["--sjs-primary-backcolor-dark"]).toBe(newPrimaryBackcolorDark);
  expect(themeModel["--sjs-primary-backcolor-light"]).toBe(newPrimaryBackcolorLight);
});

test("Theme undo redo expression questions", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const fontSizeQuestion = propertyGridSurvey.getQuestionByName("fontSize");

  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(fontSizeQuestion.value).toBe(100);
  expect(themeModel.cssVariables["--sjs-font-size"]).toBe("16px");

  fontSizeQuestion.value = 150;

  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(fontSizeQuestion.value).toBe(150);
  expect(themeModel.cssVariables["--sjs-font-size"]).toBe("24px");

  themePlugin.undo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(true);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(fontSizeQuestion.value).toBe(100);
  expect(themeModel.cssVariables["--sjs-font-size"]).toBe("16px");

  themePlugin.redo();
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(fontSizeQuestion.value).toBe(150);
  expect(themeModel.cssVariables["--sjs-font-size"]).toBe("24px");
});

test("Theme undo redo header settings", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const header = themeModel.header as HeaderModel;
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const inheritWidthFromQuestion = headerViewContainer.getElementByName("inheritWidthFrom");

  expect(header.inheritWidthFrom).toBe("survey");
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(inheritWidthFromQuestion.value).toBe("survey");

  inheritWidthFromQuestion.value = "container";

  expect(header.inheritWidthFrom).toBe("container");
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(inheritWidthFromQuestion.value).toBe("container");

  themePlugin.undo();
  expect(header.inheritWidthFrom).toBe("survey");
  expect(themeModel.undoRedoManager.canUndo()).toBe(false);
  expect(themeModel.undoRedoManager.canRedo()).toBe(true);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(inheritWidthFromQuestion.value).toBe("survey");

  themePlugin.redo();
  expect(header.inheritWidthFrom).toBe("container");
  expect(themeModel.undoRedoManager.canUndo()).toBe(true);
  expect(themeModel.undoRedoManager.canRedo()).toBe(false);
  expect(themeModel["blockThemeChangedNotifications"]).toBe(0);
  expect(inheritWidthFromQuestion.value).toBe("container");
});
test("Set header settings properties, binding with a property grid", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const header = themeModel.header as HeaderModel;
  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerViewContainer = groupHeader.elements[0].contentPanel;
  const inheritWidthFromQuestion = headerViewContainer.getElementByName("inheritWidthFrom");

  expect(header.inheritWidthFrom).toBe("survey");
  expect(inheritWidthFromQuestion.value).toBe("survey");

  header.inheritWidthFrom = "container";

  expect(header.inheritWidthFrom).toBe("container");
  expect(inheritWidthFromQuestion.value).toBe("container");
});

test("Theme builder: trigger responsiveness", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeTabViewModel = themePlugin.model as ThemeTabViewModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  let log = "";
  themeTabViewModel.survey.triggerResponsiveness = (hard: boolean) => {
    log += `->called:${hard}`;
  };
  propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor").value = "#ffffff";
  expect(log).toBe("");
  propertyGridSurvey.getQuestionByName("scale").value = 90;
  expect(log).toBe("->called:true");
  propertyGridSurvey.getQuestionByName("scale").value = 80;
  expect(log).toBe("->called:true->called:true");
});

test("onThemeSelected + onThemePropertyChanged events", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette");
  const primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");
  const backgroundDimColor = propertyGridSurvey.getQuestionByName("--sjs-general-backcolor-dim");
  const primaryColor = propertyGridSurvey.getQuestionByName("primaryColor");

  let pluginThemeSelectedCount = 0;
  let pluginThemeModifiedCount = 0;
  themePlugin.onThemeSelected.add(() => pluginThemeSelectedCount++);
  themePlugin.onThemePropertyChanged.add(() => pluginThemeModifiedCount++);
  let builderThemeSelectedCount = 0;
  let builderThemeModifiedCount = 0;
  themeModel.onThemeSelected.add(() => builderThemeSelectedCount++);
  themeModel.onThemePropertyChanged.add(() => builderThemeModifiedCount++);

  themeChooser.value = "flat";
  expect(pluginThemeModifiedCount).toBe(0);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(0);
  expect(builderThemeSelectedCount).toBe(1);

  primaryBackColor.value = "#ffffff";
  expect(pluginThemeModifiedCount).toBe(3);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(3);
  expect(builderThemeSelectedCount).toBe(1);

  backgroundDimColor.value = "#7a46bb";
  expect(pluginThemeModifiedCount).toBe(4);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(4);
  expect(builderThemeSelectedCount).toBe(1);

  primaryColor.value = "#7a46bb";
  expect(pluginThemeModifiedCount).toBe(7);
  expect(pluginThemeSelectedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(7);
  expect(builderThemeSelectedCount).toBe(1);
});

test("saveTheme action", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  let saveCount = 0;
  creator.saveSurveyFunc = () => {
    saveCount++;
  };
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(0);
  expect(themePlugin["saveThemeAction"].visible).toBeFalsy();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  creator.activeTab = "theme";
  expect(themePlugin["saveThemeAction"].visible).toBeTruthy();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor").value = "some val";
  expect(themePlugin["saveThemeAction"].enabled).toBeTruthy();
  themePlugin["saveThemeAction"].action();
  expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
  expect(saveCount).toBe(0);
  expect(saveThemeCount).toBe(1);
});

test("Simulator survey should respect survey current locale", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = {
    "locale": "fr",
    "logo": {
      "fr": "FR logo",
    },
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeBuilder = themePlugin.model as ThemeTabViewModel;
  expect(themeBuilder.simulator.survey.locale).toBe(creator.survey.locale);
  expect(themeBuilder.simulator.survey.locLogo.renderedHtml).toBe("FR logo");
});

test("Reset theme action availability", (): any => {
  const originalCallback = surveySettings.confirmActionAsync;
  surveySettings.confirmActionAsync = (text, callback) => {
    callback(true);
    return true;
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const resetThemeAction = themePlugin["resetTheme"];
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  const isPanelless = propertyGridSurvey.getQuestionByName("isPanelless") as QuestionButtonGroupModel;
  const colorPalette = propertyGridSurvey.getQuestionByName("colorPalette") as QuestionButtonGroupModel;
  const backgroundImage = propertyGridSurvey.getQuestionByName("backgroundImage");
  const primaryBackColor = propertyGridSurvey.getQuestionByName("--sjs-primary-backcolor");

  expect(themeChooser.value).toBe("default");
  expect(resetThemeAction.enabled).toBeFalsy();

  propertyGridSurvey.getQuestionByName("themeName").value = "flat";
  expect(resetThemeAction.enabled).toBeTruthy();
  resetThemeAction.action();
  expect(resetThemeAction.enabled).toBeFalsy();
  expect(themeChooser.value).toBe("default");

  isPanelless.value = true;
  expect(resetThemeAction.enabled).toBeTruthy();
  resetThemeAction.action();
  expect(resetThemeAction.enabled).toBeFalsy();
  expect(isPanelless.value).toBe(false);

  colorPalette.value = "dark";
  expect(resetThemeAction.enabled).toBeTruthy();
  resetThemeAction.action();
  expect(resetThemeAction.enabled).toBeFalsy();
  expect(colorPalette.value).toBe("light");

  backgroundImage.value = "image.png";
  expect(resetThemeAction.enabled).toBeTruthy();
  resetThemeAction.action();
  expect(resetThemeAction.enabled).toBeFalsy();
  expect(backgroundImage.value).toBe("");

  primaryBackColor.value = "red";
  expect(resetThemeAction.enabled).toBeTruthy();
  resetThemeAction.action();
  expect(resetThemeAction.enabled).toBeFalsy();
  expect(primaryBackColor.value).toBe("rgba(25, 179, 148, 1)");

  surveySettings.confirmActionAsync = originalCallback;
});

test("Custom theme assigned to creator", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.theme = {
    themeName: "default_exported",
    cssVariables: {
      "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
    }
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  let themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  let primaryBackColorEditor = propertyGridSurvey.findQuestionByName("--sjs-primary-backcolor");
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName");
  expect(themeModel.themeName).toBe("default");
  expect(themeChooser.value).toBe("default");
  expect(themeModel["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");
  expect(primaryBackColorEditor.value).toBe("rgba(255, 0, 0, 1)");
});

test("Check onOpenFileChooser is called and context is passed", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  let log = "";
  let lastContext;
  let lastUploadContext;
  let lastUploadOptions;
  creator.onOpenFileChooser.add((s, o) => {
    log += "->onOpenFileChooser";
    lastContext = (o as any).context;
    o.callback([{} as File]);
  });
  creator.onUploadFile.add((s, o) => {
    log += "->uploadFile";
    lastUploadOptions = o;
    lastUploadContext = (o as any).context;
    o.callback("success", "url");
  });

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeModel = themePlugin.themeModel;
  const backgroundImageEditor = propertyGridSurvey.getQuestionByName("backgroundImage") as QuestionFileModel;
  const testContainer = document.createElement("div");
  const testInput = document.createElement("input");
  testContainer.appendChild(testInput);
  testInput.id = backgroundImageEditor.inputId;
  backgroundImageEditor["rootElement"] = testContainer;
  backgroundImageEditor.chooseFile(new MouseEvent("click"));
  expect(log).toBe("->onOpenFileChooser->uploadFile");
  expect(lastContext).toStrictEqual({ element: themePlugin.themeModel, elementType: "theme", propertyName: "backgroundImage" });
  expect(lastUploadContext).toStrictEqual({ element: themePlugin.themeModel, item: undefined, elementType: "theme", propertyName: "backgroundImage" });
  expect(lastUploadOptions.elementType).toBe("theme");
  expect(lastUploadOptions.propertyName).toBe("backgroundImage");

  const groupHeader = themePlugin.propertyGrid.survey.pages[1];
  const headerBackgroundImageEditor = groupHeader.elements[0].contentPanel.getElementByName("backgroundImage");
  testInput.id = headerBackgroundImageEditor.inputId;
  headerBackgroundImageEditor["rootElement"] = testContainer;
  headerBackgroundImageEditor.chooseFile(new MouseEvent("click"));
  expect(log).toBe("->onOpenFileChooser->uploadFile->onOpenFileChooser->uploadFile");
  expect(lastContext).toStrictEqual({ element: themeModel.header, elementType: "header", propertyName: "backgroundImage" });
  expect(lastUploadContext).toStrictEqual({ element: themeModel.header, elementType: "header", propertyName: "backgroundImage", item: undefined });
  expect(lastUploadOptions.elementType).toBe("header");
  expect(lastUploadOptions.propertyName).toBe("backgroundImage");

});

test("Modify property grid: add/hide properties", (): any => {
  Serializer.addProperty("theme", {
    name: "custom-question-title",
    type: "font",
    displayName: "Question title font",
    default: {
      family: "Open Sans",
      weight: "600",
      size: 16,
    },
  });

  Serializer.addProperty("theme", {
    name: "matrix-title",
    type: "font",
    displayName: "Matrix title font",
    default: {
      family: "Open Sans",
      weight: "600",
      size: 16,
    },
  });

  Serializer.getProperty("theme", "questionTitle").visible = false;

  try {
    const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
    creator.JSON = { questions: [{ type: "text", name: "q1" }] };

    creator.themeEditor.activate();
    const themeModel = creator.themeEditor.themeModel as ThemeModel;
    const propertyGridSurvey = creator.themeEditor.propertyGrid.survey;

    expect(propertyGridSurvey.getQuestionByName("questionTitle") === null).toBeTruthy();
    expect(propertyGridSurvey.getQuestionByName("custom-question-title") !== null).toBeTruthy();
    expect(propertyGridSurvey.getQuestionByName("matrix-title") !== null).toBeTruthy();

    themeModel["custom-question-title"] = { family: "Courier New", weight: "400", size: 41, color: "#787878" };
    themeModel["matrix-title"] = { family: "Trebuchet MS", weight: "800", size: 21, color: "#232323" };

    expect(themeModel.cssVariables["--sjs-font-questiontitle-family"]).toBeUndefined();
    expect(themeModel.cssVariables["--sjs-font-questiontitle-weight"]).toBeUndefined();
    expect(themeModel.cssVariables["--sjs-font-questiontitle-color"]).toBe("rgba(0, 0, 0, 0.91)");
    expect(themeModel.cssVariables["--sjs-font-questiontitle-size"]).toBeUndefined();

    expect(themeModel.cssVariables["--sjs-font-custom-question-title-family"]).toBe("Courier New");
    expect(themeModel.cssVariables["--sjs-font-custom-question-title-weight"]).toBe("400");
    expect(themeModel.cssVariables["--sjs-font-custom-question-title-color"]).toBe("#787878");
    expect(themeModel.cssVariables["--sjs-font-custom-question-title-size"]).toBe("41px");

    expect(themeModel.cssVariables["--sjs-font-matrix-title-family"]).toBe("Trebuchet MS");
    expect(themeModel.cssVariables["--sjs-font-matrix-title-weight"]).toBe("800");
    expect(themeModel.cssVariables["--sjs-font-matrix-title-color"]).toBe("#232323");
    expect(themeModel.cssVariables["--sjs-font-matrix-title-size"]).toBe("21px");
  } finally {
    Serializer.getProperty("theme", "questionTitle").visible = true;
    Serializer.removeProperty("theme", "custom-question-title");
    Serializer.removeProperty("theme", "matrix-title");
  }
});

test("Modify property grid & switch themeName", (): any => {
  try {
    Serializer.addProperty("theme", { name: "matrix-title", type: "font", category: "appearancequestion" });

    const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
    creator.onPropertyShowing.add(function (sender, options) {
      if (options.element.getType() == "theme") {
        options.show = options.property.name == "themeName" || options.property.name == "matrix-title";
      }
    });

    creator.JSON = { questions: [{ type: "text", name: "q1" }] };
    creator.themeEditor.activate();
    const propertyGridSurvey = creator.themeEditor.propertyGrid.survey;

    expect(propertyGridSurvey.getAllQuestions().filter(q => q.isVisible).length).toBe(2);
    const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

    themeChooser.value = "flat";
    expect(propertyGridSurvey.getAllQuestions().filter(q => q.isVisible).length).toBe(2);
  } finally {
    Serializer.removeProperty("theme", "matrix-title");
  }
});

test("Theme builder switch themes with reset of previous values", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.value).toEqual("default");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toEqual("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");

  themeChooser.value = "contrast";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("0px 0px 0px 2px rgba(0, 0, 0, 1),0px -2px 0px 2px rgba(0, 0, 0, 1)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toEqual("0px 0px 0px 0px rgba(0, 0, 0, 1),0px 0px 0px 0px rgba(0, 0, 0, 1)");

  themeChooser.value = "default";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-inner-reset"]).toEqual("inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)");
});

test("Theme builder switch custom theme", (): any => {
  const customTheme = {
    "isPanelless": true,
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(246, 248, 250, 1)",
      "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
      "--sjs-general-backcolor-dim": "rgba(255, 255, 255, 1)",
      "--sjs-general-backcolor-dim-light": "rgba(246, 248, 250, 1)",
      "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
      "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
      "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
      "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
      "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
      "--sjs-primary-backcolor": "rgba(9, 105, 218, 1)",
      "--sjs-primary-backcolor-light": "rgba(9, 105, 218, 0.1)",
      "--sjs-primary-backcolor-dark": "rgba(8, 98, 203, 1)",
      "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
      "--sjs-base-unit": "6px",
      "--sjs-corner-radius": "4px",
      "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
      "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
      "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
      "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
      "--sjs-shadow-small": "0px 0px 0px 1px rgba(101, 109, 118, 0.25), 0px 2px 0px 0px rgba(101, 109, 118, 0.05), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.5)",
      "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
      "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-inner": "inset 0px 0px 0px 1px rgba(101, 109, 118, 0.25), inset 0px 2px 0px 0px rgba(101, 109, 118, 0.05)",
      "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
      "--sjs-border-light": "rgba(216, 222, 228, 1)",
      "--sjs-border-default": "rgba(216, 222, 228, 1)",
      "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
      "--sjs-font-pagetitle-color": "rgba(31, 35, 40, 1)",
      "--sjs-font-pagedescription-color": "rgba(101, 109, 118, 1)",
      "--sjs-question-background": "rgba(246, 248, 250, 1)",
      "--sjs-questionpanel-backcolor": "rgba(246, 248, 250, 1)",
      "--sjs-questionpanel-hovercolor": "rgba(243, 244, 246, 1)",
      "--sjs-questionpanel-cornerRadius": "6px",
      "--sjs-font-questiondescription-color": "rgba(101, 109, 118, 1)",
      "--sjs-editor-background": "rgba(246, 248, 250, 1)",
      "--sjs-editorpanel-backcolor": "rgba(246, 248, 250, 1)",
      "--sjs-editorpanel-hovercolor": "rgba(243, 244, 246, 1)",
      "--sjs-editorpanel-cornerRadius": "6px",
      "--sjs-font-editorfont-color": "rgba(33, 37, 42, 1)",
      "--sjs-font-editorfont-placeholdercolor": "rgba(110, 119, 129, 1)",
      "--sjs-font-pagetitle-weight": "600",
      "--sjs-font-pagetitle-family": "Arial, sans-serif",
      "--sjs-font-family": "Open Sans",
      "--sjs-font-pagedescription-family": "Arial, sans-serif",
      "--sjs-font-questiontitle-family": "Arial, sans-serif",
      "--sjs-font-questiontitle-color": "rgba(31, 35, 40, 1)",
      "--sjs-font-questiontitle-size": "14px",
      "--sjs-font-pagetitle-size": "22px",
      "--sjs-font-pagedescription-size": "13px",
      "--sjs-font-questiondescription-family": "Arial, sans-serif",
      "--sjs-font-questiondescription-size": "13px",
      "--sjs-font-editorfont-size": "14px",
      "--sjs-font-editorfont-family": "Arial, sans-serif",
      "--sjs-font-headertitle-color": "rgba(255, 255, 255, 1)",
      "--sjs-font-headerdescription-color": "rgba(255, 255, 255, 1)"
    },
    "themeName": "custom",
    "colorPalette": "light",
  };
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });

  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.addTheme(customTheme);
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const themeChooser = propertyGridSurvey.getQuestionByName("themeName") as QuestionDropdownModel;

  expect(themeChooser.value).toEqual("default");
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-small"]).toEqual("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");

  themeChooser.value = "custom";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("inset 0px 0px 0px 1px rgba(101, 109, 118, 0.25),inset 0px 2px 0px 0px rgba(101, 109, 118, 0.05)");
  expect(themeModel.cssVariables["--sjs-shadow-small"]).toEqual("0px 0px 0px 1px rgba(101, 109, 118, 0.25),0px 2px 0px 0px rgba(101, 109, 118, 0.05),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.5)");

  themeChooser.value = "default";
  expect(themeModel.cssVariables["--sjs-shadow-inner"]).toEqual("inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
  expect(themeModel.cssVariables["--sjs-shadow-small"]).toEqual("0px 1px 2px 0px rgba(0, 0, 0, 0.15)");
});

test("onThemePropertyChanged event for a custom property", (): any => {
  Serializer.addProperty("theme", {
    name: "paddingTopScale",
  });
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const propertyGridSurvey = themePlugin.propertyGrid.survey;
  const paddingTopScale = propertyGridSurvey.getQuestionByName("paddingTopScale");

  let pluginThemeModifiedCount = 0;
  let pluginLog = "";
  themePlugin.onThemePropertyChanged.add((s, o) => {
    pluginThemeModifiedCount++;
    pluginLog += "->" + o.name;
  });
  let builderThemeModifiedCount = 0;
  themeModel.onThemePropertyChanged.add(() => builderThemeModifiedCount++);

  expect(pluginThemeModifiedCount).toBe(0);
  expect(builderThemeModifiedCount).toBe(0);
  expect(pluginLog).toBe("");
  paddingTopScale.value = "5";

  expect(pluginThemeModifiedCount).toBe(1);
  expect(builderThemeModifiedCount).toBe(1);
  expect(pluginLog).toBe("->paddingTopScale");

  Serializer.removeProperty("theme", "paddingTopScale");
});

test("Theme tab: default device and save current device", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  expect(themePlugin.previewDevice).toBe("desktop");

  themePlugin.activate();
  expect(themePlugin.model.simulator.device).toBe("desktop");

  themePlugin.model.simulator.device = "iPhone15";
  expect(themePlugin.previewDevice).toBe("desktop");

  themePlugin.deactivate();
  expect(themePlugin.previewDevice).toBe("iPhone15");

  themePlugin.activate();
  expect(themePlugin.model.simulator.device).toBe("iPhone15");
  expect(themePlugin.previewDevice).toBe("iPhone15");

  themePlugin.deactivate();
  themePlugin.previewDevice = "iPhone15Plus";

  themePlugin.activate();
  expect(themePlugin.model.simulator.device).toBe("iPhone15Plus");
});

test("Theme tab: use theme palatte corresponding cretor theme palette if theme is not selected", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { headerView: "advanced", questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

  expect(creator.preferredColorPalette).toBe("light");

  themePlugin.activate();
  expect(themePlugin.themeModel.colorPalette).toBe("light");
  expect(themePlugin.model.simulator.survey["themeName"]).toBe("default");
  expect(themePlugin.model.simulator.survey["colorPalette"]).toBe("light");

  themePlugin.deactivate();
  creator.syncTheme({ cssVariables: {} }, false);
  expect(creator.preferredColorPalette).toBe("dark");

  themePlugin.activate();
  expect(themePlugin.themeModel.colorPalette).toBe("dark");
  expect(themePlugin.model.simulator.survey["themeName"]).toBe("default");
  expect(themePlugin.model.simulator.survey["colorPalette"]).toBe("dark");

  themePlugin.deactivate();
  creator.theme = {
    themeName: "my",
    colorPalette: "dark",
    cssVariables: {}
  };
  creator.syncTheme({ cssVariables: {} }, true);
  expect(creator.preferredColorPalette).toBe("light");

  themePlugin.activate();
  expect(themePlugin.themeModel.colorPalette).toBe("dark");
  expect(themePlugin.model.simulator.survey["themeName"]).toBe("my");
  expect(themePlugin.model.simulator.survey["colorPalette"]).toBe("dark");
});

test("Theme settings action visibility", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  expect(themePlugin["themeSettingsAction"].visible).toBeFalsy();

  creator.activeTab = "theme";
  creator.showOneCategoryInPropertyGrid = false;
  expect(themePlugin["themeSettingsAction"].visible).toBeTruthy();

  expect(creator.isMobileView).toBeFalsy();
  expect(creator.showOneCategoryInPropertyGrid).toBeFalsy();

  creator.showOneCategoryInPropertyGrid = true;
  expect(themePlugin["themeSettingsAction"].visible).toBeFalsy();

  creator.isMobileView = true;
  expect(themePlugin["themeSettingsAction"].visible).toBeTruthy();
});