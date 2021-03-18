import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import { TitleInplaceEditor } from "./title-editor";
import { SurveyCreator } from "../editor";
import { getNextValue, findParentNode } from "../utils/utils";

import "./rating-item-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./rating-item-editor.html");

class RatingItemEditor extends TitleInplaceEditor {
  constructor(
    target: any,
    name: string,
    private question: Survey.QuestionRating,
    private item,
    rootElement,
    editor: SurveyCreator
  ) {
    super(target, name, rootElement, null, editor);
  }

  deleteItem(model: RatingItemEditor, event) {
    var property = Survey.Serializer.findProperty(
      model.question.getType(),
      "rateValues"
    );
    var allowDelete = this.editor.onCollectionItemDeletingCallback(
      model.question,
      property,
      model.question.rateValues,
      model.item
    );
    if (allowDelete) {
      var question = model.question;
      var index = question.visibleRateValues
        .map(item => item.value)
        .indexOf(model.item.value);

      if (
        question.rateValues.length === 0 &&
        index === question.visibleRateValues.length - 1
      ) {
        question.rateMax -= question.rateStep;
      } else {
        if (question.rateValues.length === 0) {
          question.rateValues = question.visibleRateValues;
        }
        question.rateValues.splice(index, 1);
      }
      model.editor.onQuestionEditorChanged(question);
    }
  }

  get isLastItem() {
    return this.question.visibleRateValues.length === 1;
  }
}

ko.components.register("rating-item-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new RatingItemEditor(
        params.target,
        params.name,
        params.question,
        params.item,
        componentInfo.element,
        params.editor
      );
      var question: Survey.QuestionRating = params.question;

      var property = Survey.Serializer.findProperty(
        params.target.getType(),
        params.name
      );
      model.valueChanged = (newValue) => {
        if (question.rateValues.length === 0) {
          question.rateValues = question.visibleRateValues;
          var index = question.rateValues
            .map((item) => item.value)
            .indexOf(params.item.value);
          question.rateValues[index] = params.target;
        }
        params.target[params.name] = newValue;
        params.editor.onQuestionEditorChanged(question);
        return "";
      };
      return model;
    },
  },
  template: templateHtml,
});

var createAddItemHandler = (
  question: Survey.QuestionRating,
  onItemAdded: (itemValue: Survey.ItemValue) => void,
  onItemAdding: (itemValue: Survey.ItemValue) => void = null
) => () => {
  if (question.rateValues.length === 0) {
    question.rateMax += question.rateStep;
  } else {
    var nextValue = null;
    var values = question.rateValues.map(function(item) {
      return item.itemValue;
    });
    var itemText = Survey.surveyLocalization.getString("choices_Item");
    nextValue = getNextValue(itemText, values);

    var itemValue = new Survey.ItemValue(nextValue);
    !!onItemAdding && onItemAdding(itemValue);
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
      },
    };
    question.rateValues = question.rateValues.concat([itemValue]);
  }
  !!onItemAdded && onItemAdded(itemValue);
};

export var ratingItemAdorner = {
  getMarkerClass: (model) => {
    return !!model.parent && !!model.visibleRateValues ? "item_editable" : "";
  },
  getElementName: (model) => "itemText",
  afterRender: (
    elements: HTMLElement[],
    model: Survey.QuestionRating,
    editor
  ) => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = (e) => e.preventDefault();
      var decoration = document.createElement("span");
      decoration.innerHTML =
        "<rating-item-editor params='name: \"text\", target: target, item: item, question: question, editor: editor'></rating-item-editor>";
      elements[i].appendChild(decoration);
      var item = model.visibleRateValues[i];
      ko.applyBindings(
        {
          item: item,
          question: model,
          target: item,
          editor: editor,
        },
        decoration
      );
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(model, "rating-item", decoration, item);
    }

    var addNew = document.createElement("span");
    addNew.title = editorLocalization.getString("pe.addItem");
    addNew.className =
      "svda-add-new-rating-item icon-inplace-add-item svd-primary-icon";
    addNew.onclick = createAddItemHandler(
      model,
      (itemValue) => {
        editor.onQuestionEditorChanged(model);
        editor.onItemValueAddedCallback(
          model,
          "rateValues",
          itemValue,
          model.visibleRateValues
        );
      },
      (itemValue) => {
        editor.onItemValueAddedCallback(
          model,
          "rateValues",
          itemValue,
          model.visibleRateValues
        );
      }
    );
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

    var parent = elements[0].parentElement.parentElement;
    parent.appendChild(addNew);
  },
};

registerAdorner("rating-item", ratingItemAdorner);
