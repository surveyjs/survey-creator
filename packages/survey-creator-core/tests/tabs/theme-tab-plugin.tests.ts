import { CreatorTester } from "../creator-tester";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../src/components/tabs/theme-custom-questions/element-settings";
import { fontsettingsToCssVariable, fontsettingsFromCssVariable } from "../../src/components/tabs/theme-custom-questions/font-settings";
import { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";

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

// test("Theme onModified and saveThemeFunc", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.isAutoSave = true;
//   creator.autoSaveDelay = 0;
//   let saveCount = 0;
//   creator.saveSurveyFunc = () => {
//     saveCount++;
//   };
//   let saveThemeCount = 0;
//   creator.saveThemeFunc = (saveNo, callback) => {
//     saveThemeCount++;
//     callback(saveNo, "success");
//   };
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let modificationsLog = "";
//   themePlugin.onThemeSelected.add((s, o) => {
//     modificationsLog += "->THEME_SELECTED";
//   });
//   themePlugin.onThemePropertyChanged.add((s, o) => {
//     modificationsLog += "->THEME_MODIFIED";
//   });
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;

//   expect(modificationsLog).toBe("");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(0);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeFalsy();

//   themeEditor.getQuestionByName("--sjs-border-default").value = "#ff0000";

//   expect(modificationsLog).toBe("->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(1);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeBuilder.resetTheme();

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(2);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeFalsy();

//   themeEditor.getQuestionByName("backgroundImage").value = [{ name: "pic1.png", type: "", content: "http://site.org/images/pic1.png" }];

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(3);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeEditor.getQuestionByName("--sjs-general-backcolor-dim").value = "#ff0000";

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(4);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeEditor.getQuestionByName("headerViewContainer").value = [{ headerView: "advanced" }];
//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED->THEME_MODIFIED");
//   expect(saveCount).toBe(1);
//   expect(saveThemeCount).toBe(5);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();
// });

// test("Theme undo redo changes", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const question = themeEditor.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("rgba(243, 243, 243, 1)");

//   question.value = "#ff0000";
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#ff0000");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#f3f3f3");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#ff0000");
// });

// test("Theme undo redo general settings", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const backgroundImageQuestion = themeEditor.getQuestionByName("backgroundImage");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe(undefined);

//   backgroundImageQuestion.value = "some_url";

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe("some_url");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe(undefined);

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe("some_url");
// });

// test("Theme undo redo calculated questions", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const accentColorQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor");
//   const accentColorDarkQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-dark");
//   const accentColorLightQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-light");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

//   accentColorQuestion.value = "#2772cb";

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");
// });

// test("Theme undo redo expression questions", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const commonFontSizeQuestion = themeEditor.getQuestionByName("commonFontSize");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe(undefined);

//   commonFontSizeQuestion.value = 150;

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(150);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("16px");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(150);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");
// });

// test("Theme builder: trigger responsiveness", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   let log = "";
//   themeSurveyTab.survey.triggerResponsiveness = (hard: boolean) => {
//     log += `->called:${hard}`;
//   };
//   themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "#ffffff";
//   expect(log).toBe("");
//   themeEditor.getQuestionByName("commonScale").value = 90;
//   expect(log).toBe("->called:true");
//   themeEditor.getQuestionByName("commonScale").value = 80;
//   expect(log).toBe("->called:true->called:true");
// });

// test("onThemeSelected + onThemePropertyChanged events", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");
//   const generalPrimaryColor = themeEditorSurvey.getQuestionByName("generalPrimaryColor");

//   let pluginThemeSelectedCount = 0;
//   let pluginThemeModifiedCount = 0;
//   themePlugin.onThemeSelected.add(() => pluginThemeSelectedCount++);
//   themePlugin.onThemePropertyChanged.add(() => pluginThemeModifiedCount++);
//   let builderThemeSelectedCount = 0;
//   let builderThemeModifiedCount = 0;
//   themeBuilder.onThemeSelected.add(() => builderThemeSelectedCount++);
//   themeBuilder.onThemePropertyChanged.add(() => builderThemeModifiedCount++);

//   themeChooser.value = "flat";
//   expect(pluginThemeModifiedCount).toBe(0);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(0);
//   expect(builderThemeSelectedCount).toBe(1);

//   primaryBackColor.value = "#ffffff";
//   expect(pluginThemeModifiedCount).toBe(1);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(1);
//   expect(builderThemeSelectedCount).toBe(1);

//   backgroundDimColor.value = "#7a46bb";
//   expect(pluginThemeModifiedCount).toBe(2);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(2);
//   expect(builderThemeSelectedCount).toBe(1);

//   generalPrimaryColor.value = "#7a46bb";
//   expect(pluginThemeModifiedCount).toBe(3);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(3);
//   expect(builderThemeSelectedCount).toBe(1);
// });

// test("onAllowModifyTheme events + use creator.readOnly", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.readOnly = true;
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.onAllowModifyTheme.add((s, o) => {
//     o.allow = o.theme.themeName === "flat";
//   });

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themeChooser.isReadOnly).toBeFalsy();
//   expect(themePalette.isReadOnly).toBeFalsy();
//   expect(primaryBackColor.isReadOnly).toBeTruthy();
//   expect(backgroundDimColor.isReadOnly).toBeTruthy();

//   themeChooser.value = "flat";
//   expect(themeChooser.isReadOnly).toBeFalsy();
//   expect(themePalette.isReadOnly).toBeFalsy();
//   expect(primaryBackColor.isReadOnly).toBeFalsy();
//   expect(backgroundDimColor.isReadOnly).toBeFalsy();
// });

// test("Desktop mode: add advanced mode switcher", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   expect(propertyGridGroups[0].visible).toBeTruthy();
//   expect(propertyGridGroups[1].visible).toBeTruthy();
//   expect(propertyGridGroups[2].visible).toBeTruthy();
//   expect(propertyGridGroups[3].visible).toBeTruthy();

//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeTruthy();
// });

// test("Mobile mode: hide advanced settings in property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.isMobileView = true;

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   expect(propertyGridGroups[0].visible).toBeTruthy();
//   expect(propertyGridGroups[1].visible).toBeFalsy();
//   expect(propertyGridGroups[2].visible).toBeTruthy();
//   expect(propertyGridGroups[3].visible).toBeTruthy();

//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeFalsy();
// });

// test("Change advancedModeSwitcher visibility", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();

//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeTruthy();

//   creator.isMobileView = true;
//   expect(actions[0].visible).toBeFalsy();
// });

// test("saveTheme action", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   let saveCount = 0;
//   creator.saveSurveyFunc = () => {
//     saveCount++;
//   };
//   let saveThemeCount = 0;
//   creator.saveThemeFunc = (saveNo, callback) => {
//     saveThemeCount++;
//     callback(saveNo, "success");
//   };
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(0);
//   expect(themePlugin["saveThemeAction"].visible).toBeFalsy();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   creator.activeTab = "theme";
//   expect(themePlugin["saveThemeAction"].visible).toBeTruthy();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "some val";
//   expect(themePlugin["saveThemeAction"].enabled).toBeTruthy();
//   themePlugin["saveThemeAction"].action();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(1);
// });

// test("Simulator survey should respect survey current locale", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = {
//     "locale": "fr",
//     "logo": {
//       "fr": "FR logo",
//     },
//     "pages": [
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "radiogroup",
//             "name": "question1",
//             "choices": [
//               "Item 1",
//               "Item 2",
//               "Item 3"
//             ]
//           }
//         ]
//       }
//     ]
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   expect(themeBuilder.simulator.survey.locale).toBe(creator.survey.locale);
//   expect(themeBuilder.simulator.survey.locLogo.renderedHtml).toBe("FR logo");
// });

// test("Reset theme action availability", (): any => {
//   const originalCallback = surveySettings.confirmActionAsync;
//   surveySettings.confirmActionAsync = (text, callback) => {
//     callback(true);
//     return true;
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   const resetThemeAction = themePlugin["resetTheme"];
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;
//   const backgroundImage = themeEditorSurvey.getQuestionByName("backgroundImage");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");

//   expect(themeChooser.value).toBe("default");
//   expect(resetThemeAction.enabled).toBeFalsy();

//   themeChooser.value = "flat";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themeChooser.value).toBe("default");

//   themeMode.value = "lightweight";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themeMode.value).toBe("panels");

//   themePalette.value = "dark";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themePalette.value).toBe("light");

//   backgroundImage.value = "image.png";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(backgroundImage.value).toBe(undefined);

//   primaryBackColor.value = "red";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(primaryBackColor.value).toBe("rgba(25, 179, 148, 1)");

//   surveySettings.confirmActionAsync = originalCallback;
// });

// test("Custom theme assigned to creator", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.theme = {
//     themeName: "default_exported",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   expect(themeChooser.value).toBe("default");
//   expect(primaryBackColor.value).toBe("rgba(255, 0, 0, 1)");
// });

// test("getThemeChanges", (): any => {
//   let themeChanges = getThemeChanges({
//     themeName: "default",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     themeName: "default_exported",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     themeName: "default_exported",
//     colorPalette: "dark",
//     isPanelless: true,
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("dark");
//   expect(themeChanges.isPanelless).toBe(true);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");
// });

// test("Check onOpenFileChooser is called and context is passed", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   let log = "";
//   let lastContext;
//   let lastUploadContext;
//   let lastUploadOptions;
//   creator.onOpenFileChooser.add((s, o) => {
//     log += "->onOpenFileChooser";
//     lastContext = (o as any).context;
//     o.callback([{} as File]);
//   });
//   creator.onUploadFile.add((s, o) => {
//     log += "->uploadFile";
//     lastUploadOptions = o;
//     lastUploadContext = (o as any).context;
//     o.callback("success", "url");
//   });

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const origGetElementById = document.getElementById;
//   document.getElementById = () => ({} as any);
//   try {
//     const backgroundImageEditor = themeEditorSurvey.getQuestionByName("backgroundImage") as QuestionFileModel;
//     backgroundImageEditor.chooseFile(new MouseEvent("click"));
//     expect(log).toBe("->onOpenFileChooser->uploadFile");
//     expect(lastContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "theme", propertyName: "backgroundImage" });
//     expect(lastUploadContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "theme", propertyName: "backgroundImage" });
//     expect(lastUploadOptions.elementType).toBe("theme");
//     expect(lastUploadOptions.propertyName).toBe("backgroundImage");

//     const headerBackgroundImageEditor = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("backgroundImage") as QuestionFileModel;
//     headerBackgroundImageEditor.chooseFile(new MouseEvent("click"));
//     expect(log).toBe("->onOpenFileChooser->uploadFile->onOpenFileChooser->uploadFile");
//     expect(lastContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "header", propertyName: "backgroundImage" });
//     expect(lastUploadContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "header", propertyName: "backgroundImage" });
//     expect(lastUploadOptions.elementType).toBe("header");
//     expect(lastUploadOptions.propertyName).toBe("backgroundImage");
//   } finally {
//     document.getElementById = origGetElementById;
//   }
// });
