import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from '../editor';

import "./dropdown.scss";

var templateHtml = require("./dropdown.html");

export var DropdownViewModel;

ko.components.register("svd-dropdown", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.item;
      return model;
    }
  },
  template: templateHtml,
});
