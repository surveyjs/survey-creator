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
  Helpers,
  settings as surveyLibSettings
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ExpressionRemoveVariable } from "../../expressionToDisplayText";
import { updateLogicExpression } from "./logic-expression";
import { SurveyLogicType, getLogicString } from "./logic-types";
import { wrapTextByCurlyBraces } from "../../utils/creator-utils";
import { SurveyHelper } from "../../survey-helper";
import { getConditionQuestionKey, getQuestionByVariableName, isInnerQuestion, isScopedNamesSurvey, IVariableRename } from "../../utils/data-path";

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
  // Nested data: a question name of the action (a trigger's setToName, fromName) that is a data path
  // through a renamed key.
  public renameDataKeyInNames(renames: Array<IVariableRename>): void {
    if (!this.element || renames.length === 0) return;
    this.questionNames.forEach(propName => {
      const str: string = this.element[propName];
      if (!str || typeof str !== "string") return;
      const lowStr = str.toLowerCase();
      for (let i = 0; i < renames.length; i++) {
        const oldName = renames[i].oldName.toLowerCase();
        if (lowStr === oldName || lowStr.indexOf(oldName + ".") === 0) {
          this.element[propName] = renames[i].newName + str.substring(oldName.length);
          return;
        }
      }
    });
  }
  public hasTextInNames(text: string): boolean {
    const lowText = text.toLowerCase();
    return this.questionNamesValues.some(str => typeof str === "string" && str.toLowerCase().indexOf(lowText) > -1);
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
  // Nested data (survey-library #12233, CS6): the action is on the question (a column's matrix, a template
  // question's dynamic panel), or a question name of it (a trigger's setToName, fromName, gotoName) finds it.
  public isSuitableByQuestion(question: Question): boolean {
    if (!this.element) return false;
    if (this.element === question || this.parentElement === question) return true;
    return this.questionNames.some(propName => this.findQuestionByName(propName, this.element[propName]) === question);
  }
  // gotoName is a path of names (O4a); setToName and fromName are data paths, read from the survey data.
  private findQuestionByName(propName: string, name: string): Question {
    if (!name || typeof name !== "string") return null;
    if (propName === "gotoName") return <Question>this.survey.getQuestionByName(name);
    return getQuestionByVariableName(this.survey, name);
  }
  // The questions the action is on and names, for the Logic tab's question filter in a survey with scopes.
  public addUsedQuestions(questions: Array<Question>): void {
    if (!this.element) return;
    const add = (q: any): void => {
      if (!!q && q.isQuestion && questions.indexOf(q) < 0) questions.push(q);
    };
    add(this.getOwnerElement());
    this.questionNames.forEach(propName => add(this.findQuestionByName(propName, this.element[propName])));
  }
  public isSuitableByLogicType(logicTypeName: string): boolean {
    if (!this.logicTypeName) return true;
    return logicTypeName === this.logicTypeName;
  }
  public addQuestionNames(names: string[]) {
    const name = this.elementOwnerName;
    if (!!name && names.indexOf(name) === -1) {
      names.push(name);
    }
    this.questionNamesValues.forEach(name => {
      if (!!name && names.indexOf(name) === -1) {
        names.push(name);
      }
    });
  }
  public hasReferenceToQuestion(name: string): boolean {
    if (!this.element || !this.logicType) return false;
    const qNames = this.questionNames;
    for (let i = 0; i < qNames.length; i++) {
      if (this.element[qNames[i]] === name) return true;
    }
    return false;
  }
  public clearReferenceToQuestion(name: string): void {
    if (!this.element || !this.logicType) return;
    const qNames = this.questionNames;
    for (let i = 0; i < qNames.length; i++) {
      if (this.element[qNames[i]] === name) {
        this.element[qNames[i]] = "";
      }
    }
  }
  private get questionNames(): Array<string> {
    if (!this.logicType || !this.logicType.questionNames) return [];
    return this.logicType.questionNames;
  }
  public get elementName(): string {
    if (!this.element) return "";
    var prefix = "";
    const owner = this.getOwnerElement();
    if (!!owner && owner !== this.element && !!(<any>owner).name) {
      prefix = (<any>owner).name + ".";
    }
    return (prefix + (<any>this.element).name || "") || "";
  }
  private get elementOwnerName(): string {
    const owner = this.getOwnerElement();
    return !!owner ? (<any>owner).name || "" : "";
  }
  private getOwnerElement(): Base {
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
      const ob = this.escapeForRegExp(surveyLibSettings.expressionVariableDelimiters.start);
      const cb = this.escapeForRegExp(surveyLibSettings.expressionVariableDelimiters.end);
      return text.replace(new RegExp("(" + ob + "|" + cb + ")", "gm"), "'");
    } else {
      return editorLocalization.getString("ed.lg.itemEmptyExpressionText");
    }
  }

  private escapeForRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
  // the actions saving the rule will clear (apply)
  public getRemovedActions(): Array<SurveyLogicAction> {
    return [].concat(this.removedActions);
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
    for (var i = 0; i < this.actions.length; i++) {
      res.addNewAction(this.actions[i].clone());
    }
    return res;
  }
  public equals(item: SurveyLogicItem): boolean {
    if (this.expression !== item.expression) return false;
    if (this.actions.length !== item.actions.length) return false;
    for (let i = 0; i < this.actions.length; i++) {
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
    // "{matrix-total.column}" refers to a column total of the matrix "matrix"
    const postFixes = [surveyLibSettings.expressionVariableDelimiters.end, ".", "["];
    const totalsSuffix = surveyLibSettings.matrix.totalsSuffix;
    if (!!totalsSuffix) {
      postFixes.push(totalsSuffix + ".");
    }
    ["", "panel.", "row."].forEach(prefix =>
      this.renameQuestionInExpression(prefix + oldName, prefix + newName, postFixes)
    );
    var ops = this.actions;
    for (var i = 0; i < ops.length; i++) {
      ops[i].renameQuestion(oldName, newName);
    }
  }
  public renameColumn(question: Question, column: MatrixDropdownColumn, oldName: string): void {
    if (!this.canUpdateExpressionByQuestion(question)) return;
    if (this.actions[0].parentElement === question) {
      this.renameQuestionInExpression("row." + oldName, "row." + column.name, [surveyLibSettings.expressionVariableDelimiters.end]);
    }
    const rows: Array<ItemValue> = question["rows"];
    if (!Array.isArray(rows) || !this.isQuestionInExpression(question)) return;
    const questionPrefix = this.getItemValueQuestionName(question) + ".";
    for (var i = 0; i < rows.length; i++) {
      if (Helpers.isValueEmpty(rows[i].value)) continue;
      const rowName = rows[i].value.toString() + ".";
      this.renameQuestionInExpression(questionPrefix + rowName + oldName, questionPrefix + rowName + column.name, [surveyLibSettings.expressionVariableDelimiters.end]);
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
      for (var i = 0; i < rows.length; i++) {
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
    if (!this.isStrContainsInExpression(columnPostFix + surveyLibSettings.expressionVariableDelimiters.end)) return;
    const questionPrefix = getConditionQuestionKey(matrix) + ".";
    const rows: Array<ItemValue> = matrix["rows"];
    let newExpression = this.expression;
    for (var i = 0; i < rows.length; i++) {
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
    this.renameQuestionInExpression(questionName + "." + oldValue.toString(), questionName + "." + item.value.toString(), [surveyLibSettings.expressionVariableDelimiters.end, "."]);
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
  // The variable an expression reads the question by: inside a record its value name after the record's
  // prefix; else the name the condition editor lists it by ({city} for an inner question, not {town}).
  private getItemValueQuestionName(question: Question): string {
    if (!!question.parentQuestion) {
      const valName = question.getValueName();
      if (question.parentQuestion.isDescendantOf("paneldynamic")) return "panel." + valName;
      if (question.parentQuestion.isDescendantOf("matrixdropdownbase")) return "row." + valName;
    }
    return getConditionQuestionKey(question);
  }
  public removeQuestion(name: string): void {
    this.removeQuestionInExpression(name);
    this.clearActionsReferenceToQuestion(name);
  }
  private clearActionsReferenceToQuestion(name: string): void {
    this.actions.forEach(action => action.clearReferenceToQuestion(name));
  }
  public getQuestionNames(): string[] {
    const res = [];
    this.getQuestionNamesFromExpression(res);
    this.getQuestionNamesFromActions(res);
    return res;
  }
  // Nested data (survey-library #12233): the questions the rule reads (getQuestionsByVariableName) and the
  // questions its actions are on and name. One entry per question: one text ({street}) reads different questions
  // in different scopes.
  public getUsedQuestions(): Array<Question> {
    const res: Array<Question> = [];
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    names.forEach(name => this.getQuestionsByVariableName(name).forEach(question => {
      if (res.indexOf(question) < 0) res.push(question);
    }));
    this.actions.forEach(action => action.addUsedQuestions(res));
    return res;
  }
  public getActionTypes(): string[] {
    return this.actions.map(action => action.logicTypeName);
  }
  public getContext(): Base {
    const exp = this.expression;
    if (!exp) return null;
    if (!SurveyHelper.getQuestionContextIndexInfo(exp, surveyLibSettings.expressionVariableDelimiters.start)) return null;
    for (var i = 0; i < this.actions.length; i++) {
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
    const res = this.isSuitableByQuestionFilter(filteredName);
    return !logicTypeName ? res : res && this.isSuitableByLogicTypeInActions(logicTypeName);
  }
  // Nested data (survey-library #12233, CS6): in a survey where a container nests, the filter is a question's
  // path of names (the Logic tab's entry ids). A rule is suitable when a variable of it, resolved in the rule's
  // scopes, reads that question, or when an action is on it or names it. A filter that finds no question (a
  // host's bare name of an inner question) is matched below, as is every filter in "none".
  private isSuitableByQuestionFilter(filteredName: string): boolean {
    const question = isScopedNamesSurvey(this.survey) ? <Question>this.survey.getQuestionByName(filteredName) : null;
    if (!question) return this.isSuitableInExpression(filteredName) || this.isSuitableByNameInActions(filteredName);
    return this.isQuestionReadInExpression(question) || this.actions.some(action => action.isSuitableByQuestion(question));
  }
  private isQuestionReadInExpression(question: Question): boolean {
    if (!this.expression) return false;
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    return names.some(name => this.getQuestionsByVariableName(name).indexOf(question) > -1);
  }
  // Nested data (survey-library #12233): the questions a variable of the rule reads, one per scope of its
  // actions (one rule groups actions with one expression text, and {street} reads a different question in each
  // scope). When no scope resolves it, a top-level question by its name, as master lists and matches {q1} for a
  // question that stores under another value name. An inner question is never found by name: a path of names
  // ({panel1.street}) is no variable.
  private getQuestionsByVariableName(name: string): Array<Question> {
    const res: Array<Question> = [];
    const owners: Array<Base> = this.actions.length > 0 ? this.actions.map(action => this.getExpressionOwner(action)) : [null];
    owners.forEach(owner => {
      const question = getQuestionByVariableName(this.survey, name, owner);
      if (!!question && res.indexOf(question) < 0) res.push(question);
    });
    if (res.length === 0) {
      const question = <Question>this.survey.getQuestionByName(name);
      if (!!question && !isInnerQuestion(question)) res.push(question);
    }
    return res;
  }
  // Nested data (survey-library #12233): in a nesting mode a name is unique only inside its scope, and a bare
  // name read at the root finds no inner question. A name that only inner questions have is matched by what the
  // rule's variables resolve to ({address.street}, or {street} inside the container), not by the text: a root
  // rule's {street} reads no inner street. Any other name keeps the text match.
  private isSuitableInExpression(filteredName: string): boolean {
    const innerQuestions = this.getInnerQuestionsByName(filteredName);
    const isInnerOnly = innerQuestions.length > 0 && !this.survey.getQuestionByName(filteredName);
    if (!isInnerOnly && (this.expression.indexOf(wrapTextByCurlyBraces(filteredName)) !== -1 || this.expression.indexOf("'" + filteredName + ".") !== -1)) return true;
    return this.isInnerQuestionInExpression(innerQuestions);
  }
  private getInnerQuestionsByName(name: string): Array<Question> {
    if (!this.expression || !this.survey) return [];
    return <Array<Question>>this.survey.getAllQuestions().filter(q => q.name === name && isInnerQuestion(q));
  }
  private isInnerQuestionInExpression(questions: Array<Question>): boolean {
    if (questions.length === 0) return false;
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    return names.some(name => questions.indexOf(this.getQuestionByVariableName(name)) > -1);
  }
  // The question a variable of this rule names (getQuestionByVariableName): an inner one by its name or by a
  // data path ({address.street}) resolved in the data scopes of the rule's elements (getExpressionOwner), a
  // top-level one by its value name.
  public getQuestionByVariableName(name: string): Question {
    const owners: Array<Base> = this.actions.length > 0 ? this.actions.map(action => this.getExpressionOwner(action)) : [null];
    for (let i = 0; i < owners.length; i++) {
      const question = getQuestionByVariableName(this.survey, name, owners[i]);
      if (!!question) return question;
    }
    return null;
  }
  // The element whose scopes an action's expression resolves in: its parent element (a template question's
  // dynamic panel, a column's matrix), a choice's or a validator's question (they have no scope of their own),
  // else the element.
  private getExpressionOwner(action: SurveyLogicAction): Base {
    const el: any = action.parentElement || action.element;
    if (!!el && el.isDescendantOf("itemvalue") && !!el.locOwner) return el.locOwner;
    if (!!el && el.isDescendantOf("surveyvalidator") && !!el.errorOwner) return el.errorOwner;
    return el;
  }
  // Nested data (survey-library #12233): getRenames gives, for an action's element (owner: see
  // getExpressionOwner), the variables a key change rewrites as that element
  // reads them (DataKeyRename in utils/data-path.ts); the action's question names (a trigger's setToName) follow.
  // Returns true when the rule's elements got different texts (they are resolved in different scopes), so
  // the rule no longer has one expression and the logic has to be built again.
  // key: the old key; a rule whose texts do not contain it is skipped without resolving its scopes
  public renameVariables(getRenames: (owner: Base, element: Base) => Array<IVariableRename>, key?: string): boolean {
    if (!this.expression || this.actions.length === 0) return false;
    if (!!key && !this.isStrContainsInExpression(key) && !this.actions.some(action => action.hasTextInNames(key))) return false;
    const texts = this.actions.map(action => {
      const renames = getRenames(this.getExpressionOwner(action), action.element);
      action.renameDataKeyInNames(renames);
      let res = this.expression;
      renames.forEach(item => res = this.renameVariablePrefix(res, item.oldName, item.newName));
      return res;
    });
    if (texts.every(text => text === this.expression)) return false;
    if (texts.every(text => text === texts[0])) {
      this.applyExpression(texts[0], true);
      return false;
    }
    this.actions.forEach((action, index) => action.apply(texts[index], true));
    return true;
  }
  private renameVariablePrefix(expression: string, oldName: string, newName: string): string {
    const ob = surveyLibSettings.expressionVariableDelimiters.start;
    let res = expression;
    const postFixes = [surveyLibSettings.expressionVariableDelimiters.end, ".", "["];
    // "{matrix-total.column}": a column total of the matrix, as renameQuestion rewrites it
    if (!!surveyLibSettings.matrix.totalsSuffix) {
      postFixes.push(surveyLibSettings.matrix.totalsSuffix + ".");
    }
    postFixes.forEach(ch => {
      res = this.renameQuestionInExpressionCore(res, res.toLocaleLowerCase(), (ob + oldName + ch).toLocaleLowerCase(), ob + newName + ch);
    });
    return res;
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
    const ob = surveyLibSettings.expressionVariableDelimiters.start;
    oldName = ob + oldName;
    newName = ob + newName;
    let newExpression = this.expression;
    postFixes.forEach(ch => {
      newExpression = this.renameQuestionInExpressionCore(newExpression, newExpression.toLocaleLowerCase(), oldName + ch.toLocaleLowerCase(), newName + ch);
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
