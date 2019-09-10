import * as ko from "knockout";

import "./accordion.scss";
import { isVar } from "babel-types";
var template = require("html-loader?interpolate!val-loader!./accordion.html");

export interface IAccordionItemData {
  name: string | any;
  title: string | any;
  onExpand: () => void;
}

export class AccordionItemModel {
  constructor(public data: IAccordionItemData, public template: string) {
    var self = this;
    data.onExpand = function() {
      self.collapsed(false);
    };
  }
  collapsed = ko.observable(true);
  toggle = () => {
    this.collapsed(!this.collapsed());
    if (!this.collapsed() && !!document) {
      var el = document.getElementById("editor_tab_id_" + this.data.name);
      if (!!el) {
        el.scrollIntoView(false);
      }
    }
  };
  get title() {
    return this.data.title;
  }
}

export class AccordionModel {
  constructor(params) {
    this.tabs = ko.computed<AccordionItemModel>(() => {
      var res = ko
        .unwrap(params.tabs)
        .map(
          tabData => new AccordionItemModel(tabData, ko.unwrap(params.template))
        );
      if (res.length > 0) {
        res[0].collapsed(false);
      }
      return res;
    });
    this.showHeader = ko.computed<boolean>(() => {
      return params.tabs().length > 1;
    });
  }
  tabs: any;
  showHeader: any;
}

ko.components.register("svd-accordion", {
  viewModel: AccordionModel,
  template: template
});
