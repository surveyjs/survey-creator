import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {SurveyLiveTester} from "../src/surveylive";

export default QUnit.module("surveyLiveTests");


QUnit.test("Create survey", function (assert) {
    var test = new SurveyLiveTester();
    test.setJSON({questions:[ {type: "text", name: "q1"}]});
    assert.equal(test.survey.getQuestionByName("q1").name, "q1", "Survey was created");
});

QUnit.test("koPages, koActive", function (assert) {
    var test = new SurveyLiveTester();
    test.setJSON({pages: [{questions:[ {type: "text", name: "q1"}]}, {questions:[ {type: "text", name: "q2"}]}, {questions:[ {type: "text", name: "q3"}]}]});
    test.show();
    assert.equal(test.koPages().length, 3, "There are 3 pages");
    assert.equal(test.koPages()[0].koActive(), true, "The first page is active");
    assert.equal(test.koPages()[1].koActive(), false, "The second page is inactive");
    test.survey.nextPage();
    assert.equal(test.koPages()[0].koActive(), false, "The first page is inactive");
    assert.equal(test.koPages()[1].koActive(), true, "The second page is active");
    test.selectPageClick(test.koPages()[2]);
    assert.equal(test.survey.currentPage.name, "page3", "The current page is the third page");
    assert.equal(test.koPages()[2].koActive(), true, "The third page is active");
});

QUnit.test("koPages, visibility", function (assert) {
    var test = new SurveyLiveTester();
    test.setJSON({pages: [{questions:[ {type: "text", name: "q1"}]}, {questions:[ {type: "text", name: "q2", visible: false}]}, {questions:[ {type: "text", name: "q3"}]}]});
    var q = test.survey.getQuestionByName("q2");
    test.show();
    assert.equal(test.koPages().length, 3, "There are 3 pages");
    assert.equal(test.koPages()[1].koVisible(), false, "The second page is invisible");
    q.visible = true;
    assert.equal(test.koPages()[1].koVisible(), true, "The second page is visible");
});