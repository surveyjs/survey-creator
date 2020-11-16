import * as ko from "knockout";
import { ITabItem } from '../tabbed-menu/tabbed-menu-item';

import "./page-navigator-item.scss";
const template = require("./page-navigator-item.html");
// import template from "./page-navigator-item.html";

export class PageNavigatorItemViewModel {
  private _item: ITabItem;
  constructor(item: ITabItem) {
    this._item = item;
  }
  get text() {
    return this._item.title;
  }
  action = () => {
    if(!this.disabled) {
      this._item.action();
    }
  };
  get selected() {
    return !!ko.unwrap(this._item.selected);
  }
  get disabled() {
    return this._item.disabled;
  }
}

ko.components.register("svc-page-navigator-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new PageNavigatorItemViewModel(params.item);
    },
  },
  template: template,
});
