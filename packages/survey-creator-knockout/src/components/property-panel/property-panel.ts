import { PropertyGridViewModel, CreatorBase } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { Base } from "survey-core";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var creator: CreatorBase<Survey> = params.model;
      const model = new PropertyGridViewModel(
        creator.propertyGrid,
        creator.selectionHistoryController
      );
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });

      return model;
    },
  },
  template: template,
});
