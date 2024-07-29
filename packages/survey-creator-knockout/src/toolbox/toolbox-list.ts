import * as ko from "knockout";
import { ListModel } from "survey-core";

const template = require("./toolbox-list.html");

export var ToolboxListViewComponent: any;

ko.components.register("svc-toolbox-list", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ListModel = params.model;
      return { model: model };
    },
  },
  template: template.default,
});
