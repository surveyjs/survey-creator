import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
import { JsonEditorBaseModel } from "../../src/components/tabs/json-editor-plugin";
import { settings } from "../../src/creator-settings";

test("JsonEditor & showErrors/errorList", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = "{}";
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeFalsy();
  expect(editor.errorList.actions).toHaveLength(0);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "text",
        name: "q1",
        incorrectProp: "abc"
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
  expect(editor.errorList.actions[0].title.substring(0, 8)).toBe("Line: 6.");
});

test("JsonEditor & fixError action", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = "{}";
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeFalsy();
  expect(editor.errorList.actions).toHaveLength(0);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "text",
        name: "q1",
      },
      {
        type: "text",
        name: "q1",
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
  expect(editor.errorList.actions[0].data.showFixButton).toBeTruthy();
  editor.errorList.actions[0].data.fixError();
  expect(editor.hasErrors).toBeFalsy();
  expect(JSON.parse(editor.text)).toEqual({
    elements: [
      {
        type: "text",
        name: "q1",
      },
      {
        type: "text",
        name: "question1",
      }
    ]
  });
});
test("JsonEditor & error question unique in panel dynamic", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [{ type: "text", name: "q2" }]
      },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [{ type: "text", name: "q2" }]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
  expect(editor.errorList.actions[0].data.showFixButton).toBeTruthy();
  editor.errorList.actions[0].data.fixError();
  expect(editor.hasErrors).toBeFalsy();
  expect(JSON.parse(editor.text)).toEqual({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [{ type: "text", name: "q2" }]
      },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [{ type: "text", name: "question1" }]
      }
    ]
  });
});
test("JsonEditor & error question unique in panel dynamic, #2", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "paneldynamic", name: "question1",
        templateElements: [{ type: "text", name: "question2" }]
      },
      {
        type: "paneldynamic", name: "question3",
        templateElements: [{ type: "text", name: "question2" }]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
  expect(editor.errorList.actions[0].data.showFixButton).toBeTruthy();
  editor.errorList.actions[0].data.fixError();
  expect(editor.hasErrors).toBeFalsy();
  expect(JSON.parse(editor.text)).toEqual({
    elements: [
      {
        type: "paneldynamic", name: "question1",
        templateElements: [{ type: "text", name: "question2" }]
      },
      {
        type: "paneldynamic", name: "question3",
        templateElements: [{ type: "text", name: "question4" }]
      }
    ]
  });
});
test("JsonEditor & fixError action with object to array", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    pages: [{
      questions: {
        type: "text",
        name: "q1",
      }
    }]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
  expect(editor.errorList.actions[0].data.showFixButton).toBeTruthy();
  editor.errorList.actions[0].data.fixError();
  expect(editor.hasErrors).toBeFalsy();
  expect(JSON.parse(editor.text)).toEqual({
    pages: [{
      questions: [
        {
          type: "text",
          name: "q1",
        }
      ]
    }]
  });
});
test("JsonEditor & showErrors/errorList", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  let modelEditor;
  creator.onActiveTabChanged.add((sender, options) => {
    if (options.tabName === "editor") {
      modelEditor = options.model;
    }
  });
  let allowToPassSomeErrors = false;
  creator.onActiveTabChanging.add((sender, options) => {
    if (creator.activeTab === "editor") {
      if (!options.allow) {
        options.allow = allowToPassSomeErrors;
      }
    }
  });
  creator.activeTab = "editor";
  expect(creator.activeTab).toBe("editor");
  modelEditor.text = "{ elements: [ { type: \"text\", name: \"q1\", customProp1: \"abc\" } ]}";
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("editor");
  allowToPassSomeErrors = true;
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("designer");
  creator.activeTab = "editor";
  modelEditor.text = "{a: ";
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("editor");
});
test("import export copy actions", () => {
  const creator: CreatorTester = new CreatorTester();
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
  const importAction = creator.getActionBarItem("svc-json-import");
  const exportAction = creator.getActionBarItem("svc-json-export");
  const copyAction = creator.getActionBarItem("svc-json-copy");

  expect(importAction.visible).toBeFalsy();
  expect(exportAction.visible).toBeFalsy();
  expect(copyAction.visible).toBeFalsy();

  creator.activeTab = "editor";
  expect(importAction.visible).toBeTruthy();
  expect(exportAction.visible).toBeTruthy();
  expect(copyAction.visible).toBeTruthy();
});
test("import json from file", (done) => {
  const creator: CreatorTester = new CreatorTester();
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
  editorPlugin.activate();

  const data = JSON.stringify({ questions: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] } as any, null, 4);
  const blob = new Blob([data], { type: "application/json" });
  expect(editorPlugin.model.isJSONChanged).toBeFalsy();
  editorPlugin.importFromFile(blob as any, () => {
    expect(editorPlugin.model.text).toEqual(data);
    expect(editorPlugin.model.isJSONChanged).toBeTruthy();
    done();
  });
});
test("export json to file", (done): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = { questions: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
  editorPlugin.activate();

  expect(editorPlugin.model.text).toEqual("{\n  \"pages\": [\n    {\n      \"name\": \"page1\",\n      \"elements\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"q1\"\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"q2\"\n        }\n      ]\n    }\n  ]\n}");
  editorPlugin.saveToFileHandler = async (fileName: string, blob: Blob) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      expect(fileName).toBe(settings.jsonEditor.exportFileName);
      expect(fileReader.result).toEqual(editorPlugin.model.text);
      done();
    };
    fileReader.readAsText(blob);
  };
  editorPlugin.exportToFile(settings.jsonEditor.exportFileName);
});
test("Put elements into end of the JSON", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: { type: "text", name: "q1" }
  };
  creator.survey.pages[0].title = "test";
  const editor = new TextareaJsonEditorModel(creator);
  const text = editor.text;
  const elementsPos = text.indexOf("elements");
  const titlePos = text.indexOf("title");
  expect(elementsPos > titlePos).toBeTruthy();
});
