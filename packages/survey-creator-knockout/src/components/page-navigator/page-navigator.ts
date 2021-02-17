import * as ko from "knockout";
import {
  IActionBarItem,
  PageModel,
  PopupModel,
  ListModel,
} from "survey-knockout";

import "./page-navigator.scss";
const template = require("./page-navigator.html");
// import template from "./page-navigator.html";

export class PageNavigatorViewModel {
  private _itemsSubscription: ko.Computed;
  private _selectionSubscription: ko.Computed;
  private selectedItem = ko.observable<PageModel>();
  constructor(
    _items: Array<PageModel> | ko.Computed<Array<PageModel>>,
    private _creator: any,
    selection?: () => PageModel,
    onSelect = (item: PageModel) => {}
  ) {
    this._selectionSubscription = ko.computed(() => {
      this.selectedItem(selection && selection());
      this.pageListModel.selectedItem = this.pageListModel.items.filter(
        (item) => item.data === this.selectedItem()
      )[0];
    });
    this._itemsSubscription = ko.computed(() => {
      const pageSelectorItems: Array<IActionBarItem> = [];
      this.items(
        ko.unwrap(_items).map((page: PageModel) => {
          const item: IActionBarItem = {
            id: page.id,
            title: _creator ? _creator.getObjectDisplayName(page) : page.title,
          };
          item.active = ko.computed(() => page === this.selectedItem());
          item.action = () => {
            this.selectedItem(page);
            onSelect && onSelect(page);
          };

          pageSelectorItems.push({
            title: item.title,
            id: item.id,
            data: page,
          });

          return item;
        })
      );
      this.pageListModel.items = pageSelectorItems;
    });
  }
  public items = ko.observableArray<IActionBarItem>();

  get visible() {
    return this.items().length > 1;
  }

  icon = "icon-navigation";

  pageListModel: ListModel = new ListModel(
    [],
    (item) => {
      this._creator.selectElement(item.data);
      this.popupModel.toggleVisibility();
    },
    true
  );
  popupModel = new PopupModel("sv-list", this.pageListModel);

  togglePageSelector = () => this.popupModel.toggleVisibility();

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
