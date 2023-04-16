import { Helpers, QuestionFactory, QuestionFileModel, Serializer } from "survey-core";

export class QuestionFileEditorModel extends QuestionFileModel {
  protected loadedFilesValue: any;
  protected onChangeQuestionValue(newValue: any): void {}
  protected setNewValue(newValue: any): void {
    if(typeof newValue === "object") {
      this.stateChanged(this.isEmpty() ? "empty" : "loaded");
      if(!this.isLoadingFromJson) {
        this.loadPreview(newValue);
      }
      this.loadedFilesValue = newValue;
      newValue = this.previewValue[0].content;
    }
    super.setNewValue(newValue);
  }
  protected loadPreview(newValue: any): void {
    if(typeof newValue !== "string") {
      super.loadPreview(newValue);
    }
  }
  public get allowMultiple(): boolean {
    return false;
  }
  public set allowMultiple(val: boolean) {}
  public clear(doneCallback?: () => void, shouldClearValue: boolean = true) {
    if (!this.survey) return;
    const callback = () => {
      if(shouldClearValue) {
        this.value = undefined;
      }
      this.errors = [];
      !!doneCallback && doneCallback();
    };
    if(!!this.loadedFilesValue) {
      this.containsMultiplyFiles = false;
      this.survey.clearFiles(
        this.loadedFilesValue,
        this.name,
        this.previewValue,
        null,
        (status, data) => {
          if (status === "success") {
            callback();
          }
        }
      );
    } else {
      callback();
    }
  }
  protected updateValueFromInputEvent(event: Event) {
    if(!Helpers.isTwoValueEquals((<HTMLInputElement>event.target).value, this.value)) {
      this.clear(undefined, false);
      this.loadedFilesValue = undefined;
      this.value = (<HTMLInputElement>event.target).value;
    }
  }
  public onInputChange(event: Event) {
    if(event.target !== document.activeElement) {
      this.updateValueFromInputEvent(event);
    }
  }
  public onInputBlur(event: Event) {
    this.updateValueFromInputEvent(event);
  }
  public getType() {
    return "fileedit";
  }
  public getIsClearButtonDisabled(): boolean {
    return !this.value || this.isInputReadOnly;
  }
}
Serializer.addClass("fileedit", [], () => new QuestionFileEditorModel(""), "file");

QuestionFactory.Instance.registerQuestion("fileedit", name => {
  return new QuestionFileEditorModel(name);
});