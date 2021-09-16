import { PropertyGridViewModelBase, PropertyGridViewModel, CreatorBase } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, QuestionButtonGroup, Survey } from "survey-knockout-ui";
import { QuestionFactory, Serializer } from "survey-core";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: PropertyGridViewModelBase = ko.unwrap(params.model);
      //var creator: CreatorBase<Survey> = params.model;
      //const model = new PropertyGridViewModel(creator);
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      return model;
    }
  },
  template: template
});

Serializer.overrideClassCreator("buttongroup", function () {
  return new QuestionButtonGroup("");
});

QuestionFactory.Instance.registerQuestion("buttongroup", (name) => {
  var q = new QuestionButtonGroup(name);
  q.choices = QuestionFactory.DefaultChoices;
  return q;
});
