import * as ko from "knockout";
import {
  registerAdorner,
  SurveyForDesigner
} from "../surveyjsObjects";
import "./flowpanel-actions.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./flowpanel-actions.html");
import { QuestionActionsAdorner } from "./question-actions";
//import { Survey } from 'survey-knockout';

export class FlowPanelActionsAdorner extends QuestionActionsAdorner {
  constructor(question, editor, private adornerElement: HTMLElement) {
    super(question, editor);
    var self = this;
    var surveyForDesgner: SurveyForDesigner = editor.survey;
    var fPanel = self.adornerElement.parentElement.parentElement.getElementsByTagName(
      "f-panel"
    )[0];
    var createWrappingFunction = tag => () => {
      var selection = document.getSelection();
      if (!!selection && selection.rangeCount > 0) {
        var selectedText = selection.toString();
        if (!!selectedText) {
          question.content = question.content.replace(
            selectedText,
            "<" + tag + ">" + selectedText + "</" + tag + ">"
          );
          // var range = selection.getRangeAt(0);
          // range.deleteContents();
          // range.insertNode(
          //   document.createTextNode(
          //     "<" + tag + ">" + selectedText + "</" + tag + ">"
          //   )
          // );
        }
      }
    };
    this.actions.splice(0, 0, {
      name: "bold",
      text: this.localize("ed.bold") || "B",
      onClick: createWrappingFunction("b")
    });
    this.actions.splice(1, 0, {
      name: "italic",
      text: this.localize("ed.italic") || "I",
      onClick: createWrappingFunction("i")
    });
    this.actions.splice(2, 0, {
      name: "underline",
      text: this.localize("ed.underline") || "U",
      onClick: createWrappingFunction("u")
    });
    this.actions.splice(3, 0, <any>{
      name: "fpAddQuestion",
      text: this.localize("ed.fpAddQuestion"),
      title: this.localize("ed.fpAddQuestion"),
      hasTitle: true,
      template: "fp-add-question",
      availableTypes: ["text", "boolean", "radiogroup", "checkbox"],
      onAddQuestion: <any>((data, event) => {
        var questionType = event.target.value;
        if (!!questionType) {
          var newElelentName = editor.getNewName(questionType);
          question.addNewQuestion(questionType, newElelentName);
          // question.content += "{" + newElelentName + "}";
          // var selection = document.getSelection();
          // if (!!selection) {
          //   var range = new Range();
          //   selection.addRange(range);
          //   range.insertNode(
          //     document.createTextNode("{" + newElelentName + "}")
          //   );
          // }
          event.target.value = "";
        }
      })
    });
    this.actions.splice(4, 0, <any>{ template: "action-separator" });
  }
}

ko.components.register("flowpanel-actions", {
  viewModel: {
    createViewModel: (params, componentInfo) =>
      new FlowPanelActionsAdorner(params.question, params.editor, <HTMLElement>(
        componentInfo.element
      ))
  },
  template: templateHtml
});

export var flowpanelActionsAdorner = {
  getMarkerClass: model => {
    return model.getType() === "flowpanel" ? "panel_actions" : "";
  },
  getElementName: model => "container",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var decoration = document.createElement("div");
    decoration.className = "svda-question-actions";
    decoration.innerHTML =
      "<flowpanel-actions params='question: model, editor: editor'></question-flowpanel>";
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "flowpanel-actions", decoration);
  }
};

registerAdorner("flowpanel-actions", flowpanelActionsAdorner);
