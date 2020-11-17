import * as ko from "knockout";
import { ImageItemValue, ItemValue } from "survey-knockout";
import "./list.scss";

const template = require("./list.html");

export class ListViewModel {
  public isExpanded: ko.Observable<boolean> = ko.observable(false);
  public selectedItem: ko.Observable<ListItem> = ko.observable();

  constructor(
    public items: ko.MaybeObservableArray<ListItem>,
    public onItemSelect: (item: ListItem) => void
  ) {}

  public selectItem = (itemValue: ListItem) => {
    this.isExpanded(false);
    this.selectedItem(itemValue);
    if (!!this.onItemSelect) {
      this.onItemSelect(itemValue);
    }
  };
}

export interface ListItem {
  value: string;
  text: string;
  isEnabled?: boolean;
}

ko.components.register("svc-list", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = params.model;
      const viewModel = new ListViewModel(model.items, model.onItemSelect);
      return viewModel;
    },
  },
  template: template,
});
