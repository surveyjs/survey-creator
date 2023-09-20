import { SurveyModel } from "survey-core";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import "survey-core/survey.i18n";

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
  const pagePropsGroup =root.groups[0];
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