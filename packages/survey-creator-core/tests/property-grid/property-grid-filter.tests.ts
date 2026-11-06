import { QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionTagboxModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";

// The Filter Control (survey-library #11890) in the property grid: its own settings and the
// operators a question or a column offers as a filter field.
const matrixJson = (name: string, columns: Array<string>): any =>
  ({ type: "matrixdynamic", name: name, columns: columns.map(col => ({ name: col, title: col.toUpperCase(), cellType: "text" })) });

describe("Property grid: the Filter Control", () => {
  test("the data source lists only matrices and dynamic panels", () => {
    const survey = new SurveyModel({ elements: [
      { type: "text", name: "t1" }, matrixJson("m1", ["a"]),
      { type: "matrixdropdown", name: "m2", rows: ["r1"], columns: [{ name: "b" }] },
      { type: "paneldynamic", name: "p1", templateElements: [{ type: "text", name: "c" }] },
      { type: "filter", name: "f" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    const editor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("source");
    expect(editor.getType(), "#1").toBe("dropdown");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["m1", "m2", "p1"]);
    editor.value = "m1";
    expect(survey.getQuestionByName("f").source, "#3").toBe("m1");
  });
  test("search fields are a tag box of the source's columns", () => {
    const survey = new SurveyModel({ elements: [
      { type: "filter", name: "f", source: "m1", showSearch: true, searchFields: ["country", "age"] },
      matrixJson("m1", ["country", "age"]), matrixJson("m2", ["country", "city"])] });
    const filter = <any>survey.getQuestionByName("f");
    const propertyGrid = new PropertyGridModelTester(filter);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("searchFields");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["country", "age"]);
    expect(editor.choices.map(item => item.text), "#3").toEqual(["COUNTRY", "AGE"]);
    expect(Array.from(editor.value), "#4").toEqual(["country", "age"]);
    propertyGrid.survey.getQuestionByName("source").value = "m2";
    expect(editor.choices.map(item => item.value), "#5").toEqual(["country", "city"]);
    expect(Array.from(filter.searchFields), "#6: age is not in the new source, country stays").toEqual(["country"]);
    editor.value = ["country", "city"];
    expect(Array.from(filter.searchFields), "#7").toEqual(["country", "city"]);
  });
  test("filter operators are a tag box with operator names", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("filterOperators");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.length, "#2").toBe(13);
    expect(editor.choices[2].value, "#3").toBe("equal");
    expect(editor.choices[2].text, "#4").toBe("Equals");
  });
  test("dataList stays a text area", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    expect(propertyGrid.survey.getQuestionByName("dataList").getType()).toBe("comment");
  });
});

describe("Property grid: the Filter Control presets", () => {
  const createGrid = (filterJson: any): { filter: any, grid: PropertyGridModelTester, matrix: QuestionMatrixDynamicModel } => {
    const survey = new SurveyModel({ elements: [Object.assign({ type: "filter", name: "f" }, filterJson)] });
    const filter = survey.getQuestionByName("f");
    const grid = new PropertyGridModelTester(filter);
    return { filter: filter, grid: grid, matrix: <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("items") };
  };
  test("presets are a matrix of name and title with details", () => {
    const { matrix } = createGrid({ items: [{ name: "a", title: "A", expression: "{x} > 1" }] });
    expect(matrix.getType(), "#1").toBe("matrixdynamic");
    expect(matrix.columns.map(col => col.name), "#2").toEqual(["name", "title"]);
    expect(matrix.allowRowReorder, "#3: the order of the presets is the order of the chips").toBe(true);
    expect(matrix.addRowText, "#4").toBe("Add preset");
    expect(matrix.noRowsText, "#5").toBe("No presets");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    const visibleNames = (): Array<string> => row.detailPanel.questions.filter(q => q.isVisible).map(q => q.name);
    expect(visibleNames(), "#6").toEqual(["type", "expression", "allowEdit", "allowDelete"]);
    expect(row.detailPanel.getQuestionByName("expression").value, "#7").toBe("{x} > 1");
    row.detailPanel.getQuestionByName("type").value = "ai";
    expect(visibleNames(), "#8").toEqual(["type", "expression", "prompt", "allowEdit", "allowDelete"]);
  });
  test("adding a preset", () => {
    const { filter, matrix } = createGrid({});
    matrix.addRow();
    expect(filter.items.length, "#1").toBe(1);
    expect(filter.items[0].name, "#2").toBe("preset1");
  });
  test("renaming a preset keeps it the default one", () => {
    const { filter, grid, matrix } = createGrid({ items: [{ name: "a" }, { name: "c" }], defaultItem: "a" });
    matrix.visibleRows[0].cells[0].question.value = "b";
    expect(filter.items[0].name, "#1").toBe("b");
    expect(filter.defaultItem, "#2").toBe("b");
    const defaultItem = <QuestionDropdownModel>grid.survey.getQuestionByName("defaultItem");
    expect(defaultItem.choices.map(item => item.value), "#3").toEqual(["b", "c"]);
    expect(defaultItem.value, "#4").toBe("b");
  });
  test("removing the last preset leaves no default to pick", () => {
    const { filter, grid, matrix } = createGrid({ items: [{ name: "a" }], defaultItem: "a" });
    matrix.removeRow(0);
    expect(filter.items.length, "#1").toBe(0);
    const defaultItem = <QuestionDropdownModel>grid.survey.getQuestionByName("defaultItem");
    expect(defaultItem.choices.length, "#2").toBe(0);
    expect(!!filter.defaultItem, "#3").toBe(false);
  });
  test("the add button of multiple text items is unchanged", () => {
    const survey = new SurveyModel({ elements: [{ type: "multipletext", name: "q1", items: [{ name: "i1" }] }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const matrix = <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("items");
    expect(matrix.addRowText).not.toBe("Add preset");
  });
});
