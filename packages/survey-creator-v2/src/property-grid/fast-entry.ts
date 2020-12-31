import {
  EmptySurveyCreatorOptions,
  ISurveyCreatorOptions,
} from "@survey/creator/settings";
import { SurveyHelper } from "@survey/creator/surveyHelper";
import {
  ItemValue,
  QuestionCommentModel,
  Serializer,
  SurveyModel,
  Survey,
} from "survey-knockout";

export class FastEntryEditor {
  private surveyValue: SurveyModel;
  private commentValue: QuestionCommentModel;

  constructor(
    public choices: Array<ItemValue>,
    private creator: ISurveyCreatorOptions = new EmptySurveyCreatorOptions()
  ) {
    this.surveyValue = this.createSurvey();
    this.commentValue = <QuestionCommentModel>(
      this.survey.getQuestionByName("question")
    );
    this.setComment();
  }

  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public get comment(): QuestionCommentModel {
    return this.commentValue;
  }
  public apply() {
    if (this.comment.isEmpty()) return;

    const text = this.comment.value;
    const properties = Serializer.findProperties("itemvalue", [
      "value",
      "text",
    ]);
    const className = "itemvalue";
    const items = SurveyHelper.convertTextToItemValues(
      text,
      <any>properties,
      className
    );

    SurveyHelper.applyItemValueArray(<any>this.choices, items);
  }

  protected createSurvey(): SurveyModel {
    const json = {
      showNavigationButtons: "none",
      elements: [{ type: "comment", name: "question" }],
    };
    return this.creator.createSurvey(json, "fast-entry");
  }
  public setComment() {
    var text = SurveyHelper.convertItemValuesToText(<any>this.choices);
    this.comment.value = text;
  }
}
