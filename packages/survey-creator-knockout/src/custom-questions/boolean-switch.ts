import * as ko from "knockout";
import { RendererFactory } from "survey-core";

const template = require("./boolean-switch.html");

export var SwitchViewModel: any;

ko.components.register("sv-boolean-switch", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return { question: params.question };
    },
  },
  template: template.default,
});

RendererFactory.Instance.registerRenderer(
  "boolean",
  "switch",
  "sv-boolean-switch"
);
