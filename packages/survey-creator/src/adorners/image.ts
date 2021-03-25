import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";

import "./image.scss";
import { QuestionImageModel } from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./image.html");

class ImageInplaceEditor {
  constructor(private input, public allowDelete = false, private editor) {}

  chooseImage(model, event) {
    this.editor.chooseFiles(model.input, model.imageChosen);
  }

  deleteImage(model, event) {
    model.valueChanged && model.valueChanged(undefined);
  }

  imageChosen = (files: File[]) => {
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
      var model = new ImageInplaceEditor(
        params.input,
        params.allowDelete,
        params.editor
      );
      var property = Survey.Serializer.findProperty(
        params.target.getType(),
        params.name
      );
      var setValue = (link) => {
        var options = {
          propertyName: property.name,
          obj: params.item,
          value: link,
          newValue: null,
          doValidation: false,
        };
        params.editor.onValueChangingCallback(options);
        link = options.newValue === null ? options.value : options.newValue;
        params.target[params.name] = link;
        params.editor.onPropertyValueChanged(property, params.target, link);
        params.editor.onQuestionEditorChanged(params.question);
      };
      model.valueChanged = (files) => {
        if (files === undefined) {
          setValue(undefined);
          return;
        }
        if (!files[0]) return;
        params.editor.uploadFiles(files, (_, link) => setValue(link));
      };
      return model;
    },
  },
  template: templateHtml,
});

export var imageAdorner = {
  getMarkerClass: (model) => {
    return typeof model.getType === "function" && model.getType() === "image"
      ? "image_editable"
      : "";
  },
  getElementName: (model) => "root",
  afterRender: (elements: HTMLElement[], model: QuestionImageModel, editor) => {
    var itemsRoot = elements[0];
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = (e) => e.preventDefault();
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
      input.style.width = "1px";
      input.style.height = "1px";
      input.style.overflow = "hidden";
      itemsRoot.parentElement.appendChild(input);

      ko.applyBindings(
        {
          question: model,
          target: model,
          editor: editor,
          input: input,
        },
        decoration
      );
      editor.onAdornerRenderedCallback(model, "image", decoration, model);
    }
  },
};

registerAdorner("image", imageAdorner);
