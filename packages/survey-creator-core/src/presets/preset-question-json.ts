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
  public get textAreaModel(): TextAreaModel {
    if (!this.jsonAreaModelValue) {
      const options = this.getTextAreaOptions();
      const _this = this;
      const updateQuestionValue = (newValue: any) => {
        if (!Helpers.isTwoValueEquals(JSON.stringify(_this.value, null, 2), newValue, false, true, false)) {
          try {
            _this.value = new SurveyJSON5().parse(newValue);
            this.jsonError = false;
          } catch{
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
