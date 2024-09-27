import * as ko from "knockout";

const template = require("./surface-placeholder.html");

export var SurfacePlaceholderViewModel: any;

ko.components.register("svc-surface-placeholder", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template.default,
});
