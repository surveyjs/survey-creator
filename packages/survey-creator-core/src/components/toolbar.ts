import * as ko from "knockout";
import { IActionBarItem } from "survey-core";

import "./toolbar.scss";
var template = require("./toolbar.html");

export class Toolbar {
  constructor(
    public items: ko.ObservableArray<IActionBarItem> | Array<IActionBarItem>
  ) {}
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
