import * as ko from "knockout";

import "./page-selector.scss";
const templateHtml = require("./page-selector.html");

export var PageSelectorComponent;

ko.components.register("svd-page-selector", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return params.model || params.item.data;
    },
  },
  template: templateHtml,
});
