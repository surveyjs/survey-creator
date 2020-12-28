import { ItemValue, QuestionCommentModel, SurveyModel } from "survey-knockout";

export class FastEntryEditor {
  private surveyValue: SurveyModel;
  private commentValue: QuestionCommentModel;

  constructor(public choices: Array<ItemValue>) {
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
    this.choices.splice(0, this.choices.length);
    if (this.comment.isEmpty()) return;
    var items = this.comment.value.split("\n");
    for (var i = 0; i < items.length; i++) {
      this.choices.push(new ItemValue(items[i]));
    }
  }
  
  protected createSurvey(): SurveyModel {
    return new SurveyModel({
      elements: [{ type: "comment", name: "question" }],
    });
  }
  private setComment() {
    var text = "";
    for (var i = 0; i < this.choices.length; i++) {
      if (!!text) text += "\n";
      text += this.choices[i].value;
      if (!!this.choices[i].pureText) {
        text += "|" + this.choices[i].pureText;
      }
    }
    this.comment.value = text;
  }
}
