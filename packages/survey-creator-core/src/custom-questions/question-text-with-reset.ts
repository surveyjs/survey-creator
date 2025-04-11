import { Base, CssClassBuilder, QuestionCommentModel, QuestionFactory, QuestionTextModel, Serializer, property } from "survey-core";

export class ResetValueAdorner extends Base {
  constructor(private question: QuestionTextModel | QuestionCommentModel) {
    super();
  }
  public resetValueCallback: () => {};
  public caption: string;
  @property() public allowResetValue: boolean;

  public resetValue() {
    if (this.resetValueCallback) {
      this.resetValueCallback();
    }
  }
  public get isDisabled() {
    return this.question.isInputReadOnly || !this.allowResetValue;
  }
}

export class QuestionTextWithResetModel extends QuestionTextModel {
  public resetValueAdorner: ResetValueAdorner;
  constructor(name: string) {
    super(name);
    this.resetValueAdorner = this.createResetValueAdorner();
  }
  protected createResetValueAdorner() {
    return new ResetValueAdorner(this);
  }
  getType(): string {
    return "textwithreset";
  }
  public getRootClass(): string {
    return new CssClassBuilder()
      .append(this.cssClasses.root)
      .append(this.cssClasses.onError, this.errors.length > 0)
      .toString();
  }
  public getControlClass(): string {
    return new CssClassBuilder()
      .append(this.cssClasses.control)
      .toString();
  }
  public get wrappedQuestionTemplate() {
    return "text";
  }
}
Serializer.addClass("textwithreset", [], () => new QuestionTextWithResetModel(""), "text");
QuestionFactory.Instance.registerQuestion("textwithreset", name => {
  return new QuestionTextWithResetModel(name);
}, false);
export class QuestionCommentWithResetModel extends QuestionCommentModel {
  constructor(name: string) {
    super(name);
    this.resetValueAdorner = this.createResetValueAdorner();
  }
  protected createResetValueAdorner() {
    return new ResetValueAdorner(this);
  }
  getType(): string {
    return "commentwithreset";
  }
  protected getCssType(): string {
    return "textwithreset";
  }
  public getRootClass(): string {
    return new CssClassBuilder()
      .append(this.cssClasses.root)
      .append(this.cssClasses.rootMultiline)
      .append(this.cssClasses.onError, this.errors.length > 0)
      .toString();
  }

  public getControlClass(): string {
    return new CssClassBuilder()
      .append(this.cssClasses.control)
      .append(this.cssClasses.controlMultiline)
      .toString();
  }
  public get wrappedQuestionTemplate() {
    return "comment";
  }
}
Serializer.addClass("commentwithreset", [{ name: "allowResize:boolean", default: false }], () => new QuestionCommentWithResetModel(""), "comment");
QuestionFactory.Instance.registerQuestion("commentwithreset", name => {
  return new QuestionCommentWithResetModel(name);
}, false);