import { Action, IAction, ItemValue, ListModel, PopupModel, QuestionFactory, QuestionTextModel, Serializer, createDropdownActionModel, createDropdownActionModelAdvanced, property, propertyArray } from "survey-core";
import { parseColor } from "../utils/utils";

export class QuestionColorModel extends QuestionTextModel {
  @property() public unit: string;

  constructor(name: string) {
    super(name);
    this.createItemValues("choices");
    this.registerFunctionOnPropertyValueChanged("choices", () => {
      this.updateChoices();
    });
  }

  private getCorrectedValue(newValue: string): string {
    newValue = parseColor(newValue ?? "").color;
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
    return newValue;
  }
  protected setNewValue(newValue: string): void {
    this.resetRenderedValue();
    super.setNewValue(this.getCorrectedValue(newValue));
    this.updateRenderedValue();
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
  @property({}) _renderedValue: string;
  private resetRenderedValue(): void {
    this._renderedValue = undefined;
  }
  private updateRenderedValue(): void {
    this._renderedValue = this.value;
  }
  public get renderedValue(): string {
    return (this._renderedValue ?? this.value ?? "#000000").toUpperCase();
  }
  public getSwatchStyle(): {[index: string]: string} {
    return { backgroundColor: this.renderedValue };
  }
  public get isInputTextUpdate(): boolean {
    return false;
  }
  public onSurveyValueChanged(newValue: any): void {
    super.onSurveyValueChanged(newValue);
    this.updateRenderedValue();
  }
  private _dropdownAction: Action;

  public get dropdownAction (): Action {
    if(!this._dropdownAction) {
      this._dropdownAction = this.createDropdownAction();
    }
    return this._dropdownAction;
  }

  public get choices(): Array<ItemValue> {
    return this.getPropertyValue("choices");
  }
  public set choices(newValue: Array<ItemValue>) {
    this.setPropertyValue("choices", newValue);
  }

  public get showDropdownAction() {
    return !this.isValueEmpty(this.choices);
  }

  public createDropdownAction(): Action {
    const action = createDropdownActionModelAdvanced({
      iconName: this.cssClasses.colorDropdownIcon
    }, {
      onSelectionChanged: (item) => {
        this.value = (<ItemValue><unknown>item).value;
      },
      items: this.choices
    }, {
      showPointer: false,
      verticalPosition: "bottom",
      horizontalPosition: "center"
    });
    const popupModel = <PopupModel>action.popupModel;
    const listModel = <ListModel<ItemValue>>popupModel.contentComponentData.model;
    listModel.cssClasses = {
      itemBody: listModel.cssClasses.itemBody + " " + this.cssClasses.colorItem
    };
    popupModel.setWidthByTarget = true;
    popupModel.positionMode = "fixed";
    listModel.isItemSelected = (itemValue: ItemValue) => itemValue.value == this.value;
    action.cssClasses = { item: this.cssClasses.colorDropdown };
    return action;
  }

  private updateChoices() {
    this.dropdownAction.popupModel.contentComponentData.model.setItems(this.choices);
  }

  public get itemComponent() {
    return "color-item";
  }
}
Serializer.addClass("color", [
  "unit",
  "choices:itemvalue[]"
], () => new QuestionColorModel(""), "text");

QuestionFactory.Instance.registerQuestion("color", name => {
  return new QuestionColorModel(name);
});