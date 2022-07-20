import * as ko from "knockout";

const template = require("./action-button.html");

export class ActionButtonViewModel {
  constructor(public data: any) {
  }
  onClick = () => {
    this.data.click();
    if (this.data.allowBubble) {
      return true;
    }
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
  template: template
});
