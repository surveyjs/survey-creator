import { QuestionFactory, Serializer, PanelModelBase, Question, Helpers, CustomWidgetCollection } from "survey-core";
import { QuestionConvertMode, settings } from "./creator-settings";

export class QuestionConverter {
  private static convertInfoValue: any;
  public static get convertInfo() : any {
    if (!QuestionConverter.convertInfoValue) {
      QuestionConverter.convertInfoValue = {};
      QuestionConverter.createDefaultQuestionConverterItems();
    }
    return QuestionConverter.convertInfoValue;
  }
  private static createDefaultQuestionConverterItems() {
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
  public static addConvertInfo(className: string, convertToClassName: string) {
    if (!QuestionConverter.convertInfo[className]) {
      QuestionConverter.convertInfo[className] = [];
    }
    QuestionConverter.convertInfo[className].push(convertToClassName);
  }
  private static getConvertableClasses(className: string): Array<string> {
    let res = QuestionConverter.convertInfo[className];
    if (!!Array.isArray(res) && res.indexOf(className) < 0) {
      res.unshift(className);
    }
    return res;
  }
  public static getConvertToClasses(
    className: string,
    availableTypes: Array<string> = null, includeCurrent: boolean = false
  ): Array<string> {
    var res = settings.questionConvertMode == QuestionConvertMode.AllTypes
      ? getAllQuestionTypes(className, includeCurrent)
      : QuestionConverter.getConvertableClasses(className);
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
  public static getObjJSON(obj: Question, defaultObjJSON: any): any {
    const res = obj.toJSON();
    if (defaultObjJSON) {
      for (let key in defaultObjJSON) {
        if (res[key] && Helpers.isTwoValueEquals(res[key], defaultObjJSON[key])) {
          delete res[key];
        }
      }
    }
    return res;
  }
  public static convertObject(obj: Question, convertToClass: string, objJSON: any, defaultJSON: any = null, jsonToSetAfter = null): Question {
    if (!obj || !obj.parent || convertToClass == obj.getType() && !defaultJSON) return null;
    let newQuestion = !defaultJSON ? QuestionFactory.Instance.createQuestion(convertToClass, obj.name) : undefined;
    if (!newQuestion) {
      newQuestion = Serializer.createClass(convertToClass, {});
    }
    newQuestion.name = obj.name;
    const sourceJSON = defaultJSON;

    const json = sourceJSON ? Helpers.createCopy(sourceJSON) : newQuestion.toJSON();
    //const qJson = QuestionConverter.getObjJSON(obj, objJSON);
    const qJson = objJSON || {};
    for (let key in qJson) {
      json[key] = qJson[key];
    }
    if (jsonToSetAfter) {
      for (let key in jsonToSetAfter) {
        json[key] = jsonToSetAfter[key];
      }
    }
    QuestionConverter.updateJSON(json, convertToClass, obj.getType());
    newQuestion.fromJSON(json);
    QuestionConverter.removeValidators(newQuestion);
    let panel = <PanelModelBase>obj.parent;
    let index = panel.elements.indexOf(obj);
    (<any>panel).isConverting = true;
    var isSameLine = index + 1 < panel.elements.length ? panel.elements[index + 1].startWithNewLine === false : false;
    panel.removeElement(obj);
    panel.addElement(newQuestion, index);
    if (isSameLine) {
      panel.elements[index + 1].startWithNewLine = false;
    }
    delete (<any>panel).isConverting;
    newQuestion.onSurveyLoad();
    return newQuestion;
  }
  private static updateJSON(json: any, convertToClass: string, convertFromClass: string): void {
    QuestionConverter.updateJSONForRating(json, convertToClass);
    QuestionConverter.updateJSONForMatrices(json, convertToClass, convertFromClass);
    QuestionConverter.updateJSONForPanels(json, convertToClass, convertFromClass);
    QuestionConverter.updateJSONForBarrating(json, convertToClass);
  }
  private static updateJSONForMatrices(json: any, convertToClass: string, convertFromClass: string): void {
    if (Serializer.isDescendantOf(convertToClass, "matrix") &&
       Serializer.isDescendantOf(convertFromClass, "matrixdropdownbase") &&
       json.columns) {
      let num = 0;
      json.columns = json.columns.map(col => {
        const name = col.name ? col.name : (typeof col === "string" ? col : "col" + (num ++));
        return col.title ? { value: name, text: col.title } : name;
      });
    }
    if (Serializer.isDescendantOf(convertToClass, "matrixdropdownbase") &&
       Serializer.isDescendantOf(convertFromClass, "matrix") &&
       json.columns) {
      json.columns = json.columns.map(col => <any>{
        name: QuestionConverter.getColumnName(col.name || col.value || col), title: col.text
      });
    }
  }
  private static getColumnName(val: any): string {
    if (Helpers.isNumber(val)) return "col" + val;
    return val;
  }
  private static updateJSONForRating(json: any, convertToClass: string): void {
    if (convertToClass === "rating" && json.choices) {
      json.rateValues = json.choices;
    }
    if (!!json.rateValues && !Serializer.isDescendantOf(convertToClass, "matrixdropdownbase")) {
      json.choices = json.rateValues;
    }
  }
  private static updateJSONForBarrating(json: any, convertToClass: string): void {
    if (convertToClass === "barrating") {
      json.choices = [1, 2, 3, 4, 5];
    }
  }
  private static updateJSONForPanels(json: any, convertToClass: string, convertFromClass: string): void {
    if (Serializer.isDescendantOf(convertToClass, "paneldynamic") &&
       Serializer.isDescendantOf(convertFromClass, "panel") &&
       json.elements) {
      json.templateElements = json.elements;
      delete json.elements;
    }
    if (Serializer.isDescendantOf(convertToClass, "panel") &&
       Serializer.isDescendantOf(convertFromClass, "paneldynamic") &&
       json.templateElements) {
      json.elements = json.templateElements;
      delete json.templateElements;
    }
  }
  private static removeValidators(question: Question): void {
    const validators = question.validators;
    if (!Array.isArray(validators) || validators.length === 0) return;
    const supported = question.getSupportedValidators();
    for (var i = validators.length - 1; i >= 0; i --) {
      const valType = validators[i].getType().replace("validator", "");
      if (supported.indexOf(valType) < 0) {
        validators.splice(i, 1);
      }
    }
  }
}
function getAllQuestionTypes(className: string, includeCurrent: boolean = false): Array<string> {
  var classes = Serializer.getChildrenClasses("question", true);
  var res = [];
  for (var i = 0; i < classes.length; i++) {
    if (includeCurrent || classes[i].name !== className) {
      res.push(classes[i].name);
    }
  }
  if (includeCurrent || className !== "panel") {
    res.push("panel");
  }
  const widgets = CustomWidgetCollection.Instance.widgets;
  for (var i = 0; i < widgets.length; i ++) {
    if (includeCurrent || widgets[i].name !== className) {
      res.push(widgets[i].name);
    }
  }
  return res;
}