import * as ko from "knockout";

import "./action-bar-item.scss";
const template = require("./action-bar-item.html");
// import template from "./action-bar-item.html";

export var ActionBarItemViewModel: any;

ko.components.register("svc-action-bar-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.item;
    },
  },
  template: template,
});
