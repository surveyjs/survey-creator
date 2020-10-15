import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyHelper } from "../entries";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyElementSelector } from "./surveyElementSelector";
import { EditableObject } from "./editableObject";

export class SurveyPropertyBindingsItem {
  private elementSelectorValue: SurveyElementSelector;
  constructor(
    public property: Survey.JsonObjectProperty,
    public displayName: string,
    private obj: Survey.Base
  ) {}
  public get value(): string {
    return !!this.elementSelector ? this.elementSelector.koValue() : "";
  }
  public set value(val: string) {
    if (!!this.elementSelector) {
      this.elementSelector.koValue(val);
    }
  }
  public setElementSelector(survey: Survey.SurveyModel, showTitle: boolean) {
    this.elementSelectorValue = new SurveyElementSelector(
      survey,
      "question",
      showTitle
    );
    this.value = this.obj["bindings"].getValueNameByPropertyName(
      this.property.name
    );
    this.elementSelectorValue.onValueChangedCallback = (val) => {
      this.obj["bindings"].setBinding(this.property.name, val);
    };
  }
  public get elementSelector(): SurveyElementSelector {
    return this.elementSelectorValue;
  }
}

export class SurveyPropertyBindingsEditor extends SurveyPropertyModalEditor {
  public items: Array<SurveyPropertyBindingsItem> = [];
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "bindings";
  }
  public beforeShowCore() {
    super.beforeShowCore();
    if (!!this.object) {
      this.fillBindingItems();
    }
  }
  private fillBindingItems() {
    if (!this.object) return;
    var survey = EditableObject.getSurvey(this.object);
    if (!survey) return;
    var showTitle = !!this.options
      ? this.options.showTitlesInExpressions
      : false;
    var props = this.getProperties();
    for (var i = 0; i < props.length; i++) {
      var item = new SurveyPropertyBindingsItem(
        props[i],
        this.getPropertyDisplayName(props[i]),
        this.object
      );
      item.setElementSelector(survey, showTitle);
      this.items.push(item);
    }
  }
  ///TODO refactor use only this.object.bindings.getProperties()
  private getProperties(): Array<Survey.JsonObjectProperty> {
    var res = [];
    if (!!this.object.bindings.getProperties)
      return this.object.bindings.getProperties();
    var names = this.object.bindings.getNames();
    for (var i = 0; i < names.length; i++) {
      var prop = Survey.Serializer.findProperty(
        this.object.getType(),
        names[i]
      );
      if (!!prop) res.push(prop);
    }
    return res;
  }
}

SurveyPropertyEditorFactory.registerEditor("bindings", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyBindingsEditor(property);
});
