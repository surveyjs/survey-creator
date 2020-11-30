import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyCustomEditor } from "./propertyCustomEditor";
import { editorLocalization } from "../editorLocalization";
import { EditableObject } from "./editableObject";

export class SurveyPropertyEditorFactory {
  public static defaultEditor: string = "string";
  public static operators = {
    empty: [],
    notempty: [],
    equal: ["!file"],
    notequal: ["!file"],
    contains: ["checkbox", "text", "comment"],
    notcontains: ["checkbox", "text", "comment"],
    anyof: ["selectbase"],
    allof: ["checkbox"],
    greater: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    less: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    greaterorequal: ["!checkbox", "!imagepicker", "!boolean", "!file"],
    lessorequal: ["!checkbox", "!imagepicker", "!boolean", "!file"],
  };
  private static creatorList = {};
  private static creatorByClassList = {};
  private static widgetRegisterList = {};
  private static cellTypes = {};
  public static getOperators(): Array<any> {
    var result = [];
    var ops = SurveyPropertyEditorFactory.operators;
    for (var name in ops) {
      result.push({
        name: name,
        text: editorLocalization.getString("op." + name),
        types: ops[name],
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
  public koInputType: any = ko.observable("text");
  private listNameValue: string;
  private static dataListNumber = 0;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.listNameValue = this.getListName();
  }
  public get inputType(): string {
    return this.koInputType();
  }
  public set inputType(val: string) {
    this.koInputType(val);
  }
  public get editorType(): string {
    return "string";
  }
  public get listName(): string {
    return this.listNameValue;
  }
  private getListName(): string {
    if (
      !this.property ||
      !Array.isArray(this.property.dataList) ||
      this.property.dataList.length == 0
    )
      return "";
    return (
      "propertyEditorDataList" +
      (SurveyStringPropertyEditor.dataListNumber++).toString()
    );
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
    this.koHasFocus.subscribe(function (newValue) {
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
    if (value === null) return null;
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
  public get optionsCaption(): string {
    return undefined;
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
      if (!!res[i].text && res[i].text !== res[i].value) continue;
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
    var self = this;
    return this.property.getChoices(this.object, function (choices: any) {
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
  public get optionsCaption(): string {
    return this.getLocString("pe.conditionSelectQuestion");
  }
  protected getPropertyChoices(): Array<any> {
    var opt = new Survey.ItemValue("", this.optionsCaption);
    var survey = EditableObject.getSurvey(this.object);
    if (!survey) return [opt];
    var questions = survey.getAllQuestions();
    if (!questions) questions = [];
    var showTitles = !!this.options && this.options.showTitlesInExpressions;
    var qItems = questions.map((q) => {
      let text = showTitles ? (<any>q).locTitle.renderedHtml : q.name;
      return new Survey.ItemValue(this.getItemValue(q), text);
    });
    qItems.sort((el1, el2) => {
      return el1.text.localeCompare(el2.text);
    });

    return qItems;
  }
  protected getItemValue(question: Survey.IQuestion): string {
    return question.name;
  }
}

export class SurveyQuestionValuePropertyEditor extends SurveyQuestionPropertyEditor {
  public get editorType(): string {
    return "questionvalue";
  }
  protected getItemValue(question: Survey.IQuestion): string {
    return (<Survey.Question>question).getValueName();
  }
}

export class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "boolean";
  }
  public get canShowDisplayNameOnTop(): boolean {
    return false;
  }
  public getValueText(value: any): string {
    return editorLocalization.getPropertyValue(value);
  }
}
export class SurveySwitchPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "switch";
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

export class SurveyColorPropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "color";
  }
}

SurveyPropertyEditorFactory.registerEditor("string", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyStringPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("dropdown", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyDropdownPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("question", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyQuestionPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("questionvalue", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyQuestionValuePropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("boolean", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyBooleanPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("switch", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveySwitchPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("number", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyNumberPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("color", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyColorPropertyEditor(property);
});
