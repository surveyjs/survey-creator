import * as ko from "knockout";
import {
  registerAdorner,
  SurveyForDesigner,
  ISurveyObjectMenuItem
} from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import "./question-actions.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./question-actions.html");
import { QuestionConverter } from "../questionconverter";

export class QuestionActionsAdorner {
  constructor(public question, private editor) {
    var surveyForDesigner: SurveyForDesigner = editor.survey;
    this.actions(surveyForDesigner.getMenuItems(question));
  }

  public actions = ko.observableArray<ISurveyObjectMenuItem>();

  public getStyle(model: ISurveyObjectMenuItem) {
    if (!!model.icon) {
      return ko.unwrap(<any>model.icon);
    }
    return "icon-action" + model.name;
  }

  public localize(entryString) {
    return editorLocalization.getString(entryString);
  }
}

ko.components.register("question-actions", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new QuestionActionsAdorner(params.question, params.editor);
      return model;
    }
  },
  template: templateHtml
});

export var questionActionsAdorner = {
  getMarkerClass: model => {
    return !model.isPanel ? "question_actions" : "";
  },
  getElementName: model => "mainRoot",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var decoration = document.createElement("div");
    decoration.className = "svda-question-actions";
    decoration.innerHTML =
      "<question-actions params='question: model, editor: editor'></question-actions>";
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
  }
};

registerAdorner("question-actions", questionActionsAdorner);

export var panelActionsAdorner = {
  getMarkerClass: model => {
    return !!model.isPanel ? "panel_actions" : "";
  },
  getElementName: model => "container",
  afterRender: questionActionsAdorner.afterRender
};

registerAdorner("panel-actions", panelActionsAdorner);
