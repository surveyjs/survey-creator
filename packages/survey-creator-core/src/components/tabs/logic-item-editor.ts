import {
  SurveyModel,
  Serializer,
  QuestionPanelDynamicModel,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  FunctionFactory,
  Question,
  QuestionHtmlModel,
  QuestionDropdownModel,
  SurveyElement,
  QuestionMatrixDropdownModelBase,
  QuestionCommentModel
} from "survey-core";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions
} from "../../settings";
import {
  PropertyEditorSetupValue,
  PropertyJSONGenerator,
  PropertyGridTitleActionsCreator
} from "../../property-grid/index";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import {
  SurveyLogicType,
  getLogicString
} from "./logic-types";
import { editorLocalization } from "../../editorLocalization";
import { SurveyHelper } from "../../survey-helper";
import { logicCss } from "./logic-theme";
import { assignDefaultV2Classes } from "../../utils/utils";
import { QuestionLinkValueModel } from "../../components/link-value";

function logicTypeVisibleIf(params: any): boolean {
  if (!this.question || !this.question.parentQuestion || params.length != 1)
    return true;
  var panels = this.question.parentQuestion.panels;
  if (panels.length < 2) return true;
  for (var i = 0; i < panels.length; i++) {
    var q = panels[i].getQuestionByName("logicTypeName");
    if (q == this.question) continue;
    if (q.value == params[0]) return false;
  }
  return true;
}

FunctionFactory.Instance.register("logicTypeVisibleIf", logicTypeVisibleIf);

export class LogicItemEditor extends PropertyEditorSetupValue {
  private logicTypeChoices: Array<ItemValue>;
  private editableItemValue: SurveyLogicItem;
  private isBuildingPanels: boolean;
  private titleActionsCreator: PropertyGridTitleActionsCreator;
  private initialSelectedElements: any = {};
  private isModifiedValue: boolean = false;
  private contextValue: Question;
  constructor(
    editableItem: SurveyLogicItem,
    protected options: ISurveyCreatorOptions = null
  ) {
    super(options);
    if (!this.options) {
      this.options = new EmptySurveyCreatorOptions();
    }
    this.editSurvey.onDynamicPanelItemValueChanged.add((sender, options) => {
      if (options.name == "logicTypeName") {
        this.onLogicTypeChanged(options.panel);
      }
      const obj = this.getElementPanelObj(options.panel);
      if (!!obj) {
        const panel = options.panel;
        const panelElement = panel.getElementByName("elementPanel");
        if (!!panelElement.getQuestionByName(options.name)) {
          obj[options.name] = options.value;
        }
        const logicType = this.getLogicTypeByPanel(panel);
        if (!!logicType && logicType.dependedOnPropertyName === options.name) {
          this.recreateQuestion(panel, obj, logicType.dynamicPropertyName);
        }
        options.panel.runCondition(this.editSurvey.getAllValues(), {
          survey: this.editSurvey
        });
      }
    });
    this.editSurvey.onDynamicPanelRemoved.add((sender, options) => {
      if (this.isBuildingPanels) return;
      var action = this.getActionByPanel(options.panel);
      if (!!action) {
        this.editableItem.removeAction(action);
      }
      if (this.panel.panelCount == 0) {
        this.panel.addPanel();
      }
      if (this.panel.panelCount > 0)
        this.panel.panels[0].getQuestionByName("logicTypeName").title = editorLocalization.getString("pe.then");
    });
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      if (this.isBuildingPanels) return;
      var panel = this.panels[this.panel.panelCount - 1];
      this.onPanelAdded(panel, null);
    });
    this.editSurvey.onGetQuestionTitleActions.add((sender, options) => {
      if (!this.titleActionsCreator) return;
      var q = options.question;
      if (!!q.parent && q.parent.name === "elementPanel") {
        this.titleActionsCreator.onGetQuestionTitleActions(options);
      }
    });
    this.editSurvey.css = logicCss;
    this.editSurvey.onUpdateQuestionCssClasses.add((sender, options) => {
      this.onUpdateQuestionCssClasses(options);
    });
    this.editSurvey.onUpdatePanelCssClasses.add((sender, options) => {
      this.onUpdatePanelCssClasses(options);
    });
    this.editSurvey.onQuestionAdded.add((sender, options) => {
      this.onQuestionAdded(options);
    });
    this.editSurvey.onGetQuestionTitleActions.add((sender, options) => {
      this.onGetQuestionTitleActions(options);
    });
    this.editSurvey.onValueChanged.add((sender, options) => {
      this.onValueChanged(options);
    });
    this.setEditableItem(editableItem);
  }
  public get editableItem(): SurveyLogicItem {
    return this.editableItemValue;
  }
  public setEditableItem(val: SurveyLogicItem): void {
    this.editableItemValue = val;
    this.buildInitialSelectedElements();
    this.buildPanels();
    this.resetModified();
  }
  public get survey(): SurveyModel {
    return this.editableItem.survey;
  }
  public get isModified(): boolean {
    return this.isModifiedValue;
  }
  public get panel(): QuestionPanelDynamicModel {
    return <QuestionPanelDynamicModel>(
      this.editSurvey.getQuestionByName("panel")
    );
  }
  public get panels(): Array<PanelModel> {
    return this.panel.panels;
  }
  public getPanelByAction(action: SurveyLogicAction): PanelModel {
    var panels = this.panels;
    for (var i = 0; i < panels.length; i++) {
      if (panels[i]["action"] == action) return panels[i];
    }
    return null;
  }
  public getActionByPanel(panel: PanelModel): SurveyLogicAction {
    return panel["action"];
  }
  public get context(): Question { return this.contextValue; }
  public set context(val: Question) {
    if(val === this.context) return;
    this.contextValue = val;
    this.updatePanelsOnContextChanged();
  }
  private getLogicTypeByPanel(panel: PanelModel): SurveyLogicType {
    return this.getLogicTypeByName(
      panel.getQuestionByName("logicTypeName").value
    );
  }
  protected getSurveyJSON(): any {
    return {
      clearInvisibleValues: "onHidden",
      elements: [
        {
          type: "paneldynamic",
          name: "panel",
          title: getLogicString("actionsEditorTitle"),
          titleLocation: "hidden",
          panelAddText: getLogicString("addNewAction"),
          panelRemoveButtonLocation: "right",
          panelCount: 0,
          minPanelCount: 1,
          maxPanelCount: 1,
          templateElements: [
            {
              name: "logicTypeName",
              type: "dropdown",
              title: editorLocalization.getString("pe.then"),
              titleLocation: "left",
              isRequired: true,
              optionsCaption: getLogicString("selectedActionCaption"),
              requiredErrorText: this.getLocString("pe.conditionActionEmpty")
            },
            {
              name: "logicTypeDescription",
              type: "html",
              startWithNewLine: false,
              visible: false // TODO we do not show description by the new design
            },
            {
              name: "elementSelector",
              type: "dropdown",
              titleLocation: "hidden",
              isRequired: true,
              startWithNewLine: false,
              visible: false
            },
            {
              name: "elementPanel",
              type: "panel",
              startWithNewLine: false,
              visible: false
            },
            {
              name: "removeAction",
              type: "linkvalue",
              titleLocation: "hidden",
              showOptionsCaption: false,
              visible: false,
              startWithNewLine: false,
              showValueInLink: false,
              allowClear: false,
              showClear: false
            },
          ]
        }
      ]
    };
  }
  protected getSurveyCreationReason(): string {
    return "logic-item-editor";
  }
  public resetModified(): void {
    this.isModifiedValue = false;
  }
  public apply(): boolean {
    if (this.editSurvey.hasErrors()) return false;
    for (var i = 0; i < this.panels.length; i++) {
      this.applyPanel(this.panels[i]);
    }
    this.resetModified();
    return true;
  }
  public getEditingActions(): Array<SurveyLogicAction> {
    var res = [];
    for (var i = 0; i < this.panels.length; i++) {
      var action = this.getOrCreateActionByPanel(this.panels[i]);
      if (!!action) {
        res.push(action);
      }
    }
    return res;
  }
  private onUpdateQuestionCssClasses(options: any) {
    options.cssClasses.answered = "svc-logic-question--answered";

    if (options.question.name === "logicTypeName") {
      options.question.allowRootStyle = false;
      options.cssClasses.control = "svc-logic-operator svc-logic-operator--action";
      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    if (options.question.name === "elementSelector" || options.question.name === "setToName" || options.question.name === "fromName" || options.question.name === "gotoName") {
      options.question.allowRootStyle = false;
      options.cssClasses.control = "svc-logic-operator svc-logic-operator--question";
      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    if (options.question.name === "setToName" || options.question.name === "fromName") {
      options.question.allowRootStyle = false;
      options.question.titleLocation = "left";
      options.question.startWithNewLine = false;
      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    if (options.question.name === "setValue") {
      assignDefaultV2Classes(options.cssClasses, options.question.getType());
      options.cssClasses.mainRoot += " svc-logic-question-value";
    }
    if (options.question.name === "removeAction") {
      options.question.allowRootStyle = false;
      options.cssClasses.mainRoot += " svc-logic-condition-remove-question";
    }
    // options.cssClasses.mainRoot = "sd-question sd-row__question";
    if (options.question.name === "panel") {
      options.cssClasses.root += " svc-logic-paneldynamic";
      options.cssClasses.buttonAdd += " svc-logic-operator--action ";
      options.cssClasses.iconRemove = "svc-icon-remove";
      options.cssClasses.buttonRemove = "svc-logic-paneldynamic__button svc-logic-paneldynamic__remove-btn";
      options.cssClasses.buttonRemoveRight = "svc-logic-paneldynamic__remove-btn--right";
      options.cssClasses.buttonRemoveText = "svc-logic-paneldynamic__button-remove-text";
    }
  }
  private onUpdatePanelCssClasses(options: any) {
    if (options.panel.name === "elementPanel") {
      options.cssClasses.panel.container += " svc-logic-panel-element";
    }
  }
  private onValueChanged(options: any) {
    this.isModifiedValue = true;
    options.question.maxPanelCount = (options.value.length === 1 && !options.value[0].logicTypeName) ? 1 : 100;
    this.panel.panels.forEach(panel => {
      panel.getQuestionByName("removeAction").visible = options.value.length !== 1;
    });
  }
  private onQuestionAdded(options: any) {
    if (options.question.name === "setToName" || options.question.name === "fromName") {
      options.question.titleLocation = "left";
      options.question.startWithNewLine = false;
    }
  }
  private onGetQuestionTitleActions(options: any) {
    if(options.question.name === "setValue") {
      options.titleActions = [];
    }
  }

  private applyPanel(panel: PanelModel) {
    var action = this.getActionByPanel(panel);
    var newAction = this.getOrCreateActionByPanel(panel);
    if (action === newAction) return;
    this.editableItem.replaceAction(newAction, action);
    panel["action"] = newAction;
    this.setElementPanelObj(panel, newAction.element);
    var elementPanel = this.getElementPanelObj(panel);
    if (!!elementPanel) {
      var logicType = this.getLogicTypeByPanel(panel);
      logicType.saveNewElement(elementPanel);
    }
  }
  private getOrCreateActionByPanel(panel: PanelModel): SurveyLogicAction {
    var action = this.getActionByPanel(panel);
    var logicType = this.getLogicTypeByPanel(panel);
    var elementPanel = this.getElementPanelObj(panel);
    var selectedElement = null;
    if (!elementPanel) {
      selectedElement = this.getElementBySelectorName(panel.getQuestionByName("elementSelector").value);
    }
    var createNewAction =
      !action ||
      action.logicType != logicType ||
      (!!selectedElement && action.element != selectedElement);
    if (!createNewAction) {
      if (!!elementPanel) {
        action.element.fromJSON(elementPanel.toJSON());
      }
      return action;
    }
    return new SurveyLogicAction(
      logicType,
      !!elementPanel ? elementPanel : selectedElement,
      this.survey
    );
  }
  private buildInitialSelectedElements() {
    this.initialSelectedElements = {};
    if (!this.editableItem) return;
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      var action = this.editableItem.actions[i];
      if (this.isElementSelectorVisible(action.logicType)) {
        var lgName = action.logicTypeName;
        if (!this.initialSelectedElements[lgName]) {
          this.initialSelectedElements[lgName] = [];
        }
        this.initialSelectedElements[lgName].push(action.element);
      }
    }
  }
  private buildPanels() {
    this.panel.panelCount = 0;
    if (!this.editableItem) return;
    this.logicTypeChoices = this.getLogicTypeChoices();
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      this.onPanelAdded(this.panel.addPanel(), this.editableItem.actions[i]);
    }
    if (this.panel.panelCount == 0) {
      this.onPanelAdded(this.panel.addPanel(), null);
    }
  }
  private onPanelAdded(panel: PanelModel, action: SurveyLogicAction): PanelModel {
    const ltQuestion = <QuestionDropdownModel>panel.getQuestionByName("logicTypeName");
    ltQuestion.title = this.panel.panelCount > 1 ? editorLocalization.getString("pe.and").toLowerCase() : editorLocalization.getString("pe.then");
    ltQuestion.choices = this.logicTypeChoices;
    if (!!action) {
      panel["action"] = action;
      ltQuestion.value = action.logicTypeName;
    }
    const removeActionLinkQuestion: QuestionLinkValueModel = <QuestionLinkValueModel>(panel.getQuestionByName("removeAction"));
    const dynamicPanel: QuestionPanelDynamicModel = <QuestionPanelDynamicModel>(removeActionLinkQuestion.parentQuestion);
    removeActionLinkQuestion.linkClickCallback = () => {
      if (!!dynamicPanel) {
        dynamicPanel.removePanelUI(panel);
      }
    };
    removeActionLinkQuestion.linkValueText = "";
    removeActionLinkQuestion.linkSetButtonCssClasses = "svc-logic-condition-remove svc-icon-remove";

    return panel;
  }
  private updatePanelsOnContextChanged() {
    this.logicTypeChoices = this.getLogicTypeChoices();
    if(!!this.context) {
      for(var i = this.panels.length - 1; i >= 0; i --) {
        const panel = this.panels[i];
        if(this.isPanelSupportContext(panel)) continue;
        if(i === 0 && this.panels.length === 1) {
          panel.getQuestionByName("logicTypeName").clearValue();
        }
        else {
          this.panel.removePanel(i);
        }
      }
    }
    for(var i = 0; i < this.panels.length; i ++) {
      this.updateSelectorOnContextChanged(this.panels[i]);
    }
  }
  private isPanelSupportContext(panel: PanelModel): boolean {
    const logicType = this.getLogicTypeByPanel(panel);
    return logicType.supportContext(this.context);
  }
  private updateSelectorOnContextChanged(panel: PanelModel) {
    const logicTypeQuestion = <QuestionDropdownModel>panel.getQuestionByName("logicTypeName");
    logicTypeQuestion.choices = this.logicTypeChoices;
    const logicType = this.getLogicTypeByPanel(panel);
    if (!this.isElementSelectorVisible(logicType)) return;
    var selectorQuestion = <QuestionDropdownModel>panel.getQuestionByName("elementSelector");
    selectorQuestion.choices = this.getSelectorChoices(logicType);
  }
  private getLogicTypeChoices(): Array<ItemValue> {
    var res = [];
    var logicTypes = this.editableItem.getVisibleLogicTypes();
    for (var i = 0; i < logicTypes.length; i++) {
      var lt = logicTypes[i];
      if(!!this.context && !lt.supportContext(this.context)) continue;
      var item = new ItemValue(lt.name, lt.displayName);
      if (lt.isUniqueItem) {
        item.visibleIf = "logicTypeVisibleIf({item})";
      }
      res.push(item);
    }
    return res;
  }
  private onLogicTypeChanged(panel: PanelModel) {
    const logicType = this.getLogicTypeByPanel(panel);
    const qTypeDescription = <QuestionHtmlModel>panel.getQuestionByName("logicTypeDescription");
    qTypeDescription.html = !!logicType
      ? logicType.description
      : "";
    this.setElementPanelObj(panel, null);
    this.setupElementSelector(panel, logicType);
    this.setupElementPanel(panel, logicType);
  }
  private getLogicTypeByName(ltName: string): SurveyLogicType {
    if (!ltName) return null;
    var logicTypes = this.editableItem.getVisibleLogicTypes();
    for (var i = 0; i < logicTypes.length; i++) {
      if (logicTypes[i].name == ltName) return logicTypes[i];
    }
    return null;
  }
  private setupElementSelector(panel: PanelModel, logicType: SurveyLogicType) {
    var question = <QuestionDropdownModel>panel.getQuestionByName("elementSelector");
    question.visible = this.isElementSelectorVisible(logicType);
    if (!question.visible) return;
    question.choices = this.getSelectorChoices(logicType);
    question.optionsCaption = this.getSelectorOptionsText(logicType);
    var action = this.getActionByPanel(panel);
    question.value =
      !!action && action.logicType == logicType ? action.elementName : undefined;
  }
  private setupElementPanel(panel: PanelModel, logicType: SurveyLogicType) {
    this.titleActionsCreator = null;
    var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    var elementPanelQuestions = elementPanel.questions;
    for (var i = 0; i < elementPanelQuestions.length; i++) {
      elementPanelQuestions[i].clearValue();
    }
    elementPanel.elements.splice(0, elementPanel.elements.length);
    if (!this.isElementPanelVisible(logicType)) {
      elementPanel.visible = false;
      return;
    }
    var obj = this.createElementPanelObj(
      this.getActionByPanel(panel),
      logicType
    );
    this.setElementPanelObj(panel, obj);
    elementPanel.visible = logicType.hasVisibleElements;
    if (!elementPanel.visible) return;
    this.titleActionsCreator = new PropertyGridTitleActionsCreator(
      obj,
      this.options
    );
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(elementPanel, true, "logic");
    elementPanel.title = "";
    const runExpressionQuestion = <QuestionCommentModel>elementPanel.getQuestionByName("runExpression");
    runExpressionQuestion && this.updateRunExpressionQuestion(runExpressionQuestion);
    elementPanel.visible = true;
    elementPanel.getElementByName(logicType.propertyName).visible = false;
    elementPanel.onSurveyLoad();
    for (var i = 0; i < elementPanel.questions.length; i++) {
      var q = elementPanel.questions[i];
      if (!Helpers.isValueEmpty(obj[q.getValueName()])) {
        q.value = obj[q.getValueName()];
      }
    }
  }
  private updateRunExpressionQuestion(question: QuestionCommentModel) {
    question.titleLocation = "hidden";
    question.placeHolder = editorLocalization.getString("pe.emptyExpressionPlaceHolder");
  }
  private recreateQuestion(panel: PanelModel, obj: Base, name: string): void {
    const oldQuestion = !!name ? panel.getQuestionByName(name) : null;
    if (!oldQuestion) return;
    const elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    if (!elementPanel) return;
    const tempPanel = Serializer.createClass("panel");
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(tempPanel, true, "logic");
    const newQuestion = tempPanel.getQuestionByName(name);
    if (!!newQuestion) {
      const index = elementPanel.elements.indexOf(oldQuestion);
      elementPanel.addElement(newQuestion, index);
      oldQuestion.delete();
    }
    if(newQuestion.name === "setValue") {
      this.updateSetValueQuestion(newQuestion, this.options);
    }
    tempPanel.dispose();
  }
  private updateSetValueQuestion(question: Question, options: any) {
    const obj = (<any>question).obj;
    let survey = obj.getSurvey();
    if (!survey) {
      survey = obj["owner"];
    }
    if (!obj["setToName"] || !survey) return;
    const originalQuestion = <Question>survey.getQuestionByValueName(
      obj["setToName"]
    );
    question.title = originalQuestion.title;
    question.titleLocation = "top";
  }
  private isElementSelectorVisible(logicType: SurveyLogicType): boolean {
    return !!logicType && logicType.hasSelectorChoices;
  }
  private isElementPanelVisible(logicType: SurveyLogicType): boolean {
    if (!logicType) return false;
    return !this.isElementSelectorVisible(logicType);
  }
  private getElementPanelObj(panel: PanelModel): Base {
    return panel["panelObj"];
  }
  private setElementPanelObj(panel: PanelModel, obj: Base) {
    var oldObj = this.getElementPanelObj(panel);
    if (!!oldObj) {
      oldObj.onPropertyValueChangedCallback = undefined;
    }
    panel["panelObj"] = obj;
    if (!!obj) {
      obj.onPropertyValueChangedCallback = (
        name: string,
        oldValue: any,
        newValue: any,
        sender: Base,
        arrayChanges: any
      ) => {
        if (!panel || panel.isDisposed) {
          oldObj.onPropertyValueChangedCallback = undefined;
          return;
        }
        const q = panel.getQuestionByName(name);
        if (!!q) {
          q.value = newValue;
        }
      };
    }
  }
  private createElementPanelObj(
    action: SurveyLogicAction,
    logicType: SurveyLogicType
  ): Base {
    const srcElement = !!action && action.logicType == logicType ? action.element : null;
    return logicType.createNewObj(srcElement);
  }
  public getLocString(name: string): string {
    return editorLocalization.getString(name);
  }
  private getElementText(el: SurveyElement, showTitles: boolean): string {
    var text = "";
    if (showTitles) {
      text = el.locTitle.renderedHtml;
    }
    if (!text) text = el.name;
    return text;
  }
  private selectorElementsHash = {};
  private getSelectorChoices(logicType: SurveyLogicType): Array<ItemValue> {
    if(!logicType.hasSelectorChoices) return [];
    const elements = logicType.getSelectorChoices(this.survey, this.context);
    const res = [];
    var showTitles = this.options.showTitlesInExpressions;
    for (var i = 0; i < elements.length; i++) {
      var namePrefix = "";
      var textPrefix = "";
      const el = elements[i];
      const owner = <Question>logicType.getParentElement(el);
      if(owner) {
        namePrefix = owner.name + ".";
        textPrefix = this.getElementText(owner, showTitles) + ".";
      }
      var text = this.getElementText(el, showTitles);
      const value = namePrefix + el.name;
      const itemValue = new ItemValue(value, textPrefix + text);
      this.selectorElementsHash[value] = el;
      if (
        !!el[logicType.propertyName] &&
        !this.isElementInInitialSelection(logicType.name, el)
      ) {
        itemValue.enableIf = "1=2";
      }
      res.push(itemValue);
    }
    SurveyHelper.sortItems(res);
    return res;
  }
  private isElementInInitialSelection(
    logicTypeName: string,
    el: Base
  ): boolean {
    if (!this.initialSelectedElements[logicTypeName]) return false;
    return this.initialSelectedElements[logicTypeName].indexOf(el) > -1;
  }
  private getSelectorOptionsText(logicType: SurveyLogicType): string {
    var elementType = logicType.baseClass;
    var optionsCaptionName =
      elementType == "page"
        ? "pe.conditionSelectPage"
        : elementType == "panel"
          ? "pe.conditionSelectPanel"
          : "pe.conditionSelectQuestion";
    return this.getLocString(optionsCaptionName);
  }
  private getElementBySelectorName(value: any): Base {
    if(!value) return null;
    return this.selectorElementsHash[value];
  }
}
