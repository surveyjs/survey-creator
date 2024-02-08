import { Base, JsonObjectProperty, ComponentCollection, QuestionDropdownModel, Question, PanelModel, MaskManagerType } from "survey-core";
import { PropertyGridEditorCollection, PropertyJSONGenerator, PropertyGridEditorQuestion, } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";

var json = {
  name: "propertygrid_masksettings",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

export class PropertyGridEditorQuestionMaskSettings extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "masksettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "propertygrid_masksettings",
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    const panel = <PanelModel>question["contentPanel"];
    const masksettings = obj[prop.name];
    new PropertyJSONGenerator(masksettings, options, obj, prop).setupObjPanel(panel, true);

    const types = <QuestionDropdownModel>panel.getQuestionByName("type");
    types.choices = MaskManagerType.Instance.getAllTypes();
    panel.updateElementVisibility();
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    // if (prop.name === "type") {
    //   return;
    // }
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionMaskSettings());
