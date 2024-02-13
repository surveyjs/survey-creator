import { Base, JsonObjectProperty, ComponentCollection, Question, PanelModel, QuestionHtmlModel, InputMaskBase } from "survey-core";
import { PropertyGridEditorCollection, PropertyJSONGenerator, PropertyGridEditor, } from "./index";
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

export class PropertyGridEditorQuestionMaskSettings extends PropertyGridEditor {
  private _propertyGrid;
  private _prevMaskType: string;
  private _previewQuestion: QuestionHtmlModel;

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
    const masksettings = obj[prop.name];
    this._propertyGrid = new PropertyJSONGenerator(masksettings, options, obj, prop);
    this._prevMaskType = "";
    const panel = <PanelModel>question["contentPanel"];
    this._previewQuestion = <QuestionHtmlModel>panel.addNewQuestion("html", "preview");
    this.updatePanel(obj, question, prop);

  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    if (prop.name === "maskSettings") {
      this.updatePanel(obj, question, prop);
    }
  }
  updatePanel(obj: Base, question: Question, prop: JsonObjectProperty) {
    const panel = <PanelModel>question["contentPanel"];
    const masksettings = obj[prop.name] as InputMaskBase;
    if (this._prevMaskType !== obj["maskType"]) {
      this._propertyGrid.obj = masksettings;
      this._propertyGrid.setupObjPanel(panel, true);
      this._prevMaskType = obj["maskType"];
    }

    switch (masksettings.getType()) {
      case "masksettings":
        this._previewQuestion.visible = true;
        this._previewQuestion.html = "No settings";
        break;
      case "numbermasksettings":
        this._previewQuestion.visible = true;
        this._previewQuestion.html = masksettings.getMaskedValue("123456");
        break;
      // case "masksettings":
      //   preview.html = "No settings";
      //   break;
      default:
        this._previewQuestion.visible = false;
        break;
    }

    panel.addElement(this._previewQuestion);
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionMaskSettings());
