import { Base, Helpers, IElement, ItemValue, PanelModel, Question, QuestionCommentModel, QuestionDropdownModel, Serializer, SurveyModel } from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { PropertyJSONGenerator } from "../../property-grid";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { SurveyLogicAction } from "./logic-items";
import { SurveyLogicType } from "./logic-types";
import { PropertyGridEditorCollection } from "../../property-grid/index";

export class LogicActionModelBase {
  public isTrigger: boolean;
  public currentLogicAction: SurveyLogicAction;

  static createActionModel(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType, selectorElementsHash): LogicActionModelBase {
    if (!!logicType && logicType.hasSelectorChoices) {
      if (logicType.name.indexOf("_setValue") > -1)
        return new LogicActionSetValueModel(panel, logicAction, logicType, selectorElementsHash);
      return new LogicActionModel(panel, logicAction, logicType, selectorElementsHash);
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
  protected getDPQuestion(): Question {
    return <Question>this.panel.survey.getQuestionByName("panel");
  }
  protected updateParentQuestions(): void {
    const dp = this.getDPQuestion();
    this.panel.questions.forEach(q => {
      if (!q.parentQuestion) {
        q.setParentQuestion(dp);
      }
    });
  }
}

export class LogicActionModel extends LogicActionModelBase {
  private getSelectorOptionsText(logicType: SurveyLogicType): string {
    const elementType = logicType.baseClass;
    const placeholderName = elementType == "page" ? "pe.conditionSelectPage" : (elementType == "panel" ? "pe.conditionSelectPanel" : "pe.conditionSelectQuestion");
    return editorLocalization.getString(placeholderName);
  }
  protected getElementBySelectorName(panel: PanelModel): Base {
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
    if (!createNewAction) return false;
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
    question.allowClear = false;
    question.placeholder = this.getSelectorOptionsText(this.logicType);
    this.setInitialElementValue(question, this.initialLogicAction, selectedElement);
  }
  public getSelectedElement(): string {
    const question = <QuestionDropdownModel>this.panel.getQuestionByName("elementSelector");
    return question.value;
  }
}

export class LogicActionSetValueModel extends LogicActionModel {
  public updatePanelElements(selectedElement: string, choices: Array<ItemValue>): void {
    super.updatePanelElements(selectedElement, choices);
    this.getValueIfQuestion().placeholder = editorLocalization.getString("ed.lg.setValueExpressionPlaceholder");
    this.getValueIfPanel().visible = true;
    this.setValueExpressionValue();
  }
  public afterUpdateInitialLogicAction(): void {
    const selectedElement = this.getElementBySelectorName(this.panel);
    if (!!selectedElement) {
      (<any>selectedElement).setValueExpression = this.panel.getQuestionByName("setValueExpression").value;
    }
  }
  public updateCurrentLogicAction(survey: SurveyModel): boolean {
    const selectedElement = this.getElementBySelectorName(this.panel);
    if (selectedElement && !!(<any>selectedElement).setValueExpression) {
      this.afterUpdateInitialLogicAction();
      return false;
    }
    return super.updateCurrentLogicAction(survey);
  }
  private setValueExpressionValue(): void {
    const selectedElement = this.getElementBySelectorName(this.panel);
    if (!!selectedElement) {
      this.getValueIfQuestion().value = (<any>selectedElement).setValueExpression;
    }
  }
  private getValueIfPanel(): IElement { return this.panel.getElementByName("setValueIfPanel"); }
  private getValueIfQuestion(): Question { return this.panel.getQuestionByName("setValueExpression"); }
  public resetElements(): void {
    super.resetElements();
    this.getValueIfPanel().visible = false;
    this.getValueIfQuestion().clearValue();
  }
}

export class LogicActionTriggerModel extends LogicActionModelBase {
  private panelObj: Base;

  public isTrigger = true;

  private recreateQuestion(panel: PanelModel, obj: Base, name: string, options: ISurveyCreatorOptions): void {
    const oldQuestion = !!name ? panel.getQuestionByName(name) : null;
    if (!oldQuestion) return;
    const triggerEditorPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");
    const tempPanel = Serializer.createClass("panel");
    const propGenerator = new PropertyJSONGenerator(obj, options);
    propGenerator.setupObjPanel(tempPanel, true, "logic");
    let newQuestion = tempPanel.getQuestionByName(name);
    if (!!newQuestion) {
      if (!Helpers.isTwoValueEquals(newQuestion.toJSON(), oldQuestion.toJSON())) {
        let index = triggerEditorPanel.elements.indexOf(oldQuestion);
        triggerEditorPanel.blockAnimations();
        triggerEditorPanel.addElement(newQuestion, index);
        oldQuestion.delete();
        triggerEditorPanel.releaseAnimations();
      } else {
        newQuestion = oldQuestion;
      }
      if (newQuestion.name === "setValue") {
        this.updateSetValueQuestion(newQuestion);
      }
    }
    this.updateParentQuestions();
    this.updateVisibilityPanel(triggerEditorPanel);
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
    question.placeholder = editorLocalization.getString("pe.emptyExpressionPlaceHolder");
  }

  private createElementPanelObj(): Base {
    const action = this.initialLogicAction;
    const srcElement = !!action && action.logicType == this.logicType ? action.element : null;
    const newObj = this.logicType.createNewObj(srcElement);
    this.setPanelObj(newObj);
    return newObj;
  }
  private getQuestions(): Array<IElement> {
    const triggerQuestionsPanel = <PanelModel>this.panel.getElementByName("triggerQuestionsPanel");
    if (triggerQuestionsPanel.elements.length === 0 || !this.logicType.questionNames) {
      return null;
    }
    return triggerQuestionsPanel.elements.filter(el => this.logicType.questionNames.indexOf(el.name) !== -1);
  }
  private resetPanel(panelName: string) {
    const panel = <PanelModel>this.panel.getElementByName(panelName);
    panel.questions.forEach(q => { q.clearValue(); });
    panel.elements.splice(0, panel.elements.length);
    panel.visible = false;
  }
  private updateVisibilityPanel(panel: PanelModel) {
    if (panel.elements.length > 0) {
      panel.visible = panel.elements.filter(el => el.visible).length > 0;
    } else {
      panel.visible = false;
    }
  }
  public onPanelQuestionValueChanged(panel: PanelModel, qName: string): void {
    if (this.panelObj) {
      const prop = Serializer.findProperty(this.panelObj.getType(), qName);
      const depProps = prop?.getDependedProperties();
      if (Array.isArray(depProps) && depProps.length > 0) {
        depProps.forEach(dp => {
          const dQ = panel.getQuestionByName(dp);
          const dProp = Serializer.findProperty(this.panelObj.getType(), dp);
          if (!!dQ && !!dProp) {
            PropertyGridEditorCollection.onMasterValueChanged(this.panelObj, dProp, dQ);
          }
        });
      }
    }
  }
  private updatePanelQuestionsValue(panel: PanelModel) {
    panel.onSurveyLoad();
    panel.questions.forEach(q => {
      if (!Helpers.isValueEmpty(this.panelObj[q.getValueName()])) {
        q.value = this.panelObj[q.getValueName()];
      }
    });
  }

  constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType) {
    super(panel, logicAction, logicType);
  }

  public afterUpdateInitialLogicAction(): void {
    this.setPanelObj(this.initialLogicAction.element);
    if (!!this.panelObj) {
      this.logicType.saveNewElement(this.panelObj);
    }
  }
  public updateCurrentLogicAction(survey: SurveyModel): boolean {
    const createNewAction = !this.initialLogicAction || this.initialLogicAction.logicType != this.logicType;
    if (!createNewAction) {
      const el = this.initialLogicAction.element;
      const srcJson = this.panelObj.toJSON();
      const destJson = el.toJSON();
      const srcKeys = Object.keys(srcJson);
      const destKeys = Object.keys(destJson);
      const propsToDelete = [];
      const propsToSet = [];
      destKeys.forEach(key => {
        if (srcKeys.indexOf(key) < 0) {
          propsToDelete.push(key);
        }
      });
      srcKeys.forEach(key => {
        if (!Helpers.isTwoValueEquals(srcJson[key], destJson[key])) {
          propsToSet.push(key);
        }
      });
      propsToDelete.forEach(prop => el.resetPropertyValue(prop));
      propsToSet.forEach(prop => el[prop] = srcJson[prop]);
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
    this.panel.runCondition({ survey: survey });
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
    this.resetPanel("triggerQuestionsPanel");
    this.resetPanel("triggerEditorPanel");
  }

  public updatePanelElements(selectedElement: string, options?: ISurveyCreatorOptions): void {
    const triggerEditorPanel = <PanelModel>this.panel.getElementByName("triggerEditorPanel");
    const triggerQuestionsPanel = <PanelModel>this.panel.getElementByName("triggerQuestionsPanel");
    const obj = this.createElementPanelObj();

    const propGenerator = new PropertyJSONGenerator(obj, options);
    propGenerator.setupObjPanel(triggerEditorPanel, true, "logic");

    triggerEditorPanel.title = "";
    const runExpressionQuestion = <QuestionCommentModel>triggerEditorPanel.getQuestionByName("runExpression");
    runExpressionQuestion && this.updateRunExpressionQuestion(runExpressionQuestion);

    if (!!this.logicType.questionNames) {
      const questionsToMove = triggerEditorPanel.elements.filter(el => this.logicType.questionNames.indexOf(el.name) !== -1);
      questionsToMove.forEach(q => {
        const question = q as QuestionDropdownModel;
        if (question.getType() === "dropdown") {
          question.allowClear = false;
          question.renderAs = "logicoperator";
        }
        triggerQuestionsPanel.addQuestion(question);
      });
    }

    triggerEditorPanel.getElementByName(this.logicType.propertyName).visible = false;
    [triggerQuestionsPanel, triggerEditorPanel].forEach(panel => {
      this.updateVisibilityPanel(panel);
      this.updatePanelQuestionsValue(panel);
    });
    this.updateParentQuestions();
    const setValueQ = triggerEditorPanel.getQuestionByName("setValue");
    if (!!setValueQ) {
      this.updateSetValueQuestion(setValueQ);
    }
    const questions = this.getQuestions();
    if (!!questions && !!selectedElement) {
      questions.forEach(question => {
        this.setInitialElementValue(<QuestionDropdownModel>question, this.initialLogicAction, selectedElement);
        selectedElement = null;
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