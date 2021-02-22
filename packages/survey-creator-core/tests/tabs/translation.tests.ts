import {
  SurveyModel,
  surveyLocalization,
  Base,
  QuestionDropdownModel,
} from "survey-knockout";
import {
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemBase,
} from "../../src/tabs/translation";

test("Fire callback on base objects creation", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p1");
  var q = survey.pages[0].addNewQuestion("text", "q1");
  q.title = "some value";
  var cretorHash = {};
  var translation = new Translation(survey, null, (obj: Base) => {
    var type = obj.getType();
    if (!cretorHash[type]) {
      cretorHash[type] = 0;
    }
    cretorHash[type] = cretorHash[type] + 1;
  });
  expect(cretorHash["translation"]).toEqual(1);
  expect(cretorHash["translationgroup"]).toEqual(5);
  expect(cretorHash["translationitem"]).toEqual(2);
  expect(cretorHash["translationitemstring"]).toBeFalsy();
  var group = translation.root.groups[0];
  expect(group.items).toHaveLength(1);
  expect(group.items[0].name).toEqual("q1");
  group = group.groups[0];
  expect(group.items[0].name).toEqual("title");
  var val = group.locItems[0].values("");
  expect(cretorHash["translationitemstring"]).toEqual(1);
});
test("create availableLocales question", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "checkbox",
            name: "question1",
            title: {
              default: "question 1",
              fr: "quéstion 1",
              it: "quéstion 1",
              es: "quéstion 1",
            },
            choices: ["item1", "item2", "item3"],
          },
        ],
      },
    ],
  });
  surveyLocalization.supportedLocales = ["fr", "de"];
  var translation = new Translation(survey);
  var availableLocalesQuestion = <QuestionDropdownModel>(
    translation.settingsSurvey.getQuestionByName("availableLocales")
  );
  expect(translation.settingsSurvey.getValue("selLocales")).toHaveLength(3);
  expect(availableLocalesQuestion.choices).toHaveLength(4);
  expect(availableLocalesQuestion.visibleChoices).toHaveLength(1);
  availableLocalesQuestion.value = "de";
  expect(availableLocalesQuestion.visibleChoices).toHaveLength(0);
  expect(translation.settingsSurvey.getValue("selLocales")).toHaveLength(4);
  surveyLocalization.supportedLocales = [];
});
test("create locales question", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "checkbox",
            name: "question1",
            title: {
              default: "question 1",
              fr: "quéstion 1",
              it: "quéstion 1",
              es: "quéstion 1",
            },
            choices: ["item1", "item2", "item3"],
          },
        ],
      },
    ],
  });
  surveyLocalization.supportedLocales = ["fr", "de"];
  var translation = new Translation(survey);
  var localesQuestion = <QuestionDropdownModel>(
    translation.settingsSurvey.getQuestionByName("locales")
  );
  expect(localesQuestion.choices).toHaveLength(4);
  var visChoices = localesQuestion.visibleChoices;
  expect(visChoices).toHaveLength(3);
  expect(visChoices[0].value).toEqual("fr");
  expect(visChoices[1].value).toEqual("it");
  expect(visChoices[2].value).toEqual("es");
  expect(localesQuestion.value).toHaveLength(3);
  expect(localesQuestion.value[0]).toEqual("fr");
  expect(localesQuestion.value[1]).toEqual("it");
  expect(localesQuestion.value[2]).toEqual("es");
  surveyLocalization.supportedLocales = [];
});
test("filteredPage question", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
        ],
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2",
          },
        ],
      },
    ],
  });
  var translation = new Translation(survey);
  var filteredPageQuestion = <QuestionDropdownModel>(
    translation.settingsSurvey.getQuestionByName("filteredPage")
  );
  expect(filteredPageQuestion.choices).toHaveLength(2);
  expect(filteredPageQuestion.value).toBeFalsy();
  filteredPageQuestion.value = "page1";
  expect(translation.filteredPage.name).toEqual("page1");
});
