import * as ko from "knockout";

const template = require("./action-button.html");

export class ActionButtonViewModel {
  constructor(public data: any) {
  }
  onClick = (_, event) => {
    this.data.click(this.data, event);
    if (this.data.allowBubble) {
      return true;
    }
    event.stopPropagation();
    return false;
  }
}

ko.components.register("svc-action-button", {
  viewModel: {
    createViewModel: (
      params: any,
      componentInfo: any
    ) => {
      return new ActionButtonViewModel(params);
    }
  },
  template: template.default
});
