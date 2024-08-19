import { Base, JsonObjectProperty, ComponentCollection, Question, PanelModel, QuestionHtmlModel, InputMaskBase, Serializer, JsonMetadataClass, InputMaskDateTime } from "survey-core";
import { PropertyGridEditorCollection, PropertyJSONGenerator, PropertyGridEditor, } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
import { getLocString } from "../editorLocalization";

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

    if (masksettings.getType() == "datetimemask") {
      this.updateDateTimeMinMaxInputType(masksettings, panel);
    }

    this.updatePreviewQuestion(masksettings, panel);
  }

  private updateDateTimeMinMaxInputType(masksettings: InputMaskBase, panel: PanelModel) {
    let inputType = "datetime-local";
    if (!(masksettings as InputMaskDateTime).hasDatePart) inputType = "time";
    if (!(masksettings as InputMaskDateTime).hasTimePart) inputType = "date";
    panel.getQuestionByName("min").inputType = inputType;
    panel.getQuestionByName("max").inputType = inputType;
  }

  updatePreviewQuestion(masksettings: InputMaskBase, panel: PanelModel) {
    this._previewQuestion.visible = masksettings.getType() === "masksettings";
    if (!panel.getElementByName(this._previewQuestion.name)) {
      panel.addElement(this._previewQuestion);
    }
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionMaskSettings());