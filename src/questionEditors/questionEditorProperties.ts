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
  koValue: any;
  constructor(
    public obj: Survey.Base,
    public property: Survey.JsonObjectProperty,
    displayName: string,
    options: ISurveyObjectEditorOptions = null,
    isTabProperty: boolean = false
  ) {
    var self = this;
    this.objectPropertyValue = new SurveyObjectProperty(this.property, null);
    this.editor.isTabProperty = isTabProperty;
    this.editor.options = options;
    if (!displayName) {
      displayName = editorLocalization.getString("pe." + this.property.name);
    }
    if (displayName) this.editor.displayName = displayName;
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
  public apply() {
    this.editor.apply();
    this.obj[this.property.name] = this.editor.koValue();
  }
  public reset() {
    this.editor.koValue(this.property.getPropertyValue(this.obj));
  }
}

export class SurveyQuestionEditorRow {
  public category: string;
  public properties: Array<SurveyQuestionEditorProperty> = [];
  constructor(public obj: Survey.Base) {}
  public addProperty(
    property: any,
    displayName: string,
    options: ISurveyObjectEditorOptions,
    isTabProperty: boolean
  ) {
    this.properties.push(
      new SurveyQuestionEditorProperty(
        this.obj,
        property,
        displayName,
        options,
        isTabProperty
      )
    );
  }
  public hasError(): boolean {
    var isError = false;
    for (var i = 0; i < this.properties.length; i++) {
      isError = this.properties[i].hasError() || isError;
    }
    return isError;
  }
}

export class SurveyQuestionEditorProperties {
  private properties: Array<Survey.JsonObjectProperty>;
  private onCanShowPropertyCallback: (
    object: any,
    property: Survey.JsonObjectProperty
  ) => boolean;
  public rows: Array<SurveyQuestionEditorRow> = [];
  constructor(
    public obj: Survey.Base,
    properties: Array<any>,
    onCanShowPropertyCallback: (
      object: any,
      property: Survey.JsonObjectProperty
    ) => boolean = null,
    public options: ISurveyObjectEditorOptions = null,
    public isTabProperty: boolean = false
  ) {
    this.onCanShowPropertyCallback = onCanShowPropertyCallback;
    this.properties = Survey.JsonObject.metaData["getPropertiesByObj"]
      ? Survey.JsonObject.metaData["getPropertiesByObj"](this.obj)
      : Survey.JsonObject.metaData.getProperties(this.obj.getType());
    this.buildRows(properties);
  }
  public apply() {
    this.applyOrReset(true);
  }
  public reset() {
    this.applyOrReset(false);
  }
  public hasError(): boolean {
    var isError = false;
    for (var i = 0; i < this.rows.length; i++) {
      isError = this.rows[i].hasError() || isError;
    }
    return isError;
  }
  protected applyOrReset(isApply: boolean) {
    for (var i = 0; i < this.rows.length; i++) {
      for (var j = 0; j < this.rows[i].properties.length; j++) {
        if (isApply) this.rows[i].properties[j].apply();
        else this.rows[i].properties[j].reset();
      }
    }
  }
  protected buildRows(properties) {
    for (var i = 0; i < properties.length; i++) {
      var name = this.getName(properties[i]);
      var jsonProperty = this.getProperty(name);
      if (!jsonProperty) continue;
      var row = this.getRowByCategory(properties[i].category);
      if (!row) {
        row = new SurveyQuestionEditorRow(this.obj);
        if (properties[i].category) row.category = properties[i].category;
        this.rows.push(row);
      }
      row.addProperty(
        jsonProperty,
        properties[i].title,
        this.options,
        this.isTabProperty
      );
    }
  }
  private getName(prop: any): string {
    if (!prop) return null;
    if (typeof prop === "string") return prop;
    if (prop.name) return prop.name;
    return null;
  }
  private getRowByCategory(category: string) {
    if (!category) return null;
    for (var i = 0; i < this.rows.length; i++) {
      if (this.rows[i].category == category) return this.rows[i];
    }
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
    return SurveyHelper.isPropertyVisible(
      this.obj,
      property,
      this.onCanShowPropertyCallback
    )
      ? property
      : null;
  }
}
