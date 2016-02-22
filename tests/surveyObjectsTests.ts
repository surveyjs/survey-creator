/// <reference path="../src/surveyObjects.ts" />
/// <reference path="../src/objectVerbs.ts" />

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
        assert.equal(objects.koObjects()[4].text(), intend + "page2", "The second page");
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
    QUnit.test("addPage method - insert", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var page = survey.pages[2];
        survey.pages.splice(2, 1);
        objects.removeObject(page);
        survey.pages.splice(1, 0, page);
        objects.addPage(page);
        var pageIndex = survey.pages[0].questions.length + 1 + 1;
        assert.equal(objects.koObjects()[pageIndex].value, page, "the page is inserted correctly");
        assert.equal(objects.koObjects()[pageIndex + 1].value, page.questions[0], "the first question is inserted correctly");
        assert.equal(objects.koObjects()[pageIndex + 2].value, page.questions[1], "the second question is inserted correctly");
        assert.equal(objects.koObjects()[pageIndex + 3].value, survey.pages[2], "the last page has the correct index");
    });

    QUnit.test("addQuestion method", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var page = survey.pages[survey.pages.length - 1];
        var question = page.addNewQuestion("text", "newQuestion");
        objects.addQuestion(page, question);
        assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, question, "new object is added");
        assert.equal(objects.koSelected().value, question, "new question is selected");
    });
    QUnit.test("addQuestion to the first page", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var page = survey.pages[0];
        var question = page.addNewQuestion("text", "newQuestion");
        objects.addQuestion(page, question);
        assert.equal(objects.koObjects()[1 + page.questions.length].value, question, "new object is added");
        assert.equal(objects.koSelected().value, question, "new question is selected");
    });
    QUnit.test("removeObject method - remove Question", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var elementsCount = objects.koObjects().length;
        objects.removeObject(survey.pages[1].questions[0]);
        assert.equal(objects.koObjects().length, elementsCount - 1, "one element is removed");
    });
    QUnit.test("removeObject method - remove Page", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        var elementsCount = objects.koObjects().length;
        objects.removeObject(survey.pages[0]);
        assert.equal(objects.koObjects().length, elementsCount - 1 - 2, "page and two it's questions are removed");
    });
    QUnit.test("object changed name", function (assert) {
        var survey = createSurvey();
        var objects = new SurveyEditor.SurveyObjects(ko.observableArray(), ko.observable());
        objects.survey = survey;
        survey.pages[0].name = "newname";
        objects.nameChanged(survey.pages[0]);
        assert.equal(objects.koObjects()[1].text(), SurveyEditor.SurveyObjects.intend + "newname", "new name should be 'newname'");
    });
    QUnit.test("Triggers property editor", function (assert) {
        var survey = createSurvey();
        var trigger = new Survey.SurveyTriggerVisible();
        trigger.name = "question1";
        trigger.value = "val1";
        trigger.operator = "notequal";
        trigger.questions.push("question2");
        survey.triggers.push(trigger);
        var result = [];
        var propEditor = new SurveyEditor.SurveyPropertyTriggers((newValue: any) => { result = newValue });
        propEditor.object = survey;
        propEditor.value = survey.triggers;
        assert.equal(propEditor.koItems().length, 1, "There are one trigger initially");
        var koTrigger = <SurveyEditor.SurveyPropertyTrigger>propEditor.koSelected();
        assert.equal(koTrigger.koName(), "question1", "Name set correctly");
        assert.equal(koTrigger.koOperator(), "notequal", "operator set correctly");
        assert.equal(koTrigger.koValue(), "val1", "value set correctly");
        assert.deepEqual(koTrigger.questions.koChoosen(), ["question2"], "questions set correctly");

        propEditor.onAddClick();
        assert.equal(propEditor.koItems().length, 2, "There are two triggers now");
        koTrigger = <SurveyEditor.SurveyPropertyTrigger>propEditor.koSelected();
        assert.equal(koTrigger.koOperator(), "equal", "default operator is equal");
        assert.equal(koTrigger.koIsValid(), false, "the trigger is not valid");
        koTrigger.koName("question2");
        assert.equal(koTrigger.koIsValid(), false, "the trigger is still not valid");
        assert.equal(koTrigger.koRequireValue(), true, "value should be set");
        koTrigger.koOperator("notempty");
        assert.equal(koTrigger.koIsValid(), true, "the trigger is valid");
        assert.equal(koTrigger.koRequireValue(), false, "value should not be set");
        assert.equal(koTrigger.koText(), "Run if 'question2' is not empty", "text for valid trigger");

        koTrigger.pages.koChoosen.push("page2");
        koTrigger.questions.koChoosen.push("question3");
        koTrigger.koValue(1);
        trigger = koTrigger.createTrigger();
        assert.equal(trigger.name, "question2", "create trigger correctly: name");
        assert.equal(trigger.operator, "notempty", "create trigger correctly: operator");
        assert.equal(trigger.value, 1, "create trigger correctly: value");
        assert.deepEqual(trigger.pages, ["page2"], "create trigger correctly: pages");
        assert.deepEqual(trigger.questions, ["question3"], "create trigger correctly: questions");

        propEditor.onAddClick();
        assert.equal(propEditor.koItems().length, 3, "There are three triggers now");
        propEditor.onDeleteClick();
        assert.equal(propEditor.koItems().length, 2, "There are again two triggers");

        propEditor.onApplyClick();
        assert.equal(result.length, 2, "Two triggers are saved");

    });
    QUnit.test("Validators property editor", function (assert) {
        var survey = createSurvey();
        var validator = new Survey.NumericValidator(10, 100);
        validator.text = "validatortext";
        var question = <Survey.Question>survey.getQuestionByName("question1");
        question.validators.push(validator);
        var result = [];
        var propEditor = new SurveyEditor.SurveyPropertyValidators((newValue: any) => { result = newValue });
        propEditor.object = question;
        propEditor.value = question.validators;
        assert.equal(propEditor.koItems().length, 1, "There are one validator initially");
        var koValidator = <SurveyEditor.SurveyPropertyValidatorItem>propEditor.koSelected();
        assert.equal(koValidator.validator.text, "validatortext", "Validator Text is set correctly");
        assert.equal((<Survey.NumericValidator>koValidator.validator).minValue, 10, "Validator 'minValue' is set correctly");
        assert.equal((<Survey.NumericValidator>koValidator.validator).maxValue, 100, "Validator 'maxValue' is set correctly");

        propEditor.onAddClick("textvalidator");
        assert.equal(propEditor.koItems().length, 2, "There are two validators now");
        var koValidator = <SurveyEditor.SurveyPropertyValidatorItem>propEditor.koSelected();
        assert.equal(koValidator.text, "textvalidator", "Created with corrected value");
        (<Survey.TextValidator>koValidator.validator).minLength = 20;
        koValidator.validator.text = "text is short.";

        propEditor.onAddClick("textvalidator");
        assert.equal(propEditor.koItems().length, 3, "There are three validators now");
        propEditor.onDeleteClick();
        assert.equal(propEditor.koItems().length, 2, "There are two validators again");

        propEditor.onApplyClick();
        assert.equal(result.length, 2, "Two validators are saved");
        assert.equal(result[1].minLength, 20, "The properties are saved too");
    });
    QUnit.test("SurveyVerbChangeTypeItem test", function (assert) {
        var survey = createSurvey();
        var verb = new SurveyEditor.SurveyVerbChangeTypeItem(survey, survey.pages[0].questions[1]);
        assert.equal(verb.koSelectedItem(), "checkbox", "The default value is checkbox");
        verb.koSelectedItem("dropdown");
        var newQuestion = survey.pages[0].questions[1];
        assert.equal(newQuestion.getType(), "dropdown", "the question becomes 'dropdown'");
        assert.equal(newQuestion["choices"].length, 3, "properties are copied.");
        assert.equal(survey.pages[0].questions.length, 2, "we will still have two questions.");
    });
    QUnit.test("SurveyVerbChangePageItem test", function (assert) {
        var survey = createSurvey();
        var verb = new SurveyEditor.SurveyVerbChangePageItem(survey, survey.pages[0].questions[1]);
        assert.equal(verb.koSelectedItem(), survey.pages[0], "The default value is first page");
        verb.koSelectedItem(survey.pages[2]);
        assert.equal(survey.pages[0].questions.length, 1, "one question left on the first page");
        assert.equal(survey.pages[2].questions.length, 3, "three question now on the third page");
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