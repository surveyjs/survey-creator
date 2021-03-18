import {
  Base,
  JsonObjectProperty,
  ComponentCollection,
  QuestionDropdownModel,
} from "survey-core";
import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditorQuestion,
} from "./index";
import { ISurveyCreatorOptions } from "../settings";

var json = {
  panelJSON: null,
  name: "propertygrid_restfull",
  showInToolbox: false,
  createElements: function (panel) {
    if (!this.panelJSON) {
      var q = new QuestionDropdownModel("q");
      this.panelJSON = new PropertyJSONGenerator(q.choicesByUrl).toJSON(true);
    }
    panel.fromJSON(this.panelJSON);
  },
};

ComponentCollection.Instance.add(json);

export class PropertyGridEditorQuestionRestfull extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "restfull";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "propertygrid_restfull",
    };
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRestfull());
