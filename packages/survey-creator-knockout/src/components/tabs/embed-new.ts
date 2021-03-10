import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabEmbedPlugin } from "@survey/creator";
const template: any = require("./embed-new.html");
// import template from "./json-editor-textarea.html";

ko.components.register("svc-tab-embed-new", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabEmbedPlugin = params.data;
      new ImplementorBase(plugin.model);
      return plugin.model;
    }
  },
  template: template
});