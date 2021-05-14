import {
  SurveyModel,
  Question,
  QuestionTextModel,
  QuestionCheckboxModel,
  surveyLocalization,
  SurveyTriggerComplete,
  RegexValidator,
  QuestionMatrixDropdownModel,
  QuestionMultipleTextModel,
  Serializer
} from "survey-core";
import {
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemString
} from "../../src/components/tabs/translation";
import { parse } from "papaparse";
import { settings } from "../../src/settings";

test("Text question localization properties", () => {
  const question: QuestionTextModel = new QuestionTextModel("q1");
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  expect(group.items.length >= 4).toBeTruthy();
});
test("Text question choices localization", () => {
  const question: QuestionCheckboxModel = new QuestionCheckboxModel("q1");
  question.choices = ["item1", { value: "item2", text: "text 2" }];
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  let choices: TranslationGroup = null;
  for (let i = 0; i < group.groups.length; i++) {
    if (group.groups[i].name == "choices") {
      choices = group.groups[i];
      break;
    }
  }
  expect(choices).toBeTruthy();
  expect(choices.items).toHaveLength(2);
  expect(choices.items[0].name).toEqual("item1");
  expect(choices.items[1].name).toEqual("item2");
});
test("Survey child groups", () => {
  const survey: SurveyModel = new SurveyModel();
  const translation: Translation = new Translation(survey);
  const root: TranslationGroup = new TranslationGroup(
    "root",
    survey,
    translation
  );
  expect(root.groups).toHaveLength(0);
  survey.addNewPage("p1");
  const q: Question = survey.pages[0].addNewQuestion("text", "q1");
  q.title = "some value";
  root.reset();
  expect(root.groups).toHaveLength(1);
  expect(root.items).toHaveLength(1);
  expect(root.groups[0].obj.getType()).toEqual("page");
  expect(root.groups[0].expanded).toBeTruthy();
  expect(root.groups[0].showHeader).toBeFalsy();
  root.reset();
  expect(root.groups).toHaveLength(1);
  expect(root.groups[0].groups).toHaveLength(1);
  expect(root.groups[0].groups[0].expanded).toBeTruthy();
  expect(root.groups[0].groups[0].showHeader).toBeTruthy();
});
test("Survey child groups, #2", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("p1");
  const question: QuestionTextModel = <QuestionTextModel>(
    survey.pages[0].addNewQuestion("text", "q1")
  );
  const translation: Translation = new Translation(survey);
  translation.showAllStrings = true;
  expect(translation.localesQuestion.value).toHaveLength(0);
  expect(translation.locales).toHaveLength(1);
  question.locTitle.setLocaleText("de", "Deutch text");
  translation.reset();
  expect(translation.locales).toHaveLength(2);
  translation.addLocale("fr");
  translation.addLocale("de");
  expect(translation.locales).toHaveLength(3);
});
test("get locales", () => {
  const survey: SurveyModel = new SurveyModel({
    title: { default: "t1", de: "dfdfdf" },
    description: "text1"
  });
  const translation: Translation = new Translation(survey);
  translation.showAllStrings = true;
  expect(translation.locales).toHaveLength(2);
});
test("Localization strings editing", () => {
  const question: QuestionTextModel = new QuestionTextModel("q1");
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  const item: TranslationItem = <TranslationItem>group.items[1];
  question[item.name] = "textEn";
  const valEnglish: TranslationItemString = item.values("");
  const valFrench: TranslationItemString = item.values("fr");
  expect(valEnglish.text).toEqual("textEn");
  expect(valFrench.text).toEqual("");
  valEnglish.text = "textEnUpdated";
  valFrench.text = "textFranceNew";
  expect(question[item.name]).toEqual("textEnUpdated");
  expect(item.locString.getLocaleText("fr")).toEqual("textFranceNew");
});
test("Translation for adding", () => {
  const translation: Translation = new Translation(new SurveyModel());
  translation.showAllStrings = true;
  const locales: any = surveyLocalization.locales;
  const count: number = Object.keys(locales).length;
  expect(translation.getSurveyLocales()[0]).toHaveLength(count);
  translation.addLocale("de");
  expect(translation.locales).toHaveLength(2);
  translation.addLocale("fr");
  expect(translation.locales).toHaveLength(3);
  expect(translation.locales[2]).toEqual("fr");
});
test("Do not reset locales on reset", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("page1");
  survey.pages[0].addNewQuestion("checkbox", "question1");
  const translation: Translation = new Translation(survey);
  translation.addLocale("fr");
  translation.addLocale("de");
  expect(translation.locales).toHaveLength(3);
  translation.reset();
  expect(translation.locales).toHaveLength(3);
});
test("get/set the selected locales", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("page1");
  survey.pages[0].addNewQuestion("checkbox", "question1");
  const translation: Translation = new Translation(survey);
  translation.addLocale("fr");
  translation.addLocale("de");
  translation.addLocale("it");
  translation.setSelectedLocales(null);
  expect(translation.getSelectedLocales()).toHaveLength(0);
  translation.localesQuestion.value = ["fr", "it"];
  expect(translation.getSelectedLocales()).toHaveLength(2);
  expect(translation.getSelectedLocales()[0]).toEqual("fr");
  translation.setSelectedLocales(["de", "it"]);
  expect(translation.getSelectedLocales()).toHaveLength(2);
  expect(translation.getSelectedLocales()[0]).toEqual("de");
  expect(translation.localesQuestion.value).toHaveLength(2);
});
test("disable locales", () => {
  const survey: SurveyModel = new SurveyModel({
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
              es: "quéstion 1"
            },
            choices: ["item1", "item2", "item3"]
          }
        ]
      }
    ]
  });
  surveyLocalization.supportedLocales = ["", "fr"];
  const translation: Translation = new Translation(survey);
  const locales: string[] = translation.locales;
  expect(locales).toHaveLength(4);
  expect(translation.localesQuestion.choices).toHaveLength(3);
  expect(translation.localesQuestion.value).toHaveLength(3);
  surveyLocalization.supportedLocales = [];
});
test("get/set the selected locales with inactive translation tab", () => {
  const survey: SurveyModel = new SurveyModel({
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "t", de: "de_t", fr: "fr_t", it: "it_d" }
      }
    ]
  });
  const translation: Translation = new Translation(survey);
  translation.setSelectedLocales(["de", "it"]);
  expect(translation.getSelectedLocales()).toHaveLength(2);
  expect(translation.getSelectedLocales()).toContain("de");
  expect(translation.getSelectedLocales()).toContain("it");
});
test("Translation show All strings", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.completedHtml = "Test";
  survey.addNewPage("page1");
  survey.pages[0].title = "title1";
  survey.pages[0].addNewQuestion("checkbox", "question1");
  const translation: Translation = new Translation(survey);
  expect(translation.root.locItems).toHaveLength(1);
  expect(translation.root.groups).toHaveLength(1);
  const pageGroup: TranslationGroup = translation.root.groups[0];
  expect(pageGroup.groups).toHaveLength(1);
  expect(pageGroup.locItems).toHaveLength(1);
  const questionGroup: TranslationGroup = pageGroup.groups[0];
  expect(questionGroup.groups).toHaveLength(1);
  expect(questionGroup.locItems).toHaveLength(1);
});

test("Do not add group if there is no items in it.", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.triggers.push(new SurveyTriggerComplete());
  const translation: Translation = new Translation(survey);
  expect(translation.root.groups).toHaveLength(0);
});
test("Question validators name", () => {
  const question: QuestionTextModel = new QuestionTextModel("q1");
  question.validators.push(new RegexValidator(""));
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  expect(group.groups[0].name).toEqual("validators[0]");
});

test("Default locale name", () => {
  let survey: SurveyModel = new SurveyModel();
  const translation: Translation = new Translation(survey);
  expect(translation.getLocaleName("")).toEqual("Default (english)");
  surveyLocalization.defaultLocale = "de";
  survey = new SurveyModel();
  survey.locale = "de";
  translation.survey = survey;
  expect(translation.getLocaleName("")).toEqual("Default (deutsch)");
  surveyLocalization.defaultLocale = "en";
});

test("Add properties for columns", () => {
  const question: QuestionMatrixDropdownModel = new QuestionMatrixDropdownModel(
    "q1"
  );
  question.addColumn("col1");
  question.columns[0]["choices"] = ["1", "2"];
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  const column0Group: TranslationGroup = group.groups[0];
  expect(column0Group.groups).toHaveLength(1);
});

test("Do not allow translate choices with numbers", () => {
  const question: QuestionMatrixDropdownModel = new QuestionMatrixDropdownModel(
    "q1"
  );
  question.choices = [1, 2, 3];
  const translation: Translation = new Translation(new SurveyModel());
  const group: TranslationGroup = new TranslationGroup(
    question.name,
    question,
    translation
  );
  expect(group.groups).toHaveLength(0);
});
test("Filter by Page", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("Page 1");
  survey.pages[0].title = "title1";
  survey.addNewPage("Page 2");
  survey.pages[1].title = "title2";
  const translation: Translation = new Translation(survey);
  expect(translation.root.groups).toHaveLength(2);
  translation.filteredPage = survey.pages[0];
  expect(translation.root.obj.name).toEqual("Page 1");
  expect(translation.root.groups).toHaveLength(0);
  translation.filteredPage = survey.pages[1];
  expect(translation.root.obj.name).toEqual("Page 2");
  translation.filteredPage = null;
  expect(translation.root.groups).toHaveLength(2);
});
test("MultipleText question", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("Page 1");
  const question: QuestionMultipleTextModel = new QuestionMultipleTextModel(
    "q1"
  );
  question.addItem("i1", "item 1");
  question.addItem("i2", "item 2");
  survey.pages[0].addQuestion(question);
  const translation: Translation = new Translation(survey);
  translation.filteredPage = survey.pages[0];
  const qGroup: TranslationGroup = translation.root.groups[0];
  expect(qGroup).toBeTruthy();
  expect(qGroup.groups).toHaveLength(2);
  expect(qGroup.groups[0].items[0].name).toEqual("title");
});
test("Import from array", () => {
  let survey = new SurveyModel({
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
  const translation: Translation = new Translation(survey);

  translation.importFromNestedArray([
    ["description ↓ - language →", "default", "de"],
    ["survey.page1.question1.title", "question1_1", ""],
    ["survey.page1.question1.col1.title", "col1 en1", "col1 de1"]
  ]);
  let question = <QuestionMatrixDropdownModel>(
    survey.getQuestionByName("question1")
  );
  let column = question.columns[0];
  expect(question.title).toEqual("question1_1");
  expect(column.title).toEqual("col1 en1");
  expect(column.locTitle.getLocaleText("")).toEqual("col1 en1");
  expect(column.locTitle.getLocaleText("de")).toEqual("col1 de1");
});

test("Export to array", () => {
  const survey: SurveyModel = new SurveyModel({
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
  const translation: Translation = new Translation(survey);
  let exported;
  parse(translation.exportToCSV(), {
    complete: function (results, file) {
      exported = results.data;
    }
  });

  expect(exported).toHaveLength(7);
  expect(exported[0]).toEqual(["description ↓ - language →", "default", "de"]);
  expect(exported[1]).toEqual([
    "survey.page1.question1.title",
    "question1",
    ""
  ]);
});
test("Merging a locale with default", () => {
  surveyLocalization.defaultLocale = "de";
  const survey: SurveyModel = new SurveyModel({
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
  const translation: Translation = new Translation(survey);
  expect(translation.locales).toHaveLength(3);
  expect(translation.locales).toContain("de");
  expect(translation.canMergeLocaleWithDefault).toBeTruthy();
  expect(translation.mergeLocaleWithDefaultText).toEqual(
    "Merge deutsch with default locale"
  );
  translation.mergeLocaleWithDefault();
  expect(translation.locales).toHaveLength(2);
  expect(translation.canMergeLocaleWithDefault).toBeFalsy();
  expect(translation.mergeLocaleWithDefaultText).toEqual("");
  translation.addLocale("de");
  expect(translation.canMergeLocaleWithDefault).toBeTruthy();
  surveyLocalization.defaultLocale = "en";
});
test("Custom localizable property in question", () => {
  Serializer.addProperty("question", {
    name: "customProp",
    isLocalizable: true
  });
  const question: QuestionTextModel = new QuestionTextModel("q1");
  question["customProp"] = "some text";
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  const titleItem: TranslationItem = <TranslationItem>(
    group.getItemByName("title")
  );
  const customPropItem: TranslationItem = <TranslationItem>(
    group.getItemByName("customProp")
  );
  expect(titleItem).toBeTruthy();
  expect(customPropItem).toBeTruthy();
  expect(customPropItem.name).toEqual("customProp");
  Serializer.removeProperty("question", "customProp");
});
test("Custom localizable property in itemvalue", () => {
  Serializer.addProperty("itemvalue", {
    name: "customProp",
    isLocalizable: true
  });
  const question: QuestionCheckboxModel = new QuestionCheckboxModel("q1");
  question.choices = ["1", "2"];
  question.choices[0].text = "text";
  question.choices[1].text = "text 2";
  question.choices[1].customProp = "some text";
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  const choicesGroup: TranslationGroup = <TranslationGroup>(
    group.getItemByName("choices")
  );
  expect(choicesGroup).toBeTruthy();
  expect(choicesGroup.isGroup).toBeTruthy();
  expect(choicesGroup.items).toHaveLength(4);
  expect(choicesGroup.items[0].name).toEqual("1");
  expect(choicesGroup.items[1].name).toEqual("1.customProp");
  expect(choicesGroup.items[2].name).toEqual("2");
  expect(choicesGroup.items[3].name).toEqual("2.customProp");
  Serializer.removeProperty("itemvalue", "customProp");
});

test("Add pages as a custom property, it should not produce the error, Bug#991", () => {
  Serializer.addProperty("page", {
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
    isSerializable: false
  });
  const survey: SurveyModel = new SurveyModel({
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
  const translation: Translation = new Translation(survey);
  expect(translation.locales).toHaveLength(3);
  Serializer.removeProperty("page", "pages");
});
test("Show questions as they are in survey. Do not sort them", () => {
  const survey: SurveyModel = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question2"
      },
      {
        type: "text",
        name: "question1",
        title: {
          default: "title",
          de: "title de"
        }
      }
    ]
  });
  let translation: Translation = new Translation(survey);
  expect(translation.root.groups).toHaveLength(1);
  let group: TranslationGroup = translation.root.groups[0];
  expect(group.items).toHaveLength(2);
  expect(group.items[0].name).toEqual("question1");
  expect(group.items[1].name).toEqual("question2");
  settings.traslation.sortByName = false;
  translation = new Translation(survey);
  group = translation.root.groups[0];
  expect(group.items[0].name).toEqual("question2");
  expect(group.items[1].name).toEqual("question1");
  settings.traslation.sortByName = true;
});
test("Localize the group and item text", () => {
  const question: QuestionCheckboxModel = new QuestionCheckboxModel("q1");
  question.choices = ["item1", { value: "item2", text: "text 2" }];
  const group: TranslationGroup = new TranslationGroup(question.name, question);
  let choices: TranslationGroup = null;
  for (let i = 0; i < group.groups.length; i++) {
    if (group.groups[i].name == "choices") {
      choices = group.groups[i];
      break;
    }
  }
  expect(choices);
  expect(choices.text).toEqual("Choices");
});
test("Two new functions: expandAll(), collapseAll()", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.pages[0].addNewQuestion("text", "q1");
  survey.pages[0].addNewQuestion("text", "q2");
  survey.pages[1].addNewQuestion("text", "q3");
  survey.pages[1].addNewQuestion("text", "q4");
  const translation: Translation = new Translation(survey);
  const root: TranslationGroup = translation.root;
  expect(root.groups).toHaveLength(2);
  expect(root.groups[0].expanded).toBeFalsy();
  expect(root.groups[1].expanded).toBeFalsy();
  translation.expandAll();
  expect(root.groups[0].expanded).toBeTruthy();
  expect(root.groups[1].expanded).toBeTruthy();
  expect(root.groups[0].groups[0].expanded).toBeTruthy();
  translation.collapseAll();
  expect(root.isRoot).toBeTruthy();
  expect(root.expanded).toBeTruthy();
  expect(root.groups[0].expanded).toBeFalsy();
  expect(root.groups[1].expanded).toBeFalsy();
  expect(root.groups[0].groups[0].expanded).toBeFalsy();
});
test("check LocalizableStrings/dataList property", () => {
  const survey: SurveyModel = new SurveyModel();
  survey.addNewPage("page1");
  const q1: QuestionTextModel = <QuestionTextModel>(
    survey.pages[0].addNewQuestion("text", "q1")
  );
  q1.dataList = ["en1", "en2"];
  const translation: Translation = new Translation(survey);
  const root: TranslationGroup = translation.root;
  expect(root.groups).toHaveLength(1);
  const q1G: TranslationGroup = root.groups[0].groups[0];
  const item: TranslationItem = <TranslationItem>q1G.items.filter((item) => {
    if (item.name == "dataList") return item;
  })[0];
  expect(item);
  expect(item.name).toEqual("dataList");
  expect(item.values("").text).toEqual("en1\nen2");
});
