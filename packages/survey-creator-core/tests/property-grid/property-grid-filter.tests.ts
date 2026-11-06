import { PanelModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionTagboxModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";

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
  test("search fields keep a nested path when search is turned off and on", () => {
    const survey = new SurveyModel({ elements: [
      { type: "filter", name: "f", source: "p", showSearch: true, searchFields: ["work.city"] },
      { type: "paneldynamic", name: "p", templateElements: [
        { type: "multipletext", name: "home", items: [{ name: "city" }] },
        { type: "multipletext", name: "work", items: [{ name: "city" }] }] }] });
    const filter = <any>survey.getQuestionByName("f");
    const propertyGrid = new PropertyGridModelTester(filter);
    const showSearch = propertyGrid.survey.getQuestionByName("showSearch");
    showSearch.value = false;
    showSearch.value = true;
    expect(Array.from(filter.searchFields), "#1").toEqual(["work.city"]);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("searchFields");
    expect(editor.choices.map(item => item.value), "#2: two tags, not two 'city'").toEqual(["home.city", "work.city"]);
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
  // In the Creator: it moves defaultItem along with the rename (creator-base, one undo step)
  test("renaming a preset keeps it the default one", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "filter", name: "f", items: [{ name: "a" }, { name: "c" }], defaultItem: "a" }] };
    const filter = <any>creator.survey.getQuestionByName("f");
    creator.selectElement(filter);
    const matrix = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("items");
    matrix.visibleRows[0].cells[0].question.value = "b";
    expect(filter.items[0].name, "#1").toBe("b");
    expect(filter.defaultItem, "#2").toBe("b");
    const defaultItem = <QuestionDropdownModel>creator.propertyGrid.getQuestionByName("defaultItem");
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

describe("Property grid: the Filter Control layout", () => {
  const panelNames = (grid: PropertyGridModelTester): Array<string> => grid.survey.pages[0].elements.map(el => el.name);
  const elementNames = (grid: PropertyGridModelTester, tab: string): Array<string> =>
    (<PanelModel>grid.survey.getPanelByName(tab)).elements.map(el => el.name);
  test("filter tabs: General with the source, then Filter Settings, then Presets", () => {
    const survey = new SurveyModel({ elements: [{ type: "filter", name: "f" }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    expect(panelNames(grid).slice(0, 3), "#1").toEqual(["general", "filterSettings", "presets"]);
    expect(elementNames(grid, "general").indexOf("source") > -1, "#2").toBe(true);
    expect(elementNames(grid, "filterSettings"), "#3").toEqual(["allowFastMode", "allowAdvancedMode", "showSearch", "searchFields"]);
    expect(elementNames(grid, "presets"), "#4").toEqual(["items", "defaultItem", "allowMultipleItems", "allowAddItems"]);
    expect(grid.survey.getPanelByName("filterSettings").title, "#5").toBe("Filter Settings");
    expect(grid.survey.getPanelByName("presets").title, "#6").toBe("Presets");
  });
  test("filterOperators follows allowFiltering", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" },
      { type: "matrixdynamic", name: "m", columns: [{ name: "col1", cellType: "text" }] }] });
    const questionGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const dataNames = elementNames(questionGrid, "data");
    expect(dataNames.indexOf("filterOperators"), "#1").toBe(dataNames.indexOf("allowFiltering") + 1);
    expect(questionGrid.survey.getQuestionByName("filterOperators").title, "#2").toBe("Filter operators");
    const columnGrid = new PropertyGridModelTester((<QuestionMatrixDynamicModel>survey.getQuestionByName("m")).columns[0]);
    const generalNames = elementNames(columnGrid, "general");
    expect(generalNames.indexOf("filterOperators"), "#3").toBe(generalNames.indexOf("allowFiltering") + 1);
  });
  test("no Others tab for the filter and a preset", () => {
    const survey = new SurveyModel({ elements: [{ type: "filter", name: "f", items: [{ name: "a" }] }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    expect(panelNames(grid).indexOf("others"), "#1").toBe(-1);
    const row = (<QuestionMatrixDynamicModel>grid.survey.getQuestionByName("items")).visibleRows[0];
    row.showDetailPanel();
    expect(row.detailPanel.elements.map(el => el.name).indexOf("others"), "#2").toBe(-1);
  });
});
