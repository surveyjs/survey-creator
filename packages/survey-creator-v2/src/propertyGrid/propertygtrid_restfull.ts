import {
  Base,
  JsonObjectProperty,
  ComponentCollection,
  QuestionDropdownModel,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
} from "./propertygrid";

var json = {
  panelJSON: null,
  name: "propertygrid_restfull",
  createElements: function (panel) {
    if (!this.panelJSON) {
      var q = new QuestionDropdownModel("q");
      this.panelJSON = new PropertyJSONGenerator(q.choicesByUrl).toJSON(true);
    }
    panel.fromJSON(this.panelJSON);
  },
};

ComponentCollection.Instance.add(json);

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "restfull";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    return {
      type: "propertygrid_restfull",
    };
  },
});
