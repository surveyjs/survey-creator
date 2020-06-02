import * as ko from "knockout";

import "./page-selector.scss";
import { PagesEditorModel } from "../pages-editor-model";
const templateHtml = require("./page-selector.html");

export class PageSelector {
  constructor(public model: PagesEditorModel) {}
}

ko.components.register("svd-page-selector", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: PagesEditorModel = params.model || params.item.data;
      return new PageSelector(model);
    },
  },
  template: templateHtml,
});
