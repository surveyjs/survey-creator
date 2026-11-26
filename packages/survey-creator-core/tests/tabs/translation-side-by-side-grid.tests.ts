import { ListModel, PanelModel, Question, QuestionCommentModel, QuestionMatrixDropdownModel, SurveyModel } from "survey-core";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
import { Translation, TranslationGroup, TranslationItem } from "../../src/components/tabs/translation";
import { TranslationTable } from "../../src/components/tabs/translation-table";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { StringEditorConnector, StringEditorViewModelBase } from "../../src/components/string-editor";
import { getDefaultLocaleName } from "../../src/survey-helper";
import { CreatorTester } from "../creator-tester";
import "survey-core/survey.i18n";

const gridJSON = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "checkbox", name: "q2", choices: [{ value: "item1", text: "Item 1" }, "item2"] }
      ]
    },
    {
      name: "page2",
      elements: [{ type: "text", name: "q4", title: "Question 4" }]
    }
  ]
};

function createGridCreator(json: any = gridJSON): CreatorTester {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide", translationSideBySideView: "grid" });
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
// The string rows of the table: one matrix per string.
function getMatrices(model: Translation): Array<QuestionMatrixDropdownModel> {
  return <Array<QuestionMatrixDropdownModel>>model.stringsSurvey.getAllQuestions()
    .filter((q: any) => Array.isArray(q.rows) && q.rows.length > 0 && !!q.rows[0]["translationData"]);
}
// The cells of a string row: Question, String, then the locale cells (the target one is the last).
function getCells(matrix: QuestionMatrixDropdownModel): Array<any> {
  return matrix.visibleRows[0].cells;
}
function getTargetCell(matrix: QuestionMatrixDropdownModel): any {
  const cells = getCells(matrix);
  return cells[cells.length - 1].question;
}
// The matrix showing the given translation item (one item per matrix, matched by owner object name).
function findMatrix(model: Translation, contextName: string, itemName: string): QuestionMatrixDropdownModel {
  return getMatrices(model).filter(matrix => {
    const item = <TranslationItem>matrix.rows[0] && matrix.rows[0]["translationData"];
    return !!item && item.name === itemName && !!item.context && item.context.name === contextName;
  })[0];
}
function getItemKeys(model: Translation): Array<string> {
  return getMatrices(model).map(matrix => {
    const item = <TranslationItem>matrix.rows[0]["translationData"];
    const owner = !!item.context && item.context.name !== undefined ? item.context.name : "";
    return owner + "." + item.name;
  });
}

test("grid view: activate creates the grid model, no survey copies, toolbar and property grid composition", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  expect(model).toBeTruthy();
  expect(model.isSideBySide).toBeTruthy();
  expect(model.isSideBySideGrid).toBeTruthy();
  expect(model.stringsSurvey).toBeTruthy();
  expect(model.stringsHeaderSurvey).toBeTruthy();
  expect(model.sourceSurvey).toBeFalsy();
  expect(model.targetSurvey).toBeFalsy();
  expect(model.showAllStrings).toBeFalsy();
  const sidebarPage = creator.sidebar.pages.filter(page => page.id === "translation")[0];
  expect(sidebarPage.visible).toBeTruthy();
  expect(sidebarPage.componentData).toBe(model.settingsSurvey);
  expect(model.settingsSurvey.getQuestionByName("viewMode").value).toBe("grid");
  expect(model.settingsSurvey.getQuestionByName("sourceLocale").value).toBe("default");
  expect(model.settingsSurvey.getQuestionByName("targetLocale").value).toBe("de");
  expect(creator.toolbar.getActionById("svc-translation-filter-page").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-import").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-export").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svd-translation-merge_locale_withdefault").visible).toBeFalsy();
  // The locale selectors and the view switcher live in the property grid, not in the toolbar.
  expect(creator.toolbar.getActionById("svc-translation-source-locale")).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-destination-locale")).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-side-by-side-view")).toBeFalsy();
});

test("grid view: the creator option defaults to the form view", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = JSON.parse(JSON.stringify(gridJSON));
  creator.activeTab = "translation";
  const model = <TranslationSideBySide>getPlugin(creator).model;
  expect(model.isSideBySideGrid).toBeFalsy();
  expect(model.sourceSurvey).toBeTruthy();
  expect(model.stringsSurvey).toBeFalsy();
});

test("grid view: a source column and a target column, both editable", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  expect(matrix).toBeTruthy();
  expect(matrix.columns).toHaveLength(4);
  expect(matrix.columns[2].name).toBe(getDefaultLocaleName());
  expect(matrix.columns[2].readOnly).toBeFalsy();
  expect(matrix.columns[3].name).toBe("de");
  expect(matrix.columns[3].readOnly).toBeFalsy();
  const sourceCell = <QuestionCommentModel>matrix.visibleRows[0].cells[2].question;
  const targetCell = <QuestionCommentModel>matrix.visibleRows[0].cells[3].question;
  expect(sourceCell.isReadOnly).toBeFalsy();
  expect(sourceCell.value).toBe("Question 1");
  expect(targetCell.isReadOnly).toBeFalsy();
  expect(targetCell.value).toBe("Frage 1");

  const header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(2);
  expect(header.columns[0].title.indexOf("Source: ")).toBe(0);
  expect(header.columns[1].title.indexOf("Target: ")).toBe(0);
});

test("grid view: a single source column when no target language is selected", () => {
  const json = JSON.parse(JSON.stringify(gridJSON));
  delete json.locale;
  const creator = createGridCreator(json);
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.targetLocale || "").toBe("");
  const matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(3);
  expect(matrix.columns[2].name).toBe(getDefaultLocaleName());
  expect(matrix.columns[2].readOnly).toBeFalsy();
  const header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(1);
  expect(header.columns[0].title.indexOf("Source: ")).toBe(0);
});

test("grid view: clearing the target language drops the target column, selecting one restores it", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  expect(findMatrix(model, "q1", "title").columns).toHaveLength(4);

  model.targetLocale = "";
  let matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(3);
  expect(matrix.columns[2].name).toBe(getDefaultLocaleName());
  expect(matrix.visibleRows[0].cells[2].question.value).toBe("Question 1");
  let header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(1);
  expect(header.columns[0].title.indexOf("Source: ")).toBe(0);

  model.targetLocale = "de";
  matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(4);
  expect(matrix.columns[3].name).toBe("de");
  expect(matrix.visibleRows[0].cells[3].question.value).toBe("Frage 1");
  header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(2);
  expect(header.columns[0].title.indexOf("Source: ")).toBe(0);
  expect(header.columns[1].title.indexOf("Target: ")).toBe(0);
});

test("grid view: used strings only by default, the toolbar dropdown switches to all strings", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  expect(getItemKeys(model).indexOf("q1.description")).toBe(-1);
  model.showAllStrings = true;
  expect(getItemKeys(model).indexOf("q1.description")).toBeGreaterThan(-1);
  model.showAllStrings = false;
  expect(getItemKeys(model).indexOf("q1.description")).toBe(-1);
});

test("grid view: the page dropdown shows All Pages plus the pages and scopes the grid via filteredPage", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  expect(getListItems(creator, "svc-translation-filter-page").map(item => item.id))
    .toEqual([null, "page1", "page2"]);
  // "All Pages" is the default: no page filter, the grid covers the whole survey.
  expect(model.filteredPage).toBeFalsy();
  expect(model.root.obj).toBe(creator.survey);
  expect(getItemKeys(model).indexOf("q1.title")).toBeGreaterThan(-1);
  // page2's group is collapsed, its rows are there.
  expect(model.stringsTable.isGroupExpanded("page2")).toBe(false);
  expect(getItemKeys(model).indexOf("q4.title")).toBeGreaterThan(-1);
  model.filteredPage = creator.survey.getPageByName("page2");
  expect(model.root.obj.name).toBe("page2");
  expect(getItemKeys(model).indexOf("q4.title")).toBeGreaterThan(-1);
  expect(getItemKeys(model).indexOf("q1.title")).toBe(-1);
  expect(creator.toolbar.getActionById("svc-translation-filter-page").title).toBe("page2");
  model.filteredPage = null;
  expect(model.root.obj).toBe(creator.survey);
  expect(getItemKeys(model).indexOf("q1.title")).toBeGreaterThan(-1);
});

test("grid view: target cell edits write the target locale", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  getTargetCell(matrix).value = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
});

test("grid view: onTranslationItemChanging applies to grid edits", () => {
  const creator = createGridCreator();
  creator.onTranslationItemChanging.add((sender, options) => {
    options.newText = options.newText + "!";
  });
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  getTargetCell(matrix).value = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
});

test("grid view: changing the target locale re-runs the column setup and keeps values", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const stringsSurvey = model.stringsSurvey;
  model.targetLocale = "fr";
  // The strings survey is kept, only its columns and data are updated.
  expect(model.stringsSurvey).toBe(stringsSurvey);
  let matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(4);
  expect(matrix.columns[3].name).toBe("fr");
  expect(getTargetCell(matrix).value).toBeFalsy();
  model.targetLocale = "de";
  matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns[3].name).toBe("de");
  expect(getTargetCell(matrix).value).toBe("Frage 1");
});

test("grid view: survey-level strings show up under All Pages once they get a value", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  // Used-strings mode: no survey-level string has a value yet.
  expect(getItemKeys(model).indexOf(".title")).toBe(-1);
  creator.survey.title = "My Survey";
  model.reset();
  expect(getItemKeys(model).indexOf(".title")).toBeGreaterThan(-1);
});

test("grid view: the first page scope keeps the survey strings, the other pages drop them", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  creator.survey.title = "My Survey";
  model.reset();
  model.filteredPage = creator.survey.getPageByName("page1");
  expect(model.root.obj).toBe(creator.survey);
  expect(getItemKeys(model).indexOf(".title")).toBeGreaterThan(-1);
  expect(getItemKeys(model).indexOf("q1.title")).toBeGreaterThan(-1);
  expect(getItemKeys(model).indexOf("q4.title")).toBe(-1);
  model.filteredPage = creator.survey.getPageByName("page2");
  expect(model.root.obj.name).toBe("page2");
  expect(getItemKeys(model).indexOf(".title")).toBe(-1);
  expect(getItemKeys(model).indexOf("q4.title")).toBeGreaterThan(-1);
});

test("grid view: CSV export covers the whole survey regardless of the page scope", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page1");
  expect(model.root.obj).toBe(creator.survey);
  const csv = model.exportToCSV();
  expect(csv.indexOf("q1.title")).toBeGreaterThan(-1);
  expect(csv.indexOf("q4.title")).toBeGreaterThan(-1);
});

test("grid view: the machine-translation editor operates on the whole survey", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const editor = model.createTranslationEditor(model.targetLocale);
  const contexts = editor.translation.root.allLocItems.map(item => (!!item.context ? item.context.name : ""));
  // q4 (page2, no "de" text yet) must be offered although the grid shows page1 only.
  expect(contexts.indexOf("q4")).toBeGreaterThan(-1);
  editor.dispose();
});

test("view switcher: the property grid button group switches between the form and grid views keeping locales", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = JSON.parse(JSON.stringify(gridJSON));
  creator.activeTab = "translation";
  const formModel = <TranslationSideBySide>getPlugin(creator).model;
  const viewQuestion = formModel.settingsSurvey.getQuestionByName("viewMode");
  expect(viewQuestion.value).toBe("form");
  expect(formModel.isSideBySideGrid).toBeFalsy();
  formModel.sourceLocale = "fr";

  viewQuestion.value = "grid";
  expect(creator.translationSideBySideView).toBe("grid");
  // The same model rebuilds its editing surface in place.
  expect(getPlugin(creator).model).toBe(formModel);
  expect(formModel.isSideBySideGrid).toBeTruthy();
  expect(formModel.stringsSurvey).toBeTruthy();
  expect(formModel.sourceSurvey).toBeFalsy();
  expect(formModel.showAllStrings).toBeFalsy();
  expect(formModel.sourceLocale).toBe("fr");
  expect(formModel.targetLocale).toBe("de");
  expect(formModel.settingsSurvey.getQuestionByName("sourceLocale").value).toBe("fr");
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeTruthy();

  viewQuestion.value = "form";
  expect(creator.translationSideBySideView).toBe("form");
  expect(getPlugin(creator).model).toBe(formModel);
  expect(formModel.isSideBySideGrid).toBeFalsy();
  expect(formModel.sourceSurvey).toBeTruthy();
  expect(formModel.targetSurvey).toBeTruthy();
  expect(formModel.showAllStrings).toBeTruthy();
  expect(formModel.sourceLocale).toBe("fr");
  expect(formModel.targetLocale).toBe("de");
  // The all/used strings filter belongs to the grid view only.
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeFalsy();
});

test("view switcher: absent in the default translation mode, present in the side-by-side property grid", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  creator.JSON = JSON.parse(JSON.stringify(gridJSON));
  creator.activeTab = "translation";
  const model = getPlugin(creator).model;
  // The default mode shows the languages matrix; no view switcher, no locale dropdowns.
  expect(model.settingsSurvey.getQuestionByName("locales")).toBeTruthy();
  expect(model.settingsSurvey.getQuestionByName("viewMode")).toBeFalsy();
  expect(model.settingsSurvey.getQuestionByName("sourceLocale")).toBeFalsy();

  const sideBySideCreator = createGridCreator();
  const sideBySideModel = getModel(sideBySideCreator);
  expect(sideBySideModel.settingsSurvey.getQuestionByName("locales")).toBeFalsy();
  expect(sideBySideModel.settingsSurvey.getQuestionByName("viewMode")).toBeTruthy();
  expect(sideBySideModel.settingsSurvey.getQuestionByName("sourceLocale")).toBeTruthy();
  expect(sideBySideModel.settingsSurvey.getQuestionByName("targetLocale")).toBeTruthy();
});

function createFormCreator(json: any = gridJSON): CreatorTester {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = JSON.parse(JSON.stringify(json));
  creator.activeTab = "translation";
  return creator;
}
function switchView(creator: CreatorTester, view: string): void {
  getModel(creator).settingsSurvey.getQuestionByName("viewMode").value = view;
}
// Records the grid cell questions whose input focus is requested during the callback.
function trackCommentFocus(): { focused: Array<Question>, restore: () => void } {
  const focused: Array<Question> = [];
  const origFocus = QuestionCommentModel.prototype.focus;
  QuestionCommentModel.prototype.focus = function (this: any): void { focused.push(this); };
  return { focused, restore: () => { QuestionCommentModel.prototype.focus = origFocus; } };
}

test("selection sync: the string focused in the form view gets the input focus in the grid view", () => {
  const creator = createFormCreator();
  const model = <TranslationSideBySide>getPlugin(creator).model;
  // The inline string editors of the target pane report their focus through this callback.
  creator.onStringEditorFocusedCallback(model.targetSurvey.getQuestionByName("q4").locTitle);
  const tracker = trackCommentFocus();
  try {
    switchView(creator, "grid");
    const matrix = findMatrix(model, "q4", "title");
    const targetCell = matrix.visibleRows[0].cells[matrix.columns.length - 1].question;
    expect(tracker.focused).toHaveLength(1);
    expect(tracker.focused[0]).toBe(targetCell);
  } finally {
    tracker.restore();
  }
  // The grid opens scoped to the selected string's page; the page selector shows it.
  expect(model.filteredPage.name).toBe("page2");
  expect(creator.toolbar.getActionById("svc-translation-filter-page").title).toBe("page2");
});

test("selection sync: StringEditorViewModelBase.onFocus reports the focused string to the creator", () => {
  const creator = createFormCreator();
  const model = <TranslationSideBySide>getPlugin(creator).model;
  const copyLocStr = model.targetSurvey.getQuestionByName("q1").locTitle;
  const editor = new StringEditorViewModelBase(copyLocStr, creator);
  editor.onFocus({ target: { innerText: "Frage 1", parentElement: { click: (): void => { } } } });
  const tracker = trackCommentFocus();
  try {
    switchView(creator, "grid");
    const matrix = findMatrix(model, "q1", "title");
    expect(tracker.focused).toHaveLength(1);
    expect(tracker.focused[0]).toBe(getTargetCell(matrix));
  } finally {
    tracker.restore();
  }
  expect(model.filteredPage.name).toBe("page1");
  editor.dispose();
});

test("selection sync: the grid cell focus drives the form view page and auto-focuses the same string's editor", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.stringsTable.expandGroup("page2");
  const matrix = findMatrix(model, "q4", "title");
  // The UI reports the DOM focus of a grid cell through the survey.
  model.stringsSurvey.whenQuestionFocusIn(<Question>getTargetCell(matrix));
  switchView(creator, "form");
  expect(model.selectedPageName).toBe("page2");
  expect(model.sourceSurvey.currentPage.name).toBe("page2");
  expect(model.targetSurvey.currentPage.name).toBe("page2");
  expect(creator.toolbar.getActionById("svc-translation-filter-page").title).toBe("page2");
  const copyLocStr = model.targetSurvey.getQuestionByName("q4").locTitle;
  expect(StringEditorConnector.get(copyLocStr).focusOnEditor).toBeTruthy();
});

test("selection sync: a page-scoped grid follows the string focused in the form view", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page1");
  switchView(creator, "form");
  model.selectedPageName = "page2";
  creator.onStringEditorFocusedCallback(model.targetSurvey.getQuestionByName("q4").locTitle);
  const tracker = trackCommentFocus();
  try {
    switchView(creator, "grid");
    expect(model.filteredPage.name).toBe("page2");
    const matrix = findMatrix(model, "q4", "title");
    expect(tracker.focused).toHaveLength(1);
    expect(tracker.focused[0]).toBe(getTargetCell(matrix));
  } finally {
    tracker.restore();
  }
});

test("selection sync: without a focused string the views keep the same page", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page2");
  switchView(creator, "form");
  // The form view opens on the page the grid was scoped to.
  expect(model.selectedPageName).toBe("page2");
  // Navigating the panes to another page moves the grid scope there on the way back.
  model.selectedPageName = "page1";
  switchView(creator, "grid");
  expect(model.filteredPage.name).toBe("page1");
  expect(creator.toolbar.getActionById("svc-translation-filter-page").title).toBe("page1");
  switchView(creator, "form");
  expect(model.selectedPageName).toBe("page1");
  // A grid left on "All Pages" comes back on "All Pages", with the panes' page group expanded.
  switchView(creator, "grid");
  model.filteredPage = null;
  switchView(creator, "form");
  expect(model.selectedPageName).toBe("page1");
  model.selectedPageName = "page2";
  switchView(creator, "grid");
  expect(model.filteredPage).toBeFalsy();
  expect(model.stringsTable.isGroupExpanded("page2")).toBe(true);
  expect(model.stringsTable.pendingScrollGroupName).toBe("page2");
});

test("grid view: replacing the survey rebuilds the grid for the new survey", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page2");
  const json = JSON.parse(JSON.stringify(gridJSON));
  json.pages[0].elements[0].name = "q1new";
  creator.JSON = json;
  // Back to the "All Pages" default over the new survey.
  expect(getModel(creator)).toBe(model);
  expect(model.filteredPage).toBeFalsy();
  expect(model.root.obj).toBe(creator.survey);
  expect(getItemKeys(model).indexOf("q1new.title")).toBeGreaterThan(-1);
});

describe("grid view: the grouped table", () => {
  const getPanel = (model: TranslationSideBySide, pageName: string): PanelModel => model.stringsTable.getGroupPanel(pageName);
  const getRowsText = (matrix: QuestionMatrixDropdownModel): Array<string> =>
    getCells(matrix).slice(0, 2).map(cell => (<any>cell.question).html);
  const getPageItemKeys = (model: TranslationSideBySide, pageName: string): Array<string> =>
    getMatrices(model).filter(matrix => getPanel(model, pageName).elements.indexOf(matrix) > -1)
      .map(matrix => {
        const item = <TranslationItem>matrix.rows[0]["translationData"];
        return (!!item.context && item.context.name !== undefined ? item.context.name : "") + "." + item.name;
      });
  const findRowByQuestionCell = (model: TranslationSideBySide, name: string): QuestionMatrixDropdownModel =>
    getMatrices(model).filter(matrix => getRowsText(matrix)[0] === name)[0];

  test("a group per page with the page title and the {translated}/{total} count", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    expect(model.stringsTable.pageNames).toEqual(["page1", "page2"]);
    const page1 = getPanel(model, "page1");
    const page2 = getPanel(model, "page2");
    expect(page1.parent).toBe(model.stringsSurvey.pages[0]);
    expect(page1.title).toBe("page1");
    // q1 title (translated), q2 title, two choices.
    expect(page1.description).toBe("1/4");
    expect(page2.description).toBe("0/1");
    expect(model.stringsTable.getGroupCountText("page2")).toBe("0/1");
    // No target language - nothing to count.
    model.targetLocale = "";
    expect(page1.description).toBe("");
    model.targetLocale = "de";
    expect(page1.description).toBe("1/4");
  });
  test("a group shows the page title when the page has one", () => {
    const json = JSON.parse(JSON.stringify(gridJSON));
    json.pages[1].title = "Second page";
    const model = getModel(createGridCreator(json));
    expect(getPanel(model, "page2").title).toBe("Second page");
  });
  test("the Question, String, Source and Target columns: the element name spans its rows", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    const q2 = findRowByQuestionCell(model, "q2");
    const page1Matrices = getMatrices(model).filter(m => getPanel(model, "page1").elements.indexOf(m) > -1);
    const q2Matrices = page1Matrices.slice(page1Matrices.indexOf(q2));
    expect(q2Matrices).toHaveLength(3);
    expect(q2Matrices.map(getRowsText)).toEqual([["q2", "Question title"], ["", "Choices: Item 1"], ["", "Choices: Item 2"]]);
    const matrix = q2Matrices[0];
    expect(matrix.columns.map(col => col.name)).toEqual(["svc-translation-question", "svc-translation-string", getDefaultLocaleName(), "de"]);
    expect(matrix.columns.map(col => col.title)).toEqual(["Question", "String", "Source: Default (English)", "Target: Deutsch"]);
    expect(getCells(matrix).map(cell => cell.question.getType())).toEqual(["html", "html", "comment", "comment"]);
    // The header row of a group is the first row's header.
    expect(getMatrices(model)[0].showHeader).toBe(true);
    expect(matrix.showHeader).toBe(false);
    // The span: no bottom border on the Question cell inside an element's rows.
    const cellCss = (m: QuestionMatrixDropdownModel): Array<string> =>
      m.renderedTable.rows.filter((row: any) => !row.isErrorsRow && row.cells.length > 2)[0].cells.map((cell: any) => cell.className);
    const questionIndex = 1; // after the row text cell
    expect(cellCss(q2Matrices[0])[questionIndex]).toContain("st-translation-table__cell--span");
    expect(cellCss(q2Matrices[1])[questionIndex]).toContain("st-translation-table__cell--span");
    expect(cellCss(q2Matrices[2])[questionIndex]).not.toContain("st-translation-table__cell--span");
    expect(cellCss(q2Matrices[2])[questionIndex]).toContain("st-translation-table__cell--question");
    expect(cellCss(q2Matrices[2])[4]).toContain("st-translation-table__cell--target");
    // The last row of the group: the group's border closes the table.
    expect(cellCss(q2Matrices[2])[4]).toContain("st-translation-table__cell--last");
    expect(cellCss(q2Matrices[1])[4]).not.toContain("st-translation-table__cell--last");
  });
  test("an untranslated target shows the source text as its placeholder", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    model.stringsTable.expandGroup("page2");
    expect((<QuestionCommentModel>getTargetCell(findMatrix(model, "q4", "title"))).placeholder).toBe("Question 4");
    const q1Target = <QuestionCommentModel>getTargetCell(findMatrix(model, "q1", "title"));
    q1Target.value = "";
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(q1Target.placeholder).toBe("Question 1");
  });
  test("survey-level strings open the first page group under \"survey\"", () => {
    const json = JSON.parse(JSON.stringify(gridJSON));
    json.title = "My Survey";
    const model = getModel(createGridCreator(json));
    const first = getMatrices(model)[0];
    expect(getRowsText(first)).toEqual(["survey", "Survey title"]);
    expect(getPanel(model, "page1").elements[0]).toBe(first);
    expect(getPanel(model, "page1").description).toBe("1/5");
  });
  test("collapse and expand: a collapsed group keeps its rows, their cells are not created", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    const page1 = getPanel(model, "page1");
    const page2 = getPanel(model, "page2");
    expect(page1.state).toBe("expanded");
    expect(page2.state).toBe("collapsed");
    expect(getPageItemKeys(model, "page2")).toEqual(["q4.title"]);
    expect(getMatrices(model)).toHaveLength(5);
    // survey-core renders no content of a collapsed panel, so its matrices get no cells, and the
    // value updates leave them alone too.
    const q4 = findMatrix(model, "q4", "title");
    model.updateStringsSurveyData();
    expect((<any>q4).generatedVisibleRows).toBeFalsy();
    page2.expand();
    expect(model.stringsTable.isPageExpanded("page2")).toBe(true);
    page1.collapse();
    expect(model.stringsTable.isPageExpanded("page1")).toBe(false);
    expect(getMatrices(model)).toHaveLength(5);
    page1.expand();
    const matrix = findMatrix(model, "q1", "title");
    expect(getTargetCell(matrix).value).toBe("Frage 1");
    expect(getCells(matrix)[2].question.value).toBe("Question 1");
  });
  test("the expanded state survives the view switch and the page filter, a new survey drops it", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    getPanel(model, "page2").expand();
    switchView(creator, "form");
    switchView(creator, "grid");
    expect(model.filteredPage).toBeFalsy();
    expect(getPanel(model, "page1").state).toBe("expanded");
    expect(getPanel(model, "page2").state).toBe("expanded");
    model.filteredPage = creator.survey.getPageByName("page1");
    model.filteredPage = null;
    expect(getPanel(model, "page2").state).toBe("expanded");
    creator.JSON = JSON.parse(JSON.stringify(gridJSON));
    expect(getPanel(model, "page1").state).toBe("expanded");
    expect(getPanel(model, "page2").state).toBe("collapsed");
  });
  test("entering the grid view expands the current page's group only", () => {
    const creator = createFormCreator();
    const model = getModel(creator);
    model.selectedPageName = "page2";
    switchView(creator, "grid");
    // Never left on "All Pages" before: scoped to the page, as before.
    expect(model.filteredPage.name).toBe("page2");
    model.filteredPage = null;
    expect(getPanel(model, "page1").state).toBe("collapsed");
    expect(getPanel(model, "page2").state).toBe("expanded");
  });
  test("the page dropdown: All Pages shows every group, a page shows its group alone, expanded", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    expect(model.stringsTable.pageNames).toEqual(["page1", "page2"]);
    const list = <ListModel>creator.toolbar.getActionById("svc-translation-filter-page").data;
    list.onItemClick(list.actions.filter(item => item.id === "page2")[0]);
    expect(model.filteredPage.name).toBe("page2");
    expect(model.stringsTable.pageNames).toEqual(["page2"]);
    expect(getPanel(model, "page2").state).toBe("expanded");
    expect(getPageItemKeys(model, "page2")).toEqual(["q4.title"]);
    // The lone group can still be collapsed.
    getPanel(model, "page2").collapse();
    expect(getPanel(model, "page2").state).toBe("collapsed");
    list.onItemClick(list.actions.filter(item => item.id === null)[0]);
    expect(model.filteredPage).toBeFalsy();
    expect(model.stringsTable.pageNames).toEqual(["page1", "page2"]);
    expect(getPanel(model, "page2").state).toBe("collapsed");
  });
  test("many pages: every group but the first one is collapsed", () => {
    const pages: Array<any> = [];
    for (let p = 1; p <= 60; p++) {
      pages.push({ name: "page" + p, elements: [{ type: "text", name: "p" + p + "q1", title: "Question " + p }] });
    }
    const creator = createGridCreator({ locale: "de", pages: pages });
    const model = getModel(creator);
    expect(model.filteredPage).toBeFalsy();
    expect(model.stringsTable.pageNames).toHaveLength(60);
    expect(model.stringsTable.pageNames.filter(name => model.stringsTable.isGroupExpanded(name))).toEqual(["page1"]);
    expect(getMatrices(model)).toHaveLength(60);
  });
  test("the All strings toggle changes the rows and the counts", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    expect(getPageItemKeys(model, "page1").indexOf("q1.description")).toBe(-1);
    const usedCount = getPanel(model, "page1").description;
    model.showAllStrings = true;
    expect(getPageItemKeys(model, "page1").indexOf("q1.description")).toBeGreaterThan(-1);
    const total = getPageItemKeys(model, "page1").length;
    expect(total).toBeGreaterThan(4);
    expect(getPanel(model, "page1").description).toBe("1/" + total);
    model.showAllStrings = false;
    expect(getPanel(model, "page1").description).toBe(usedCount);
  });
  test("a target edit updates the group count and the form view's title action", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    getTargetCell(findRowByQuestionCell(model, "q2")).value = "Frage 2";
    expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBe("Frage 2");
    expect(getPanel(model, "page1").description).toBe("2/4");
    switchView(creator, "form");
    const action = model.targetSurvey.getQuestionByName("q2").getTitleActions().filter((a: any) => a.id === "svc-translate-question")[0];
    expect(action.title).toBe("1/3");
  });
  test("a Source cell edit writes the source locale", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    const matrix = findMatrix(model, "q1", "title");
    getCells(matrix)[2].question.value = "Question 1 new";
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toBe("Question 1 new");
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
  });
  test("the group to show is scrolled into the view once the table survey is rendered", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    getPanel(model, "page2").expand();
    model.stringsTable.scrollGroupIntoView("page2");
    expect(model.stringsTable.pendingScrollGroupName).toBe("page2");
    const survey = model.stringsSurvey;
    const spy = vi.spyOn(survey, "scrollElementToTop").mockImplementation((): any => undefined);
    // Not the panel's own render: a group below the first lazily rendered rows is a skeleton until
    // it is scrolled to, and survey-core's scrollElementToTop renders it on its way.
    const root = document.createElement("div");
    survey.onAfterRenderSurvey.fire(survey, <any>{ survey: survey, htmlElement: root });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe(getPanel(model, "page2"));
    expect(spy.mock.calls[0][6]).toBe(root);
    expect(model.stringsTable.pendingScrollGroupName).toBeFalsy();
    // A rebuilt table drops a request it has not served.
    model.stringsTable.scrollGroupIntoView("page2");
    model.reset();
    expect(model.stringsTable.pendingScrollGroupName).toBeFalsy();
  });
  test("a survey without pages lists its own strings in a group of their own", () => {
    const model = getModel(createGridCreator({ locale: "de", title: "My survey" }));
    expect(model.isEmpty).toBe(false);
    expect(model.stringsTable.pageNames).toEqual([""]);
    expect(getPanel(model, "").title).toBe("My survey");
    expect(getPanel(model, "").state).toBe("expanded");
    expect(getMatrices(model).map(matrix => getRowsText(matrix))).toEqual([["survey", "Survey title"]]);
  });
  test("a fresh state expands the first group when the first page has none", () => {
    const json = { locale: "de", pages: [{ name: "page1", elements: [{ type: "panel", name: "panel1" }] }, { name: "page2", elements: [{ type: "text", name: "q4", title: "Question 4" }] }] };
    const model = getModel(createGridCreator(json));
    expect(model.stringsTable.pageNames).toEqual(["page2"]);
    expect(getPanel(model, "page2").state).toBe("expanded");
    // Expanded while the survey is built (no property callbacks then): the state is kept.
    expect(model.stringsTable.isPageExpanded("page2")).toBe(true);
    expect(getMatrices(model).map(matrix => getRowsText(matrix))).toEqual([["q4", "Question title"]]);
    // A group collapsed by hand stays collapsed over a rebuild.
    getPanel(model, "page2").collapse();
    model.reset();
    expect(getPanel(model, "page2").state).toBe("collapsed");
  });
  test("the html cells show their text as it is: no placeholder processing", () => {
    const json = JSON.parse(JSON.stringify(gridJSON));
    json.title = "Page {pageno} of {pagecount}";
    json.pages[0].elements[1].choices[0] = { value: "{pageno}", text: "Item {pageno}" };
    const creator = createGridCreator(json);
    const model = getModel(creator);
    const stringCells = getMatrices(model).map(matrix => <any>getCells(matrix)[1].question);
    // The String texts come from the item display names; the html cells do not process them either.
    expect(stringCells.every(cell => cell.ignoreHtmlProgressing === true)).toBe(true);
    const table = new TranslationTable(model, { sourceReadOnly: true });
    const survey = table.createSurvey(model.root);
    const sourceCell = getCells(<QuestionMatrixDropdownModel>survey.getAllQuestions()[0])[2].question;
    expect(sourceCell.getType()).toBe("html");
    expect((<any>sourceCell).locHtml.renderedHtml).toBe("Page {pageno} of {pagecount}");
  });
  test("the progress link expands the collapsed group of the string, also when it is shown alone", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    model.filteredPage = creator.survey.getPageByName("page2");
    getPanel(model, "page2").collapse();
    const tracker = trackCommentFocus();
    try {
      model.selectFirstUntranslatedString();
      expect(getPanel(model, "page2").state).toBe("expanded");
      expect(tracker.focused).toHaveLength(1);
      expect(tracker.focused[0]).toBe(getTargetCell(findMatrix(model, "q4", "title")));
    } finally {
      tracker.restore();
    }
  });
  test("a new survey forgets how the grid was left: the next entry is scoped to the page", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    switchView(creator, "form");
    creator.JSON = JSON.parse(JSON.stringify(gridJSON));
    model.selectedPageName = "page2";
    switchView(creator, "grid");
    expect(model.filteredPage.name).toBe("page2");
  });
  test("the \"translation-tab:table\" area fires for the table survey", () => {
    const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide", translationSideBySideView: "grid" });
    const areas: Array<any> = [];
    creator.onSurveyInstanceCreated.add((_, options) => {
      if (options.area === "translation-tab:table") {
        areas.push({ groups: options.survey.getAllPanels().length, css: options.survey.css.root });
      }
    });
    creator.JSON = JSON.parse(JSON.stringify(gridJSON));
    creator.activeTab = "translation";
    expect(areas).toEqual([{ groups: 2, css: "st-root-modern st-translation-table st-translation-table--pages" }]);
    getModel(creator).showAllStrings = true;
    expect(areas).toHaveLength(2);
  });
});

describe("the translation table model: options for the dialogs", () => {
  const createTable = (options: any): { table: TranslationTable, survey: SurveyModel, creator: CreatorTester } => {
    const creator = createGridCreator();
    const model = getModel(creator);
    const table = new TranslationTable(model, options);
    const survey = table.createSurvey(model.root);
    return { table, survey, creator };
  };
  const getTableMatrices = (survey: SurveyModel): Array<QuestionMatrixDropdownModel> => <Array<QuestionMatrixDropdownModel>>survey.getAllQuestions()
    .filter((q: any) => Array.isArray(q.rows) && q.rows.length > 0);
  const getTableKeys = (survey: SurveyModel): Array<string> => getTableMatrices(survey).map(q => {
    const item = <TranslationItem>q.rows[0]["translationData"];
    return (!!item.context && item.context.name !== undefined ? item.context.name : "") + "." + item.name;
  });
  const findTableMatrix = (survey: SurveyModel, contextName: string): QuestionMatrixDropdownModel =>
    getTableMatrices(survey).filter(q => q.rows[0]["translationData"].context.name === contextName)[0];
  const isUntranslated = (item: TranslationItem): boolean => !item.locString.getLocaleText("de");
  test("the filter predicate: a live filter drops the row an edit takes out of it", () => {
    const { table, survey } = createTable({ filter: isUntranslated });
    expect(getTableKeys(survey).indexOf("q1.title")).toBe(-1);
    expect(getTableKeys(survey).indexOf("q4.title")).toBeGreaterThan(-1);
    expect(table.getGroupCountText("page1")).toBe("0/3");
    getTargetCell(findTableMatrix(survey, "q4")).value = "Frage 4";
    expect(getTableKeys(survey).indexOf("q4.title")).toBe(-1);
    expect(table.getGroupCountText("page2")).toBe("0/0");
  });
  test("frozen rows keep a row that stops passing the filter, the counts follow the edits", () => {
    const { table, survey, creator } = createTable({ filter: isUntranslated, freezeRows: true });
    getTargetCell(findTableMatrix(survey, "q4")).value = "Frage 4";
    expect(creator.survey.getQuestionByName("q4").locTitle.getLocaleText("de")).toBe("Frage 4");
    expect(getTableKeys(survey).indexOf("q4.title")).toBeGreaterThan(-1);
    expect(table.getGroupCountText("page2")).toBe("1/1");
    // A rebuild of the group (collapse and expand) keeps the frozen rows.
    table.collapseGroup("page2");
    table.expandGroup("page2");
    expect(getTableKeys(survey).indexOf("q4.title")).toBeGreaterThan(-1);
  });
  test("the source read-only option: plain text, not an input", () => {
    const { survey } = createTable({ sourceReadOnly: true });
    const cells = getCells(findTableMatrix(survey, "q1"));
    expect(cells.map(cell => cell.question.getType())).toEqual(["html", "html", "html", "comment"]);
    expect((<any>cells[2].question).html).toBe("Question 1");
    expect(cells[3].question.value).toBe("Frage 1");
  });
  test("the element layout: no groups and no Question column", () => {
    const creator = createGridCreator();
    const model = getModel(creator);
    const table = new TranslationTable(model, { layout: "element" });
    const element = new TranslationGroup("q2", creator.survey.getQuestionByName("q2"), model);
    const survey = table.createSurvey(element);
    expect(survey.getAllPanels()).toHaveLength(0);
    const matrices = getTableMatrices(survey);
    expect(matrices.map(m => (<any>getCells(m)[0].question).html)).toEqual(["Question title", "Choices: Item 1", "Choices: Item 2"]);
    expect(matrices[0].columns.map(col => col.name)).toEqual(["svc-translation-string", getDefaultLocaleName(), "de"]);
  });
});
