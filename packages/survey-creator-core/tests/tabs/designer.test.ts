import { SurveyModel, ILocalizableOwner, LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { editorLocalization } from "../../src/editorLocalization";
import { StringEditorViewModelBase } from "../../src/components/string-editor";
import { CreatorTester } from "../creator-tester";
import { TabDesignerPlugin } from "../../src/components/tabs/designer-plugin";

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
    const editor: StringEditorViewModelBase = new StringEditorViewModelBase(locStr, null);
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
  let editor: StringEditorViewModelBase = new StringEditorViewModelBase(survey.locTitle, null);
  expect(editor.maxLength).toBe(-1);
  try {
    Serializer.findProperty("survey", "title").maxLength = 4;
    survey = new SurveyModel({});
    editor = new StringEditorViewModelBase(survey.locTitle, null);
    expect(editor.maxLength).toBe(4);
  }
  finally {
    Serializer.findProperty("survey", "title").maxLength = -1;
  }
});

test("Designer widthMode css test", () => {
  const creator = new CreatorTester();
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  creator.survey.widthMode = "static";
  expect(designerPlugin.model.getDesignerCss()).toEqual("sd-container-modern sd-container-modern--static");
  creator.survey.widthMode = "responsive";
  expect(designerPlugin.model.getDesignerCss()).toEqual("sd-container-modern sd-container-modern--responsive");
});

test("Select survey in designer", ()=> {
  const creator = new CreatorTester();
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  creator.addNewQuestionInPage(()=>{});

  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  designerPlugin.model.clickDesigner();
  expect(creator.selectedElementName).toEqual("survey");
});
