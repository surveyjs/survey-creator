import {
  SurveyModel,
  Base,
  SurveyTrigger,
  Serializer,
  property,
  propertyArray,
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import {
  ExpressionToDisplayText,
  ExpressionRemoveVariable,
} from "../expressionToDisplayText";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";

export interface ISurveyLogicType {
  name: string;
  baseClass: string;
  propertyName: string;
  templateName?: string;
  showInUI?: boolean;
  showIf?: (survey: SurveyModel) => boolean;
  createNewElement?: (survey: SurveyModel) => Base;
  saveElement?: (survey: SurveyModel, action: SurveyLogicAction) => void;
  createTemplateObject?: (element: Base) => any;
  isUniqueItem?: boolean;
  questionNames?: Array<string>;
  getDisplayText?: (
    element: Base,
    formatStr: string,
    lt: SurveyLogicType
  ) => string;
  getDisplayTextName?: (element: Base) => string;
}

export function getLogicString(name: string) {
  return editorLocalization.getString("ed.lg." + name);
}

export class SurveyLogicType {
  public static expressionToDisplayText(
    survey: SurveyModel,
    options: ISurveyCreatorOptions,
    expression: string
  ): string {
    return new ExpressionToDisplayText(survey, options).toDisplayText(
      expression
    );
  }
  constructor(
    private logicType: ISurveyLogicType,
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {}
  public get name(): string {
    return this.logicType.name;
  }
  public get baseClass(): string {
    return this.logicType.baseClass;
  }
  public get propertyName(): string {
    return this.logicType.propertyName;
  }
  public get templateName(): string {
    if (this.isTrigger) return "svd-object-editor-content";
    return !!this.logicType.templateName
      ? this.logicType.templateName
      : "svd-element-selector";
  }
  public get visible(): boolean {
    if (!this.showInUI) return false;
    if (!!this.logicType.showIf) return this.logicType.showIf(this.survey);
    return true;
  }
  public get showTitlesInExpression(): boolean {
    return !!this.options && this.options.showTitlesInExpressions;
  }
  public get hasItemSelector(): boolean {
    return !!this.baseClass && this.showInUI && !this.canCreateNewElement();
  }
  public createItemSelector(): any {
    if (!this.hasItemSelector) return null;
    /*
    var res = new SurveyElementSelector(
      this.survey,
      this.baseClass,
      this.showTitlesInExpression
    );
    res.disabledPropertyName = this.propertyName;
    return res;
    */
    return null;
  }
  public get showInUI(): boolean {
    return this.logicType.showInUI !== false;
  }
  private canCreateNewElement(): boolean {
    return !!this.logicType.createNewElement || this.isTrigger;
  }
  private get isTrigger(): boolean {
    return !!this.baseClass && this.baseClass.indexOf("trigger") > -1;
  }
  public createNewElement(survey: SurveyModel): Base {
    if (!!this.logicType.createNewElement)
      return this.logicType.createNewElement(survey);
    if (this.isTrigger) return this.createTriggerElement(survey);
    return null;
  }
  public saveElement(action: SurveyLogicAction): void {
    if (!!this.logicType.saveElement) {
      this.logicType.saveElement(this.survey, action);
    }
    if (this.isTrigger) {
      this.saveTriggerElement(action);
    }
  }
  public createTemplateObject(element: Base): any {
    if (!!this.logicType.createTemplateObject)
      return this.logicType.createTemplateObject(element);
    if (this.isTrigger) return this.createTriggerTemplateObject(element);
    return null;
  }
  public get isUniqueItem(): boolean {
    return this.logicType.isUniqueItem === true;
  }
  public get questionNames(): Array<string> {
    return this.logicType.questionNames;
  }
  public get displayName(): string {
    return getLogicString(this.name + "Name");
  }
  public get description(): string {
    return getLogicString(this.name + "Description");
  }
  public getDisplayText(element: Base): string {
    var str = getLogicString(this.name + "Text");
    if (!!this.logicType.getDisplayText)
      return this.logicType.getDisplayText(element, str, this);
    var name = "";
    if (!!this.logicType.getDisplayTextName) {
      name = this.logicType.getDisplayTextName(element);
    } else {
      if (!!element && !!element["name"]) {
        name = element["name"];
      }
    }
    if (!!name) {
      return str["format"](this.formatElName(name));
    }
    return str;
  }
  public formatElName(name: string): string {
    if (this.showTitlesInExpression && !!this.survey) {
      var question = this.survey.getQuestionByName(name);
      if (!!question && !!question.title) {
        name = question.title;
      }
    }
    return "{" + name + "}";
  }
  public formatExpression(expression: string): string {
    return SurveyLogicType.expressionToDisplayText(
      this.survey,
      this.options,
      expression
    );
  }
  private createTriggerElement(survey: SurveyModel): Base {
    var res = <SurveyTrigger>Serializer.createClass(this.baseClass);
    res["survey"] = survey;
    res.setOwner(survey);
    return res;
  }
  private saveTriggerElement(action: SurveyLogicAction) {
    if (!!action.templateObject.editableObject) {
      var edObj = action.templateObject.editableObject;
      edObj.applyAll(["expression"]);
    } else {
      var trigger = <SurveyTrigger>action.element;
      var survey = this.survey;
      if (this.isNewTrigger(trigger) && !!trigger.expression) {
        survey.triggers.push(trigger);
      }
    }
  }
  private createTriggerTemplateObject(element: Base) {
    //TODO
    return null;
    /*
      var res: SurveyElementEditorContentModel = null;
      if (this.isNewTrigger(element)) {
        res = new SurveyElementEditorContentModel(element, "", this.options);
      } else {
        res = new SurveyQuestionEditor(element, "", this.options);
      }
      var expressionEditor = res.getPropertyEditorByName("expression");
      if (!!expressionEditor) {
        expressionEditor.isHidden = true;
      }
      return res;
      */
  }
  private isNewTrigger(element: Base): boolean {
    var trigger = <SurveyTrigger>element;
    var survey = this.survey;
    return !!survey && survey.triggers.indexOf(trigger) < 0;
  }
}

export class SurveyLogicAction extends Base {
  public onLogicTypeChanged: () => void;
  private itemSelectorValue: any = null;
  koAfterRender: any;
  constructor(
    logicType: SurveyLogicType,
    element: Base,
    private survey: SurveyModel
  ) {
    super();
    this.logicType = logicType;
    this.element = element;
    this.doLogicTypeChanged();
    this.koAfterRender = function () {};
  }
  @property() logicType: SurveyLogicType;
  @property() template: string;
  @property() element: Base;
  @property() errorText: string;
  @property() templateObject: any;
  @propertyArray() logicTypes: Array<SurveyLogicType>;
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "logicType") {
      this.element = !!this.logicType
        ? this.logicType.createNewElement(this.survey)
        : null;
      if (!!this.onLogicTypeChanged) this.onLogicTypeChanged();
      this.doLogicTypeChanged();
    }
  }
  public get itemSelector(): any {
    return this.itemSelectorValue;
  }
  public apply(expression: string, isRenaming: boolean = false) {
    if (!!this.element && !!this.logicType) {
      this.element[this.logicType.propertyName] = expression;
      if (!isRenaming) {
        this.logicType.saveElement(this);
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
    return !!this.logicType ? this.logicType.displayName : null;
  }
  public get logicTypeName(): string {
    return !!this.logicType ? this.logicType.name : null;
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
    if (!!this.itemSelector) return this.itemSelector.hasError();
    if (!!this.templateObject && !!this.templateObject.hasError)
      return this.templateObject.hasError();
    return false;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  private get questionNames(): Array<string> {
    if (!this.logicType || !this.logicType.questionNames) return [];
    return this.logicType.questionNames;
  }
  private doLogicTypeChanged() {
    this.errorText = "";
    this.itemSelectorValue = !!this.logicType
      ? this.logicType.createItemSelector()
      : null;
    if (this.itemSelector) {
      var self = this;
      this.itemSelector.element = this.element;
      this.itemSelector.onValueChangedCallback = function (newValue: string) {
        self.element = self.itemSelector.element;
      };
    }
    var obj = !!this.logicType
      ? this.logicType.createTemplateObject(this.element)
      : null;
    obj = obj || this.itemSelector;
    this.template = "";
    this.templateObject = obj;
    this.template = !!this.logicType ? this.logicType.templateName : "";
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
