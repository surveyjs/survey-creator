import * as ko from "knockout";

const template = require("./action-button.html");

ko.components.register("svc-action-button", {
  viewModel: {
    createViewModel: (
      params: any,
      componentInfo: any
    ) => {
      return params;
    }
  },
  template: template
});
