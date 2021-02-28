import { SurveyModel, Base, property, propertyArray } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { ExpressionRemoveVariable } from "../expressionToDisplayText";
import {
  SurveyLogicTypes,
  SurveyLogicType,
  getLogicString,
} from "./logic-types";

export class SurveyLogicAction extends Base {
  public onLogicTypeChanged: () => void;
  private surveyValue: SurveyModel;
  koAfterRender: any;
  constructor(logicType: SurveyLogicType, element: Base, survey: SurveyModel) {
    super();
    this.surveyValue = survey;
    this.logicType = logicType;
    this.element = element;
    this.koAfterRender = function () {};
  }
  @property() logicType: SurveyLogicType;
  @property() element: Base;
  @property() errorText: string;
  @propertyArray() logicTypes: Array<SurveyLogicType>;
  public get survey(): SurveyModel {
    return this.surveyValue;
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "logicType") {
      this.element = !!this.logicType
        ? this.logicType.createNewElement(this.survey)
        : null;
      if (!!this.onLogicTypeChanged) this.onLogicTypeChanged();
    }
  }
  public apply(expression: string, isRenaming: boolean = false) {
    if (!!this.element && !!this.logicType) {
      this.element[this.logicType.propertyName] = expression;
      if (!isRenaming) {
        //TODO
        //this.logicType.saveElement(this);
      }
    }
  }
  public renameQuestion(oldName: string, newName: string) {
    if (!this.element) return;
    var names = this.questionNames;
    for (var i = 0; i < names.length; i++) {
      var str = this.element[names[i]];
      if (!!str && str.toLowerCase() == oldName.toLowerCase()) {
        this.element[names[i]] = newName;
      }
    }
  }
  public equals(action: SurveyLogicAction): boolean {
    return (
      this.logicType === action.logicType && this.element === action.element
    );
  }
  public get name(): string {
    return !!this.logicType ? this.logicType.displayName : "";
  }
  public get logicTypeName(): string {
    return !!this.logicType ? this.logicType.name : undefined;
  }
  public set logicTypeName(val: string) {
    var lt = null;
    if (!!val) {
      for (var i = 0; i < this.logicTypes.length; i++) {
        if (this.logicTypes[i].name == val) {
          lt = this.logicTypes[i];
          break;
        }
      }
    }
    this.logicType = lt;
  }
  public get logicTypeDescription(): string {
    return !!this.logicType ? this.logicType.description : "";
  }
  public get text(): string {
    return !!this.logicType ? this.logicType.getDisplayText(this.element) : "";
  }
  public get deleteActionText(): string {
    return getLogicString("deleteAction");
  }
  public hasError(): boolean {
    if (!this.logicType) {
      this.errorText = editorLocalization.getString("pe.conditionActionEmpty");
      return true;
    }
    this.errorText = "";
    return false;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  private get questionNames(): Array<string> {
    if (!this.logicType || !this.logicType.questionNames) return [];
    return this.logicType.questionNames;
  }
}

export interface ISurveyLogicItemOwner {
  readOnly: boolean;
  editItem(item: SurveyLogicItem);
  removeItem(item: SurveyLogicItem);
  getExpressionAsDisplayText(expression: string): string;
}

export class SurveyLogicItem extends Base {
  private static counter = 0;
  private id = ++SurveyLogicItem.counter;
  private removedActions: Array<SurveyLogicAction>;
  constructor(
    private owner: ISurveyLogicItemOwner,
    public expression: string = ""
  ) {
    super();
    this.removedActions = [];
  }
  @propertyArray() actions: Array<SurveyLogicAction>;
  public get name() {
    return "logicItem" + this.id;
  }
  public get title() {
    var res = this.getExpressionAsDisplayText();
    if (!!res && res.length > 50) {
      res = res.substr(1, 50) + "...";
    }
    return res;
  }
  public edit() {
    if (!!this.owner) {
      this.owner.editItem(this);
    }
  }
  public remove() {
    if (!!this.owner) {
      this.owner.removeItem(this);
    }
  }
  public get isReadOnly() {
    return !!this.owner && this.owner.readOnly;
  }
  public addNewAction(action: SurveyLogicAction) {
    this.actions.push(action);
  }
  public removeAction(action: SurveyLogicAction) {
    this.removedActions.push(action);
    var index = this.actions.indexOf(action);
    if (index > -1) {
      this.actions.splice(index, 1);
      if (!!action.logicType && !!action.onLogicTypeChanged) {
        action.onLogicTypeChanged();
      }
    }
  }
  public apply(expression: string) {
    this.removeSameActions();
    for (var i = 0; i < this.removedActions.length; i++) {
      this.removedActions[i].apply("");
    }
    this.removedActions = [];
    this.applyExpression(expression, false);
  }
  public renameQuestion(oldName: string, newName: string) {
    if (!oldName || !newName) return;
    this.renameQuestionInExpression(oldName, newName);
    var ops = this.actions;
    for (var i = 0; i < ops.length; i++) {
      ops[i].renameQuestion(oldName, newName);
    }
  }
  public removeQuestion(name: string) {
    this.removeQuestionInExpression(name);
  }
  public get expressionText(): string {
    return editorLocalization
      .getString("ed.lg.itemExpressionText")
      ["format"](this.getExpressionAsDisplayText());
  }
  private getExpressionAsDisplayText(): string {
    return !!this.owner
      ? this.owner.getExpressionAsDisplayText(this.expression)
      : this.expression;
  }
  public get editText(): string {
    return editorLocalization.getString("pe.edit");
  }
  public get deleteText(): string {
    return editorLocalization.getString("pe.delete");
  }
  private renameQuestionInExpression(oldName: string, newName: string) {
    if (!this.expression) return;
    var newExpression = this.expression;
    var expression = this.expression.toLocaleLowerCase();
    oldName = "{" + oldName.toLowerCase() + "}";
    newName = "{" + newName + "}";
    var index = expression.lastIndexOf(oldName, expression.length);
    while (index > -1) {
      newExpression =
        newExpression.substring(0, index) +
        newName +
        newExpression.substr(index + oldName.length, +newExpression.length);
      expression = expression.substring(0, index);
      index = expression.lastIndexOf(oldName, expression.length);
    }
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  private removeQuestionInExpression(name: string) {
    if (!this.expression) return;
    var expR = new ExpressionRemoveVariable();
    var newExpression = expR.remove(this.expression, name);
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  private applyExpression(expression: string, isRenaming: boolean) {
    this.expression = expression;
    var ops = this.actions;
    for (var i = 0; i < ops.length; i++) {
      ops[i].apply(expression, isRenaming);
    }
  }
  private removeSameActions() {
    var ops = this.actions;
    for (var i = ops.length - 1; i >= 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
        if (ops[i].equals(ops[j])) {
          this.removeAction(ops[i]);
          break;
        }
      }
    }
  }
}
