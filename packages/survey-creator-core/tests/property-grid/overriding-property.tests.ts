import { QuestionTextModel, Base, Serializer, PanelModel } from "survey-core";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import { PropertyGridModelTester } from "./property-grid.base";

const linkDummy = new QuestionLinkValueModel("q");

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
  expect(visibleIfGoQuestion.linkValueText).toBe("Enabled by a condition");
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
test("Do not show visible_overridingProperty if visible property is hidden", () => {
  const question = new QuestionTextModel("q");
  question.visibleIf = "{q1} = false";
  Serializer.findProperty("question", "visible").visible = false;
  let propertyGrid = new PropertyGridModelTester(question);
  let visibleIfGoQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("visible_overridingProperty");
  expect(visibleIfGoQuestion).toBeFalsy();
  Serializer.findProperty("question", "visible").visible = true;
  propertyGrid = new PropertyGridModelTester(question);
  visibleIfGoQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("visible_overridingProperty");
  expect(visibleIfGoQuestion).toBeTruthy();
});

test("Check boolean question support grouping event with overridigng property", () => {
  const question = new QuestionTextModel("q");
  let propertyGrid = new PropertyGridModelTester(question);
  question.visibleIf = "{q1} = false";
  expect(propertyGrid.survey.getQuestionByName("isRequired").cssClasses.mainRoot.includes("spg-row-narrow__question")).toBeTruthy();
});
test("Show/hide go to visibleIf link for panel", () => {
  const panel = new PanelModel("q");
  let propertyGrid = new PropertyGridModelTester(panel);
  const visibleIfGoQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("visible_overridingProperty");
  const logicPanel = propertyGrid.survey.getPanelByName("logic");
  expect(logicPanel.isExpanded).toBeFalsy();
  expect(visibleIfGoQuestion).toBeTruthy();
  expect(visibleIfGoQuestion.linkValueText).toBe("Enabled by a condition");
  expect(visibleIfGoQuestion.startWithNewLine).toBeFalsy();
  expect(visibleIfGoQuestion.isVisible).toBe(false);
  panel.visibleIf = "{q1} = false";
  expect(visibleIfGoQuestion.isVisible).toBe(true);
  panel.visibleIf = "";
  expect(visibleIfGoQuestion.isVisible).toBe(false);
  panel.visibleIf = "{q1} = false";
  expect(visibleIfGoQuestion.isVisible).toBe(true);
  visibleIfGoQuestion.doLinkClick();
  expect(logicPanel.isExpanded).toBeTruthy();
});
