import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabJsonEditorAcePlugin, AceJsonEditorModel } from "survey-creator-core";
const template = require("./json-editor-ace.html");
// import template from "./json-editor-ace.html";

ko.components.register("svc-tab-json-editor-ace", {
  viewModel: {
    createViewModel: (
      params: { data: TabJsonEditorAcePlugin },
      componentInfo: any
    ) => {
      const aceEditor: AceAjax.Editor = ace.edit(
        <HTMLElement>(
          componentInfo.element.nextElementSibling.querySelector(
            ".svc-json-editor-tab__ace-editor"
          )
        )
      );
      const plugin: TabJsonEditorAcePlugin = params.data;
      new ImplementorBase(plugin.model);
      (<AceJsonEditorModel>plugin.model).init(aceEditor);
      return { model: plugin.model };
    }
  },
  template: template.default
});
