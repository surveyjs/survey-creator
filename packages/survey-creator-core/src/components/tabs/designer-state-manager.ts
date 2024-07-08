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
    this.elementState[opts.question.name] = new ElementState();
  }
  private onPageAddedHandler = (sender, opts): void => {
    this.pageState[opts.page.name] = new ElementState();
  }
  private onPanelAddedHandler = (sender, opts): void => {
    this.elementState[opts.panel.name] = new ElementState();
  }
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
  getElementState(element: SurveyElement): ElementState {
    const stateMap = this.getStateMapForElement(element);
    const name = element.name;
    let state = stateMap[name];
    if (state) return state;
    state = new ElementState();
    stateMap[name] = new ElementState();
    return state;
  }
  constructor() {
  }
}
