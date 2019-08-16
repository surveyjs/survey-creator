import * as Survey from "survey-knockout";
import { SurveyElementSelector } from "../src/propertyEditors/surveyElementSelector";
export default QUnit.module("SurveyElementSelectorTests");

QUnit.test("SurveyElementSelector get/set value", function(assert) {
  var survey = createSurvey();
  var counter = 0;
  var value = "q1";
  var q1 = <Survey.Question>survey.getAllQuestions()[0];
  var selector = new SurveyElementSelector(survey);
  assert.equal(selector.koElements().length, 5, "We have five questions");
  selector.onValueChangedCallback = function(newValue: string) {
    counter++;
    value = newValue;
  };
  selector.value = value;
  assert.equal(selector.koValue(), "q1", "Updated value");
  selector.koValue("q2");
  assert.equal(value, "q2", "Callback is working");
  assert.equal(counter, 1, "Callback was called one time");
});

function createSurvey(): Survey.SurveyModel {
  return new Survey.SurveyModel({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1"
          },
          {
            type: "text",
            name: "q2"
          },
          {
            type: "text",
            name: "q3"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [
              {
                type: "text",
                name: "q4"
              },
              {
                type: "checkbox",
                name: "q5",
                choices: ["item1", "item2", "item3"]
              }
            ]
          }
        ]
      }
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        setToName: "q2",
        runExpression: "{q2} + 1"
      }
    ]
  });
}
