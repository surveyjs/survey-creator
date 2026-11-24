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

// What follows a renamed name in a variable: its end, a path into it ("." or "["), or "-total." ("{matrix-total.column}"
// is a column total of the matrix "matrix")
function getRenamePostfixes(): Array<string> {
  const res = [surveyLibSettings.expressionVariableDelimiters.end, ".", "["];
  const totalsSuffix = surveyLibSettings.matrix.totalsSuffix;
  if (!!totalsSuffix) res.push(totalsSuffix + ".");
  return res;
}

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
  // through a renamed key. renameQuestion matches the whole name only: without nesting "q1.x" can be another
  // question's name (a test pins it).
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
  // The element whose scopes the action's expression resolves in: its parent element (a template question's
  // dynamic panel, a column's matrix), else the element. survey-core resolves a choice and a validator as their
  // question.
  public getOwnerElement(): Base {
    return this.parentElement || this.element || null;
  }
  public get questionNamesValues(): Array<string> {
    return this.questionNames.map(name => this.element[name]);
  }
}

export interface ISurveyLogicItemOwner {
  survey: SurveyModel;
  readOnly: boolean;
  editItem(item: SurveyLogicItem);
  removeItem(item: SurveyLogicItem);
  getExpressionAsDisplayText(expression: string, context?: Base): string;
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
    const postFixes = getRenamePostfixes();
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
    const names = this.getItemValueQuestionNames(question);
    if (!Array.isArray(rows) || !this.isQuestionInExpression(names)) return;
    names.forEach(name => {
      const questionPrefix = name + ".";
      for (var i = 0; i < rows.length; i++) {
        if (Helpers.isValueEmpty(rows[i].value)) continue;
        const rowName = rows[i].value.toString() + ".";
        this.renameQuestionInExpression(questionPrefix + rowName + oldName, questionPrefix + rowName + column.name, [surveyLibSettings.expressionVariableDelimiters.end]);
      }
    });
  }
  public renameItemValue(question: Question, item: ItemValue, oldValue: any): void {
    if (!this.canUpdateExpressionByQuestion(question)) return;
    if (!!question.parentQuestion) {
      if (Array.isArray(question.parentQuestion["rows"])) {
        this.renameDropdownColumnItemValue(question, item, oldValue);
      }
      if (this.actions[0].parentElement !== question.parentQuestion) return;
    }
    const names = this.getItemValueQuestionNames(question);
    if (!this.isQuestionInExpression(names)) return;
    const rows: Array<ItemValue> = question["rows"];
    let newExpression = this.expression;
    names.forEach(name => {
      const questionName = name.toLocaleLowerCase();
      if (!Array.isArray(rows)) {
        newExpression = updateLogicExpression(newExpression, questionName, oldValue, item.value);
      } else {
        for (var i = 0; i < rows.length; i++) {
          if (Helpers.isValueEmpty(rows[i].value)) continue;
          const rowName = "." + rows[i].value.toString();
          newExpression = updateLogicExpression(newExpression, questionName + rowName, oldValue, item.value);
        }
      }
    });
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  private renameDropdownColumnItemValue(question: Question, item: ItemValue, oldValue: any): void {
    const matrix: Question = question.parentQuestion;
    const names = this.getItemValueQuestionNames(matrix);
    if (!this.isQuestionInExpression(names)) return;
    const columnPostFix = "." + question.getValueName();
    if (!this.isStrContainsInExpression(columnPostFix + surveyLibSettings.expressionVariableDelimiters.end)) return;
    const rows: Array<ItemValue> = matrix["rows"];
    let newExpression = this.expression;
    names.forEach(name => {
      for (var i = 0; i < rows.length; i++) {
        if (Helpers.isValueEmpty(rows[i].value)) continue;
        const rowName = rows[i].value.toString();
        newExpression = updateLogicExpression(newExpression, name + "." + rowName + columnPostFix, oldValue, item.value);
      }
    });
    if (newExpression != this.expression) {
      this.applyExpression(newExpression, true);
    }
  }
  public renameRowValue(question: Question, item: ItemValue, oldValue: any): void {
    if (!this.canUpdateExpressionByQuestion(question)) return;
    const names = this.getItemValueQuestionNames(question);
    if (!this.isQuestionInExpression(names)) return;
    names.forEach(name =>
      this.renameQuestionInExpression(name + "." + oldValue.toString(), name + "." + item.value.toString(), [surveyLibSettings.expressionVariableDelimiters.end, "."]));
  }
  private canUpdateExpressionByQuestion(question: Question): boolean {
    return !!this.expression && !!question.name && this.actions.length > 0;
  }
  private isQuestionInExpression(names: Array<string>): boolean {
    return names.some(name => this.isStrContainsInExpression(name));
  }
  private isStrContainsInExpression(str: string): boolean {
    if (!str) return false;
    return this.expression.toLocaleLowerCase().indexOf(str.toLocaleLowerCase()) > -1;
  }
  // The variables an expression reads the question by: inside a record its value name after the record's
  // prefix; else the names the condition editor lists it by: its data path from the root ({address.town}) and,
  // in a survey with scopes, the name from the rule's owner ({town} inside address), each where it reads the
  // question from the rule's actions.
  private getItemValueQuestionNames(question: Question): Array<string> {
    if (!!question.parentQuestion) {
      const valName = question.getValueName();
      if (question.parentQuestion.isDescendantOf("paneldynamic")) return ["panel." + valName];
      if (question.parentQuestion.isDescendantOf("matrixdropdownbase")) return ["row." + valName];
    }
    const name = getConditionQuestionKey(question);
    if (!isScopedNamesSurvey(this.survey)) return [name];
    const names = [name, getConditionQuestionKey(question, this.getExpressionContext())];
    return names.filter((item, index) => names.indexOf(item) === index && this.getQuestionsByVariableName(item).indexOf(question) > -1);
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
    const res = this.getReadQuestions();
    this.actions.forEach(action => action.addUsedQuestions(res));
    return res;
  }
  // the questions the expression's variables read (getQuestionsByVariableName), each once
  private getReadQuestions(): Array<Question> {
    const res: Array<Question> = [];
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    names.forEach(name => this.getQuestionsByVariableName(name).forEach(question => {
      if (res.indexOf(question) < 0) res.push(question);
    }));
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
      ? this.owner.getExpressionAsDisplayText(this.expression, this.getExpressionContext())
      : this.expression;
  }
  // Nested data (survey-library #12233, CS7): the element the rule's variables resolve in, for its display text
  // and the rule editor's lookups: its actions' owner (getOwnerElement) when all of them resolve alike, else
  // null, the root, as before. null too in a survey where nothing nests. Owners resolve alike when they share
  // the record they run in (a template panel's dynamic panel, a detail element's matrix; paths inside the record
  // are not compared), or have none and share the innermost data path key by key ("a.b" is not a > b; the other
  // paths are its prefixes). The path, not the value scope: containers on one key (an address split across two
  // pages) share a path, but each has its own scope object.
  public getExpressionContext(): Base {
    if (this.actions.length === 0 || !isScopedNamesSurvey(this.survey)) return null;
    const owners = this.actions.map(action => action.getOwnerElement());
    const [first, ...rest] = owners.map(owner => this.survey.getExpressionScopePaths(owner)[0]);
    const isAlike = (s: typeof first): boolean => s.record === first.record &&
      (!!s.record || s.path.length === first.path.length && s.path.every((key, i) => key === first.path[i]));
    return rest.every(isAlike) ? owners[0] : null;
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
  // host's bare name of an inner question) is matched below, as is every filter where nothing nests: master's text match
  // differs from the resolution there ({val1} for q1, a setToName "q1.x", 'q1.x' in a function; a test pins it).
  private isSuitableByQuestionFilter(filteredName: string): boolean {
    const question = isScopedNamesSurvey(this.survey) ? <Question>this.survey.getQuestionByName(filteredName) : null;
    if (!question) return this.isSuitableInExpression(filteredName) || this.isSuitableByNameInActions(filteredName);
    return this.isQuestionReadInExpression(question) || this.actions.some(action => action.isSuitableByQuestion(question));
  }
  private isQuestionReadInExpression(question: Question): boolean {
    return !!this.expression && this.getReadQuestions().indexOf(question) > -1;
  }
  // Nested data (survey-library #12233): the questions a variable of the rule reads, one per scope of its
  // actions (one rule groups actions with one expression text, and {street} reads a different question in each
  // scope). When no scope resolves it, a top-level question by its name, as master lists and matches {q1} for a
  // question that stores under another value name. An inner question is never found by name: a path of names
  // ({panel1.street}) is no variable.
  private getQuestionsByVariableName(name: string): Array<Question> {
    const res: Array<Question> = [];
    this.getExpressionOwners().forEach(owner => {
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
  // Only the question the first action that resolves the variable reads counts (getQuestionByVariableName), not
  // every action's, as in getReadQuestions: a test pins it.
  private isInnerQuestionInExpression(questions: Array<Question>): boolean {
    if (questions.length === 0) return false;
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    return names.some(name => questions.indexOf(this.getQuestionByVariableName(name)) > -1);
  }
  // The question a variable of this rule names: the first of getQuestionsByVariableName. Its callers cannot tell
  // the top-level fallback by name: SurveyLogic.getUsedQuestions looks the name up first, and
  // isInnerQuestionInExpression compares with inner questions only.
  public getQuestionByVariableName(name: string): Question {
    return this.getQuestionsByVariableName(name)[0] || null;
  }
  private getExpressionOwners(): Array<Base> {
    return this.actions.length > 0 ? this.actions.map(action => action.getOwnerElement()) : [null];
  }
  // Nested data (survey-library #12233): getRenames gives, for an action's element (owner:
  // SurveyLogicAction.getOwnerElement), the variables a key change rewrites as that element
  // reads them (DataKeyRename in utils/data-path.ts); the action's question names (a trigger's setToName) follow.
  // Returns true when the rule's elements got different texts (they are resolved in different scopes), so
  // the rule no longer has one expression and the logic has to be built again.
  // key: the old key; a rule whose texts do not contain it is skipped without resolving its scopes
  public renameVariables(getRenames: (owner: Base, element: Base) => Array<IVariableRename>, key?: string): boolean {
    if (!this.hasKeyText(key)) return false;
    const texts = this.actions.map(action => {
      const renames = getRenames(action.getOwnerElement(), action.element);
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
  // Nested data: the variables of the expression and the actions' question names, with the element each action
  // reads them from (getOwnerElement), for a rule whose texts contain key
  public forEachVariable(key: string, callback: (owner: Base, name: string) => void): void {
    if (!this.hasKeyText(key)) return;
    const names: Array<string> = [];
    this.getQuestionNamesFromExpression(names);
    this.actions.forEach(action => names.concat(action.questionNamesValues).forEach(name => {
      if (!!name && typeof name === "string") callback(action.getOwnerElement(), name);
    }));
  }
  private hasKeyText(key: string): boolean {
    if (!this.expression || this.actions.length === 0) return false;
    return !key || this.isStrContainsInExpression(key) || this.actions.some(action => action.hasTextInNames(key));
  }
  private renameVariablePrefix(expression: string, oldName: string, newName: string): string {
    const ob = surveyLibSettings.expressionVariableDelimiters.start;
    let res = expression;
    getRenamePostfixes().forEach(ch => {
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
