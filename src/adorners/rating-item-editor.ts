import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import { TitleInplaceEditor } from "./title-editor";
import { SurveyEditor } from "../editor";

import "./rating-item-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./rating-item-editor.html");

class RatingItemEditor extends TitleInplaceEditor {
  constructor(
    name: string,
    private question: Survey.QuestionRating,
    private item,
    rootElement,
    private editor: SurveyEditor
  ) {
    super(name, rootElement);
  }

  deleteItem(model: RatingItemEditor, event) {
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

ko.components.register("rating-item-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new RatingItemEditor(
        params.target[params.name],
        params.question,
        params.item,
        componentInfo.element,
        params.editor
      );
      var question: Survey.QuestionRating = params.question;

      var property = Survey.JsonObject.metaData.findProperty(
        params.target.getType(),
        params.name
      );
      model.valueChanged = newValue => {
        if (question.rateValues.length === 0) {
          question.rateValues = question.visibleRateValues;
          var index = question.rateValues
            .map(item => item.value)
            .indexOf(params.item.value);
          question.rateValues[index] = params.target;
        }
        params.target[params.name] = newValue;
        params.editor.onQuestionEditorChanged(question);
      };
      return model;
    }
  },
  template: templateHtml
});

export var ratingItemAdorner = {
  getMarkerClass: model => {
    return !!model.visibleRateValues ? "item_editable" : "";
  },
  afterRender: (
    elements: HTMLElement[],
    model: Survey.QuestionRating,
    editor
  ) => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = e => e.preventDefault();
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
          editor: editor
        },
        decoration
      );
    }
  }
};

registerAdorner("itemText", ratingItemAdorner);

// export var createAddItemHandler = (
//   question: Survey.QuestionSelectBase,
//   onItemAdded: (itemValue: Survey.ItemValue) => void
// ) => () => {
//   var nextValue = null;
//   var values = question.choices.map(function(item) {
//     return item.itemValue;
//   });
//   nextValue = getNextValue("item", values);

//   var itemValue = new Survey.ItemValue(nextValue);
//   itemValue.locOwner = {
//     getLocale: () => {
//       if (!!question["getLocale"]) return question.getLocale();
//       return "";
//     },
//     getMarkdownHtml: (text: string) => {
//       return text;
//     }
//   };
//   question.choices = question.choices.concat([itemValue]);
//   !!onItemAdded && onItemAdded(itemValue);
// };

// export var itemDraggableAdorner = {
//   getMarkerClass: model => {
//     return !!model.choices ? "item_draggable" : "";
//   },
//   afterRender: (
//     elements: HTMLElement[],
//     model: QuestionSelectBase,
//     editor: SurveyEditor
//   ) => {
//     var itemsRoot = elements[0].parentElement;
//     if (model.hasOther) {
//       elements[elements.length - 1].classList.remove("item_draggable");
//     }
//     var sortable = Sortable.create(itemsRoot, {
//       handle: ".svda-drag-handle",
//       draggable: ".item_draggable",
//       animation: 150,
//       onEnd: evt => {
//         var choices = model.choices;
//         var choice = choices[evt.oldIndex];
//         choices.splice(evt.oldIndex, 1);
//         choices.splice(evt.newIndex, 0, choice);
//         editor.onQuestionEditorChanged(model);
//       }
//     });
//     var addNew = document.createElement("div");
//     addNew.title = editorLocalization.getString("pe.addItem");
//     addNew.className = "svda-add-new-item icon-inplace-add-item";
//     addNew.onclick = createAddItemHandler(model, itemValue =>
//       editor.onQuestionEditorChanged(model)
//     );
//     itemsRoot.appendChild(addNew);
//   }
// };

// registerAdorner("item", itemDraggableAdorner);
