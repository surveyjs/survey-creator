import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyCreator } from "../src/editor";
import { PagesEditor } from "../src/pages-editor";
import { SurveyQuestionEditor } from "../src/questionEditors/questionEditor";

export default QUnit.module("surveyEditorTests");

QUnit.test("Set Text property", function(assert) {
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator(null, null);
  assert.equal(
    editor.toolbox.items.length,
    allTypes.length,
    "All types are accepted"
  );
  editor = new SurveyCreator(null, {
    questionTypes: ["text", "dropdown", "unknown"]
  });
  assert.equal(
    editor.toolbox.items.length,
    2,
    "Only two types from three are accepted"
  );
});
QUnit.test("Editor state property", function(assert) {
  var editor = new SurveyCreator();
  editor.showErrorOnFailedSave = false;
  var success = true;
  editor.saveSurveyFunc = function(
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    doSaveCallback(no, success);
  };
  editor.text = JSON.stringify(getSurveyJson());
  assert.equal(editor.state, "");
  editor.addPage();
  assert.equal(editor.state, "modified");
  editor.saveButtonClick();
  assert.equal(editor.state, "saved");
  editor.addPage();
  assert.equal(editor.state, "modified");
  success = false;
  editor.saveButtonClick();
  assert.equal(editor.state, "modified");
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
  var editor = new SurveyCreator();
  editor.text = JSON.stringify(getSurveyJson());
  var pageCount = editor.survey.PageCount;
  editor.addPage();
  assert.equal(editor.survey.PageCount, pageCount + 1, "new Page is added");
  editor.showDesigner();
  assert.equal(
    editor.survey.PageCount,
    pageCount + 1,
    "new Page is stil there"
  );
  editor.showDesigner();
  assert.equal(
    editor.survey.PageCount,
    pageCount + 1,
    "new Page is stil there"
  );
});

QUnit.test("SurveyJSON always return correct data, bug #53", function(assert) {
  var editor = new SurveyCreator();
  editor.survey.pages[0].addNewQuestion("text", "q1");
  editor.showTestSurvey();
  assert.equal(
    JSON.stringify(editor["getSurveyJSON"]()).indexOf("q1") > -1,
    true,
    "The new question is here"
  );
});

QUnit.test("onQuestionAdded event", function(assert) {
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
  var q1 = <Survey.QuestionText>(
    editor.survey.pages[0].addNewQuestion("text", "question1")
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
    var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
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
  var editor = new SurveyCreator();
  var survey = editor.survey;
  var p1 = editor["pages"]()[0].addNewPanel("panel1");
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
    var editor = new SurveyCreator();
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
  var editor = new SurveyCreator(null, {});
  assert.equal(editor.koGenerateValidJSON(), true, "The default value is true");
});

/* TODO refactor
QUnit.test("onModified options", function(assert) {
  var editor = new SurveyCreator();
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

  editor.selectedElementPropertyGrid.selectedObject = question;
  var titleEditor = editor.selectedElementPropertyGrid.getPropertyEditorByName(
    "title"
  ).editor;
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
*/
QUnit.test("onCustomPropertySort event", function(assert) {
  var editor = new SurveyCreator("", {
    showElementEditorAsPropertyGrid: false
  });
  editor.onCustomSortProperty.add(function(editor, options) {
    if (options.property1.name == "name") options.result = -1;
    if (options.property2.name == "name") options.result = 1;
  });
  editor.selectedElementPropertyGrid.selectedObject = editor.survey.pages[0];
  assert.equal(
    editor.selectedElementPropertyGrid.koElementEditor().koProperties()[0].name,
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
  var editor = new SurveyCreator();
  var pages = editor["pages"];
  var pagesEditor = new PagesEditor(editor, document.createElement("div"));
  editor.text = jsonText;

  editor.selectPage(editor.survey.pages[0]);
  var pageClass = pagesEditor.getPageMenuIconClass(editor.survey.pages[0]);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(editor.koSelectedObject().value, editor.survey.pages[0]);
  assert.equal(pagesEditor["selectedPage"], editor.survey.pages[0]);

  editor.survey.selectedElement = <any>editor.survey.pages[0].elements[0];
  assert.equal(
    editor.koSelectedObject().value,
    editor.survey.pages[0].elements[0]
  );
  pageClass = pagesEditor.getPageMenuIconClass(editor.survey.pages[0]);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor["selectedPage"], editor.survey.pages[0]);

  editor.onQuestionEditorChanged(<any>editor.survey.pages[0].elements[0]);
  pageClass = pagesEditor.getPageMenuIconClass(editor.survey.pages[0]);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor["selectedPage"], editor.survey.pages[0]);

  editor.selectPage(editor.survey.pages[0]);
  pageClass = pagesEditor.getPageMenuIconClass(editor.survey.pages[0]);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(editor.koSelectedObject().value, editor.survey.pages[0]);
  assert.equal(pagesEditor["selectedPage"], editor.survey.pages[0]);
});

QUnit.test("pagesEditor activePage when question selected", function(assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: []
      },
      {
        name: "page2",
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
  var editor = new SurveyCreator();
  var pages = editor["pages"];
  var pagesEditor = new PagesEditor(editor, document.createElement("div"));
  editor.text = jsonText;

  var currentPage = editor.survey.pages[1];

  editor.selectPage(currentPage);

  var pageClass = pagesEditor.getPageMenuIconClass(currentPage);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(editor.koSelectedObject().value, currentPage);
  assert.equal(pagesEditor["selectedPage"], currentPage);

  editor.survey.selectedElement = <any>editor.survey.pages[1].elements[0];
  assert.equal(
    editor.koSelectedObject().value,
    editor.survey.pages[1].elements[0]
  );
  pageClass = pagesEditor.getPageMenuIconClass(currentPage);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor["selectedPage"], currentPage);
});

QUnit.test("pagesEditor addNewPage in the dropdown", function(assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: []
      }
    ]
  });
  var editor = new SurveyCreator();
  editor.text = jsonText;

  var pagesEditor = new PagesEditor(editor, document.createElement("div"));

  assert.equal(1, editor["pages"]().length);

  assert.equal(pagesEditor.selectedPage, editor["pages"]()[0]);
  assert.equal(pagesEditor.pagesSelection().length, 2);

  pagesEditor.pageSelection(pagesEditor.pagesSelection()[1]);

  assert.equal(pagesEditor.pagesSelection().length, 3);
  assert.equal(editor["pages"]()[1], pagesEditor.selectedPage);
});

QUnit.test("pagesEditor.readOnly", function(assert) {
  var creator = new SurveyCreator();
  var pagesEditor = new PagesEditor(creator, document.createElement("div"));
  assert.equal(
    pagesEditor.readOnly,
    false,
    "page editor is not read-only by default"
  );

  creator.readOnly = true;
  pagesEditor = new PagesEditor(creator, document.createElement("div"));
  assert.equal(
    pagesEditor.readOnly,
    true,
    "page editor is read-only editor.readOnly"
  );

  creator.readOnly = false;
  pagesEditor = new PagesEditor(creator, document.createElement("div"));
  assert.equal(
    pagesEditor.readOnly,
    false,
    "page editor is not read-only again"
  );

  assert.equal(
    creator.allowModifyPages,
    true,
    "The property is true by default"
  );
  var creator = new SurveyCreator(null, { allowModifyPages: false });
  assert.equal(creator.allowModifyPages, false, "The parameter set correctly");
  pagesEditor = new PagesEditor(creator, document.createElement("div"));
  assert.equal(
    pagesEditor.readOnly,
    true,
    "page editor is read-only allowModifyPages"
  );
});

QUnit.test("PagesEditor change question's page", function(assert) {
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
      },
      {
        name: "page2",
        elements: []
      }
    ]
  });
  var editor = new SurveyCreator();
  editor.text = jsonText;
  var pagesEditor = new PagesEditor(editor, document.createElement("div"));

  assert.equal(pagesEditor.selectedPage, editor["pages"]()[0]);

  var question = <Survey.Question>editor.survey.pages[0].elements[0];
  question.page = editor["pages"]()[1];
  editor.onPropertyValueChanged(
    <any>{ name: "page", isDefaultValue: () => false },
    question,
    editor["pages"]()[1]
  );
  assert.equal(pagesEditor.selectedPage, editor["pages"]()[1]);
});

QUnit.test(
  "Element name should be unique - property grid + Question Editor",
  function(assert) {
    var editor = new SurveyCreator();
    editor.survey.currentPage.addNewQuestion("text", "question1");
    editor.survey.currentPage.addNewQuestion("text", "question2");
    var question = editor.survey.currentPage.addNewQuestion("text", "question");
    editor.selectedElementPropertyGrid.selectedObject = question;
    var namePropertyEditor = editor.selectedElementPropertyGrid.getPropertyEditorByName(
      "name"
    ).editor;
    namePropertyEditor.koValue("question2");
    assert.equal(
      namePropertyEditor.koValue(),
      "question2",
      "The name is changed in editor"
    );
    assert.equal(namePropertyEditor.hasError(), true, "It shows errror");
    assert.equal(question.name, "question", "the name is not changed");
    namePropertyEditor.koValue("question");
    assert.equal(namePropertyEditor.hasError(), false, "There is no error now");
    assert.equal(question.name, "question", "the name is still question");
    namePropertyEditor.koValue("question4");
    assert.equal(
      namePropertyEditor.hasError(),
      false,
      "There is no error again"
    );
    assert.equal(
      question.name,
      "question4",
      "the name is changed to question4"
    );
  }
);

QUnit.test("Update conditions/expressions on changing question.name", function(
  assert
) {
  var editor = new SurveyCreator();
  editor.survey.currentPage.addNewQuestion("text", "question1");
  editor.survey.currentPage.addNewQuestion("text", "question2");
  var q1 = <Survey.Question>editor.survey.getAllQuestions()[0];
  var q2 = <Survey.Question>editor.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  editor.selectedElementPropertyGrid.selectedObject = q1;
  var namePropertyEditor = editor.selectedElementPropertyGrid.getPropertyEditorByName(
    "name"
  );
  namePropertyEditor.editor.koValue("myUpdatedQuestion1");
  editor.onQuestionEditorChanged(q1);
  assert.equal(
    q2.visibleIf,
    "{myUpdatedQuestion1} = 1",
    "Update the condition accordingly"
  );
});

QUnit.test(
  "Remove Panel immediately on add - https://surveyjs.answerdesk.io/ticket/details/T1106",
  function(assert) {
    var editor = new SurveyCreator();
    editor.onPanelAdded.add(function(sender, options) {
      let parent = options.panel.parent;
      parent.removeElement(options.panel);
    });

    editor.clickToolboxItem({ json: { name: "q1", type: "panel" } });
    assert.equal(
      editor["surveyObjects"].koObjects().length,
      2,
      "panel has not been added"
    );
  }
);

QUnit.test(
  "Change page on changing survey.selectedElement if needed, Bug#424",
  function(assert) {
    var editor = new SurveyCreator();
    editor.text = JSON.stringify(getSurveyJson());
    var pagesEditor = new PagesEditor(editor, editor.survey.pages[0]);
    editor.survey.selectedElement = editor.survey.getQuestionByName(
      "question4"
    );
    assert.equal(
      pagesEditor.pageSelection().name,
      "page3",
      "Page 3 is selected"
    );
    editor.survey.selectedElement = editor.survey.getQuestionByName(
      "question3"
    );
    assert.equal(
      pagesEditor.pageSelection().name,
      "page2",
      "Page 2 is selected"
    );
  }
);

QUnit.test(
  "getDisplayText https://surveyjs.answerdesk.io/ticket/details/T1380",
  function(assert) {
    var editor = new SurveyCreator();
    editor.showObjectTitles = true;
    editor.text = JSON.stringify(getSurveyJson());
    var pagesEditor = new PagesEditor(editor, editor.survey.pages[0]);
    assert.equal(
      pagesEditor.getDisplayText(pagesEditor.pagesSelection()[0]),
      "Page 1",
      "page1 title"
    );
    assert.equal(
      pagesEditor.getDisplayText(editor.survey.pages[0]),
      "Page 1",
      "page1 title"
    );
  }
);

QUnit.test("Do not allow to select page object", function(assert) {
  var creator = new SurveyCreator();
  creator.text = JSON.stringify(getSurveyJson());
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  assert.equal(creator.selectedElement.name, "question1");
  creator.onSelectedElementChanging.add(function(c, options) {
    if (
      options.newSelectedElement != null &&
      options.newSelectedElement.getType() == "page"
    ) {
      options.newSelectedElement = creator.survey;
    }
  });
  creator.selectedElement = creator.survey.pages[0];
  assert.equal(creator.selectedElement.getType(), "survey");
});

QUnit.test("Change elemenent page", function(assert) {
  var editor = new SurveyCreator();
  editor.JSON = getSurveyJson();
  editor.selectedElement = editor.survey.getQuestionByName("question1");
  assert.equal(
    editor.selectedElement.name,
    "question1",
    "question1 is selected"
  );
  assert.equal(editor.survey.currentPage.name, "page1", "page1 is current");
  var objEditor = editor.selectedElementPropertyGrid.koElementEditor();
  var propertyEditor = objEditor.getPropertyEditorByName("page");
  propertyEditor.editor.koValue("page2");
  assert.equal(
    editor.selectedElement.name,
    "question1",
    "question1 is still selected"
  );
  assert.equal(
    editor.selectedElement.page.name,
    "page2",
    "question1 has page2 now"
  );
  assert.equal(editor.survey.currentPage.name, "page2", "page2 is current");
});

QUnit.test("show property grid on Edit", function(assert) {
  var editor = new SurveyCreator();
  editor.JSON = getSurveyJson();
  editor.showToolbox = "right";
  editor.rightContainerActiveItem("toolbox");
  editor.hideAdvancedSettings = true;
  editor.selectedElement = editor.survey.getQuestionByName("question1");
  assert.equal(
    editor.selectedElement.name,
    "question1",
    "question1 is selected"
  );
  editor.showQuestionEditor(editor.selectedElement);
  assert.equal(
    editor.rightContainerActiveItem(),
    "property-grid",
    "Property grid is selected"
  );
  assert.equal(
    editor.hideAdvancedSettings,
    false,
    "Make sure that property grid is shown"
  );
});

QUnit.test("Undo-redo on showing modal window", function(assert) {
  var creator = new SurveyCreator();
  creator.koShowElementEditorAsPropertyGrid(false);
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  var question = creator.survey.getQuestionByName("q1");
  assert.equal(creator.koCanUndo(), false, "There is nothing to undo");
  var editor = new SurveyQuestionEditor(question, null, creator);
  editor.getPropertyEditorByName("name").editor.koValue("question1");
  editor.getPropertyEditorByName("title").editor.koValue("new title");
  assert.equal(creator.koCanUndo(), false, "We do not apply yet");
  editor.onOkClick();
  assert.equal(question.name, "question1", "new name is applied");
  assert.equal(question.title, "new title", "new title is applied");
  assert.equal(creator.koCanUndo(), true, "We have something to undo");
  creator.undo();
  assert.equal(creator.koCanUndo(), false, "There is nothing to apply again");
  assert.equal(question.name, "q1", "undo name");
  assert.equal(question.title, "q1", "undo title");
  creator.redo();
  assert.equal(question.name, "question1", "redo name");
  assert.equal(question.title, "new title", "redo title");
});

QUnit.test(
  "Undo-redo on showing modal window and updating the expressions",
  function(assert) {
    var creator = new SurveyCreator();
    creator.koShowElementEditorAsPropertyGrid(false);
    creator.JSON = {
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 2" },
        { type: "text", name: "q3", visibleIf: "{q1} = 3" }
      ]
    };
    var q1 = creator.survey.getQuestionByName("q1");
    var q2 = creator.survey.getQuestionByName("q2");
    var q3 = creator.survey.getQuestionByName("q3");
    var editor = new SurveyQuestionEditor(q1, null, creator);
    editor.getPropertyEditorByName("name").editor.koValue("question1");
    editor.onOkClick();
    assert.equal(q1.name, "question1", "q1 name is changed");
    assert.equal(q2.visibleIf, "{question1} = 2", "q2 visibleIf is changed");
    assert.equal(q3.visibleIf, "{question1} = 3", "q3 visibleIf is changed");
    creator.undo();
    assert.equal(q1.name, "q1", "undo q1 name");
    assert.equal(q2.visibleIf, "{q1} = 2", "undo q2 visibleIf");
    assert.equal(q3.visibleIf, "{q1} = 3", "undo q3 visibleIf");
    creator.redo();
    assert.equal(q1.name, "question1", "redo q1 name");
    assert.equal(q2.visibleIf, "{question1} = 2", "redo q2 visibleIf");
    assert.equal(q3.visibleIf, "{question1} = 3", "redo q3 visibleIf");
  }
);

QUnit.test("Undo-redo creator add/remove page", function(assert) {
  var creator = new SurveyCreator();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 2" },
      { type: "text", name: "q3", visibleIf: "{q1} = 3" }
    ]
  };
  assert.equal(creator.survey.pages.length, 1, "There is one page");
  creator.addPage();
  assert.equal(creator.survey.pages.length, 2, "There are two pages");
  creator.undo();
  assert.equal(creator.survey.pages.length, 1, "Undo new page");
  creator.redo();
  assert.equal(creator.survey.pages.length, 2, "Redo new page");
});

function getSurveyJson(): any {
  return {
    pages: [
      {
        name: "page1",
        title: "Page 1",
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
