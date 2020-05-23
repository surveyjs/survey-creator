import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from '../editor';

import "./button.scss";

var templateHtml = require("./button.html");

export var ButtonViewModel;

ko.components.register("svd-button", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return model;
    }
  },
  template: templateHtml,
});
