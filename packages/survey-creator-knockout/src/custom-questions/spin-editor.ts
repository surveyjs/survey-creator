import { RendererFactory, QuestionFactory, Serializer } from "survey-core";
import { QuestionSpinEditorModel } from "survey-creator-core";
import { QuestionImplementor } from "survey-knockout-ui";
import * as ko from "knockout";

const template = require("./spin-editor.html");
// import template from "./question-editor-content.html";

export class QuestionSpinEditorImplementor extends QuestionImplementor {
  constructor(question: QuestionSpinEditor) {
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
    this.setCallbackFunc("koOnInputKeyDown", (_: any, event: any) => {
      this.question.onInputKeyDown(event);
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
    this.setCallbackFunc("koIncrease", (_: any, event: any) => {
      this.question.increase();
      return true;
    });
    this.setCallbackFunc("koDecrease", (_: any, event: any) => {
      this.question.decrease();
      return true;
    });

    this.setCallbackFunc("koOnBeforeInput", (_: any, event: any) => {
      this.question.onBeforeInput(event);
      return true;
    });
    this.setCallbackFunc("koOnDownButtonMouseDown", (_: any, event: any) => {
      this.question.onDownButtonMouseDown(event);
      return true;
    });

    this.setCallbackFunc("koOnUpButtonMouseDown", (_: any, event: any) => {
      this.question.onUpButtonMouseDown(event);
      return true;
    });
    this.setCallbackFunc("koOnDownButtonMouseDown", (_: any, event: any) => {
      this.question.onDownButtonMouseDown(event);
      return true;
    });
    this.setCallbackFunc("koOnButtonMouseUp", (_: any, event: any) => {
      this.question.onButtonMouseUp(event);
      return true;
    });
    this.setCallbackFunc("koOnButtonMouseLeave", (_: any, event: any) => {
      this.question.onButtonMouseLeave(event);
      return true;
    });

    this.setObservaleObj("koReadOnlyValue", ko.computed(() => this.question.renderedValue));
  }
}

export class QuestionSpinEditor extends QuestionSpinEditorModel {
  private _implementor: QuestionSpinEditorImplementor;
  constructor(name: string) {
    super(name);
    this.renderAs = "spinedit";
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionSpinEditorImplementor(this);
  }
  public dispose() {
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

Serializer.overrideClassCreator("spinedit", function () {
  return new QuestionSpinEditor("");
});

QuestionFactory.Instance.registerQuestion("spinedit", name => {
  return new QuestionSpinEditor(name);
}, false);
RendererFactory.Instance.registerRenderer("spinedit", "spinedit", "svc-spin-editor");

ko.components.register("svc-spin-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template.default,
});
