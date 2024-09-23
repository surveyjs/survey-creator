import { SidebarHeaderModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./side-bar-default-header.html");

ko.components.register("svc-side-bar-default-header", {
  viewModel: {
    createViewModel: (params: any) => {
      const model: SidebarHeaderModel = params.model;
      new ImplementorBase(model);
      return params;
    },
  },
  template: template.default
});
