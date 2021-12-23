import * as ko from "knockout";
import { IAction } from "survey-core";

//import "./page-navigator-item.scss";
const template = require("./page-navigator-item.html");
// import template from "./page-navigator-item.html";

export class PageNavigatorItemViewModel {
  constructor(private item: IAction) {}
  get text() {
    return this.item.title;
  }
  action = (data, event) => {
    if (!this.disabled) {
      this.item.action();
      event.stopPropagation();
    }
  };
  private unwrap<T>(value: T | (() => T)): T {
    if (typeof value !== "function") {
      return value;
    } else {
      return (<() => T>value)();
    }
  }
  get active() {
    return !!this.unwrap(this.item.active);
  }
  get disabled() {
    const isEnabled = this.item.enabled;
    if (isEnabled === undefined) return false;
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
