import * as ko from "knockout";
import { SearchManager } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./search.html");

ko.components.register("svc-search", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var model: SearchManager = params.model;
      new ImplementorBase(model);
      return { model: model };
    }
  },
  template: template.default
});
