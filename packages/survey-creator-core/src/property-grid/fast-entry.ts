import { ItemValue, QuestionCommentModel, Serializer } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../settings";
import { editorLocalization } from "../editorLocalization";

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
    this.editSurvey.onValidateQuestion.add((sender, options) => {
      const maxChoicesCount = this.options.maximumChoicesCount;
      if (maxChoicesCount > 0) {
        var choicesCount = this.getChoicesCount();
        if (maxChoicesCount < choicesCount) {
          options.error = editorLocalization
            .getString("pe.fastEntryChoicesCountError")
            ["format"](choicesCount, maxChoicesCount);
        }
        return;
      }
      if (!this.isValueUnique) return;
      let uniqueValue = this.getFirstUniqueValue();
      if (!!uniqueValue) {
        options.error = editorLocalization
          .getString("pe.fastEntryNonUniqueError")
          ["format"](uniqueValue);
      }
    });
  }
  protected getSurveyJSON(): any {
    return {
      elements: [
        {
          type: "comment",
          name: "question",
          titleLocation: "hidden",
          rows: 12
        }
      ]
    };
  }
  protected getSurveyCreationReason(): string {
    return "fast-entry";
  }
  public get comment(): QuestionCommentModel {
    return this.commentValue;
  }
  public apply(): boolean {
    if (this.comment.isEmpty()) return false;
    if (this.editSurvey.hasErrors(true)) return false;
    const items = this.convertTextToItemValues(this.comment.value);
    FastEntryEditor.applyItemValueArray(<any>this.choices, items, this.names);
    return true;
  }
  public setComment() {
    var text = this.convertItemValuesToText();
    this.comment.value = text;
  }
  private get isValueUnique(): boolean {
    return Serializer.findProperty("itemvalue", "value").isUnique === true;
  }
  private getFirstUniqueValue(): boolean {
    var texts = this.comment.value.split("\n");
    const values: any = {};
    for (let i = 0; i < texts.length; i++) {
      let str = texts[i];
      if (!str) continue;
      let value = str.split(ItemValue.Separator)[0];
      if (values[value]) return value;
      values[value] = true;
    }
    return undefined;
  }
  private getChoicesCount(): number {
    var texts = this.comment.value.split("\n");
    var res = 0;
    for (let i = 0; i < texts.length; i++) {
      let str = texts[i];
      if (!!str) res++;
    }
    return res;
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
