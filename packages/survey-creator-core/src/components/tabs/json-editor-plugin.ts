import { Base, property, ListModel, Action } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { SurveyTextWorker, SurveyTextWorkerError } from "../../textWorker";

const maxErrorLength = 150;
export abstract class JsonEditorBaseModel extends Base {
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  public errorList: ListModel;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;
  @property() hasErrors: boolean;

  constructor(protected creator: CreatorBase) {
    super();
  }
  public get text(): string {
    return this.getText();
  }
  public set text(val: string) {
    this.setText(val);
  }
  protected abstract getText(): string;
  protected abstract setText(val: string): void;
  protected onEditorActivated(): void { }
  public onPluginActivate(): void {
    this.text = this.creator.text;
    this.onEditorActivated();
    this.isJSONChanged = false;
  }
  protected onTextChanged(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    } else {
      const self: JsonEditorBaseModel = this;
      if(!!window) {
        this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
          self.jsonEditorChangedTimeoutId = -1;
          self.processErrors(self.text);
        }, JsonEditorBaseModel.updateTextTimeout);
      }
    }
  }
  protected setErrors(errors: Array<SurveyTextWorkerError>): void {
    let hasErrors = errors.length > 0;
    let oldErrorList = this.errorList;
    let errorList: ListModel = undefined;
    if(hasErrors) {
      const actions = [];
      this.createErrorActions(errors).forEach(action => actions.push(action));
      errorList = new ListModel(actions, (action: Action) => {
        const error: SurveyTextWorkerError = action.data;
        if(!!error) this.gotoError(error.at, error.rowAt, error.columnAt);
      }, true);
      errorList.hasVerticalScroller = true;
    }
    this.errorList = errorList;
    if(!!oldErrorList) {
      oldErrorList.dispose();
    }
    this.hasErrors = hasErrors;
  }
  protected gotoError(at: number, row: number, column: number): void {}
  private createErrorActions(errors: Array<SurveyTextWorkerError>): Array<Action> {
    const res = [];
    let counter = 1;
    errors.forEach(error => {
      const line = error.rowAt > -1 ? "Line: " + (error.rowAt + 1) + ". " : "";
      let title = error.text;
      if(title.length > maxErrorLength + 3) {
        title = title.substring(0, maxErrorLength) + "...";
      }
      title = line + title;
      const at = error.at;
      res.push(new Action({
        id: "error_" + counter++,
        title: title,
        tooltip: error.text,
        data: error
      }));
    });
    return res;
  }
  public processErrors(text: string): void {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.setErrors(textWorker.errors);
  }
  public get readOnly(): boolean {
    return this.creator.readOnly;
  }
}

export abstract class TabJsonEditorBasePlugin implements ICreatorPlugin {
  public model: JsonEditorBaseModel;
  constructor(private creator: CreatorBase) { }
  public activate(): void {
    this.model = this.createModel(this.creator);
  }
  public deactivate(): boolean {
    if (this.model) {
      const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
      if (!textWorker.isJsonCorrect) {
        return false;
      }
      if (!this.model.readOnly && this.model.isJSONChanged) {
        this.creator.selectedElement = undefined;
        this.creator.text = this.model.text;
        this.creator.selectedElement = this.creator.survey;
        this.creator.setModified({ type: "JSON_EDITOR" });
      }
      this.model = undefined;
    }
    return true;
  }
  protected abstract createModel(
    creator: CreatorBase
  ): JsonEditorBaseModel;
}
