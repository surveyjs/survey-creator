import * as ko from "knockout";
import { RendererFactory } from "survey-core";

const template = require("./translation-line-skeleton.html");

export var Skeleton: any;

ko.components.register("sd-translation-line-skeleton", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return { question: params.question };
    },
  },
  template: template.default,
});
