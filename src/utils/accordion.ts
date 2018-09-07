import * as ko from "knockout";

import "./accordion.scss";
var template = require("html-loader?interpolate!val-loader!./accordion.html");

export interface IAccordionItemData {
  title: string | KnockoutObservable<string>;
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
  toggle = () => this.collapsed(!this.collapsed());
  get title() {
    return this.data.title;
  }
}

export class AccordionModel {
  constructor(params) {
    this.tabs = ko.computed<AccordionItemModel>(() => {
      return ko
        .unwrap(params.tabs)
        .map(
          tabData => new AccordionItemModel(tabData, ko.unwrap(params.template))
        );
    });
    !!this.tabs()[0] && this.tabs()[0].collapsed(false);
  }
  tabs: KnockoutObservable<AccordionItemModel>;
}

ko.components.register("svd-accordion", {
  viewModel: AccordionModel,
  template: template
});
