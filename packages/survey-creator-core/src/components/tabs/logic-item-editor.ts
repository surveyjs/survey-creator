import { SurveyModel, QuestionPanelDynamicModel, ItemValue, PanelModel, Base, FunctionFactory, Question, QuestionHtmlModel, QuestionDropdownModel, SurveyElement, defaultV2Css } from "survey-core";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions, settings } from "../../creator-settings";
import { PropertyEditorSetupValue } from "../../property-grid/index";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import { SurveyLogicType, getLogicString } from "./logic-types";
import { editorLocalization } from "../../editorLocalization";
import { SurveyHelper } from "../../survey-helper";
import { logicCss } from "./logic-theme";
import { assignDefaultV2Classes, copyCssClasses } from "../../utils/utils";
import { QuestionLinkValueModel } from "../../components/link-value";
import { LogicActionModelBase, LogicActionModel, LogicActionTriggerModel } from "./logic-actions-model";
import { propertyGridCss } from "../../property-grid-theme/property-grid";

function logicTypeVisibleIf(params: any): boolean {
  if (!this.question || !this.question.parentQuestion || params.length != 1)
    return true;
  const panels = this.question.parentQuestion.panels;
  if (panels.length < 2) return true;
  for (let i = 0; i < panels.length; i++) {
    const q = panels[i].getQuestionByName("logicTypeName");
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
  private initialSelectedElements: any = {};
  private isModifiedValue: boolean = false;
  private contextValue: Question;
  private selectorElementsHash = {};

  constructor(editableItem: SurveyLogicItem, protected options: ISurveyCreatorOptions = null) {
    super(options);
    if (!this.options) {
      this.options = new EmptySurveyCreatorOptions();
    }
    this.editSurvey.onDynamicPanelItemValueChanged.add((sender, options) => {
      if (options.name == "logicTypeName") {
        this.onLogicTypeChanged(options.panel);
      }
      const actionModel = this.getActionModelByPanel(options.panel);
      if (actionModel.isTrigger) {
        (<LogicActionTriggerModel>actionModel).updatePanel(options.name, options.value, this.options, this.editSurvey);
      }
    });
    this.editSurvey.onDynamicPanelRemoved.add((sender, options) => {
      if (this.isBuildingPanels) return;
      const actionModel = this.getActionModelByPanel(options.panel);
      if (!!actionModel && !!actionModel.initialLogicAction) {
        this.editableItem.removeAction(actionModel.initialLogicAction);
      }
      if (this.panel.panelCount == 0) {
        this.panel.addPanel();
      }
      if (this.panel.panelCount > 0)
        this.panels[0].getQuestionByName("logicTypeName").title = editorLocalization.getString("pe.then");
    });
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      if (this.isBuildingPanels) return;
      const panel = this.panels[this.panel.panelCount - 1];
      this.onPanelAdded(panel, null);
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
    return <QuestionPanelDynamicModel>(this.editSurvey.getQuestionByName("panel"));
  }
  public get panels(): Array<PanelModel> {
    return this.panel.panels;
  }
  public getActionModelByPanel(panel: PanelModel): LogicActionModelBase {
    return panel["actionModel"];
  }
  public setActionModelByPanel(panel: PanelModel, actionModel: LogicActionModelBase): void {
    panel["actionModel"] = actionModel;
  }

  public get context(): Question { return this.contextValue; }
  public set context(val: Question) {
    if (val === this.context) return;
    this.contextValue = val;
    this.updatePanelsOnContextChanged();
  }
  private getLogicTypeByPanel(panel: PanelModel): SurveyLogicType {
    return this.getLogicTypeByName(panel.getQuestionByName("logicTypeName").value);
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
              renderAs: "logicoperator",
              searchEnabled: false,
              allowClear: false,
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
              renderAs: "logicoperator",
              allowClear: false,
              titleLocation: "hidden",
              isRequired: true,
              startWithNewLine: false,
              visible: false
            },
            {
              name: "triggerQuestionsPanel",
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
            {
              name: "triggerEditorPanel",
              type: "panel",
              visible: false
            },
            {
              name: "setValueIfPanel",
              visible: false,
              type: "panel",
              elements: [{
                name: "setValueExpression",
                type: "comment",
                titleLocation: "hidden"
              }]
            }
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
  public isEmpty(): boolean {
    if(this.panels.length === 0) return true;
    if(this.panels.length > 1) return false;
    const modelAction = this.getActionModelByPanel(this.panels[0]);
    return !modelAction;
  }
  public apply(): boolean {
    if (this.editSurvey.hasErrors()) return false;
    for (let i = 0; i < this.panels.length; i++) {
      this.applyPanel(this.panels[i]);
    }
    this.resetModified();
    return true;
  }
  public getEditingActions(): Array<SurveyLogicAction> {
    return this.panels.map(panel => {
      const modelAction = this.getActionModelByPanel(panel);
      modelAction.updateCurrentLogicAction(this.survey);
      return modelAction.currentLogicAction || modelAction.initialLogicAction;
    }).filter(action => !!action);
  }
  private onUpdateQuestionCssClasses(options: any) {
    const cssClasses = options.cssClasses;
    const question = options.question;
    cssClasses.answered = "svc-logic-question--answered";

    if (question.name === "logicTypeName") {
      question.allowRootStyle = false;
      cssClasses.control += " svc-logic-operator svc-logic-operator--action";
      cssClasses.error.root = "svc-logic-operator__error";
      cssClasses.onError = "svc-logic-operator--error";
    }
    const selectorsNames = ["elementSelector", "setToName", "fromName", "gotoName"];
    if (selectorsNames.indexOf(question.name) > -1) {
      question.allowRootStyle = false;
      if (question.name === "setToName" || question.name === "fromName") {
        question.titleLocation = "left";
        question.startWithNewLine = false;
      }
      cssClasses.control += " svc-logic-operator svc-logic-operator--question";
      cssClasses.error.root = "svc-logic-operator__error";
      cssClasses.onError = "svc-logic-operator--error";
    }
    if (question.isContentElement || this.isSetValueInternalQuestion(question)) {
      assignDefaultV2Classes(cssClasses, question.getType());
      cssClasses.mainRoot += " svc-logic-question-value sd-element--with-frame";
    }
    const parentName = question.parent?.name;
    if (selectorsNames.indexOf(question.name) < 0 && (parentName === "triggerEditorPanel" || parentName === "setValueIfPanel")) {
      const qType = question.getType();
      assignDefaultV2Classes(cssClasses, qType);
      if(!defaultV2Css[qType] && propertyGridCss[qType]) {
        copyCssClasses(cssClasses, propertyGridCss.question);
        copyCssClasses(cssClasses, propertyGridCss[qType]);
      }
      const els = question.parent.elements.filter(el => selectorsNames.indexOf(el.name) < 0 && el.name !== "expression");
      if((question.name !== "runExpression" && qType !== "comment") || (Array.isArray(els) && els.length > 1)) {
        cssClasses.mainRoot += " svc-logic-question-value sd-element--with-frame";
      }
    }
    if (question.name === "removeAction") {
      question.allowRootStyle = false;
      cssClasses.mainRoot += " svc-logic-condition-remove-question";
    }
    if (question.name === "panel") {
      cssClasses.root += " svc-logic-paneldynamic";
      cssClasses.buttonAdd += " svc-logic-operator--action ";
      cssClasses.iconRemove = "svc-icon-remove";
      cssClasses.buttonRemove = "svc-logic-paneldynamic__button svc-logic-paneldynamic__remove-btn";
      cssClasses.buttonRemoveRight = "svc-logic-paneldynamic__remove-btn--right";
      cssClasses.buttonRemoveText = "svc-logic-paneldynamic__button-remove-text";
    }
  }
  private isSetValueInternalQuestion(question: Question): boolean {
    if(this.isSetValueInternalQuestionCore(question)) return true;
    if(this.isSetValueInternalQuestionCore(question.parentQuestion)) return true;
    const parent: any = question.parent;
    return parent && this.isSetValueInternalQuestionCore(parent.parentQuestion);
  }
  private isSetValueInternalQuestionCore(question: Question): boolean {
    const setValueName = "setValue";
    return question?.name === setValueName;
  }
  private onUpdatePanelCssClasses(options: any) {
    const panel = options.panel;
    const cssClasses = options.cssClasses;
    const name = panel.name;
    if (name === "triggerEditorPanel" || name === "setValueIfPanel") {
      cssClasses.panel.container += " svc-logic_trigger-editor";
    }
    if (name === "triggerQuestionsPanel") {
      panel.allowRootStyle = false;
      cssClasses.panel.container += " svc-logic_trigger-questions";
    }
    if(this.isSetValueInternalQuestionCore(panel.parentQuestion)) {
      assignDefaultV2Classes(cssClasses, panel.getType());
    }
  }
  private onValueChanged(options: any) {
    this.isModifiedValue = true;
    options.question.maxPanelCount = (options.value.length === 1 && !options.value[0].logicTypeName) ? 1 : 100;
    this.panels.forEach(panel => {
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
    if (options.question.name === "setValue") {
      options.titleActions = [];
    }
  }

  private applyPanel(panel: PanelModel) {
    const actionModel = this.getActionModelByPanel(panel);
    if (!actionModel.updateCurrentLogicAction(this.survey)) {
      return;
    }
    this.editableItem.replaceAction(actionModel.currentLogicAction, actionModel.initialLogicAction);
    actionModel.updateInitialLogicAction();
  }

  private buildInitialSelectedElements() {
    this.initialSelectedElements = {};
    if (!this.editableItem) return;
    for (let i = 0; i < this.editableItem.actions.length; i++) {
      const action = this.editableItem.actions[i];
      if (this.isElementSelectorVisible(action.logicType)) {
        const lgName = action.logicTypeName;
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
    for (let i = 0; i < this.editableItem.actions.length; i++) {
      this.onPanelAdded(this.panel.addPanel(), this.editableItem.actions[i]);
    }
    if (this.panel.panelCount == 0) {
      this.onPanelAdded(this.panel.addPanel(), null);
    }
  }
  private onPanelAdded(panel: PanelModel, action: SurveyLogicAction): PanelModel {
    const ltQuestion = <QuestionDropdownModel>panel.getQuestionByName("logicTypeName");
    ltQuestion.title = this.panel.panelCount > 1 ? editorLocalization.getString("pe.and") : editorLocalization.getString("pe.then");
    ltQuestion.choices = this.logicTypeChoices;
    ltQuestion.allowClear = false;
    if (!!action) {
      const newActionModel = LogicActionModelBase.createActionModel(panel, action, this.getLogicTypeByName(action.logicTypeName), this.selectorElementsHash);
      this.setActionModelByPanel(panel, newActionModel);
      ltQuestion.value = action.logicTypeName;
    }
    const removeActionLinkQuestion: QuestionLinkValueModel = <QuestionLinkValueModel>(panel.getQuestionByName("removeAction"));
    const dynamicPanel: QuestionPanelDynamicModel = <QuestionPanelDynamicModel>(removeActionLinkQuestion.parentQuestion);
    removeActionLinkQuestion.linkClickCallback = () => {
      if (!!dynamicPanel) {
        dynamicPanel.removePanelUI(panel);
      }
    };
    removeActionLinkQuestion.linkSetButtonCssClasses = "svc-logic-condition-remove svc-icon-remove";
    removeActionLinkQuestion.linkValueText = "";

    return panel;
  }
  private updatePanelsOnContextChanged() {
    this.logicTypeChoices = this.getLogicTypeChoices();
    if (!!this.context) {
      for (let i = this.panels.length - 1; i >= 0; i--) {
        const panel = this.panels[i];
        if (this.isPanelSupportContext(panel)) continue;
        if (i === 0 && this.panels.length === 1) {
          panel.getQuestionByName("logicTypeName").clearValue();
        }
        else {
          this.panel.removePanel(i);
        }
      }
    }
    for (let i = 0; i < this.panels.length; i++) {
      this.updateSelectorOnContextChanged(this.panels[i]);
    }
  }
  private isPanelSupportContext(panel: PanelModel): boolean {
    const logicType = this.getLogicTypeByPanel(panel);
    return !!logicType ? logicType.supportContext(this.context) : false;
  }
  private updateSelectorOnContextChanged(panel: PanelModel) {
    const logicTypeQuestion = <QuestionDropdownModel>panel.getQuestionByName("logicTypeName");
    logicTypeQuestion.choices = this.logicTypeChoices;
    logicTypeQuestion.allowClear = false;
    const logicType = this.getLogicTypeByPanel(panel);
    if (!this.isElementSelectorVisible(logicType)) return;
    const selectorQuestion = <QuestionDropdownModel>panel.getQuestionByName("elementSelector");
    selectorQuestion.choices = this.getSelectorChoices(logicType);
    selectorQuestion.allowClear = false;
  }
  private getLogicTypeChoices(): Array<ItemValue> {
    const res = [];
    const logicTypes = this.editableItem.getVisibleLogicTypes();
    for (let i = 0; i < logicTypes.length; i++) {
      const lt = logicTypes[i];
      if (!!this.context && !lt.supportContext(this.context)) continue;
      let item = new ItemValue(lt.name, lt.displayName);
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
    qTypeDescription.html = !!logicType ? logicType.description : "";

    const oldActionModel = this.getActionModelByPanel(panel);
    let prevSelectedQuestion;
    if (!!oldActionModel) {
      prevSelectedQuestion = oldActionModel.getSelectedElement();
      oldActionModel.resetElements();
    }

    if (!logicType) return;

    const newActionModel = LogicActionModelBase.createActionModel(panel, (oldActionModel ? oldActionModel.initialLogicAction : null), logicType, this.selectorElementsHash);
    this.setActionModelByPanel(panel, newActionModel);
    if (newActionModel.isTrigger) {
      (<LogicActionTriggerModel>newActionModel).updatePanelElements(prevSelectedQuestion, this.options);
    } else {
      (<LogicActionModel>newActionModel).updatePanelElements(prevSelectedQuestion, this.getSelectorChoices(newActionModel.logicType));
    }
  }
  private getLogicTypeByName(ltName: string): SurveyLogicType {
    if (!ltName) return null;
    const logicTypes = this.editableItem.getVisibleLogicTypes();
    for (let i = 0; i < logicTypes.length; i++) {
      if (logicTypes[i].name == ltName) return logicTypes[i];
    }
    return null;
  }

  private isElementSelectorVisible(logicType: SurveyLogicType): boolean {
    return !!logicType && logicType.hasSelectorChoices;
  }

  public getLocString(name: string): string {
    return editorLocalization.getString(name);
  }
  private getElementText(el: SurveyElement, showTitles: boolean): string {
    let text = "";
    if (showTitles) {
      text = el.locTitle.renderedHtml;
    }
    if (!text) text = el.name;
    if (el.isQuestion) {
      text = this.options.getObjectDisplayName(el, "logic-tab:question-selector", "condition", text);
    }
    return text;
  }

  private getSelectorChoices(logicType: SurveyLogicType): Array<ItemValue> {
    if (!logicType.hasSelectorChoices) return [];
    const elements = logicType.getSelectorChoices(this.survey, this.context);
    const res = [];
    const showTitles = this.options.showTitlesInExpressions;
    for (let i = 0; i < elements.length; i++) {
      let namePrefix = "";
      let textPrefix = "";
      const el = elements[i];
      const owner = <Question>logicType.getParentElement(el);
      if (owner) {
        namePrefix = owner.name + ".";
        textPrefix = this.getElementText(owner, showTitles) + ".";
      }
      const text = this.getElementText(el, showTitles);
      const value = namePrefix + el.name;
      let itemValue = new ItemValue(value, textPrefix + text);
      this.selectorElementsHash[value] = el;
      if (!!el[logicType.propertyName] && !this.isElementInInitialSelection(logicType.name, el)) {
        itemValue.enableIf = "1=2";
        itemValue.visibleIf = "1=2";
      }
      res.push(itemValue);
    }
    if(settings.logic.questionSortOrder === "asc") {
      SurveyHelper.sortItems(res);
    }
    return res;
  }
  private isElementInInitialSelection(logicTypeName: string, el: Base): boolean {
    if (!this.initialSelectedElements[logicTypeName]) return false;
    return this.initialSelectedElements[logicTypeName].indexOf(el) > -1;
  }
}