import { QuestionFactory, QuestionNonValue, Question, Serializer } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

const questionType = "embeddedcreator";

export class QuestionEmbeddedCreatorModel extends QuestionNonValue {
  public embeddedCreatorValue: SurveyCreatorModel;
  public onEmbeddedSurveyValueChanged = () => { };
  public set embeddedCreator(val: SurveyCreatorModel) {
    if (val === this.embeddedCreator) return;
    this.setPropertyValue("embeddedCreator", val);
    this.onEmbeddedSurveyValueChanged();
  }
  public get embeddedCreator(): SurveyCreatorModel {
    return this.getPropertyValue("embeddedCreator");
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
    return new QuestionEmbeddedCreatorModel("");
  },
  "nonvalue"
);

QuestionFactory.Instance.registerQuestion(questionType, (name: string): Question => { return new QuestionEmbeddedCreatorModel(name); }, false);