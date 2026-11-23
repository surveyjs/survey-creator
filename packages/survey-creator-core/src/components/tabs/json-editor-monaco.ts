import { DomWindowHelper } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { SurveyTextWorker } from "../../textWorker";
import {
  JsonEditorBaseModel,
  TabJsonEditorBasePlugin
} from "./json-editor-plugin";
import "./json-editor-monaco.scss";

function getMonaco(): any {
  return DomWindowHelper.getWindow()?.["monaco"];
}

export class MonacoJsonEditorModel extends JsonEditorBaseModel {
  public static markerOwner: string = "survey-creator";
  private monacoEditor: any;
  private changeSubscription: any;
  // created here and not by the editor: an editor disposes the model it has created, and the
  // model holds the undo history the tab keeps until it is opened again
  private textModel: any;

  constructor(creator: SurveyCreatorModel) {
    super(creator);
  }

  protected getText(): string {
    return !!this.monacoEditor ? this.monacoEditor.getValue() : "";
  }
  protected setText(value: string): void {
    this.isProcessingImmediately = true;
    this.monacoEditor.setValue(value);
    SurveyTextWorker.newLineChar = this.monacoEditor.getModel().getEOL();
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }

  public init(element: HTMLElement): void {
    this.disposeEditor();
    const monaco = getMonaco();
    if (!this.textModel) {
      this.textModel = !!this.editorState ? this.editorState.data.textModel : monaco.editor.createModel("", "json");
    }
    this.monacoEditor = monaco.editor.create(element, this.getEditorOptions());
    this.changeSubscription = this.monacoEditor.onDidChangeModelContent(() => {
      this.onTextChanged();
    });
    this.onPluginActivate();
  }
  protected getEditorOptions(): any {
    const options: any = {
      model: this.textModel,
      automaticLayout: true,
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      readOnly: this.readOnly
    };
    if (this.creator.preferredColorPalette === "dark") {
      options.theme = "vs-dark";
    }
    return options;
  }

  protected onTextChanged(): void {
    this.isJSONChanged = true;
    super.onTextChanged();
  }
  protected setErrors(errors: any[]): void {
    super.setErrors(errors);
    const monaco = getMonaco();
    const textModel = this.monacoEditor.getModel();
    if (!monaco || !textModel) return;
    const markers = errors.filter(error => error.isBlocking).map(error => {
      const lineNumber = Math.min(Math.max(error.rowAt, 0) + 1, textModel.getLineCount());
      return {
        startLineNumber: lineNumber,
        startColumn: Math.max(error.columnAt, 0) + 1,
        endLineNumber: lineNumber,
        endColumn: textModel.getLineMaxColumn(lineNumber),
        message: error.text,
        severity: monaco.MarkerSeverity.Error
      };
    });
    monaco.editor.setModelMarkers(textModel, MonacoJsonEditorModel.markerOwner, markers);
  }
  protected gotoError(at: number, row: number, column: number): void {
    const position = { lineNumber: row + 1, column: column + 1 };
    this.monacoEditor.focus();
    this.monacoEditor.setPosition(position);
    this.monacoEditor.revealPositionInCenterIfOutsideViewport(position);
  }
  public onEditorActivated(): void {
    this.monacoEditor.focus();
  }
  protected getEditorStateData(): any {
    if (!this.monacoEditor || !this.textModel) return undefined;
    const data = { textModel: this.textModel, viewState: this.monacoEditor.saveViewState() };
    this.textModel = undefined;
    return data;
  }
  protected restoreEditorView(data: any): void {
    this.monacoEditor.restoreViewState(data.viewState);
    SurveyTextWorker.newLineChar = this.textModel.getEOL();
  }
  public dispose(): void {
    const unusedState = this.editorState;
    super.dispose();
    this.disposeEditor();
    if (this.textModel) {
      this.textModel.dispose();
      this.textModel = undefined;
    }
    if (!!unusedState) {
      unusedState.data.textModel.dispose();
      this.editorState = undefined;
    }
  }
  private disposeEditor(): void {
    if (this.changeSubscription) {
      this.changeSubscription.dispose();
      this.changeSubscription = undefined;
    }
    if (this.monacoEditor) {
      this.monacoEditor.dispose();
      this.monacoEditor = undefined;
    }
  }
}

export class TabJsonEditorMonacoPlugin
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin {
  protected createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel {
    return new MonacoJsonEditorModel(creator);
  }
  protected disposeEditorState(data: any): void {
    data.textModel.dispose();
  }
  public static hasMonacoEditor(): boolean {
    return !!getMonaco()?.editor;
  }
}
