import * as Survey from "survey-knockout";
import { EditableObject } from "../src/propertyEditors/editableObject";

export default QUnit.module("Editable Object Tests");

QUnit.test("correctly create editable object test", function(assert) {
  var question = new Survey.QuestionText("q1");
  question.validators.push(new Survey.NumericValidator(1, 10));
  question.inputType = "currency";
  var editableObj = new EditableObject(question);
  assert.equal(
    editableObj.editableObj.getType(),
    "text",
    "Create object with correct type"
  );
  var edObj = <Survey.QuestionText>editableObj.editableObj;
  assert.equal(edObj.validators.length, 1, "There is one validator");
  assert.equal(
    edObj.validators[0].getType(),
    "numericvalidator",
    "Validator is correct type"
  );
  assert.equal(edObj.inputType, "currency", "inputType set correctly");
});

QUnit.test("editable object, apply function test", function(assert) {
  var question = new Survey.QuestionText("q1");
  question.validators.push(new Survey.NumericValidator(1, 10));
  question.inputType = "currency";
  var editableObj = new EditableObject(question);
  assert.equal(
    editableObj.isPropertyChanged("validators"),
    false,
    "The property is not changed"
  );
  var edObj = <Survey.QuestionText>editableObj.editableObj;
  assert.equal((<any>edObj).isCopy, true, "Tell that it is a copy");
  (<Survey.NumericValidator>edObj.validators[0]).maxValue = 100;
  edObj.validators.push(new Survey.TextValidator(5, 10));
  edObj.name = "question1";
  edObj.inputType = "color";
  assert.equal(
    editableObj.isPropertyChanged("validators"),
    true,
    "The property is changed"
  );
  editableObj.apply("validators");
  assert.equal(question.validators.length, 2, "There are two validators");
  assert.equal(
    (<Survey.NumericValidator>question.validators[0]).maxValue,
    100,
    "The first validator is changed"
  );
  assert.equal(
    question.validators[1].getType(),
    "textvalidator",
    "The second validator created correctly"
  );
  editableObj.apply("name");
  editableObj.apply("inputType");
  assert.equal(
    question.name,
    "question1",
    "The name property is changed correctly"
  );
  assert.equal(
    question.inputType,
    "color",
    "The inputType property is changed correctly"
  );
});

QUnit.test("Copy question with correct locale", function(assert) {
  var survey = new Survey.Survey({
    locale: "de",
    elements: [{ type: "text", name: "q1" }]
  });
  var question = <Survey.Question>survey.getQuestionByName("q1");
  var editableObj = new EditableObject(question);
  assert.equal(
    editableObj.editableObj.getType(),
    "text",
    "Create object with correct type"
  );
  assert.equal(
    (<Survey.Question>editableObj.editableObj).getLocale(),
    "de",
    "Locale set correctly"
  );
});

QUnit.test("Test reset", function(assert) {
  var survey = new Survey.Survey({
    locale: "de",
    elements: [{ type: "text", name: "q1" }]
  });
  var question = <Survey.Question>survey.getQuestionByName("q1");
  var editableObj = new EditableObject(question);
  editableObj.editableObj["name"] = "q2";
  editableObj.reset();
  assert.equal(editableObj.editableObj["name"], "q1", "Reset the value");
});
