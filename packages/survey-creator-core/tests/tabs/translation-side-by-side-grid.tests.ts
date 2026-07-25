import { ListModel, QuestionCommentModel, QuestionMatrixDropdownModel } from "survey-core";
import { TranslationSideBySide, TranslationSideBySideGrid } from "../../src/components/tabs/translation-side-by-side";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
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
function getModel(creator: CreatorTester): TranslationSideBySideGrid {
  return <TranslationSideBySideGrid>getPlugin(creator).model;
}
function getListItems(creator: CreatorTester, actionId: string): Array<any> {
  const action = creator.toolbar.getActionById(actionId);
  return (<ListModel>action.data).actions;
}
function getMatrices(model: Translation): Array<QuestionMatrixDropdownModel> {
  return <Array<QuestionMatrixDropdownModel>>model.stringsSurvey.getAllQuestions();
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

test("grid view: activate creates the grid model, no survey copies, toolbar composition", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  expect(model).toBeTruthy();
  expect(model.isSideBySide).toBeTruthy();
  expect(model.isSideBySideGrid).toBeTruthy();
  expect(model.stringsSurvey).toBeTruthy();
  expect(model.stringsHeaderSurvey).toBeTruthy();
  expect(model.sourceSurvey).toBeFalsy();
  expect(model.destinationSurvey).toBeFalsy();
  expect(model.showAllStrings).toBeFalsy();
  const sidebarPage = creator.sidebar.pages.filter(page => page.id === "translation")[0];
  expect(sidebarPage.visible).toBeFalsy();
  expect(creator.toolbar.getActionById("svc-translation-filter-page").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-show-all-strings").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-source-locale").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-destination-locale").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-import").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svc-translation-export").visible).toBeTruthy();
  expect(creator.toolbar.getActionById("svd-translation-merge_locale_withdefault").visible).toBeFalsy();
});

test("grid view: the creator option defaults to the forms view", () => {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  creator.JSON = JSON.parse(JSON.stringify(gridJSON));
  creator.activeTab = "translation";
  const model = <TranslationSideBySide>getPlugin(creator).model;
  expect(model.isSideBySideGrid).toBeFalsy();
  expect(model.sourceSurvey).toBeTruthy();
  expect(model.stringsSurvey).toBeFalsy();
});

test("grid view: a source column and a destination column, both editable", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  expect(matrix).toBeTruthy();
  expect(matrix.columns).toHaveLength(2);
  expect(matrix.columns[0].name).toBe(getDefaultLocaleName());
  expect(matrix.columns[0].readOnly).toBeFalsy();
  expect(matrix.columns[1].name).toBe("de");
  expect(matrix.columns[1].readOnly).toBeFalsy();
  const sourceCell = <QuestionCommentModel>matrix.visibleRows[0].cells[0].question;
  const destinationCell = <QuestionCommentModel>matrix.visibleRows[0].cells[1].question;
  expect(sourceCell.isReadOnly).toBeFalsy();
  expect(sourceCell.value).toBe("Question 1");
  expect(destinationCell.isReadOnly).toBeFalsy();
  expect(destinationCell.value).toBe("Frage 1");

  const header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(2);
  expect(header.columns[0].title.indexOf("Source: ")).toBe(0);
  expect(header.columns[1].title.indexOf("Target: ")).toBe(0);
});

test("grid view: a single editable column when source and destination locales are equal", () => {
  const json = JSON.parse(JSON.stringify(gridJSON));
  delete json.locale;
  const creator = createGridCreator(json);
  const model = getModel(creator);
  expect(model.sourceLocale || "").toBe("");
  expect(model.destinationLocale || "").toBe("");
  const matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(1);
  expect(matrix.columns[0].name).toBe(getDefaultLocaleName());
  expect(matrix.columns[0].readOnly).toBeFalsy();
  const header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName("stringsHeader");
  expect(header.columns).toHaveLength(1);
  expect(header.columns[0].title.indexOf("Target: ")).toBe(0);
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

test("grid view: destination cell edits are undoable and write the destination locale", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  matrix.visibleRows[0].cells[1].question.value = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(realQuestion.locTitle.getLocaleText("")).toBe("Question 1");
  creator.undo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1");
  expect(matrix.visibleRows[0].cells[1].question.value).toBe("Frage 1");
  creator.redo();
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu");
  expect(matrix.visibleRows[0].cells[1].question.value).toBe("Frage 1 neu");
});

test("grid view: onTranslationItemChanging applies to grid edits", () => {
  const creator = createGridCreator();
  creator.onTranslationItemChanging.add((sender, options) => {
    options.newText = options.newText + "!";
  });
  const model = getModel(creator);
  const matrix = findMatrix(model, "q1", "title");
  matrix.visibleRows[0].cells[1].question.value = "Frage 1 neu";
  const realQuestion = creator.survey.getQuestionByName("q1");
  expect(realQuestion.locTitle.getLocaleText("de")).toBe("Frage 1 neu!");
});

test("grid view: changing the destination locale re-runs the column setup and keeps values", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const stringsSurvey = model.stringsSurvey;
  model.destinationLocale = "fr";
  expect(creator.survey.locale).toBe("fr");
  // The strings survey is kept, only its columns and data are updated.
  expect(model.stringsSurvey).toBe(stringsSurvey);
  let matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns).toHaveLength(2);
  expect(matrix.columns[1].name).toBe("fr");
  expect(matrix.visibleRows[0].cells[1].question.value).toBeFalsy();
  model.destinationLocale = "de";
  matrix = findMatrix(model, "q1", "title");
  expect(matrix.columns[1].name).toBe("de");
  expect(matrix.visibleRows[0].cells[1].question.value).toBe("Frage 1");
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

test("grid view: CSV export covers the whole survey regardless of the page scope", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  model.filteredPage = creator.survey.getPageByName("page1");
  expect(model.root.obj.name).toBe("page1");
  const csv = model.exportToCSV();
  expect(csv.indexOf("q1.title")).toBeGreaterThan(-1);
  expect(csv.indexOf("q4.title")).toBeGreaterThan(-1);
});

test("grid view: the machine-translation editor operates on the whole survey", () => {
  const creator = createGridCreator();
  const model = getModel(creator);
  const editor = model.createTranslationEditor(model.destinationLocale);
  const contexts = editor.translation.root.allLocItems.map(item => (!!item.context ? item.context.name : ""));
  // q4 (page2, no "de" text yet) must be offered although the grid shows page1 only.
  expect(contexts.indexOf("q4")).toBeGreaterThan(-1);
  editor.dispose();
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
