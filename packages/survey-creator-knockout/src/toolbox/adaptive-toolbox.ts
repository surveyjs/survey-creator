import * as ko from "knockout";
import { VerticalResponsivityManager } from "survey-core";
import { ToolboxViewModel } from "./toolbox";
const template = require("./adaptive-toolbox.html");

ko.components.register("svc-adaptive-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ToolboxViewModel = new ToolboxViewModel(params.model);
      const container = componentInfo.element.querySelector(".svc-toolbox__scroller");
      model.setContainerElement(container);
      const manager: VerticalResponsivityManager = new VerticalResponsivityManager(container, params.model.toolbox, ".svc-toolbox__tool:not(.svc-toolbox__search-button):not(.sv-dots)");
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        manager.dispose();
        model.dispose();
      });
      return model;
    },
  },
  template: template
});
