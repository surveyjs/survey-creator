import { QuestionTextModel, Serializer, property } from "survey-core";

export class QuestionSpinEditorModel extends QuestionTextModel {
  @property() public unit: string;
  @property() private _showUnitsInEditor: boolean = true;

  private parseValue(val: string | number): { unit?: string, value: number } {
    const value: number = parseFloat(val.toString());
    const unit: string = val.toString().replace(/[^A-Za-z]/g, "");
    return { value, unit };
  }
  private changeValue(increase: boolean) {
    const parsedValue = this.parseValue(this.renderedValue);
    if (increase) {
      parsedValue.value++;
    } else {
      parsedValue.value--;
    }
    this.value = parsedValue.value;
  }
  private get showUnitsInEditor(): boolean {
    return !!this.unit && this._showUnitsInEditor;
  }
  private correctValue(newValue: string | number): number {
    let renderedMax = Number(this.renderedMax);
    let renderedMin = Number(this.renderedMin);
    newValue = typeof newValue === "string" ? parseFloat(newValue) : newValue;
    if(isNaN(newValue)) {
      newValue = isNaN(renderedMin) ? 0 : renderedMin;
    }
    else if(newValue > renderedMax) {
      newValue = renderedMax;
    }
    else if(newValue < renderedMin) {
      newValue = renderedMin;
    }
    return newValue;
  }
  protected setNewValue(newValue: string | number): void {
    super.setNewValue(this.correctValue(newValue));
  }
  public get renderedValue(): string {
    let renderedValue: string = (this.value ?? this.renderedMin ?? 0).toString();
    if(this.showUnitsInEditor) {
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
  private increaseTimer: NodeJS.Timer;
  private decreaseTimer: NodeJS.Timer;
  public onUpButtonMouseDown = () => {
    this.increase();
    this.increaseTimer = setTimeout(this.onUpButtonMouseDown, 200);
  }
  public onDownButtonMouseDown = () => {
    this.decrease();
    this.decreaseTimer = setTimeout(this.onDownButtonMouseDown, 200);
  }
  public onButtonMouseUp = () => {
    clearTimeout(this.decreaseTimer);
    clearTimeout(this.increaseTimer);
  }
  public onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
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
  }
  public onInputKeyDown = (event: KeyboardEvent) => {
    if(event.key == "ArrowUp" || event.key == "ArrowDown")
      this["updateValueOnEvent"](event);
  }
  public onBeforeInput(event: InputEvent) {
    if(!!event.data && !/[\d.]/.test(event.data)) {
      event.preventDefault();
    }
  }
  public onFocus = (event: Event) => {
    this._showUnitsInEditor = false;
  }
  public onBlur = (event: Event) => {
    this._showUnitsInEditor = true;
  }
  public getType(): string {
    return "spinedit";
  }
}
Serializer.addClass("spinedit", [
  "unit"
], (name: string) => new QuestionSpinEditorModel(name), "text");