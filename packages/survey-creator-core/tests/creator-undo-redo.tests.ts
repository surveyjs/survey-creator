import {
  settings as surveySettings
} from "survey-core";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { CreatorTester } from "./creator-tester";
import { UndoRedoAction } from "../src/plugins/undo-redo/undo-redo-manager";
import { PageAdorner } from "../src/components/page";

test("canUndo/canRedo functions ", (): any => {
  const creator = new CreatorTester();
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();
  creator.survey.title = "My title";
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();
  creator.undo();
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeTruthy();
  creator.redo();
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();
});

test("undo/redo actions enabled", (): any => {
  const creator = new CreatorTester();
  const undoAction = creator.toolbar.getActionById("action-undo");
  const redoAction = creator.toolbar.getActionById("action-redo");
  expect(undoAction.enabled).toBeFalsy();
  expect(redoAction.enabled).toBeFalsy();
  creator.survey.title = "My title";
  expect(undoAction.enabled).toBeTruthy();
  expect(redoAction.enabled).toBeFalsy();
  creator.undo();
  expect(undoAction.enabled).toBeFalsy();
  expect(redoAction.enabled).toBeTruthy();
  creator.redo();
  expect(undoAction.enabled).toBeTruthy();
  expect(redoAction.enabled).toBeFalsy();
});

test("Undo/redo question removed from last page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      }
    ]
  };
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();

  let lastActions: UndoRedoAction[] = [];
  const prevCallback = creator.undoRedoManager.changesFinishedCallback;
  creator.undoRedoManager.changesFinishedCallback = (actions: UndoRedoAction[], isUndo: boolean) => {
    lastActions = actions;
    prevCallback(actions, isUndo);
  };

  creator.deleteElement(creator.survey.getQuestionByName("question2"));
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  expect(creator.undoRedoManager.canRedo()).toBeFalsy();

  expect(lastActions.length).toBe(2);
  expect(lastActions[0].getChanges().propertyName).toBe("elements");
  expect(lastActions[1].getChanges().propertyName).toBe("pages");

  creator.undo();
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(creator.undoRedoManager.canRedo()).toBeTruthy();

  creator.undoRedoManager.changesFinishedCallback = prevCallback;
});
test("undo/redo add new page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  let newPageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  newPageModel.isGhost = true;
  newPageModel.addNewQuestion(newPageModel, null);
  newPageModel.isGhost = false;
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  newPageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  newPageModel.isGhost = true;
  newPageModel.addNewQuestion(newPageModel, null);
  newPageModel.isGhost = false;
  expect(creator.survey.pageCount).toEqual(3);
  expect(creator.survey.pages[2].name).toEqual("page3");
  expect(designerPlugin.model.newPage.name).toEqual("page4");
  creator.undo();
  creator.undo();
  creator.undo();
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  expect(designerPlugin.model.pagesController.pages).toHaveLength(1);
});
test("undo/redo add new page, via page model by adding new question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  let pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  expect(creator.survey.pages[1].elements).toHaveLength(1);
  expect(creator.survey.pages[1].elements[0].name).toEqual("question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pageCount).toEqual(3);
  expect(creator.survey.pages[2].name).toEqual("page3");
  expect(creator.survey.pages[2].elements).toHaveLength(1);
  expect(creator.survey.pages[2].elements[0].name).toEqual("question3");
  expect(designerPlugin.model.newPage.name).toEqual("page4");
  creator.undo();
  creator.undo();
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
});
test("undo/redo make sure that the deleting element is not active", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" }
    ]
  };
  creator.clickToolboxItem({ type: "text", name: "question3" });
  expect(creator.selectedElementName).toEqual("question3");
  creator.undo();
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.survey.pages).toHaveLength(1);
  creator.survey.addNewPage("page2");
  creator.selectElement(creator.survey.pages[1]);
  expect(creator.selectedElementName).toEqual("page2");
  expect(creator.survey.pages).toHaveLength(2);
  creator.undo();
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.selectedElementName).toEqual("survey");
});

test("undo/redo with events", (): any => {
  const creator = new CreatorTester();

  creator.onModified.add(function (sender, options) {
    // We use the question's name to display in the UI dropdown lists so keep it up to date
    if (options.type === "PROPERTY_CHANGED" && options.name === "title") {
      options.target.description = options.newValue;
    }
  });

  creator.clickToolboxItem({ type: "text", name: "question1" });
  expect(creator.selectedElementName).toEqual("question1");
  expect(creator.survey.getAllQuestions()[0].title).toEqual("question1");
  creator.survey.getAllQuestions()[0].title = "nt";
  expect(creator.survey.getAllQuestions()[0].title).toEqual("nt");
  expect(creator.survey.getAllQuestions()[0].description).toEqual("nt");
  creator.undo();
  expect(creator.survey.getAllQuestions()[0].title).toEqual("question1");
  expect(creator.survey.getAllQuestions()[0].description).toEqual("");
});
test("Undo converting question type", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "question1", choices: [1, 2] }]
  };
  let q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("radiogroup");
  const el = creator.selectedElement;
  expect(el.getType()).toEqual("radiogroup");
  creator.undo();
  q = creator.survey.getQuestionByName("question1");
  expect(q.getType()).toEqual("checkbox");
});
test("Merge Undo for string and text property editors", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const q = creator.survey.getQuestionByName("question1");
  q.title = "Title 1";
  q.isRequired = true;
  q.title = "Title 11";
  q.title = "Title 111";
  q.title = "Title 1111";
  creator.undo();
  expect(q.title).toEqual("Title 1");
  q.title = "Title 11";
  q.title = "Title 1";
  creator.undo();
  expect(q.title).toEqual("Title 11");
  creator.undo();
  expect(q.title).toEqual("Title 1");
  q.visible = false;
  q.visible = true;
  q.visible = false;
  creator.undo();
  expect(q.visible).toBeTruthy();
  creator.undo();
  expect(q.visible).toBeFalsy();
  creator.undo();
  expect(q.visible).toBeTruthy();
  q.name = "q1";
  q.name = "q22";
  creator.undo();
  expect(q.name).toEqual("q1");
  creator.undo();
  expect(q.name).toEqual("question1");
});
test("Undo/redo survey properties", (): any => {
  const creator = new CreatorTester();
  creator.survey.title = "My title";
  creator.survey.description = "My Description";
  creator.undo();
  creator.undo();
  expect(creator.survey.title).toBeFalsy();
  expect(creator.survey.description).toBeFalsy();
  creator.redo();
  expect(creator.survey.title).toEqual("My title");
  expect(creator.survey.description).toBeFalsy();
  creator.redo();
  expect(creator.survey.title).toEqual("My title");
  expect(creator.survey.description).toEqual("My Description");
});
test("Undo/redo question adding/removing", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1", title: "Page 1" }] };
  creator.survey.pages[0].addNewQuestion("text", "q1");
  creator.survey.pages[0].addNewQuestion("text", "q2");
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  creator.undo();
  creator.undo();
  expect(creator.survey.getAllQuestions()).toHaveLength(0);
  creator.redo();
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  creator.redo();
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.getAllQuestions()[0].name).toEqual("q1");
  expect(creator.survey.getAllQuestions()[1].name).toEqual("q2");
});
test("undo/redo DnD ", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "startWithNewLine": false,
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      }
    ]
  };

  const q1 = creator.survey.pages[0].elements[0];
  const q2 = creator.survey.pages[0].elements[1];
  creator.dragDropSurveyElements.onDragStart.fire({ dropTarget: q2, draggedElement: q1 }, null);

  creator.survey.pages[0].removeElement(q1);
  creator.survey.pages[0].addElement(q1);
  q2.startWithNewLine = true;
  q1.startWithNewLine = false;

  expect(creator.survey.pages[0].rows.length).toEqual(1);
  creator.dragDropSurveyElements.onDragEnd.fire({ dropTarget: q2 }, { draggedElement: q1 });
  expect(creator.survey.pages[0].rows.length).toEqual(1);
  expect(creator.survey.pages[0].elements.map(e => e.name)).toEqual(["question2", "question1"]);
  creator.undoRedoManager.undo();
  expect(creator.survey.pages[0].elements.map(e => e.name)).toEqual(["question1", "question2"]);
  expect(creator.survey.pages[0].rows.length).toEqual(1);
});
test("undo/redo DnD stops transaction onDragClear", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "startWithNewLine": false,
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      }
    ]
  };

  const q1 = creator.survey.pages[0].elements[0];
  const q2 = creator.survey.pages[0].elements[1];
  creator.dragDropSurveyElements.onDragStart.fire({ dropTarget: q2, draggedElement: q1 }, {});

  expect(creator.undoRedoManager["transactionCounter"]).toEqual(1);
  expect(creator.undoRedoManager["_preparingTransaction"]).toBeDefined();

  creator.dragDropSurveyElements.onDragClear.fire({ dropTarget: q2, draggedElement: q1 }, {});

  expect(creator.undoRedoManager["transactionCounter"]).toEqual(0);
  expect(creator.undoRedoManager["_preparingTransaction"]).toBe(null);
});
test("Undo restore deleted page and question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  const survey = creator.survey;
  expect(survey.pages).toHaveLength(1);
  const pageAdorner = new PageAdorner(creator, designerPlugin.model.newPage);
  pageAdorner.isGhost = true;
  pageAdorner.addNewQuestion(pageAdorner, undefined, "text");
  expect(survey.pages).toHaveLength(2);
  expect(survey.pages[1].questions).toHaveLength(1);
  expect(survey.pages[1].questions[0].name).toBe("question2");
  creator.selectElement(survey.getQuestionByName("question2"));
  expect(creator.selectedElementName).toBe("question2");
  creator.deleteCurrentElement();
  expect(survey.pages).toHaveLength(1);
  creator.undo();
  expect(survey.pages).toHaveLength(2);
  expect(survey.pages[1].questions).toHaveLength(1);
  expect(survey.pages[1].questions[0].name).toBe("question2");
});
test("Undo on removing questions in deleted two pages", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  const survey = creator.survey;
  expect(survey.pages).toHaveLength(1);
  creator.clickToolboxItem({ type: "text" });
  const pageAdorner = new PageAdorner(creator, designerPlugin.model.newPage);
  pageAdorner.isGhost = true;
  pageAdorner.addNewQuestion(pageAdorner, undefined, "text");
  expect(survey.pages).toHaveLength(2);
  creator.selectElement(survey.getQuestionByName("question2"));
  expect(creator.selectedElementName).toBe("question2");
  creator.deleteCurrentElement();
  expect(survey.pages).toHaveLength(1);
  creator.selectElement(survey.getQuestionByName("question1"));
  expect(creator.selectedElementName).toBe("question1");
  creator.deleteCurrentElement();
  expect(survey.pages).toHaveLength(0);
  creator.undo();
  expect(survey.pages).toHaveLength(1);
  expect(survey.pages[0].questions).toHaveLength(1);
  expect(survey.pages[0].questions[0].name).toBe("question1");
  creator.undo();
  expect(survey.pages).toHaveLength(2);
  expect(survey.pages[1].questions).toHaveLength(1);
  expect(survey.pages[1].questions[0].name).toBe("question2");
});
test("Undo changing property on deleting question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1", title: "Question 1" }
    ]
  };
  let question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  question.title = "";
  creator.deleteCurrentElement();
  creator.undo();
  creator.undo();
  question = creator.survey.getQuestionByName("q1");
  expect(question.title).toBe("Question 1");
});
test("undo/redo with events", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ name: "q1", type: "dropdown" }]
  };
  const mOptions: Array<any> = [];
  creator.onModified.add(function (sender, options) {
    mOptions.push({ type: options.type, className: options.className, oldType: options.oldValue.getType(), newType: options.newValue.getType() });
  });

  creator.selectQuestionByName("q1");
  creator.convertCurrentQuestion("checkbox");
  expect(mOptions).toHaveLength(1);
  creator.undo();
  expect(mOptions).toHaveLength(2);
  expect(mOptions).toStrictEqual([
    { type: "QUESTION_CONVERTED", className: "checkbox", oldType: "dropdown", newType: "checkbox" },
    { type: "QUESTION_CONVERTED", className: "dropdown", oldType: "checkbox", newType: "dropdown" }
  ]);
});
test("Clear undo/redo transactions on settings creator.JSON, bug#6208", (): any => {
  const creator = new CreatorTester();
  const undoAction = creator.toolbar.getActionById("action-undo");
  creator.survey.title = "My title";
  creator.addNewQuestionInPage(() => { });
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  expect(undoAction).toBeTruthy();
  expect(undoAction.enabled).toBeTruthy();
  creator.JSON = {};
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(undoAction.enabled).toBeFalsy();
});