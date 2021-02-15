import { IJsonEditorModel, SurveyTextWorker } from "@survey/creator";
import { ICreatorPlugin, SurveyCreator } from "../../creator";

export abstract class JsonEditorBaseModel implements IJsonEditorModel {
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;

  constructor(protected creator: SurveyCreator) {}

  public abstract text: string;
  public abstract onEditorActivated(): void;
  protected onTextChanged(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    } else {
      const self: JsonEditorBaseModel = this;
      this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
        self.jsonEditorChangedTimeoutId = -1;
        self.processErrors(self.text);
      }, JsonEditorBaseModel.updateTextTimeout);
    }
  }
  protected abstract setErrors(errors: any[]): void;
  public processErrors(text: string): void {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.setErrors(textWorker.errors);
  }
  public get readOnly(): boolean {
    return this.creator.readOnly;
  }
}

export abstract class TabJsonEditorBasePlugin<TModel extends IJsonEditorModel>
  implements ICreatorPlugin {
  public model: TModel;
  constructor(private creator: SurveyCreator) {}
  public activate(): void {
    this.model.text = this.creator.text;
    this.model.onEditorActivated();
    this.model.isJSONChanged = false;
  }
  public deactivate(): boolean {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if (!textWorker.isJsonCorrect) {
      return false;
    }
    if (!this.model.readOnly && this.model.isJSONChanged) {
      this.creator._dummySetText(this.model.text);
    }
    return true;
  }
}
