import * as ko from "knockout";
import { IActionBarItem } from "survey-knockout";

import "./tabbed-menu-item.scss";
const template = require("./tabbed-menu-item.html");
// import template from "./tabbed-menu-item.html";
export class TabbedMenuItemViewModel {
  private _item: IActionBarItem;
  constructor(item: IActionBarItem) {
    this._item = item;
  }
  get text() {
    return this._item.title;
  }
  action = () => {
    if (ko.isWritableObservable(this._item.active)) {
      this._item.active(true);
    }
    this._item.action();
  };
  get active() {
    return !!ko.unwrap(this._item.active);
  }
  get disabled() {
    const isEnabled = this._item.enabled;
    if (isEnabled === undefined)
      return false;
    return !ko.unwrap(isEnabled);
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
