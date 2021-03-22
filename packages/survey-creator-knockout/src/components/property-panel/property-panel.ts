import { PropertyGridViewModel, CreatorBase } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { Base } from "survey-core";
//import "./property-panel.scss";
//import "../../survey-theme/survey.scss";
const template = require("./property-panel.html");

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any) => {
      var creator: CreatorBase<Survey> = params.model;
      const model = new PropertyGridViewModel(creator.propertyGrid, params.title, (obj: Base): void => {
        creator.selectElement(obj);
      });
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
