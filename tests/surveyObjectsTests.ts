/// <reference path="../src/surveyObjects.ts" />

module SurveyObjectEditorTests.Tests {
    QUnit.module("surveyObjects");

    QUnit.test("Initial objects building", function (assert) {
        var intend = SurveyEditor.SurveyObjects.intend;
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        assert.equal(objects.koObjects().length, 1 + 3 + 2 + 1 + 2, "survey + 3 pages + 5 questions.");
        assert.equal(objects.koSelected(), survey, "The selected object is survey.");

        assert.equal(objects.koObjects()[0].text(), "Survey", "The first item is Survey");
        assert.equal(objects.koObjects()[4].text(), intend + "Page 2", "The second page");
        assert.equal(objects.koObjects()[5].text(), intend + intend + "question3", "The third question");
    });
    QUnit.test("selectObject method", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
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
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var page = survey.addNewPage("newPage");
        objects.addPage(page);
        assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, page, "new object is added");
        assert.equal(objects.koSelected().value, page, "new page is selected");
    });
    QUnit.test("addQuestion method", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var question = survey.pages[survey.pages.length - 1].addNewQuestion("text", "newQuestion");
        objects.addQuestion(question);
        assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, question, "new object is added");
        assert.equal(objects.koSelected().value, question, "new question is selected");
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

}