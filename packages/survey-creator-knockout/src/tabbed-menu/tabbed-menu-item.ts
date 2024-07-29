import * as ko from "knockout";
const template = require("./tabbed-menu-item.html");

ko.components.register("svc-tabbed-menu-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.item;
    },
  },
  template: template.default,
});
