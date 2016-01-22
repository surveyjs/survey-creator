/// <reference path="../src/textparser.ts" />

//{ questions: [{ type: 'text', name: 'temp', size: 20 }]}
module SurveyObjectEditorTests.Tests {
    QUnit.module("textParserTests");

    QUnit.test("Find property info", function (assert) {
        var parser = new SurveyEditor.SurveyTextParser("{ questions: [{ type: 'text', name: 'temp', size: 20 }]}");
        var info = parser.getPropertyInfo(14, parser.text.length - 3, "type");
        assert.equal(info.isFound, true, "the 'type' property is found");
        assert.equal(info.start, 15, "the 'type' property start");
        assert.equal(info.valueStart, 21, "the 'type' property value start");
        assert.equal(info.end, 27, "the 'type' property end");

        var info = parser.getPropertyInfo(14, parser.text.length - 3, "name");
        assert.equal(info.start, 28, "the 'name' property start");
        assert.equal(info.valueStart, 35, "the 'name' property value start");
        assert.equal(info.end, 41, "the 'name' property end");

        var info = parser.getPropertyInfo(14, parser.text.length - 3, "size");
        assert.equal(info.start, 42, "the 'size' property start");
        assert.equal(info.valueStart, 49, "the 'size' property value start");
        assert.equal(info.end, 52, "the 'size' property end");

        var info = parser.getPropertyInfo(14, parser.text.length - 3, "title");
        assert.equal(info.isFound, false, "the 'title' is not found");
    });

    QUnit.test("Find  property info - last text property", function (assert) {
        var parser = new SurveyEditor.SurveyTextParser("{ questions: [{ type: 'text', name: 'temp'}]}");
        var info = parser.getPropertyInfo(14, parser.text.length - 3, "name");
        assert.equal(info.start, 28, "the 'name' property start");
        assert.equal(info.valueStart, 35, "the 'name' property value start");
        assert.equal(info.end, 41, "the 'name' property end");
    });
}
