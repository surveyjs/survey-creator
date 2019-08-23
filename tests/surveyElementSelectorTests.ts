import * as Survey from "survey-knockout";
import { SurveyElementSelector } from "../src/propertyEditors/surveyElementSelector";
export default QUnit.module("SurveyElementSelectorTests");

QUnit.test("SurveyElementSelector get/set value", function(assert) {
  var survey = createSurvey();
  var counter = 0;
  var value = "q1";
  var selector = new SurveyElementSelector(survey);
  assert.equal(selector.koElements().length, 5, "We have five questions");
  selector.onValueChangedCallback = function(newValue: string) {
    counter++;
    value = newValue;
  };
  selector.value = value;
  assert.equal(selector.koValue(), "q1", "Updated value");
  assert.equal(
    (<Survey.Question>selector.element).name,
    "q1",
    "Element set correctly, q1"
  );
  selector.koValue("q2");
  assert.equal(value, "q2", "Callback is working");
  assert.equal(counter, 1, "Callback was called one time");
  assert.equal(
    (<Survey.Question>selector.element).name,
    "q2",
    "Element set correctly, q2"
  );
  selector.element = <Survey.Question>survey.getAllQuestions()[2];
  assert.equal(selector.value, "q3", "Set via element property");
});

QUnit.test("SurveyElementSelector diffrent types", function(assert) {
  var survey = createSurvey();
  var selector = new SurveyElementSelector(survey, "page");
  assert.equal(selector.koElements().length, 2, "We have two pages");
  selector = new SurveyElementSelector(survey, "panel");
  assert.equal(selector.koElements().length, 1, "We have one panel");
});

QUnit.test("SurveyElementSelector showTitle = true", function(assert) {
  var survey = createSurvey();
  var selector = new SurveyElementSelector(survey, "question", true);
  assert.equal(
    selector.koElements()[0].text,
    "Question 1",
    "Get question title"
  );
  assert.equal(selector.koElements()[1].text, "q2", "Get question name");
  selector = new SurveyElementSelector(survey, "page", true);
  assert.equal(selector.koElements()[0].text, "Page 1", "Get page title");
  assert.equal(selector.koElements()[1].text, "page2", "Get page name");
});

QUnit.test("SurveyElementSelector item.koDisabled()", function(assert) {
  var survey = createSurvey();
  (<Survey.Question>survey.getAllQuestions()[0]).visibleIf = "some text";
  (<Survey.Question>survey.getAllQuestions()[1]).visibleIf = "some text";
  var selector = new SurveyElementSelector(survey);
  selector.disabledPropertyName = "visibleIf";
  selector.value = "q1";
  selector.updateItems();
  assert.equal(
    selector.koElements()[0].koDisabled(),
    false,
    "The first item is not disabled"
  );
  assert.equal(
    selector.koElements()[1].koDisabled(),
    true,
    "The second item is disabled"
  );
  assert.equal(
    selector.koElements()[2].koDisabled(),
    false,
    "The third item is not disabled"
  );
  selector.value = "q3";
  selector.updateItems();
  assert.equal(
    selector.koElements()[0].koDisabled(),
    false,
    "The first item is not disabled, since it was selected before"
  );
});

QUnit.test("SurveyElementSelector validation", function(assert) {
  var survey = createSurvey();
  var selector = new SurveyElementSelector(survey, "question", true);
  assert.equal(selector.hasError(), true, "Value is not selected");
  assert.equal(
    selector.koErrorText(),
    "Please select the element",
    "Error text is correct"
  );
  selector.koValue("q1");
  assert.equal(selector.hasError(), false, "Value is selected");
  assert.equal(selector.koErrorText(), "", "Error text is empty");
});

function createSurvey(): Survey.SurveyModel {
  return new Survey.SurveyModel({
    pages: [
      {
        name: "page1",
        title: "Page 1",
        elements: [
          {
            type: "text",
            name: "q1",
            title: "Question 1"
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
