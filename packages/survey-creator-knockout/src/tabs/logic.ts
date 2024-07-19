import * as ko from "knockout";
import { TabLogicPlugin, SurveyLogicUI } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";

const templateHtml = require("./logic.html");

ko.components.register("svc-tab-logic", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabLogicPlugin = params.data;
      new ImplementorBase(plugin.model);
      new ImplementorBase(plugin.model.addNewButton);
      return { model: plugin.model };
    }
  },
  template: templateHtml.default
});
