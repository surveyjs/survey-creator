import { ConditionsParser, Operand, BinaryOperand, Variable, Const, ArrayOperand, Helpers } from "survey-core";
export class SurveyLogicExpressionUpdater {
  private operand: Operand;
  private constChanges: Array<{op: Operand, val: any}> = [];
  constructor(expresion: string) {
    this.operand = new ConditionsParser().parseExpression(expresion);
  }
  public update(varName: string, oldValue: any, newValue: any): void {
    this.updateOperand(this.operand, varName.toLocaleLowerCase(), oldValue, newValue);
  }
  public get isModified(): boolean { return this.constChanges.length > 0; }
  public toString(): string {
    var self = this;
    var isRoot = true;
    var strFunc = function (op: Operand): string {
      var locIsRoot = isRoot;
      isRoot = false;
      if (op.getType() === "const") {
        return self.constToString(<Const>op);
      }
      if (op.getType() === "binary") {
        return self.binaryToString(<BinaryOperand>op, locIsRoot, strFunc);
      }
      return undefined;
    };
    return this.operand.toString(strFunc);
  }
  private constToString(op: Const): string {
    for (var i = 0; i < this.constChanges.length; i ++) {
      if (this.constChanges[i].op === op) return this.constChanges[i].val;
    }
    return op.toString();
  }
  private binaryToString(
    op: BinaryOperand,
    isRoot: boolean,
    func: (op: Operand) => string
  ): string {
    return (
      (isRoot ? "" : "(") +
      this.operandToString(op.leftOperand, func) +
      " " +
      this.operatorToString(op.operator) +
      " " +
      this.operandToString(op.rightOperand, func) +
      (isRoot ? "" : ")")
    );
  }
  private operandToString(op: any, func: (op: Operand) => string): string {
    return !!op ? op.toString(func) : "";
  }
  private operatorToString(operator: string): string {
    var res = SurveyLogicExpressionUpdater.operatorText[operator];
    return !!res ? res : operator;
  }
  static operatorText = {
    less: "<",
    lessorequal: "<=",
    greater: ">",
    greaterorequal: ">=",
    equal: "=",
    notequal: "!=",
    plus: "+",
    minus: "-",
    mul: "*",
    div: "/",
    power: "^",
    mod: "%",
    negate: "!",
  };
  private updateOperand(op: Operand, varName: string, oldValue: any, newValue: any): void {
    if (op.getType() == "binary") {
      const bOP = <BinaryOperand>op;
      if (bOP.isConjunction) {
        this.updateOperand(bOP.leftOperand, varName, oldValue, newValue);
        this.updateOperand(bOP.rightOperand, varName, oldValue, newValue);
      } else {
        if (this.hasVarName(bOP.leftOperand, varName)) {
          this.updateOperandConst(bOP.rightOperand, oldValue, newValue);
        } else {
          if (this.hasVarName(bOP.rightOperand, varName)) {
            this.updateOperandConst(bOP.leftOperand, oldValue, newValue);
          }
        }
      }
    }
  }
  private hasVarName(op: Operand, varName: string): boolean {
    if (!op || op.getType() !== "variable") return;
    return (<Variable>op).variable.toLowerCase() === varName;
  }
  private updateOperandConst(op: Operand, oldValue: any, newValue: any): void {
    if (op.getType() === "array") {
      const aOp = <ArrayOperand>op;
      if (Array.isArray(aOp.values)) {
        aOp.values.forEach(item => this.updateOperandConst(item, oldValue, newValue));
      }
    }
    if (op.getType() !== "const") return;
    const cOp = <Const>op;
    if (Helpers.isTwoValueEquals(cOp.correctValue, oldValue)) {
      newValue = this.getCorrectNewValue(cOp, newValue);
      this.constChanges.push({ op: op, val: newValue });
    }
  }
  private getCorrectNewValue(op: Const, newValue: any): any {
    const str = op.toString();
    if (!!str && !Helpers.isTwoValueEquals(op.correctValue, str)) {
      if (str[0] === "\"" || str[0] === "'") {
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