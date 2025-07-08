import { CreatorBase } from "./creator-base";
import { SurveyElementAdornerBase } from "./components/survey-element-adorner-base";
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
  private sortElements(elements: SurveyElement[]): Array<SurveyElement> {
    return [].concat(elements).sort((el, el2) => {
      const a = el.isPage ? 2 : el.isPanel ? 1 : 0;
      const b = el2.isPage ? 2 : el2.isPanel ? 1 : 0;
      return a - b;
    });
  }
  private updateCollapsed(elements: SurveyElement[], value: boolean, reason: ElementGetExpandCollapseStateEventReason) {
    this.sortElements(elements).forEach(element => {
      if (element.isQuestion && this._lockQuestions) return;
      const collapsed = this.creator.getElementExpandCollapseState(element as Question | PageModel | PanelModel, reason, value);
      this.creator.designerStateManager?.setElementCollapsed(element, collapsed);
      const adorner = SurveyElementAdornerBase.GetAdorner(element);
      if (adorner && adorner.allowExpandCollapse) {
        const newState = this.creator.getElementExpandCollapseState(element as Question | PageModel | PanelModel, reason, value);
        adorner.collapsed = newState;
      }
    });
  }
}
