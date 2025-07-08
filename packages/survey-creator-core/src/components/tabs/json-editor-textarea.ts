import { SurveyModel, property, propertyArray } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
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
  public ariaLabel: string = getLocString("tabs.json");
  public textElement: HTMLTextAreaElement;
  @property({ defaultValue: false }) canShowErrors: boolean;

  constructor(creator: SurveyCreatorModel) {
    super(creator);
    this.onPluginActivate();
  }
  public checkKey(data: any, e: any) {
    if (e.key === "Tab") {
      e.preventDefault();
      const textareaElement: any = e.target;
      const start = textareaElement.selectionStart;
      const end = textareaElement.selectionEnd;

      textareaElement.value = textareaElement.value.substring(0, start) +
        "\t" + textareaElement.value.substring(end);
      textareaElement.selectionStart =
        textareaElement.selectionEnd = start + 1;
      e.stopPropagation();
    }
    return true;
  }
  protected getText(): string {
    return this._text;
  }
  protected setText(value: string): void {
    this.isProcessingImmediately = true;
    this._text = value;
    this.processErrors(value);
    this.isProcessingImmediately = false;
  }
  protected gotoError(at: number, row: number, column: number): void {
    if (!this.textElement) return;
    const el = this.textElement;
    el.selectionStart = at;
    el.selectionEnd = at;
    el.focus();
  }
  public get errorButtonText(): string {
    return this.canShowErrors ? getLocString("ed.jsonHideErrors") : getLocString("ed.jsonShowErrors");
  }
  public toggleErrors(): void {
    this.canShowErrors = !this.canShowErrors;
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
    //TODO Remove this line and then the function
    this._errors = errors;
    super.setErrors(errors);
  }
}

export class TabJsonEditorTextareaPlugin
  extends TabJsonEditorBasePlugin
  implements ICreatorPlugin {
  constructor(creator: SurveyCreatorModel) {
    super(creator);
    creator.addTab({ name: "json", plugin: this, iconName: TabJsonEditorBasePlugin.iconName, componentName: "svc-tab-json-editor-textarea" });
  }
  protected createModel(
    creator: SurveyCreatorModel
  ): JsonEditorBaseModel {
    return new TextareaJsonEditorModel(creator);
  }
}
