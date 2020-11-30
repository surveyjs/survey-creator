import * as ko from "knockout";

import "./button.scss";

var templateHtml = require("./button.html");

export var ButtonViewModel;

ko.components.register("svd-button", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return model;
    }
  },
  template: templateHtml,
});
