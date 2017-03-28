import * as ko from "knockout";
import {SurveyObjects} from "../src/surveyObjects";
import {SurveyVerbChangeTypeItem, SurveyVerbChangePageItem} from "../src/objectVerbs";
import * as Survey from "survey-knockout";

export default QUnit.module("surveyObjects");

QUnit.test("Initial objects building", function (assert) {
    var intend = SurveyObjects.intend;
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects().length, 1 + 3 + 2 + 1 + 2, "survey + 3 pages + 5 questions.");
    assert.equal(objects.koSelected(), survey, "The selected object is survey.");

    assert.equal(objects.koObjects()[0].text(), "Survey", "The first item is Survey");
    assert.equal(objects.koObjects()[4].text(), intend + "page2", "The second page");
    assert.equal(objects.koObjects()[5].text(), intend + intend + "question3", "The third question");
});
QUnit.test("No name pages", function (assert) {
    var intend = SurveyObjects.intend;
    var survey = createSurvey();
    survey.pages[0].name = "";
    survey.pages[1].name = "";
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects()[1].text(), intend + "[Page 1]", "The first item is Survey");
    assert.equal(objects.koObjects()[4].text(), intend + "[Page 2]", "The second page");
});
QUnit.test("selectObject method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    objects.selectObject(survey.pages[1]);
    assert.equal(objects.koSelected().value, survey.pages[1], "the second page is selected");
    objects.selectObject(survey.pages[1].questions[0]);
    assert.equal(objects.koSelected().value, survey.pages[1].questions[0], "the third question is selected");
    objects.selectObject(survey);
    assert.equal(objects.koSelected().value, survey, "survey is selected");
});
QUnit.test("addPage method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.addNewPage("newPage");
    objects.addPage(page);
    assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, page, "new object is added");
    assert.equal(objects.koSelected().value, page, "new page is selected");
});
QUnit.test("addPage method - insert", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[2];
    survey.pages.splice(2, 1);
    objects.removeObject(page);
    survey.pages.splice(1, 0, page);
    objects.addPage(page);
    var pageIndex = survey.pages[0].questions.length + 1 + 1;
    assert.equal(objects.koObjects()[pageIndex].value, page, "the page is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 1].value, page.questions[0], "the first question is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 2].value, page.questions[1], "the second question is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 3].value, survey.pages[2], "the last page has the correct index");
});

QUnit.test("addQuestion method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[survey.pages.length - 1];
    var question = page.addNewQuestion("text", "newQuestion");
    objects.addQuestion(page, question);
    assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, question, "new object is added");
    assert.equal(objects.koSelected().value, question, "new question is selected");
});
QUnit.test("addQuestion to the first page", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[0];
    var question = page.addNewQuestion("text", "newQuestion");
    objects.addQuestion(page, question);
    assert.equal(objects.koObjects()[1 + page.questions.length].value, question, "new object is added");
    assert.equal(objects.koSelected().value, question, "new question is selected");
});
QUnit.test("removeObject method - remove Question", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var elementsCount = objects.koObjects().length;
    objects.removeObject(survey.pages[1].questions[0]);
    assert.equal(objects.koObjects().length, elementsCount - 1, "one element is removed");
});
QUnit.test("removeObject method - remove Page", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var elementsCount = objects.koObjects().length;
    objects.removeObject(survey.pages[0]);
    assert.equal(objects.koObjects().length, elementsCount - 1 - 2, "page and two it's questions are removed");
});
QUnit.test("selectNextQuestion method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    objects.selectObject(survey.pages[0].questions[0]);
    objects.selectNextQuestion(false);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[1]);

    objects.selectNextQuestion(true);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[0]);

    objects.selectNextQuestion(true);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[survey.pages[0].questions.length - 1]);

    objects.selectNextQuestion(false);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[0]);
});
QUnit.test("object changed name", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    survey.pages[0].name = "newname";
    objects.nameChanged(survey.pages[0]);
    assert.equal(objects.koObjects()[1].text(), SurveyObjects.intend + "newname", "new name should be 'newname'");
});
QUnit.test("SurveyVerbChangeTypeItem test", function (assert) {
    var survey = createSurvey();
    var verb = new SurveyVerbChangeTypeItem(survey, survey.pages[0].questions[1], null);
    assert.equal(verb.koSelectedItem(), "checkbox", "The default value is checkbox");
    verb.koSelectedItem("dropdown");
    var newQuestion = survey.pages[0].questions[1];
    assert.equal(newQuestion.getType(), "dropdown", "the question becomes 'dropdown'");
    assert.equal(newQuestion["choices"].length, 3, "properties are copied.");
    assert.equal(survey.pages[0].questions.length, 2, "we will still have two questions.");
});
QUnit.test("SurveyVerbChangePageItem test", function (assert) {
    var survey = createSurvey();
    var verb = new SurveyVerbChangePageItem(survey, survey.pages[0].questions[1], null);
    assert.equal(verb.koSelectedItem(), survey.pages[0], "The default value is first page");
    verb.koSelectedItem(survey.pages[2]);
    assert.equal(survey.pages[0].questions.length, 1, "one question left on the first page");
    assert.equal(survey.pages[2].questions.length, 3, "three question now on the third page");
});

function createSurvey(): Survey.Survey {
    return new Survey.Survey({
        pages: [{
            name: 'page1', questions: [{ type: 'text', name: 'question1' },
                { name: "question2", choices: ["one", { value: "two", text: "second value" }, { value: 3, text: "third value" }], type: "checkbox" }]
        },
            { name: 'page2', questions: [{ name: "question3", type: "comment" }] },
            {
                name: 'page3', questions: [{ name: "question4", columns: ["Column 1", "Column 2", "Column 3"], rows: ["Row 1", "Row 2"], type: "matrix" },
                { name: "question5", type: "rating" }]
            }]
    });
}