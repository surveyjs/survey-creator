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

  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    this.onPluginActivate();
  }

  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this._text = value;
    this.processErrors(value);
    this.isProcessingImmediately = false;
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
