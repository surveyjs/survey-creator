import {
  PanelModel,
  SurveyModel,
  QuestionHtmlModel,
  ElementFactory,
  QuestionTextModel,
  Serializer,
} from "survey-core";
import { CreatorBase, ICreatorOptions } from "../src/creator-base";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "../src/settings";

export class CreatorTester extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new SurveyModel(json);
  }
  public doSaveFunc() {
    this.doSave();
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    return this.selectedElement["name"];
  }
}
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

test("Set Text property", () => {
  var creator = new CreatorTester();
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
  creator.JSON = json;
  expect(creator.isDesignerShowing).toBeTruthy();
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.getAllQuestions()[0].name).toEqual("car");
  var jsonText = JSON.stringify(json);
  jsonText = jsonText.substr(5);
  creator.text = jsonText;
  expect(creator.isDesignerShowing).toBeFalsy();
});

test("Escape HTML question string", () => {
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
  var creator = new CreatorTester();
  creator.text = jsonText;
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  var q3 = creator.survey.getQuestionByName("question3");
  expect(q3).toBeTruthy();
  expect((<QuestionHtmlModel>q3).html).toEqual(
    '<img src="https://placehold.it/300x100" alt="test"/>'
  );
  expect(creator.text.replace(/\s+|\t+|\n+/g, "")).toEqual(
    jsonText.replace(/\s+|\t+|\n+/g, "")
  );
});

test("At least one page should be available", () => {
  var creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.text = undefined;
  expect(creator.survey.pages).toHaveLength(1);
});

test("options.questionTypes", () => {
  var allTypes = ElementFactory.Instance.getAllTypes();
  var creator = new CreatorTester();
  expect(creator.toolbox.items).toHaveLength(allTypes.length);
  creator = new CreatorTester({
    questionTypes: ["text", "dropdown", "unknown"],
  });
  expect(creator.toolbox.items).toHaveLength(2);
});

test("Editor state property", () => {
  var creator = new CreatorTester();
  creator.showErrorOnFailedSave = false;
  var success = true;
  creator.saveSurveyFunc = function (
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    doSaveCallback(no, success);
  };
  creator.JSON = getSurveyJson();
  expect(creator.state).toBeFalsy();
  creator.addPage();
  expect(creator.state).toEqual("modified");
  creator.doSaveFunc();
  expect(creator.state).toEqual("saved");
  creator.addPage();
  expect(creator.state).toEqual("modified");
  success = false;
  creator.doSaveFunc();
  expect(creator.state).toEqual("modified");
  //   creator.addPage();
  //   expect(creator.state, "modified");
  //   creator.doUndoClick();
  //   expect(creator.state, "saved");
  //   creator.doRedoClick();
  //   expect(creator.state, "modified");
});

test("Do not reload surey on 'Designer' tab click", () => {
  var creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  var pageCount = creator.survey.PageCount;
  creator.addPage();
  expect(creator.survey.PageCount).toEqual(pageCount + 1);
  creator.showDesigner();
  expect(creator.survey.PageCount).toEqual(pageCount + 1);
});

test("SurveyJSON always return correct data, bug #53", () => {
  var creator = new CreatorTester();
  creator.survey.pages[0].addNewQuestion("text", "q1");
  creator.showTestSurvey();
  expect(JSON.stringify(creator.text).indexOf("q1") > -1).toBeTruthy();
});

test("onQuestionAdded event", () => {
  var creator = new CreatorTester();
  var counter = 0;
  creator.onQuestionAdded.add(function () {
    counter++;
  });
  expect(counter).toEqual(0);
  creator.JSON = getSurveyJson();
  expect(counter).toEqual(0);
  creator.survey.pages[0].addNewQuestion("text", "q1");
  expect(counter).toEqual(1);
});

test("onElementDeleting event", () => {
  var creator = new CreatorTester();
  var counter = 0;
  var canRemove = true;
  creator.onElementDeleting.add(function (editor, options) {
    options.allowing = canRemove;
    counter++;
  });
  var page = creator.survey.pages[0];
  var q1 = page.addNewQuestion("text", "q1");
  var q2 = page.addNewQuestion("text", "q2");

  expect(page.questions).toHaveLength(2);
  creator.selectElement(creator.survey.getQuestionByName("q2"));
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(1);
  expect(counter).toEqual(1);

  canRemove = false;
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(1);
  expect(counter).toEqual(2);

  canRemove = true;
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(0);
  expect(counter).toEqual(3);
});

test("Delete object and selectedElement property", () => {
  var creator = new CreatorTester();
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
  expect(creator.selectedElementName).toEqual("panel1_q4");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("panel1_q2");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("panel1_q1");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("panel1");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("q3");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("q2");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("q1");
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("page1");
});

test("fast copy tests, copy a question", () => {
  var creator = new CreatorTester();
  var q1 = <QuestionTextModel>(
    creator.survey.pages[0].addNewQuestion("text", "question1")
  );
  q1.placeHolder = "I'm here";
  creator.fastCopyQuestion(q1);
  expect(creator.survey.pages[0].questions).toHaveLength(2);
  var q2 = <QuestionTextModel>creator.survey.pages[0].questions[1];
  expect(q2.name).toEqual("question2");
  expect(q2.placeHolder).toEqual("I'm here");
});

test("fast copy tests, copy a panel with questions and a nested panel", () => {
  var creator = new CreatorTester();
  var survey = creator.survey;
  var p1 = survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  creator.survey.selectedElement = p1;
  creator.fastCopyQuestion(p1);

  expect(survey.pages[0].elements).toHaveLength(2);
  var newPanel = <PanelModel>survey.pages[0].elements[1];
  expect(newPanel.name).toEqual("panel3");
  expect(newPanel.questions[0].name).toEqual("question3");
  var nestedPanel = <PanelModel>newPanel.elements[1];
  expect(nestedPanel.name).toEqual("panel4");
  expect(nestedPanel.questions[0].name).toEqual("question4");
});

test("Copy a page", () => {
  var creator = new CreatorTester();
  var survey = creator.survey;
  var p1 = survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  survey.addNewPage("page2");
  var page = creator.copyPage(survey.pages[0]);
  expect(survey.pages).toHaveLength(3);
  expect(survey.pages.indexOf(page)).toEqual(1);
  expect(page.name).toEqual("page3");
  expect(page.elements).toHaveLength(1);
  var newPanel = <PanelModel>page.elements[0];
  expect(newPanel.name).toEqual("panel3");
  expect(newPanel.questions[0].name).toEqual("question3");
  var nestedPanel = <PanelModel>newPanel.elements[1];
  expect(nestedPanel.name).toEqual("panel4");
  expect(nestedPanel.questions[0].name).toEqual("question4");
});

test("fast copy tests, set the correct parent", () => {
  var creator = new CreatorTester();
  var survey = creator.survey;
  var p1 = creator.survey.pages[0].addNewPanel("panel1");
  var q1 = p1.addNewQuestion("text", "question1");
  var p2 = p1.addNewPanel("panel2");
  var q2 = p2.addNewQuestion("text", "question2");
  creator.survey.selectedElement = q2;
  creator.fastCopyQuestion(q2);
  expect(p2.questions).toHaveLength(2);
  var newQuestion = <QuestionTextModel>p2.questions[1];
  expect(newQuestion.name).toEqual("question3");
});

//TODO doesn't work
test("addQuestion into the QuestionPanelDynamic into second page", () => {
  var creator = new CreatorTester();
  var survey = creator.survey;
  survey.addNewPage("p1");
  var page = survey.addNewPage("p2");
  var pnlQuestion = page.addNewQuestion("paneldynamic", "newQuestion");
  var newQuestion = pnlQuestion["template"].addNewQuestion("text", "question1");
  survey.selectedElement = newQuestion;
  //TODO
  //expect(creator.selectedElementName).toEqual(newQuestion.name);
});

test("generateValidJSON should be true by default, bug #135", () => {
  var creator = new CreatorTester();
  expect(creator.generateValidJSON).toBeTruthy();
});
test("Element name should be unique - property grid + Question Editor", () => {
  var creator = new CreatorTester();
  creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.survey.currentPage.addNewQuestion("text", "question2");
  var question = creator.survey.currentPage.addNewQuestion("text", "question");
  creator.selectElement(question);
  expect(creator.propertyGrid.obj).toBeTruthy();
  expect(creator.propertyGrid.obj).toEqual(question);
  var questionName = creator.propertyGrid.survey.getQuestionByName("name");
  expect(questionName).toBeTruthy();
  expect(questionName.value).toEqual("question");
  questionName.value = "question2";
  expect(questionName.value).toEqual("question2");
  expect(questionName.hasErrors()).toBeTruthy();
  expect(question.name).toEqual("question");
  questionName.value = "question";
  expect(questionName.hasErrors()).toBeFalsy();
  expect(question.name).toEqual("question");
  questionName.value = "question4";
  expect(questionName.hasErrors()).toBeFalsy();
  expect(question.name).toEqual("question4");
});

test("Validate Selected Element Errors", () => {
  var titleProp = Serializer.findProperty("question", "title");
  var oldIsRequired = titleProp.isRequired;
  titleProp.isRequired = true;
  var creator = new CreatorTester();
  var question = creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.selectedElement = question;
  expect(creator.validateSelectedElement()).toBeFalsy();
  var titleQuestion = creator.propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.errors).toHaveLength(1);
  question.title = "My title";
  expect(creator.validateSelectedElement()).toBeTruthy();
  expect(titleQuestion.errors).toHaveLength(0);
  titleProp.isRequired = oldIsRequired;
});
test("Update conditions/expressions on changing question.name", () => {
  var creator = new CreatorTester();
  creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.survey.currentPage.addNewQuestion("text", "question2");
  var q1 = creator.survey.getAllQuestions()[0];
  var q2 = creator.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  creator.selectElement(q1);
  var nameQuestion = creator.propertyGrid.survey.getQuestionByName("name");
  nameQuestion.value = "myUpdatedQuestion1";
  expect(q2.visibleIf).toEqual("{myUpdatedQuestion1} = 1");
});

test("Update conditions/expressions on changing question.valueName", () => {
  var creator = new CreatorTester();
  creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.survey.currentPage.addNewQuestion("text", "question2");
  var q1 = creator.survey.getAllQuestions()[0];
  var q2 = creator.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  creator.selectElement(q1);
  var nameQuestion = creator.propertyGrid.survey.getQuestionByName("name");
  var valueNameQuestion = creator.propertyGrid.survey.getQuestionByName(
    "valueName"
  );
  valueNameQuestion.value = "valueName1";
  expect(q2.visibleIf).toEqual("{valueName1} = 1");
  valueNameQuestion.value = "valueName2";
  expect(q2.visibleIf).toEqual("{valueName2} = 1");
  valueNameQuestion.value = "";
  expect(q2.visibleIf).toEqual("{question1} = 1");
  valueNameQuestion.value = "valueName3";
  expect(q2.visibleIf).toEqual("{valueName3} = 1");
  nameQuestion.value = "valueName3";
  nameQuestion.value = "question11";
  expect(q2.visibleIf).toEqual("{valueName3} = 1");
});

test("Remove Panel immediately on add - https://surveyjs.answerdesk.io/ticket/details/T1106", () => {
  var creator = new CreatorTester();
  creator.onPanelAdded.add(function (sender, options) {
    let parent = options.panel.parent;
    parent.removeElement(options.panel);
  });

  creator.clickToolboxItem({ name: "q1", type: "panel" });
  expect(creator.survey.getAllPanels()).toHaveLength(0);
});
/*
test(
  "Change page on changing survey.selectedElement if needed, Bug#424",
  () => {
    var creator = new CreatorTester();
    creator.JSON = getSurveyJson();
    var pagesEditor = new PagesEditorViewModel(
      creator.pagesEditorModel,
      creator.survey.pages[0]
    );
    creator.survey.selectedElement = creator.survey.getQuestionByName(
      "question4"
    );
    expect(
      pagescreator.model.selectedPage().name,
      "page3",
      "Page 3 is selected"
    );
    creator.survey.selectedElement = creator.survey.getQuestionByName(
      "question3"
    );
    expect(
      pagescreator.model.selectedPage().name,
      "page2",
      "Page 2 is selected"
    );
  }
);

test(
  "getDisplayText https://surveyjs.answerdesk.io/ticket/details/T1380",
  () => {
    var creator = new CreatorTester();
    creator.showObjectTitles = true;
    creator.JSON = getSurveyJson();
    expect(
      creator.pagesEditorModel.getDisplayText(
        creator.pagesEditorModel.pagesForSelection()[0].value
      ),
      "Page 1",
      "page1 title"
    );
    expect(
      creator.pagesEditorModel.pagesForSelection()[0].text,
      "Page 1",
      "page1 title"
    );
    expect(
      creator.pagesEditorModel.getDisplayText(creator.survey.pages[0]),
      "Page 1",
      "page1 title"
    );
  }
);

test("Do not allow to select page object", () => {
  var creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  expect(creator.selectedElement.name, "question1");
  creator.onSelectedElementChanging.add(function (c, options) {
    if (
      options.newSelectedElement != null &&
      options.newSelectedElement.getType() == "page"
    ) {
      options.newSelectedElement = creator.survey;
    }
  });
  creator.selectedElement = creator.survey.pages[0];
  expect.ok(creator.selectedElement, "There is the selected object");
  expect(
    creator.selectedElement.getType(),
    "survey",
    "The selected object is survey"
  );
});

test("Do not allow to select page/survey objects", () => {
  var creator = new CreatorTester();
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
  expect(creator.selectedElement.name, "question1");
  creator.selectedElement = creator.survey.pages[0];
  expect(
    creator.selectedElement.getType(),
    "text",
    "Do not select page or survey"
  );
});

test("Change elemenent page", () => {
  var creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  expect(
    creator.selectedElement.name,
    "question1",
    "question1 is selected"
  );
  expect(creator.survey.currentPage.name, "page1", "page1 is current");
  var objEditor = creator.propertyGridObjectEditorModel.koElementEditor();
  var propertyEditor = objcreator.getPropertyEditorByName("page");
  propertycreator.creator.koValue("page2");
  expect(
    creator.selectedElement.name,
    "question1",
    "question1 is still selected"
  );
  expect(
    creator.selectedElement.page.name,
    "page2",
    "question1 has page2 now"
  );
  expect(creator.survey.currentPage.name, "page2", "page2 is current");
});

test("show property grid on Edit", () => {
  var creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.showToolbox = "right";
  creator.rightContainerActiveItem("toolbox");
  creator.hideAdvancedSettings = true;
  creator.rightContainerVisible(false);
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  expect(
    creator.selectedElement.name,
    "question1",
    "question1 is selected"
  );
  creator.showQuestionEditor(creator.selectedElement);
  expect(
    creator.rightContainerActiveItem(),
    "property-grid",
    "Property grid is selected"
  );
  expect(
    creator.hideAdvancedSettings,
    false,
    "Make sure that property grid is shown"
  );
  expect(
    creator.rightContainerVisible(),
    true,
    "Make sure right container is visible"
  );
});

test(
  "hideAdvancedSettings and designer containers visibility",
  () => {
    var creator = new CreatorTester();

    // creator.showToolbox = "left";
    // creator.showPropertyGrid = "right";
    // creator.hideAdvancedSettings = false;
    expect(
      creator.hideAdvancedSettings,
      false,
      "Make sure that property grid is shown default"
    );
    expect(
      creator.leftContainerVisible(),
      true,
      "Make sure right container is visible default"
    );
    expect(
      creator.rightContainerVisible(),
      true,
      "Make sure right container is visible default"
    );

    // creator.showToolbox = "left";
    // creator.showPropertyGrid = "right";
    creator.hideAdvancedSettings = true;
    expect(
      creator.hideAdvancedSettings,
      true,
      "Make sure that property grid is hidden"
    );
    expect(
      creator.leftContainerVisible(),
      true,
      "Make sure right container is visible"
    );
    expect(
      creator.rightContainerVisible(),
      false,
      "Make sure right container is hidden"
    );

    // creator.showToolbox = "left";
    // creator.showPropertyGrid = "right";
    creator.hideAdvancedSettings = false;
    expect(
      creator.hideAdvancedSettings,
      false,
      "Make sure that property grid is shown"
    );
    expect(
      creator.leftContainerVisible(),
      true,
      "Make sure right container is visible"
    );
    expect(
      creator.rightContainerVisible(),
      true,
      "Make sure right container is visible"
    );

    creator.showToolbox = "right";
    // creator.showPropertyGrid = "right";
    // creator.hideAdvancedSettings = false;
    expect(
      creator.hideAdvancedSettings,
      false,
      "Make sure that property grid is shown"
    );
    expect(
      creator.leftContainerVisible(),
      true,
      "Make sure right container is visible"
    );
    expect(
      creator.rightContainerVisible(),
      true,
      "Make sure right container is visible"
    );

    // creator.showToolbox = "right";
    // creator.showPropertyGrid = "right";
    creator.hideAdvancedSettings = true;
    expect(
      creator.hideAdvancedSettings,
      true,
      "Make sure that property grid is hidden"
    );
    expect(
      creator.leftContainerVisible(),
      true,
      "Make sure right container is visible"
    );
    expect(
      creator.rightContainerVisible(),
      true,
      "Make sure right container is visible"
    );
  }
);

test(
  "Show toolbox in right container and hide property grid",
  () => {
    var creator = new CreatorTester();
    creator.showPropertyGrid = false;
    creator.showToolbox = "right";
    assert.deepEqual(creator.leftContainer, [], "left container is empty");
    assert.deepEqual(
      creator.rightContainer,
      ["toolbox"],
      "right container contains toolbox"
    );
  }
);

test("Undo-redo on showing modal window", () => {
  var creator = new CreatorTester();
  creator.koShowElementEditorAsPropertyGrid(false);
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  var question = creator.survey.getQuestionByName("q1");
  expect(creator.koCanUndo(), false, "There is nothing to undo");
  var creator = new SurveyQuestionEditor(question, null, creator);
  creator.getPropertyEditorByName("name").creator.koValue("question1");
  creator.getPropertyEditorByName("title").creator.koValue("new title");
  expect(creator.koCanUndo(), false, "We do not apply yet");
  creator.onOkClick();
  expect(question.name, "question1", "new name is applied");
  expect(question.title, "new title", "new title is applied");
  expect(creator.koCanUndo(), true, "We have something to undo");
  creator.undo();
  expect(creator.koCanUndo(), false, "There is nothing to apply again");
  expect(question.name, "q1", "undo name");
  expect(question.title, "q1", "undo title");
  creator.redo();
  expect(question.name, "question1", "redo name");
  expect(question.title, "new title", "redo title");
});

test(
  "Undo-redo on showing modal window and updating the expressions",
  () => {
    var creator = new CreatorTester();
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
    var creator = new SurveyQuestionEditor(q1, null, creator);
    creator.getPropertyEditorByName("name").creator.koValue("question1");
    creator.onOkClick();
    expect(q1.name, "question1", "q1 name is changed");
    expect(q2.visibleIf, "{question1} = 2", "q2 visibleIf is changed");
    expect(q3.visibleIf, "{question1} = 3", "q3 visibleIf is changed");
    creator.undo();
    expect(q1.name, "q1", "undo q1 name");
    expect(q2.visibleIf, "{q1} = 2", "undo q2 visibleIf");
    expect(q3.visibleIf, "{q1} = 3", "undo q3 visibleIf");
    creator.redo();
    expect(q1.name, "question1", "redo q1 name");
    expect(q2.visibleIf, "{question1} = 2", "redo q2 visibleIf");
    expect(q3.visibleIf, "{question1} = 3", "redo q3 visibleIf");
  }
);

test("Undo-redo creator add/remove page", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 2" },
      { type: "text", name: "q3", visibleIf: "{q1} = 3" },
    ],
  };
  expect(creator.survey.pages.length, 1, "There is one page");
  creator.addPage();
  expect(creator.survey.pages.length, 2, "There are two pages");
  creator.undo();
  expect(creator.survey.pages.length, 1, "Undo new page");
  creator.redo();
  expect(creator.survey.pages.length, 2, "Redo new page");
});

test("showModalOnElementEditing property", () => {
  var creator = new CreatorTester();
  expect(
    creator.showModalOnElementEditing,
    false,
    "Show new property grid by default"
  );
  creator.showPropertyGrid = false;
  expect(
    creator.showModalOnElementEditing,
    true,
    "There is no property grid, show modal"
  );
  creator.showPropertyGrid = true;
  expect(
    creator.showModalOnElementEditing,
    false,
    "Show new property grid, showPropertyGrid is show again"
  );
  creator = new CreatorTester(null, { showElementEditorAsPropertyGrid: false });
  expect(
    creator.showModalOnElementEditing,
    true,
    "Show old property grid"
  );
});

test("pageEditMode property", () => {
  var options = {
    pageEditMode: "single",
  };
  var creator = new CreatorTester(undefined, options);
  expect(
    creator.topContainer.indexOf("pages-editor"),
    -1,
    "Pages editor shouldn't be shown"
  );
  creator = new CreatorTester();
  expect(
    creator.topContainer.indexOf("pages-editor"),
    1,
    "Pages editor should be shown"
  );
});

test(
  "The onModified event is called on property changed",
  () => {
    var creator = new CreatorTester(undefined);
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
    propertycreator.object = question;
    var editor: any = propertycreator.editor;

    counter = 0;
    creator.koValue("some title");
    expect(counter, 1, "1 modification - title changed");

    creator.undoRedoManager.undo();
    expect(counter, 2, "2 modification un-done");

    creator.undoRedoManager.redo();
    expect(counter, 3, "3 modification re-done");

    property = Survey.Serializer.findProperty("selectbase", "choices");
    propertyEditor = new SurveyObjectProperty(property, creator);
    propertycreator.object = question;
    editor = propertycreator.editor;

    counter = 0;
    creator.onAddClick();
    expect(counter, 1, "1 modification - after add");

    creator.undoRedoManager.undo();
    expect(counter, 2, "2 modification un-done");

    creator.onDeleteClick(creator.originalValue[0]);
    expect(counter, 3, "3 modification - after delete");

    creator.onClearClick();
    expect(counter, 4, "4 modification - after clear");
  }
);

test(
  "Pass showPropertyGrid in options - https://github.com/surveyjs/survey-creator/issues/657",
  () => {
    try {
      var creator = new CreatorTester(undefined, { showPropertyGrid: "left" });
      expect.ok(!!creator);
    } catch {
      expect.ok(false, "Exception has occured in constructor");
    }
  }
);

test("Can show unexisting property", () => {
  var creator = new CreatorTester(undefined);
  var question = new Survey.QuestionCheckbox("q1");
  creator.onCanShowProperty.add((sender, options) => {
    options.canShow = options.property.name !== "someth";
  });
  assert.notOk(creator.canShowObjectProperty(question, "someth"));
});


test("Default toolbar items", () => {
  var creator = new CreatorTester(undefined);
  expect(creator.toolbarItems().length, 8, "Necessary items are present");
  expect(
    creator.toolbarItems()[0].id,
    "svd-toolbar-page-selector",
    "page selector"
  );
  expect(creator.toolbarItems()[1].id, "svd-undo", "svd-undo");
  expect(creator.toolbarItems()[2].id, "svd-redo", "svd-redo");
  expect(
    creator.toolbarItems()[3].id,
    "svd-survey-settings",
    "svd-survey-settings"
  );
  expect(creator.toolbarItems()[4].id, "svd-options", "svd-options");
  expect(creator.toolbarItems()[5].id, "svd-test", "svd-test");
  expect(creator.toolbarItems()[6].id, "svd-save", "svd-save");
  expect(creator.toolbarItems()[7].id, "svd-state", "svd-state");
});

test("showPageSelectorInToolbar property", () => {
  var creator = new CreatorTester(undefined);
  expect(
    creator.toolbarItems()[0].visible,
    false,
    "page selector in toolbar invisible by default"
  );

  creator = new CreatorTester(undefined, { showPageSelectorInToolbar: true });

  expect(
    creator.toolbarItems()[0].visible,
    true,
    "page selector is visible with showPageSelectorInToolbar property"
  );
});

test("deleteElement function", () => {
  var creator = new CreatorTester();
  var page = creator.survey.pages[0];
  var q1 = page.addNewQuestion("text", "q1");
  var q2 = page.addNewQuestion("text", "q2");
  var q3 = page.addNewQuestion("text", "q3");

  creator.selectedElement = q2;
  creator.deleteElement(creator.selectedElement);
  expect(
    creator.selectedElement.name,
    "q3",
    "select next question after delete the previous one"
  );

  creator.deleteElement(creator.selectedElement);
  expect(
    creator.selectedElement.name,
    "q1",
    "select prev question after delete the lastest one"
  );

  creator.deleteElement(creator.selectedElement);
  expect(
    creator.selectedElement.name,
    "page1",
    "select page after delete the last question"
  );
});
test("Do not call onPageAdded on pages move", () => {
  var creator = new CreatorTester();
  var counter = 0;
  creator.onPageAdded.add(function (sender, options) {
    counter++;
  });
  creator.survey.addNewPage("page2");
  creator.survey.addNewPage("page3");
  expect(counter, 2, "We added two pages");
  var page2 = creator.survey.pages[1];
  creator.survey.pages.splice(1, 1);
  creator.survey.pages.splice(0, 0, page2);
  expect(
    creator.survey.pages[0].name,
    "page2",
    "page2 inserted correctly"
  );
  expect(counter, 2, "We do not added new page");
});

test(
  "creator collapseAllPropertyTabs expandAllPropertyTabs expandPropertyTab collapsePropertyTab",
  () => {
    const creator = new CreatorTester(undefined);
    const tabs = creator.propertyGridObjectEditorModel.koElementEditor().koTabs;
    const vm = new AccordionViewModel({ tabs });

    expect(vm.tabs().length, 10, "tabs count");
    expect(vm.tabs()[0].collapsed(), false, "general tab expanded");
    expect(vm.tabs()[5].collapsed(), true, "logic tab expanded");

    creator.collapsePropertyTab("general");
    expect(vm.tabs()[0].collapsed(), true, "general tab collapsed");

    creator.expandPropertyTab("logic");
    expect(vm.tabs()[5].collapsed(), false, "logic tab expanded");

    creator.collapseAllPropertyTabs();
    vm.tabs().forEach((tab) => {
      expect(tab.collapsed(), true, tab.name + " tab collapsed");
    });

    creator.expandAllPropertyTabs();
    vm.tabs().forEach((tab) => {
      expect(tab.collapsed(), false, tab.name + " tab expanded");
    });
  }
);

test(
  "creator getMenuItems should respect property visibility (e.g. for image question) - https://github.com/surveyjs/survey-creator/issues/897",
  () => {
    const creator = new CreatorTester(undefined);
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
    expect(
      menuItems.filter(
        (i) => ["showtitle", "isrequired"].indexOf(i.name) !== -1
      ).length,
      2,
      "The 'showtitle' or 'isrequired' are in the menu items"
    );
  }
);

test(
  "creator getMenuItems should respect property readOnly - https://github.com/surveyjs/survey-creator/issues/1024",
  () => {
    const creator = new CreatorTester(undefined);
    const questionText = new Survey.QuestionText("qt");
    var menuItems = creator.survey.getMenuItems(questionText);
    var requiredItem = menuItems.filter((i) => i.name == "isrequired")[0];
    assert.notEqual(
      requiredItem,
      undefined,
      "The 'isrequired' is in the menu items"
    );

    creator.onGetPropertyReadOnly.add(function (sender, options) {
      if (options.property.name == "isRequired") {
        options.readOnly = "true";
      }
    });
    assert.notOk(questionText.isRequired);
    requiredItem.onClick(questionText);
    assert.notOk(questionText.isRequired);
  }
);

test(
  "addQuestion into the QuestionPanelDynamic into second page",
  () => {
    var creator = new CreatorTester();
    var survey = creator.survey;
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
    expect(
      creator.survey.selectedElement.name,
      newQuestion.name,
      "The embedded question is selected"
    );
    expect(
      creator.survey.currentPage.name,
      "p2",
      "The second page is selected"
    );
  }
);
test("generate element name based on another survey", () => {
  var creator = new CreatorTester();
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
  expect(page.questions[0].name, "question1", "Generate question1 name");
  page.addNewQuestion("text");
  expect(page.questions[1].name, "question2", "Generate question2 name");
  page.addNewQuestion("text");
  expect(
    page.questions[2].name,
    "question4",
    "Generate question4 name, question3 is used already"
  );
  page.addNewQuestion("text");
  expect(
    page.questions[3].name,
    "question9",
    "Generate question9 name, suggest by setting the name"
  );
  page.addNewQuestion("text");
  expect(
    page.questions[4].name,
    "question10",
    "Generate question10 name, next after question10"
  );
});
test("creator.onConditionQuestionsGetList, Bug#957", () => {
  var creator = new CreatorTester();
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
  var creator = new SurveyPropertyConditionEditor(property);
  creator.options = creator;
  creator.object = question;
  creator.beforeShow();
  creator.isEditorShowing = true;
  var editorItem = creator.koEditorItems()[0];
  expect.ok(editorItem, "Editor item is created");
  expect(editorItem.nameQuestion.choices.length, 1, "One text question");
});

test(
  "creator.onGetObjectDisplayName, change visible name for objects",
  () => {
    var creator = new CreatorTester();
    var reason = "";
    creator.onGetObjectDisplayName.add(function (sender, options) {
      reason = options.reason;
      options.displayName = options.obj.title + " [" + options.obj.name + "]";
    });
    creator.JSON = {
      elements: [
        { name: "q1", type: "text" },
        { name: "q2", title: "Question 2", type: "text" },
        { name: "q3", title: "Question 3", type: "dropdown" },
        { name: "q4", title: "Question 4", type: "checkbox" },
        { name: "q5", title: "Question 5", type: "radiogroup" },
      ],
    };
    var question = creator.survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var creator = new SurveyPropertyConditionEditor(property);
    creator.options = creator;
    creator.object = question;
    creator.beforeShow();
    creator.isEditorShowing = true;
    var editorItem = creator.koEditorItems()[0];
    expect.ok(editorItem, "Editor item is created");
    var choices = editorItem.nameQuestion.choices;
    expect(
      reason,
      "condition",
      "event fired with correct options.reason"
    );
    expect(choices.length, 4, "There are 4 questions");
    expect(
      choices[0].text,
      "Question 2 [q2]",
      "onGetObjectDisplayName was used correctly"
    );
    expect(creator.koCanAddItem(), true, "we can added a new item");
  }
);

test(
  "creator options.maxLogicItemsInCondition, hide `Add Condition` on exceeding the value",
  () => {
    var creator = new CreatorTester(null, { maxLogicItemsInCondition: 2 });
    creator.JSON = {
      elements: [
        { name: "q1", type: "text" },
        { name: "q2", type: "text" },
      ],
    };
    var question = creator.survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var creator = new SurveyPropertyConditionEditor(property);
    creator.options = creator;
    creator.object = question;
    creator.beforeShow();
    creator.isEditorShowing = true;
    expect(
      creator.koEditorItems().length,
      1,
      "There is one logic conditions"
    );
    expect(creator.koCanAddItem(), true, "we can added a new item");
    creator.koEditorItems()[0].nameQuestion.value = "q2";
    creator.addCondition();
    expect(
      creator.koEditorItems().length,
      2,
      "There are 2 logic conditions"
    );
    expect(
      creator.koCanAddItem(),
      false,
      "we can't added a new item, there are already two of them"
    );
  }
);

test(
  "creator.onAddQuestion and undo-redo manager, Bug#972",
  () => {
    var creator = new CreatorTester();
    creator.onQuestionAdded.add(function (sender, options) {
      options.question.title = "new title";
    });
    creator.JSON = {};
    creator.survey.currentPage.addNewQuestion("text", "q1");
    creator.survey.currentPage.addNewQuestion("text", "q2");
    creator.undo();
    creator.undo();
    expect(
      creator.survey.getAllQuestions().length,
      0,
      "We added two questions and then undo adding two questions"
    );
  }
);
test(
  "creator.onAddPage and undo-redo manager, Bug#972",
  () => {
    var creator = new CreatorTester();
    creator.onPageAdded.add(function (sender, options) {
      options.page.title = "new title";
    });
    creator.JSON = {};
    creator.survey.addNewPage("p2");
    creator.survey.addNewPage("p3");
    creator.undo();
    creator.undo();
    expect(
      creator.survey.pages.length,
      1,
      "We added two pages and then undo adding two pages"
    );
  }
);
test(
  "creator.onAddPanel and undo-redo manager, Bug#972",
  () => {
    var creator = new CreatorTester();
    creator.onPanelAdded.add(function (sender, options) {
      options.panel.title = "new title";
    });
    creator.JSON = {};
    creator.survey.currentPage.addNewPanel("panel1");
    creator.survey.currentPage.addNewPanel("panel2");
    creator.undo();
    creator.undo();
    expect(
      creator.survey.getAllPanels().length,
      0,
      "We added two panels and then undo adding two panels"
    );
  }
);

test(
  "creator.onGetObjectTextInPropertyGrid event, update on property changing",
  () => {
    var creator = new CreatorTester();
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
    expect(
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
    expect(
      creator.getSurveyObjects().koObjects()[2].text(),
      "..New Title",
      "React on chaning the current object property"
    );
  }
);

test(
  "use creator.onGetObjectDisplayName instead of creator.onGetObjectTextInPropertyGrid event, update on property changing",
  () => {
    var creator = new CreatorTester();
    creator.onGetObjectDisplayName.add(function (sender, options) {
      if (!!options.obj.title) {
        options.displayName = options.obj.title;
      }
      if (!!options.obj.description) {
        options.displayName = options.obj.description;
      }
    });
    creator.JSON = {
      elements: [{ type: "text", name: "q1", title: "question1" }],
    };
    expect(
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
    expect(
      creator.getSurveyObjects().koObjects()[2].text(),
      "..New Title",
      "React on chaning the current object property"
    );
  }
);

test(
  "update element TextInPropertyGrid for non selected element",
  () => {
    var creator = new CreatorTester();
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
    expect(
      creator.getSurveyObjects().koObjects()[3].text(),
      "..q2_new",
      "React on chaning the current object property"
    );
    q2.description = "New Title";
    creator.updateObjectTextInPropertyGrid(q2);
    expect(
      creator.getSurveyObjects().koObjects()[3].text(),
      "..New Title",
      "React on chaning the current object property"
    );
  }
);
test(
  "SurveyPropertyConditionEditor, set correct locale into internal survey, Bug #953",
  () => {
    editorLocalization.currentLocale = "de";
    var creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { name: "q1", type: "text" },
        {
          name: "q2",
          type: "text",
        },
      ],
    };
    expect(
      creator.survey.locale,
      "",
      "We do not set the designer survey locale"
    );
    var question = creator.survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var creator = new SurveyPropertyConditionEditor(property);
    creator.options = creator;
    creator.object = question;
    creator.beforeShow();
    creator.isEditorShowing = true;
    expect(
      creator.koEditorItems()[0].survey.locale,
      "de",
      "Get locale from Creator"
    );

    editorLocalization.currentLocale = "";
    editor = new SurveyPropertyConditionEditor(property);
    creator.options = creator;
    creator.object = question;
    creator.beforeShow();
    creator.isEditorShowing = true;
    expect(
      creator.koEditorItems()[0].survey.locale,
      "",
      "locale in Creator is empty"
    );
  }
);

test("Set Text property", () => {
  var creator = new CreatorTester();
  expect(creator.tabs().length, 3);
  expect(creator.tabs()[0].template, "se-tab-designer");
  expect(creator.tabs()[1].template, "se-tab-test");
  expect(creator.tabs()[2].template, "se-tab-json-editor");
});

test("options.showPagesToolbox", () => {
  var creator = new CreatorTester();
  expect(creator.showPagesToolbox, true);
  editor = new CreatorTester(null, { showPagesToolbox: "none" });
  expect(creator.showPagesToolbox, false);
});
*/
test("Change names in copyElements", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "text",
            name: "question2",
          },
        ],
      },
    ],
  };
  var panel = new PanelModel("panel1");
  panel.addNewQuestion("text", "question1");
  panel.addNewQuestion("text", "question2");
  var newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.name).toEqual("panel2");
  expect(newPanel.questions[0].name).toEqual("question3");
  expect(newPanel.questions[1].name).toEqual("question4");
});
test("Update expressions in copyElements", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "text",
            name: "question2",
          },
        ],
      },
    ],
  };
  var panel = new PanelModel("panel1");
  panel.addNewQuestion("text", "question1");
  panel.addNewQuestion("text", "question2");
  panel.questions[1].visibleIf = "{question1} = 'a'";
  var newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.questions[1].visibleIf).toEqual("{question3} = 'a'");
  expect(newPanel.questions[1].visible).toBeTruthy();
});
/*
//Not implemented
test("onCustomPropertySort event", () => {
  var creator = new CreatorTester({
    showElementEditorAsPropertyGrid: false,
  });
  creator.onCustomSortProperty.add(function (editor, options) {
    if (options.property1.name == "name") options.result = -1;
    if (options.property2.name == "name") options.result = 1;
  });
  creator.propertyGridObjectEditorModel.selectedObject = creator.survey.pages[0];
  expect(
    (<any>(
      creator.propertyGridObjectEditorModel.koElementEditor()
    )).koProperties()[0].name,
    "name",
    "The name property is now the first"
  );
});
test("onQuestionEditorChanged method", () => {
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
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  creator.text = jsonText;

  creator.selectedElement = creator.survey.pages[0];
  var pageClass = pagescreator.getPageMenuIconClass(creator.survey.pages[0]);
  expect(pageClass, "icon-gearactive");
  expect(creator.koSelectedObject().value, creator.survey.pages[0]);
  expect(pagescreator.model.selectedPage(), creator.survey.pages[0]);

  creator.survey.selectedElement = <any>creator.survey.pages[0].elements[0];
  expect(
    creator.koSelectedObject().value,
    creator.survey.pages[0].elements[0]
  );
  pageClass = pagescreator.getPageMenuIconClass(creator.survey.pages[0]);
  expect(pageClass, "icon-gear");
  expect(pagescreator.model.selectedPage(), creator.survey.pages[0]);

  creator.onQuestionEditorChanged(<any>creator.survey.pages[0].elements[0]);
  pageClass = pagescreator.getPageMenuIconClass(creator.survey.pages[0]);
  expect(pageClass, "icon-gear");
  expect(pagescreator.model.selectedPage(), creator.survey.pages[0]);

  creator.selectedElement = creator.survey.pages[0];
  pageClass = pagescreator.getPageMenuIconClass(creator.survey.pages[0]);
  expect(pageClass, "icon-gearactive");
  expect(creator.koSelectedObject().value, creator.survey.pages[0]);
  expect(pagescreator.model.selectedPage(), creator.survey.pages[0]);
});

test("pagesEditor activePage when question selected", () => {
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
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  creator.text = jsonText;

  var currentPage = creator.survey.pages[1];

  creator.selectedElement = currentPage;

  var pageClass = pagescreator.getPageMenuIconClass(currentPage);
  expect(pageClass, "icon-gearactive");
  expect(creator.koSelectedObject().value, currentPage);
  expect(pagescreator.model.selectedPage(), currentPage);

  creator.survey.selectedElement = <any>creator.survey.pages[1].elements[0];
  expect(
    creator.koSelectedObject().value,
    creator.survey.pages[1].elements[0]
  );
  pageClass = pagescreator.getPageMenuIconClass(currentPage);
  expect(pageClass, "icon-gear");
  expect(pagescreator.model.selectedPage(), currentPage);
});
test("pagesEditor addNewPage in the dropdown", () => {
  var jsonText = JSON.stringify({
    pages: [
      {
        name: "page1",
        elements: [],
      },
    ],
  });
  var creator = new CreatorTester();
  creator.text = jsonText;

  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );

  expect(1, creator.survey.pages.length);

  expect(
    pagescreator.model.selectedPage().name,
    creator.survey.pages[0].name
  );
  expect(pagescreator.model.pagesForSelection().length, 2);
  expect(creator.survey.currentPage.name, creator.survey.pages[0].name);

  pagescreator.model.selectedPage(
    pagescreator.model.pagesForSelection()[1].value
  );

  expect(pagescreator.model.pagesForSelection().length, 3);
  expect(
    creator.survey.pages[1].name,
    pagescreator.model.selectedPage().name
  );
  expect(creator.survey.currentPage.name, creator.survey.pages[1].name);
});

test(
  "pagesEditor selectedPage keep currantPage in survey - Survey page shows wrong content after page reordering via drag/drop #1009",
  () => {
    var jsonText = JSON.stringify({
      pages: [
        {
          name: "page1",
          elements: [],
        },
        {
          name: "page2",
          elements: [],
        },
      ],
    });
    var creator = new CreatorTester();
    creator.text = jsonText;

    var pagesEditor = new PagesEditorViewModel(
      creator.pagesEditorModel,
      document.createElement("div")
    );

    expect(2, creator.survey.pages.length);

    const movedPage = creator.survey.pages[0];
    creator.selectedElement = movedPage;

    expect(
      pagescreator.model.selectedPage().name,
      movedPage.name,
      "initial selection - page editor selectedPage"
    );
    expect(
      creator.survey.currentPage.name,
      movedPage.name,
      "initial selection - survey.currentPage"
    );

    // Emulate unsync during drag/drop pages
    creator.pagesEditorModel.blockPagesRebuilt(true);
    SurveyHelper.moveItemInArray(pagescreator.model.pages, movedPage, 1);
    creator.pagesEditorModel.blockPagesRebuilt(false);

    pagescreator.model.selectedPage(movedPage);

    expect(
      pagescreator.model.selectedPage().name,
      movedPage.name,
      "page editor selectedPage after selection"
    );
    expect(
      creator.survey.currentPage.name,
      movedPage.name,
      "survey.currentPage after selection"
    );
  }
);

test("pagescreator.readOnly", () => {
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.readOnly,
    false,
    "page editor is not read-only by default"
  );

  creator.readOnly = true;
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.readOnly,
    true,
    "page editor is read-only creator.readOnly"
  );

  creator.readOnly = false;
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.readOnly,
    false,
    "page editor is not read-only again"
  );

  expect(
    creator.allowModifyPages,
    true,
    "The property is true by default"
  );
  var creator = new CreatorTester(null, { allowModifyPages: false });
  expect(creator.allowModifyPages, false, "The parameter set correctly");
  pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.readOnly,
    true,
    "page editor is read-only allowModifyPages"
  );
});

test("PagesEditor change question's page", () => {
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
  var creator = new CreatorTester();
  creator.text = jsonText;
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );

  expect(pagescreator.model.selectedPage(), creator.survey.pages[0]);

  var question = <Survey.Question>creator.survey.pages[0].elements[0];
  question.page = creator.survey.pages[1];
  creator.onPropertyValueChanged(
    <any>{ name: "page", isDefaultValue: () => false },
    question,
    creator.survey.pages[1]
  );
  expect(pagescreator.model.selectedPage(), creator.survey.pages[1]);
});

test("pagescreator.canAddPage", () => {
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.canAddPage,
    true,
    "page adding is allowed by default"
  );

  var handler = function (s, o) {
    if (o.obj.getType() === "page") {
      o.allowAdd = false;
    }
  };
  creator.onElementAllowOperations.add(handler);
  expect(pagescreator.model.canAddPage, false, "page adding is disabled");
  creator.onElementAllowOperations.remove(handler);
  expect(pagescreator.model.canAddPage, false, "page adding is enabled");
});

test("pagescreator.canCopyPage", () => {
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.canCopyPage,
    true,
    "page copying is allowed by default"
  );

  var handler = function (s, o) {
    if (o.obj.getType() === "page") {
      o.allowCopy = false;
    }
  };
  creator.onElementAllowOperations.add(handler);
  expect(
    pagescreator.model.canCopyPage,
    false,
    "page copying is disabled"
  );
  creator.onElementAllowOperations.remove(handler);
  expect(pagescreator.model.canCopyPage, false, "page copying is enabled");
});

test("pagescreator.canEditPage", () => {
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.canEditPage,
    true,
    "page editing is allowed by default"
  );

  var handler = function (s, o) {
    if (o.obj.getType() === "page") {
      o.allowEdit = false;
    }
  };
  creator.onElementAllowOperations.add(handler);
  expect(
    pagescreator.model.canEditPage,
    false,
    "page editing is disabled"
  );
  creator.onElementAllowOperations.remove(handler);
  expect(pagescreator.model.canEditPage, false, "page editing is enabled");
});

test("pagescreator.canDeletePage", () => {
  var creator = new CreatorTester();
  var pagesEditor = new PagesEditorViewModel(
    creator.pagesEditorModel,
    document.createElement("div")
  );
  expect(
    pagescreator.model.canDeletePage,
    false,
    "page deleting is disallowed by default"
  );

  pagescreator.model.addPage();

  expect(
    pagescreator.model.canDeletePage,
    true,
    "page deleting is allowed"
  );

  var handler = function (s, o) {
    if (o.obj.getType() === "page") {
      o.allowDelete = false;
    }
  };
  creator.onElementAllowOperations.add(handler);
  expect(
    pagescreator.model.canDeletePage,
    false,
    "page deleting is disabled"
  );
  creator.onElementAllowOperations.remove(handler);
  expect(
    pagescreator.model.canDeletePage,
    false,
    "page deleting is enabled"
  );
});
*/

/* TODO refactor
test("onModified options", function(assert) {
  var creator = new CreatorTester();
  var modifiedOptions = [];
  creator.onModified.add(function(survey, options) {
    modifiedOptions.push(options);
  });
  var survey = creator.survey;

  creator.clickToolboxItem({
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
  expect(modifiedOptions.length, 1, "One operation - add item");
  var opts = modifiedOptions.pop();
  expect(
    opts.type,
    "ADDED_FROM_TOOLBOX",
    "Operation type ADDED_FROM_TOOLBOX"
  );
  expect(
    opts.question.getType(),
    "checkbox",
    "New question of type checkbox"
  );
  var question: Survey.QuestionCheckbox = opts.question;

  creator.addPage();
  expect(modifiedOptions.length, 1, "One operation - add pege");
  var opts = modifiedOptions.pop();
  expect(opts.type, "PAGE_ADDED", "Operation type ADD_PAGE");
  expect(opts.oldValue, undefined, "No previous value");
  expect(opts.newValue.getType(), "page", "New page");
  var page = opts.newValue;

  creator.propertyGridObjectEditorModel.selectedObject = question;
  var titleEditor = creator.propertyGridObjectEditorModel.getPropertyEditorByName(
    "title"
  ).editor;
  titlecreator.koValue("Some text");
  expect(modifiedOptions.length, 1, "One operation - change property");
  var opts = modifiedOptions.pop();
  expect(
    opts.type,
    "PROPERTY_CHANGED",
    "Operation type PROPERTY_CHANGED"
  );
  expect(opts.target, question, "Object - question");
  expect(opts.name, "title", "Property name - title");
  expect(opts.oldValue, "question1", "No previous value");
  expect(opts.newValue, "Some text", "New value - Some text");

  creator.koSelectedObject({ value: page });
  creator.deleteObjectClick();
  expect(modifiedOptions.length, 1, "One operation - delete");
  var opts = modifiedOptions.pop();
  expect(opts.type, "OBJECT_DELETED", "Operation type OBJECT_DELETED");
  expect(opts.target, page, "Object - page");
});
*/
