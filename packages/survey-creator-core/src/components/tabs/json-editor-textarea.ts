import { SurveyModel, property, propertyArray } from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import {
  JsonEditorBaseModel,
  TabJsonEditorBasePlugin
} from "./json-editor-plugin";
import "./json-editor-textarea.scss";

export class TextareaJsonEditorModel extends JsonEditorBaseModel {
  @property({ defaultValue: "", onSet: (_, target) => target.onTextChanged() })
  protected _text: string;
  @propertyArray() private _errors: any[];
  public ariaLabel: string = getLocString("ed.jsonEditor");
  @property({ defaultValue: false }) private _canShowErrors: boolean;

  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    this.onPluginActivate();
  }

  public get canShowErrors(): boolean {
    return this._canShowErrors;
  }
  public set canShowErrors(val) {
    this._canShowErrors = val;
  }
  public get text(): string {
    return this._text;
  }
  public get errorButtonText(): string {
    return this._canShowErrors ? getLocString("ed.jsonHideErrors") : getLocString("ed.jsonShowErrors");
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this._text = value;
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }
  public toggleErrors(): void {
    this._canShowErrors = !this._canShowErrors;
  }
  public get userFriendlyErrors(): any[] {
    if (this._errors.length === 0) {
      return [];
    }
    const customErrors: string[] = [];
    for (let i = 0; i < this._errors.length - 1; i++) {
      customErrors[i] = this._errors[i].text;
      customErrors[i] += "\n\n";
    }
    customErrors[this._errors.length - 1] = this._errors[this._errors.length - 1].text;
    return customErrors;
  }
  public get errors(): any[] {
    return this._errors;
  }

  protected onTextChanged(): void {
    this.isJSONChanged = true;
    super.onTextChanged();
  }
  protected setErrors(errors: any[]): void {
    this._errors = errors;
  }
}

export class TabJsonEditorTextareaPlugin
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin
{
  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    creator.addPluginTab(
      "editor",
      this,
      getLocString("ed.jsonEditor"),
      "svc-tab-json-editor-textarea"
    );
  }
  protected createModel(
    creator: CreatorBase<SurveyModel>
  ): JsonEditorBaseModel {
    return new TextareaJsonEditorModel(creator);
  }
}
