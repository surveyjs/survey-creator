import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyCustomEditor } from "./propertyCustomEditor";
import { editorLocalization } from "../editorLocalization";
import { EditableObject } from "./editableObject";

export class SurveyPropertyEditorFactory {
  public static defaultEditor: string = "string";
  private static creatorList = {};
  private static creatorByClassList = {};
  private static widgetRegisterList = {};
  private static cellTypes = {};
  public static getOperators(): Array<any> {
    var operators = [
      { name: "empty", types: [] },
      { name: "notempty", types: [] },
      { name: "equal", types: ["!file"] },
      { name: "notequal", types: ["!file"] },
      {
        name: "contains",
        types: ["checkbox", "text", "comment"]
      },
      {
        name: "notcontains",
        types: ["checkbox", "text", "comment"]
      },
      { name: "anyof", types: ["selectbase"] },
      { name: "allof", types: ["checkbox"] },
      {
        name: "greater",
        types: ["!checkbox", "!imagepicker", "!boolean", "!file"]
      },
      {
        name: "less",
        types: ["!checkbox", "!imagepicker", "!boolean", "!file"]
      },
      {
        name: "greaterorequal",
        types: ["!checkbox", "!imagepicker", "!boolean", "!file"]
      },
      {
        name: "lessorequal",
        types: ["!checkbox", "!imagepicker", "!boolean", "!file"]
      }
    ];
    var result = [];
    for (var i = 0; i < operators.length; i++) {
      var name = operators[i].name;
      result.push({
        name: name,
        text: editorLocalization.getString("op." + name),
        types: operators[i].types
      });
    }
    return result;
  }
  public static registerTypeForCellEditing(
    typeName: string,
    cellTypeName: string
  ) {
    SurveyPropertyEditorFactory.cellTypes[typeName] = cellTypeName;
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
  public static unregisterCustomEditor(name: string) {
    delete SurveyPropertyEditorFactory.widgetRegisterList[name];
  }
  public static createEditor(
    property: Survey.JsonObjectProperty,
    func: (newValue: any) => any,
    isCellEditor: boolean = false
  ): SurveyPropertyEditorBase {
    var editorType = property.type;
    if (isCellEditor && !!SurveyPropertyEditorFactory.cellTypes[editorType]) {
      editorType = SurveyPropertyEditorFactory.cellTypes[editorType];
    }
    if (
      SurveyPropertyEditorFactory.isDropdownEditor(property) &&
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
      if (
        property.isArray &&
        Survey.Serializer.isDescendantOf(property.className, "itemvalue")
      ) {
        var creator = SurveyPropertyEditorFactory.creatorList["itemvalue[]"];
        if (creator) propertyEditor = creator(property);
      }
    }
    if (!propertyEditor) {
      creator = SurveyPropertyEditorFactory.findParentCreator(editorType);
      propertyEditor = creator(property);
    }
    propertyEditor.onChanged = func;
    return propertyEditor;
  }
  private static isDropdownEditor(
    property: Survey.JsonObjectProperty
  ): boolean {
    if (property["hasChoices"] !== undefined)
      return property["hasChoices"] === true;
    return property.choices != null;
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
    var jsonClass = Survey.Serializer.findClass(name);
    while (jsonClass && jsonClass.parentName) {
      var creator =
        SurveyPropertyEditorFactory.creatorByClassList[jsonClass.parentName];
      if (creator) return creator;
      jsonClass = Survey.Serializer.findClass(jsonClass.parentName);
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
  public koHasFocus: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koChoices = ko.observableArray([]);
    this.koHasFocus = ko.observable(false);
    var self = this;
    this.koHasFocus.subscribe(function(newValue) {
      //TODO isDynamicChoices obsolete, use dependsOn attribute
      if (newValue && self.property["isDynamicChoices"]) {
        self.updateChoices();
      }
    });
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
      this.updateChoices();
    }
    this.endValueUpdating();
  }
  public updateDynamicProperties() {
    super.updateDynamicProperties();
    this.updateChoices();
  }
  public updateChoices() {
    var choices = this.getPropertyChoices();
    this.setChoices(choices);
  }
  private setChoices(choices: Array<Survey.ItemValue>) {
    choices = this.makeChoicesLocalizable(choices);
    if (!!choices && Array.isArray(choices)) {
      this.koChoices(choices);
    }
  }
  private makeChoicesLocalizable(choices: Array<Survey.ItemValue>) {
    if (!choices) return choices;
    var res = new Array<Survey.ItemValue>();
    Survey.ItemValue.setData(res, choices);
    for (var i = 0; i < res.length; i++) {
      if (!!res[i].text) continue;
      var value = res[i].value;
      var text = this.getValueText(value);
      if (text != value) {
        res[i].text = text;
      }
    }
    return res;
  }
  protected getPropertyChoices(): Array<any> {
    if (!this.property) return [];
    if (!!this.object) {
      var obj = this.object;
      this.object["getEditingPropertyValue"] = function(name: string) {
        if (!!obj.editingProperties && obj.editingProperties[name] != undefined)
          return obj.editingProperties[name];
        return obj[name];
      };
    }
    var self = this;
    return (<any>this.property["getChoices"])(this.object, function(
      choices: any
    ) {
      self.setChoices(choices);
    });
  }
}

export class SurveyQuestionPropertyEditor extends SurveyDropdownPropertyEditor {
  public get editorType(): string {
    return "question";
  }
  public get editorTypeTemplate(): string {
    return "dropdown";
  }
  protected getPropertyChoices(): Array<any> {
    var opt = new Survey.ItemValue(
      "",
      this.getLocString("pe.conditionSelectQuestion")
    );
    var survey = EditableObject.getSurvey(this.object);
    if (!survey) return [opt];
    var questions = survey.getAllQuestions();
    if (!questions) questions = [];
    var showTitles = !!this.options && this.options.showTitlesInExpressions;
    var qItems = questions.map(q => {
      let text = showTitles ? (<any>q).locTitle.renderedHtml : q.name;
      return new Survey.ItemValue(q.name, text);
    });
    qItems.sort((el1, el2) => {
      return el1.text.localeCompare(el2.text);
    });
    qItems.unshift(opt);
    return qItems;
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
    return super.getCorrectedValue(value);
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
SurveyPropertyEditorFactory.registerEditor("question", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyQuestionPropertyEditor(property);
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
