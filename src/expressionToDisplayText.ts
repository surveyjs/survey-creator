import * as Survey from "survey-knockout";

export class ExpressionToDisplayText {
  constructor(public survey: Survey.SurveyModel) {}
  public toDisplayText(expression: string): string {
    var parser = new Survey.ConditionsParser();
    var node = parser.parseExpression(expression);
    if (!node) return expression;
    var variables = [];
    node.setVariables(variables);
    return this.replaceVariables(expression, variables);
  }
  private replaceVariables(
    expression: string,
    variables: Array<string>
  ): string {
    if (!this.survey) return "";
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
