import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyEditor } from "../src/editor";
import { SurveyPagesEditor } from "../src/pagesEditor";

export default QUnit.module("surveyEditorTests");

QUnit.test("Set Text property", function(assert) {
  var editor = new SurveyEditor();
  var json = {
    questions: [
      {
        type: "checkbox",
        name: "car",
        title: "What car are you driving?",
        isRequired: true,
        colCount: 4,
        choices: [
          "None",
          "Ford",
          "Vauxhall",
          "Volkswagen",
          "Nissan",
          "Audi",
          "Mercedes-Benz",
          "BMW",
          "Peugeot",
          "Toyota",
          "Citroen"
        ]
      }
    ]
  };
  var jsonText = JSON.stringify(json);
  editor.text = jsonText;
  assert.equal(editor.koIsShowDesigner(), true);
  assert.equal(
    editor.survey.getAllQuestions().length,
    1,
    "There is one question"
  );
  assert.equal(
    editor.survey.getAllQuestions()[0].name,
    "car",
    "The question converted successufull"
  );
  jsonText = jsonText.substr(5);
  editor.text = jsonText;
  assert.equal(editor.koIsShowDesigner(), false);
});
QUnit.test("Escape HTML question string", function(assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>'
          }
        ]
      }
    ]
  });
  //var jsonText = '{\"pages\":[{\"name\":\"page1\",\"elements\":[{\"type\":\"html\",\"name\":\"question3\",\"html\":\"<img src=\\\"https://placehold.it/300x100\\\" alt=\\\"test\\\"/>\"}]}]}';
  var editor = new SurveyEditor();
  editor.text = jsonText;
  assert.equal(editor.survey.getAllQuestions().length, 1);
  var q3 = editor.survey.getQuestionByName("question3");
  assert.ok(!!q3);
  assert.equal(
    (<Survey.QuestionHtml>q3).html,
    '<img src="https://placehold.it/300x100" alt="test"/>'
  );
  assert.equal(
    editor.text.replace(/\s+|\t+|\n+/g, ""),
    jsonText.replace(/\s+|\t+|\n+/g, "")
  );
});
QUnit.test("At least one page should be available", function(assert) {
  var editor = new SurveyEditor();
  editor.text = JSON.stringify(getSurveyJson());
  editor.text = null;
  assert.equal(
    editor.survey.pages.length,
    1,
    "There should be at least one page"
  );
  assert.ok(editor.survey["dragDropHelper"], "dragDropHelper was created");
});
QUnit.test("options.questionTypes", function(assert) {
  var allTypes = Survey.ElementFactory.Instance.getAllTypes();
  var editor = new SurveyEditor(null, null);
  assert.equal(
    editor.toolbox.items.length,
    allTypes.length,
    "All types are accepted"
  );
  editor = new SurveyEditor(null, {
    questionTypes: ["text", "dropdown", "unknown"]
  });
  assert.equal(
    editor.toolbox.items.length,
    2,
    "Only two types from three are accepted"
  );
});
QUnit.test("Editor state property", function(assert) {
  var editor = new SurveyEditor();
  editor.saveSurveyFunc = function(
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    doSaveCallback(no, true);
  };
  editor.text = JSON.stringify(getSurveyJson());
  assert.equal(editor.state, "");
  editor.addPage();
  assert.equal(editor.state, "modified");
  editor.saveButtonClick();
  assert.equal(editor.state, "saved");
  /*
     editor.addPage();
     assert.equal(editor.state, "modified");
     editor.doUndoClick();
     assert.equal(editor.state, "saved");
     editor.doRedoClick();
     assert.equal(editor.state, "modified");
     */
});
QUnit.test("Do not reload surey on 'Designer' tab click", function(assert) {
  var editor = new SurveyEditor();
  editor.text = JSON.stringify(getSurveyJson());
  var pageCount = editor.survey.PageCount;
  editor.addPage();
  assert.equal(editor.survey.PageCount, pageCount + 1, "new Page is added");
  editor.selectDesignerClick();
  assert.equal(
    editor.survey.PageCount,
    pageCount + 1,
    "new Page is stil there"
  );
  editor.selectTestClick();
  assert.equal(
    editor.survey.PageCount,
    pageCount + 1,
    "new Page is stil there"
  );
});

QUnit.test("SurveyJSON always return correct data, bug #53", function(assert) {
  var editor = new SurveyEditor();
  editor.survey.pages[0].addNewQuestion("text", "q1");
  editor.showTestSurvey();
  assert.equal(
    JSON.stringify(editor["getSurveyJSON"]()).indexOf("q1") > -1,
    true,
    "The new question is here"
  );
});

QUnit.test("onQuestionAdded event", function(assert) {
  var editor = new SurveyEditor();
  var counter = 0;
  editor.onQuestionAdded.add(function() {
    counter++;
  });
  assert.equal(counter, 0, "No question was added");
  editor.text = JSON.stringify(getSurveyJson());
  assert.equal(counter, 0, "No question was added");
  editor.survey.pages[0].addNewQuestion("text", "q1");
  assert.equal(counter, 1, "One question was added");
});

QUnit.test("onElementDeleting event", function(assert) {
  var editor = new SurveyEditor();
  var counter = 0;
  var canRemove = true;
  editor.onElementDeleting.add(function(editor, options) {
    options.allowing = canRemove;
    counter++;
  });
  var page = editor.survey.pages[0];
  var q1 = page.addNewQuestion("text", "q1");
  var q2 = page.addNewQuestion("text", "q2");

  assert.equal(page.questions.length, 2, "There are two questions initially");
  editor.koSelectedObject({ value: q2 });
  editor.deleteObjectClick();
  assert.equal(page.questions.length, 1, "Delete one question");
  assert.equal(counter, 1, "onElementRemoving called one time");

  canRemove = false;
  editor.koSelectedObject({ value: q1 });
  editor.deleteObjectClick();
  assert.equal(page.questions.length, 1, "Disable delete operation");
  assert.equal(counter, 2, "onElementRemoving called one time");

  canRemove = true;
  editor.deleteObjectClick();
  assert.equal(page.questions.length, 0, "Enable delete operation");
  assert.equal(counter, 3, "onElementRemoving called one time");
});

QUnit.test("fast copy tests, copy a question", function(assert) {
  var editor = new SurveyEditor();
  var q1 = <Survey.QuestionText>editor.survey.pages[0].addNewQuestion(
    "text",
    "question1"
  );
  q1.placeHolder = "I'm here";
  editor.fastCopyQuestion(q1);
  assert.equal(
    editor.survey.pages[0].questions.length,
    2,
    "There are two questions now"
  );
  var q2 = <Survey.QuestionText>editor.survey.pages[0].questions[1];
  assert.equal(q2.name, "question2", "a new correct question name was created");
  assert.equal(q2.placeHolder, "I'm here", "a property copied correctly");
});

QUnit.test(
  "fast copy tests, copy a panel with questions and a nested panel",
  function(assert) {
    var editor = new SurveyEditor();
    var survey = editor.survey;
    var p1 = survey.pages[0].addNewPanel("panel1");
    var q1 = p1.addNewQuestion("text", "question1");
    var p2 = p1.addNewPanel("panel2");
    var q2 = p2.addNewQuestion("text", "question2");
    editor.survey.selectedElement = p1;
    editor.fastCopyQuestion(p1);

    assert.equal(
      survey.pages[0].elements.length,
      2,
      "There are two panels now"
    );
    var newPanel = <Survey.Panel>survey.pages[0].elements[1];
    assert.equal(
      newPanel.name,
      "panel3",
      "a new panel should have name 'panel3'"
    );
    assert.equal(
      newPanel.questions[0].name,
      "question3",
      "A question in new panel should have name 'question3'"
    );
    var nestedPanel = <Survey.Panel>newPanel.elements[1];
    assert.equal(
      nestedPanel.name,
      "panel4",
      "a new nested panel should have name 'panel3'"
    );
    assert.equal(
      nestedPanel.questions[0].name,
      "question4",
      "A question in new nested panel should have name 'question3'"
    );
  }
);

QUnit.test("Copy a page", function(assert) {
  var editor = new SurveyEditor();
  var survey = editor.survey;
  var p1 = survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  survey.addNewPage("page2");
  var page = editor.copyPage(<Survey.Page>survey.pages[0]);
  assert.equal(survey.pages.length, 3, "There are two pages now");
  assert.equal(survey.pages.indexOf(page), 1, "The new page has index 1");
  assert.equal(page.name, "page3", "The page name is page3");
  assert.equal(page.elements.length, 1, "There is one pane ");
  var newPanel = <Survey.Panel>page.elements[0];
  assert.equal(
    newPanel.name,
    "panel3",
    "a new panel should have name 'panel3'"
  );
  assert.equal(
    newPanel.questions[0].name,
    "question3",
    "A question in new panel should have name 'question3'"
  );
  var nestedPanel = <Survey.Panel>newPanel.elements[1];
  assert.equal(
    nestedPanel.name,
    "panel4",
    "a new nested panel should have name 'panel3'"
  );
  assert.equal(
    nestedPanel.questions[0].name,
    "question4",
    "A question in new nested panel should have name 'question3'"
  );
});

QUnit.test("fast copy tests, set the correct parent", function(assert) {
  var editor = new SurveyEditor();
  var survey = editor.survey;
  var p1 = survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  editor.survey.selectedElement = q2;
  editor.fastCopyQuestion(q2);
  assert.equal(
    p2.questions.length,
    2,
    "There are two questions in the panel now"
  );
  var newQuestion = <Survey.QuestionText>p2.questions[1];
  assert.equal(
    newQuestion.name,
    "question3",
    "a new correct question name was created"
  );
});

QUnit.test(
  "addQuestion into the QuestionPanelDynamic into second page",
  function(assert) {
    var editor = new SurveyEditor();
    var survey = editor.survey;
    survey.addNewPage("p1");
    var page = survey.addNewPage("p2");
    var pnlQuestion = page.addNewQuestion("paneldynamic", "newQuestion");
    var newQuestion = pnlQuestion["template"].addNewQuestion(
      "text",
      "question1"
    );
    //TODO rebuld items
    editor["surveyObjects"].survey = null;
    editor["surveyObjects"].survey = survey;
    survey.selectedElement = newQuestion;
    assert.equal(
      editor.survey.selectedElement.name,
      newQuestion.name,
      "The embeded question is selected"
    );
    assert.equal(
      editor.survey.currentPage.name,
      "p2",
      "The second page is selected"
    );
  }
);

QUnit.test("generateValidJSON should be true by default, bug #135", function(
  assert
) {
  var editor = new SurveyEditor(null, {});
  assert.equal(editor.koGenerateValidJSON(), true, "The default value is true");
});

QUnit.test("onModified options", function(assert) {
  var editor = new SurveyEditor();
  var modifiedOptions = [];
  editor.onModified.add(function(survey, options) {
    modifiedOptions.push(options);
  });
  var survey = editor.survey;

  editor.clickToolboxItem({
    name: "checkbox",
    iconName: "icon-checkbox",
    title: "Checkbox",
    json: {
      name: "q1",
      choices: ["item1", "item2", "item3"],
      type: "checkbox"
    },
    isCopied: false
  });
  assert.equal(modifiedOptions.length, 1, "One operation - add item");
  var opts = modifiedOptions.pop();
  assert.equal(
    opts.type,
    "ADDED_FROM_TOOLBOX",
    "Operation type ADDED_FROM_TOOLBOX"
  );
  assert.equal(
    opts.question.getType(),
    "checkbox",
    "New question of type checkbox"
  );
  var question: Survey.QuestionCheckbox = opts.question;

  editor.addPage();
  assert.equal(modifiedOptions.length, 1, "One operation - add pege");
  var opts = modifiedOptions.pop();
  assert.equal(opts.type, "PAGE_ADDED", "Operation type ADD_PAGE");
  assert.equal(opts.oldValue, undefined, "No previous value");
  assert.equal(opts.newValue.getType(), "page", "New page");
  var page = opts.newValue;

  editor.selectedObjectEditor.selectedObject = question;
  var titleEditor = editor.selectedObjectEditor.getPropertyEditor("title");
  titleEditor.koValue("Some text");
  assert.equal(modifiedOptions.length, 1, "One operation - change property");
  var opts = modifiedOptions.pop();
  assert.equal(
    opts.type,
    "PROPERTY_CHANGED",
    "Operation type PROPERTY_CHANGED"
  );
  assert.equal(opts.target, question, "Object - question");
  assert.equal(opts.name, "title", "Property name - title");
  assert.equal(opts.oldValue, "question1", "No previous value");
  assert.equal(opts.newValue, "Some text", "New value - Some text");

  editor.koSelectedObject({ value: page });
  editor.deleteObjectClick();
  assert.equal(modifiedOptions.length, 1, "One operation - delete");
  var opts = modifiedOptions.pop();
  assert.equal(opts.type, "OBJECT_DELETED", "Operation type OBJECT_DELETED");
  assert.equal(opts.target, page, "Object - page");
});

QUnit.test("onCustomPropertySort event", function(assert) {
  var editor = new SurveyEditor();
  editor.onCustomSortProperty.add(function(editor, options) {
    if (options.property1.name == "name") options.result = -1;
    if (options.property2.name == "name") options.result = 1;
  });
  editor.selectedObjectEditor.selectedObject = editor.survey.pages[0];
  assert.equal(
    editor.selectedObjectEditor.koProperties()[0].name,
    "name",
    "The name property is now the first"
  );
});

QUnit.test("onQuestionEditorChanged method", function(assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>'
          }
        ]
      }
    ]
  });
  var editor = new SurveyEditor();
  editor.text = jsonText;
  var pagesEditor: SurveyPagesEditor = editor["pagesEditor"];
  pagesEditor.selectPageClick(pagesEditor.koPages()[0]);
  var pageClass = pagesEditor.koPages()[0].getSelectedClass();
  assert.equal(pageClass, "icon-gear-active");
  assert.equal(editor.koSelectedObject().value, pagesEditor.koPages()[0].page);
  assert.ok(pagesEditor.koPages()[0].koSelected());
  assert.ok(pagesEditor.isPageActive());

  editor.survey.selectedElement = <any>editor.survey.pages[0].elements[0];
  assert.equal(editor.koSelectedObject().value, editor.survey.pages[0].elements[0]);
  pageClass = pagesEditor.koPages()[0].getSelectedClass();
  assert.equal(pageClass, "icon-gear");
  assert.ok(pagesEditor.koPages()[0].koSelected());
  assert.notOk(pagesEditor.isPageActive());

  editor.onQuestionEditorChanged(<any>editor.survey.pages[0].elements[0]);
  assert.equal(pageClass, "icon-gear");
  assert.ok(pagesEditor.koPages()[0].koSelected());
  assert.notOk(pagesEditor.isPageActive());

  pagesEditor.selectPageClick(pagesEditor.koPages()[0]);
  assert.ok(pagesEditor.isPageActive());
  assert.ok(pagesEditor.koPages()[0].koSelected());
  pageClass = pagesEditor.koPages()[0].getSelectedClass();
  assert.equal(pageClass, "icon-gear-active");
  assert.equal(editor.koSelectedObject().value, pagesEditor.koPages()[0].page);
});

function getSurveyJson(): any {
  return {
    pages: [
      {
        name: "page1",
        questions: [
          { type: "text", name: "question1" },
          {
            name: "question2",
            choices: [
              "one",
              { value: "two", text: "second value" },
              { value: 3, text: "third value" }
            ],
            type: "checkbox"
          }
        ]
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix"
          },
          { name: "question5", type: "rating" }
        ]
      }
    ]
  };
}
