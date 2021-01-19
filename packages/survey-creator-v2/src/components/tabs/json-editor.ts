import * as ko from "knockout";
import { SurveyTextWorker } from "@survey/creator/textWorker";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";

import "./json-editor.scss";
const template: any = require("./json-editor.html");
// import template from "./json-editor.html";

export interface ITabJsonModel {
  text: string;
  init(...params: any[]): void;
  onJsonEditorChanged(): void;
  processJson(text: string): void;
  dispose(): void;
}

export class TabJsonTextareaModel implements ITabJsonModel {
  private koText: ko.Observable<string>;
  private koErrors: ko.ObservableArray<any>;
  private subscrKoText: ko.Subscription;
  constructor(private plugin: TabJsonEditorPlugin) {
  }
  public get text(): string {
    return this.koText();
  }
  public set text(value: string) {
    this.plugin.isProcessingImmediately = true;
    this.koText(value);
    this.processJson(value);
    this.plugin.isProcessingImmediately = false;
  }
  public init(koText: ko.Observable<string>, koErrors: ko.ObservableArray<any>): void {
    this.koText = koText;
    this.koErrors = koErrors;
    this.koText(this.plugin.creator.text);
    const self: TabJsonTextareaModel = this;
    this.subscrKoText = this.koText.subscribe(() => {
      self.plugin.model.onJsonEditorChanged();
    });
  }
  public onJsonEditorChanged(): void {
    this.plugin.isJSONChanged = true;
    this.plugin.onJsonEditorChanged();
  }
  public processJson(text: string): void {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.koErrors(textWorker.errors);
  }
  public dispose(): void {
    if (typeof this.subscrKoText !== "undefined") {
      this.subscrKoText.dispose();
      this.subscrKoText = undefined;
    }
  }
}

export class TabJsonAceEditorModel implements ITabJsonModel {
  public static aceBasePath: string = "";
  private aceEditor: AceAjax.Editor;
  private aceCanUndo: ko.Observable<boolean> = ko.observable(false);
  private aceCanRedo: ko.Observable<boolean> = ko.observable(false);
  constructor(private plugin: TabJsonEditorPlugin) {
  }
  public get text(): string {
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.plugin.isProcessingImmediately = true;
    this.aceEditor.setValue(value);
    this.aceEditor.renderer.updateFull(true);
    this.aceEditor.getSession().getUndoManager().reset();
    this.processJson(value);
    this.plugin.isProcessingImmediately = false;
  }
  public init(editorElement: HTMLElement): void {
    this.aceEditor = ace.edit(<HTMLElement>editorElement.querySelector(".svc-json-editor"));
    this.aceEditor.setReadOnly(this.plugin.creator.readOnly);
    if (TabJsonAceEditorModel.aceBasePath) {
      try {
        ace["config"].set("basePath", TabJsonAceEditorModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch {}
    }
    const self: TabJsonAceEditorModel = this;
    this.aceEditor.setShowPrintMargin(false);
    this.aceEditor.getSession().on("change", () => {
      self.onJsonEditorChanged();
    });
    this.aceEditor.on("input", () => {
      if (self.plugin.isInitialJSON) {
        self.plugin.isInitialJSON = false;
        self.aceEditor.getSession().getUndoManager().markClean();
        self.updateUndoRedoState();
        return;
      }
      if (self.aceEditor.getSession().getUndoManager().isClean()) {
        self.plugin.isJSONChanged = false;
        return;
      }
      self.plugin.isJSONChanged = true;
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
    this.plugin.onJsonEditorChanged();
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
  public static hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  public dispose(): void {

  }
}

export class TabJsonEditorPlugin implements ICreatorPlugin {
  public model: ITabJsonModel;
  public isInitialJSON: boolean = false;
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;
  private subscrKoViewType: ko.Subscription;

  constructor(public creator: SurveyCreator) {
    if (TabJsonAceEditorModel.hasAceEditor()) {
      this.model = new TabJsonAceEditorModel(this);
    }
    else {
      this.model = new TabJsonTextareaModel(this);
    }

    creator.setSurveyJSONTextCallback = (text) => {
      this.isInitialJSON = true;
      this.model.text = text;
    };
    this.subscrKoViewType = creator.koViewType.subscribe((viewType) => {
      if (viewType === "editor") {
        this.isInitialJSON = true;
        this.show(creator.text);
        creator.getSurveyJSONTextCallback = () => {
          return { text: this.model.text, isModified: this.isJSONChanged };
        };
      }
      else {
        creator.getSurveyJSONTextCallback = undefined;
      }
    });
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
  public onJsonEditorChanged(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    }
    else {
      const self: TabJsonEditorPlugin = this;
      this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
        self.jsonEditorChangedTimeoutId = -1;
        self.model.processJson(self.model.text);
      }, TabJsonEditorPlugin.updateTextTimeout);
    }
  }
  private show(value: string): any {
    this.model.text = value;
    // if (this.aceEditor) {
    //   this.aceEditor.focus();
    // }
    this.isJSONChanged = false;
  }
  public dispose(): void {
    this.creator.getSurveyJSONTextCallback = undefined;
    this.creator.setSurveyJSONTextCallback = undefined;
    if (typeof this.subscrKoViewType !== "undefined") {
      this.subscrKoViewType.dispose();
      this.subscrKoViewType = undefined;
    }
  }
}

export class TabJsonEditorViewModel {
  private koText: ko.Observable<string>;
  private koErrors: ko.ObservableArray<any>;
  constructor(private plugin: TabJsonEditorPlugin, element: any) {
    if (this.hasAceEditor) {
      this.plugin.model.init(element);
    }
    else {
      this.koText = ko.observable("");
      this.koErrors = ko.observableArray();
      this.plugin.model.init(this.koText, this.koErrors);
    }
  }
  public get hasAceEditor(): boolean {
    return TabJsonAceEditorModel.hasAceEditor();
  }
  public get readOnly(): boolean {
    return this.plugin.creator.readOnly;
  }
  public dispose() {
    this.plugin.model.dispose();
  }
}

ko.components.register("svc-tab-json-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabJsonEditorViewModel(params.data, componentInfo.element);
    }
  },
  template: template
});
