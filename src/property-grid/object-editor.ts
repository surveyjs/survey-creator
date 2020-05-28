import * as ko from "knockout";

import "./object-editor.scss";
const templateHtml = require("./object-editor.html");

export class ObjectEditor {
  constructor(
    public koHasObject: any,
    public contentHtmlTemplate: string,
    public koElementEditor: any
  ) {}
}

ko.components.register("svd-object-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const selectedElementPropertyGrid = params.selectedElementPropertyGrid;
      return new ObjectEditor(
        selectedElementPropertyGrid.koHasObject,
        selectedElementPropertyGrid.contentHtmlTemplate,
        selectedElementPropertyGrid.koElementEditor
      );
    },
  },
  template: templateHtml,
});
