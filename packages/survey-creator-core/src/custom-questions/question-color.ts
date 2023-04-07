import { QuestionFactory, QuestionTextModel, Serializer, property } from "survey-core";

export class QuestionColorModel extends QuestionTextModel {
  @property() public unit: string;

  private getCorrectedValue(newValue: string): string {
    newValue = newValue ?? "";
    newValue = (newValue.match(/#(\d|\w){1,6}/) || ["#000000"])[0];
    if(newValue.length === 4) {
      for(let i = 1; i < 4; i++) {
        newValue += newValue[i];
      }
    }
    if(newValue.length < 7) {
      const length = newValue.length;
      for(let i: number = 0; i < 7 - length; i++) {
        newValue += "0";
      }
    }
    return newValue.toUpperCase();
  }
  protected setNewValue(newValue: string): void {
    super.setNewValue(this.getCorrectedValue(newValue));
  }
  public onBeforeInput(event: InputEvent): void {
    if(!!event.data && !/[\d\w#]/.test(event.data)) {
      event.preventDefault();
    }
  }
  public onColorInputChange(event: Event): void {
    this.value = (<any>event.target).value;
  }
  public getType(): string {
    return "color";
  }
  public get renderedValue(): string {
    return this.value ?? "#000000";
  }
  public getColorSignStyle(): {[index: string]: string} {
    return { backgroundColor: this.renderedValue };
  }
  public get isInputTextUpdate(): boolean {
    return false;
  }

}
Serializer.addClass("color", [
  "unit"
], () => new QuestionColorModel(""), "text");

QuestionFactory.Instance.registerQuestion("color", name => {
  return new QuestionColorModel(name);
});