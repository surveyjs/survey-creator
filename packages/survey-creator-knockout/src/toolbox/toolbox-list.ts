import * as ko from "knockout";
import { Action, ListModel } from "survey-core";
import { ActionContainerImplementor, ImplementorBase } from "survey-knockout-ui";

const template = require("./toolbox-list.html");

export var ToolboxListViewComponent: any;

ko.components.register("svc-toolbox-list", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ListModel = params.model;
      const _implementor: ImplementorBase = new ActionContainerImplementor(model);
      model.initListContainerHtmlElement(componentInfo.element);
      return {
        model: model,
        dispose: () => {
          _implementor.dispose();
          model.initListContainerHtmlElement(undefined as any);
        },
        afterItemRender: (_: any, action: Action) => {
          !!ko.tasks && ko.tasks.runEarly();
          model.onLastItemRended(action);
        }
      };
    },
  },
  template: template,
});
