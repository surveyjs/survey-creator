import {
  AdaptiveActionContainer, ItemValue, ListModel, QuestionCheckboxModel, QuestionCommentModel,
  QuestionDropdownModel, QuestionMatrixDropdownModel, QuestionTextModel, settings as surveySettings
} from "survey-core";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import {
  TranslationSideBySide, getTranslationLocaleProgress, translationLocaleItemComponentName
} from "../../src/components/tabs/translation-side-by-side";
import { editorLocalization } from "../../src/editorLocalization";
import { Translation, TranslationBase } from "../../src/components/tabs/translation";
import { TranslationDropdownViewModel, translationDropdownComponentName } from "../../src/components/tabs/translation-dropdown";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { StringEditorViewModelBase } from "../../src/components/string-editor";
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

test("instances restore the runtime frame/nested css classes suppressed in design mode", () => {
  const json = {
    locale: "de",
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
          { type: "panel", name: "panel1", elements: [{ type: "text", name: "q2" }] }
        ]
      }
    ]
  };
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.getQuestionByName("q1").cssRoot).toContain("sd-element--with-frame");
    const panel = survey.getPanelByName("panel1");
    expect(panel.getContainerCss()).toContain("sd-element--with-frame");
    expect(survey.getQuestionByName("q2").cssRoot).toContain("sd-element--nested");
    expect(survey.getQuestionByName("q2").cssRoot).not.toContain("sd-element--with-frame");
  });
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

test("an external localizable string change re-syncs the copy", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  const realQuestion = creator.survey.getQuestionByName("q1");
  realQuestion.locTitle.setLocaleText("de", "Frage 1 neu");
  expect(targetQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
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

test("the survey locale is not written by a target change and not followed when it changes", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(creator.survey.locale).toBe("de");
  // Every way of retargeting leaves the survey locale alone.
  model.targetLocale = "fr";
  expect(creator.survey.locale).toBe("de");
  getSettingsQuestion(creator, "targetLocale").value = "it";
  expect(creator.survey.locale).toBe("de");
  model.targetLocale = "";
  expect(creator.survey.locale).toBe("de");

  // And an external survey locale change moves neither the target nor the panes.
  model.targetLocale = "fr";
  const targetSurvey = model.targetSurvey;
  creator.survey.locale = "it";
  expect(model.targetLocale).toBe("fr");
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("fr");
  expect(model.targetSurvey).toBe(targetSurvey);
  expect(targetSurvey.locale).toBe("fr");
  creator.survey.locale = "";
  expect(model.targetLocale).toBe("fr");
  expect(model.targetSurvey).toBe(targetSurvey);
});

test("the target locale is taken from survey.locale on every activation", () => {
  const creator = createSideBySideCreator();
  getModel(creator).targetLocale = "fr";
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  const model = getModel(creator);
  // The survey locale is the only source of the initial target - the previous choice is not stored.
  expect(model.targetLocale).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
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

test("no target language is selected when survey.locale is empty: no target pane, empty target dropdown", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  delete json.locale;
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.targetLocale || "").toBe("");
  // The default language is not a translation target - nothing is selected instead.
  expect(model.targetSurvey).toBeFalsy();
  expect(model.sourceSurvey).toBeTruthy();
  const targetValues = getChoiceValues(creator, "targetLocale");
  expect(targetValues.indexOf("default")).toBe(-1);
  expect(getSettingsQuestion(creator, "targetLocale").isEmpty()).toBeTruthy();
  expect(getSettingsQuestion(creator, "sourceLocale").value).toBe("default");
});

test("the source dropdown lists the survey's languages only, the target dropdown every available one", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  // An explicit default-locale text: it is the default language, not a language of its own.
  json.pages[0].elements[0].title.en = "Question 1 en";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  model.targetLocale = "fr";
  expect(getChoiceValues(creator, "sourceLocale")).toEqual(["default", "de"]);
  const targetValues = getChoiceValues(creator, "targetLocale");
  expect(targetValues.indexOf("default")).toBe(-1);
  expect(targetValues.indexOf("fr")).toBeGreaterThan(-1);
  // A supported language the survey does not use is a target, never a source.
  expect(targetValues.indexOf("it")).toBeGreaterThan(-1);
  // It becomes a source as soon as it stores its first string.
  model.targetSurvey.getQuestionByName("q4").locTitle.text = "Question 4 fr";
  model.targetLocale = "it";
  expect(getChoiceValues(creator, "sourceLocale")).toEqual(["default", "de", "fr"]);
});

test("the selected source language stays in the list after it loses its last string", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "it";
  model.sourceLocale = "de";
  expect(getChoiceValues(creator, "sourceLocale")).toEqual(["default", "de"]);
  // Removing the last German string (an undo, a CSV import) leaves the survey without any
  // translation, but the dropdown must not lose the value it holds.
  creator.survey.getQuestionByName("q1").locTitle.setLocaleText("de", "");
  expect(getChoiceValues(creator, "sourceLocale")).toEqual(["default", "de"]);
  expect(getSettingsQuestion(creator, "sourceLocale").value).toBe("de");
});

test("onTranslationLocaleInitiallySelected filters the source dropdown", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.pages[1].elements[0].title = { default: "Question 4", fr: "Question 4 fr" };
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.onTranslationLocaleInitiallySelected.add((sender, options) => {
    options.isSelected = options.locale !== "fr";
  });
  creator.JSON = json;
  creator.activeTab = "translation";
  const model = getModel(creator);
  model.targetLocale = "it";
  expect(getChoiceValues(creator, "sourceLocale")).toEqual(["default", "de"]);
});

test("no target language is selected when survey.locale equals the default locale name", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.locale = "en";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.targetLocale || "").toBe("");
  expect(model.targetSurvey).toBeFalsy();
});

test("clearing and re-selecting the target language drops and restores the target pane", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const sourceSurvey = model.sourceSurvey;
  expect(model.targetSurvey).toBeTruthy();

  // Clearing the target dropdown stops the translation editing.
  getSettingsQuestion(creator, "targetLocale").clearValue();
  expect(model.targetLocale || "").toBe("");
  expect(model.targetSurvey).toBeFalsy();
  // The source pane is rebuilt with the mapping and keeps following the real survey.
  expect(model.sourceSurvey).not.toBe(sourceSurvey);
  creator.survey.getQuestionByName("q1").locTitle.setLocaleText("", "Question 1 new");
  expect(model.sourceSurvey.getQuestionByName("q1").locTitle.getLocaleText("")).toBe("Question 1 new");
  // No target language, no element indicator states.
  expect(model.getElementTranslationState(model.sourceSurvey.getQuestionByName("q1"))).toBe("none");

  // Selecting a language brings the pane back, and its edits are forwarded again.
  model.targetLocale = "de";
  expect(model.targetSurvey).toBeTruthy();
  expect(model.targetSurvey.locale).toBe("de");
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1 neu";
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toBe("Question 1 new");
});

test("an external structural change rebuilds instances", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const oldTarget = model.targetSurvey;
  const question = creator.survey.getQuestionByName("q1");
  question.delete();
  expect(creator.survey.getQuestionByName("q1")).toBeFalsy();
  expect(model.targetSurvey).not.toBe(oldTarget);
  expect(model.targetSurvey.getQuestionByName("q1")).toBeFalsy();
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

test("navigation bar, progress bar and TOC are not shown on the panes", () => {
  // Enabled on the real survey to prove the panes drop them despite copying its JSON.
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.showProgressBar = true;
  json.showTOC = true;
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.isNavigationButtonsShowing).toBe("none");
    expect(survey.showProgressBar).toBeFalsy();
    expect(survey.showTOC).toBeFalsy();
  });
});

test("nav caption properties are mapped: target edits write the target locale, JSON round-trips", () => {
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

test("survey header (title, description) is shown on the first page only", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.renderedHasHeader).toBeTruthy();
    expect(survey.renderedHasTitle).toBeTruthy();
    expect(survey.renderedHasDescription).toBeTruthy();
  });
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page2");
  // The target pane follows the source page change through the model.
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.currentPage.name).toBe("page2");
    expect(survey.renderedHasHeader).toBeFalsy();
    expect(survey.renderedHasTitle).toBeFalsy();
    expect(survey.renderedHasDescription).toBeFalsy();
  });
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page1");
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.renderedHasHeader).toBeTruthy();
  });
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

const dropdownChoicesJSON = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: "Question 1" },
        {
          type: "dropdown", name: "q5",
          choices: [{ value: "A", text: "AA" }, "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
        },
        { type: "tagbox", name: "q6", choices: ["t1", "t2"] },
        {
          type: "matrixdropdown",
          name: "q3",
          columns: [{ name: "col1", cellType: "dropdown", title: "Column 1", choices: [{ value: "A", text: "AA" }, "B"] }],
          rows: [{ value: "row1", text: "Row 1" }]
        }
      ]
    }
  ]
};

test("flattened choices wrapper: dropdown and tagbox in both panes, other questions and matrix cell content excluded", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    const q5 = survey.getQuestionByName("q5");
    expect(survey.getQuestionContentWrapperComponentName(q5)).toBe(translationDropdownComponentName);
    expect(survey.getQuestionContentWrapperComponentName(survey.getQuestionByName("q6"))).toBe(translationDropdownComponentName);
    expect(survey.getQuestionContentWrapperComponentName(survey.getQuestionByName("q1"))).not.toBe(translationDropdownComponentName);
    // A dropdown cell of a matrix renders over copies of the column data - never flattened/edited inline.
    const cellTemplateQuestion = (<any>(<QuestionMatrixDropdownModel>survey.getQuestionByName("q3")).columns[0]).templateQuestion;
    expect(survey.getQuestionContentWrapperComponentName(cellTemplateQuestion)).not.toBe(translationDropdownComponentName);
    // The wrapper components reach the model through the content wrapper's data request.
    expect((<any>survey.getElementWrapperComponentData(q5)).translation).toBe(model);
  });
});

test("TranslationDropdownViewModel: item components, collapse behavior and shared collapse state between the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const targetQ5 = <QuestionDropdownModel>model.targetSurvey.getQuestionByName("q5");
  const sourceQ5 = <QuestionDropdownModel>model.sourceSurvey.getQuestionByName("q5");
  const targetVM = new TranslationDropdownViewModel(targetQ5, model);
  const sourceVM = new TranslationDropdownViewModel(sourceQ5, model);
  expect(targetVM.itemComponent).toBe("survey-radiogroup-item");
  expect(targetVM.needToCollapse).toBeTruthy();
  expect(targetVM.isCollapseView).toBeTruthy();
  // creator.maxVisibleChoices default is 10
  expect(targetVM.getRenderedItems()).toHaveLength(10);
  expect(sourceVM.getRenderedItems()).toHaveLength(10);
  targetVM.switchCollapse();
  expect(targetVM.isCollapseView).toBeFalsy();
  expect(sourceVM.isCollapseView).toBeFalsy();
  expect(sourceVM.getRenderedItems()).toHaveLength(12);
  targetVM.collapseAction.action();
  expect(targetVM.isCollapseView).toBeTruthy();
  expect(sourceVM.isCollapseView).toBeTruthy();
  sourceVM.dispose();
  targetVM.switchCollapse();
  // The disposed view model no longer follows the shared state.
  expect(sourceVM.isCollapseView).toBeTruthy();
  targetVM.dispose();

  const tagboxVM = new TranslationDropdownViewModel(<any>model.targetSurvey.getQuestionByName("q6"), model);
  expect(tagboxVM.itemComponent).toBe("survey-checkbox-item");
  expect(tagboxVM.needToCollapse).toBeFalsy();
  expect(tagboxVM.getRenderedItems()).toHaveLength(2);
  tagboxVM.dispose();
});

test("dropdown choice strings: editable in the target pane only, edits forward to the real survey", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const targetQ5 = <QuestionDropdownModel>model.targetSurvey.getQuestionByName("q5");
  const sourceQ5 = <QuestionDropdownModel>model.sourceSurvey.getQuestionByName("q5");
  expect((<any>targetQ5.choices[0].locText).renderAs).toBe("svc-string-editor");
  expect((<any>sourceQ5.choices[0].locText).renderAs).not.toBe("svc-string-editor");
  targetQ5.choices[0].locText.text = "AA-de";
  const realQ5 = <QuestionDropdownModel>creator.survey.getQuestionByName("q5");
  expect(realQ5.choices[0].locText.getLocaleText("de")).toBe("AA-de");
  expect(realQ5.choices[0].locText.getLocaleText("")).toBe("AA");
});

test("inplaceEditChoiceValues does not apply to the pane copies' choice strings", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  creator.inplaceEditChoiceValues = true;
  const model = getModel(creator);
  const paneChoice = (<QuestionDropdownModel>model.targetSurvey.getQuestionByName("q5")).choices[0];
  const paneEditor = new StringEditorViewModelBase(<any>paneChoice.locText, creator);
  expect((<any>paneEditor).isInplaceForEditValues).toBeFalsy();
  const designerChoice = (<QuestionDropdownModel>creator.survey.getQuestionByName("q5")).choices[0];
  const designerEditor = new StringEditorViewModelBase(<any>designerChoice.locText, creator);
  expect((<any>designerEditor).isInplaceForEditValues).toBeTruthy();
});

// The strings matrix of the open dialog - the only question of the dialog's own survey - and
// the row bound to a real string.
function getStringsMatrix(model: TranslationSideBySide): QuestionMatrixDropdownModel {
  const survey = model.elementStringsSurvey;
  return !!survey ? <QuestionMatrixDropdownModel>survey.getAllQuestions()[0] : undefined;
}
function getStringsRow(matrix: QuestionMatrixDropdownModel, locStr: any): any {
  const itemValue = matrix.rows.filter(row => row["translationData"].locString === locStr)[0];
  return !!itemValue ? matrix.visibleRows.filter(row => row.name === itemValue.value)[0] : undefined;
}

test("element strings dialog: a matrix over the real question, its own survey, edits that mirror into the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  model.showElementStringsDialog(realMatrix);
  const grid = model.elementStringsModel;
  expect(grid.showAllElementStrings).toBeFalsy();
  // No strings grid: the dialog is one matrix question in a survey of its own.
  expect(grid.stringsSurvey).toBeFalsy();
  expect(grid.stringsHeaderSurvey).toBeFalsy();
  expect(model.elementStringsSurvey.pages).toHaveLength(1);
  expect(model.elementStringsSurvey.getAllQuestions()).toHaveLength(1);
  const stringsMatrix = getStringsMatrix(model);
  expect(stringsMatrix.getType()).toBe("matrixdropdown");
  // No caption text and no column header: the dialog's own title names the element. The title
  // row itself stays - it carries the caption's actions.
  expect(stringsMatrix.locTitle.renderedHtml).toBe("");
  expect(stringsMatrix.hasTitle).toBeTruthy();
  expect(stringsMatrix.showHeader).toBeFalsy();
  // The matrix's styles are scoped to its own class.
  expect(stringsMatrix.cssClasses.mainRoot).toContain("st-element-strings");
  // One column, the target locale: the source text is merged into the row titles, so the editor
  // gets the width the source column had.
  expect(stringsMatrix.columns).toHaveLength(1);
  expect(stringsMatrix.columns[0].name).toBe("de");
  expect(stringsMatrix.columns[0].readOnly).toBeFalsy();
  // The column choices are reachable through the dialog only - they are rows of the same matrix,
  // labelled with the path to the string.
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  const choiceRow = getStringsRow(stringsMatrix, realChoiceLocText);
  expect(choiceRow).toBeTruthy();
  expect(choiceRow.item.text).toContain("Choices");
  // The cell is a plain runtime editor - the dialog's survey is not a design-mode one.
  const targetCell = choiceRow.cells[0].question;
  expect(targetCell.isInputReadOnly).toBeFalsy();
  expect(targetCell.isDisabledAttr).toBeFalsy();
  // The text area passes the flag to the rendered element in every framework.
  expect(targetCell.textAreaModel.isDisabledAttr).toBeFalsy();
  targetCell.value = "AA-de";
  expect(realChoiceLocText.getLocaleText("de")).toBe("AA-de");
  const targetPaneMatrix = <QuestionMatrixDropdownModel>model.targetSurvey.getQuestionByName("q3");
  expect((<any>targetPaneMatrix.columns[0]).templateQuestion.choices[0].locText.getLocaleText("de")).toBe("AA-de");
});

test("question strings title action: present on every target pane question, absent in the source pane", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const actionsOf = (survey: any, name: string) =>
    survey.getQuestionByName(name).getTitleActions().filter((action: any) => action.id === "svc-translate-question");
  expect(actionsOf(model.targetSurvey, "q3")).toHaveLength(1);
  expect(actionsOf(model.targetSurvey, "q5")).toHaveLength(1);
  expect(actionsOf(model.targetSurvey, "q1")).toHaveLength(1);
  expect(actionsOf(model.sourceSurvey, "q3")).toHaveLength(0);
  // The action opens the question's strings dialog over the real question.
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q3"));
  expect(model.elementStringsModel).toBeTruthy();
  expect(model.elementStringsModel.element).toBe(creator.survey.getQuestionByName("q3"));
  model.hideElementStringsDialog();
  expect(model.elementStringsModel).toBeFalsy();
  expect(model.elementStringsSurvey).toBeFalsy();
});

test("element strings dialog: the used/all strings filter is a caption action", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  model.showElementStringsDialog(creator.survey.getQuestionByName("q5"));
  const grid = model.elementStringsModel;
  // Used Strings Only is the default mode; the action offers the mode it switches to.
  expect(grid.showAllElementStrings).toBeFalsy();
  const filter = grid.captionActions.filter(action => action.id === "svc-translation-strings-filter")[0];
  expect(filter).toBeTruthy();
  expect(filter.title).toBe("All Strings");
  expect(filter.enabled).toBeTruthy();
  const stringsMatrix = getStringsMatrix(model);
  const usedCount = stringsMatrix.rows.length;
  const usedRenderedCount = stringsMatrix.renderedTable.rows.length;
  const usedRenderedTable = stringsMatrix.renderedTable;
  const targetPane = model.targetSurvey;
  const sourcePane = model.sourceSurvey;
  stringsMatrix.visibleRows.forEach(row => row.cells.forEach(cell => cell.question.getType()));
  filter.action();
  // Only the matrix is updated - the panes are neither rebuilt nor re-created, and the dialog
  // is the same one, not a re-opened copy of itself.
  expect(model.targetSurvey).toBe(targetPane);
  expect(model.sourceSurvey).toBe(sourcePane);
  expect(model.elementStringsModel).toBe(grid);
  expect(grid.showAllElementStrings).toBeTruthy();
  expect(filter.title).toBe("Used Strings Only");
  // The all-strings mode adds the empty localizable properties (description etc.) as rows -
  // into the same matrix, which keeps its place and its title actions.
  expect(getStringsMatrix(model)).toBe(stringsMatrix);
  expect(stringsMatrix.rows.length).toBeGreaterThan(usedCount);
  // The very first click shows them: the rendered table follows the rows in the same step, and
  // every row still carries its translation item.
  expect(stringsMatrix.renderedTable.rows.length).toBeGreaterThan(usedRenderedCount);
  // A fresh rendered table, not the old one with rows appended: that identity change is what
  // makes the UI redraw the matrix on this click instead of on the next one.
  expect(stringsMatrix.renderedTable).not.toBe(usedRenderedTable);
  expect(stringsMatrix.rows.every(row => !!row["translationData"])).toBeTruthy();
  expect(stringsMatrix.visibleRows.length).toBe(stringsMatrix.rows.length);
  // Switching back, again in one click.
  filter.action();
  expect(grid.showAllElementStrings).toBeFalsy();
  expect(stringsMatrix.rows.length).toBe(usedCount);
  expect(stringsMatrix.renderedTable.rows.length).toBe(usedRenderedCount);
  filter.action();
  // The chosen mode is stored: the next element opens with it, and so does the next model
  // (the plugin carries it over a tab switch).
  expect(model.showAllElementStrings).toBeTruthy();
  model.showElementStringsDialog(creator.survey.getQuestionByName("q1"));
  expect(model.elementStringsModel.showAllElementStrings).toBeTruthy();
  expect(model.elementStringsModel.captionActions
    .filter(action => action.id === "svc-translation-strings-filter")[0].title).toBe("Used Strings Only");
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  expect(getModel(creator).showAllElementStrings).toBeTruthy();
});

test("element strings dialog: the empty-element fallback to all strings is not stored", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  // page2 has no stored strings - its dialog shows all of them and cannot switch back.
  model.showPageStringsDialog(model.targetSurvey.getPageByName("page2"));
  expect(model.elementStringsModel.showAllElementStrings).toBeTruthy();
  expect(model.elementStringsModel.captionActions
    .filter(action => action.id === "svc-translation-strings-filter")[0].enabled).toBeFalsy();
  expect(model.showAllElementStrings).toBeFalsy();
  // The next element opens in the used-strings mode the user never left.
  model.showPageStringsDialog(model.targetSurvey.getPageByName("page1"));
  expect(model.elementStringsModel.showAllElementStrings).toBeFalsy();
});

const containersJSON = {
  locale: "de",
  title: { default: "Survey title", de: "Umfragetitel" },
  pages: [
    {
      name: "page1",
      title: "Page 1 title",
      elements: [
        { type: "panel", name: "panel1", title: "Panel 1", elements: [{ type: "text", name: "q1" }] },
        { type: "panel", name: "panel2", description: "Panel 2 description", elements: [{ type: "text", name: "q2" }] },
        { type: "panel", name: "panel3", elements: [{ type: "text", name: "q3" }] }
      ]
    },
    { name: "page2", elements: [{ type: "text", name: "q4" }] }
  ]
};

test("survey, page and panel translate actions: target pane only, a panel without strings is ignored", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  const pageActions = (survey: any, name: string) =>
    survey.getPageByName(name).getTitleActions().filter((action: any) => action.id === "svc-translate-page");
  expect(pageActions(model.targetSurvey, "page1")).toHaveLength(1);
  expect(pageActions(model.targetSurvey, "page2")).toHaveLength(1);
  expect(pageActions(model.sourceSurvey, "page1")).toHaveLength(0);
  const panelActions = (survey: any, name: string) =>
    survey.getPanelByName(name).getTitleActions().filter((action: any) => action.id === "svc-translate-panel");
  expect(panelActions(model.targetSurvey, "panel1")).toHaveLength(1);
  expect(panelActions(model.targetSurvey, "panel2")).toHaveLength(1);
  expect(panelActions(model.targetSurvey, "panel3")).toHaveLength(0);
  expect(panelActions(model.sourceSurvey, "panel1")).toHaveLength(0);
  // The survey header hosts the translate action through the title toolbar contract members
  // set on the target pane instance.
  expect((<any>model.targetSurvey).hasTitleActions).toBeTruthy();
  expect(model.targetSurvey.getTitleToolbar().actions.map(action => action.id)).toContain("svc-translate-survey");
  expect((<any>model.sourceSurvey).hasTitleActions).toBeFalsy();
  // Every action opens the strings dialog of its own element.
  model.showSurveyStringsDialog();
  expect(model.elementStringsModel.element).toBe(<any>creator.survey);
  model.showPageStringsDialog(model.targetSurvey.pages[0]);
  expect(model.elementStringsModel.element).toBe(creator.survey.pages[0]);
  model.showPanelStringsDialog(<any>model.targetSurvey.getPanelByName("panel1"));
  expect(model.elementStringsModel.element).toBe(creator.survey.getPanelByName("panel1"));
});

test("title placeholders: survey and pages always, a panel only when it has translatable strings", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  expect((<any>model.targetSurvey.locTitle).placeholder).toBe("pe.surveyTitlePlaceholder");
  expect((<any>model.sourceSurvey.locTitle).placeholder).toBe("pe.surveyTitlePlaceholder");
  expect((<any>model.targetSurvey.getPageByName("page2").locTitle).placeholder).toBe("pe.pageTitlePlaceholder");
  // panel2 has a description but no title - the title row is forced in both panes to stay aligned.
  const targetPanel2 = <any>model.targetSurvey.getPanelByName("panel2");
  const sourcePanel2 = <any>model.sourceSurvey.getPanelByName("panel2");
  expect(targetPanel2.hasTitle).toBeTruthy();
  expect(sourcePanel2.hasTitle).toBeTruthy();
  expect((<any>targetPanel2.locTitle).placeholder).toBe("pe.panelTitlePlaceholder");
  // panel1 shows its own title text, panel3 has no strings at all - no row, no placeholder.
  expect((<any>model.targetSurvey.getPanelByName("panel1")).hasTitle).toBeTruthy();
  const targetPanel3 = <any>model.targetSurvey.getPanelByName("panel3");
  expect(targetPanel3.hasTitle).toBeFalsy();
  expect((<any>targetPanel3.locTitle).placeholder).toBeFalsy();
});

const emptySpace = "\u00A0";

test("source pane renders an empty space for empty survey and page titles to keep the panes aligned", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  // The target pane shows a placeholder editor under an empty title; the plain-rendered source
  // pane keeps the row height with a blank space. The stored values stay empty.
  expect(model.sourceSurvey.locTitle.renderedHtml).toBe(emptySpace);
  expect(model.sourceSurvey.pages[0].locTitle.renderedHtml).toBe(emptySpace);
  expect(model.sourceSurvey.locTitle.isEmpty).toBeTruthy();
  expect(model.sourceSurvey.locTitle.text).toBe("");
  // The target pane strings are left alone - its string editors render the placeholders.
  expect(model.targetSurvey.locTitle.renderedHtml).toBe("");
  // An empty description has no target row either (no placeholder) - no extra space.
  expect(model.sourceSurvey.locDescription.renderedHtml).toBe("");
  expect(model.sourceSurvey.pages[0].locDescription.renderedHtml).toBe("");
});

test("source pane renders an empty space for a description stored only in the target locale", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.sourceSurvey.locDescription.renderedHtml).toBe("");
  creator.survey.locDescription.setLocaleText("de", "Umfragebeschreibung");
  // The real survey change mirrors into the pane copies; the source language has no text of its
  // own to show, so the source pane keeps the row height with a blank space.
  expect(model.targetSurvey.locDescription.renderedHtml).toBe("Umfragebeschreibung");
  expect(model.sourceSurvey.locDescription.renderedHtml).toBe(emptySpace);
  // The row collapses again for a target language without a description.
  model.targetLocale = "fr";
  expect(model.sourceSurvey.locDescription.renderedHtml).toBe("");
  model.targetLocale = "de";
  expect(model.sourceSurvey.locDescription.renderedHtml).toBe(emptySpace);
});

test("source pane empty space for titles with a text: shown as-is, no blank space", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.title = "Survey title";
  json.pages[0].title = "Page 1 title";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  expect(model.sourceSurvey.locTitle.renderedHtml).toBe("Survey title");
  expect(model.sourceSurvey.pages[0].locTitle.renderedHtml).toBe("Page 1 title");
});

test("panes always render the basic survey header", () => {
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.headerView = "advanced";
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  // The advanced header cover shrink-wraps the title, leaving no room for the survey
  // translate action; the real survey keeps its header view.
  expect(model.sourceSurvey.findLayoutElement("advanced-header")).toBeFalsy();
  expect(model.targetSurvey.findLayoutElement("advanced-header")).toBeFalsy();
  expect(creator.survey.findLayoutElement("advanced-header")).toBeTruthy();
});

test("panes never render the survey logo", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  // Without a logo the design-mode survey would still render it as the designer's
  // placeholder area - a broken src-less image in the panes.
  expect(model.sourceSurvey.renderedHasLogo).toBeFalsy();
  expect(model.targetSurvey.renderedHasLogo).toBeFalsy();
  // With a logo it would squeeze the title row and push the survey translate action away
  // from the pane's right edge. The logo URL is still translatable through the survey
  // strings dialog - the panes just do not display the image.
  const json = JSON.parse(JSON.stringify(sideBySideJSON));
  json.logo = "https://example.com/logo.png";
  const creatorWithLogo = createSideBySideCreator(json);
  const modelWithLogo = getModel(creatorWithLogo);
  expect(modelWithLogo.sourceSurvey.renderedHasLogo).toBeFalsy();
  expect(modelWithLogo.targetSurvey.renderedHasLogo).toBeFalsy();
});

test("element strings models: survey/page/panel grids cover own strings only, without nested elements", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  const surveyGrid = model.createElementStringsModel(creator.survey);
  expect(surveyGrid.root.groups).toHaveLength(0);
  expect(surveyGrid.root.locItems.map(item => item.name)).toContain("title");
  surveyGrid.dispose();
  const pageGrid = model.createElementStringsModel(creator.survey.pages[0]);
  expect(pageGrid.root.groups).toHaveLength(0);
  expect(pageGrid.root.locItems.map(item => item.name)).toContain("title");
  // page1 stores a title - the dialog keeps the used-only default and an enabled filter action.
  expect(pageGrid.showAllElementStrings).toBeFalsy();
  expect(pageGrid.captionActions.filter(action => action.id === "svc-translation-strings-filter")[0].enabled).toBeTruthy();
  pageGrid.dispose();
  // page2 stores no strings - the used-only mode would show an empty matrix, so the dialog
  // falls back to all strings and the filter action cannot switch back.
  const emptyPageGrid = model.createElementStringsModel(creator.survey.pages[1]);
  expect(emptyPageGrid.showAllElementStrings).toBeTruthy();
  expect(emptyPageGrid.root.locItems.map(item => item.name)).toContain("title");
  expect(emptyPageGrid.captionActions.filter(action => action.id === "svc-translation-strings-filter")[0].enabled).toBeFalsy();
  emptyPageGrid.dispose();
  const panelGrid = model.createElementStringsModel(creator.survey.getPanelByName("panel2"));
  expect(panelGrid.root.groups).toHaveLength(0);
  expect(panelGrid.root.locItems.map(item => item.name)).toContain("description");
  panelGrid.dispose();
});

test("element strings dialog: survey strings edits mirror into the panes", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  model.showSurveyStringsDialog();
  const titleRow = getStringsRow(getStringsMatrix(model), creator.survey.locTitle);
  expect(titleRow).toBeTruthy();
  titleRow.cells[0].question.value = "Umfragetitel neu";
  expect(creator.survey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
  expect(model.targetSurvey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
});

test("Translate remaining strings action is disabled while the target language is empty or equals the source language", () => {
  // No machine-translation handler: the action opens the dialog anyway, so it is shown and
  // follows the same enabled rule.
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const action = creator.toolbar.getActionById("svc-translation-dialog");
  expect(action.visible).toBeTruthy();
  // The survey locale "de" makes the default target; the source is the default language.
  expect(model.targetLocale).toBe("de");
  expect(action.enabled).toBeTruthy();
  // No target language selected.
  model.targetLocale = "";
  expect(action.enabled).toBeFalsy();
  model.targetLocale = "fr";
  expect(action.enabled).toBeTruthy();
  // The target language equals the source one.
  model.sourceLocale = "fr";
  expect(action.enabled).toBeFalsy();
  model.sourceLocale = "";
  expect(action.enabled).toBeTruthy();
  creator.readOnly = true;
  expect(action.enabled).toBeFalsy();
  creator.readOnly = false;
  expect(action.enabled).toBeTruthy();
  // Re-activation creates a new model; the action must follow the new model's locales.
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  const newModel = getModel(creator);
  expect(newModel).not.toBe(model);
  expect(newModel.targetLocale).toBe("de");
  expect(action.enabled).toBeTruthy();
  newModel.targetLocale = "";
  expect(action.enabled).toBeFalsy();
});

test("Translate remaining strings action without a machine-translation handler: dialog has no machine item, keeps from-locale and CSV actions", () => {
  const creator = createSideBySideCreator();
  expect(creator.getHasMachineTranslation()).toBeFalsy();
  const action = creator.toolbar.getActionById("svc-translation-dialog");
  expect(action.visible).toBeTruthy();
  const model = getModel(creator);
  const editor = model.createTranslationEditor(model.targetLocale);
  const actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions.map(item => item.id)).toEqual(["svc-translation-fromlocale", "svc-translation-import", "svc-translation-export"]);
  editor.dispose();
});

const stateJSON = {
  locale: "de",
  completedHtml: "Thank you",
  pages: [
    {
      name: "page1",
      title: "Page 1 title",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "text", name: "q2", title: "Question 2" },
        { type: "text", name: "q3" }
      ]
    },
    {
      name: "page2",
      title: { default: "Page 2 title", de: "Seite 2" },
      elements: [{ type: "text", name: "q4", title: { default: "Question 4", de: "Frage 4" } }]
    }
  ]
};

// The translate title action doubles as the state indicator - resolve it by its state css.
function getStateAction(element: any): any {
  return element.getTitleActions().filter((action: any) =>
    !!action.css && action.css.indexOf("svc-translation-state") >= 0)[0];
}

test("element state indicator: question states for translated / untranslated / no strings", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const target = model.targetSurvey;
  expect(model.getElementTranslationState(target.getQuestionByName("q1"))).toBe("translated");
  expect(model.getElementTranslationState(target.getQuestionByName("q2"))).toBe("untranslated");
  // q3 has no title of its own, so it is displayed - and translated - by its name: one string,
  // exactly the row its strings dialog lists.
  expect(model.getElementTranslationState(target.getQuestionByName("q3"))).toBe("untranslated");
  expect(model.getElementUntranslatedCount(target.getQuestionByName("q3"))).toBe(1);
  // The real-survey elements resolve to the same states as the pane copies.
  expect(model.getElementTranslationState(creator.survey.getQuestionByName("q2"))).toBe("untranslated");
  // The button carries the css modifier, the state tooltip and - in the untranslated state
  // only - the number of strings left to translate. The language icon is its only icon.
  const translatedAction = getStateAction(target.getQuestionByName("q1"));
  expect(translatedAction).toBeTruthy();
  expect(translatedAction.id).toBe("svc-translate-question");
  expect(translatedAction.iconName).toBe("icon-language");
  expect(translatedAction.css).toContain("svc-translation-state--translated");
  expect(translatedAction.tooltip).toBe("All strings are translated");
  expect(translatedAction.showTitle).toBeFalsy();
  expect(translatedAction.title).toBe("");
  const untranslatedAction = getStateAction(target.getQuestionByName("q2"));
  expect(untranslatedAction.iconName).toBe("icon-language");
  expect(untranslatedAction.css).toContain("svc-translation-state--untranslated");
  expect(untranslatedAction.tooltip).toBe("1 strings are not translated");
  expect(untranslatedAction.showTitle).toBeTruthy();
  expect(untranslatedAction.title).toBe("1");
  expect(model.getElementUntranslatedCount(target.getQuestionByName("q2"))).toBe(1);
  // "Nothing to translate" is the state of an element without strings of its own - a page with
  // neither a title nor a description (a question always has its title, name fallback included).
  const noneModel = getModel(createSideBySideCreator({
    locale: "de",
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }] }]
  }));
  const nonePage = noneModel.targetSurvey.getPageByName("page1");
  const noneAction = getStateAction(nonePage);
  expect(noneAction.css).toContain("svc-translation-state--none");
  expect(noneAction.tooltip).toBe("No strings to translate");
  expect(noneAction.showTitle).toBeFalsy();
  expect(noneModel.getElementUntranslatedCount(nonePage)).toBe(0);
  // The state is carried by the target pane's actions only.
  expect(getStateAction(target.getPageByName("page1"))).toBeTruthy();
  expect(getStateAction(model.sourceSurvey.getQuestionByName("q1"))).toBeFalsy();
  expect(getStateAction(model.sourceSurvey.getPageByName("page1"))).toBeFalsy();
});

test("element state indicator: the untranslated count survives a shrinking title bar", () => {
  const creator = createSideBySideCreator({
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: "Name" },
        {
          type: "radiogroup", name: "q2", startWithNewLine: false, title: "Sex assigned at birth",
          choices: [{ value: "f", text: "Female" }, { value: "m", text: "Male" }]
        }
      ]
    }]
  });
  const model = getModel(creator);
  model.targetLocale = "de";
  const question = model.targetSurvey.getQuestionByName("q2");
  // The title and the two choice texts.
  expect(model.getElementUntranslatedCount(question)).toBe(3);
  const action = getStateAction(question);
  expect(action.title).toBe("3");
  // The question shares its row, so its title bar has little room and shrinks its actions -
  // the count must stay visible instead of leaving the chevron alone.
  const toolbar = <AdaptiveActionContainer>question.getTitleToolbar();
  toolbar.setActionsMode("small");
  expect(action.mode).toBe("large");
  expect(action.hasTitle).toBeTruthy();
});

test("element state indicator: choices without a text of their own count - they are displayed by their value", () => {
  const creator = createSideBySideCreator({
    pages: [{
      name: "page1",
      elements: [{
        type: "dropdown", name: "preferredContact", title: "Preferred contact method",
        choices: ["Phone", "Email", "Text message"]
      }]
    }]
  });
  const model = getModel(creator);
  model.targetLocale = "de";
  const question = model.targetSurvey.getQuestionByName("preferredContact");
  // The title and the three choices - the rows the element strings dialog lists.
  expect(model.getElementUntranslatedCount(question)).toBe(4);
  expect(getStateAction(question).title).toBe("4");
  // The same strings the whole-survey progress is measured against.
  expect(model.getTranslationProgress("de")).toEqual({ translated: 0, total: 4 });
  model.showElementStringsDialog(creator.survey.getQuestionByName("preferredContact"));
  expect(model.elementStringsModel.root.allLocItems).toHaveLength(4);
  // Translating a choice moves the count.
  ItemValue.getItemByValue((<QuestionDropdownModel>creator.survey.getQuestionByName("preferredContact")).choices, "Phone")
    .locText.setLocaleText("de", "Telefon");
  expect(model.getElementUntranslatedCount(question)).toBe(3);
});

test("element state indicator: dialog-only strings count - untranslated matrix column choices keep the warning", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "matrixdropdown",
            name: "m1",
            title: { default: "Matrix", de: "Matrix de" },
            columns: [{
              name: "col1",
              title: { default: "Column 1", de: "Spalte 1" },
              cellType: "dropdown",
              choices: [{ value: "A", text: "AA" }]
            }],
            rows: [{ value: "row1", text: { default: "Row 1", de: "Zeile 1" } }]
          }
        ]
      }
    ]
  });
  const model = getModel(creator);
  // Every visible string is translated; the column choice text "AA" is reachable only through
  // the strings dialog and still blocks the "all translated" state.
  expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("m1"))).toBe("untranslated");
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("m1");
  (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText.setLocaleText("de", "AA de");
  expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("m1"))).toBe("translated");
  // The page has no strings of its own - the question states never roll up into it.
  expect(model.getElementTranslationState(model.targetSurvey.getPageByName("page1"))).toBe("none");
});

test("element state indicator: page and survey states cover their own strings, not the nested questions", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const target = model.targetSurvey;
  // page1's own title is untranslated, page2's is translated - the question states never
  // roll up: every question shows an indicator of its own.
  expect(model.getElementTranslationState(target.getPageByName("page1"))).toBe("untranslated");
  expect(model.getElementTranslationState(target.getPageByName("page2"))).toBe("translated");
  const pageAction = getStateAction(target.getPageByName("page1"));
  // Translating the page title completes the page even though q2 is still untranslated.
  target.getPageByName("page1").locTitle.text = "Seite 1";
  expect(model.getElementTranslationState(target.getPageByName("page1"))).toBe("translated");
  expect(pageAction.css).toContain("svc-translation-state--translated");
  expect(model.getElementTranslationState(target.getQuestionByName("q2"))).toBe("untranslated");
  // The survey state covers the survey-level strings only: completedHtml is untranslated.
  const surveyAction = target.getTitleToolbar().getActionById("svc-translate-survey");
  expect(surveyAction).toBeTruthy();
  expect(model.getElementTranslationState(target)).toBe("untranslated");
  expect(surveyAction.css).toContain("svc-translation-state--untranslated");
  creator.survey.getLocalizableString("completedHtml").setLocaleText("de", "Danke");
  expect(model.getElementTranslationState(target)).toBe("translated");
  expect(surveyAction.showTitle).toBeFalsy();
  expect(surveyAction.css).toContain("svc-translation-state--translated");
});

test("element state indicator: a target locale switch refreshes the indicators and keeps the panes", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    completedHtml: { default: "Thank you", de: "Danke" },
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }] }]
  });
  const model = getModel(creator);
  const target = model.targetSurvey;
  const surveyAction = target.getTitleToolbar().getActionById("svc-translate-survey");
  expect(surveyAction.css).toContain("svc-translation-state--translated");
  expect(surveyAction.showTitle).toBeFalsy();
  // The indicator actions report their own text changes through the pane survey, like every
  // other element of it, and they are not mapped string copies - forwarding them would read as
  // a drifted mapping and rebuild the panes in the middle of the indicator refresh.
  model.targetLocale = "it";
  expect(model.targetSurvey).toBe(target);
  expect(surveyAction.css).toContain("svc-translation-state--untranslated");
  expect(surveyAction.title).toBe("1");
  expect(model.getElementTranslationState(target.getQuestionByName("q1"))).toBe("untranslated");
});

test("element state indicator: survey state includes nested survey-level strings, e.g. completedHtmlOnCondition", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    completedHtml: { default: "Thank you", de: "Danke" },
    completedHtmlOnCondition: [{ expression: "{q1} = 1", html: "Special thanks" }],
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] }]
  });
  const model = getModel(creator);
  // The nested condition html is untranslated - the survey shows the warning although
  // completedHtml itself is translated; the untranslated q1 plays no role.
  expect(model.getElementTranslationState(model.targetSurvey)).toBe("untranslated");
  creator.survey.completedHtmlOnCondition[0].locHtml.setLocaleText("de", "Besonderen Dank");
  expect(model.getElementTranslationState(model.targetSurvey)).toBe("translated");
  expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("q1"))).toBe("untranslated");
});

test("element state indicator: page state includes its own non-title strings, e.g. navigationTitle", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{
      name: "page1",
      title: { default: "Page 1 title", de: "Seite 1" },
      navigationTitle: "Nav 1",
      elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }]
    }]
  });
  const model = getModel(creator);
  // The untranslated navigationTitle keeps the page warning although the title is translated.
  expect(model.getElementTranslationState(model.targetSurvey.getPageByName("page1"))).toBe("untranslated");
  creator.survey.pages[0].locNavigationTitle.setLocaleText("de", "Nav 1 de");
  expect(model.getElementTranslationState(model.targetSurvey.getPageByName("page1"))).toBe("translated");
});

test("element state indicator: transitions on typing and target locale switch", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const target = model.targetSurvey;
  const questionAction = getStateAction(target.getQuestionByName("q2"));
  const pageAction = getStateAction(target.getPageByName("page1"));
  expect(questionAction.css).toContain("svc-translation-state--untranslated");
  expect(pageAction.css).toContain("svc-translation-state--untranslated");
  // Typing flips the question in place; the page state follows its own title only.
  target.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(questionAction.showTitle).toBeFalsy();
  expect(questionAction.css).toContain("svc-translation-state--translated");
  expect(pageAction.css).toContain("svc-translation-state--untranslated");
  // Clearing the text flips it back.
  target.getQuestionByName("q2").locTitle.text = "";
  expect(questionAction.title).toBe("1");
  expect(questionAction.css).toContain("svc-translation-state--untranslated");
  // Typing the page title flips the page.
  target.getPageByName("page1").locTitle.text = "Seite 1";
  expect(pageAction.css).toContain("svc-translation-state--translated");
  // A target locale switch recomputes every state: nothing is translated into French.
  model.targetLocale = "fr";
  expect(getStateAction(target.getQuestionByName("q1")).css).toContain("svc-translation-state--untranslated");
  expect(model.getElementTranslationState(target.getPageByName("page2"))).toBe("untranslated");
  expect(model.getElementTranslationState(target.getQuestionByName("q3"))).toBe("untranslated");
});

test("element state indicator: no target language, no states and no indicator actions", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const question = model.targetSurvey.getQuestionByName("q2");
  expect(model.getElementTranslationState(question)).toBe("untranslated");
  model.targetLocale = "";
  // The target pane is gone with its title actions - the source pane carries no indicators.
  expect(model.targetSurvey).toBeFalsy();
  expect(model.getElementTranslationState(model.sourceSurvey.getQuestionByName("q2"))).toBe("none");
  expect(model.getElementTranslationState(model.sourceSurvey.getPageByName("page1"))).toBe("none");
  expect(model.getElementTranslationState(model.sourceSurvey)).toBe("none");
});

test("Translate remaining strings action with a machine-translation handler: dialog has the machine item", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.onMachineTranslate.add(() => { });
  creator.JSON = JSON.parse(JSON.stringify(sideBySideJSON));
  creator.activeTab = "translation";
  const action = creator.toolbar.getActionById("svc-translation-dialog");
  expect(action.visible).toBeTruthy();
  const model = getModel(creator);
  const editor = model.createTranslationEditor(model.targetLocale);
  const actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions.map(item => item.id)).toEqual(["svc-translation-fromlocale", "svc-translation-machine", "svc-translation-import", "svc-translation-export"]);
  editor.dispose();
});

const autoTranslateJSON = {
  locale: "de",
  pages: [{
    name: "page1",
    elements: [{
      type: "checkbox",
      name: "q1",
      title: "Q1 title",
      description: "Q1 desc",
      choices: [
        { value: "item1", text: { default: "Item 1", de: "Element 1" } },
        { value: "item2", text: "Item 2" },
        "item3",
        3
      ]
    }]
  }]
};

// The auto-translate button of the dialog's caption row.
function getMachineAction(grid: any): any {
  return grid.captionActions.filter((action: any) => action.id === "svc-translation-machine")[0];
}

test("element strings dialog: auto-translate button is shown only when machine translation is available", () => {
  const creator = createSideBySideCreator(autoTranslateJSON);
  const model = getModel(creator);
  const realQ1 = creator.survey.getQuestionByName("q1");
  let grid = model.createElementStringsModel(realQ1);
  expect(getMachineAction(grid)).toBeFalsy();
  // The filter is always there; the dialog is closed by its own footer button, so the caption
  // row carries no closing action.
  expect(grid.captionActions.map((action: any) => action.id))
    .toEqual(["svc-translation-strings-filter"]);
  grid.dispose();
  creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  grid = model.createElementStringsModel(realQ1);
  const action = getMachineAction(grid);
  expect(action).toBeTruthy();
  expect(action.enabled).toBeTruthy();
  expect(grid.captionActions.map((item: any) => item.id))
    .toEqual(["svc-translation-machine", "svc-translation-strings-filter"]);
  grid.dispose();
});

test("element strings dialog: auto-translate button is disabled when all used strings are translated or there is nothing to translate", () => {
  const creator = createSideBySideCreator(stateJSON);
  creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  const model = getModel(creator);
  // q1's only used string already has a de text.
  let grid = model.createElementStringsModel(creator.survey.getQuestionByName("q1"));
  expect(getMachineAction(grid).enabled).toBeFalsy();
  grid.dispose();
  // q3's title row exists through the name fallback - the name is what it is translated from,
  // as in the all-languages dialog.
  grid = model.createElementStringsModel(creator.survey.getQuestionByName("q3"));
  expect(getMachineAction(grid).enabled).toBeTruthy();
  grid.dispose();
  // q2's title is untranslated.
  grid = model.createElementStringsModel(creator.survey.getQuestionByName("q2"));
  expect(getMachineAction(grid).enabled).toBeTruthy();
  grid.dispose();
});

test("element strings dialog: auto-translate fills only the empty target texts of the used strings", () => {
  const creator = createSideBySideCreator(autoTranslateJSON);
  let fromLocale = "";
  let toLocale = "";
  let passedStrings: Array<string> = [];
  creator.onMachineTranslate.add((_, options) => {
    fromLocale = options.fromLocale;
    toLocale = options.toLocale;
    passedStrings = options.strings;
    options.callback(options.strings.map(str => "de: " + str));
  });
  const model = getModel(creator);
  const realQ1 = <QuestionCheckboxModel>creator.survey.getQuestionByName("q1");
  const grid = model.createElementStringsModel(realQ1);
  const action = getMachineAction(grid);
  action.action();
  expect(fromLocale).toBe("en");
  expect(toLocale).toBe("de");
  // The already translated "item1" is kept; "item3" has no text of its own and is translated
  // from the value it is displayed by; the numeric choice is not a used string at all.
  expect(passedStrings).toEqual(["Q1 title", "Q1 desc", "Item 2", "item3"]);
  expect(realQ1.locTitle.getLocaleText("de")).toBe("de: Q1 title");
  expect(realQ1.locDescription.getLocaleText("de")).toBe("de: Q1 desc");
  expect(ItemValue.getItemByValue(realQ1.choices, "item1").locText.getLocaleText("de")).toBe("Element 1");
  expect(ItemValue.getItemByValue(realQ1.choices, "item2").locText.getLocaleText("de")).toBe("de: Item 2");
  expect(ItemValue.getItemByValue(realQ1.choices, "item3").locText.getLocaleText("de")).toBe("de: item3");
  expect(ItemValue.getItemByValue(realQ1.choices, 3).locText.getLocaleText("de")).toBeFalsy();
  // The writes mirror into the target pane and complete the element state.
  expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("q1"))).toBe("translated");
  // Everything is translated now.
  expect(action.enabled).toBeFalsy();
  grid.dispose();
});

test("element strings dialog: auto-translate covers the used strings only, whatever the current filter is", () => {
  const creator = createSideBySideCreator(autoTranslateJSON);
  let passedStrings: Array<string> = [];
  creator.onMachineTranslate.add((_, options) => {
    passedStrings = options.strings;
    options.callback(options.strings.map(str => "de: " + str));
  });
  const model = getModel(creator);
  const grid = model.createElementStringsModel(creator.survey.getQuestionByName("q1"));
  grid.showAllElementStrings = true;
  // The filter switch rebuilds the matrix rows; the caption row and its button stay.
  const action = getMachineAction(grid);
  expect(action).toBeTruthy();
  action.action();
  expect(passedStrings).toEqual(["Q1 title", "Q1 desc", "Item 2", "item3"]);
  grid.dispose();
});

const inlineBlockJSON = {
  locale: "de",
  title: "Survey title",
  pages: [
    {
      name: "page1",
      title: "Page 1 title",
      elements: [
        { type: "text", name: "q1", title: "Question 1" },
        { type: "text", name: "q2", title: "Question 2", startWithNewLine: false },
        { type: "panel", name: "panel1", title: "Panel 1", elements: [{ type: "text", name: "q3", title: "Question 3" }] }
      ]
    },
    { name: "page2", title: "Page 2 title", elements: [{ type: "text", name: "q4", title: "Question 4" }] }
  ]
};

// The dialog options the model passes to settings.showDialog, captured instead of shown.
function withDialog(fn: (dialogs: Array<any>) => void): void {
  const origin = surveySettings.showDialog;
  const dialogs: Array<any> = [];
  surveySettings.showDialog = (options: any): any => {
    const popup = {
      options: options,
      locale: "",
      footerToolbar: { actions: [{ title: "Apply" }, { title: "Cancel" }] },
      model: { hide: (): void => { options.onHide(); } }
    };
    dialogs.push(popup);
    return popup;
  };
  try {
    fn(dialogs);
  } finally {
    surveySettings.showDialog = origin;
  }
}

test("element strings dialog: shown as a modal over the element's own survey, with a single closing button", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(inlineBlockJSON);
    const model = getModel(creator);
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(dialogs).toHaveLength(1);
    const options = dialogs[0].options;
    // The dialog renders the model's own survey through the component every UI package registers.
    expect(options.componentName).toBe("survey-widget");
    expect(options.data.model).toBe(model.elementStringsSurvey);
    expect(options.title).toBe("Question 1");
    expect(options.cssClass).toContain("st-element-strings-dialog");
    // The edits apply immediately: the apply/cancel pair is replaced by one closing button.
    expect(dialogs[0].footerToolbar.actions).toHaveLength(1);
    expect(dialogs[0].footerToolbar.actions[0].title).toBe("Done");
    // Closing it disposes the model and the survey it was rendered in.
    const stringsModel = model.elementStringsModel;
    const stringsSurvey = model.elementStringsSurvey;
    options.onHide();
    expect(model.elementStringsModel).toBeFalsy();
    expect(model.elementStringsSurvey).toBeFalsy();
    expect(stringsModel.isDisposed).toBeTruthy();
    expect(stringsSurvey.isDisposed).toBeTruthy();
    // The pages, the panels and the survey itself are named by their title as well.
    model.showPageStringsDialog(model.targetSurvey.getPageByName("page2"));
    expect(dialogs[1].options.title).toBe("Page 2 title");
    model.showPanelStringsDialog(<any>model.targetSurvey.getPanelByName("panel1"));
    expect(dialogs[2].options.title).toBe("Panel 1");
    model.showSurveyStringsDialog();
    expect(dialogs[3].options.title).toBe("Survey title");
  });
});

test("element strings dialog: opening another element closes the dialog that is up", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(inlineBlockJSON);
    const model = getModel(creator);
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    const firstModel = model.elementStringsModel;
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q4"));
    expect(dialogs).toHaveLength(2);
    expect(model.elementStringsModel).not.toBe(firstModel);
    expect(firstModel.isDisposed).toBeTruthy();
    expect(model.elementStringsModel.element).toBe(creator.survey.getQuestionByName("q4"));
    // The dialog that was replaced reports its hiding afterwards - it must not take the
    // current model with it.
    dialogs[0].options.onHide();
    expect(model.elementStringsModel).toBeTruthy();
    expect(model.elementStringsModel.element).toBe(creator.survey.getQuestionByName("q4"));
  });
});

test("element strings dialog: the count of the element button is recomputed on closing", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  const action = getStateAction(model.targetSurvey.getQuestionByName("q1"));
  expect(action.title).toBe("1");
  expect(action.iconName).toBe("icon-language");
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const stringsModel = model.elementStringsModel;
  creator.survey.getQuestionByName("q1").locTitle.setLocaleText("de", "Frage 1");
  model.hideElementStringsDialog();
  expect(model.elementStringsModel).toBeFalsy();
  expect(stringsModel.isDisposed).toBeTruthy();
  expect(action.css).toContain("svc-translation-state--translated");
  expect(action.showTitle).toBeFalsy();
});

test("element strings dialog: a matrix edit updates the button count and mirrors into the target pane", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  const action = getStateAction(model.targetSurvey.getQuestionByName("q1"));
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const item = model.elementStringsModel.root.allLocItems
    .filter(locItem => locItem.locString === creator.survey.getQuestionByName("q1").locTitle)[0];
  expect(item).toBeTruthy();
  model.elementStringsModel.setItemLocText(item, "de", "Frage 1");
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(model.targetSurvey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
  // The dialog stays open - the edit is not a structural change of the survey.
  expect(model.elementStringsModel).toBeTruthy();
  expect(action.css).toContain("svc-translation-state--translated");
  expect(action.showTitle).toBeFalsy();
});

test("element strings dialog: survives a pane rebuild, closes with the target language and with its element", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const stringsModel = model.elementStringsModel;
  // A structural change of the real survey rebuilds the panes - the dialog is over the real
  // survey, so it is not one of the objects that go with them.
  creator.survey.pages[0].addNewQuestion("text", "q5");
  expect(model.elementStringsModel).toBe(stringsModel);
  expect(model.elementStringsModel.element).toBe(creator.survey.getQuestionByName("q1"));
  // The fresh copies keep mirroring.
  creator.survey.getQuestionByName("q1").locTitle.setLocaleText("de", "Frage 1");
  expect(model.targetSurvey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
  // The element itself is gone: there is nothing left to edit.
  creator.survey.pages[0].removeElement(creator.survey.getQuestionByName("q1"));
  expect(model.elementStringsModel).toBeFalsy();
  expect(stringsModel.isDisposed).toBeTruthy();
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q4"));
  expect(model.elementStringsModel).toBeTruthy();
  // No target language - no column to translate into.
  model.targetLocale = "";
  expect(model.targetSurvey).toBeFalsy();
  expect(model.elementStringsModel).toBeFalsy();
});

test("element strings dialog: a dialog-only string edited in the matrix does not rebuild the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  model.showElementStringsDialog(realMatrix);
  const stringsMatrix = getStringsMatrix(model);
  const targetPane = model.targetSurvey;
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  // The column choice is not rendered by the panes, so it is not a mapped string - and it is
  // still a text change, not a structural one: the panes stay, and so does the open dialog.
  getStringsRow(stringsMatrix, realChoiceLocText).cells[0].question.value = "AA-de";
  expect(model.targetSurvey).toBe(targetPane);
  expect(model.elementStringsModel).toBeTruthy();
  expect(getStringsMatrix(model)).toBe(stringsMatrix);
});

test("forms view CSV export includes all used locale columns", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.view).toBe("forms");
  const rows = model.exportToCSV().split("\n");
  const header = rows[0].split(",");
  expect(header[0]).toContain("language"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  expect(header).toContain("default");
  expect(header).toContain("de");
  const q1Row = rows.filter(row => row.indexOf("q1.title") >= 0)[0];
  expect(q1Row).toBeTruthy();
  expect(q1Row).toContain("Question 1");
  expect(q1Row).toContain("Frage 1");
});

test("grid view CSV export covers the whole survey even when the grid is scoped to a page", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.view = "grid";
  model.filteredPage = creator.survey.getPageByName("page2");
  const csv = model.exportToCSV();
  expect(csv.split("\n")[0].split(",")).toContain("de");
  // Strings of the filtered-out page are still exported.
  expect(csv).toContain("q1.title");
  expect(csv).toContain("Frage 1");
  expect(csv).toContain("q4.title");
});

test("side-by-side model carries no all-languages machinery", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model instanceof TranslationBase).toBeTruthy();
  expect(model instanceof Translation).toBeFalsy();
  // No locales matrix, no add-language dropdown - the languages live in the side-by-side settings survey.
  expect((<any>model).localesQuestion).toBeUndefined();
  expect((<any>model).addLanguageAction).toBeUndefined();
  expect((<any>model).chooseLanguageActions).toBeUndefined();
  expect(model.settingsSurvey.getQuestionByName("locales")).toBeFalsy();
  // The element strings dialog model is a bare grid - it builds no settings survey at all.
  const grid = model.createElementStringsModel(creator.survey.getQuestionByName("q1"));
  expect(grid.settingsSurvey).toBeUndefined();
  grid.dispose();
});

// The caption actions get their loc owner when the matrix's title toolbar is built - that is
// where the strings of a title action would be resolved in the locale of whatever renders them.
function renderCaption(model: TranslationSideBySide): void {
  const host = getStringsMatrix(model);
  host.getTitleToolbar();
  host.locStrsChanged();
}

test("element strings dialog: caption actions follow the creator UI locale, not the target language", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  const model = getModel(creator);
  const machineTitle = editorLocalization.getString("ed.translateUsigAI");
  const filterTitle = editorLocalization.getString("ed.translationShowAllStrings");
  const captionOf = (): Array<any> => model.elementStringsModel.captionActions;
  const idOf = (actions: Array<any>, id: string): any => actions.filter(action => action.id === id)[0];
  // The target language has creator strings of its own - that is what an action resolving a
  // localization name in the language being translated into would show.
  const savedDeStrings = editorLocalization.locales["de"];
  editorLocalization.locales["de"] = {
    ed: { translateUsigAI: "de: auto-translate", translationShowAllStrings: "de: all strings" }
  };
  try {
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(model.targetSurvey.locale).toBe("de");
    renderCaption(model);
    expect(idOf(captionOf(), "svc-translation-machine").title).toBe(machineTitle);
    expect(idOf(captionOf(), "svc-translation-strings-filter").title).toBe(filterTitle);
    model.showSurveyStringsDialog();
    renderCaption(model);
    expect(idOf(captionOf(), "svc-translation-machine").title).toBe(machineTitle);
    // The creator UI locale is what they do follow.
    editorLocalization.currentLocale = "de";
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q2"));
    renderCaption(model);
    expect(idOf(captionOf(), "svc-translation-machine").title).toBe("de: auto-translate");
    expect(idOf(captionOf(), "svc-translation-strings-filter").title).toBe("de: all strings");
  } finally {
    editorLocalization.currentLocale = "";
    if (savedDeStrings === undefined) {
      delete editorLocalization.locales["de"];
    } else {
      editorLocalization.locales["de"] = savedDeStrings;
    }
  }
});

test("element strings dialog: an inline editor edit lands in the open matrix", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const stringsMatrix = getStringsMatrix(model);
  const realQ1 = creator.survey.getQuestionByName("q1");
  expect(getStringsRow(stringsMatrix, realQ1.locTitle).cells[0].question.value).toBeFalsy();
  // The inline editor of the target pane writes into the copy, which forwards the text to the
  // real survey - the funnel that refreshes the dialog is closed on that path.
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(realQ1.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(getStringsRow(stringsMatrix, realQ1.locTitle).cells[0].question.value).toBe("Frage 1");
  // An edit of another element leaves the open dialog alone.
  const matrixValue = stringsMatrix.value;
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("Frage 2");
  expect(stringsMatrix.value).toEqual(matrixValue);
  // No self-heal rebuild: the panes and the dialog are the same objects.
  expect(model.elementStringsModel).toBeTruthy();
  expect(getStringsMatrix(model)).toBe(stringsMatrix);
});

// The row ItemValue behind a real localizable string - its title is the row's merged first cell.
function getStringsRowItem(matrix: QuestionMatrixDropdownModel, locStr: any): any {
  return matrix.rows.filter(row => (<any>row)["translationData"].locString === locStr)[0];
}

test("element strings dialog: the cells open with the stored target texts", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const stringsMatrix = getStringsMatrix(model);
  const realQ1 = creator.survey.getQuestionByName("q1");
  // The matrix is filled before it joins the dialog's survey, and a question joining one takes
  // its value from that survey's data - the texts must be there anyway, on the very first render.
  expect(stringsMatrix.value).toBeTruthy();
  expect(getStringsRow(stringsMatrix, realQ1.locTitle).cells[0].question.value).toBe("Frage 1");
  // The source text is what the untranslated cells offer as their placeholder.
  const emptyRow = getStringsRow(stringsMatrix, creator.survey.getQuestionByName("q4").locTitle);
  expect(emptyRow).toBeFalsy();
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q4"));
  const q4Row = getStringsRow(getStringsMatrix(model), creator.survey.getQuestionByName("q4").locTitle);
  expect(q4Row.cells[0].question.value).toBeFalsy();
  expect(q4Row.cells[0].question.placeholder).toBe("Question 4");
});

test("element strings dialog: the row title merges the string name and its source text", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const titleRow = getStringsRowItem(getStringsMatrix(model), creator.survey.getQuestionByName("q1").locTitle);
  expect(titleRow).toBeTruthy();
  expect(titleRow.locText.hasHtml).toBeTruthy();
  expect(titleRow.locText.renderedHtml).toContain("st-element-strings__row-name");
  expect(titleRow.locText.renderedHtml).toContain("st-element-strings__row-source");
  expect(titleRow.locText.renderedHtml).toContain("Question 1");
  // The cell's accessible name is built from the row title - the two lines read as one sentence
  // there, never as the markup that draws them.
  const cellRow = getStringsRow(getStringsMatrix(model), creator.survey.getQuestionByName("q1").locTitle);
  expect(cellRow.getAccessbilityText()).toBe("Question title, Question 1");
  expect(cellRow.cells[0].question.a11y_input_ariaLabel).toContain("Question title, Question 1");
  expect(cellRow.cells[0].question.a11y_input_ariaLabel).not.toContain("<span");
});

test("element strings dialog: a string with no source text renders the name alone, and html is escaped", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "<b>Q1</b>" }] }]
  });
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const realQ1 = creator.survey.getQuestionByName("q1");
  const titleRow = getStringsRowItem(getStringsMatrix(model), realQ1.locTitle);
  expect(titleRow.locText.renderedHtml).toContain("&lt;b&gt;Q1&lt;/b&gt;");
  expect(titleRow.locText.renderedHtml).not.toContain("<b>Q1</b>");
  // A string the source language has nothing for renders its name alone - no empty second line.
  model.elementStringsModel.showAllElementStrings = true;
  const descriptionRow = getStringsRowItem(getStringsMatrix(model), realQ1.locDescription);
  expect(descriptionRow).toBeTruthy();
  expect(descriptionRow.locText.renderedHtml).toContain("st-element-strings__row-name");
  expect(descriptionRow.locText.renderedHtml).not.toContain("st-element-strings__row-source");
});

test("element strings dialog: the open matrix follows a locale switch", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  const realQ1 = creator.survey.getQuestionByName("q1");
  realQ1.locTitle.setLocaleText("fr", "Question 1 fr");
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const stringsMatrix = getStringsMatrix(model);
  expect(stringsMatrix.columns[0].name).toBe("de");
  model.targetLocale = "fr";
  // The panes are not rebuilt for a switch between two languages, and neither is the dialog.
  expect(model.elementStringsModel).toBeTruthy();
  expect(getStringsMatrix(model)).toBe(stringsMatrix);
  expect(stringsMatrix.columns).toHaveLength(1);
  expect(stringsMatrix.columns[0].name).toBe("fr");
  expect(getStringsRow(stringsMatrix, realQ1.locTitle).cells[0].question.value).toBe("Question 1 fr");
  // The source language drives the text of the merged first cell.
  model.sourceLocale = "fr";
  model.targetLocale = "de";
  expect(getStringsRowItem(getStringsMatrix(model), realQ1.locTitle).locText.renderedHtml).toContain("Question 1 fr");
});

// The target language dropdown of the settings survey and its precomputed counters.
function getTargetChoices(creator: CreatorTester): Array<any> {
  return getSettingsQuestion(creator, "targetLocale").choices;
}
function getTargetProgress(creator: CreatorTester, locale: string): string {
  const choice = getTargetChoices(creator).filter((item: ItemValue) => item.value === locale)[0];
  return !!choice ? getTranslationLocaleProgress(choice) : undefined;
}

test("target language dropdown: every choice carries the translated/total counts of its language", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const total = model.getUsedStringsItems().length;
  expect(total).toBeGreaterThan(0);
  const deProgress = model.getTranslationProgress("de");
  expect(deProgress.translated).toBeGreaterThan(0);
  expect(getTargetProgress(creator, "de")).toBe(deProgress.translated + " / " + total);
  // A language with nothing translated shows no numbers at all - not "0 / n".
  expect(getTargetProgress(creator, "fr")).toBeFalsy();
  // The counters are precomputed on the choices, and the item component renders them; the
  // collapsed dropdown keeps the plain language name.
  expect(getTargetChoices(creator).every((item: ItemValue) => item.component === translationLocaleItemComponentName)).toBeTruthy();
  expect(getSettingsQuestion(creator, "targetLocale").itemComponent).toBeFalsy();
  // The source dropdown carries neither.
  expect(getSettingsQuestion(creator, "sourceLocale").choices
    .every((item: ItemValue) => !item.component && !getTranslationLocaleProgress(item))).toBeTruthy();
});

test("target language dropdown: the languages with translations come first, each group alphabetically", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  creator.survey.getQuestionByName("q2").locTitle.setLocaleText("es", "Pregunta 2");
  model.refreshTargetLocaleChoices();
  const choices = getTargetChoices(creator);
  const started = choices.filter((item: ItemValue) => !!getTranslationLocaleProgress(item));
  const notStarted = choices.filter((item: ItemValue) => !getTranslationLocaleProgress(item));
  expect(started.map((item: ItemValue) => item.value)).toEqual(["de", "es"]);
  // The two groups are not interleaved: every started language comes before every other one.
  expect(choices.indexOf(started[started.length - 1])).toBeLessThan(choices.indexOf(notStarted[0]));
  const isSorted = (items: Array<ItemValue>): boolean =>
    items.every((item, index) => index === 0 || items[index - 1].text.localeCompare(item.text) <= 0);
  expect(isSorted(started)).toBeTruthy();
  expect(isSorted(notStarted)).toBeTruthy();
});

test("target language dropdown: the counts follow the edits, so the list is current when it opens", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const total = model.getUsedStringsItems().length;
  const before = model.getTranslationProgress("de").translated;
  expect(getTargetProgress(creator, "de")).toBe(before + " / " + total);
  // A dropdown locks its visible choices while its popup is shown, so the counts cannot be
  // recomputed on opening - they follow every edit instead. An inline editor edit of the pane...
  const targetSurvey = model.targetSurvey;
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(getTargetProgress(creator, "de")).toBe((before + 1) + " / " + total);
  // ...and an edit made anywhere else in the survey.
  creator.survey.getQuestionByName("q3").locTitle.setLocaleText("de", "Frage 3");
  expect(getTargetProgress(creator, "de")).toBe((before + 2) + " / " + total);
  // The dropdown keeps its value and the panes are untouched.
  expect(getSettingsQuestion(creator, "targetLocale").value).toBe("de");
  expect(model.targetLocale).toBe("de");
  expect(model.targetSurvey).toBe(targetSurvey);
  // A language that gets its first translation joins the front group of the list.
  expect(getTargetProgress(creator, "es")).toBeFalsy();
  creator.survey.getQuestionByName("q2").locTitle.setLocaleText("es", "Pregunta 2");
  expect(getTargetProgress(creator, "es")).toBe("1 / " + total);
  expect(getTargetChoices(creator).slice(0, 2).map((item: ItemValue) => item.value)).toEqual(["de", "es"]);
});

test("element strings dialog: a string the library localizes itself shows its source text and its target placeholder", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{ name: "page1", elements: [{ type: "boolean", name: "b1" }] }]
  });
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("b1"));
  // labelTrue stores nothing in any locale, so it is one of the "all strings" rows.
  model.elementStringsModel.showAllElementStrings = true;
  const stringsMatrix = getStringsMatrix(model);
  const realB1 = <any>creator.survey.getQuestionByName("b1");
  const titleRow = getStringsRowItem(stringsMatrix, realB1.locLabelTrue);
  expect(titleRow).toBeTruthy();
  // The merged first cell shows the property name, as every row does, and the source-locale
  // text the library gives the string below it.
  const labelTrueName = editorLocalization.getPropertyNameInEditor("boolean", "labelTrue");
  expect(titleRow.locText.renderedHtml).toContain("st-element-strings__row-name");
  expect(titleRow.locText.renderedHtml).toContain(labelTrueName);
  expect(titleRow.locText.renderedHtml).toContain("st-element-strings__row-source");
  expect(titleRow.locText.renderedHtml).toContain("Yes");
  // The cell's accessible name reads the two lines as one sentence.
  expect(getStringsRow(stringsMatrix, realB1.locLabelTrue).getAccessbilityText()).toBe(labelTrueName + ", Yes");
  // ... and the target editor offers the target-locale one as its placeholder.
  const cellRow = getStringsRow(stringsMatrix, realB1.locLabelTrue);
  expect(cellRow.cells[0].question.value).toBeFalsy();
  expect(cellRow.cells[0].question.placeholder).toBe("Ja");
  // The source language drives the first cell, as it does for a stored text.
  realB1.locLabelTrue.setLocaleText("fr", "Oui");
  model.sourceLocale = "fr";
  const frRow = getStringsRowItem(getStringsMatrix(model), realB1.locLabelTrue);
  expect(frRow.locText.renderedHtml).toContain("Oui");
  expect(frRow.locText.renderedHtml).toContain(labelTrueName);
});

test("element strings dialog: every row is named by its property, on a question, a page, a panel and the survey", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{
      name: "page1",
      elements: [{ type: "panel", name: "panel1", elements: [{ type: "boolean", name: "b1" }] }]
    }]
  });
  const model = getModel(creator);
  // The name of the first cell of every row of the open dialog, source text dropped.
  const getRowNames = (): Array<string> => getStringsMatrix(model).rows.map((row: any) => {
    const html = row.locText.renderedHtml;
    const index = html.indexOf("</span>");
    return index < 0 ? "" : html.substring(html.indexOf(">") + 1, index);
  });
  const survey = creator.survey;
  const panel = survey.getPanelByName("panel1");
  // The strings the library localizes itself are the "all strings" ones - an element shows them
  // with the filter on, and they are named by their property like a stored string is.
  [survey, survey.pages[0], panel, <any>survey.getQuestionByName("b1")].forEach((element: any) => {
    model.showElementStringsDialog(element);
    model.elementStringsModel.showAllElementStrings = true;
    const names = getRowNames();
    expect(names.length).toBeGreaterThan(0);
    expect(names.filter(name => !name)).toHaveLength(0);
    model.hideElementStringsDialog();
  });
  // Spot checks, one string of the library's own per element kind.
  const expectName = (element: any, type: string, propertyName: string): void => {
    model.showElementStringsDialog(element);
    model.elementStringsModel.showAllElementStrings = true;
    expect(getRowNames()).toContain(editorLocalization.getPropertyNameInEditor(type, propertyName));
    model.hideElementStringsDialog();
  };
  expectName(survey, "survey", "completeText");
  expectName(survey.pages[0], "page", "navigationTitle");
  expectName(panel, "panel", "requiredErrorText");
  expectName(survey.getQuestionByName("b1"), "boolean", "labelFalse");
});

// The progress link of the settings survey: the counts of the target language, the way to the
// next untranslated string and the clear button.
function getProgressQuestion(creator: CreatorTester): QuestionLinkValueModel {
  return <QuestionLinkValueModel>getModel(creator).settingsSurvey.getQuestionByName("translationProgress");
}

test("progress link: shows the target language counts, and nothing without a target language", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const question = getProgressQuestion(creator);
  const progress = model.getTranslationProgress("de");
  expect(progress.translated).toBeGreaterThan(0);
  expect(progress.translated).toBeLessThan(progress.total);
  expect(question.visible).toBeTruthy();
  // The value is the number of translated strings; the link text says it in words.
  expect(question.value).toBe(progress.translated);
  expect(question.linkValueText).toBe(progress.translated + " of " + progress.total + " strings translated");
  expect(question.showClear).toBeTruthy();
  expect(question.isClickable).toBeTruthy();
  // A language nothing is translated into: the counts are shown, but there is nothing to clear -
  // 0 is a value like any other for a link question, so it is the counts that hide the button.
  model.targetLocale = "fr";
  expect(question.visible).toBeTruthy();
  expect(question.value).toBe(0);
  expect(question.showClear).toBeFalsy();
  // No target language - no progress to show.
  model.targetLocale = "";
  expect(question.visible).toBeFalsy();
});

test("progress link: the counts follow every edit, and a fully translated language is not clickable", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const question = getProgressQuestion(creator);
  const total = model.getTranslationProgress("de").total;
  const before = model.getTranslationProgress("de").translated;
  // An inline editor edit of the target pane...
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(question.value).toBe(before + 1);
  expect(question.linkValueText).toBe((before + 1) + " of " + total + " strings translated");
  // ...and an edit made anywhere else in the survey.
  creator.survey.pages[0].locTitle.setLocaleText("de", "Seite 1");
  expect(question.value).toBe(before + 2);
  // Nothing left to go to.
  model.getUsedStringsItems().forEach(item => item.locString.setLocaleText("de", "de text"));
  model.updateTranslationProgress();
  expect(question.value).toBe(total);
  expect(question.isClickable).toBeFalsy();
});

test("progress link: goes to the first untranslated string of the current page, then to the next page that has one", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [
      {
        name: "page1",
        title: { default: "Page 1 title", de: "Seite 1" },
        elements: [
          { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
          { type: "text", name: "q2", title: "Question 2" }
        ]
      },
      {
        name: "page2",
        title: "Page 2 title",
        elements: [{ type: "text", name: "q3", title: "Question 3" }]
      }
    ]
  });
  const model = getModel(creator);
  expect(model.selectedPageName).toBe("page1");
  // q2 is the only string of page1 with no German text - the click opens its strings dialog and
  // stays on the page.
  model.selectFirstUntranslatedString();
  expect(model.selectedPageName).toBe("page1");
  expect(model.elementStringsModel).toBeTruthy();
  expect(model.elementStringsModel.element).toBe(creator.survey.getQuestionByName("q2"));
  // With page1 translated, the click moves to the next page that still has a string left - its
  // title comes before its questions.
  creator.survey.getQuestionByName("q2").locTitle.setLocaleText("de", "Frage 2");
  model.selectFirstUntranslatedString();
  expect(model.selectedPageName).toBe("page2");
  expect(model.elementStringsModel.element).toBe(creator.survey.getPageByName("page2"));
});

test("progress link: puts the input focus into the dialog's editor of the string it goes to", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
          { type: "text", name: "q2", title: "Question 2" }
        ]
      }
    ]
  });
  const model = getModel(creator);
  const realQ2 = creator.survey.getQuestionByName("q2");
  const focused: Array<any> = [];
  // The cells are focused through their input: focus() is a no-op on a question whose
  // survey is not rendered (see Question.focus).
  const originFocusInput = QuestionCommentModel.prototype.focusInputElement;
  QuestionCommentModel.prototype.focusInputElement = function (this: any): void { focused.push(this); };
  try {
    model.selectFirstUntranslatedString();
  } finally {
    QuestionCommentModel.prototype.focusInputElement = originFocusInput;
  }
  expect(model.elementStringsModel.element).toBe(realQ2);
  const row = getStringsRow(getStringsMatrix(model), realQ2.locTitle);
  expect(row).toBeTruthy();
  expect(focused).toEqual([row.cells[row.cells.length - 1].question]);
  // Nothing is rendered here, so the model keeps retrying - closing it drops the request.
  model.hideElementStringsDialog();
});

test("progress link: the clear button drops the language strings after a confirmation and keeps translating it", () => {
  const originalCallback = surveySettings.confirmActionAsync;
  let message = "";
  let confirmResult = false;
  surveySettings.confirmActionAsync = (text, callback) => {
    message = text;
    callback(confirmResult);
    return true;
  };
  try {
    const creator = createSideBySideCreator(stateJSON);
    const model = getModel(creator);
    const question = getProgressQuestion(creator);
    const translated = model.getTranslationProgress("de").translated;
    expect(translated).toBeGreaterThan(0);
    // Cancelled - the language keeps its strings.
    question.doClearClick();
    expect(message).toBe("Are you certain you wish to delete all translated strings for the selected language?");
    expect(question.value).toBe(translated);
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
    // Confirmed - the strings are gone and the language is still the one being translated.
    confirmResult = true;
    question.doClearClick();
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(model.targetLocale).toBe("de");
    expect(question.visible).toBeTruthy();
    expect(question.value).toBe(0);
    // Nothing left to clear.
    expect(question.showClear).toBeFalsy();
    expect(model.targetSurvey).toBeTruthy();
  } finally {
    surveySettings.confirmActionAsync = originalCallback;
  }
});
