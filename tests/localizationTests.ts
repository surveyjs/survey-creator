/// <reference path="../src/editorLocalization.ts" />
module SurveyEditorTests.Tests {
    QUnit.module("LocalizationTests");

    QUnit.test("Get nested property", function (assert) {
        assert.equal(SurveyEditor.editorLocalization.getString("qt.text"), "Text", "find the nested property");
        assert.equal(SurveyEditor.editorLocalization.getString("qt.text1"), "text1", "the nested property doesn't exist");
        assert.equal(SurveyEditor.editorLocalization.getString("qt1.text"), "qt1", "the root property doesn't exist");
    });

};