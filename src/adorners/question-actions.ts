import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import "./question-actions.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./question-actions.html");

export class QuestionActionsAdorner {
  constructor(private question) {}
  get type() {
    return editorLocalization.getString("qt." + this.question.getType());
  }
}

ko.components.register("question-actions", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new QuestionActionsAdorner(params.question);
      return model;
    }
  },
  template: templateHtml
});

export var questionActionsAdorner = {
  getMarkerClass: model => {
    return "question_actions";
  },
  afterRender: (elements: HTMLElement[], model) => {
    var decoration = document.createElement("div");
    decoration.className = "svda-question-actions";
    decoration.innerHTML =
      "<question-actions params='question: $data'></question-actions>";
    elements[0].appendChild(decoration);
    ko.applyBindings(model, decoration);
  }
};

//registerAdorner("mainRoot", questionActionsAdorner);
