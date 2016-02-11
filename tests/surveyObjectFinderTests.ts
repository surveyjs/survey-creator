/// <reference path="../src/surveyObjectFinder.ts" />

module SurveyObjectEditorTests.Tests {
    QUnit.module("surveyObjectFinder");

    QUnit.test("Survey find survey, page and question objects", function (assert) {
        var src = createSurvey();
        var dest = createSurvey();
        var finder: any = new SurveyEditor.SurveyObjectFinder(src, dest);
        var foundObj = finder.findObject(src);
        assert.equal(foundObj, dest, "It should find the survey");

        foundObj = finder.findObject(src.pages[1]);
        assert.equal(foundObj, dest.pages[1], "It should find the second page");

        foundObj = finder.findObject(src.pages[2].questions[1]);
        assert.equal(foundObj, dest.pages[2].questions[1], "It should find the fifth question");
        assert.equal(foundObj.name, "question5", "It should find the fifth question");

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