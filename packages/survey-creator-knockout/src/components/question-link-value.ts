import { Serializer, QuestionFactory } from "survey-core";
import { QuestionImplementor, SurveyTemplateText } from "survey-knockout-ui";
import { QuestionLinkValueModel } from "@survey/creator";
const questionTemplate = require("./question-link-value.html");

export class QuestionLinkValue extends QuestionLinkValueModel {
  private _implementor: QuestionImplementor;
  public koClickLink: (model: QuestionLinkValue, event: MouseEvent) => void;
  constructor(name: string) {
    super(name);
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionImplementor(this);
    this.koClickLink = (model: QuestionLinkValue, event: MouseEvent) => {
      event.stopPropagation();
      this.doLinkClick();
    };
  }
  public dispose() {
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

new SurveyTemplateText().addText(questionTemplate, "question", "linkvalue");

Serializer.overrideClassCreator("linkvalue", function () {
  return new QuestionLinkValue("");
});
QuestionFactory.Instance.registerQuestion("linkvalue", (name) => {
  return new QuestionLinkValue(name);
});
