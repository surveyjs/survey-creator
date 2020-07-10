import * as ko from "knockout";
import { registerAdorner, SurveyForDesigner } from "../surveyjsObjects";
import { SurveyCreator } from "../editor";
import { Survey } from "survey-knockout";

export var titleImageAdorner = {
  getMarkerClass: (model) => {
    return typeof model.getType === "function" && model.getType() === "survey"
      ? "image_editable"
      : "";
  },
  getElementName: (model) => "logo",
  afterRender: (
    elements: HTMLElement[],
    model: SurveyForDesigner,
    editor: SurveyCreator
  ) => {
    if (editor.readOnly) {
      return;
    }
    var allowImageChooser = editor.canShowObjectProperty(model, "logo");
    if (allowImageChooser) {
      var itemsRoot = elements[0];
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
      for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = (e) => e.preventDefault();
        var decoration = document.createElement("span");
        decoration.className = "svda-adorner-root";
        decoration.innerHTML =
          "<image-editor params='name: \"logo\", target: target, question: question, editor: editor, input: input, allowDelete: true'></image-editor>";
        elements[i].appendChild(decoration);

        ko.applyBindings(
          {
            question: model,
            target: model,
            editor: editor,
            input: input,
          },
          decoration
        );
        ko.tasks.runEarly();
        editor.onAdornerRenderedCallback(
          <any>model,
          "title-image",
          decoration,
          model
        );
      }
      ko.computed(() => {
        if (elements.length !== 2) return;
        var position = model.logoPosition;
        elements[0].style.display = "none";
        elements[1].style.display = "none";
        if (!model.isLogoImageChoosen || position === "none") return;
        if (position === "left" || position === "top") {
          elements[0].style.display = "";
        } else {
          elements[1].style.display = "";
        }
      });
    } else {
      elements[0].style.display = "none";
      elements[1].style.display = "none";
    }

    var decoration = document.createElement("span");
    decoration.className = "svda-title-actions";
    decoration.innerHTML =
      "<title-actions params='survey: model, input: input, allowImageChooser: allowImageChooser'></title-actions>";
    elements[0].parentElement.appendChild(decoration);
    ko.applyBindings(
      { model: model, input: input, allowImageChooser: allowImageChooser },
      decoration
    );
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(
      <any>model,
      "title-actions",
      decoration,
      model
    );
  },
};

registerAdorner("title-image", titleImageAdorner);
