import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import Sortable from "sortablejs";
import { TitleInplaceEditor } from "./title-editor";
import { SurveyCreator } from "../editor";
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
    private editor: SurveyCreator
  ) {
    super(name, rootElement);
  }

  deleteItem(model: ItemInplaceEditor, event) {
    if (this.question.otherItem === this.item) {
      this.question.hasOther = false;
    } else if (this.question["selectAllItem"] === this.item) {
      this.question["hasSelectAll"] = false;
    } else if (this.question["noneItem"] === this.item) {
      this.question["hasNone"] = false;
    } else {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    }
    this.editor.onQuestionEditorChanged(this.question);
  }

  get isDraggable() {
    return (
      this.question.otherItem !== this.item &&
      this.question["selectAllItem"] !== this.item &&
      this.question["noneItem"] !== this.item
    );
  }

  get isLastItem() {
    return this.question.choices.length === 1;
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
      var property = Survey.Serializer.findProperty(
        params.target.getType(),
        params.name
      );
      model.valueChanged = newValue => {
        var options = {
          propertyName: property.name,
          obj: params.model,
          value: newValue,
          newValue: null,
          doValidation: false
        };
        params.editor.onValueChangingCallback(options);
        newValue = options.newValue === null ? options.value : options.newValue;
        if (!newValue && params.name == "value") {
          newValue = params.item.value;
        }
        params.target[params.name] = newValue;
        params.editor.onPropertyValueChanged(property, params.target, newValue);
        !!params.valueChanged &&
          params.valueChanged(params.target, property.name, newValue);
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
      var itemValue = ko.dataFor(elements[i]);
      var propertyName = itemAdorner.inplaceEditForValues ? "value" : "text";
      var target = itemValue;
      if (itemValue === model["selectAllItem"]) {
        target = model;
        propertyName = "selectAllText";
      }
      if (itemValue === model["noneItemValue"]) {
        target = model;
        propertyName = "noneText";
      }
      if (itemValue === model["otherItemValue"]) {
        target = model;
        propertyName = "otherText";
      }
      decoration.innerHTML =
        "<item-editor params='name: \"" +
        propertyName +
        "\", target: target, item: item, question: question, editor: editor'></item-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings(
        {
          item: itemValue,
          question: model,
          target: target,
          editor: editor
        },
        decoration
      );
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(
        model,
        "choices-label",
        decoration,
        itemValue
      );
    }
  }
};

registerAdorner("choices-label", itemAdorner);

export var createAddItemHandler = (
  question: Survey.QuestionSelectBase,
  onItemAdded: (itemValue: Survey.ItemValue) => void,
  onItemAdding: (itemValue: Survey.ItemValue) => void = null
) => () => {
  var nextValue = null;
  var values = question.choices.map(function (item) {
    return item.itemValue;
  });
  var itemText = Survey.surveyLocalization.getString("choices_Item");
  nextValue = getNextValue(itemText, values);

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
  !!onItemAdding && onItemAdding(itemValue);
  question.choices = question.choices.concat([itemValue]);
  itemValue = question.choices.filter(
    choiceItem => choiceItem.value === itemValue.value
  )[0];
  !!onItemAdded && onItemAdded(itemValue);
};

export var createAddItemElement = handler => {
  var addNew = document.createElement("div");
  addNew.title = editorLocalization.getString("pe.addItem");
  addNew.className = "svda-add-new-item svd-primary-icon svda-add-custom-item";
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
  // var title = document.createElement("span");
  // title.innerHTML = addNew.title;
  // addNew.appendChild(title);
  return addNew;
};

export var createCustomElement = (title, handler) => {
  var addNew = document.createElement("div");
  addNew.title = title;
  addNew.className = "svda-add-new-item svda-add-custom-item";
  addNew.onclick = handler;
  var titleEl = document.createElement("span");
  titleEl.innerHTML = addNew.title;
  addNew.appendChild(titleEl);
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
    editor: SurveyCreator
  ) => {
    var itemsRoot = elements[0].parentElement;
    for (var i = 0; i < elements.length; i++) {
      var itemValue = ko.dataFor(elements[i]);
      if (
        itemValue === model["selectAllItemValue"] ||
        itemValue === model["noneItemValue"] ||
        itemValue === model["otherItemValue"]
      ) {
        elements[i].classList.remove("item_draggable");
      }
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
      createAddItemHandler(
        model,
        itemValue => {
          editor.onQuestionEditorChanged(model);
        },
        itemValue => {
          editor.onItemValueAddedCallback(
            model,
            "choices",
            itemValue,
            model.choices
          );
        }
      )
    );
    itemsRoot.appendChild(addNew);
    if (editor.canShowObjectProperty(model, "hasOther")) {
      itemsRoot.appendChild(
        createCustomElement(
          editorLocalization.getString("pe.addOther"),
          () => (model.hasOther = !model.hasOther)
        )
      );
    }
    if (model.hasSelectAll !== undefined && editor.canShowObjectProperty(model, "hasSelectAll")) {
      itemsRoot.appendChild(
        createCustomElement(
          editorLocalization.getString("pe.addSelectAll"),
          () => (model.hasSelectAll = !model.hasSelectAll)
        )
      );
    }
    if (model.hasNone !== undefined && editor.canShowObjectProperty(model, "hasNone")) {
      itemsRoot.appendChild(
        createCustomElement(
          editorLocalization.getString("pe.addNone"),
          () => (model.hasNone = !model.hasNone)
        )
      );
    }
  }
};

registerAdorner("choices-draggable", itemDraggableAdorner);
