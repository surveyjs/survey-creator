import { PanelModel, QuestionDropdownModel, QuestionTextModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";
import { editorLocalization } from "../../src/editorLocalization";

export * from "../../src/property-grid/region-options";

function getRegionOptionsPanel(propertyGrid: PropertyGridModelTester): PanelModel {
  const question = propertyGrid.survey.getQuestionByName("regionOptions");
  expect(question).toBeTruthy();
  return <PanelModel>question["contentPanel"];
}

test("Region options are shown in their own category", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const categoryPanel = <PanelModel>propertyGrid.survey.getPanelByName("regionOptions");
  expect(categoryPanel).toBeTruthy();
  expect(categoryPanel.title).toEqual("Regional Formats");
  expect(categoryPanel.elements.map(el => el.name)).toStrictEqual(["regionOptions"]);

  const panel = getRegionOptionsPanel(propertyGrid);
  expect(panel.elements.map(el => el.name)).toStrictEqual([
    "locale",
    "datePattern",
    "timePattern",
    "decimalSeparator",
    "thousandsSeparator",
    "currencyPattern"
  ]);
});

test("Region locale choices are localized on the Creator level", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const localeQuestion = <QuestionDropdownModel>getRegionOptionsPanel(propertyGrid).getQuestionByName("locale");
  expect(localeQuestion.getType()).toEqual("dropdown");
  expect(localeQuestion.placeholder).toEqual("Same as survey language");

  const getText = (value: string): string => localeQuestion.choices.filter(item => item.value === value)[0].text;
  expect(getText("en")).toEqual("English");
  expect(getText("en-gb")).toEqual("English (United Kingdom)");
  expect(getText("pt-br")).toEqual("Portuguese (Brazil)");
  expect(getText("de")).toEqual("German");
  //the list is sorted by the localized name
  expect(localeQuestion.choices[0].text).toEqual("Arabic");
});

test("Edit region options in the property grid", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionOptionsPanel(propertyGrid);
  panel.getQuestionByName("locale").value = "de";
  panel.getQuestionByName("datePattern").value = "yyyy-mm-dd";

  expect(survey.regionOptions.locale).toEqual("de");
  expect(survey.regionOptions.datePattern).toEqual("yyyy-mm-dd");
  expect(survey.getFormatLocale()).toEqual("de");
  expect(survey.toJSON().regionOptions).toStrictEqual({ locale: "de", datePattern: "yyyy-mm-dd" });
});

test("Load region options from JSON into the property grid", () => {
  const survey = new SurveyModel({ regionOptions: { locale: "fr", thousandsSeparator: "." } });
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionOptionsPanel(propertyGrid);
  expect(panel.getQuestionByName("locale").value).toEqual("fr");
  expect(panel.getQuestionByName("thousandsSeparator").value).toEqual(".");
  expect(panel.getQuestionByName("datePattern").value).toBeFalsy();
});

test("Show the inherited format as a placeholder", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionOptionsPanel(propertyGrid);
  const datePattern = <QuestionTextModel>panel.getQuestionByName("datePattern");
  const decimalSeparator = <QuestionTextModel>panel.getQuestionByName("decimalSeparator");
  expect(datePattern.placeholder).toEqual("mm/dd/yyyy");
  expect(decimalSeparator.placeholder).toEqual(".");

  panel.getQuestionByName("locale").value = "de";
  expect(datePattern.placeholder).toEqual("dd.mm.yyyy");
  expect(decimalSeparator.placeholder).toEqual(",");
});

test("Update the placeholders on changing the survey locale", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const datePattern = <QuestionTextModel>getRegionOptionsPanel(propertyGrid).getQuestionByName("datePattern");
  expect(datePattern.placeholder).toEqual("mm/dd/yyyy");

  survey.locale = "fr";
  expect(datePattern.placeholder).toEqual("dd/mm/yyyy");
  //the region wins over the survey locale
  getRegionOptionsPanel(propertyGrid).getQuestionByName("locale").value = "sv";
  expect(datePattern.placeholder).toEqual("yyyy-mm-dd");
  survey.locale = "";
  expect(datePattern.placeholder).toEqual("yyyy-mm-dd");
});

test("Undo/redo a region option change", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.survey.regionOptions.locale = "de";
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  creator.undo();
  expect(creator.survey.regionOptions.locale).toBeFalsy();
  creator.redo();
  expect(creator.survey.regionOptions.locale).toEqual("de");
});

test("Region options property names and descriptions", () => {
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const panel = getRegionOptionsPanel(propertyGrid);
  expect(panel.getQuestionByName("locale").title).toEqual("Region");
  expect(panel.getQuestionByName("currencyPattern").title).toEqual("Currency pattern");
  expect(panel.getQuestionByName("locale").description)
    .toEqual(editorLocalization.getString("pehelp.regionoptions.locale"));
});
