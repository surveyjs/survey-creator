import * as Survey from "survey-knockout";
import { EditableObject } from "../src/propertyEditors/editableObject";

export default QUnit.module("Editable Object Tests");

QUnit.test("correctly create editable object test", function (assert) {
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

QUnit.test("editable object, apply function test", function (assert) {
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
  const textValidator = new Survey.TextValidator;
  textValidator.minLength = 5;
  textValidator.maxLength = 5;
  edObj.validators.push(textValidator);
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

QUnit.test("Copy question with correct locale", function (assert) {
  var survey = new Survey.Survey({
    locale: "de",
    elements: [{ type: "text", name: "q1" }],
  });
  var question = <Survey.Question>survey.getQuestionByName("q1");
  var editableObj = new EditableObject(question);
  assert.equal(
    editableObj.editableObj.getType(),
    "text",
    "Create object with correct type"
  );
  assert.ok(
    editableObj.editableObj["parent"],
    "Create object with correct parent"
  );
  assert.equal(
    (<Survey.Question>editableObj.editableObj).getLocale(),
    "de",
    "Locale set correctly"
  );
});

QUnit.test("Test reset", function (assert) {
  var survey = new Survey.Survey({
    locale: "de",
    elements: [{ type: "text", name: "q1" }],
  });
  var question = <Survey.Question>survey.getQuestionByName("q1");
  var editableObj = new EditableObject(question);
  editableObj.editableObj["name"] = "q2";
  editableObj.reset();
  assert.equal(editableObj.editableObj["name"], "q1", "Reset the value");
});
QUnit.test("Copy questions, Bug#1078", function (assert) {
  var survey = new Survey.Survey({
    pages: [
      {
        name: "page11",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2" },
        ],
      },
    ],
  });
  var editableObj = new EditableObject(survey);
  assert.equal(
    (<Survey.SurveyModel>(
      editableObj.editableObj["originalObj"]
    )).getAllQuestions().length,
    2,
    "Two questions are here"
  );
  assert.equal(survey.getType(), "survey");

  assert.equal(
    editableObj.editableObj["pages"][0]["originalObj"].name,
    "page11"
  );
});
QUnit.test("Change question page, Bug#1942", function (assert) {
  const survey = new Survey.Survey({
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
        ],
      },
      {
        name: "page2",
      },
    ],
  });
  const question = survey.getAllQuestions()[0];
  const editableObj = new EditableObject(question);
  assert.equal(survey.getAllQuestions().length, 1, "One question initially");
  editableObj.editableObj["page"] = survey.pages[1];
  assert.equal(survey.getAllQuestions().length, 1, "We still have one question");
  editableObj.applyAll();
  assert.equal(survey.getAllQuestions().length, 1, "Just one question");
  assert.equal(question.page.name, "page2", "Copy to correct page");
});
QUnit.test("Change page description, Bug#2374", function (assert) {
  const survey = new Survey.Survey({
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
        ],
      },
      {
        name: "page2",
      },
    ],
  });
  const editableObj = new EditableObject(survey);
  const obj = editableObj.editableObj;
  assert.ok(obj["pages"], "pages was created");
  obj["pages"][1].description = "Test desc";
  editableObj.applyAll();
  assert.equal(survey.pages[1].description, "Test desc", "Description sets correctly");
});
QUnit.test("Change binding property, Bug#2887", function (assert) {
  const survey = new Survey.Survey({
    elements: [
      { type: "dropdown", name: "q1" },
      { type: "paneldynamic", name: "q2" }
    ]
  });
  const panel = <Survey.QuestionPanelDynamicModel>survey.getQuestionByName("q2");
  const editableObj = new EditableObject(panel);
  const obj = <Survey.QuestionPanelDynamicModel>editableObj.editableObj;
  obj.bindings.setBinding("panelCount", "q1");
  editableObj.applyAll();
  assert.equal(panel.bindings.getValueNameByPropertyName("panelCount"), "q1", "Bindings apply correctly");
});
