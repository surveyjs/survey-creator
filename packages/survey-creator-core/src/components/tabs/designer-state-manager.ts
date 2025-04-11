import { SurveyElement, SurveyModel } from "survey-core";
class ElementState {
  collapsed: boolean = false;
}

interface ElementStateMap {
  [key: string]: ElementState;
}

export class DesignerStateManager {
  private elementState: ElementStateMap = {};
  private pageState: ElementStateMap = {};
  private getStateMapForElement(element: SurveyElement) {
    return (element && element.isPage) ? this.pageState : this.elementState;
  }

  private onQuestionAddedHandler = (sender, opts): void => {
    this.createElementState(opts.question, this.isSuspended);
  };
  private onPageAddedHandler = (sender, opts): void => {
    this.createElementState(opts.page, this.isSuspended);
  };
  private onPanelAddedHandler = (sender, opts): void => {
    this.createElementState(opts.panel, this.isSuspended);
  };
  initForSurvey(survey: SurveyModel) {
    survey.onQuestionAdded.add(this.onQuestionAddedHandler);
    survey.onPageAdded.add(this.onPageAddedHandler);
    survey.onPanelAdded.add(this.onPanelAddedHandler);
  }

  initForElement(element: SurveyElement): void {
    if (!element) return;
    const stateMap = this.getStateMapForElement(element);
    element.registerFunctionOnPropertyValueChanged(
      "name",
      (newName) => {
        delete stateMap[element.name];
        stateMap[newName] = new ElementState();
      },
      "designerStateManager"
    );
  }
  getElementCollapsed(element: SurveyElement): boolean {
    return this.getElementState(element).collapsed;
  }
  setElementCollapsed(element: SurveyElement, isCollapsed: boolean): void {
    if (this.isSuspended) return;
    this.getElementState(element).collapsed = isCollapsed;
  }
  private getElementState(element: SurveyElement): ElementState {
    return this.createElementState(element, true);
  }
  private createElementState(element: SurveyElement, checkIfExists: boolean): ElementState {
    const stateMap = this.getStateMapForElement(element);
    const name = element.name;
    if (checkIfExists) {
      const state = stateMap[name];
      if (state) return state;
    }
    const res = new ElementState();
    stateMap[name] = res;
    if (this.onInitElementStateCallback) {
      this.onInitElementStateCallback(element, res);
    }
    return res;
  }
  public onInitElementStateCallback: (element: SurveyElement, state: ElementState) => void;
  private _suspendCounter = 0;
  public suspend() {
    this._suspendCounter++;
  }
  public release() {
    this._suspendCounter--;
  }
  public get isSuspended() {
    return this._suspendCounter > 0;
  }
}
