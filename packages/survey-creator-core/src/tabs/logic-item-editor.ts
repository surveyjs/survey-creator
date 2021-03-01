import {
  SurveyModel,
  Serializer,
  ConditionsParser,
  QuestionPanelDynamicModel,
  Operand,
  UnaryOperand,
  BinaryOperand,
  Variable,
  Const,
  ArrayOperand,
  ItemValue,
  PanelModel,
  Helpers,
  Base,
  JsonObject,
  Question,
  PageModel,
} from "survey-core";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import {
  PropertyEditorSetupValue,
  PropertyJSONGenerator,
} from "../property-grid/index";
import { SurveyLogicItem, SurveyLogicAction } from "./logic-items";
import {
  SurveyLogicTypes,
  SurveyLogicType,
  getLogicString,
} from "./logic-types";
import { editorLocalization } from "../editorLocalization";

export class LogicItemEditor extends PropertyEditorSetupValue {
  private logicTypeChoices: Array<ItemValue>;
  constructor(
    public editableItem: SurveyLogicItem,
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
    this.logicTypeChoices = this.getLogicTypeChoices();
    this.buildPanels();
    this.editSurvey.onDynamicPanelRemoved.add((sender, options) => {
      var action = this.getActionByPanel(options.panel);
      if (!!action) {
        this.editableItem.removeAction(action);
      }
      if (this.panel.panelCount == 0) {
        this.panel.addPanel();
      }
    });
    this.editSurvey.onDynamicPanelAdded.add((sender, options) => {
      var panel = this.panels[this.panel.panelCount - 1];
      this.onPanelAdded(panel, null);
    });
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
      elements: [
        {
          type: "paneldynamic",
          name: "panel",
          panelCount: 0,
          templateElements: [
            {
              name: "logicTypeName",
              type: "dropdown",
              titleLocation: "hidden",
              optionsCaption: getLogicString("selectedActionCaption"),
            },
            {
              name: "logicTypeDescription",
              type: "html",
              startWithNewLine: false,
            },
            {
              name: "elementSelector",
              type: "dropdown",
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
  private applyPanel(panel: PanelModel) {
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
    } else {
      var newAction = new SurveyLogicAction(
        logicType,
        !!elementPanel ? elementPanel : elementSelector,
        this.survey
      );
      this.editableItem.replaceAction(newAction, action);
    }
  }
  private buildPanels() {
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      this.onPanelAdded(this.panel.addPanel(), this.editableItem.actions[i]);
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
      res.push(new ItemValue(lt.name, lt.displayName));
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
    var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    elementPanel.elements.splice(0, elementPanel.elements.length);
    elementPanel.visible = this.isElementPanelVisible(logicType);
    if (!elementPanel.visible) return;
    var obj = this.createElementPanelObj(
      this.getActionByPanel(panel),
      logicType
    );
    this.setElementPanelObj(panel, obj);
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(elementPanel);
    elementPanel.getElementByName(logicType.propertyName).visible = false;
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
      res.push(new ItemValue(el.name, text));
    }
    res.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    });
    return res;
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
