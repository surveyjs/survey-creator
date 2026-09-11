import { getScrollTopForCaret, TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
import { settings } from "../../src/creator-settings";
import { SurveyTextWorker } from "../../src/textWorker";

test("JsonEditor & showErrors/errorList", () => {
  // the linter reports the unknown property too - this test is about the JSON error list
  const creator = new CreatorTester({ showLinterPanel: false });
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
  // the linter reports the duplicate too - this test is about the JSON error and its fix
  const creator = new CreatorTester({ showLinterPanel: false });
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
  // the linter reports the duplicate too - this test is about the JSON error and its fix
  const creator = new CreatorTester({ showLinterPanel: false });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    pages: [{
      elements: {
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
      elements: [
        {
          type: "text",
          name: "q1",
        }
      ]
    }]
  });
});
test("JsonEditor & fixError action incorrect properties value, Issue#7335", () => {
  // the linter reports the same value - this test is about the JSON error and its fix
  const creator = new CreatorTester({
    validateJsonPropertyValues: true,
    showLinterPanel: false
  });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    pages: [{
      elements: [{
        type: "text",
        name: "q1",
        clearIfInvisible: "sss"
      }]
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
      elements: [
        {
          type: "text",
          name: "q1",
          clearIfInvisible: "default"
        }
      ]
    }]
  });
});
test("JsonEditor & fixError better fix suggestions, Issue#7417", () => {
  // the linter reports the same value - this test is about the JSON error and its fix
  const creator = new CreatorTester({
    validateJsonPropertyValues: true,
    showLinterPanel: false
  });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    pages: [{
      elements: [{
        type: "text",
        name: "q1",
        clearIfInvisible: "cOmPlEtE"
      }]
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
      elements: [
        {
          type: "text",
          name: "q1",
          clearIfInvisible: "onComplete"
        }
      ]
    }]
  });
});
test("JsonEditor & showErrors/errorList", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  let modelEditor;
  creator.onActiveTabChanged.add((sender, options) => {
    if (options.tabName === "json") {
      modelEditor = options.model;
    }
  });
  let allowToPassSomeErrors = false;
  creator.onActiveTabChanging.add((sender, options) => {
    if (creator.activeTab === "json") {
      if (!options.allow) {
        options.allow = allowToPassSomeErrors;
      }
    }
  });
  creator.activeTab = "json";
  expect(creator.activeTab).toBe("json");
  modelEditor.text = "{ elements: [ { type: \"text\", name: \"q1\", customProp1: \"abc\" } ]}";
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("json");
  allowToPassSomeErrors = true;
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("designer");
  creator.activeTab = "json";
  modelEditor.text = "{a: ";
  creator.activeTab = "designer";
  expect(creator.activeTab).toBe("json");
});
test("import export copy actions", () => {
  const creator: CreatorTester = new CreatorTester();
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  const importAction = creator.getActionBarItem("svc-json-import");
  const exportAction = creator.getActionBarItem("svc-json-export");
  const copyAction = creator.getActionBarItem("svc-json-copy");

  expect(importAction.visible).toBeFalsy();
  expect(exportAction.visible).toBeFalsy();
  expect(copyAction.visible).toBeFalsy();

  creator.activeTab = "json";
  expect(importAction.visible).toBeTruthy();
  expect(exportAction.visible).toBeTruthy();
  expect(copyAction.visible).toBeTruthy();
});
test("import json from file", (done) => {
  const creator: CreatorTester = new CreatorTester();
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  editorPlugin.activate();

  const data = JSON.stringify({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] } as any, null, 4);
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
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
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
test("We should have one SurveyTextWorker.fromJSON/toJSON", () => {
  const json = { requiredMark: "###" };
  const creator = new CreatorTester();
  creator.activeTab = "json";
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  editorPlugin.model.text = JSON.stringify(json);
  let counter = 0;
  SurveyTextWorker.onProcessJson = (json: any): void => {
    if (json?.requiredMark === "###") {
      counter++;
    }
  };
  creator.activeTab = "designer";
  expect(counter).toBe(1);
  SurveyTextWorker.onProcessJson = undefined;
});
test("JsonEditor & duplicated errors in matrices columns", () => {
  // the linter reports the duplicate too - this test is about the JSON error and its fix
  const creator = new CreatorTester({ showLinterPanel: false });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "matrixdynamic",
        name: "q1",
        columns: [
          { name: "col1" },
        ]
      },
      {
        type: "matrixdynamic",
        name: "q2",
        columns: [
          { name: "col1" },
        ]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeFalsy();
  expect(editor.errorList.actions).toHaveLength(0);

  editor.text = JSON.stringify({
    elements: [
      {
        type: "matrixdynamic",
        name: "q1",
        columns: [
          { name: "col1" },
          { name: "col1" }
        ]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
});
test("JsonEditor & duplicated errors in multiple text items, Bug#7398", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    elements: [
      {
        type: "multipletext",
        name: "q1",
        items: [
          { name: "col1" },
        ]
      },
      {
        type: "multipletext",
        name: "q2",
        items: [
          { name: "col1" },
        ]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeFalsy();
  expect(editor.errorList.actions).toHaveLength(0);

  editor.text = JSON.stringify({
    elements: [
      {
        type: "multipletext",
        name: "q1",
        items: [
          { name: "col1" },
          { name: "col1" }
        ]
      }
    ]
  }, null, 3);
  editor.processErrors(editor.text);
  expect(editor.hasErrors).toBeTruthy();
  expect(editor.errorList.actions).toHaveLength(1);
});

test("getScrollTopForCaret keeps the caret line whole in the view", () => {
  // a 300px view over a 1000px text, 20px lines, standing at the top
  const scroll = (caretTop: number, scrollTop: number = 0) =>
    getScrollTopForCaret(caretTop, 20, 300, scrollTop, 1000);
  // the line is inside the view - nothing to do
  expect(scroll(0)).toBeUndefined();
  expect(scroll(280)).toBeUndefined();
  expect(scroll(400, 300)).toBeUndefined();
  // the last line that still fits, and the first one that does not
  expect(scroll(281)).toBe(281 - 140);
  // below the view: the line is centred
  expect(scroll(600)).toBe(600 - 140);
  // above the view: centred as well
  expect(scroll(300, 500)).toBe(300 - 140);
  // clamped to the ends of the scroller
  expect(scroll(60, 400)).toBe(0);
  expect(scroll(980)).toBe(700);
});

test("getScrollTopForCaret asks for no scrolling when there is nothing to scroll", () => {
  // the whole text fits
  expect(getScrollTopForCaret(100, 20, 300, 0, 300)).toBeUndefined();
  expect(getScrollTopForCaret(100, 20, 300, 0, 200)).toBeUndefined();
  // no layout at all: jsdom, a hidden tab, server-side rendering
  expect(getScrollTopForCaret(100, 20, 0, 0, 0)).toBeUndefined();
  expect(getScrollTopForCaret(100, 0, 300, 0, 1000)).toBeUndefined();
});

// The editor is given a textarea with metrics, the way a browser would: jsdom lays nothing out,
// so clientHeight and scrollHeight are defined by hand.
function createEditorWithTextarea(text: string, clientHeight: number, scrollHeight: number,
  options?: any): TextareaJsonEditorModel {
  const creator = new CreatorTester(options);
  const editor = new TextareaJsonEditorModel(creator);
  const el = document.createElement("textarea");
  document.createElement("div").appendChild(el);
  Object.defineProperty(el, "clientHeight", { value: clientHeight, configurable: true });
  Object.defineProperty(el, "scrollHeight", { value: scrollHeight, configurable: true });
  Object.defineProperty(el, "clientWidth", { value: 600, configurable: true });
  el.style.lineHeight = "20px";
  // the caret can only stand inside the value the element holds, which the UI binds for it
  el.value = text;
  editor.textElement = el;
  editor.text = text;
  editor.processErrors(editor.text);
  return editor;
}

// One question per line, so the defect sits far below the top of the text. An unknown property
// is a JSON error (the bottom list), an unknown reference is a linter finding (the panel).
function longJson(defectAt: number, count: number, kind: "error" | "finding"): string {
  const elements = [];
  for (let i = 0; i < count; i++) {
    const element: any = { type: "text", name: "q" + i };
    if (i === defectAt) {
      if (kind === "error") element.nosuchprop = 1;
      else element.visibleIf = "{nosuchquestion} = 1";
    }
    elements.push(element);
  }
  return JSON.stringify({ elements: elements }, null, 2);
}

test("A click on an error moves the caret to it", () => {
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 300, 3000,
    { showLinterPanel: false });
  const el = editor.textElement;
  expect(editor.errorList.actions).toHaveLength(1);
  const error = editor.errorList.actions[0].data.error;
  expect(error.at).toBeGreaterThan(0);
  editor.errorList.onItemClick(<any>editor.errorList.actions[0]);
  expect(el.selectionStart).toBe(error.at);
  expect(el.selectionEnd).toBe(error.at);
  // jsdom renders no text, so the mirror measures 0 and the caret line counts as visible:
  // here the click must move the caret without throwing
  expect(el.scrollTop).toBe(0);
});

test("A click on an error scrolls the caret line to the middle of the view", () => {
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 300, 3000,
    { showLinterPanel: false });
  const el = editor.textElement;
  // measuring the rendered text is the browser's part, which jsdom does not do
  (<any>editor)["measureCaretTop"] = () => 1400;
  editor.errorList.onItemClick(<any>editor.errorList.actions[0]);
  expect(el.scrollTop).toBe(getScrollTopForCaret(1400, 20, 300, 0, 3000));
  expect(el.scrollTop).toBe(1260);
});

test("A click on a linter finding scrolls the same way", () => {
  const editor = createEditorWithTextarea(longJson(40, 50, "finding"), 300, 3000);
  const el = editor.textElement;
  (<any>editor)["measureCaretTop"] = () => 1400;
  const finding = editor.linter.checkList.actions.filter(
    a => a.id.indexOf("linter-finding-") === 0)[0];
  expect(finding).toBeDefined();
  editor.linter.checkList.onItemClick(<any>finding);
  expect(el.selectionStart).toBe(finding.data.error.at);
  expect(el.scrollTop).toBe(1260);
});

test("A click on an error does not scroll an editor with no metrics", () => {
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 0, 0,
    { showLinterPanel: false });
  const el = editor.textElement;
  (<any>editor)["measureCaretTop"] = () => 1400;
  editor.errorList.onItemClick(<any>editor.errorList.actions[0]);
  expect(el.selectionStart).toBe(editor.errorList.actions[0].data.error.at);
  expect(el.scrollTop).toBe(0);
});
