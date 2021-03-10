import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabJsonEditorTextareaPlugin } from "@survey/creator";
const template: any = require("./json-editor-textarea.html");
// import template from "./json-editor-textarea.html";

ko.components.register("svc-tab-json-editor-textarea", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabJsonEditorTextareaPlugin = params.data;
      new ImplementorBase(plugin.model);
      return plugin.model;
    }
  },
  template: template
});