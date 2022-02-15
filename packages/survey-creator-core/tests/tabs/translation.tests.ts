import { Serializer, SurveyModel, surveyLocalization, Base, QuestionDropdownModel, PanelModel, QuestionMatrixDropdownModel, QuestionTextModel, QuestionCommentModel, ListModel, Action } from "survey-core";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { settings } from "../../src/settings";
import { CreatorTester } from "../creator-tester";

import "survey-core/survey.i18n";
export * from "../../src/localization/russian";

test("Fire callback on base objects creation", () => {
  const survey = new SurveyModel();
  survey.addNewPage("p1");
  const q = survey.pages[0].addNewQuestion("text", "q1");
  q.title = "some value";
  const cretorHash = {};
  const translation = new Translation(survey, null);
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
  let panel = translation.settingsSurvey.getPanelByName("languages");
  expect(panel.elements).toHaveLength(2);
  let elements = panel.elements;
  expect(elements[0].getType()).toEqual("checkbox");
  expect(elements[0].name).toEqual("defaultLanguage");
  expect(elements[0].isReadOnly).toBeTruthy();
  expect(elements[0]["choices"][0].value).toEqual("Default (english)");
  expect(elements[0]["defaultValue"][0]).toEqual("Default (english)");

  expect(elements[1].getType()).toEqual("checkbox");
  expect(elements[1].name).toEqual("locales");
  expect(elements[1]["choicesVisibleIf"]).toEqual("{selLocales} contains {item}");

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
  expect(translation.settingsSurvey.getValue("selLocales")).toHaveLength(3);
  expect(translation.getSurveyLocales()[0]).toHaveLength(4);
  translation.addLocale("de");
  expect(translation.settingsSurvey.getValue("selLocales")).toHaveLength(4);
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
  const localesQuestion = <QuestionDropdownModel>(
    translation.settingsSurvey.getQuestionByName("locales")
  );
  expect(localesQuestion.choices).toHaveLength(4);
  const visChoices = localesQuestion.visibleChoices;
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
  expect(question1Props.name).toEqual("question1_props");
  expect(question1Props.titleLocation).toEqual("hidden");
  expect(question1Props.columns).toHaveLength(4);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[0].title).toEqual("Default (english)");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  expect(question1Props.rows[0].text).toEqual("Title");
  const choicesPanel = <PanelModel>question1.elements[1];
  const choicesProps = <QuestionMatrixDropdownModel>choicesPanel.elements[0];
  expect(choicesProps.name).toEqual("question1_choices");
  expect(choicesProps.columns).toHaveLength(4);
  expect(choicesProps.columns[0].name).toEqual("default");
  expect(choicesProps.columns[0].title).toEqual("Default (english)");
  expect(choicesProps.columns[1].name).toEqual("fr");
  expect(choicesProps.columns[1].title).toEqual("français");
  expect(choicesProps.rows).toHaveLength(3);
  expect(choicesProps.rows[0].value).toEqual("item1");
  expect(choicesProps.rows[0].text).toEqual("Item 1");
  expect(choicesProps.rows[2].value).toEqual("item3");
  expect(choicesProps.rows[2].text).toEqual("Item 3");
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
  const filterPageList = <ListModel>tabTranslationPlugin["pagePopupModel"].contentComponentData.model;
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
  const filterStringsList = <ListModel>tabTranslationPlugin["stringsPopupModel"].contentComponentData.model;
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
  const pageList = <ListModel>tabTranslationPlugin["pagePopupModel"].contentComponentData.model;
  const filterPageAction = <Action>tabTranslationPlugin["filterPageAction"];
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
  const stringsMatrix = <QuestionMatrixDropdownModel>(translation.stringsSurvey.getAllQuestions()[0]);
  const headerMatrix = <QuestionMatrixDropdownModel>(translation.stringsHeaderSurvey.getAllQuestions()[0]);
  expect(stringsMatrix.rowTitleWidth).toEqual("300px");
  expect(stringsMatrix.columns).toHaveLength(1);
  expect(stringsMatrix.columns[0].width).toEqual("calc((100% - 300px)/1)");

  expect(headerMatrix.rowTitleWidth).toEqual("300px");
  expect(headerMatrix.columns).toHaveLength(1);
  expect(headerMatrix.columns[0].width).toEqual("calc((100% - 300px)/1)");

  translation.addLocale("de");
  expect(stringsMatrix.rowTitleWidth).toEqual("300px");
  expect(stringsMatrix.columns).toHaveLength(2);
  expect(stringsMatrix.columns[0].width).toEqual("calc((100% - 300px)/2)");

  expect(headerMatrix.rowTitleWidth).toEqual("300px");
  expect(headerMatrix.columns).toHaveLength(2);
  expect(headerMatrix.columns[0].width).toEqual("calc((100% - 300px)/2)");
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
  expect(translation.chooseLanguageActions).toHaveLength(4);
  expect(translation.chooseLanguageActions[0].id).toEqual("en");
  expect(translation.chooseLanguageActions[1].id).toEqual("fr");
  expect(translation.chooseLanguageActions[0].visible).toBeFalsy();
  expect(translation.chooseLanguageActions[1].visible).toBeTruthy();
  translation.addLocale("fr");
  expect(translation.chooseLanguageActions[1].visible).toBeFalsy();
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
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("question1_props");
  expect(question1Props.columns).toHaveLength(1);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.rows).toHaveLength(2);
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
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  const pagePanel = <PanelModel>page.elements[0];
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("de");
  expect(question1Props.rows).toHaveLength(2);
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
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("question1_props");
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("da");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  let cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  let cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeHolder).toEqual("question1");
  expect(cellQuestion1.value).toEqual(null);
  expect(cellQuestion2.placeHolder).toEqual("question1");
  expect(cellQuestion2.value).toEqual("test");

  cellQuestion1.value = "Question 1";
  cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeHolder).toEqual("Question 1");
  expect(cellQuestion1.value).toEqual("Question 1");
  expect(cellQuestion2.placeHolder).toEqual("Question 1");
  expect(cellQuestion2.value).toEqual("test");

  cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  cellQuestion1.value = "";
  expect(cellQuestion1.placeHolder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("");
  expect(cellQuestion2.placeHolder).toEqual("question1");
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
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(1);
  const pagePanel = <PanelModel>page.elements[0];
  expect(pagePanel.elements).toHaveLength(1);
  expect(pagePanel.elements[0].name).toEqual("question1");
  const question1 = <PanelModel>pagePanel.elements[0];
  expect(question1.elements).toHaveLength(1);
  const question1Props = <QuestionMatrixDropdownModel>question1.elements[0];
  expect(question1Props.name).toEqual("question1_props");
  expect(question1Props.columns).toHaveLength(2);
  expect(question1Props.columns[0].name).toEqual("default");
  expect(question1Props.columns[1].name).toEqual("da");
  expect(question1Props.rows).toHaveLength(1);
  expect(question1Props.rows[0].value).toEqual("title");
  const cellQuestion1 = <QuestionCommentModel>question1Props.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>question1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeHolder).toEqual("Question 1");
  expect(cellQuestion1.value).toEqual("Question 1");
  expect(cellQuestion2.placeHolder).toEqual("Question 1");
  expect(cellQuestion2.value).toEqual("Q 1");

  cellQuestion1.value = "";
  expect(cellQuestion1.placeHolder).toEqual("question1");
  expect(cellQuestion1.value).toEqual("");
  expect(cellQuestion2.placeHolder).toEqual("question1");
  expect(cellQuestion2.value).toEqual("Q 1");
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
  translation.showAllStrings = true;
  expect(translation.stringsSurvey.pages).toHaveLength(1);
  const page = translation.stringsSurvey.pages[0];
  expect(page.elements).toHaveLength(2);
  const pagePanel = <PanelModel>page.elements[1];
  expect(pagePanel.elements).toHaveLength(2);
  expect(pagePanel.elements[0].name).toEqual("page1_props");
  expect(pagePanel.elements[1].name).toEqual("question1");
  const page1Props = <QuestionMatrixDropdownModel>pagePanel.elements[0];
  expect(page1Props.columns).toHaveLength(2);
  expect(page1Props.columns[0].name).toEqual("default");
  expect(page1Props.columns[1].name).toEqual("ru");
  expect(page1Props.rows).toHaveLength(4);
  expect(page1Props.rows[0].value).toEqual("title");

  const cellQuestion1 = <QuestionCommentModel>page1Props.visibleRows[0].cells[0].question;
  const cellQuestion2 = <QuestionCommentModel>page1Props.visibleRows[0].cells[1].question;
  expect(cellQuestion1.placeHolder).toEqual("Translation...");
  expect(cellQuestion1.value).toEqual(null);
  expect(cellQuestion2.placeHolder).toEqual("Перевод...");
  expect(cellQuestion2.value).toEqual(null);

  const survey_props = <QuestionMatrixDropdownModel>page.elements[0];
  expect(survey_props.columns).toHaveLength(2);
  expect(survey_props.columns[0].name).toEqual("default");
  expect(survey_props.columns[1].name).toEqual("ru");
  expect(survey_props.rows).toHaveLength(12);
  expect(survey_props.rows[0].value).toEqual("title");
  expect(survey_props.rows[11].value).toEqual("editText");

  const surveyCell1 = <QuestionCommentModel>survey_props.visibleRows[11].cells[0].question;
  const surveyCell2 = <QuestionCommentModel>survey_props.visibleRows[11].cells[1].question;
  expect(surveyCell1.placeHolder).toEqual("Edit");
  expect(surveyCell1.value).toEqual(null);
  expect(surveyCell2.placeHolder).toEqual("Редактирование");
  expect(surveyCell2.value).toEqual(null);
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
  expect(translation.localesQuestion.visibleChoices).toHaveLength(4);
  expect(translation.localesQuestion.value).toHaveLength(2);
  expect(translation.localesQuestion.value[0]).toEqual("de");
  expect(translation.localesQuestion.value[1]).toEqual("fr");
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
  expect(translation.localesQuestion.visibleChoices).toHaveLength(4);
  expect(translation.localesQuestion.value).toHaveLength(1);
  expect(translation.localesQuestion.value[0]).toEqual("de");
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
