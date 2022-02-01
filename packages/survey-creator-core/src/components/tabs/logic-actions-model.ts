import { Base, Helpers, IElement, ItemValue, PanelModel, Question, QuestionCommentModel, QuestionDropdownModel, Serializer, SurveyModel } from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { PropertyJSONGenerator } from "../../property-grid";
import { ISurveyCreatorOptions } from "../../settings";
import { SurveyLogicAction } from "./logic-items";
import { SurveyLogicType } from "./logic-types";

export interface ILogicActionModel {
  currentLogicAction: SurveyLogicAction;
  initialLogicAction: SurveyLogicAction;
  isTrigger?: boolean;

  updateInitialLogicAction(): void;
  afterUpdateInitialLogicAction(): void;
  updateCurrentLogicAction: (survey: SurveyModel) => boolean;

  resetElements(): void;
  getSelectedElement(): string;
}
export class LogicActionModelBase implements ILogicActionModel {
  public currentLogicAction: SurveyLogicAction;
  isTrigger?: boolean;

  static createActionModel(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType, selectorElementsHash): LogicActionModelBase {
    if (!!logicType && logicType.hasSelectorChoices) {
      return new LogicActionSimpleModel(panel, logicAction, logicType, selectorElementsHash);
    } else {
      return new LogicActionTriggerModel(panel, logicAction, logicType);
    }
  }

  constructor(protected panel: PanelModel, public initialLogicAction: SurveyLogicAction, public logicType: SurveyLogicType) { }

  updateCurrentLogicAction(survey: SurveyModel): boolean { return false; }
  afterUpdateInitialLogicAction(): void { }
  resetElements(): void { }
  getSelectedElement(): string { return null; }

  public updateInitialLogicAction(): void {
    this.initialLogicAction = this.currentLogicAction;
    if (this.afterUpdateInitialLogicAction) {
      this.afterUpdateInitialLogicAction();
    }
  }

  public setInitialElementValue(question: QuestionDropdownModel, action: SurveyLogicAction, selectedQuestion: string): void {
    if (!!selectedQuestion && question.choices.filter(ch => ch.value === selectedQuestion).length !== 0) {
      question.value = selectedQuestion;
    } else {
      question.value = !!action && action.logicType == this.logicType ? action.elementName : undefined;
    }
  }
}

export class LogicActionSimpleModel extends LogicActionModelBase {
  private getSelectorOptionsText(logicType: SurveyLogicType): string {
    const elementType = logicType.baseClass;
    const optionsCaptionName = elementType == "page" ? "pe.conditionSelectPage" : (elementType == "panel" ? "pe.conditionSelectPanel" : "pe.conditionSelectQuestion");
    return editorLocalization.getString(optionsCaptionName);
  }
  private getElementBySelectorName(panel: PanelModel): Base {
    const value = panel.getQuestionByName("elementSelector").value;
    if (!value) return null;
    return this.selectorElementsHash[value];
  }
  constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType, private selectorElementsHash) {
    super(panel, logicAction, logicType);
  }

  public updateCurrentLogicAction(survey: SurveyModel): boolean {
    const selectedElement = this.getElementBySelectorName(this.panel);
    const createNewAction = !this.initialLogicAction || this.initialLogicAction.logicType != this.logicType || (!!selectedElement && this.initialLogicAction.element != selectedElement);
    if (!createNewAction) { return false; }
    this.currentLogicAction = new SurveyLogicAction(this.logicType, selectedElement, survey);
    return true;
  }

  public resetElements(): void {
    const question = <QuestionDropdownModel>this.panel.getQuestionByName("elementSelector");
    question.visible = false;
  }
  public updatePanelElements(selectedElement: string, choices: Array<ItemValue>): void {
    const question = <QuestionDropdownModel>this.panel.getQuestionByName("elementSelector");
    question.visible = true;
    question.choices = choices;
    question.optionsCaption = this.getSelectorOptionsText(this.logicType);
    this.setInitialElementValue(question, this.initialLogicAction, selectedElement);
  }
  public getSelectedElement(): string {
    const question = <QuestionDropdownModel>this.panel.getQuestionByName("elementSelector");
    return question.value;
  }
}

export class LogicActionTriggerModel extends LogicActionModelBase {
  private panelObj: Base;

  isTrigger = true;

  private recreateQuestion(panel: PanelModel, obj: Base, name: string, options: ISurveyCreatorOptions): void {
    const oldQuestion = !!name ? panel.getQuestionByName(name) : null;
    if (!oldQuestion) return;
    const elementPanel = <PanelModel>panel.getElementByName("elementPanel");
    if (!elementPanel) return;
    const tempPanel = Serializer.createClass("panel");
    const propGenerator = new PropertyJSONGenerator(obj, options);
    propGenerator.setupObjPanel(tempPanel, true, "logic");
    const newQuestion = tempPanel.getQuestionByName(name);
    if (!!newQuestion) {
      let index = elementPanel.elements.indexOf(oldQuestion);
      elementPanel.addElement(newQuestion, index);
      oldQuestion.delete();
    }
    if (newQuestion.name === "setValue") {
      this.updateSetValueQuestion(newQuestion);
    }
    tempPanel.dispose();
  }
  private updateSetValueQuestion(question: Question) {
    const obj = (<any>question).obj;
    let survey = obj.getSurvey();
    if (!survey) {
      survey = obj["owner"];
    }
    if (!obj["setToName"] || !survey) return;
    const originalQuestion = <Question>survey.getQuestionByValueName(obj["setToName"]);
    question.title = originalQuestion.title;
    question.titleLocation = "top";
  }
  private updateRunExpressionQuestion(question: QuestionCommentModel) {
    question.titleLocation = "hidden";
    question.placeHolder = editorLocalization.getString("pe.emptyExpressionPlaceHolder");
  }

  private createElementPanelObj(): Base {
    const action = this.initialLogicAction;
    const srcElement = !!action && action.logicType == this.logicType ? action.element : null;
    const newObj = this.logicType.createNewObj(srcElement);
    this.setPanelObj(newObj);
    return newObj;
  }
  private getQuestions(): Array<IElement> {
    const elementPanel = <PanelModel>this.panel.getElementByName("elementPanel");
    if (elementPanel.elements.length === 0 || !this.logicType.questionNames || this.logicType.questionNames.length === 0) {
      return null;
    }
    return this.logicType.questionNames.map(qName => elementPanel.getElementByName(qName));
  }
  afterUpdateInitialLogicAction(): void {
    this.setPanelObj(this.initialLogicAction.element);
    if (!!this.panelObj) {
      this.logicType.saveNewElement(this.panelObj);
    }
  }

  constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType) {
    super(panel, logicAction, logicType);
  }

  public updateCurrentLogicAction(survey: SurveyModel): boolean {
    const createNewAction = !this.initialLogicAction || this.initialLogicAction.logicType != this.logicType;
    if (!createNewAction) {
      this.initialLogicAction.element.fromJSON(this.panelObj.toJSON());
      this.currentLogicAction = this.initialLogicAction;
      return false;
    }
    this.currentLogicAction = new SurveyLogicAction(this.logicType, this.panelObj, survey);
    return true;
  }

  public updatePanel(propertyName: string, newValue: any, options: ISurveyCreatorOptions, survey: SurveyModel): void {
    if (!this.panelObj) return;

    this.panelObj[propertyName] = newValue;
    if (!!this.logicType && this.logicType.dependedOnPropertyName === propertyName) {
      this.recreateQuestion(this.panel, this.panelObj, this.logicType.dynamicPropertyName, options);
    }
    this.panel.runCondition(survey.getAllValues(), { survey: survey });
  }

  public setPanelObj(obj: Base): void {
    const oldPanelObj = this.panelObj;
    if (!!oldPanelObj) {
      oldPanelObj.onPropertyValueChangedCallback = undefined;
    }
    this.panelObj = obj;
    if (!!obj) {
      obj.onPropertyValueChangedCallback = (name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: any) => {
        if (!this.panel || this.panel.isDisposed) {
          oldPanelObj.onPropertyValueChangedCallback = undefined;
          return;
        }
        const q = this.panel.getQuestionByName(name);
        if (!!q) {
          q.value = newValue;
        }
      };
    }
  }

  public resetElements(): void {
    this.setPanelObj(null);

    const elementPanel = <PanelModel>this.panel.getElementByName("elementPanel");
    elementPanel.questions.forEach(q => { q.clearValue(); });
    elementPanel.elements.splice(0, elementPanel.elements.length);
    elementPanel.visible = false;
  }
  public updatePanelElements(selectedElement: string, options?: ISurveyCreatorOptions): void {
    const elementPanel = <PanelModel>this.panel.getElementByName("elementPanel");
    const obj = this.createElementPanelObj();

    const propGenerator = new PropertyJSONGenerator(obj, options);
    propGenerator.setupObjPanel(elementPanel, true, "logic");

    elementPanel.title = "";
    const runExpressionQuestion = <QuestionCommentModel>elementPanel.getQuestionByName("runExpression");
    runExpressionQuestion && this.updateRunExpressionQuestion(runExpressionQuestion);
    elementPanel.visible = true;
    elementPanel.getElementByName(this.logicType.propertyName).visible = false;
    elementPanel.onSurveyLoad();
    for (let i = 0; i < elementPanel.questions.length; i++) {
      const q = elementPanel.questions[i];
      if (!Helpers.isValueEmpty(obj[q.getValueName()])) {
        q.value = obj[q.getValueName()];
      }
    }
    const questions = this.getQuestions();
    if (!!questions && !!selectedElement) {
      questions.forEach(question => {
        this.setInitialElementValue(<QuestionDropdownModel>question, this.initialLogicAction, selectedElement);
      });
    }
  }
  public getSelectedElement(): string {
    const questions = this.getQuestions();
    if (!questions) return;
    const question = <QuestionDropdownModel>questions[0];
    return (!!question && question.value);
  }
}