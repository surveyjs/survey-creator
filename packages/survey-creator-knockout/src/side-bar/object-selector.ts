import { ObjectSelectorModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./object-selector.html");

ko.components.register("svc-object-selector", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var model: ObjectSelectorModel = params.model;
      new ImplementorBase(model);
      return { model: model };
    }
  },
  template: template.default
});
