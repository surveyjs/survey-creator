import { Action, ComputedUpdater, CssClassBuilder, IAction, IsTouch, ItemValue, ListModel, PopupModel, QuestionFactory, QuestionTextModel, Serializer, createDropdownActionModel, createDropdownActionModelAdvanced, property, propertyArray } from "survey-core";
import { parseColor } from "../utils/color-utils";
import { listComponentCss } from "../components/list-theme";

const DEFAULT_COLOR: string = "#000000";
export class QuestionColorModel extends QuestionTextModel {
  @property() allowEmptyValue: boolean = false;
  constructor(name: string) {
    super(name);
    this.createItemValues("choices");
    this.registerFunctionOnPropertyValueChanged("choices", () => {
      this.updateChoices();
    });
  }

  private getCorrectedValue(newValue: string): string {
    if (newValue == undefined || newValue == null || (this.allowEmptyValue && !newValue)) return newValue;
    newValue = parseColor(newValue ?? "").color;
    if (newValue.indexOf("#") < 0) {
      newValue = "#" + newValue;
    }
    newValue = (newValue.match(/#([0-9a-fA-F]){1,6}/) || [DEFAULT_COLOR])[0];
    if (newValue.length === 4) {
      let value = newValue.slice(0, 1);
      for (let i = 1; i < 4; i++) {
        value += newValue[i] + newValue[i];
      }
      newValue = value;
    }
    if (newValue.length < 7) {
      const length = newValue.length;
      for (let i: number = 0; i < 7 - length; i++) {
        newValue += "0";
      }
    }
    return newValue;
  }
  protected isNewValueEqualsToValue(newValue: any): boolean {
    if (super.isNewValueEqualsToValue(newValue) || this.isTwoValueEquals(newValue, this.value, true, true)) return true;
    else return false;
  }
  protected setNewValue(newValue: string): void {
    this.resetRenderedValue();
    super.setNewValue(this.getCorrectedValue(newValue));
    this.updateRenderedValue();
  }
  public onBeforeInput(event: InputEvent): void {
    if (!!event.data && !/[\d\w(),#]/.test(event.data)) {
      event.preventDefault();
    }
  }
  public onColorInputChange(event: Event): void {
    this.value = (<any>event.target).value;
  }
  public getType(): string {
    return "color";
  }
  @property() _renderedValue: string;
  private resetRenderedValue(): void {
    this._renderedValue = undefined;
  }
  private updateRenderedValue(): void {
    if (this.value) {
      const color = parseColor(this.value || "");
      this._renderedValue = color.color;
    } else if (this.allowEmptyValue) {
      this._renderedValue = "";
    } else {
      this._renderedValue = DEFAULT_COLOR;
    }
  }
  public get renderedValue(): string {
    if (!this._renderedValue && this._renderedValue !== "") {
      this.updateRenderedValue();
    }
    return this._renderedValue.toUpperCase();
  }
  public getSwatchCss() {
    return new CssClassBuilder()
      .append(this.cssClasses.swatch)
      .append(this.cssClasses.swatchDefault, !this.renderedValue)
      .append(this.cssClasses.swatchDisabled, this.isInputReadOnly)
      .toString();
  }
  public getSwatchStyle(): {[index: string]: string} {
    return { backgroundColor: this.renderedValue };
  }
  public get renderedColorValue() {
    return this.renderedValue || DEFAULT_COLOR;
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
    if (!this._dropdownAction) {
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
  protected onTextKeyDownHandler(event: any): void {
    const popupModel = <PopupModel>this.dropdownAction.popupModel;
    if (event.key === "ArrowDown") {
      this.dropdownAction.action();
    }
    if (!popupModel.isVisible) {
      super.onTextKeyDownHandler(event);
    }
  }

  public get showDropdownAction() {
    return !this.isValueEmpty(this.choices);
  }

  public createDropdownAction(): Action {
    const action = createDropdownActionModelAdvanced({ enabled: new ComputedUpdater<boolean>(() => !this.isInputReadOnly) as any }, {
      onSelectionChanged: (item) => {
        this.value = (<ItemValue><unknown>item).value;
      },
      items: this.choices,
      cssClasses: listComponentCss,
    }, {
      showPointer: false,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
    });
    action.disableTabStop = true;
    const popupModel = <PopupModel>action.popupModel;
    const listModel = <ListModel<ItemValue>>popupModel.contentComponentData.model;
    popupModel.displayMode = IsTouch ? "overlay" : "popup";
    popupModel.setWidthByTarget = true;
    popupModel.positionMode = "fixed";
    popupModel.getTargetCallback = undefined;
    listModel.isItemSelected = (itemValue: ItemValue) => itemValue.value == this.value;
    return action;
  }

  protected calcCssClasses(css: any): void {
    const classes = super.calcCssClasses(css);
    const dropdownAction = this.dropdownAction;
    dropdownAction.cssClasses = { item: classes.colorDropdown };
    dropdownAction.iconName = classes.colorDropdownIcon;
    dropdownAction.iconSize = "auto" as any;
    return classes;
  }

  private updateChoices() {
    this.dropdownAction.popupModel.contentComponentData.model.setItems(this.choices);
  }

  public get itemComponent() {
    return "color-item";
  }
}
Serializer.addClass("color", [
  {
    name: "allowEmptyValue:boolean",
    default: false
  },
  "choices:itemvalue[]"
], () => new QuestionColorModel(""), "text");

QuestionFactory.Instance.registerQuestion("color", name => {
  return new QuestionColorModel(name);
}, false);