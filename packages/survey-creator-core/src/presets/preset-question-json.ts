import { QuestionCommentModel, ItemValue, Serializer, ElementFactory, ITextArea, Helpers, RendererFactory, TextAreaModel, CustomError, SurveyError } from "survey-core";
import { SurveyJSON5 } from "survey-creator-core";

export class QuestionPresetJsonModel extends QuestionCommentModel {
  private jsonAreaModelValue: TextAreaModel;
  private jsonError: boolean = false;
  constructor(name: string) {
    super(name);
  }
  public getType(): string {
    return "presetjson";
  }
  protected getCssType(): string {
    return "comment";
  }
  private validateJson(text: string): boolean {
    text = text.trim();
    if (!text) return true;
    const json = this.parseJson(text);
    if (!json || !json.type) return false;
    const obj = Serializer.createClass(json.type, json);
    return !!obj;
  }
  private parseJson(text: string): any {
    try {
      const res = new SurveyJSON5().parse(text);
      return res;
    } catch(e) {
      return undefined;
    }
  }

  public get textAreaModel(): TextAreaModel {
    if (!this.jsonAreaModelValue) {
      const options = this.getTextAreaOptions();
      const _this = this;
      const updateQuestionValue = (newValue: any) => {
        if (!Helpers.isTwoValueEquals(JSON.stringify(_this.value, null, 2), newValue, false, true, false)) {
          if (this.validateJson(newValue)) {
            _this.value = this.parseJson(newValue);
            this.jsonError = false;
          } else {
            this.jsonError = true;
          }
        } else {
          this.jsonError = false;
        }
      };
      options.getTextValue = () => JSON.stringify(this.value, null, 2);
      options.onTextAreaChange = (e) => { updateQuestionValue(e.target.value); };
      this.jsonAreaModelValue = new TextAreaModel(options);
    }
    return this.jsonAreaModelValue;
  }

  protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void {
    super.onCheckForErrors(errors, isOnValueChanged, fireCallback);
    if (!!this.jsonError) {
      errors.push(new CustomError("JSON error", this));
    }
  }

}
ElementFactory.Instance.registerElement("presetjson", (name) => {
  return new QuestionPresetJsonModel(name);
}, false);

Serializer.addClass("presetjson",
  [],
  function () { return new QuestionPresetJsonModel(""); },
  "comment"
);

RendererFactory.Instance.registerRenderer(
  "presetjson",
  "default-comment",
  "comment"
);
