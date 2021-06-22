import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabTestPlugin } from "@survey/creator";

const template = require("./test.html");
// import template from "./test.html";

ko.components.register("svc-tab-test", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabTestPlugin = params.data;
      new ImplementorBase(plugin.model.simulator);
      new ImplementorBase(plugin.model);
      return plugin.model;
    },
  },
  template: template
});
