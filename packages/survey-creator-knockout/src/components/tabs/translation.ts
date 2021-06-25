import * as ko from "knockout";
import { TabTranslationPlugin } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { Base } from "survey-core";
import "./translation.scss";
var templateHtml = require("./translation.html");

ko.components.register("svc-tab-translation", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabTranslationPlugin = params.data;
      plugin.model.makeObservable((obj: Base) => {
        new ImplementorBase(obj);
      });
      return plugin.model;
    }
  },
  template: templateHtml
});
