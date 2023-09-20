import { Serializer, SurveyModel, surveyLocalization, Base, QuestionDropdownModel, PanelModel, QuestionMatrixDropdownModel, QuestionTextModel, QuestionCommentModel, ListModel, Action, IAction, ItemValue, QuestionMatrixDynamicModel } from "survey-core";
import { Translation, TranslationItem } from "../../src/components/tabs/translation";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { settings } from "../../src/creator-settings";
import { CreatorTester } from "../creator-tester";
import { parse } from "papaparse";
import "survey-core/survey.i18n";
import { editorLocalization } from "../../src/editorLocalization";
export * from "../../src/localization/russian";

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
  const editor = new Translation(survey).createDialogTranslation("fr");
  const translation = editor.translation;
  expect(translation.isEditMode).toBeTruthy();
  expect(translation.locales).toHaveLength(1);
  expect(translation.locales[0]).toBe("fr");
  translation.reset();
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
  const editor = new Translation(survey).createDialogTranslation("fr");
  const translation = editor.translation;
  translation.reset();
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