import { Serializer, SurveyModel, surveyLocalization, Base, QuestionDropdownModel, PanelModel, QuestionMatrixDropdownModel, QuestionTextModel, QuestionCommentModel, ListModel, Action, IAction, ItemValue, QuestionMatrixDynamicModel } from "survey-core";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { settings } from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";
import { parse } from "papaparse";
import "survey-core/survey.i18n";
import { editorLocalization } from "../../src/editorLocalization";
export * from "../../src/localization/russian";

test("Fire callback on base objects creation", () => {
  const survey = new SurveyModel();
  survey.addNewPage("p1");
  const q = survey.pages[0].addNewQuestion("text", "q1");
  q.title = "some value";
  const cretorHash = {};
  const translation = new Translation(survey, null);
  translation.reset();
  translation.makeObservable((obj: Base) => {
    const type = obj.getType();
    if (!cretorHash[type]) {
      cretorHash[type] = 0;
    }
    cretorHash[type] = cretorHash[type] + 1;
  });
  expect(cretorHash["translation"]).toEqual(1);
  expect(cretorHash["translationgroup"]).toEqual(3);
  expect(cretorHash["translationitem"]).toEqual(1);
  expect(cretorHash["translationitemstring"]).toBeFalsy();
  let group = translation.root.groups[0];
  expect(group.items).toHaveLength(1);
  expect(group.items[0].name).toEqual("q1");
  group = group.groups[0];
  expect(group.items[0].name).toEqual("title");
  const val = group.locItems[0].values("");
  expect(cretorHash["translationitemstring"]).toEqual(1);
});

test("settingsSurvey layout", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "Question 1"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  expect(translation.settingsSurvey.getAllPanels()).toHaveLength(0);
  expect(translation.settingsSurvey.getAllQuestions()).toHaveLength(1);
  const question = <QuestionMatrixDynamicModel>translation.settingsSurvey.getQuestionByName("locales");
  expect(question.title).toBe("Languages");
  expect(question.showHeader).toBeFalsy();
  expect(question.allowAddRows).toBeFalsy();
});

test("create available locales", () => {
  const survey = new SurveyModel({
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
  surveyLocalization.supportedLocales = ["fr", "de"];
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.getSelectedLocales()).toHaveLength(3);
  expect(translation.getSurveyLocales()[0]).toHaveLength(4);
  translation.addLocale("de");
  expect(translation.getSelectedLocales()).toHaveLength(4);
  surveyLocalization.supportedLocales = [];
});
test("create locales question", () => {
  const survey = new SurveyModel({
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
  surveyLocalization.supportedLocales = ["fr", "de"];
  const translation = new Translation(survey);
  translation.reset();
  const localesQuestion = <QuestionDropdownModel>(
    translation.settingsSurvey.getQuestionByName("locales")
  );
  expect(translation.locales).toHaveLength(4);
  const visChoices = translation.getVisibleLocales();
  expect(visChoices).toHaveLength(3);
  expect(visChoices[0]).toEqual("fr");
  expect(visChoices[1]).toEqual("it");
  expect(visChoices[2]).toEqual("es");
  surveyLocalization.supportedLocales = [];
});

test("stringsSurvey - one question in survey", () => {
  const survey = new SurveyModel({
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
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.name).toEqual("page1");
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("page1_question1_props0");
  expect(question1Props.titleLocation).toEqual("hidden");
  expect(question1Props.columns).toHaveLength(4);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[0].title).toEqual("Default (English)");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  expect(question1Props.rows[0].text).toEqual("Title");
  const choicesPanel = <PanelModel>question1.elements[1];
  expect(choicesPanel.elements.length).toBe(3);
  const choicesProps1 = <QuestionMatrixDropdownModel>choicesPanel.elements[0];
  expect(choicesProps1.name).toEqual("question1_choices0");
  expect(choicesProps1.columns).toHaveLength(4);
  expect(choicesProps1.columns[0].name).toEqual("default");
  expect(choicesProps1.columns[0].title).toEqual("Default (English)");
  expect(choicesProps1.columns[1].name).toEqual("fr");
  expect(choicesProps1.columns[1].title).toEqual("Français");
  expect(choicesProps1.rows).toHaveLength(1);
  expect(choicesProps1.rows[0].value).toEqual("item1");
  expect(choicesProps1.rows[0].text).toEqual("Item 1");
  const choicesProps2 = <QuestionMatrixDropdownModel>choicesPanel.elements[2];
  expect(choicesProps2.rows).toHaveLength(1);
  expect(choicesProps2.rows[0].value).toEqual("item3");
  expect(choicesProps2.rows[0].text).toEqual("Item 3");
  expect(question1Props.value).toEqual({
    title: {
      default: "question 1",
      fr: "quéstion 1",
      it: "quéstion 1",
      es: "quéstion 1"
    }
  });
  expect(question1Props.visibleRows[0].cells[1].question.getType()).toEqual("comment");
  expect(question1Props.visibleRows[0].cells[1].question.value).toEqual("quéstion 1");
  const translationItem: TranslationItem = question1Props.rows[0]["translationData"];
  expect(translationItem.getLocText("fr")).toEqual("quéstion 1");
  question1Props.visibleRows[0].cells[1].question.value = "changed fr";
  expect(translationItem.getLocText("fr")).toEqual("changed fr");
});

test("stringsSurvey - check properties text, should use pe. from localization instead of p.", () => {
  const testLocale = editorLocalization.getLocale("test_locale");
  testLocale.pe.rating = {
    title: "test rating title"
  };
  testLocale.pe.minRateDescription = "test rating min description";
  editorLocalization.currentLocale = "test_locale";
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "rating",
            "name": "nps_score",
            "minRateDescription": "(Most unlikely)",
          },
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[0];
  const question = <PanelModel>pagePanel.elements[0];
  const question1Props = <QuestionMatrixDropdownModel>question.elements[0];
  expect(question1Props.rows[0].text).toEqual("test rating title");
  const question2Props = <QuestionMatrixDropdownModel>question.elements[1];
  expect(question2Props.rows[0].text).toEqual("test rating min description");
  editorLocalization.currentLocale = "";
});

test("Add/remove columns on adding/removing locales", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  const matrix = <QuestionMatrixDropdownModel>(
    translation.stringsSurvey.getAllQuestions()[0]
  );
  expect(matrix.columns).toHaveLength(1);
  translation.addLocale("de");
  expect(matrix.columns).toHaveLength(2);
});
test("stringsSurvey and filterPage", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "Question 1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2",
            title: "Question 2"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.getAllQuestions()).toHaveLength(2);
  translation.filteredPage = survey.pages[0];
  expect(translation.stringsSurvey.getAllQuestions()).toHaveLength(1);
});
test("stringsSurvey and filterPage + one page", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "Question 1"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.getAllQuestions()).toHaveLength(1);
  translation.filteredPage = survey.pages[0];
  expect(translation.stringsSurvey.getAllQuestions()).toHaveLength(1);
});
test("Translation show All strings and property visibility", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    completedHtml: "Test",
    pages: [
      {
        title: "title1",
        elements: [{ type: "checkbox", name: "question1" }]
      }
    ]
  };
  creator.onShowingProperty.add((sender, options) => {
    options.canShow = options.property.name == "title";
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;
  translation.reset();
  expect(translation.root.locItems).toHaveLength(1);
  translation.showAllStrings = true;
  expect(translation.root.locItems).toHaveLength(2);
});
test("Translation make translation observable", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    completedHtml: "Test",
    pages: [
      {
        title: "title1",
        elements: [{ type: "checkbox", name: "question1" }]
      }
    ]
  };
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;
  translation.makeObservable((obj: Base) => {
    obj["tag"] = "Hello!";
  });
  expect(translation["tag"]).toEqual("Hello!");
  expect(translation.root.locItems[0]["tag"]).toEqual("Hello!");
  expect(translation.root.locItems[0].values("en")["tag"]).toEqual("Hello!");
});
test("Translation update filterPageActiontitle after activated", () => {
  let creator = new CreatorTester();
  creator.JSON = {
    completedHtml: "Test",
    pages: [
      {
        name: "page1",
        elements: [{ type: "checkbox", name: "question1" }]
      },
    ]
  };
  const tabTranslationPlugin = new TabTranslationPlugin(creator);
  const filterPageAction = tabTranslationPlugin["filterPageAction"];
  const filterPageList = <ListModel>(filterPageAction.data);
  tabTranslationPlugin.activate();
  expect(filterPageAction.title).toEqual("All Pages");
  expect(filterPageList.selectedItem.title).toEqual("All Pages");
  tabTranslationPlugin.model.filteredPage = creator.survey.pages[0];
  expect(filterPageAction.title).toEqual("page1");

  tabTranslationPlugin.deactivate();
  tabTranslationPlugin.activate();
  expect(filterPageAction.title).toEqual("All Pages");
  expect(filterPageList.selectedItem.title).toEqual("All Pages");
});
test("Translation update filterStringsAction after activated", () => {
  let creator = new CreatorTester();
  creator.JSON = {
    completedHtml: "Test",
    pages: [
      {
        name: "page1",
        elements: [{ type: "checkbox", name: "question1" }]
      },
    ]
  };
  const tabTranslationPlugin = new TabTranslationPlugin(creator);
  const filterStringsAction = tabTranslationPlugin["filterStringsAction"];
  const filterStringsList = <ListModel>filterStringsAction.data;
  tabTranslationPlugin.activate();
  expect(filterStringsAction.title).toEqual("Used Strings Only");
  expect(filterStringsList.selectedItem.title).toEqual("Used Strings Only");
  tabTranslationPlugin.model.showAllStrings = true;
  expect(filterStringsAction.title).toEqual("All Strings");

  tabTranslationPlugin.deactivate();
  tabTranslationPlugin.activate();

  expect(filterStringsAction.title).toEqual("Used Strings Only");
  expect(filterStringsList.selectedItem.title).toEqual("Used Strings Only");
});
test("Translation filterPage action content and visiblity after activate", () => {
  let creator = new CreatorTester();
  creator.JSON = {
    completedHtml: "Test",
    pages: [
      {
        name: "page1",
        title: "page1",
        elements: [{ type: "checkbox", name: "question1" }]
      },
      {
        name: "page2",
        title: "page2",
        elements: [{ type: "checkbox", name: "question1" }]
      }
    ]
  };
  const tabTranslationPlugin = new TabTranslationPlugin(creator);
  const filterPageAction = <Action>tabTranslationPlugin["filterPageAction"];
  const pageList = <ListModel>filterPageAction.data;
  tabTranslationPlugin.activate();
  expect(pageList.actions.map((action: Action) => action.title)).toEqual(["All Pages", "page1", "page2"]);
  expect(filterPageAction.visible).toBeTruthy();
  tabTranslationPlugin.deactivate();
  creator.survey.removePage(creator.survey.getPageByName("page2"));
  tabTranslationPlugin.activate();
  expect(pageList.actions.map((action: Action) => action.title)).toEqual(["All Pages", "page1"]);
  expect(filterPageAction.visible).toBeFalsy();
});

test("StringsHeaderSurvey layout", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  const stringsMatrix = <QuestionMatrixDropdownModel>(translation.stringsSurvey.getAllQuestions()[0]);
  const headerMatrix = <QuestionMatrixDropdownModel>(translation.stringsHeaderSurvey.getAllQuestions()[0]);
  expect(stringsMatrix.columns).toHaveLength(1);

  expect(headerMatrix.columns).toHaveLength(1);

  translation.addLocale("de");
  expect(stringsMatrix.columns).toHaveLength(2);

  expect(headerMatrix.columns).toHaveLength(2);
});

test("Actions mode small", () => {
  const creator = new CreatorTester();
  const tabTranslation = new TabTranslationPlugin(creator);
  const actions = tabTranslation.createActions();
  expect(actions.length).toBe(5);
  expect(actions[0].mode).toBe("small");
  expect(actions[1].mode).toBe("small");
  expect(actions[2].mode).toBe("small");
  expect(actions[3].mode).toBe("small");
  expect(actions[4].mode).toBe("small");
});

test("Make invisible locales in language selector, that has been already choosen", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  surveyLocalization.supportedLocales = ["en", "fr", "de", "se"];
  const translation = new Translation(survey);
  const list = translation["addLanguageAction"].data;
  expect(translation.chooseLanguageActions).toHaveLength(4);
  expect(translation.chooseLanguageActions[0].id).toEqual("en");
  expect(translation.chooseLanguageActions[1].id).toEqual("fr");
  expect(translation.chooseLanguageActions[0].visible).toBeFalsy();
  expect(list.actions[0].visible).toBeFalsy();
  expect(translation.chooseLanguageActions[1].visible).toBeTruthy();
  expect(list.actions[1].visible).toBeTruthy();
  translation.addLocale("fr");
  expect(translation.chooseLanguageActions[1].visible).toBeFalsy();
  expect(list.actions[1].visible).toBeFalsy();
  surveyLocalization.supportedLocales = [];
});
test("Make invisible locales in language selector, that has been already choosen", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: {
              default: "Question 1",
              "de": "Question 1, de"
            }
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  surveyLocalization.supportedLocales = ["en", "fr", "de"];
  const translation = new Translation(survey);
  translation.reset();
  const locales = translation.locales;
  expect(locales).toHaveLength(2);
  expect(locales[0]).toEqual("");
  expect(locales[1]).toEqual("de");
  const langList = translation.chooseLanguageActions;
  expect(langList).toHaveLength(3);
  expect(langList[0].id).toEqual("en");
  expect(langList[1].id).toEqual("fr");
  expect(langList[2].id).toEqual("de");
  expect(langList[0].visible).toBeFalsy();
  expect(langList[1].visible).toBeTruthy();
  expect(langList[2].visible).toBeFalsy();
});

test("Make add language button disabled if there are no options", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  surveyLocalization.supportedLocales = ["en"];
  let translation = new Translation(survey);
  expect(translation["isChooseLanguageEnabled"]).toEqual(false);
  surveyLocalization.supportedLocales = ["fr", "de", "se"];
  translation = new Translation(survey);
  expect(translation["isChooseLanguageEnabled"]).toEqual(true);
  translation.addLocale("fr");
  expect(translation["isChooseLanguageEnabled"]).toEqual(true);
  translation.addLocale("de");
  expect(translation["isChooseLanguageEnabled"]).toEqual(true);
  translation.addLocale("se");
  expect(translation["isChooseLanguageEnabled"]).toEqual(false);
  surveyLocalization.supportedLocales = [];
});

test("stringsSurvey - text question dataList property, default", () => {
  const oldValue = settings.translation.sortByName;
  settings.translation.sortByName = true;
  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
        dataList: {
          default: ["Item1", "Item2"],
        }
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("page1_question1_props0");
  expect(question1Props.columns).toHaveLength(1);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("dataList");
  const cellQuestion = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  expect(cellQuestion.acceptCarriageReturn).toBeTruthy();
  expect(cellQuestion.value).toEqual("Item1\nItem2");
  cellQuestion.value = "Item1\nItem2\nItem3";
  const question = <QuestionTextModel>survey.getAllQuestions()[0];
  expect(question.dataList).toHaveLength(3);
  expect(question.dataList[2]).toEqual("Item3");

  settings.translation.sortByName = oldValue;
});
test("stringsSurvey - use question's name instead of question's title in title of translation group", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
        title: "Question 1"
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[0];
  const panel = pagePanel.elements[0];
  expect(panel.name).toEqual("question1");
  expect(panel.title).toEqual("question1");
});
test("stringsSurvey - text question dataList property, several locales", () => {
  const oldValue = settings.translation.sortByName;
  settings.translation.sortByName = true;

  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
        dataList: {
          default: ["Item1", "Item2"],
          de: ["Item1-de", "Item2-de"],
        }
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[0];
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("de");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("dataList");
  const cellQuestionDefault = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  expect(cellQuestionDefault.acceptCarriageReturn).toBeTruthy();
  expect(cellQuestionDefault.value).toEqual("Item1\nItem2");
  const cellQuestionDe = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestionDe.acceptCarriageReturn).toBeTruthy();
  expect(cellQuestionDe.value).toEqual("Item1-de\nItem2-de");
  cellQuestionDe.value = "Item1-de\nItem2-de\nItem3-de";
  const textQuestion = <QuestionTextModel>survey.getAllQuestions()[0];
  expect(textQuestion.locDataList.getJson()).toEqual({
    default: ["Item1", "Item2"],
    de: ["Item1-de", "Item2-de", "Item3-de"],
  });

  settings.translation.sortByName = oldValue;
});
test("Respect property maxLength attrigute in stringsSurvey comment questions", () => {
  Serializer.findProperty("question", "title").maxLength = 10;
  Serializer.findProperty("page", "title").maxLength = 20;
  Serializer.findProperty("survey", "title").maxLength = 30;
  const survey = new SurveyModel({
    title: "Survey title",
    pages: [
      {
        title: "Page title",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "Question title"
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[1];
  const questionPanel = <PanelModel>pagePanel.elements[1];
  const surveyProps = <QuestionMatrixDropdownModel>page.elements[0];
  const pageProps = <QuestionMatrixDropdownModel>pagePanel.elements[0];
  const questionProps = <QuestionMatrixDropdownModel>questionPanel.elements[0];
  expect((<QuestionCommentModel>surveyProps.visibleRows[0].cells[0].question).maxLength).toEqual(30);
  expect((<QuestionCommentModel>pageProps.visibleRows[0].cells[0].question).maxLength).toEqual(20);
  expect((<QuestionCommentModel>questionProps.visibleRows[0].cells[0].question).maxLength).toEqual(10);

  Serializer.findProperty("question", "title").maxLength = -1;
  Serializer.findProperty("page", "title").maxLength = -1;
  Serializer.findProperty("survey", "title").maxLength = -1;
});

const surveyJson = {
  "title": "Survey title",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ],
      "title": "Page1 title"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question2"
        }
      ]
    }
  ]
};
test("translationStringVisibilityCallback", () => {
  const oldValue = settings.translation.sortByName;
  settings.translation.sortByName = true;

  const survey = new SurveyModel(surveyJson);

  const translation = new Translation(survey, null);
  translation.reset();
  expect(translation.root.items).toHaveLength(3);
  expect(translation.root.groups).toHaveLength(2);
  expect(translation.root.groups[0].name).toEqual("page1");
  expect(translation.root.groups[0].items).toHaveLength(2);
  expect(translation.root.groups[0].groups).toHaveLength(1);
  expect(translation.root.groups[0].groups[0].name).toEqual("question1");
  expect(translation.root.groups[0].groups[0].items[0].name).toEqual("title");
  expect(translation.root.groups[0].items[1].name).toEqual("title");
  expect(translation.root.groups[1].name).toEqual("page2");
  expect(translation.root.items[2].name).toEqual("title");

  translation.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean) => {
    if (obj.getType() == "survey" && propertyName === "title") return false;
    if (obj["name"] === "question1" && propertyName === "title") return false;
    return true;
  };
  translation.reset();
  expect(translation.root.items).toHaveLength(2);
  expect(translation.root.groups).toHaveLength(2);
  expect(translation.root.groups[0].name).toEqual("page1");
  expect(translation.root.groups[0].items).toHaveLength(1);
  expect(translation.root.groups[0].items[0].name).toEqual("title");
  expect(translation.root.groups[1].name).toEqual("page2");

  settings.translation.sortByName = oldValue;
});

test("onTranslationStringVisibility", () => {
  const creator = new CreatorTester();
  creator.JSON = surveyJson;
  creator.onTranslationStringVisibility.add((sender, options) => {
    if (options.obj.getType() == "survey" && options.propertyName === "title") {
      options.visible = false;
    } else if (options.obj["name"] === "question1" && options.propertyName === "title") {
      options.visible = false;
    } else {
      options.visible = true;
    }
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;

  expect(translation.root.items).toHaveLength(2);
  expect(translation.root.groups).toHaveLength(2);
  expect(translation.root.groups[0].name).toEqual("page1");
  expect(translation.root.groups[0].items).toHaveLength(1);
  expect(translation.root.groups[0].items[0].name).toEqual("title");
  expect(translation.root.groups[1].name).toEqual("page2");
});
test("onTranslationStringVisibility for itemvalues", (): void => {
  Serializer.addProperty("survey", { name: "surveyItems:itemvalues" });
  const creator = new CreatorTester();
  creator.JSON = {
    title: "Survey title",
    surveyItems: [
      { value: 1, text: "Item 1" },
      { value: 2, text: "Item 2" }
    ]
  };
  creator.onTranslationStringVisibility.add((sender, options) => {
    if (options.propertyName === "surveyItems") {
      options.visible = false;
    }
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;

  expect(translation.root.items).toHaveLength(1);
  expect(translation.root.items[0].name).toEqual("title");
  Serializer.removeProperty("survey", "surveyItems");
});
test("empty title placeholders", () => {
  const survey = new SurveyModel({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": {
              "da": "test"
            }
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("page1_question1_props0");
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("da");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  let cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  let cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual(null);
  expect(cellQuestion2.placeholder).toEqual("question1");
  expect(cellQuestion2.value).toEqual("test");

  cellQuestion1.value = "Question 1";
  cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("Question 1");
  expect(cellQuestion2.placeholder).toEqual("Question 1");
  expect(cellQuestion2.value).toEqual("test");

  cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  cellQuestion1.value = "";
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("");
  expect(cellQuestion2.placeholder).toEqual("question1");
  expect(cellQuestion2.value).toEqual("test");
});

test("init placeholders", () => {
  const survey = new SurveyModel({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": {
              "default": "Question 1",
              "da": "Q 1"
            }
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("page1_question1_props0");
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("da");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  const cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("Question 1");
  expect(cellQuestion2.placeholder).toEqual("Question 1");
  expect(cellQuestion2.value).toEqual("Q 1");

  cellQuestion1.value = "";
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("");
  expect(cellQuestion2.placeholder).toEqual("question1");
  expect(cellQuestion2.value).toEqual("Q 1");
});
test("init placeholders for choices", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "checkbox",
        "name": "question1",
        "choices": [
          {
            "value": 1,
            "text": {
              "default": "Item 1",
              "da": "I 1"
            }
          }
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const choicesPanel = <PanelModel>question1.elements[1];
  const choicesProps = <QuestionMatrixDropdownModel>choicesPanel.elements[0];
  expect(choicesProps.name).toEqual("question1_choices0");
  expect(choicesProps.columns).toHaveLength(2);
  const cellQuestion1 = <QuestionCommentModel>choicesProps.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>choicesProps.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeholder).toEqual("1");
  expect(cellQuestion1.value).toEqual("Item 1");
  expect(cellQuestion2.placeholder).toEqual("Item 1");
  expect(cellQuestion2.value).toEqual("I 1");

  cellQuestion1.value = "";
  expect(cellQuestion1.placeholder).toEqual("1");
  expect(cellQuestion1.value).toEqual("");
  expect(cellQuestion2.placeholder).toEqual("1");
  expect(cellQuestion2.value).toEqual("I 1");
});

test("localize placeholders", () => {
  const survey = new SurveyModel({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "title": {
              "default": "Question 1",
              "ru": "Q 1"
            }
          }
        ]
      }
    ]
  });

  const translation = new Translation(survey);
  translation.reset();
  translation.showAllStrings = true;
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(13);
  const surveyProps = <QuestionMatrixDropdownModel>page.elements[0];
  expect(surveyProps.name).toEqual("survey_props0");
  expect((<QuestionCommentModel>surveyProps.visibleRows[0].cells[0].question).placeholder).toEqual("Translation...");
  expect((<QuestionCommentModel>surveyProps.visibleRows[0].cells[1].question).placeholder).toEqual("Перевод...");
  const pagePanel = <PanelModel>page.elements[12];
  expect(pagePanel.elements).toHaveLength(5);
  expect(pagePanel.elements[0].name).toEqual("page1_props0");
  expect(pagePanel.elements[4].name).toEqual("question1");
  const page1Props = <QuestionMatrixDropdownModel>pagePanel.elements[0];
  expect(page1Props.columns).toHaveLength(2);
  expect(page1Props.columns[0].name).toEqual("default");
  expect(page1Props.columns[1].name).toEqual("ru");
  expect(page1Props.rows).toHaveLength(1);
  expect(page1Props.rows[0].value).toEqual("title");

  const cellQuestion1 = <QuestionCommentModel>page1Props.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>page1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeholder).toEqual("Translation...");
  expect(cellQuestion1.value).toEqual(null);
  expect(cellQuestion2.placeholder).toEqual("Перевод...");
  expect(cellQuestion2.value).toEqual(null);

  const survey_props0 = <QuestionMatrixDropdownModel>page.elements[0];
  expect(survey_props0.columns).toHaveLength(2);
  expect(survey_props0.columns[0].name).toEqual("default");
  expect(survey_props0.columns[1].name).toEqual("ru");
  expect(survey_props0.rows).toHaveLength(1);
  expect(survey_props0.rows[0].value).toEqual("title");
  const survey_props11 = <QuestionMatrixDropdownModel>page.elements[11];
  expect(survey_props11.rows).toHaveLength(1);
  expect(survey_props11.rows[0].value).toEqual("editText");

  const surveyCell1 = <QuestionCommentModel>survey_props11.visibleRows[0].cells[0].question;
  const surveyCell2 = <QuestionCommentModel>survey_props11.visibleRows[0].cells[1].question;
  expect(surveyCell1.placeholder).toEqual("Edit");
  expect(surveyCell1.value).toEqual(null);
  expect(surveyCell2.placeholder).toEqual("Редактирование");
  expect(surveyCell2.value).toEqual(null);
});
test("init placeholders for dialects", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "question1",
        "title": {
          "default": "Question 1",
          "en-uk": "Question uk",
          "pt": "Question pt",
          "pt-br": "Question br",
        }
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("page1_question1_props0");
  expect(question1Props.columns).toHaveLength(4);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[3].name).toEqual("pt-br");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  const cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  const cellQuestion3 = <QuestionCommentModel>question1Props.visibleRows[0].cells[2].question;
  const cellQuestion4 = <QuestionCommentModel>question1Props.visibleRows[0].cells[3].question;
  expect(cellQuestion1.placeholder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("Question 1");
  expect(cellQuestion2.placeholder).toEqual("Question 1");
  expect(cellQuestion2.value).toEqual("Question uk");
  expect(cellQuestion3.placeholder).toEqual("Question 1");
  expect(cellQuestion3.value).toEqual("Question pt");
  expect(cellQuestion4.placeholder).toEqual("Question pt");
  expect(cellQuestion4.value).toEqual("Question br");

  cellQuestion1.value = "Question 11";
  expect(cellQuestion2.placeholder).toEqual("Question 11");
  expect(cellQuestion3.placeholder).toEqual("Question 11");
  expect(cellQuestion4.placeholder).toEqual("Question pt");
  cellQuestion3.value = "Question pt1";
  expect(cellQuestion2.placeholder).toEqual("Question 11");
  expect(cellQuestion3.placeholder).toEqual("Question 11");
  expect(cellQuestion4.placeholder).toEqual("Question pt1");
});

test("Test settings.translation.maximumSelectedLocales", () => {
  const oldMaximumSelectedLocales = settings.translation.maximumSelectedLocales;
  settings.translation.maximumSelectedLocales = 2;
  var survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          default: "title en",
          de: "title de",
          fr: "title fr",
          es: "title es",
          it: "title it"
        }
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.localesQuestion.visibleRows).toHaveLength(4 + 1);
  const visLocales = translation.getSelectedLocales();
  expect(visLocales).toHaveLength(2);
  expect(visLocales[0]).toEqual("de");
  expect(visLocales[1]).toEqual("fr");
  settings.translation.maximumSelectedLocales = oldMaximumSelectedLocales;
});
test("Translation show All strings and property visibility", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          default: "title en",
          de: "title de",
          fr: "title fr",
          es: "title es",
          it: "title it"
        }
      }
    ]
  };
  creator.onTranslationLocaleInitiallySelected.add((sender, options) => {
    options.isSelected = options.locale === "de";
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;
  expect(translation.localesQuestion.visibleRows).toHaveLength(4 + 1);
  const selLocales = translation.getSelectedLocales();
  expect(selLocales).toHaveLength(1);
  expect(selLocales[0]).toEqual("de");
});
test("LogicPlugin: creator.readOnly", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  creator.readOnly = true;
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  const translationPlugin = <TabTranslationPlugin>(creator.getPlugin("translation"));
  translationPlugin.activate();
  expect(translationPlugin.model.readOnly).toBeTruthy();
  expect(translationPlugin.model.stringsSurvey.mode).toEqual("display");
  const firstQuestion = translationPlugin.model.stringsSurvey.getAllQuestions()[0];
  expect(firstQuestion.isReadOnly).toBeTruthy();
});
test("Translation check all locale name are capitalized", () => {
  surveyLocalization.locales["test_locale"] = {};
  surveyLocalization.localeNames["test_locale"] = "test locale name";
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "question1",
      }
    ]
  });

  const translation = new Translation(survey);
  translation.reset();
  const testLocaleAction = translation.chooseLanguageActions.filter((item: IAction) => item.id === "test_locale")[0];
  expect(testLocaleAction.title).toEqual("Test Locale Name");
  translation.addLocale("test_locale");
  const val = translation.localesQuestion.visibleRows[1].cells[1].value;
  expect(val).toEqual("Test Locale Name");
  translation.setSelectedLocales(["test_locale"]);
  const testLocaleColumn = (<QuestionMatrixDropdownModel>translation.stringsHeaderSurvey.getAllQuestions()[0]).columns[1];
  expect(testLocaleColumn.title).toEqual("Test Locale Name");
  surveyLocalization.locales["test_locale"] = undefined;
  surveyLocalization.localeNames["test_locale"] = undefined;
});
test("Change filterPageAction to all pages on changing survey", () => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [{ type: "text", name: "question1" }]
      },
      {
        name: "page2",
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  };
  let creator = new CreatorTester({ showTranslationTab: true });
  creator.JSON = json;
  const tabTranslationPlugin = <TabTranslationPlugin>creator.getPlugin("translation");
  const filterPageAction = tabTranslationPlugin["filterPageAction"];
  creator.activeTab = "translation";
  expect(filterPageAction.title).toEqual("All Pages");
  tabTranslationPlugin.model.filteredPage = creator.survey.pages[0];
  expect(filterPageAction.title).toEqual("page1");
  creator.JSON = json;
  expect(filterPageAction.title).toEqual("All Pages");
});
test("Import from array, onTraslationItemImport", () => {
  let creator = new CreatorTester({ showTranslationTab: true });
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1",
        title: "q1"
      }
    ]
  };
  let counter = 0;
  creator.onTranslationImported.add((sender, options) => {
    counter++;
  });
  creator.onTranslationImportItem.add((sender, options) => {
    if (["default", "", "en", "de"].indexOf(options.locale) < 0) options.text = undefined;
  });
  creator.onTranslationImportItem.add((sender, options) => {
    if (["default", "", "en", "de"].indexOf(options.locale) < 0) options.text = undefined;
  });
  creator.activeTab = "translation";
  const tabTranslationPlugin = <TabTranslationPlugin>creator.getPlugin("translation");
  const translation: Translation = tabTranslationPlugin.model;

  translation.importFromNestedArray([
    ["description ↓ - language →", "default", "dex", "de"],
    ["survey.page1.title", "page en", "test", "page de"],
    ["survey.page1.q1.title", "q1 en", "test", "q1 de"]
  ]);
  expect(counter).toEqual(1);
  expect(translation.localesQuestion.visibleRows).toHaveLength(1 + 1);
  const page = creator.survey.pages[0];
  const question = creator.survey.getQuestionByName("q1");
  expect(page.locTitle.getLocaleText("")).toEqual("page en");
  expect(page.locTitle.getLocaleText("de")).toEqual("page de");
  expect(page.locTitle.getLocaleText("dex")).toBeFalsy();
  expect(question.locTitle.getLocaleText("")).toEqual("q1 en");
  expect(question.locTitle.getLocaleText("de")).toEqual("q1 de");
  expect(question.locTitle.getLocaleText("dex")).toBeFalsy();
});
const survey = new SurveyModel({
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": {
            "default": "Question 1",
            "ru": "Q 1"
          }
        }
      ]
    }
  ]
});

test("Reset on changing creator.JSON", () => {
  let creator = new CreatorTester({ showTranslationTab: true });
  const json = {
    elements: [
      {
        type: "text",
        name: "q1",
        title: "q1"
      }
    ]
  };
  creator.JSON = json;

  const tabTranslationPlugin = <TabTranslationPlugin>creator.getPlugin("translation");
  creator.activeTab = "translation";
  const translation: Translation = tabTranslationPlugin.model;
  translation.reset();
  translation.addLocale("de");
  translation.showAllStrings = true;
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  let page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(13);
  let pagePanel = <PanelModel>page.elements[12];
  expect(pagePanel.elements).toHaveLength(5);
  expect(pagePanel.elements[0].name).toEqual("page1_props0");
  expect(pagePanel.elements[4].name).toEqual("q1");
  let page1Props = <QuestionMatrixDropdownModel>pagePanel.elements[0];
  expect(page1Props.columns).toHaveLength(2);

  let cellQuestion1 = <QuestionCommentModel>page1Props.visibleRows[0].cells[0].question;
  let cellQuestion2 = <QuestionCommentModel>page1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.value).toEqual(null);
  expect(cellQuestion2.value).toEqual(null);
  cellQuestion1.value = "Default title";
  cellQuestion2.value = "De title";
  let surveyQuestion = creator.survey.pages[0];
  expect(surveyQuestion.locTitle.text).toEqual("Default title");
  expect(surveyQuestion.locTitle.getLocaleText("de")).toEqual("De title");

  translation.addLocale("fr");
  expect(page1Props.columns).toHaveLength(3);
  translation.removeLocale("fr");
  creator.JSON = json;
  expect(translation.getSelectedLocales()).toHaveLength(0);
  page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(13);
  pagePanel = <PanelModel>page.elements[12];
  expect(pagePanel.elements).toHaveLength(5);
  expect(pagePanel.elements[0].name).toEqual("page1_props0");
  expect(pagePanel.elements[4].name).toEqual("q1");
  page1Props = <QuestionMatrixDropdownModel>pagePanel.elements[0];
  expect(page1Props.columns).toHaveLength(1);

  cellQuestion1 = <QuestionCommentModel>page1Props.visibleRows[0].cells[0].question;
  expect(cellQuestion1.value).toEqual(null);
});

test("Reset on changing creator.JSON", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  const action = creator.getActionBarItem("svd-translation-merge_locale_withdefault");
  expect(action).toBeTruthy();
  creator.activeTab = "translation";
  expect(action.title).toEqual("Merge en with default locale");
  expect(action.tooltip).toEqual("Merge en with default locale");
  if(!editorLocalization.locales["de"]) {
    editorLocalization.locales["de"] = {
      ed: { translationMergeLocaleWithDefault: "Verschmelze {0} mit der Standardsprache" }
    };
  }
  creator.locale = "de";
  expect(action.title).toEqual("Verschmelze en mit der Standardsprache");
  expect(action.tooltip).toEqual("Verschmelze en mit der Standardsprache");
  creator.locale = "";
});
test("Export dialect languages", () => {
  const survey: SurveyModel = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "question1",
        "title": {
          "default": "Question 1",
          "en-uk": "Question uk",
          "de": "Question de",
          "pt": "Question pt",
          "pt-br": "Question br",
        }
      },
      {
        "type": "text",
        "name": "question2",
        "title": {
          "default": "Question 2",
          "pt": "Question pt2",
        }
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

  expect(exported).toHaveLength(3);
  expect(exported[0]).toEqual(["description ↓ - language →", "default", "en-uk", "de", "pt", "pt-br"]);
  expect(exported[1]).toEqual([
    "survey.page1.question1.title",
    "Question 1",
    "Question uk",
    "Question de",
    "Question pt",
    "Question br",
  ]);
  expect(exported[2]).toEqual([
    "survey.page1.question2.title",
    "Question 2",
    "Question 2",
    "",
    "Question pt2",
    "Question pt2",
  ]);
});
test("creator.onTranslationExportItem", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  creator.onTranslationExportItem.add((sender, options) => {
    if(!options.text) {
      options.text = options.locString.getLocaleText("");
    }
  });
  creator.JSON = {
    "elements": [
      {
        "type": "text",
        "name": "question1",
        "title": {
          "default": "Question 1",
          "de": "Question de",
        }
      },
      {
        "type": "text",
        "name": "question2",
        "title": {
          "default": "Question 2",
          "pt": "Question pt",
        }
      }
    ]
  };
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation: Translation = tabTranslation.model;
  let exported;
  parse(translation.exportToCSV(), {
    complete: function (results, file) {
      exported = results.data;
    }
  });

  expect(exported).toHaveLength(3);
  expect(exported[0]).toEqual(["description ↓ - language →", "default", "de", "pt"]);
  expect(exported[1]).toEqual([
    "survey.page1.question1.title",
    "Question 1",
    "Question de",
    "Question 1",
  ]);
  expect(exported[2]).toEqual([
    "survey.page1.question2.title",
    "Question 2",
    "Question 2",
    "Question pt",
  ]);
});
test("Construction -> Reset -> Dispose", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  const tabTranslation = new TabTranslationPlugin(creator);
  expect(tabTranslation.model).toBeUndefined();
  tabTranslation.activate();
  const translation: Translation = tabTranslation.model;
  expect(translation.stringsSurvey).toBeDefined();
  expect(translation.stringsHeaderSurvey).toBeDefined();
  tabTranslation.deactivate();
  expect(translation.stringsSurvey).toBeUndefined();
  expect(translation.stringsHeaderSurvey).toBeUndefined();
  expect(tabTranslation.model).toBeUndefined();
});
test("Check onTranlationItemChanging event", () => {
  const creator = new CreatorTester({ showTranslationTab: true });
  let log = "";
  creator.JSON = {
    "elements": [
      {
        "type": "text",
        "name": "question1",
        "title": {
          "default": "Question 1",
          "de": "Question de",
        }
      }
    ]
  };
  const surveyQuestion = creator.survey.getAllQuestions()[0];
  creator.onTranslationItemChanging.add((_, opt) => {
    log += "->called";
    opt.newText += "_changed_text";
    expect(opt.locale).toBe("de");
    expect(opt.locString).toBe(surveyQuestion.locTitle);
    expect(opt.obj).toBe(surveyQuestion);
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation: Translation = tabTranslation.model;
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[0];
  const question1 = <PanelModel>pagePanel.elements[0];
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  const cellQuestion = question1Props.visibleRows[0].cells[1].question;
  cellQuestion.value = "changed_de";
  expect(surveyQuestion.locTitle.getLocaleText("de")).toBe("changed_de_changed_text");
  expect(cellQuestion.value).toBe("changed_de_changed_text");
  //check that event callback is called once
  expect(log).toBe("->called");
});
test("Make add language button disabled if there are no options", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: {
              de: "Title de"
            },
            dataList: {
              default: ["Item1", "Item2"],
              de: ["Item1-de", "Item2-de"],
            }
          }
        ]
      },
      {
        name: "page2",
        title: {
          de: "Page title de"
        },
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  });
  let translation = new Translation(survey);
  translation.reset();
  expect(translation.locales).toHaveLength(2);
  expect(translation.locales[1]).toEqual("de");
  translation.deleteLocaleStrings("de");
  translation = new Translation(survey);
  translation.reset();
  expect(translation.locales).toHaveLength(1);
});
test("choices with 0 value", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "checkbox",
        "name": "question1",
        "choices": [{ "value": 0, text: "Item 1" }, { "value": 1, text: "Item 2" }]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const choicesPanel = <PanelModel>question1.elements[1];
  const choicesProps = <QuestionMatrixDropdownModel>choicesPanel.elements[0];
  expect(choicesProps.name).toEqual("question1_choices0");
  expect(choicesProps.visibleRows).toHaveLength(1);
  const cellQuestion1 = <QuestionCommentModel>choicesProps.visibleRows[0].cells[0].question;
  expect(cellQuestion1.value).toEqual("Item 1");
});
test("Translation doesnt' work with matrix dynamic and matrix dropdown qestion types. Bug #4450", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "matrixdynamic",
        "name": "question1",
        "columns": [
          {
            "name": "col1",
            "title": "Column 1"
          }
        ]
      },
      {
        "type": "matrixdropdown",
        "name": "question2",
        "columns": [
          {
            "name": "col1"
          }
        ],
        "rows": [
          "Row 1",
          "Row 2"
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(2);
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(2);
  const choicesPanel = <PanelModel>question1.elements[1];
  const columnsProps = <QuestionMatrixDropdownModel>choicesPanel.elements[0];
  expect(columnsProps.name).toEqual("question1_col1_props0");
  expect(columnsProps.visibleRows).toHaveLength(1);
  const cellQuestion1 = <QuestionCommentModel>columnsProps.visibleRows[0].cells[0].question;
  expect(cellQuestion1.value).toEqual("Column 1");
});
test("Translation doesnt' work with two matrix dropdown & choices. Bug #4473", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "question1",
        "columns": [
          {
            "name": "col1",
            "cellType": "dropdown",
            "choices": [
              {
                "value": "A",
                "text": {
                  "de": "A (german)",
                  "default": "A"
                }
              },
              {
                "value": "B",
                "text": {
                  "de": "B (German)",
                  "default": "B"
                }
              }
            ]
          }
        ],
        "rows": [
          "Row 1"
        ]
      },
      {
        "type": "matrixdropdown",
        "name": "question2",
        "columns": [
          {
            "name": "col1",
            "cellType": "dropdown",
            "choices": [
              "A",
              "B"
            ]
          }
        ],
        "rows": [
          "Row 1"
        ]
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(2);
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(3);
  const choicesPanel = <PanelModel>question1.elements[1];
  const columnPanel = <QuestionMatrixDropdownModel>choicesPanel.elements[1];
  const columnsChoices = <QuestionMatrixDropdownModel>columnPanel.elements[0];
  expect(columnsChoices.name).toEqual("question1_col1_props_choices0");
  expect(columnsChoices.visibleRows).toHaveLength(1);
  const cells = columnsChoices.visibleRows[0].cells;
  expect(cells[0].question.value).toEqual("A");
  expect(cells[1].question.value).toEqual("A (german)");
});
test("You can't delete or unselect the default locale", () => {
  const survey = new SurveyModel();
  const translation = new Translation(survey);
  translation.reset();
  translation.addLocale("de");
  const question = translation.localesQuestion;
  const rows = question.visibleRows;
  const checkQuestion1 = rows[0].cells[0].question;
  expect(checkQuestion1.value).toBeTruthy();
  expect(checkQuestion1.isReadOnly).toBeTruthy();
  const checkQuestion2 = rows[1].cells[0].question;
  expect(checkQuestion2.value).toBeTruthy();
  expect(checkQuestion2.isReadOnly).toBeFalsy();
  expect(question.canRemoveRow(rows[0])).toBeFalsy();
  expect(question.canRemoveRow(rows[1])).toBeTruthy();
});
test("You can't delete or unselect the default locale, there is only default locale", () => {
  const survey = new SurveyModel();
  const translation = new Translation(survey);
  translation.reset();
  const question = translation.localesQuestion;
  const rows = question.visibleRows;
  expect(rows).toHaveLength(1);
  const checkQuestion1 = rows[0].cells[0].question;
  expect(checkQuestion1.value).toBeTruthy();
  expect(checkQuestion1.isReadOnly).toBeTruthy();
  expect(question.canRemoveRow(rows[0])).toBeFalsy();
});
test("Test settings.translation.maximumSelectedLocales in matrix dynamic", () => {
  const oldMaximumSelectedLocales = settings.translation.maximumSelectedLocales;
  settings.translation.maximumSelectedLocales = 2;
  var survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          default: "title en",
          de: "title de",
          fr: "title fr",
          es: "title es",
          it: "title it"
        }
      }
    ]
  });
  const translation = new Translation(survey);
  translation.reset();
  const question = translation.localesQuestion;
  expect(question.visibleRows).toHaveLength(4 + 1);
  const visLocales = translation.getSelectedLocales();
  expect(visLocales).toHaveLength(2);
  expect(visLocales[0]).toEqual("de");
  expect(visLocales[1]).toEqual("fr");
  const rows = question.visibleRows;
  const checkQuestion3 = rows[2].cells[0].question;
  const checkQuestion4 = rows[3].cells[0].question;
  expect(checkQuestion3.value).toBeTruthy();
  expect(checkQuestion3.isReadOnly).toBeFalsy();
  expect(checkQuestion4.value).toBeFalsy();
  expect(checkQuestion4.isReadOnly).toBeTruthy();

  checkQuestion3.value = false;
  expect(checkQuestion3.value).toBeFalsy();
  expect(checkQuestion3.isReadOnly).toBeFalsy();
  expect(checkQuestion4.value).toBeFalsy();
  expect(checkQuestion4.isReadOnly).toBeFalsy();

  checkQuestion4.value = true;
  expect(checkQuestion3.value).toBeFalsy();
  expect(checkQuestion3.isReadOnly).toBeTruthy();
  expect(checkQuestion4.value).toBeTruthy();
  expect(checkQuestion4.isReadOnly).toBeFalsy();

  settings.translation.maximumSelectedLocales = oldMaximumSelectedLocales;
});
test("Remove locale strings from translation via remove row", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page2",
        title: {
          de: "Page title de"
        }
      }
    ]
  });
  let translation = new Translation(survey);
  translation.reset();
  expect(translation.locales).toHaveLength(2);
  expect(translation.locales[1]).toEqual("de");
  const question = translation.localesQuestion;
  expect(question.visibleRows).toHaveLength(2);
  const deLocaleAction = translation.chooseLanguageActions.filter((item: IAction) => item.id === "de")[0];
  expect(deLocaleAction.visible).toBeFalsy();
  question.removeRow(1, false);
  expect(question.visibleRows).toHaveLength(1);
  expect(survey.toJSON()).toStrictEqual({
    pages: [
      {
        name: "page2",
      }
    ]
  });
  expect(deLocaleAction.visible).toBeTruthy();
  expect(translation.locales).toHaveLength(1);
});
test("Remove locale strings from translation via remove row, unchecked locale", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page2",
        title: {
          de: "Page title de"
        }
      }
    ]
  });
  let translation = new Translation(survey);
  translation.reset();
  expect(translation.locales).toHaveLength(2);
  expect(translation.locales[1]).toEqual("de");
  const question = translation.localesQuestion;
  expect(question.visibleRows).toHaveLength(2);
  let matrix = <QuestionMatrixDropdownModel>(translation.stringsSurvey.getAllQuestions()[0]);
  expect(matrix.columns).toHaveLength(2);
  question.visibleRows[1].cells[0].question.value = false;
  matrix = <QuestionMatrixDropdownModel>(translation.stringsSurvey.getAllQuestions()[0]);
  expect(matrix.columns).toHaveLength(1);
  question.removeRow(1, false);
  expect(survey.toJSON()).toStrictEqual({
    pages: [
      {
        name: "page2",
      }
    ]
  });
  expect(translation.locales).toHaveLength(1);
});
