import * as Survey from "survey-core";
import { editorLocalization } from "./editorLocalization";
import { wrapTextByCurlyBraces } from "./utils/creator-utils";

export class ExpressionToDisplayText {
  private currentQuestion: Survey.Question;
  private showTitles: boolean;
  constructor(public survey: Survey.SurveyModel, private options: any = null) { }
  public toDisplayText(expression: string): string {
    if (!this.survey) return expression;
    this.showTitles =
      !!this.options && this.options.useElementTitles;
    var parser = new Survey.ConditionsParser();
    var node = parser.parseExpression(expression);
    if (!node) return expression;
    if (!!node["getType"]) return this.toDisplayTextCore(node);
    if (!this.showTitles) return expression;
    var variables = [];
    node.setVariables(variables);
    return this.replaceVariables(expression, variables);
  }
  public toExpression(node: Survey.Operand): string {
    return this.toDisplayTextCore(node);
  }
  private toDisplayTextCore(node: Survey.Operand): string {
    this.currentQuestion = null;
    var self = this;
    var isRoot = true;
    var strFunc = function (op: Survey.Operand): string {
      var locIsRoot = isRoot;
      isRoot = false;
      if (self.showTitles && op.getType() == "variable") {
        return self.getQuestionText(<Survey.Variable>op);
      }
      if (self.showTitles && op.getType() == "const") {
        return self.getDisplayText(<Survey.Const>op);
      }
      if (op.getType() == "binary") {
        self.proceedBinary(<Survey.BinaryOperand>op);
        return self.getDisplayBinary(
          <Survey.BinaryOperand>op,
          locIsRoot,
          strFunc
        );
      }
      if (op.getType() == "unary") {
        return self.getDisplayUnary(<Survey.UnaryOperand>op, strFunc);
      }
      return undefined;
    };
    return node.toString(strFunc);
  }
  private getQuestionText(op: Survey.Variable): string {
    var question = this.getQuestionByName(op.variable);
    if (!question || !question.title) return op.variable;
    return wrapTextByCurlyBraces(question.title);
  }
  private getDisplayText(op: Survey.Const): string {
    if (!this.currentQuestion) return undefined;
    var res = this.currentQuestion.getDisplayValue(true, op.correctValue);
    return !!res ? new Survey.Const(res).toString() : undefined;
  }
  private getDisplayOperand(
    op: any,
    func: (op: Survey.Operand) => string
  ): string {
    return !!op ? op.toString(func) : "";
  }
  static operatorText = {
    less: "<",
    lessorequal: "<=",
    greater: ">",
    greaterorequal: ">=",
    equal: "==",
    notequal: "!=",
    plus: "+",
    minus: "-",
    mul: "*",
    div: "/",
    power: "^",
    mod: "%",
    negate: "!",
  };

  private getDisplayOperator(operator: string): string {
    var res = ExpressionToDisplayText.operatorText[operator];
    if (!!res) return res;
    return editorLocalization.getString("op." + operator);
  }
  private getDisplayBinary(
    op: Survey.BinaryOperand,
    isRoot: boolean,
    func: (op: Survey.Operand) => string
  ): string {
    return (
      (isRoot ? "" : "(") +
      this.getDisplayOperand(op.leftOperand, func) +
      " " +
      this.getDisplayOperator(op.operator) +
      " " +
      this.getDisplayOperand(op.rightOperand, func) +
      (isRoot ? "" : ")")
    );
  }
  private getDisplayUnary(
    op: Survey.UnaryOperand,
    func: (op: Survey.Operand) => string
  ): string {
    var exp = op.expression.toString(func);
    var operator = this.getDisplayOperator(op.operator);
    if (op.operator == "empty" || op.operator == "notempty")
      return exp + " " + operator;
    return operator + " " + exp;
  }
  private proceedBinary(op: Survey.BinaryOperand) {
    if (op.isArithmetic || op.isConjunction) {
      this.currentQuestion = null;
      return;
    }
    this.currentQuestion = this.getQuestionFromOperands(
      op.leftOperand,
      op.rightOperand
    );
    if (!this.currentQuestion) {
      this.currentQuestion = this.getQuestionFromOperands(
        op.rightOperand,
        op.leftOperand
      );
    }
  }
  private getQuestionFromOperands(op1: Survey.Operand, op2: Survey.Operand) {
    if (!op1 || !op2) return null;
    if (op1.getType() != "variable") return null;
    var op2Type = op2.getType();
    if (op2Type != "const" && op2Type != "function" && op2Type != "array")
      return null;
    return this.getQuestionByName((<Survey.Variable>op1).variable);
  }
  private replaceVariables(
    expression: string,
    variables: Array<string>
  ): string {
    for (var i = 0; i < variables.length; i++) {
      expression = this.replaceVariable(expression, variables[i]);
    }
    return expression;
  }
  private replaceVariable(expression: string, variable: string): string {
    var question = this.getQuestionByName(variable);
    if (!question || !question.title) return expression;
    return expression.replace(wrapTextByCurlyBraces(variable), wrapTextByCurlyBraces(question.title));
  }
  private getQuestionByName(name: string): Survey.Question {
    if (!this.survey) return null;
    return <Survey.Question>this.survey.getQuestionByValueName(name);
  }
}

export class ExpressionRemoveVariable {
  private wasRemoved: boolean;
  constructor() { }
  public remove(expression: string, variable: string): string {
    var parser = new Survey.ConditionsParser();
    var node = parser.parseExpression(expression);
    if (!node) return expression;
    this.wasRemoved = false;
    if (!!node["getType"]) {
      var op = this.processOperand(node, variable);
      if (!this.wasRemoved) return expression;
      return !!op ? op.toString() : "";
    }
    return expression;
  }
  private processOperand(op: Survey.Operand, variable: string): Survey.Operand {
    if (!op) return null;
    if (op.getType() == "variable") {
      return this.processVariable(<Survey.Variable>op, variable);
    }
    if (op.getType() == "unary") {
      return this.processUnary(<Survey.UnaryOperand>op, variable);
    }
    if (op.getType() == "binary") {
      return this.proceedBinary(<Survey.BinaryOperand>op, variable);
    }
    return op;
  }
  private processVariable(
    op: Survey.Variable,
    variable: string
  ): Survey.Operand {
    if (op.variable !== variable) return op;
    this.wasRemoved = true;
    return null;
  }
  private processUnary(
    op: Survey.UnaryOperand,
    variable: string
  ): Survey.Operand {
    var expression = this.processOperand(op.expression, variable);
    if (!!expression) return op;
    this.wasRemoved = true;
    return null;
  }
  private proceedBinary(
    op: Survey.BinaryOperand,
    variable: string
  ): Survey.Operand {
    var left = this.processOperand(op.leftOperand, variable);
    var right = this.processOperand(op.rightOperand, variable);
    if (!!left && !!right) {
      if (left !== op.leftOperand || right !== op.rightOperand)
        return new Survey.BinaryOperand(
          op.operator,
          left,
          right,
          op.isArithmetic
        );
      return op;
    }
    if (!left && !right) return null;
    var res = !!left ? left : right;
    return res.getType() == "binary" ? res : null;
  }
}
