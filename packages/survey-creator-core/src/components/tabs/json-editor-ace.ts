import { SurveyModel, property } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { getLocString } from "../../editorLocalization";
import { SurveyTextWorker } from "../../textWorker";
import {
  JsonEditorBaseModel,
  TabJsonEditorBasePlugin
} from "./json-editor-plugin";
import "./json-editor-ace.scss";
export class AceJsonEditorModel extends JsonEditorBaseModel {
  public static aceBasePath: string = "";
  private aceEditor: any;
  @property() private aceCanUndo: boolean = false;
  @property() private aceCanRedo: boolean = false;

  constructor(creator: SurveyCreatorModel) {
    super(creator);
  }

  protected getText(): string {
    return !!this.aceEditor ? this.aceEditor.getValue() : "";
  }
  protected setText(value: string): void {
    this.isProcessingImmediately = true;
    this.aceEditor.setValue(value);
    this.aceEditor.renderer.updateFull(true);
    this.aceEditor.getSession().getUndoManager().reset();
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }

  public init(aceEditor: any): void {
    this.aceEditor = aceEditor;
    const aceModules = (window["ace"] as any)?.define?.modules;
    if (!(aceModules && aceModules["ace/ext/searchbox"])) {
      this.aceEditor.commands["removeCommand"]("find");
    }
    this.aceEditor.setReadOnly(this.readOnly);
    if (AceJsonEditorModel.aceBasePath) {
      try {
        window["ace"]["config"].set("basePath", AceJsonEditorModel.aceBasePath);
        this.aceEditor.session.setMode("ace/mode/json");
      } catch{ }
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

  public onPluginActivate(): void {
    super.onPluginActivate();
    this.aceEditor.setFontSize(14);
    if (this.creator.preferredColorPalette === "dark") {
      this.aceEditor.setTheme("ace/theme/clouds_midnight");
    }
  }

  private updateUndoRedoState(): void {
    const undoManager: any = this.aceEditor
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
  private createAnnotations(errors: any[]): any[] {
    const annotations: any[] = [];
    for (let i = 0; i < errors.length; i++) {
      const error: any = errors[i];
      const annotation: any = {
        row: error.rowAt,
        column: error.columnAt,
        text: error.text,
        type: "error"
      };
      annotations.push(annotation);
    }
    return annotations;
  }
  protected setErrors(errors: any[]): void {
    super.setErrors(errors);
    this.aceEditor.getSession().setAnnotations(this.createAnnotations(errors));
    setTimeout(() => this.aceEditor.resize());
  }
  protected gotoError(at: number, row: number, column: number): void {
    this.aceEditor.focus();
    this.aceEditor.renderer.scrollCursorIntoView({ row: row + 1, column: column + 1 }, 0.5);
    this.aceEditor.gotoLine(row + 1, column + 1);
  }
  public onEditorActivated(): void {
    this.aceEditor.getSession().getUndoManager().markClean();
    this.updateUndoRedoState();
    this.aceEditor.focus();
  }
}

export class TabJsonEditorAcePlugin
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin {
  constructor(creator: SurveyCreatorModel) {
    super(creator);
    creator.addTab({ name: "json", plugin: this, iconName: TabJsonEditorBasePlugin.iconName, componentName: "svc-tab-json-editor-ace" });
  }
  protected createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel {
    return new AceJsonEditorModel(creator);
  }
  public static hasAceEditor(): boolean {
    return typeof window !== "undefined" && typeof window["ace"] !== "undefined";
  }
}
