import { Serializer, QuestionFactory } from "survey-core";
import { QuestionImplementor, SurveyTemplateText } from "survey-knockout-ui";
import { editorLocalization, QuestionLinkValueModel } from "survey-creator-core";
const questionTemplate = require("./question-link-value.html");

export class QuestionLinkValue extends QuestionLinkValueModel {
  private _implementor: QuestionImplementor;
  public koClickLink: (model: QuestionLinkValue, event: MouseEvent) => void;
  public koClearLink: (model: QuestionLinkValue, event: MouseEvent) => void;
  constructor(name: string, json: any = null) {
    super(name, json);
  }
  public clearCaption = editorLocalization.getString("pe.clear");
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionImplementor(this);
    this.koClickLink = (model: QuestionLinkValue, event: MouseEvent) => {
      event.stopPropagation();
      this.doLinkClick();
    };
    this.koClearLink = (model: QuestionLinkValue, event: MouseEvent) => {
      event.stopPropagation();
      this.doClearClick();
    };
  }
  public dispose() {
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

new SurveyTemplateText().addText(questionTemplate.default, "question", "linkvalue");

Serializer.overrideClassCreator("linkvalue", <any>function (json) {
  return new QuestionLinkValue("", json);
});
QuestionFactory.Instance.registerQuestion("linkvalue", (name) => {
  return new QuestionLinkValue(name);
}, false);
