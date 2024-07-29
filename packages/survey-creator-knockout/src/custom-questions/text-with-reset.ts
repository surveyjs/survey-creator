import { RendererFactory, QuestionFactory, Serializer } from "survey-core";
import { QuestionCommentWithResetModel, QuestionTextWithResetModel, ResetValueAdorner } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase, QuestionImplementor } from "survey-knockout-ui";
const template = require("./text-with-reset.html");
// import template from "./question-editor-content.html";

export class QuestionTextWithResetImplementor extends QuestionImplementor {
  constructor(question: QuestionTextWithReset) {
    super(question);
    this.setCallbackFunc("koOnFocus", (_: any, event: any) => {
      this.question.onFocus(event);
      return true;
    });
    this.setCallbackFunc("koOnBlur", (_: any, event: any) => {
      this.question.onBlur(event);
      return true;
    });
    this.setCallbackFunc("koOnKeyDown", (_: any, event: any) => {
      this.question.onKeyDown(event);
      return true;
    });
    this.setCallbackFunc("koOnKeyUp", (_: any, event: any) => {
      this.question.onKeyUp(event);
      return true;
    });
    this.setCallbackFunc("koOnChange", (_: any, event: any) => {
      this.question.onChange(event);
      return true;
    });
    this.setCallbackFunc("koOnCompositeUpdate", (_: any, event: any) => {
      this.question.onCompositionUpdate(event);
      return true;
    });
    this.setObservaleObj("koReadOnlyValue", ko.computed(() => this.question.value));
  }
}

export class QuestionTextWithReset extends QuestionTextWithResetModel {
  private _implementor: QuestionTextWithResetImplementor;
  private _adornerImplementor: ImplementorBase;
  constructor(name: string) {
    super(name);
  }
  protected createResetValueAdorner(): ResetValueAdorner {
    const adorner = new ResetValueAdorner(this);
    this._adornerImplementor = new ImplementorBase(adorner);
    return adorner;
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionTextWithResetImplementor(this);
  }
  public dispose() {
    this._implementor.dispose();
    this._adornerImplementor.dispose();
    this._adornerImplementor = undefined;
    this._implementor = undefined;
    super.dispose();
  }
}
Serializer.overrideClassCreator("textwithreset", function () {
  return new QuestionTextWithReset("");
});

QuestionFactory.Instance.registerQuestion("textwithreset", name => {
  return new QuestionTextWithReset(name);
}, false);
RendererFactory.Instance.registerRenderer("textwithreset", "textwithreset", "svc-text-with-reset");

export class QuestionCommentWithReset extends QuestionCommentWithResetModel {
  private _implementor: QuestionImplementor;
  private _adornerImplementor: ImplementorBase;
  constructor(name: string) {
    super(name);
    this.renderAs = "commentwithreset";
  }
  protected createResetValueAdorner(): ResetValueAdorner {
    const adorner = new ResetValueAdorner(this);
    this._adornerImplementor = new ImplementorBase(adorner);
    return adorner;
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionImplementor(this);
  }
  public dispose() {
    this._implementor.dispose();
    this._adornerImplementor.dispose();
    this._adornerImplementor = undefined;
    this._implementor = undefined;
    super.dispose();
  }
}
Serializer.overrideClassCreator("commentwithreset", function () {
  return new QuestionCommentWithReset("");
});

QuestionFactory.Instance.registerQuestion("commentwithreset", name => {
  return new QuestionCommentWithReset(name);
}, false);
RendererFactory.Instance.registerRenderer("commentwithreset", "commentwithreset", "svc-text-with-reset");

ko.components.register("svc-text-with-reset", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template.default,
});