import * as ko from "knockout";
import * as Survey from "survey-knockout";
// import { SurveyUndoRedo } from "../src/undoRedoManager";
import { UndoRedoManager, Transaction, Action } from "../src/undoredomanager";
import { SurveyCreator } from "../src/editor";

export default QUnit.module("UndoRedoTests");

QUnit.test("UndoRedoManager Action Class", function(assert) {
  var element = new Survey.QuestionRadiogroupModel("element");
  var propertyName = "title";
  var oldValue = "Old Title";
  var newValue = "New Title";

  var elementTitleAction = new Action(
    propertyName,
    oldValue,
    newValue,
    element
  );

  element.title = oldValue;

  assert.equal(element.title, oldValue, "old title exists");

  element.title = newValue;

  assert.equal(element.title, newValue, "new title exists");

  elementTitleAction.rollback();
  assert.equal(
    element.title,
    oldValue,
    "action rollback test old title (same as name)"
  );

  elementTitleAction.apply();
  assert.equal(element.title, newValue, "action apply test new title");
});

QUnit.test("UndoRedoManager Transaction Class", function(assert) {
  var transaction = new Transaction("transaction1");
  var element = new Survey.QuestionRadiogroupModel("element");
  var propertyName = "title";

  element.title = "title1";
  var elementTitleAction = new Action(
    propertyName,
    "title1",
    "title2",
    element
  );
  element.title = "title2";
  transaction.addAction(elementTitleAction);

  elementTitleAction = new Action(propertyName, "title2", "title3", element);
  element.title = "title3";
  transaction.addAction(elementTitleAction);

  transaction.rollback();
  assert.equal(element.title, "title1", "first title");

  transaction.apply();
  assert.equal(
    element.title,
    "title3",
    "third title, miss title2 because of transaction"
  );
});

QUnit.test("Undo/redo survey title", function(assert) {
  var survey = new Survey.Survey(getSurveyJson());
  var undoRedoManager = new UndoRedoManager(survey);
  var oldTitle = survey.title;
  var newTitle = "New Title";

  survey.title = newTitle;

  assert.equal(survey.title, newTitle, "new title applied");

  undoRedoManager.undo();

  assert.equal(survey.title, oldTitle, "undo to old title");

  undoRedoManager.redo();

  assert.equal(survey.title, newTitle, "redo to new title");
});

QUnit.test("Undo/redo canUndo canRedo", function(assert) {
  var survey = new Survey.Survey(getSurveyJson());
  var undoRedoManager = new UndoRedoManager(survey);
  var oldTitle = survey.title;
  var newTitle = "New Title";

  survey.title = newTitle;

  assert.equal(survey.title, newTitle, "new title applied");

  assert.equal(undoRedoManager.canRedo(), false, "can't redo");
  assert.equal(undoRedoManager.canUndo(), true, "can undo");
  undoRedoManager.undo();

  assert.equal(survey.title, oldTitle, "undo to old title");

  assert.equal(undoRedoManager.canUndo(), false, "can't undo");
  assert.equal(undoRedoManager.canRedo(), true, "can redo");
  undoRedoManager.redo();

  assert.equal(survey.title, newTitle, "redo to new title");
});

QUnit.test("Undo/redo add element", function(assert) {
  var survey = new Survey.Survey(getSurveyJson());
  var undoRedoManager = new UndoRedoManager(survey);
  var currentPage = survey.currentPage;
  var newElement = new Survey.QuestionRadiogroupModel("newElement");

  assert.equal(
    currentPage.questions.length,
    2,
    "there is 2 questions on the current page"
  );

  currentPage.addElement(newElement);

  assert.equal(
    currentPage.questions.length,
    3,
    "there is 3 questions on the current page"
  );

  undoRedoManager.undo();
  assert.equal(
    currentPage.questions.length,
    2,
    "there is 2 questions after the undo()"
  );
  undoRedoManager.redo();
  assert.equal(
    currentPage.questions.length,
    3,
    "there is 3 questions after the redo()"
  );
});

QUnit.test("Undo/redo add element with transaction", function(assert) {
  var survey = new Survey.Survey(getSurveyJson());
  var undoRedoManager = new UndoRedoManager(survey);
  var currentPage = survey.currentPage;
  var newElement = new Survey.QuestionRadiogroupModel("newElement");
  var newElement2 = new Survey.QuestionRadiogroupModel("newElement2");

  assert.equal(
    currentPage.questions.length,
    2,
    "there is 2 questions on the current page"
  );

  undoRedoManager.startTransaction("add elements");
  currentPage.addElement(newElement);
  currentPage.addElement(newElement2);
  undoRedoManager.stopTransaction();

  assert.equal(
    currentPage.questions.length,
    4,
    "there is 4 questions on the current page"
  );

  undoRedoManager.undo();
  assert.equal(
    currentPage.questions.length,
    2,
    "there is 2 questions after the undo()"
  );
  undoRedoManager.redo();
  assert.equal(
    currentPage.questions.length,
    4,
    "there is 4 questions after the redo()"
  );
});

// QUnit.test("Enabeling undo redo", function(assert) {
//   var survey = new Survey.Survey(getSurveyJson());
//   var undo = new SurveyUndoRedo();
//   assert.equal(undo.koCanUndo(), false, "CanUndo 1");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 1");
//   undo.setCurrent(survey, null);
//   assert.equal(undo.koCanUndo(), false, "CanUndo 2");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 2");
//   undo.setCurrent(survey, null);
//   assert.equal(undo.koCanUndo(), true, "CanUndo 3");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 3");
//   undo.undo();
//   assert.equal(undo.koCanUndo(), false, "CanUndo 4");
//   assert.equal(undo.koCanRedo(), true, "CanRedo 4");
//   undo.redo();
//   assert.equal(undo.koCanUndo(), true, "CanUndo 5");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 5");
//   undo.undo();
//   undo.setCurrent(survey, null);
//   assert.equal(undo.koCanUndo(), true, "CanUndo 6");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 6");
//   undo.setCurrent(survey, null);
//   assert.equal(undo.koCanUndo(), true, "CanUndo 7");
//   assert.equal(undo.koCanRedo(), false, "CanRedo 7");
//   undo.undo();
//   assert.equal(undo.koCanUndo(), true, "CanUndo 8");
//   assert.equal(undo.koCanRedo(), true, "CanRedo 8");
//   undo.undo();
//   assert.equal(undo.koCanUndo(), false, "CanUndo 9");
//   assert.equal(undo.koCanRedo(), true, "CanRedo 9");
// });
// QUnit.test("Do undo", function(assert) {
//   var survey = new Survey.Survey(getSurveyJson());
//   var undo = new SurveyUndoRedo();
//   undo.setCurrent(survey, null);
//   survey.addNewPage("New Page");
//   undo.setCurrent(survey, null);
//   assert.equal(4, survey.pages.length);
//   survey = new Survey.Survey(undo.undo().surveyJSON);
//   assert.equal(3, survey.pages.length);
// });
// QUnit.test("Do undo/redo", function(assert) {
//   var survey = new Survey.Survey(getSurveyJson());
//   var undo = new SurveyUndoRedo();
//   undo.setCurrent(survey, null);
//   survey.addNewPage("New Page");
//   undo.setCurrent(survey, null);
//   survey = new Survey.Survey(undo.undo().surveyJSON);
//   assert.equal(3, survey.pages.length, "3 pages after undo");
//   survey = new Survey.Survey(undo.redo().surveyJSON);
//   assert.equal(4, survey.pages.length, "4 pages after redo");
// });
// QUnit.test("Undo maximum count", function(assert) {
//   var survey = new Survey.Survey(getSurveyJson());
//   var undo = new SurveyUndoRedo();
//   undo.maximumCount = 2;
//   for (var i = 0; i < 10; i++) {
//     undo.setCurrent(survey, null);
//   }
//   assert.equal(undo.koCanUndo(), true, "Initial can undo");
//   undo.undo();
//   undo.undo();
//   assert.equal(undo.koCanUndo(), false, "Store only for two undo");
// });
// QUnit.test("Do undo/redo with editor", function(assert) {
//   var editor = new SurveyCreator();
//   editor.text = JSON.stringify(getSurveyJson());
//   editor.addPage();
//   assert.equal(4, editor.survey.pages.length);
//   editor.doUndoClick();
//   assert.equal(3, editor.survey.pages.length);
//   editor.doRedoClick();
//   assert.equal(4, editor.survey.pages.length);
//   assert.equal(
//     editor.koSelectedObject().value,
//     editor.survey.pages[editor.survey.pages.length - 1],
//     "the last page should be selected"
//   );
// });

function getSurveyJson(): any {
  return {
    title: "old title",
    pages: [
      {
        name: "page1",
        questions: [
          { type: "text", name: "question1" },
          {
            name: "question2",
            choices: [
              "one",
              { value: "two", text: "second value" },
              { value: 3, text: "third value" }
            ],
            type: "checkbox"
          }
        ]
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix"
          },
          { name: "question5", type: "rating" }
        ]
      }
    ]
  };
}
