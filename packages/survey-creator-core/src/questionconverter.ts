import * as Survey from "survey-core";
import { settings } from "./settings";

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
    availableTypes: Array<string> = null
  ): Array<string> {
    var res = settings.allowToConvertQuestionsToAllTypes
      ? getAllQuestionTypes(className)
      : QuestionConverter.convertInfo[className];
    if (!res) return [];
    if (
      !!availableTypes &&
      Array.isArray(availableTypes) &&
      availableTypes.length > 0
    ) {
      for (var i = res.length - 1; i >= 0; i--) {
        if (availableTypes.indexOf(res[i]) < 0) {
          res.splice(i, 1);
        }
      }
    }
    return !!res ? res : [];
  }
  public static convertObject(
    obj: Survey.Question,
    convertToClass: string
  ): Survey.Question {
    if (!obj || !obj.parent || convertToClass == obj.getType()) return null;
    var newQuestion = Survey.Serializer.createClass(convertToClass);
    newQuestion.name = obj.name;
    newQuestion.fromJSON(obj.toJSON());
    var panel = <Survey.PanelModelBase>obj.parent;
    var index = panel.elements.indexOf(obj);
    panel.removeElement(obj);
    panel.addElement(newQuestion, index);
    newQuestion.onSurveyLoad();
    return <Survey.Question>newQuestion;
  }
}

function getAllQuestionTypes(className: string): Array<string> {
  var classes = Survey.Serializer.getChildrenClasses("question", true);
  var res = [];
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].name !== className) {
      res.push(classes[i].name);
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
