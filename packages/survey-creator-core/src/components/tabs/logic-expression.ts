import { ConditionsParser, Operand, BinaryOperand, Variable, Const, ArrayOperand, Helpers } from "survey-core";
import { ExpressionToDisplayText } from "../../expressionToDisplayText";
export class SurveyLogicExpressionUpdater {
  private operand: Operand;
  private isModifiedValue: boolean;
  constructor(expresion: string) {
    this.operand = new ConditionsParser().parseExpression(expresion);
  }
  public update(varName: string, oldValue: any, newValue: any): void {
    return this.updateOperand(this.operand, varName.toLocaleLowerCase(), oldValue, newValue);
  }
  public get isModified(): boolean { return this.isModifiedValue; }
  public toString(): string {
    return new ExpressionToDisplayText(null).toExpression(this.operand);
  }
  private updateOperand(op: Operand, varName: string, oldValue: any, newValue: any): void {
    if(op.getType() == "binary") {
      const bOP = <BinaryOperand>op;
      if(bOP.isArithmetic) return;
      if(bOP.isConjunction) {
        this.updateOperand(bOP.leftOperand, varName, oldValue, newValue);
        this.updateOperand(bOP.rightOperand, varName, oldValue, newValue);
      } else {
        if(this.hasVarName(bOP.leftOperand, varName)) {
          this.updateOperandConst(bOP.rightOperand, oldValue, newValue);
        } else {
          if(this.hasVarName(bOP.rightOperand, varName)) {
            this.updateOperandConst(bOP.leftOperand, oldValue, newValue);
          }
        }
      }
    }
  }
  private hasVarName(op: Operand, varName: string): boolean {
    if(op.getType() !== "variable") return;
    return (<Variable>op).variable.toLowerCase() === varName;
  }
  private updateOperandConst(op: Operand, oldValue: any, newValue: any): void {
    if(op.getType() === "array") {
      const aOp = <ArrayOperand>op;
      if(Array.isArray(aOp.values)) {
        aOp.values.forEach(item => this.updateOperandConst(item, oldValue, newValue));
      }
    }
    if(op.getType() !== "const") return;
    const cOp = <Const>op;
    if(Helpers.isTwoValueEquals(cOp.correctValue, oldValue)) {
      this.isModifiedValue = true;
      newValue = this.getCorrectNewValue(cOp, newValue);
      cOp.setValue(newValue);
    }
  }
  private getCorrectNewValue(op: Const, newValue: any): any {
    const str = op.toString();
    if(!!str && !Helpers.isTwoValueEquals(op.correctValue, str)) {
      if(str[0] === "\"" || str[0] === "'") {
        return str[0] + newValue + str[0];
      }
    }
    return newValue;
  }
}
export function updateLogicExpression(expression: string, varName: string, oldValue: any, newValue: any): string {
  const updater = new SurveyLogicExpressionUpdater(expression);
  updater.update(varName, oldValue, newValue);
  return updater.isModified ? updater.toString() : expression;
}