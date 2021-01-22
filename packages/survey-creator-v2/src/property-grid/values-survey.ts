import { ISurveyCreatorOptions } from "@survey/creator/settings";
import { SurveyHelper } from "@survey/creator/surveyHelper";
import { Question, Serializer } from "survey-knockout";
import { PropertyEditorSetupValue } from "./index";

export class DefaultValueEditor extends PropertyEditorSetupValue {
  constructor(
    public editQuestion: Question,
    private propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(options, false);
    this.setupSurvey();
    this.question.value = this.editQuestion[propertyName];
  }
  public get question(): Question {
    return this.editSurvey.getQuestionByName("question");
  }
  protected getSurveyJSON(): any {
    var elJSON = this.editQuestion.toJSON();
    elJSON.name = "question";
    elJSON.type = this.editQuestion.getType();
    return {
      elements: [elJSON],
    };
  }
  protected getSurveyCreationReason(): string {
    return "default-value";
  }
  public apply() {
    this.editQuestion[this.propertyName] = this.question.value;
  }
}
