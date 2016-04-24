/// <reference path="../src/editorLocalization.ts" />
module SurveyEditorTests.Tests {
    QUnit.module("LocalizationTests");

    QUnit.test("Get nested property", function (assert) {
        assert.equal(SurveyEditor.editorLocalization.getString("qt.text"), "Text", "find the nested property");
        assert.equal(SurveyEditor.editorLocalization.getString("qt.text1"), "text1", "the nested property doesn't exist");
        assert.equal(SurveyEditor.editorLocalization.getString("qt1.text"), "qt1", "the root property doesn't exist");
    });
    QUnit.test("Get property name and title", function (assert) {
        assert.equal(SurveyEditor.editorLocalization.getPropertyName("text_name"), SurveyEditor.defaultStrings.p.name, "find the Name property");
        assert.equal(SurveyEditor.editorLocalization.getPropertyTitle("text_name"), "", "there is not title for it");
        assert.equal(SurveyEditor.editorLocalization.getPropertyName("text_title"), SurveyEditor.defaultStrings.p.title.name, "find the Title property");
        assert.equal(SurveyEditor.editorLocalization.getPropertyTitle("text_title"), SurveyEditor.defaultStrings.p.title.title, "find the title for Title property");
    });
};