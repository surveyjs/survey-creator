import { SurveyModel, ILocalizableOwner, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../../src/editorLocalization";
import { StringEditorViewModelBase } from "../../src/components/string-editor";
import { CreatorTester } from "../creator-tester";

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
    const locStr: LocalizableString = new LocalizableString(owner, false, propertyName)
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