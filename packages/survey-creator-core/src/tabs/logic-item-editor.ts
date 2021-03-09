import {
  SurveyModel,
  Serializer,
  QuestionPanelDynamicModel,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  FunctionFactory,
} from "survey-core";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import {
  PropertyEditorSetupValue,
  PropertyJSONGenerator,
  PropertyGridTitleActionsCreator,
} from "../property-grid/index";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import {
  SurveyLogicTypes,
  SurveyLogicType,
  getLogicString,
} from "./logic-types";
import { editorLocalization } from "../editorLocalization";

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
      var obj = this.getElementPanelObj(options.panel);
      if (!!obj) {
        var panelElement = options.panel.getElementByName("elementPanel");
        if (!!panelElement.getQuestionByName(options.name)) {
          obj[options.name] = options.value;
        }
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
    this.editableItem = editableItem;
  }
  public get editableItem(): SurveyLogicItem {
    return this.editableItemValue;
  }
  public set editableItem(val: SurveyLogicItem) {
    this.editableItemValue = val;
    this.buildInitialSelectedElements();
    this.buildPanels();
  }
  public get survey() {
    return this.editableItem.survey;
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
          panelAddText: getLogicString("addNewAction"),
          panelCount: 0,
          templateElements: [
            {
              name: "logicTypeName",
              type: "dropdown",
              titleLocation: "hidden",
              isRequired: true,
              optionsCaption: getLogicString("selectedActionCaption"),
              requiredErrorText: this.getLocString("pe.conditionActionEmpty"),
            },
            {
              name: "logicTypeDescription",
              type: "html",
              startWithNewLine: false,
            },
            {
              name: "elementSelector",
              type: "dropdown",
              titleLocation: "hidden",
              isRequired: true,
              visible: false,
            },
            {
              name: "elementPanel",
              type: "panel",
              visible: false,
            },
          ],
        },
      ],
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
    elementPanel.elements.splice(0, elementPanel.elements.length);
    elementPanel.visible = this.isElementPanelVisible(logicType);
    if (!elementPanel.visible) return;
    var obj = this.createElementPanelObj(
      this.getActionByPanel(panel),
      logicType
    );
    this.titleActionsCreator = new PropertyGridTitleActionsCreator(
      obj,
      this.options
    );
    this.setElementPanelObj(panel, obj);
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(elementPanel, true);
    elementPanel.title = "";
    elementPanel.getElementByName(logicType.propertyName).visible = false;
    elementPanel.onSurveyLoad();
    for (var i = 0; i < elementPanel.questions.length; i++) {
      var q = elementPanel.questions[i];
      if (!Helpers.isValueEmpty(obj[q.getValueName()])) {
        q.value = obj[q.getValueName()];
      }
    }
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
    panel["panelObj"] = obj;
  }
  private createElementPanelObj(
    action: SurveyLogicAction,
    logicType: SurveyLogicType
  ): Base {
    var obj = <Base>Serializer.createClass(logicType.baseClass);
    if (!!action && !!action.element && action.logicType == logicType) {
      obj.fromJSON(action.element.toJSON());
    }
    //TODO
    obj["survey"] = this.survey;
    if ((<any>obj).setOwner) {
      (<any>obj).setOwner(this.survey);
    }
    return obj;
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
    res.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    });
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
