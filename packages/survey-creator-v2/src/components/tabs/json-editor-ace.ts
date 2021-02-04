import * as ko from "knockout";
import { SurveyTextWorker } from "@survey/creator/textWorker";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
import "./json-editor-ace.scss";
const template: any = require("./json-editor-ace.html");
// import template from "./json-editor-ace.html";

export class AceJsonEditorModel extends JsonEditorBaseModel {
  public static aceBasePath: string = "";
  private aceEditor: AceAjax.Editor;
  private aceCanUndo: ko.Observable<boolean> = ko.observable(false);
  private aceCanRedo: ko.Observable<boolean> = ko.observable(false);

  constructor(creator: SurveyCreator) {
    super(creator);
  }

  public get text(): string {
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.aceEditor.setValue(value);
    this.aceEditor.renderer.updateFull(true);
    this.aceEditor.getSession().getUndoManager().reset();
    this.onTextChanged();
    this.isProcessingImmediately = false;
  }

  public init(aceEditor: AceAjax.Editor): void {
    this.aceEditor = aceEditor;
    this.aceEditor.setReadOnly(this.readOnly);
    if (AceJsonEditorModel.aceBasePath) {
      try {
        ace["config"].set("basePath", AceJsonEditorModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch {}
    }
    const self: AceJsonEditorModel = this;
    this.aceEditor.setShowPrintMargin(false);
    this.aceEditor.getSession().on("change", () => {
      self.onTextChanged();
    });
    this.aceEditor.on("input", () => {
      self.isJSONChanged = true;
    });
    this.aceEditor.getSession().setUseWorker(true);
    SurveyTextWorker.newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
  }
  private updateUndoRedoState(): void {
    const undoManager: AceAjax.UndoManager = this.aceEditor
      .getSession()
      .getUndoManager();
    this.aceCanUndo(undoManager.hasUndo());
    this.aceCanRedo(undoManager.hasRedo());

    this.isJSONChanged = !undoManager.isClean();
  }
  protected onTextChanged(): void {
    this.updateUndoRedoState();
    super.onTextChanged();
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
  protected setErrors(errors: any[]): void {
    this.aceEditor.getSession().setAnnotations(this.createAnnotations(errors));
  }
  public onEditorActivated(): void {
    this.aceEditor.getSession().getUndoManager().markClean();
    this.updateUndoRedoState();
    this.aceEditor.focus();
  }
}

export class TabJsonEditorAcePlugin
  extends TabJsonEditorBasePlugin<AceJsonEditorModel>
  implements ICreatorPlugin {
  constructor(creator: SurveyCreator) {
    super(creator);
    this.model = new AceJsonEditorModel(creator);
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
  public static hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
}

ko.components.register("svc-tab-json-editor-ace", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const aceEditor: AceAjax.Editor = ace.edit(
        <HTMLElement>(
          componentInfo.element.nextElementSibling.querySelector(
            ".svc-json-editor-tab__ace-editor"
          )
        )
      );
      const plugin: TabJsonEditorAcePlugin = params.data;
      plugin.model.init(aceEditor);
      return plugin.model;
    }
  },
  template: template
});
