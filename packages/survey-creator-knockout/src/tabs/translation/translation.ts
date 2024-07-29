import * as ko from "knockout";
import { Translation } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
import { Base } from "survey-core";
var templateHtml = require("./translation.html");

ko.components.register("svc-tab-translation", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: Translation = params.data?.model || params.model;
      new ImplementorBase(model);
      model.makeObservable((obj: Base) => {
        new ImplementorBase(obj);
      });
      return { model: model };
    }
  },
  template: templateHtml.default
});
