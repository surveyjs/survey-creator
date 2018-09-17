import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyCustomEditor } from "./propertyCustomEditor";
import { editorLocalization } from "../editorLocalization";
import { JsonObjectProperty } from "survey-knockout";

export class SurveyPropertyEditorFactory {
  public static defaultEditor: string = "string";
  private static creatorList = {};
  private static creatorByClassList = {};
  private static widgetRegisterList = {};
  public static getOperators(): Array<any> {
    var operators = [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "contains",
      "notcontains",
      "greater",
      "less",
      "greaterorequal",
      "lessorequal"
    ];
    var result = [];
    for (var i = 0; i < operators.length; i++) {
      var name = operators[i];
      result.push({
        name: name,
        text: editorLocalization.getString("op." + name)
      });
    }
    return result;
  }
  public static registerEditor(
    name: string,
    creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase,
    editableClassName: string = null
  ) {
    SurveyPropertyEditorFactory.creatorList[name] = creator;
    var className = editableClassName ? editableClassName : name;
    SurveyPropertyEditorFactory.creatorByClassList[className] = creator;
  }
  public static registerCustomEditor(name: string, widgetJSON: any) {
    SurveyPropertyEditorFactory.widgetRegisterList[name] = widgetJSON;
  }
  public static createEditor(
    property: Survey.JsonObjectProperty,
    func: (newValue: any) => any
  ): SurveyPropertyEditorBase {
    var editorType = property.type;
    if (
      property.choices != null &&
      (!editorType || editorType == SurveyPropertyEditorFactory.defaultEditor)
    ) {
      editorType = "dropdown";
    }
    var propertyEditor = SurveyPropertyEditorFactory.createCustomEditor(
      editorType,
      property
    );
    if (!propertyEditor) {
      var creator = SurveyPropertyEditorFactory.creatorList[editorType];
      if (creator) propertyEditor = creator(property);
    }
    if (!propertyEditor) {
      creator = SurveyPropertyEditorFactory.findParentCreator(editorType);
      propertyEditor = creator(property);
    }
    propertyEditor.onChanged = func;
    return propertyEditor;
  }
  private static createCustomEditor(
    name: string,
    property: Survey.JsonObjectProperty
  ) {
    var widgetJSON = SurveyPropertyEditorFactory.widgetRegisterList[name];
    if (!widgetJSON) return null;
    return new SurveyPropertyCustomEditor(property, widgetJSON);
  }
  private static findParentCreator(
    name: string
  ): (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase {
    var jsonClass = Survey.JsonObject.metaData.findClass(name);
    while (jsonClass && jsonClass.parentName) {
      var creator =
        SurveyPropertyEditorFactory.creatorByClassList[jsonClass.parentName];
      if (creator) return creator;
      jsonClass = Survey.JsonObject.metaData.findClass(jsonClass.parentName);
    }
    return SurveyPropertyEditorFactory.creatorList[
      SurveyPropertyEditorFactory.defaultEditor
    ];
  }
}

export class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "string";
  }
}
export class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
  public koChoices: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koChoices = ko.observableArray(this.getLocalizableChoices());
  }
  public get editorType(): string {
    return "dropdown";
  }
  public getValueText(value: any): string {
    if (this.property.name === "locale") {
      let text = editorLocalization.getLocaleName(value);
      if (text) return text;
    }
    if (this.property.name === "cellType") {
      let text = editorLocalization.getString("qt." + value);
      if (text) return text;
    }
    return editorLocalization.getPropertyValue(value);
  }
  public setObject(value: any) {
    super.setObject(value);
    this.beginValueUpdating();
    if (this.koChoices().length == 0) {
      this.koChoices(this.getLocalizableChoices());
    }
    this.endValueUpdating();
  }
  private getLocalizableChoices() {
    var choices = this.getPropertyChoices();
    if (!choices || choices.length == 0) return [];
    var res = new Array<Survey.ItemValue>();
    Survey.ItemValue.setData(res, choices);
    for (var i = 0; i < res.length; i++) {
      var value = res[i].value;
      var text = this.getValueText(value);
      if (text != value) {
        res[i].text = text;
      }
    }
    return res;
  }
  private getPropertyChoices(): Array<any> {
    if (!this.property) return [];
    return this.property["getChoices"]
      ? this.property["getChoices"](this.object)
      : this.property.choices;
  }
}
export class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "boolean";
  }
  public get alwaysShowEditor(): boolean {
    return true;
  }
  public get canShowDisplayNameOnTop(): boolean {
    return false;
  }
  public getValueText(value: any): string {
    return editorLocalization.getPropertyValue(value);
  }
}
export class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "number";
  }
  protected getCorrectedValue(value: any): any {
    if (!value) return value;
    if (typeof value === "string" || value instanceof String) {
      value = Number(value);
      if (!value) value = 0;
    }
    return value;
  }
}

SurveyPropertyEditorFactory.registerEditor("string", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyStringPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("dropdown", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyDropdownPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("boolean", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyBooleanPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("number", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyNumberPropertyEditor(property);
});
