import { SurveyModel, QuestionFactory, QuestionNonValue, Question, Serializer } from "survey-core";

export class QuestionEmbeddedSurveyModel extends QuestionNonValue {
    public embeddedSurvey: SurveyModel;
    constructor(name: string) {
      super(name);
    }
    public getType(): string {
      return "embeddedsurvey";
    }
}
Serializer.addClass(
  "embeddedsurvey",
  [],
  function () {
    return new QuestionEmbeddedSurveyModel("");
  },
  "nonvalue"
);

QuestionFactory.Instance.registerQuestion("embeddedsurvey", (name: string): Question => { return new QuestionEmbeddedSurveyModel(name); });