import { PropertyGridViewModel } from "survey-creator-core";
import * as ko from "knockout";
import { ImplementorBase, QuestionButtonGroup, Survey } from "survey-knockout-ui";
import { QuestionFactory, Serializer } from "survey-core";

const template = require("./property-grid.html");

ko.components.register("svc-property-grid", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const subscrib = ko.computed(() => {
        const model: PropertyGridViewModel = ko.unwrap(params.model);
        new ImplementorBase(model);
      });
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscrib.dispose();
      });
      return params;
    }
  },
  template: template.default
});

Serializer.overrideClassCreator("buttongroup", function () {
  return new QuestionButtonGroup("");
});

QuestionFactory.Instance.registerQuestion("buttongroup", (name) => {
  var q = new QuestionButtonGroup(name);
  q.choices = QuestionFactory.DefaultChoices;
  return q;
}, false);
