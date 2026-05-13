import { Action, ComputedUpdater, IAction, QuestionFactory, QuestionTextModel, Serializer, property } from "survey-core";

export interface ISpinEditorButton extends IAction {
  data: {
    question: QuestionSpinEditorModel,
    onMouseDown: () => void,
  };
}
export class QuestionSpinEditorModel extends QuestionTextModel {
  @property() public unit: string;
  @property() public changeValueOnPressing: boolean;
  @property() private _showUnitsInEditor: boolean = true;

  private parseValue(val: string | number): { unit?: string, value: number } {
    const value: number = parseFloat(val.toString());
    const unit: string = val.toString().replace(/[^A-Za-z]/g, "");
    return { value, unit };
  }
  private changeValue(increase: boolean) {
    const parsedValue = this.parseValue(this.renderedValue);
    const step = Number(this.renderedStep || 1);

    let result = parsedValue.value;
    if (increase) {
      result += step;
    } else {
      result -= step;
    }
    this.value = result;
  }
  private get showUnitsInEditor(): boolean {
    return !!this.unit && this._showUnitsInEditor;
  }
  private correctValue(newValue: string | number): number {
    if (newValue == undefined || newValue == null) return <number>newValue;
    let renderedMax = Number(this.renderedMax);
    let renderedMin = Number(this.renderedMin);
    newValue = typeof newValue === "string" ? parseFloat(newValue) : newValue;
    if (isNaN(newValue)) {
      newValue = isNaN(renderedMin) ? 0 : renderedMin;
    } else if (newValue > renderedMax) {
      newValue = renderedMax;
    } else if (newValue < renderedMin) {
      newValue = renderedMin;
    }
    newValue = Math.round(newValue * 1000) / 1000;
    return newValue;
  }
  protected setNewValue(newValue: string | number): void {
    super.setNewValue(this.correctValue(newValue));
  }
  public get renderedValue(): string {
    let renderedValue: string = (this.value ?? this.renderedMin ?? 0).toString();
    if (this.showUnitsInEditor) {
      renderedValue += this.unit;
    }
    return renderedValue;
  }
  private increase(): void {
    this.changeValue(true);
  }
  public decrease(): void {
    this.changeValue(false);
  }
  private increaseTimer: any;
  private decreaseTimer: any;

  private clearTimers() {
    clearTimeout(this.decreaseTimer);
    clearTimeout(this.increaseTimer);
  }
  public onUpButtonMouseDown = () => {
    if (!this.changeValueOnPressing) return;

    this.increase();
    this.clearTimers();
    this.increaseTimer = setTimeout(this.onUpButtonMouseDown, 200);
  };
  public onDownButtonMouseDown = () => {
    if (!this.changeValueOnPressing) return;

    this.decrease();
    this.clearTimers();
    this.decreaseTimer = setTimeout(this.onDownButtonMouseDown, 200);
  };
  public onUpButtonClick = () => {
    if (!this.changeValueOnPressing) {
      this.increase();
    }
  };
  public onDownButtonClick = () => {
    if (!this.changeValueOnPressing) {
      this.decrease();
    }
  };
  public onButtonMouseLeave = () => {
    if (!this.changeValueOnPressing) return;

    this.onButtonMouseUp();
  };
  public onButtonMouseUp = () => {
    if (!this.changeValueOnPressing) return;

    this.clearTimers();
  };
  public onKeyDown = (event: KeyboardEvent) => {
    switch(event.key) {
      case "ArrowUp":
        this.increase();
        event.stopPropagation();
        event.preventDefault();
        break;
      case "ArrowDown":
        this.decrease();
        event.stopPropagation();
        event.preventDefault();
        break;
    }
    this.onTextKeyDownHandler(event);
  };
  public onInputKeyDown = (event: KeyboardEvent) => {
    if (event.key == "ArrowUp" || event.key == "ArrowDown")
      this["updateValueOnEvent"](event);
  };
  public onBeforeInput(event: InputEvent) {
    const target = <HTMLInputElement>event.target;
    const regex = target.selectionStart == 0 ? /[\d.-]/ : /[\d.]/;
    if (!!event.data && !regex.test(event.data)) {
      event.preventDefault();
    }
  }
  public onFocus = (event: Event) => {
    if ((<HTMLElement>event.target).tagName == "INPUT") {
      queueMicrotask(() => {
        const inputElement = <HTMLInputElement>event.target;
        const selectStart = inputElement.selectionStart;
        const selectEnd = inputElement.selectionEnd;
        const selectDirection = inputElement.selectionDirection;
        this._showUnitsInEditor = false;
        queueMicrotask(() => {
          if (Math.abs(selectEnd - selectStart) > 0) {
            inputElement.setSelectionRange(0, this.renderedValue.length, selectDirection);
          } else {
            inputElement.setSelectionRange(this.renderedValue.length, this.renderedValue.length);
          }
        });
      });
    }
  };
  public onBlur = (event: Event) => {
    this._showUnitsInEditor = true;
    if ((<any>event.target).tagName == "INPUT") {
      this["updateValueOnEvent"](event);
    }
  };
  public getType(): string {
    return "spinedit";
  }
  public get isInputTextUpdate(): boolean {
    return false;
  }

  protected createInputActions(): Array<Action> {
    const res = super.createInputActions();
    const component = "sv-spinedit-button";
    const question = this;
    res.push(new Action({
      iconName: new ComputedUpdater(() => this.cssClasses.decreaseButtonIcon) as unknown as string,
      component,
      action: () => { },
      enabled: new ComputedUpdater(() => !this.isInputReadOnly),
      data: {
        question,
        onMouseDown: () => {
          this.onDownButtonMouseDown();
        }
      }
    } as ISpinEditorButton));
    res.push(new Action({
      iconName: new ComputedUpdater(() => this.cssClasses.increaseButtonIcon) as unknown as string,
      component,
      action: () => { },
      enabled: new ComputedUpdater(() => !this.isInputReadOnly),
      data: {
        question,
        onMouseDown: () => {
          this.onUpButtonMouseDown();
        }
      }
    } as ISpinEditorButton));
    return res;
  }
}
Serializer.addClass("spinedit", [
  "unit",
  { name: "changeValueOnPressing:boolean", default: true }
], () => new QuestionSpinEditorModel(""), "text");
QuestionFactory.Instance.registerQuestion("spinedit", name => {
  return new QuestionSpinEditorModel(name);
}, false);