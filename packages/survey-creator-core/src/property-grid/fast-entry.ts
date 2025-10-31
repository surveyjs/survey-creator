import { ItemValue, QuestionCommentModel, QuestionTextBase, Serializer, settings, Helpers } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { getItemValueSeparator } from "../survey-helper";

function getSeparator(): string {
  return getItemValueSeparator();
}

export class FastEntryEditorBase extends PropertyEditorSetupValue {
  protected commentValue: QuestionCommentModel;
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
    (this.editSurvey.getQuestionByName("question") as QuestionTextBase).placeholder =
      editorLocalization.getString("pe.fastEntryPlaceholder");
    this.editSurvey.onValidateQuestion.add((sender, options) => {
      if (options.errors.length > 0) return;
      const minChoiceCount = this.options.minChoices;
      if (minChoiceCount > 0) {
        const choicesCount = this.getChoicesCount();
        if (minChoiceCount > choicesCount) {
          options.error = editorLocalization
            .getString("pe.fastEntryChoicesMinCountError")["format"](minChoiceCount);
        }
        return;
      }
      const maxChoicesCount = this.options.maxChoices;
      if (maxChoicesCount > 0) {
        const choicesCount = this.getChoicesCount();
        if (maxChoicesCount < choicesCount) {
          options.error = editorLocalization
            .getString("pe.fastEntryChoicesCountError")["format"](choicesCount, maxChoicesCount);
        }
        return;
      }
      if (!this.isValueUnique) return;
      let uniqueValue = this.getFirstUniqueValue();
      if (!!uniqueValue) {
        options.error = editorLocalization
          .getString("pe.fastEntryNonUniqueError")["format"](uniqueValue);
      }
    });
  }
  protected calcBeforeApplyItemsArray(dest: Array<any>, src: Array<any>, names: Array<string>): void {
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
  public applyItemValueArray(dest: Array<any>, src: Array<any>, names: Array<string> = []): void {
    this.calcBeforeApplyItemsArray(dest, src, names);
    for (var i = 0; i < dest.length; i++) {
      names.forEach((name) => {
        dest[i][name] = src[i][name];
      });
    }
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
    return this.applyCore();
  }
  protected applyCore(): boolean {
    if (this.editSurvey.hasErrors(true)) return false;
    const text = this.comment.value || "";
    const texts = text.split("\n") || [];
    let items = this.convertTextToItemValues(texts);
    items = this.options.onFastEntryCallback(items, texts);
    this.applyItemValueArray(<any>this.choices, items, this.names);
    return true;
  }

  protected convertTextToItemValues(texts: Array<string>): ItemValue[] {
    const items = [];
    for (var i = 0; i < texts.length; i++) {
      if (!texts[i]) continue;
      var elements = texts[i].split(getSeparator());
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

  protected get isValueUnique(): boolean {
    return Serializer.findProperty("itemvalue", "value").isUnique === true;
  }

  protected getFirstUniqueValue(): boolean {
    var texts = this.comment.value.split("\n");
    const values: any = {};
    for (let i = 0; i < texts.length; i++) {
      let str = texts[i];
      if (!str) continue;
      let value = str.split(getSeparator())[0];
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
      let str = undefined;
      if (type === "itemvalues") {
        if (name == "value") return;
        str = name == "text" ? item.pureText : item[name];
      } else {
        str = item[name];
      }
      if (!Helpers.isValueEmpty(str)) {
        for (var i = 0; i < separatorCounter; i++) {
          text += getSeparator();
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
  constructor(
    public choices: Array<ItemValue>,
    options: ISurveyCreatorOptions = null,
    protected className: string = "itemvalue",
    protected names: Array<string> = ["value", "text"]
  ) {
    super(choices, options, className, names);
  }
  public apply(): boolean {
    return this.applyCore();
  }
  public applyItemValueArray(dest: Array<ItemValue>, src: Array<ItemValue>, names: Array<string> = []): void {
    if (!Array.isArray(src)) src = [];
    for (let i = 0; i < src.length; i++) {
      const item = ItemValue.getItemByValue(dest, src[i].value);
      if (item) {
        item.text = src[i].text;
        names.forEach((name) => {
          if (name !== "value") {
            item[name] = src[i][name];
          }
        });
        src.splice(i, 1, item);
      }
    }
    dest.splice(0, dest.length);
    src.forEach((item) => dest.push(item));
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
