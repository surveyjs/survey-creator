import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";

import "./title-editor.scss";
import * as Survey from "survey-knockout";
var templateHtml = require("html-loader?interpolate!val-loader!./title-editor.html");

const FRIENDLY_PADDING = 36;
function resizeInput(target) {
  let computedStyle = window.getComputedStyle(target);
  target.style.width = (getTextWidth(target.value, computedStyle.font) + FRIENDLY_PADDING) + 'px';
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
  var canvas = cachedCanvas || (cachedCanvas = document.createElement("canvas"));
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
      func(element);
    }
  }

  constructor(name: string, protected rootElement) {
    this.editingName(name);
    this.prevName(name);
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

  hideEditor = () => {
    this.isEditing(false);
    this.forNeibours(element => {
      element.style.display = element.style["oldDisplay"];
    });
  };
  startEdit = (model, event) => {
    this.editingName(this.prevName());
    this.isEditing(true);
    this.forNeibours(element => {
      element.style["oldDisplay"] = element.style.display;
      element.style.display = "none";
    });
    var inputElem = this.rootElement.getElementsByTagName("input")[0];
    inputElem.focus();
    resizeInput(inputElem);
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
        params.model[params.name],
        componentInfo.element
      );
      var property = Survey.JsonObject.metaData.findProperty(
        params.model.getType(),
        params.name
      );
      model.valueChanged = newValue => {
        params.model[params.name] = newValue;
        params.editor.onPropertyValueChanged(property, params.model, newValue);
      };
      return model;
    }
  },
  template: templateHtml
});

export var titleAdorner = {
  getMarkerClass: model => {
    return "title_editable";
  },
  getElementName: model => "title",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var decoration = document.createElement("span");
    decoration.innerHTML =
      "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
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
    }
  }
};

registerAdorner("item-title", itemTitleAdorner);
