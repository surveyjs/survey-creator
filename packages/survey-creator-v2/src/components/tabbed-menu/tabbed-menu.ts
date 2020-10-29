import * as ko from "knockout";
import { ITabItem } from "../../creator";

import "./tabbed-menu.scss";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

export class TabbedMenuViewModel {
  public items: Array<ITabItem> | ko.Computed<Array<ITabItem>>;
  constructor(items: Array<ITabItem> | ko.Computed<Array<ITabItem>>) {
    this.items = items;
  }
}

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      let selectedItem = ko.observable<ITabItem>();
      return new TabbedMenuViewModel(
        ko.computed(() =>
          ko.unwrap(params.items).map((item: ITabItem) => {
            item.selected = ko.computed(() => item === selectedItem());
            let __originalAction = item.action || (() => {});
            item.action = () => {
              selectedItem(item);
              __originalAction();
            };
            return item;
          })
        )
      );
    },
  },
  template: template,
});
