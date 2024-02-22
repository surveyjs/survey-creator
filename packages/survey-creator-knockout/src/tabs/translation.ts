import * as ko from "knockout";
import { TabTranslationPlugin } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
import { Base } from "survey-core";
var templateHtml = require("./translation.html");

ko.components.register("svc-tab-translation", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabTranslationPlugin = params.data;
      new ImplementorBase(plugin.model);
      plugin.model.makeObservable((obj: Base) => {
        new ImplementorBase(obj);
      });
      return { model: plugin.model };
    }
  },
  template: templateHtml
});
