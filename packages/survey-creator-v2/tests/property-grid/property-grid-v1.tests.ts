import {
  PropertyGridModel,
  PropertyGridEditorCollection,
} from "../../src/property-grid";
import {
  Base,
  JsonObjectProperty,
  QuestionTextModel,
  QuestionCheckboxModel,
  QuestionDropdownModel,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  SurveyTriggerRunExpression,
  ExpressionValidator,
  CalculatedValue,
  HtmlConditionItem,
  QuestionMultipleTextModel,
  UrlConditionItem,
  QuestionCompositeModel,
  ItemValue,
  Question,
  MatrixDropdownColumn,
  SurveyTriggerSetValue,
  QuestionMatrixModel,
  Serializer,
  QuestionPanelDynamicModel,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";
export * from "../../src/property-grid/matrices";
export * from "../../src/property-grid/condition";
export * from "../../src/property-grid/restfull";
import { CellsEditor } from "../../src/property-grid/cells-survey";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor,
} from "../../src/property-grid/values";

//PropertyGridEditorCollection.register(new PropertyGridValueEditor());
//PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRestfull());

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = null) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
}
test("Create correct questions for property editors", () => {
  var property = Serializer.addProperty("question", "testname");
  property.type = "unknown";
  var propertyEditor = PropertyGridEditorCollection.getEditor(property);
  expect(
    propertyEditor.getJSON(new Question("q1"), property, null).type
  ).toEqual("text");
  Serializer.removeProperty("question", "testname");
  var propertyTypes = {
    string: "text",
    boolean: "boolean",
    number: "text",
    text: "comment",
    html: "comment",
    "itemvalue[]": "matrixdynamic",
    matrixdropdowncolumns: "matrixdynamic",
    textitems: "matrixdynamic",
    triggers: "matrixdynamic",
    validators: "matrixdynamic",
    restfull: "propertygrid_restfull",
  };
  for (var key in propertyTypes) {
    var propName = "testname_" + key;
    property = Serializer.addProperty("question", propName);
    property.type = key.toString();
    propertyEditor = PropertyGridEditorCollection.getEditor(property);
    expect(
      propertyEditor.getJSON(
        new Question("q1"),
        property,
        new EmptySurveyCreatorOptions()
      ).type
    ).toEqual(propertyTypes[key]);
    Serializer.removeProperty("question", propName);
  }
});
