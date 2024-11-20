import * as ko from "knockout";
import { VerticalResponsivityManager } from "survey-core";
import { ToolboxViewModel } from "./toolbox";
const template = require("./adaptive-toolbox.html");

ko.components.register("svc-adaptive-toolbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ToolboxViewModel = new ToolboxViewModel(params.model);
      const container = componentInfo.element;
      let manager: VerticalResponsivityManager;
      setTimeout(() => {
        model.toolbox.setRootElement(container);
        manager = new VerticalResponsivityManager(model.toolbox.containerElement as HTMLDivElement, params.model.toolbox, params.model.toolbox.itemSelector);
      }, 1);

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        if (manager) manager.dispose();
        model.toolbox.setRootElement(undefined);
        model.dispose();
      });
      return model;
    },
  },
  template: template.default
});
