import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "@survey/creator";
const template: string = require("./json-editor-textarea.html");
// import template from "./json-editor-textarea.html";

ko.components.register("svc-tab-json-editor-textarea", {
  viewModel: {
    createViewModel: (params: { data: TabJsonEditorTextareaPlugin }) => {
      const plugin: TabJsonEditorTextareaPlugin = params.data;
      new ImplementorBase(plugin.model);
      const model: TextareaJsonEditorModel = <TextareaJsonEditorModel>plugin.model;
      model.canShowErrors = false
      return model;
    }
  },
  template: template
});