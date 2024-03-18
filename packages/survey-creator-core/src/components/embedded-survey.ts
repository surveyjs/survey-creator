import { SurveyModel, QuestionFactory, QuestionNonValue, Question, Serializer, property } from "survey-core";

export class QuestionEmbeddedSurveyModel extends QuestionNonValue {
  public embeddedSurveyValue: SurveyModel
  public onEmbeddedSurveyValueChanged = () => { };
  public set embeddedSurvey(val: SurveyModel) {
    if(val === this.embeddedSurvey) return;
    this.setPropertyValue("embeddedSurvey", val);
    this.onEmbeddedSurveyValueChanged();
  }
  public get embeddedSurvey(): SurveyModel {
    return this.getPropertyValue("embeddedSurvey");
  }
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