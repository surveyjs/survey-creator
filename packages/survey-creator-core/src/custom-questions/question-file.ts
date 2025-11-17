import { CssClassBuilder, EventBase, Helpers, QuestionFactory, QuestionFileModel, Serializer, property } from "survey-core";

export class QuestionFileEditorModel extends QuestionFileModel {
  protected loadedFilesValue: any;
  protected onChangeQuestionValue(newValue: any): void {}
  protected setNewValue(newValue: any): void {
    if (typeof newValue === "object") {
      this.stateChanged(this.isEmpty() ? "empty" : "loaded");
      if (!this.isLoadingFromJson) {
        this.loadPreview(newValue);
      }
      this.loadedFilesValue = newValue;
      newValue = this.previewValue[0].content;
    }
    this.updateRenderedValue(newValue);
    super.setNewValue(newValue);
  }
  protected loadPreview(newValue: any): void {
    if (typeof newValue !== "string") {
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
      if (shouldClearValue) {
        this.value = undefined;
      }
      this.errors = [];
      !!doneCallback && doneCallback();
    };
    if (!!this.loadedFilesValue) {
      this.containsMultiplyFiles = false;
      this.survey.clearFiles(
        this,
        this.name,
        this.loadedFilesValue,
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

  @property() private _renderedValue: string = "";
  @property() private notEmptyValuePlaceholder: string = "";
  @property() public placeholder: string;
  @property() public disableInput: boolean;

  public get renderedPlaceholder() {
    return this.notEmptyValuePlaceholder || this.placeholder;
  }

  public get isTextInputReadOnly(): boolean {
    return this.disableInput || this.isReadOnly;
  }
  protected updateRenderedValue(value: string) {
    const matchBase64 = !!value ? value.match(/^data:((?:\w+\/(?:(?!;).)+)?)((?:;[\w\W]*?[^;])*),/) : null;
    if (matchBase64) {
      this.notEmptyValuePlaceholder = matchBase64[0] + "...";
      this._renderedValue = "";
    } else {
      this.notEmptyValuePlaceholder = "";
      this._renderedValue = value;
    }
  }

  public get renderedValue(): string {
    return this._renderedValue;
  }

  protected updateValueFromInputEvent(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    if (!!this.notEmptyValuePlaceholder && !value) return;
    if (!Helpers.isTwoValueEquals(value, this.value)) {
      this.clear(undefined, false);
      this.loadedFilesValue = undefined;
      this.value = (<HTMLInputElement>event.target).value;
    }
  }
  public onSurveyValueChanged(newValue: any): void {
    super.onSurveyValueChanged(newValue);
    this.updateRenderedValue(newValue);
  }
  public onInputChange(event: Event) {
    if (event.target !== document.activeElement) {
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
  public getChooseButtonCss(): string {
    return new CssClassBuilder().append(this.cssClasses.chooseButton).append(this.cssClasses.chooseButtonDisabled, this.isInputReadOnly).toString();
  }
  public onKeyDown = (event: KeyboardEvent) => {
    if ((<HTMLElement>event.target).tagName === "INPUT") {
      this.onTextKeyDownHandler(event);
    }
  };
  public onFileInputChange = (event: Event) => {
    if (!this.onChooseFilesCallback) {
      this.doChange(event);
      return true;
    }
  };
  public onChooseFilesCallback: (input: HTMLInputElement, callback: (files: File[]) => void) => void;
  chooseFiles(event: Event) {
    if (this.isInputReadOnly || !this.onChooseFilesCallback) {
      return true;
    } else {
      event.preventDefault();
      event.stopPropagation();
      const input = this["rootElement"].querySelectorAll("input[type='file']")[0];
      this.onChooseFilesCallback(input, (files) => {
        this.loadFiles(files);
      });
    }
  }
}
Serializer.addClass("fileedit",
  [
    "placeholder:string",
    { name: "disableInput:boolean", default: false },
  ]
  , () => new QuestionFileEditorModel(""), "file");
QuestionFactory.Instance.registerQuestion("fileedit", name => {
  return new QuestionFileEditorModel(name);
}, false);