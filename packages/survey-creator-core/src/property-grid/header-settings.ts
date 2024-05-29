import { Base, ComponentCollection, JsonObjectProperty, PanelModel, Question } from "survey-core";
import { PropertyGridEditorCollection, PropertyJSONGenerator, PropertyGridEditor, } from "./index";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { ISurveyCreatorOptions } from "../creator-settings";
import { themeModelPropertyGridDefinition } from "../components/tabs/theme-model-definition";

var json = {
  name: "propertygrid_header",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

export class PropertyGridEditorQuestionHeader extends PropertyGridEditor {

  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "header";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "propertygrid_header",
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    const panel = <PanelModel>question["contentPanel"];
    const header = obj[prop.name];
    const propertyGenerator = new PropertyJSONGenerator(header, options, obj, prop, themeModelPropertyGridDefinition);
    propertyGenerator.setupObjPanel(panel, true);

    let settingsPanel;
    var questions = panel.elements;

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].name == "settings") {
        settingsPanel = questions[i];
      }
    }
    settingsPanel.state = undefined;
    settingsPanel.title = "";

    settingsPanel.elements.forEach(el => {
      el.title = "";
      el.state = undefined;
    });
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionHeader());
