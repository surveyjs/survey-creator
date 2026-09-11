import { InputMaskCurrency, InputMaskDateTime, PanelModel, QuestionTextModel, SurveyModel, getLocaleDataValue } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { editorLocalization } from "../../src/editorLocalization";

const euro = "\u20AC"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

export * from "../../src/property-grid/maskSettings";
export * from "../../src/property-grid/regional-format";

function getMaskPanel(propertyGrid: SurveyModel): PanelModel {
  const question = propertyGrid.getQuestionByName("maskSettings");
  expect(question).toBeTruthy();
  return <PanelModel>question["contentPanel"];
}
function selectQuestion(creator: CreatorTester, name: string): PanelModel {
  creator.selectElement(creator.survey.getQuestionByName(name));
  return getMaskPanel(creator.propertyGrid);
}
// The placeholder of the currency pattern for a curated locale: the pattern as it is built into
// survey-core, followed by the example the mask renders with it. An empty symbol leaves the
// amount bare. The amount and the symbols passed here contain no pattern tokens, so the tokens
// can be replaced one after another.
function getCurrencyPlaceholder(locale: string, symbol: string): string {
  const pattern = getLocaleDataValue(locale, "currencyPattern");
  const amount = "1" + getLocaleDataValue(locale, "thousandsSeparator") + "234" + getLocaleDataValue(locale, "decimalSeparator") + "56";
  const example = !symbol ? amount : pattern.replace("-", "").replace("#", amount).replace("@", symbol);
  return pattern + " (" + example + ")";
}

test("Mask settings updated if change mask type", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const masksettingsQuestion = (propertyGrid.survey.getQuestionByName("maskSettings"));
  expect(masksettingsQuestion).toBeTruthy();

  const panel = masksettingsQuestion.contentPanel;
  expect(panel.elements.map(e => e.name)).toStrictEqual(["saveMaskedValue", "preview"]);

  question.maskType = "datetime";
  expect(panel.elements.map(e => e.name)).toStrictEqual(["pattern", "min", "max", "saveMaskedValue", "preview"]);

  question.maskType = "currency";
  expect(panel.elements.map(e => e.name)).toStrictEqual([
    "currencySymbol",
    "currencyPattern",
    "min",
    "max",
    "precision",
    "decimalSeparator",
    "thousandsSeparator",
    "allowNegativeValues",
    "saveMaskedValue",
    "preview"]);
  //the obsolete affixes are views over the currency pattern and are not edited on their own
  expect(panel.getQuestionByName("prefix")).toBeNull();
  expect(panel.getQuestionByName("suffix")).toBeNull();

  question.maskType = "none";
  expect(panel.elements.map(e => e.name)).toStrictEqual(["saveMaskedValue", "preview"]);
});

test("Mask settings DateTime Min/max input types", () => {
  const question = new QuestionTextModel("q1");
  question.fromJSON({
    "maskType": "datetime",
    "maskSettings": {
      "pattern": "mm/dd/yyyy HH:MM"
    }
  });

  const propertyGrid = new PropertyGridModelTester(question);
  const masksettingsQuestion = (propertyGrid.survey.getQuestionByName("maskSettings"));
  expect(masksettingsQuestion).toBeTruthy();

  const panel = masksettingsQuestion.contentPanel;
  const patternQuestion = panel.getQuestionByName("pattern");
  const minQuestion = panel.getQuestionByName("min");
  const maxQuestion = panel.getQuestionByName("max");
  expect(patternQuestion.value).toBe("mm/dd/yyyy HH:MM");
  expect(minQuestion.inputType).toBe("datetime-local");
  expect(maxQuestion.inputType).toBe("datetime-local");

  patternQuestion.value = "mm/dd/yyyy";
  expect(minQuestion.inputType).toBe("date");
  expect(maxQuestion.inputType).toBe("date");

  patternQuestion.value = "HH:MM";
  expect(minQuestion.inputType).toBe("time");
  expect(maxQuestion.inputType).toBe("time");

  patternQuestion.value = "hh:MM tt";
  expect(minQuestion.inputType).toBe("time");
  expect(maxQuestion.inputType).toBe("time");
});

test("Currency mask: the pattern placeholder shows the resolved pattern with an example", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1", maskType: "currency" }] };
  const mask = <InputMaskCurrency>creator.survey.getQuestionByName("q1").maskSettings;
  const panel = selectQuestion(creator, "q1");
  const currencySymbol = <QuestionTextModel>panel.getQuestionByName("currencySymbol");
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  expect(currencyPattern.isEmpty()).toBeTruthy();
  expect(currencyPattern.placeholder).toEqual("@# ($1,234.56)");
  expect(currencyPattern.renderedPlaceholder).toEqual("@# ($1,234.56)");
  expect(currencyPattern.title).toEqual("Currency pattern");
  expect(currencyPattern.description).toEqual(editorLocalization.getString("pehelp.currencymask.currencyPattern"));

  //an authored symbol goes into the example
  currencySymbol.value = "US$";
  expect(mask.currencySymbol).toEqual("US$");
  expect(currencyPattern.placeholder).toEqual("@# (US$1,234.56)");
  //an empty symbol leaves the amount bare, as the mask renders it
  currencySymbol.value = "";
  expect(mask.currencySymbol).toEqual("");
  expect(currencyPattern.placeholder).toEqual("@# (1,234.56)");
  //the region moves the symbol and changes the separators; the bare amount has no trailing space
  creator.survey.regionalFormat.locale = "de";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", ""));
  expect(currencyPattern.placeholder).toEqual("# @ (1.234,56)");
  currencySymbol.value = "US$";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", "US$"));
  expect(currencyPattern.placeholder).toEqual("# @ (1.234,56 US$)");

  //an authored pattern is shown as the value
  currencyPattern.value = "@ -#";
  expect(mask.currencyPattern).toEqual("@ -#");
  expect(currencyPattern.value).toEqual("@ -#");
  expect(creator.survey.toJSON().pages[0].elements[0].maskSettings).toStrictEqual({ currencySymbol: "US$", currencyPattern: "@ -#" });
});

test("Currency mask: an old JSON with prefix and suffix is edited as a currency pattern", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1", maskType: "currency", maskSettings: { prefix: "$ ", suffix: " USD" } }] };
  const mask = <InputMaskCurrency>creator.survey.getQuestionByName("q1").maskSettings;
  const panel = selectQuestion(creator, "q1");
  const currencyPattern = <QuestionTextModel>panel.getQuestionByName("currencyPattern");
  expect(currencyPattern.value).toEqual("$ -# USD");

  currencyPattern.value = "$ -# US dollars";
  expect(mask.currencyPattern).toEqual("$ -# US dollars");
  const maskJSON = creator.survey.toJSON().pages[0].elements[0].maskSettings;
  expect(maskJSON).toStrictEqual({ currencyPattern: "$ -# US dollars" });
  expect(maskJSON.prefix).toBeUndefined();
});

test("Datetime mask: the pattern placeholder shows the resolved pattern", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1", maskType: "datetime" }] };
  const mask = <InputMaskDateTime>creator.survey.getQuestionByName("q1").maskSettings;
  const pattern = <QuestionTextModel>selectQuestion(creator, "q1").getQuestionByName("pattern");
  expect(pattern.isEmpty()).toBeTruthy();
  expect(pattern.placeholder).toEqual(mask.activePattern);
  expect(pattern.placeholder).toEqual("mm/dd/yyyy");
  expect(pattern.renderedPlaceholder).toEqual("mm/dd/yyyy");

  creator.survey.regionalFormat.locale = "de";
  expect(pattern.placeholder).toEqual("dd.mm.yyyy");

  pattern.value = "yyyy-mm-dd";
  expect(mask.pattern).toEqual("yyyy-mm-dd");
  expect(pattern.value).toEqual("yyyy-mm-dd");
  expect(pattern.placeholder).toEqual("yyyy-mm-dd");
  //clearing the pattern brings the resolved one back as the placeholder
  pattern.clearValue();
  expect(mask.pattern).toBeFalsy();
  expect(pattern.isEmpty()).toBeTruthy();
  expect(pattern.placeholder).toEqual("dd.mm.yyyy");
});

test("Mask pattern placeholders follow the survey locale and release the subscription with the property grid", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [
    { type: "text", name: "q1", maskType: "currency" },
    { type: "text", name: "q2", maskType: "datetime" }
  ] };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  const q1Handlers = q1.onNestedPropertyChanged.length;
  const currencyPattern = <QuestionTextModel>selectQuestion(creator, "q1").getQuestionByName("currencyPattern");
  expect(q1.onNestedPropertyChanged.length).toEqual(q1Handlers + 1);
  expect(currencyPattern.placeholder).toEqual("@# ($1,234.56)");
  creator.survey.locale = "de";
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", euro));

  const q2Handlers = q2.onNestedPropertyChanged.length;
  const datePattern = <QuestionTextModel>selectQuestion(creator, "q2").getQuestionByName("pattern");
  //selecting another element disposes the property grid of the previous one with its subscription
  expect(q1.onNestedPropertyChanged.length).toEqual(q1Handlers);
  expect(q2.onNestedPropertyChanged.length).toEqual(q2Handlers + 1);
  expect(datePattern.placeholder).toEqual("dd.mm.yyyy");
  creator.survey.locale = "";
  expect(datePattern.placeholder).toEqual("mm/dd/yyyy");
  //the editor of the disposed property grid is not updated any more
  expect(currencyPattern.placeholder).toEqual(getCurrencyPlaceholder("de", euro));

  //the regional format editor of the survey releases its survey subscription the same way
  const getRegionalFormatRegistrations = (): number =>
    (creator.survey["onPropChangeFunctions"] || []).filter(item => item.key === "regionalFormatPlaceholders").length;
  creator.selectElement(creator.survey);
  expect(creator.propertyGrid.getQuestionByName("regionalFormat")).toBeTruthy();
  expect(getRegionalFormatRegistrations()).toEqual(1);
  creator.selectElement(q1);
  expect(getRegionalFormatRegistrations()).toEqual(0);
  expect(q1.onNestedPropertyChanged.length).toEqual(q1Handlers + 1);
  expect(q2.onNestedPropertyChanged.length).toEqual(q2Handlers);
});

test("Undo/redo a currency pattern edited in the property grid", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1", maskType: "currency" }] };
  const mask = <InputMaskCurrency>creator.survey.getQuestionByName("q1").maskSettings;
  const currencyPattern = <QuestionTextModel>selectQuestion(creator, "q1").getQuestionByName("currencyPattern");
  currencyPattern.value = "@ #";
  expect(mask.currencyPattern).toEqual("@ #");
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();

  creator.undo();
  expect(mask.currencyPattern).toBeFalsy();
  expect(currencyPattern.isEmpty()).toBeTruthy();
  expect(currencyPattern.placeholder).toEqual("@# ($1,234.56)");
  expect(creator.survey.toJSON().pages[0].elements[0].maskSettings).toBeUndefined();
  creator.redo();
  expect(mask.currencyPattern).toEqual("@ #");
  expect(currencyPattern.value).toEqual("@ #");
  expect(creator.survey.toJSON().pages[0].elements[0].maskSettings).toStrictEqual({ currencyPattern: "@ #" });
});
