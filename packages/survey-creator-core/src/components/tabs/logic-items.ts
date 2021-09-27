import {
  SurveyModel,
  Base,
  property,
  propertyArray,
  Serializer,
  SurveyTrigger,
  ConditionRunner
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ExpressionRemoveVariable } from "../../expressionToDisplayText";
import { SurveyLogicType, getLogicString } from "./logic-types";
import { settings } from "../../settings";

export class SurveyLogicAction {
  private surveyValue: SurveyModel;
  private logicTypeValue: SurveyLogicType;
  private elementValue: Base;
  constructor(logicType: SurveyLogicType, element: Base, survey: SurveyModel) {
    this.surveyValue = survey;
    this.logicTypeValue = logicType;
    this.elementValue = element;
  }
  public get logicType(): SurveyLogicType {
    return this.logicTypeValue;
  }
  public get element(): Base {
    return this.elementValue;
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public apply(expression: string, isRenaming: boolean = false): void {
    if (!!this.element && !!this.logicType) {
      this.element[this.logicType.propertyName] = expression;
      if (
        !expression &&
        Serializer.isDescendantOf(this.element.getType(), "surveytrigger")
      ) {
        var index = this.survey.triggers.indexOf(<SurveyTrigger>this.element);
        if (index > -1) {
          this.survey.triggers.splice(index, 1);
        }
      }
    }
  }
  public renameQuestion(oldName: string, newName: string): void {
    if (!this.element) return;
    var names = this.questionNames;
    for (var i = 0; i < names.length; i++) {
      var str = this.element[names[i]];
      if (!!str && str.toLowerCase() == oldName.toLowerCase()) {
        this.element[names[i]] = newName;
      }
    }
  }
  public clone(): SurveyLogicAction {
    const el = this.logicType.cloneElement(this.element);
    return new SurveyLogicAction(this.logicType, el, this.survey);
  }
  public equals(action: SurveyLogicAction): boolean {
    if(this.logicType !== action.logicType) return false;
    return this.logicType.areElementsEqual(this.element, action.element);
  }
  public get name(): string {
    return !!this.logicType ? this.logicType.displayName : "";
  }
  public get logicTypeName(): string {
    return !!this.logicType ? this.logicType.name : undefined;
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
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public isSuitableByQuestionName(questionName: string): boolean {
    let res = this.elementName === questionName || this.elementName.indexOf(questionName + ".") === 0;
    if (!res) {
      res = this.questionNamesValues.filter(question => { return question === questionName || question.indexOf(questionName + ".") === 0; }).length > 0;
    }
    return res;
  }
  public isSuitableByLogicType(logicTypeName: string): boolean {
    if (!this.logicTypeName) return true;
    return logicTypeName === this.logicTypeName;
  }
  public addQuestionNames(names: string[]) {
    if (!!this.elementName && names.indexOf(this.elementName) === -1) {
      names.push(this.elementName);
    }
    this.questionNamesValues.forEach(name => {
      if (!!name && names.indexOf(name) === -1) {
        names.push(name);
      }
    });
  }
  private get questionNames(): Array<string> {
    if (!this.logicType || !this.logicType.questionNames) return [];
    return this.logicType.questionNames;
  }
  private get elementName(): string {
    return !!this.element && (<any>this.element).name || "";
  }
  private get questionNamesValues(): Array<string> {
    return this.questionNames.map(name => this.element[name]);
  }
}

export interface ISurveyLogicItemOwner {
  survey: SurveyModel;
  readOnly: boolean;
  editItem(item: SurveyLogicItem);
  removeItem(item: SurveyLogicItem);
  getExpressionAsDisplayText(expression: string): string;
  getVisibleLogicTypes(): Array<SurveyLogicType>;
}

export class SurveyLogicItem {
  private static counter = 0;
  private idValue = ++SurveyLogicItem.counter;
  private removedActions: Array<SurveyLogicAction>;
  private actionsValue: Array<SurveyLogicAction>;
  public isNew: boolean = false;
  public isModified: boolean = false;
  constructor(
    private owner: ISurveyLogicItemOwner,
    public expression: string = ""
  ) {
    this.actionsValue = [];
    this.removedActions = [];
  }
  public get actions(): Array<SurveyLogicAction> {
    return this.actionsValue;
  }
  public get id(): number { return this.idValue; }
  public get name(): string {
    return "logicItem" + this.id;
  }
  public get survey(): SurveyModel {
    return this.owner.survey;
  }
  public getVisibleLogicTypes(): Array<SurveyLogicType> {
    return this.owner.getVisibleLogicTypes();
  }
  public get title(): string {
    var res = this.getExpressionAsDisplayText();
    const maxChars = settings.logic.logicItemTitleMaxChars;
    if (!!res && res.length > maxChars) {
      res = res.substr(1, maxChars) + "...";
    }
    return res;
  }
  public get actionsText(): string {
    var res = "";
    for (var i = 0; i < this.actions.length; i++) {
      if (!!res) {
        res += "<br/>";
      }
      res += this.actions[i].text;
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
    this.replaceActionCore(null, action);
  }
  public replaceAction(
    newAction: SurveyLogicAction,
    oldAction: SurveyLogicAction
  ) {
    if (!!oldAction) {
      this.replaceActionCore(newAction, oldAction);
    } else {
      this.addNewAction(newAction);
    }
  }
  public clone(): SurveyLogicItem {
    const res = new SurveyLogicItem(this.owner, this.expression);
    for(var i = 0; i < this.actions.length; i ++) {
      res.addNewAction(this.actions[i].clone());
    }
    return res;
  }
  public equals(item: SurveyLogicItem): boolean {
    if(this.expression !== item.expression) return false;
    if(this.actions.length !== item.actions.length) return false;
    for(let i = 0; i < this.actions.length; i ++) {
      if(!this.actions[i].equals(item.actions[i])) return false;
    }
    return true;
  }
  private replaceActionCore(
    newAction: SurveyLogicAction,
    oldAction: SurveyLogicAction
  ) {
    this.removedActions.push(oldAction);
    var index = this.actions.indexOf(oldAction);
    if (index > -1) {
      if (!!newAction) {
        this.actions.splice(index, 1, newAction);
      } else {
        this.actions.splice(index, 1);
      }
    }
  }
  public apply(expression: string) {
    if (!expression) {
      this.removeActions();
    } else {
      this.removeSameActions();
    }
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
  public getQuestionNames(): string[] {
    const res = [];
    this.getQuestionNamesFromExpression(res);
    this.getQuestionNamesFromActions(res);
    return res;
  }
  public getActionTypes(): string[] {
    return this.actions.map(action => action.logicTypeName);
  }
  public get expressionText(): string {
    const text = this.getExpressionAsDisplayText();
    if (!text) return editorLocalization.getString("ed.lg.itemEmptyExpressionText");
    return text;
  }
  private getQuestionNamesFromExpression(names: string[]) {
    const conditionRunner = new ConditionRunner(this.expression);
    conditionRunner.getVariables().forEach(item => {
      if (names.indexOf(item) === -1)
        names.push(item);
    });
  }
  private getQuestionNamesFromActions(names: string[]) {
    this.actions.forEach(action => action.addQuestionNames(names));
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
  public isSuitable(filteredName: string, logicTypeName: string = ""): boolean {
    if (!filteredName && !logicTypeName) return true;
    if (!filteredName) {
      return this.isSuitableByLogicTypeInActions(logicTypeName);
    }
    if (!logicTypeName) {
      return this.isSuitableInExpression(filteredName) || this.isSuitableByNameInActions(filteredName);
    }
    return (this.isSuitableInExpression(filteredName) || this.isSuitableByNameInActions(filteredName)) && this.isSuitableByLogicTypeInActions(logicTypeName);
  }
  private isSuitableInExpression(filteredName: string): boolean {
    return this.expression.indexOf("{" + filteredName + "}") !== -1 || this.expression.indexOf("{" + filteredName + ".") !== -1;
  }
  private isSuitableByNameInActions(filteredName: string): boolean {
    return this.actions.some(action => action.isSuitableByQuestionName(filteredName));
  }
  private isSuitableByLogicTypeInActions(logicTypeName: string): boolean {
    return this.actions.some(action => action.isSuitableByLogicType(logicTypeName));
  }
  private renameQuestionInExpression(oldName: string, newName: string) {
    if (!this.expression) return;
    var newExpression = this.expression;
    var expression = this.expression.toLocaleLowerCase();
    oldName = "{" + oldName.toLowerCase() + "}";
    newName = "{" + newName + "}";
    var index = expression.lastIndexOf(oldName, expression.length);
    while (index > -1) {
      newExpression = newExpression.substring(0, index) + newName + newExpression.substr(index + oldName.length, +newExpression.length);
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
  private removeActions() {
    var ops = this.actions;
    for (var i = ops.length - 1; i >= 0; i--) {
      this.removeAction(ops[i]);
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
