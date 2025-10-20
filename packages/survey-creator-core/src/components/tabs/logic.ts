import { SurveyModel, Base, Serializer, Event, ExpressionRunner, Question, HashTable, Helpers, property, propertyArray, ItemValue, MatrixDropdownColumn, QuestionDropdownModel, EventBase, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions, settings } from "../../creator-settings";
import { ISurveyLogicItemOwner, SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import { SurveyLogicTypes, SurveyLogicType, ISurveyLogicType } from "./logic-types";
import "./logic.scss";

export function initLogicOperator(question: QuestionDropdownModel) {
  question.popupModel.isFocusedContent = true;
  question.popupModel.setWidthByTarget = false;
  question.popupModel.positionMode = "flex";
  question.popupModel.showPointer = true;
  question.searchEnabled = false;
  question.dropdownListModel["listModel"].searchEnabled = ["operator", "conjunction", "logicTypeName"].indexOf(question.name) === -1;
}

export class LogicEvent extends EventBase<SurveyLogic, any> { }

export class SurveyLogic extends Base implements ISurveyLogicItemOwner {
  private editableItemValue: SurveyLogicItem;
  public static get visibleActions(): Array<string> {
    return settings.logic.visibleActions;
  }
  public static set visibleActions(val: Array<string>) {
    settings.logic.visibleActions = val;
  }
  public static get types() {
    return SurveyLogicTypes.types;
  }
  public invisibleItems: Array<SurveyLogicItem> = [];
  public onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;

  /**
   * The event is called when logic item is saved.
   * options.item is the saved logic item.
   */
  public onLogicItemSaved: LogicEvent = new LogicEvent();
  /**
   * The event is called before logic item is saved. You can set options.error to non empty string to show error instead of saving the item.
   * You can use options.item.actions to access actions and optionally set errorText to a particular action.
   * options.item is the editing logic item. options.item.actions contains the old actions.
   * options.actions is the array of  logic actions that user edit and create.
   * usedNamesInExpression - the string list of all variables (questions, calculatedValues, and so on) that are used in expression
   * error - the error string. It is empty by default. You have to set it to non-empty string to show the error on saving.
   */
  public onLogicItemValidation: LogicEvent = new LogicEvent();
  /**
   * The event is called before logic item is being removed.
   * options.allowRemove is the option you can set to false and prevent removing.
   * options.item is the logic item to remove.
   */
  public onLogicItemRemoving: LogicEvent = new LogicEvent();
  /**
   * The event is called when logic item is removed.
   * options.item is the removed logic item.
   */
  public onLogicItemRemoved: LogicEvent = new LogicEvent();

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super();
    if (!this.options)this.options = new EmptySurveyCreatorOptions();
    this.readOnly = this.optionsReadOnly;
    this.update();
  }
  public dispose(): void {
    super.dispose();
    this.onEndEditing();
    this.survey = undefined;
  }
  @propertyArray() items: Array<SurveyLogicItem>;
  @propertyArray() logicTypes: Array<SurveyLogicType>;
  @property() errorText: string;
  @property({
    onSet: (value, target: SurveyLogic) => {
      target.onReadOnlyChanged();
    }
  }) readOnly: boolean;
  @property() placeholderHtml: string;

  public get editableItem(): SurveyLogicItem {
    return this.editableItemValue;
  }
  private modeValue: string;
  /**
   * There are 3 modes: view, new, edit
   */
  public get mode(): string { return this.modeValue; }
  public set mode(val: string) {
    if (this.modeValue === val) return;
    const oldValue = this.mode;
    this.modeValue = val;
    this.errorText = "";
    if (val == "view" && (oldValue == "edit" || oldValue == "new")) {
      this.onEndEditing();
    }
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public getTypeByName(name: string): SurveyLogicType {
    for (var i = 0; i < this.logicTypes.length; i++) {
      if (this.logicTypes[i].name == name) return this.logicTypes[i];
    }
    return null;
  }
  public update(
    survey: SurveyModel = null,
    options: ISurveyCreatorOptions = null
  ) {
    if (!!survey) {
      this.survey = survey;
    }
    if (!!options) {
      this.options = options;
    }
    this.logicTypes = this.createLogicTypes();
    this.updateVisibleItems();
    this.invisibleItems = this.buildItems(false);
    this.readOnly = this.optionsReadOnly;
    this.mode = "view";
  }
  private updateVisibleItems() {
    this.items = this.buildItems(true);
    this.editableItemValue = null;
  }
  public get optionsReadOnly() {
    return !!this.options && this.options.readOnly;
  }
  public saveEditableItem(): boolean {
    if (!this.editableItem || this.hasError()) return false;
    !!this.options && this.options.startUndoRedoTransaction();
    this.onEditableItemApply();
    const hasInList = this.items.indexOf(this.editableItem) < 0;
    if (hasInList) {
      this.items.push(this.editableItem);
    }
    const isNew = !hasInList || this.editableItem.isNew;
    this.editableItem.isNew = false;
    this.onItemChanged(this.editableItem, isNew ? "new" : "modify");
    !!this.options && this.options.stopUndoRedoTransaction();
    this.onLogicItemSaved.fire(this, { item: this.editableItem });
    return true;
  }
  public saveEditableItemAndBack(): boolean {
    var res = this.saveEditableItem();
    if (res) {
      this.mode = "view";
    }
    return res;
  }
  protected onEditableItemApply() { }
  protected onItemChanged(item: SurveyLogicItem, changeType: string) {
    if (!!this.onChangedCallback) {
      this.onChangedCallback(item, changeType);
    }
  }
  public renameQuestion(oldName: string, newName: string): void {
    this.items.forEach(item => item.renameQuestion(oldName, newName));
    this.invisibleItems.forEach(item => item.renameQuestion(oldName, newName));
  }
  public renameItemValue(item: ItemValue, oldValue: any): void {
    const question = this.getItemValueQuestion(item, oldValue);
    if (!question) return;
    if (question.isDescendantOf("matrixdropdownbase")) {
      question.columns.forEach(column => {
        const choices = column.choices;
        if (Array.isArray(choices) && choices.length === 0) {
          this.renamteItemValueCore(column.templateQuestion, item, oldValue);
        }
      });
    } else {
      this.renamteItemValueCore(question, item, oldValue);
    }
  }
  private renamteItemValueCore(question: Question, item: ItemValue, oldValue: any): void {
    this.items.forEach(lItem => lItem.renameItemValue(question, item, oldValue));
    this.invisibleItems.forEach(lItem => lItem.renameItemValue(question, item, oldValue));
  }
  public renameRowValue(item: ItemValue, oldValue: any): void {
    const question = this.getItemValueQuestion(item, oldValue);
    if (!question) return;
    this.items.forEach(lItem => lItem.renameRowValue(question, item, oldValue));
    this.invisibleItems.forEach(lItem => lItem.renameRowValue(question, item, oldValue));
  }
  public renameColumn(column: MatrixDropdownColumn, oldName: string): void {
    const question: any = column.colOwner;
    if (!question || !question.isQuestion) return;
    this.items.forEach(lItem => lItem.renameColumn(question, column, oldName));
    this.invisibleItems.forEach(lItem => lItem.renameColumn(question, column, oldName));
  }
  private getItemValueQuestion(item: ItemValue, oldValue: any): Question {
    if (!item.locOwner || Helpers.isValueEmpty(oldValue) || Helpers.isValueEmpty(item.value)) return null;
    const owner: any = item.locOwner;
    return owner.isQuestion ? owner : null;
  }
  public removeQuestion(name: string) {
    this.removeQuestionCore(name, this.items);
    this.removeQuestionCore(name, this.invisibleItems);
  }
  public hasError(): boolean {
    if (!this.editableItem) return false;
    if (this.hasErrorInUI()) return true;
    var exp = new ExpressionRunner(this.getExpressionText());
    var options = {
      item: this.editableItem,
      error: "",
      usedNamesInExpression: exp.getVariables(),
      actions: this.getEditingActions(),
    };
    this.onLogicItemValidation.fire(this, options);
    this.errorText = options.error;
    const creator = (<any>this.survey).creator;
    if (!!this.errorText && !!creator)
      creator.notify(this.errorText, "error");
    return !!this.errorText;
  }
  public getUsedQuestions(): Question[] {
    const names: { [key: string]: Question } = {};
    this.items.forEach(item => {
      item.getQuestionNames().forEach(name => {
        const question = this.survey.getQuestionByName(name);
        if (!!question && !names[name]) {
          names[name] = question;
        }
      });
    });
    let res: Question[] = [];
    Object.keys(names).forEach(item => {
      if (!!names[item]) {
        res.push(names[item]);
      }
    });
    return res;
  }
  public getUsedActionTypes(): SurveyLogicType[] {
    const types: { [key: string]: SurveyLogicType } = {};
    this.items.forEach(item => {
      item.getActionTypes().forEach(name => {
        if (!types[name]) {
          types[name] = this.logicTypes.filter(logicType => logicType.name == name)[0];
        }
      });
    });

    let res: SurveyLogicType[] = [];
    Object.keys(types).forEach(item => {
      if (!!types[item]) {
        res.push(types[item]);
      }
    });
    return res;
  }
  protected hasErrorInUI(): boolean {
    return false;
  }
  protected getExpressionText(): string {
    return "";
  }
  protected getEditingActions(): Array<SurveyLogicAction> {
    return [];
  }
  protected onReadOnlyChanged(): void { }
  private removeQuestionCore(name: string, items: Array<SurveyLogicItem>) {
    for (var i = 0; i < items.length; i++) {
      items[i].removeQuestion(name);
    }
  }
  public addNew() {
    !!this.options && this.options.startUndoRedoTransaction();
    var logicItem = new SurveyLogicItem(this);
    logicItem.isNew = true;
    this.items.push(logicItem);
    this.editItemCore(logicItem);
    !!this.options && this.options.stopUndoRedoTransaction();
  }
  public editItem(item: SurveyLogicItem) {
    !!this.options && this.options.startUndoRedoTransaction();
    this.editItemCore(item);
    !!this.options && this.options.stopUndoRedoTransaction();
  }
  private editItemCore(item: SurveyLogicItem) {
    this.editableItemValue = item;
    this.onStartEditing();
    this.mode = item.isNew ? "new" : "edit";
  }
  protected onStartEditing() { }
  protected onEndEditing() {
    this.editableItemValue = null;
  }
  protected canRemoveItem(item: SurveyLogicItem): boolean {
    const eventOptions = { item: item, allowRemove: true };
    this.onLogicItemRemoving.fire(this, eventOptions);
    return eventOptions.allowRemove;
  }
  public removeItem(item: SurveyLogicItem, checkCanRemove: boolean = true): void {
    if (checkCanRemove && !this.canRemoveItem(item)) return;
    !!this.options && this.options.startUndoRedoTransaction();
    item.apply("");
    var index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.onItemChanged(item, "delete");
    !!this.options && this.options.stopUndoRedoTransaction();
    this.onLogicItemRemoved.fire(this, { item: item });
  }
  public addAction(
    lt: SurveyLogicType,
    element: Base = null
  ): SurveyLogicAction {
    var action = this.createNewAction(lt, element);
    this.editableItem.addNewAction(action);
    return action;
  }
  public addNewAction(): SurveyLogicAction {
    return this.addAction(null, null);
  }
  private createNewAction(
    lt: SurveyLogicType,
    element: Base
  ): SurveyLogicAction {
    var action = new SurveyLogicAction(lt, element, this.survey);
    return action;
  }
  public getVisibleLogicTypes(): Array<SurveyLogicType> {
    var res = [];
    var logicTypes = this.logicTypes;
    for (var i = 0; i < logicTypes.length; i++) {
      if (logicTypes[i].visible) {
        res.push(logicTypes[i]);
      }
    }
    return res;
  }
  public removeAction(action: SurveyLogicAction) {
    if (!this.editableItem) return;
    this.editableItem.removeAction(action);
    if (this.editableItem.actions.length == 0) {
      this.addNewAction();
    }
  }
  public getExpressionAsDisplayText(expression: string): string {
    return SurveyLogicType.expressionToDisplayText(
      this.survey,
      this.options,
      expression
    );
  }
  protected buildItems(showInUI: boolean): Array<SurveyLogicItem> {
    var res = [];
    var hash = {};
    var elements = this.getAllElements();
    for (var i = 0; i < elements.length; i++) {
      this.buildItemsByElement(elements[i], res, hash, showInUI);
    }
    return res;
  }
  protected getAllElements(): Array<Base> {
    var res = [];
    this.AddElements(this.survey.pages, res);
    this.AddElements(SurveyLogicTypes.baseTypes.question.getSelectorChoices(this.survey, null), res);
    this.AddElements(this.survey.getAllPanels(), res);
    this.AddElements(this.survey.triggers, res);
    this.AddElements(this.survey.completedHtmlOnCondition, res);
    this.AddElements(this.survey.calculatedValues, res);
    this.AddElements(SurveyLogicTypes.baseTypes.matrixdropdowncolumn.getSelectorChoices(this.survey, null), res);
    this.AddElements(this.getValidators(), res);
    this.AddElements(this.getItemValues(), res);
    return res;
  }
  private getValidators(): Array<Base> {
    var res = [];
    var questions = this.survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      this.AddElements((<Question>questions[i]).validators, res);
    }
    return res;
  }
  private getItemValues(): Array<Base> {
    var res = [];
    var questions = this.survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      ["choices", "columns", "rows"].forEach(propName => this.addItemValuesCore(q, propName, res));
    }
    return res;
  }
  private addItemValuesCore(q: Question, propName: string, res: Array<Base>) {
    var itemValues = q[propName];
    if (!itemValues) return;
    var prop = Serializer.findProperty(q.getType(), propName);
    if (!this.isItemValueProp(prop)) return;
    for (var i = 0; i < itemValues.length; i++) {
      var itemValue = itemValues[i];
      if (itemValue instanceof ItemValue) {
        res.push(itemValue);
      }
    }
    this.AddElements(itemValues, res);
  }
  private isItemValueProp(prop: JsonObjectProperty): boolean {
    return prop && ["itemvalue[]", "choiceitem[]", "checkboxitem[]", "matrixcolumn[]"].indexOf(prop.type) > -1;
  }
  private AddElements(src: Array<any>, dest: Array<any>) {
    for (var i = 0; i < src.length; i++) {
      dest.push(src[i]);
    }
  }
  private buildItemsByElement(
    element: Base,
    dest: Array<SurveyLogicItem>,
    hash: HashTable<SurveyLogicItem>,
    showInUI: boolean
  ) {
    var types = this.getElementAllTypes(element);
    for (var i = 0; i < this.logicTypes.length; i++) {
      var lt = this.logicTypes[i];
      if (lt.showInUI !== showInUI) continue;
      var expression = element[lt.propertyName];
      if (lt.hasNeededTypes(types) && !Helpers.isValueEmpty(expression)) {
        var key = this.getLogicItemHashKey(expression, element);
        var item = hash[key];
        if (!item) {
          item = new SurveyLogicItem(this, expression);
          hash[key] = item;
          dest.push(item);
        }
        var action = this.createNewAction(lt, element);
        item.addNewAction(action);
      }
    }
  }
  private getLogicItemHashKey(expression: string, element: Base): string {
    const parentQuestion = this.getParentQuestion(element);
    const parentName = !!parentQuestion ? "@" + parentQuestion.name : "";
    return parentName + expression.replace(" ", "").toLowerCase();
  }
  private getParentQuestion(element: Base): Question {
    const parentQuestion = (<any>element).parentQuestion;
    if (!!parentQuestion) return parentQuestion;
    if (element.isDescendantOf("matrixdropdowncolumn")) return (<any>element).colOwner;
    return null;
  }
  private getElementAllTypes(element: Base) {
    var types = [];
    var type = element.getType();
    types.push(type);
    while(!!type && type != "base") {
      var cl = Serializer.findClass(type);
      if (!cl) break;
      type = cl.parentName;
      if (!!type) {
        types.push(type);
      }
    }
    return types;
  }
  protected createLogicTypes(): Array<SurveyLogicType> {
    var res = [];
    SurveyLogic.types.forEach(logicType => {
      if (this.isLogicTypeVisible(logicType)) {
        res.push(new SurveyLogicType(logicType, this.survey, this.options));
      }
    });
    return res;
  }
  private isLogicTypeVisible(logicType: ISurveyLogicType): boolean {
    const visActions = SurveyLogic.visibleActions;
    if (visActions.length > 0 && visActions.indexOf(logicType.name) < 0) return false;
    const prefix = "trigger_";
    if (logicType.name.indexOf(prefix) === 0) {
      return settings.logic.invisibleTriggers.indexOf(logicType.name.substring(prefix.length)) < 0;
    }
    return true;
  }
}
