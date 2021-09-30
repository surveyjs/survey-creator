import {
  SurveyModel,
  Serializer,
  QuestionPanelDynamicModel,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  FunctionFactory
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
import { surveyDesignerCss } from "../../survey-designer-theme/survey-designer";
import { SurveyHelper } from "../../survey-helper";

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
        if(!!logicType && logicType.dependedOnPropertyName === options.name) {
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
      if(this.panel.panelCount > 0)
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
    this.editSurvey.onUpdateQuestionCssClasses.add((sender, options) => {
      this.onUpdateQuestionCssClasses(options);
    });
    this.editSurvey.onUpdatePanelCssClasses.add((sender, options) => {
      this.onUpdatePanelCssClasses(options);
    });
    this.editSurvey.onQuestionAdded.add((sender, options) => {
      this.onQuestionAdded(options);
    });
    this.editSurvey.onValueChanged.add((sender, options) => {
      this.onValueChanged(options);
    });
    this.editSurvey.css = surveyDesignerCss;
    this.setEditableItem(editableItem);
  }
  public get editableItem(): SurveyLogicItem {
    return this.editableItemValue;
  }
  public setEditableItem(val: SurveyLogicItem): void {
    this.editableItemValue = val;
    this.buildInitialSelectedElements();
    this.buildPanels();
    this.isModifiedValue = false;
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
            }
          ]
        }
      ]
    };
  }
  protected getSurveyCreationReason(): string {
    return "logic-item-editor";
  }
  public apply(): boolean {
    if (this.editSurvey.hasErrors()) return false;
    for (var i = 0; i < this.panels.length; i++) {
      this.applyPanel(this.panels[i]);
    }
    this.isModifiedValue = false;
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
      options.cssClasses.control = "svc-logic-operator svc-logic-operator--action";
      options.cssClasses.questionWrapper = "svc-question-wrapper";
      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    if(options.question.name === "elementSelector" || options.question.name === "setToName" || options.question.name === "fromName" || options.question.name === "gotoName") {
      options.cssClasses.control = "svc-logic-operator svc-logic-operator--question";
      options.cssClasses.questionWrapper = "svc-question-wrapper";

      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    if(options.question.name === "setToName" || options.question.name === "fromName") {
      options.question.titleLocation = "left";
      options.question.startWithNewLine = false;
      options.cssClasses.questionWrapper = "svc-question-wrapper";

      options.cssClasses.error.root = "svc-logic-operator__error";
      options.cssClasses.onError = "svc-logic-operator--error";
    }
    options.cssClasses.mainRoot = "sd-question sd-row__question";
    if(options.question.name === "panel") {
      options.cssClasses.root += " svc-logic-paneldynamic";
      options.cssClasses.buttonAdd += " svc-logic-operator svc-logic-operator--action sd-paneldynamic__add-btn";
      options.cssClasses.iconRemove = "svc-icon-remove";
      options.cssClasses.buttonRemove = "svc-logic-paneldynamic__button";
      options.cssClasses.buttonRemoveText = "svc-logic-paneldynamic__button-remove-text";
    }
  }
  private onUpdatePanelCssClasses(options: any) {
    if(options.panel.name === "elementPanel") {
      options.cssClasses.panel.container += " svc-logic-panel-element";
    }
  }
  private onValueChanged(options: any) {
    this.isModifiedValue = true;
    options.question.maxPanelCount = (options.value.length === 1 && !options.value[0].logicTypeName) ? 1 : 100;
  }
  private onQuestionAdded(options: any) {
    if(options.question.name === "setToName" || options.question.name === "fromName") {
      options.question.titleLocation = "left";
      options.question.startWithNewLine = false;
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
    var elementSelector = null;
    if (!elementPanel) {
      elementSelector = this.getElementBySelectorName(
        logicType,
        panel.getQuestionByName("elementSelector").value
      );
    }
    var createNewAction =
      !action ||
      action.logicType != logicType ||
      (!!elementSelector && action.element != elementSelector);
    if (!createNewAction) {
      if (!!elementPanel) {
        action.element.fromJSON(elementPanel.toJSON());
      }
      return action;
    }
    return new SurveyLogicAction(
      logicType,
      !!elementPanel ? elementPanel : elementSelector,
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
  private onPanelAdded(
    panel: PanelModel,
    action: SurveyLogicAction
  ): PanelModel {
    var ltQuestion = panel.getQuestionByName("logicTypeName");
    ltQuestion.title = this.panel.panelCount > 1 ? editorLocalization.getString("pe.and").toLowerCase() : editorLocalization.getString("pe.then");
    ltQuestion.choices = this.logicTypeChoices;
    if (!!action) {
      panel["action"] = action;
      ltQuestion.value = action.logicTypeName;
    }
    return panel;
  }
  private getLogicTypeChoices(): Array<ItemValue> {
    var res = [];
    var logicTypes = this.editableItem.getVisibleLogicTypes();
    for (var i = 0; i < logicTypes.length; i++) {
      var lt = logicTypes[i];
      var item = new ItemValue(lt.name, lt.displayName);
      if (lt.isUniqueItem) {
        item.visibleIf = "logicTypeVisibleIf({item})";
      }
      res.push(item);
    }
    return res;
  }
  private onLogicTypeChanged(panel: PanelModel) {
    var logicType = this.getLogicTypeByPanel(panel);
    panel.getQuestionByName("logicTypeDescription").html = !!logicType
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
    var question = panel.getQuestionByName("elementSelector");
    question.visible = this.isElementSelectorVisible(logicType);
    if (!question.visible) return;
    question.choices = this.getSelectorChoices(logicType);
    question.optionsCaption = this.getSelectorOptionsText(logicType);
    var action = this.getActionByPanel(panel);
    question.value =
      !!action && !!action.element && action.logicType == logicType
        ? (<any>action.element).name
        : undefined;
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
    if(!elementPanel.visible) return;
    this.titleActionsCreator = new PropertyGridTitleActionsCreator(
      obj,
      this.options
    );
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(elementPanel, true, "logic");
    elementPanel.title = "";
    const runExpressionQuestion = elementPanel.getQuestionByName("runExpression");
    runExpressionQuestion && (runExpressionQuestion.titleLocation = "top"); // TODO
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
  private recreateQuestion(panel: PanelModel, obj: Base, name: string): void {
    const oldQuestion = !!name ? panel.getQuestionByName(name) : null;
    if(!oldQuestion) return;
    const elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    if(!elementPanel) return;
    const tempPanel = Serializer.createClass("panel");
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(tempPanel, true, "logic");
    const newQuestion = tempPanel.getQuestionByName(name);
    if(!!newQuestion) {
      const index = elementPanel.elements.indexOf(oldQuestion);
      elementPanel.addElement(newQuestion, index);
      oldQuestion.delete();
    }
    tempPanel.dispose();
  }
  private static elementSelectorTypes = ["question", "page", "panel"];
  private isElementSelectorVisible(logicType: SurveyLogicType): boolean {
    if (!logicType) return false;
    return (
      LogicItemEditor.elementSelectorTypes.indexOf(logicType.baseClass) > -1
    );
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
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  private getSelectorChoices(logicType: SurveyLogicType): Array<ItemValue> {
    var elementType = logicType.baseClass;
    var elements = [];
    if (elementType == "question") {
      elements = this.survey.getAllQuestions();
    }
    if (elementType == "page") {
      elements = this.survey.pages;
    }
    if (elementType == "panel") {
      elements = this.survey.getAllPanels();
    }
    var res = [];
    var showTitles = this.options.showTitlesInExpressions;
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var text = "";
      if (showTitles) {
        text = el.locTitle.renderedHtml;
      }
      if (!text) text = el.name;
      var itemValue = new ItemValue(el.name, text);
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
  private getElementBySelectorName(
    logicType: SurveyLogicType,
    name: string
  ): Base {
    if (!name) return null;
    var elementType = logicType.baseClass;
    if (elementType == "question") return this.survey.getQuestionByName(name);
    if (elementType == "page") return this.survey.getPageByName(name);
    return this.survey.getPageByName(name);
  }
}
