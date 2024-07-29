import { RendererFactory, QuestionFactory, Serializer } from "survey-core";
import { QuestionFileEditorModel } from "survey-creator-core";
import { QuestionImplementor } from "survey-knockout-ui";
import * as ko from "knockout";

const template = require("./question-file.html");

function getOriginalEvent(event: any) {
  return event.originalEvent || event;
}

class QuestionFileEditorImplementor extends QuestionImplementor {
  constructor(question: QuestionFileEditor) {
    super(question);
    this.setObservaleObj("koInputTitle", ko.observable<string>());
    this.setCallbackFunc("ondrop", (data: any, event: any) => {
      this.question.onDrop(getOriginalEvent(event));
    });
    this.setCallbackFunc("ondragover", (data: any, event: any) => {
      this.question.onDragOver(getOriginalEvent(event));
    });
    this.setCallbackFunc("ondragenter", (data: any, event: any) => {
      this.question.onDragEnter(getOriginalEvent(event));
    });
    this.setCallbackFunc("ondragleave", (data: any, event: any) => {
      this.question.onDragLeave(getOriginalEvent(event));
    });
    this.setCallbackFunc("doFileInputChange", (data: any, event: any) => {
      this.question.onFileInputChange(getOriginalEvent(event));
    });
    this.setCallbackFunc("doclean", (data: any, event: any) => {
      this.question.doClean(getOriginalEvent(event));
    });
    this.setCallbackFunc("koOnKeyDown", (_: any, event: any) => {
      this.question.onKeyDown(event);
      return true;
    });
    this.setCallbackFunc("koOnBeforeInput", (_: any, event: any) => {
      this.question.onInputBlur(event);
      return true;
    });
    this.setCallbackFunc("koOnInputChange", (_: any, event: any) => {
      this.question.onInputChange(event);
      return true;
    });
    this.setObservaleObj("koReadOnlyValue", ko.computed(() => this.question.renderedValue));
  }
}

export class QuestionFileEditor extends QuestionFileEditorModel {
  private _implementor: QuestionFileEditorImplementor;
  constructor(name: string) {
    super(name);
    this.renderAs = "fileedit";
  }
  protected onBaseCreating() {
    super.onBaseCreating();
    this._implementor = new QuestionFileEditorImplementor(this);
  }
  public dispose() {
    this.onUploadStateChanged.remove(this.updateState);
    this._implementor.dispose();
    this._implementor = undefined;
    super.dispose();
  }
}

Serializer.overrideClassCreator("fileedit", function () {
  return new QuestionFileEditor("");
});

QuestionFactory.Instance.registerQuestion("fileedit", name => {
  return new QuestionFileEditor(name);
}, false);
RendererFactory.Instance.registerRenderer("fileedit", "fileedit", "svc-file-edit-question");

ko.components.register("svc-file-edit-question", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template.default,
});
