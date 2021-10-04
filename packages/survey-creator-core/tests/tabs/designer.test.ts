import { SurveyModel, ILocalizableOwner, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../../src/editorLocalization";
import { StringEditorViewModelBase } from "../../src/components/string-editor";
import { CreatorTester } from "../creator-tester";
import { TabDesignerPlugin } from "../../src/components/tabs/designer";

test("Survey/page title/description placeholders text", () => {
  new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text" }
        ]
      }
    ]
  });
  const checkPlaceholder = (owner: ILocalizableOwner, ownerName: string, propertyName: string) => {
    const locStr: LocalizableString = new LocalizableString(owner, false, propertyName);
    const editor: StringEditorViewModelBase = new StringEditorViewModelBase(locStr);
    const property: JsonObjectProperty = Serializer.findProperty(ownerName, propertyName);
    const placeholder: string = editorLocalization.getString(property.placeholder);
    expect(editor.placeholder).toEqual(placeholder);
  };
  checkPlaceholder(survey, "survey", "title");
  checkPlaceholder(survey, "survey", "description");
  checkPlaceholder(survey.pages[0], "page", "title");
  checkPlaceholder(survey.pages[0], "page", "description");
});

test("Save survey action properties", () => {
  const creator = new CreatorTester();
  const action = creator.getActionBarItem("svd-save");
  expect(action.visible).toBeFalsy();
  expect(action.active).toBeFalsy();
  expect(action.enabled).toBeFalsy();

  creator.saveSurveyFunc = () => { };
  expect(action.visible).toBeTruthy();
  expect(action.active).toBeFalsy();
  expect(action.enabled).toBeFalsy();

  creator.activeTab = "test";
  expect(action.visible).toBeFalsy();
  expect(action.active).toBeFalsy();
  expect(action.enabled).toBeFalsy();

  creator.activeTab = "designer";
  expect(action.visible).toBeTruthy();
  expect(action.active).toBeFalsy();
  expect(action.enabled).toBeFalsy();

  creator.setModified({});
  expect(action.visible).toBeTruthy();
  expect(action.active).toBeTruthy();
  expect(action.enabled).toBeTruthy();
});

test("StringEditorViewModelBase maxLength", () => {
  let survey: SurveyModel = new SurveyModel({});
  let editor: StringEditorViewModelBase = new StringEditorViewModelBase(survey.locTitle);
  expect(editor.maxLength).toBe(-1);
  try {
    Serializer.findProperty("survey", "title").maxLength = 4;
    survey = new SurveyModel({});
    editor = new StringEditorViewModelBase(survey.locTitle);
    expect(editor.maxLength).toBe(4);
  }
  finally {
    Serializer.findProperty("survey", "title").maxLength = -1;
  }
});