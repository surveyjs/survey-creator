import { SurveyHelper } from "@survey/creator/surveyHelper";
import {
  ItemValue,
  QuestionCommentModel,
  Serializer,
  SurveyModel,
  Survey
} from "survey-knockout";

export class FastEntryEditor {
  private surveyValue: SurveyModel;
  private commentValue: QuestionCommentModel;

  constructor(
    public choices: Array<ItemValue>
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
      properties,
      className
    );

    SurveyHelper.applyItemValueArray(this.choices, items);
  }

  protected createSurvey(): SurveyModel {
    const json = {
      showNavigationButtons: "none",
      elements: [{ type: "comment", name: "question" }],
    };
    return new Survey(json);
  }
  public setComment() {
    var text = SurveyHelper.convertItemValuesToText(this.choices);
    this.comment.value = text;
  }
}
