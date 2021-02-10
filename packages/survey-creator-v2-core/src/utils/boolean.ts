import * as ko from "knockout";

import "./boolean.scss";

var templateHtml = require("./boolean.html");

export var BooleanViewModel;

ko.components.register("svd-boolean", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return model;
    }
  },
  template: templateHtml,
});
