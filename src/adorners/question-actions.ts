import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";
import "./question-actions.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./question-actions.html");
import { QuestionConverter } from "../questionconverter";

export class QuestionActionsAdorner {
  constructor(private question, private editor) {}

  public localizeType(type) {
    return editorLocalization.getString("qt." + type);
  }

  get type() {
    return this.question.getType();
  }

  get allowChangeType() {
    var convertClasses = QuestionConverter.getConvertToClasses(
      this.question.getType()
    );
    return (
      convertClasses.length > 0 && this.question.allowingOptions.allowChangeType
    );
  }

  private createTypeByClass(className) {
    return {
      name: this.localizeType(className),
      value: className
    };
  }

  get availableTypes() {
    var availableTypes = [];
    var convertClasses = QuestionConverter.getConvertToClasses(
      this.question.getType()
    );

    availableTypes.push(this.createTypeByClass(this.type));

    for (var i = 0; i < convertClasses.length; i++) {
      var className = convertClasses[i];
      availableTypes.push(this.createTypeByClass(className));
    }

    return availableTypes;
  }

  onConvertType(data, event) {
    var newType = event.target.value;
    this.editor.convertCurrentObject(this.question, newType);
  }
}

ko.components.register("question-actions", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new QuestionActionsAdorner(params.question, params.editor);
      return model;
    }
  },
  template: templateHtml
});

export var questionActionsAdorner = {
  getMarkerClass: model => {
    return "question_actions";
  },
  afterRender: (elements: HTMLElement[], model, editor) => {
    var decoration = document.createElement("div");
    decoration.className = "svda-question-actions";
    decoration.innerHTML =
      "<question-actions params='question: $data, editor:editor'></question-actions>";
    elements[0].appendChild(decoration);
    ko.applyBindings(model, decoration);
  }
};

registerAdorner("mainRoot", questionActionsAdorner);
