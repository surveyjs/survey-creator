import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  Survey,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  PropertyGridModel,
} from "./propertygrid";

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "expression";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    return {
      type: "comment",
      showOptionsCaption: false,
    };
  },
});

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "condition";
  },
  getJSON(obj: Base, prop: JsonObjectProperty): any {
    return {
      type: "comment",
      showOptionsCaption: false,
    };
  },
});
