import * as ko from "knockout";

const template = require("./notifier.html");

ko.components.register("svc-notifier", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template,
});
