import { SurveyModel, settings as surveySettings, Serializer } from "survey-core";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { settings as creatorSetting, settings } from "../src/creator-settings";
import { CreatorTester } from "./creator-tester";
import { UndoRedoController } from "../src/plugins/undo-redo/undo-redo-controller";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";

surveySettings.supportCreatorV2 = true;

const multipageJSON = {
  pages: [
    {
      name: "page1",
      title: "Page 1",
      questions: [
        { type: "text", name: "question1" },
        {
          name: "question2",
          choices: [
            "one",
            { value: "two", text: "second value" },
            { value: 3, text: "third value" }
          ],
          type: "checkbox"
        }
      ]
    },
    { name: "page2", questions: [{ name: "question3", type: "comment" }] },
    {
      name: "page3",
      questions: [
        {
          name: "question4",
          columns: ["Column 1", "Column 2", "Column 3"],
          rows: ["Row 1", "Row 2"],
          type: "matrix"
        },
        { name: "question5", type: "rating" }
      ]
    }
  ]
};

test("the creator can be empty", () => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = multipageJSON;
  creator.text = undefined;
  expect(creator.survey.pages).toHaveLength(0);

  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});

test("Create new page, set empty JSON", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});

test("Create new page, recreate designer survey via JSON", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  creator.showTestSurvey();
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  creator.JSON = {};
  creator.showDesigner();
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});

test("pageEditMode='single'", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  let creator = new CreatorTester(undefined, undefined, false);
  let designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(creator.pageEditMode).toEqual("standard");
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();

  creator = new CreatorTester({ pageEditMode: "single" }, undefined, false);
  designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
test("Create new ghost on adding a question", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  surveySettings.supportCreatorV2 = true;
  const creator = new CreatorTester(undefined, undefined, false);
  const undoredo = creator.getPlugin("undoredo");
  expect(undoredo.model).toBeTruthy();
  expect((<UndoRedoController>undoredo.model).undoRedoManager).toBeTruthy();
  creator.JSON = {};
  expect(creator.survey.pages).toHaveLength(0);
  creator.clickToolboxItem({ type: "text" });
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creator.activeTab = "editor";
  const editorPlugin = <TabJsonEditorTextareaPlugin>(creator.getPlugin("editor"));
  expect(editorPlugin.model).toBeTruthy();
  editorPlugin.model.text = "";
  creator.activeTab = "designer";
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
test("setting empty JSON into creator do not update undo/redo survey and onModified stopped working", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  let counter = 0;
  creator.onModified.add((sender, options) => {
    counter ++;
  });
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  expect(counter).toEqual(0);
  creator.survey.title = "title1";
  expect(counter).toEqual(1);
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  creator.survey.title = "title2";
  expect(counter).toEqual(2);
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});

test("Change clearInvisibleValues  default value, bug#4229", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const prop = Serializer.findProperty("survey", "clearInvisibleValues");
  const oldDefaultValue = prop.defaultValue;
  prop.defaultValue = "onHidden";
  const creator = new CreatorTester();
  creator.JSON = {};
  expect(creator.survey.clearInvisibleValues).toBe("onHidden");
  expect(creator.propertyGrid.clearInvisibleValues).toBe("onComplete");
  creator.activeTab = "test";
  const testPlugin = <TabTestPlugin>(creator.getPlugin("test"));
  expect(testPlugin.model.survey.clearInvisibleValues).toBe("onHidden");
  const survey1 = creator.createSurvey({ clearInvisibleValues: "none" }, "dummy");
  expect(survey1.clearInvisibleValues).toBe("none");
  prop.defaultValue = oldDefaultValue;
  const survey2 = creator.createSurvey({ clearInvisibleValues: "onHidden" }, "dummy");
  expect(survey2.clearInvisibleValues).toBe("onHidden");
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
test("Undo deleting a question that has been just added, bug#4479", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  creator.JSON = {};
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toBe("question1");
  let page = creator.survey.pages[0];
  expect(page.questions).toHaveLength(1);
  creator.deleteElement(creator.selectedElement);
  expect(creator.survey.pages).toHaveLength(0);
  creator.undo();
  page = creator.survey.pages[0];
  expect(page.questions).toHaveLength(1);
  expect(page.questions[0].name).toBe("question1");
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
test("Undo/Redo on empty survey, bug#5581", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  creator.JSON = {};
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toBe("question1");
  let page = creator.survey.pages[0];
  expect(page.questions).toHaveLength(1);
  creator.undo();
  expect(creator.survey.pages).toHaveLength(0);
  creator.redo();
  expect(creator.survey.pages).toHaveLength(1);
  page = creator.survey.pages[0];
  expect(page.questions).toHaveLength(1);
  expect(page.questions[0].name).toBe("question1");
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
test("Create last question, delete page and select survey in property grid", (): any => {
  const savedNewJSON = creatorSetting.defaultNewSurveyJSON;
  creatorSetting.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  creator.JSON = {};
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toBe("question1");
  let page = creator.survey.pages[0];
  expect(page.questions).toHaveLength(1);
  creator.deleteElement(creator.selectedElement);
  expect(creator.survey.pages).toHaveLength(0);
  expect(creator.selectedElement.getType()).toBe("survey");
  expect(creator.propertyGrid.editingObj.getType()).toBe("survey");
  creatorSetting.defaultNewSurveyJSON = savedNewJSON;
});
