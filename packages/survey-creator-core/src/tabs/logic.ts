import {
  SurveyModel,
  Base,
  Serializer,
  HtmlConditionItem,
  Event,
  ExpressionRunner,
  Question,
  HashTable,
  Helpers,
  property,
  propertyArray,
} from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { ConditionEditor } from "../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import {
  ISurveyLogicItemOwner,
  SurveyLogicType,
  SurveyLogicItem,
  SurveyLogicAction,
  getLogicString,
} from "./logic-items";

export class SurveyLogic extends Base implements ISurveyLogicItemOwner {
  public static visibleActions = [];
  public static types = [
    {
      name: "page_visibility",
      baseClass: "page",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.pages.length > 1;
      },
    },
    {
      name: "panel_visibility",
      baseClass: "panel",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllPanels().length > 0;
      },
    },
    {
      name: "panel_enable",
      baseClass: "panel",
      propertyName: "enableIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllPanels().length > 0;
      },
    },
    {
      name: "question_visibility",
      baseClass: "question",
      propertyName: "visibleIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "question_enable",
      baseClass: "question",
      propertyName: "enableIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "question_require",
      baseClass: "question",
      propertyName: "requiredIf",
      showIf: function (survey: SurveyModel) {
        return survey.getAllQuestions().length > 0;
      },
    },
    {
      name: "expression_expression",
      baseClass: "expression",
      propertyName: "expression",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_visibleIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "visibleIf",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_enableIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "enableIf",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_requiredIf",
      baseClass: "matrixdropdowncolumn",
      propertyName: "requiredIf",
      showInUI: false,
    },
    {
      name: "matrixdropdowncolumn_totalExpression",
      baseClass: "matrixdropdowncolumn",
      propertyName: "totalExpression",
      showInUI: false,
    },
    {
      name: "trigger_complete",
      baseClass: "completetrigger",
      propertyName: "expression",
      isUniqueItem: true,
    },
    {
      name: "trigger_setvalue",
      baseClass: "setvaluetrigger",
      propertyName: "expression",
      questionNames: ["setToName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        return formatStr["format"](
          lt.formatElName(element["setToName"]),
          element["setValue"]
        );
      },
    },
    {
      name: "trigger_copyvalue",
      baseClass: "copyvaluetrigger",
      propertyName: "expression",
      questionNames: ["setToName", "fromName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        return formatStr["format"](
          lt.formatElName(element["setToName"]),
          lt.formatElName(element["fromName"])
        );
      },
    },
    {
      name: "trigger_skip",
      baseClass: "skiptrigger",
      propertyName: "expression",
      questionNames: ["gotoName"],
      isUniqueItem: true,
      getDisplayTextName: function (element: Base): string {
        return element["gotoName"];
      },
    },
    {
      name: "trigger_runExpression",
      baseClass: "runexpressiontrigger",
      propertyName: "expression",
      questionNames: ["setToName"],
      getDisplayText: function (
        element: Base,
        formatStr: string,
        lt: SurveyLogicType
      ): string {
        var res = getLogicString("trigger_runExpressionText1");
        res = res["format"](lt.formatExpression(element["runExpression"]));
        var setToName = element["setToName"];
        if (!!setToName) {
          var str = getLogicString("trigger_runExpressionText2");
          res += str["format"](lt.formatElName(element["setToName"]));
        }
        return res;
      },
    },
    {
      name: "completedHtmlOnCondition",
      baseClass: "htmlconditionitem",
      propertyName: "expression",
      isUniqueItem: true,
      templateName: "svd-property-editor-html",
      createNewElement: function (survey: SurveyModel) {
        return new HtmlConditionItem();
      },
      createTemplateObject: function (element: Base) {
        var item = <HtmlConditionItem>element;
        return {
          //TODO
          //koValue: ko.observable(item.html),
          readOnly: false,
          koAfterRender: function () {},
        };
      },
      saveElement: function (survey: SurveyModel, action: SurveyLogicAction) {
        var item = <HtmlConditionItem>action.element;
        //TODO
        //item.html = action.templateObject.koValue();
        if (survey.completedHtmlOnCondition.indexOf(item) < 0) {
          survey.completedHtmlOnCondition.push(item);
        }
      },
    },
    {
      name: "trigger_runExpression_Expression",
      baseClass: "runexpressiontrigger",
      propertyName: "runExpression",
      showInUI: false,
    },
    {
      name: "question_expressionValidator",
      baseClass: "expressionvalidator",
      propertyName: "expression",
      showInUI: false,
    },
    {
      name: "matrix_rowsVisibleIf",
      baseClass: "matrix",
      propertyName: "rowsVisibleIf",
      showInUI: false,
    },
    {
      name: "matrix_columnsVisibleIf",
      baseClass: "matrix",
      propertyName: "columnsVisibleIf",
      showInUI: false,
    },
    {
      name: "matrixdropdown_rowsVisibleIf",
      baseClass: "matrixdropdown",
      propertyName: "rowsVisibleIf",
      showInUI: false,
    },
    {
      name: "select_choicesVisibleIf",
      baseClass: "selectbase",
      propertyName: "choicesVisibleIf",
      showInUI: false,
    },
    {
      name: "select_choicesEnableIf",
      baseClass: "selectbase",
      propertyName: "choicesEnableIf",
      showInUI: false,
    },
    {
      name: "itemvalue_visibleIf",
      baseClass: "itemvalue",
      propertyName: "visibleIf",
      showInUI: false,
    },
    {
      name: "itemvalue_enableIf",
      baseClass: "itemvalue",
      propertyName: "enableIf",
      showInUI: false,
    },
    {
      name: "calculatedValue",
      baseClass: "calculatedvalue",
      propertyName: "expression",
      showInUI: false,
    },
  ];
  public invisibleItems: Array<SurveyLogicItem> = [];
  public onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;

  /**
   * The event is called when logic item is saved.
   * <br/> options.item is the saved logic item.
   */
  public onLogicItemSaved: Event<
    (sender: SurveyLogic, options: any) => any,
    any
  > = new Event<(sender: SurveyLogic, options: any) => any, any>();
  /**
   * The event is called before logic item is saved. You can set options.error to non empty string to show error instead of saving the item.
   * You can use options.item.actions to access actions and optionally set errorText to a particular action.
   * <br/> options.item is the saved logic item.
   * <br/> usedNamesInExpression - the string list of all variables (questions, calculatedValues, and so on) that are used in expression
   * <br/> error - the error string. It is empty by default. You have to set it to non-empty string to show the error on saving.
   */
  public onLogicItemValidation: Event<
    (sender: SurveyLogic, options: any) => any,
    any
  > = new Event<(sender: SurveyLogic, options: any) => any, any>();
  /**
   * The event is called before logic item is being removed.
   * <br/> options.allowRemove is the option you can set to false and prevent removing.
   * <br/> options.item is the logic item to remove.
   */
  public onLogicItemRemoving: Event<
    (sender: SurveyLogic, options: any) => any,
    any
  > = new Event<(sender: SurveyLogic, options: any) => any, any>();
  /**
   * The event is called when logic item is removed.
   * <br/> options.item is the removed logic item.
   */
  public onLogicItemRemoved: Event<
    (sender: SurveyLogic, options: any) => any,
    any
  > = new Event<(sender: SurveyLogic, options: any) => any, any>();

  koAfterRender: any;
  private expressionEditorValue: ConditionEditor;

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super();
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.createExpressionPropertyEditor();
    //TODO
    //this.hideExpressionHeader = options && options["hideExpressionHeader"];
    this.readOnly = this.optionsReadOnly;
    this.update();
    this.koAfterRender = function () {};
  }
  @propertyArray() items: Array<SurveyLogicItem>;
  @propertyArray() logicTypes: Array<SurveyLogicType>;
  /**
   * There are 3 modes: view, new, edit
   */
  @property() mode: string;
  @property() errorText: string;
  @property() editableItem: SurveyLogicItem;
  @property() readOnly: boolean;
  @property() placeholderHtml: string;
  public get expressionEditor(): ConditionEditor {
    return this.expressionEditorValue;
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "mode") {
      if (newValue !== "view" && newValue !== "new" && newValue !== "edit")
        return;
      if (this.mode == newValue) return;
      var oldMode = this.mode;
      if ((oldMode == "new" || oldMode == "edit") && newValue == "view") {
        this.updateVisibleItems();
      }
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
    this.editableItem = null;
    this.errorText = "";
  }
  public get optionsReadOnly() {
    return !!this.options && this.options.readOnly;
  }
  public saveEditableItem(): boolean {
    if (!this.editableItem || this.hasError()) return false;
    !!this.options && this.options.startUndoRedoTransaction();
    this.expressionEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    var isNew = this.items.indexOf(this.editableItem) < 0;
    if (isNew) {
      this.items.push(this.editableItem);
    }
    this.onItemChanged(this.editableItem, isNew ? "new" : "modify");
    !!this.options && this.options.stopUndoRedoTransaction();
    this.onLogicItemSaved.fire(this, { item: this.editableItem });
    return true;
  }
  protected onItemChanged(item: SurveyLogicItem, changeType: string) {
    if (!!this.onChangedCallback) {
      this.onChangedCallback(item, changeType);
    }
  }
  public renameQuestion(oldName: string, newName: string) {
    this.renameQuestionCore(oldName, newName, this.items);
    this.renameQuestionCore(oldName, newName, this.invisibleItems);
  }
  public removeQuestion(name: string) {
    this.removeQuestionCore(name, this.items);
    this.removeQuestionCore(name, this.invisibleItems);
  }
  public hasError(): boolean {
    if (!this.editableItem) return false;
    var text = "";
    if (!this.isExpressionValid) {
      text = getLogicString("expressionInvalid");
    }
    var ops = this.editableItem.actions;
    if (!text && ops.length == 0) {
      text = getLogicString("noActionError");
    }
    if (!text) {
      for (var i = 0; i < ops.length; i++) {
        if (ops[i].hasError()) {
          text = getLogicString("actionInvalid");
        }
      }
    }
    var exp = new ExpressionRunner(this.expressionEditor.text);
    var options = {
      item: this.editableItem,
      error: text,
      usedNamesInExpression: exp.getVariables(),
    };
    this.onLogicItemValidation.fire(this, options);
    text = options.error;

    this.errorText = text;
    return !!text;
  }
  public get addNewActionText(): string {
    return getLogicString("addNewAction");
  }
  public get selectedActionCaption(): string {
    return getLogicString("selectedActionCaption");
  }
  public get expressionSetupText(): string {
    return getLogicString("expressionSetup");
  }
  public get actionsSetupText(): string {
    return getLogicString("actionsSetup");
  }
  private get isExpressionValid(): boolean {
    return this.expressionEditor.isReady;
  }
  private renameQuestionCore(
    oldName: string,
    newName: string,
    items: Array<SurveyLogicItem>
  ) {
    for (var i = 0; i < items.length; i++) {
      items[i].renameQuestion(oldName, newName);
    }
  }
  private removeQuestionCore(name: string, items: Array<SurveyLogicItem>) {
    for (var i = 0; i < items.length; i++) {
      items[i].removeQuestion(name);
    }
  }
  public get addNewText(): string {
    var lgAddNewItem = this.getLocString("ed.lg.addNewItem");
    return !!lgAddNewItem ? lgAddNewItem : this.getLocString("pe.addNew");
  }
  public addNew() {
    !!this.options && this.options.startUndoRedoTransaction();
    var logicItem = new SurveyLogicItem(this);
    this.editableItem = logicItem;
    logicItem.addNewAction(this.createNewAction(null, null));
    this.expressionEditor.text = "";
    this.mode = "new";
    !!this.options && this.options.stopUndoRedoTransaction();
  }
  public editItem(item: SurveyLogicItem) {
    !!this.options && this.options.startUndoRedoTransaction();
    this.editableItem = item;
    this.expressionEditor.text = item.expression;
    this.mode = "edit";
    !!this.options && this.options.stopUndoRedoTransaction();
  }
  public removeItem(item: SurveyLogicItem) {
    var eventOptions = { item: item, allowRemove: true };
    this.onLogicItemRemoving.fire(this, eventOptions);
    if (!eventOptions.allowRemove) return;

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
    if (!!action.logicType) {
      this.updateLogicTypesInActions();
    }
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
    action.logicTypes = this.createLogicTypesInActions(action);
    action.onLogicTypeChanged = () => {
      this.updateLogicTypesInActions();
    };
    return action;
  }
  private createLogicTypesInActions(action: SurveyLogicAction): Array<any> {
    var res = [];
    var logicTypes = this.logicTypes;
    for (var i = 0; i < logicTypes.length; i++) {
      if (logicTypes[i].visible) {
        res.push({
          logicType: logicTypes[i],
          /*TODO
          koVisible: ko.observable(
            this.isLogicTypeVisibleInAction(logicTypes[i], action)
          ),*/
        });
      }
    }
    return res;
  }
  private isLogicTypeVisibleInAction(
    lt: SurveyLogicType,
    action: SurveyLogicAction
  ): boolean {
    if (!lt.isUniqueItem || lt == action.logicType) return true;
    if (!this.editableItem) return true;
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      var curAction = this.editableItem.actions[i];
      if (curAction != action && curAction.logicType == lt) return false;
    }
    return true;
  }
  private updateLogicTypesInActions() {
    if (!this.editableItem) return;
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      this.updateLogicTypesInAction(this.editableItem.actions[i]);
    }
  }
  private updateLogicTypesInAction(action: SurveyLogicAction) {
    var logicTypes = action.logicTypes;
    for (var i = 0; i < logicTypes.length; i++) {
      var lt = logicTypes[i];
      //TODO
      //lt.koVisible(this.isLogicTypeVisibleInAction(lt.logicType, action));
    }
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
    this.AddElements(this.survey.getAllQuestions(), res);
    this.AddElements(this.survey.getAllPanels(), res);
    this.AddElements(this.survey.triggers, res);
    this.AddElements(this.survey.completedHtmlOnCondition, res);
    this.AddElements(this.survey.calculatedValues, res);
    this.AddElements(this.getMatrixColumns(), res);
    this.AddElements(this.getValidators(), res);
    this.AddElements(this.getItemValues(), res);
    return res;
  }
  private getMatrixColumns(): Array<Base> {
    var res = [];
    var questions = this.survey.getAllQuestions();
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var columns = q["columns"];
      if (!columns) continue;
      var prop = Serializer.findProperty(q.getType(), "columns");
      if (!prop || prop.className !== "matrixdropdowncolumn") continue;
      this.AddElements(columns, res);
    }
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
      var choices = q["choices"];
      if (!choices) continue;
      var prop = Serializer.findProperty(q.getType(), "choices");
      if (!prop || prop.type !== "itemvalue[]") continue;
      this.AddElements(choices, res);
    }
    return res;
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
      if (
        types.indexOf(lt.baseClass) > -1 &&
        !Helpers.isValueEmpty(expression)
      ) {
        var key = this.getExpressionHashKey(expression);
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
  private getExpressionHashKey(expression: string): string {
    return expression.replace(" ", "").toLowerCase();
  }
  private getElementAllTypes(element: Base) {
    var types = [];
    var type = element.getType();
    types.push(type);
    while (!!type && type != "base") {
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
    var visActions = SurveyLogic.visibleActions;
    for (var i = 0; i < SurveyLogic.types.length; i++) {
      if (
        visActions.length > 0 &&
        visActions.indexOf(SurveyLogic.types[i].name) < 0
      )
        continue;
      res.push(
        new SurveyLogicType(SurveyLogic.types[i], this.survey, this.options)
      );
    }
    return res;
  }
  /*
  public get hideExpressionHeader(): boolean {
    return (
      !!this.expressionEditor && this.expressionEditor.koShowExpressionHeader()
    );
  }
  public set hideExpressionHeader(val: boolean) {
    if (!!this.expressionEditor) {
      this.expressionEditor.koShowExpressionHeader(val);
    }
  }
  */
  private createExpressionPropertyEditor() {
    this.expressionEditorValue = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    /*
    this.expressionEditor.isEditorShowing = true;
    this.expressionEditor.isWideMode = true;
    this.expressionEditor.object = this.survey;
    this.expressionEditor.options = this.options;
    this.expressionEditor.koSetupText(this.expressionSetupText);
    */
  }
  dispose() {}
}
