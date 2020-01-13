import * as ko from "knockout";

import "./designer-container.scss";
import { isWritableObservable } from "knockout";
var template = require("html-loader?interpolate!val-loader!./designer-container.html");

export class DesignerContainerModel {
  constructor(params, componentInfo) {
    this.tabs = ko.unwrap(params.tabs);
    this.context = params.context;
    componentInfo.element.className += " " + params.className;
    if (isWritableObservable(params.activeTab)) {
      this.activeTab = params.activeTab;
    }
    if (!this.activeTab() && this.tabs.length > 0) {
      this.activeTab(this.tabs[0]);
    }
  }
  activeTab = ko.observable<string>();
  tabs: any;
  context: any;
  className = "svd-designer-container";
}

ko.components.register("svd-designer-container", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new DesignerContainerModel(params, componentInfo);
    }
  },
  template: template
});
