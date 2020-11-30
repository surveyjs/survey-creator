import * as ko from "knockout";

import "./action-bar-separator.scss";
const template = require("./action-bar-separator.html");
// import template from "./action-bar-separator.html";

export var ActionBarSeparatorViewModel: any;

ko.components.register("svc-action-bar-separator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return { css: params.item.innerCss };
    },
  },
  template: template,
});
