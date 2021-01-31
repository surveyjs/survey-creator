import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  TranslationGroup,
  TranslationItem,
  Translation,
} from "../src/tabs/translation";
import { SurveyCreator } from "../src/editor";
import { unparse, parse } from "papaparse";
import { settings } from "../src/settings";
import { editorLocalization } from "../src/editorLocalization";

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
QUnit.test("Survey child groups", function (assert) {
  var survey = new Survey.Survey();
  var translation = new Translation(survey);
  var root = new TranslationGroup("root", survey, translation);
  assert.equal(root.groups.length, 0, "There is no any group yet");
  survey.addNewPage("p1");
  var q = survey.pages[0].addNewQuestion("text", "q1");
  q.title = "some value";
  root.reset();
  assert.equal(root.groups.length, 1, "one page is added, one group");
  assert.equal(root.items.length, 1, "one page is added, one item");
  assert.equal(root.groups[0].obj.getType(), "page", "The group is page");
  assert.equal(
    root.groups[0].koExpanded(),
    true,
    "The only item in root, page, should be expanded by default"
  );
  assert.equal(
    root.groups[0].koShowHeader(),
    false,
    "We can hide header for the only page"
  );
  root.reset();
  assert.equal(root.groups.length, 1, "questions should not be there");
  assert.equal(root.groups[0].groups.length, 1, "page has one question");
  assert.equal(
    root.groups[0].groups[0].koExpanded(),
    true,
    "The only item in root, question, should be expanded by default"
  );
  assert.equal(
    root.groups[0].groups[0].koShowHeader(),
    true,
    "We can hide header for page only"
  );
});
QUnit.test("Survey child groups", function (assert) {
  var survey = new Survey.Survey();
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
QUnit.test("get locales", function (assert) {
  var survey = new Survey.Survey({
    title: { default: "t1", de: "dfdfdf" },
    description: "text1",
  });
  var translation = new Translation(survey, true);
  assert.equal(
    translation.locales.length,
    2,
    "There are two locales only, 'default'/empty and 'de'"
  );
});
QUnit.test("Localization strings editing", function (assert) {
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
QUnit.test("Translation for adding", function (assert) {
  var translation = new Translation(new Survey.Survey(), true);
  var locales = Survey.surveyLocalization.locales;
  var count = 0;
  for (var key in locales) count++;
  assert.equal(translation.koAvailableLanguages().length, count, "All locales");
  translation.addLocale("de");
  assert.equal(
    translation.koAvailableLanguages().length,
    count - 1,
    "All locales - 1"
  );
  assert.equal(translation.locales.length, 2, "There are two locales");
  assert.equal(
    translation.koSelectedLanguageToAdd(),
    null,
    "No language selected"
  );
  translation.koSelectedLanguageToAdd("fr");
  assert.equal(translation.locales.length, 3, "There are three locales");
  assert.equal(translation.locales[2], "fr", "The last added locale is 'fr'");
  assert.equal(
    translation.koSelectedLanguageToAdd(),
    null,
    "No language selected again"
  );
});
QUnit.test("Do not reset locales on reset", function (assert) {
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
QUnit.test("get/set the selected locales", function (assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("page1");
  survey.pages[0].addNewQuestion("checkbox", "question1");
  var translation = new Translation(survey);
  translation.addLocale("fr");
  translation.addLocale("de");
  translation.addLocale("it");
  translation.setSelectedLocales(null);
  assert.deepEqual(
    translation.getSelectedLocales(),
    [],
    "There is no selected locales"
  );
  translation.koLocales()[1].koVisible(true);
  translation.koLocales()[3].koVisible(true);
  assert.deepEqual(
    translation.getSelectedLocales(),
    ["fr", "it"],
    "There are two selected locales now"
  );
  translation.setSelectedLocales(["de", "it"]);
  assert.deepEqual(
    translation.getSelectedLocales(),
    ["de", "it"],
    "There are two different selected locales now"
  );
  assert.equal(
    translation.koLocales()[1].koVisible(),
    false,
    "'fr' is not selected"
  );
  assert.equal(
    translation.koLocales()[2].koVisible(),
    true,
    "'de' is selected"
  );
  assert.equal(
    translation.koLocales()[3].koVisible(),
    true,
    "'it' is selected"
  );
});
QUnit.test("disable locales", function (assert) {
  var survey = new Survey.Survey({
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
  Survey.surveyLocalization.supportedLocales = ["", "fr"];
  var translation = new Translation(survey);
  var locales = translation.koLocales();
  assert.equal(locales.length, 4, "There are 3 locales");
  assert.equal(locales[1].koEnabled(), true, "fr is enabled");
  assert.equal(locales[2].koEnabled(), false, "it is disabled");
  assert.equal(locales[1].koVisible(), true, "fr is visible");
  assert.equal(locales[2].koVisible(), false, "it is invisible");
  Survey.surveyLocalization.supportedLocales = [];
});
QUnit.test(
  "get/set the selected locales with inactive translation tab",
  function (assert) {
    var creator = new SurveyCreator();
    creator.JSON = {
      questions: [
        {
          type: "text",
          name: "q1",
          title: { default: "t", de: "de_t", fr: "fr_t", it: "it_d" },
        },
      ],
    };
    creator.translation = new Translation(creator.survey);
    creator.translation.setSelectedLocales(["de", "it"]);
    assert.deepEqual(
      creator.translation.getSelectedLocales(),
      ["de", "it"],
      "Works without selected toolbox"
    );
  }
);
QUnit.test("Translation show All strings", function (assert) {
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
QUnit.test("Do not add group if there is no items in it.", function (assert) {
  var survey = new Survey.Survey();
  survey.triggers.push(new Survey.SurveyTriggerComplete());
  var translation = new Translation(survey);
  assert.equal(
    translation.root.groups.length,
    0,
    "There should not be groups in this empty survey"
  );
});
QUnit.test("Question validators name", function (assert) {
  var question = new Survey.QuestionText("q1");
  question.validators.push(new Survey.RegexValidator(""));
  var group = new TranslationGroup(question.name, question);
  assert.equal(
    group.groups[0].name,
    "validators[0]",
    "use property name + indexes"
  );
});
QUnit.test("Default locale name", function (assert) {
  var survey = new Survey.Survey();
  var translation = new Translation(survey);
  assert.equal(
    translation.getLocaleName(""),
    "Default (english)",
    "Default is english"
  );
  Survey.surveyLocalization.defaultLocale = "de";
  survey = new Survey.Survey();
  survey.locale = "de";
  translation.survey = survey;
  assert.equal(
    translation.getLocaleName(""),
    "Default (deutsch)",
    "Default is deutsch now"
  );
  Survey.surveyLocalization.defaultLocale = "en";
});
QUnit.test("Add properties for columns", function (assert) {
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.addColumn("col1");
  question.columns[0]["choices"] = ["1", "2"];
  var group = new TranslationGroup(question.name, question);
  var column0Group = group.groups[0];
  assert.equal(column0Group.groups.length, 1, "choices should be here");
});
QUnit.test("Do not allow translate choices with numbers", function (assert) {
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.choices = [1, 2, 3];
  var translation = new Translation(new Survey.Survey());
  var group = new TranslationGroup(question.name, question, translation);
  assert.equal(group.groups.length, 0, "There is no groups in empty question");
});
QUnit.test("Filter by Page", function (assert) {
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
QUnit.test("MultipleText question", function (assert) {
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
QUnit.test("Import from array", function (assert) {
  let survey = new Survey.Survey({
    elements: [
      {
        type: "matrixdropdown",
        name: "question1",
        columns: [
          {
            name: "col1",
            title: {
              default: "col1 en",
              de: "col1 de",
            },
            cellType: "dropdown",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: {
                  default: "item en",
                  de: "item de",
                },
              },
            ],
          },
          {
            name: "col2",
          },
          {
            name: "col3",
          },
        ],
        choices: [1, 2, 3, 4, 5],
        rows: [
          {
            value: "item1",
            text: {
              default: "Row 1",
              de: "Row 1-de",
            },
          },
        ],
      },
    ],
  });
  let translation = new Translation(survey);

  translation.importFromNestedArray([
    ["description ↓ - language →", "default", "de"],
    ["survey.page1.question1.title", "question1_1", ""],
    ["survey.page1.question1.col1.title", "col1 en1", "col1 de1"],
  ]);
  let question = <Survey.QuestionMatrixDropdown>(
    survey.getQuestionByName("question1")
  );
  let column = <Survey.MatrixDropdownColumn>question.columns[0];
  assert.equal(question.title, "question1_1", "title has been changed");
  assert.equal(column.title, "col1 en1");
  assert.equal(
    column.locTitle.getLocaleText(""),
    "col1 en1",
    "default text in column title has been changed"
  );
  assert.equal(
    column.locTitle.getLocaleText("de"),
    "col1 de1",
    "de text in column title has been changed"
  );
});

QUnit.test("Export to array", function (assert) {
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
              de: "col1 de",
            },
            cellType: "dropdown",
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: {
                  default: "item en",
                  de: "item de",
                },
              },
            ],
          },
          {
            name: "col2",
          },
          {
            name: "col3",
          },
        ],
        choices: [1, 2, 3, 4, 5],
        rows: [
          {
            value: "item1",
            text: {
              default: "Row 1",
              de: "Row 1-de",
            },
          },
        ],
      },
    ],
  });
  var translation = new Translation(survey);
  let exported;
  parse(translation.exportToCSV(), {
    complete: function (results, file) {
      exported = results.data;
    },
  });

  assert.equal(
    exported.length,
    7,
    "locales+question.title+3 column+column choice+ one row"
  );
  assert.deepEqual(
    exported[0],
    ["description ↓ - language →", "default", "de"],
    "check locale line"
  );
  assert.deepEqual(
    exported[1],
    ["survey.page1.question1.title", "question1", ""],
    "use default value"
  );
});
QUnit.test("Merging a locale with default", function (assert) {
  Survey.surveyLocalization.defaultLocale = "de";
  var survey = new Survey.Survey({
    locale: "de",
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          de: "title de",
          fr: "title fr",
        },
      },
      {
        type: "text",
        name: "question2",
        title: {
          default: "title default",
          de: "title de",
          fr: "title fr",
        },
      },
      {
        type: "text",
        name: "question3",
        title: {
          default: "title default",
          fr: "title fr",
        },
      },
    ],
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
  Survey.surveyLocalization.defaultLocale = "en";
});
QUnit.test("Custom localizable property in question", function (assert) {
  Survey.Serializer.addProperty("question", {
    name: "customProp",
    isLocalizable: true,
  });
  var question = new Survey.QuestionText("q1");
  question["customProp"] = "some text";
  var group = new TranslationGroup(question.name, question, <any>{});
  var titleItem = <TranslationItem>group.getItemByName("title");
  var customPropItem = <TranslationItem>group.getItemByName("customProp");
  assert.ok(titleItem, "Title Item is here");
  assert.ok(customPropItem, "customPropItem Item is here");
  assert.equal(customPropItem.name, "customProp", "name is correct");
  Survey.Serializer.removeProperty("question", "customProp");
});

QUnit.test("Custom localizable property in itemvalue", function (assert) {
  Survey.Serializer.addProperty("itemvalue", {
    name: "customProp",
    isLocalizable: true,
  });
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = ["1", "2"];
  question.choices[0].text = "text";
  question.choices[1].text = "text 2";
  question.choices[1].customProp = "some text";
  var group = new TranslationGroup(question.name, question, <any>{});
  var choicesGroup = <TranslationGroup>group.getItemByName("choices");
  assert.ok(choicesGroup, "Choices is here");
  assert.equal(choicesGroup.isGroup, true, "It is a group");
  assert.equal(choicesGroup.items.length, 3, "There are three items");
  assert.equal(choicesGroup.items[0].name, "1", "The first item is text");
  assert.equal(choicesGroup.items[1].name, "2", "The second item is text");
  assert.equal(
    choicesGroup.items[2].name,
    "2.customProp",
    "The third item is customProp"
  );
  Survey.Serializer.removeProperty("itemvalue", "customProp");
});

QUnit.test(
  "Add pages as a custom property, it should not produce the error, Bug#991",
  function (assert) {
    Survey.Serializer.addProperty("page", {
      name: "pages:surveypages",
      className: "page",
      category: "general",
      displayName: "Page order",
      onGetValue: function (obj) {
        return !!obj && !!obj.survey ? obj.survey.pages : [];
      },
      onSetValue: function (obj) {
        //Do nothing
      },
      isSerializable: false,
    });
    var survey = new Survey.Survey({
      locale: "de",
      elements: [
        {
          type: "text",
          name: "question1",
          title: {
            de: "title de",
            fr: "title fr",
          },
        },
        {
          type: "text",
          name: "question2",
          title: {
            default: "title default",
            de: "title de",
            fr: "title fr",
          },
        },
        {
          type: "text",
          name: "question3",
          title: {
            default: "title default",
            fr: "title fr",
          },
        },
      ],
    });
    var translation = new Translation(survey);
    assert.equal(translation.locales.length, 3, "There are 3 locales");
    Survey.Serializer.removeProperty("page", "pages");
  }
);

QUnit.test(
  "Show questions as they are in survey. Do not sort them",
  function (assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          type: "text",
          name: "question2",
        },
        {
          type: "text",
          name: "question1",
          title: {
            default: "title",
            de: "title de",
          },
        },
      ],
    });
    var translation = new Translation(survey);
    assert.equal(translation.root.groups.length, 1, "There is one page");
    var group = translation.root.groups[0];
    assert.equal(group.items.length, 2, "There are two items");
    assert.equal(group.items[0].name, "question1", "first is question1");
    assert.equal(group.items[1].name, "question2", "second is question2");
    settings.traslation.sortByName = false;
    translation = new Translation(survey);
    group = translation.root.groups[0];
    assert.equal(group.items[0].name, "question2", "first is question2");
    assert.equal(group.items[1].name, "question1", "second is question1");
  }
);
QUnit.test("Localize the group and item text", function (assert) {
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
  assert.equal(choices.text, "Choices", "Use the localized name");
});
QUnit.test("Two new functions: expandAll(), collapseAll()", function (assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.pages[0].addNewQuestion("text", "q1");
  survey.pages[0].addNewQuestion("text", "q2");
  survey.pages[1].addNewQuestion("text", "q3");
  survey.pages[1].addNewQuestion("text", "q4");
  var translation = new Translation(survey);
  var root = translation.root;
  assert.equal(root.groups.length, 2, "There is are two groups");
  assert.equal(
    root.groups[0].koExpanded(),
    false,
    "The first group is not expanded"
  );
  assert.equal(
    root.groups[1].koExpanded(),
    false,
    "The second group is not expanded"
  );
  translation.expandAll();
  assert.equal(
    root.groups[0].koExpanded(),
    true,
    "The first group is expanded"
  );
  assert.equal(
    root.groups[1].koExpanded(),
    true,
    "The second group is expanded"
  );
  assert.equal(
    root.groups[0].groups[0].koExpanded(),
    true,
    "The q1 group is expanded as well"
  );
  translation.collapseAll();
  assert.equal(root.isRoot, true, "Root has isRoot setup");
  assert.equal(root.koExpanded(), true, "keep root expanded");
  assert.equal(
    root.groups[0].koExpanded(),
    false,
    "The first group is collapse"
  );
  assert.equal(
    root.groups[1].koExpanded(),
    false,
    "The second group is collapse"
  );
  assert.equal(
    root.groups[0].groups[0].koExpanded(),
    false,
    "The q1 group  is collapse as well"
  );
});
