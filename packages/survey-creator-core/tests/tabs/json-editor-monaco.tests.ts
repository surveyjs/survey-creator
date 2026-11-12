import { MonacoJsonEditorModel, TabJsonEditorMonacoPlugin } from "../../src/components/tabs/json-editor-monaco";
import { TabJsonEditorAcePlugin } from "../../src/components/tabs/json-editor-ace";
import { TabJsonEditorTextareaPlugin } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
import { SurveyTextWorker } from "../../src/textWorker";

function createMonacoMock(): any {
  let value = "";
  let eol = "\r\n";
  let onChange: () => void = () => { };
  const textModel = {
    getEOL: () => eol,
    getLineCount: () => value.split("\n").length,
    getLineMaxColumn: (line: number) => value.split("\n")[line - 1].length + 1,
  };
  const editor: any = {
    options: undefined, position: undefined, revealed: undefined, isDisposed: false, focusCount: 0,
    getValue: () => value,
    setValue(text: string) {
      value = text;
      if (text.indexOf("\n") > -1) eol = text.indexOf("\r\n") > -1 ? "\r\n" : "\n";
      onChange();
    },
    getModel: () => textModel,
    onDidChangeModelContent(handler: () => void) {
      onChange = handler;
      return { dispose() { onChange = () => { }; } };
    },
    focus() { editor.focusCount++; },
    setPosition(pos: any) { editor.position = pos; },
    revealPositionInCenterIfOutsideViewport(pos: any) { editor.revealed = pos; },
    dispose() { editor.isDisposed = true; },
  };
  const monaco: any = {
    markers: undefined, markerOwner: undefined,
    MarkerSeverity: { Error: 8 },
    editor: {
      create(element: HTMLElement, options: any) { editor.options = options; return editor; },
      setModelMarkers(model: any, owner: string, markers: Array<any>) {
        monaco.markerOwner = owner;
        monaco.markers = markers;
      },
    },
    instance: editor,
  };
  return monaco;
}

let monaco: any;
beforeEach(() => {
  monaco = createMonacoMock();
  (<any>window).monaco = monaco;
});
afterEach(() => {
  delete (<any>window).monaco;
  SurveyTextWorker.newLineChar = "\n";
});

test("Monaco is detected by window.monaco", () => {
  expect(TabJsonEditorMonacoPlugin.hasMonacoEditor()).toBeTruthy();
  delete (<any>window).monaco;
  expect(TabJsonEditorMonacoPlugin.hasMonacoEditor()).toBeFalsy();
  (<any>window).monaco = {};
  expect(TabJsonEditorMonacoPlugin.hasMonacoEditor()).toBeFalsy();
});

test("Creator uses Monaco for the JSON tab when it is on the page, before Ace", () => {
  const oldFunc = TabJsonEditorAcePlugin.hasAceEditor;
  TabJsonEditorAcePlugin.hasAceEditor = (): boolean => true;
  try {
    const creator = new CreatorTester();
    expect(creator.getPlugin("json")).toBeInstanceOf(TabJsonEditorMonacoPlugin);
    expect(creator.tabs.filter(tab => tab.id === "json")[0].componentContent).toBe("svc-tab-json-editor-monaco");
    delete (<any>window).monaco;
    expect(new CreatorTester().getPlugin("json")).toBeInstanceOf(TabJsonEditorAcePlugin);
    TabJsonEditorAcePlugin.hasAceEditor = (): boolean => false;
    expect(new CreatorTester().getPlugin("json")).toBeInstanceOf(TabJsonEditorTextareaPlugin);
  } finally {
    TabJsonEditorAcePlugin.hasAceEditor = oldFunc;
  }
});

test("Monaco: init creates a JSON editor with the creator text", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  const editor = monaco.instance;
  expect(editor.options.language).toBe("json");
  expect(editor.options.readOnly).toBeFalsy();
  expect(editor.options.theme).toBeUndefined();
  expect(model.text).toBe(creator.text);
  expect(model.isJSONChanged).toBeFalsy();
  expect(editor.focusCount).toBe(1);
  model.dispose();
});

test("Monaco: read-only creator and dark palette", () => {
  const creator = new CreatorTester();
  creator.readOnly = true;
  creator.preferredColorPalette = "dark";
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  expect(monaco.instance.options.readOnly).toBeTruthy();
  expect(monaco.instance.options.theme).toBe("vs-dark");
  model.dispose();
});

test("Monaco marks only the blocking errors", () => {
  const creator = new CreatorTester();
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  model.text = JSON.stringify({
    pages: [{ name: "p1", elements: [{ type: "text", name: "q1", nosuch: 1 }] }, { name: "p2" }]
  }, null, 2);
  const errors = model.errorList.actions.map(a => a.data.error);
  expect(errors.map(e => e.isBlocking)).toEqual([true, false]);
  expect(monaco.markerOwner).toBe(MonacoJsonEditorModel.markerOwner);
  expect(monaco.markers).toHaveLength(1);
  expect(monaco.markers[0].severity).toBe(monaco.MarkerSeverity.Error);
  expect(monaco.markers[0].startLineNumber).toBe(errors[0].rowAt + 1);
  expect(monaco.markers[0].message).toBe(errors[0].text);
  model.text = "{}";
  expect(monaco.markers).toHaveLength(0);
  model.dispose();
});

test("Monaco: an edit reaches the survey", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  monaco.instance.setValue(model.text.replace("q1", "q_renamed"));
  expect(model.isJSONChanged).toBeTruthy();
  expect(model.applyChanges()).toBe(true);
  expect(creator.survey.getAllQuestions().map(q => q.name)).toEqual(["q_renamed"]);
  model.dispose();
});

test("Monaco: errors get the line the text has them on, though an empty model starts with CRLF", () => {
  const creator = new CreatorTester();
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  model.text = JSON.stringify({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q1" }] }, null, 2);
  const error = model.errorList.actions[0].data.error;
  expect(SurveyTextWorker.newLineChar).toBe("\n");
  expect(error.rowAt).toBe(model.text.substring(0, error.at).split("\n").length - 1);
  expect(error.rowAt).toBeGreaterThan(0);
  model.dispose();
});

test("Monaco: a click on an error moves the cursor to it", () => {
  const creator = new CreatorTester();
  const model = new MonacoJsonEditorModel(creator);
  model.init(document.createElement("div"));
  model.text = JSON.stringify({ elements: [{ type: "text", name: "q1", nosuch: 1 }] }, null, 2);
  const error = model.errorList.actions[0].data.error;
  model.errorList.onItemClick(<any>model.errorList.actions[0]);
  const expected = { lineNumber: error.rowAt + 1, column: error.columnAt + 1 };
  expect(monaco.instance.position).toEqual(expected);
  expect(monaco.instance.revealed).toEqual(expected);
  model.dispose();
});

test("Monaco: leaving the tab applies the text and disposes the editor", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.activeTab = "json";
  const plugin = <TabJsonEditorMonacoPlugin>creator.getPlugin("json");
  const model = <MonacoJsonEditorModel>plugin.model;
  model.init(document.createElement("div"));
  const editor = monaco.instance;
  editor.setValue(model.text.replace("q1", "q2"));
  creator.activeTab = "designer";
  expect(creator.survey.getAllQuestions().map(q => q.name)).toEqual(["q2"]);
  expect(editor.isDisposed).toBeTruthy();
  expect(plugin.model).toBeUndefined();
});

test("Monaco: init on a remounted element disposes the editor created before", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const model = new MonacoJsonEditorModel(creator);
  const element = document.createElement("div");
  model.init(element);
  const create = monaco.editor.create;
  let disposedBeforeCreate: boolean | undefined;
  monaco.editor.create = (el: HTMLElement, options: any) => {
    disposedBeforeCreate = monaco.instance.isDisposed;
    return create(el, options);
  };
  model.init(element);
  expect(disposedBeforeCreate).toBeTruthy();
  expect(JSON.parse(model.text)).toEqual({ pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] });
  model.dispose();
});
