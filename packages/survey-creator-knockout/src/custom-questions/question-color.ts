import { RendererFactory, QuestionFactory, Serializer } from "survey-core";
import { QuestionColorModel } from "survey-creator-core";
import { ImplementorBase, QuestionImplementor } from "survey-knockout-ui";
import * as ko from "knockout";

const template = require("./question-color.html");
// import template from "./question-editor-content.html";

export class QuestionColorImplementor extends QuestionImplementor {
  constructor(question: QuestionColor) {
    super(question);
    this.setCallbackFunc("koOnBlur", (_: any, event: any) => {
      this.question.onBlur(event);
      return true;
    });
    this.setCallbackFunc("koOnChange", (_: any, event: any) => {
      this.question.onChange(event);
      return true;
    });
    this.setCallbackFunc("koOnBeforeInput", (_: any, event: any) => {
      this.question.onBeforeInput(event);
      return true;
    });
    this.setCallbackFunc("koOnColorInputChange", (_: any, event: any) => {
      this.question.onColorInputChange(event);
      return true;
    });
    this.setCallbackFunc("koOnKeyUp", (_: any, event: any) => {
      this.question.onKeyUp(event);
      return true;
    });
    this.setCallbackFunc("koOnKeyDown", (_: any, event: any) => {
      this.question.onKeyDown(event);
      return true;
    });
    this.setCallbackFunc("koDropdownAction", () => {
      const dropdownAction = this.question.dropdownAction;
      new ImplementorBase(dropdownAction);
      return dropdownAction;
    });

    this.setObservaleObj("koReadOnlyValue", ko.computed(() => this.question.renderedValue));
  }
}

export class QuestionColor extends QuestionColorModel {
  private _implementor: QuestionColorImplementor;
  constructor(name: string) {
    super(name);
    this.renderAs = "color";
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionColorImplementor(this);
  }
  public dispose() {
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

Serializer.overrideClassCreator("color", function () {
  return new QuestionColor("");
});

QuestionFactory.Instance.registerQuestion("color", name => {
  return new QuestionColor(name);
}, false);
RendererFactory.Instance.registerRenderer("color", "color", "svc-color-question");

ko.components.register("svc-color-question", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template.default,
});
