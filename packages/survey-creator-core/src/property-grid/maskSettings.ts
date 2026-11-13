import { Base, JsonObjectProperty, ComponentCollection, Question, PanelModel, QuestionHtmlModel, InputMaskBase, Serializer, JsonMetadataClass, InputMaskDateTime, InputMaskCurrency, QuestionTextModel } from "survey-core";
import { PropertyGridEditorCollection, PropertyJSONGenerator, PropertyGridEditor, } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";
import { getLocString } from "../editorLocalization";
import { getCurrencyPatternPlaceholder } from "./currency-pattern-placeholder";

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

const placeholdersHandlerKey = "maskPatternPlaceholdersHandler";

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
    // A survey locale or regional format change resolves the mask patterns anew without changing
    // a mask property, so onValueChanged is not called. The mask reports it to the question,
    // which passes it on as a nested change - the only notification that covers a change inside
    // survey.regionalFormat as well. The handler is kept on the question to release it.
    const handler = (sender: Base, options: any): void => {
      if (options.name !== prop.name) return;
      this.updatePatternPlaceholders(obj[prop.name], <PanelModel>question["contentPanel"]);
    };
    obj.onNestedPropertyChanged.add(handler);
    question[placeholdersHandlerKey] = handler;
  }
  onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    const handler = question[placeholdersHandlerKey];
    if (!handler) return;
    obj.onNestedPropertyChanged.remove(handler);
    question[placeholdersHandlerKey] = undefined;
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

    this.updatePatternPlaceholders(masksettings, panel);
    this.updatePreviewQuestion(masksettings, panel);
  }

  private updateDateTimeMinMaxInputType(masksettings: InputMaskBase, panel: PanelModel) {
    let inputType = "datetime-local";
    if (!(masksettings as InputMaskDateTime).hasDatePart) inputType = "time";
    if (!(masksettings as InputMaskDateTime).hasTimePart) inputType = "date";
    panel.getQuestionByName("min").inputType = inputType;
    panel.getQuestionByName("max").inputType = inputType;
  }

  // The pattern editors show the pattern the mask resolves when none is authored: the one the
  // regional format or the survey locale gives it. A placeholder never shows while a value is
  // present, so it is set whether or not a pattern is authored.
  private updatePatternPlaceholders(masksettings: InputMaskBase, panel: PanelModel): void {
    if (!masksettings || !panel) return;
    const type = masksettings.getType();
    if (type === "datetimemask") {
      this.setPlaceholder(panel, "pattern", (masksettings as InputMaskDateTime).activePattern);
    }
    if (type === "currencymask") {
      // the separators and the symbol read the resolved values while they are not authored
      const mask = masksettings as InputMaskCurrency;
      this.setPlaceholder(panel, "currencyPattern", getCurrencyPatternPlaceholder(mask.activeCurrencyPattern,
        mask.decimalSeparator, mask.thousandsSeparator, mask.currencySymbol));
    }
  }
  private setPlaceholder(panel: PanelModel, name: string, placeholder: string): void {
    const question = <QuestionTextModel>panel.getQuestionByName(name);
    if (!!question) {
      question.placeholder = placeholder || "";
    }
  }

  updatePreviewQuestion(masksettings: InputMaskBase, panel: PanelModel) {
    this._previewQuestion.visible = masksettings.getType() === "masksettings";
    if (!panel.getElementByName(this._previewQuestion.name)) {
      panel.addElement(this._previewQuestion);
    }
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionMaskSettings());
