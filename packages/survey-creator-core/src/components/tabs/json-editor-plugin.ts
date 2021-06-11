import { Base, SurveyModel } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { SurveyTextWorker } from "../../textWorker";

export interface IJsonEditorModel {
  isJSONChanged: boolean;

  text: string;
  onPluginActivate(): void;
  processErrors(text: string): void;
  readOnly: boolean;
}

export abstract class JsonEditorBaseModel
  extends Base
  implements IJsonEditorModel
{
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;

  constructor(protected creator: CreatorBase<SurveyModel>) {
    super();
  }

  public abstract text: string;
  public abstract onEditorActivated(): void;
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
  implements ICreatorPlugin
{
  public model: TModel;
  constructor(private creator: CreatorBase<SurveyModel>) {}
  public activate(): void {
    this.model.onPluginActivate();
  }
  public deactivate(): boolean {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if (!textWorker.isJsonCorrect) {
      return false;
    }
    if (!this.model.readOnly && this.model.isJSONChanged) {
      this.creator.text = this.model.text;
    }
    return true;
  }
}
