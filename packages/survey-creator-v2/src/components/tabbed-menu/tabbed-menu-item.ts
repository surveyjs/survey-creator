import * as ko from "knockout";
import { ITabItem } from "../../creator";

import "./tabbed-menu-item.scss";
const template = require("./tabbed-menu-item.html");
// import template from "./tabbed-menu-item.html";

export class TabbedMenuItemViewModel {
  private _item: ITabItem;
  constructor(item: ITabItem) {
    this._item = item;
  }
  get text() {
    return this._item.title;
  }
  action = () => {
    if (ko.isWritableObservable(this._item.selected)) {
      this._item.selected(true);
    }
    this._item.action();
  };
  get selected() {
    return !!ko.unwrap(this._item.selected);
  }
  get disabled() {
    return this._item.disabled;
  }
}

ko.components.register("svc-tabbed-menu-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabbedMenuItemViewModel(params.item);
    },
  },
  template: template,
});
