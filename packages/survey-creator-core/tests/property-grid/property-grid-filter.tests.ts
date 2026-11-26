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
  test("fields left out: a row per visible field of the target; nothing is written until a row is changed", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m" });
    expect(matrix.visibleRows.map(r => r.editingObj["name"]), "#1").toEqual(["country", "price"]);
    expect([filter.isFieldsDefined, filter.toJSON().fields], "#2").toEqual([false, undefined]);
  });
  test("the first change writes the rows into fields, then makes the change", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m" });
    cell(matrix, 1, "title").value = "Cost";
    expect(filter.toJSON().fields, "#1").toEqual([{ name: "country" }, { name: "price", title: "Cost" }]);
    expect(matrix.visibleRows[1].editingObj, "#2: the row's entry").toBe(filter.fields[1]);
  });
  test("any row can be removed; the last one leaves fields: []", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m" });
    expect(matrix.canRemoveRow(matrix.visibleRows[0]), "#1").toBe(true);
    matrix.removeRow(0);
    expect(filter.toJSON().fields, "#2").toEqual([{ name: "price" }]);
    matrix.removeRow(0);
    expect([filter.toJSON().fields, filter.getFilterFields().length], "#3").toEqual([[], 0]);
  });
  test("rows can be moved", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "price" }] });
    expect(matrix.allowRowReorder, "#1").toBe(true);
  });
  test("Field name: every field of the target, a hidden one too, but those another row has taken", () => {
    const survey = new SurveyModel({ elements: [
      { type: "matrixdynamic", name: "m", columns: [{ name: "a", title: "A" }, { name: "b", visible: false }, { name: "c" }] },
      { type: "filter", name: "f", targetQuestion: "m", fields: [{ name: "a" }, { name: "total" }] }] });
    const matrix = <QuestionMatrixDynamicModel>new PropertyGridModelTester(survey.getQuestionByName("f")).survey.getQuestionByName("fields");
    const name0 = cell(matrix, 0, "name");
    expect([name0.isReadOnly, name0.choices.map((c: any) => [c.value, c.text])], "#1").toEqual([false, [["a", "a"], ["b", "b"], ["c", "c"]]]);
    expect(cell(matrix, 1, "name").choices.map((c: any) => c.value), "#2: a is taken").toEqual(["b", "c"]);
    expect(cell(matrix, 1, "name").selectedItem.value, "#3: a field of the record is the custom choice").toBe("total");
    name0.value = "c";
    expect(cell(matrix, 1, "name").choices.map((c: any) => c.value), "#4: a is free, c taken").toEqual(["a", "b"]);
  });
  test("Field name shows a field's name - its valueName, else its name, a nested field's path - not its title", () => {
    const survey = new SurveyModel({ elements: [
      { type: "paneldynamic", name: "p", templateElements: [
        { type: "text", name: "price", valueName: "amount", title: "Unit price" },
        { type: "multipletext", name: "addr", title: "Address", items: [{ name: "city", title: "City" }] }] },
      { type: "filter", name: "f", targetQuestion: "p", fields: [{ name: "amount" }] }] });
    const matrix = <QuestionMatrixDynamicModel>new PropertyGridModelTester(survey.getQuestionByName("f")).survey.getQuestionByName("fields");
    const name0 = cell(matrix, 0, "name");
    expect(name0.choices.map((c: any) => [c.value, c.text]), "#1").toEqual([["amount", "amount"], ["addr.city", "addr.city"]]);
    expect(name0.selectedItem.text, "#2: the cell shows the name").toBe("amount");
  });
  test("Field name has no clear button", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "city" }] });
    expect([cell(matrix, 0, "name").allowClear, cell(matrix, 1, "name").allowClear]).toEqual([false, false]);
  });
  // Every row's choices are the fields no row has taken and its own name: while a field of the target is free
  // the rows pick from a dropdown, otherwise there is nothing to pick and Field name is a text box.
  const nameTypes = (matrix: QuestionMatrixDynamicModel): Array<string> => matrix.visibleRows.map(r => cell(matrix, matrix.visibleRows.indexOf(r), "name").getType());
  test("Field name is a text box when no field of the target is free, a dropdown while one is", () => {
    expect(nameTypes(createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "price" }] }).matrix), "#1").toEqual(["text", "text"]);
    expect(nameTypes(createGrid({ targetQuestion: "m", fields: [{ name: "country" }] }).matrix), "#2").toEqual(["dropdown"]);
    expect(nameTypes(createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "city" }] }).matrix), "#3: a field of the record").toEqual(["dropdown", "dropdown"]);
    expect(nameTypes(createGrid({ targetQuestion: "m" }).matrix), "#4: fields left out take every visible field").toEqual(["text", "text"]);
  });
  test("removing a row frees a field: every row's Field name becomes a dropdown", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "price" }] });
    expect(nameTypes(matrix), "#1").toEqual(["text", "text"]);
    matrix.removeRow(1);
    expect([nameTypes(matrix), filter.toJSON().fields], "#2").toEqual([["dropdown"], [{ name: "country" }]]);
    expect(cell(matrix, 0, "name").choices.map((c: any) => c.value), "#3").toEqual(["country", "price"]);
  });
  test("Add field takes the last free field: every row's Field name becomes a text box; the rows stay the entries", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }] });
    expect(nameTypes(matrix), "#1").toEqual(["dropdown"]);
    matrix.addRow();
    expect([nameTypes(matrix), filter.toJSON().fields], "#2").toEqual([["text", "text"], [{ name: "country" }, { name: "price" }]]);
    expect(matrix.visibleRows.map((r, i) => r.editingObj === filter.fields[i]), "#3").toEqual([true, true]);
    expect(cell(matrix, 1, "name").value, "#4").toBe("price");
  });
  test("a name typed into a text box frees a field: dropdowns again", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "price" }] });
    expect(nameTypes(matrix), "#0").toEqual(["text", "text"]);
    cell(matrix, 1, "name").value = "total";
    expect([nameTypes(matrix), filter.toJSON().fields], "#1").toEqual([["dropdown", "dropdown"], [{ name: "country" }, { name: "total" }]]);
    expect(cell(matrix, 1, "name").selectedItem.value, "#2").toBe("total");
  });
  test("Field title's placeholder: the title of the field, or the entry's name", () => {
    const { matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "city" }] });
    expect(cell(matrix, 0, "title").placeholder, "#1").toBe("Country");
    expect(cell(matrix, 1, "title").placeholder, "#2").toBe("city");
  });
  test("Add field: the first field no row has taken, else field1", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }] });
    expect(matrix.visibleRows.length, "#0: the rows as the table renders them").toBe(1);
    matrix.addRow();
    expect(filter.fields.map((f: any) => f.name), "#1").toEqual(["country", "price"]);
    matrix.addRow();
    expect(filter.fields.map((f: any) => f.name), "#2").toEqual(["country", "price", "field1"]);
  });
  test("Add field on fields left out: the rows first", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m" });
    expect(matrix.visibleRows.length, "#0: the rows as the table renders them").toBe(2);
    matrix.addRow();
    expect(filter.fields.map((f: any) => f.name)).toEqual(["country", "price", "field1"]);
  });
  test("the title's Add before the table is drawn: the rows first, then the field", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }] });
    matrix.getTitleActions().filter((a: any) => a.id === "add-item")[0].action();
    expect(filter.fields.map((f: any) => f.name)).toEqual(["country", "price"]);
  });
  test("with no target question the rows are the fields and Field name, with nothing to pick, is a text box", () => {
    const { matrix } = createGrid({ fields: [{ name: "a" }] });
    expect([matrix.visibleRows.length, cell(matrix, 0, "name").getType(), cell(matrix, 0, "name").value]).toEqual([1, "text", "a"]);
  });
  test("Available operators are those the field takes, named as the logic tab names them", () => {
    const { filter, matrix } = createGrid({ targetQuestion: "m", fields: [{ name: "country" }, { name: "price", operators: ["greater"] }, { name: "city" }] });
    const ofPrice = detail(matrix, 1, "operators");
    const values = ofPrice.choices.map((c: any) => c.value);
    expect([ofPrice.getType(), values.indexOf("greater") > -1, values.indexOf("contains") > -1], "#1").toEqual(["tagbox", true, false]);
    expect(ofPrice.choices.filter((c: any) => c.value === "greater")[0].text, "#2").toBe("Greater than");
    expect(detail(matrix, 2, "operators").choices.map((c: any) => c.value).indexOf("contains") > -1, "#3").toBe(true);
    expect(filter.fields[1].operators, "#4").toEqual(["greater"]);
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
  test("Available operators explain themselves as the column's filter operators did", () => {
    const survey = new SurveyModel({ elements: [{ type: "matrixdynamic", name: "m", columns: [{ name: "a" }] },
      { type: "filter", name: "f", targetQuestion: "m", fields: [{ name: "a" }] }] });
    const matrix = <QuestionMatrixDynamicModel>new PropertyGridModelTester(survey.getQuestionByName("f")).survey.getQuestionByName("fields");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    expect(row.detailPanel.getQuestionByName("operators").description).toBe(
      "Limits the operators respondents can use to filter by this field. Leave empty to allow all operators that suit the field.");
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

describe("Property grid: the Filter Control fields of a new target", () => {
  const expenses = (name: string): any => ({ type: "matrixdynamic", name: name,
    columns: [{ name: "date", title: "Date" }, { name: "category", title: "Category" }],
    detailPanelMode: "underRowSingle",
    detailElements: [{ type: "text", name: "project", title: "Project" }, { type: "boolean", name: "receipt", title: "Receipt" }] });
  const rowsOf = (creator: CreatorTester): QuestionMatrixDynamicModel => <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("fields");
  // What Field name shows: the picked item of a dropdown, the text of a text box (nothing to pick).
  const shown = (matrix: QuestionMatrixDynamicModel): Array<any> => matrix.visibleRows.map(r => {
    const name: any = r.cells.filter(c => c.column.name === "name")[0].question;
    const text = name.getType() === "dropdown" ? !!name.selectedItem && name.selectedItem.value : name.value;
    return [r.editingObj && r.editingObj["name"], text];
  });
  test("a copy of the page: the copied filter switched to the other matrix shows that matrix's fields", () => {
    const creator = new CreatorTester();
    creator.JSON = { pages: [{ name: "page1", elements: [{ type: "filter", name: "f1", targetQuestion: "expenses" }, expenses("expenses")] }] };
    const copy = creator.copyPage(creator.survey.pages[0]);
    const filter = <any>copy.elements.filter((e: any) => e.getType() === "filter")[0];
    const matrix = <any>copy.elements.filter((e: any) => e.getType() === "matrixdynamic")[0];
    creator.selectElement(filter);
    const target = creator.propertyGrid.getQuestionByName("targetQuestion");
    const expected = (name: string): Array<any> =>
      creator.survey.getQuestionByName(name).getFilterFields().map((f: any) => [f.name, f.name]);
    [matrix.name, "expenses", matrix.name].forEach((name: string, index: number): void => {
      target.value = name;
      expect(filter.targetQuestion, "#1." + index).toBe(name);
      expect(shown(rowsOf(creator)), "#2." + index).toEqual(expected(name));
    });
    expect(shown(rowsOf(creator)).length, "#3: the columns and the details").toBe(4);
    expect(filter.fields.map((f: any) => f.name), "#4: the entries of its visible fields").toEqual(expected(matrix.name).map((e: Array<any>) => e[0]));
  });
  test("a target with as many fields under other names, more fields and fewer", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [
      { type: "matrixdynamic", name: "m1", columns: [{ name: "a" }, { name: "b" }, { name: "c" }] },
      { type: "matrixdynamic", name: "m2", columns: [{ name: "x" }, { name: "y" }, { name: "z" }] },
      { type: "matrixdynamic", name: "m3", columns: [{ name: "p" }, { name: "q" }, { name: "r" }, { name: "s" }] },
      { type: "filter", name: "f1", targetQuestion: "m1" }] };
    const filter = <any>creator.survey.getQuestionByName("f1");
    creator.selectElement(filter);
    const target = creator.propertyGrid.getQuestionByName("targetQuestion");
    expect(shown(rowsOf(creator)), "#1").toEqual([["a", "a"], ["b", "b"], ["c", "c"]]);
    target.value = "m2";
    expect(shown(rowsOf(creator)), "#2: as many").toEqual([["x", "x"], ["y", "y"], ["z", "z"]]);
    target.value = "m3";
    expect(shown(rowsOf(creator)), "#3: one more").toEqual([["p", "p"], ["q", "q"], ["r", "r"], ["s", "s"]]);
    target.value = "m1";
    expect(shown(rowsOf(creator)), "#4: one fewer").toEqual([["a", "a"], ["b", "b"], ["c", "c"]]);
    expect(filter.toJSON().fields, "#5").toEqual([{ name: "a" }, { name: "b" }, { name: "c" }]);
  });
});
