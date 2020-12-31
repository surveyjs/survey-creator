import * as ko from "knockout";
import { SurveyTextWorker } from "@survey/creator/textWorker";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";

import "./json-editor.scss";
const template: any = require("./json-editor.html");
// import template from "./json-editor.html";

export class TabJsonEditorModel implements ICreatorPlugin {
  public static updateTextTimeout: number = 1000;
  public static aceBasePath: string = "";
  private koErrors: ko.ObservableArray<any> = ko.observableArray();
  private isInitialJSON: boolean = false;
  private isJSONChanged: boolean = false;
  private isProcessingImmediately: boolean = false;
  private textWorker: SurveyTextWorker;
  private aceEditor: AceAjax.Editor;
  private aceCanUndo: ko.Observable<boolean> = ko.observable(false);
  private aceCanRedo: ko.Observable<boolean> = ko.observable(false);
  private subscrKoText: ko.Subscription;
  private subscrKoViewType: ko.Subscription;
  private jsonEditorChangedTimeoutId: number = -1;

  constructor(public creator: SurveyCreator) {
    const self: TabJsonEditorModel = this;
    // this.subscrKoText = this.koText.subscribe(() => {
    //   self.onJsonEditorChanged();
    // });
    creator.setSurveyJSONTextCallback = (text) => {
      this.isInitialJSON = true;
      this.text = text;
    };
    this.subscrKoViewType = creator.koViewType.subscribe((viewType) => {
      if (viewType === "editor") {
        this.isInitialJSON = true;
        this.show(creator.text);
        creator.getSurveyJSONTextCallback = () => {
          return { text: this.text, isModified: this.isJSONChanged };
        };
      } else {
        creator.getSurveyJSONTextCallback = undefined;
      }
    });
    // if (this.hasAceEditor) {
    //   this.initAceEditor(<HTMLElement>element.querySelector(".svc-json-editor"));
    // }
    creator.tabs.push({
      name: "editor",
      title: getLocString("ed.jsonEditor"),
      template: "svc-tab-json-editor",
      data: this,
      action: () => {
          creator.makeNewViewActive("editor");
          this.activate();
      },
    });
    creator.plugins["editor"] = this;
  }
  public activate(): void {
    // this.text = this.creator.text;
    // this._isModified = false;
  }
  public deactivate(): boolean {
    return true;
    // if(!this._isModified) {
    //     return true;
    // }
    // // Long long checks and finally fail
    // return false;
  }
  public get text(): string {
    // if (!this.hasAceEditor) return this.koText();
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    // this.koText(value);
    // if (this.aceEditor) {
    //   this.aceEditor.setValue(value);
    //   this.aceEditor.renderer.updateFull(true);
    //   this.aceEditor.getSession().getUndoManager().reset();
    // }
    this.processJson(value);
    this.isProcessingImmediately = false;
  }
  private updateUndoRedoState(): void {
    // if (this.hasAceEditor) {
    //   let undoManager = this.aceEditor.getSession().getUndoManager();
    //   this.aceCanUndo(undoManager.hasUndo());
    //   this.aceCanRedo(undoManager.hasRedo());
    // }
  }
  private onJsonEditorChanged(): void {
    // if (!this.hasAceEditor) {
    //   this.isJSONChanged = true;
    // }
    this.updateUndoRedoState();
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    } else {
      const self: TabJsonEditorModel = this;
      this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
        self.jsonEditorChangedTimeoutId = -1;
        self.processJson(self.text);
      }, TabJsonEditorModel.updateTextTimeout);
    }
  }
  private processJson(text: string): void {
    this.textWorker = new SurveyTextWorker(text);
    if (this.aceEditor) {
      this.aceEditor.getSession().setAnnotations(
        this.createAnnotations(this.textWorker.errors));
    } else {
      this.koErrors(this.textWorker.errors);
    }
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
  private show(value: string): any {
    this.text = value;
    if (this.aceEditor) {
      this.aceEditor.focus();
    }
    this.isJSONChanged = false;
  }
  private initAceEditor(editorElement: HTMLElement) {
    this.aceEditor = ace.edit(editorElement);
    // this.aceEditor.setReadOnly(this.readOnly);
    const self: TabJsonEditorModel = this;
    if (TabJsonEditorModel.aceBasePath) {
      try {
        ace["config"].set("basePath", TabJsonEditorModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch {}
    }
    self.aceEditor.setShowPrintMargin(false);
    self.aceEditor.getSession().on("change", () => {
      self.onJsonEditorChanged();
    });
    self.aceEditor.on("input", () => {
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
  public dispose(): void {
    this.creator.getSurveyJSONTextCallback = undefined;
    this.creator.setSurveyJSONTextCallback = undefined;
    if (typeof this.subscrKoText !== "undefined") {
      this.subscrKoText.dispose();
      this.subscrKoText = undefined;
    }
    if (typeof this.subscrKoViewType !== "undefined") {
      this.subscrKoViewType.dispose();
      this.subscrKoViewType = undefined;
    }
  }
}

export class TabJsonEditorViewModel {
  public model: TabJsonEditorModel;
  private koText: ko.Observable<string> = ko.observable("");

  constructor(model: TabJsonEditorModel, element: any) {
    this.model = model;
    // model.onTextChangedCallback = val => this.text(val);
    this.koText(model.creator.text);
  }
  public get hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  private get readOnly()  {
    return this.model.creator.readOnly;
  }
  dispose() {
    // this.model.onTextChangedCallback = undefined;
  }
}

ko.components.register("svc-tab-json-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabJsonEditorViewModel(params.data, componentInfo.element);
    },
  },
  template: template,
});
