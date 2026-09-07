import {
  Base,
  ComponentCollection,
  ILocaleData,
  ItemValue,
  JsonObjectProperty,
  PanelModel,
  Question,
  QuestionDropdownModel,
  QuestionTextModel,
  RegionOptions,
  SurveyModel,
  getLocaleDataLocales,
  getLocaleDataValue
} from "survey-core";
import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditor
} from "./index";
import { ISurveyCreatorOptions, settings as creatorSettings } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { SurveyHelper } from "../survey-helper";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";

var json = {
  name: "propertygrid_regionoptions",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

// The format fields of the region options. They inherit the value of the format locale, so the
// editor shows the inherited value as a placeholder instead of writing it into the survey JSON.
const regionOptionsFormatFields: Array<keyof ILocaleData> = [
  "datePattern",
  "timePattern",
  "decimalSeparator",
  "thousandsSeparator",
  "currencyPattern"
];

// survey-core marks every region options property with the "regionOptions" category, which the
// generator would render as a panel inside the panel this editor already creates. The properties
// are re-declared here in the general category, so that they appear directly under the region
// options category of the survey settings. The list is explicit: a property that survey-core
// adds later is shown only after it is added here.
const regionOptionsPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  generateOtherTab: false,
  classes: {
    "regionoptions@regionOptions": {
      properties: ["locale"].concat(regionOptionsFormatFields)
        .map(name => { return { name: name, tab: creatorSettings.propertyGrid.generalTabName }; })
    }
  }
};

// A region locale is not a survey language: a curated region ("en-gb", "pt-br") has no survey
// dictionary of its own, so its name comes from the Creator localization. An unknown locale -
// localeData can be extended by an application - falls back to the survey language name.
export function getRegionLocaleName(locale: string): string {
  const res = editorLocalization.getString("regionLocales." + locale);
  if (!!res && res !== locale) return res;
  return editorLocalization.getLocaleName(locale);
}

export class PropertyGridEditorQuestionRegionOptions extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "regionoptions";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "propertygrid_regionoptions",
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    const panel = <PanelModel>question["contentPanel"];
    const regionOptions = <RegionOptions>obj[prop.name];
    new PropertyJSONGenerator(regionOptions, options, obj, prop, regionOptionsPropertyGridDefinition).setupObjPanel(panel, true);
    this.updateLocaleQuestion(panel);
    this.updateFormatPlaceholders(obj, panel);
    // the format locale follows the survey locale until a region is selected
    obj.registerFunctionOnPropertyValueChanged("locale",
      () => { this.updateFormatPlaceholders(obj, panel); }, "regionOptionsPlaceholders");
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    if (prop.name !== "regionOptions") return;
    // the locale may have changed, and the inherited values shown as placeholders follow it
    this.updateFormatPlaceholders(obj, <PanelModel>question["contentPanel"]);
  }
  private updateLocaleQuestion(panel: PanelModel): void {
    const question = <QuestionDropdownModel>panel.getQuestionByName("locale");
    if (!question) return;
    const choices = getLocaleDataLocales().map(loc => new ItemValue(loc, getRegionLocaleName(loc)));
    SurveyHelper.sortItems(choices);
    question.choices = choices;
  }
  private updateFormatPlaceholders(obj: Base, panel: PanelModel): void {
    if (!panel) return;
    const locale = this.getFormatLocale(obj);
    regionOptionsFormatFields.forEach(name => {
      const question = <QuestionTextModel>panel.getQuestionByName(name);
      if (!question) return;
      const defaultValue = getLocaleDataValue(locale, name);
      if (defaultValue !== undefined) {
        question.placeholder = defaultValue;
      }
    });
  }
  private getFormatLocale(obj: Base): string {
    const survey = <SurveyModel>obj;
    return !!survey && typeof survey.getFormatLocale === "function" ? survey.getFormatLocale() : "";
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRegionOptions());
