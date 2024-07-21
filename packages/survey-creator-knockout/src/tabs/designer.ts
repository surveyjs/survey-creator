import * as ko from "knockout";
import { TabDesignerViewModel } from "survey-creator-core";
import { ImplementorBase, Survey } from "survey-knockout-ui";

const template = require("./designer.html");
// import template from "./designer.html";

ko.components.register("svc-tab-designer", {
  viewModel: {
    createViewModel: (params: any) => {
      const model = <TabDesignerViewModel>params.data.model;
      new ImplementorBase(model);
      new ImplementorBase(model.pagesController);
      return { model };
    }
  },
  template: template.default
});

