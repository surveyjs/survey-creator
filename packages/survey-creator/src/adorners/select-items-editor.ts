import * as ko from "knockout";
import * as Survey from "survey-knockout";
import Sortable from "sortablejs";
import { editorLocalization } from "../editorLocalization";
import { createAddItemHandler, itemAdorner } from "./item-editor";
import { selectItemsAdorner } from "./select-items";
import "./select-items-editor.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./select-items-editor.html");

ko.components.register("select-items-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var isExpanded = ko.observable(selectItemsAdorner.isExpanded);
      var choices = ko.observableArray();
      ko.computed(() => { choices(params.question.choices); });
      var otherText = ko.observable(params.question.otherText);
      var sortableElement = componentInfo.element.parentElement.getElementsByClassName(
        "svda-select-items-collection"
      )[0];
      var sortable = null;
      // var property = Survey.Serializer.findProperty(
      //   params.question.getType(),
      //   "choices"
      // );
      var raiseChangingEvent = (
        target: any,
        propertyName: string,
        newValue: any
      ) => {
        var options = {
          propertyName: propertyName,
          obj: target,
          value: newValue,
          newValue: null,
          doValidation: false
        };
        params.editor.onValueChangingCallback(options);
        newValue = options.newValue === null ? options.value : options.newValue;
        return newValue;
      };
      var raiseChangedEvent = (
        target: any,
        propertyName: string,
        newValue: any
      ) => {
        if (typeof target.getType === "function") {
          var property = Survey.Serializer.findProperty(
            target.getType(),
            propertyName
          );
          params.editor.onPropertyValueChanged(property, target, newValue);
        }
      };
      return {
        choices: choices,
        valueName: params.valueName,
        question: params.question,
        editor: params.editor,
        isExpanded: isExpanded,
        toggle: () => isExpanded(!isExpanded()),
        showOther: ko.computed(
          () =>
            params.editor.canShowObjectProperty(params.question, "hasOther") &&
            params.question.hasOther !== true
        ),
        addOther: () => {
          var newValue = !params.question.hasOther;
          newValue = raiseChangingEvent(params.question, "hasOther", newValue);
          params.question.hasOther = newValue;
          raiseChangedEvent(params.question, "hasOther", newValue);
        },
        addItem: createAddItemHandler(
          params.question,
          itemValue => {
            // var options = {
            //   propertyName: "choices",
            //   obj: params.question,
            //   value: params.question.choices,
            //   newValue: null,
            //   doValidation: false
            // };
            // params.editor.onValueChangingCallback(options);
            //choices(params.question.choices);
          },
          itemValue => {
            params.editor.onItemValueAddedCallback(
              params.question,
              "choices",
              itemValue,
              params.question.choices
            );
            // params.editor.onPropertyValueChanged(
            //   property,
            //   params.question,
            //   params.question.choices
            // );
            params.editor.onQuestionEditorChanged(params.question);
          }
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
              //choices(newChoices);
            }
          });
        },
        valueChanged: (itemValue, propertyName, newValue) => {
          var newChoices = [].concat(params.question.choices);
          choices([]);
          choices(newChoices);
          params.editor.onAdornerRenderedCallback(
            params.question,
            "select-choices",
            componentInfo.element
          );
        },
        otherText: otherText,
        otherValueChanged: (itemValue, propertyName, newValue) => {
          otherText(params.question.otherText);
        }
      };
    }
  },
  template: templateHtml
});

export var renderEditableItems = (
  elements: HTMLElement[],
  model: QuestionSelectBase,
  editor
) => {
  elements[0].onclick = e => e.preventDefault();
  var decoration = document.createElement("div");
  decoration.innerHTML =
    "<select-items-editor params='question: question, editor: editor, valueName: \"" +
    (itemAdorner.inplaceEditForValues ? "value" : "text") +
    "\"'></select-items-editor>";
  elements[0].appendChild(decoration);
  ko.applyBindings(
    {
      question: model,
      editor: editor
    },
    decoration
  );
  editor.onAdornerRenderedCallback(model, "select-choices", decoration);
};
