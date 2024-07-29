import * as ko from "knockout";
import { ActionContainerImplementor } from "survey-knockout-ui";

import { ResponsivityManager } from "survey-core";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

export let TabbedMenuViewModel: any;

ko.components.register("svc-tabbed-menu", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = params.model;
      const container: HTMLDivElement = componentInfo.element.nextElementSibling;
      const reactivityImplementor = new ActionContainerImplementor(model);

      const manager: ResponsivityManager = new ResponsivityManager(
        container,
        model,
        ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content"
      );
      ko.utils.domNodeDisposal.addDisposeCallback(container, () => {
        manager.dispose();
        reactivityImplementor.dispose();
      });
      return model;
    }
  },
  template: template.default
});
