import { ItemValue, ListModel, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDropdownModel, QuestionTextModel } from "survey-core";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
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

test("changing targetLocale updates survey.locale; an external survey.locale change is followed", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(creator.survey.locale).toBe("de");
  model.targetLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  creator.survey.locale = "de";
  expect(model.targetLocale).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
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

test("question strings dialog model: source/target grid over the real question, read-only source, edits that mirror into the panes", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realMatrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q3");
  const grid = model.createElementStringsModel(realMatrix);
  expect(grid.stringsSurvey).toBeTruthy();
  expect(grid.showAllStrings).toBeFalsy();
  const realChoiceLocText = (<any>realMatrix.columns[0]).templateQuestion.choices[0].locText;
  let choiceMatrix: QuestionMatrixDropdownModel = undefined;
  grid.stringsSurvey.getAllQuestions().forEach((question: any) => {
    const rows = question.rows;
    if (Array.isArray(rows) && rows.length > 0 && !!rows[0]["translationData"] &&
      rows[0]["translationData"].locString === realChoiceLocText) {
      choiceMatrix = question;
    }
  });
  expect(choiceMatrix).toBeTruthy();
  expect(choiceMatrix.columns).toHaveLength(2);
  expect(choiceMatrix.columns[0].readOnly).toBeTruthy();
  expect(choiceMatrix.columns[1].readOnly).toBeFalsy();
  // The read-only source cell keeps the borderless grid look - no default readonly formbox.
  const sourceCell = choiceMatrix.visibleRows[0].cells[0].question;
  expect(sourceCell.isReadOnly).toBeTruthy();
  expect(sourceCell.getRootClass()).toContain("st-formbox--readonly");
  expect(sourceCell.getRootClass()).not.toContain("sd-formbox--readonly");
  choiceMatrix.visibleRows[0].cells[1].question.value = "AA-de";
  expect(realChoiceLocText.getLocaleText("de")).toBe("AA-de");
  const targetMatrix = <QuestionMatrixDropdownModel>model.targetSurvey.getQuestionByName("q3");
  expect((<any>targetMatrix.columns[0]).templateQuestion.choices[0].locText.getLocaleText("de")).toBe("AA-de");
  grid.dispose();
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
  // Without a dialog host (settings.showDialog) the action is a no-op, not a crash.
  expect(() => model.showQuestionStringsDialog(model.targetSurvey.getQuestionByName("q3"))).not.toThrow();
});

test("question strings dialog model: the used/all strings filter on top of the header survey", () => {
  const creator = createSideBySideCreator(dropdownChoicesJSON);
  const model = getModel(creator);
  const realQ5 = creator.survey.getQuestionByName("q5");
  const grid = model.createElementStringsModel(realQ5);
  // Used Strings Only is the default mode.
  expect(grid.showAllStrings).toBeFalsy();
  const filter = grid.stringsHeaderSurvey.getQuestionByName("stringsFilter");
  expect(filter).toBeTruthy();
  expect(filter.getType()).toBe("buttongroup");
  expect(filter.value).toBe("used");
  // The all-strings mode adds the empty localizable properties (description etc.) as rows.
  const usedCount = grid.stringsSurvey.getAllQuestions().length;
  filter.value = "all";
  expect(grid.showAllStrings).toBeTruthy();
  // The switch rebuilt both surveys; the fresh filter question keeps the chosen mode.
  const newFilter = grid.stringsHeaderSurvey.getQuestionByName("stringsFilter");
  expect(newFilter).not.toBe(filter);
  expect(newFilter.value).toBe("all");
  expect(grid.stringsSurvey.getAllQuestions().length).toBeGreaterThan(usedCount);
  grid.dispose();
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
  // Without a dialog host (settings.showDialog) the actions are no-ops, not crashes.
  expect(() => model.showSurveyStringsDialog()).not.toThrow();
  expect(() => model.showPageStringsDialog(model.targetSurvey.pages[0])).not.toThrow();
  expect(() => model.showPanelStringsDialog(<any>model.targetSurvey.getPanelByName("panel1"))).not.toThrow();
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

test("element strings dialog models: survey/page/panel grids cover own strings only, without nested elements", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  const surveyGrid = model.createElementStringsModel(creator.survey);
  expect(surveyGrid.root.groups).toHaveLength(0);
  expect(surveyGrid.root.locItems.map(item => item.name)).toContain("title");
  surveyGrid.dispose();
  const pageGrid = model.createElementStringsModel(creator.survey.pages[0]);
  expect(pageGrid.root.groups).toHaveLength(0);
  expect(pageGrid.root.locItems.map(item => item.name)).toContain("title");
  // page1 stores a title - the dialog keeps the used-only default and both filter options.
  expect(pageGrid.showAllStrings).toBeFalsy();
  const pageFilter = pageGrid.stringsHeaderSurvey.getQuestionByName("stringsFilter");
  expect(ItemValue.getItemByValue(pageFilter.choices, "used").isEnabled).toBeTruthy();
  pageGrid.dispose();
  // page2 stores no strings - the used-only mode would show the "no strings" placeholder
  // (hiding the filter switcher with the grid), so the dialog falls back to all strings
  // and disables the used-only option.
  const emptyPageGrid = model.createElementStringsModel(creator.survey.pages[1]);
  expect(emptyPageGrid.showAllStrings).toBeTruthy();
  expect(emptyPageGrid.root.locItems.map(item => item.name)).toContain("title");
  const emptyFilter = emptyPageGrid.stringsHeaderSurvey.getQuestionByName("stringsFilter");
  expect(emptyFilter.value).toBe("all");
  expect(ItemValue.getItemByValue(emptyFilter.choices, "used").isEnabled).toBeFalsy();
  emptyPageGrid.dispose();
  const panelGrid = model.createElementStringsModel(creator.survey.getPanelByName("panel2"));
  expect(panelGrid.root.groups).toHaveLength(0);
  expect(panelGrid.root.locItems.map(item => item.name)).toContain("description");
  panelGrid.dispose();
});

test("survey strings dialog model: edits that mirror into the panes", () => {
  const creator = createSideBySideCreator(containersJSON);
  const model = getModel(creator);
  const grid = model.createElementStringsModel(creator.survey);
  let titleMatrix: QuestionMatrixDropdownModel = undefined;
  grid.stringsSurvey.getAllQuestions().forEach((question: any) => {
    const rows = question.rows;
    if (Array.isArray(rows) && rows.length > 0 && !!rows[0]["translationData"] &&
      rows[0]["translationData"].locString === creator.survey.locTitle) {
      titleMatrix = question;
    }
  });
  expect(titleMatrix).toBeTruthy();
  titleMatrix.visibleRows[0].cells[1].question.value = "Umfragetitel neu";
  expect(creator.survey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
  expect(model.targetSurvey.locTitle.getLocaleText("de")).toBe("Umfragetitel neu");
  grid.dispose();
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
  expect(newModel.targetLocale).toBe("fr");
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
  expect(model.getElementTranslationState(target.getQuestionByName("q3"))).toBe("none");
  // The real-survey elements resolve to the same states as the pane copies.
  expect(model.getElementTranslationState(creator.survey.getQuestionByName("q2"))).toBe("untranslated");
  // The translate action itself carries the state icon, css modifier and state tooltip;
  // in the untranslated state the tooltip is the action title itself.
  const translatedAction = getStateAction(target.getQuestionByName("q1"));
  expect(translatedAction).toBeTruthy();
  expect(translatedAction.id).toBe("svc-translate-question");
  expect(translatedAction.iconName).toBe("icon-check-16x16");
  expect(translatedAction.css).toContain("svc-translation-state--translated");
  expect(translatedAction.tooltip).toBe("All strings are translated");
  const untranslatedAction = getStateAction(target.getQuestionByName("q2"));
  expect(untranslatedAction.iconName).toBe("icon-warning-24x24");
  expect(untranslatedAction.css).toContain("svc-translation-state--untranslated");
  expect(untranslatedAction.tooltip).toBe("Translate strings");
  const noneAction = getStateAction(target.getQuestionByName("q3"));
  expect(noneAction.iconName).toBe("icon-remove_16x16");
  expect(noneAction.css).toContain("svc-translation-state--none");
  expect(noneAction.tooltip).toBe("No strings to translate");
  // The action still opens the strings dialog and keeps its stable title.
  expect(noneAction.title).toBe("Translate strings");
  // The state is carried by the target pane's actions only.
  expect(getStateAction(target.getPageByName("page1"))).toBeTruthy();
  expect(getStateAction(model.sourceSurvey.getQuestionByName("q1"))).toBeFalsy();
  expect(getStateAction(model.sourceSurvey.getPageByName("page1"))).toBeFalsy();
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
  expect(surveyAction.iconName).toBe("icon-check-16x16");
  expect(surveyAction.css).toContain("svc-translation-state--translated");
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
  expect(questionAction.iconName).toBe("icon-check-16x16");
  expect(questionAction.css).toContain("svc-translation-state--translated");
  expect(pageAction.css).toContain("svc-translation-state--untranslated");
  // Clearing the text flips it back.
  target.getQuestionByName("q2").locTitle.text = "";
  expect(questionAction.iconName).toBe("icon-warning-24x24");
  expect(questionAction.css).toContain("svc-translation-state--untranslated");
  // Typing the page title flips the page.
  target.getPageByName("page1").locTitle.text = "Seite 1";
  expect(pageAction.css).toContain("svc-translation-state--translated");
  // A target locale switch recomputes every state: nothing is translated into French.
  model.targetLocale = "fr";
  expect(getStateAction(target.getQuestionByName("q1")).css).toContain("svc-translation-state--untranslated");
  expect(model.getElementTranslationState(target.getPageByName("page2"))).toBe("untranslated");
  expect(model.getElementTranslationState(target.getQuestionByName("q3"))).toBe("none");
});

test("element state indicator: the default language as target shows no warning state", () => {
  const creator = createSideBySideCreator(stateJSON);
  const model = getModel(creator);
  // A string stored only in a non-default locale must not produce a warning either.
  creator.survey.getLocalizableString("description").setLocaleText("de", "Umfragebeschreibung");
  model.targetLocale = "";
  const target = model.targetSurvey;
  expect(model.getElementTranslationState(target.getQuestionByName("q1"))).toBe("translated");
  expect(model.getElementTranslationState(target.getQuestionByName("q2"))).toBe("translated");
  expect(model.getElementTranslationState(target.getQuestionByName("q3"))).toBe("none");
  expect(model.getElementTranslationState(target.getPageByName("page1"))).toBe("translated");
  expect(model.getElementTranslationState(target)).toBe("translated");
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

test("element strings dialog: auto-translate button is shown only when machine translation is available", () => {
  const creator = createSideBySideCreator(autoTranslateJSON);
  const model = getModel(creator);
  const realQ1 = creator.survey.getQuestionByName("q1");
  let grid = model.createElementStringsModel(realQ1);
  expect(grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine")).toBeFalsy();
  grid.dispose();
  creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  grid = model.createElementStringsModel(realQ1);
  const action = grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine");
  expect(action).toBeTruthy();
  expect(action.enabled).toBeTruthy();
  grid.dispose();
});

test("element strings dialog: auto-translate button is disabled when all used strings are translated or there is nothing to translate", () => {
  const creator = createSideBySideCreator(stateJSON);
  creator.onMachineTranslate.add((_, options) => { options.callback(options.strings.map(str => "de: " + str)); });
  const model = getModel(creator);
  // q1's only used string already has a de text.
  let grid = model.createElementStringsModel(creator.survey.getQuestionByName("q1"));
  expect(grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine").enabled).toBeFalsy();
  grid.dispose();
  // q3 has no stored strings - its title row exists through the name fallback only,
  // matching the "No strings to translate" element state.
  grid = model.createElementStringsModel(creator.survey.getQuestionByName("q3"));
  expect(grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine").enabled).toBeFalsy();
  grid.dispose();
  // q2's title is untranslated.
  grid = model.createElementStringsModel(creator.survey.getQuestionByName("q2"));
  expect(grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine").enabled).toBeTruthy();
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
  const action = grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine");
  action.action();
  expect(fromLocale).toBe("en");
  expect(toLocale).toBe("de");
  // The already translated "item1" is kept; the value-only and numeric choices are not sent.
  expect(passedStrings).toEqual(["Q1 title", "Q1 desc", "Item 2"]);
  expect(realQ1.locTitle.getLocaleText("de")).toBe("de: Q1 title");
  expect(realQ1.locDescription.getLocaleText("de")).toBe("de: Q1 desc");
  expect(ItemValue.getItemByValue(realQ1.choices, "item1").locText.getLocaleText("de")).toBe("Element 1");
  expect(ItemValue.getItemByValue(realQ1.choices, "item2").locText.getLocaleText("de")).toBe("de: Item 2");
  expect(ItemValue.getItemByValue(realQ1.choices, "item3").locText.getLocaleText("de")).toBeFalsy();
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
  grid.stringsHeaderSurvey.getQuestionByName("stringsFilter").value = "all";
  // The filter switch recreated the header survey along with the button.
  const action = grid.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-machine");
  expect(action).toBeTruthy();
  action.action();
  expect(passedStrings).toEqual(["Q1 title", "Q1 desc", "Item 2"]);
  grid.dispose();
});
