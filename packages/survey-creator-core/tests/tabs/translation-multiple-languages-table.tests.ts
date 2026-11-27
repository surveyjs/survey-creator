import { QuestionCommentModel, QuestionMatrixDropdownModel } from "survey-core";
import { Translation, TranslationEditor } from "../../src/components/tabs/translation";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { getDefaultLocaleName } from "../../src/survey-helper";
import { CreatorTester } from "../creator-tester";
import {
  findStringMatrix, getGroupPanel, getLocaleCell, getLocaleColumnNames, getLocaleColumnTitles, getLocaleColumns,
  getQuestionCellHtml, getStringCellHtml, getStringMatrices
} from "./translation-table-helper";
import "survey-core/survey.i18n";

// The multiple-languages mode (the default translationMode) and its machine-translation dialog show
// their strings in the side-by-side grid view's table: the "pages" layout of TranslationTable. The only
// difference between the modes: the multiple-languages tab can show more than one target language.

const json = {
  title: "Survey title",
  pages: [
    {
      name: "page1", title: "First page",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "text", name: "q2", title: "Question 2" }
      ]
    },
    {
      name: "page2",
      elements: [{ type: "text", name: "q3", title: { default: "Question 3", fr: "Question 3 fr" } }]
    }
  ]
};

function createCreator(options: any = {}, surveyJSON: any = json): CreatorTester {
  const creator = new CreatorTester(Object.assign({ showTranslationTab: true }, options));
  // The survey takes ownership of the loaded JSON object, so a copy keeps the tests independent.
  creator.JSON = JSON.parse(JSON.stringify(surveyJSON));
  creator.activeTab = "translation";
  return creator;
}
function getModel(creator: CreatorTester): Translation {
  return (<TabTranslationPlugin>creator.getPlugin("translation")).model;
}
// The rows of the languages matrix, in their order: a locale name ("" is the default one) and whether
// it is shown. Assigned as the languages matrix value, as a reorder or a checkbox click does.
function setLanguages(model: Translation, languages: Array<{ name: string, isSelected: boolean }>): void {
  model.localesQuestion.value = languages.map(lang => ({ name: lang.name, isSelected: lang.isSelected, displayName: model.getLocaleName(lang.name) }));
}
function getTitleMatrix(creator: CreatorTester, questionName: string): QuestionMatrixDropdownModel {
  return findStringMatrix(getModel(creator), creator.survey.getQuestionByName(questionName).locTitle);
}
function getCellClasses(matrix: QuestionMatrixDropdownModel): Array<string> {
  const row = matrix.renderedTable.rows.filter((r: any) => !r.isErrorsRow && r.cells.length > 2)[0];
  return row.cells.map((cell: any) => cell.className);
}
function getCountTexts(model: Translation): Array<string> {
  return ["page1", "page2"].map(name => model.stringsTable.getGroupCountText(name));
}

describe("multiple-languages table", () => {
  test("multiple-languages table: the root and cell classes are those of the grid view", () => {
    const creator = createCreator();
    const model = getModel(creator);
    const root = model.stringsSurvey.css.root;
    expect(root).toContain("st-translation-table");
    expect(root).toContain("st-translation-table--pages");

    const grid = createCreator({ translationMode: "sideBySide", translationSideBySideView: "grid" });
    const gridModel = <TranslationSideBySide>getModel(grid);
    gridModel.targetLocale = "de";
    expect(gridModel.stringsSurvey.css.root).toBe(root);

    // The default locale, de and fr: the Question, String, Source and two Target cells.
    const classes = getCellClasses(getTitleMatrix(creator, "q1"));
    const gridClasses = getCellClasses(getTitleMatrix(grid, "q1"));
    expect(classes.slice(1, 4)).toEqual(gridClasses.slice(1, 4));
    expect(classes[1]).toContain("st-translation-table__cell--question");
    expect(classes[2]).toContain("st-translation-table__cell--string");
    expect(classes[3]).toContain("st-translation-table__cell--source");
    expect(classes[4]).toContain("st-translation-table__cell--target");
    expect(classes[5]).toContain("st-translation-table__cell--target");
    expect(classes[4]).toBe(gridClasses[4]);
  });
  test("multiple-languages table: there is no header survey", () => {
    const reasons: Array<string> = [];
    const creator = new CreatorTester({ showTranslationTab: true });
    creator.onSurveyInstanceCreated.add((_, options) => reasons.push(options.area));
    creator.JSON = JSON.parse(JSON.stringify(json));
    creator.activeTab = "translation";
    const model = getModel(creator);
    expect((<any>model).stringsHeaderSurvey).toBeUndefined();
    expect(reasons).toContain("translation-tab:table");
    expect(reasons).not.toContain("translation-tab:table-header");
    // Each page group's first row carries the column titles.
    const groupFirstRows = getStringMatrices(model).filter(matrix => matrix.showHeader);
    expect(groupFirstRows).toHaveLength(2);
    expect(groupFirstRows[0].parent).toBe(getGroupPanel(model, "page1"));
    expect(groupFirstRows[1].parent).toBe(getGroupPanel(model, "page2"));
  });
  test("multiple-languages table: the survey strings are in the first page group", () => {
    const creator = createCreator();
    const model = getModel(creator);
    expect(model.stringsTable.pageNames).toEqual(["page1", "page2"]);
    const first = getStringMatrices(model)[0];
    expect(first.parent).toBe(getGroupPanel(model, "page1"));
    expect(getQuestionCellHtml(first)).toBe("survey");
    expect(getStringCellHtml(first)).toBe("Survey title");
    // The page filter scoped to the first page.
    model.filteredPage = creator.survey.pages[0];
    expect(model.stringsTable.pageNames).toEqual(["page1"]);
    expect(getQuestionCellHtml(getStringMatrices(model)[0])).toBe("survey");
    // A survey without pages: its strings make a group of their own, named after the survey.
    const noPages = createCreator({}, { title: "Only a title" });
    const noPagesModel = getModel(noPages);
    expect(noPagesModel.stringsTable.pageNames).toEqual([""]);
    expect(getGroupPanel(noPagesModel, "").title).toBe("Only a title");
    expect(getStringCellHtml(getStringMatrices(noPagesModel)[0])).toBe("Survey title");
  });
  test("multiple-languages table: the group title is the page title, and it falls back to the name", () => {
    const model = getModel(createCreator());
    expect(getGroupPanel(model, "page1").title).toBe("First page");
    expect(getGroupPanel(model, "page2").title).toBe("page2");
  });
  test("multiple-languages table: the count shows with the default plus one locale only, and follows the checkboxes", () => {
    const creator = createCreator();
    const model = getModel(creator);
    // The default locale, de and fr: two targets, no count.
    expect([...model.locales]).toEqual(["", "de", "fr"]);
    expect(getCountTexts(model)).toEqual(["", ""]);
    // A checkbox hides fr: the default locale plus de. page1: the survey title, the page
    // title, q1 and q2; q1 has a German title.
    setLanguages(model, [{ name: "", isSelected: true }, { name: "de", isSelected: true }, { name: "fr", isSelected: false }]);
    expect([...model.locales]).toEqual(["", "de"]);
    expect(getCountTexts(model)).toEqual(["1/4", "0/1"]);
    // Moved: the default locale after Deutsch is still the source.
    setLanguages(model, [{ name: "de", isSelected: true }, { name: "", isSelected: true }, { name: "fr", isSelected: false }]);
    expect([...model.locales]).toEqual(["de", ""]);
    expect(getCountTexts(model)).toEqual(["1/4", "0/1"]);
    // The default locale hidden: Deutsch alone, no Source column, no count.
    setLanguages(model, [{ name: "de", isSelected: true }, { name: "", isSelected: false }, { name: "fr", isSelected: false }]);
    expect([...model.locales]).toEqual(["de"]);
    expect(getCountTexts(model)).toEqual(["", ""]);
    // The default locale alone: no target, no count.
    setLanguages(model, [{ name: "de", isSelected: false }, { name: "", isSelected: true }, { name: "fr", isSelected: false }]);
    expect([...model.locales]).toEqual([""]);
    expect(getCountTexts(model)).toEqual(["", ""]);
    // fr checked again: the count is over fr.
    setLanguages(model, [{ name: "de", isSelected: false }, { name: "", isSelected: true }, { name: "fr", isSelected: true }]);
    expect(getCountTexts(model)).toEqual(["0/4", "1/1"]);
    // A cell edit moves the count.
    getLocaleCell(getTitleMatrix(creator, "q2"), "fr").value = "Question 2 fr";
    expect(getCountTexts(model)).toEqual(["1/4", "1/1"]);
  });
  test("multiple-languages table: the column titles and roles with 1, 2 and 3 targets, the default locale moved or hidden", () => {
    const creator = createCreator();
    const model = getModel(creator);
    model.addLocale("es");
    const def = getDefaultLocaleName();
    const matrix = (): QuestionMatrixDropdownModel => getTitleMatrix(creator, "q1");
    const roles = (): Array<string> => getLocaleColumns(matrix()).map(column => column.name + ":" + (column["translationIsSource"] ? "source" : "target"));
    expect(matrix().columns.map(column => column.name)).toEqual(["svc-translation-question", "svc-translation-string", def, "de", "fr", "es"]);
    expect(getLocaleColumnTitles(matrix())).toEqual(["Source: Default (English)", "Target: Deutsch", "Target: Français", "Target: Español"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(roles()).toEqual([def + ":source", "de:target", "fr:target", "es:target"]);

    setLanguages(model, [{ name: "", isSelected: true }, { name: "de", isSelected: true }, { name: "fr", isSelected: true }, { name: "es", isSelected: false }]);
    expect(getLocaleColumnTitles(matrix())).toEqual(["Source: Default (English)", "Target: Deutsch", "Target: Français"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

    setLanguages(model, [{ name: "", isSelected: true }, { name: "de", isSelected: true }, { name: "fr", isSelected: false }, { name: "es", isSelected: false }]);
    expect(getLocaleColumnTitles(matrix())).toEqual(["Source: Default (English)", "Target: Deutsch"]);

    // Moved: the languages matrix order, the default locale is still the Source column.
    setLanguages(model, [{ name: "de", isSelected: true }, { name: "fr", isSelected: true }, { name: "", isSelected: true }, { name: "es", isSelected: false }]);
    expect(getLocaleColumnTitles(matrix())).toEqual(["Target: Deutsch", "Target: Français", "Source: Default (English)"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(getCellClasses(matrix())[3]).toContain("st-translation-table__cell--target");
    expect(getCellClasses(matrix())[5]).toContain("st-translation-table__cell--source");

    // Hidden: no Source column, every column is a Target.
    setLanguages(model, [{ name: "de", isSelected: true }, { name: "fr", isSelected: true }, { name: "", isSelected: false }, { name: "es", isSelected: false }]);
    expect(getLocaleColumnTitles(matrix())).toEqual(["Target: Deutsch", "Target: Français"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(roles()).toEqual(["de:target", "fr:target"]);
  });
  test("multiple-languages table: an empty Target cell shows the source text, muted", () => {
    const creator = createCreator();
    const model = getModel(creator);
    const q2 = getTitleMatrix(creator, "q2");
    expect((<QuestionCommentModel>getLocaleCell(q2, "de")).placeholder).toBe("Question 2");
    expect((<QuestionCommentModel>getLocaleCell(q2, "fr")).placeholder).toBe("Question 2");
    // A Source cell keeps the grid view's placeholder: the question name.
    getLocaleCell(q2, getDefaultLocaleName()).value = "";
    expect((<QuestionCommentModel>getLocaleCell(q2, getDefaultLocaleName())).placeholder).toBe("q2");
    expect((<QuestionCommentModel>getLocaleCell(q2, "de")).placeholder).toBe("q2");
    getLocaleCell(q2, getDefaultLocaleName()).value = "Question 2";
    // The default locale hidden: the Target cells still show the default text.
    setLanguages(model, [{ name: "", isSelected: false }, { name: "de", isSelected: true }, { name: "fr", isSelected: true }]);
    const hidden = getTitleMatrix(creator, "q2");
    expect(getLocaleColumnNames(hidden)).toEqual(["de", "fr"]);
    expect((<QuestionCommentModel>getLocaleCell(hidden, "de")).placeholder).toBe("Question 2");
    // A string with nothing to show: no "Type translation here..." in a Target cell.
    model.showAllStrings = true;
    const description = findStringMatrix(model, creator.survey.getQuestionByName("q2").locDescription);
    expect((<QuestionCommentModel>getLocaleCell(description, "de")).placeholder).toBe("");
  });
});

describe("multiple-languages table: the machine-translation dialog", () => {
  const createEditor = (): { creator: CreatorTester, editor: TranslationEditor } => {
    const creator = createCreator();
    creator.onMachineTranslate.add((_, options) => {
      options.callback(options.strings.map((str: string) => options.toLocale + ": " + str));
    });
    const editor = getModel(creator).createTranslationEditor("de");
    return { creator, editor };
  };
  const getEditorMatrix = (creator: CreatorTester, editor: TranslationEditor, questionName: string): QuestionMatrixDropdownModel =>
    findStringMatrix(editor.translation, creator.survey.getQuestionByName(questionName).locTitle);

  test("multiple-languages table: the dialog's Source column is read-only, the Target is the edit locale", () => {
    const { creator, editor } = createEditor();
    const survey = editor.translation.stringsSurvey;
    expect(survey.css.root).toContain("st-translation-table--pages");
    // q1 has a German title: the edit mode leaves it out.
    expect(findStringMatrix(editor.translation, creator.survey.getQuestionByName("q1").locTitle)).toBeUndefined();
    const matrix = getEditorMatrix(creator, editor, "q2");
    expect(matrix.columns.map(column => column.name)).toEqual(["svc-translation-question", "svc-translation-string", getDefaultLocaleName(), "de"]);
    expect(getLocaleColumnTitles(matrix)).toEqual(["Source: Default (English)", "Target: Deutsch"]);
    const source = getLocaleCell(matrix, getDefaultLocaleName());
    expect(source.getType()).toBe("html");
    expect(source.html).toBe("Question 2");
    expect((<QuestionCommentModel>getLocaleCell(matrix, "de")).placeholder).toBe("Question 2");
  });
  test("multiple-languages table: a \"Translate from\" switch updates the Source column and the toolbar", () => {
    const { creator, editor } = createEditor();
    const fromAction = editor.translation.stringsSurvey.navigationBar.getActionById("svc-translation-fromlocale");
    expect(fromAction.title).toBe("Default (English)");
    editor.setFromLocale("fr");
    const matrix = getEditorMatrix(creator, editor, "q3");
    expect(matrix.columns).toHaveLength(4);
    expect(getLocaleColumnNames(matrix)).toEqual(["fr", "de"]);
    expect(getLocaleColumnTitles(matrix)).toEqual(["Source: Français", "Target: Deutsch"]); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(getLocaleCell(matrix, "fr").html).toBe("Question 3 fr");
    expect((<QuestionCommentModel>getLocaleCell(matrix, "de")).placeholder).toBe("Question 3 fr");
    expect(fromAction.title).toBe("Français"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    // The count is still over the edit locale.
    expect(editor.translation.stringsTable.getGroupCountText("page2")).toBe("0/1");
  });
  test("multiple-languages table: a rebuilt dialog survey keeps the chosen \"Translate from\" on its toolbar", () => {
    const { editor } = createEditor();
    editor.setFromLocale("fr");
    // A CSV import inside the dialog resets the model: the strings survey and its toolbar are new.
    editor.translation.reset();
    const fromAction = editor.translation.stringsSurvey.navigationBar.getActionById("svc-translation-fromlocale");
    expect(fromAction.title).toBe("Français"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(fromAction.enabled).toBe(true);
    expect(getLocaleColumnNames(getStringMatrices(editor.translation)[0])).toEqual(["fr", "de"]);
  });
  test("multiple-languages table: translating into the default locale, an empty Target cell shows the source text", () => {
    const creator = createCreator({}, { pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: { de: "Frage 1" } }] }] });
    const editor = getModel(creator).createTranslationEditor("");
    const matrix = findStringMatrix(editor.translation, creator.survey.getQuestionByName("q1").locTitle);
    expect(getLocaleColumnTitles(matrix)).toEqual(["Source: Deutsch", "Target: Default (English)"]);
    expect((<QuestionCommentModel>getLocaleCell(matrix, getDefaultLocaleName())).placeholder).toBe("Frage 1");
  });
  test("multiple-languages table: the dialog's toolbar is the strings survey's navigation bar, at the top", () => {
    const { editor } = createEditor();
    const survey = editor.translation.stringsSurvey;
    expect(survey.navigationButtonsLocation).toBe("top");
    expect(survey.navigationBar.actions.map(action => action.id)).toEqual(["svc-translation-fromlocale", "svc-translation-machine", "svc-translation-import", "svc-translation-export"]);
    // A rebuilt strings survey (a CSV import resets the model) gets its toolbar again.
    editor.translation.reset();
    expect(editor.translation.stringsSurvey).not.toBe(survey);
    expect(editor.translation.stringsSurvey.navigationBar.getActionById("svc-translation-machine")).toBeTruthy();
  });
  test("multiple-languages table: the dialog counts its working copy, Apply writes the real survey", () => {
    const { creator, editor } = createEditor();
    const table = editor.translation.stringsTable;
    // page1: the survey title, the page title and q2 (q1 has a German title already).
    expect([table.getGroupCountText("page1"), table.getGroupCountText("page2")]).toEqual(["0/3", "0/1"]);
    editor.doMachineTranslation();
    expect([table.getGroupCountText("page1"), table.getGroupCountText("page2")]).toEqual(["3/3", "1/1"]);
    // The results are in the working copy, not in the survey yet.
    const q2 = creator.survey.getQuestionByName("q2");
    expect(q2.locTitle.getLocaleText("de")).toBeFalsy();
    expect(getLocaleCell(getEditorMatrix(creator, editor, "q2"), "de").value).toBe("de: Question 2");
    editor.apply();
    expect(q2.locTitle.getLocaleText("de")).toBe("de: Question 2");
    expect(creator.survey.getQuestionByName("q3").locTitle.getLocaleText("de")).toBe("de: Question 3");
  });
});
