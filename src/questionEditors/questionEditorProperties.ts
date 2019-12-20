import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyObjectProperty } from "../objectProperty";
import { ISurveyObjectEditorOptions } from "../propertyEditors/propertyEditorBase";
import { SurveyHelper } from "../surveyHelper";

export class SurveyQuestionEditorProperties {
  private properties: Array<Survey.JsonObjectProperty>;
  public editorProperties: Array<SurveyObjectProperty> = [];
  constructor(
    public obj: Survey.Base,
    properties: Array<any>,
    public options: ISurveyObjectEditorOptions = null,
    private tab: any = null
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
  protected buildEditorProperties(properties) {
    for (var i = 0; i < properties.length; i++) {
      var name = this.getName(properties[i]);
      var jsonProperty = this.getProperty(name);
      if (!jsonProperty) continue;
      this.addProperty(jsonProperty, properties[i].title);
    }
  }
  public addProperty(property: any, displayName: string) {
    if (!displayName) {
      displayName = editorLocalization.getPropertyInEditor(property.name);
    }
    var objectProperty = new SurveyObjectProperty(property, null, this.options);
    objectProperty.object = this.obj;
    if (!!displayName) {
      objectProperty.editor.displayName = displayName;
    }
    this.editorProperties.push(objectProperty);
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
