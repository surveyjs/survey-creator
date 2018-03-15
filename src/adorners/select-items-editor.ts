import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import { createAddItemHandler } from "./item-editor";

import "./select-items-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./select-items-editor.html");

ko.components.register("select-items-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var isExpanded = ko.observable(false);
      var choices = ko.observableArray(params.question.choices);
      return {
        choices: choices,
        question: params.question,
        editor: params.editor,
        isExpanded: isExpanded,
        toggle: () => isExpanded(!isExpanded()),
        addItem: createAddItemHandler(params.question, itemValue =>
          choices(params.question.choices)
        )
      };
    }
  },
  template: templateHtml
});

export var selectItemsEditorAdorner = {
  getMarkerClass: model => {
    return !!model.choices ? "select_items_editor" : "";
  },
  afterRender: (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    elements[0].onclick = e => e.preventDefault();
    var decoration = document.createElement("div");
    decoration.innerHTML =
      "<select-items-editor params='question: question, editor: editor'></select-items-editor>";
    elements[0].appendChild(decoration);
    ko.applyBindings(
      {
        question: model,
        editor: editor
      },
      decoration
    );
  }
};

registerAdorner("selectWrapper", selectItemsEditorAdorner);
