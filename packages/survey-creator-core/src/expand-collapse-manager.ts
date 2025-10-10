import { CreatorBase } from "./creator-base";
import { SurveyElementAdornerBase } from "./components/survey-element-adorner-base";
import { Base, PageModel, PanelModel, Question, SurveyElement } from "survey-core";
import { ElementGetExpandCollapseStateEventReason } from "./creator-events-api";

export interface IExpandCollapseChoice {
  expandCollapse(val: boolean): void;
}

export class ExpandCollapseManager {
  private _lockQuestions: boolean = false;
  private expandChoicesStates: { [index: number]: Array<IExpandCollapseChoice> } = {};
  constructor(private creator: CreatorBase) {
  }

  public expandCollapseElements(reason: ElementGetExpandCollapseStateEventReason, isCollapsed: boolean, elements: SurveyElement[] = null) {
    this.updateCollapsed(elements || this.getCollapsableElements(), isCollapsed, reason);
  }
  public clearExpandChoicesStates() {
    this.expandChoicesStates = {};
  }
  public setChoicesState(item: Base, isExpanded: boolean, adorner: IExpandCollapseChoice) {
    const id = item.uniqueId;
    if (isExpanded) {
      let adorners = this.expandChoicesStates[id];
      if (!adorners) {
        adorners = [];
        this.expandChoicesStates[id] = adorners;
      }
      if (adorner) {
        adorners.push(adorner);
      }
    } else {
      delete this.expandChoicesStates[id];
    }
  }
  public isChoiceExpanded(item: Base): boolean {
    return !!this.expandChoicesStates[item.uniqueId];
  }
  private collapsedChoices: Array<Base>;
  public expandChoices() {
    if (Array.isArray(this.collapsedChoices)) {
      this.expandCollapseChoices(this.collapsedChoices, true);
    }
    this.collapsedChoices = null;
  }
  public collapseChoices(items: Array<Base>) {
    this.collapsedChoices = items;
    this.expandCollapseChoices(items, false);
  }
  public disposeChoice(item: Base, adorner: IExpandCollapseChoice) {
    const id = item.uniqueId;
    const adorners = this.expandChoicesStates[id];
    if (Array.isArray(adorners)) {
      const index = adorners.indexOf(adorner);
      if (index !== -1) {
        adorners.splice(index, 1);
      }
      if (adorners.length === 0) {
        delete this.expandChoicesStates[id];
      }
    }
  }
  private expandCollapseChoices(items: Array<Base>, isExpanded: boolean) {
    items.forEach(item => {
      const adorners = this.expandChoicesStates[item.uniqueId];
      if (Array.isArray(adorners)) {
        adorners.forEach(adorner => {
          adorner.expandCollapse(isExpanded);
        });
      }
    });
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
