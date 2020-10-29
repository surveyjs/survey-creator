import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { editorLocalization } from "../editorLocalization";
import { SurveyCreator } from '../editor';
export { ToolboxItemViewModel } from "./toolbox-item";

import "./toolbox.scss";
var template = require("html-loader?interpolate!val-loader!./toolbox.html");

export var ToolboxViewModel;

ko.components.register("svd-toolbox", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      let creator: SurveyCreator = params.itemsProvider;
      // let toolbox = new QuestionToolbox(creator.toolboxItems, creator);
      // ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
      //   creator.toolbox.dispose();
      //   creator.toolbox = undefined;
      // });
      // creator.toolbox = toolbox;
      // return toolbox;
      return creator.toolbox;
    }
  },
  template: template
});
