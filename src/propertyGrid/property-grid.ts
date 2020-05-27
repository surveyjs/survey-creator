import * as ko from "knockout";
import "./property-grid.scss";
const templateHtml = require("./property-grid.html");

export let PropertyGridViewModel;

ko.components.register("property-grid", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const creator = params.data;
      return creator;
    },
  },
  template: templateHtml,
});
