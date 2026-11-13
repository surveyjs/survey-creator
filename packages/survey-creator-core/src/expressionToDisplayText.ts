import * as Survey from "survey-core";
import { editorLocalization } from "./editorLocalization";
import { wrapTextByCurlyBraces } from "./utils/creator-utils";
import { getQuestionByVariableName } from "./utils/data-path";

export class ExpressionToDisplayText {
  private showTitles: boolean;
  // survey-core renders the expression, these hooks only change the texts of variables, constants and operators
  private toStringContext: Survey.IOperandToStringContext = {
    variableToString: (op: Survey.Variable): string => this.getQuestionText(op),
    constToString: (op: Survey.Const, comparedWith: Survey.Variable): string => this.getDisplayText(op, comparedWith),
    operatorToString: (operatorName: string): string => this.getDisplayOperator(operatorName),
    skipRootBrackets: true
  };
  constructor(public survey: Survey.SurveyModel, private options: any = null) { }
  public toDisplayText(expression: string): string {
    if (!this.survey) return expression;
    this.showTitles =
      !!this.options && this.options.useElementTitles;
    var parser = new Survey.ConditionsParser();
    var node = parser.parseExpression(expression);
    if (!node) return expression;
    if (!!node["getType"]) return this.toExpression(node);
    if (!this.showTitles) return expression;
    var variables = [];
    node.setVariables(variables);
    return this.replaceVariables(expression, variables);
  }
  public toExpression(node: Survey.Operand): string {
    return node.toString(this.toStringContext);
  }
  private getQuestionText(op: Survey.Variable): string {
    const question = this.getQuestionByName(op.variable);
    //Let the operand render itself, so a variable that is not a question keeps its original text
    if (!question) return undefined;
    //A variable is found by its valueName, that may differ from the question name, so the default
    //text is taken from the expression and not derived from the question
    let text = this.showTitles ? question.title : "";
    if (!text) text = op.variable;
    if (!!this.options && !!this.options.getObjectDisplayName) {
      text = this.options.getObjectDisplayName(question, "logic-tab:rule-condition", "condition", text);
    }
    if (text === op.variable) return undefined;
    return wrapTextByCurlyBraces(text);
  }
  //A constant compared with a question shows the question's display value (a choice text, for example).
  //survey-core passes comparedWith only for a direct operand of a comparison or an item of a direct array,
  //so a constant inside a function keeps its own text
  private getDisplayText(op: Survey.Const, comparedWith: Survey.Variable): string {
    if (!this.showTitles || !comparedWith) return undefined;
    const question = this.getQuestionByName(comparedWith.variable);
    if (!question) return undefined;
    var res = question.getDisplayValue(true, op.correctValue);
    return !!res ? new Survey.Const(res).toString() : undefined;
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
    return getQuestionByVariableName(this.survey, name);
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
