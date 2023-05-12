import { SurveyElement, QuestionSelectBase, QuestionFactory,
  Serializer, PanelModelBase, Question, Helpers, CustomWidgetCollection } from "survey-core";
import { QuestionConvertMode, settings } from "./creator-settings";
import { IQuestionToolboxItem, QuestionToolbox } from "./toolbox";

export class QuestionConverter {
  public static convertInfo = {};
  public static addConvertInfo(className: string, convertToClassName: string) {
    if (!QuestionConverter.convertInfo[className]) {
      QuestionConverter.convertInfo[className] = [];
    }
    QuestionConverter.convertInfo[className].push(convertToClassName);
  }
  public static getConvertToClasses(
    className: string,
    availableTypes: Array<string> = null, includeCurrent: boolean = false
  ): Array<string> {
    var res = settings.questionConvertMode == QuestionConvertMode.AllTypes
      ? getAllQuestionTypes(className, includeCurrent)
      : QuestionConverter.convertInfo[className];
    if (!res) return [];
    if (Array.isArray(availableTypes) && availableTypes.length > 0
    ) {
      const types = [];
      res.forEach(item => types.push(item));
      res = availableTypes
        .filter((item) => types.indexOf(item) >= 0);
    }
    return !!res ? res : [];
  }
  public static convertObject(
    obj: Question,
    convertToClass: string,
    defaultJSON: any = null
  ): Question {
    if (!obj || !obj.parent || convertToClass == obj.getType()) return null;
    let questionDefaultSettings = QuestionToolbox.getQuestionDefaultSettings(convertToClass);
    var newQuestion = QuestionFactory.Instance.createQuestion(convertToClass, obj.name);
    if(!newQuestion) {
      newQuestion = Serializer.createClass(convertToClass, {});
    }
    if (newQuestion instanceof QuestionSelectBase && questionDefaultSettings?.choices) newQuestion.choices = null;
    newQuestion.name = obj.name;
    const json = newQuestion.toJSON();
    const qJson = obj.toJSON();
    for (var key in qJson) {
      json[key] = qJson[key];
    }
    QuestionConverter.updateJSON(json, convertToClass, obj.getType(), defaultJSON);
    newQuestion.fromJSON(json);
    var panel = <PanelModelBase>obj.parent;
    var index = panel.elements.indexOf(obj);
    (<any>panel).isConverting = true;
    panel.removeElement(obj);
    panel.addElement(newQuestion, index);
    delete (<any>panel).isConverting;
    newQuestion.onSurveyLoad();
    return newQuestion;
  }
  private static updateJSON(json: any, convertToClass: string, convertFromClass: string, defaultJSON: any): void {
    QuestionConverter.updateJSONFromQuestionDefaultSettings(json, convertToClass, defaultJSON);
    QuestionConverter.updateJSONForRating(json, convertToClass, defaultJSON);
    QuestionConverter.updateJSONForMatrices(json, convertToClass, convertFromClass);
    QuestionConverter.updateJSONForPanels(json, convertToClass, convertFromClass);
    QuestionConverter.updateJSONForBarrating(json, convertToClass);
  }
  private static updateJSONFromQuestionDefaultSettings(json: any, convertToClass: string, defaultJSON: any): void {
    const questionDefaultSettings = QuestionToolbox.getQuestionDefaultSettings(convertToClass);
    if(!questionDefaultSettings) return;
    if(convertToClass === "image" && !json.imageLink) {
      json.imageLink = questionDefaultSettings.imageLink;
    }
    if(convertToClass === "imagepicker" ||
      convertToClass === "dropdown" ||
      convertToClass === "checkbox" ||
      convertToClass === "radiogroup" ||
      convertToClass === "ranking"
    ) {
      if(!json.choices) {
        json.choices = questionDefaultSettings.choices;
      }
    } else {
      for(var key in questionDefaultSettings) {
        if(!defaultJSON || !defaultJSON[key]) {
          json[key] = questionDefaultSettings[key];
        }
      }
    }
  }
  private static updateJSONForMatrices(json: any, convertToClass: string, convertFromClass: string): void {
    if(Serializer.isDescendantOf(convertToClass, "matrix") &&
       Serializer.isDescendantOf(convertFromClass, "matrixdropdownbase") &&
       json.columns) {
      json.columns = json.columns.map(col => col.title ? { value: col.name, text: col.title } : col.name);
    }
    if(Serializer.isDescendantOf(convertToClass, "matrixdropdownbase") &&
       Serializer.isDescendantOf(convertFromClass, "matrix") &&
       json.columns) {
      json.columns = json.columns.map(col => <any>{ name: col.value || col, title: col.text });
    }
  }
  private static updateJSONForRating(json: any, convertToClass: string, defaultJSON: any): void {
    if(convertToClass === "rating" && json.choices) {
      if(!defaultJSON || !defaultJSON.choices ||
        !Helpers.isArraysEqual(defaultJSON.choices, json.choices)) {
        json.rateValues = json.choices;
      }
    }
    if(!!json.rateValues && !Serializer.isDescendantOf(convertToClass, "matrixdropdownbase")) {
      json.choices = json.rateValues;
    }
  }
  private static updateJSONForBarrating(json: any, convertToClass: string): void {
    if(convertToClass === "barrating") {
      json.choices = [1, 2, 3, 4, 5];
    }
  }
  private static updateJSONForPanels(json: any, convertToClass: string, convertFromClass: string): void {
    if(Serializer.isDescendantOf(convertToClass, "paneldynamic") &&
       Serializer.isDescendantOf(convertFromClass, "panel") &&
       json.elements) {
      json.templateElements = json.elements;
      delete json.elements;
    }
    if(Serializer.isDescendantOf(convertToClass, "panel") &&
       Serializer.isDescendantOf(convertFromClass, "paneldynamic") &&
       json.templateElements) {
      json.elements = json.templateElements;
      delete json.templateElements;
    }
  }
}
function getAllQuestionTypes(className: string, includeCurrent: boolean = false): Array<string> {
  if(className === "panel") return includeCurrent ? ["panel", "paneldynamic"] : ["paneldynamic"];
  var classes = Serializer.getChildrenClasses("question", true);
  var res = [];
  for (var i = 0; i < classes.length; i++) {
    if (includeCurrent || classes[i].name !== className) {
      res.push(classes[i].name);
    }
  }
  if(className === "paneldynamic") res.push("panel");
  const widgets = CustomWidgetCollection.Instance.widgets;
  for(var i = 0; i < widgets.length; i ++) {
    if (includeCurrent || widgets[i].name !== className) {
      res.push(widgets[i].name);
    }
  }
  return res;
}

function createDefaultQuestionConverterItems() {
  var classes = Serializer.getChildrenClasses("selectbase", true);
  for (var i = 0; i < classes.length; i++) {
    for (var j = 0; j < classes.length; j++) {
      if (i == j) continue;
      QuestionConverter.addConvertInfo(classes[i].name, classes[j].name);
    }
  }
  QuestionConverter.addConvertInfo("text", "comment");
  QuestionConverter.addConvertInfo("comment", "text");
}

createDefaultQuestionConverterItems();