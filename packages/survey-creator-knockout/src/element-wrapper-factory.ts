import * as ko from "knockout";
import { Page, Survey } from "survey-knockout-ui";
import { Question } from "survey-core";
import { SurveyCreator } from "./creator";

export class ElementWrapperFactory {
  constructor(private _creator: SurveyCreator) {
    this._creator.survey.onAfterRenderQuestion.add(this.onAfterRenderQuestion);
    this._creator.survey.onAfterRenderPanel.add(this.onAfterRenderPanel);
  }
  onAfterRenderQuestion = (
    sender: Survey,
    options: { question: Question; htmlElement: HTMLElement }
  ) => {
    // options.question
    // options.htmlElement
    var decoration = document.createElement("div");
    decoration.innerHTML = `<svc-question params='creator: creator, question: question'></svc-question>`;
    options.htmlElement.style.position = "relative";
    options.htmlElement.appendChild(decoration);
    ko.applyBindings(
      { creator: this._creator, question: options.question },
      decoration
    );
  };
  onAfterRenderPanel = (
    sender: Survey,
    options: { panel: Page; htmlElement: HTMLElement }
  ) => {
    // options.panel
    // options.htmlElement
    // var decoration = document.createElement("div");
    // decoration.innerHTML = `<svc-panel params='creator: creator, panel: panel'></svc-panel>`;
    // options.htmlElement.style.position = "relative";
    // options.htmlElement.appendChild(decoration);
    // ko.applyBindings({ creator: this._creator, question: options.panel }, decoration);
  };
  dispose() {
    this._creator.survey.onAfterRenderQuestion.remove(
      this.onAfterRenderQuestion
    );
    this._creator.survey.onAfterRenderPanel.remove(this.onAfterRenderPanel);
  }
}
