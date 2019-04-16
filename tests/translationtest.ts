import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  TranslationGroup,
  TranslationItem,
  Translation
} from "../src/translation";
import { equal } from "assert";

export default QUnit.module("TranslatonTests");

QUnit.test("Text question localization properties", function (assert) {
  var question = new Survey.QuestionText("q1");
  var group = new TranslationGroup(question.name, question);
  assert.ok(
    group.items.length >= 4,
    "There are four or more localization strings"
  );
});
QUnit.test("Text question choices localization", function (assert) {
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = ["item1", { value: "item2", text: "text 2" }];
  var group = new TranslationGroup(question.name, question);
  var choices: TranslationGroup = null;
  for (var i = 0; i < group.groups.length; i++) {
    if (group.groups[i].name == "choices") {
      choices = group.groups[i];
      break;
    }
  }
  assert.ok(choices, "choices has been created as group");
  assert.equal(choices.items.length, 2, "There are two items");
  assert.equal(
    choices.items[0].name,
    "item1",
    "Value is set correctly for item 1"
  );
  assert.equal(
    choices.items[1].name,
    "item2",
    "Value is set correctly for item 2"
  );
});
QUnit.test("Survey child groups", function(assert) {
  var survey = new Survey.Survey();
  var group = new TranslationGroup("root", survey);
  assert.equal(group.groups.length, 0, "There is no any group yet");
  survey.addNewPage("p1");
  group.reset();
  assert.equal(group.groups.length, 1, "one page is added");
  assert.equal(group.groups[0].groups.length, 0, "no questions");
  survey.pages[0].addNewQuestion("text", "q1");
  group.reset();
  assert.equal(group.groups.length, 1, "questions should not be there");
  assert.equal(group.groups[0].groups.length, 1, "page has one question");
});
QUnit.test("Survey child groups", function(assert) {
  var survey = new Survey.Survey();
  var group = new TranslationGroup("root", survey);
  survey.addNewPage("p1");
  var question = <Survey.QuestionText>(
    survey.pages[0].addNewQuestion("text", "q1")
  );
  var translation = new Translation(survey, true);
  assert.equal(translation.locales.length, 1, "There is only default locale");
  question.locTitle.setLocaleText("de", "Deutch text");
  translation.reset();
  assert.equal(translation.locales.length, 2, "There are two locales now");
  translation.addLocale("fr");
  translation.addLocale("de");
  assert.equal(translation.locales.length, 3, "There are three locales now");
});
QUnit.test("get locales", function(assert) {
  var survey = new Survey.Survey({
    title: { default: "t1", de: "dfdfdf" },
    description: "text1"
  });
  var translation = new Translation(survey, true);
  assert.equal(
    translation.locales.length,
    2,
    "There are two locales only, 'default'/empty and 'de'"
  );
});
QUnit.test("Localization strings editing", function(assert) {
  var question = new Survey.QuestionText("q1");
  var group = new TranslationGroup(question.name, question, <any>{});
  var item = <TranslationItem>group.items[0];
  question[item.name] = "textEn";
  var valEnglish = item.koValue("");
  var valFrench = item.koValue("fr");
  assert.equal(valEnglish(), "textEn", "The value was set");
  assert.equal(valFrench(), "", "The value was not set");
  valEnglish("textEnUpdated");
  valFrench("textFranceNew");
  assert.equal(
    question[item.name],
    "textEnUpdated",
    "The english value has been updated"
  );
  assert.equal(
    item.locString.getLocaleText("fr"),
    "textFranceNew",
    "The french value has been updated"
  );
});
QUnit.test("Translation for adding", function(assert) {
  var translation = new Translation(new Survey.Survey(), true);
  var locales = Survey.surveyLocalization.locales;
  var count = 0;
  for (var key in locales) count++;
  assert.equal(
    translation.koAvailableLanguages().length,
    count - 1,
    "All locales - 1"
  );
  translation.addLocale("de");
  assert.equal(
    translation.koAvailableLanguages().length,
    count - 2,
    "All locales - 2"
  );
  assert.equal(translation.locales.length, 2, "There are two locales");
  assert.equal(
    translation.koSelectedLanguageToAdd(),
    null,
    "No language selected"
  );
  translation.koSelectedLanguageToAdd({ value: "fr", text: "French" });
  assert.equal(translation.locales.length, 3, "There are three locales");
  assert.equal(translation.locales[2], "fr", "The last added locale is 'fr'");
  assert.equal(
    translation.koSelectedLanguageToAdd(),
    null,
    "No language selected again"
  );
});
QUnit.test("Do not reset locales on reset", function(assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("page1");
  survey.pages[0].addNewQuestion("checkbox", "question1");
  var translation = new Translation(survey);
  translation.addLocale("fr");
  translation.addLocale("de");
  assert.equal(translation.koLocales().length, 3, "There are 3 locations");
  translation.reset();
  assert.equal(
    translation.koLocales().length,
    3,
    "There are still 3 locations"
  );
});
QUnit.test("Translation show All strings", function(assert) {
  var survey = new Survey.Survey();
  survey.completedHtml = "Test";
  survey.addNewPage("page1");
  survey.pages[0].title = "title1";
  survey.pages[0].addNewQuestion("checkbox", "question1");
  var translation = new Translation(survey);
  assert.equal(
    translation.root.locItems.length,
    1,
    "There is one item to translate - completedHtml"
  );
  assert.equal(translation.root.groups.length, 1, "There is one group - page");
  var pageGroup = translation.root.groups[0];
  assert.equal(pageGroup.groups.length, 1, "There is one group - question");
  assert.equal(pageGroup.locItems.length, 1, "There is one item - title");
  var questionGroup = pageGroup.groups[0];
  assert.equal(questionGroup.groups.length, 1, "There is one group - choices");
  assert.equal(questionGroup.locItems.length, 1, "There is one item - title");
});
QUnit.test("Do not add group if there is no items in it.", function(assert) {
  var survey = new Survey.Survey();
  survey.triggers.push(new Survey.SurveyTriggerComplete());
  var translation = new Translation(survey);
  assert.equal(
    translation.root.groups.length,
    0,
    "There should not be groups in this empty survey"
  );
});
QUnit.test("Question validators name", function(assert) {
  var question = new Survey.QuestionText("q1");
  question.validators.push(new Survey.RegexValidator(""));
  var group = new TranslationGroup(question.name, question);
  assert.equal(
    group.groups[0].name,
    "validators[0]",
    "use property name + indexes"
  );
});
QUnit.test("Default locale name", function(assert) {
  var survey = new Survey.Survey();
  var translation = new Translation(survey);
  assert.equal(
    translation.getLocaleName(""),
    "Default (english)",
    "Default is english"
  );
  survey = new Survey.Survey();
  survey.locale = "de";
  translation.survey = survey;
  assert.equal(
    translation.getLocaleName(""),
    "Default (deutsch)",
    "Default is deutsch now"
  );
});
QUnit.test("Add properties for columns", function(assert) {
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.addColumn("col1");
  question.columns[0]["choices"] = ["1", "2"];
  var group = new TranslationGroup(question.name, question);
  var column0Group = group.groups[0];
  assert.equal(column0Group.groups.length, 1, "choices should be here");
});
QUnit.test("Do not allow translate choices with numbers", function(assert) {
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.choices = [1, 2, 3];
  var translation = new Translation(new Survey.Survey());
  var group = new TranslationGroup(question.name, question, translation);
  assert.equal(group.groups.length, 0, "There is no groups in empty question");
});
QUnit.test("Filter by Page", function(assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("Page 1");
  survey.pages[0].title = "title1";
  survey.addNewPage("Page 2");
  survey.pages[1].title = "title2";
  var translation = new Translation(survey);
  assert.equal(translation.root.groups.length, 2, "There are two pages");
  translation.filteredPage = <Survey.Page>survey.pages[0];
  assert.equal(translation.root.obj.name, "Page 1", "The root is page 1");
  assert.equal(translation.root.groups.length, 0, "It doesn't have groups");
  translation.filteredPage = <Survey.Page>survey.pages[1];
  assert.equal(translation.root.obj.name, "Page 2", "The root is page 2");
  translation.filteredPage = null;
  assert.equal(
    translation.root.groups.length,
    2,
    "There are two pages - survey is the root"
  );
});
QUnit.test("MultipleText question", function(assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("Page 1");
  var question = new Survey.QuestionMultipleText("q1");
  question.addItem("i1", "item 1");
  question.addItem("i2", "item 2");
  survey.pages[0].addQuestion(question);
  var translation = new Translation(survey);
  translation.filteredPage = <Survey.Page>survey.pages[0];
  var qGroup = translation.root.groups[0];
  assert.ok(qGroup, "question group is here");
  assert.equal(qGroup.groups.length, 2, "There are 2 groups");
  assert.equal(qGroup.groups[0].items[0].name, "title", "It is item title");
});
QUnit.test("Export to csv", function(assert) {
  var survey = new Survey.Survey({
    elements: [
      {
        type: "matrixdropdown",
        name: "question1",
        columns: [
          {
            name: "col1",
            title: {
              default: "col1 en",
              de: "col1 de"
            },
            cellType: "dropdown",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: {
                  default: "item en",
                  de: "item de"
                }
              }
            ]
          },
          {
            name: "col2"
          },
          {
            name: "col3"
          }
        ],
        choices: [1, 2, 3, 4, 5],
        rows: [
          {
            value: "item1",
            text: {
              default: "Row 1",
              de: "Row 1-de"
            }
          }
        ]
      }
    ]
  });
  var translation = new Translation(survey);
  var str = translation.exportToCSV();
  var strs = str.split("\n");
  assert.equal(
    strs.length,
    7,
    "locales+question.title+3 column+column choice+ one row"
  );
  assert.equal(strs[0], "|default|de", "check locale line");
  assert.equal(
    strs[1],
    "survey.page1.question1.title|question1|",
    "use default value"
  );
  var translatedStr =
    "|default|de\n" +
    "survey.page1.question1.title|question1_1|\n" +
    "survey.page1.question1.col1.title|col1 en1|col1 de1";
  translation.importFromCSV(translatedStr);
  var question = <Survey.QuestionMatrixDropdown>(
    survey.getQuestionByName("question1")
  );
  assert.equal(question.title, "question1_1", "title has been changed");
  assert.equal(
    question.columns[0].locTitle.getLocaleText(""),
    "col1 en1",
    "default text in column title has been changed"
  );
  assert.equal(
    question.columns[0].locTitle.getLocaleText("de"),
    "col1 de1",
    "de text in column title has been changed"
  );
});

QUnit.test("Merging a locale with default", function(assert) {
  var survey = new Survey.Survey({
    locale: "de",
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          de: "title de",
          fr: "title fr"
        }
      },
      {
        type: "text",
        name: "question2",
        title: {
          default: "title default",
          de: "title de",
          fr: "title fr"
        }
      },
      {
        type: "text",
        name: "question3",
        title: {
          default: "title default",
          fr: "title fr"
        }
      }
    ]
  });
  var translation = new Translation(survey);
  assert.equal(translation.locales.length, 3, "There are 3 locales");
  assert.equal(
    translation.koCanMergeLocaleWithDefault(),
    true,
    "Locale can be merged"
  );
  assert.equal(
    translation.koMergeLocaleWithDefaultText(),
    "Merge deutsch with default locale",
    "merge text is not empty"
  );
  translation.mergeLocaleWithDefault();
  assert.equal(translation.locales.length, 2, "There are 2 locales now");
  assert.equal(
    translation.koCanMergeLocaleWithDefault(),
    false,
    "Locale can not be merged"
  );
  assert.equal(
    translation.koMergeLocaleWithDefaultText(),
    "",
    "merge text is empty"
  );
  translation.addLocale("de");
  assert.equal(
    translation.koCanMergeLocaleWithDefault(),
    true,
    "Locale can be merged again"
  );
});
