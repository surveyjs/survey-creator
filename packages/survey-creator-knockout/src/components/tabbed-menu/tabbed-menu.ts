import * as ko from "knockout";
import { ActionBarViewModel, AdaptiveElementImplementor } from "survey-knockout-ui";

//import "./tabbed-menu.scss";
import { ResponsivityManager } from "survey-core";
const template = require("./tabbed-menu.html");
// import template from "./tabbed-menu.html";

export let TabbedMenuViewModel: any;

ko.components.register('svc-tabbed-menu', {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const container: HTMLDivElement = componentInfo.element.nextElementSibling;
      const model: ActionBarViewModel = new ActionBarViewModel(params.items);
      model.dotsItemPopupModel.horizontalPosition = 'right';
      new AdaptiveElementImplementor(model);

      const manager: ResponsivityManager =
        new ResponsivityManager(container, model, 'span.svc-tabbed-menu-item-container');
      ko.utils.domNodeDisposal.addDisposeCallback(container, () => manager.dispose());
      return model;
    },
  },
  template: template
});
