import { QuestionCommentModel, Serializer, ElementFactory, Helpers, RendererFactory, TextAreaModel, CustomError, SurveyError, JsonObject, Base, SurveyModel } from "survey-core";
import { SurveyJSON5 } from "survey-creator-core";

export class QuestionPresetJsonModel extends QuestionCommentModel {
  private jsonAreaModelValue: TextAreaModel;
  private jsonErrors: string[] = [];
  constructor(name: string) {
    super(name);
  }
  public getType(): string {
    return "presetjson";
  }
  protected getCssType(): string {
    return "comment";
  }
  public getTemplate(): string {
    return "comment";
  }
  public get textAreaModel(): TextAreaModel {
    if (!this.jsonAreaModelValue) {
      const options = this.getTextAreaOptions();
      const _this = this;
      const updateQuestionValue = (newValue: any) => {
        if (!Helpers.isTwoValueEquals(JSON.stringify(_this.value, null, 2), newValue, false, true, false)) {
          try {
            const value = new SurveyJSON5().parse(newValue);
            const valueToCheck = { ...value, name: "temp" };

            const jsonConverter = new JsonObject();
            jsonConverter.toObject({ elements: [valueToCheck] }, new SurveyModel());
            this.jsonErrors = jsonConverter.errors.map((err) => err.message);
            if (this.jsonErrors.length > 0) return;
            _this.value = value;
          } catch(error) {
            this.jsonErrors = [error.message];
          }
        } else {
          this.jsonErrors = [];
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
    this.jsonErrors.forEach(errorMessage => {
      errors.push(new CustomError(errorMessage, this));
    });
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

