import { TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
import { JsonEditorBaseModel } from "../../src/components/tabs/json-editor-plugin";

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
test("JsonEditor & showErrors/errorList", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  let modelEditor;
  creator.onActiveTabChanged.add((sender, options) => {
    if(options.tabName === "editor") {
      modelEditor = options.model;
    }
  });
  let allowToPassSomeErrors = false;
  creator.onActiveTabChanging.add((sender, options) => {
    if(creator.activeTab === "editor") {
      if(!options.allow) {
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
