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
  RegionalFormat,
  SurveyModel,
  getLocaleDataLocales,
  getLocaleDataValue,
  isValidCurrencyPattern,
  isValidCurrencySymbol,
  isValidDecimalSeparator,
  isValidThousandsSeparator
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
import { getCurrencyPatternPlaceholder } from "./currency-pattern-placeholder";

var json = {
  name: "propertygrid_regionalformat",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

// The format fields of the regional format. They inherit the value of the format locale, so the
// editor shows the inherited value as a placeholder instead of writing it into the survey JSON.
const regionalFormatFormatFields: Array<keyof ILocaleData> = [
  "datePattern",
  "timePattern",
  "decimalSeparator",
  "thousandsSeparator",
  "currencySymbol",
  "currencyPattern"
];

// survey-core marks every regional format property with the "regionalFormat" category, which the
// generator would render as a panel inside the panel this editor already creates. The properties
// are re-declared here in the general category, so that they appear directly under the regional
// format category of the survey settings. The list is explicit: a property that survey-core
// adds later is shown only after it is added here.
const regionalFormatPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  generateOtherTab: false,
  classes: {
    "regionalformat@regionalFormat": {
      properties: ["locale"].concat(regionalFormatFormatFields)
        .map(name => { return { name: name, tab: creatorSettings.propertyGrid.generalTabName }; })
    }
  }
};

const regionalFormatPlaceholdersKey = "regionalFormatPlaceholders";

// The validator a format field resolves through, the one the mask applies. An override the mask
// would reject falls through to the curated value there and has to do the same here, or the
// example would show what the survey does not render.
const regionalFormatFormatValidators: { [name: string]: (value: string) => boolean } = {
  "decimalSeparator": isValidDecimalSeparator,
  "thousandsSeparator": isValidThousandsSeparator,
  "currencyPattern": isValidCurrencyPattern,
  "currencySymbol": isValidCurrencySymbol
};

// A region locale is not a survey language: a curated region ("en-GB", "pt-BR") has no survey
// dictionary of its own, so its name comes from the Creator localization. An unknown locale -
// localeData can be extended by an application - falls back to the survey language name.
export function getRegionLocaleName(locale: string): string {
  const res = editorLocalization.getString("regionLocales." + locale);
  if (!!res && res !== locale) return res;
  return editorLocalization.getLocaleName(locale);
}

export class PropertyGridEditorQuestionRegionalFormat extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "regionalformat";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "propertygrid_regionalformat",
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    const panel = <PanelModel>question["contentPanel"];
    const regionalFormat = <RegionalFormat>obj[prop.name];
    new PropertyJSONGenerator(regionalFormat, options, obj, prop, regionalFormatPropertyGridDefinition).setupObjPanel(panel, true);
    this.updateLocaleQuestion(panel);
    this.updateFormatPlaceholders(obj, panel);
    // the format locale follows the survey locale until a region is selected
    obj.registerFunctionOnPropertyValueChanged("locale",
      () => { this.updateFormatPlaceholders(obj, panel); }, regionalFormatPlaceholdersKey);
  }
  onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    obj.unRegisterFunctionOnPropertyValueChanged("locale", regionalFormatPlaceholdersKey);
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    if (prop.name !== "regionalFormat") return;
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
    regionalFormatFormatFields.forEach(name => {
      const question = <QuestionTextModel>panel.getQuestionByName(name);
      if (!question) return;
      const defaultValue = getLocaleDataValue(locale, name);
      if (defaultValue !== undefined) {
        question.placeholder = name === "currencyPattern"
          ? this.getCurrencyPlaceholder(obj, locale, defaultValue)
          : defaultValue;
      }
    });
  }
  // The example renders what a mask of the survey renders, down to the symbol the region is
  // curated with and any override authored above it. There is no mask here, so the values are
  // resolved the way a mask resolves them.
  private getCurrencyPlaceholder(obj: Base, locale: string, pattern: string): string {
    return getCurrencyPatternPlaceholder(pattern,
      this.getFormatValue(obj, locale, "decimalSeparator"),
      this.getFormatValue(obj, locale, "thousandsSeparator"),
      this.getFormatValue(obj, locale, "currencySymbol"));
  }
  // The value a format field resolves to: an override authored in the regional format outranks
  // the curated locale default, the order the mask resolves them in.
  private getFormatValue(obj: Base, locale: string, field: keyof ILocaleData): string {
    const survey = <SurveyModel>obj;
    const isValid = regionalFormatFormatValidators[field];
    const res = !!survey && typeof survey.getRegionalFormatValue === "function"
      ? survey.getRegionalFormatValue(field) : undefined;
    if (res !== undefined && res !== null && (!isValid || isValid(res))) return res;
    return getLocaleDataValue(locale, field, isValid);
  }
  private getFormatLocale(obj: Base): string {
    const survey = <SurveyModel>obj;
    return !!survey && typeof survey.getFormatLocale === "function" ? survey.getFormatLocale() : "";
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRegionalFormat());
