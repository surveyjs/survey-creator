import * as ko from "knockout";
//import { ITabItem } from "./tabbed-menu-item";
import {
  ResponsibilityManager,
  AdaptiveElementImplementor,
} from "survey-knockout";

//import "./tabbed-menu.scss";
//import { property, IActionBarItem } from "survey-knockout";
import { ActionBarViewModel } from "survey-knockout";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var container = componentInfo.element;
      var model = new ActionBarViewModel(params.items);
      model.dotsItemPopupModel.horizontalPosition = "right";
      new AdaptiveElementImplementor(model);

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
