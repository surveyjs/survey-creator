import { SurveyModel, property, propertyArray } from "survey-knockout";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
import "./json-editor-textarea.scss";

export class TextareaJsonEditorModel extends JsonEditorBaseModel {
  @property({ defaultValue: "", onSet: (_, target) => target.onTextChanged() }) protected _text: string;
  @propertyArray() private _errors: any[];
  public ariaLabel: string = getLocString("ed.jsonEditor");

  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
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
  public init(): void {
    this._text = this.creator.text;
  }

  protected onTextChanged(): void {
    this.isJSONChanged = true;
    super.onTextChanged();
  }
  protected setErrors(errors: any[]): void {
    this._errors = errors;
  }
  public onEditorActivated(): void {}
}

export class TabJsonEditorTextareaPlugin
  extends TabJsonEditorBasePlugin<TextareaJsonEditorModel>
  implements ICreatorPlugin {
  constructor(creator: CreatorBase<SurveyModel>) {
    super(creator);
    this.model = new TextareaJsonEditorModel(creator);
    creator.tabs.push({
      id: "editor",
      title: getLocString("ed.jsonEditor"),
      component: "svc-tab-json-editor-textarea",
      data: this,
      action: () => {
        creator.makeNewViewActive("editor");
        this.activate();
      },
      active: () => creator.viewType === "editor"
    });
    creator.plugins["editor"] = this;
  }
}