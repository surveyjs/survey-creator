import { PanelModel, QuestionDropdownModel, QuestionTextModel, SurveyModel, getLocaleDataValue } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { editorLocalization } from "../../src/editorLocalization";

const euro = "\u20AC"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const pound = "\u00A3"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const hryvnia = "\u20B4"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
const nbsp = "\u00A0"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

export * from "../../src/property-grid/regional-format";

function getRegionalFormatPanel(propertyGrid: PropertyGridModelTester): PanelModel {
  const question = propertyGrid.survey.getQuestionByName("regionalFormat");
  expect(question).toBeTruthy();
  return <PanelModel>question["contentPanel"];
}
// The placeholder the currency pattern of a curated locale shows: the pattern as it is built into
// survey-core, followed by the example it renders. The amount and the symbol passed here contain
// no pattern tokens, so the tokens can be replaced one after another.
function getCurrencyPlaceholder(locale: string, amount: string, symbol: string): string {
  const pattern = getLocaleDataValue(locale, "currencyPattern");
  return pattern + " (" + pattern.replace("-", "").replace("#", amount).replace("@", symbol) + ")";
}

test("Regional format is shown in its own category", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const categoryPanel = <PanelModel>propertyGrid.survey.getPanelByName("regionalFormat");
  expect(categoryPanel).toBeTruthy();
  expect(categoryPanel.title).toEqual("Regional Formats");
  expect(categoryPanel.elements.map(el => el.name)).toStrictEqual(["regionalFormat"]);

  const panel = getRegionalFormatPanel(propertyGrid);
  expect(panel.elements.map(el => el.name)).toStrictEqual([
    "locale",
    "datePattern",
    "timePattern",
    "decimalSeparator",
    "thousandsSeparator",
    "currencySymbol",
    "currencyPattern"
  ]);
});

test("Region locale choices are localized on the Creator level", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const localeQuestion = <QuestionDropdownModel>getRegionalFormatPanel(propertyGrid).getQuestionByName("locale");
  expect(localeQuestion.getType()).toEqual("dropdown");
  expect(localeQuestion.placeholder).toEqual("Same as survey language");

  const getText = (value: string): string => localeQuestion.choices.filter(item => item.value === value)[0].text;
  expect(getText("en")).toEqual("English");
  expect(getText("en-GB")).toEqual("English (United Kingdom)");
  expect(getText("pt-BR")).toEqual("Portuguese (Brazil)");
  expect(getText("zh-TW")).toEqual("Chinese (Traditional)");
  expect(getText("de")).toEqual("German");
  //the list is sorted by the localized name
  expect(localeQuestion.choices[0].text).toEqual("Arabic");
});

test("Regional format locale is stored and shown in the canonical casing", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  getRegionalFormatPanel(propertyGrid).getQuestionByName("locale").value = "en-GB";
  expect(survey.toJSON().regionalFormat).toStrictEqual({ locale: "en-GB" });

  //a locale of an old JSON is canonicalized by survey-core before the grid reads it
  const oldSurvey = new SurveyModel({ regionalFormat: { locale: "en-gb" } });
  const oldPropertyGrid = new PropertyGridModelTester(oldSurvey);
  const localeQuestion = <QuestionDropdownModel>getRegionalFormatPanel(oldPropertyGrid).getQuestionByName("locale");
  expect(localeQuestion.value).toEqual("en-GB");
  expect(localeQuestion.selectedItem.value).toEqual("en-GB");
  expect(localeQuestion.displayValue).toEqual("English (United Kingdom)");
});

test("Edit regional format in the property grid", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  panel.getQuestionByName("locale").value = "de";
  panel.getQuestionByName("datePattern").value = "yyyy-mm-dd";

  expect(survey.regionalFormat.locale).toEqual("de");
  expect(survey.regionalFormat.datePattern).toEqual("yyyy-mm-dd");
  expect(survey.getFormatLocale()).toEqual("de");
  expect(survey.toJSON().regionalFormat).toStrictEqual({ locale: "de", datePattern: "yyyy-mm-dd" });
});

test("Load regional format from JSON into the property grid", () => {
  const survey = new SurveyModel({ regionalFormat: { locale: "fr", thousandsSeparator: "." } });
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  expect(panel.getQuestionByName("locale").value).toEqual("fr");
  expect(panel.getQuestionByName("thousandsSeparator").value).toEqual(".");
  expect(panel.getQuestionByName("datePattern").value).toBeFalsy();
});

test("Show the inherited format as a placeholder", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  const datePattern = <QuestionTextModel>panel.getQuestionByName("datePattern");
  const decimalSeparator = <QuestionTextModel>panel.getQuestionByName("decimalSeparator");
  expect(datePattern.placeholder).toEqual("mm/dd/yyyy");
  expect(decimalSeparator.placeholder).toEqual(".");

  panel.getQuestionByName("locale").value = "de";
  expect(datePattern.placeholder).toEqual("dd.mm.yyyy");
  expect(decimalSeparator.placeholder).toEqual(",");
});

test("Show a rendered example in the currency pattern placeholder", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  //the symbol token of the pattern is rendered as the symbol survey-core curates for the region
  expect(currencyPattern.placeholder).toEqual("@# ($1,234.56)");

  panel.getQuestionByName("locale").value = "de";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "1.234,56", euro));
  //the example carries the separators of the region as well as the placement of the symbol
  panel.getQuestionByName("locale").value = "sv";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("sv", "1" + nbsp + "234,56", "kr"));
  //the example is a positive amount: the position of the minus sign renders nothing
  panel.getQuestionByName("locale").value = "nl";
  expect(getLocaleDataValue("nl", "currencyPattern")).toContain("-");
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("nl", "1.234,56", euro));
});

test("Render the currency pattern example in one pass over the pattern", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  //the inserted amount carries the symbol token and the inserted symbol carries the number and
  //minus sign tokens; neither is read as a token of the pattern
  panel.getQuestionByName("thousandsSeparator").value = "@";
  panel.getQuestionByName("currencySymbol").value = "#-";
  expect(currencyPattern.placeholder).toEqual("@# (#-1@234.56)");
  //the symbol follows the number here, so no order of sequential replacements passes both
  panel.getQuestionByName("locale").value = "de";
  expect(getLocaleDataValue("de", "currencyPattern")).toEqual("# @");
  expect(currencyPattern.placeholder).toEqual("# @ (1@234,56 #-)");
  panel.getQuestionByName("locale").value = "";
  //a symbol with a $ is inserted as it is, not read as a replacement pattern
  panel.getQuestionByName("currencySymbol").value = "$&";
  expect(currencyPattern.placeholder).toEqual("@# ($&1@234.56)");
});

test("Show the inherited currency symbol and let an authored one into the example", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  const currencySymbol = <QuestionTextModel>panel.getQuestionByName("currencySymbol");
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  expect(currencySymbol.placeholder).toEqual("$");
  panel.getQuestionByName("locale").value = "de";
  expect(currencySymbol.placeholder).toEqual(euro);

  //a symbol authored in the regional format outranks the curated one, as it does on a mask
  currencySymbol.value = pound;
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "1.234,56", pound));
  //an authored separator outranks the one of the region as well
  panel.getQuestionByName("thousandsSeparator").value = " ";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "1 234,56", pound));
  //an override survey-core would reject falls through to the curated symbol, as it does there
  currencySymbol.value = "12";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "1 234,56", euro));
});

test("Resolve the currency symbol of the example through the language subtag", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  //a locale with no curated entry of its own resolves the same way the pattern does
  survey.locale = "de-AT";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "1.234,56", euro));
  //an alias of a curated locale reaches its entry
  survey.locale = "ua";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("uk", "1" + nbsp + "234,56", hryvnia));
});

test("Update the placeholders on changing the survey locale", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const datePattern = <QuestionTextModel>getRegionalFormatPanel(propertyGrid).getQuestionByName("datePattern");
  expect(datePattern.placeholder).toEqual("mm/dd/yyyy");

  survey.locale = "fr";
  expect(datePattern.placeholder).toEqual("dd/mm/yyyy");
  //the region wins over the survey locale
  getRegionalFormatPanel(propertyGrid).getQuestionByName("locale").value = "sv";
  expect(datePattern.placeholder).toEqual("yyyy-mm-dd");
  survey.locale = "";
  expect(datePattern.placeholder).toEqual("yyyy-mm-dd");
});

test("Undo/redo a regional format change", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.survey.regionalFormat.locale = "de";
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  creator.undo();
  expect(creator.survey.regionalFormat.locale).toBeFalsy();
  creator.redo();
  expect(creator.survey.regionalFormat.locale).toEqual("de");
});

test("Regional format property names and descriptions", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionalFormatPanel(propertyGrid);
  expect(panel.getQuestionByName("locale").title).toEqual("Region");
  expect(panel.getQuestionByName("currencySymbol").title).toEqual("Currency symbol");
  expect(panel.getQuestionByName("currencyPattern").title).toEqual("Currency pattern");
  //the currency symbol is listed before the currency pattern
  const names = panel.questions.map(q => q.name);
  expect(names.indexOf("currencySymbol")).toBeLessThan(names.indexOf("currencyPattern"));
  expect(panel.getQuestionByName("locale").description)
    .toEqual(editorLocalization.getString("pehelp.regionalformat.locale"));
  expect(panel.getQuestionByName("currencySymbol").description)
    .toEqual(editorLocalization.getString("pehelp.regionalformat.currencySymbol"));
  expect(panel.getQuestionByName("currencyPattern").description)
    .toEqual(editorLocalization.getString("pehelp.regionalformat.currencyPattern"));
});
