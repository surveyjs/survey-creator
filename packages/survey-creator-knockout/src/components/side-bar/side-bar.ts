import { SideBarModel, ResizeManager } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./side-bar.html");

ko.components.register("svc-side-bar", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const resizeManager: ResizeManager = new ResizeManager(componentInfo.element.getElementsByClassName("svc-side-bar__container")[0]);
      const subscrib = ko.computed(() => {
        const model: SideBarModel = ko.unwrap(params.model);
        new ImplementorBase(model);
      });
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
        resizeManager.dispose();
      });
      return params;
    }
  },
  template: template
});