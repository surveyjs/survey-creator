import { SidebarModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyElement } from "survey-core";

const template = require("./side-bar.html");

ko.components.register("svc-side-bar", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: SidebarModel = ko.unwrap(params.model);
      const rootElement = !!componentInfo.element.getElementsByClassName ? componentInfo.element : componentInfo.element.nextElementSibling;
      model.initResizeManager(rootElement.getElementsByClassName("svc-side-bar__container")[0]);

      const subscrib = ko.computed(() => {
        const model: SidebarModel = ko.unwrap(params.model);
        new ImplementorBase(model);
        new ImplementorBase(model.header);
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