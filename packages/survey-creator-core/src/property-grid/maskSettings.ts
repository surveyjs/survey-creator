import { Base, JsonObjectProperty, ComponentCollection, Question, PanelModel, QuestionHtmlModel, InputMaskBase, Serializer, JsonMetadataClass } from "survey-core";
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
    this.updatePreviewQuestion(masksettings, panel);
  }

  updatePreviewQuestion(masksettings: InputMaskBase, panel: PanelModel) {
    switch (masksettings.getType()) {
      case "masksettings":
        this._previewQuestion.visible = true;
        this._previewQuestion.html = getLocString("pe.maskSettingsPlaceHolder");
        break;
      case "numbermask":
        this._previewQuestion.visible = true;
        this._previewQuestion.html = masksettings["getNumberMaskedValue"](-123456.78);
        break;
      default:
        this._previewQuestion.visible = false;
        break;
    }
    if (!panel.getElementByName(this._previewQuestion.name)) {
      panel.addElement(this._previewQuestion);
    }
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionMaskSettings());

export class PropertyGridEditorMaskType extends PropertyGridEditor {
  private _noneItem = { value: "none", text: getLocString("pv.none") };

  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "masktype";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const result = {
      type: "dropdown",
      // optionsCaption: editorLocalization.getString("pe.conditionSelectQuestion"),
      default: this._noneItem.value,
      allowClear: false,
      searchEnabled: false,
      choices: this.getChoices(obj, prop, options)
    };
    return result;
  }
  private getChoices(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): Array<any> {
    const classes = Serializer.getChildrenClasses("masksettings") || [];
    const choices = classes.map((cl: JsonMetadataClass) => {
      let value = cl.name;
      if (cl.name.indexOf("mask") !== -1) {
        value = value.slice(0, value.indexOf("mask"));
      }
      return { value: value, text: getLocString("pe.maskTypes." + cl.name) };
    });
    choices.splice(0, 0, this._noneItem);
    return choices;
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorMaskType());