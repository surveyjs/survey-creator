import { QuestionMatrixDropdownModel, SurveyModel } from "survey-core";
import { Translation, TranslationEditor, TranslationItem } from "../../src/components/tabs/translation";
import "survey-core/survey.i18n";
import { EmptySurveyCreatorOptions } from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { SurveyElementActionContainer } from "../../src/components/action-container-view-model";

test("create locales question for edit translation", () => {
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
            choices: [{ value: "item1", text: { fr: "Item 1 fr" } }, "item2", "item3"]
          }
        ]
      }
    ]
  });
  const editor = new Translation(survey).createTranslationEditor("fr");
  const translation = editor.translation;
  expect(translation.isEditMode).toBeTruthy();
  expect(translation.locales).toHaveLength(2);
  expect(translation.locales[1]).toBe("fr");
  const root = translation.root;
  expect(root.groups).toHaveLength(1);
  expect(root.items).toHaveLength(1);
  const pagePropsGroup = root.groups[0];
  expect(pagePropsGroup.groups).toHaveLength(1);
  expect(pagePropsGroup.items).toHaveLength(1);
  const qGroup = pagePropsGroup.groups[0];
  expect(qGroup.groups).toHaveLength(1);
  expect(qGroup.items).toHaveLength(1);
  const itemsGroup = qGroup.groups[0];
  expect(itemsGroup.groups).toHaveLength(0);
  expect(itemsGroup.items).toHaveLength(2);
});
test("Apply changes on apply only", () => {
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
      }
    ]
  });
  const question1 = survey.getQuestionByName("question1");
  const editor = new Translation(survey).createTranslationEditor("fr");
  const translation = editor.translation;
  const pagePropsGroup = translation.root.groups[0];
  const qGroup = pagePropsGroup.groups[0];
  expect(qGroup.groups).toHaveLength(0);
  expect(qGroup.items).toHaveLength(1);
  const item = <TranslationItem>qGroup.items[0];
  item.values("fr").text = "Title fr";
  expect(question1.locTitle.getLocaleText("fr")).toBeFalsy();
  editor.apply();
  expect(question1.locTitle.getLocaleText("fr")).toBe("Title fr");
});
test("Default locale column should be read-only", () => {
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
      }
    ]
  });
  const editor = new Translation(survey).createTranslationEditor("fr");
  const translation = editor.translation;
  const matrix = translation.stringsSurvey.getAllQuestions()[0];
  expect(matrix.columns).toHaveLength(2);
  expect(matrix.columns[0].readOnly).toBeTruthy();
  expect(matrix.columns[1].readOnly).toBeFalsy();
});
test("Update data in original translation", () => {
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
      }
    ]
  });
  const originalTranslation = new Translation(survey, undefined, true);
  originalTranslation.addLocale("fr");
  originalTranslation.reset();
  let pagePropsGroup2 = originalTranslation.root.groups[0];
  let item2 = <TranslationItem>pagePropsGroup2.groups[0].items[0];
  expect(item2.values("fr").text).toBeFalsy();

  const editor = originalTranslation.createTranslationEditor("fr");
  const translation = editor.translation;
  let pagePropsGroup = translation.root.groups[0];
  let item = <TranslationItem>pagePropsGroup.groups[0].items[0];
  item.values("fr").text = "Title fr";
  editor.apply();

  pagePropsGroup2 = originalTranslation.root.groups[0];
  item2 = <TranslationItem>pagePropsGroup2.groups[0].items[0];
  expect(item2.values("fr").text).toBe("Title fr");
});
test("Call do machine translation", () => {
  const survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            description: "desc"
          }
        ]
      }
    ]
  });
  const q1 = survey.getQuestionByName("q1");
  const options = new EmptySurveyCreatorOptions();
  options.machineTranslationValue = true;
  let func_fromLocale: string = "";
  let func_toLocale: string = "";
  let func_strings: Array<string> = [];
  let func_res = false;
  let func_translated: Array<string>;
  options.doMachineTranslation = (fromLocale: string, toLocale: string, strings: Array<string>, callback: (translated: Array<string>) => void): void => {
    func_fromLocale = fromLocale;
    func_toLocale = toLocale;
    func_strings = strings;
    callback(func_res ? func_translated : []);
  };
  let editor = new Translation(survey, options).createTranslationEditor("fr");
  editor.doMachineTranslation();
  expect(func_fromLocale).toBe("en");
  expect(func_toLocale).toBe("fr");
  expect(func_strings).toHaveLength(2);
  expect(func_strings[0]).toBe("q1");
  expect(func_strings[1]).toBe("desc");
  editor.apply();
  expect(q1.locTitle.getLocaleText("fr")).toBeFalsy();
  editor = new Translation(survey, options).createTranslationEditor("fr");
  func_res = true;
  func_translated = ["Title fr", "desc fr"];
  editor.doMachineTranslation();
  expect(q1.locTitle.getLocaleText("fr")).toBeFalsy();
  const matrix = editor.translation.stringsSurvey.getAllQuestions()[0];
  const row = matrix.visibleRows[0];
  expect(row.cells[1].question.value).toBe("Title fr");
  editor.apply();
  expect(q1.locTitle.getLocaleText("fr")).toBe("Title fr");
});
test("Implement machine translation for Creator", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            description: "desc"
          }
        ]
      }
    ]
  };
  expect(creator.getHasMachineTranslation()).toBeFalsy();
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  let editor = tabTranslation.model.createTranslationEditor("fr");
  let actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions).toHaveLength(3);
  expect(actions[0].id).toBe("svc-translation-fromlocale");
  expect(actions[0].enabled).toBeFalsy();
  expect(actions[1].id).toBe("svc-translation-import");
  creator.onMachineTranslate.add((sender, options) => {
    options.callback(["Title fr", "Desc fr"]);
  });
  expect(creator.getHasMachineTranslation()).toBeTruthy();
  editor = tabTranslation.model.createTranslationEditor("fr");
  actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions).toHaveLength(4);
  expect(actions[0].id).toBe("svc-translation-fromlocale");
  expect(actions[0].enabled).toBeFalsy();
  expect(actions[1].id).toBe("svc-translation-machine");
  actions[1].action();
  editor.apply();
  const q1 = creator.survey.getQuestionByName("q1");
  expect(q1.locTitle.getLocaleText("fr")).toBe("Title fr");
  expect(q1.locDescription.getLocaleText("fr")).toBe("Desc fr");
});
test("Show Edit action only if doMachineTranslation is set", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "text",
        name: "q1",
      }
    ]
  });
  let translation = new Translation(survey);
  translation.addLocale("fr");
  let matrix = translation.localesQuestion;
  expect(matrix.visibleRows).toHaveLength(2);
  let rows = matrix.renderedTable.rows;
  expect(rows).toHaveLength(2 * 2);
  expect(rows[1].cells).toHaveLength(3);
  let cell = rows[1].cells[2];
  expect(cell.isActionsCell).toBeFalsy();
  cell = rows[3].cells[2];
  expect(cell.isActionsCell).toBeTruthy();
  expect(cell.item.value.actions).toHaveLength(1);

  const options = new EmptySurveyCreatorOptions();
  options.machineTranslationValue = true;
  translation = new Translation(survey, options);
  translation.addLocale("fr");
  matrix = translation.localesQuestion;
  expect(matrix.visibleRows).toHaveLength(2);
  rows = matrix.renderedTable.rows;
  expect(rows).toHaveLength(2 * 2);
  expect(rows[1].cells).toHaveLength(3);
  cell = rows[1].cells[2];
  expect(cell.isActionsCell).toBeFalsy();
  cell = rows[3].cells[2];
  expect(cell.isActionsCell).toBeTruthy();
  const actions = cell.item.value.actions;
  expect(actions).toHaveLength(2);
  expect(actions[0].iconName).toBe("icon-language");
  expect(actions[1].iconName).toBe("icon-delete");
});
test("Machine translation from non default locale - UI", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: { de: "de: title", fr: "fr: title" },
            description: { de: "de: title" }
          },
          {
            type: "text",
            name: "q2",
            title: { default: "title", es: "es: title" },
            description: { default: "en: title" }
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const editor: TranslationEditor = tabTranslation.model.createTranslationEditor("es");
  expect(editor.fromLocales).toHaveLength(2);
  const actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions).toHaveLength(4);
  expect(actions[1].visible).toBeTruthy();

  expect(editor.translation.root.allLocItems).toHaveLength(3);
  expect(editor.translation.getVisibleLocales()).toHaveLength(1);
  let matrix = <QuestionMatrixDropdownModel>editor.translation.stringsSurvey.getAllQuestions()[0];
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.columns).toHaveLength(2);
  expect(matrix.columns[1].name).toBe("es");

  editor.setFromLocale("de");
  expect(editor.translation.getVisibleLocales()).toHaveLength(1);
  matrix = <QuestionMatrixDropdownModel>editor.translation.stringsSurvey.getAllQuestions()[0];
  let headerMatrix = <QuestionMatrixDropdownModel>editor.translation.stringsHeaderSurvey.getAllQuestions()[0];
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.columns).toHaveLength(3);
  expect(matrix.columns[1].name).toBe("de");
  expect(matrix.columns[2].name).toBe("es");
  expect(headerMatrix.columns[0].title).toBe("Default (English)");
  expect(headerMatrix.columns[1].title).toBe("Source: Deutsch");
  expect(headerMatrix.columns[2].title).toBe("Target: Español");

  editor.setFromLocale("fr");
  expect(editor.translation.getVisibleLocales()).toHaveLength(1);
  matrix = <QuestionMatrixDropdownModel>editor.translation.stringsSurvey.getAllQuestions()[0];
  headerMatrix = <QuestionMatrixDropdownModel>editor.translation.stringsHeaderSurvey.getAllQuestions()[0];
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.columns).toHaveLength(3);
  expect(matrix.columns[1].name).toBe("fr");
  expect(matrix.columns[2].name).toBe("es");
  expect(headerMatrix.columns[0].title).toBe("Default (English)");
  expect(headerMatrix.columns[1].title).toBe("Source: Français");
  expect(headerMatrix.columns[2].title).toBe("Target: Español");

  editor.setFromLocale("");
  expect(editor.translation.getVisibleLocales()).toHaveLength(1);
  matrix = <QuestionMatrixDropdownModel>editor.translation.stringsSurvey.getAllQuestions()[0];
  expect(matrix.showHeader).toBeFalsy();
  expect(matrix.columns).toHaveLength(2);
  expect(matrix.columns[1].name).toBe("es");
});
test("Machine translation from non default locale - onMachineTranslate", () => {
  const creator = new CreatorTester();
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: { de: "de: title", fr: "fr: title" },
            description: { de: "de: desc" }
          },
          {
            type: "text",
            name: "q2",
            title: { default: "title", es: "es: title" },
            description: { default: "en: title" }
          }
        ]
      }
    ]
  };
  let fromLocale = "";
  let fromStrings: any;
  creator.onMachineTranslate.add((sender, options) => {
    const translatedStrings = new Array<string>();
    fromLocale = options.fromLocale;
    fromStrings = options.strings;
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  const createEditor = (): TranslationEditor => {
    creator.JSON = json;
    const tabTranslation = new TabTranslationPlugin(creator);
    tabTranslation.activate();
    return tabTranslation.model.createTranslationEditor("es");
  };
  let editor = createEditor();
  editor.doMachineTranslation();
  expect(fromLocale).toBe("en");
  expect(fromStrings).toStrictEqual(["q1", "en: title"]);

  editor = createEditor();
  editor.setFromLocale("fr");
  editor.doMachineTranslation();
  expect(fromLocale).toBe("fr");
  expect(fromStrings).toStrictEqual(["fr: title"]);

  editor = createEditor();
  editor.setFromLocale("de");
  editor.doMachineTranslation();
  expect(fromLocale).toBe("de");
  expect(fromStrings).toStrictEqual(["de: title", "de: desc"]);
});
test("Machine translation and cancel", () => {
  const creator = new CreatorTester();
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: "Title 1",
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {
    const translatedStrings = new Array<string>();
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  creator.JSON = json;
  const q = creator.survey.getQuestionByName("q1");
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  let editor = tabTranslation.model.createTranslationEditor("de");
  editor.doMachineTranslation();
  editor.cancel();
  expect(q.locTitle.getJson()).toStrictEqual("Title 1");
  editor = tabTranslation.model.createTranslationEditor("de");
  editor.doMachineTranslation();
  editor.apply();
  expect(q.locTitle.getJson()).toStrictEqual({
    default: "Title 1",
    de: "de: Title 1"
  });
  editor = tabTranslation.model.createTranslationEditor("fr");
  editor.doMachineTranslation();
  expect(q.locTitle.getJson()).toStrictEqual({
    default: "Title 1",
    de: "de: Title 1"
  });
  editor.cancel();
  expect(q.locTitle.getJson()).toStrictEqual({
    default: "Title 1",
    de: "de: Title 1"
  });
});
test("Modify translation strings survey in a dialog, remove actions", () => {
  const creator = new CreatorTester();
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: "Title 1",
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {});
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if(options.area === "translation-tab:table-header-popup-editor") {
      const actions = options.survey.navigationBar.actions;
      actions.splice(actions.length - 3, 3);
    }
  });
  creator.JSON = json;
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const editor = tabTranslation.model.createTranslationEditor("de");
  const actions = editor.translation.stringsHeaderSurvey.navigationBar.actions;
  expect(actions).toHaveLength(1);
});

test("Check navigation bar in translation dialog", () => {
  let creator = new CreatorTester();
  let json: any = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: "Title 1",
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {});
  creator.JSON = json;
  let tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  let editor = tabTranslation.model.createTranslationEditor("de");
  let stringsHeaderSurvey = editor.translation.stringsHeaderSurvey;
  let navigationBar = stringsHeaderSurvey.navigationBar;
  expect(navigationBar).toBeInstanceOf(SurveyElementActionContainer);
  let fromLocaleAction = navigationBar.getActionById("svc-translation-fromlocale");
  expect(fromLocaleAction.location).toBe("start");
  expect(fromLocaleAction.component).toBe("svc-translate-from-action");
  expect(fromLocaleAction.data.additionalTitle).toBe("Translate from: ");
  expect(fromLocaleAction.data.additionalTitleCss).toBe("st-translation-machine-from__title");
  expect(fromLocaleAction.data.containerCss).toBe("st-translation-machine-from__container st-translation-machine-from__container--disabled");

  creator = new CreatorTester();
  json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: { default: "title", es: "es: title" },
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {});
  creator.JSON = json;
  tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  editor = tabTranslation.model.createTranslationEditor("de");
  expect(editor.translation.stringsHeaderSurvey.navigationBar.getActionById("svc-translation-fromlocale").data.containerCss).toBe("st-translation-machine-from__container");
});
test("Do not swap languages in the property grid on auto-translation, Bug#6548", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1",
            description: "desc"
          }
        ]
      }
    ]
  };
  creator.onMachineTranslate.add((sender, options) => {
    const translatedStrings = new Array<string>();
    options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
    options.callback(translatedStrings);
  });
  const tabTranslation = new TabTranslationPlugin(creator);
  tabTranslation.activate();
  const translation = tabTranslation.model;
  translation.addLocale("fr");
  translation.addLocale("de");
  const question = translation.settingsSurvey.getQuestionByName("locales");
  expect(question.value).toHaveLength(3);
  expect(question.value[1]["name"]).toBe("fr");
  expect(question.value[2]["name"]).toBe("de");
  const editor = translation.createTranslationEditor("de");
  editor.doMachineTranslation();
  editor.apply();
  expect(question.value).toHaveLength(3);
  expect(question.value[1]["name"]).toBe("fr");
  expect(question.value[2]["name"]).toBe("de");
});
