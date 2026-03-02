import { QuestionMatrixDynamicModel } from "survey-core";
import { CreatorPresetEditorModel } from "../src/ui-preset-editor/presets-editor";
import { CreatorBase } from "../src/creator-base";
//import "survey-creator-core/i18n/german";
//import "survey-creator-core/i18n/italian";
//import "survey-creator-core/i18n/french";

test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs.map(t => t.name)).toEqual(["designer", "preview", "logic", "json"]);
  itemsQuestion.value = [{ name: "preview" }, { name: "logic" }];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "logic";
  const creator = editor.creator;
  creator.activeTab = "logic";
  editor.applyFromSurveyModel();
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toEqual("preview");
  expect(creator.tabs[1].id).toEqual("logic");
  expect(creator.activeTab).toBe("logic");
});

test("Preset edit model, tabs page with creator, default items with custom", () => {
  const creator = new CreatorBase();
  creator.addTab({ name: "custom", plugin: { model: creator, activate: () => { } } });
  creator.addTab({ name: "preview", plugin: { model: creator, activate: () => { } }, isInternal: true });
  const editor = new CreatorPresetEditorModel({}, creator);
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs.map(t => t.name)).toEqual(["designer", "preview", "logic", "json", "custom"]);

  itemsQuestion.value = [{ name: "preview" }, { name: "custom" }];
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  activeTabQuestion.value = "custom";
  editor.applyFromSurveyModel();
  expect(creator.tabs).toHaveLength(2);
  expect(creator.tabs[0].id).toEqual("preview");
  expect(creator.tabs[1].id).toEqual("custom");
  expect(creator.activeTab).toBe("preview");
});

test("Preset edit model, tabs page with creator, default items", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: ["designer", "logic"], activeTab: "logic" } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const defultTabs = JSON.parse(JSON.stringify(itemsQuestion.value));
  expect(defultTabs.map(t => t.name)).toEqual(["designer", "logic"]);
  const activeTabQuestion = survey.getQuestionByName("tabs_activeTab");
  expect(activeTabQuestion.value).toEqual("logic");
});

test("Preset edit model, edit tabs title", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const item = itemsQuestion.value[0];
  expect(item.name).toEqual("designer");
  expect(item.title).toEqual("Designer");
});
test("Change localization strings for tabs", () => {
  const editor = new CreatorPresetEditorModel({ tabs: { items: [] } });
  const survey = editor.model;
  const itemsQuestion = survey.getQuestionByName("tabs_items");
  const item = itemsQuestion.visibleRows[0];
  item.getQuestionByName("title").value = "Designer edit";
  let loc = editor.json.localization;
  expect(loc).toBeTruthy();
  expect(loc.en.tabs.designer).toEqual("Designer edit");
  expect(loc.en.tabs.logic).toBeFalsy();
  expect(editor.creator.tabs[0].locTitle.text).toEqual("Designer edit");
  item.getQuestionByName("title").value = "Designer";
  loc = editor.json.localization;
  expect(loc).toBeFalsy();
});
test("Change tabs presets multiple times", () => {
  const editor = new CreatorPresetEditorModel();
  const survey = editor.model;
  let itemsQuestion = survey.getQuestionByName("tabs_items");
  const itemsValue = [...itemsQuestion.value];
  itemsValue.splice(itemsValue.length - 1, 1);
  itemsQuestion.value = itemsValue;
  expect(editor.json.tabs.items.map(t => t.name)).toEqual(["designer", "preview", "logic"]);

  let defaultTabQuestion = survey.getQuestionByName("tabs_activeTab");
  defaultTabQuestion.value = "preview";
  expect(editor.json.tabs.activeTab).toBe("preview");
  expect(editor.json.tabs.items.map(t => t.name)).toEqual(["designer", "preview", "logic"]);
});
test("Tabs import and defaults", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  editor.json = {
    tabs: { items: [{ name: "designer", iconName: "icon-test" }, "preview"] },
    localization: {
      "en": {
        "tabs": {
          "preview": "Test"
        }
      }
    }
  };

  const value = survey.getQuestionByName("tabs_items").value;
  expect(value).toEqual([
    {
      "name": "designer",
      "title": "Designer",
      "iconName": "icon-test"
    },
    {
      "name": "preview",
      "title": "Test",
      "iconName": "icon-preview"
    }
  ]);

  editor.json = {
    tabs: { items: [{ name: "designer", iconName: "icon-test" }, "preview", "logic"] },
    localization: {
      "en": {
        "tabs": {
          "preview": "Test"
        }
      }
    }
  };
  const value2 = survey.getQuestionByName("tabs_items").value;

  expect(value2).toEqual([
    {
      "name": "designer",
      "title": "Designer",
      "iconName": "icon-test"
    },
    {
      "name": "preview",
      "title": "Test",
      "iconName": "icon-preview"
    },
    {
      "name": "logic",
      "title": "Logic",
      "iconName": "icon-logic-24x24"
    }
  ]);
});
test("Tabs export and defaults", () => {
  const editor = new CreatorPresetEditorModel({});
  const survey = editor.model;
  const items = (survey.getQuestionByName("tabs_items") as QuestionMatrixDynamicModel);
  items.removeRow(1);
  expect(editor.json).toEqual({
    "tabs": {
      "activeTab": "designer",
      "items": [
        {
          "name": "designer",
        },
        {
          "name": "logic",
        },
        {
          "name": "json",
        },
      ],
    }
  });
  const value = { ...items.value };
  value[0].iconName = "test-icon";
  survey.getQuestionByName("tabs_items").value = value;
  expect(editor.getJsonFromSurveyModel()).toEqual({
    "tabs": {
      "activeTab": "designer",
      "items": [
        {
          "name": "designer",
          "iconName": "test-icon"
        },
        {
          "name": "logic",
        },
        {
          "name": "json",
        },
      ],
    }
  });
});