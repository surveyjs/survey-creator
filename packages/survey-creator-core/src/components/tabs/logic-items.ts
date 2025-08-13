import {
  SurveyModel,
  Base,
  property,
  propertyArray,
  Serializer,
  SurveyTrigger,
  ConditionRunner,
  Question,
  ItemValue,
  MatrixDropdownColumn,
  Helpers
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ExpressionRemoveVariable } from "../../expressionToDisplayText";
import { updateLogicExpression } from "./logic-expression";
import { SurveyLogicType, getLogicString } from "./logic-types";
import { settings } from "../../creator-settings";
import { wrapTextByCurlyBraces } from "../../utils/creator-utils";
import { SurveyHelper } from "../../survey-helper";

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
  public get parentElement(): Base {
    if (!this.element || !this.logicType) return null;
    return this.logicType.getParentElement(this.element);
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public apply(expression: string, isRenaming: boolean = false): void {
    if (!!this.element && !!this.logicType) {
      this.element[this.logicType.propertyName] = expression;
      if (!expression) {
        this.logicType.remove(this.element);
        if (Serializer.isDescendantOf(this.element.getType(), "surveytrigger")) {
          this.removeElement(this.survey.triggers, this.element);
        }
      }
    }
  }
  private removeElement(items: Array<any>, element: any): void {
    var index = items.indexOf(this.element);
    if (index > -1) {
      items.splice(index, 1);
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
    if (this.logicType !== action.logicType) return false;
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
    const name = this.elementOwnerName;
    if (!!this.elementName && names.indexOf(name) === -1) {
      names.push(name);
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
  public get elementName(): string {
    if (!this.element) return "";
    var prefix = "";
    const owner = this.getOwnerElement();
    if (!!owner && owner !== this.element) {
      prefix = (<any>owner).name + ".";
    }
    return (prefix + (<any>this.element).name) || "";
  }
  private get elementOwnerName(): string {
    const owner = this.getOwnerElement();
    return !!owner ? (<any>owner).name || "" : "";
  }
  private getOwnerElement() : Base {
    if (!this.element) return null;
    const parentElement = this.parentElement;
    return !!parentElement ? parentElement : this.element;
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
  public get expressionText() {
    const text = this.getExpressionAsDisplayText();
    if (!text) return editorLocalization.getString("ed.lg.itemEmptyExpressionText");
    return text;
  }
  public get actionsText() {
    return this.actions.map(action => action.text).join(", ");
  }

  public getDisplayText() {
    const conditionText = this.getExpressionAsDisplayText();
    let actionsText = "";
    this.actions.forEach(action => {
      actionsText += (", " + action.text);
    });

    if (!!conditionText && !!actionsText) {
      const text = this.ifText + " " + conditionText + actionsText;
      return text.replace(new RegExp("({|})", "gm"), "'");
    } else {
      return editorLocalization.getString("ed.lg.itemEmptyExpressionText");
    }
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
    for (var i = 0; i < this.actions.length; i ++) {
      res.addNewAction(this.actions[i].clone());
    }
    return res;
  }
  public equals(item: SurveyLogicItem): boolean {
    if (this.expression !== item.expression) return false;
    if (this.actions.length !== item.actions.length) return false;
    for (let i = 0; i < this.actions.length; i ++) {
      if (!this.actions[i].equals(item.actions[i])) return false;
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
  public renameQuestion(oldName: string, newName: string): void {
    if (!oldName || !newName || oldName === newName) return;
    ["", "panel.", "row."].forEach(prefix =>
      this.renameQuestionInExpression(prefix + oldName, prefix + newName, [settings.logic.closeBracket, ".", "["])
    );
    var ops = this.actions;
    for (var i = 0; i < ops.length; i++) {
      ops[i].renameQuestion(oldName, newName);
    }
  }
  public renameColumn(question: Question, column: MatrixDropdownColumn, oldName: string): void {
    if (!this.canUpdateExpressionByQuestion(question)) return;
    if (this.actions[0].parentElement === question) {
      this.renameQuestionInExpression("row." + oldName, "row." + column.name, [settings.logic.closeBracket]);
    }
    const rows: Array<ItemValue> = question["rows"];
    if (!Array.isArray(rows) || !this.isQuestionInExpression(question)) return;
    const questionPrefix = this.getItemValueQuestionName(question) + ".";
    for (var i = 0; i < rows.length; i ++) {
      if (Helpers.isValueEmpty(rows[i].value)) continue;
      const rowName = rows[i].value.toString() + ".";
      this.renameQuestionInExpression(questionPrefix + rowName + oldName, questionPrefix + rowName + column.name, [settings.logic.closeBracket]);
    }
  }
  public renameItemValue(question: Question, item: ItemValue, oldValue: any): void {
    if (!this.canUpdateExpressionByQuestion(question)) return;
    if (!!question.parentQuestion) {
      if (Array.isArray(question.parentQuestion["rows"])) {
        this.renameDropdownColumnItemValue(question, item, oldValue);
      }
      if (this.actions[0].parentElement !== question.parentQuestion) return;
    }
    if (!this.isQuestionInExpression(question)) return;
    const questionName = this.getItemValueQuestionName(question).toLocaleLowerCase();
    const rows: Array<ItemValue> = question["rows"];
    let newExpression = this.expression;
    if (!Array.isArray(rows)) {
      newExpression = updateLogicExpression(newExpression, questionName, oldValue, item.value);
    } else {
      for (var i = 0; i < rows.length; i ++) {
        if (Helpers.isValueEmpty(rows[i].value)) continue;
        const rowName = "." + rows[i].value.toString();
        newExpression = updateLogicExpression(newExpression, questionName + rowName, oldValue, item.value);
      }
    }
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  private renameDropdownColumnItemValue(question: Question, item: ItemValue, oldValue: any): void {
    const matrix: Question = question.parentQuestion;
    if (!this.isQuestionInExpression(matrix)) return;
    const columnPostFix = "." + question.getValueName();
    if (!this.isStrContainsInExpression(columnPostFix + settings.logic.closeBracket)) return;
    const questionPrefix = matrix.getValueName() + ".";
    const rows: Array<ItemValue> = matrix["rows"];
    let newExpression = this.expression;
    for (var i = 0; i < rows.length; i ++) {
      if (Helpers.isValueEmpty(rows[i].value)) continue;
      const rowName = rows[i].value.toString();
      newExpression = updateLogicExpression(newExpression, questionPrefix + rowName + columnPostFix, oldValue, item.value);
    }
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  public renameRowValue(question: Question, item: ItemValue, oldValue: any): void {
    if (!this.canUpdateExpressionByQuestion(question) || !this.isQuestionInExpression(question)) return;
    const questionName = this.getItemValueQuestionName(question);
    this.renameQuestionInExpression(questionName + "." + oldValue.toString(), questionName + "." + item.value.toString(), [settings.logic.closeBracket, "."]);
  }
  private canUpdateExpressionByQuestion(question: Question): boolean {
    return !!this.expression && !!question.name && this.actions.length > 0;
  }
  private isQuestionInExpression(question: Question): boolean {
    return this.isStrContainsInExpression(this.getItemValueQuestionName(question).toLocaleLowerCase());
  }
  private isStrContainsInExpression(str: string): boolean {
    if (!str) return false;
    return this.expression.toLocaleLowerCase().indexOf(str.toLocaleLowerCase()) > -1;
  }
  private getItemValueQuestionName(question: Question): string {
    const valName = question.getValueName();
    if (!!question.parentQuestion) {
      if (question.parentQuestion.isDescendantOf("paneldynamic")) return "panel." + valName;
      if (question.parentQuestion.isDescendantOf("matrixdropdownbase")) return "row." + valName;
    }
    return valName;
  }
  public removeQuestion(name: string): void {
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
  public getContext(): Base {
    const exp = this.expression;
    if (!exp) return null;
    if (!SurveyHelper.getQuestionContextIndexInfo(exp, "{")) return null;
    for (var i = 0; i < this.actions.length; i ++) {
      const parentEl = this.actions[i].parentElement;
      if (!!parentEl) {
        return parentEl;
      }
    }
    return null;
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
  public get ifText(): string {
    return editorLocalization.getString("pe.if");
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
    return this.expression.indexOf(wrapTextByCurlyBraces(filteredName)) !== -1 || this.expression.indexOf("'" + filteredName + ".") !== -1;
  }
  private isSuitableByNameInActions(filteredName: string): boolean {
    return this.actions.some(action => action.isSuitableByQuestionName(filteredName));
  }
  private isSuitableByLogicTypeInActions(logicTypeName: string): boolean {
    return this.actions.some(action => action.isSuitableByLogicType(logicTypeName));
  }
  private renameQuestionInExpression(oldName: string, newName: string, postFixes: Array<string>): void {
    if (!this.expression) return;
    oldName = oldName.toLowerCase();
    if (!this.isStrContainsInExpression(oldName)) return;
    const ob = settings.logic.openBracket;
    oldName = ob + oldName;
    newName = ob + newName;
    let newExpression = this.expression;
    postFixes.forEach(ch => {
      newExpression = this.renameQuestionInExpressionCore(newExpression, newExpression.toLocaleLowerCase(), oldName + ch, newName + ch);
    });
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  private renameQuestionInExpressionCore(expression: string, lowCaseExpression: string, oldSubStr: string, newSubStr: string): string {
    var index = lowCaseExpression.lastIndexOf(oldSubStr, lowCaseExpression.length);
    while(index > -1) {
      expression = expression.substring(0, index) + newSubStr + expression.substring(index + oldSubStr.length);
      lowCaseExpression = lowCaseExpression.substring(0, index);
      index = lowCaseExpression.lastIndexOf(oldSubStr, index);
    }
    return expression;
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
