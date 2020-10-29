import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from '../editor';

import "./boolean.scss";

var templateHtml = require("./boolean.html");

export var BooleanViewModel;

ko.components.register("svd-boolean", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return model;
    }
  },
  template: templateHtml,
});
