import {
  settings as surveySettings, Serializer
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

test("Undo a pop of null from a live array property", (): any => {
  Serializer.addProperty("question", { name: "tags:multiplevalues", choices: ["a", "b"] });
  try {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q1" }] };
    const question = creator.survey.getQuestionByName("q1");
    const tags = question.tags;
    expect(Object.prototype.hasOwnProperty.call(tags, "pop"), "#1: a live array").toBeTruthy();
    tags.push(null);
    tags.pop();
    expect(question.tags.slice(), "#2").toEqual([]);
    expect(() => creator.undo(), "#3: undo").not.toThrow();
    expect(question.tags.slice(), "#4: after undo").toEqual([null]);
    expect(() => creator.redo(), "#5: redo").not.toThrow();
    expect(question.tags.slice(), "#6: after redo").toEqual([]);
  } finally {
    Serializer.removeProperty("question", "tags");
  }
});

describe("undo-redo: an element undo re-created (nested data, survey-library #12233)", () => {
  const nestingModes = ["auto", "page", "panelAndPage"];
  function containerJson(mode: string, elements: Array<any>): any {
    // "auto" nests a panel with valueName; "page" and "panelAndPage" nest the page itself
    const inner = mode === "auto" ? [{ type: "panel", name: "outer", valueName: "address", elements: elements }] : elements;
    return { dataNesting: mode, elements: inner.concat([{ type: "text", name: "other" }]) };
  }
  function findIn(container: any, name: string): any {
    return container.elements.filter((el: any) => el.name === name)[0];
  }
  function getContainer(creator: CreatorTester, mode: string): any {
    return mode === "auto" ? creator.survey.getPanelByName("outer") : creator.survey.pages[0];
  }
  // A pin, not a reproduction: pages are found by their bare name in every mode
  test("the #4721 sequence, ported: undo restores a question removed from the last page", (): any => {
    for (const mode of nestingModes) {
      const creator = new CreatorTester();
      creator.JSON = { dataNesting: mode, pages: [
        { name: "page1", elements: [{ type: "text", name: "question1" }] },
        { name: "page2", elements: [{ type: "panel", name: "outer", valueName: "address", elements: [{ type: "text", name: "question2" }] }] }
      ] };
      const json = creator.JSON;
      creator.deleteElement(creator.survey.pages[1].elements[0]);
      expect(creator.survey.pages, mode + " #1").toHaveLength(1);
      creator.undo();
      expect(creator.JSON, mode + " #2: undo").toEqual(json);
      creator.redo();
      expect(creator.survey.pages, mode + " #3: redo").toHaveLength(1);
      creator.undo();
      expect(creator.JSON, mode + " #4: undo again").toEqual(json);
    }
  });
  test("a question disposed by question.delete(): undo restores its change on the re-created question", (): any => {
    for (const mode of ["none"].concat(nestingModes)) {
      const creator = new CreatorTester();
      creator.JSON = containerJson(mode, [{ type: "checkbox", name: "q", choices: ["a", "b", "c"] }]);
      const json = creator.JSON;
      findIn(getContainer(creator, mode), "q").choices.splice(0, 1);
      const jsonChanged = creator.JSON;
      findIn(getContainer(creator, mode), "q").delete();
      expect(findIn(getContainer(creator, mode), "q"), mode + " #1: deleted").toBeFalsy();
      for (let round = 1; round <= 2; round++) {
        creator.undo();
        const q = findIn(getContainer(creator, mode), "q");
        expect(q.isDisposed, mode + " #2." + round + ": a new instance in its container").toBeFalsy();
        expect(q.choices.map(c => c.value), mode + " #3." + round).toEqual(["b", "c"]);
        creator.undo();
        expect(creator.JSON, mode + " #4." + round + ": undo restores the choices").toEqual(json);
        expect(findIn(getContainer(creator, mode), "q"), mode + " #5." + round + ": the same instance").toBe(q);
        creator.redo();
        expect(creator.JSON, mode + " #6." + round + ": redo").toEqual(jsonChanged);
        creator.redo();
        expect(findIn(getContainer(creator, mode), "q"), mode + " #7." + round + ": redo deletes").toBeFalsy();
      }
    }
  });
  test("a re-created question disposed again: undo follows each re-created instance", (): any => {
    for (const mode of ["none"].concat(nestingModes)) {
      const creator = new CreatorTester();
      creator.JSON = containerJson(mode, [{ type: "checkbox", name: "q", choices: ["a", "b", "c"] }]);
      const json = creator.JSON;
      findIn(getContainer(creator, mode), "q").choices.splice(0, 1);
      findIn(getContainer(creator, mode), "q").delete();
      creator.undo();
      const first = findIn(getContainer(creator, mode), "q");
      first.delete();
      creator.undo();
      const second = findIn(getContainer(creator, mode), "q");
      expect(second, mode + " #1: a second new instance").not.toBe(first);
      creator.undo();
      expect(creator.JSON, mode + " #2: undo restores the choices").toEqual(json);
      expect(findIn(getContainer(creator, mode), "q"), mode + " #3").toBe(second);
      creator.redo();
      expect(second.choices.map(c => c.value), mode + " #4: redo").toEqual(["b", "c"]);
      creator.undo();
      expect(creator.JSON, mode + " #5: undo again").toEqual(json);
    }
  });
  test("a top-level panel and an inner panel with one name: undo changes the re-created inner one", (): any => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [
      { type: "panel", name: "panel1", elements: [{ type: "text", name: "a" }] },
      { type: "panel", name: "outer", valueName: "address", elements: [{ type: "panel", name: "panel1", elements: [{ type: "text", name: "b" }] }] }
    ] };
    const json = creator.JSON;
    const outer = creator.survey.getPanelByName("outer");
    const topPanel = creator.survey.getPanelByName("panel1");
    const innerPanel = creator.survey.getPanelByName("outer.panel1");
    expect(innerPanel, "#1").not.toBe(topPanel);
    creator.deleteElement(innerPanel.elements[0]);
    innerPanel.delete();
    expect(outer.elements, "#2").toHaveLength(0);
    creator.undo();
    const recreated = creator.survey.getPanelByName("outer.panel1");
    expect(recreated, "#3: re-created").toBeTruthy();
    expect(recreated, "#4: a new instance").not.toBe(innerPanel);
    creator.undo();
    expect(topPanel.elements.map(el => el.name), "#5: the top-level panel is not changed").toEqual(["a"]);
    expect(recreated.elements.map(el => el.name), "#6: the inner panel gets its question back").toEqual(["b"]);
    expect(creator.JSON, "#7").toEqual(json);
    creator.redo();
    creator.redo();
    expect(outer.elements, "#8: redo").toHaveLength(0);
    creator.undo();
    creator.undo();
    expect(creator.JSON, "#9: undo again").toEqual(json);
    expect(topPanel.elements.map(el => el.name), "#10").toEqual(["a"]);
  });
});
