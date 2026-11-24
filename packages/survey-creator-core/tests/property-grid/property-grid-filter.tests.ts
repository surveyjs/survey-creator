import { PanelModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionPanelDynamicModel, QuestionTagboxModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { QuestionAdornerViewModel } from "../../src/components/question";

// The Filter Control (survey-library #11890) in the property grid: its own settings and the
// operators a question or a column offers as a filter field.
const matrixJson = (name: string, columns: Array<string>): any =>
  ({ type: "matrixdynamic", name: name, columns: columns.map(col => ({ name: col, title: col.toUpperCase(), cellType: "text" })) });

describe("Property grid: the Filter Control", () => {
  test("the target question lists only matrices and dynamic panels", () => {
    const survey = new SurveyModel({ elements: [
      { type: "text", name: "t1" }, matrixJson("m1", ["a"]),
      { type: "matrixdropdown", name: "m2", rows: ["r1"], columns: [{ name: "b" }] },
      { type: "paneldynamic", name: "p1", templateElements: [{ type: "text", name: "c" }] },
      { type: "filter", name: "f" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    const editor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("targetQuestion");
    expect(editor.getType(), "#1").toBe("dropdown");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["m1", "m2", "p1"]);
    editor.value = "m1";
    expect(survey.getQuestionByName("f").targetQuestion, "#3").toBe("m1");
  });
  test("search fields are a tag box of the target question's columns", () => {
    const survey = new SurveyModel({ elements: [
      { type: "filter", name: "f", targetQuestion: "m1", showSearchBar: true, searchFields: ["country", "age"] },
      matrixJson("m1", ["country", "age"]), matrixJson("m2", ["country", "city"])] });
    const filter = <any>survey.getQuestionByName("f");
    const propertyGrid = new PropertyGridModelTester(filter);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("searchFields");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.map(item => item.value), "#2").toEqual(["country", "age"]);
    expect(editor.choices.map(item => item.text), "#3").toEqual(["COUNTRY", "AGE"]);
    expect(Array.from(editor.value), "#4").toEqual(["country", "age"]);
    propertyGrid.survey.getQuestionByName("targetQuestion").value = "m2";
    expect(editor.choices.map(item => item.value), "#5").toEqual(["country", "city"]);
    expect(Array.from(filter.searchFields), "#6: age is not in the new target question, country stays").toEqual(["country"]);
    editor.value = ["country", "city"];
    expect(Array.from(filter.searchFields), "#7").toEqual(["country", "city"]);
  });
  test("search fields keep a nested path when search is turned off and on", () => {
    const survey = new SurveyModel({ elements: [
      { type: "filter", name: "f", targetQuestion: "p", showSearchBar: true, searchFields: ["work.city"] },
      { type: "paneldynamic", name: "p", templateElements: [
        { type: "multipletext", name: "home", items: [{ name: "city" }] },
        { type: "multipletext", name: "work", items: [{ name: "city" }] }] }] });
    const filter = <any>survey.getQuestionByName("f");
    const propertyGrid = new PropertyGridModelTester(filter);
    const showSearchBar = propertyGrid.survey.getQuestionByName("showSearchBar");
    showSearchBar.value = false;
    showSearchBar.value = true;
    expect(Array.from(filter.searchFields), "#1").toEqual(["work.city"]);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("searchFields");
    expect(editor.choices.map(item => item.value), "#2: two tags, not two 'city'").toEqual(["home.city", "work.city"]);
  });
  test("filter operators are a tag box with operator names", () => {
    // A question in a Dynamic Panel's template: only there a Filter Control reaches it as a field
    const survey = new SurveyModel({ elements: [{ type: "paneldynamic", name: "p", templateElements: [{ type: "text", name: "q1" }] }] });
    const question = (<QuestionPanelDynamicModel>survey.getQuestionByName("p")).template.getQuestionByName("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    const editor = <QuestionTagboxModel>propertyGrid.survey.getQuestionByName("filterOperators");
    expect(editor.getType(), "#1").toBe("tagbox");
    expect(editor.choices.length, "#2: a text field - anyof, noneof and allof are for choice questions").toBe(10);
    expect(editor.choices[2].value, "#3").toBe("equal");
    expect(editor.choices[2].text, "#4").toBe("Equals");
    expect(editor.isVisible, "#5").toBe(true);
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
    return { filter: filter, grid: grid, matrix: <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("presets") };
  };
  test("presets are a matrix of name and title with details", () => {
    const { matrix } = createGrid({ presets: [{ name: "a", title: "A", expression: "{x} > 1" }] });
    expect(matrix.getType(), "#1").toBe("matrixdynamic");
    expect(matrix.columns.map(col => col.name), "#2").toEqual(["name", "title"]);
    expect(matrix.allowRowReorder, "#3: the order of the presets is the order of the chips").toBe(true);
    expect(matrix.addRowText, "#4").toBe("Add preset");
    expect(matrix.noRowsText, "#5").toBe("No presets");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    const visibleNames = (): Array<string> => row.detailPanel.questions.filter(q => q.isVisible).map(q => q.name);
    expect(visibleNames(), "#6").toEqual(["expression", "allowEdit", "allowDelete"]);
    expect(row.detailPanel.getQuestionByName("expression").value, "#7").toBe("{x} > 1");
  });
  test("adding a preset", () => {
    const { filter, matrix } = createGrid({});
    matrix.addRow();
    expect(filter.presets.length, "#1").toBe(1);
    expect(filter.presets[0].name, "#2").toBe("preset1");
  });
  // In the Creator: it moves defaultPreset along with the rename (creator-base, one undo step)
  test("renaming a preset keeps it the default one", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "filter", name: "f", presets: [{ name: "a" }, { name: "c" }], defaultPreset: "a" }] };
    const filter = <any>creator.survey.getQuestionByName("f");
    creator.selectElement(filter);
    const matrix = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("presets");
    matrix.visibleRows[0].cells[0].question.value = "b";
    expect(filter.presets[0].name, "#1").toBe("b");
    expect(filter.defaultPreset, "#2").toBe("b");
    const defaultPreset = <QuestionDropdownModel>creator.propertyGrid.getQuestionByName("defaultPreset");
    expect(defaultPreset.choices.map(item => item.value), "#3").toEqual(["b", "c"]);
    expect(defaultPreset.value, "#4").toBe("b");
  });
  test("removing the last preset leaves no default to pick", () => {
    const { filter, grid, matrix } = createGrid({ presets: [{ name: "a" }], defaultPreset: "a" });
    matrix.removeRow(0);
    expect(filter.presets.length, "#1").toBe(0);
    const defaultPreset = <QuestionDropdownModel>grid.survey.getQuestionByName("defaultPreset");
    expect(defaultPreset.choices.length, "#2").toBe(0);
    expect(!!filter.defaultPreset, "#3").toBe(false);
  });
  test("a preset's Allow checkboxes show the control's permission until the preset has its own", () => {
    const { filter, matrix } = createGrid({ allowDeletePresets: true, presets: [{ name: "a" }, { name: "b", allowEdit: true, allowDelete: false }] });
    const detail = (row: number, name: string): any => {
      const r = matrix.visibleRows[row];
      r.showDetailPanel();
      return r.detailPanel.getQuestionByName(name);
    };
    const a = filter.presets[0];
    expect([detail(0, "allowEdit").value, detail(0, "allowDelete").value], "#1: the control's").toEqual([false, true]);
    expect([detail(1, "allowEdit").value, detail(1, "allowDelete").value], "#2: the preset's own").toEqual([true, false]);
    filter.allowEditPresets = true;
    filter.allowDeletePresets = false;
    expect([detail(0, "allowEdit").value, detail(0, "allowDelete").value], "#3: follows the control").toEqual([true, false]);
    expect([detail(1, "allowEdit").value, detail(1, "allowDelete").value], "#4: keeps its own").toEqual([true, false]);
    expect([a.allowEdit, a.allowDelete], "#5: nothing written").toEqual([undefined, undefined]);
    detail(0, "allowEdit").value = false;
    expect(a.allowEdit, "#6: a click writes the preset's own").toBe(false);
    expect(a.toJSON(), "#7").toEqual({ name: "a", allowEdit: false });
    filter.allowEditPresets = false;
    filter.allowEditPresets = true;
    expect(detail(0, "allowEdit").value, "#8: its own now").toBe(false);
  });
  test("the add button of multiple text items is unchanged", () => {
    const survey = new SurveyModel({ elements: [{ type: "multipletext", name: "q1", items: [{ name: "i1" }] }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const matrix = <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("items");
    expect(matrix.addRowText).not.toBe("Add preset");
  });
});

describe("Property grid: the Filter Control fields", () => {
  const createGrid = (filterJson: any): { filter: any, matrix: QuestionMatrixDynamicModel } => {
    const survey = new SurveyModel({ elements: [
      { type: "matrixdynamic", name: "m", columns: [{ name: "country", title: "Country" }, { name: "price", cellType: "text", inputType: "number" }] },
      Object.assign({ type: "filter", name: "f" }, filterJson)] });
    const filter = survey.getQuestionByName("f");
    const grid = new PropertyGridModelTester(filter);
    return { filter: filter, matrix: <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("fields") };
  };
  const cell = (matrix: QuestionMatrixDynamicModel, row: number, name: string): any =>
    matrix.visibleRows[row].cells.filter(c => c.column.name === name)[0].question;
  const detail = (matrix: QuestionMatrixDynamicModel, row: number, name: string): any => {
    const r = matrix.visibleRows[row];
    r.showDetailPanel();
    return r.detailPanel.getQuestionByName(name);
  };
  test("a table of Field name and Field title; Available operators and Show in quick filters in a row's details", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "price", operators: ["greater"] }] });
    expect(matrix.columns.map(c => c.name), "#1").toEqual(["name", "title"]);
    expect(matrix.columns.map(c => c.title), "#2").toEqual(["Field name", "Field title"]);
    const row = matrix.visibleRows[0];
    expect(row.hasPanel, "#3").toBe(true);
    row.showDetailPanel();
    expect(row.detailPanel.questions.map(q => q.name), "#4").toEqual(["operators", "showInQuickFilters"]);
    expect(row.detailPanel.questions.map(q => q.title), "#5").toEqual(["Available operators", "Show in quick filters"]);
    expect(matrix.addRowText, "#6").toBe("Add field");
  });
  test("Field name picks a field of the target question or takes a name of its own", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "price" }] });
    const name = cell(matrix, 0, "name");
    expect(name.getType(), "#1").toBe("dropdown");
    expect(name.choices.map((c: any) => c.value), "#2").toEqual(["country", "price"]);
    expect(name.choices.map((c: any) => c.text), "#3").toEqual(["Country", "price"]);
    expect(name.allowCustomChoices, "#4").toBe(true);
    name.value = "total";
    expect(filter.fields[0].name, "#5").toBe("total");
  });
  test("Field name shows the name of a field of the record that the target has no column for", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "city" }] });
    const name = cell(matrix, 0, "name");
    expect(!!name.selectedItem && name.selectedItem.value, "#1").toBe("city");
    expect(name.selectedItem.text, "#2").toBe("city");
  });
  test("with no target question Field name has nothing to pick", () => {
    const { matrix } = createGrid({ fields: [{ name: "a" }] });
    expect(cell(matrix, 0, "name").choices.length).toBe(0);
  });
  test("Available operators are those the field takes, named as the logic tab names them", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "price", operators: ["greater"] }, { name: "city" }] });
    const ofPrice = detail(matrix, 0, "operators");
    expect(ofPrice.getType(), "#1").toBe("tagbox");
    const values = ofPrice.choices.map((c: any) => c.value);
    expect([values.indexOf("greater") > -1, values.indexOf("contains") > -1], "#2: a number field").toEqual([true, false]);
    expect(ofPrice.choices.filter((c: any) => c.value === "greater")[0].text, "#3").toBe("Greater than");
    expect(Array.from(ofPrice.value), "#4").toEqual(["greater"]);
    expect(detail(matrix, 1, "operators").choices.map((c: any) => c.value).indexOf("contains") > -1, "#5: a field of the record").toBe(true);
    expect(filter.fields[0].operators, "#6").toEqual(["greater"]);
  });
  test("a field picked in Field name offers its own operators, with the details open", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "city" }] });
    const operators = detail(matrix, 0, "operators");
    expect(operators.choices.map((c: any) => c.value).indexOf("contains") > -1, "#1").toBe(true);
    cell(matrix, 0, "name").value = "price";
    expect(operators.choices.map((c: any) => c.value).indexOf("contains"), "#2").toBe(-1);
  });
});
describe("Property grid: the Filter Control layout", () => {
  const panelNames = (grid: PropertyGridModelTester): Array<string> => grid.survey.pages[0].elements.map(el => el.name);
  const elementNames = (grid: PropertyGridModelTester, tab: string): Array<string> =>
    (<PanelModel>grid.survey.getPanelByName(tab)).elements.map(el => el.name);
  test("filter tabs: General without the target question, then Filter Settings, then Filter Presets", () => {
    const survey = new SurveyModel({ elements: [{ type: "filter", name: "f" }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    expect(panelNames(grid).slice(0, 3), "#1").toEqual(["general", "filterSettings", "filterPresets"]);
    const visibleGeneral = (<PanelModel>grid.survey.getPanelByName("general")).elements.filter(el => el.isVisible).map(el => el.name);
    expect(visibleGeneral, "#2").toEqual(["name", "title", "visible", "readOnly"]);
    expect(elementNames(grid, "filterSettings"), "#3").toEqual(["targetQuestion", "fields", "showQuickFilters", "showSearchBar", "searchFields", "searchPlaceholder", "showAllFiltersButton"]);
    expect(elementNames(grid, "filterPresets"), "#4").toEqual(["presets", "defaultPreset", "showPresets", "allowEditPresets", "allowAddPresets", "allowDeletePresets"]);
    expect(grid.survey.getPanelByName("filterSettings").title, "#5").toBe("Filter Settings");
    expect(grid.survey.getPanelByName("filterPresets").title, "#6").toBe("Filter Presets");
  });
  test("filter captions", () => {
    const survey = new SurveyModel({ elements: [{ type: "filter", name: "f", presets: [{ name: "a" }] }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    const titles = (names: Array<string>): Array<string> => names.map(name => grid.survey.getQuestionByName(name).title);
    expect(titles(["targetQuestion", "showSearchBar", "searchFields", "searchPlaceholder", "presets"]), "#1")
      .toEqual(["Question to filter", "Show search bar", "Fields to search", "Search placeholder text", "Filter presets"]);
    const row = (<QuestionMatrixDynamicModel>grid.survey.getQuestionByName("presets")).visibleRows[0];
    row.showDetailPanel();
    expect(["allowEdit", "allowDelete"].map(name => row.detailPanel.getQuestionByName(name).title), "#2")
      .toEqual(["Allow respondents to edit this preset", "Allow respondents to delete this preset"]);
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
    const survey = new SurveyModel({ elements: [{ type: "filter", name: "f", presets: [{ name: "a" }] }] });
    const grid = new PropertyGridModelTester(survey.getQuestionByName("f"));
    expect(panelNames(grid).indexOf("others"), "#1").toBe(-1);
    const row = (<QuestionMatrixDynamicModel>grid.survey.getQuestionByName("presets")).visibleRows[0];
    row.showDetailPanel();
    expect(row.detailPanel.elements.map(el => el.name).indexOf("others"), "#2").toBe(-1);
  });
});

// The presets have one chip in the row: in the designer it shows the default preset, and a click on it
// opens that preset.
describe("Designer: a Filter Control's preset chip", () => {
  const createCreator = (defaultPreset?: string): { creator: CreatorTester, filter: any, adorner: QuestionAdornerViewModel } => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q1" },
      { type: "filter", name: "f", fields: [{ name: "x" }], defaultPreset: defaultPreset,
        presets: [{ name: "a", expression: "{x} > 1" }, { name: "b", expression: "{x} > 2" }] }] };
    const filter = creator.survey.getQuestionByName("f");
    const adorner = new QuestionAdornerViewModel(creator, filter, <any>undefined);
    return { creator: creator, filter: filter, adorner: adorner };
  };
  const detailShown = (creator: CreatorTester): Array<boolean> =>
    (<QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("presets")).visibleRows.map(row => row.isDetailPanelShowing);
  const presetChip = (filter: any): any => filter.chipsToolbar.getActionById("sv-filter-presets");
  test("opens the preset on the Filter Presets tab", () => {
    const { creator, filter } = createCreator("b");
    creator.selectElement(creator.survey.getQuestionByName("q1"));
    presetChip(filter).action();
    expect(creator.selectedElement, "#1").toBe(filter);
    expect(creator.propertyGrid.currentPage.name, "#2").toBe("filterPresets");
    expect(detailShown(creator), "#3").toEqual([false, true]);
    expect(filter.selectedPreset, "#4: the click turns nothing on or off").toBe("b");
  });
  test("the same when the filter is already selected on another tab", () => {
    const { creator, filter } = createCreator("a");
    creator.selectElement(filter);
    creator.propertyGrid.currentPage = creator.propertyGrid.getPageByName("filterSettings");
    presetChip(filter).action();
    expect(creator.propertyGrid.currentPage.name, "#1").toBe("filterPresets");
    expect(detailShown(creator), "#2").toEqual([true, false]);
  });
  // The chips' clicks stop at the chip (Action.doAction stops the event), so the adorner never sees them
  test("a badge, Filters and Show More select the filter", () => {
    const { creator, filter } = createCreator();
    ["sv-filter-field-x", "sv-filter-all-filters", "sv-filter-more"].forEach((id: string, index: number): void => {
      creator.selectElement(creator.survey.getQuestionByName("q1"));
      filter.chipsToolbar.getActionById(id).action();
      expect(creator.selectedElement, "#" + index + ": " + id).toBe(filter);
    });
  });
  test("with no default preset the chip selects the filter and opens no preset", () => {
    const { creator, filter } = createCreator();
    creator.selectElement(creator.survey.getQuestionByName("q1"));
    presetChip(filter).action();
    expect(creator.selectedElement, "#1").toBe(filter);
    expect(detailShown(creator), "#2").toEqual([false, false]);
  });
  test("with the property grid hidden, the preset opens on the Filter Presets tab once it shows", () => {
    const { creator, filter } = createCreator("b");
    creator.selectElement(filter);
    creator.propertyGrid.currentPage = creator.propertyGrid.getPageByName("filterSettings");
    creator.sidebar.renderedIsVisible = false;
    presetChip(filter).action();
    creator.sidebar.renderedIsVisible = true;
    (<any>creator.sidebar).afterExpand();
    expect(creator.propertyGrid.currentPage.name, "#1").toBe("filterPresets");
    expect(detailShown(creator), "#2").toEqual([false, true]);
  });
  test("a detached adorner leaves no callback", () => {
    const { creator, filter, adorner } = createCreator("a");
    creator.selectElement(creator.survey.getQuestionByName("q1"));
    adorner.dispose();
    presetChip(filter).action();
    expect(creator.selectedElement.name).toBe("q1");
  });
});
