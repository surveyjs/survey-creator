import { SurveyModel, property } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { SurveyTextWorker } from "../../textWorker";
import {
  JsonEditorBaseModel,
  TabJsonEditorBasePlugin
} from "./json-editor-plugin";
import "./json-editor-ace.scss";

export class AceJsonEditorModel extends JsonEditorBaseModel {
  public static aceBasePath: string = "";
  private aceEditor: AceAjax.Editor;
  @property() private aceCanUndo: boolean = false;
  @property() private aceCanRedo: boolean = false;

  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
  }

  public get text(): string {
    return !!this.aceEditor ? this.aceEditor.getValue() : "";
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.aceEditor.setValue(value);
    this.aceEditor.renderer.updateFull(true);
    this.aceEditor.getSession().getUndoManager().reset();
    this.processErrors(value);
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
    this.aceEditor.getSession().setUseWorker(true);
    SurveyTextWorker.newLineChar =
      this.aceEditor.session.doc.getNewLineCharacter();
    this.onPluginActivate();
  }
  private updateUndoRedoState(): void {
    const undoManager: AceAjax.UndoManager = this.aceEditor
      .getSession()
      .getUndoManager();
    this.aceCanUndo = undoManager.hasUndo();
    this.aceCanRedo = undoManager.hasRedo();
    var isFocused: any = this.aceEditor.isFocused();
    if (isFocused === true) {
      this.isJSONChanged = !undoManager.isClean();
    }
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
        type: "error"
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
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin
{
  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    creator.addPluginTab(
      "editor",
      this,
      getLocString("ed.jsonEditor"),
      "svc-tab-json-editor-ace"
    );
  }
  protected createModel(
    creator: CreatorBase<SurveyModel>
  ): JsonEditorBaseModel {
    return new AceJsonEditorModel(creator);
  }
  public static hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
}
