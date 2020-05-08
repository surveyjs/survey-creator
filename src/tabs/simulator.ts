import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from '../editor';

import "./simulator.scss";

var templateHtml = require("./simulator.html");

export var SurveySimulatorComponent;

ko.components.register("survey-simulator", {
    viewModel: {
      createViewModel: (params, componentInfo) => {
        var model = params.model;
        return model;
      }
    },
    template: templateHtml,
  });
  