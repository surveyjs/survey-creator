import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";

import "./title-editor.scss";
import * as Survey from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./title-editor.html");

const FRIENDLY_PADDING = 36;
function resizeInput(target) {
  let computedStyle = window.getComputedStyle(target);
  target.style.width =
    getTextWidth(target.value, computedStyle.font) + FRIENDLY_PADDING + "px";
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
let cachedCanvas;
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas =
    cachedCanvas || (cachedCanvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

export class TitleInplaceEditor {
  editingName = ko.observable<string>();
  prevName = ko.observable<string>();
  isEditing = ko.observable<boolean>(false);
  protected forNeibours(func: (el: HTMLElement) => void) {
    if (
      !this.rootElement.parentElement ||
      !this.rootElement.parentElement.parentElement
    )
      return;
    var holder = this.rootElement.parentElement.parentElement;
    for (var i = 0; i < holder.children.length - 1; i++) {
      var element = holder.children[i];
      if (element.className.indexOf("svda-custom-content") === -1) {
        func(element);
      }
    }
  }

  constructor(
    protected target: any,
    protected name: string,
    protected rootElement,
    public placeholder: string = ""
  ) {
    this.editingName(target[name]);
    this.prevName(target[name]);
    this.forNeibours(
      element =>
        (element.onclick = e => {
          this.startEdit(this, e);
          e.preventDefault();
        })
    );
  }

  valueChanged: (newVal: any) => void;

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  protected updatePrevName() {
    this.prevName(this.target[this.name]);
  }

  hideEditor = () => {
    this.isEditing(false);
    this.forNeibours(element => {
      element.style.display = element.dataset["sjsOldDisplay"];
    });
  };
  startEdit = (model, event) => {
    this.updatePrevName();
    this.editingName(this.prevName());
    this.isEditing(true);
    this.forNeibours(element => {
      element.dataset["sjsOldDisplay"] = element.style.display;
      element.style.display = "none";
    });
    var inputElem = this.rootElement.getElementsByTagName("input")[0];
    resizeInput(inputElem);
    setTimeout(function() {
      inputElem.focus();
    }, 10);
  };
  postEdit = () => {
    if (this.prevName() !== this.editingName()) {
      this.prevName(this.editingName());
      !!this.valueChanged && this.valueChanged(this.editingName());
    }
    this.hideEditor();
  };
  cancelEdit = () => {
    this.editingName(this.prevName());
    this.hideEditor();
  };
  nameEditorKeypress = (model, event) => {
    resizeInput(event.target);
    if (event.keyCode === 13) {
      this.postEdit();
    } else if (event.keyCode === 27) {
      this.cancelEdit();
    }
  };
}

ko.components.register("title-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new TitleInplaceEditor(
        params.model,
        params.name,
        componentInfo.element,
        params.placeholder
      );
      var property = Survey.Serializer.findProperty(
        params.model.getType(),
        params.name
      );
      ko.computed(() => {
        //TO REVIEW THIS CRUTCH
        if (
          property.serializationProperty !== property.name &&
          !!params.model[property.serializationProperty]
        ) {
          ko.unwrap(
            params.model[property.serializationProperty].koRenderedHtml
          );
        }
        model.prevName(ko.unwrap(params.model[params.name]));
        model.editingName(ko.unwrap(params.model[params.name]));
      });
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
        var oldValue = params.model[params.name];
        params.model[params.name] = newValue;
        params.editor.onPropertyChanged(params.model, property, oldValue);
        params.editor.onPropertyValueChanged(property, params.model, newValue);
      };
      return model;
    }
  },
  template: templateHtml
});

export var titleAdorner = {
  pageTitleEditable: true,
  getMarkerClass: model => {
    if (
      typeof model.getType === "function" &&
      model.getType() === "page" &&
      !titleAdorner.pageTitleEditable
    ) {
      return "";
    }
    return "title_editable";
  },
  getElementName: model => "title",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var placeholder =
      model.getType() === "page"
        ? editorLocalization.getString("pe.titlePlaceholder")
        : "";
    var decoration = document.createElement("span");
    decoration.innerHTML = `<title-editor params='name: \"title\", placeholder: "${placeholder}", model: model, editor: editor'></title-editor>`;
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "title", decoration);
  }
};
registerAdorner("title", titleAdorner);

export var itemTitleAdorner = {
  getMarkerClass: model => {
    return !!model.items ? "item_title_editable title_editable" : "";
  },
  getElementName: model => "itemTitle",
  afterRender: (
    elements: HTMLElement[],
    model: Survey.QuestionMultipleText,
    editor
  ) => {
    for (var i = 0; i < elements.length; i++) {
      var decoration = document.createElement("span");
      decoration.innerHTML =
        "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings({ model: model.items[i], editor: editor }, decoration);
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(
        model,
        "item-title",
        decoration,
        model.items[i]
      );
    }
  }
};
registerAdorner("item-title", itemTitleAdorner);

export var descriptionAdorner = {
  getMarkerClass: model => {
    return "description_editable";
  },
  getElementName: model => "description",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var placeholder =
      model.getType() === "page"
        ? editorLocalization.getString("pe.descriptionPlaceholder")
        : "";
    var decoration = document.createElement("span");
    decoration.innerHTML = `<title-editor params='name: \"description\", placeholder: "${placeholder}", model: model, editor: editor'></title-editor>`;
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "description", decoration);
  }
};
registerAdorner("description", descriptionAdorner);
