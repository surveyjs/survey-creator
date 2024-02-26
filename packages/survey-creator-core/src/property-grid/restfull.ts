import {
  Base,
  JsonObjectProperty,
  ComponentCollection,
  QuestionDropdownModel,
  Question,
  PanelModel,
  ChoicesRestful
} from "survey-core";
import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditorQuestion,
} from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";

var json = {
  name: "propertygrid_restfull",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

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
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    const panel = <PanelModel>question["contentPanel"];
    const choicesByUrl = obj[prop.name];
    new PropertyJSONGenerator(choicesByUrl, options, obj, prop, propGridDefinition).setupObjPanel(panel, true);
    const test = <QuestionDropdownModel>panel.addNewQuestion("dropdown", "test");
    test.title = editorLocalization.getString("ed.choicesLoadedFromWebPreviewTitle");
    test.choices = [];
    this.updateTestQuestion(test, choicesByUrl);
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    if (prop.name !== "choicesByUrl") return;
    const panel = <PanelModel>question["contentPanel"];
    const test = <QuestionDropdownModel>panel.getQuestionByName("test");
    this.updateTestQuestion(test, obj[prop.name]);
  }
  private updateTestQuestion(test: QuestionDropdownModel, choicesByUrl: ChoicesRestful) {
    if (!choicesByUrl) return;
    test.visible = !!choicesByUrl.url;
    test.choicesByUrl.setData(choicesByUrl);
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRestfull());
