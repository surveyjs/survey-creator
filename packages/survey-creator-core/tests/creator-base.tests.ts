import {
  Base,
  PanelModel,
  SurveyModel,
  Serializer,
  ListModel,
  QuestionRadiogroupModel,
  QuestionTextModel,
  QuestionImageModel,
  QuestionRatingModel,
  QuestionDropdownModel
} from "survey-core";
import { PageViewModel } from "../src/components/page";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer";
import { getElementWrapperComponentName, isStringEditable } from "../src/creator-base";
import { SurveyHelper } from "../src/surveyHelper";
import { CreatorTester } from "./creator-tester";

test("options.questionTypes", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.isElementSelected(creator.survey)).toBeTruthy();
  var question = creator.survey.getAllQuestions()[0];
  creator.selectElement(question);
  expect(creator.selectedElementName).toEqual("q1");
  expect(creator.isElementSelected(question)).toBeTruthy();
  expect(creator.isElementSelected(creator.survey)).toBeFalsy();
});
test("do not deactivate/activate tabs on selecting the active tab", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  expect(creator.activeTab).toEqual("designer");
  expect(creator.makeNewViewActive("test")).toBeTruthy();
  creator.activeTab = "test";
  expect(creator.makeNewViewActive("test")).toBeFalsy();
  creator.activeTab = "test";
});
test("Select new added question", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.activeTab).toEqual("designer");
  creator.survey.currentPage = creator.survey.currentPage;
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question2");
});
test("Update JSON before drag&drop", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.activeTab).toEqual("designer");
  creator.survey.currentPage = creator.survey.currentPage;
  var json: any = {
    type: "panel",
    elements: [{ type: "text", name: "question1" }]
  };
  json = creator.getJSONForNewElement(json);
  expect(json.name).toEqual("panel1");
  expect(json.type).toEqual("panel");
  expect(json.elements[0].name).toEqual("question2");
});
test("PageViewModel", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
  var pageModel = new PageViewModel(creator, creator.survey.currentPage);
  var counter = 0;
  pageModel.onPageSelectedCallback = (): any => {
    counter++;
  };
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeFalsy();
  expect(pageModel.isSelected).toBeFalsy();
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  expect(pageModel.isSelected).toBeFalsy();
  expect(counter).toEqual(0);
  creator.selectElement(creator.survey.currentPage);
  expect(pageModel.isSelected).toBeTruthy();
  expect(counter).toEqual(1);
  creator.selectElement(creator.survey);
  expect(pageModel.isSelected).toBeFalsy();
  expect(counter).toEqual(1);
  pageModel.dispose();
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
});

test("PagesController", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var counter = 0;
  creator.pagesController.onPagesChanged.add((sender, options) => {
    counter++;
  });
  creator.addPage();
  expect(counter).toEqual(1);
  creator.survey.removePage(creator.survey.pages[1]);
  expect(counter).toEqual(2);
  creator.JSON = {
    elements: [{ type: "text", name: "question2" }]
  };
  expect(counter).toEqual(3);
});
test("PageNavigatorViewModel", (): any => {
  var creator = new CreatorTester();
  var model = new PageNavigatorViewModel(creator.pagesController);
  expect(model.items).toHaveLength(1);
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  };
  expect(model.items).toHaveLength(2);
  expect(model.items[0].active).toBeTruthy();
  expect(model.items[1].active).toBeFalsy();
  creator.addPage();
  expect(model.items).toHaveLength(3);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeFalsy();
  expect(model.items[2].active).toBeTruthy();
  expect(model.items[0].title).toEqual("page1");
  creator.survey.pages[0].name = "page1-newName";
  expect(model.items[0].title).toEqual("page1-newName");
});

test("SelectionHistoryController: Go to next/prev", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1"
      },
      {
        type: "text",
        name: "question2"
      }
    ]
  };
  var controller = creator.selectionHistoryController;
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeFalsy();
  creator.selectElement(creator.survey.pages[0]);
  expect(controller.hasPrev).toBeTruthy();
  expect(controller.hasNext).toBeFalsy();
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  expect(controller.hasPrev).toBeTruthy();
  expect(controller.hasNext).toBeFalsy();
  creator.selectElement(creator.survey.pages[0]);
  expect(controller.hasPrev).toBeTruthy();
  expect(controller.hasNext).toBeFalsy();
  controller.prev();
  expect(creator.selectedElementName).toEqual("question1");
  expect(controller.hasPrev).toBeTruthy();
  expect(controller.hasNext).toBeTruthy();
  controller.next();
  expect(creator.selectedElementName).toEqual("page1");
  expect(controller.hasPrev).toBeTruthy();
  expect(controller.hasNext).toBeFalsy();
  controller.prev();
  controller.prev();
  expect(creator.selectedElementName).toEqual("survey");
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeTruthy();
});
test("SelectionHistoryController: Reset history on changing survey", (): any => {
  var json = {
    elements: [
      {
        type: "text",
        name: "question1"
      },
      {
        type: "text",
        name: "question2"
      }
    ]
  };
  var creator = new CreatorTester();
  creator.JSON = json;

  var controller = creator.selectionHistoryController;
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeFalsy();
  creator.selectElement(creator.survey.pages[0]);
  expect(controller.hasPrev).toBeTruthy();
  creator.JSON = json;
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeFalsy();
});
test("SelectionHistoryController: Update history on deleting elements", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
          },
          {
            type: "matrixdynamic",
            name: "question2",
            columns: [{ name: "col1" }, { name: "col2" }]
          },
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question3" }]
          }
        ]
      },
      {
        name: "page2"
      }
    ]
  };
  var controller = creator.selectionHistoryController;
  var page = creator.survey.pages[1];
  creator.selectElement(page);
  var question = creator.survey.getQuestionByName("question1");
  creator.selectElement(question);
  var panel = <PanelModel>creator.survey.getPanelByName("panel1");
  creator.selectElement(panel);
  var column = creator.survey.getQuestionByName("question2").columns[0];
  creator.selectElement(column);
  creator.selectElement(creator.survey);
  expect(controller.hasInHistory(page)).toBeTruthy();
  page.delete();
  expect(controller.hasInHistory(page)).toBeFalsy();
  expect(controller.hasInHistory(question)).toBeTruthy();
  question.delete();
  expect(controller.hasInHistory(question)).toBeFalsy();
  expect(controller.hasInHistory(panel)).toBeTruthy();
  panel.delete();
  expect(controller.hasInHistory(panel)).toBeFalsy();
  expect(controller.hasInHistory(column)).toBeTruthy();
  creator.survey.getQuestionByName("question2").columns.splice(0, 1);
  expect(controller.hasInHistory(column)).toBeFalsy();
});
test("Update expressions on deleting a question", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        visibleIf: "{question2} = 1"
      },
      {
        type: "text",
        name: "question2"
      }
    ]
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(creator.survey.getQuestionByName("question2"));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
test("Update expressions on deleting a panel with questions", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        visibleIf: "{question2} = 1"
      },
      {
        type: "panel",
        name: "panel1",
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(<Base>(<any>creator.survey.getPanelByName("panel1")));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
test("Update expressions on deleting a page with questions", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            visibleIf: "{question2} = 1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question2" }]
          }
        ]
      }
    ]
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(<Base>(<any>creator.survey.getPageByName("page2")));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
test("Create new page on creating designer plugin", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator = new CreatorTester();
  expect(creator.survey.pages).toHaveLength(1);
  designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  creator = new CreatorTester();
  creator.survey.pages[0].addNewQuestion("text", "question1");
  creator.survey.addNewPage("page2");
  expect(creator.survey.pages).toHaveLength(2);
  designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  creator.survey.pages[1].addNewQuestion("text", "question2");
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator.survey.pages[1].elements[0].delete();
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  creator.survey.pages[1].delete();
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator.survey.addNewPage("page3");
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();
});
test("Create new page with empty survey", (): any => {
  var creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeFalsy();
  creator.survey.pages[0].addNewQuestion("text", "question1");
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  designerPlugin.model.newPage.addNewQuestion("text", "question2");
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.survey.pages[0].elements).toHaveLength(1);
  expect(creator.survey.pages[1].elements).toHaveLength(1);
  expect(creator.survey.pages[1].elements[0].name).toEqual("question2");
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.newPage.elements).toHaveLength(0);
});
test("Create new page, set empty JSON", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {};
  expect(creator.viewType).toEqual("designer");
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeFalsy();
});
test("Create new page, recreate designer survey via JSON", (): any => {
  var creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  creator.showTestSurvey();
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  creator.JSON = {};
  creator.showDesigner();
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeFalsy();
});

test("canUndo/canRedo functions ", (): any => {
  var creator = new CreatorTester();
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

test("Check survey settings button ", (): any => {
  var creator = new CreatorTester();
  var item = creator.getActionBarItem("icon-settings");
  expect(item.active).toBeTruthy();
  creator.selectElement(creator.survey.pages[0]);
  expect(item.active).toBeFalsy();
  creator.selectElement(creator.survey);
  expect(item.active).toBeTruthy();
});
test("Check survey undo/redo buttons ", (): any => {
  var creator = new CreatorTester();
  var undoItem = creator.getActionBarItem("icon-undo");
  var redoItem = creator.getActionBarItem("icon-redo");
  expect(undoItem.active).toBeFalsy();
  expect(redoItem.active).toBeFalsy();
  creator.survey.title = "My title";
  expect(undoItem.active).toBeTruthy();
  expect(redoItem.active).toBeFalsy();
  creator.undo();
  expect(undoItem.active).toBeFalsy();
  expect(redoItem.active).toBeTruthy();
  creator.redo();
  expect(undoItem.active).toBeTruthy();
  expect(redoItem.active).toBeFalsy();
});
test("undo/redo add new page", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  designerPlugin.model.newPage["_addToSurvey"]();
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  creator.survey.pages[1].addNewQuestion("text", "question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  designerPlugin.model.newPage["_addToSurvey"]();
  expect(creator.survey.pageCount).toEqual(3);
  expect(creator.survey.pages[2].name).toEqual("page3");
  creator.survey.pages[2].addNewQuestion("text", "question3");
  expect(designerPlugin.model.newPage.name).toEqual("page4");
  creator.undo();
  creator.undo();
  creator.undo();
  creator.undo();
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
});
test("undo/redo add new page, via page model by adding new question", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  var pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  expect(creator.survey.pages[1].elements).toHaveLength(1);
  expect(creator.survey.pages[1].elements[0].name).toEqual("question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
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
  var creator = new CreatorTester();
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
  creator.survey.addNewPage("page2");
  creator.selectElement(creator.survey.pages[1]);
  expect(creator.selectedElementName).toEqual("page2");
  creator.undo();
  expect(creator.selectedElementName).toEqual("survey");
});

test("fast copy tests, copy a question and check the index", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" }
    ]
  };
  creator.fastCopyQuestion(creator.survey.getQuestionByName("question1"));
  expect(creator.survey.pages[0].questions).toHaveLength(4);
  expect(creator.survey.getQuestionByName("question4")).toBeTruthy();
  expect(creator.survey.getQuestionByName("question4").visibleIndex).toEqual(1);
});
test("Page duplicate action, copy a page and check the index", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          { type: "text", name: "question1" },
          { type: "text", name: "question2" },
          { type: "text", name: "question3" }
        ]
      },
      {
        elements: [{ type: "text", name: "question4" }]
      }
    ]
  };
  expect(creator.survey.pages).toHaveLength(2);
  var pageModel = new PageViewModel(creator, creator.survey.pages[0]);
  var action = creator.getActionBarItemByActions(
    pageModel.actions,
    "duplicate"
  );
  expect(action).toBeTruthy();
  action.action();
  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.selectedElementName).toEqual("page3");
  expect(creator.survey.pages[1].name).toEqual("page3");
  expect(creator.survey.pages[1].elements).toHaveLength(3);
  expect(creator.survey.pages[1].elements[0].name).toEqual("question5");
  expect(creator.survey.pages[1].elements[2].name).toEqual("question7");
});
test("Show error on entering non-unique column value", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          {
            type: "matrixdynamic",
            name: "question1",
            columns: [{ name: "col1" }, { name: "col2" }]
          }
        ]
      }
    ]
  };
  var matrixQuestion = creator.survey.getAllQuestions()[0];
  creator.selectElement(matrixQuestion.columns[1]);
  var questionName = creator.propertyGrid.survey.getQuestionByName("name");
  expect(questionName.value).toEqual("col2");
  questionName.value = "col1";
  expect(questionName.errors).toHaveLength(1);
  expect(questionName.errors[0].getText()).toEqual(
    "Please enter a unique name"
  );
  expect(matrixQuestion.columns[1].name).toEqual("col2");
  questionName.value = "col2";
  expect(questionName.errors).toHaveLength(0);
  questionName.value = "col3";
  expect(questionName.errors).toHaveLength(0);
  expect(matrixQuestion.columns[1].name).toEqual("col3");
});
test("Warn on incorrect using constructor", (): any => {
  var oldFunc = SurveyHelper.warnText;
  var warnings = [];
  SurveyHelper.warnText = (text: string): void => {
    warnings.push(text);
  };
  new CreatorTester(<any>"creator");
  expect(warnings).toHaveLength(1);
  expect(warnings[0].indexOf("constructor") > 0).toBeTruthy();
  var creator = new CreatorTester(
    <any>"creator",
    <any>{ showTranslationTab: true }
  );
  expect(warnings).toHaveLength(2);
  expect(warnings[1].indexOf("constructor") > 0).toBeTruthy();
  expect(creator.showTranslationTab).toBeTruthy();
  SurveyHelper.warnText = oldFunc;
});
test("pageEditMode='single'", (): any => {
  var creator = new CreatorTester();
  expect(creator.pageEditMode).toEqual("standard");
  expect(Serializer.findProperty("survey", "pages").isVisible("")).toBeTruthy();
  expect(
    Serializer.findProperty("question", "page").isVisible("")
  ).toBeTruthy();
  expect(Serializer.findProperty("panel", "page").isVisible("")).toBeTruthy();
  creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  expect(creator.pageEditMode).toEqual("single");
  expect(Serializer.findProperty("survey", "pages").isVisible("")).toBeFalsy();
  expect(Serializer.findProperty("question", "page").isVisible("")).toBeFalsy();
  expect(Serializer.findProperty("panel", "page").isVisible("")).toBeFalsy();
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.showNewPage).toBeFalsy();
  expect(designerPlugin.model.newPage).toBeFalsy();

  Serializer.findProperty("survey", "pages").visible = true;
  Serializer.findProperty("question", "page").visible = true;
  Serializer.findProperty("panel", "page").visible = true;
  expect(Serializer.findProperty("survey", "pages").isVisible("")).toBeTruthy();
  expect(
    Serializer.findProperty("question", "page").isVisible("")
  ).toBeTruthy();
  expect(Serializer.findProperty("panel", "page").isVisible("")).toBeTruthy();
});
test("Undo converting question type", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "question1", choices: [1, 2] }]
  };
  var q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("radiogroup");
  var el = creator.selectedElement;
  expect(el.getType()).toEqual("radiogroup");
  creator.undo();
  q = creator.survey.getQuestionByName("question1");
  expect(q.getType()).toEqual("checkbox");
});
test("Question type selector", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = <SurveyModel>creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);
  expect(creator.addNewQuestionText).toEqual("Add Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => {});
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.items.filter((item) => item.id == "rating")[0];
  listModel.selectItem(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add Rating");
  expect(survey.getAllQuestions().length).toEqual(1);
  expect(survey.getAllQuestions()[0].getType()).toEqual("rating");
  expect(creator.addNewQuestionInPage(() => {}));
  expect(survey.getAllQuestions().length).toEqual(2);
  expect(survey.getAllQuestions()[1].getType()).toEqual("rating");
});

test("Add question with default choices", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = <SurveyModel>creator.survey;
  creator.currentAddQuestionType = "radiogroup";
  creator.addNewQuestionInPage(() => {});
  const question = <QuestionRadiogroupModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("radiogroup");
  expect(question.visibleChoices.length).toEqual(6);
});
test("getElementWrapperComponentName", (): any => {
  expect(getElementWrapperComponentName(null, "logo-image", false)).toEqual(
    "svc-logo-image"
  );
  expect(getElementWrapperComponentName(null, "logo-image", true)).toEqual(
    "svc-logo-image"
  );
  expect(getElementWrapperComponentName(null, "cell", false)).toEqual(
    "svc-matrix-cell"
  );
  expect(getElementWrapperComponentName(null, "cell", true)).toEqual(
    "svc-matrix-cell"
  );
  expect(getElementWrapperComponentName(null, "column-header", false)).toEqual(
    "svc-matrix-cell"
  );
  expect(getElementWrapperComponentName(null, "column-header", true)).toEqual(
    "svc-matrix-cell"
  );
  expect(getElementWrapperComponentName(null, "row-header", false)).toEqual(
    "svc-matrix-cell"
  );
  expect(getElementWrapperComponentName(null, "row-header", true)).toEqual(
    "svc-matrix-cell"
  );
  expect(
    getElementWrapperComponentName({ parentQuestionValue: {} }, "", false)
  ).toEqual(undefined);
  expect(
    getElementWrapperComponentName({ parentQuestionValue: {} }, "", true)
  ).toEqual(undefined);
  expect(
    getElementWrapperComponentName(new QuestionTextModel(""), "", false)
  ).toEqual("svc-question");
  expect(
    getElementWrapperComponentName(new QuestionTextModel(""), "", true)
  ).toEqual("svc-cell-question");
  expect(
    getElementWrapperComponentName(new QuestionImageModel(""), "", false)
  ).toEqual("svc-image-question");
  expect(
    getElementWrapperComponentName(new QuestionImageModel(""), "", true)
  ).toEqual("svc-image-question");
  expect(
    getElementWrapperComponentName(new QuestionRatingModel(""), "", false)
  ).toEqual("svc-rating-question");
  expect(
    getElementWrapperComponentName(new QuestionRatingModel(""), "", true)
  ).toEqual("svc-rating-question");
  expect(
    getElementWrapperComponentName(new QuestionDropdownModel(""), "", false)
  ).toEqual("svc-dropdown-question");
  expect(
    getElementWrapperComponentName(new QuestionDropdownModel(""), "", true)
  ).toEqual("svc-cell-dropdown-question");
  expect(
    getElementWrapperComponentName({ isContentElement: true }, "", false)
  ).toEqual(undefined);
});
test("isStringEditable", (): any => {
  expect(
    isStringEditable({ isContentElement: true }, "")
  ).toBeFalsy();
  expect(
    isStringEditable({ parentQuestionValue: {} }, "")
  ).toBeFalsy();
  expect(
    isStringEditable({}, "")
  ).toBeTruthy();
  expect(
    isStringEditable({ isEditableTemplateElement: true }, "")
  ).toBeTruthy();
  expect(
    isStringEditable({ isContentElement: true, isEditableTemplateElement: true }, "")
  ).toBeTruthy();
});
