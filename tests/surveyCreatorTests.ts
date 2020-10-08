import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyCreator } from "../src/editor";
import { PagesEditorViewModel } from "../src/components/pages-editor";
import { SurveyQuestionEditor } from "../src/questionEditors/questionEditor";
import { SurveyObjectProperty } from "../src/objectProperty";
import { AccordionViewModel } from "../src/utils/accordion";
import { isPropertyVisible } from "../src/utils/utils";
import { SurveyPropertyConditionEditor } from "../src/propertyEditors/propertyConditionEditor";
import { SurveyObjects } from "../src/surveyObjects";
import { editorLocalization } from "../src/editorLocalization";

export default QUnit.module("surveyEditorTests");

class SurveyCreatorTester extends SurveyCreator {
  constructor() {
    super();
  }
  public getSurveyObjects(): SurveyObjects {
    return this.surveyObjects;
  }
}

QUnit.test("Set Text property", function (assert) {
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
          "Citroen",
        ],
      },
    ],
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
QUnit.test("Escape HTML question string", function (assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>',
          },
        ],
      },
    ],
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
QUnit.test("At least one page should be available", function (assert) {
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
QUnit.test("options.questionTypes", function (assert) {
  var allTypes = Survey.ElementFactory.Instance.getAllTypes();
  var editor = new SurveyCreator(null, null);
  // var toolbox = new QuestionToolbox(editor.toolboxItems, editor);
  assert.equal(
    editor.toolbox.items.length,
    allTypes.length,
    "All types are accepted"
  );
  editor = new SurveyCreator(null, {
    questionTypes: ["text", "dropdown", "unknown"],
  });
  // toolbox = new QuestionToolbox(editor.toolboxItems, editor);
  assert.equal(
    editor.toolbox.items.length,
    2,
    "Only two types from three are accepted"
  );
});
QUnit.test("Editor state property", function (assert) {
  var editor = new SurveyCreator();
  editor.showErrorOnFailedSave = false;
  var success = true;
  editor.saveSurveyFunc = function (
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
QUnit.test("Do not reload surey on 'Designer' tab click", function (assert) {
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

QUnit.test("SurveyJSON always return correct data, bug #53", function (assert) {
  var editor = new SurveyCreator();
  editor.survey.pages[0].addNewQuestion("text", "q1");
  editor.showTestSurvey();
  assert.equal(
    JSON.stringify(editor["getSurveyJSON"]()).indexOf("q1") > -1,
    true,
    "The new question is here"
  );
});

QUnit.test("onQuestionAdded event", function (assert) {
  var editor = new SurveyCreator();
  var counter = 0;
  editor.onQuestionAdded.add(function () {
    counter++;
  });
  assert.equal(counter, 0, "No question was added");
  editor.text = JSON.stringify(getSurveyJson());
  assert.equal(counter, 0, "No question was added");
  editor.survey.pages[0].addNewQuestion("text", "q1");
  assert.equal(counter, 1, "One question was added");
});

QUnit.test("onElementDeleting event", function (assert) {
  var editor = new SurveyCreator();
  var counter = 0;
  var canRemove = true;
  editor.onElementDeleting.add(function (editor, options) {
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

QUnit.test("Delete object and selectedElement property", function (assert) {
  var creator = new SurveyCreator();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2" },
          {
            type: "panel",
            name: "panel1",
            elements: [
              { type: "text", name: "panel1_q1" },
              { type: "text", name: "panel1_q2" },
              { type: "text", name: "panel1_q3" },
              { type: "text", name: "panel1_q4" },
            ],
          },
          { type: "text", name: "q3" },
        ],
      },
    ],
  };
  creator.selectedElement = creator.survey.getQuestionByName("panel1_q3");
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "panel1_q4",
    "The next element in panel is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "panel1_q2",
    "The previous element in panel is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "panel1_q1",
    "The first element in panel is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(creator.selectedElement.name, "panel1", "The panel is selected");
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "q3",
    "The last question is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "q2",
    "The second question is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(
    creator.selectedElement.name,
    "q1",
    "The first question is selected"
  );
  creator.deleteCurrentObject();
  assert.equal(creator.selectedElement.name, "page1", "The page is selected");
});

QUnit.test("fast copy tests, copy a question", function (assert) {
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
  function (assert) {
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

QUnit.test("Copy a page", function (assert) {
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

QUnit.test("fast copy tests, set the correct parent", function (assert) {
  var creator = new SurveyCreator();
  var survey = creator.survey;
  var p1 = creator.survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  creator.survey.selectedElement = q2;
  creator.fastCopyQuestion(q2);
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
  function (assert) {
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
      "The embedded question is selected"
    );
    assert.equal(
      editor.survey.currentPage.name,
      "p2",
      "The second page is selected"
    );
  }
);

QUnit.test("generateValidJSON should be true by default, bug #135", function (
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

  editor.propertyGridObjectEditorModel.selectedObject = question;
  var titleEditor = editor.propertyGridObjectEditorModel.getPropertyEditorByName(
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
QUnit.test("onCustomPropertySort event", function (assert) {
  var editor = new SurveyCreator("", {
    showElementEditorAsPropertyGrid: false,
  });
  editor.onCustomSortProperty.add(function (editor, options) {
    if (options.property1.name == "name") options.result = -1;
    if (options.property2.name == "name") options.result = 1;
  });
  editor.propertyGridObjectEditorModel.selectedObject = editor.survey.pages[0];
  assert.equal(
    (<any>(
      editor.propertyGridObjectEditorModel.koElementEditor()
    )).koProperties()[0].name,
    "name",
    "The name property is now the first"
  );
});

QUnit.test("onQuestionEditorChanged method", function (assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>',
          },
        ],
      },
    ],
  });
  var creator = new SurveyCreator();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  creator.text = jsonText;

  creator.selectedElement = creator.survey.pages[0];
  var pageClass = pagesEditor.getPageMenuIconClass(creator.survey.pages[0]);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(creator.koSelectedObject().value, creator.survey.pages[0]);
  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);

  creator.survey.selectedElement = <any>creator.survey.pages[0].elements[0];
  assert.equal(
    creator.koSelectedObject().value,
    creator.survey.pages[0].elements[0]
  );
  pageClass = pagesEditor.getPageMenuIconClass(creator.survey.pages[0]);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);

  creator.onQuestionEditorChanged(<any>creator.survey.pages[0].elements[0]);
  pageClass = pagesEditor.getPageMenuIconClass(creator.survey.pages[0]);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);

  creator.selectedElement = creator.survey.pages[0];
  pageClass = pagesEditor.getPageMenuIconClass(creator.survey.pages[0]);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(creator.koSelectedObject().value, creator.survey.pages[0]);
  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);
});

QUnit.test("pagesEditor activePage when question selected", function (assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [],
      },
      {
        name: "page2",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>',
          },
        ],
      },
    ],
  });
  var creator = new SurveyCreator();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  creator.text = jsonText;

  var currentPage = creator.survey.pages[1];

  creator.selectedElement = currentPage;

  var pageClass = pagesEditor.getPageMenuIconClass(currentPage);
  assert.equal(pageClass, "icon-gearactive");
  assert.equal(creator.koSelectedObject().value, currentPage);
  assert.equal(pagesEditor.model.selectedPage(), currentPage);

  creator.survey.selectedElement = <any>creator.survey.pages[1].elements[0];
  assert.equal(
    creator.koSelectedObject().value,
    creator.survey.pages[1].elements[0]
  );
  pageClass = pagesEditor.getPageMenuIconClass(currentPage);
  assert.equal(pageClass, "icon-gear");
  assert.equal(pagesEditor.model.selectedPage(), currentPage);
});

QUnit.test("pagesEditor addNewPage in the dropdown", function (assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [],
      },
    ],
  });
  var creator = new SurveyCreator();
  creator.text = jsonText;

  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );

  assert.equal(1, creator.survey.pages.length);

  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);
  assert.equal(pagesEditor.model.pagesForSelection().length, 2);

  pagesEditor.model.selectedPage(
    pagesEditor.model.pagesForSelection()[1].value
  );

  assert.equal(pagesEditor.model.pagesForSelection().length, 3);
  assert.equal(creator.survey.pages[1], pagesEditor.model.selectedPage());
});

QUnit.test("pagesEditor.readOnly", function (assert) {
  var creator = new SurveyCreator();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  assert.equal(
    pagesEditor.model.readOnly,
    false,
    "page editor is not read-only by default"
  );

  creator.readOnly = true;
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  assert.equal(
    pagesEditor.model.readOnly,
    true,
    "page editor is read-only editor.readOnly"
  );

  creator.readOnly = false;
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  assert.equal(
    pagesEditor.model.readOnly,
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
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  assert.equal(
    pagesEditor.model.readOnly,
    true,
    "page editor is read-only allowModifyPages"
  );
});

QUnit.test("PagesEditor change question's page", function (assert) {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>',
          },
        ],
      },
      {
        name: "page2",
        elements: [],
      },
    ],
  });
  var creator = new SurveyCreator();
  creator.text = jsonText;
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );

  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[0]);

  var question = <Survey.Question>creator.survey.pages[0].elements[0];
  question.page = creator.survey.pages[1];
  creator.onPropertyValueChanged(
    <any>{ name: "page", isDefaultValue: () => false },
    question,
    creator.survey.pages[1]
  );
  assert.equal(pagesEditor.model.selectedPage(), creator.survey.pages[1]);
});

QUnit.test(
  "Element name should be unique - property grid + Question Editor",
  function (assert) {
    var editor = new SurveyCreator();
    editor.survey.currentPage.addNewQuestion("text", "question1");
    editor.survey.currentPage.addNewQuestion("text", "question2");
    var question = editor.survey.currentPage.addNewQuestion("text", "question");
    editor.propertyGridObjectEditorModel.selectedObject = question;
    var namePropertyEditor = editor.propertyGridObjectEditorModel.getPropertyEditorByName(
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

QUnit.test("Validate Selected Element Errors", function (assert) {
  var titleProp = Survey.Serializer.findProperty("question", "title");
  var oldIsRequired = titleProp.isRequired;
  titleProp.isRequired = true;
  var creator = new SurveyCreator();
  var question = creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.selectedElement = question;
  creator.validateSelectedElement();
  var titlePropertyEditor = creator.propertyGridObjectEditorModel.getPropertyEditorByName(
    "title"
  ).editor;
  assert.equal(
    titlePropertyEditor.koHasError(),
    true,
    "There is error in title editor"
  );
  question.title = "My title";
  creator.validateSelectedElement();
  assert.equal(
    titlePropertyEditor.koHasError(),
    false,
    "There is no errors in title editor"
  );
  titleProp.isRequired = oldIsRequired;
});

QUnit.test("Update conditions/expressions on changing question.name", function (
  assert
) {
  var editor = new SurveyCreator();
  editor.survey.currentPage.addNewQuestion("text", "question1");
  editor.survey.currentPage.addNewQuestion("text", "question2");
  var q1 = <Survey.Question>editor.survey.getAllQuestions()[0];
  var q2 = <Survey.Question>editor.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  editor.propertyGridObjectEditorModel.selectedObject = q1;
  var namePropertyEditor = editor.propertyGridObjectEditorModel.getPropertyEditorByName(
    "name"
  ).editor;
  namePropertyEditor.koValue("myUpdatedQuestion1");
  assert.equal(
    q2.visibleIf,
    "{myUpdatedQuestion1} = 1",
    "Update the condition accordingly"
  );
});

QUnit.test(
  "Update conditions/expressions on changing question.valueName",
  function (assert) {
    var editor = new SurveyCreator();
    editor.survey.currentPage.addNewQuestion("text", "question1");
    editor.survey.currentPage.addNewQuestion("text", "question2");
    var q1 = <Survey.Question>editor.survey.getAllQuestions()[0];
    var q2 = <Survey.Question>editor.survey.getAllQuestions()[1];
    q2.visibleIf = "{question1} = 1";
    editor.propertyGridObjectEditorModel.selectedObject = q1;
    var namePropertyEditor = editor.propertyGridObjectEditorModel.getPropertyEditorByName(
      "name"
    ).editor;
    var valuePropertyEditor = editor.propertyGridObjectEditorModel.getPropertyEditorByName(
      "valueName"
    ).editor;
    valuePropertyEditor.koValue("valueName1");
    assert.equal(
      q2.visibleIf,
      "{valueName1} = 1",
      "valueName from empty to valueName1"
    );
    valuePropertyEditor.koValue("valueName2");
    assert.equal(
      q2.visibleIf,
      "{valueName2} = 1",
      "valueName from valueName1 to valueName2"
    );
    valuePropertyEditor.koValue("");
    assert.equal(
      q2.visibleIf,
      "{question1} = 1",
      "valueName from valueName2 to empty"
    );
    valuePropertyEditor.koValue("valueName3");
    assert.equal(
      q2.visibleIf,
      "{valueName3} = 1",
      "valueName from empty to valueName3"
    );
    namePropertyEditor.koValue("valueName3");
    namePropertyEditor.koValue("question11");
    assert.equal(
      q2.visibleIf,
      "{valueName3} = 1",
      "ignore changing name if valueName is not empty"
    );
  }
);

QUnit.test(
  "Remove Panel immediately on add - https://surveyjs.answerdesk.io/ticket/details/T1106",
  function (assert) {
    var editor = new SurveyCreator();
    editor.onPanelAdded.add(function (sender, options) {
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
  function (assert) {
    var editor = new SurveyCreator();
    editor.text = JSON.stringify(getSurveyJson());
    var pagesEditor = new PagesEditorViewModel(
      editor.pagesEditorModel,
      editor.survey.pages[0]
    );
    editor.survey.selectedElement = editor.survey.getQuestionByName(
      "question4"
    );
    assert.equal(
      pagesEditor.model.selectedPage().name,
      "page3",
      "Page 3 is selected"
    );
    editor.survey.selectedElement = editor.survey.getQuestionByName(
      "question3"
    );
    assert.equal(
      pagesEditor.model.selectedPage().name,
      "page2",
      "Page 2 is selected"
    );
  }
);

QUnit.test(
  "getDisplayText https://surveyjs.answerdesk.io/ticket/details/T1380",
  function (assert) {
    var editor = new SurveyCreator();
    editor.showObjectTitles = true;
    editor.text = JSON.stringify(getSurveyJson());
    assert.equal(
      editor.pagesEditorModel.getDisplayText(
        editor.pagesEditorModel.pagesForSelection()[0].value
      ),
      "Page 1",
      "page1 title"
    );
    assert.equal(
      editor.pagesEditorModel.pagesForSelection()[0].text,
      "Page 1",
      "page1 title"
    );
    assert.equal(
      editor.pagesEditorModel.getDisplayText(editor.survey.pages[0]),
      "Page 1",
      "page1 title"
    );
  }
);

QUnit.test("Do not allow to select page object", function (assert) {
  var creator = new SurveyCreator();
  creator.JSON = getSurveyJson();
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  assert.equal(creator.selectedElement.name, "question1");
  creator.onSelectedElementChanging.add(function (c, options) {
    if (
      options.newSelectedElement != null &&
      options.newSelectedElement.getType() == "page"
    ) {
      options.newSelectedElement = creator.survey;
    }
  });
  creator.selectedElement = creator.survey.pages[0];
  assert.ok(creator.selectedElement, "There is the selected object");
  assert.equal(
    creator.selectedElement.getType(),
    "survey",
    "The selected object is survey"
  );
});

QUnit.test("Do not allow to select page/survey objects", function (assert) {
  var creator = new SurveyCreator();
  creator.onSelectedElementChanging.add(function (c, options) {
    var el = options.newSelectedElement;
    if (el != null && (el.getType() == "page" || el.getType() == "survey")) {
      options.newSelectedElement =
        creator.survey.getAllQuestions().length > 0
          ? creator.survey.getAllQuestions()[0]
          : null;
    }
  });
  creator.selectedElement = null;
  assert.notOk(
    creator.selectedElement,
    "There is no selected element, do not select survey"
  );
  creator.JSON = getSurveyJson();
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  assert.equal(creator.selectedElement.name, "question1");
  creator.selectedElement = creator.survey.pages[0];
  assert.equal(
    creator.selectedElement.getType(),
    "text",
    "Do not select page or survey"
  );
});

QUnit.test("Change elemenent page", function (assert) {
  var editor = new SurveyCreator();
  editor.JSON = getSurveyJson();
  editor.selectedElement = editor.survey.getQuestionByName("question1");
  assert.equal(
    editor.selectedElement.name,
    "question1",
    "question1 is selected"
  );
  assert.equal(editor.survey.currentPage.name, "page1", "page1 is current");
  var objEditor = editor.propertyGridObjectEditorModel.koElementEditor();
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

QUnit.test("show property grid on Edit", function (assert) {
  var editor = new SurveyCreator();
  editor.JSON = getSurveyJson();
  editor.showToolbox = "right";
  editor.rightContainerActiveItem("toolbox");
  editor.hideAdvancedSettings = true;
  editor.rightContainerVisible(false);
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
  assert.equal(
    editor.rightContainerVisible(),
    true,
    "Make sure right container is visible"
  );
});

QUnit.test("hideAdvancedSettings and designer containers visibility", function (
  assert
) {
  var editor = new SurveyCreator();

  // editor.showToolbox = "left";
  // editor.showPropertyGrid = "right";
  // editor.hideAdvancedSettings = false;
  assert.equal(
    editor.hideAdvancedSettings,
    false,
    "Make sure that property grid is shown default"
  );
  assert.equal(
    editor.leftContainerVisible(),
    true,
    "Make sure right container is visible default"
  );
  assert.equal(
    editor.rightContainerVisible(),
    true,
    "Make sure right container is visible default"
  );

  // editor.showToolbox = "left";
  // editor.showPropertyGrid = "right";
  editor.hideAdvancedSettings = true;
  assert.equal(
    editor.hideAdvancedSettings,
    true,
    "Make sure that property grid is hidden"
  );
  assert.equal(
    editor.leftContainerVisible(),
    true,
    "Make sure right container is visible"
  );
  assert.equal(
    editor.rightContainerVisible(),
    false,
    "Make sure right container is hidden"
  );

  // editor.showToolbox = "left";
  // editor.showPropertyGrid = "right";
  editor.hideAdvancedSettings = false;
  assert.equal(
    editor.hideAdvancedSettings,
    false,
    "Make sure that property grid is shown"
  );
  assert.equal(
    editor.leftContainerVisible(),
    true,
    "Make sure right container is visible"
  );
  assert.equal(
    editor.rightContainerVisible(),
    true,
    "Make sure right container is visible"
  );

  editor.showToolbox = "right";
  // editor.showPropertyGrid = "right";
  // editor.hideAdvancedSettings = false;
  assert.equal(
    editor.hideAdvancedSettings,
    false,
    "Make sure that property grid is shown"
  );
  assert.equal(
    editor.leftContainerVisible(),
    true,
    "Make sure right container is visible"
  );
  assert.equal(
    editor.rightContainerVisible(),
    true,
    "Make sure right container is visible"
  );

  // editor.showToolbox = "right";
  // editor.showPropertyGrid = "right";
  editor.hideAdvancedSettings = true;
  assert.equal(
    editor.hideAdvancedSettings,
    true,
    "Make sure that property grid is hidden"
  );
  assert.equal(
    editor.leftContainerVisible(),
    true,
    "Make sure right container is visible"
  );
  assert.equal(
    editor.rightContainerVisible(),
    true,
    "Make sure right container is visible"
  );
});

QUnit.test("Show toolbox in right container and hide property grid", function (
  assert
) {
  var creator = new SurveyCreator();
  creator.showPropertyGrid = false;
  creator.showToolbox = "right";
  assert.deepEqual(creator.leftContainer, [], "left container is empty");
  assert.deepEqual(
    creator.rightContainer,
    ["toolbox"],
    "right container contains toolbox"
  );
});

QUnit.test("Undo-redo on showing modal window", function (assert) {
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
  function (assert) {
    var creator = new SurveyCreator();
    creator.koShowElementEditorAsPropertyGrid(false);
    creator.JSON = {
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 2" },
        { type: "text", name: "q3", visibleIf: "{q1} = 3" },
      ],
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

QUnit.test("Undo-redo creator add/remove page", function (assert) {
  var creator = new SurveyCreator();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 2" },
      { type: "text", name: "q3", visibleIf: "{q1} = 3" },
    ],
  };
  assert.equal(creator.survey.pages.length, 1, "There is one page");
  creator.addPage();
  assert.equal(creator.survey.pages.length, 2, "There are two pages");
  creator.undo();
  assert.equal(creator.survey.pages.length, 1, "Undo new page");
  creator.redo();
  assert.equal(creator.survey.pages.length, 2, "Redo new page");
});

QUnit.test("showModalOnElementEditing property", function (assert) {
  var creator = new SurveyCreator();
  assert.equal(
    creator.showModalOnElementEditing,
    false,
    "Show new property grid by default"
  );
  creator.showPropertyGrid = false;
  assert.equal(
    creator.showModalOnElementEditing,
    true,
    "There is no property grid, show modal"
  );
  creator.showPropertyGrid = true;
  assert.equal(
    creator.showModalOnElementEditing,
    false,
    "Show new property grid, showPropertyGrid is show again"
  );
  creator = new SurveyCreator(null, { showElementEditorAsPropertyGrid: false });
  assert.equal(
    creator.showModalOnElementEditing,
    true,
    "Show old property grid"
  );
});

QUnit.test("pageEditMode property", function (assert) {
  var options = {
    pageEditMode: "single",
  };
  var creator = new SurveyCreator(undefined, options);
  assert.equal(
    creator.topContainer.indexOf("pages-editor"),
    -1,
    "Pages editor shouldn't be shown"
  );
  creator = new SurveyCreator();
  assert.equal(
    creator.topContainer.indexOf("pages-editor"),
    1,
    "Pages editor should be shown"
  );
});

QUnit.test("The onModified event is called on property changed", function (
  assert
) {
  var creator = new SurveyCreator(undefined);
  var counter;
  creator.onModified.add(() => {
    counter++;
  });
  var survey = creator.survey;

  survey.addNewPage("p");
  var question = <Survey.QuestionRadiogroupModel>(
    survey.pages[0].addNewQuestion("radiogroup", "q1")
  );
  var property = Survey.Serializer.findProperty("question", "title");
  var propertyEditor = new SurveyObjectProperty(property, creator);
  propertyEditor.object = question;
  var editor: any = propertyEditor.editor;

  counter = 0;
  editor.koValue("some title");
  assert.equal(counter, 1, "1 modification - title changed");

  creator.undoRedoManager.undo();
  assert.equal(counter, 2, "2 modification un-done");

  creator.undoRedoManager.redo();
  assert.equal(counter, 3, "3 modification re-done");

  property = Survey.Serializer.findProperty("selectbase", "choices");
  propertyEditor = new SurveyObjectProperty(property, creator);
  propertyEditor.object = question;
  editor = propertyEditor.editor;

  counter = 0;
  editor.onAddClick();
  assert.equal(counter, 1, "1 modification - after add");

  creator.undoRedoManager.undo();
  assert.equal(counter, 2, "2 modification un-done");

  editor.onDeleteClick(editor.originalValue[0]);
  assert.equal(counter, 3, "3 modification - after delete");

  editor.onClearClick();
  assert.equal(counter, 4, "4 modification - after clear");
});

QUnit.test(
  "Pass showPropertyGrid in options - https://github.com/surveyjs/survey-creator/issues/657",
  function (assert) {
    try {
      var creator = new SurveyCreator(undefined, { showPropertyGrid: "left" });
      assert.ok(!!creator);
    } catch {
      assert.ok(false, "Exception has occured in constructor");
    }
  }
);

QUnit.test("Can show unexisting property", function (assert) {
  var creator = new SurveyCreator(undefined);
  var question = new Survey.QuestionCheckbox("q1");
  creator.onCanShowProperty.add((sender, options) => {
    options.canShow = options.property.name !== "someth";
  });
  assert.notOk(creator.canShowObjectProperty(question, "someth"));
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
              { value: 3, text: "third value" },
            ],
            type: "checkbox",
          },
        ],
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix",
          },
          { name: "question5", type: "rating" },
        ],
      },
    ],
  };
}

QUnit.test("Default toolbar items", function (assert) {
  var creator = new SurveyCreator(undefined);
  assert.equal(creator.toolbarItems().length, 8, "Necessary items are present");
  assert.equal(
    creator.toolbarItems()[0].id,
    "svd-toolbar-page-selector",
    "page selector"
  );
  assert.equal(creator.toolbarItems()[1].id, "svd-undo", "svd-undo");
  assert.equal(creator.toolbarItems()[2].id, "svd-redo", "svd-redo");
  assert.equal(
    creator.toolbarItems()[3].id,
    "svd-survey-settings",
    "svd-survey-settings"
  );
  assert.equal(creator.toolbarItems()[4].id, "svd-options", "svd-options");
  assert.equal(creator.toolbarItems()[5].id, "svd-test", "svd-test");
  assert.equal(creator.toolbarItems()[6].id, "svd-save", "svd-save");
  assert.equal(creator.toolbarItems()[7].id, "svd-state", "svd-state");
});

QUnit.test("showPageSelectorInToolbar property", function (assert) {
  var creator = new SurveyCreator(undefined);
  assert.equal(
    creator.toolbarItems()[0].visible,
    false,
    "page selector in toolbar invisible by default"
  );

  creator = new SurveyCreator(undefined, { showPageSelectorInToolbar: true });

  assert.equal(
    creator.toolbarItems()[0].visible,
    true,
    "page selector is visible with showPageSelectorInToolbar property"
  );
});

QUnit.test("deleteElement function", function (assert) {
  var editor = new SurveyCreator();
  var page = editor.survey.pages[0];
  var q1 = page.addNewQuestion("text", "q1");
  var q2 = page.addNewQuestion("text", "q2");
  var q3 = page.addNewQuestion("text", "q3");

  editor.selectedElement = q2;
  editor.deleteElement(editor.selectedElement);
  assert.equal(
    editor.selectedElement.name,
    "q3",
    "select next question after delete the previous one"
  );

  editor.deleteElement(editor.selectedElement);
  assert.equal(
    editor.selectedElement.name,
    "q1",
    "select prev question after delete the lastest one"
  );

  editor.deleteElement(editor.selectedElement);
  assert.equal(
    editor.selectedElement.name,
    "page1",
    "select page after delete the last question"
  );
});
QUnit.test("Do not call onPageAdded on pages move", function (assert) {
  var editor = new SurveyCreator();
  var counter = 0;
  editor.onPageAdded.add(function (sender, options) {
    counter++;
  });
  editor.survey.addNewPage("page2");
  editor.survey.addNewPage("page3");
  assert.equal(counter, 2, "We added two pages");
  var page2 = editor.survey.pages[1];
  editor.survey.pages.splice(1, 1);
  editor.survey.pages.splice(0, 0, page2);
  assert.equal(
    editor.survey.pages[0].name,
    "page2",
    "page2 inserted correctly"
  );
  assert.equal(counter, 2, "We do not added new page");
});

QUnit.test(
  "creator collapseAllPropertyTabs expandAllPropertyTabs expandPropertyTab collapsePropertyTab",
  function (assert) {
    const creator = new SurveyCreator(undefined);
    const tabs = creator.propertyGridObjectEditorModel.koElementEditor().koTabs;
    const vm = new AccordionViewModel({ tabs });

    assert.equal(vm.tabs().length, 10, "tabs count");
    assert.equal(vm.tabs()[0].collapsed(), false, "general tab expanded");
    assert.equal(vm.tabs()[5].collapsed(), true, "logic tab expanded");

    creator.collapsePropertyTab("general");
    assert.equal(vm.tabs()[0].collapsed(), true, "general tab collapsed");

    creator.expandPropertyTab("logic");
    assert.equal(vm.tabs()[5].collapsed(), false, "logic tab expanded");

    creator.collapseAllPropertyTabs();
    vm.tabs().forEach((tab) => {
      assert.equal(tab.collapsed(), true, tab.name + " tab collapsed");
    });

    creator.expandAllPropertyTabs();
    vm.tabs().forEach((tab) => {
      assert.equal(tab.collapsed(), false, tab.name + " tab expanded");
    });
  }
);

QUnit.test(
  "creator getMenuItems should respect property visibility (e.g. for image question) - https://github.com/surveyjs/survey-creator/issues/897",
  function (assert) {
    const creator = new SurveyCreator(undefined);
    const question = new Survey.QuestionImage("qi");
    var menuItems = creator.survey.getMenuItems(question);
    assert.deepEqual(
      menuItems.filter(
        (i) => ["showtitle", "isrequired"].indexOf(i.name) !== -1
      ),
      [],
      "No 'showtitle' or 'isrequired' in the menu items"
    );
    assert.notOk(
      isPropertyVisible(question, "title"),
      "The title property is hidden for the image question"
    );
    assert.notOk(
      isPropertyVisible(question, "isRequired"),
      "The isRequired property is hidden for the image question"
    );

    const questionText = new Survey.QuestionText("qt");
    menuItems = creator.survey.getMenuItems(questionText);
    assert.equal(
      menuItems.filter(
        (i) => ["showtitle", "isrequired"].indexOf(i.name) !== -1
      ).length,
      2,
      "The 'showtitle' or 'isrequired' are in the menu items"
    );
  }
);

QUnit.test(
  "addQuestion into the QuestionPanelDynamic into second page",
  function (assert) {
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
      "The embedded question is selected"
    );
    assert.equal(
      editor.survey.currentPage.name,
      "p2",
      "The second page is selected"
    );
  }
);
QUnit.test("generate element name based on another survey", function (assert) {
  var creator = new SurveyCreator();
  creator.onGenerateNewName.add(function (sender, options) {
    if (options.name == "question3") {
      options.isUnique = false;
    }
    if (options.name == "question5") {
      options.name = "question9";
    }
  });
  var survey = creator.survey;
  var page = survey.addNewPage("p1");
  page.addNewQuestion("text");
  assert.equal(page.questions[0].name, "question1", "Generate question1 name");
  page.addNewQuestion("text");
  assert.equal(page.questions[1].name, "question2", "Generate question2 name");
  page.addNewQuestion("text");
  assert.equal(
    page.questions[2].name,
    "question4",
    "Generate question4 name, question3 is used already"
  );
  page.addNewQuestion("text");
  assert.equal(
    page.questions[3].name,
    "question9",
    "Generate question9 name, suggest by setting the name"
  );
  page.addNewQuestion("text");
  assert.equal(
    page.questions[4].name,
    "question10",
    "Generate question10 name, next after question10"
  );
});
QUnit.test("creator.onConditionQuestionsGetList, Bug#957", function (assert) {
  var creator = new SurveyCreator();
  creator.onConditionQuestionsGetList.add(function (sender, options) {
    options.list = options.list.filter(
      (question) => question.getType() === "text"
    );
  });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
      { name: "q3", type: "dropdown" },
      { name: "q4", type: "checkbox" },
      { name: "q5", type: "radiogroup" },
    ],
  };
  var question = creator.survey.getQuestionByName("q1");
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.options = creator;
  editor.object = question;
  editor.beforeShow();
  editor.isEditorShowing = true;
  var editorItem = editor.koEditorItems()[0];
  assert.ok(editorItem, "Editor item is created");
  assert.equal(editorItem.nameQuestion.choices.length, 1, "One text question");
});

QUnit.test("creator.onAddQuestion and undo-redo manager, Bug#972", function (
  assert
) {
  var creator = new SurveyCreator();
  creator.onQuestionAdded.add(function (sender, options) {
    options.question.title = "new title";
  });
  creator.JSON = {};
  creator.survey.currentPage.addNewQuestion("text", "q1");
  creator.survey.currentPage.addNewQuestion("text", "q2");
  creator.undo();
  creator.undo();
  assert.equal(
    creator.survey.getAllQuestions().length,
    0,
    "We added two questions and then undo adding two questions"
  );
});
QUnit.test("creator.onAddPage and undo-redo manager, Bug#972", function (
  assert
) {
  var creator = new SurveyCreator();
  creator.onPageAdded.add(function (sender, options) {
    options.page.title = "new title";
  });
  creator.JSON = {};
  creator.survey.addNewPage("p2");
  creator.survey.addNewPage("p3");
  creator.undo();
  creator.undo();
  assert.equal(
    creator.survey.pages.length,
    1,
    "We added two pages and then undo adding two pages"
  );
});
QUnit.test("creator.onAddPanel and undo-redo manager, Bug#972", function (
  assert
) {
  var creator = new SurveyCreator();
  creator.onPanelAdded.add(function (sender, options) {
    options.panel.title = "new title";
  });
  creator.JSON = {};
  creator.survey.currentPage.addNewPanel("panel1");
  creator.survey.currentPage.addNewPanel("panel2");
  creator.undo();
  creator.undo();
  assert.equal(
    creator.survey.getAllPanels().length,
    0,
    "We added two panels and then undo adding two panels"
  );
});

QUnit.test(
  "creator.onGetObjectTextInPropertyGrid event, update on property changing",
  function (assert) {
    var creator = new SurveyCreatorTester();
    creator.onGetObjectTextInPropertyGrid.add(function (sender, options) {
      if (!!options.obj.title) {
        options.text = options.obj.title;
      }
      if (!!options.obj.description) {
        options.text = options.obj.description;
      }
    });
    creator.JSON = {
      elements: [{ type: "text", name: "q1", title: "question1" }],
    };
    assert.equal(
      creator.getSurveyObjects().koObjects()[2].text(),
      "..question1",
      "Default value is correct"
    );
    var question = creator.survey.getAllQuestions()[0];
    creator.selectedElement = question;
    question.description = "New Title";
    creator.propertyGridObjectEditorModel.onPropertyChanged(
      question,
      Survey.Serializer.findProperty("question", "description"),
      ""
    );
    assert.equal(
      creator.getSurveyObjects().koObjects()[2].text(),
      "..New Title",
      "React on chaning the current object property"
    );
  }
);

QUnit.test(
  "update element TextInPropertyGrid for non selected element",
  function (assert) {
    var creator = new SurveyCreatorTester();
    creator.onGetObjectTextInPropertyGrid.add(function (sender, options) {
      if (!!options.obj.description) {
        options.text = options.obj.description;
      }
    });
    creator.JSON = {
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    };
    var q1 = creator.survey.getAllQuestions()[0];
    var q2 = creator.survey.getAllQuestions()[1];
    creator.selectedElement = q1;
    q2.name = "q2_new";
    creator.updateObjectTextInPropertyGrid(q2);
    assert.equal(
      creator.getSurveyObjects().koObjects()[3].text(),
      "..q2_new",
      "React on chaning the current object property"
    );
    q2.description = "New Title";
    creator.updateObjectTextInPropertyGrid(q2);
    assert.equal(
      creator.getSurveyObjects().koObjects()[3].text(),
      "..New Title",
      "React on chaning the current object property"
    );
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, set correct locale into internal survey, Bug #953",
  function (assert) {
    editorLocalization.currentLocale = "de";
    var creator = new SurveyCreatorTester();
    creator.JSON = {
      elements: [
        { name: "q1", type: "text", valueName: "profile:q1" },
        {
          name: "q2",
          type: "text",
        },
      ],
    };
    assert.equal(
      creator.survey.locale,
      "",
      "We do not set the designer survey locale"
    );
    var question = creator.survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.options = creator;
    editor.object = question;
    editor.beforeShow();
    editor.isEditorShowing = true;
    assert.equal(
      editor.koEditorItems()[0].survey.locale,
      "de",
      "Get locale from Creator"
    );

    editorLocalization.currentLocale = "";
    editor = new SurveyPropertyConditionEditor(property);
    editor.options = creator;
    editor.object = question;
    editor.beforeShow();
    editor.isEditorShowing = true;
    assert.equal(
      editor.koEditorItems()[0].survey.locale,
      "",
      "locale in Creator is empty"
    );
  }
);
