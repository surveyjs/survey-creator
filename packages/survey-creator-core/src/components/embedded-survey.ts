import { SurveyModel, QuestionFactory, QuestionNonValue, Question, Serializer } from "survey-core";

const questionType = "embeddedsurvey";

export class QuestionEmbeddedSurveyModel extends QuestionNonValue {
  public embeddedSurveyValue: SurveyModel;
  public onEmbeddedSurveyValueChanged = () => { };
  public set embeddedSurvey(val: SurveyModel) {
    if (val === this.embeddedSurvey) return;
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
    return questionType;
  }
}
Serializer.addClass(
  questionType,
  [],
  function () {
    return new QuestionEmbeddedSurveyModel("");
  },
  "nonvalue"
);

QuestionFactory.Instance.registerQuestion(questionType, (name: string): Question => { return new QuestionEmbeddedSurveyModel(name); }, false);
