import * as ko from "knockout";
//import "./tabbed-menu-item.scss";
const template = require("./tabbed-menu-item.html");
// import template from "./tabbed-menu-item.html";
ko.components.register("svc-tabbed-menu-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.item;
    },
  },
  template: template,
});
