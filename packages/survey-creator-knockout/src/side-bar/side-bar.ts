import { SidebarModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./side-bar.html");

ko.components.register("svc-side-bar", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: SidebarModel = ko.unwrap(params.model);
      model.initResizeManager(componentInfo.element.getElementsByClassName("svc-side-bar__container")[0]);

      const subscrib = ko.computed(() => {
        const model: SidebarModel = ko.unwrap(params.model);
        new ImplementorBase(model);
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
        model.resetResizeManager();
      });
      return params;
    }
  },
  template: template.default
});