import * as ko from "knockout";
import {
  ButtonGroupItemViewModel,
  IButtonGroupItem,
} from "./button-group-item";

import "./button-group.scss";
const template = require("./button-group.html");

export class ButtonGroupViewModel {
  public model: any;
  public readOnly: boolean;
  public title: string;
  public choices: ko.MaybeObservableArray<IButtonGroupItem>;

  constructor(model: any) {
    this.model = model;
    this.readOnly = model.readOnly;
    this.title = model.title;
    this.choices = model.choices;
  }

  public onItemSelected = (item: ButtonGroupItemViewModel) => {
    this.model.value(item.value);
  };
}

ko.components.register("svc-button-group", {
  viewModel: {
    createViewModel: (params: any) => {
      const model = params.model;
      const viewModel = new ButtonGroupViewModel(model);
      return viewModel;
    },
  },
  template: template,
});
