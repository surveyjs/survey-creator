import { editorLocalization, defaultStrings } from "../src/editorLocalization";
import { CreatorTester } from "./creator-tester";
import { Action } from "survey-core";
export * from "../src/localization/italian";

test("Get nested property", () => {
  expect(editorLocalization.getString("qt.text")).toEqual("Single-Line Input");
  expect(editorLocalization.getString("qt.text1")).toEqual("text1");
  expect(editorLocalization.getString("qt1.text")).toEqual("text");
});
test("Get property name and title", () => {
  expect(editorLocalization.getPropertyName("text_name")).toEqual("Name");
  expect(editorLocalization.getPropertyTitle("text_name")).toEqual("");
  expect(editorLocalization.getPropertyName("text_title")).toEqual(defaultStrings.p.title.name);
  expect(editorLocalization.getPropertyTitle("text_title")).toEqual(defaultStrings.p.title.title);
});
test("Get property name from pe. based on class name", () => {
  const pe: any = defaultStrings.pe;
  pe.testProperty = "All";
  pe.testProperty2 = "All2";
  pe.survey = { testProperty: "Survey" };
  pe.question = { testProperty: "Question", testProperty2: "Question2", testProperty3: "Question3" };
  pe.text = { testProperty: "Text" };

  expect(editorLocalization.getPropertyNameInEditor("base", "testProperty")).toEqual("All");
  expect(editorLocalization.getPropertyNameInEditor("page", "testProperty")).toEqual("All");
  expect(editorLocalization.getPropertyNameInEditor("survey", "testProperty")).toEqual("Survey");
  expect(editorLocalization.getPropertyNameInEditor("question", "testProperty")).toEqual("Question");
  expect(editorLocalization.getPropertyNameInEditor("matrix", "testProperty")).toEqual("Question");
  expect(editorLocalization.getPropertyNameInEditor("text", "testProperty")).toEqual("Text");
  expect(editorLocalization.getPropertyNameInEditor("survey", "showTOC")).toEqual("Show TOC");

  expect(editorLocalization.getPropertyNameInEditor("base", "testProperty2")).toEqual("All2");
  expect(editorLocalization.getPropertyNameInEditor("page", "testProperty2")).toEqual("All2");
  expect(editorLocalization.getPropertyNameInEditor("survey", "testProperty2")).toEqual("All2");
  expect(editorLocalization.getPropertyNameInEditor("question", "testProperty2")).toEqual("Question2");
  expect(editorLocalization.getPropertyNameInEditor("matrix", "testProperty2")).toEqual("Question2");
  expect(editorLocalization.getPropertyNameInEditor("text", "testProperty2")).toEqual("Question2");
  expect(editorLocalization.getPropertyNameInEditor("matrix", "testProperty3")).toEqual("Question3");
  expect(editorLocalization.getPropertyNameInEditor("text", "testProperty3")).toEqual("Question3");
});
test("Get property description from peHelp. based on class name", () => {
  const peHelp: any = defaultStrings.pehelp;
  peHelp.testProperty = "Help_All";
  peHelp.testProperty2 = "Help_All2";
  peHelp.survey = { testProperty: "Help_Survey" };
  peHelp.question = { testProperty: "Help_Question", testProperty2: "Help_Question2", testProperty3: "Help_Question3" };
  peHelp.text = { testProperty: "Help_Text" };

  expect(editorLocalization.getPropertyHelpInEditor("base", "testProperty")).toEqual("Help_All");
  expect(editorLocalization.getPropertyHelpInEditor("page", "testProperty")).toEqual("Help_All");
  expect(editorLocalization.getPropertyHelpInEditor("survey", "testProperty")).toEqual("Help_Survey");
  expect(editorLocalization.getPropertyHelpInEditor("question", "testProperty")).toEqual("Help_Question");
  expect(editorLocalization.getPropertyHelpInEditor("matrix", "testProperty")).toEqual("Help_Question");
  expect(editorLocalization.getPropertyHelpInEditor("text", "testProperty")).toEqual("Help_Text");

  expect(editorLocalization.getPropertyHelpInEditor("base", "testProperty2")).toEqual("Help_All2");
  expect(editorLocalization.getPropertyHelpInEditor("page", "testProperty2")).toEqual("Help_All2");
  expect(editorLocalization.getPropertyHelpInEditor("survey", "testProperty2")).toEqual("Help_All2");
  expect(editorLocalization.getPropertyHelpInEditor("question", "testProperty2")).toEqual("Help_Question2");
  expect(editorLocalization.getPropertyHelpInEditor("matrix", "testProperty2")).toEqual("Help_Question2");
  expect(editorLocalization.getPropertyHelpInEditor("text", "testProperty2")).toEqual("Help_Question2");
  expect(editorLocalization.getPropertyHelpInEditor("matrix", "testProperty3")).toEqual("Help_Question3");
  expect(editorLocalization.getPropertyHelpInEditor("text", "testProperty3")).toEqual("Help_Question3");
  expect(editorLocalization.getPropertyHelpInEditor("text", "test", "expression")).toBeTruthy();
  expect(editorLocalization.getPropertyHelpInEditor("dropdown", "valueName", "string")).toBeTruthy();
  expect(editorLocalization.getPropertyHelpInEditor("choicesByUrl", "valueName", "string")).toBeFalsy();
});
test("Get value name from pv. based on property name", () => {
  const pv: any = defaultStrings.pv;
  pv.testValue = "All";
  pv.questionsOrder = { testValue: "Question" };
  expect(editorLocalization.getPropertyValueInEditor("questionsOrder", "testValue")).toEqual("Question");
  expect(editorLocalization.getPropertyValueInEditor("noQuestionOrder", "testValue")).toEqual("All");
});
test("getProperty function breaks on word automatically", () => {
  expect(editorLocalization.getProperty("someGoodProperty")).toEqual("Some good property");
  expect(editorLocalization.getPropertyName("title")).toEqual("Title");
  expect(editorLocalization.getPropertyName("title", "My title")).toEqual("My title");
  editorLocalization.camelCaseBreaking = false;
  expect(editorLocalization.getProperty("aGoodProperty")).toEqual("aGoodProperty");
  editorLocalization.camelCaseBreaking = true;
});
test("add de localization", () => {
  const deutschStrings = {
    p: {
      isRequired: "Wird benötigt",
    },
  };
  editorLocalization.locales["de"] = deutschStrings;
  editorLocalization.currentLocale = "de";
  expect(editorLocalization.getString("p.isRequired")).toEqual(deutschStrings.p.isRequired);
  expect(editorLocalization.getString("op.empty")).toEqual(defaultStrings.op.empty);
});
test("change default ('en') locale", () => {
  const enStrings = defaultStrings;
  enStrings.p.isRequired = "some new text";

  editorLocalization.locales["en"] = enStrings;
  editorLocalization.currentLocale = "en";

  expect(editorLocalization.getString("p.isRequired")).toEqual(enStrings.p.isRequired);
});

test("change string to empty string", () => {
  var enStrings = defaultStrings;
  var prevValue = enStrings.ed.newTextItemName;
  enStrings.ed.newTextItemName = "";

  expect(editorLocalization.getString("ed.newTextItemName")).toEqual("");
  enStrings.ed.newTextItemName = prevValue;
});

test("getPropertyNameInEditor", () => {
  expect(editorLocalization.getPropertyNameInEditor("rating", "rateMin")).toEqual("Minimum rate value");
  expect(editorLocalization.getPropertyNameInEditor("question", "someGoodProperty")).toEqual("Some good property");
  expect(editorLocalization.getPropertyNameInEditor("question", "title")).toEqual("Title");
});

test("getPropertyNameInEditor, go to p, if pe is emtpy", () => {
  var enStrings = defaultStrings;
  enStrings.p["isRequired2"] = "some new text";

  editorLocalization.locales["en"] = enStrings;
  editorLocalization.currentLocale = "en";

  expect(editorLocalization.getPropertyNameInEditor("question", "isRequired2")).toEqual("some new text");
});
test("getPropertyValue and convertToCamelCase", () => {
  expect(editorLocalization.getPropertyValue("progressTop")).toEqual("Panel navigator + Progress bar at the top");
  expect(editorLocalization.convertToCamelCase("onTop")).toEqual("On top");
  expect(editorLocalization.convertToCamelCase("USD")).toEqual("USD");
  expect(editorLocalization.convertToCamelCase("USD", true)).toEqual("USD");
  expect(editorLocalization.getPropertyValue("USD")).toEqual("USD");
});
test("getPropertyValue and spaces", () => {
  expect(editorLocalization.convertToCamelCase("Top")).toEqual("Top");
  expect(editorLocalization.convertToCamelCase("On top")).toEqual("On top");
  expect(editorLocalization.convertToCamelCase("On Top")).toEqual("On Top");
  expect(editorLocalization.convertToCamelCase("My First Option")).toEqual("My First Option");
  expect(editorLocalization.getPropertyValue("Another test")).toEqual("Another test");
  expect(editorLocalization.convertToCamelCase("showTOC")).toEqual("Show TOC");
});
test("Update innerItem on changign title", (): any => {
  const item: any = {
    id: "test",
    locTitleName: "ed.designer",
    locTooltipName: "ed.designer"
  };
  const action = new Action(item);
  expect(action.locTitle.text).toEqual("Designer");
  expect(action.title).toEqual("Designer");
  expect(action.tooltip).toEqual("Designer");
});
test("Change Creator locale property", (): any => {
  const deutschStrings: any = {
    ed: {
      logic: "Logik",
      saveSurvey: "Umfrage speichern"
    },
    pe: {
      title: "Titel",
    },
    qt: {
      text: "Text"
    }
  };
  editorLocalization.locales["de"] = deutschStrings;
  const creator = new CreatorTester({ showLogicTab: true, showTranslationTab: true });
  creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
  expect(creator.propertyGrid.getQuestionByName("title").title).toEqual("Title");
  const tabButton = creator.tabs.filter(item => item.title === "Logic")[0];
  const tabPreview = creator.tabs.filter(item => item.title === "Preview")[0];
  const textQuestion = creator.toolbox.actions.filter(item => item.title === "Single-Line Input")[0];
  const saveAction = creator.toolbar.actions.filter(item => item.title === "Save Survey")[0];
  expect(tabPreview).toBeTruthy();
  creator.locale = "de";
  expect(creator.propertyGrid.getQuestionByName("title").title).toEqual("Titel");
  expect(tabButton.title).toEqual("Logik");
  expect(textQuestion.title).toEqual("Text");
  expect(saveAction.locTitle.text).toEqual("Umfrage speichern");

  creator.locale = "";
  expect(creator.propertyGrid.getQuestionByName("title").title).toEqual("Title");
  expect(tabButton.title).toEqual("Logic");
  expect(textQuestion.title).toEqual("Single-Line Input");
  expect(saveAction.title).toEqual("Save Survey");
});
test("Check creator license localization", (): any => {
  const creator = new CreatorTester({});
  expect(creator.licenseText).toBe("PLEASE PURCHASE A DEVELOPER LICENSE TO BE ABLE TO USE SURVEY CREATOR IN YOUR APP");
});
test("getPropertyValue autoGenerate and boolean", () => {
  expect(editorLocalization.getPropertyValueInEditor("autoGenerate", true)).toEqual("Generate");
  expect(editorLocalization.getPropertyValueInEditor("autoGenerate", false)).toEqual("Enter manually");
  const deutschStrings: any = {
    pv: {
      autoGenerate: {
        "true": "Generieren",
        "false": "Manuell Eintragen"
      }
    }
  };
  editorLocalization.locales["de"] = deutschStrings;
  editorLocalization.currentLocale = "de";
  expect(editorLocalization.getPropertyValueInEditor("autoGenerate", true)).toEqual("Generieren");
  expect(editorLocalization.getPropertyValueInEditor("autoGenerate", false)).toEqual("Manuell Eintragen");
  editorLocalization.currentLocale = "";
});
test("it and it-custom translation", () => {
  const customStrings: any = {
    qt: {
      checkbox: "Checkbox-it-custom"
    }
  };
  editorLocalization.locales["it-custom"] = customStrings;
  editorLocalization.currentLocale = "it-custom";
  expect(editorLocalization.getString("qt.checkbox")).toEqual("Checkbox-it-custom");
  expect(editorLocalization.getString("qt.text")).toEqual("Testo semplice");
  editorLocalization.currentLocale = "";
});
