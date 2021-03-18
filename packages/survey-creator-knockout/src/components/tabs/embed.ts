import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabEmbedPlugin } from "@survey/creator";
const template: string = require("./embed.html");
// import template from "./json-editor-textarea.html";

ko.components.register("svc-tab-embed", {
  viewModel: {
    createViewModel: (params: { data: TabEmbedPlugin }) => {
      const plugin: TabEmbedPlugin = params.data;
      new ImplementorBase(plugin.model);
      return plugin.model;
    }
  },
  template: template
});