import { QuestionCommentModel, QuestionMatrixDropdownModel, SurveyModel } from "survey-core";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { translationHeaderMatrixName, updateSourceTargetHeaderColumns } from "../../src/components/tabs/translation-table";
import { getDefaultLocaleName } from "../../src/survey-helper";
import { CreatorTester } from "../creator-tester";
import "survey-core/survey.i18n";

// The strings survey builder of both translation modes (TranslationTable). The layouts are tested
// through the models (translation.tests.ts, translation-side-by-side-grid.tests.ts); these tests
// cover what the table does on its own: the survey it replaces, the header survey and the lookups.

const json = {
  pages: [
    {
      name: "page1",
      elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }]
    }
  ]
};

function findMatrix(survey: SurveyModel, contextName: string, itemName: string): QuestionMatrixDropdownModel {
  return <QuestionMatrixDropdownModel>survey.getAllQuestions().filter((matrix: any) => {
    const item = <TranslationItem>(matrix.rows[0] && matrix.rows[0]["translationData"]);
    return !!item && item.name === itemName && !!item.context && item.context.name === contextName;
  })[0];
}
function getCell(matrix: QuestionMatrixDropdownModel, columnName: string): QuestionCommentModel {
  const index = matrix.columns.map(column => column.name).indexOf(columnName);
  return <QuestionCommentModel>matrix.visibleRows[0].cells[index].question;
}
function createSideBySideGrid(): TranslationSideBySide {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide", translationSideBySideView: "grid" });
  creator.JSON = JSON.parse(JSON.stringify(json));
  creator.activeTab = "translation";
  return <TranslationSideBySide>(<TabTranslationPlugin>creator.getPlugin("translation")).model;
}

describe("TranslationTable", () => {
  test("a rebuilt strings survey: the previous one no longer writes its edits", () => {
    const survey = new SurveyModel(json);
    const translation = new Translation(survey);
    translation.reset();
    const oldSurvey = translation.stringsSurvey;
    translation.reset();
    expect(translation.stringsSurvey).not.toBe(oldSurvey);
    const locTitle = survey.getQuestionByName("q1").locTitle;
    getCell(findMatrix(oldSurvey, "q1", "title"), getDefaultLocaleName()).value = "Old survey";
    expect(locTitle.getLocaleText("")).toBe("Question 1");
    getCell(findMatrix(translation.stringsSurvey, "q1", "title"), getDefaultLocaleName()).value = "New survey";
    expect(locTitle.getLocaleText("")).toBe("New survey");
  });
  test("the header survey follows the locale columns of the strings survey", () => {
    const translation = new Translation(new SurveyModel(json));
    translation.reset();
    const header = <QuestionMatrixDropdownModel>translation.stringsHeaderSurvey.getQuestionByName(translationHeaderMatrixName);
    const matrix = findMatrix(translation.stringsSurvey, "q1", "title");
    expect(header.columns.map(col => col.name)).toEqual(matrix.columns.map(col => col.name));
    expect(translation.stringsHeaderSurvey.css.root.indexOf("st-translation-table-header")).toBe(-1);
    translation.addLocale("fr");
    expect(header.columns.map(col => col.name)).toEqual([getDefaultLocaleName(), "de", "fr"]);
    expect(matrix.columns.map(col => col.name)).toEqual([getDefaultLocaleName(), "de", "fr"]);
  });
  test("the header survey of the \"pages\" layout: hidden, the source/target titles follow the languages", () => {
    const model = createSideBySideGrid();
    expect(model.stringsHeaderSurvey.css.root.indexOf("st-translation-table-header")).toBeGreaterThan(-1);
    model.targetLocale = "de";
    const header = <QuestionMatrixDropdownModel>model.stringsHeaderSurvey.getQuestionByName(translationHeaderMatrixName);
    expect(header.columns.map(col => col.title)).toEqual(["Source: Default (English)", "Target: Deutsch"]);
  });
  test("updateSourceTargetHeaderColumns: the pair, the target alone, the source alone", () => {
    const matrix = new QuestionMatrixDropdownModel("m");
    matrix.addColumn("default");
    matrix.addColumn("de");
    updateSourceTargetHeaderColumns(matrix, "", "de");
    expect(matrix.columns.map(col => col.title)).toEqual(["Source: Default (English)", "Target: Deutsch"]);
    matrix.columns.splice(0, 1);
    updateSourceTargetHeaderColumns(matrix, "de", "de");
    expect(matrix.columns[0].title).toBe("Target: Deutsch");
    updateSourceTargetHeaderColumns(matrix, "de", "", false);
    expect(matrix.columns[0].title).toBe("Source: Deutsch");
  });
  test("the lookups by a cell and by a string: getCellItem, focusCell", () => {
    const translation = new Translation(new SurveyModel(json));
    translation.reset();
    const matrix = findMatrix(translation.stringsSurvey, "q1", "title");
    const cell = getCell(matrix, "de");
    const item = translation.stringsTable.getCellItem(cell);
    expect(item.name).toBe("title");
    expect(translation.stringsTable.getCellItem(undefined)).toBeUndefined();
    const focused: Array<string> = [];
    matrix.visibleRows[0].cells.forEach(c => c.question.focus = (): any => focused.push(c.column.name));
    translation.stringsTable.focusCell(item.locString);
    expect(focused).toEqual(["de"]);
  });
});
