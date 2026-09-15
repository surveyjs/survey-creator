import { getScrollTopForCaret, TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { AceJsonEditorModel, TabJsonEditorAcePlugin } from "../../src/components/tabs/json-editor-ace";
import { CreatorTester } from "../creator-tester";
import { settings } from "../../src/creator-settings";
import { SurveyTextWorker } from "../../src/textWorker";

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
  const creator = new CreatorTester({ validateJsonPropertyValues: true });
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
  const creator = new CreatorTester({ validateJsonPropertyValues: true });
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
test("We should have one SurveyTextWorker per text, from typing it to leaving the tab", () => {
  const json = { requiredMark: "###" };
  const creator = new CreatorTester();
  creator.activeTab = "json";
  const editorPlugin: TabJsonEditorTextareaPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  let counter = 0;
  SurveyTextWorker.onProcessJson = (json: any): void => {
    if (json?.requiredMark === "###") {
      counter++;
    }
  };
  try {
    editorPlugin.model.text = JSON.stringify(json);
    expect(counter).toBe(1);
    // leaving the tab asks the worker that has just processed this very text
    creator.activeTab = "designer";
    expect(counter).toBe(1);
    expect(creator.survey.requiredMark).toBe("###");
  } finally {
    SurveyTextWorker.onProcessJson = undefined;
  }
});
test("The text is linted once per change - allowingDeactivate reuses the last worker", () => {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  let counter = 0;
  SurveyTextWorker.onProcessJson = (): void => { counter++; };
  try {
    editor.text = JSON.stringify({ elements: [{ type: "text", name: "q1" }] });
    expect(counter).toBe(1);
    expect(editor.allowingDeactivate()).toBe(true);
    expect(counter).toBe(1);
    editor.processErrors(editor.text);
    expect(counter).toBe(1);
    editor.text = JSON.stringify({ elements: [{ type: "text", name: "q1", nosuch: 1 }] });
    expect(counter).toBe(2);
    expect(editor.allowingDeactivate()).toBe(false);
    expect(counter).toBe(2);
    editor.dispose();
  } finally {
    SurveyTextWorker.onProcessJson = undefined;
  }
});
// The few methods the Ace model calls, over a plain string; the gutter annotations are kept so
// the test can read them back. setValue fires the "change" the model listens to, the way Ace
// does; undoManager and isFocused are plain fields a test can replace.
function createAceMock(): any {
  let value = "";
  let annotations: Array<any> = [];
  let onChange: () => void = () => { };
  const undoManager = { reset() { }, markClean() { }, isClean: () => true, hasUndo: () => false, hasRedo: () => false };
  const session = {
    on(name: string, handler: () => void) { if (name === "change") onChange = handler; },
    setUseWorker() { }, setMode() { }, getUndoManager: () => undoManager,
    setAnnotations(list: Array<any>) { annotations = list; },
    doc: { getNewLineCharacter: () => "\n" },
  };
  return {
    commands: { removeCommand() { } }, setReadOnly() { }, setShowPrintMargin() { }, setFontSize() { }, setTheme() { },
    getSession: () => session, session: session, undoManager: undoManager,
    getValue: () => value, setValue(text: string) { value = text; onChange(); },
    renderer: { updateFull() { }, scrollCursorIntoView() { } },
    resize() { }, focus() { }, isFocused: () => false, gotoLine() { },
    getAnnotations: () => annotations,
  };
}
test("Ace marks only the blocking errors in the gutter", () => {
  const creator = new CreatorTester();
  const model = new AceJsonEditorModel(creator);
  const ace = createAceMock();
  model.init(ace);
  model.text = JSON.stringify({
    pages: [{ name: "p1", elements: [{ type: "text", name: "q1", nosuch: 1 }] }, { name: "p2" }]
  }, null, 2);
  // the unknown property blocks, the empty page is a warning
  const errors = model.errorList.actions.map(a => a.data.error);
  expect(errors.map(e => e.isBlocking)).toEqual([true, false]);
  const annotations = ace.getAnnotations();
  expect(annotations).toHaveLength(1);
  expect(annotations[0].type).toBe("error");
  expect(annotations[0].row).toBe(errors[0].rowAt);
  expect(annotations[0].text).toBe(errors[0].text);
  model.dispose();
});
test("JsonEditor & duplicated errors in matrices columns", () => {
  const creator = new CreatorTester();
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
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 300, 3000);
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
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 300, 3000);
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
  const editor = createEditorWithTextarea(longJson(40, 50, "error"), 0, 0);
  const el = editor.textElement;
  (<any>editor)["measureCaretTop"] = () => 1400;
  editor.errorList.onItemClick(<any>editor.errorList.actions[0]);
  expect(el.selectionStart).toBe(editor.errorList.actions[0].data.error.at);
  expect(el.scrollTop).toBe(0);
});

// The Fix button is reached with the keyboard (it has tabIndex 0), so the focus is on the button
// and not in the editor when the text is replaced; a mouse click keeps the focus in the editor,
// as the list swallows the mousedown.
test("Ace: a fix applied while the editor is not focused reaches the survey on leaving the tab", () => {
  const oldFunc = TabJsonEditorAcePlugin.hasAceEditor;
  TabJsonEditorAcePlugin.hasAceEditor = (): boolean => true;
  try {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q1" }] };
    creator.activeTab = "json";
    const plugin = <TabJsonEditorAcePlugin>creator.getPlugin("json");
    const model = <AceJsonEditorModel>plugin.model;
    const ace = createAceMock();
    model.init(ace);
    expect(model.isJSONChanged).toBeFalsy();
    const actions = model.errorList.actions;
    expect(actions.map(a => a.data.showFixButton)).toEqual([true]);
    actions[0].data.fixError();
    expect(JSON.parse(model.text).pages[0].elements[1].name).toBe("question1");
    creator.activeTab = "designer";
    expect(creator.activeTab).toBe("designer");
    expect(creator.survey.getAllQuestions().map(q => q.name)).toEqual(["q1", "question1"]);
  } finally {
    TabJsonEditorAcePlugin.hasAceEditor = oldFunc;
  }
});

// Ace syncs its revision after the "change" of an undo or a redo has fired, so at that moment
// undoManager.isClean() still describes the step before: after a redo it reads clean.
test("Ace: an edit that was undone and redone reaches the survey on leaving the tab", () => {
  const oldFunc = TabJsonEditorAcePlugin.hasAceEditor;
  TabJsonEditorAcePlugin.hasAceEditor = (): boolean => true;
  try {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
    creator.activeTab = "json";
    const plugin = <TabJsonEditorAcePlugin>creator.getPlugin("json");
    const model = <AceJsonEditorModel>plugin.model;
    const ace = createAceMock();
    model.init(ace);
    ace.isFocused = () => true;
    const original = model.text;
    const edited = original.replace("q2", "q2x");
    // typing: the new revision is recorded before "change" fires
    ace.undoManager.isClean = () => false;
    ace.setValue(edited);
    expect(model.isJSONChanged).toBeTruthy();
    // undo: "change" fires while the manager still reports the edit
    ace.setValue(original);
    // redo: "change" fires while the manager still reports the clean state
    ace.undoManager.isClean = () => true;
    ace.setValue(edited);
    expect(model.text).toBe(edited);
    creator.activeTab = "designer";
    expect(creator.survey.getAllQuestions().map(q => q.name)).toEqual(["q1", "q2x"]);
  } finally {
    TabJsonEditorAcePlugin.hasAceEditor = oldFunc;
  }
});
