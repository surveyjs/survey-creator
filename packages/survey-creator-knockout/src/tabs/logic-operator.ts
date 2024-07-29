import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { DropdownListModel, RendererFactory } from "survey-core";
import { initLogicOperator } from "survey-creator-core";

const template = require("./logic-operator.html");

export var LogicOperatorViewModel: any;

ko.components.register("sv-logic-operator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const q = params.question;

      const click = (_: any, e: any) => {
        q.dropdownListModel?.onClick(e);
      };
      const clear = (_: any, e: any) => {
        q.dropdownListModel?.onClear(e);
      };
      const keyup = (_: any, e: any) => {
        q.dropdownListModel?.keyHandler(e);
      };
      if (!q.dropdownListModel) {
        q.dropdownListModel = new DropdownListModel(params.question);
      }

      initLogicOperator(q);

      new ImplementorBase(q.dropdownListModel);
      return { question: q, model: q.dropdownListModel, click: click, clear: clear, keyup: keyup };
    },
  },
  template: template.default,
});

RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");