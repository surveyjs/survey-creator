import * as ko from "knockout";

import "./tabbed-menu-item.scss";
const template = require("./tabbed-menu-item.html");
// import template from "./tabbed-menu-item.html";

export interface ITabItem {
  name: string;
  title: string;
  template: string;
  data: any;
  visible: boolean;
  selected?: boolean | ko.Computed<boolean>;
  disabled?: ko.MaybeObservable<boolean>;
  action: () => void;
}

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
