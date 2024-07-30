import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { ThemeTabPlugin } from "survey-creator-core";

const template = require("./theme.html");

ko.components.register("svc-tab-theme", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: ThemeTabPlugin = params.data;
      new ImplementorBase(plugin.model.simulator);
      new ImplementorBase(plugin.model.testAgainAction);
      new ImplementorBase(plugin.model);
      return { model: plugin.model };
    },
  },
  template: template.default
});
