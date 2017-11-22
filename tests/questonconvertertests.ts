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

