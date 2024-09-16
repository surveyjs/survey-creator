import { SidebarPageModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./side-bar-page.html");

ko.components.register("svc-side-bar-page", {
  viewModel: {
    createViewModel: (params: any) => {
      const item: SidebarPageModel = params.item;
      new ImplementorBase(item);
      return params;
    },
  },
  template: template.default
});
