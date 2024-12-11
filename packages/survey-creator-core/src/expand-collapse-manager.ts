import { CreatorBase } from "./creator-base";
import { SurveyElementAdornerBase } from "./components/action-container-view-model";
import { PageModel, PanelModel, Question, SurveyElement } from "survey-core";
import { ElementGetExpandCollapseStateEventReason } from "./creator-events-api";

export class ExpandCollapseManager {
  private _lockQuestions: boolean = false;
  constructor(private creator: CreatorBase) {
  }

  public expandCollapseElements(reason: ElementGetExpandCollapseStateEventReason, isCollapsed: boolean, elements: SurveyElement[] = null) {
    this.updateCollapsed(elements || this.getCollapsableElements(), isCollapsed, reason);
  }

  public get questionsLocked() {
    return this._lockQuestions;
  }
  public lockQuestions(locked: boolean) {
    this._lockQuestions = locked;
  }
  private getCollapsableElements() {
    return (this.creator.survey.pages as SurveyElement[])
      .concat(this.creator.survey.getAllPanels() as unknown as SurveyElement[])
      .concat(this.creator.survey.getAllQuestions() as SurveyElement[]);
  }

  private updateCollapsed(elements: SurveyElement[], value: boolean, reason: ElementGetExpandCollapseStateEventReason) {
    const canToSaveToStateManager = this.creator.designerStateManager && !this.creator.designerStateManager.isSuspended;
    elements.forEach(element => {
      if (element.isQuestion && this._lockQuestions) return;
      if (canToSaveToStateManager) {
        this.creator.designerStateManager.getElementState(element).collapsed =
          this.creator.getElementExpandCollapseState(element as Question | PageModel | PanelModel, reason, value);
      }
    });
    for (let i = this.adorners.length - 1; i >= 0; i--) {
      const element = this.adorners[i].element;
      if (element.isQuestion && this._lockQuestions) continue;
      if (elements.indexOf(element) == -1) continue;
      if (this.adorners[i].allowExpandCollapse) {
        let newState = canToSaveToStateManager ?
          this.creator.designerStateManager.getElementState(element).collapsed :
          this.creator.getElementExpandCollapseState(element as Question | PageModel | PanelModel, reason, value);
        this.adorners[i].collapsed = newState;
      }
    }
  }
  private adorners: Array<SurveyElementAdornerBase> = [];

  public add(adorner: SurveyElementAdornerBase) {
    this.adorners.push(adorner);
  }
  public remove(adorner: SurveyElementAdornerBase) {
    this.adorners.splice(this.adorners.indexOf(adorner), 1);
  }
  public clear() {
    this.adorners.length = 0;
  }
}
