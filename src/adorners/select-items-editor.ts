import * as ko from "knockout";
import * as Survey from "survey-knockout";
import Sortable from "sortablejs";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import { createAddItemHandler } from "./item-editor";

import "./select-items-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./select-items-editor.html");

ko.components.register("select-items-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var isExpanded = ko.observable(true);
      var choices = ko.observableArray(params.question.choices);
      var sortableElement = componentInfo.element.parentElement.getElementsByClassName(
        "svda-select-items-collection"
      )[0];
      var sortable = null;
      return {
        choices: choices,
        question: params.question,
        editor: params.editor,
        isExpanded: isExpanded,
        toggle: () => isExpanded(!isExpanded()),
        addItem: createAddItemHandler(params.question, itemValue =>
          choices(params.question.choices)
        ),
        getLocString: str => editorLocalization.getString(str),
        choicesRendered: () => {
          if (sortable) {
            sortable.destroy();
          }
          sortable = Sortable.create(sortableElement, {
            handle: ".svda-drag-handle",
            draggable: ".item_draggable",
            animation: 150,
            onEnd: evt => {
              var newChoices = [].concat(params.question.choices);
              var choice = newChoices[evt.oldIndex];
              newChoices.splice(evt.oldIndex, 1);
              newChoices.splice(evt.newIndex, 0, choice);
              params.question.choices = newChoices;
              choices(newChoices);
            }
          });
        }
      };
    }
  },
  template: templateHtml
});

export var selectItemsEditorAdorner = {
  getMarkerClass: model => {
    return !!model.parent && !!model.choices ? "select_items_editor" : "";
  },
  getElementName: model => "selectWrapper",
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

registerAdorner("select-choices", selectItemsEditorAdorner);
