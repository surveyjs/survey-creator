import { QuestionMatrixDynamicModel, settings, ComponentCollection } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { ICreatorPresetData } from "../src/presets-creator/presets";
import { SurveyModel } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

test("Preset edit model, toolbox definition page, matrix actions", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const row = survey.getQuestionByName("toolbox_categories").visibleRows[0];
  row.showDetailPanel();
  const matrixQuestionInner = row.getQuestionByName("items");
  expect(matrixQuestionInner.renderedTable.rows[1].cells[1].item.getData().actions[0].iconName).toEqual("icon-radiogroup");

  survey.setValue("toolbox_mode", "items");
  const matrixQuestion = survey.getQuestionByName("toolbox_items") as QuestionMatrixDynamicModel;
  expect(matrixQuestion.renderedTable.rows[1].cells[1].item.getData().actions[0].iconName).toEqual("icon-radiogroup");
});

test("Preset edit model, custom items, apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "items");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  matrixQuestion.addRow();
  const row = matrixQuestion.visibleRows[0];
  row.showDetailPanel();
  const nameQuestion = row.getQuestionByName("name");
  nameQuestion.value = "name1";
  const tooltipQuestion = row.getQuestionByName("tooltip");
  tooltipQuestion.value = "tooltip1";
  const value = matrixQuestion.value;
  value[0].json = { type: "text" };
  matrixQuestion.value = value;

  matrixQuestion.removeRow(0);

  const etalon = {
    name: "name1",
    title: "name1",
    tooltip: "tooltip1",
    json: { type: "text" }
  };

  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const testJson = editor.preset.getJson();
  expect(testJson.toolbox.definition.filter(d => d.name == "name1")[0]).toEqual(etalon);
});
test("Preset edit model, toolbox items, default value and apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "items");
  const question = survey.getQuestionByName("toolbox_items");
  expect(question).toBeTruthy();
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(question.visibleRows).toHaveLength(defaultItems.length);
  expect(question.value).toHaveLength(defaultItems.length);
  question.value = question.value.filter(r => ["boolean", "comment", "checkbox"].indexOf(r.name) >= 0).sort((a, b)=>a.name < b.name ? 1 : -1);
  const etalon: ICreatorPresetData = {
    toolbox: {
      categories: [],
      definition: [{ name: "comment" }, { name: "checkbox" }, { name: "boolean" }]
    }
  };
  const testJson = editor.preset.getJson();
  expect(testJson).toEqual(etalon);
});
test("Preset edit model, toolbox categories, default value and apply", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const question = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const showTitlesQuestion = survey.getQuestionByName("toolbox_showCategoryTitles");
  expect(showTitlesQuestion.value).toBeFalsy();
  showTitlesQuestion.value = true;
  expect(question).toBeTruthy();
  const categoryCount = 5;
  expect(question.rowCount).toEqual(categoryCount);
  question.visibleRows.forEach(row => {
    row.showDetailPanel();
    const itemsQuestion = row.getQuestionByName("items");
    const len = itemsQuestion.value.length;
    expect(len > 0).toBeTruthy();
    expect(itemsQuestion.visibleRows).toHaveLength(len);
  });
  const row = question.visibleRows[0];
  row.showDetailPanel();
  let itemsQuestion = row.getQuestionByName("items");
  const items = [].concat(itemsQuestion.value);
  const newValue = items.splice(0, 3);
  itemsQuestion.value = items;
  question.addRow();
  const newRow = question.visibleRows[question.rowCount - 1];
  newRow.getQuestionByName("category").value = "NewCategory";
  newRow.showDetailPanel();
  itemsQuestion = newRow.getQuestionByName("items");
  //expect(itemsQuestion.visibleRows).toHaveLength(3);
  itemsQuestion.value = newValue;
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const json: any = editor.preset.getJson();
  expect(json.toolbox.items).toBeFalsy();
  expect(json.toolbox.categories).toHaveLength(categoryCount + 1);
  const category = json.toolbox?.categories[categoryCount];
  expect(category.category).toEqual("NewCategory");
  expect(category.items).toHaveLength(3);
  expect(category.count).toBeFalsy();
  expect(editor.creator.toolbox.hasCategories).toBeTruthy();
  expect(editor.creator.toolbox.showCategoryTitles).toBeTruthy();
});
test("Preset edit model, toolbox items & definition page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.currentPage = survey.getPageByName("page_toolbox");
  expect(survey.currentPage.name).toEqual("page_toolbox");
  survey.setValue("toolbox_mode", "categories");
  const itemsQuestion = survey.getQuestionByName("toolbox_items") as QuestionMatrixDynamicModel;
  const defaultItems = new QuestionToolbox().getDefaultItems([], false, true, true);
  expect(itemsQuestion.visibleRows).toHaveLength(defaultItems.length);
  expect(itemsQuestion.value).toHaveLength(defaultItems.length);

  const definitionQuestion = survey.getQuestionByName("toolbox_matrix");
  definitionQuestion.addRow();
  definitionQuestion.addRow();
  const rowDef1 = definitionQuestion.visibleRows[0];
  rowDef1.getQuestionByName("name").value = "name1";
  const rowDef2 = definitionQuestion.visibleRows[1];
  rowDef2.getQuestionByName("name").value = "radiogroup";
  rowDef2.getQuestionByName("title").value = "Radiogroup_New";

  // expect(itemsQuestion.visibleRows).toHaveLength(defaultItems.length + 1);
  // expect(itemsQuestion.value).toHaveLength(defaultItems.length);
  // expect(itemsQuestion.value[0].name).toEqual("radiogroup");
  // expect(itemsQuestion.value[0].title).toEqual("Radiogroup_New");
});

test("Preset edit model, toolbox page", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const boolSetupCategoriesQuestion = survey.getQuestionByName("toolbox_mode");
  expect(boolSetupCategoriesQuestion).toBeTruthy();
  expect(boolSetupCategoriesQuestion.value).toEqual("categories");
  expect(boolSetupCategoriesQuestion.isVisible).toBeTruthy();
});
// test("Preset edit model, toolbox definition page, validate name/json", () => {
//   const editor = new CreatorPresetEditorModel();
//   const survey = editor.model;
//   const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
//   expect(matrixQuestion.visibleRows).toHaveLength(0);
//   matrixQuestion.addRow();
//   const row = matrixQuestion.visibleRows[0];
//   const nameQuestion = row.getQuestionByName("name");
//   row.showDetailPanel();
//   const jsonQuestion = row.getQuestionByName("json");
//   jsonQuestion.value = "{.";
//   expect(editor.applyFromSurveyModel()).toBeFalsy();
//   expect(nameQuestion.errors).toHaveLength(1);
//   nameQuestion.value = "name1";
//   expect(editor.applyFromSurveyModel()).toBeFalsy();
//   expect(nameQuestion.errors).toHaveLength(0);
//   expect(jsonQuestion.errors).toHaveLength(1);
//   jsonQuestion.value = "{ type: \"text\", inputType: \"date\" }";
//   expect(editor.applyFromSurveyModel()).toBeTruthy();
//   expect(nameQuestion.errors).toHaveLength(0);
//   expect(jsonQuestion.errors).toHaveLength(0);
// });

test("Preset edit, toolbox - remove item from categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  expect(categQuestion.visibleRows).toHaveLength(5);
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "comment", "multipletext"]);
  itemsQuestion.removeRow(1);
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "multipletext"]);
  expect(matrixQuestion.visibleRows).toHaveLength(1);
  expect(matrixQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["comment"]);
  expect(editor.json.toolbox).toBeDefined();
  const length = editor.json.toolbox.definition.length;
  expect(editor.json.toolbox.definition.map(i => i.name)).toContain("text");
  expect(editor.json.toolbox.definition.map(i => i.name)).not.toContain("comment");
  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["text", "multipletext"]);
  itemsQuestion.removeRow(0);
  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["multipletext"]);
  expect(editor.json.toolbox.definition.length).toBe(length - 1);
});

test("Preset edit, toolbox - remove whole category from categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  expect(categQuestion.visibleRows).toHaveLength(5);
  const row = categQuestion.visibleRows[1];
  categQuestion.removeRow(1);
  expect(matrixQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "comment", "multipletext"]);
  expect(editor.json.toolbox).toBeDefined();
  expect(editor.json.toolbox.categories.length).toBe(4);
});

test("Preset edit, toolbox - remove empty category from categories, when there is some items in matrix", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  expect(categQuestion.visibleRows).toHaveLength(5);
  matrixQuestion.addRow();
  categQuestion.addRow();
  categQuestion.removeRow(categQuestion.visibleRows.length - 1);
});

test("Preset edit, toolbox - no categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "items";
  expect(editor.json.toolbox).toBeDefined();
  expect(editor.json.toolbox.categories.length).toBe(0);
});

test("Preset edit, toolbox - remove item from flat items", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "items";
  const itemsQuestion = survey.getQuestionByName("toolbox_items");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toContain("rating");
  itemsQuestion.removeRow(1);
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).not.toContain("rating");
  expect(matrixQuestion.visibleRows).toHaveLength(1);
  expect(matrixQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["rating"]);
});

test("Preset edit, toolbox - remove item from hidden items to flat items", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "items";
  const itemsQuestion = survey.getQuestionByName("toolbox_items");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  matrixQuestion.addRow();
  matrixQuestion.visibleRows[0].showDetailPanel();
  matrixQuestion.visibleRows[0].getQuestionByName("name").value = "name1";
  matrixQuestion.visibleRows[0].getQuestionByName("title").value = "Name1";
  matrixQuestion.removeRow(0);
  expect(itemsQuestion.value.filter(i => i.name == "name1")[0].title).toBe("Name1");
});

test("Preset edit, toolbox - remove new item from hidden items to its default category", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "categories";
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  categQuestion.visibleRows[1].showDetailPanel();
  let items = categQuestion.visibleRows[1].detailPanel.getQuestionByName("items");
  expect(items.value.map(i => i.name)).toEqual(["text", "comment", "multipletext"]);
  items.removeRow(2);
  expect(items.value.map(i => i.name)).toEqual(["text", "comment"]);

  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  matrixQuestion.removeRow(0);
  expect(categQuestion.value[1].items.map(i => i.name)).toEqual(["text", "comment", "multipletext"]);
});

test("Preset edit, toolbox - remove new item from hidden items to general category", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "categories";
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  matrixQuestion.addRow();
  matrixQuestion.visibleRows[0].showDetailPanel();
  matrixQuestion.visibleRows[0].getQuestionByName("name").value = "name1";
  matrixQuestion.visibleRows[0].getQuestionByName("title").value = "Name1";
  matrixQuestion.removeRow(0);
  expect(categQuestion.value.filter(c => c.category == "general")[0].items.filter(i => i.name == "name1")[0].title).toBe("Name1");
});

test("Preset edit, toolbox - change item", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  itemsQuestion.visibleRows[1].showDetailPanel();
  itemsQuestion.visibleRows[1].detailPanel.getQuestionByName("iconName").value = "icon-test";
  expect(editor.json.toolbox.definition.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test");
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].iconName).toBeUndefined();
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].tooltip).toBeUndefined();
  itemsQuestion.visibleRows[0].showDetailPanel();
  itemsQuestion.visibleRows[0].getQuestionByName("tooltip").value = "tooltip-test";
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].tooltip).toEqual("tooltip-test");
});

test("Preset edit, toolbox - empty subitems", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[0];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  itemsQuestion.visibleRows[1].showDetailPanel();
  itemsQuestion.visibleRows[1].detailPanel.getQuestionByName("subitems").value = [];
  expect(editor.json.toolbox.definition.filter(i => i.name == "rating")[0].subitems).toEqual([]);
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].subitems).toBeUndefined();
  itemsQuestion.visibleRows[1].detailPanel.getQuestionByName("iconName").value = "icon-test";
  expect(editor.json.toolbox.definition.filter(i => i.name == "rating")[0].subitems).toEqual([]);
  expect(editor.json.toolbox.definition.filter(i => i.name == "text")[0].subitems).toBeUndefined();
});

test("Preset edit, toolbox - empty subitems actions", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[0];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  const getShowDetailAction = (visibleRow: any) => {
    let renderedRow = itemsQuestion.renderedTable.rows.filter(r => r.row == visibleRow)[0];
    return renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "show-detail")[0];
  };
  expect(getShowDetailAction(itemsQuestion.visibleRows[0]).visible).toBeFalsy();
  expect(getShowDetailAction(itemsQuestion.visibleRows[1]).visible).toBeTruthy();

  itemsQuestion.visibleRows[1].showDetailPanel();
  itemsQuestion.visibleRows[1].detailPanel.getQuestionByName("subitems").value = [];
  expect(getShowDetailAction(itemsQuestion.visibleRows[1]).visible).toBeTruthy();
});

test("Preset edit, toolbox - reorder items", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.visibleRows).toHaveLength(0);
  expect(categQuestion.visibleRows).toHaveLength(5);
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  expect(itemsQuestion.visibleRows.map(r => r.getValue("name"))).toStrictEqual(["text", "comment", "multipletext"]);
  const value = itemsQuestion.value;
  value.push(value[0]);
  value.splice(0, 1);
  itemsQuestion.value = value;
  expect(editor.json.toolbox).toBeDefined();
  expect(editor.json.toolbox.definition.map(i => i.name)).toContain("text");
  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["comment", "multipletext", "text"]);
});

test("Preset edit, toolbox - change category", () => {
  const editor = new CreatorPresetEditorModel();
  expect(editor.applyFromSurveyModel()).toBeTruthy();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  expect(editor.json.toolbox).toBeUndefined();
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();

  const row2 = categQuestion.visibleRows[2];
  row2.showDetailPanel();

  const itemsQuestion = row.getQuestionByName("items");
  const itemsQuestion2 = row2.getQuestionByName("items");

  const value = [...itemsQuestion.value];
  const value2 = [...itemsQuestion2.value];

  value.push({ ...value2[0] });
  value2.splice(0, 1);

  itemsQuestion.value = value;
  itemsQuestion2.value = value2;

  expect(editor.json.toolbox.categories[1].items).toStrictEqual(["text", "comment", "multipletext", "panel"]);
  expect(editor.json.toolbox.categories[2].items).toStrictEqual(["paneldynamic"]);
});

test("Preset edit, toolbox - switch to items mode", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const row = categQuestion.visibleRows[1];
  row.showDetailPanel();
  const itemsQuestion = row.getQuestionByName("items");
  const innerRow = itemsQuestion.visibleRows[1];
  innerRow.showDetailPanel();
  innerRow.detailPanel.getQuestionByName("iconName").value = "icon-test";

  survey.getQuestionByName("toolbox_mode").value = "items";
  const allItemsQuestion = survey.getQuestionByName("toolbox_items");
  const itemRow = allItemsQuestion.visibleRows.filter(r => r.getValue("name") == "comment")[0];
  itemRow.showDetailPanel();
  expect(itemRow.getValue("iconName")).toBe("icon-test");

  itemRow.detailPanel.getQuestionByName("iconName").value = "icon-test2";
  expect(editor.json.toolbox.definition.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test2");
});

test("Preset edit, toolbox - switch to categories mode", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "items";
  const allItemsQuestion = survey.getQuestionByName("toolbox_items");
  const allItemsValue = allItemsQuestion.value;
  allItemsValue.filter(i => i.name == "comment")[0].iconName = "icon-test";
  allItemsQuestion.value = allItemsValue;

  survey.getQuestionByName("toolbox_mode").value = "categories";
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  expect(categQuestion.value.filter(c => c.category == "text")[0].items.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test");

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.splice(0, 8);
  allItemsQuestion.value = allItemsValue;
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(c => c.category == "choice")[0].items.map(i => i.name)).toStrictEqual(["imagepicker", "ranking"]);

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.push({ name: "custom" });
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(c => c.category == "general")[0].items.map(i => i.name)).toStrictEqual(["custom"]);

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.push({ name: "custom2" });
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(c => c.category == "general")[0].items.map(i => i.name)).toStrictEqual(["custom", "custom2"]);
});

test("Preset edit, toolbox - reset category", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const hiddenQuestion = survey.getQuestionByName("toolbox_matrix");
  const categValue = categQuestion.value;

  categValue.filter(c => c.category == "containers")[0].items = [{ name: "matrix" }, { name: "panel" }];
  categValue.filter(c => c.category == "matrix")[0].items = [{ name: "paneldynamic" }, { name: "matrixdynamic" }];
  categValue.filter(c => c.category == "text")[0].items = [{ name: "text" }, { name: "multipletext" }];

  hiddenQuestion.value = [{ name: "comment" }, { name: "matrixdropdown" }];

  const row = categQuestion.visibleRows.filter(r => r.getValue("category") == "matrix")[0];
  const renderedRow = categQuestion.renderedTable.rows.filter(r => r.row == row)[0];
  renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "reset-to-default")[0].action();

  const categValue2 = categQuestion.value;

  expect(categValue2.filter(c => c.category == "containers")[0].items.map(i => i.name)).toEqual(["panel"]);
  expect(categValue2.filter(c => c.category == "matrix")[0].items.map(i => i.name)).toEqual(["matrix", "matrixdropdown", "matrixdynamic"]);
  expect(categValue2.filter(c => c.category == "text")[0].items.map(i => i.name)).toEqual(["text", "multipletext"]);

  expect(hiddenQuestion.value.map(i => i.name)).toEqual(["comment", "paneldynamic"]);
});

test("Preset edit, toolbox - reset item", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.getQuestionByName("toolbox_mode").value = "items";
  const itemQuestion = survey.getQuestionByName("toolbox_items");
  const itemsValue = itemQuestion.value;

  itemsValue.filter(c => c.name == "text")[0].title = "TextChanged";

  const row = itemQuestion.visibleRows.filter(r => r.getValue("name") == "text")[0];
  const renderedRow = itemQuestion.renderedTable.rows.filter(r => r.row == row)[0];
  const resetAction = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "reset-to-default")[0];
  resetAction.action(resetAction);

  expect(itemsValue.filter(c => c.name == "text")[0].title).toEqual("Single-Line Input");
});

test.skip("Preset edit, toolbox - default names in categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categoriesQuestion = survey.getQuestionByName("toolbox_categories");
  categoriesQuestion.value = categoriesQuestion.value.filter(v => ["text", "containers"].indexOf(v.category) >= 0);
  expect(categoriesQuestion.visibleRows).toHaveLength(2);
  categoriesQuestion.addRow();
  categoriesQuestion.visibleRows[categoriesQuestion.visibleRows.length - 1].getQuestionByName("title").value = "New Title 1";

  expect(categoriesQuestion.value[0].isDefault).toBeTruthy();
  expect(categoriesQuestion.value[1].isDefault).toBeTruthy();
  expect(categoriesQuestion.value[2].isDefault).toBeFalsy();

  expect(categoriesQuestion.value[2].category).toBe("category1");
});

test.skip("Preset edit, toolbox - default names in items", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categoriesQuestion = survey.getQuestionByName("toolbox_categories");
  const itemsQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(itemsQuestion.visibleRows).toHaveLength(0);
  categoriesQuestion.visibleRows[0].showDetailPanel();
  categoriesQuestion.visibleRows[0].detailPanel.getQuestionByName("items").removeRow(0);

  expect(itemsQuestion.visibleRows).toHaveLength(1);
  itemsQuestion.addRow();
  itemsQuestion.visibleRows[itemsQuestion.visibleRows.length - 1].getQuestionByName("title").value = "New Title 1";

  expect(itemsQuestion.value[0].isDefault).toBeTruthy();
  expect(itemsQuestion.value[1].isDefault).toBeFalsy();

  expect(itemsQuestion.value[1].name).toBe("name1");
});

test("Preset edit, toolbox - edit category", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  categQuestion.addRow();
  categQuestion.visibleRows[categQuestion.visibleRows.length - 1].getQuestionByName("category").value = "New_category";

  const renderedRow = categQuestion.renderedTable.rows.filter(r => r.row == categQuestion.visibleRows[0])[0];
  const editCategoryAction = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "edit-item")[0];
  const renderedCustomRow = categQuestion.renderedTable.rows.filter(r => r.row == categQuestion.visibleRows[categQuestion.visibleRows.length - 1])[0];
  const editCustomCategoryAction = renderedCustomRow.cells[renderedCustomRow.cells.length - 1].item.value.actions.filter(a => a.id == "edit-item")[0];

  const originalShowDialog = settings.showDialog;
  let popupSurvey: SurveyModel | undefined;

  settings.showDialog = (options: any) => {
    popupSurvey = options.data.survey;
    return { dispose: jest.fn() };
  };

  try {
    editCategoryAction.action();

    const allQuestions = popupSurvey!.getAllQuestions();
    expect(allQuestions.length).toBeGreaterThan(0);

    allQuestions.forEach(question => {
      if (question.name !== "items") {
        expect(question.visible).toBeTruthy();
      } else {
        expect(question.visible).toBeFalsy();
      }
    });

    expect(popupSurvey!.getQuestionByName("category").readOnly).toBeTruthy();

    editCustomCategoryAction.action();
    expect(popupSurvey!.getQuestionByName("category").readOnly).toBeFalsy();
  } finally {
    settings.showDialog = originalShowDialog;
  }
});

test("Preset edit, toolbox - edit item", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix") as QuestionMatrixDynamicModel;

  const originalShowDialog = settings.showDialog;
  let popupSurvey: SurveyModel | undefined;
  settings.showDialog = (options: any) => {
    popupSurvey = options.data.survey;
    return { dispose: jest.fn() };
  };

  try {
    const categoriesQuestion = survey.getQuestionByName("toolbox_categories");
    const itemsQuestion = survey.getQuestionByName("toolbox_matrix");
    expect(itemsQuestion.visibleRows).toHaveLength(0);
    categoriesQuestion.visibleRows[0].showDetailPanel();
    categoriesQuestion.visibleRows[0].detailPanel.getQuestionByName("items").removeRow(0);

    expect(itemsQuestion.visibleRows).toHaveLength(1);
    itemsQuestion.addRow();
    expect(itemsQuestion.visibleRows).toHaveLength(2);

    const renderedRow = itemsQuestion.renderedTable.rows.filter(r => r.row == itemsQuestion.visibleRows[0])[0];
    const editItemAction = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "edit-item")[0];
    editItemAction.action();

    const nameQuestion = popupSurvey!.getQuestionByName("name");
    expect(nameQuestion.readOnly).toBeTruthy();

    const renderedRow2 = matrixQuestion.renderedTable.rows.filter(r => r.row == matrixQuestion.visibleRows[1])[0];
    const editItemAction2 = renderedRow2.cells[renderedRow2.cells.length - 1].item.value.actions.filter(a => a.id == "edit-item")[0];
    editItemAction2.action();

    const nameQuestion2 = popupSurvey!.getQuestionByName("name");
    expect(nameQuestion2.readOnly).toBeFalsy();

  } finally {
    settings.showDialog = originalShowDialog;
  }
});

test("Preset edit, toolbox - custom types", () => {
  ComponentCollection.Instance.add({ name: "test", title: "Test", questionJSON: { "type": "text", "title": "1" } });

  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  const categQuestion = survey.getQuestionByName("toolbox_categories");
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  expect(matrixQuestion.value).toBeUndefined();
  expect(categQuestion.value.filter(c => c.category === "general")[0].items.filter(i => i.name === "test")).toHaveLength(1);
  ComponentCollection.Instance.remove("test");
});

test("Preset edit, toolbox - new names", () => {
  const editor = new CreatorPresetEditorModel({
    "toolbox": {
      "definition": [
        {
          "name": "text"
        },
        {
          "name": "comment",
          "subitems": [
            {
              "name": "name3",
              "title": "name3"
            }
          ]
        },
        {
          "name": "multipletext"
        },
        {
          "name": "name1",
          "title": "name1"
        },
        {
          "name": "panel"
        },
        {
          "name": "paneldynamic"
        },
        {
          "name": "name2",
          "title": "name2"
        }
      ],
      "categories": [
        {
          "category": "text",
          "title": "Text Input Questions",
          "items": [
            "text",
            "comment",
            "multipletext",
            "name1"
          ]
        },
        {
          "category": "containers",
          "title": "Containers",
          "items": [
            "panel",
            "paneldynamic",
            "name2"
          ]
        }
      ]
    }
  });
  const survey = editor.model;
  const matrixQuestion = survey.getQuestionByName("toolbox_matrix");
  matrixQuestion.addRow();
  expect(matrixQuestion.value[matrixQuestion.value.length - 1].name).toBe("name4");
  matrixQuestion.addRow();
  expect(matrixQuestion.value[matrixQuestion.value.length - 1].name).toBe("name5");
});

test("Change localization strings for toolbox (no categories)", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "items");
  const question = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_items");
  expect(question.isVisible).toBeTruthy();
  const textItem = question.visibleRows.filter(row => row.getQuestionByName("name").value == "text")[0];
  textItem.getQuestionByName("title").value = "Text item";
  editor.applyFromSurveyModel();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.qt.text).toEqual("Text item");
  expect(loc.en.qt.checkbox).toBeFalsy();
});
test("Change localization strings for toolbox (categories)", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  matrix.visibleRows[0].showDetailPanel();
  const question = <QuestionMatrixDynamicModel>matrix.visibleRows[0].detailPanel.getQuestionByName("items");
  const textItem = question.visibleRows.filter(row => row.getQuestionByName("name").value == "radiogroup")[0];
  textItem.getQuestionByName("title").value = "Radio item";
  editor.applyFromSurveyModel();
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.qt.radiogroup).toEqual("Radio item");
  expect(loc.en.qt.text).toBeFalsy();
});
test("Change localization strings for toolbox categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  survey.setValue("toolbox_showCategoryTitles", true);
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const row1 = matrix.visibleRows[0];
  expect(row1.getQuestionByName("category").value).toBe("choice");
  expect(row1.getQuestionByName("category").isReadOnly).toBeTruthy();
  expect(row1.getQuestionByName("title").value).toBe("Choice Questions");
  expect(row1.getQuestionByName("title").isReadOnly).toBeFalsy();
  row1.getQuestionByName("title").value = "Choice Questions edit";
  const loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.toolboxCategories.text).toBeFalsy();
  expect(loc.en.toolboxCategories.choice).toEqual("Choice Questions edit");
});
test("Change localization strings for toolbox categories - and switch titles on", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  const row1 = matrix.visibleRows[0];
  expect(row1.getQuestionByName("category").value).toBe("choice");
  row1.getQuestionByName("title").value = "Choice Questions edit";
  survey.setValue("toolbox_showCategoryTitles", true);
  expect(editor.creator.toolbox.categories[0].title).toBe("Choice Questions edit");
});
test("Toolbox categories, show header and showcolumn title column if show categories", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  survey.setValue("toolbox_mode", "categories");
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("toolbox_categories");
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.getColumnByName("title").visible).toBeTruthy();
  survey.setValue("toolbox_showCategoryTitles", true);
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.getColumnByName("title").visible).toBeTruthy();
  survey.setValue("toolbox_showCategoryTitles", false);
  expect(matrix.getColumnByName("title").visible).toBeTruthy();
});
test("Change toolbox presets multiple times", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  let categoriesQuestion = survey.getQuestionByName("toolbox_categories");
  const categoriesValue = [...categoriesQuestion.value];
  categoriesQuestion.value = [categoriesValue[1], categoriesValue[2]];
  expect(editor.json.toolbox.categories.map(t => t.category)).toEqual(["text", "containers"]);
  expect(editor.json.toolbox.definition.map(t => t.name)).toEqual(["text", "comment", "multipletext", "panel", "paneldynamic"]);

  let defaultTabQuestion = survey.getQuestionByName("tabs_activeTab");
  defaultTabQuestion.value = "preview";
  expect(editor.json.toolbox.categories.map(t => t.category)).toEqual(["text", "containers"]);
  expect(editor.json.toolbox.definition.map(t => t.name)).toEqual(["text", "comment", "multipletext", "panel", "paneldynamic"]);
});
test("Toolbox import and defaults", () => {
  const editor = new CreatorPresetEditorModel({});
  editor.json = { toolbox: {
    "definition": [
      {
        "name": "radiogroup"
      },
      {
        "name": "rating",
        "subitems": [
          {
            "name": "labels",
          },
          {
            "name": "stars",
            "json": {
              "type": "rating",
              "rateType": "stars"
            }
          }
        ]
      },
      {
        "name": "comment",
        "iconName": "icon-test"
      }
    ],
    "categories": [
      {
        "category": "choice",
        "items": [
          "radiogroup",
          "rating"
        ]
      },
      {
        "category": "text",
        "items": [
          "comment"
        ]
      }
    ]
  },
  "localization": {
    "en": {
      "qt": {
        "comment": "Comment"
      }
    }
  } };

  const survey = editor.model;
  const value = survey.getQuestionByName("toolbox_categories").value;
  expect(value).toEqual([
    {
      "category": "choice",
      "title": "Choice Questions",
      "items": [
        {
          "name": "radiogroup",
          "title": "Radio Button Group",
          "iconName": "icon-radiogroup",
          "json": {
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ],
            "type": "radiogroup"
          }
        },
        {
          "name": "rating",
          "title": "Rating Scale",
          "iconName": "icon-rating",
          "json": {
            "type": "rating"
          },
          "subitems": [
            {
              "name": "labels",
              "title": "Labels",
              "iconName": null,
              "json": {
                "type": "rating",
                "rateType": "labels"
              }
            },
            {
              "name": "stars",
              "title": "Stars",
              "iconName": null,
              "json": {
                "type": "rating",
                "rateType": "stars"
              }
            }
          ]
        }
      ]
    },
    {
      "category": "text",
      "title": "Text Input Questions",
      "items": [
        {
          "name": "comment",
          "title": "Comment",
          "iconName": "icon-test",
          "json": {
            "type": "comment"
          }
        }
      ]
    }
  ]);

  editor.json = { toolbox: {
    "definition": [
      {
        "name": "radiogroup"
      },
      {
        "name": "rating",
        "subitems": [
          {
            "name": "labels",
          },
          {
            "name": "stars",
            "json": {
              "type": "rating",
              "rateType": "stars"
            }
          }
        ]
      },
      {
        "name": "comment"
      }
    ],
    "categories": [
      {
        "category": "choice",
        "items": [
          "radiogroup",
          "rating"
        ]
      },
      {
        "category": "text",
        "items": [
          "comment",
          "html"
        ]
      }
    ]
  },
  "localization": {
    "en": {
      "qt": {
        "comment": "Comment"
      }
    }
  } };

  const value2 = survey.getQuestionByName("toolbox_categories").value;
  expect(value2).toEqual([
    {
      "category": "choice",
      "title": "Choice Questions",
      "items": [
        {
          "name": "radiogroup",
          "title": "Radio Button Group",
          "iconName": "icon-radiogroup",
          "json": {
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ],
            "type": "radiogroup"
          }
        },
        {
          "name": "rating",
          "title": "Rating Scale",
          "iconName": "icon-rating",
          "json": {
            "type": "rating"
          },
          "subitems": [
            {
              "name": "labels",
              "title": "Labels",
              "iconName": null,
              "json": {
                "type": "rating",
                "rateType": "labels"
              }
            },
            {
              "name": "stars",
              "title": "Stars",
              "iconName": null,
              "json": {
                "type": "rating",
                "rateType": "stars"
              }
            }
          ]
        }
      ]
    },
    {
      "category": "text",
      "title": "Text Input Questions",
      "items": [
        {
          "name": "comment",
          "title": "Comment",
          "iconName": "icon-comment",
          "json": {
            "type": "comment"
          }
        }
      ]
    }
  ]);
});