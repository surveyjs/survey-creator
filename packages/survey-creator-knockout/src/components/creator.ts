import * as ko from "knockout";
import { SurveyCreator } from "../creator";

//import "./creator.scss";
const template = require("./creator.html");
// import template from "./creator.html";

export var CreatorViewModel;

ko.components.register("survey-creator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return { creator: params.creator };
    },
  },
  template: template,
});
