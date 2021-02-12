import * as ko from "knockout";
import { IActionBarItem } from "survey-knockout";

import "./page-navigator-item.scss";
const template = require("./page-navigator-item.html");
// import template from "./page-navigator-item.html";

export class PageNavigatorItemViewModel {
  private _item: IActionBarItem;
  constructor(item: IActionBarItem) {
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

ko.components.register("svc-page-navigator-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new PageNavigatorItemViewModel(params.item);
    },
  },
  template: template,
});
