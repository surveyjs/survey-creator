import * as ko from "knockout";
import { ITabItem } from '../tabbed-menu/tabbed-menu-item';

import "./page-navigator.scss";
const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorViewModel {
  private _itemsSubscription: ko.Computed;
  private selectedItem = ko.observable<ITabItem>();
  constructor(_items: Array<ITabItem> | ko.Computed<Array<ITabItem>>, creator: any, onSelect = (item: ITabItem) => {}) {
    this._itemsSubscription = ko.computed(() =>
      this.items(ko.unwrap(_items).map((_item: ITabItem) => {
          let item: ITabItem = <any>{
            name: _item.name,
            title: creator ? creator.getObjectTitle(_item) : _item.title
          };
          item.selected = _item.selected || ko.computed(() => item === this.selectedItem());
          item.action = () => {
            this.selectedItem(item);
            onSelect && onSelect(item);
            _item.action && _item.action();
          };
          return item;
        })
      )
    );
  }
  public items = ko.observableArray<ITabItem>();
  dispose() {
    this._itemsSubscription.dispose();
  }
}

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new PageNavigatorViewModel(
        params.items,
        params.creator,
        params.onSelect
      );
    },
  },
  template: template,
});
