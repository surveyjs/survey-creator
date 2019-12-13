import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

interface IMultipleValuesCategory {
  koCategory: any;
  koTitleVisible: any;
  koItems: any;
}

export class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
  public items: Array<Survey.ItemValue> = [];
  koCategories: any;
  koEditingValue: any;
  private isEditingValueSetting: boolean = false;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koEditingValue = ko.observableArray();
    var self = this;
    this.koEditingValue.subscribe(function(newValue) {
      if (self.isEditingValueSetting) return;
      self.koValue([].concat(self.koEditingValue()));
    });
    this.koCategories = ko.observableArray();
    this.koCategories = ko.observableArray();
    this.updateChoices();
  }
  public getValueText(value: any): string {
    if (!value) return editorLocalization.getString("pe.empty");
    if (!Array.isArray(value)) value = [value];
    var str = "[";
    for (var i = 0; i < value.length; i++) {
      if (i > 0) str += ", ";
      str += this.getTextByItemValue(value[i]);
    }
    str += "]";
    return str;
  }
  public setObject(value: any) {
    super.setObject(value);
    this.updateChoices();
    this.setEditingValue();
  }
  protected updateValue() {
    super.updateValue();
    this.setEditingValue();
  }
  public get editorType(): string {
    return "multiplevalues";
  }
  public getBackgroundCls(value) {
    return this.koEditingValue().indexOf("" + value) === -1
      ? "svd-light-background-color"
      : "svd-main-background-color";
  }
  public updateDynamicProperties() {
    super.updateDynamicProperties();
    this.updateChoices();
  }
  private setChoices(choices: Array<Survey.ItemValue>) {
    if (!choices || !Array.isArray(choices) || !choices.length) return;
    Survey.ItemValue.setData(this.items, choices);
    this.setCategories(choices);
    this.items.sort(function(a, b) {
      var ca = !!a.category ? a.category : "";
      var cb = !!b.category ? b.category : "";
      if (ca != cb) return ca < cb ? -1 : 1;
      ca = !!a.text ? a.text : "";
      cb = !!b.text ? b.text : "";
      if (ca != cb) return ca < cb ? -1 : 1;
      if (ca.value < cb.value) return -1;
      if (ca.value > cb.value) return 1;
      return 0;
    });
    this.koCategories(this.buildCategories());
  }
  private updateChoices() {
    var self = this;
    var choices = (<any>this.property["getChoices"])(this.object, function(
      choices: any
    ) {
      self.setChoices(choices);
    });
    this.setChoices(choices);
  }
  private getTextByItemValue(val: any) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].value == val) return this.items[i].text;
    }
    return val;
  }
  private setEditingValue() {
    this.isEditingValueSetting = true;
    var val = this.koValue();
    if (val == null || val == undefined) val = [];
    if (!Array.isArray(val)) val = [val];
    this.koEditingValue(val);
    this.isEditingValueSetting = false;
  }
  private setCategories(choices: Array<Survey.ItemValue>) {
    for (var i = 0; i < this.items.length; i++) {
      if (!!choices[i].category) {
        this.items[i].category = choices[i].category;
      }
    }
  }
  private buildCategories(): Array<IMultipleValuesCategory> {
    var res = [];
    var curCategory = "";
    var category = null;
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      var itemCategory = !!item.category ? item.category : "";
      if (category == null || curCategory != itemCategory) {
        curCategory = itemCategory;
        category = {
          koTitleVisible: ko.observable(curCategory != ""),
          koCategory: ko.observable(curCategory),
          koItems: ko.observableArray(),
          editor: this
        };
        res.push(category);
      }
      category.koItems.push(item);
    }
    return res;
  }
}
SurveyPropertyEditorFactory.registerEditor("multiplevalues", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyMultipleValuesEditor(property);
});
