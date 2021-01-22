import * as ko from "knockout";
import { SurveyTextWorker } from "@survey/creator/textWorker";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";
import { ITabJsonModel, TabJsonBaseModel, TabJsonEditorBasePlugin } from "./json-editor-textarea";

import "./json-editor-ace.scss";
const template: any = require("./json-editor-ace.html");
// import template from "./json-editor-ace.html";

export class TabJsonAceModel extends TabJsonBaseModel implements ITabJsonModel {
  public static aceBasePath: string = "";
  private aceEditor: AceAjax.Editor;
  private aceCanUndo: ko.Observable<boolean> = ko.observable(false);
  private aceCanRedo: ko.Observable<boolean> = ko.observable(false);
  constructor(private creator: SurveyCreator) {
    super();
  }
  public get text(): string {
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.aceEditor.setValue(value);
    this.aceEditor.renderer.updateFull(true);
    this.aceEditor.getSession().getUndoManager().reset();
    this.processJson(value);
    this.isProcessingImmediately = false;
  }
  public init(editorElement: HTMLElement): void {
    this.aceEditor = ace.edit(<HTMLElement>editorElement.querySelector(".svc-json-editor-tab__ace-editor"));
    this.aceEditor.setReadOnly(this.creator.readOnly);
    if (TabJsonAceModel.aceBasePath) {
      try {
        ace["config"].set("basePath", TabJsonAceModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch {}
    }
    const self: TabJsonAceModel = this;
    this.aceEditor.setShowPrintMargin(false);
    this.aceEditor.getSession().on("change", () => {
      self.onJsonEditorChanged();
    });
    this.aceEditor.on("input", () => {
      if (self.isInitialJSON) {
        self.isInitialJSON = false;
        self.aceEditor.getSession().getUndoManager().markClean();
        self.updateUndoRedoState();
        return;
      }
      if (self.aceEditor.getSession().getUndoManager().isClean()) {
        self.isJSONChanged = false;
        return;
      }
      self.isJSONChanged = true;
    });
    this.aceEditor.getSession().setUseWorker(true);
    SurveyTextWorker.newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
  }
  private updateUndoRedoState(): void {
    const undoManager: AceAjax.UndoManager = this.aceEditor.getSession().getUndoManager();
    this.aceCanUndo(undoManager.hasUndo());
    this.aceCanRedo(undoManager.hasRedo());
  }
  public onJsonEditorChanged(): void {
    this.updateUndoRedoState();
    super.onJsonEditorChanged();
  }
  private createAnnotations(errors: any[]): AceAjax.Annotation[] {
    const annotations: AceAjax.Annotation[] = [];
    for (let i = 0; i < errors.length; i++) {
      const error: any = errors[i];
      const annotation: AceAjax.Annotation = {
        row: error.position.start.row,
        column: error.position.start.column,
        text: error.text,
        type: "error",
      };
      annotations.push(annotation);
    }
    return annotations;
  }
  public processJson(text: string): void {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.aceEditor.getSession().setAnnotations(
      this.createAnnotations(textWorker.errors));
  }
  public show(): void {
    this.aceEditor.focus();
  }
  public static hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  public dispose(): void {}
}

export class TabJsonEditorAcePlugin extends TabJsonEditorBasePlugin implements ICreatorPlugin {
  constructor(creator: SurveyCreator) {
    super(creator);
    this.model = new TabJsonAceModel(creator);
    creator.tabs.push({
      name: "editor",
      title: getLocString("ed.jsonEditor"),
      template: "svc-tab-json-editor-ace",
      data: this,
      action: () => {
          creator.makeNewViewActive("editor");
          this.activate();
      },
    });
    creator.plugins["editor"] = this;
  }
}

export class TabJsonEditorAceViewModel {
  constructor(private plugin: TabJsonEditorAcePlugin, element: any) {
    this.plugin.model.init(element);
  }
  public dispose() {
    this.plugin.model.dispose();
  }
}

ko.components.register("svc-tab-json-editor-ace", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabJsonEditorAceViewModel(params.data, componentInfo.element.nextElementSibling);
    }
  },
  template: template
});
