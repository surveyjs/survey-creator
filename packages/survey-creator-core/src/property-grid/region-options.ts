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
  getLocaleDataValue,
  surveyLocalization
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

// The token a currency pattern writes the currency symbol as.
const currencySignToken = "¤"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

// The currency symbol is not locale data - a survey in German may collect dollars, and the symbol
// a mask renders is its own currencySymbol - so these are read to render the example in the
// currency pattern placeholder and nowhere else. Each is the symbol of the currency of the region
// the locale stands for, written the way a respondent of that region reads it; where that symbol
// is written right to left or is a bare letter that would not read as money next to the number,
// the ISO code stands in for it. A locale an application adds to localeData has no entry here and
// resolves through its language subtag to "en", the walk that resolves the pattern itself.
/* eslint-disable surveyjs/eslint-plugin-i18n/only-english-or-code */
const regionCurrencySymbols: { [locale: string]: string } = {
  "ar": "EGP", "bg": "лв.", "ca": "€", "cs": "Kč", "cy": "£", "da": "kr.", "de": "€", "el": "€",
  "en": "$", "en-au": "$", "en-ca": "$", "en-gb": "£", "en-ie": "€", "en-in": "₹", "en-nz": "$",
  "en-za": "R", "es": "€", "et": "€", "eu": "€", "fa": "IRR", "fi": "€", "fil": "₱", "fr": "€",
  "fr-ca": "$", "fr-ch": "CHF", "he": "₪", "hi": "₹", "hr": "€", "ht": "HTG", "hu": "Ft",
  "id": "Rp", "is": "kr.", "it": "€", "ja": "¥", "ka": "₾", "kk": "₸", "ko": "₩", "lt": "€",
  "lv": "€", "mk": "ден", "mm": "MMK", "ms": "RM", "nl": "€", "nl-be": "€", "no": "kr",
  "pl": "zł", "pt": "€", "pt-br": "R$", "ro": "lei", "ru": "₽", "sk": "€", "sl": "€",
  "sr": "дин.", "sv": "kr", "sw": "KSh", "tel": "₹", "tg": "сом", "th": "฿", "tr": "₺",
  "uk": "₴", "ur": "Rs", "vi": "₫", "zh": "¥", "zh-cn": "¥", "zh-tw": "NT$"
};
/* eslint-enable surveyjs/eslint-plugin-i18n/only-english-or-code */

function getRegionCurrencySymbol(locale: string): string {
  let loc = surveyLocalization.getCorrectLocaleName(locale || "").toLowerCase();
  while(!!loc) {
    const res = regionCurrencySymbols[loc];
    if (!!res) return res;
    const index = loc.lastIndexOf("-");
    loc = index > 0 ? loc.substring(0, index) : "";
  }
  return regionCurrencySymbols["en"];
}

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
        question.placeholder = name === "currencyPattern"
          ? this.getCurrencyPlaceholder(obj, locale, defaultValue)
          : defaultValue;
      }
    });
  }
  // Currency patterns differ between regions only in where the abstract currency sign sits, so
  // the inherited pattern on its own reads the same in almost every region. The sample amount
  // that follows it makes the difference visible and shows what the pattern produces. The
  // example is what the pattern renders for the region, so the sign token is resolved as well;
  // the symbol is the one the region reads money in, not one the survey will use by itself -
  // that is the currencySymbol of the mask.
  private getCurrencyPlaceholder(obj: Base, locale: string, pattern: string): string {
    const decimal = this.getFormatValue(obj, locale, "decimalSeparator") || "";
    const thousands = this.getFormatValue(obj, locale, "thousandsSeparator") || "";
    const amount = "1" + thousands + "234" + decimal + "56";
    const symbol = getRegionCurrencySymbol(locale);
    // the negative subpattern repeats the positive one with the minus sign, so the example
    // renders the positive one only. The replacements are functions: a symbol carries a $ that
    // String.replace would otherwise read as a pattern of its own.
    const example = pattern.split(";")[0]
      .replace("#", () => amount)
      .replace(currencySignToken, () => symbol);
    return pattern + " (" + example + ")";
  }
  // The value a format field resolves to: an override authored in the region options outranks
  // the curated locale default, the order the mask resolves them in.
  private getFormatValue(obj: Base, locale: string, field: keyof ILocaleData): string {
    const survey = <SurveyModel>obj;
    const res = !!survey && typeof survey.getRegionOptionValue === "function"
      ? survey.getRegionOptionValue(field) : undefined;
    return res !== undefined && res !== null ? res : getLocaleDataValue(locale, field);
  }
  private getFormatLocale(obj: Base): string {
    const survey = <SurveyModel>obj;
    return !!survey && typeof survey.getFormatLocale === "function" ? survey.getFormatLocale() : "";
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRegionOptions());
