import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import { SurveyCreator } from "../editor";

import "./image.scss";
import { QuestionImageModel } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./image.html");

class ImageInplaceEditor {
  constructor(private input) {}

  chooseImage(model, event) {
    model.input.value = "";
    model.input.onchange = model.imageChoosen;
    model.input.click();
  }

  imageChoosen = event => {
    if (!window["FileReader"]) return;
    if (!this.input || !this.input.files || this.input.files.length < 1) return;
    let files = [];
    for (let i = 0; i < this.input.files.length; i++) {
      files.push(this.input.files[i]);
    }
    this.valueChanged && this.valueChanged(files);
  };

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  valueChanged: (newVal: any) => void;
}

ko.components.register("image-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new ImageInplaceEditor(params.input);
      var property = Survey.Serializer.findProperty(
        "image", //params.target.getType(),
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

export var imageAdorner = {
  getMarkerClass: model => {
    return typeof model.getType === "function" && model.getType() === "image"
      ? "image_editable"
      : "";
  },
  getElementName: model => "root",
  afterRender: (elements: HTMLElement[], model: QuestionImageModel, editor) => {
    var itemsRoot = elements[0];
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = e => e.preventDefault();
      var decoration = document.createElement("span");
      decoration.className = "svda-adorner-root";
      decoration.innerHTML =
        "<image-editor params='name: \"imageLink\", target: target, question: question, editor: editor, input: input'></image-editor>";
      elements[i].appendChild(decoration);

      var input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.className = "svda-choose-file";
      input.style.position = "absolute";
      input.style.opacity = "0";
      itemsRoot.parentElement.appendChild(input);

      ko.applyBindings(
        {
          question: model,
          target: model,
          editor: editor,
          input: input
        },
        decoration
      );
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(model, "image", decoration, model);
    }
  }
};

registerAdorner("image", imageAdorner);
