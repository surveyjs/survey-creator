import { Serializer, QuestionFactory } from "survey-core";
import { QuestionImplementor, SurveyTemplateText } from "survey-knockout-ui";
import { QuestionEmbeddedSurveyModel } from "@survey/creator";
const questionTemplate = require("./question-embedded-survey.html");

export class QuestionEmbeddedSurvey extends QuestionEmbeddedSurveyModel {
  private _implementor: QuestionImplementor;
  constructor(name: string) {
    super(name);
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionImplementor(this);
  }
  public dispose() {
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

new SurveyTemplateText().addText(questionTemplate, "question", "embeddedsurvey");

Serializer.overrideClassCreator("embeddedsurvey", function () {
  return new QuestionEmbeddedSurvey("");
});
QuestionFactory.Instance.registerQuestion("embeddedsurvey", (name) => {
  return new QuestionEmbeddedSurvey(name);
});
