import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import Sortable from "sortablejs";
import { TitleInplaceEditor } from "./title-editor";
import { SurveyEditor } from "../editor";
import { getNextValue } from "../utils/getNextValue";

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
  afterRender: (
    elements: HTMLElement[],
    model: QuestionSelectBase,
    editor: SurveyEditor
  ) => {
    var itemsRoot = elements[0].parentElement;
    var sortable = Sortable.create(itemsRoot, {
      handle: ".svda-drag-handle",
      animation: 150,
      onEnd: evt => {
        var choices = model.choices;
        var choice = choices[evt.oldIndex];
        choices.splice(evt.oldIndex, 1);
        choices.splice(evt.newIndex, 0, choice);
      }
    });
    var addNew = document.createElement("div");
    addNew.innerText = editorLocalization.getString("pe.addNew");
    addNew.className = "svda-add-new-item btn btn-primary";
    addNew.onclick = () => {
      var nextValue = null;
      var values = model.choices.map(function(item) {
        return item.itemValue;
      });
      nextValue = getNextValue("item", values);

      var itemValue = new Survey.ItemValue(nextValue);
      itemValue.locOwner = {
        getLocale: () => {
          if (!!model["getLocale"]) return model.getLocale();
          return "";
        },
        getMarkdownHtml: (text: string) => {
          return text;
        }
      };
      model.choices.push(itemValue);
      editor.onQuestionEditorChanged(model);
    };
    itemsRoot.appendChild(addNew);
  }
};

registerAdorner("item", itemDraggableAdorner);
