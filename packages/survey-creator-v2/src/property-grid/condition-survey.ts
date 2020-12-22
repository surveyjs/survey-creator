import {
  SurveyModel,
  ConditionsParser,
  QuestionPanelDynamicModel,
  Operand,
  UnaryOperand,
  BinaryOperand,
  Variable,
  Const,
  ArrayOperand,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
} from "survey-knockout";

export class ConditionEditorItem {
  public conjunction: string;
  public questionName: string;
  public operator: string;
  public value: any;
}
export class SurveyConditionEditorItem extends ConditionEditorItem {
  public constructor(public survey: SurveyModel) {
    super();
  }
  public getOperatorText(): string {
    var op = this.operator;
    if (op == "equal") return "=";
    if (op == "notequal") return "<>";
    if (op == "greater") return ">";
    if (op == "less") return "<";
    if (op == "greaterorequal") return ">=";
    if (op == "lessorequal") return "<=";
    return op;
  }
  public getValueText(): string {
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
  public get isValueRequired(): boolean {
    return this.operator !== "empty" && this.operator !== "notempty";
  }
  public get isReady(): boolean {
    return (
      !!this.questionName &&
      (!this.isValueRequired || !Helpers.isValueEmpty(this.value))
    );
  }
  public toExpression(): string {
    var text =
      "{" + this.getQuestionValueByName() + "} " + this.getOperatorText();
    if (this.isValueRequired) {
      text += " " + this.getValueText();
    }
    return text;
  }
  private getQuestionValueByName(): string {
    var question = this.survey.getQuestionByName(this.questionName);
    if (
      question &&
      question.name != question.getValueName() &&
      this.questionName != question.getValueName()
    ) {
      return this.questionName.replace(question.name, question.getValueName());
    }
    return this.questionName;
  }
  private valToText(val: any): string {
    if (val == "true" || val == "false") return val;
    if (this.isNumeric(val)) return val;
    if (val[0] == "[") return val.replace(/(?!^)(['])(?!$)/g, "\\$1");
    if (!this.isQuote(val[0])) val = "'" + val;
    if (!this.isQuote(val[val.length - 1])) val = val + "'";
    return val.replace(/(?!^)(['"])(?!$)/g, "\\$1");
  }
  private isNumeric(val: any): boolean {
    if (
      typeof val === "string" &&
      val.length > 1 &&
      val[0] === "0" &&
      val[1] !== "x"
    )
      return false;
    return !isNaN(val);
  }
  private isQuote(ch: string): boolean {
    return ch == "'" || ch == '"';
  }
}

export class ConditionEditorItemsBuilder {
  public constructor(private hasValue: (name: string) => boolean = null) {}
  public build(text: string): Array<ConditionEditorItem> {
    if (!text) return [];
    var operand = null;
    operand = new ConditionsParser().parseExpression(text);
    if (!operand) return [];
    return this.buildEditorItems(operand);
  }
  private buildEditorItems(operand: Operand): Array<ConditionEditorItem> {
    var res = [];
    if (!this.buildEditorItemsCore(operand, res, "")) {
      res = [];
    }
    return res;
  }
  private buildEditorItemsCore(
    operand: Operand,
    res: Array<ConditionEditorItem>,
    parentConjunction: string
  ): boolean {
    if (operand.getType() == "unary")
      return this.buildEditorItemsAddUnaryOperand(<UnaryOperand>operand, res);
    if (operand.getType() !== "binary") return false;
    var op = <BinaryOperand>operand;
    if (op.isArithmetic && !op.isConjunction) return false;
    if (op.isConjunction)
      return this.buildEditorItemsAddConjunction(op, res, parentConjunction);
    return this.buildEditorItemsAddBinaryOperand(op, res);
  }
  private buildEditorItemsAddConjunction(
    op: BinaryOperand,
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
    op: BinaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var variableOperand = <Variable>this.getOperandByType(op, "variable");
    var arrayValue = this.getArrayValueFromOperand(op);
    var constOperand = !arrayValue
      ? <Const>this.getOperandByType(op, "const")
      : null;
    if (
      !variableOperand ||
      (!constOperand && !arrayValue && this.canShowValueByOperator(op.operator))
    )
      return false;
    if (!this.isVariableInSurvey(variableOperand.variable)) return false;
    var item = new ConditionEditorItem();
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
    return !!this.hasValue ? this.hasValue(variable) : true;
  }
  private getArrayValueFromOperand(op: BinaryOperand): Array<any> {
    var arrayOperand = <ArrayOperand>this.getOperandByType(op, "array");
    if (!arrayOperand || !arrayOperand.values) return null;
    var valuesOperand = arrayOperand.values;
    if (!Array.isArray(valuesOperand) || valuesOperand.length == 0) return null;
    var res = [];
    for (var i = 0; i < valuesOperand.length; i++) {
      var opConst = valuesOperand[i];
      if (!opConst) continue;
      if (opConst.getType() != "const") return null;
      res.push((<Const>opConst).correctValue);
    }
    if (res.length == 0) return null;
    return res;
  }
  private buildEditorItemsAddUnaryOperand(
    op: UnaryOperand,
    res: Array<ConditionEditorItem>
  ): boolean {
    var operator = op.operator;
    if (operator !== "empty" && operator != "notempty") return false;
    var operand = op.expression;
    if (operand == null || operand.getType() != "variable") return false;
    var questionName = (<Variable>operand).variable;
    if (!this.isVariableInSurvey(questionName)) return false;
    var item = new ConditionEditorItem();
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
  private getOperandByType(op: BinaryOperand, opType: string): Operand {
    if (!op.rightOperand) return null;
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
  private canShowValueByOperator(operator: string) {
    return operator != "empty" && operator != "notempty";
  }
}

export class ConditionEditorBase {
  private surveyValue: SurveyModel;
  private objectValue: Base;
  private editSurveyValue: SurveyModel;
  private panelValue: QuestionPanelDynamicModel;
  private addConditionQuestionsHash = {};
  private addConditionCalculatedValuesHash = {};
  public allConditionQuestions: Array<ItemValue>;

  constructor(survey: SurveyModel, object: Base = null) {
    this.surveyValue = survey;
    this.objectValue = object;
    this.editSurveyValue = this.createSurvey({
      showNavigationButtons: false,
      showPageTitles: false,
      showQuestionNumbers: "off",
      textUpdateMode: "onTyping",
      requiredText: "",
      elements: [
        {
          type: "paneldynamic",
          name: "panel",
          templateElements: [
            {
              name: "conjunction",
              type: "dropdown",
              titleLocation: "hidden",
              showOptionsCaption: false,
              visibleIf: "{rowIndex} > 1",
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
              enableIf: "{panel.questionName} notempty",
            },
            {
              name: "questionValue",
              type: "text",
              visible: false,
            },
          ],
        },
      ],
    });
    this.panelValue = <QuestionPanelDynamicModel>(
      this.editSurvey.getQuestionByName("panel")
    );
    this.allConditionQuestions = this.createAllConditionQuestions();
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      this.onPanelAdded();
    });
  }
  private onPanelAdded() {
    this.setItemToPanel(
      new ConditionEditorItem(),
      this.panel.panels[this.panel.panels.length - 1]
    );
  }
  public get text(): string {
    return this.getText();
  }
  public set text(val: string) {
    var items = new ConditionEditorItemsBuilder().build(val);
    this.buildPanels(items);
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public get object(): Base {
    return this.objectValue;
  }
  public get editSurvey(): SurveyModel {
    return this.editSurveyValue;
  }
  public get panel(): QuestionPanelDynamicModel {
    return this.panelValue;
  }
  public get isReady(): boolean {
    for (var i = 0; i < this.panel.panels.length; i++) {
      if (!this.createEditorItemFromPanel(this.panel.panels[i]).isReady)
        return false;
    }
    return true;
  }
  protected createSurvey(json: any): SurveyModel {
    return new SurveyModel(json);
  }
  private buildPanels(items: Array<ConditionEditorItem>) {
    this.panel.panelCount = items.length > 0 ? items.length : 1;
    for (var i = 0; i < items.length; i++) {
      this.setItemToPanel(items[i], this.panel.panels[i]);
    }
  }
  private setItemToPanel(item: ConditionEditorItem, panel: PanelModel) {
    panel.getQuestionByName("conjunction").value = item.conjunction;
    panel.getQuestionByName(
      "questionName"
    ).choices = this.allConditionQuestions;
    panel.getQuestionByName("questionName").value = item.questionName;
    panel.getQuestionByName("operator").value = item.operator;
    panel.getQuestionByName("questionValue").value = item.value;
  }

  private getText(): string {
    var res = "";
    var items = [];
    for (var i = 0; i < this.panel.panels.length; i++) {
      items.push(this.createEditorItemFromPanel(this.panel.panels[i]));
    }
    for (var i = 0; i < items.length; i++) {
      if (!items[i].isReady) return "";
      if (!!res) {
        res += " " + items[i].conjunction + " ";
      }
      res += items[i].toExpression();
    }
    return res;
  }
  private createEditorItemFromPanel(
    panel: PanelModel
  ): SurveyConditionEditorItem {
    var item = new SurveyConditionEditorItem(this.survey);
    item.conjunction = panel.getQuestionByName("conjunction").value;
    item.questionName = panel.getQuestionByName("questionName").value;
    item.operator = panel.getQuestionByName("operator").value;
    if (!!panel.getQuestionByName("questionValue")) {
      item.value = panel.getQuestionByName("questionValue").value;
    }
    return item;
  }
  private createAllConditionQuestions(): Array<ItemValue> {
    if (!this.survey) return [];
    var res = [];
    var questions = this.survey.getAllQuestions();
    if (questions.length > 0) {
      for (var i = 0; i < questions.length; i++) {
        if (this.object == questions[i]) continue;
        questions[i].addConditionObjectsByContext(res, this.object);
      }
      for (var i = 0; i < res.length; i++) {
        res[i].value = name;
        /* TODO
        if (!this.options || !this.options.showTitlesInExpressions) {
          var name = res[i].name;
          var valueName = res[i].question.valueName;
          if (!!valueName && name.indexOf(valueName) == 0) {
            name = name.replace(valueName, res[i].question.name);
          }
          res[i].text = name;
        }
        */
        this.addConditionQuestionsHash[res[i].name] = res[i].question;
      }
    }
    var values = this.survey.calculatedValues;
    for (var i = 0; i < values.length; i++) {
      var name = values[i].name;
      this.addConditionCalculatedValuesHash[name] = values[i];
      res.push({ value: name, text: name, question: null });
    }
    /** TODO
    !!this.options &&
      this.options.onConditionQuestionsGetListCallback(
        this.editablePropertyName,
        this.object,
        this,
        res
      );
      */
    return res;
  }
}
