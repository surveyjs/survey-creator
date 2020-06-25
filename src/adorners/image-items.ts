import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import Sortable from "sortablejs";
import { SurveyCreator } from "../editor";
import { createAddItemElement } from "./item-editor";
import { getNextValue } from "../utils/utils";

import "./image-items.scss";
import { QuestionSelectBase } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./image-items.html");

class ImageItemInplaceEditor {
  constructor(
    private name: string,
    private question: QuestionSelectBase,
    private item,
    private rootElement,
    private editor: SurveyCreator,
    private itemsRoot
  ) { }

  deleteItem(model: ImageItemInplaceEditor, event) {
    if (model.question.choices.length > 1) {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
      this.editor.onQuestionEditorChanged(this.question);
    }
  }

  get isLastItem() {
    return this.question.choices.length === 1;
  }

  chooseImage(model, event) {
    var fileInput = this.itemsRoot.getElementsByClassName(
      "svda-choose-file"
    )[0];
    fileInput.value = "";
    fileInput.onchange = this.imageChosen;
    fileInput.click();
  }

  imageChosen = event => {
    var input = this.itemsRoot.getElementsByClassName("svda-choose-file")[0];
    if (!window["FileReader"]) return;
    if (!input || !input.files || input.files.length < 1) return;
    let files = [];
    for (let i = 0; i < input.files.length; i++) {
      files.push(input.files[i]);
    }
    this.valueChanged && this.valueChanged(files);
  };

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  valueChanged: (newVal: any) => void;
}

ko.components.register("image-item-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new ImageItemInplaceEditor(
        params.target[params.name],
        params.question,
        params.item,
        componentInfo.element,
        params.editor,
        params.itemsRoot
      );
      var property = Survey.Serializer.findProperty(
        "imageitemvalue", //params.target.getType(),
        params.name
      );
      model.valueChanged = files => {
        if (!files[0]) return;
        params.editor.uploadFiles(files, (_, link) => {
          var options = {
            propertyName: property.name,
            obj: params.item,
            value: link,
            newValue: null,
            doValidation: false
          };
          params.editor.onValueChangingCallback(options);
          link = options.newValue === null ? options.value : options.newValue;
          params.target[params.name] = link;
          params.editor.onPropertyValueChanged(property, params.target, link);
          params.editor.onQuestionEditorChanged(params.question);
        });
      };
      return model;
    }
  },
  template: templateHtml
});

export var imageItemsAdorner = {
  getMarkerClass: model => {
    return typeof model.getType === "function" &&
      model.getType() === "imagepicker"
      ? "image_item_editable"
      : "";
  },
  getElementName: model => "item",
  afterRender: (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    var itemsRoot = elements[0].parentElement;
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = e => e.preventDefault();
      var decoration = document.createElement("span");
      decoration.className = "svda-adorner-root";
      decoration.innerHTML =
        "<image-item-editor params='name: \"imageLink\", target: target, item: item, question: question, editor: editor, itemsRoot: itemsRoot'></image-item-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings(
        {
          item: model.choices[i],
          question: model,
          target: model.choices[i],
          editor: editor,
          itemsRoot: itemsRoot
        },
        decoration
      );
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(
        model,
        "image-items",
        decoration,
        model.choices[i]
      );
    }

    var sortable = Sortable.create(itemsRoot, {
      handle: ".svda-drag-handle",
      draggable: ".image_item_editable",
      animation: 150,
      onEnd: evt => {
        var choices = model.choices;
        var choice = choices[evt.oldIndex];
        choices.splice(evt.oldIndex, 1);
        choices.splice(evt.newIndex, 0, choice);
        editor.onQuestionEditorChanged(model);
      }
    });

    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.className = "svda-choose-file";
    input.style.position = "absolute";
    input.style.opacity = "0";
    itemsRoot.appendChild(input);
  }
};

registerAdorner("image-items", imageItemsAdorner);

export var addImageItemAdorner = {
  getMarkerClass: model => {
    return typeof model.getType === "function" &&
      model.getType() === "imagepicker"
      ? "sv_imagepicker_root"
      : "";
  },
  getElementName: model => "root",
  afterRender: (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    var itemsRoot = elements[0];
    var addItemElement = createAddItemElement(() => {
      var fileInput = <HTMLInputElement>(
        itemsRoot.getElementsByClassName("svda-choose-file")[0]
      );
      fileInput.value = "";
      fileInput.onchange = event => {
        if (!fileInput || !fileInput.files || fileInput.files.length < 1)
          return;
        let files = [];
        for (let i = 0; i < fileInput.files.length; i++) {
          files.push(fileInput.files[i]);
        }

        var itemText = Survey.surveyLocalization.getString("choices_Item");
        var nextValue = getNextValue(
          itemText,
          (model.choices || []).map(c => c.value)
        );
        var itemValue = new (<any>Survey)["ItemValue"](
          nextValue,
          undefined,
          "imageitemvalue"
        );
        itemValue.locOwner = <any>{
          getLocale: () => {
            if (!!model["getLocale"]) return model.getLocale();
            return "";
          },
          getMarkdownHtml: (text: string) => {
            return text;
          },
          getProcessedText: (text: string) => {
            return text;
          }
        };
        model.choices = model.choices.concat([itemValue]);
        itemValue = model.choices[model.choices.length - 1];
        editor.onQuestionEditorChanged(model);
        editor.onItemValueAddedCallback(
          model,
          "choices",
          itemValue,
          model.choices
        );

        var property = Survey.Serializer.findProperty(
          "imageitemvalue",
          "imageLink"
        );
        editor.uploadFiles(files, (_, link) => {
          var options = {
            propertyName: property.name,
            obj: itemValue,
            value: link,
            newValue: null,
            doValidation: false
          };
          editor.onValueChangingCallback(options);
          link = options.newValue === null ? options.value : options.newValue;
          itemValue["imageLink"] = link;
          editor.onPropertyValueChanged(property, itemValue, link);
          editor.onQuestionEditorChanged(model);
        });
      };
      fileInput.click();
    });
    addItemElement.style.width = (model["imageWidth"] || 200) + 10 + "px";
    addItemElement.style.height = (model["imageHeight"] || 150) + 10 + "px";
    addItemElement.style.lineHeight = addItemElement.style.height;
    itemsRoot.appendChild(addItemElement);

    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.className = "svda-choose-file";
    input.style.position = "absolute";
    input.style.opacity = "0";
    itemsRoot.appendChild(input);
  }
};

registerAdorner("add-image-item", addImageItemAdorner);
