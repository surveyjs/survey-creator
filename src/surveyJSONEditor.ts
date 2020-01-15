import * as ko from "knockout";
import { SurveyTextWorker } from "./textWorker";
import * as Survey from "survey-knockout";

export class SurveyJSONEditor {
  public static updateTextTimeout: number = 1000;

  private isProcessingImmediately: boolean = false;
  private aceEditor: AceAjax.Editor;
  private textWorker: SurveyTextWorker;
  public isJSONChanged: boolean = false;
  public isInitialJSON: boolean = false;
  koText: any;
  koErrors: any;

  constructor() {
    this.koText = ko.observable("");
    this.koErrors = ko.observableArray();
    var self = this;
    this.koText.subscribe(function(newValue) {
      self.onJsonEditorChanged();
    });
  }
  public init(editorElement: HTMLElement) {
    if (!this.hasAceEditor) return;
    this.aceEditor = ace.edit(editorElement);
    this.aceEditor.setReadOnly(this.readOnly);
    var self = this;
    //TODO add event to change ace theme and mode
    //this.aceEditor.setTheme("ace/theme/monokai");
    //this.aceEditor.session.setMode("ace/mode/json");
    self.aceEditor.setShowPrintMargin(false);
    self.aceEditor.getSession().on("change", function() {
      self.onJsonEditorChanged();
    });
    self.aceEditor.on("input", function() {
      if (self.isInitialJSON) {
        self.isInitialJSON = false;
        self.aceEditor
          .getSession()
          .getUndoManager()
          .markClean();
        return;
      }

      if (
        self.aceEditor
          .getSession()
          .getUndoManager()
          .isClean()
      ) {
        self.isJSONChanged = false;
        return;
      }
      self.isJSONChanged = true;
    });
    this.aceEditor.getSession().setUseWorker(true);
    SurveyTextWorker.newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
  }
  public get hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  public get text(): string {
    if (!this.hasAceEditor) return this.koText();
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.koText(value);
    if (this.aceEditor) {
      this.aceEditor.setValue(value);
      this.aceEditor.renderer.updateFull(true);
    }
    this.processJson(value);
    this.isProcessingImmediately = false;
  }
  public show(value: string) {
    this.text = value;
    if (this.aceEditor) {
      this.aceEditor.focus();
    }
    this.isJSONChanged = false;
  }
  public get isJsonCorrect(): boolean {
    this.textWorker = new SurveyTextWorker(this.text);
    return this.textWorker.isJsonCorrect;
  }
  public get survey(): Survey.Survey {
    return this.textWorker.survey;
  }
  private timeoutId: number = -1;
  private onJsonEditorChanged(): any {
    if (this.timeoutId > -1) {
      clearTimeout(this.timeoutId);
    }
    if (this.isProcessingImmediately) {
      this.timeoutId = -1;
    } else {
      var self = this;
      this.timeoutId = window.setTimeout(function() {
        self.timeoutId = -1;
        self.processJson(self.text);
      }, SurveyJSONEditor.updateTextTimeout);
    }
  }
  private processJson(text: string): any {
    this.textWorker = new SurveyTextWorker(text);
    if (this.aceEditor) {
      this.aceEditor
        .getSession()
        .setAnnotations(this.createAnnotations(text, this.textWorker.errors));
    } else {
      this.koErrors(this.textWorker.errors);
    }
  }
  private createAnnotations(text: string, errors: any[]): AceAjax.Annotation[] {
    var annotations = new Array<AceAjax.Annotation>();
    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];
      var annotation: AceAjax.Annotation = {
        row: error.position.start.row,
        column: error.position.start.column,
        text: error.text,
        type: "error"
      };
      annotations.push(annotation);
    }
    return annotations;
  }
  private _readOnly = ko.observable(false);
  /**
   * A boolean property, false by default. Set it to true to deny editing.
   */
  public get readOnly() {
    return this._readOnly();
  }
  public set readOnly(newVal) {
    this._readOnly(newVal);
  }
}
