import * as ko from "knockout";
import { ITabItem } from '../tabbed-menu/tabbed-menu-item';

import "./page-navigator.scss";
const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorViewModel {
  private _itemsSubscription: ko.Computed;
  private _selectionSubscription: ko.Computed;
  private selectedItem = ko.observable<ITabItem>();
  constructor(_items: Array<ITabItem> | ko.Computed<Array<ITabItem>>, creator: any, selection?: () => ITabItem, onSelect = (item: ITabItem) => {}) {
    this._selectionSubscription = ko.computed(() => this.selectedItem(selection && selection()));
    this._itemsSubscription = ko.computed(() =>
      this.items(ko.unwrap(_items).map((_item: ITabItem) => {
          let item: ITabItem = <any>{
            name: _item.name,
            title: creator ? creator.getObjectDisplayName(_item) : _item.title
          };
          item.selected = _item.selected || ko.computed(() => _item === this.selectedItem());
          item.action = () => {
            this.selectedItem(_item);
            onSelect && onSelect(_item);
            _item.action && _item.action();
          };
          return item;
        })
      )
    );
  }
  public items = ko.observableArray<ITabItem>();
  dispose() {
    this._selectionSubscription.dispose();
    this._itemsSubscription.dispose();
  }
}

ko.components.register("svc-page-navigator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = new PageNavigatorViewModel(
        params.items,
        params.creator,
        params.selection,
        params.onSelect
      );
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
