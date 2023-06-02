import { QuestionTextModel, Base, Serializer } from "survey-core";
import { PropertyGridModel, PropertyGridEditorCollection } from "../../src/property-grid";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions
} from "../../src/creator-settings";
import { QuestionLinkValueModel } from "../../src/components/link-value";

const linkDummy = new QuestionLinkValueModel("q");

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = undefined) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
}

test("Enable/disable visible property editor on changing visibleIf", () => {
  expect(Serializer.findProperty("question", "visible").overridingProperty).toBe("visibleIf");
  expect(Serializer.findClass("linkvalue")).toBeTruthy();
  const question = new QuestionTextModel("q");
  let propertyGrid = new PropertyGridModelTester(question);
  const visibleQuestion = propertyGrid.survey.getQuestionByName("visible");
  expect(visibleQuestion.isReadOnly).toBe(false);
  question.visibleIf = "{q1} = false";
  expect(visibleQuestion.isReadOnly).toBe(true);
  question.visibleIf = "";
  expect(visibleQuestion.isReadOnly).toBe(false);
});
test("Show/hide go to visibleIf link", () => {
  const question = new QuestionTextModel("q");
  let propertyGrid = new PropertyGridModelTester(question);
  const visibleIfGoQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("visible_overridingProperty");
  const logicPanel = propertyGrid.survey.getPanelByName("logic");
  expect(logicPanel.isExpanded).toBeFalsy();
  expect(visibleIfGoQuestion).toBeTruthy();
  expect(visibleIfGoQuestion.linkValueText).toBe("Set by Visible if");
  expect(visibleIfGoQuestion.startWithNewLine).toBeFalsy();
  expect(visibleIfGoQuestion.isVisible).toBe(false);
  question.visibleIf = "{q1} = false";
  expect(visibleIfGoQuestion.isVisible).toBe(true);
  question.visibleIf = "";
  expect(visibleIfGoQuestion.isVisible).toBe(false);
  question.visibleIf = "{q1} = false";
  expect(visibleIfGoQuestion.isVisible).toBe(true);
  visibleIfGoQuestion.doLinkClick();
  expect(logicPanel.isExpanded).toBeTruthy();
});