import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyTextEditor } from "./propertyModalEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions,
} from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { EditableObject } from "./editableObject";
import { ExpressionToDisplayText } from "../expressionToDisplayText";
import { SurveyPropertyDefaultValueEditor } from "./propertyDefaultValueEditor";
import * as editorLocalization from "../editorLocalization";

export interface IConditionEditorItemOwner {
  allConditionQuestions: any[];
  getQuestionValueJSON(questionName: string, operator: string): any;
  getQuestionByName(questionName): Survey.Question;
  onConditionItemChanged();
  isClassContains(
    qType: string,
    contains: Array<string>,
    notContains: Array<string>
  ): boolean;
  isWideMode: boolean;
  options: ISurveyObjectEditorOptions;
}

export class ConditionEditorItem {
  survey: Survey.Survey;
  constructor(private owner: IConditionEditorItemOwner) {
    var json = {
      showNavigationButtons: false,
      showPageTitles: false,
      showQuestionNumbers: "off",
      textUpdateMode: "onTyping",
      requiredText: "",
      questions: [
        {
          name: "conjunction",
          type: "dropdown",
          titleLocation: "hidden",
          showOptionsCaption: false,
          visible: false,
          choices: ["and", "or"],
        },
        {
          name: "questionName",
          type: "dropdown",
          titleLocation: "hidden",
          startWithNewLine: false,
          isRequired: true,
        },
        {
          name: "operator",
          type: "dropdown",
          titleLocation: "hidden",
          startWithNewLine: false,
          showOptionsCaption: false,
          isRequired: true,
          enableIf: "{questionName} notempty",
        },
      ],
    };
    this.survey = !!owner.options
      ? owner.options.createSurvey(json, "conditionEditor")
      : new Survey.Survey(json);
    this.survey.onValueChanged.add((sender, options) => {
      if (options.name == "questionName") {
        this.updateOperatorEnables();
        this.rebuildQuestionValue();
        this.setOperator();
      }
      if (options.name == "operator") {
        this.rebuildQuestionValueOnOperandChanging();
      }
      this.owner.onConditionItemChanged();
    });
    this.setupSurvey();
  }
  public get conjunction(): string {
    return this.getSurveyValue("conjunction");
  }
  public set conjunction(val: string) {
    this.setSurveyValue("conjunction", val);
  }
  public get questionName(): string {
    return this.getSurveyValue("questionName");
  }
  public set questionName(val: string) {
    this.setSurveyValue("questionName", val);
  }
  public get operator(): string {
    return this.getSurveyValue("operator");
  }
  public set operator(val: string) {
    this.setSurveyValue("operator", val);
  }
  public get value() {
    return this.getSurveyValue("questionValue");
  }
  public set value(val: any) {
    this.setSurveyValue("questionValue", val);
  }
  public get isFirst(): boolean {
    return !this.conjunctionQuestion.isVisible;
  }
  public set isFirst(val: boolean) {
    this.conjunctionQuestion.visible = !val;
    this.updateQuestionsWidth();
  }
  public get isReady(): boolean {
    return (
      !!this.questionName &&
      (!this.isValueRequried || !this.survey.isValueEmpty(this.value))
    );
  }
  public get conjunctionQuestion(): Survey.QuestionDropdown {
    return <Survey.QuestionDropdown>(
      this.survey.getQuestionByName("conjunction")
    );
  }
  public get nameQuestion(): Survey.QuestionDropdown {
    return <Survey.QuestionDropdown>(
      this.survey.getQuestionByName("questionName")
    );
  }
  public get operatorQuestion(): Survey.QuestionDropdown {
    return <Survey.QuestionDropdown>this.survey.getQuestionByName("operator");
  }
  public get valueQuestion(): Survey.Question {
    return this.survey.getQuestionByName("questionValue");
  }
  public toString(): string {
    if (!this.isReady) return "";
    var text =
      "{" +
      this.getQuestionValueByName(this.questionName) +
      "} " +
      this.getOperatorText();
    if (this.isValueRequried) {
      text += " " + this.getValueText();
    }
    return text;
  }
  private get isValueRequried() {
    var question = this.valueQuestion;
    return !!question && !question.isReadOnly;
  }
  private getLocString(name: string): string {
    return editorLocalization.editorLocalization.getString(name);
  }
  private setupSurvey() {
    var questionConjunction = this.conjunctionQuestion;
    questionConjunction.choices[0].text = this.getLocString("pe.and");
    questionConjunction.choices[1].text = this.getLocString("pe.or");
    var questionName = this.nameQuestion;
    questionName.choices = this.getChoices(this.owner.allConditionQuestions);
    questionName.optionsCaption = this.getLocString(
      "pe.conditionSelectQuestion"
    );
    this.operatorQuestion.choices = this.getChoices(
      SurveyPropertyEditorFactory.getOperators()
    );
    SurveyPropertyDefaultValueEditor.updateSurveyStyle(this.survey);
    this.rebuildQuestionValue();
    this.survey.data = { operator: "equal", conjunction: "and" };
    this.updateQuestionsWidth();
  }
  private getSurveyValue(name: string): any {
    return this.survey.getValue(name);
  }
  private setSurveyValue(name: string, val: any) {
    this.survey.setValue(name, val);
  }
  private rebuildQuestionValue() {
    this.survey.clearValue("questionValue");
    var json = this.owner.getQuestionValueJSON(
      this.questionName,
      this.operator
    );
    if (!json) {
      json = {
        type: "text",
      };
    }
    json.isRequired = true;
    SurveyPropertyDefaultValueEditor.updateQuestionJson(json);
    json.enableIf =
      "{questionName} notempty and {operator} != 'empty' and {operator} != 'notempty'";
    var newQuestion = Survey.Serializer.createClass(json.type);
    delete json.type;
    new Survey.JsonObject().toObject(json, newQuestion);
    if (!newQuestion) {
      newQuestion = Survey.Serializer.createClass("text", json);
    }
    var oldQuestion = this.valueQuestion;
    if (!!oldQuestion) {
      this.survey.pages[0].removeElement(oldQuestion);
    }
    newQuestion.name = "questionValue";
    newQuestion.title = this.getLocString("pe.conditionValueQuestionTitle");
    newQuestion.description = "";
    newQuestion.titleLocation = "default";
    if (this.isKeepQuestonValueOnSameLine(newQuestion.getType())) {
      newQuestion.titleLocation = "hidden";
      newQuestion.startWithNewLine = false;
    }
    this.survey.pages[0].addElement(newQuestion);
    this.updateQuestionsWidth();
  }
  private isKeepQuestonValueOnSameLine(questionType: string): boolean {
    if (!this.owner.isWideMode) return false;
    return this.owner.isClassContains(
      questionType,
      ["text", "dropdown", "rating", "boolean"],
      []
    );
  }
  private rebuildQuestionValueOnOperandChanging() {
    if (!this.questionName) return;
    var json = this.owner.getQuestionValueJSON(
      this.questionName,
      this.operator
    );
    var question = this.valueQuestion;
    if (!!question && question.isReadOnly) {
      this.value = null;
    }
    if (!question || (!!json && json.type == question.getType())) return;
    this.rebuildQuestionValue();
  }
  private updateQuestionsWidth() {
    var isWide = this.owner.isWideMode;
    var paddingRight = isWide ? "20px" : "5px";
    var isValueSameLine =
      !!this.valueQuestion && !this.valueQuestion.startWithNewLine;
    if (!!this.conjunctionQuestion) {
      this.conjunctionQuestion.width = this.isFirst
        ? ""
        : isWide
        ? "15%"
        : "25%";
      this.conjunctionQuestion.paddingRight = paddingRight;
    }
    this.nameQuestion.width = isWide
      ? this.isFirst
        ? "40%"
        : "25%"
      : this.isFirst
      ? "70%"
      : "45%";
    this.nameQuestion.paddingRight = paddingRight;
    this.operatorQuestion.width = isWide
      ? isValueSameLine
        ? "25%"
        : "60%"
      : "30%";
    this.operatorQuestion.paddingRight = paddingRight;
    if (!!this.valueQuestion) {
      this.valueQuestion.width = isValueSameLine ? "35%" : "";
      this.valueQuestion.paddingRight = paddingRight;
    }
  }
  private setOperator() {
    this.operator = "equal";
  }
  private getChoices(arr: any[]): Array<Survey.ItemValue> {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      res.push(new Survey.ItemValue(arr[i].name, arr[i].text));
    }
    return res;
  }
  private getQuestionValueByName(questionName: string): string {
    var question = this.owner.getQuestionByName(questionName);
    if (question && question.name != question.getValueName())
      return questionName.replace(question.name, question.getValueName());
    return questionName;
  }
  private getValueText(): string {
    var val = this.value;
    if (!val) return val;
    if (!Array.isArray(val)) return this.valToText(val);
    var res = "[";
    for (var i = 0; i < val.length; i++) {
      res += this.valToText(val[i]);
      if (i < val.length - 1) res += ", ";
    }
    res += "]";
    return res;
  }
  private valToText(val: any): string {
    if (val == "true" || val == "false") return val;
    if (!isNaN(val)) return val;
    if (val[0] == "[") return val.replace(/(?!^)(['])(?!$)/g, "\\$1");
    if (!this.isQuote(val[0])) val = "'" + val;
    if (!this.isQuote(val[val.length - 1])) val = val + "'";
    return val.replace(/(?!^)(['"])(?!$)/g, "\\$1");
  }
  private isQuote(ch: string): boolean {
    return ch == "'" || ch == '"';
  }
  private getOperatorText(): string {
    var op = this.operator;
    if (op == "equal") return "=";
    if (op == "notequal") return "<>";
    if (op == "greater") return ">";
    if (op == "less") return "<";
    if (op == "greaterorequal") return ">=";
    if (op == "lessorequal") return "<=";
    return op;
  }
  private updateOperatorEnables() {
    var res = [];
    if (!this.questionName) return res;
    var json = this.owner.getQuestionValueJSON(this.questionName, "equal");
    var qType = !!json ? json.type : null;
    var questionOperator = this.operatorQuestion;
    if (!questionOperator) return;
    var choices = questionOperator.choices;
    for (var i = 0; i < choices.length; i++) {
      choices[i].setIsEnabled(
        this.isOperatorVisible(qType, this.getOperatorType(choices[i].value))
      );
    }
  }
  private getOperatorType(operator: string): Array<string> {
    var operators = SurveyPropertyEditorFactory.getOperators();
    for (var i = 0; i < operators.length; i++) {
      if (operators[i].name == operator) return operators[i].types;
    }
    return [];
  }

  private isOperatorVisible(
    qType: string,
    operatorTypes: Array<string>
  ): boolean {
    if (!qType) return true;
    if (!operatorTypes || operatorTypes.length == 0) return true;
    var contains = [];
    var notContains = [];
    for (var i = 0; i < operatorTypes.length; i++) {
      let name = operatorTypes[i];
      if (name[0] == "!") {
        notContains.push(name.substr(1));
      } else {
        contains.push(name);
      }
    }
    return this.owner.isClassContains(qType, contains, notContains);
  }
}

export class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor
  implements IConditionEditorItemOwner {
  public showHelpText: boolean = true;
  public koTextValue: any;
  public onRemoveConditionClick: any;
  public onChangeViewClick: any;
  public onShowHideEditor: any;
  public koShowExpressionHeader: any;
  public koSetupText: any;
  public koShowTabs: any;
  public koActiveView: any;
  koEditorItems: ko.ObservableArray<ConditionEditorItem>;
  koCanParseExpression: any;
  koConditionDisplayText: any;
  koIsTextConditionValid: any;
  koIsEditorShowing: any;
  koIsWideMode: any;
  koIsEditorHidingDisabled: any;
  private addConditionQuestionsHash = {};
  private addConditionCalculatedValuesHash = {};
  constructor(
    property: Survey.JsonObjectProperty,
    private _type: string = "condition",
    public syntaxCheckMethodName: string = "createCondition"
  ) {
    super(property);
    this.koShowTabs = ko.observable(true);
    this.koShowExpressionHeader = ko.observable(true);
    this.koSetupText = ko.observable("");
    this.koActiveView = ko.observable("form");
    this.koTextValue = ko.observable();
    this.koEditorItems = ko.observableArray<ConditionEditorItem>([]);
    this.koCanParseExpression = ko.observable(true);
    this.koConditionDisplayText = ko.computed(function() {
      if (!!this.koValue()) return this.getConditionDisplayText();
      return this.getLocString("pe.expressionIsEmpty");
    }, this);
    this.koIsWideMode = ko.observable(false);
    this.koIsEditorShowing = ko.observable(false);
    this.koIsEditorHidingDisabled = ko.observable(false);
    this.onShowHideEditor = () => {
      if (this.koIsEditorHidingDisabled()) return;
      this.koIsEditorShowing(!this.koIsEditorShowing());
    };
    this.koIsTextConditionValid = ko.observable(true);
    var self = this;
    this.koCanParseExpression.subscribe(function(newValue) {
      if (newValue === false) {
        self.koActiveView("text");
      }
    });
    this.koIsEditorShowing.subscribe(function(newValue) {
      if (newValue === true) {
        self.buildEditorsItemsOnShowing();
      }
    });
    self.onRemoveConditionClick = function(item) {
      self.removeCondition(item);
    };
    self.onChangeViewClick = function(newView) {
      self.koActiveView(newView);
    };
    this.koTextValue.subscribe(function(newValue) {
      self.onkoTextValueChanged(newValue);
    });
  }
  public addCondition() {
    this.koEditorItems.push(new ConditionEditorItem(this));
    this.updateEditorItemsVisibilities();
  }
  public removeCondition(item: ConditionEditorItem) {
    this.koEditorItems.remove(item);
    if (this.koEditorItems().length == 0) {
      this.addCondition();
    }
    this.updateEditorItemsVisibilities();
    this.onConditionItemChanged();
  }
  public get addConditionText(): string {
    return this.getLocString("pe.addCondition");
  }
  public get removeConditionText(): string {
    return this.getLocString("pe.remove");
  }
  public beforeShowCore() {
    super.beforeShowCore();
    this.resetAllConditionQuestions();
    this.onkoTextValueChanged(this.koValue());
    if (!!this.options) {
      this.koShowTabs(this.options.allowEditExpressionsInTextEditor);
    }
  }
  protected beforeShowModal() {
    super.beforeShowModal();
    this.isEditorShowing = true;
    this.isEditorHidingDisabled = true;
  }
  public get isEditorShowing(): boolean {
    return this.koIsEditorShowing();
  }
  public set isEditorShowing(val: boolean) {
    this.koIsEditorShowing(val);
  }
  public get isEditorHidingDisabled(): boolean {
    return this.koIsEditorHidingDisabled();
  }
  public set isEditorHidingDisabled(val: boolean) {
    this.koIsEditorHidingDisabled(val);
  }
  public get isWideMode(): boolean {
    return this.koIsWideMode();
  }
  public set isWideMode(val: boolean) {
    this.koIsWideMode(val);
  }
  public get editorType(): string {
    return this._type;
  }
  public get availableQuestions(): any[] {
    var survey = this.getSurvey();
    return !!survey ? survey.getAllQuestions() : [];
  }
  protected getSurvey(): Survey.SurveyModel {
    return EditableObject.getSurvey(this.object);
  }
  private allConditionQuestionsValue: any[];
  private resetAllConditionQuestions() {
    this.addConditionQuestionsHash = {};
    this.addConditionCalculatedValuesHash = {};
    this.allConditionQuestionsValue = this.getConditionQuestions();
    this.allConditionQuestionsValue.sort(function(a, b) {
      return a.text.localeCompare(b.text);
    });
  }
  public get allConditionQuestions(): any[] {
    if (!!this.allConditionQuestionsValue)
      return this.allConditionQuestionsValue;
    this.resetAllConditionQuestions();
    return this.allConditionQuestionsValue;
  }
  public get isExpressionValid(): boolean {
    return this.koIsTextConditionValid() && !!this.koTextValue();
  }
  protected onValueChanged() {
    this.koTextValue(this.koValue());
  }
  private getConditionQuestions(): any[] {
    if (!this.object) return [];
    var res = [];
    var questions = this.availableQuestions;
    if (questions.length > 0) {
      for (var i = 0; i < questions.length; i++) {
        if (this.object == questions[i]) continue;
        questions[i].addConditionObjectsByContext(res, this.object);
      }
      this.addConditionQuestionsHash = {};
      this.addConditionCalculatedValuesHash = {};
      for (var i = 0; i < res.length; i++) {
        if (!this.options || !this.options.showTitlesInExpressions) {
          var name = res[i].name;
          var valueName = res[i].question.valueName;
          if (!!valueName && name.indexOf(valueName) == 0) {
            name = name.replace(valueName, res[i].question.name);
          }
          res[i].text = name;
        }
        this.addConditionQuestionsHash[res[i].name] = res[i].question;
      }
    }
    this.addCalculatedValues(res);
    !!this.options &&
      this.options.onConditionQuestionsGetListCallback(
        this.editablePropertyName,
        this.object,
        this,
        res
      );
    return res;
  }
  public isClassContains(
    qType: string,
    contains: Array<string>,
    notContains: Array<string>
  ): boolean {
    var classInfo = Survey.Serializer.findClass(qType);
    while (!!classInfo) {
      if (contains.indexOf(classInfo.name) > -1) return true;
      if (notContains.indexOf(classInfo.name) > -1) return false;
      classInfo = !!classInfo.parentName
        ? Survey.Serializer.findClass(classInfo.parentName)
        : null;
    }
    return contains.length == 0;
  }
  private addCalculatedValues(res: Array<any>) {
    var survey = this.getSurvey();
    if (!survey) return;
    var values = survey.calculatedValues;
    for (var i = 0; i < values.length; i++) {
      var name = values[i].name;
      this.addConditionCalculatedValuesHash[name] = values[i];
      res.push({ name: name, text: name, question: null });
    }
  }
  public getQuestionByName(questionName: string): Survey.Question {
    if (!this.getSurvey()) return null;
    return this.addConditionQuestionsHash[questionName];
  }
  public getQuestionValueJSON(questionName: string, operator: string): any {
    return this.getQuestionConditionJson(questionName, operator, true);
  }
  private getQuestionConditionJson(
    questionName: string,
    operator: string,
    convertOnAnyOf: boolean = false
  ): any {
    var path = "";
    var question = this.getQuestionByName(questionName);
    if (!question) return null;
    if (questionName.indexOf(question.getValueName()) == 0) {
      path = questionName.substr(question.getValueName().length);
    }
    if (questionName.indexOf("row.") == 0) {
      path = questionName.substr("row.".length);
    }
    if (!!path && path[0] == ".") {
      path = path.substr(1);
    }
    var json =
      question && question.getConditionJson
        ? question.getConditionJson(operator, path)
        : null;
    if (!!json && json.type == "radiogroup") {
      json.type = "dropdown";
    }
    if (!!json && operator == "anyof" && convertOnAnyOf) {
      if (!this.isClassContains(json.type, ["checkbox"], [])) {
        json.type = "checkbox";
      }
    }
    return !!json ? json : null;
  }
  private canShowValueByOperator(operator: string) {
    return operator != "empty" && operator != "notempty";
  }
  public get hasAceEditor(): boolean {
    return (
      typeof ace !== "undefined" &&
      typeof ace.require("ace/ext/language_tools") !== "undefined"
    );
  }
  protected onkoTextValueChanged(newValue) {
    if (!this.isBeforeShowCalled || this.isConditionItemsBuilding) return;
    var isValid = true;
    var operand = null;
    if (!!newValue) {
      var conditionParser = new Survey.ConditionsParser();
      operand = conditionParser.parseExpression(newValue);
      isValid = !!operand;
    }
    this.koIsTextConditionValid(isValid);
    if (isValid) {
      this.koValue(newValue);
    }
    this.rebuildEditorItems(operand, isValid);
  }
  private buildEditorsItemsOnShowing() {
    var operand = null;
    var conditionText = this.koValue();
    if (!!conditionText) {
      var conditionParser = new Survey.ConditionsParser();
      operand = conditionParser.parseExpression(conditionText);
    }
    this.rebuildEditorItems(operand, true);
  }
  private isConditionItemsBuilding: boolean = false;
  public onConditionItemChanged() {
    if (this.isConditionItemsBuilding) return;
    var text = "";
    var items = this.koEditorItems();
    for (var i = 0; i < items.length; i++) {
      var itemText = items[i].toString();
      if (!itemText) continue;
      if (!!text) {
        text += " " + items[i].conjunction + " ";
      }
      text += itemText;
    }
    this.isConditionItemsBuilding = true;
    this.koValue(text);
    this.isConditionItemsBuilding = false;
  }
  private rebuildEditorItems(operand: Survey.Operand, isValid: boolean) {
    if (!this.isEditorShowing) return;
    if (this.isConditionItemsBuilding) return;
    if (!isValid) {
      this.koEditorItems([]);
      this.koCanParseExpression(false);
      return;
    }
    if (!operand) {
      this.koEditorItems([]);
    } else {
      this.isConditionItemsBuilding = true;
      var items = this.buildEditorItems(operand);
      this.isConditionItemsBuilding = false;
      this.koEditorItems(items);
    }
    this.koCanParseExpression(this.koEditorItems().length > 0 || !operand);
    if (this.koEditorItems().length == 0 && !operand) {
      this.koEditorItems([new ConditionEditorItem(this)]);
    }
    this.updateEditorItemsVisibilities();
  }
  private updateEditorItemsVisibilities() {
    var items = this.koEditorItems();
    for (var i = 0; i < items.length; i++) {
      items[i].isFirst = i == 0;
    }
  }
  private buildEditorItems(
    operand: Survey.Operand
  ): Array<ConditionEditorItem> {
    var res = [];
    if (!this.buildEditorItemsCore(operand, res, "")) {
      res = [];
    }
    return res;
  }
  private buildEditorItemsCore(
    operand: Survey.Operand,
    res: Array<ConditionEditorItem>,
    parentConjunction: string
  ): boolean {
    if (operand.getType() == "unary")
      return this.buildEditorItemsAddUnaryOperand(
        <Survey.UnaryOperand>operand,
        res
      );
    if (operand.getType() !== "binary") return false;
    var op = <Survey.BinaryOperand>operand;
    if (op.isArithmetic && !op.isConjunction) return false;
    if (op.isConjunction)
      return this.buildEditorItemsAddConjunction(op, res, parentConjunction);
    return this.buildEditorItemsAddBinaryOperand(op, res);
  }
  private buildEditorItemsAddConjunction(
    op: Survey.BinaryOperand,
    res: Array<ConditionEditorItem>,
    parentConjunction: string
  ): boolean {
    var conjunction = op.conjunction;
    if (
      conjunction == "or" &&
      !!parentConjunction &&
      parentConjunction != conjunction
    )
      return false;
    if (!this.buildEditorItemsCore(op.leftOperand, res, conjunction))
      return false;
    var conjunctionIndex = res.length;
    if (!this.buildEditorItemsCore(op.rightOperand, res, conjunction))
      return false;
    res[conjunctionIndex].conjunction = op.conjunction;
    return true;
  }
  private buildEditorItemsAddBinaryOperand(
    op: Survey.BinaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var variableOperand = <Survey.Variable>(
      this.getOperandByType(op, "variable")
    );
    var arrayValue = this.getArrayValueFromOperand(op);
    var constOperand = !arrayValue
      ? <Survey.Const>this.getOperandByType(op, "const")
      : null;
    if (
      !variableOperand ||
      (!constOperand && !arrayValue && this.canShowValueByOperator(op.operator))
    )
      return false;
    if (!this.isVariableInSurvey(variableOperand.variable)) return false;
    var item = new ConditionEditorItem(this);
    item.questionName = variableOperand.variable;
    item.operator =
      op.leftOperand !== variableOperand
        ? this.getOppositeOperator(op.operator)
        : op.operator;
    if (!!arrayValue) {
      item.value = arrayValue;
    }
    if (!!constOperand) {
      item.value = constOperand.correctValue;
    }
    res.push(item);
    return true;
  }
  private isVariableInSurvey(variable: string): boolean {
    if (!this.getSurvey()) return false;
    if (this.getQuestionByName(variable)) return true;
    return !!this.addConditionCalculatedValuesHash[variable];
  }
  private getArrayValueFromOperand(op: Survey.BinaryOperand): Array<any> {
    var arrayOperand = <Survey.ArrayOperand>this.getOperandByType(op, "array");
    if (!arrayOperand || !arrayOperand.values) return null;
    var valuesOperand = arrayOperand.values;
    if (!Array.isArray(valuesOperand) || valuesOperand.length == 0) return null;
    var res = [];
    for (var i = 0; i < valuesOperand.length; i++) {
      var opConst = valuesOperand[i];
      if (!opConst) continue;
      if (opConst.getType() != "const") return null;
      res.push((<Survey.Const>opConst).correctValue);
    }
    if (res.length == 0) return null;
    return res;
  }
  private buildEditorItemsAddUnaryOperand(
    op: Survey.UnaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var operator = op.operator;
    if (operator !== "empty" && operator != "notempty") return false;
    var operand = op.expression;
    if (operand == null || operand.getType() != "variable") return false;
    var questionName = (<Survey.Variable>operand).variable;
    if (!this.isVariableInSurvey(questionName)) return false;
    var item = new ConditionEditorItem(this);
    item.questionName = questionName;
    item.operator = operator;
    res.push(item);
    return true;
  }
  private getOppositeOperator(operator: string): string {
    if (operator == "less") return "greater";
    if (operator == "greater") return "less";
    if (operator == "lessorequal") return "greaterorequal";
    if (operator == "greaterorequal") return "lessorequal";
    return operator;
  }
  private getOperandByType(
    op: Survey.BinaryOperand,
    opType: string
  ): Survey.Operand {
    if (
      op.leftOperand.getType() !== opType &&
      op.rightOperand.getType() !== opType
    )
      return null;
    if (
      op.leftOperand.getType() == opType &&
      op.rightOperand.getType() == opType
    )
      return null;
    return op.leftOperand.getType() == opType
      ? op.leftOperand
      : op.rightOperand;
  }
  private getConditionDisplayText(): string {
    var value = this.koIsTextConditionValid()
      ? this.koTextValue()
      : this.koValue();
    return new ExpressionToDisplayText(
      this.getSurvey(),
      this.options
    ).toDisplayText(value);
  }
}

SurveyPropertyEditorFactory.registerEditor("condition", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "condition",
    "createCondition"
  );
});
SurveyPropertyEditorFactory.registerEditor("expression", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyConditionEditor(
    property,
    "expression",
    "parseExpression"
  );
});

SurveyPropertyEditorFactory.registerTypeForCellEditing("expression", "string");
SurveyPropertyEditorFactory.registerTypeForCellEditing("condition", "string");

var operations = [
  {
    value: "and",
    title: "logical 'and' operator",
  },
  {
    value: "&&",
    title: "logical 'and' operator",
  },
  {
    value: "or",
    title: "logical 'or' operator",
  },
  {
    value: "||",
    title: "logical 'or' operator",
  },
  {
    value: "empty",
    title: "returns true if the left operand is empty	{questionName} empty",
  },
  {
    value: "notempty",
    title:
      "returns true if the left operand is not empty	{questionName} notempty",
  },
  {
    value: "=",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124",
  },
  {
    value: "==",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124",
  },
  {
    value: "equal",
    title:
      "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124",
  },
  {
    value: "<>",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124",
  },
  {
    value: "!=",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124",
  },
  {
    value: "notequal",
    title:
      "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124",
  },
  {
    value: ">",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'",
  },
  {
    value: "greater",
    title:
      "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'",
  },
  {
    value: "<",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'",
  },
  {
    value: "less",
    title:
      "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'",
  },
  {
    value: ">=",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'",
  },
  {
    value: "greaterorequal",
    title:
      "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'",
  },
  {
    value: "<=",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'",
  },
  {
    value: "lessorequal",
    title:
      "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'",
  },
  {
    value: "contains",
    title:
      "return true if the left operand is an array and it contains a value of the second operand	{questionName} contains 'a'",
  },
  {
    value: "notcontains",
    title:
      "return true if the left operand is an array and it does not contain a value of the second operand",
  },
  {
    value: "anyof",
    title:
      "return true if the left operand is an array and it contains any value of the second array operand",
  },
  {
    value: "allof",
    title:
      "return true if the left operand is an array and it contains all values of the second array operand",
  },
];

const createAnnotations = (
  condition: string,
  syntaxCheckMethodName: string
): AceAjax.Annotation[] => {
  condition = condition || "";
  var annotations = new Array<AceAjax.Annotation>();
  var conditionParser: any = new Survey.ConditionsParser();
  conditionParser[syntaxCheckMethodName](condition);
  if (!!condition && conditionParser.error) {
    var toErrorSubstring = condition.substring(0, conditionParser.error.at);
    var column = toErrorSubstring.length - toErrorSubstring.lastIndexOf("\n");
    var annotation: AceAjax.Annotation = {
      row: condition.match(/\n/g) ? condition.match(/\n/g).length : 0,
      column: column,
      text: conditionParser.error.code + " (" + column + ")",
      type: "error",
    };
    annotations.push(annotation);
  }
  return annotations;
};

var ID_REGEXP = /[a-zA-Z_0-9{\*\/\<\>\=\!\$\.\-\u00A2-\uFFFF]/;

export function doGetCompletions(
  prevIdentifier: string,
  prefix: string,
  config: { question: Survey.Question; questions: Survey.Question[] },
  completer = null
) {
  var completions = [];
  var currentQuestion: Survey.Question = config.question;
  var usableQuestions = (config.questions || []).filter(
    (q) => q !== currentQuestion
  );
  if (
    !!usableQuestions ||
    currentQuestion instanceof Survey.MatrixDropdownColumn ||
    currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
  ) {
    if (
      prevIdentifier === "row" &&
      currentQuestion instanceof Survey.MatrixDropdownColumn
    ) {
      completions = currentQuestion.colOwner["columns"]
        .filter((e) => e.name !== currentQuestion.name)
        .map((column) => {
          return {
            name: "",
            value: "{row." + column.name + "}",
            some: "",
            meta: column.title,
            identifierRegex: ID_REGEXP,
          };
        });
    } else if (
      prevIdentifier === "panel" &&
      currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
    ) {
      var panel: Survey.PanelModel = currentQuestion.data.panel;
      completions = panel.elements
        .filter((e) => e.name !== currentQuestion.name)
        .map((element) => {
          return {
            name: "",
            value: "{panel." + element.name + "}",
            some: "",
            meta: element.name,
            identifierRegex: ID_REGEXP,
          };
        });
    } else {
      var operationsFiltered = operations.filter(
        (op) => !prefix || op.value.indexOf(prefix) !== -1
      );
      var questionsFiltered = usableQuestions.filter(
        (op) => !prefix || op.name.indexOf(prefix) !== -1
      );
      if (currentQuestion instanceof Survey.MatrixDropdownColumn) {
        completions.push({
          name: "",
          value: "{row.",
          some: "",
          meta: editorLocalization.editorLocalization.getString(
            editorLocalization.defaultStrings.pe.aceEditorRowTitle
          ),
          identifierRegex: ID_REGEXP,
        });
      } else if (
        !!currentQuestion &&
        currentQuestion.data instanceof Survey.QuestionPanelDynamicItem
      ) {
        completions.push({
          name: "",
          value: "{panel.",
          some: "",
          meta: editorLocalization.editorLocalization.getString(
            editorLocalization.defaultStrings.pe.aceEditorPanelTitle
          ),
          identifierRegex: ID_REGEXP,
        });
      }
      completions = completions
        .concat(
          questionsFiltered.map((q) => {
            return {
              completer: completer,
              name: "",
              value: "{" + q.name + "}",
              some: "",
              meta: q.title,
              identifierRegex: ID_REGEXP,
            };
          })
        )
        .concat(
          operationsFiltered.map((op) => {
            return {
              name: "",
              value: op.value,
              some: "",
              meta: op.title,
              identifierRegex: ID_REGEXP,
            };
          })
        );
    }
  }
  return completions;
}

export function insertMatch(editor, data) {
  if (editor.completer.completions.filterText) {
    var allRanges = editor.selection.getAllRanges();
    for (
      var rangeIndex = 0, range;
      (range = allRanges[rangeIndex]);
      rangeIndex++
    ) {
      range.start.column -= editor.completer.completions.filterText.length;
      var rangeText = editor.session.getTextRange(range);
      if (rangeText.indexOf("{") !== 0) {
        var extRange = range.clone();
        extRange.start.column--;
        if (editor.session.getTextRange(extRange).indexOf("{") === 0) {
          range = extRange;
        }
      }
      editor.session.remove(range);
    }
  }
  editor.execCommand("insertstring", data.value || data);
}

ko.bindingHandlers.aceEditor = {
  init: function(element, options) {
    var configs = options();
    var langTools = ace.require("ace/ext/language_tools");
    var langUtils = ace.require("ace/autocomplete/util");
    var editor = ace.edit(element);
    var objectEditor: SurveyPropertyConditionEditor = configs.editor;
    var isUpdating = false;

    editor.setOption("useWorker", false);

    editor.getSession().on("change", function() {
      var errors = createAnnotations(
        editor.getValue(),
        objectEditor.syntaxCheckMethodName
      );
      isUpdating = true;
      objectEditor.koTextValue(editor.getValue());
      isUpdating = false;
      //   objectEditor.koHasError(errors.length > 0);
      //   if (errors.length > 0) {
      //     objectEditor.koErrorText(errors[0].text);
      //   }
      editor.getSession().setAnnotations(errors);
    });
    editor.on("focus", function() {
      editor.setReadOnly(objectEditor.readOnly());
    });
    var updateCallback = () => {
      if (!isUpdating) {
        editor.setValue(objectEditor.koTextValue() || "");
      }
    };
    var valueSubscription = objectEditor.koTextValue.subscribe(updateCallback);
    updateCallback();

    var completer = {
      identifierRegexps: [ID_REGEXP],
      insertMatch: insertMatch,
      getCompletions: (editor, session, pos, prefix, callback) => {
        var prevIdentifier = langUtils.retrievePrecedingIdentifier(
          session.getLine(pos.row),
          pos.column - 1
        );
        var completions = doGetCompletions(
          prevIdentifier,
          prefix,
          configs,
          completer
        );
        callback(null, completions);
      },
      getDocTooltip: function(item) {
        item.docHTML =
          "<div style='max-width: 300px; white-space: normal;'>" +
          item.meta +
          "</div>";
      },
    };
    langTools.setCompleters([completer]);
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      editor.destroy();
      valueSubscription.dispose();
    });

    editor.focus();
  },
};
