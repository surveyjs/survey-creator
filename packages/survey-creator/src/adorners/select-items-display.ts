import * as ko from "knockout";
import { editorLocalization } from "../editorLocalization";
import "./select-items-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
import  { selectItemsAdorner } from "./select-items";

var templateHtml = require("html-loader?interpolate!val-loader!./select-items-display.html");

ko.components.register("select-items-display", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var isExpanded = ko.observable(selectItemsAdorner.isExpanded);
      var choices = ko.observableArray(params.question.choices);
      var otherText = ko.observable(params.question.otherText);
      return {
        choices: choices,
        question: params.question,
        editor: params.editor,
        isExpanded: isExpanded,
        toggle: () => isExpanded(!isExpanded()),
        getLocString: str => editorLocalization.getString(str),
        otherText: otherText
      };
    }
  },
  template: templateHtml
});

export var renderDisplayMode = (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    elements[0].onclick = e => e.preventDefault();
    var decoration = document.createElement("div");
    decoration.innerHTML =
      "<select-items-display params='question: question, editor: editor'></select-items-display>";
    elements[0].appendChild(decoration);
    ko.applyBindings(
      {
        question: model,
        editor: editor
      },
      decoration
    );
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "select-choices", decoration);
  }

