import { SurveyModel, property } from "survey-knockout";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { SurveyTextWorker } from "../../textWorker";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
import "./json-editor-ace.scss";

export class AceJsonEditorBaseModel extends JsonEditorBaseModel {
  public static aceBasePath: string = "";
  private aceEditor: AceAjax.Editor;
  @property() private aceCanUndo: boolean = false;
  @property() private aceCanRedo: boolean = false;

  constructor(creator: CreatorBase<SurveyModel>) {
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
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }

  public init(aceEditor: AceAjax.Editor): void {
    this.aceEditor = aceEditor;
    this.aceEditor.setReadOnly(this.readOnly);
    if (AceJsonEditorBaseModel.aceBasePath) {
      try {
        ace["config"].set("basePath", AceJsonEditorBaseModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch {}
    }
    const self: AceJsonEditorBaseModel = this;
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
    this.aceCanUndo = undoManager.hasUndo();
    this.aceCanRedo = undoManager.hasRedo();

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
  extends TabJsonEditorBasePlugin<AceJsonEditorBaseModel>
  implements ICreatorPlugin {
  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    this.model = new AceJsonEditorBaseModel(creator);
    creator.tabs.push({
      id: "editor",
      title: getLocString("ed.jsonEditor"),
      component: "svc-tab-json-editor-ace",
      data: this,
      action: () => {
        creator.makeNewViewActive("editor");
        this.activate();
      },
      active: () => creator.viewType === "editor",
    });
    creator.plugins["editor"] = this;
  }
  public static hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
}