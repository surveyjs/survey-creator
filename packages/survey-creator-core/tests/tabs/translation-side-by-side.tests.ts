import { ItemValue, ListModel, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDropdownModel, QuestionTextModel } from "survey-core";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { CreatorTester } from "../creator-tester";
import "survey-core/survey.i18n";

const sideBySideJSON = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "checkbox", name: "q2", choices: [{ value: "item1", text: "Item 1" }, "item2"] },
        {
          type: "matrixdropdown",
          name: "q3",
          columns: [{ name: "col1", title: "Column 1" }],
          rows: [{ value: "row1", text: "Row 1" }]
        }
      ]
    },
    {
      name: "page2",
      elements: [{ type: "text", name: "q4", title: "Question 4" }]
    }
  ]
};

function createSideBySideCreator(json: any = sideBySideJSON): CreatorTester {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  // The survey takes ownership of the loaded JSON object, so pass a copy to keep tests independent.
  creator.JSON = JSON.parse(JSON.stringify(json));
  creator.activeTab = "translation";
  return creator;
}
function getPlugin(creator: CreatorTester): TabTranslationPlugin {
  return <TabTranslationPlugin>creator.getPlugin("translation");
}
function getModel(creator: CreatorTester): TranslationSideBySide {
  return <TranslationSideBySide>getPlugin(creator).model;
}
function getListItems(creator: CreatorTester, actionId: string): Array<any> {
  const action = creator.toolbar.getActionById(actionId);
  return (<ListModel>action.data).actions;
}
function getSelectedListItem(creator: CreatorTester, actionId: string): any {
  const action = creator.toolbar.getActionById(actionId);
  return (<ListModel>action.data).selectedItem;
}
function getSettingsQuestion(creator: CreatorTester, name: string): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName(name);
}
function getChoiceValues(creator: CreatorTester, name: string): Array<any> {
  return getSettingsQuestion(creator, name).choices.map((item: ItemValue) => item.value);
}

test("activate creates side-by-side model, no strings surveys, settings shown in the property grid", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model).toBeTruthy();
  expect(model.isSideBySide).toBeTruthy();
  expect(model.stringsSurvey).toBeFalsy();
  expect(model.stringsHeaderSurvey).toBeFalsy();
  const sidebarPage = creator.sidebar.pages.filter(page => page.id === "translation")[0];
  expect(sidebarPage.visible).toBeTruthy();
  expect(sidebarPage.componentName).toBe("survey-widget");
  expect(sidebarPage.componentData).toBe(model.settingsSurvey);
  expect(getSettingsQuestion(creator, "viewMode").value).toBe("forms");
  expect(getSettingsQuestion(creator, "sourceLocale").value).toBe("default");
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("de");
});

test("pages dropdown: no 'All Pages', real pages only, first page preselected; strings filter, merge and locale actions hidden", () => {
  const creator = createSideBySideCreator();
  const filterPageAction = creator.toolbar.getActionById("svc-translation-filter-page");
  expect(filterPageAction.visible).toBeTruthy();
  const items = getListItems(creator, "svc-translation-filter-page");
  expect(items.map(item => item.id)).toEqual(["page1", "page2"]);
  expect(getSelectedListItem(creator, "svc-translation-filter-page").id).toBe("page1");
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svd-translation-merge_locale_withdefault").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-import").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-export").visible).toBeTruthy();
  // The locale selectors and the view switcher live in the property grid, not in the toolbar.
  expect(creator.toolbar.getActionById("svc-translation-source-locale")).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-destination-locale")).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-side-by-side-view")).toBeFalsy();
});

test("instances are design-mode copies with correct locales/page", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceSurvey).toBeTruthy();
  expect(model.targetSurvey).toBeTruthy();
  expect(model.sourceSurvey.isDesignMode).toBeTruthy();
  expect(model.targetSurvey.isDesignMode).toBeTruthy();
  expect(model.sourceSurvey).not.toBe(creator.survey);
  expect(model.targetSurvey).not.toBe(creator.survey);
  expect(model.sourceLocale).toBeFalsy();
  expect(model.sourceSurvey.locale).toBeFalsy();
  expect(model.targetLocale).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
  expect(model.sourceSurvey.currentPage.name).toBe("page1");
  expect(model.targetSurvey.currentPage.name).toBe("page1");
});

test("start page preselected when firstPageIsStartPage is true", () => {
  const json = { ...sideBySideJSON, firstPageIsStartPage: true };
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.selectedPageName).toBe("page1");
  expect(model.sourceSurvey.currentPage.name).toBe("page1");
  expect(model.targetSurvey.currentPage.name).toBe("page1");
  expect(getSelectedListItem(creator, "svc-translation-filter-page").id).toBe("page1");
});

test("renderers: target getRendererForString is 'svc-string-editor', source is undefined", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const srcQuestion = model.sourceSurvey.getQuestionByName("q1");
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  expect(model.sourceSurvey.getRendererForString(srcQuestion, "title", undefined)).toBeFalsy();
  expect(model.targetSurvey.getRendererForString(targetQuestion, "title", undefined)).toBe("svc-string-editor");
});

test("editing target copy writes target locale into creator.survey", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  targetQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});

test("undo restores only target-locale text and re-syncs the copy; redo reapplies", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  targetQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  creator.undo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
  expect(targetQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  creator.redo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
  expect(targetQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
});

test("choice item and matrix column titles sync by path mapping", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetCheckbox = <QuestionCheckboxModel>model.targetSurvey.getQuestionByName("q2");
  const targetItem = <ItemValue>targetCheckbox.choices[0];
  targetItem.locText.text = "Element 1";
  const realCheckbox = <QuestionCheckboxModel>creator.survey.getQuestionByName("q2");
  expect((<ItemValue>realCheckbox.choices[0]).locText.getLocaleText("de")).toBe("Element 1");
  expect((<ItemValue>realCheckbox.choices[0]).locText.getLocaleText("")).toBe("Item 1");

  const targetMatrix = <QuestionMatrixDropdownModel>model.targetSurvey.getQuestionByName("q3");
  targetMatrix.columns[0].locTitle.text = "Spalte 1";
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  expect(realMatrix.columns[0].locTitle.getLocaleText("de")).toBe("Spalte 1");
  expect(realMatrix.columns[0].locTitle.getLocaleText("")).toBe("Column 1");
});

test("changing targetLocale switches copy locale without recreating instances; edits land in the new locale", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetSurvey = model.targetSurvey;
  model.targetLocale = "fr";
  expect(model.targetSurvey).toBe(targetSurvey);
  expect(targetSurvey.locale).toBe("fr");
  const targetQuestion = targetSurvey.getQuestionByName("q1");
  targetQuestion.locTitle.text = "Question 1 fr";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("fr")).toBe("Question 1 fr");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});

test("changing targetLocale updates survey.locale; undo/redo keeps them in sync", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(creator.survey.locale).toBe("de");
  model.targetLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  creator.undo();
  expect(creator.survey.locale).toBe("de");
  expect(model.targetLocale).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
  creator.redo();
  expect(creator.survey.locale).toBe("fr");
  expect(model.targetLocale).toBe("fr");
  expect(model.targetSurvey.locale).toBe("fr");
});

test("target locale choice persists via survey.locale across tab switches", () => {
  const creator = createSideBySideCreator();
  getModel(creator).targetLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(model.targetLocale).toBe("fr");
  expect(model.targetSurvey.locale).toBe("fr");
});

test("activating the tab does not modify the survey locale, no undo step is created", () => {
  const creator = createSideBySideCreator();
  expect(creator.survey.locale).toBe("de");
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "en";
  const enCreator = createSideBySideCreator(json);
  expect(getModel(enCreator).targetLocale || "").toBe("");
  expect(enCreator.survey.locale || "").toBe("");
  expect(enCreator.undoRedoManager.canUndo()).toBeFalsy();
});

test("settings survey locale dropdowns exclude each other's selection", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.targetLocale).toBe("de");
  const sourceValues = getChoiceValues(creator, "sourceLocale");
  const targetValues = getChoiceValues(creator, "targetLocale");
  expect(sourceValues.indexOf("de")).toBe(-1);
  expect(sourceValues.indexOf("default")).toBeGreaterThan(-1);
  expect(targetValues.indexOf("default")).toBe(-1);
  expect(targetValues.indexOf("de")).toBeGreaterThan(-1);
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("de");
});

test("settings survey dropdowns drive the source and target locales", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  getSettingsQuestion(creator, "targetLocale").value = "fr";
  expect(model.targetLocale).toBe("fr");
  expect(creator.survey.locale).toBe("fr");
  expect(model.targetSurvey.locale).toBe("fr");
  getSettingsQuestion(creator, "sourceLocale").value = "de";
  expect(model.sourceLocale).toBe("de");
  expect(model.sourceSurvey.locale).toBe("de");
  // Selecting the default entry maps back to the empty locale.
  getSettingsQuestion(creator, "sourceLocale").value = "default";
  expect(model.sourceLocale || "").toBe("");
  expect(model.sourceSurvey.locale || "").toBe("");
});

test("target locale defaults to survey.locale, not to the first locale in the list", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "fr";
  json.pages[0].elements[0].title.fr = "Question 1 fr";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.targetLocale).toBe("fr");
  expect(model.targetSurvey.locale).toBe("fr");
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("fr");
});

test("target locale defaults to the default language when survey.locale is empty, it equals the source language", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  delete json.locale;
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.targetLocale || "").toBe("");
  expect(model.targetSurvey.locale).toBeFalsy();
  const targetValues = getChoiceValues(creator, "targetLocale");
  expect(targetValues.indexOf("default")).toBeGreaterThan(-1);
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("default");
  expect(getSettingsQuestion(creator, "sourceLocale").value).toBe("default");
});

test("target locale defaults to the default language when survey.locale equals the default locale name", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "en";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.targetLocale || "").toBe("");
});

test("structural undo rebuilds instances", () => {
  const creator = createSideBySideCreator();
  creator.activeTab = "designer";
  const question = creator.survey.getQuestionByName("q4");
  creator.deleteElement(question);
  expect(creator.survey.getQuestionByName("q4")).toBeFalsy();
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(model.targetSurvey.getQuestionByName("q4")).toBeFalsy();
  const oldTarget = model.targetSurvey;
  creator.undo();
  expect(creator.survey.getQuestionByName("q4")).toBeTruthy();
  expect(model.targetSurvey).not.toBe(oldTarget);
  expect(model.targetSurvey.getQuestionByName("q4")).toBeTruthy();
});

test("onTranslationItemChanging applies to forwarded edits", () => {
  const creator = createSideBySideCreator();
  creator.onTranslationItemChanging.add((sender, options) => {
    options.newText = options.newText + "!";
  });
  const model = getModel(creator);
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  targetQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
  expect(targetQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
});

test("source and target panes keep their scrollbars in sync", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const source = document.createElement("div");
  const target = document.createElement("div");
  model.setSourceScrollElement(source);
  model.setTargetScrollElement(target);

  source.scrollTop = 100;
  source.dispatchEvent(new Event("scroll"));
  expect(target.scrollTop).toBe(100);

  target.scrollTop = 40;
  target.dispatchEvent(new Event("scroll"));
  expect(source.scrollTop).toBe(40);

  // Unmounting a pane (element set to undefined) detaches the sync.
  model.setSourceScrollElement(undefined);
  target.scrollTop = 70;
  target.dispatchEvent(new Event("scroll"));
  expect(source.scrollTop).toBe(40);

  // Re-attaching a new element (a rebuilt pane) restores the sync.
  const newSource = document.createElement("div");
  model.setSourceScrollElement(newSource);
  target.scrollTop = 25;
  target.dispatchEvent(new Event("scroll"));
  expect(newSource.scrollTop).toBe(25);

  // dispose() detaches everything; firing scroll on old elements must not throw.
  creator.activeTab = "designer";
  expect(() => {
    target.scrollTop = 10;
    target.dispatchEvent(new Event("scroll"));
  }).not.toThrow();
  expect(newSource.scrollTop).toBe(25);
});

const navCaptionProps = ["pagePrevText", "pageNextText", "completeText", "previewText", "startSurveyText"];

test("navigation bar is not shown on the panes", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceSurvey.isNavigationButtonsShowing).toBe("none");
  expect(model.targetSurvey.isNavigationButtonsShowing).toBe("none");
});

test("nav caption properties are mapped: target edits write the target locale, undo restores, JSON round-trips", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const target = model.targetSurvey;
  navCaptionProps.forEach(name => {
    (<any>target).getLocalizableString(name).text = name + "-de";
  });
  // Every property was known to the mapping - no self-heal rebuild happened.
  expect(model.targetSurvey).toBe(target);
  navCaptionProps.forEach(name => {
    expect((<any>creator.survey).getLocalizableString(name).getLocaleText("de")).toBe(name + "-de");
  });
  expect(creator.JSON.completeText).toEqual({ de: "completeText-de" });
  creator.undo();
  expect((<any>creator.survey).getLocalizableString("startSurveyText").getLocaleText("de")).toBeFalsy();
  expect((<any>creator.survey).getLocalizableString("completeText").getLocaleText("de")).toBe("completeText-de");
  creator.redo();
  expect((<any>creator.survey).getLocalizableString("startSurveyText").getLocaleText("de")).toBe("startSurveyText-de");
});

test("changing the source pane page syncs the target pane and the page dropdown", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page2");
  expect(model.selectedPageName).toBe("page2");
  expect(model.targetSurvey.currentPage.name).toBe("page2");
  expect(getSelectedListItem(creator, "svc-translation-filter-page").id).toBe("page2");
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page1");
  expect(model.selectedPageName).toBe("page1");
  expect(model.targetSurvey.currentPage.name).toBe("page1");
});

test("deactivate detaches copies", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetSurvey = model.targetSurvey;
  const targetQuestion = <QuestionTextModel>targetSurvey.getQuestionByName("q1");
  creator.activeTab = "designer";
  expect(getPlugin(creator).model).toBeFalsy();
  expect(() => {
    targetQuestion.locTitle.text = "after deactivate";
  }).not.toThrow();
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});
