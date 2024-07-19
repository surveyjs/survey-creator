import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "survey-creator-core";
const template = require("./json-editor-textarea.html");
// import template from "./json-editor-textarea.html";

ko.components.register("svc-tab-json-editor-textarea", {
  viewModel: {
    createViewModel: (params: { data: TabJsonEditorTextareaPlugin }, componentInfo: any) => {
      const plugin: TabJsonEditorTextareaPlugin = params.data;
      new ImplementorBase(plugin.model);
      const model: TextareaJsonEditorModel = <TextareaJsonEditorModel>plugin.model;
      model.canShowErrors = false;
      const el = componentInfo.element.parentElement;
      if (!!el) {
        const els = el.getElementsByClassName("svc-json-editor-tab__content-area");
        if (els.length > 0) {
          model.textElement = els[0];
        }
      }
      return { model };
    }
  },
  template: template.default
});