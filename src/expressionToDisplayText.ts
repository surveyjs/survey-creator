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
    if (!!node["getType"]) return this.toDisplayTextCore(node, expression);
    var variables = [];
    node.setVariables(variables);
    return this.replaceVariables(expression, variables);
  }
  private toDisplayTextCore(node: Survey.Operand, expression: string): string {
    this.currentQuestion = null;
    var self = this;
    var strFunc = function(op: Survey.Operand): string {
      if (op["getType"]() == "variable") {
        return self.getQuestionText(<Survey.Variable>op);
      }
      if (op["getType"]() == "const") {
        return self.getDisplayText(<Survey.Const>op);
      }
      if (op["getType"]() == "binary") {
        self.proceedBinary(<Survey.BinaryOperand>op);
      }
      return undefined;
    };
    return (<any>node)["toString"](strFunc);
  }
  private getQuestionText(op: Survey.Variable): string {
    var question = this.survey.getQuestionByName(op["variable"]);
    if (!question || !question.title) return undefined;
    return "{" + question.title + "}";
  }
  private getDisplayText(op: Survey.Const): string {
    if (!this.currentQuestion) return undefined;
    var res = (<any>this.currentQuestion)["getDisplayValue"](
      true,
      op["correctValue"]
    );
    return !!res ? new Survey.Const(res).toString() : undefined;
  }
  private proceedBinary(op: Survey.BinaryOperand) {
    if (op["isArithmetic"] || op["isConjunction"]) {
      this.currentQuestion = null;
      return;
    }
    this.currentQuestion = this.getQuestionFromOperands(
      op["leftOperand"],
      op["rightOperand"]
    );
    if (!this.currentQuestion) {
      this.currentQuestion = this.getQuestionFromOperands(
        op["rightOperand"],
        op["leftOperand"]
      );
    }
  }
  private getQuestionFromOperands(op1: Survey.Operand, op2: Survey.Operand) {
    if (!op1 || !op2) return null;
    if (op1["getType"]() != "variable") return null;
    var op2Type = op2["getType"]();
    if (op2Type != "const" && op2Type != "function" && op2Type != "array")
      return null;
    return this.survey.getQuestionByName((<Survey.Variable>op1)["variable"]);
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
    var question = this.survey.getQuestionByName(variable);
    if (!question || !question.title) return expression;
    return expression.replace("{" + variable + "}", "{" + question.title + "}");
  }
}
