import * as ko from "knockout";

import "./designer-h-container.scss";
var template = require("html-loader?interpolate!val-loader!./designer-h-container.html");

export class DesignerHContainerViewModel {
  constructor(params, componentInfo) {
    this.items = ko.unwrap(params.items);
    this.context = params.context;
    componentInfo.element.className += " " + params.className;
  }
  items: any;
  context: any;
  className = "svd-designer-h-container";
}

ko.components.register("svd-designer-h-container", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new DesignerHContainerViewModel(params, componentInfo);
    }
  },
  template: template
});
