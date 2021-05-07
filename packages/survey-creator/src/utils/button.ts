import * as ko from "knockout";

import "./button.scss";

var templateHtml = require("./button.html");

export class ButtonViewModel {
  constructor(public readonly item) {
  }
  get disabled() {
    return this.item.enabled !== undefined && !ko.unwrap(this.item.enabled);
  }
  get hint() {
    return this.item.tooltip || this.item.title;
  }
  get showTitle() {
    return this.item.showTitle === undefined || (!!this.item.iconName && !ko.unwrap(this.item.showTitle));
  }
  action(model: ButtonViewModel) {
    if(!model.disabled) {
      model.item.action();
    }
  }
}

ko.components.register("svd-button", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new ButtonViewModel(params.item);
    }
  },
  template: templateHtml,
});
