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
        assert.equal(worker.text, "{ questions: [{ type: 'text', name: 'newName'}] }", "should be ..., name: 'newName'..");
        worker = new SurveyEditor.SurveyTextWorker(worker.text);
        question = worker.survey.getQuestionByName("newName");
        assert.equal(question["name"], "newName", "set the name property correctly");
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
}
