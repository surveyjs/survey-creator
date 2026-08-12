import { Action, ActionContainer, ComputedUpdater, DomDocumentHelper } from "survey-core";
import { Helpers, QuestionFactory, QuestionFileModel, Serializer, property } from "survey-core";

export class QuestionFileEditorModel extends QuestionFileModel {
  confirmDelete = false;
  protected loadedFilesValue: any;
  protected onChangeQuestionValue(newValue: any): void { }
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
  @property({ onSetting: (val: boolean) => false }) allowMultiple: boolean;

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
    if (event.target !== DomDocumentHelper.getDocument().activeElement) {
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
  private _inputActionsContainer: ActionContainer;
  protected createInputActions(): Array<Action> {
    const clearAction = new Action({
      id: "clear",
      locTitle: this.locClearButtonCaption,
      enabled: new ComputedUpdater(() => !this.getIsClearButtonDisabled()) as unknown as boolean,
      action: () => this.doClean(),
      showTitle: false,
      iconName: new ComputedUpdater(() => this.cssClasses.clearButtonIcon) as unknown as string,
    });
    const chooseAction = new Action({
      id: "choose",
      css: new ComputedUpdater(() => this.cssClasses.chooseButton) as unknown as string,
      component: "sv-fileedit-button",
      data: { question: this },
      locTitle: this.locChooseButtonCaption,
      innerCss: new ComputedUpdater(() => this.isInputReadOnly ? this.cssClasses.chooseButtonDisabled : "") as unknown as string,
      enabled: new ComputedUpdater(() => !this.isInputReadOnly) as unknown as boolean,
      iconName: new ComputedUpdater(() => this.cssClasses.chooseButtonIcon) as unknown as string,
    });
    return [clearAction, chooseAction];
  }
  @property() _hasVisibleInputActions: boolean;
  public get hasVisibleInputActions(): boolean {
    return this.inputActionsContainer && this._hasVisibleInputActions;
  }
  protected createInputActionsContainer(): ActionContainer {
    const actionBar = new ActionContainer();
    actionBar.containerCss = this.cssClasses.group;
    actionBar.setActionsAppearance({ mode: "tertiary", style: "neutral", size: "small" });
    actionBar.actions = this.createInputActions();
    actionBar.registerFunctionOnPropertyValueChanged("isEmpty", () => {
      this._hasVisibleInputActions = actionBar.hasVisibleActions;
    });
    actionBar.flushUpdates();
    this._hasVisibleInputActions = actionBar.hasVisibleActions;
    return actionBar;
  }
  public get inputActionsContainer(): ActionContainer {
    if (!this._inputActionsContainer) {
      this._inputActionsContainer = this.createInputActionsContainer();
    }
    return this._inputActionsContainer;
  }
  public updateElementCss(reNew?: boolean): void {
    super.updateElementCss(reNew);
    if (!!this._inputActionsContainer) {
      this._inputActionsContainer.setCssClasses(this.survey?.getCss().inputActionBar);
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