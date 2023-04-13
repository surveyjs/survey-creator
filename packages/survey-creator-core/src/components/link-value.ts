import { Question, Serializer, QuestionFactory, property, Helpers } from "survey-core";
import { editorLocalization } from "../editorLocalization";

require("./link-value.scss");

export class QuestionLinkValueModel extends Question {
  public linkClickCallback: () => void;
  public resetClickCallback: () => void;
  public isClickableCallback: () => boolean;
  @property({ defaultValue: "svc-link-value-button svc-question-link__set-button" }) public linkSetButtonCssClasses: string;
  @property({ defaultValue: "svc-question-link__clear-button" }) public linkClearButtonCssClasses: string;

  @property({ defaultValue: false }) isSelected: boolean;
  @property() linkValueText: string;
  @property({ defaultValue: false }) showClear: boolean;
  @property({ defaultValue: true }) allowClear: boolean;
  @property({ defaultValue: true }) showValueInLink: boolean;
  @property({ defaultValue: false }) showTooltip: boolean;
  @property({ defaultValue: true }) isClickable: boolean;
  constructor(name: string, json: any = null) {
    super(name);
    const linkValueText = json && !json.showValueInLink && (editorLocalization.getString("pe.set")) + " " + json.title || null;
    this.linkValueText = linkValueText || editorLocalization.getString("pe.emptyValue");
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "value") {
      this.updateLinkValueText();
      if (this.allowClear) {
        this.showClear = !Helpers.isValueEmpty(newValue);
      }
      this.updateIsClickable();
    }
  }
  protected onReadOnlyChanged(): void {
    this.updateIsClickable();
    super.onReadOnlyChanged();
  }
  private updateIsClickable(): void {
    this.setPropertyValue("isClickable", !this.isReadOnly || (!!this.isClickableCallback && this.isClickableCallback()));
  }
  public get ariaRole(): string {
    return "button";
  }

  public get tooltip() {
    return this.showTooltip ? this.linkValueText : undefined;
  }
  public getType(): string {
    return "linkvalue";
  }
  public doLinkClick() {
    if (!!this.linkClickCallback) {
      this.linkClickCallback();
    }
  }
  public doClearClick() {
    if (!!(<any>this).clearClickCallback) {
      (<any>this).clearClickCallback();
    }
  }
  private updateLinkValueText() {
    let displayValue;
    if (this.showValueInLink) {
      displayValue = this.isEmpty() ? editorLocalization.getString("pe.emptyValue") : this.getObjDisplayValue();
    } else {
      displayValue = editorLocalization.getString(this.isEmpty() ? "pe.set" : "pe.change") + " " + this.title;
    }
    this.linkValueText = displayValue;
  }
  private stringifyValue(val: any): string {
    if (typeof val !== "string") return JSON.stringify(val);
    return val;
  }
  private getObjDisplayValue(): string {
    const obj = (<any>this).obj;
    if (!obj || !obj["getDisplayValue"]) return this.stringifyValue(this.value);
    var res = obj["getDisplayValue"](true, this.value);
    if (typeof res !== "string") return JSON.stringify(res);
    return res;
  }
}

Serializer.addClass(
  "linkvalue",
  ["showValueInLink",
    {
      name: "showTooltip: boolean",
      default: false,
      visible: false
    }],
  function (json) {
    const viewModel = new QuestionLinkValueModel("", json);
    return viewModel;
  },
  "nonvalue"
);

QuestionFactory.Instance.registerQuestion("linkvalue", (name) => {
  return new QuestionLinkValueModel(name);
});