import { QuestionTextModel, Serializer, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { QuestionTextWithResetModel } from "../../src/custom-questions/question-text-with-reset";
import "../../src/custom-questions/question-text-with-reset";
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
  const questionEditor = <QuestionTextWithResetModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("textwithreset");
  expect(questionEditor.value).toBe("default");
  expect(questionEditor.resetValueAdorner.caption).toBe(editorLocalization.getString("pe.resetToDefaultCaption"));
  expect(questionEditor.resetValueAdorner.isDisabled).toBeTruthy();
  expect(questionEditor.resetValueAdorner.resetValueCallback).toBeDefined();

  survey.test = "some_value";
  expect(questionEditor.value).toBe("some_value");
  expect(questionEditor.resetValueAdorner.isDisabled).toBeFalsy();

  questionEditor.resetValueAdorner.resetValue();
  expect(questionEditor.value).toBe("default");
  expect(questionEditor.resetValueAdorner.isDisabled).toBeTruthy();
  Serializer.removeProperty("survey", "test");
});

test("Check textwithreset editor is not loaded if max length is set", () => {
  Serializer.addProperty("survey",
    {
      name: "test",
      default: "default",
      category: "general",
      maxLength: "50",
      visibleIndex: 1,
    }
  );
  const survey = new SurveyModel({});
  const propertyGrid = new PropertyGridModelTester(survey);
  const questionEditor = <QuestionTextModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("text");
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
  const questionEditor = <QuestionTextWithResetModel>propertyGrid.survey.getQuestionByName("test");
  expect(questionEditor.getType()).toBe("commentwithreset");
  expect(questionEditor.value).toBe("default");
  expect(questionEditor.resetValueAdorner.caption).toBe(editorLocalization.getString("pe.resetToDefaultCaption"));
  expect(questionEditor.resetValueAdorner.isDisabled).toBeTruthy();
  expect(questionEditor.resetValueAdorner.resetValueCallback).toBeDefined();

  survey.test = "some_value";
  expect(questionEditor.value).toBe("some_value");
  expect(questionEditor.resetValueAdorner.isDisabled).toBeFalsy();

  questionEditor.resetValueAdorner.resetValue();
  expect(questionEditor.value).toBe("default");
  expect(questionEditor.resetValueAdorner.isDisabled).toBeTruthy();
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
  Serializer.removeProperty("survey", "test");
});