import * as ko from "knockout";

import "./button-group-item.scss";
const template = require("./button-group-item.html");

export interface IButtonGroupItem {
  value: string;
  title?: string;
  iconName?: string;
  iconSize: number;
  onItemSelected: (item: IButtonGroupItem) => void;
  disabled: ko.Observable<boolean>;
}

export class ButtonGroupItemViewModel {
  public selected: ko.Computed<boolean>;
  public disabled: ko.Observable<boolean>;
  public iconName: string;
  public iconSize: number;
  public title: string;
  public value: string;
  onItemSelected: (item: ButtonGroupItemViewModel) => void;

  constructor(
    model: IButtonGroupItem,
    selected: ko.Computed<boolean>,
    onItemSelected: (item: ButtonGroupItemViewModel) => void
  ) {
    this.value = model.value;
    this.iconName = model.iconName;
    this.iconSize = model.iconSize;
    this.title = model.title;
    this.value = model.value;
    this.disabled = model.disabled;
    this.selected = selected;
    this.onItemSelected = onItemSelected;
  }

  public select = () => {
    if (!this.selected()) {
      this.onItemSelected(this);
    }
  };
}

ko.components.register("svc-button-group-item", {
  viewModel: {
    createViewModel: (params: any) => {
      const viewModel = new ButtonGroupItemViewModel(
        params.model,
        params.selected,
        params.onItemSelected
      );
      return viewModel;
    },
  },
  template: template,
});
