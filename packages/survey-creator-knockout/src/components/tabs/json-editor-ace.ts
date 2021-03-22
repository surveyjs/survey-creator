import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { TabJsonEditorAcePlugin } from "@survey/creator";
const template: string = require("./json-editor-ace.html");
// import template from "./json-editor-ace.html";

ko.components.register("svc-tab-json-editor-ace", {
  viewModel: {
    createViewModel: (params: { data: TabJsonEditorAcePlugin }, componentInfo: any) => {
      const aceEditor: AceAjax.Editor = ace.edit(
        <HTMLElement>(
          componentInfo.element.nextElementSibling.querySelector(
            ".svc-json-editor-tab__ace-editor"
          )
        )
      );
      const plugin: TabJsonEditorAcePlugin = params.data;
      new ImplementorBase(plugin.model);
      plugin.model.init(aceEditor);
      return plugin.model;
    }
  },
  template: template
});
