import * as ko from "knockout";

const template = require("./json-error-item.html");

export var JsonErrorItemViewModel: any;

ko.components.register("json-error-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return {
        item: params.item,
      };
    },
  },
  template: template.default,
});
