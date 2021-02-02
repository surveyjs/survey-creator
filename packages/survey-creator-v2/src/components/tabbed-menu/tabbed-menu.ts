import * as ko from "knockout";
//import { ITabItem } from "./tabbed-menu-item";
import {
  ResponsibilityManager,
  AdaptiveElement,
  AdaptiveActionBarItemWrapper,
  AdaptiveElementImplementor,
} from "survey-knockout";

import "./tabbed-menu.scss";
import { IActionBarItem } from "survey-knockout";
import { ImplementorBase } from "survey-knockout";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

export class TabbedMenuViewModel extends AdaptiveElement {
  public itemsSubscription: ko.Computed;
  constructor(
    _items: Array<IActionBarItem> | ko.Computed<Array<IActionBarItem>>,
    viewType: ko.Observable<string>
  ) {
    super();

    const selectedItem = ko.observable<IActionBarItem>();
    this.itemsSubscription = ko.computed(() => {
      const wrappedItems: AdaptiveActionBarItemWrapper[] = ko
        .unwrap(_items)
        .map((item: IActionBarItem) => {
          item.active = <() => boolean>(
            ko.computed(() => item === selectedItem() || viewType() === item.id)
          );
          const wrapper = new AdaptiveActionBarItemWrapper(this, item);

          const __originalAction = item.action || ((context?: any) => {});
          wrapper.action = (context?: any) => {
            selectedItem(item);
            __originalAction(context);
          };

          return wrapper;
        });
      this.items = wrappedItems;
    });
    new AdaptiveElementImplementor(this);

    this.dotsItemPopupModel.horizontalPosition = "right";
  }

  public dispose() {
    this.itemsSubscription.dispose();
  }
}

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var container = componentInfo.element;
      var model = new TabbedMenuViewModel(params.items, params.viewType);
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
