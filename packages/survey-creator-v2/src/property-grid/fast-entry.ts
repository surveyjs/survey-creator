import { ISurveyCreatorOptions } from "@survey/creator/settings";
import { SurveyHelper } from "@survey/creator/surveyHelper";
import {
  ItemValue,
  QuestionCommentModel,
  Serializer,
  SurveyModel,
  Survey,
} from "survey-knockout";
import { PropertyEditorSetupValue } from "./index";

export class FastEntryEditor extends PropertyEditorSetupValue {
  private commentValue: QuestionCommentModel;

  constructor(
    public choices: Array<ItemValue>,
    options: ISurveyCreatorOptions = null
  ) {
    super(options);
    this.commentValue = <QuestionCommentModel>(
      this.editSurvey.getQuestionByName("question")
    );
    this.setComment();
  }
  protected getSurveyJSON(): any {
    return {
      elements: [{ type: "comment", name: "question" }],
    };
  }
  protected getSurveyCreationReason(): string {
    return "fast-entry";
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
  public setComment() {
    var text = SurveyHelper.convertItemValuesToText(<any>this.choices);
    this.comment.value = text;
  }
}
