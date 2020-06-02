import * as ko from "knockout";

import "./object-selector.scss";
const templateHtml = require("./object-selector.html");

export class ObjectSelector {
  constructor(public koObjects: any, public koSelectedObject: any) {}
}

ko.components.register("svd-object-selector", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new ObjectSelector(params.koObjects, params.koSelectedObject);
    },
  },
  template: templateHtml,
});
