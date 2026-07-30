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

test("survey header (title, description, logo) is shown on the first page only", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.renderedHasHeader).toBeTruthy();
    expect(survey.renderedHasTitle).toBeTruthy();
    expect(survey.renderedHasDescription).toBeTruthy();
    expect(survey.renderedHasLogo).toBeTruthy();
  });
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page2");
  // The target pane follows the source page change through the model.
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.currentPage.name).toBe("page2");
    expect(survey.renderedHasHeader).toBeFalsy();
    expect(survey.renderedHasTitle).toBeFalsy();
    expect(survey.renderedHasDescription).toBeFalsy();
    expect(survey.renderedHasLogo).toBeFalsy();
  });
  model.sourceSurvey.currentPage = model.sourceSurvey.getPageByName("page1");
  [model.sourceSurvey, model.targetSurvey].forEach(survey => {
    expect(survey.renderedHasHeader).toBeTruthy();
  });
});

test("forms view property grid is compact, restored on leaving the tab", () => {
  const creator = createSideBySideCreator();
  expect(creator.sidebar.compactMode).toBeTruthy();
  expect(creator.sidebar.rootCss).toContain("svc-side-bar--compact");
  creator.activeTab = "designer";
  expect(creator.sidebar.compactMode).toBeFalsy();
  expect(creator.sidebar.rootCss).not.toContain("svc-side-bar--compact");
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

test("dropdown choice strings: editable in the target pane only, edits forward to the real survey and are undoable", () => {
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
  creator.undo();
  expect(realQ5.choices[0].locText.getLocaleText("de")).toBeFalsy();
  expect(targetQ5.choices[0].locText.getLocaleText("de")).toBeFalsy();
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

test("question strings dialog model: source/target grid over the real question, read-only source, undoable edits that mirror into the panes", () => {
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
  creator.undo();
  expect(realChoiceLocText.getLocaleText("de")).toBeFalsy();
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

test("survey strings dialog model: undoable edits that mirror into the panes", () => {
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
  creator.undo();
  expect(creator.survey.locTitle.getLocaleText("de")).toBe("Umfragetitel");
  grid.dispose();
});
