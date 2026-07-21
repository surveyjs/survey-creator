import { ItemValue, ListModel, QuestionCheckboxModel, QuestionMatrixDropdownModel, QuestionTextModel } from "survey-core";
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

test("activate creates side-by-side model, no strings surveys, sidebar hidden", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model).toBeTruthy();
  expect(model.isSideBySide).toBeTruthy();
  expect(model.stringsSurvey).toBeFalsy();
  expect(model.stringsHeaderSurvey).toBeFalsy();
  const sidebarPage = creator.sidebar.pages.filter(page => page.id === "translation")[0];
  expect(sidebarPage.visible).toBeFalsy();
});

test("pages dropdown: no 'All Pages', trailing 'Survey Strings', first page preselected; strings filter & merge actions hidden", () => {
  const creator = createSideBySideCreator();
  const filterPageAction = creator.toolbar.getActionById("svc-translation-filter-page");
  expect(filterPageAction.visible).toBeTruthy();
  const items = getListItems(creator, "svc-translation-filter-page");
  expect(items.map(item => item.id)).toEqual(["page1", "page2", TranslationSideBySide.surveyStringsPageId]);
  expect(items[2].title).toBe("Survey Strings");
  expect(getSelectedListItem(creator, "svc-translation-filter-page").id).toBe("page1");
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svd-translation-merge_locale_withdefault").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-import").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-export").visible).toBeTruthy();
});

test("instances are design-mode copies with correct locales/page", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceSurvey).toBeTruthy();
  expect(model.destinationSurvey).toBeTruthy();
  expect(model.sourceSurvey.isDesignMode).toBeTruthy();
  expect(model.destinationSurvey.isDesignMode).toBeTruthy();
  expect(model.sourceSurvey).not.toBe(creator.survey);
  expect(model.destinationSurvey).not.toBe(creator.survey);
  expect(model.sourceLocale).toBeFalsy();
  expect(model.sourceSurvey.locale).toBeFalsy();
  expect(model.destinationLocale).toBe("de");
  expect(model.destinationSurvey.locale).toBe("de");
  expect(model.sourceSurvey.currentPage.name).toBe("page1");
  expect(model.destinationSurvey.currentPage.name).toBe("page1");
});

test("start page preselected when firstPageIsStartPage is true", () => {
  const json = { ...sideBySideJSON, firstPageIsStartPage: true };
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.selectedPageName).toBe("page1");
  expect(model.sourceSurvey.currentPage.name).toBe("page1");
  expect(model.destinationSurvey.currentPage.name).toBe("page1");
  expect(getSelectedListItem(creator, "svc-translation-filter-page").id).toBe("page1");
});

test("renderers: destination getRendererForString is 'svc-string-editor', source is undefined", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const srcQuestion = model.sourceSurvey.getQuestionByName("q1");
  const dstQuestion = model.destinationSurvey.getQuestionByName("q1");
  expect(model.sourceSurvey.getRendererForString(srcQuestion, "title", undefined)).toBeFalsy();
  expect(model.destinationSurvey.getRendererForString(dstQuestion, "title", undefined)).toBe("svc-string-editor");
});

test("editing destination copy writes destination locale into creator.survey", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const dstQuestion = model.destinationSurvey.getQuestionByName("q1");
  dstQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});

test("undo restores only destination-locale text and re-syncs the copy; redo reapplies", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const dstQuestion = model.destinationSurvey.getQuestionByName("q1");
  dstQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  creator.undo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
  expect(dstQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  creator.redo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
  expect(dstQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
});

test("choice item and matrix column titles sync by path mapping", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const dstCheckbox = <QuestionCheckboxModel>model.destinationSurvey.getQuestionByName("q2");
  const dstItem = <ItemValue>dstCheckbox.choices[0];
  dstItem.locText.text = "Element 1";
  const realCheckbox = <QuestionCheckboxModel>creator.survey.getQuestionByName("q2");
  expect((<ItemValue>realCheckbox.choices[0]).locText.getLocaleText("de")).toBe("Element 1");
  expect((<ItemValue>realCheckbox.choices[0]).locText.getLocaleText("")).toBe("Item 1");

  const dstMatrix = <QuestionMatrixDropdownModel>model.destinationSurvey.getQuestionByName("q3");
  dstMatrix.columns[0].locTitle.text = "Spalte 1";
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  expect(realMatrix.columns[0].locTitle.getLocaleText("de")).toBe("Spalte 1");
  expect(realMatrix.columns[0].locTitle.getLocaleText("")).toBe("Column 1");
});

test("changing destinationLocale switches copy locale without recreating instances; edits land in the new locale", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const dstSurvey = model.destinationSurvey;
  model.destinationLocale = "fr";
  expect(model.destinationSurvey).toBe(dstSurvey);
  expect(dstSurvey.locale).toBe("fr");
  const dstQuestion = dstSurvey.getQuestionByName("q1");
  dstQuestion.locTitle.text = "Question 1 fr";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("fr")).toBe("Question 1 fr");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});

test("changing destinationLocale updates survey.locale; undo/redo keeps them in sync", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(creator.survey.locale).toBe("de");
  model.destinationLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  creator.undo();
  expect(creator.survey.locale).toBe("de");
  expect(model.destinationLocale).toBe("de");
  expect(model.destinationSurvey.locale).toBe("de");
  creator.redo();
  expect(creator.survey.locale).toBe("fr");
  expect(model.destinationLocale).toBe("fr");
  expect(model.destinationSurvey.locale).toBe("fr");
});

test("destination locale choice persists via survey.locale across tab switches", () => {
  const creator = createSideBySideCreator();
  getModel(creator).destinationLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(model.destinationLocale).toBe("fr");
  expect(model.destinationSurvey.locale).toBe("fr");
});

test("activating the tab does not modify the survey locale, no undo step is created", () => {
  const creator = createSideBySideCreator();
  expect(creator.survey.locale).toBe("de");
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "en";
  const enCreator = createSideBySideCreator(json);
  expect(getModel(enCreator).destinationLocale || "").toBe("");
  expect(enCreator.survey.locale || "").toBe("");
  expect(enCreator.undoRedoManager.canUndo()).toBeFalsy();
});

test("locale dropdowns exclude each other's selection", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.destinationLocale).toBe("de");
  const sourceIds = getListItems(creator, "svc-translation-source-locale").map(item => item.id);
  const destinationIds = getListItems(creator, "svc-translation-destination-locale").map(item => item.id);
  expect(sourceIds.indexOf("de")).toBe(-1);
  expect(sourceIds.indexOf(null)).toBeGreaterThan(-1);
  expect(destinationIds.indexOf(null)).toBe(-1);
  expect(destinationIds.indexOf("de")).toBeGreaterThan(-1);
  expect(getSelectedListItem(creator, "svc-translation-destination-locale").id).toBe("de");
});

test("destination locale defaults to survey.locale, not to the first locale in the list", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "fr";
  json.pages[0].elements[0].title.fr = "Question 1 fr";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.destinationLocale).toBe("fr");
  expect(model.destinationSurvey.locale).toBe("fr");
  expect(getSelectedListItem(creator, "svc-translation-destination-locale").id).toBe("fr");
});

test("destination locale defaults to the default language when survey.locale is empty, it equals the source language", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  delete json.locale;
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.destinationLocale || "").toBe("");
  expect(model.destinationSurvey.locale).toBeFalsy();
  const destinationIds = getListItems(creator, "svc-translation-destination-locale").map(item => item.id);
  expect(destinationIds.indexOf(null)).toBeGreaterThan(-1);
  expect(getSelectedListItem(creator, "svc-translation-destination-locale").id).toBe(null);
  expect(getSelectedListItem(creator, "svc-translation-source-locale").id).toBe(null);
});

test("destination locale defaults to the default language when survey.locale equals the default locale name", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "en";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.destinationLocale || "").toBe("");
});

test("'Survey Strings': scoped translation has no page groups, exactly two locales; editing pagePrevText sets real de value; undo works", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const surveyStrings = model.surveyStringsTranslation;
  expect(surveyStrings.root.groups).toHaveLength(0);
  expect([...surveyStrings.locales]).toEqual(["", "de"]);
  const matrices = surveyStrings.stringsSurvey.getAllQuestions();
  const matrix = <QuestionMatrixDropdownModel>matrices.filter(
    question => (<QuestionMatrixDropdownModel>question).rows[0].value === "pagePrevText"
  )[0];
  expect(matrix).toBeTruthy();
  expect(matrix.columns).toHaveLength(2);
  const row = matrix.visibleRows[0];
  row.cells[1].question.value = "Back-de";
  expect(creator.survey.locPagePrevText.getLocaleText("de")).toBe("Back-de");
  expect(creator.survey.locPagePrevText.getLocaleText("")).toBeFalsy();
  creator.undo();
  expect(creator.survey.locPagePrevText.getLocaleText("de")).toBeFalsy();
  expect(creator.survey.locPagePrevText.getLocaleText("")).toBeFalsy();
  creator.redo();
  expect(creator.survey.locPagePrevText.getLocaleText("de")).toBe("Back-de");
});

test("structural undo rebuilds instances", () => {
  const creator = createSideBySideCreator();
  creator.activeTab = "designer";
  const question = creator.survey.getQuestionByName("q4");
  creator.deleteElement(question);
  expect(creator.survey.getQuestionByName("q4")).toBeFalsy();
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(model.destinationSurvey.getQuestionByName("q4")).toBeFalsy();
  const oldDestination = model.destinationSurvey;
  creator.undo();
  expect(creator.survey.getQuestionByName("q4")).toBeTruthy();
  expect(model.destinationSurvey).not.toBe(oldDestination);
  expect(model.destinationSurvey.getQuestionByName("q4")).toBeTruthy();
});

test("onTranslationItemChanging applies to forwarded edits", () => {
  const creator = createSideBySideCreator();
  creator.onTranslationItemChanging.add((sender, options) => {
    options.newText = options.newText + "!";
  });
  const model = getModel(creator);
  const dstQuestion = model.destinationSurvey.getQuestionByName("q1");
  dstQuestion.locTitle.text = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
  expect(dstQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
});

test("source and destination panes keep their scrollbars in sync", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const source = document.createElement("div");
  const destination = document.createElement("div");
  model.setSourceScrollElement(source);
  model.setDestinationScrollElement(destination);

  source.scrollTop = 100;
  source.dispatchEvent(new Event("scroll"));
  expect(destination.scrollTop).toBe(100);

  destination.scrollTop = 40;
  destination.dispatchEvent(new Event("scroll"));
  expect(source.scrollTop).toBe(40);

  // Unmounting a pane (element set to undefined) detaches the sync.
  model.setSourceScrollElement(undefined);
  destination.scrollTop = 70;
  destination.dispatchEvent(new Event("scroll"));
  expect(source.scrollTop).toBe(40);

  // Re-attaching a new element (a rebuilt pane) restores the sync.
  const newSource = document.createElement("div");
  model.setSourceScrollElement(newSource);
  destination.scrollTop = 25;
  destination.dispatchEvent(new Event("scroll"));
  expect(newSource.scrollTop).toBe(25);

  // dispose() detaches everything; firing scroll on old elements must not throw.
  creator.activeTab = "designer";
  expect(() => {
    destination.scrollTop = 10;
    destination.dispatchEvent(new Event("scroll"));
  }).not.toThrow();
  expect(newSource.scrollTop).toBe(25);
});

test("deactivate detaches copies", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const dstSurvey = model.destinationSurvey;
  const dstQuestion = <QuestionTextModel>dstSurvey.getQuestionByName("q1");
  creator.activeTab = "designer";
  expect(getPlugin(creator).model).toBeFalsy();
  expect(() => {
    dstQuestion.locTitle.text = "after deactivate";
  }).not.toThrow();
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});
