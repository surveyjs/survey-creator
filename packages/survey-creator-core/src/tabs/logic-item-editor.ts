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
      if (options.name == "elementSelector") {
        this.onElementSelectorChanged(options.panel);
      }
    });
    this.buildPanels();
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
  public getActionByName(panel: PanelModel): SurveyLogicAction {
    return panel["action"];
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
  public apply() {}
  private buildPanels() {
    for (var i = 0; i < this.editableItem.actions.length; i++) {
      this.addPanel(this.editableItem.actions[i]);
    }
  }
  private addPanel(action: SurveyLogicAction): PanelModel {
    var panel = this.panel.addPanel();
    panel["action"] = action;
    var ltQuestion = panel.getQuestionByName("logicTypeName");
    ltQuestion.choices = this.getLogicTypeChoices(action);
    ltQuestion.value = action.logicTypeName;
    return panel;
  }
  private getLogicTypeChoices(action: SurveyLogicAction): Array<ItemValue> {
    var res = [];
    for (var i = 0; i < action.logicTypes.length; i++) {
      var lt = action.logicTypes[i];
      res.push(new ItemValue(lt.name, lt.displayName));
    }
    return res;
  }
  private onLogicTypeChanged(panel: PanelModel) {
    var action = this.getActionByName(panel);
    action.logicTypeName = panel.getQuestionByName("logicTypeName").value;
    panel.getQuestionByName("logicTypeDescription").html =
      action.logicTypeDescription;
    this.setupElementSelector(panel);
    this.setupElementPanel(panel);
  }
  private onElementSelectorChanged(panel: PanelModel) {
    if (!this.isElementSelectorVisible(panel)) return;
    var question = panel.getQuestionByName("elementSelector");
    var action = this.getActionByName(panel);
    action.element = !question.isEmpty()
      ? this.getElementBySelectorName(action, question.value)
      : null;
  }
  private setupElementSelector(panel: PanelModel) {
    var question = panel.getQuestionByName("elementSelector");
    question.visible = this.isElementSelectorVisible(panel);
    if (!question.visible) return;
    var action = this.getActionByName(panel);
    question.choices = this.getSelectorChoices(action);
    question.value = !!action.element ? (<any>action.element).name : undefined;
    question.optionsCaption = this.getSelectorOptionsText(action);
  }
  private setupElementPanel(panel: PanelModel) {
    var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    elementPanel.elements.splice(0, elementPanel.elements.length);
    elementPanel.visible = this.isElementPanelVisible(panel);
    if (!elementPanel.visible) return;
    var action = this.getActionByName(panel);
    var obj = this.createElementPanelObj(action);
    this.setElementPanelObj(panel, obj);
    var propGenerator = new PropertyJSONGenerator(obj, this.options);
    propGenerator.setupObjPanel(elementPanel);
    elementPanel.getElementByName(
      action.logicType.propertyName
    ).visible = false;
    for (var i = 0; i < elementPanel.questions.length; i++) {
      var q = elementPanel.questions[i];
      if (!Helpers.isValueEmpty(obj[q.getValueName()])) {
        q.value = obj[q.getValueName()];
      }
    }
  }
  private static elementSelectorTypes = ["question", "page", "panel"];
  private isElementSelectorVisible(panel: PanelModel): boolean {
    var action = this.getActionByName(panel);
    if (!action.logicType) return false;
    return (
      LogicItemEditor.elementSelectorTypes.indexOf(action.logicType.baseClass) >
      -1
    );
  }
  private isElementPanelVisible(panel: PanelModel): boolean {
    var action = this.getActionByName(panel);
    if (!action.logicType) return false;
    return !this.isElementSelectorVisible(panel);
  }
  private getElementPanelObj(panel: PanelModel): Base {
    return panel["panelObj"];
  }
  private setElementPanelObj(panel: PanelModel, obj: Base) {
    panel["panelObj"] = obj;
  }
  private createElementPanelObj(action: SurveyLogicAction): Base {
    var obj = <Base>Serializer.createClass(action.logicType.baseClass);
    if (!!action.element) {
      obj.fromJSON(action.element.toJSON());
    }
    //TODO
    obj["survey"] = action.survey;
    if ((<any>obj).setOwner) {
      (<any>obj).setOwner(action.survey);
    }
    return obj;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  private getSelectorChoices(action: SurveyLogicAction): Array<ItemValue> {
    var elementType = action.logicType.baseClass;
    var elements = [];
    if (elementType == "question") {
      elements = action.survey.getAllQuestions();
    }
    if (elementType == "page") {
      elements = action.survey.pages;
    }
    if (elementType == "panel") {
      elements = action.survey.getAllPanels();
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
  private getSelectorOptionsText(action: SurveyLogicAction): string {
    var elementType = action.logicType.baseClass;
    var optionsCaptionName =
      elementType == "page"
        ? "pe.conditionSelectPage"
        : elementType == "panel"
        ? "pe.conditionSelectPanel"
        : "pe.conditionSelectQuestion";
    return this.getLocString(optionsCaptionName);
  }
  private getElementBySelectorName(
    action: SurveyLogicAction,
    name: string
  ): Base {
    var elementType = action.logicType.baseClass;
    if (elementType == "question") return action.survey.getQuestionByName(name);
    if (elementType == "page") return action.survey.getPageByName(name);
    return action.survey.getPageByName(name);
  }
}
