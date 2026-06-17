import { QuestionTextModel, Serializer, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { editorLocalization } from "../../src/editorLocalization";

test("Check textwithreset editor", () => {
  Serializer.addProperty("survey",
    {
      name: "test",
      default: "default",
      category: "general",
      visibleIndex: 1,
    }
  );
  const survey = new SurveyModel({});
  const propertyGrid = new PropertyGridModelTester(survey);
  const questionEditor = <QuestionTextModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("text");
  expect(questionEditor.value).toBe("default");
  const resetAction = questionEditor.inputActionsContainer.getActionById("reset");
  expect(resetAction.title).toBe(editorLocalization.getString("pe.resetToDefaultCaption"));
  expect(resetAction.enabled).toBeFalsy();
  expect(resetAction.action).toBeDefined();

  survey.test = "some_value";
  expect(questionEditor.value).toBe("some_value");
  expect(resetAction.enabled).toBeTruthy();

  resetAction.action();
  expect(questionEditor.value).toBe("default");
  expect(resetAction.enabled).toBeFalsy();
  Serializer.removeProperty("survey", "test");
});

test("Check textwithreset editor is used for minErrorText on the first question selection", () => {
  const question = new QuestionTextModel("q1");
  question.inputType = "number";
  const propertyGrid = new PropertyGridModelTester(question);
  const questionEditor = <QuestionTextWithResetModel>propertyGrid.survey.getQuestionByName("minErrorText");
  expect(questionEditor.getType()).toBe("textwithreset");
  expect(questionEditor.resetValueAdorner.allowResetValue).toBeFalsy();

  question.minErrorText = "custom error text";
  expect(questionEditor.resetValueAdorner.allowResetValue).toBeTruthy();

  questionEditor.resetValueAdorner.resetValue();
  expect(question.minErrorText).toBe("The value should not be less than {0}");
  expect(questionEditor.resetValueAdorner.allowResetValue).toBeFalsy();
});

test("Check textwithreset editor is not loaded if max length is set", () => {
  Serializer.addProperty("survey",
    {
      name: "test",
      default: "default",
      category: "general",
      maxLength: 50,
      visibleIndex: 1,
    }
  );
  const survey = new SurveyModel({});
  const propertyGrid = new PropertyGridModelTester(survey);
  const questionEditor = <QuestionTextModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("text");
  expect(questionEditor.inputActionsContainer.getActionById("reset")).toBeNull();
  Serializer.removeProperty("survey", "test");
});

test("Check commentwithreset editor", () => {
  Serializer.addProperty("survey",
    {
      name: "test:text",
      default: "default",
      category: "general",
      visibleIndex: 1,
    }
  );
  const survey = new SurveyModel({});
  const propertyGrid = new PropertyGridModelTester(survey);
  const questionEditor = <QuestionTextModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("comment");
  expect(questionEditor.value).toBe("default");
  const resetAction = questionEditor.inputActionsContainer.getActionById("reset");
  expect(resetAction.title).toBe(editorLocalization.getString("pe.resetToDefaultCaption"));
  expect(resetAction.enabled).toBeFalsy();
  expect(resetAction.action).toBeDefined();

  survey.test = "some_value";
  expect(questionEditor.value).toBe("some_value");
  expect(resetAction.enabled).toBeTruthy();

  resetAction.action();
  expect(questionEditor.value).toBe("default");
  expect(resetAction.enabled).toBeFalsy();
  Serializer.removeProperty("survey", "test");

});

test("Check commentwithreset editor is not loaded if max length is set", () => {
  Serializer.addProperty("survey",
    {
      name: "test:text",
      default: "default",
      category: "general",
      maxLength: "50",
      visibleIndex: 1,
    }
  );
  const survey = new SurveyModel({});
  const propertyGrid = new PropertyGridModelTester(survey);
  const questionEditor = <QuestionTextModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("comment");
  expect(questionEditor.inputActionsContainer.getActionById("reset")).toBeNull();
  Serializer.removeProperty("survey", "test");
});