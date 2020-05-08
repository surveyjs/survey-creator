import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";

export class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
  private widgetJSONValue: any;
  public onValueChangedCallback: (newValue: any) => void;
  constructor(property: Survey.JsonObjectProperty, widgetJSON: any = null) {
    super(property);
    this.widgetJSONValue = widgetJSON;
    var self = this;
    this["koAfterRender"] = function(el, con) {
      self.doAfterRender(el, con);
    };
  }
  public get editorType(): string {
    return "custom";
  }
  public get widgetJSON(): any {
    return this.widgetJSONValue;
  }
  private isValueChanging: boolean = false;
  protected onValueChanged() {
    if (this.isValueChanging) return;
    this.isValueChanging = true;
    super.onValueChanged();
    if (this.onValueChangedCallback)
      this.onValueChangedCallback(this.koValue());
    this.isValueChanging = false;
  }
  protected checkForErrors(): boolean {
    var res = super.checkForErrors();
    if (!!res) return res;
    var errorText = this.widgetValidate();
    if (!!errorText) {
      this.koErrorText(errorText);
    }
    return !!errorText;
  }
  protected get widgetRender(): any {
    return this.widgetJSON ? this.widgetJSON.render : null;
  }
  protected widgetValidate(): string {
    if (this.widgetJSON && this.widgetJSON.validate) {
      return this.widgetJSON.validate(this, this.koValue());
    }
    return null;
  }
  protected doAfterRender(elements, con) {
    var el = elements[0];
    if (!!el && this.widgetRender) this.widgetRender(this, el);
  }
}
