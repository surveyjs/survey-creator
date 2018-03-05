import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import Sortable from "sortablejs";
import { TitleInplaceEditor } from "./title-editor";

import "./item-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./item-editor.html");

class ItemInplaceEditor extends TitleInplaceEditor {
  constructor(
    name: string,
    private question: QuestionSelectBase,
    private item,
    rootElement
  ) {
    super(name, rootElement);
  }

  deleteItem(model: ItemInplaceEditor, event) {
    var index = model.question.choices.indexOf(model.item);
    model.question.choices.splice(index, 1);
    var item = this.rootElement;
    while (
      (item = item.parentElement) &&
      !item.classList.contains("item_draggable")
    );
    item.parentElement.removeChild(item);
  }
}

ko.components.register("item-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new ItemInplaceEditor(
        params.model[params.name],
        params.question,
        params.model,
        componentInfo.element
      );
      model.valueChanged = newValue => (params.model[params.name] = newValue);
      return model;
    }
  },
  template: templateHtml
});

export var itemAdorner = {
  getMarkerClass: model => {
    return !!model.choices ? "item_editable" : "";
  },
  afterRender: (elements: HTMLElement[], model) => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = e => e.preventDefault();
      var decoration = document.createElement("span");
      decoration.innerHTML =
        "<item-editor params='name: \"text\", model: item, question: question'></item-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings({ item: model.choices[i], question: model }, decoration);
    }
  }
};

registerAdorner("controlLabel", itemAdorner);

export var itemDraggableAdorner = {
  getMarkerClass: model => {
    return !!model.choices ? "item_draggable" : "";
  },
  afterRender: (elements: HTMLElement[], model) => {
    var sortable = Sortable.create(elements[0].parentElement, {
      handle: ".svda-drag-handle",
      animation: 150,
      onEnd: evt => {
        var choices = model.choices;
        var choice = choices[evt.oldIndex];
        choices.splice(evt.oldIndex, 1);
        choices.splice(evt.newIndex, 0, choice);
      }
    });
  }
};

registerAdorner("item", itemDraggableAdorner);
