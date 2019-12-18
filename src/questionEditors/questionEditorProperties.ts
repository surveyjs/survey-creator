import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyObjectProperty } from "../objectProperty";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "../propertyEditors/propertyEditorBase";
import { SurveyHelper } from "../surveyHelper";

export class SurveyQuestionEditorProperty {
  private objectPropertyValue: SurveyObjectProperty;
  public onChanging: (
    propEditor: SurveyQuestionEditorProperty,
    newValue: any
  ) => boolean;
  public onChanged: (propEditor: SurveyQuestionEditorProperty) => void;
  constructor(
    public obj: Survey.Base,
    public property: Survey.JsonObjectProperty,
    displayName: string,
    options: ISurveyObjectEditorOptions = null,
    private getEditorPropertyByName: (
      name: string
    ) => SurveyQuestionEditorProperty = null
  ) {
    var self = this;
    this.objectPropertyValue = new SurveyObjectProperty(
      this.property,
      function(property, newValue) {
        self.onPropertyChanged(property, newValue);
      },
      options
    );
    if (!displayName) {
      displayName = editorLocalization.getPropertyInEditor(this.property.name);
    }
    if (displayName) this.editor.displayName = displayName;
    this.objectProperty.onDependedPropertyUpdateCallback = function(
      propertyName: string
    ) {
      self.updateDependedProperty(propertyName);
    };
    this.objectProperty.object = obj;
    this.editor.setup();
  }
  public get objectProperty(): SurveyObjectProperty {
    return this.objectPropertyValue;
  }
  public get editor(): SurveyPropertyEditorBase {
    return this.objectProperty.editor;
  }
  public hasError(): boolean {
    return this.editor.hasError();
  }
  public apply(): boolean {
    if (this.editor.apply()) {
      this.obj[this.property.name] = this.editor.koValue();
      return true;
    }
    return false;
  }
  public applyToObj(obj: Survey.Base) {
    if (
      Survey.Helpers.isTwoValueEquals(
        obj[this.property.name],
        this.obj[this.property.name]
      )
    )
      return;
    obj[this.property.name] = this.obj[this.property.name];
  }
  public reset() {
    this.editor.koValue(this.property.getPropertyValue(this.obj));
  }
  public beforeShow() {
    this.editor.beforeShow();
    this.objectProperty.updateDynamicProperties();
  }
  protected onPropertyChanged(property: SurveyObjectProperty, newValue: any) {
    if (this.onChanging && !this.onChanging(this, newValue)) return;
    this.obj[this.property.name] = newValue;
    if (this.onChanged) this.onChanged(this);
  }
  private updateDependedProperty(propertyName: string) {
    if (!this.getEditorPropertyByName) return;
    var prop = this.getEditorPropertyByName(propertyName);
    if (!!prop) {
      prop.objectProperty.updateDynamicProperties();
    }
  }
}

export class SurveyQuestionEditorProperties {
  private properties: Array<Survey.JsonObjectProperty>;
  public editorProperties: Array<SurveyQuestionEditorProperty> = [];
  constructor(
    public obj: Survey.Base,
    properties: Array<any>,
    public options: ISurveyObjectEditorOptions = null,
    private tab: any = null,
    private getEditorPropertyByName: (
      name: string
    ) => SurveyQuestionEditorProperty = null
  ) {
    this.properties = Survey.Serializer.getPropertiesByObj(this.obj);
    this.buildEditorProperties(properties);
  }
  public apply() {
    var res = true;
    this.performForAllProperties(p => (res = p.apply() && res));
    return res;
  }
  public applyToObj(obj: Survey.Base) {
    this.performForAllProperties(p => p.applyToObj(obj));
  }
  public reset() {
    this.performForAllProperties(p => p.reset());
  }
  public beforeShow() {
    this.performForAllProperties(p => p.beforeShow());
  }
  public hasError(): boolean {
    var isError = false;
    for (var i = 0; i < this.editorProperties.length; i++) {
      isError = this.editorProperties[i].hasError() || isError;
    }
    return isError;
  }
  public getPropertyEditorByName(
    propertyName: string
  ): SurveyQuestionEditorProperty {
    var props = this.getAllProperties();
    for (var i = 0; i < props.length; i++) {
      if (props[i].property.name == propertyName) return props[i];
    }
  }
  private performForAllProperties(
    func: (p: SurveyQuestionEditorProperty) => void
  ) {
    var props = this.getAllProperties();
    for (var i = 0; i < props.length; i++) {
      func(props[i]);
    }
  }
  public getAllProperties(): Array<SurveyQuestionEditorProperty> {
    return this.editorProperties;
  }
  protected buildEditorProperties(properties) {
    for (var i = 0; i < properties.length; i++) {
      var name = this.getName(properties[i]);
      var jsonProperty = this.getProperty(name);
      if (!jsonProperty) continue;
      this.addProperty(jsonProperty, properties[i].title);
    }
  }
  public addProperty(property: any, displayName: string) {
    this.editorProperties.push(
      new SurveyQuestionEditorProperty(
        this.obj,
        property,
        displayName,
        this.options,
        this.getEditorPropertyByName
      )
    );
  }
  private getName(prop: any): string {
    if (!prop) return null;
    if (typeof prop === "string") return prop;
    if (prop.name) return prop.name;
    return null;
  }
  private getProperty(propertyName: string): Survey.JsonObjectProperty {
    if (!propertyName) return null;
    var property = null;
    for (var i = 0; i < this.properties.length; i++) {
      if (this.properties[i].name == propertyName) {
        property = this.properties[i];
        break;
      }
    }
    if (!property) return null;
    if (
      !!this.tab &&
      property.name == this.tab.name &&
      this.tab.visible === true
    )
      return property;

    return SurveyHelper.isPropertyVisible(this.obj, property, this.options)
      ? property
      : null;
  }
}
