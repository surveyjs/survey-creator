/// <reference path="../src/textworker.ts" />

module SurveyObjectEditorTests.Tests {
    QUnit.module("textWorkerTests");

    QUnit.test("Change property value - add new property", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ questions: [{ type: 'text', name: 'temp'}] }");
        var question = worker.survey.getQuestionByName("temp");
        worker.changeProperty(question, "size", 30, false);
        assert.equal(worker.text, "{ questions: [{ type: 'text', name: 'temp', size: 30}] }", "should be ..., size: 30,..");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("temp");
        assert.equal(question["size"], 30, "set new property correctly");
    });
    QUnit.test("Change property value - change property value", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ questions: [{ type: 'text', name: 'temp', size: 20, title: 'my title' }] }");
        var question = worker.survey.getQuestionByName("temp");
        worker.changeProperty(question, "size", 30, false);
        assert.equal(worker.text, "{ questions: [{ type: 'text', name: 'temp', size: 30, title: 'my title' }] }", "should be ..., size: 30,..");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("temp");
        assert.equal(question["size"], 30, "set new property correctly");
    });
    QUnit.test("Change property value - change text property value", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ questions: [{ type: 'text', name: 'temp'}] }");
        var question = worker.survey.getQuestionByName("temp");
        worker.changeProperty(question, "name", "newName", false);
        assert.equal(worker.text, "{ questions: [{ type: 'text', name: \"newName\"}] }", "should be ..., name: 'newName'..");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("newName");
        assert.equal(question["name"], "newName", "set the name property correctly");
    });
    QUnit.test("Change property value - change itemValues property value", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ questions: [{ type: 'dropdown', name: 'temp', choices:[\"item1\", {value: 2, text: \"item2\"}, {value: 3, text: \"item3\"}]}] }");
        var question = worker.survey.getQuestionByName("temp");
        worker.changeProperty(question, "choices", [{value: 5, text: "item5" }], false);
        assert.equal(worker.text, "{ questions: [{ type: 'dropdown', name: 'temp', choices: [{value:5,text:\"item5\"}]}] }", "choices has one item now");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("temp");
        assert.equal(question["choices"].length, 1, "set the name property correctly");
    });
    QUnit.test("Change property value - remove property value", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ questions: [{ type: 'text', name: 'temp', size: 20, title: 'my title' }] }");
        var question = worker.survey.getQuestionByName("temp");
        worker.changeProperty(question, "size", 25, true);
        assert.equal(worker.text, "{ questions: [{ type: 'text', name: 'temp', title: 'my title' }] }", "remove size");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("temp");
        assert.equal(question["size"], 25, "default value");
    });
    QUnit.test("Add page - empty survey", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ }");
        worker.addPage("page1");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.pages.length, 1, "we should have one page");
        assert.equal(worker.survey.pages[0].name, "page1", "name page is page1");
    });
    QUnit.test("Add page - survey with survey properties", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ title: \"My Survey\" }");
        worker.addPage("page1");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.pages.length, 1, "we should have one page");
        assert.equal(worker.survey.pages[0].name, "page1", "name page is page1");
        assert.equal(worker.survey.title, "My Survey", "title should be saved");
    });
    QUnit.test("Add page - survey with survey properties and questions", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ title: \"My Survey\", questions: [{ type: 'text', name: 'temp', size: 20, title: 'my title' }] }");
        worker.addPage("page1");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.pages.length, 2, "we should have two pages");
        assert.equal(worker.survey.pages[0].questions.length, 1, "the first page has one question");
        assert.equal(worker.survey.pages[1].name, "page1", "name page is page1");
        assert.equal(worker.survey.title, "My Survey", "title should be saved");
    });
    QUnit.test("Add page - survey with survey properties and empty pages", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ title: \"My Survey\", pages: [] }");
        worker.addPage("page1");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.pages.length, 1, "we should have one page");
        assert.equal(worker.survey.pages[0].name, "page1", "name page is page1");
        assert.equal(worker.survey.title, "My Survey", "title should be saved");
    });
    QUnit.test("Add page - survey with survey properties and one page", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ title: \"My Survey\", pages: [{questions: [{ type: 'text', name: 'temp', size: 20, title: 'my title' }]}] }");
        worker.addPage("page1");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.pages.length, 2, "we should have two pages");
        assert.equal(worker.survey.pages[0].questions.length, 1, "the first page has one question");
        assert.equal(worker.survey.pages[1].name, "page1", "name page is page1");
        assert.equal(worker.survey.title, "My Survey", "title should be saved");
    });
    QUnit.test("Add question - to empty page with no questions array", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ pages: [{}] }");
        worker.addQuestion(worker.survey.pages[0], new Survey.QuestionText("q1"));
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.getAllQuestions().length, 1, "we have one question");
        assert.equal(worker.survey.getAllQuestions()[0].name, "q1", "check the name of new question");
    });
    QUnit.test("Add question - to empty page with emty questions array", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ pages: [{questions:[]}] }");
        worker.addQuestion(worker.survey.pages[0], new Survey.QuestionText("q1"));
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.getAllQuestions().length, 1, "we have one question");
        assert.equal(worker.survey.getAllQuestions()[0].name, "q1", "check the name of new question");
    });
    QUnit.test("Add question - add second question to the page", function (assert) {
        var worker = new SurveyEditor.SurveyTextWorker("{ pages: [{questions: [{ type: 'text', name: 'temp', size: 20, title: 'my title' }]}] }");
        worker.addQuestion(worker.survey.pages[0], new Survey.QuestionText("q1"));
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        assert.equal(worker.survey.getAllQuestions().length, 2, "we have two question");
        assert.equal(worker.survey.getAllQuestions()[1].name, "q1", "check the name of new question");
    });

}
