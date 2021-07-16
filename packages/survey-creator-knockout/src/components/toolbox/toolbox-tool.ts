import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./toolbox-tool.html");
export var toolboxToolViewModel;

ko.components.register("svc-toolbox-tool", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      new ImplementorBase(params.item);
      return {
        item: params.item,
        creator: params.creator,
        isCompact: params.isCompact
      };
    }
  },
  template: template
});
