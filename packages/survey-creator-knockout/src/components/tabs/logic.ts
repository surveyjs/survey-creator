import * as ko from "knockout";
import { TabLogicPlugin, SurveyLogicUI } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import "./logic.scss";
const templateHtml = require("./logic.html");

ko.components.register("svc-tab-logic", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabLogicPlugin = params.data;
      new ImplementorBase(plugin.model);
      plugin.model.onCreateLogic = (logic: SurveyLogicUI) => {
        new ImplementorBase(logic);
      };
      return plugin.model;
    },
  },
  template: templateHtml,
});
