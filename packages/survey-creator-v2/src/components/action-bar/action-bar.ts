import * as ko from "knockout";

import { IToolbarItem } from "@survey/creator/components/toolbar";

import "./action-bar.scss";
const template = require("./action-bar.html");

export * from "./action-bar-item";
export * from "./action-bar-separator";
export * from "./action-bar-item-dropdown";

/**
 * The toolbar item description.
 */
export class ActionBarViewModel {
  items: ko.MaybeObservableArray<IToolbarItem>;
  constructor(items: Array<IToolbarItem>) {
    this.items = items;
  }
  get hasItems() {
    return (ko.unwrap(this.items) || []).length > 0;
  }
}

ko.components.register("svc-action-bar", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new ActionBarViewModel(params.items);
    },
  },
  template: template,
});
