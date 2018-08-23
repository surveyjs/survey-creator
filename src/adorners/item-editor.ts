import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import Sortable from "sortablejs";
import { TitleInplaceEditor } from "./title-editor";
import { SurveyEditor } from "../editor";
import { getNextValue, findParentNode } from "../utils/utils";

import "./item-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./item-editor.html");

class ItemInplaceEditor extends TitleInplaceEditor {
  constructor(
    name: string,
    private question: QuestionSelectBase,
    private item,
    rootElement,
    private editor: SurveyEditor
  ) {
    super(name, rootElement);
  }

  deleteItem(model: ItemInplaceEditor, event) {
    if (this.notOther) {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    } else {
      this.question.hasOther = false;
    }

    this.editor.onQuestionEditorChanged(this.question);
  }

  get notOther() {
    return this.question.otherItem !== this.item;
  }
}

ko.components.register("item-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new ItemInplaceEditor(
        params.target[params.name],
        params.question,
        params.item,
        componentInfo.element,
        params.editor
      );
      var property = Survey.JsonObject.metaData.findProperty(
        params.target.getType(),
        params.name
      );
      model.valueChanged = newValue => {
        params.target[params.name] = newValue;
        params.editor.onPropertyValueChanged(property, params.target, newValue);
      };
      return model;
    }
  },
  template: templateHtml
});

export var itemAdorner = {
  inplaceEditForValues: false,
  getMarkerClass: model => {
    return !!model.parent &&
      !!model.choices &&
      typeof model.getType === "function" &&
      model.getType() !== "imagepicker"
      ? "item_editable"
      : "";
  },
  getElementName: model => "controlLabel",
  afterRender: (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = e => e.preventDefault();
      var decoration = document.createElement("span");
      decoration.className = "svda-adorner-root";
      if (i === elements.length - 1 && model.hasOther) {
        decoration.innerHTML =
          "<item-editor params='name: \"otherText\", target: target, item: item, question: question, editor: editor'></item-editor>";
        elements[i].appendChild(decoration);
        ko.applyBindings(
          {
            item: model.otherItem,
            question: model,
            target: model,
            editor: editor
          },
          decoration
        );
      } else {
        decoration.innerHTML =
          "<item-editor params='name: \"" +
          (itemAdorner.inplaceEditForValues ? "value" : "text") +
          "\", target: target, item: item, question: question, editor: editor'></item-editor>";
        elements[i].appendChild(decoration);
        ko.applyBindings(
          {
            item: model.choices[i],
            question: model,
            target: model.choices[i],
            editor: editor
          },
          decoration
        );
      }
    }
  }
};

registerAdorner("choices-label", itemAdorner);

export var createAddItemHandler = (
  question: Survey.QuestionSelectBase,
  onItemAdded: (itemValue: Survey.ItemValue) => void
) => () => {
  var nextValue = null;
  var values = question.choices.map(function(item) {
    return item.itemValue;
  });
  nextValue = getNextValue("item", values);

  var itemValue = new Survey.ItemValue(nextValue);
  itemValue.locOwner = <any>{
    getLocale: () => {
      if (!!question["getLocale"]) return question.getLocale();
      return "";
    },
    getMarkdownHtml: (text: string) => {
      return text;
    },
    getProcessedText: (text: string) => {
      return text;
    }
  };
  question.choices = question.choices.concat([itemValue]);
  itemValue = question.choices.filter(
    choiceItem => choiceItem.value === itemValue.value
  )[0];
  !!onItemAdded && onItemAdded(itemValue);
};

export var createAddItemElement = handler => {
  var addNew = document.createElement("div");
  addNew.title = editorLocalization.getString("pe.addItem");
  addNew.className = "svda-add-new-item svd-primary-icon";
  addNew.onclick = handler;

  var svgElem: any = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElem.setAttribute("class", "svd-svg-icon");
  svgElem.style.width = "12px";
  svgElem.style.height = "12px";
  var useElem: any = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  useElem.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "#icon-inplaceplus"
  );
  svgElem.appendChild(useElem);
  addNew.appendChild(svgElem);
  return addNew;
};

export var itemDraggableAdorner = {
  getMarkerClass: model => {
    return !!model.parent &&
      !!model.choices &&
      typeof model.getType === "function" &&
      model.getType() !== "imagepicker"
      ? "item_draggable"
      : "";
  },
  getElementName: model => "item",
  afterRender: (
    elements: HTMLElement[],
    model: QuestionSelectBase,
    editor: SurveyEditor
  ) => {
    var itemsRoot = elements[0].parentElement;
    if (model.hasOther) {
      elements[elements.length - 1].classList.remove("item_draggable");
    }
    var sortable = Sortable.create(itemsRoot, {
      handle: ".svda-drag-handle",
      draggable: ".item_draggable",
      animation: 150,
      onEnd: evt => {
        var choices = model.choices;
        var choice = choices[evt.oldIndex];
        choices.splice(evt.oldIndex, 1);
        choices.splice(evt.newIndex, 0, choice);
        editor.onQuestionEditorChanged(model);
      }
    });

    var addNew = createAddItemElement(
      createAddItemHandler(model, itemValue => {
        editor.onQuestionEditorChanged(model);
        editor.onItemValueAddedCallback("choices", itemValue);
      })
    );
    itemsRoot.appendChild(addNew);
  }
};

registerAdorner("choices-draggable", itemDraggableAdorner);
