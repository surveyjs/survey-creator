import * as Survey from "survey-knockout";
import { ISurveyObjectEditorOptions } from "./propertyEditors/propertyEditorBase";

export class ExpressionToDisplayText {
  private currentQuestion: Survey.Question;
  constructor(
    public survey: Survey.SurveyModel,
    private options: ISurveyObjectEditorOptions = null
  ) {}
  public toDisplayText(expression: string): string {
    if (
      !this.survey ||
      (!!this.options && !this.options.showTitlesInExpressions)
    )
      return expression;
    var parser = new Survey.ConditionsParser();
    var node = parser.parseExpression(expression);
    if (!node) return expression;
    if (!!node["getType"]) return this.toDisplayTextCore(node);
    var variables = [];
    node.setVariables(variables);
    return this.replaceVariables(expression, variables);
  }
  private toDisplayTextCore(node: Survey.Operand): string {
    this.currentQuestion = null;
    var self = this;
    var strFunc = function(op: Survey.Operand): string {
      if (op.getType() == "variable") {
        return self.getQuestionText(<Survey.Variable>op);
      }
      if (op.getType() == "const") {
        return self.getDisplayText(<Survey.Const>op);
      }
      if (op.getType() == "binary") {
        self.proceedBinary(<Survey.BinaryOperand>op);
      }
      return undefined;
    };
    return node.toString(strFunc);
  }
  private getQuestionText(op: Survey.Variable): string {
    var question = this.getQuestionByName(op.variable);
    if (!question || !question.title) return undefined;
    return "{" + question.title + "}";
  }
  private getDisplayText(op: Survey.Const): string {
    if (!this.currentQuestion) return undefined;
    var res = this.currentQuestion.getDisplayValue(true, op.correctValue);
    return !!res ? new Survey.Const(res).toString() : undefined;
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
    return expression.replace("{" + variable + "}", "{" + question.title + "}");
  }
  private getQuestionByName(name: string): Survey.Question {
    return <Survey.Question>this.survey.getQuestionByValueName(name);
  }
}

export class ExpressionRemoveVariable {
  private wasRemoved: boolean;
  constructor() {}
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
