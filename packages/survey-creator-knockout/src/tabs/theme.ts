import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabThemePlugin } from "survey-creator-core";

const template = require("./theme.html");

ko.components.register("svc-tab-theme", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabThemePlugin = params.data;
      new ImplementorBase(plugin.model.simulator);
      new ImplementorBase(plugin.model.testAgainAction);
      new ImplementorBase(plugin.model);
      return plugin.model;
    },
  },
  template: template
});
