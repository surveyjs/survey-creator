import { ItemValue, QuestionBooleanModel, QuestionCheckboxBase, QuestionCheckboxModel, QuestionDropdownModel, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, surveyLocalization, settings, MatrixDynamicRowModel } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";
import { ICreatorPresetData } from "../src/presets-creator/presets";
import { SurveyModel, Question } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";
import { SurveyCreatorModel } from "../src/creator-base";
import { editorLocalization } from "../src/editorLocalization";
import { QuestionPresetJsonModel } from "../src/presets/preset-question-json";
import { CreatorPresetEditableCaregorizedListConfigurator } from "../src/presets/presets-editable-categorized";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

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

test("Preset edit, toolbox - remove item from hidden items to general category", () => {
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
  expect(categQuestion.value.filter(с => с.category == "text")[0].items.filter(i => i.name == "comment")[0].iconName).toEqual("icon-test");

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.splice(0, 8);
  allItemsQuestion.value = allItemsValue;
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(с => с.category == "choice")[0].items.map(i => i.name)).toStrictEqual(["imagepicker", "ranking"]);

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.push({ name: "custom" });
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(с => с.category == "general")[0].items.map(i => i.name)).toStrictEqual(["custom"]);

  survey.getQuestionByName("toolbox_mode").value = "items";
  allItemsValue.push({ name: "custom2" });
  survey.getQuestionByName("toolbox_mode").value = "categories";
  expect(categQuestion.value.filter(с => с.category == "general")[0].items.map(i => i.name)).toStrictEqual(["custom", "custom2"]);
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
  renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "reset-to-default")[0].action();

  expect(itemsValue.filter(c => c.name == "text")[0].title).toEqual("Single-Line Input");
});

test("Preset edit, toolbox - default names in categories", () => {
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

test("Preset edit, toolbox - default names in items", () => {
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

  const renderedRow = categQuestion.renderedTable.rows.filter(r => r.row == categQuestion.visibleRows[0])[0];
  const editCategoryAction = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "edit-category")[0];

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

    renderedRow.row.getQuestionByName("isDefault").value = false;
    editCategoryAction.action();
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
    const editItemAction = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions.filter(a => a.id == "edit-category")[0];
    editItemAction.action();

    const nameQuestion = popupSurvey!.getQuestionByName("name");
    expect(nameQuestion.readOnly).toBeTruthy();

    const renderedRow2 = matrixQuestion.renderedTable.rows.filter(r => r.row == matrixQuestion.visibleRows[1])[0];
    const editItemAction2 = renderedRow2.cells[renderedRow2.cells.length - 1].item.value.actions.filter(a => a.id == "edit-category")[0];
    editItemAction2.action();

    const nameQuestion2 = popupSurvey!.getQuestionByName("name");
    expect(nameQuestion2.readOnly).toBeFalsy();

  } finally {
    settings.showDialog = originalShowDialog;
  }
});