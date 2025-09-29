import { PopupDropdownViewModel, Question } from "survey-core";
import { CreatorPresetEditorModel } from "../src/presets/presets-editor";

class CreatorPresetEditorModelTester extends CreatorPresetEditorModel {
  private getQuestionRowContextActions(question: Question, item_name: string) {
    const renderedRow = question.renderedTable.rows.filter(r => r.row?.value.name == item_name)[0];
    if (!renderedRow) return null;
    const actions = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions;
    const contextAction = actions.filter(a => a.id == "context-menu")[0];
    const popupViewModel = new PopupDropdownViewModel(contextAction.popupModel); // need for popupModel.onShow
    contextAction.popupModel.show();
    const list = contextAction.popupModel.contentComponentData.model;
    return list.actions;
  }

  public getRowContextActions(question_name: string, item_name: string) {
    const q = this.model.getQuestionByName(question_name);
    return this.getQuestionRowContextActions(q, item_name);
  }

  public getCategoryRowContextActions(question_name: string, category_name: string, item_name: string) {
    const q = this.model.getQuestionByName(question_name);
    const row = q.visibleRows.filter(r => r.value.category == category_name)[0];
    row.showDetailPanel();
    const inner = row.detailPanel.getQuestionByName("items");
    return this.getQuestionRowContextActions(inner, item_name);
  }

  public getValue(question_name: string) {
    const q = this.model.getQuestionByName(question_name);
    return q.value;
  }
}

const json = {
  "toolbox": {
    "definition": [
      {
        "name": "text"
      },
      {
        "name": "comment"
      },
      {
        "name": "multipletext"
      },
      {
        "name": "panel"
      },
      {
        "name": "paneldynamic"
      },
      {
        "name": "ranking"
      },
      {
        "name": "test"
      }
    ],
    "categories": [
      {
        "category": "text",
        "title": "Text Input Questions",
        "items": [
          "text",
          "comment",
          "multipletext"
        ]
      },
      {
        "category": "containers",
        "title": "Containers",
        "items": [
          "panel",
          "paneldynamic"
        ]
      }
    ]
  }
};
test("Preset edit, context menu - defaut toolbox matrices", () => {
  const editor = new CreatorPresetEditorModelTester(json);

  const value = editor.getValue("toolbox_matrix");
  expect(value.filter(v => v.name === "ranking")).toHaveLength(1);
  expect(value.filter(v => v.name === "text")).toHaveLength(0);
  expect(value).toHaveLength(17);

  const cats = editor.getValue("toolbox_categories");
  expect(cats).toHaveLength(2);
});

test("Preset edit, context menu - check actions", () => {
  const editor = new CreatorPresetEditorModelTester(json);

  const actions = editor.getRowContextActions("toolbox_matrix", "ranking");
  expect(actions.map(a => a.id)).toEqual([
    "to-text",
    "to-containers",
    "move-to-new-category",
    "move-as-subitem",
  ]);
  const subitemsAction = actions[3];
  expect(subitemsAction.items.map(a => a.id)).toEqual(["tosubitemcategory-text", "tosubitemcategory-containers"]);
  const subitemsCatAction = subitemsAction.items[0];
  expect(subitemsCatAction.items.map(a => a.id)).toEqual(["tosubitem-text", "tosubitem-comment", "tosubitem-multipletext"]);
});

test("Preset edit, context menu - check move to category", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getRowContextActions("toolbox_matrix", "ranking");
  actions.filter(a => a.id == "to-containers")[0].action();
  const value = editor.getValue("toolbox_matrix");

  const cats = editor.getValue("toolbox_categories");
  expect(cats).toHaveLength(2);
  expect(cats.filter(c => c.category == "containers")[0].items.map(i => i.name)).toEqual(["panel", "paneldynamic", "ranking"]);
  expect(value.filter(v => v.name === "ranking")).toHaveLength(0);
});

test("Preset edit, context menu - check move to new category", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getRowContextActions("toolbox_matrix", "ranking");
  actions.filter(a => a.id == "move-to-new-category")[0].action();
  const value = editor.getValue("toolbox_matrix");

  const cats = editor.getValue("toolbox_categories");
  expect(cats).toHaveLength(3);
  expect(cats.filter(c => c.category == "category1")[0].items.map(i => i.name)).toEqual(["ranking"]);
  expect(value.filter(v => v.name === "ranking")).toHaveLength(0);
});

test("Preset edit, context menu - check move to subitems", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getRowContextActions("toolbox_matrix", "ranking");
  const subitemsAction = actions[3];
  const subitemsCatAction = subitemsAction.items[0];
  expect(subitemsCatAction.items[1].id).toBe("tosubitem-comment");
  subitemsCatAction.items[1].action();
  const value = editor.getValue("toolbox_matrix");

  const cats = editor.getValue("toolbox_categories");
  expect(cats).toHaveLength(2);
  expect(cats.filter(c => c.category == "text")[0].items.filter(i => i.name == "comment")[0].subitems.map(i => i.name)).toEqual(["ranking"]);
  expect(value.filter(v => v.name === "ranking")).toHaveLength(0);
});

test("Preset edit, check categories context menu - check actions", () => {
  const editor = new CreatorPresetEditorModelTester(json);

  const actions = editor.getCategoryRowContextActions("toolbox_categories", "text", "comment");
  expect(actions.map(a => a.id)).toEqual([
    "remove-from",
    "move-to-categories",
    "move-to-new-category",
    "convert-to-subcategory",
    "move-as-subitem",
  ]);
  const catAction = actions[1];
  expect(catAction.items.map(a => a.id)).toEqual(["to-text", "to-containers"]);
  const subitemsAction = actions[4];
  expect(subitemsAction.items.map(a => a.id)).toEqual(["tosubitemcategory-text", "tosubitemcategory-containers"]);
  const subitemsCatAction = subitemsAction.items[0];
  expect(subitemsCatAction.items.map(a => a.id)).toEqual(["tosubitem-text", "tosubitem-comment", "tosubitem-multipletext"]);
});

test("Preset edit, categories context menu - remove", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getCategoryRowContextActions("toolbox_categories", "text", "comment");
  const cats = editor.getValue("toolbox_categories");
  const unsorted = editor.getValue("toolbox_matrix");
  expect(cats[0].items).toHaveLength(3);
  expect(cats[0].items.filter(i => i.name == "comment")).toHaveLength(1);
  expect(unsorted).toHaveLength(17);
  actions.filter(a => a.id == "remove-from")[0].action();

  const cats2 = editor.getValue("toolbox_categories");
  const unsorted2 = editor.getValue("toolbox_matrix");
  expect(cats2[0].items).toHaveLength(2);
  expect(cats2[0].items.filter(i => i.name == "comment")).toHaveLength(0);
  expect(unsorted2).toHaveLength(18);
  expect(unsorted.filter(i => i.name == "comment")).toHaveLength(1);
});

test("Preset edit, categories context menu - check move to category", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getCategoryRowContextActions("toolbox_categories", "text", "comment");
  const cats = editor.getValue("toolbox_categories");
  const unsorted = editor.getValue("toolbox_matrix");
  expect(cats[0].items).toHaveLength(3);
  expect(cats[0].items.filter(i => i.name == "comment")).toHaveLength(1);
  expect(cats[1].items).toHaveLength(2);
  expect(cats[1].items.filter(i => i.name == "comment")).toHaveLength(0);
  expect(unsorted).toHaveLength(17);
  actions.filter(a => a.id == "move-to-categories")[0].items.filter(a => a.id == "to-containers")[0].action();

  const cats2 = editor.getValue("toolbox_categories");
  const unsorted2 = editor.getValue("toolbox_matrix");
  expect(cats2[0].category).toBe("text");
  expect(cats2[0].items).toHaveLength(2);
  expect(cats2[0].items.filter(i => i.name == "comment")).toHaveLength(0);
  expect(cats2[1].category).toBe("containers");
  expect(cats2[1].items).toHaveLength(3);
  expect(cats2[1].items.filter(i => i.name == "comment")).toHaveLength(1);
  expect(unsorted2).toHaveLength(17);
  expect(unsorted.filter(i => i.name == "comment")).toHaveLength(0);
});

test("Preset edit, context menu - check move to new category", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getCategoryRowContextActions("toolbox_categories", "text", "comment");
  const cats = editor.getValue("toolbox_categories");
  const unsorted = editor.getValue("toolbox_matrix");
  expect(cats).toHaveLength(2);
  expect(cats[0].items).toHaveLength(3);
  expect(cats[0].items.filter(i => i.name == "comment")).toHaveLength(1);
  expect(unsorted).toHaveLength(17);
  actions.filter(a => a.id == "move-to-new-category")[0].action();

  const cats2 = editor.getValue("toolbox_categories");
  const unsorted2 = editor.getValue("toolbox_matrix");
  expect(cats2[0].category).toBe("text");
  expect(cats2[0].items).toHaveLength(2);
  expect(cats2[0].items.filter(i => i.name == "comment")).toHaveLength(0);
  expect(cats2[2].category).toBe("category1");
  expect(cats2[2].items).toHaveLength(1);
  expect(cats2[2].items.filter(i => i.name == "comment")).toHaveLength(1);
  expect(unsorted2).toHaveLength(17);
  expect(unsorted.filter(i => i.name == "comment")).toHaveLength(0);
});

test("Preset edit, context menu - convert to subcategory", () => {
  const editor = new CreatorPresetEditorModelTester(json);
  const actions = editor.getCategoryRowContextActions("toolbox_categories", "text", "comment");
  const cats = editor.getValue("toolbox_categories");
  expect(cats[0].items.filter(i => i.name == "comment")[0].subitems).toBeUndefined();
  actions.filter(a => a.id == "convert-to-subcategory")[0].action();

  const cats2 = editor.getValue("toolbox_categories");
  expect(cats2[0].items.filter(i => i.name == "comment")[0].subitems).toEqual([]);
});