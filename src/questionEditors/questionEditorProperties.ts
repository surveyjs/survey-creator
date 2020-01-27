import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyObjectProperty } from "../objectProperty";
import { ISurveyObjectEditorOptions } from "../propertyEditors/propertyEditorBase";
import { SurveyHelper } from "../surveyHelper";

export class SurveyQuestionEditorProperties {
  private alwaysVisibleProperties: any = {};
  public editorProperties: Array<SurveyObjectProperty> = [];
  constructor(
    public obj: Survey.Base,
    private properties: Array<Survey.JsonObjectProperty>,
    public options: ISurveyObjectEditorOptions = null,
    private tab: any = null
  ) {
    this.buildAlwaysVisibleProperties();
    this.buildEditorProperties();
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
  public getPropertyEditorByName(propertyName: string): SurveyObjectProperty {
    var props = this.getAllProperties();
    for (var i = 0; i < props.length; i++) {
      if (props[i].property.name == propertyName) return props[i];
    }
  }
  private performForAllProperties(func: (p: SurveyObjectProperty) => void) {
    var props = this.getAllProperties();
    for (var i = 0; i < props.length; i++) {
      func(props[i]);
    }
  }
  public getAllProperties(): Array<SurveyObjectProperty> {
    return this.editorProperties;
  }
  protected buildEditorProperties() {
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      if (!this.isPropertyVisible(prop)) continue;
      this.createEditor(prop, prop.title);
    }
  }
  public createEditor(property: any, displayName: string) {
    if (!displayName) {
      displayName = editorLocalization.getPropertyNameInEditor(property.name);
    }
    var objectProperty = new SurveyObjectProperty(property, this.options);
    objectProperty.object = this.obj;
    objectProperty.alwaysVisible =
      this.alwaysVisibleProperties[property.name] === true;
    if (!!displayName) {
      objectProperty.editor.displayName = displayName;
    }
    this.editorProperties.push(objectProperty);
  }
  private isPropertyVisible(property: Survey.JsonObjectProperty): boolean {
    return (
      this.alwaysVisibleProperties[property.name] ||
      SurveyHelper.isPropertyVisible(this.obj, property, this.options)
    );
  }
  private buildAlwaysVisibleProperties() {
    if (!this.tab || !Array.isArray(this.tab.properties)) return;
    var props = this.tab.properties;
    for (var i = 0; i < props.length; i++) {
      if (props[i].alwaysVisible) {
        this.alwaysVisibleProperties[props[i].name] = true;
      }
    }
  }
}
