import {
  AdaptiveActionContainer, ItemValue, ListModel, QuestionButtonGroupModel, QuestionCheckboxModel, QuestionCommentModel,
  LocalizableString, QuestionDropdownModel, QuestionMatrixDropdownModel, QuestionTextModel, settings as surveySettings, surveyLocalization
} from "survey-core";
import {
  TranslationSideBySide, getTranslationLocaleProgress, translationLocaleItemComponentName
} from "../../src/components/tabs/translation-side-by-side";
import { editorLocalization } from "../../src/editorLocalization";
import { Translation, TranslationBase, TranslationEditor } from "../../src/components/tabs/translation";
import { TranslationDropdownViewModel, translationDropdownComponentName } from "../../src/components/tabs/translation-dropdown";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { StringEditorViewModelBase } from "../../src/components/string-editor";
import { CreatorTester } from "../creator-tester";
import {
  countRootBuilds, createTreeOnceCreator, getSideBySideSnapshot, getTranslationModel, getTranslationPlugin, getTreeOnceJSON
} from "./translation-tree-once-helper";
import { treeOnceBaseline } from "./translation-tree-once-baseline";
import "survey-core/survey.i18n";

const defaultStringRenderer = LocalizableString.defaultRenderer;

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
  expect(getSettingsQuestion(creator, "viewMode").value).toBe("form");
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
  // The CSV actions and the translate dialog are buttons of the side panel in this mode; the
  // multiple-languages mode keeps its toolbar.
  const classicCreator = new CreatorTester({ showTranslationTab: true });
  classicCreator.JSON = JSON.parse(JSON.stringify(sideBySideJSON));
  classicCreator.activeTab = "translation";
  expect(classicCreator.toolbar.getActionById("svc-translation-import").visible).toBeTruthy();
  expect(classicCreator.toolbar.getActionById("svc-translation-export").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-import").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-export").visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-dialog")).toBeFalsy();
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

test("renderers: onSurveyInstanceCreated handlers override the string renderers of the panes", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  const areas: Array<string> = [];
  creator.onSurveyInstanceCreated.add((_, options) => {
    if (options.area === "translation-tab:target-survey") {
      areas.push(options.area);
      options.survey.getRendererForString = (): string => "custom-target-editor";
      options.survey.getRendererContextForString = (): any => "custom-target-context";
    }
    if (options.area === "translation-tab:source-survey") {
      areas.push(options.area);
      options.survey.getRendererForString = (): string => "custom-source-renderer";
    }
  });
  creator.JSON = JSON.parse(JSON.stringify(sideBySideJSON));
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(areas).toEqual(["translation-tab:source-survey", "translation-tab:target-survey"]);
  const srcQuestion = model.sourceSurvey.getQuestionByName("q1");
  const targetQuestion = model.targetSurvey.getQuestionByName("q1");
  expect(model.sourceSurvey.getRendererForString(srcQuestion, "title", undefined)).toBe("custom-source-renderer");
  expect(model.targetSurvey.getRendererForString(targetQuestion, "title", undefined)).toBe("custom-target-editor");
  expect(model.targetSurvey.getRendererContextForString(targetQuestion, targetQuestion.locTitle, undefined)).toBe("custom-target-context");
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
  // The vertical arrangement: each pane has a scrollbar of its own, mirrored by the model.
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide", translationFormViewOrientation: "vertical" });
  creator.JSON = JSON.parse(JSON.stringify(sideBySideJSON));
  creator.activeTab = "translation";
  const model = getModel(creator);
  expect(model.orientation).toBe("vertical");
  expect(model.isScrollMirrorEnabled).toBe(true);
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

// The open dialog's survey is the grid view's table in the "element" layout: the Used / All Strings
// switch, then a one-row matrix per string (String / Source / Target).
function getStringsMatrices(model: TranslationSideBySide): Array<QuestionMatrixDropdownModel> {
  const survey = model.elementStringsSurvey;
  return !!survey ? <Array<QuestionMatrixDropdownModel>>survey.getAllQuestions().filter(q => q.getType() === "matrixdropdown") : [];
}
function getStringsFilter(model: TranslationSideBySide): QuestionButtonGroupModel {
  return model.elementStringsModel.stringsFilterQuestion;
}
// The row of the matrix bound to a real string.
function getStringsRow(model: TranslationSideBySide, locStr: any): any {
  const matrix = getStringsMatrices(model).filter(m => m.rows[0]["translationData"].locString === locStr)[0];
  return !!matrix ? matrix.visibleRows[0] : undefined;
}
// The cells of a row: the String column (an html cell), the source column, and the target one as
// the last cell (the only locale column when the two languages are the same).
function getStringCellText(row: any): string {
  return row.cells[0].question.html;
}
function getSourceCell(row: any): any {
  return row.cells[1].question;
}
function getTargetCell(row: any): any {
  return row.cells[row.cells.length - 1].question;
}

test("element strings dialog: the table over the real question in a survey of its own, three columns, edits that mirror into the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  model.showElementStringsDialog(realMatrix);
  const grid = model.elementStringsModel;
  expect(grid.showAllElementStrings).toBeFalsy();
  // Not the strings survey of the base class: the dialog's survey is its own, the 02 table in the
  // "element" layout.
  expect(grid.stringsSurvey).toBeFalsy();
  expect(grid.stringsHeaderSurvey).toBeFalsy();
  const survey = model.elementStringsSurvey;
  expect(survey).toBe(grid.dialogSurvey);
  expect(survey.pages).toHaveLength(1);
  expect(survey.css.root).toContain("st-translation-table--element");
  // The switch, then a one-row matrix per string; no page groups.
  expect(survey.getAllPanels()).toHaveLength(0);
  expect(survey.getAllQuestions()[0].getType()).toBe("buttongroup");
  const matrices = getStringsMatrices(model);
  expect(matrices.length).toBe(survey.getAllQuestions().length - 1);
  // String / Source / Target - no Question column - under one header row, the first matrix's.
  expect(matrices[0].columns.map(column => column.name)).toEqual(["svc-translation-string", "default", "de"]);
  expect(matrices[0].columns.map(column => column.title))
    .toEqual(["String", "Source: Default (English)", "Target: Deutsch"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  expect(matrices.filter(matrix => matrix.showHeader)).toEqual([matrices[0]]);
  // The column choices are reachable through the dialog only - they are rows of the table,
  // named with the path to the string.
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  const choiceRow = getStringsRow(model, realChoiceLocText);
  expect(choiceRow).toBeTruthy();
  expect(getStringCellText(choiceRow)).toContain("Choices");
  // The source cell holds the source-locale text of the same string, and it is editable, as
  // the grid view's source column is.
  const sourceCell = getSourceCell(choiceRow);
  expect(sourceCell.value).toBe("AA");
  expect(sourceCell.isInputReadOnly).toBeFalsy();
  // The cell is a plain runtime editor - the dialog's survey is not a design-mode one.
  const targetCell = getTargetCell(choiceRow);
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

test("element strings dialog: the Used Strings / All Strings switch is a button group over the remembered filter", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  model.showElementStringsDialog(creator.survey.getQuestionByName("q5"));
  const grid = model.elementStringsModel;
  // Used Strings is the default mode.
  expect(grid.showAllElementStrings).toBeFalsy();
  const filter = getStringsFilter(model);
  expect(filter.getType()).toBe("buttongroup");
  expect(filter.titleLocation).toBe("hidden");
  expect(filter.choices.map(choice => choice.value)).toEqual(["used", "all"]);
  expect(filter.choices.map(choice => choice.text)).toEqual(["Used Strings", "All Strings"]);
  expect(filter.value).toBe("used");
  expect(filter.choices.every(choice => choice.isEnabled)).toBeTruthy();
  const survey = model.elementStringsSurvey;
  const usedCount = getStringsMatrices(model).length;
  const targetPane = model.targetSurvey;
  const sourcePane = model.sourceSurvey;
  // A click on All Strings.
  filter.value = "all";
  // Only the rows are rebuilt - the panes are neither rebuilt nor re-created, and the dialog
  // is the same one, not a re-opened copy of itself.
  expect(model.targetSurvey).toBe(targetPane);
  expect(model.sourceSurvey).toBe(sourcePane);
  expect(model.elementStringsModel).toBe(grid);
  expect(grid.showAllElementStrings).toBeTruthy();
  // The rows are rebuilt inside the shown survey: the dialog keeps rendering it, the switch stays first.
  expect(model.elementStringsSurvey).toBe(survey);
  expect(survey.getAllQuestions()[0]).toBe(filter);
  // The all-strings mode adds the empty localizable properties (description etc.) as rows.
  const allMatrices = getStringsMatrices(model);
  expect(allMatrices.length).toBeGreaterThan(usedCount);
  expect(allMatrices.filter(matrix => matrix.showHeader)).toEqual([allMatrices[0]]);
  expect(allMatrices.every(matrix => !!matrix.rows[0]["translationData"])).toBeTruthy();
  // Switching back.
  filter.value = "used";
  expect(grid.showAllElementStrings).toBeFalsy();
  expect(getStringsMatrices(model)).toHaveLength(usedCount);
  // A switch made through the model shows on the switch.
  grid.showAllElementStrings = true;
  expect(filter.value).toBe("all");
  expect(getStringsMatrices(model).length).toBeGreaterThan(usedCount);
  // The chosen mode is stored: the next element opens with it, and so does the next model
  // (the plugin carries it over a tab switch).
  expect(model.showAllElementStrings).toBeTruthy();
  model.showElementStringsDialog(creator.survey.getQuestionByName("q1"));
  expect(model.elementStringsModel.showAllElementStrings).toBeTruthy();
  expect(getStringsFilter(model).value).toBe("all");
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  expect(getModel(creator).showAllElementStrings).toBeTruthy();
});

test("element strings dialog: the used/all strings switch keeps the cell placeholders", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const realQ1 = creator.survey.getQuestionByName("q1");
  // Reading a row creates its cells, as an open dialog does.
  const titleRow = getStringsRow(model, realQ1.locTitle);
  expect(getSourceCell(titleRow).placeholder).toBe("q1");
  expect(getTargetCell(titleRow).placeholder).toBe("Question 1");
  model.elementStringsModel.showAllElementStrings = true;
  // The switch replaces the rows: the cells of the fresh ones get their placeholder and the
  // string's own editor settings.
  const allTitleRow = getStringsRow(model, realQ1.locTitle);
  expect(getSourceCell(allTitleRow).placeholder).toBe("q1");
  expect(getTargetCell(allTitleRow).placeholder).toBe("Question 1");
  // A single-line string keeps its one-row editor as well.
  expect(getTargetCell(allTitleRow).rows).toBe(1);
  // ... and so do the rows of every switch that follows.
  model.elementStringsModel.showAllElementStrings = false;
  const usedTitleRow = getStringsRow(model, realQ1.locTitle);
  expect(getSourceCell(usedTitleRow).placeholder).toBe("q1");
  expect(getTargetCell(usedTitleRow).placeholder).toBe("Question 1");
  model.elementStringsModel.showAllElementStrings = true;
  const allTitleRowAgain = getStringsRow(model, realQ1.locTitle);
  expect(getSourceCell(allTitleRowAgain).placeholder).toBe("q1");
  expect(getTargetCell(allTitleRowAgain).placeholder).toBe("Question 1");
});

test("element strings dialog: the empty-element fallback selects All Strings, disables Used Strings and is not stored", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  // page2 has no stored strings - its dialog shows all of them and cannot switch back.
  model.showPageStringsDialog(model.targetSurvey.getPageByName("page2"));
  expect(model.elementStringsModel.showAllElementStrings).toBeTruthy();
  const filter = getStringsFilter(model);
  expect(filter.value).toBe("all");
  expect(filter.choices[0].isEnabled).toBeFalsy();
  expect(filter.choices[1].isEnabled).toBeTruthy();
  // Still disabled after the conditions run again (a value change runs them).
  getTargetCell(getStringsRow(model, creator.survey.pages[1].locTitle)).value = "Seite 2";
  expect(filter.choices[0].isEnabled).toBeFalsy();
  expect(model.showAllElementStrings).toBeFalsy();
  // The next element opens in the used-strings mode the user never left.
  model.showPageStringsDialog(model.targetSurvey.getPageByName("page1"));
  expect(model.elementStringsModel.showAllElementStrings).toBeFalsy();
  expect(getStringsFilter(model).value).toBe("used");
  expect(getStringsFilter(model).choices[0].isEnabled).toBeTruthy();
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
  // page1 stores a title - the dialog keeps the used-only default, and Used Strings stays enabled.
  expect(pageGrid.showAllElementStrings).toBeFalsy();
  expect(pageGrid.hasUsedStrings).toBeTruthy();
  pageGrid.dispose();
  // page2 stores no strings - the used-only mode would show an empty table, so the dialog
  // falls back to all strings and Used Strings is disabled.
  const emptyPageGrid = model.createElementStringsModel(creator.survey.pages[1]);
  expect(emptyPageGrid.showAllElementStrings).toBeTruthy();
  expect(emptyPageGrid.root.locItems.map(item => item.name)).toContain("title");
  expect(emptyPageGrid.hasUsedStrings).toBeFalsy();
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
  const titleRow = getStringsRow(model, creator.survey.locTitle);
  expect(titleRow).toBeTruthy();
  getTargetCell(titleRow).value = "Umfragetitel neu";
  expect(creator.survey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
  expect(model.targetSurvey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
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
  // only - the progress "translated/total" instead of an icon. The translated state adds a check
  // after the language icon.
  const translatedAction = getStateAction(target.getQuestionByName("q1"));
  expect(translatedAction).toBeTruthy();
  expect(translatedAction.id).toBe("svc-translate-question");
  expect(translatedAction.iconName).toBe("icon-language");
  expect(translatedAction.markerIconName).toBe("icon-check-16x16");
  expect(translatedAction.css).toContain("svc-translation-state--translated");
  expect(translatedAction.tooltip).toBe("All strings are translated");
  expect(translatedAction.showTitle).toBeFalsy();
  expect(translatedAction.title).toBe("");
  const untranslatedAction = getStateAction(target.getQuestionByName("q2"));
  expect(untranslatedAction.iconName).toBeFalsy();
  expect(untranslatedAction.markerIconName).toBeFalsy();
  expect(untranslatedAction.css).toContain("svc-translation-state--untranslated");
  expect(untranslatedAction.tooltip).toBe("1 strings are not translated");
  expect(untranslatedAction.showTitle).toBeTruthy();
  expect(untranslatedAction.title).toBe("0/1");
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
  expect(noneAction.iconName).toBe("icon-language");
  expect(noneAction.markerIconName).toBeFalsy();
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
  expect(action.title).toBe("0/3");
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
  expect(getStateAction(question).title).toBe("0/4");
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
  expect(surveyAction.title).toBe("0/1");
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
  expect(questionAction.title).toBe("0/1");
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

test("element state indicator: the three action states - the language icon, translated/total, the language icon with a check", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{
      name: "page1",
      elements: [{
        type: "radiogroup", name: "q1", title: { default: "Question 1", de: "Frage 1" },
        choices: [{ value: "a", text: { default: "Apple", de: "Apfel" } }, { value: "b", text: "Banana" }]
      }]
    }]
  });
  const model = getModel(creator);
  const target = model.targetSurvey;
  // Nothing to translate: the page has neither a title nor a description.
  const noneAction = getStateAction(target.getPageByName("page1"));
  expect(noneAction.css).toBe("svc-translation-state svc-translation-state--none");
  expect(noneAction.iconName).toBe("icon-language");
  expect(noneAction.markerIconName).toBeFalsy();
  expect(noneAction.title).toBeFalsy();
  expect(noneAction.showTitle).toBeFalsy();
  // Some strings are untranslated: the progress, translated of total, and no icon at all.
  const question = target.getQuestionByName("q1");
  const action = getStateAction(question);
  expect(action.id).toBe("svc-translate-question");
  expect(action.css).toBe("svc-translation-state svc-translation-state--untranslated");
  expect(action.title).toBe("2/3");
  expect(action.showTitle).toBeTruthy();
  expect(action.hasTitle).toBeTruthy();
  expect(action.iconName).toBeFalsy();
  expect(action.markerIconName).toBeFalsy();
  expect(action.tooltip).toBe("1 strings are not translated");
  // Its width follows the state, so it is never shrunk to its icon or moved into a "more" menu.
  expect(action.disableShrink).toBeTruthy();
  expect(action.disableHide).toBeTruthy();
  // A tertiary-surface action: the white button with the trigger ring, never a warning colour.
  expect(action.appearance).toEqual({ style: "neutral", mode: "tertiary-surface", size: "small", showBorder: true });
  // Everything translated: the language icon followed by the check.
  ItemValue.getItemByValue((<QuestionDropdownModel>creator.survey.getQuestionByName("q1")).choices, "b")
    .locText.setLocaleText("de", "Banane");
  expect(action.css).toBe("svc-translation-state svc-translation-state--translated");
  expect(action.iconName).toBe("icon-language");
  expect(action.markerIconName).toBe("icon-check-16x16");
  expect(action.title).toBeFalsy();
  expect(action.showTitle).toBeFalsy();
  expect(action.tooltip).toBe("All strings are translated");
  // And back: clearing a translation brings the progress back.
  ItemValue.getItemByValue((<QuestionDropdownModel>creator.survey.getQuestionByName("q1")).choices, "a")
    .locText.setLocaleText("de", "");
  expect(action.title).toBe("2/3");
  expect(action.iconName).toBeFalsy();
  expect(action.markerIconName).toBeFalsy();
  // The survey header's action looks the same.
  const surveyAction = target.getTitleToolbar().getActionById("svc-translate-survey");
  expect(surveyAction.appearance).toEqual({ style: "neutral", mode: "tertiary-surface", size: "small", showBorder: true });
});

// The string editor the target pane renders over a pane string.
function getPaneEditorCss(creator: CreatorTester, locStr: any): string {
  return new StringEditorViewModelBase(locStr, creator).className(locStr.renderedHtml);
}

test("untranslated target strings are muted: a title, a description and a choice; an inline edit unmutes them", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        {
          type: "radiogroup", name: "q2", title: "Question 2", description: "Describe it",
          choices: [{ value: "a", text: "Apple" }, { value: "b", text: { default: "Banana", de: "Banane" } }]
        },
        { type: "rating", name: "q3", title: { default: "Question 3", de: "Frage 3" }, rateValues: [1, 2] }
      ]
    }]
  });
  const model = getModel(creator);
  const target = model.targetSurvey;
  const q1 = target.getQuestionByName("q1");
  const q2 = <QuestionDropdownModel>target.getQuestionByName("q2");
  const apple = ItemValue.getItemByValue(q2.choices, "a");
  const banana = ItemValue.getItemByValue(q2.choices, "b");
  // No stored target-language text: the source text is shown, muted.
  expect(model.isTargetStringUntranslated(q2.locTitle)).toBeTruthy();
  expect(model.isTargetStringUntranslated(q2.locDescription)).toBeTruthy();
  expect(model.isTargetStringUntranslated(apple.locText)).toBeTruthy();
  expect(q2.locTitle.renderedHtml).toBe("Question 2");
  expect(getPaneEditorCss(creator, q2.locTitle)).toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, q2.locDescription)).toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, apple.locText)).toContain("svc-string-editor--untranslated");
  // Translated strings are not.
  expect(model.isTargetStringUntranslated(q1.locTitle)).toBeFalsy();
  expect(getPaneEditorCss(creator, q1.locTitle)).not.toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, banana.locText)).not.toContain("svc-string-editor--untranslated");
  // Only the strings the element's action counts are muted: the rating values are not counted, and
  // the rating question is all translated.
  const q3 = target.getQuestionByName("q3");
  expect(model.getElementTranslationState(q3)).toBe("translated");
  q3.visibleRateValues.forEach((item: ItemValue) => {
    expect(model.isTargetStringUntranslated(item.locText)).toBeFalsy();
    expect(getPaneEditorCss(creator, item.locText)).not.toContain("svc-string-editor--untranslated");
  });
  // The source pane is never muted - it shows the texts being translated.
  const sourceQ2 = model.sourceSurvey.getQuestionByName("q2");
  expect(model.isTargetStringUntranslated(sourceQ2.locTitle)).toBeFalsy();
  expect(getPaneEditorCss(creator, sourceQ2.locTitle)).not.toContain("svc-string-editor--untranslated");
  // An inline edit writes the target language and unmutes the string.
  q2.locTitle.text = "Frage 2";
  q2.locDescription.text = "Beschreiben Sie es";
  apple.locText.text = "Apfel";
  const real = <QuestionDropdownModel>creator.survey.getQuestionByName("q2");
  expect(real.locTitle.getLocaleText("de")).toBe("Frage 2");
  expect(real.locDescription.getLocaleText("de")).toBe("Beschreiben Sie es");
  expect(ItemValue.getItemByValue(real.choices, "a").locText.getLocaleText("de")).toBe("Apfel");
  expect(getPaneEditorCss(creator, q2.locTitle)).not.toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, q2.locDescription)).not.toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, apple.locText)).not.toContain("svc-string-editor--untranslated");
  // Clearing the translation mutes it again.
  q2.locTitle.text = "";
  expect(getPaneEditorCss(creator, q2.locTitle)).toContain("svc-string-editor--untranslated");
  // No target language: no target pane, nothing is muted.
  model.targetLocale = "";
  expect(model.isTargetStringUntranslated(model.sourceSurvey.getQuestionByName("q2").locTitle)).toBeFalsy();
});

test("untranslated target strings show the source-language text when the source is not the default language", () => {
  const creator = createSideBySideCreator({
    pages: [{
      name: "page1",
      title: { default: "Page 1", fr: "Page 1 fr" },
      elements: [{
        type: "radiogroup", name: "q1",
        title: { default: "Question 1", fr: "Question 1 fr" },
        description: { default: "Describe it", fr: "Decrivez-le" },
        choices: [{ value: "a", text: { default: "Apple", fr: "Pomme" } }, { value: "b", text: "Banana" }]
      }]
    }]
  });
  const model = getModel(creator);
  model.sourceLocale = "fr";
  model.targetLocale = "de";
  const target = model.targetSurvey;
  const q1 = <QuestionDropdownModel>target.getQuestionByName("q1");
  const apple = ItemValue.getItemByValue(q1.choices, "a");
  const banana = ItemValue.getItemByValue(q1.choices, "b");
  // survey-core alone would fall back to the default language - the pane shows the source.
  expect(q1.locTitle.renderedHtml).toBe("Question 1 fr");
  expect(q1.locDescription.renderedHtml).toBe("Decrivez-le");
  expect(apple.locText.renderedHtml).toBe("Pomme");
  expect(target.getPageByName("page1").locTitle.renderedHtml).toBe("Page 1 fr");
  expect(model.sourceSurvey.getQuestionByName("q1").locTitle.renderedHtml).toBe("Question 1 fr");
  // A string with no source-language text falls back as before.
  expect(banana.locText.renderedHtml).toBe("Banana");
  expect(getPaneEditorCss(creator, q1.locTitle)).toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, q1.locDescription)).toContain("svc-string-editor--untranslated");
  expect(getPaneEditorCss(creator, apple.locText)).toContain("svc-string-editor--untranslated");
  // Focusing and leaving the untranslated string without typing stores nothing.
  const real = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");
  const editor = new StringEditorViewModelBase(<any>q1.locTitle, creator);
  editor.onBlur({ target: { innerText: "Question 1 fr", textContent: "Question 1 fr", innerHTML: "Question 1 fr" } });
  expect(real.locTitle.getLocaleText("de")).toBe("");
  expect(q1.locTitle.getLocaleText("de")).toBe("");
  // Typing writes the target language.
  editor.onBlur({ target: { innerText: "Frage 1", textContent: "Frage 1", innerHTML: "Frage 1" } });
  expect(real.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(real.locTitle.getLocaleText("fr")).toBe("Question 1 fr");
  expect(q1.locTitle.renderedHtml).toBe("Frage 1");
  expect(getPaneEditorCss(creator, q1.locTitle)).not.toContain("svc-string-editor--untranslated");
  // Switching the source language to the default one re-renders the untranslated strings: the
  // rendered text is recomputed on every read, so the notification is what the UI relies on.
  let appleChanges = 0;
  apple.locText.onStringChanged.add(() => appleChanges++);
  model.sourceLocale = "";
  expect(appleChanges).toBeGreaterThan(0);
  expect(apple.locText.renderedHtml).toBe("Apple");
  expect(model.targetSurvey).toBe(target);
});

test("untranslated target strings: a source text added by a text edit is muted and never stored on blur; a dialect target keeps its root-language text", () => {
  const creator = createSideBySideCreator({
    pages: [{
      name: "page1",
      elements: [{
        type: "radiogroup", name: "q1", title: { default: "Question 1", fr: "Question 1 fr", pt: "Pergunta 1" },
        choices: ["a"], showOtherItem: true
      }]
    }]
  });
  const model = getModel(creator);
  model.sourceLocale = "fr";
  model.targetLocale = "de";
  const real = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");
  // A text edit keeps the used-strings tree: the "other" text, shown by its built-in default
  // until now, gets its first stored text in the source language.
  real.locOtherText.setLocaleText("fr", "Autre chose");
  const paneOther = (<QuestionDropdownModel>model.targetSurvey.getQuestionByName("q1")).locOtherText;
  expect(paneOther.renderedHtml).toBe("Autre chose");
  expect(model.isTargetStringUntranslated(paneOther)).toBeTruthy();
  expect(getPaneEditorCss(creator, paneOther)).toContain("svc-string-editor--untranslated");
  new StringEditorViewModelBase(<any>paneOther, creator)
    .onBlur({ target: { innerText: "Autre chose", textContent: "Autre chose", innerHTML: "Autre chose" } });
  expect(real.locOtherText.getLocaleText("de")).toBe("");
  // A regional target shows the text of its root language, as the survey does.
  model.targetLocale = "pt-br";
  const paneTitle = model.targetSurvey.getQuestionByName("q1").locTitle;
  expect(paneTitle.renderedHtml).toBe("Pergunta 1");
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

test("element strings dialog: no auto-translate, even with a machine-translation handler", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(autoTranslateJSON);
    creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
    const model = getModel(creator);
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    const grid = <any>model.elementStringsModel;
    // The side panel's Autotranslate all covers the whole survey; the dialog has no button of its own.
    expect(grid.captionActions).toBeUndefined();
    expect(grid.doMachineTranslation).toBeUndefined();
    const survey = model.elementStringsSurvey;
    const actionIds: Array<string> = [];
    survey.getAllQuestions().forEach(question => question.getTitleActions().forEach(action => actionIds.push(action.id)));
    expect(actionIds).not.toContain("svc-translation-machine");
    expect(dialogs[0].footerToolbar.actions.map((action: any) => action.id)).toEqual(["apply"]);
    expect(model.getSettingsAction("svc-translation-auto-translate-all").visible).toBeTruthy();
  });
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
// A dialog stand-in (see createFakePopup).
function withDialog(fn: (dialogs: Array<any>) => void): void {
  const origin = surveySettings.showDialog;
  const dialogs: Array<any> = [];
  surveySettings.showDialog = (options: any): any => {
    const popup = createFakePopup(options);
    dialogs.push(popup);
    return popup;
  };
  try {
    fn(dialogs);
  } finally {
    surveySettings.showDialog = origin;
  }
}

test("element strings dialog: a modal with the element title, a close button and a single Done", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(inlineBlockJSON);
    const model = getModel(creator);
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(dialogs).toHaveLength(1);
    const options = dialogs[0].options;
    // The dialog renders the model's own survey through the component every UI package registers.
    expect(options.componentName).toBe("survey-widget");
    expect(options.data.model).toBe(model.elementStringsSurvey);
    // The title bar: the element title and the close button.
    expect(options.title).toBe("Question 1");
    expect(options.showCloseButton).toBeTruthy();
    expect(options.cssClass).toContain("st-element-strings-dialog");
    // The edits apply immediately: a single Done, the primary apply action.
    expect(dialogs[0].footerToolbar.actions.map((action: any) => action.id)).toEqual(["apply"]);
    expect(dialogs[0].footerToolbar.actions[0].title).toBe("Done");
    expect(options.onApply()).toBeTruthy();
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
  expect(action.title).toBe("0/1");
  expect(action.iconName).toBeFalsy();
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

test("element strings dialog: a dialog-only string edited in the table does not rebuild the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  model.showElementStringsDialog(realMatrix);
  const survey = model.elementStringsSurvey;
  const targetPane = model.targetSurvey;
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  // The column choice is not rendered by the panes, so it is not a mapped string - and it is
  // still a text change, not a structural one: the panes stay, and so does the open dialog.
  getTargetCell(getStringsRow(model, realChoiceLocText)).value = "AA-de";
  expect(model.targetSurvey).toBe(targetPane);
  expect(model.elementStringsModel).toBeTruthy();
  expect(model.elementStringsSurvey).toBe(survey);
});

test("form view CSV export includes all used locale columns", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.view).toBe("form");
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

test("side-by-side model carries no multiple-languages machinery", () => {
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

test("element strings dialog: the switch follows the creator UI locale, not the target language", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  const choiceTexts = (): Array<string> => getStringsFilter(model).choices.map(choice => choice.locText.renderedHtml);
  // The target language has creator strings of its own - that is what a text resolved in the
  // language being translated into would show.
  const savedDeStrings = editorLocalization.locales["de"];
  editorLocalization.locales["de"] = {
    ed: { translationUsedStrings: "de: used strings", translationShowAllStrings: "de: all strings" }
  };
  try {
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(model.targetSurvey.locale).toBe("de");
    expect(choiceTexts()).toEqual(["Used Strings", "All Strings"]);
    model.showSurveyStringsDialog();
    expect(choiceTexts()).toEqual(["Used Strings", "All Strings"]);
    // The creator UI locale is what they do follow.
    editorLocalization.currentLocale = "de";
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q2"));
    expect(choiceTexts()).toEqual(["de: used strings", "de: all strings"]);
  } finally {
    editorLocalization.currentLocale = "";
    if (savedDeStrings === undefined) {
      delete editorLocalization.locales["de"];
    } else {
      editorLocalization.locales["de"] = savedDeStrings;
    }
  }
});

test("element strings dialog: an inline editor edit lands in the open table", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const survey = model.elementStringsSurvey;
  const realQ1 = creator.survey.getQuestionByName("q1");
  expect(getTargetCell(getStringsRow(model, realQ1.locTitle)).value).toBeFalsy();
  // The inline editor of the target pane writes into the copy, which forwards the text to the
  // real survey - the funnel that refreshes the dialog is closed on that path.
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(realQ1.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(getTargetCell(getStringsRow(model, realQ1.locTitle)).value).toBe("Frage 1");
  // An edit of another element leaves the open dialog alone.
  const data = JSON.stringify(survey.data);
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("Frage 2");
  expect(JSON.stringify(survey.data)).toBe(data);
  // No self-heal rebuild: the panes and the dialog are the same objects.
  expect(model.elementStringsModel).toBeTruthy();
  expect(model.elementStringsSurvey).toBe(survey);
  // The switch keeps its value over the refresh of the cells.
  expect(getStringsFilter(model).value).toBe("used");
});

test("element strings dialog: the cells open with the stored target texts", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const realQ1 = creator.survey.getQuestionByName("q1");
  expect(getTargetCell(getStringsRow(model, realQ1.locTitle)).value).toBe("Frage 1");
  const emptyRow = getStringsRow(model, creator.survey.getQuestionByName("q4").locTitle);
  expect(emptyRow).toBeFalsy();
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q4"));
  const q4Row = getStringsRow(model, creator.survey.getQuestionByName("q4").locTitle);
  // An untranslated target shows the source text, muted: it is the cell placeholder.
  expect(getTargetCell(q4Row).value).toBeFalsy();
  expect(getTargetCell(q4Row).placeholder).toBe("Question 4");
  // ... and the source column holds the text it is translated from.
  expect(getSourceCell(q4Row).value).toBe("Question 4");
});

test("element strings dialog: the String column names the string, the source column holds its source text", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const row = getStringsRow(model, creator.survey.getQuestionByName("q1").locTitle);
  expect(row).toBeTruthy();
  // A plain property name, as the grid view's rows carry - the source text is a cell of its own.
  expect(getStringCellText(row)).toBe("Question title");
  expect(getSourceCell(row).value).toBe("Question 1");
  // The cell's accessible name is the row title, as in any matrix.
  expect(getTargetCell(row).a11y_input_ariaLabel).toContain("Question title");
});

test("element strings dialog: a string the source language has nothing for keeps its name and an empty source cell", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "<b>Q1</b>" }] }]
  });
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const realQ1 = creator.survey.getQuestionByName("q1");
  // The source text is a cell value, never markup - it is not turned into html anywhere.
  expect(getSourceCell(getStringsRow(model, realQ1.locTitle)).value).toBe("<b>Q1</b>");
  model.elementStringsModel.showAllElementStrings = true;
  const descriptionRow = getStringsRow(model, realQ1.locDescription);
  expect(descriptionRow).toBeTruthy();
  expect(getStringCellText(descriptionRow)).toBe("Question description");
  expect(getSourceCell(descriptionRow).value).toBeFalsy();
});

test("element strings dialog: the open table follows a locale switch", () => {
  const creator = createSideBySideCreator(inlineBlockJSON);
  const model = getModel(creator);
  const realQ1 = creator.survey.getQuestionByName("q1");
  realQ1.locTitle.setLocaleText("fr", "Question 1 fr");
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const survey = model.elementStringsSurvey;
  const columnNames = (): Array<string> => getStringsMatrices(model)[0].columns.map(column => column.name);
  expect(columnNames()).toEqual(["svc-translation-string", "default", "de"]);
  model.targetLocale = "fr";
  // The panes are not rebuilt for a switch between two languages, and neither is the dialog.
  expect(model.elementStringsModel).toBeTruthy();
  expect(model.elementStringsSurvey).toBe(survey);
  expect(columnNames()).toEqual(["svc-translation-string", "default", "fr"]);
  expect(getTargetCell(getStringsRow(model, realQ1.locTitle)).value).toBe("Question 1 fr");
  // The source language is a column of its own, so a source switch rebuilds the columns too.
  model.sourceLocale = "fr";
  model.targetLocale = "de";
  expect(columnNames()).toEqual(["svc-translation-string", "fr", "de"]);
  const columns = getStringsMatrices(model)[0].columns;
  expect(columns[1].title).toBe("Source: Français"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  expect(columns[2].title).toBe("Target: Deutsch"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  expect(getSourceCell(getStringsRow(model, realQ1.locTitle)).value).toBe("Question 1 fr");
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
  const realB1 = <any>creator.survey.getQuestionByName("b1");
  const row = getStringsRow(model, realB1.locLabelTrue);
  expect(row).toBeTruthy();
  // The String column names the string by its property, as every row does...
  const labelTrueName = editorLocalization.getPropertyNameInEditor("boolean", "labelTrue");
  expect(getStringCellText(row)).toBe(labelTrueName);
  // ... the source column offers the text the library gives the string (stored nowhere, so it
  // is a placeholder, exactly as it is in the grid view) ...
  expect(getSourceCell(row).value).toBeFalsy();
  expect(getSourceCell(row).placeholder).toBe("Yes");
  // ... and the untranslated target shows that source text, muted, as the grid view does.
  expect(getTargetCell(row).value).toBeFalsy();
  expect(getTargetCell(row).placeholder).toBe("Yes");
  // The source column follows the source language, as it does for a stored text.
  realB1.locLabelTrue.setLocaleText("fr", "Oui");
  model.sourceLocale = "fr";
  expect(getSourceCell(getStringsRow(model, realB1.locLabelTrue)).value).toBe("Oui");
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
  // The String cell of every row of the open dialog - the name of the string it edits.
  const getRowNames = (): Array<string> => getStringsMatrices(model).map(matrix => getStringCellText(matrix.visibleRows[0]));
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

// The side panel below the language dropdowns: the progress text, the Autotranslate all / Translate
// manually / Clear all buttons and the CSV actions. The buttons are the footer actions of two panels.
function getProgressText(creator: CreatorTester): string {
  return (<any>getModel(creator).settingsSurvey.getQuestionByName("translationProgress")).html;
}
function getPanelAction(creator: CreatorTester, id: string): any {
  return getModel(creator).getSettingsAction(id);
}
// A dialog stand-in: what showDialog returns, with survey-core's footer actions ([cancel, apply]).
function createFakePopup(options: any): any {
  const actions: Array<any> = [{ id: "cancel", title: "Cancel" }, { id: "apply", title: "Apply" }];
  return {
    options: options,
    locale: "",
    footerToolbar: { actions: actions, getActionById: (id: string): any => actions.filter(action => action.id === id)[0] },
    model: { hide: (): void => { if (!!options.onHide) options.onHide(); } }
  };
}
// The texts of a showConfirmDialog alert: the icon, then the title and the message.
function getAlertContent(popup: any): { iconName: string, iconClass: string, title: string, message: string } {
  const elements = popup.options.data.model.elements;
  const texts = elements[1].componentData.model.elements;
  return {
    iconName: elements[0].componentData.iconName,
    iconClass: elements[0].componentData.className,
    title: texts[0].componentData.locStr.textOrHtml,
    message: texts[1].componentData.locStr.textOrHtml
  };
}

test("side panel: the progress text is plain text with the target language counts, and empty without a target language", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const question = model.settingsSurvey.getQuestionByName("translationProgress");
  const progress = model.getTranslationProgress("de");
  expect(progress.translated).toBeGreaterThan(0);
  expect(progress.translated).toBeLessThan(progress.total);
  // An html question: no link, no value, no clear button - nothing to click.
  expect(question.getType()).toBe("html");
  expect(question.isValueEmpty(question.value)).toBeTruthy();
  expect(getProgressText(creator)).toBe(progress.translated + " of " + progress.total + " strings translated");
  expect(model.translationProgressText).toBe(getProgressText(creator));
  // A language nothing is translated into.
  model.targetLocale = "fr";
  expect(getProgressText(creator)).toBe("0 of " + progress.total + " strings translated");
  // No target language - no progress to show, and the buttons stay in place.
  model.targetLocale = "";
  expect(getProgressText(creator)).toBe("");
  expect(question.isVisible).toBeTruthy();
  expect(model.settingsSurvey.getPanelByName("translationButtons").isVisible).toBeTruthy();
});

test("side panel: the progress text follows every edit", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  const total = model.getTranslationProgress("de").total;
  const before = model.getTranslationProgress("de").translated;
  // An inline editor edit of the target pane...
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(getProgressText(creator)).toBe((before + 1) + " of " + total + " strings translated");
  // ...and an edit made anywhere else in the survey.
  creator.survey.pages[0].locTitle.setLocaleText("de", "Seite 1");
  expect(getProgressText(creator)).toBe((before + 2) + " of " + total + " strings translated");
});

test("side panel: the panels, the buttons and their look", () => {
  const creator = createSideBySideCreator(stateJSON);
  const survey = getModel(creator).settingsSurvey;
  expect(survey.getAllQuestions().map(q => q.name)).toEqual(["viewMode", "sourceLocale", "targetLocale", "translationProgress", "translationActionsCaption"]);
  expect(survey.getQuestionByName("viewMode").title).toBe("View");
  expect((<any>survey.getQuestionByName("viewMode")).choices.map((item: ItemValue) => item.text)).toEqual(["Form", "Grid"]);
  expect((<any>survey.getQuestionByName("translationActionsCaption")).html).toBe("Actions");
  const buttons = (<any>survey.getPanelByName("translationButtons")).getFooterToolbar();
  const csv = (<any>survey.getPanelByName("translationActions")).getFooterToolbar();
  expect(buttons.actions.map((action: any) => action.id)).toEqual(["svc-translation-auto-translate-all", "svc-translation-translate-manually", "svc-translation-clear-all"]);
  expect(csv.actions.map((action: any) => action.id)).toEqual(["svc-translation-import-csv", "svc-translation-download-csv"]);
  // Stacked by css, never measured into a "more" menu.
  expect(buttons instanceof AdaptiveActionContainer).toBeFalsy();
  expect(buttons.actions.map((action: any) => action.title)).toEqual(["Auto-translate All", "Translate manually", "Clear all"]);
  expect(csv.actions.map((action: any) => action.title)).toEqual(["Import from CSV", "Download as CSV"]);
  expect(csv.actions.map((action: any) => action.iconName)).toEqual(["icon-import-24x24", "icon-download-24x24"]);
  // survey-core's medium actions: primary, brand secondary, neutral secondary.
  const css = (id: string): string => getPanelAction(creator, id).getActionBarItemCss();
  expect(css("svc-translation-auto-translate-all")).toContain("sd-action--brand sd-action--primary sd-action--medium");
  expect(css("svc-translation-translate-manually")).toContain("sd-action--brand sd-action--secondary sd-action--medium");
  expect(css("svc-translation-clear-all")).toContain("sd-action--neutral sd-action--secondary sd-action--medium");
  expect(css("svc-translation-import-csv")).toContain("sd-action--neutral sd-action--secondary sd-action--medium");
});

test("side panel: Autotranslate all is shown with a machine-translation handler only, and enabled while something is left to translate", () => {
  const creator = createSideBySideCreator(stateJSON);
  expect(getPanelAction(creator, "svc-translation-auto-translate-all").visible).toBeFalsy();
  const mtCreator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  mtCreator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  mtCreator.JSON = JSON.parse(JSON.stringify(stateJSON));
  mtCreator.activeTab = "translation";
  const model = getModel(mtCreator);
  const action = getPanelAction(mtCreator, "svc-translation-auto-translate-all");
  expect(action.visible).toBeTruthy();
  expect(action.enabled).toBeTruthy();
  // No target language selected.
  model.targetLocale = "";
  expect(action.enabled).toBeFalsy();
  model.targetLocale = "de";
  expect(action.enabled).toBeTruthy();
  // Nothing left to translate.
  action.action();
  expect(model.getTranslationProgress("de").translated).toBe(model.getTranslationProgress("de").total);
  expect(action.enabled).toBeFalsy();
});

test("side panel: Autotranslate all sends the untranslated used strings from the source language and writes them in one undo step", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  const calls: Array<any> = [];
  creator.onMachineTranslate.add((_, options) => {
    calls.push({ from: options.fromLocale, to: options.toLocale, strings: [].concat(options.strings) });
    options.callback(options.strings.map(str => "de: " + str));
  });
  creator.JSON = JSON.parse(JSON.stringify(stateJSON));
  creator.activeTab = "translation";
  const model = getModel(creator);
  const total = model.getTranslationProgress("de").total;
  getPanelAction(creator, "svc-translation-auto-translate-all").action();
  expect(calls).toHaveLength(1);
  expect(calls[0].from).toBe("en");
  expect(calls[0].to).toBe("de");
  // The used strings with no German text: the completed page text, page1's title, q2's title and q3,
  // translated from its name. q1, page2 and q4 already have one.
  expect(calls[0].strings.sort()).toEqual(["Page 1 title", "Question 2", "Thank you", "q3"]);
  const q2 = creator.survey.getQuestionByName("q2");
  expect(q2.locTitle.getLocaleText("de")).toBe("de: Question 2");
  expect(creator.survey.locCompletedHtml.getLocaleText("de")).toBe("de: Thank you");
  // The counts, the title actions and the target pane follow.
  expect(getProgressText(creator)).toBe(total + " of " + total + " strings translated");
  expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("q2"))).toBe("translated");
  expect(model.targetSurvey.getQuestionByName("q2").locTitle.renderedHtml).toBe("de: Question 2");
  // One undo takes every write back.
  creator.undo();
  expect(q2.locTitle.getLocaleText("de")).toBeFalsy();
  expect(creator.survey.locCompletedHtml.getLocaleText("de")).toBeFalsy();
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(model.targetSurvey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBeFalsy();
});

test("side panel: Autotranslate all from a non-default source language, in the grid view", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.translationSideBySideView = "grid";
  const calls: Array<any> = [];
  creator.onMachineTranslate.add((_, options) => {
    calls.push({ from: options.fromLocale, to: options.toLocale, strings: [].concat(options.strings) });
    options.callback(options.strings.map(str => "fr: " + str));
  });
  creator.JSON = JSON.parse(JSON.stringify(stateJSON));
  creator.activeTab = "translation";
  const model = getModel(creator);
  model.targetLocale = "fr";
  model.sourceLocale = "de";
  getPanelAction(creator, "svc-translation-auto-translate-all").action();
  expect(calls[0].from).toBe("de");
  expect(calls[0].to).toBe("fr");
  expect(calls[0].strings.indexOf("Frage 1")).toBeGreaterThan(-1);
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("fr")).toBe("fr: Frage 1");
  // The grid's cells show the written texts.
  const matrix = <QuestionMatrixDropdownModel>model.stringsSurvey.getAllQuestions()
    .filter((q: any) => Array.isArray(q.rows) && q.rows.length > 0 && q.rows[0]["translationData"].locString === creator.survey.getQuestionByName("q1").locTitle)[0];
  expect(matrix.value[matrix.rows[0].value].fr).toBe("fr: Frage 1");
});

test("side panel: Translate manually is enabled while there is a target language other than the source one", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const action = getPanelAction(creator, "svc-translation-translate-manually");
  expect(action.visible).toBeTruthy();
  expect(model.targetLocale).toBe("de");
  expect(action.enabled).toBeTruthy();
  model.targetLocale = "";
  expect(action.enabled).toBeFalsy();
  model.targetLocale = "fr";
  expect(action.enabled).toBeTruthy();
  model.sourceLocale = "fr";
  expect(action.enabled).toBeFalsy();
  model.sourceLocale = "";
  expect(action.enabled).toBeTruthy();
  creator.readOnly = true;
  expect(action.enabled).toBeFalsy();
  creator.readOnly = false;
  expect(action.enabled).toBeTruthy();
  // Re-activation creates a new model with buttons of its own.
  creator.activeTab = "designer";
  creator.activeTab = "translation";
  const newModel = getModel(creator);
  expect(newModel).not.toBe(model);
  newModel.targetLocale = "";
  expect(getPanelAction(creator, "svc-translation-translate-manually").enabled).toBeFalsy();
});

test("side panel: Clear all is enabled while the target language has a text; the CSV actions follow the read-only state", () => {
  const creator = createSideBySideCreator({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] }]
  });
  const model = getModel(creator);
  const clearAll = getPanelAction(creator, "svc-translation-clear-all");
  // No target language.
  expect(clearAll.enabled).toBeFalsy();
  model.targetLocale = "de";
  // Nothing translated yet.
  expect(clearAll.enabled).toBeFalsy();
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(clearAll.enabled).toBeTruthy();
  const importCsv = getPanelAction(creator, "svc-translation-import-csv");
  const downloadCsv = getPanelAction(creator, "svc-translation-download-csv");
  expect(importCsv.enabled).toBeTruthy();
  expect(downloadCsv.enabled).not.toBe(false);
  creator.readOnly = true;
  expect(clearAll.enabled).toBeFalsy();
  expect(importCsv.enabled).toBeFalsy();
  expect(downloadCsv.enabled).not.toBe(false);
});

test("side panel: the CSV actions export and import every locale, as the toolbar actions did", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  let exported = false;
  let imported = false;
  model.exportToCSVFileUI = (): void => { exported = true; };
  model.importFromCSVFileDOM = (): void => { imported = true; };
  getPanelAction(creator, "svc-translation-download-csv").action();
  getPanelAction(creator, "svc-translation-import-csv").action();
  expect(exported).toBeTruthy();
  expect(imported).toBeTruthy();
});

test("side panel: Clear all shows the danger alert, clears only the target language on apply and nothing on cancel", () => {
  withDialog(dialogs => {
    const json = JSON.parse(JSON.stringify(stateJSON));
    json.pages[0].elements[0].title.fr = "Question 1 fr";
    const creator = createSideBySideCreator(json);
    const model = getModel(creator);
    const q1 = creator.survey.getQuestionByName("q1");
    const translated = model.getTranslationProgress("de").translated;
    expect(translated).toBeGreaterThan(0);
    getPanelAction(creator, "svc-translation-clear-all").action();
    expect(dialogs).toHaveLength(1);
    const alert = getAlertContent(dialogs[0]);
    expect(alert.iconName).toBe("icon-delete-24x24");
    expect(alert.iconClass).toContain("svc-creator-confirm-dialog__icon--danger");
    expect(alert.title).toBe("Clear all translations?");
    expect(alert.message).toBe("You will not be able to restore it");
    expect(dialogs[0].options.showCloseButton).toBeFalsy();
    const apply = dialogs[0].footerToolbar.getActionById("apply");
    const cancel = dialogs[0].footerToolbar.getActionById("cancel");
    expect(apply.title).toBe("Clear");
    expect(apply.appearance.style).toBe("alert");
    expect(cancel.title).toBe("Cancel");
    // Cancelled - the language keeps its strings.
    dialogs[0].options.onCancel();
    expect(q1.locTitle.getLocaleText("de")).toBe("Frage 1");
    expect(model.getTranslationProgress("de").translated).toBe(translated);
    // Applied - the German strings are gone, the French ones stay, and German is still the target.
    getPanelAction(creator, "svc-translation-clear-all").action();
    expect(dialogs[1].options.onApply()).toBeTruthy();
    expect(q1.locTitle.getLocaleText("de")).toBeFalsy();
    expect(creator.survey.getPageByName("page2").locTitle.getLocaleText("de")).toBeFalsy();
    expect(q1.locTitle.getLocaleText("fr")).toBe("Question 1 fr");
    expect(model.targetLocale).toBe("de");
    expect(model.targetSurvey).toBeTruthy();
    expect(getProgressText(creator)).toBe("0 of " + model.getTranslationProgress("de").total + " strings translated");
    expect(getPanelAction(creator, "svc-translation-clear-all").enabled).toBeFalsy();
    // One undo brings the German strings back.
    creator.undo();
    expect(q1.locTitle.getLocaleText("de")).toBe("Frage 1");
  });
});

// The "Untranslated strings" dialog, opened by Translate manually.
function getDialogMatrices(survey: any): Array<QuestionMatrixDropdownModel> {
  return survey.getAllQuestions().filter((q: any) => Array.isArray(q.rows) && q.rows.length > 0 && !!q.rows[0]["translationData"]);
}
function getDialogLocStrings(survey: any): Array<any> {
  return getDialogMatrices(survey).map(matrix => matrix.rows[0]["translationData"].locString);
}

test("Untranslated strings dialog: the survey-widget over the table, its title, close button and a single Done", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(stateJSON);
    const model = getModel(creator);
    getPanelAction(creator, "svc-translation-translate-manually").action();
    expect(dialogs).toHaveLength(1);
    const options = dialogs[0].options;
    expect(options.componentName).toBe("survey-widget");
    expect(options.data.model).toBe(model.untranslatedStringsModel.stringsSurvey);
    expect(options.title).toBe("Untranslated strings");
    expect(options.showCloseButton).toBeTruthy();
    expect(options.cssClass).toContain("st-untranslated-strings-dialog");
    // The edits are written at once: no cancel, a single Done - the primary apply action.
    expect(dialogs[0].footerToolbar.actions.map((action: any) => action.id)).toEqual(["apply"]);
    expect(dialogs[0].footerToolbar.actions[0].title).toBe("Done");
    // The table of the grid view: groups by page, Question / String / Source / Target.
    const survey = options.data.model;
    expect(survey.css.root).toContain("st-translation-table--pages");
    // Closing it disposes the model.
    expect(options.onApply()).toBeTruthy();
    dialogs[0].model.hide();
    expect(model.untranslatedStringsModel).toBeFalsy();
  });
});

test("Untranslated strings dialog: exactly the untranslated strings, which stay after editing; read-only Source", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(stateJSON);
    const model = getModel(creator);
    model.showUntranslatedStringsDialog();
    const dialogModel = model.untranslatedStringsModel;
    const survey = dialogModel.stringsSurvey;
    const real = creator.survey;
    // The strings the old dialog listed: the used strings without a German text, on every page.
    const expected = model.getUsedStringsItems().filter(item => !item.locString.getLocaleText("de")).map(item => item.locString);
    expect(dialogModel.stringsTable.rowItems.map(item => item.locString)).toEqual(expected);
    expect(expected).toContain(real.getQuestionByName("q2").locTitle);
    expect(expected).not.toContain(real.getQuestionByName("q1").locTitle);
    // The groups start collapsed, except the first one that has rows.
    expect(dialogModel.stringsTable.pageNames).toEqual(["page1"]);
    expect(dialogModel.stringsTable.isGroupExpanded("page1")).toBeTruthy();
    const matrices = getDialogMatrices(survey);
    const q2Matrix = matrices.filter(m => m.rows[0]["translationData"].locString === real.getQuestionByName("q2").locTitle)[0];
    const cells = q2Matrix.visibleRows[0].cells;
    // Question, String, Source (plain text) and Target (the only editor).
    expect(cells.map(cell => cell.question.getType())).toEqual(["html", "html", "html", "comment"]);
    expect((<any>cells[2].question).html).toBe("Question 2");
    // The untranslated target shows the source text, muted.
    expect((<QuestionCommentModel>cells[3].question).placeholder).toBe("Question 2");
    // An edit is written at once; the row stays, the panes and the counts follow.
    cells[3].question.value = "Frage 2";
    expect(real.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("Frage 2");
    expect(getDialogLocStrings(survey)).toContain(real.getQuestionByName("q2").locTitle);
    expect(dialogModel.stringsTable.getGroupCountText("page1")).toBe("1/" + expected.length);
    expect(model.targetSurvey.getQuestionByName("q2").locTitle.renderedHtml).toBe("Frage 2");
    expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("q2"))).toBe("translated");
    expect(getProgressText(creator)).toBe(model.getTranslationProgress("de").translated + " of " + model.getTranslationProgress("de").total + " strings translated");
    // Done: the title actions are current.
    dialogs[0].options.onApply();
    dialogs[0].model.hide();
    expect(model.getElementTranslationState(model.targetSurvey.getQuestionByName("q2"))).toBe("translated");
  });
});

test("Untranslated strings dialog: the first group with rows is the expanded one; a page scope of the grid does not narrow it", () => {
  const json = {
    locale: "de",
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] },
      { name: "page2", elements: [{ type: "text", name: "q2", title: "Q2" }] },
      { name: "page3", elements: [{ type: "text", name: "q3", title: "Q3" }] }
    ]
  };
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.translationSideBySideView = "grid";
  creator.JSON = json;
  creator.activeTab = "translation";
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page3");
  model.showUntranslatedStringsDialog();
  const table = model.untranslatedStringsModel.stringsTable;
  expect(table.pageNames).toEqual(["page2", "page3"]);
  expect(table.isGroupExpanded("page2")).toBeTruthy();
  expect(table.isGroupExpanded("page3")).toBeFalsy();
  model.hideUntranslatedStringsDialog();
  expect(model.untranslatedStringsModel).toBeFalsy();
});

test("Untranslated strings dialog: a fully translated survey says so; a locale switch closes the dialog", () => {
  const creator = createSideBySideCreator({
    locale: "de",
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] }]
  });
  const model = getModel(creator);
  model.showUntranslatedStringsDialog();
  const survey = model.untranslatedStringsModel.stringsSurvey;
  expect(getDialogMatrices(survey)).toHaveLength(0);
  expect((<any>survey.getQuestionByName("svc-translation-no-strings")).html).toBe("No strings to translate. Please change the filter.");
  model.targetLocale = "fr";
  expect(model.untranslatedStringsModel).toBeFalsy();
});

test("Untranslated strings dialog: the same strings the multiple-languages dialog lists", () => {
  const json = {
    locale: "de",
    completedHtml: "Thank you",
    pages: [
      {
        name: "page1",
        title: "Page 1",
        elements: [
          { type: "checkbox", name: "q1", title: { default: "Q1", de: "F1" }, showOtherItem: true, choices: [1, "item2", { value: "item3", text: { default: "Item 3", de: "Element 3" } }] },
          {
            type: "matrixdropdown", name: "q2", rows: ["row1"],
            columns: [{ name: "col1", title: "Column 1", cellType: "dropdown", choices: ["a", "b"] }]
          },
          { type: "text", name: "q3", validators: [{ type: "numeric", text: "Enter a number" }] },
          { type: "boolean", name: "q4", labelTrue: "Yes!" }
        ]
      },
      { name: "page2", description: "Page 2 description", elements: [{ type: "panel", name: "panel1", title: "Panel 1", elements: [{ type: "comment", name: "q5" }] }] }
    ]
  };
  const creator = createSideBySideCreator(json);
  const model = getModel(creator);
  model.showUntranslatedStringsDialog();
  const editor = new TranslationEditor(creator.survey, "de", creator, model.translationStringVisibilityCallback, model);
  try {
    const expected = editor.translation.root.allLocItems.map(item => item.locString);
    const actual = model.untranslatedStringsModel.stringsTable.rowItems.map(item => item.locString);
    expect(actual.length).toBeGreaterThan(10);
    expect(actual.length).toBe(expected.length);
    expect(expected.every(locStr => actual.indexOf(locStr) > -1)).toBeTruthy();
  } finally {
    editor.dispose();
    model.hideUntranslatedStringsDialog();
  }
});

test("Untranslated strings dialog: closes when the survey changes its structure or is replaced", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator(stateJSON);
    const model = getModel(creator);
    model.showUntranslatedStringsDialog();
    // A text change elsewhere keeps it open.
    creator.survey.getQuestionByName("q2").locTitle.setLocaleText("de", "Frage 2");
    expect(model.untranslatedStringsModel).toBeTruthy();
    // An element added (a collaborator, an undo): its rows are the strings of the survey as it was.
    const dialogModel = model.untranslatedStringsModel;
    creator.survey.pages[1].addNewQuestion("text", "q9");
    expect(model.untranslatedStringsModel).toBeFalsy();
    expect(dialogModel.isDisposed).toBeTruthy();
    expect(dialogs).toHaveLength(1);
    // A new survey.
    model.showUntranslatedStringsDialog();
    expect(model.untranslatedStringsModel).toBeTruthy();
    creator.JSON = JSON.parse(JSON.stringify(stateJSON));
    expect(model.untranslatedStringsModel).toBeFalsy();
  });
});

test("side panel: Autotranslate all is disabled when there is nothing it could send, and while a request is pending", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  const requests: Array<any> = [];
  creator.onMachineTranslate.add((_, options) => { requests.push(options); });
  creator.JSON = JSON.parse(JSON.stringify(stateJSON));
  creator.activeTab = "translation";
  const model = getModel(creator);
  const action = getPanelAction(creator, "svc-translation-auto-translate-all");
  // A source language the survey has no texts in: nothing to translate from.
  model.targetLocale = "fr";
  model.sourceLocale = "es";
  expect(model.getTranslationProgress("fr").translated).toBe(0);
  expect(action.enabled).toBeFalsy();
  model.sourceLocale = "";
  expect(action.enabled).toBeTruthy();
  // A pending request: a second click sends nothing.
  action.action();
  expect(requests).toHaveLength(1);
  expect(action.enabled).toBeFalsy();
  action.action();
  expect(requests).toHaveLength(1);
  // The answer releases it - also an answer with no result.
  requests[0].callback(undefined);
  expect(action.enabled).toBeTruthy();
  // A survey replaced while a request is pending gets no writes.
  action.action();
  const oldQ2 = creator.survey.getQuestionByName("q2");
  creator.JSON = JSON.parse(JSON.stringify(stateJSON));
  requests[1].callback(requests[1].strings.map((str: string) => "fr: " + str));
  expect(oldQ2.locTitle.getLocaleText("fr")).toBeFalsy();
  expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("fr")).toBeFalsy();
});

test("Untranslated strings dialog: an undo while it is open reaches its cells", () => {
  withDialog(() => {
    const creator = createSideBySideCreator(stateJSON);
    const model = getModel(creator);
    model.showUntranslatedStringsDialog();
    const survey = model.untranslatedStringsModel.stringsSurvey;
    const q2Title = creator.survey.getQuestionByName("q2").locTitle;
    const matrix = getDialogMatrices(survey).filter(m => m.rows[0]["translationData"].locString === q2Title)[0];
    matrix.visibleRows[0].cells[3].question.value = "Frage 2";
    expect(q2Title.getLocaleText("de")).toBe("Frage 2");
    creator.undo();
    expect(q2Title.getLocaleText("de")).toBeFalsy();
    expect(matrix.value[matrix.rows[0].value]?.de).toBeFalsy();
    model.hideUntranslatedStringsDialog();
  });
});

test("orientation: the panes are arranged horizontally by default and vertically on demand", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.orientation).toBe("horizontal");
  expect(model.sideBySideRootCss).toBe("st-side-by-side");

  const verticalCreator = new CreatorTester({
    showTranslationTab: true, translationMode: "sideBySide", translationFormViewOrientation: "vertical"
  });
  verticalCreator.JSON = JSON.parse(JSON.stringify(sideBySideJSON));
  verticalCreator.activeTab = "translation";
  const verticalModel = getModel(verticalCreator);
  expect(verticalModel.orientation).toBe("vertical");
  expect(verticalModel.sideBySideRootCss).toBe("st-side-by-side st-side-by-side--vertical");
  // No target language - the source pane takes the whole surface in both arrangements.
  verticalModel.targetLocale = "";
  expect(verticalModel.targetSurvey).toBeFalsy();
  expect(verticalModel.sideBySideRootCss).toBe("st-side-by-side st-side-by-side--vertical st-side-by-side--no-target");
});

test("horizontal orientation attaches no scroll mirror; the vertical one does", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.orientation).toBe("horizontal");
  expect(model.isScrollMirrorEnabled).toBe(false);
  const source = document.createElement("div");
  const target = document.createElement("div");
  model.setSourceScrollElement(source);
  model.setTargetScrollElement(target);
  source.scrollTop = 100;
  source.dispatchEvent(new Event("scroll"));
  expect(target.scrollTop).toBe(0);
  target.scrollTop = 40;
  target.dispatchEvent(new Event("scroll"));
  expect(source.scrollTop).toBe(100);

  // Switching the arrangement attaches the mirror to the registered elements - and detaches it again.
  model.orientation = "vertical";
  expect(model.isScrollMirrorEnabled).toBe(true);
  source.scrollTop = 70;
  source.dispatchEvent(new Event("scroll"));
  expect(target.scrollTop).toBe(70);
  model.orientation = "horizontal";
  source.scrollTop = 20;
  source.dispatchEvent(new Event("scroll"));
  expect(target.scrollTop).toBe(70);
  creator.activeTab = "designer";
});

// The survey the row-height tests render: a panel with a title row, a panel without
// translatable strings (no title row in either pane) and enough questions for lazy rows.
const rowPairsJSON = {
  locale: "de",
  title: { default: "Survey", de: "Umfrage" },
  description: "Survey description",
  pages: [
    {
      name: "page1",
      title: "Page 1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "text", name: "q2" },
        { type: "panel", name: "panel1", title: "Panel 1", elements: [{ type: "text", name: "q3" }] },
        { type: "panel", name: "panel2", elements: [{ type: "text", name: "q4" }] },
        { type: "text", name: "q5" },
        { type: "text", name: "q6" },
        { type: "text", name: "q7" }
      ]
    },
    { name: "page2", elements: [{ type: "text", name: "q8", title: "Question 8" }] }
  ]
};
function createRowNode(className: string, children: Array<string> = []): HTMLElement {
  const node = document.createElement("div");
  node.className = className;
  children.forEach(child => {
    const childNode = document.createElement("div");
    childNode.className = child;
    node.appendChild(childNode);
  });
  document.body.appendChild(node);
  return node;
}
// Plays the render hooks of a pane the way a UI package does: every question of the current
// page, the page itself, the panels and (on the first page) the survey header.
function renderPane(survey: any): void {
  const page = survey.currentPage;
  if (survey.pages.indexOf(page) === 0) {
    survey.afterRenderHeader(createRowNode("sd-header", ["sd-title", "sd-description"]));
  }
  survey.afterRenderPage(createRowNode("sd-page", ["sd-title sd-page__title", "sd-description sd-page__description"]));
  page.getAllPanels().forEach(panel => {
    const children = [];
    if (panel.hasTitle) children.push("sd-title sd-panel__title");
    if (panel.hasDescription) children.push("sd-description sd-panel__description");
    survey.afterRenderPanel(panel, createRowNode("sd-panel", children));
  });
  page.questions.forEach(question => {
    survey.afterRenderQuestion(question, createRowNode("sd-question", ["sd-question__container"]));
  });
}
function createRowPairsCreator(): CreatorTester {
  const creator = createSideBySideCreator(rowPairsJSON);
  const model = getModel(creator);
  renderPane(model.sourceSurvey);
  renderPane(model.targetSurvey);
  return creator;
}

test("row pairing: every question and the header rows rendered on both sides are paired", () => {
  const creator = createRowPairsCreator();
  const model = getModel(creator);
  const equalizer = model.rowEqualizer;
  ["q1", "q2", "q3", "q4", "q5", "q6", "q7"].forEach(name => {
    expect(equalizer.hasPair("question:" + name)).toBe(true);
  });
  expect(equalizer.hasPair("question:q8")).toBe(false); // page2 is not rendered
  expect(equalizer.hasPair("survey:title")).toBe(true);
  expect(equalizer.hasPair("survey:description")).toBe(true);
  expect(equalizer.hasPair("page:page1:title")).toBe(true);
  expect(equalizer.hasPair("page:page1:description")).toBe(true);
  expect(equalizer.hasPair("panel:panel1:title")).toBe(true);
  // A panel without translatable strings renders no title row in either pane.
  expect(equalizer.hasPair("panel:panel2:title")).toBe(false);
  expect(equalizer.getKeys().indexOf("panel:panel2:title")).toBe(-1);
  // The nodes are the rows themselves, not the containers.
  expect(equalizer.getNode("page:page1:title", 0).className).toBe("sd-title sd-page__title");
  expect(equalizer.getNode("question:q1", 1).className).toBe("sd-question");
  creator.activeTab = "designer";
});

test("row pairing: the survey header rows are paired on the first page only", () => {
  const creator = createSideBySideCreator(rowPairsJSON);
  const model = getModel(creator);
  model.selectedPageName = "page2";
  renderPane(model.sourceSurvey);
  renderPane(model.targetSurvey);
  expect(model.rowEqualizer.hasPair("question:q8")).toBe(true);
  expect(model.rowEqualizer.hasPair("survey:title")).toBe(false);
  expect(model.rowEqualizer.hasPair("question:q1")).toBe(false);
  creator.activeTab = "designer";
});

test("row equalization: both roots get the larger natural height, shrink back, drop gone nodes, clear on dispose", () => {
  const creator = createRowPairsCreator();
  const model = getModel(creator);
  const equalizer = model.rowEqualizer;
  // jsdom has no layout and no ResizeObserver - the natural heights are faked per node.
  expect(equalizer.isObserving).toBe(false);
  equalizer.measureHeight = (node: HTMLElement): number => (<any>node).naturalHeight || 0;
  const sourceQ1 = equalizer.getNode("question:q1", 0);
  const targetQ1 = equalizer.getNode("question:q1", 1);
  const sourceTitle = equalizer.getNode("survey:title", 0);
  const targetTitle = equalizer.getNode("survey:title", 1);
  (<any>sourceQ1).naturalHeight = 40;
  (<any>targetQ1).naturalHeight = 60;
  (<any>sourceTitle).naturalHeight = 30;
  (<any>targetTitle).naturalHeight = 24;
  equalizer.update();
  expect(sourceQ1.style.minHeight).toBe("60px");
  expect(targetQ1.style.minHeight).toBe("60px");
  expect(sourceQ1.style.boxSizing).toBe("border-box");
  expect(sourceTitle.style.minHeight).toBe("30px");
  expect(targetTitle.style.minHeight).toBe("30px");
  // A row without a natural height (not laid out) gets no min-height.
  expect(equalizer.getNode("question:q2", 0).style.minHeight).toBe("");

  // The taller side shrinks (an edit removed text): both recompute down.
  (<any>targetQ1).naturalHeight = 30;
  equalizer.update();
  expect(sourceQ1.style.minHeight).toBe("40px");
  expect(targetQ1.style.minHeight).toBe("40px");

  // A node that left the DOM (a page switch, a re-render) drops out of its pair, and the
  // remaining side returns to its natural height.
  targetQ1.parentElement.removeChild(targetQ1);
  equalizer.update();
  expect(equalizer.hasPair("question:q1")).toBe(false);
  expect(sourceQ1.style.minHeight).toBe("");
  expect(targetQ1.style.minHeight).toBe("");
  // A re-rendered row (a new node for the same key) pairs again.
  const newTargetQ1 = createRowNode("sd-question");
  (<any>newTargetQ1).naturalHeight = 55;
  model.targetSurvey.afterRenderQuestion(model.targetSurvey.getQuestionByName("q1"), newTargetQ1);
  equalizer.update();
  expect(equalizer.getNode("question:q1", 1)).toBe(newTargetQ1);
  expect(sourceQ1.style.minHeight).toBe("55px");
  expect(newTargetQ1.style.minHeight).toBe("55px");

  // dispose() clears every inline min-height and drops the pairs.
  creator.activeTab = "designer";
  expect(sourceQ1.style.minHeight).toBe("");
  expect(newTargetQ1.style.minHeight).toBe("");
  expect(sourceTitle.style.minHeight).toBe("");
  expect(sourceQ1.style.boxSizing).toBe("");
  expect(equalizer.getKeys()).toHaveLength(0);
  // A disposed equalizer ignores late render hooks and explicit updates.
  equalizer.setNode("question:q1", 0, createRowNode("sd-question"));
  expect(equalizer.getKeys()).toHaveLength(0);
  expect(() => equalizer.update()).not.toThrow();
});

test("row equalization: the observer is optional, and used when the environment has one", () => {
  // jsdom: no ResizeObserver - the model builds without throwing and works on explicit updates
  // (the test above). With a ResizeObserver every paired node is observed by the one instance,
  // and dispose() disconnects it.
  const observed: Array<HTMLElement> = [];
  const unobserved: Array<HTMLElement> = [];
  let instances = 0;
  let disconnected = 0;
  class FakeResizeObserver {
    constructor(public callback: () => void) { instances++; }
    observe(node: HTMLElement): void { observed.push(node); }
    unobserve(node: HTMLElement): void { unobserved.push(node); }
    disconnect(): void { disconnected++; }
  }
  (<any>globalThis).ResizeObserver = FakeResizeObserver;
  try {
    const creator = createRowPairsCreator();
    const model = getModel(creator);
    const equalizer = model.rowEqualizer;
    expect(equalizer.isObserving).toBe(true);
    expect(instances).toBe(1);
    expect(observed.indexOf(equalizer.getNode("question:q1", 0))).toBeGreaterThanOrEqual(0);
    expect(observed.indexOf(equalizer.getNode("question:q1", 1))).toBeGreaterThanOrEqual(0);
    const sourceQ1 = equalizer.getNode("question:q1", 0);
    creator.activeTab = "designer";
    expect(unobserved.indexOf(sourceQ1)).toBeGreaterThanOrEqual(0);
    expect(disconnected).toBe(1);
  } finally {
    delete (<any>globalThis).ResizeObserver;
  }
});

test("row equalization: clearing the target language drops the pairs and the source rows return to their natural heights", () => {
  const creator = createRowPairsCreator();
  const model = getModel(creator);
  const equalizer = model.rowEqualizer;
  equalizer.measureHeight = (node: HTMLElement): number => (<any>node).naturalHeight || 0;
  const sourceQ1 = equalizer.getNode("question:q1", 0);
  (<any>sourceQ1).naturalHeight = 40;
  (<any>equalizer.getNode("question:q1", 1)).naturalHeight = 60;
  equalizer.update();
  expect(sourceQ1.style.minHeight).toBe("60px");

  model.targetLocale = "";
  expect(model.targetSurvey).toBeFalsy();
  expect(sourceQ1.style.minHeight).toBe("");
  expect(equalizer.getKeys()).toHaveLength(0);
  // The rebuilt source pane renders alone: its rows register, nothing pairs, nothing is padded.
  renderPane(model.sourceSurvey);
  equalizer.measureHeight = (): number => 40;
  equalizer.update();
  expect(equalizer.getPairedKeys()).toHaveLength(0);
  expect(equalizer.getNode("question:q1", 0).style.minHeight).toBe("");

  // A target language again: fresh copies, fresh pairs.
  model.targetLocale = "de";
  renderPane(model.sourceSurvey);
  renderPane(model.targetSurvey);
  expect(equalizer.hasPair("question:q1")).toBe(true);
  creator.activeTab = "designer";
});

test("lazy rendering: a row that renders in one pane makes its counterpart render too", () => {
  const creator = createSideBySideCreator(rowPairsJSON);
  const model = getModel(creator);
  const sourceRows = model.sourceSurvey.pages[0].rows;
  const targetRows = model.targetSurvey.pages[0].rows;
  expect(sourceRows.length).toBe(targetRows.length);
  expect(sourceRows.length).toBeGreaterThan(4);
  // The panes render lazily: the rows beyond the first batch start as skeletons on both sides.
  expect(model.sourceSurvey.isLazyRendering).toBe(true);
  const lastIndex = sourceRows.length - 1;
  expect(sourceRows[lastIndex].isNeedRender).toBe(false);
  expect(targetRows[lastIndex].isNeedRender).toBe(false);
  expect(sourceRows[lastIndex - 1].isNeedRender).toBe(false);

  sourceRows[lastIndex].isNeedRender = true;
  expect(targetRows[lastIndex].isNeedRender).toBe(true);
  targetRows[lastIndex - 1].isNeedRender = true;
  expect(sourceRows[lastIndex - 1].isNeedRender).toBe(true);
  // The rows of a panel are paired as well.
  const sourcePanelRows = (<any>model.sourceSurvey.getPanelByName("panel1")).rows;
  const targetPanelRows = (<any>model.targetSurvey.getPanelByName("panel1")).rows;
  expect(sourcePanelRows.length).toBe(1);
  targetPanelRows[0].isNeedRender = false;
  sourcePanelRows[0].isNeedRender = false;
  sourcePanelRows[0].isNeedRender = true;
  expect(targetPanelRows[0].isNeedRender).toBe(true);

  // A rebuild pairs the fresh copies; the old rows are let go.
  const oldSourceRow = sourceRows[lastIndex];
  model.rebuildInstances();
  const newSourceRows = model.sourceSurvey.pages[0].rows;
  const newTargetRows = model.targetSurvey.pages[0].rows;
  expect(newSourceRows[lastIndex].isNeedRender).toBe(false);
  newSourceRows[lastIndex].isNeedRender = true;
  expect(newTargetRows[lastIndex].isNeedRender).toBe(true);
  oldSourceRow.isNeedRender = false;
  oldSourceRow.isNeedRender = true;
  expect(newTargetRows[lastIndex - 1].isNeedRender).toBe(false);
  // No target pane, nothing to pair with - the source rows render on their own.
  model.targetLocale = "";
  expect(() => { model.sourceSurvey.pages[0].rows[lastIndex].isNeedRender = true; }).not.toThrow();
  creator.activeTab = "designer";
});
test("pages dropdown renders page titles with markdown, as the preview tab page selector does", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.onSurveyInstanceSetupHandlers.add((sender, options) => {
    if (options.area === "designer-tab") {
      options.survey.onTextMarkdown.add((_, mdOptions) => {
        if (mdOptions.text.indexOf("<i>") > -1) {
          mdOptions.html = mdOptions.text + "#markup";
        }
      });
    }
  });
  creator.JSON = {
    pages: [
      { name: "page1", title: "<i>Page 1</i>", elements: [{ type: "text", name: "q1" }] },
      { name: "page2", title: "<i>Page 2</i>", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  creator.activeTab = "translation";
  const filterPageAction = creator.toolbar.getActionById("svc-translation-filter-page");
  const items = getListItems(creator, "svc-translation-filter-page");
  expect(items.map(item => item.locTitle?.textOrHtml)).toEqual(["<i>Page 1</i>#markup", "<i>Page 2</i>#markup"]);
  expect(filterPageAction.locTitle?.textOrHtml).toBe("<i>Page 1</i>#markup");
  getModel(creator).selectedPageName = "page2";
  expect(filterPageAction.locTitle?.textOrHtml).toBe("<i>Page 2</i>#markup");
});

test("pages dropdown shows page titles, it does not edit them: no inplace string editor", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = {
    pages: [
      { name: "page1", title: "Page 1", elements: [{ type: "text", name: "q1" }] },
      { name: "page2", title: "Page 2", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  creator.activeTab = "translation";
  const filterPageAction = creator.toolbar.getActionById("svc-translation-filter-page");
  const items = getListItems(creator, "svc-translation-filter-page");
  // The pages belong to the designer survey, which renders its own strings with the inplace
  // editor - the editor replaces the rendered markdown with the source text once focused.
  expect(items.map(item => item.locTitle?.renderAs)).toEqual([defaultStringRenderer, defaultStringRenderer]);
  expect(filterPageAction.locTitle?.renderAs).toBe(defaultStringRenderer);
  getModel(creator).selectedPageName = "page2";
  expect(filterPageAction.locTitle?.renderAs).toBe(defaultStringRenderer);
});

test("element strings dialog: the title is the element title; a markdown title shows the text of its markup", () => {
  withDialog(dialogs => {
    const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
    creator.onSurveyInstanceSetupHandlers.add((sender, options) => {
      if (options.area === "designer-tab") {
        options.survey.onTextMarkdown.add((_, mdOptions) => {
          if (mdOptions.text.indexOf("**") < 0) return;
          mdOptions.html = mdOptions.text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") + "<img src=\"x\">";
        });
      }
    });
    creator.JSON = {
      locale: "de",
      title: "Survey title",
      pages: [{
        name: "page1", title: "Page **1**",
        elements: [{ type: "text", name: "q1", title: "Question **1** & more" }, { type: "text", name: "q2" }]
      }]
    };
    creator.activeTab = "translation";
    const model = getModel(creator);
    const getTitle = (element: any): string => {
      model.showElementStringsDialog(element);
      const title = dialogs[dialogs.length - 1].options.title;
      model.hideElementStringsDialog();
      return title;
    };
    const survey = creator.survey;
    expect(getTitle(survey)).toBe("Survey title");
    // A popup title is plain text: the markdown of the edited survey is applied, and its markup dropped.
    expect(getTitle(survey.pages[0])).toBe("Page 1");
    expect(getTitle(survey.getQuestionByName("q1"))).toBe("Question 1 & more");
    // A question with no title of its own is named by its name, as it is everywhere else.
    expect(getTitle(survey.getQuestionByName("q2"))).toBe("q2");
  });
});

test("element strings dialog: the title is in the source language, not in the target one the survey shows", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator();
    const model = getModel(creator);
    const realQ1 = creator.survey.getQuestionByName("q1");
    realQ1.locTitle.setLocaleText("fr", "Question 1 fr");
    // The edited survey is in the target language ("Frage 1").
    expect(creator.survey.locale).toBe("de");
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(dialogs[0].options.title).toBe("Question 1");
    // Another source language: its text, or the default one when it has none.
    model.sourceLocale = "fr";
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(dialogs[1].options.title).toBe("Question 1 fr");
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q4"));
    expect(dialogs[2].options.title).toBe("Question 4");
    // No title at all: the page name.
    model.showPageStringsDialog(model.targetSurvey.getPageByName("page2"));
    expect(dialogs[3].options.title).toBe("page2");
  });
});

test("element strings dialog: a Source cell edit writes the source locale", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const realQ1 = creator.survey.getQuestionByName("q1");
  getSourceCell(getStringsRow(model, realQ1.locTitle)).value = "Question 1 new";
  expect(realQ1.locTitle.getLocaleText("")).toBe("Question 1 new");
  expect(realQ1.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(model.sourceSurvey.getQuestionByName("q1").locTitle.getLocaleText("")).toBe("Question 1 new");
});

test("element strings dialog: the focus goes to the first untranslated target cell", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator({
      locale: "de",
      pages: [{
        name: "page1",
        elements: [{
          type: "text", name: "q1",
          title: { default: "Question 1", de: "Frage 1" },
          description: "Description 1",
          placeholder: "Placeholder 1"
        }, { type: "text", name: "q2", title: { default: "Question 2", de: "Frage 2" } }]
      }]
    });
    const model = getModel(creator);
    const realQ1 = creator.survey.getQuestionByName("q1");
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    // The title is translated, the description is the first string that is not.
    expect(model.elementStringsModel.getFirstUntranslatedLocString()).toBe(realQ1.locDescription);
    const cell = getTargetCell(getStringsRow(model, realQ1.locDescription));
    // The dialog's own initial focus is aimed at the cell's input (it would take the focus from the
    // cell otherwise, see focusElementStringsItem).
    expect(dialogs[0].model.focusFirstInputSelector).toBe("[id=\"" + cell.inputId + "\"]");
    // A fully translated element leaves the dialog's own initial focus alone.
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q2"));
    expect(model.elementStringsModel.getFirstUntranslatedLocString()).toBeUndefined();
    expect(dialogs[1].model.focusFirstInputSelector).toBeUndefined();
  });
});

test("element strings dialog: in the All Strings mode the focus goes to the first untranslated string the count measures", () => {
  withDialog(dialogs => {
    const creator = createSideBySideCreator({
      locale: "de",
      pages: [{
        name: "page1",
        elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" }, placeholder: "Placeholder 1" }]
      }]
    });
    const model = getModel(creator);
    model.showAllElementStrings = true;
    const realQ1 = creator.survey.getQuestionByName("q1");
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(model.elementStringsModel.showAllElementStrings).toBeTruthy();
    // The empty description comes first, but it has nothing to translate: the placeholder does.
    expect(getStringsRow(model, realQ1.locDescription)).toBeTruthy();
    const cell = getTargetCell(getStringsRow(model, (<any>realQ1).locPlaceholder));
    expect(dialogs[0].model.focusFirstInputSelector).toBe("[id=\"" + cell.inputId + "\"]");
  });
});

test("element strings dialog: the switch cannot be cleared and has an accessible name", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  // page2 stores no strings: All Strings, and Used Strings disabled.
  model.showPageStringsDialog(model.targetSurvey.getPageByName("page2"));
  const filter = getStringsFilter(model);
  // A narrow dialog renders the switch as a dropdown, and a dropdown can be cleared otherwise.
  expect(filter.allowClear).toBeFalsy();
  expect(filter.ariaLabel).toBe("Strings to show");
  expect(filter.value).toBe("all");
});

test("element strings dialog: a nested string's cells are named with the group path", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  model.showElementStringsDialog(realMatrix);
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  const row = getStringsRow(model, realChoiceLocText);
  const name = getStringCellText(row);
  expect(name).toContain("Choices");
  expect(getTargetCell(row).a11y_input_ariaLabel).toContain(name);
});

test("element strings dialog: successive dialogs do not share element ids", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const realQ1 = creator.survey.getQuestionByName("q1");
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const firstId = getTargetCell(getStringsRow(model, realQ1.locTitle)).inputId;
  model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
  const secondId = getTargetCell(getStringsRow(model, realQ1.locTitle)).inputId;
  expect(secondId).not.toBe(firstId);
});

test("element strings dialog: a custom dialog without an apply action keeps its footer and the library locale", () => {
  const origin = surveySettings.showDialog;
  const actions: Array<any> = [{ id: "close", title: "Close" }];
  surveySettings.showDialog = (options: any): any => ({
    options: options, locale: "",
    footerToolbar: { actions: actions, getActionById: (): any => undefined },
    model: { hide: (): void => { if (!!options.onHide) options.onHide(); } }
  });
  try {
    const creator = createSideBySideCreator();
    const model = getModel(creator);
    const locale = surveyLocalization.currentLocale;
    model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q1"));
    expect(model.elementStringsModel).toBeTruthy();
    expect(actions.map(action => action.id)).toEqual(["close"]);
    expect(surveyLocalization.currentLocale).toBe(locale);
  } finally {
    surveySettings.showDialog = origin;
  }
});

describe("Translation tree is built once: side-by-side", () => {
  // The state recorded on the commit before the change, when the tree was built twice per reset
  // and the form view's constructor reset the model before the plugin configured it.
  const EXPECTED = treeOnceBaseline.sideBySide;
  const formOptions = { translationMode: "sideBySide" };
  const gridOptions = { translationMode: "sideBySide", translationSideBySideView: "grid" };
  // With a survey locale, the form view opens with a target pane.
  const create = (options: any, activate: boolean = true): CreatorTester => createTreeOnceCreator(options, activate, "de");
  const hideQ1Title = (creator: CreatorTester): void => {
    creator.onTranslationStringVisibility.add((_, options) => {
      if (options.propertyName === "title" && (<any>options.obj).name === "q1") options.visible = false;
    });
  };

  test("form view: the tree, the pane mapping and the counters", () => {
    expect(getSideBySideSnapshot(create(formOptions))).toEqual(EXPECTED.form);
  });
  test("grid view: the tree, the strings survey and the counters: all pages, the first page, a later page", () => {
    const creator = create(gridOptions);
    const model = getTranslationModel(creator);
    expect(getSideBySideSnapshot(creator)).toEqual(EXPECTED.grid);
    model.filteredPage = creator.survey.pages[0];
    expect(getSideBySideSnapshot(creator)).toEqual(EXPECTED.gridFirstPage);
    model.filteredPage = creator.survey.pages[1];
    expect(getSideBySideSnapshot(creator)).toEqual(EXPECTED.gridLaterPage);
  });
  test("form view activation applies the plugin settings: string visibility, read-only, all element strings", () => {
    // The visibility callback and the read-only flag are set after the model is created, so the
    // tree must be built after that.
    const variants: Array<{ name: string, expected: any, apply: (creator: CreatorTester) => void }> = [
      { name: "hidden title", expected: EXPECTED.hiddenTitle, apply: hideQ1Title },
      { name: "read-only", expected: EXPECTED.readOnly, apply: (creator) => { creator.readOnly = true; } },
      // The form view shows all strings anyway: the stored element dialogs' choice changes nothing.
      { name: "all element strings", expected: EXPECTED.form, apply: (creator) => { (<any>getTranslationPlugin(creator)).showAllElementStrings = true; } },
      {
        name: "all", expected: EXPECTED.hiddenTitleReadOnly, apply: (creator) => {
          hideQ1Title(creator);
          creator.readOnly = true;
          (<any>getTranslationPlugin(creator)).showAllElementStrings = true;
        }
      }
    ];
    variants.forEach(variant => {
      const creator = create(formOptions, false);
      variant.apply(creator);
      creator.activeTab = "translation";
      expect(getSideBySideSnapshot(creator), variant.name).toEqual(variant.expected);
    });
  });
  test("the root is built once per activation and per update", () => {
    const counts: any = {};
    [{ name: "form", options: formOptions }, { name: "grid", options: gridOptions }].forEach(view => {
      const creator = create(view.options, false);
      const plugin = getTranslationPlugin(creator);
      const res: any = {};
      res.activation = countRootBuilds(creator, () => { creator.activeTab = "translation"; });
      res.firstUpdate = countRootBuilds(creator, () => { plugin.update(); });
      res.laterUpdate = countRootBuilds(creator, () => { plugin.update(); });
      // A new JSON updates the active tab's plugin twice (SurveyCreatorModel.updatePlugin ignores
      // the plugin name), so it is two update() calls.
      res.json = countRootBuilds(creator, () => { creator.JSON = getTreeOnceJSON("de"); });
      if (view.name === "grid") {
        const page = creator.survey.pages[1];
        getTranslationModel(creator).filteredPage = page;
        res.jsonWithLaterPage = countRootBuilds(creator, () => { creator.JSON = getTreeOnceJSON("de"); }, [page]);
      }
      counts[view.name] = res;
    });
    // One main tree and one used-strings tree per reset; in the form view, the two pane copies
    // once per instances rebuild. Before the change, the form view: main/used/copy 4/4/4 on
    // activation, 2/2/4 per update(); the grid view: 2/2 on activation, 4/4 on the first update()
    // and 2/2 on a later one; a later page filtered added 2 builds rooted on the old survey's page.
    const formOnce = { main: 1, used: 1, copy: 2, page: 0, other: 0 };
    const formTwice = { main: 2, used: 2, copy: 4, page: 0, other: 0 };
    const gridOnce = { main: 1, used: 1, copy: 0, page: 0, other: 0 };
    const gridTwice = { main: 2, used: 2, copy: 0, page: 0, other: 0 };
    expect(counts).toEqual({
      form: { activation: formOnce, firstUpdate: formOnce, laterUpdate: formOnce, json: formTwice },
      grid: { activation: gridOnce, firstUpdate: gridOnce, laterUpdate: gridOnce, json: gridTwice, jsonWithLaterPage: gridTwice }
    });
  });
  const filters: Array<{ name: string, apply: (creator: CreatorTester) => void }> = [
    { name: "undefined", apply: () => { } },
    { name: "null", apply: (creator) => { getTranslationModel(creator).filteredPage = null; } },
    { name: "first page", apply: (creator) => { getTranslationModel(creator).filteredPage = creator.survey.pages[0]; } },
    { name: "later page", apply: (creator) => { getTranslationModel(creator).filteredPage = creator.survey.pages[1]; } }
  ];
  const getGridUpdateSnapshot = (creator: CreatorTester): any => {
    const action = creator.toolbar.getActionById("svc-translation-filter-page");
    const selected = (<ListModel>action.data).selectedItem;
    return {
      state: getSideBySideSnapshot(creator),
      action: { title: action.title, selected: !!selected ? selected.id : null }
    };
  };
  test("grid view update() with a new survey: the same state whatever the page filter was", () => {
    filters.forEach(filter => {
      const creator = create(gridOptions);
      filter.apply(creator);
      creator.JSON = getTreeOnceJSON("de");
      expect(getGridUpdateSnapshot(creator), filter.name).toEqual(EXPECTED.gridUpdate);
    });
  });
  test("grid view: a single update() clears the page filter: the same state whatever the filter was", () => {
    filters.forEach(filter => {
      const creator = create(gridOptions);
      filter.apply(creator);
      getTranslationPlugin(creator).update();
      expect(getGridUpdateSnapshot(creator), filter.name).toEqual(EXPECTED.gridUpdate);
    });
  });
  test("form view update() with a new survey: the same state", () => {
    const creator = create(formOptions);
    creator.JSON = getTreeOnceJSON("de");
    expect(getSideBySideSnapshot(creator)).toEqual(EXPECTED.form);
  });
  test("form view after update(): target pane edits reach the survey, survey edits reach the copies", () => {
    const creator = create(formOptions);
    creator.JSON = getTreeOnceJSON("de");
    const model = getModel(creator);
    model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
    expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("Frage 2");
    creator.survey.getQuestionByName("q1").locTitle.setLocaleText("de", "Frage 1 neu");
    expect(model.targetSurvey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1 neu");
    expect(model.sourceSurvey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  });
});
