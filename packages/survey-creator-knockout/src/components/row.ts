import * as ko from "knockout";
//import "./page.scss";
const template = require("./row.html");
// import template from "./page.html";

ko.components.register("svc-row", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template,
});
