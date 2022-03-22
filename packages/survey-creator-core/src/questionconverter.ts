import * as Survey from "survey-core";
import { QuestionConvertMode, settings } from "./settings";
import { IQuestionToolboxItem } from "./toolbox";

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
    if (
      !!availableTypes &&
      Array.isArray(availableTypes) &&
      availableTypes.length > 0
    ) {
      res = res
        .filter((item) => availableTypes.indexOf(item) >= 0)
        .sort((a, b) => availableTypes.indexOf(a) - availableTypes.indexOf(b));
    }
    return !!res ? res : [];
  }
  public static convertObject(
    obj: Survey.Question,
    convertToClass: string,
    defaultJSON: any = null
  ): Survey.Question {
    if (!obj || !obj.parent || convertToClass == obj.getType()) return null;
    var newQuestion = Survey.QuestionFactory.Instance.createQuestion(convertToClass, obj.name);
    if(!newQuestion) {
      newQuestion = Survey.Serializer.createClass(convertToClass, {});
    }
    newQuestion.name = obj.name;
    const json = newQuestion.toJSON();
    const qJson = obj.toJSON();
    for (var key in qJson) {
      json[key] = qJson[key];
    }
    QuestionConverter.updateJSON(json, convertToClass, defaultJSON);
    newQuestion.fromJSON(json);
    var panel = <Survey.PanelModelBase>obj.parent;
    var index = panel.elements.indexOf(obj);
    panel.removeElement(obj);
    panel.addElement(newQuestion, index);
    newQuestion.onSurveyLoad();
    return <Survey.Question>newQuestion;
  }
  private static updateJSON(json: any, convertToClass: string, defaultJSON: any): any {
    if(convertToClass === "rating" && json.choices) {
      if(!defaultJSON || !defaultJSON.choices ||
        !Survey.Helpers.isArraysEqual(defaultJSON.choices, json.choices)) {
        json.rateValues = json.choices;
      }
    } else {
      if(json.rateValues) {
        json.choices = json.rateValues;
      }
    }
  }
}

function getAllQuestionTypes(className: string, includeCurrent: boolean = false): Array<string> {
  var classes = Survey.Serializer.getChildrenClasses("question", true);
  var res = [];
  for (var i = 0; i < classes.length; i++) {
    if (includeCurrent || classes[i].name !== className) {
      res.push(classes[i].name);
    }
  }
  const widgets = Survey.CustomWidgetCollection.Instance.widgets;
  for(var i = 0; i < widgets.length; i ++) {
    if (includeCurrent || widgets[i].name !== className) {
      res.push(widgets[i].name);
    }
  }
  return res;
}

function createDefaultQuestionConverterItems() {
  var classes = Survey.Serializer.getChildrenClasses("selectbase", true);
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
