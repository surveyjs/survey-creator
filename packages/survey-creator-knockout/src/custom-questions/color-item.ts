import * as ko from "knockout";

const template = require("./color-item.html");

export var ColorItemViewModel: any;

ko.components.register("color-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return {
        item: params.item,
        getSwatchStyle: () => {
          return { backgroundColor: params.item.value };
        }
      };
    },
  },
  template: template.default,
});
