import {
  ItemValue,
  QuestionCommentModel,
  Serializer,
  SurveyModel,
  Survey,
} from "survey-knockout";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../settings";

export class FastEntryEditor extends PropertyEditorSetupValue {
  public static applyItemValueArray(
    dest: Array<ItemValue>,
    src: Array<ItemValue>,
    names: Array<string> = []
  ) {
    if (!src || src.length == 0) {
      dest.splice(0, dest.length);
      return;
    }
    if (dest.length > src.length) {
      dest.splice(src.length, dest.length - src.length);
    }
    if (dest.length < src.length) {
      var insertedArray = [];
      for (var i = dest.length; i < src.length; i++) {
        insertedArray.push(src[i]);
      }
      dest.splice.apply(dest, [dest.length, 0].concat(insertedArray));
    }
    for (var i = 0; i < dest.length; i++) {
      if (dest[i].value != src[i].value) {
        dest[i].value = src[i].value;
      }
      dest[i].text = src[i].hasText ? src[i].text : "";
      names.forEach((name) => {
        if (name == "value" || name == "text") return;
        dest[i][name] = src[i][name];
      });
    }
  }
  private commentValue: QuestionCommentModel;

  constructor(
    public choices: Array<ItemValue>,
    options: ISurveyCreatorOptions = null,
    private className: string = "itemvalue",
    private names: Array<string> = ["value", "text"]
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
    const items = this.convertTextToItemValues(this.comment.value);
    FastEntryEditor.applyItemValueArray(<any>this.choices, items, this.names);
  }
  public setComment() {
    var text = this.convertItemValuesToText();
    this.comment.value = text;
  }
  private convertTextToItemValues(text: string): ItemValue[] {
    var items = [];
    if (!text) return items;

    var texts = text.split("\n");
    for (var i = 0; i < texts.length; i++) {
      if (!texts[i]) continue;
      var elements = texts[i].split(ItemValue.Separator);
      var valueItem = Serializer.createClass(this.className);
      this.names.forEach((name, i) => {
        valueItem[name] = elements[i];
      });
      items.push(valueItem);
    }
    return items;
  }
  private convertItemValuesToText(): string {
    var text = "";
    this.choices.forEach((item) => {
      if (text) text += "\n";
      text += item.value;
      var separatorCounter = 1;
      this.names.forEach((name) => {
        if (name == "value") return;
        var str = name == "text" ? item.pureText : item[name];
        if (!!str) {
          for (var i = 0; i < separatorCounter; i++) {
            text += ItemValue.Separator;
          }
          text += str;
          separatorCounter = 1;
        } else {
          separatorCounter++;
        }
      });
    });
    return text;
  }
}
