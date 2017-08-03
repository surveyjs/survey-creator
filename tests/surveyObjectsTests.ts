import * as ko from "knockout";
import {SurveyObjects} from "../src/surveyObjects";
import {SurveyVerbChangeTypeItem, SurveyVerbChangePageItem} from "../src/objectVerbs";
import * as Survey from "survey-knockout";

export default QUnit.module("surveyObjects");

QUnit.test("Initial objects building", function (assert) {
    var intend = SurveyObjects.intend;
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects().length, 1 + 3 + 2 + 1 + 2, "survey + 3 pages + 5 questions.");
    assert.equal(objects.koSelected().value, survey, "The selected object is survey.");

    assert.equal(objects.koObjects()[0].text(), "Survey", "The first item is Survey");
    assert.equal(objects.koObjects()[4].text(), intend + "page2", "The second page");
    assert.equal(objects.koObjects()[5].text(), intend + intend + "question3", "The third question");
});
QUnit.test("Initial objects building, panel support", function (assert) {
    var intend = SurveyObjects.intend;
    var survey = new Survey.Survey();
    var page1 = survey.addNewPage("page1");
    var page2 = survey.addNewPage("page2");
    page1.addNewQuestion("text", "q1");
    var panel1 = page1.addNewPanel("panel1");
    panel1.addNewQuestion("text", "q2");
    var panel2 = panel1.addNewPanel("panel2");
    panel2.addNewQuestion("text", "q3");
    panel2.addNewQuestion("text", "q4");
    page1.addNewQuestion("text", "q5");
    page2.addNewQuestion("text", "q6");

    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects().length, 1 + 2 + 2 + 6, "survey + 2 pages + 2 panels +  5 questions.");
    assert.equal(objects.koSelected().value, survey, "The selected object is survey.");
    assert.equal(objects.koObjects()[0].text(), "Survey", "The first item is Survey");
    assert.equal(objects.koObjects()[3].text(), intend + intend + "panel1", "The first panel");
    assert.equal(objects.koObjects()[4].text(), intend + intend + intend + "q2", "q2");

});
QUnit.test("No name pages", function (assert) {
    var intend = SurveyObjects.intend;
    var survey = createSurvey();
    survey.pages[0].name = "";
    survey.pages[1].name = "";
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects()[1].text(), intend + "[Page 1]", "The first item is Survey");
    assert.equal(objects.koObjects()[4].text(), intend + "[Page 2]", "The second page");
});
QUnit.test("selectObject method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
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
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.addNewPage("newPage");
    objects.addPage(page);
    assert.equal(objects.koObjects()[objects.koObjects().length - 1].value.name, page.name, "new object is added");
    assert.equal(objects.koSelected().value.name, page.name, "new page is selected");
});
QUnit.test("addPage method - insert", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[2];
    survey.pages.splice(2, 1);
    objects.removeObject(page);
    survey.pages.splice(1, 0, page);
    objects.addPage(page);
    var pageIndex = survey.pages[0].questions.length + 1 + 1;
    assert.equal(objects.koObjects()[pageIndex].value.name, page.name, "the page is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 1].value.name, page.questions[0].name, "the first question is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 2].value.name, page.questions[1].name, "the second question is inserted correctly");
    assert.equal(objects.koObjects()[pageIndex + 3].value.name, survey.pages[2].name, "the last page has the correct index");
});

QUnit.test("addQuestion method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[survey.pages.length - 1];
    var question = page.addNewQuestion("text", "newQuestion");
    objects.addElement(question, page);
    assert.equal(objects.koObjects()[objects.koObjects().length - 1].value, question, "new object is added");
    assert.equal(objects.koSelected().value, question, "new question is selected");
});
QUnit.test("addQuestion to the first page", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var page = <Survey.Page>survey.pages[0];
    var question = page.addNewQuestion("text", "newQuestion");
    objects.addElement(question, page);
    assert.equal(objects.koObjects()[1 + page.questions.length].value, question, "new object is added");
    assert.equal(objects.koSelected().value, question, "new question is selected");
});
QUnit.test("addQuestion into the QuestionPanelDynamic", function (assert) {
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var pnlQuestion = page.addNewQuestion("paneldynamic", "newQuestion");
    objects.addElement(pnlQuestion, page);
    if(!pnlQuestion) return;
    var newQuestion = pnlQuestion["template"].addNewQuestion("text", "question1");

    objects.addElement(newQuestion, pnlQuestion["template"]);
    assert.equal(objects.koObjects().length, 1 + 1 + 1 + 1, "survey + page + paneldynamic + new question");
    assert.equal(objects.koSelected().value.name, newQuestion.name, "new question is selected");
});
QUnit.test("removeObject method - remove Question", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var elementsCount = objects.koObjects().length;
    objects.removeObject(survey.pages[1].questions[0]);
    assert.equal(objects.koObjects().length, elementsCount - 1, "one element is removed");
});
QUnit.test("removeObject method - remove Page", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var elementsCount = objects.koObjects().length;
    objects.removeObject(survey.pages[0]);
    assert.equal(objects.koObjects().length, elementsCount - 1 - 2, "page and two it's questions are removed");
});
QUnit.test("selectNextQuestion method", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    objects.selectObject(survey.pages[0].questions[0]);
    objects.selectNextQuestion(false);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[1]);

    objects.selectNextQuestion(true);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[0]);

    objects.selectNextQuestion(true);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[survey.pages[0].questions.length - 1]);

    objects.selectNextQuestion(false);
    assert.equal(objects.koSelected().value, survey.pages[0].questions[0]);
});
QUnit.test("object changed name", function (assert) {
    var survey = createSurvey();
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    survey.pages[0].name = "newname";
    objects.nameChanged(survey.pages[0]);
    assert.equal(objects.koObjects()[1].text(), SurveyObjects.intend + "newname", "new name should be 'newname'");
});
QUnit.test("Large test on adding/remove objects with Panel", function (assert) {
    var survey = new Survey.Survey();
    var page1 = survey.addNewPage("page1");
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    var onAddElement =  function(element, parent){
        var page = survey.getPageByElement(element);
        objects.addElement(element, parent);
    }
    var onRemoveElement = function(element) {
       objects.removeObject(element);
    }
    survey.onQuestionAdded.add(function(sender, options) { onAddElement(options.question, options.parentPanel); });
    survey.onPanelAdded.add(function(sender, options) { onAddElement(options.panel, options.parentPanel); });
    survey.onQuestionRemoved.add(function(sender, options) { onRemoveElement(options.question); });
    survey.onPanelRemoved.add(function(sender, options) { onRemoveElement(options.panel); });

    var q1 = page1.addNewQuestion("text", "q1");
    assert.equal(objects.koObjects()[2].value.name, "q1", "'q1' added correctly");
    var panel1 = page1.addNewPanel("panel1");
    assert.equal(objects.koObjects()[3].value.name, "panel1", "'panel1' added correctly");
    var q2 = panel1.addNewQuestion("text", "q2");
    assert.equal(objects.koObjects()[4].value.name, "q2", "'q2' added correctly");
    var panel2 = panel1.addNewPanel("panel2");
    assert.equal(objects.koObjects()[5].value.name, "panel2", "'panel2' added correctly");
    var q3 = panel2.addNewQuestion("text", "q3");
    assert.equal(objects.koObjects()[6].value.name, "q3", "'q3' added correctly");
    var q4 = panel1.addNewQuestion("text", "q4");
    assert.equal(objects.koObjects()[7].value.name, "q4", "'q4' added correctly");
    var page2 = survey.addNewPage("page2");
    objects.addPage(page2);
    assert.equal(objects.koObjects()[8].value.name, "page2", "'page2' added correctly");
    
    survey.removePage(page1);
    objects.removeObject(page1);
    assert.equal(objects.koObjects().length, 2, "There are two objects now");
});

QUnit.test("SurveyVerbChangeTypeItem test", function (assert) {
    var survey = createSurvey();
    var verb = new SurveyVerbChangeTypeItem(survey, survey.pages[0].questions[1], null);
    assert.equal(verb.koSelectedItem(), "checkbox", "The default value is checkbox");
    verb.koSelectedItem("dropdown");
    var newQuestion = survey.pages[0].questions[1];
    assert.equal(newQuestion.getType(), "dropdown", "the question becomes 'dropdown'");
    assert.equal(newQuestion["choices"].length, 3, "properties are copied.");
    assert.equal(survey.pages[0].questions.length, 2, "we will still have two questions.");
});
QUnit.test("SurveyVerbChangePageItem test", function (assert) {
    var survey = createSurvey();
    var verb = new SurveyVerbChangePageItem(survey, survey.pages[0].questions[1], null);
    assert.equal(verb.koSelectedItem(), survey.pages[0], "The default value is first page");
    verb.koSelectedItem(survey.pages[2]);
    assert.equal(survey.pages[0].questions.length, 1, "one question left on the first page");
    assert.equal(survey.pages[2].questions.length, 3, "three question now on the third page");
});

QUnit.test("PanelDynamic test", function (assert) {
    var survey = new Survey.Survey();
    survey.addNewPage("p1");
    var q = survey.pages[0].addNewQuestion("paneldynamic", "q1");
    if(!q) return;
    q["template"].addNewQuestion("text", "question1");
    q["template"].addNewQuestion("text", "question2");
    var objects = new SurveyObjects(ko.observableArray(), ko.observable());
    objects.survey = survey;
    assert.equal(objects.koObjects().length, 1 + 1 + 1 + 2, "survey + 1 pages + 1 dynamic page +  2 questions.");
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