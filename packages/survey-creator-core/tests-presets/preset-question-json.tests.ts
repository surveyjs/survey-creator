import { QuestionPresetJsonModel } from "../src/presets/preset-question-json";
import { SurveyModel, CustomError } from "survey-core";

class TestQuestionPresetJsonModel extends QuestionPresetJsonModel {
  public getCssType(): string {
    return super.getCssType();
  }
  public onCheckForErrors(errors: Array<any>, isOnValueChanged: boolean, fireCallback: boolean): void {
    super.onCheckForErrors(errors, isOnValueChanged, fireCallback);
  }
}

describe("QuestionPresetJsonModel", () => {
  let question: TestQuestionPresetJsonModel;

  beforeEach(() => {
    question = new TestQuestionPresetJsonModel("q1");
  });

  test("Question type should be presetjson", () => {
    expect(question.getType()).toBe("presetjson");
  });

  test("Css type should be comment", () => {
    expect(question.getCssType()).toBe("comment");
  });

  test("Should initialize with empty value", () => {
    expect(question.value).toBeUndefined();
  });

  test("Should update value with valid JSON", () => {
    const validJson = { test: "value" };
    question.value = validJson;
    expect(question.value).toEqual(validJson);
    expect(question.textAreaModel.getTextValue()).toBe(JSON.stringify(validJson, null, 2));
  });

  test("Should handle text area changes with valid JSON", () => {
    const validJson = { type: "text" };
    question.textAreaModel.onTextAreaChange({ target: { value: JSON.stringify(validJson) } } as any);
    expect(question.value).toEqual(validJson);
  });

  test("Should not update value with invalid JSON", () => {
    const initialValue = { test: "value" };
    question.value = initialValue;
    question.textAreaModel.onTextAreaChange({ target: { value: "{invalid json" } } as any);
    expect(question.value).toEqual(initialValue);
  });

  test("Should add error when JSON is invalid", () => {
    const errors: any[] = [];
    question.textAreaModel.onTextAreaChange({ target: { value: "{invalid json" } } as any);
    question.onCheckForErrors(errors, false, true);
    expect(errors.length).toBe(1);
    expect(errors[0].text).toBe("JSON error");
  });

  test("Should not update value with incompatible JSON", () => {
    const initialValue = { test: "value" };
    question.value = initialValue;
    question.textAreaModel.onTextAreaChange({ target: { value: '{"typo": "text"}' } } as any);
    expect(question.value).toEqual(initialValue);
  });

  test("Should add error when JSON is incompatible", () => {
    const errors: any[] = [];
    question.textAreaModel.onTextAreaChange({ target: { value: '{"typo": "text"}' } } as any);
    question.onCheckForErrors(errors, false, true);
    expect(errors.length).toBe(1);
    expect(errors[0].text).toBe("JSON error");
  });

  test("Should not add error when JSON is valid", () => {
    const errors: any[] = [];
    question.textAreaModel.onTextAreaChange({ target: { value: '{"type": "text"}' } } as any);
    question.onCheckForErrors(errors, false, true);
    expect(errors.length).toBe(0);
  });

  test("Should not add error when JSON is valid JSON5", () => {
    const errors: any[] = [];
    question.textAreaModel.onTextAreaChange({ target: { value: '{type: "text"}' } } as any);
    question.onCheckForErrors(errors, false, true);
    expect(errors.length).toBe(0);
  });

  test("Should handle complex JSON objects", () => {
    const complexJson = {
      array: [1, 2, 3],
      nested: {
        object: {
          with: "values"
        }
      },
      boolean: true,
      number: 42
    };
    question.value = complexJson;
    expect(question.value).toEqual(complexJson);
    expect(question.textAreaModel.getTextValue()).toBe(JSON.stringify(complexJson, null, 2));
  });

  test("Should work within a survey", () => {
    const survey = new SurveyModel({
      elements: [
        {
          type: "presetjson",
          name: "q1"
        }
      ]
    });
    const question = survey.getQuestionByName("q1") as QuestionPresetJsonModel;
    expect(question).toBeTruthy();
    expect(question.getType()).toBe("presetjson");
  });
});