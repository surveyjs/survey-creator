import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyLiveTester } from "../src/surveylive";

export default QUnit.module("surveyLiveTests");

var surveyCreator = {
  createSurvey: json => new Survey.Survey(json)
};

QUnit.test("Create survey", function(assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({ questions: [{ type: "text", name: "q1" }] });
  assert.equal(
    test.survey.getQuestionByName("q1").name,
    "q1",
    "Survey was created"
  );
});

QUnit.test("koPages, koActive", function(assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3", questions: [{ type: "text", name: "q3" }] }
    ]
  });
  test.show();
  assert.equal(test.koPages().length, 3, "There are 3 pages");
  assert.equal(test.koPages()[0].koActive(), true, "The first page is active");
  assert.equal(test.koActivePage().name, "page1", "The active page is first");
  assert.equal(
    test.koPages()[1].koActive(),
    false,
    "The second page is inactive"
  );
  test.survey.nextPage();
  assert.equal(
    test.koPages()[0].koActive(),
    false,
    "The first page is inactive"
  );
  assert.equal(test.koPages()[1].koActive(), true, "The second page is active");
  assert.equal(test.koActivePage().name, "page2", "The active page is second");
  test.selectPageClick(test.koPages()[2]);
  assert.equal(
    test.survey.currentPage.name,
    "page3",
    "The current page is the third page"
  );
  assert.equal(test.koPages()[2].koActive(), true, "The third page is active");
});

QUnit.test("koPages, visibility", function(assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({
    pages: [
      { questions: [{ type: "text", name: "q1" }] },
      { questions: [{ type: "text", name: "q2", visible: false }] },
      { questions: [{ type: "text", name: "q3" }] }
    ]
  });
  var q = test.survey.getQuestionByName("q2");
  test.show();
  assert.equal(test.koPages().length, 3, "There are 3 pages");
  assert.equal(
    test.koPages()[1].koVisible(),
    false,
    "The second page is invisible"
  );
  assert.equal(
    test.koPages()[1].koDisabled(),
    true,
    "The second page is disabled"
  );
  q.visible = true;
  assert.equal(
    test.koPages()[1].koVisible(),
    true,
    "The second page is visible"
  );
  assert.equal(
    test.koPages()[1].koDisabled(),
    false,
    "The second page is enabled"
  );
});

QUnit.test(
  "Reset options on show, Bug# https://surveyjs.answerdesk.io/ticket/details/T2147",
  function(assert) {
    var test = new SurveyLiveTester(surveyCreator);
    test.setJSON({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visible: false }
      ]
    });
    test.show();
    var q = test.survey.getQuestionByName("q2");
    assert.equal(q.isVisible, false, "The question is not visible");
    test.koShowInvisibleElements(true);
    assert.equal(
      test.survey.showInvisibleElements,
      true,
      "Survey property sets correctly"
    );
    assert.equal(q.isVisible, true, "The question is visible now");
    test.show();
    assert.equal(test.koShowInvisibleElements(), false, "Reset the property");
    assert.equal(
      test.survey.showInvisibleElements,
      false,
      "Reset the survey property"
    );
  }
);
