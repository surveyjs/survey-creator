import * as ko from "knockout";
import {
  ActionBarViewModel,
  AdaptiveElementImplementor,
} from "survey-knockout-ui";

//import "./tabbed-menu.scss";
import { ResponsivityManager } from "survey-core";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var container = componentInfo.element;
      var model = new ActionBarViewModel(params.items);
      model.dotsItemPopupModel.horizontalPosition = "right";
      new AdaptiveElementImplementor(model);

      var manager = new ResponsivityManager(container, model);
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
