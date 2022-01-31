import { Base, PanelModel, Question, Serializer, SurveyModel } from "survey-core";
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
  updateLogicType(logicType: SurveyLogicType): void;
  updateCurrentLogicAction: (survey: SurveyModel, selectedElement: Base) => boolean;
}
export class LogicActionModelBase implements ILogicActionModel {
  public currentLogicAction: SurveyLogicAction;
  isTrigger?: boolean;

  static createActionModel(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType): LogicActionModelBase {
    if (!logicType || logicType.hasSelectorChoices) {
      return new LogicActionSimpleModel(panel, logicAction, logicType);
    } else {
      return new LogicActionTriggerModel(panel, logicAction, logicType);
    }
  }

  constructor(protected panel: PanelModel, public initialLogicAction: SurveyLogicAction, public logicType: SurveyLogicType) { }

  updateCurrentLogicAction(survey: SurveyModel, selectedElement: Base): boolean { return false; }
  afterUpdateInitialLogicAction(): void { }

  public updateInitialLogicAction(): void {
    this.initialLogicAction = this.currentLogicAction;
    if (this.afterUpdateInitialLogicAction) {
      this.afterUpdateInitialLogicAction();
    }
  }
  public updateLogicType(newLogicType: SurveyLogicType) {
    this.logicType = newLogicType;
  }
}

export class LogicActionSimpleModel extends LogicActionModelBase {
  constructor(panel: PanelModel, logicAction: SurveyLogicAction, logicType: SurveyLogicType) {
    super(panel, logicAction, logicType);
  }

  public updateCurrentLogicAction(survey: SurveyModel, selectedElement: Base): boolean {
    const createNewAction = !this.initialLogicAction || this.initialLogicAction.logicType != this.logicType || (!!selectedElement && this.initialLogicAction.element != selectedElement);
    if (!createNewAction) { return false; }
    this.currentLogicAction = new SurveyLogicAction(this.logicType, selectedElement, survey);
    return true;
  }
}

export class LogicActionTriggerModel extends LogicActionModelBase {
  private panelObj: Base;

  isTrigger = true;

  // private getPanelObj(): Base {
  //   return this.panelObj;
  // }

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

  public updateLogicType(newLogicType: SurveyLogicType) {
    this.setPanelObj(null);
    super.updateLogicType(newLogicType);

  }
}