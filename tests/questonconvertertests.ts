import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {QuestionConverter} from "../src/questionconverter";

export default QUnit.module("questionconverter");

QUnit.test("get converted classes", function (assert) {
    var classes = QuestionConverter.getConvertToClasses("radiogroup");
    assert.equal(classes.length, 2, "There are two classes for radiogroup");
    assert.equal(classes.indexOf("dropdown") > -1, true, "dropdown is here");
    classes = QuestionConverter.getConvertToClasses("text");
    assert.equal(classes.length, 1, "There is one class for text");
    assert.equal(classes[0], "comment", "it is comment");
});

QUnit.test("Convert question", function (assert) {
    var survey = new Survey.Survey();
    var page = survey.addNewPage();
    var panel = page.addNewPanel();
    var q1 = <Survey.QuestionRadiogroup>page.addNewQuestion("radiogroup");
    var q2 = <Survey.QuestionComment>panel.addNewQuestion("comment");
    q1.choices = ["myitem1", "myitem2"];
    q2.placeHolder = "type here";
    QuestionConverter.convertObject(q1, "checkbox");
    QuestionConverter.convertObject(q2, "text");
    assert.equal((<Survey.Base><any>page.elements[1]).getType(), "checkbox", "converted to checkbox");
    assert.equal((<Survey.Base><any>panel.elements[0]).getType(), "text", "converted to text");
    var newQ1 = <Survey.QuestionCheckbox>page.elements[1];
    var newQ2 = <Survey.QuestionText>panel.elements[0];
    assert.equal(newQ1.choices.length, 2, "The choices converted correct - length");
    assert.equal(newQ1.choices[0].value, "myitem1", "The choices converted correct - value");
    assert.equal(newQ2.placeHolder, "type here", "The placeHolder converted correct");
});