import { ItemValue, QuestionCommentModel, QuestionTextBase, Serializer } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../settings";
import { editorLocalization } from "../editorLocalization";

export class FastEntryEditorBase extends PropertyEditorSetupValue {
  protected commentValue: QuestionCommentModel;

  protected static calcBeforeApplyItemsArray(
    dest: Array<any>,
    src: Array<any>,
    names: Array<string>
  ): void {
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
  }

  public static applyItemsArray(
    dest: Array<any>,
    src: Array<any>,
    names: Array<string> = []
  ): void {
    this.calcBeforeApplyItemsArray(dest, src, names);
    for (var i = 0; i < dest.length; i++) {
      names.forEach((name) => {
        dest[i][name] = src[i][name];
      });
    }
  }

  constructor(
    public choices: Array<any>,
    options: ISurveyCreatorOptions = null,
    protected className: string = "item",
    protected names: Array<string> = []
  ) {
    super(options);
    this.commentValue = <QuestionCommentModel>(
      this.editSurvey.getQuestionByName("question")
    );
    this.setComment();
    (this.editSurvey.getQuestionByName("question") as QuestionTextBase).placeHolder = this.getPlaceHolder();
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

  public apply(): boolean {
    if (this.comment.isEmpty()) return false;
    if (this.editSurvey.hasErrors(true)) return false;
    const items = this.convertTextToItemValues(this.comment.value);
    FastEntryEditorBase.applyItemsArray(<any>this.choices, items, this.names);
    return true;
  }

  protected convertTextToItemValues(text: string): ItemValue[] {
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

  public get comment(): QuestionCommentModel {
    return this.commentValue;
  }

  protected getChoicesCount(): number {
    var texts = this.comment.value.split("\n");
    var res = 0;
    for (let i = 0; i < texts.length; i++) {
      let str = texts[i];
      if (!!str) res++;
    }
    return res;
  }

  protected getPlaceHolder(): string {
    return this.names.map(name => name + " 1").join(ItemValue.Separator) + "\n" +
      this.names.map(name => name + " 2").join(ItemValue.Separator) + "\n" +
      this.names[0] + " 3";
  }

  protected get isValueUnique(): boolean {
    return Serializer.findProperty("itemvalue", "value").isUnique === true;
  }

  protected getFirstUniqueValue(): boolean {
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

  public setComment(): void {
    var text = this.convertItemValuesToText();
    this.comment.value = text;
  }

  protected collectNames(item, type: string, separatorCounter: number): string {
    let text: string = "";
    this.names.forEach((name) => {
      if (type === "itemvalues") {
        if (name == "value") return;
        var str = name == "text" ? item.pureText : item[name];
      } else {
        var str = item[name];
      }
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
    return text;
  }

  protected convertItemValuesToText(): string {
    var text = "";
    this.choices.forEach((item) => {
      if (text) text += "\n";
      text += this.collectNames(item, "", 0);
    });
    return text;
  }
}

export class FastEntryEditor extends FastEntryEditorBase {
  public static applyItemValueArray(
    dest: Array<ItemValue>,
    src: Array<ItemValue>,
    names: Array<string> = []
  ): void {
    this.calcBeforeApplyItemsArray(dest, src, names);
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

  constructor(
    public choices: Array<ItemValue>,
    options: ISurveyCreatorOptions = null,
    protected className: string = "itemvalue",
    protected names: Array<string> = ["value", "text"]
  ) {
    super(choices, options, className, names);
  }

  public apply(): boolean {
    if (this.comment.isEmpty()) return false;
    if (this.editSurvey.hasErrors(true)) return false;
    const items = this.convertTextToItemValues(this.comment.value);
    FastEntryEditor.applyItemValueArray(<any>this.choices, items, this.names);
    return true;
  }

  protected convertItemValuesToText(): string {
    var text = "";
    this.choices.forEach((item) => {
      if (text) text += "\n";
      text += item.value;
      text += this.collectNames(item, "itemvalues", 1);
    });
    return text;
  }
}
