import * as ko from "knockout";
import { ITabItem } from "./tabbed-menu-item";
import { ResponsibilityManager, AdaptiveElement } from "survey-knockout";

import "./tabbed-menu.scss";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

export class TabbedMenuViewModel extends AdaptiveElement {
  public itemsSubscription: ko.Computed;
  constructor(_items: Array<ITabItem> | ko.Computed<Array<ITabItem>>) {
    super();
    this.dotsItemPopupModel.horizontalPosition = "right";
    this.itemsSubscription = ko.computed(() => {
      var items = ko.unwrap(_items);
      items.forEach((item) => {
        item.isVisible = ko.observable(true);
        this.items.push(item);
      });
    });
  }
}

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var container = componentInfo.element;
      let selectedItem = ko.observable<ITabItem>();
      var model = new TabbedMenuViewModel(
        ko.computed(() =>
          ko.unwrap(params.items).map((item: ITabItem) => {
            item.selected = ko.computed(
              () =>
                item === selectedItem() ||
                ko.unwrap(params.viewType) === item.name
            );
            let __originalAction = item.action || (() => {});
            item.action = () => {
              selectedItem(item);
              __originalAction();
            };
            return item;
          })
        )
      );
      var manager = new ResponsibilityManager(container, model);
      manager.getItemSizes = () => {
        var widths: number[] = [];
        container
          .querySelectorAll("span.svc-tabbed-menu-item-container")
          .forEach((actionContainer) => {
            widths.push((<HTMLDivElement>actionContainer).offsetWidth);
          });
        return widths;
      };
      let updateVisibleItems = setInterval(() => {
        manager.process();
        ko.tasks.runEarly();
      }, 100);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        clearInterval(updateVisibleItems);
      });
      return model;
    },
  },
  template: template,
});
