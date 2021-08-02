import * as ko from "knockout";
import { IAction } from "survey-knockout";

import "./toolbar.scss";
var template = require("./toolbar.html");

export class Toolbar {
  constructor(public items: ko.ObservableArray<IAction> | Array<IAction>) {}
  get hasItems() {
    return (ko.unwrap(this.items) || []).length > 0;
  }
}

ko.components.register("svd-toolbar", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new Toolbar(params.items);
    },
  },
  template: template,
});
