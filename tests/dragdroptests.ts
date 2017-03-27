import * as Survey from "survey-knockout";
import {DragDropTargetElement} from "../src/dragdrophelper";

export default QUnit.module("Drag and Drop Tests");

QUnit.test("dummy test", function (assert) {
    assert.equal(1, 1);
});

QUnit.test("Show/hide new created item, simple test", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var target = new Survey.QuestionText("qt");
    var dragTarget = new DragDropTargetElement(page, target, null);
    assert.equal(page["koRows"]().length, 2, "Two elements initially");
    assert.equal(dragTarget.moveTo(q1, false), true, "It can be done: 1");
    assert.equal(page["koRows"]().length, 3, "Move 1");
    assert.equal(page["koRows"]()[0]["koElements"]()[0].name, "qt", "Move 1");
    assert.equal(dragTarget.moveTo(q1, true), true, "It can be done: 2");
    assert.equal(page["koRows"]().length, 3, "Move 2");
    assert.equal(page["koRows"]()[1]["koElements"]()[0].name, "qt", "Move 2");
    assert.equal(dragTarget.moveTo(q2, false), true, "It can be done: 3");
    assert.equal(page["koRows"]().length, 3, "Move 3");
    assert.equal(page["koRows"]()[1]["koElements"]()[0].name, "qt", "Move 3");
    assert.equal(dragTarget.moveTo(q2, true), true, "It can be done: 4");
    assert.equal(page["koRows"]().length, 3, "Move 4");
    assert.equal(page["koRows"]()[2]["koElements"]()[0].name, "qt", "Move 4");
    dragTarget.clear();
    assert.equal(page["koRows"]().length, 2, "clear destination");
    dragTarget.doDrop();
    assert.equal(page.questions.length, 2, "still 2 questions");
    dragTarget.moveTo(q2, false);
    dragTarget.doDrop();
    assert.equal(page.questions.length, 3, "3 questions now");
    assert.equal(page.questions[1].name, "qt", "It is a second question");
});

QUnit.test("Show/hide move item, simple test", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var target = new Survey.QuestionText("q2");

    var dragTarget = new DragDropTargetElement(page, target, q2);
    assert.equal(page["koRows"]().length, 2, "Two elements initially");
    assert.equal(dragTarget.moveTo(q1, false), true, "It can be done: 1");
    assert.equal(page["koRows"]().length, 3, "Move 1");
    assert.equal(page["koRows"]()[0]["koElements"]()[0].name, "q2", "Move 1");
    dragTarget.clear();
    assert.equal(page["koRows"]().length, 2, "out of page");
    assert.equal(dragTarget.moveTo(q1, true), false, "It can't be done: 2");
    assert.equal(page["koRows"]().length, 2, "Move 2");
    assert.equal(dragTarget.moveTo(q2, false), false, "It can't be done: 3");
    assert.equal(page["koRows"]().length, 2, "Move 3");
    assert.equal(dragTarget.moveTo(q2, true), false, "It can't be done: 4");
    assert.equal(page["koRows"]().length, 2, "Move 4");
    dragTarget.moveTo(q1, false);
    dragTarget.doDrop();
    assert.equal(page.questions.length, 2, "we have only two questions");
    assert.equal(page.questions[0].name, "q2", "The second question becomes the first");
});

QUnit.test("Move item to the end", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    var target = new Survey.QuestionText("q1");

    var dragTarget = new DragDropTargetElement(page, target, q1);
    dragTarget.moveTo(q3, true);
    dragTarget.doDrop();
    assert.equal(page.questions.length, 3, "we have only two questions");
    assert.equal(page.questions[2].name, "q1", "The last question is q1 now");
});

QUnit.test("Show/hide/create for empty page", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var target = new Survey.QuestionText("qt");
    var dragTarget = new DragDropTargetElement(page, target, null);
    assert.equal(page["koRows"]().length, 0, "There are no elements initially");
    assert.equal(dragTarget.moveTo(page, false), true, "It can be done: 1");
    assert.equal(page["koRows"]().length, 1, "Move 1");
    assert.equal(page["koRows"]()[0]["koElements"]()[0].name, "qt", "Move 1");
    dragTarget.clear();
    assert.equal(page["koRows"]().length, 0, "clear destination");
    dragTarget.moveTo(page, false);
    dragTarget.doDrop();
    assert.equal(page.questions.length, 1, "one question now");
    assert.equal(page.questions[0].name, "qt", "A new question");
});

QUnit.test("Move item startWithNewLine=false", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    q1.startWithNewLine = false;
    var target = new Survey.QuestionText("q1");
    target.startWithNewLine = false;

    var dragTarget = new DragDropTargetElement(page, target, q1);
    dragTarget.moveTo(q3, true);
    assert.equal(page["koRows"]().length, 3, "Move 1. No rows should be added");
    assert.equal(page["koRows"]()[2]["koElements"]().length, 2, "Move 1. There are two elements in the last row");
    assert.equal(page["koRows"]()[2]["koElements"]()[1].name, "q1", "Move 1. The first question is the last element");
    dragTarget.moveTo(q3, false);
    assert.equal(page["koRows"]().length, 3, "Move 2. No rows should be added");
    assert.equal(page["koRows"]()[1]["koElements"]().length, 2, "Move 2. There are two elements in the second row");
    assert.equal(page["koRows"]()[2]["koElements"]().length, 1, "Move 2. There is one elements in the last row");
    assert.equal(page["koRows"]()[1]["koElements"]()[1].name, "q1", "Move 2. The first question is the last element in the first row");
    dragTarget.doDrop();
    assert.equal(page.questions.length, 3, "we have only two questions");
    assert.equal(page.questions[1].name, "q1", "The second question is q1 now");    
});

QUnit.test("Move item startWithNewLine=false, 2", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    var q3 = page.addNewQuestion("text", "q3");
    q2.startWithNewLine = false;
    var target = new Survey.QuestionText("q2");
    target.startWithNewLine = false;

    var dragTarget = new DragDropTargetElement(page, target, q2);
    dragTarget.moveTo(q3, true);
    dragTarget.doDrop();
    assert.equal(page.questions.length, 3, "we have 3 questions");
    assert.equal(page.questions[2].name, "q2", "The last question is q2 now");    
});
QUnit.test("Move item startWithNewLine=false, 3", function (assert) {
    var survey = new Survey.Survey();
    var page = <Survey.Page>survey.addNewPage("p1");
    var q1 = page.addNewQuestion("text", "q1");
    var q2 = page.addNewQuestion("text", "q2");
    q2.startWithNewLine = false;
    var target = new Survey.QuestionText("q2");
    target.startWithNewLine = false;

    var dragTarget = new DragDropTargetElement(page, target, q2);
    assert.equal(dragTarget.moveTo(q1, false), true, "You can move a question here");
    dragTarget.doDrop();
    assert.equal(page.questions[0].name, "q2", "The first question is q2 now");    
});