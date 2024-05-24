import { ComponentCollection, Serializer, SurveyModel } from "survey-core";
import { createColor } from "../../../src/components/tabs/theme-custom-questions/color-alpha";
import { parseColor } from "../../../src/utils/utils";

export { QuestionFileEditorModel } from "../../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../../src/custom-questions/question-color";

test("Check parseColor and createColor functions", () => {
  let color = "#673241";
  let parsedColor = parseColor(color);
  expect(parsedColor).toStrictEqual({
    color: "#673241",
    opacity: 100
  });
  let createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65)";
  parsedColor = parseColor(color);
  expect(parsedColor).toStrictEqual({
    color: "#673241",
    opacity: 100
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 1)");
  color = "rgb(103, 50, 65, 0.75)";
  parsedColor = parseColor(color);
  expect(parsedColor).toStrictEqual({
    color: "#673241",
    opacity: 75
  });
  createdColor = createColor(parsedColor);
  expect(createdColor).toBe("rgba(103, 50, 65, 0.75)");
});

test("Check coloralpha question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "coloralpha",
      name: "test",
    }]
  });
  const question = survey.getAllQuestions()[0];
  expect(survey.data).toStrictEqual({});
  survey.data = {
    "test": "rgba(103, 50, 65, 0.75)"
  };
  expect(question.value).toEqual("rgba(103, 50, 65, 0.75)");
  expect(question.contentPanel.questions[0].value).toBe("#673241");
  expect(question.contentPanel.questions[1].value).toBe(75);

  question.value = {
    "color": "#673fff",
    "opacity": 50
  };
  expect(question.value).toEqual("rgba(103, 63, 255, 0.5)");
  expect(survey.data).toStrictEqual({ "test": "rgba(103, 63, 255, 0.5)" });

  question.contentPanel.questions[0].value = "#673000";
  question.contentPanel.questions[1].value = 25;

  expect(question.value).toEqual("rgba(103, 48, 0, 0.25)");
  expect(survey.data).toStrictEqual({ test: "rgba(103, 48, 0, 0.25)" });
});

test("Check coloralpha + another composite questions", () => {
  const json = {
    name: "elementsettingstest",
    showInToolbox: false,
    elementsJSON: [
      {
        type: "coloralpha",
        name: "backcolor",
        titleLocation: "left",
        descriptionLocation: "hidden"
      },
    ],
  };
  ComponentCollection.Instance.add(json);
  const survey = new SurveyModel({
    elements: [{
      type: "elementsettingstest",
      name: "test",
      defaultValue: {
        backcolor: "rgba(68, 69, 67, 0.5)"
      }
    }]
  });
  const question = survey.getAllQuestions()[0];

  expect(question.contentPanel.questions[0].value).toBe("rgba(68, 69, 67, 0.5)");
  expect(survey.data).toStrictEqual({ test: { backcolor: "rgba(68, 69, 67, 0.5)" } });

  expect(question.contentPanel.questions[0].contentPanel.questions[0].value).toBe("#444543");
  expect(question.contentPanel.questions[0].contentPanel.questions[1].value).toBe(50);

  survey.data = {
    test: {
      backcolor: "#fffff0",
    }
  };
  expect(question.contentPanel.questions[0].value).toBe("rgba(255, 255, 240, 1)");
  expect(survey.data).toStrictEqual({ test: { backcolor: "#fffff0" } });

  question.contentPanel.questions[0].contentPanel.questions[0].value = "#19b000";
  question.contentPanel.questions[0].contentPanel.questions[1].value = 40;

  expect(question.contentPanel.questions[0].value).toBe("rgba(25, 176, 0, 0.4)");
  expect(survey.data).toStrictEqual({ test: { backcolor: "rgba(25, 176, 0, 0.4)" } });

  Serializer.removeClass("elementsettingstest");
});

test("Check coloralpha question passes some properties to color question", () => {
  const survey = new SurveyModel({
    elements: [{
      type: "coloralpha",
      colorTitleLocation: "left",
      colorTitle: "Test",
      titleLocation: "hidden",
      name: "test",
      choices: [{ value: "#fff", text: "White" }]
    }]
  });
  const question = survey.getAllQuestions()[0];
  const colorQuestion = question.contentPanel.questions[0];
  expect(colorQuestion.titleLocation).toBe("left");
  expect(question.titleLocation).toBe("hidden");
  expect(colorQuestion.titleLocation).toBe("left");
  expect(colorQuestion.title).toBe("Test");
  expect(colorQuestion.choices[0].value).toBe("#fff");
  expect(colorQuestion.choices[0].title).toBe("White");
  question.choices = [{ value: "#000", text: "Black" }];
  expect(colorQuestion.choices[0].value).toBe("#000");
  expect(colorQuestion.choices[0].title).toBe("Black");
});