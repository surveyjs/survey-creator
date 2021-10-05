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
  QuestionDropdownModel,
  ItemValue
} from "survey-core";
import { PageViewModel } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer";
import { TabTestPlugin } from "../src/components/tabs/test";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TabLogicPlugin } from "../src/components/tabs/logic-plugin";
import { TabEmbedPlugin } from "../src/components/tabs/embed";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabJsonEditorAcePlugin } from "../src/components/tabs/json-editor-ace";
import { PropertyGridViewModel } from "../src/property-grid/property-grid-view-model";

import {
  getElementWrapperComponentName,
  ICreatorPlugin,
  isStringEditable
} from "../src/creator-base";
import { SurveyHelper } from "../src/survey-helper";
import { CreatorTester } from "./creator-tester";
import { editorLocalization } from "../src/editorLocalization";
import { EmptySurveyCreatorOptions, settings } from "../src/settings";
import { FastEntryEditor } from "../src/property-grid/fast-entry";

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
  // eslint-disable-next-line no-self-assign
  creator.survey.currentPage = creator.survey.currentPage;
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question2");
});
test("Click on toolbox on empty survey", (): any => {
  var creator = new CreatorTester();
  creator.survey.pages.splice(0, 1);
  expect(creator.survey.pages).toHaveLength(0);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0].elements).toHaveLength(1);
  expect(creator.selectedElementName).toEqual("question1");
  expect(creator.selectedElement.getType()).toEqual("text");
});
test("Click on toolbox and cancel survey.lazyRendering", (): any => {
  var creator = new CreatorTester();
  expect(creator.survey.isLazyRendering).toEqual(true);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.isLazyRendering).toEqual(false);
});
test("Click on toolbox and insert into correct index", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" }
    ]
  };
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question3");
  expect(creator.survey.currentPage.elements[1].name).toEqual("question3");
});
test("Update JSON before drag&drop", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.activeTab).toEqual("designer");
  // eslint-disable-next-line no-self-assign
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
test("Create new page on changing title/description in ghost", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  let pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  designerPlugin.model.newPage.title = "Some title";
  expect(pageModel.isGhost).toBeFalsy();
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  pageModel = new PageViewModel(creator, creator.survey.pages[1]);
  pageModel.page.description = "Some text";
  expect(creator.survey.pages).toHaveLength(2);

  creator.survey.pages[1].addNewQuestion("text", "q2");
  pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
  designerPlugin.model.newPage.description = "Some description";
  expect(pageModel.isGhost).toBeFalsy();
  expect(creator.survey.pages).toHaveLength(3);
  expect(designerPlugin.model.showNewPage).toBeFalsy();
  expect(designerPlugin.model.newPage).toBeFalsy();
});
test("Create new page on changing title/description in ghost PageViewModel resets isGhost", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();

  let currentNewPage = designerPlugin.model.newPage;
  const pageWrapperViewModel = new PageViewModel(creator, currentNewPage);
  expect(pageWrapperViewModel.isGhost).toBeTruthy();

  designerPlugin.model.newPage.title = "Some title";
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeFalsy();

  pageWrapperViewModel.addNewQuestion(null, undefined);
  expect(designerPlugin.model.newPage).toBeTruthy();
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
  var item = creator.getActionBarItem("svd-settings");
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
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  let newPageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  expect(newPageModel.isGhost).toBeTruthy();
  newPageModel.addGhostPage();
  expect(newPageModel.isGhost).toBeFalsy();
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  creator.survey.pages[1].addNewQuestion("text", "question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  newPageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  expect(newPageModel.isGhost).toBeTruthy();
  newPageModel.addGhostPage();
  expect(newPageModel.isGhost).toBeFalsy();
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
    pageModel.actionContainer.actions,
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
test("Page duplicate and add new page, check name", (): any => {
  var creator = new CreatorTester();
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
  expect(creator.survey.pages).toHaveLength(2);
  var pageModel = new PageViewModel(creator, creator.survey.pages[0]);
  var action = creator.getActionBarItemByActions(
    pageModel.actionContainer.actions,
    "duplicate"
  );
  action.action();

  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  let pageModelNew = new PageViewModel(creator, designerPlugin.model.newPage);
  pageModelNew.addNewQuestion(pageModelNew, null);
  expect(creator.survey.pages[3].name).toEqual("page4");

});
test("Page duplicate and check actions visibility", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
    ]
  };
  var pageModel = new PageViewModel(creator, creator.survey.pages[0]);
  var action = creator.getActionBarItemByActions(
    pageModel.actionContainer.actions,
    "duplicate"
  );
  expect(action.visible).toEqual(true);
  action.action();

  let pageModelNew = new PageViewModel(creator, creator.survey.pages[1]);
  var actionDuplicate = creator.getActionBarItemByActions(
    pageModelNew.actionContainer.actions,
    "duplicate"
  );

  expect(actionDuplicate.visible).toEqual(true);

});
test("Check action container for new added page", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  var pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pages).toHaveLength(2);
  expect(pageModel.actionContainer.actions).toHaveLength(2);
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
  var questionName = creator.getTabPropertyGrid("designer").survey.getQuestionByName("name");
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
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.items.filter((item) => item.id == "rating")[0];
  listModel.selectItem(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add Rating");
  expect(survey.getAllQuestions().length).toEqual(1);
  expect(survey.getAllQuestions()[0].getType()).toEqual("rating");
  expect(creator.addNewQuestionInPage(() => { }));
  expect(survey.getAllQuestions().length).toEqual(2);
  expect(survey.getAllQuestions()[1].getType()).toEqual("rating");
});

test("Question type selector localization", (): any => {
  const locStrings = editorLocalization.getLocale("");
  const oldAddNewQuestion = locStrings.ed.addNewQuestion;
  const oldAddNewTypeQuestion = locStrings.ed.addNewTypeQuestion;
  locStrings.ed.addNewQuestion = "Add New Question";
  locStrings.ed.addNewTypeQuestion = "Add New {0}";
  const creator = new CreatorTester();
  const survey: SurveyModel = <SurveyModel>creator.survey;
  expect(creator.addNewQuestionText).toEqual("Add New Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.items.filter((item) => item.id == "rating")[0];
  listModel.selectItem(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add New Rating");
  locStrings.ed.addNewQuestion = oldAddNewQuestion;
  locStrings.ed.addNewTypeQuestion = oldAddNewTypeQuestion;
});

test("Add question with default choices", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = <SurveyModel>creator.survey;
  creator.currentAddQuestionType = "radiogroup";
  creator.addNewQuestionInPage(() => { });
  const question = <QuestionRadiogroupModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("radiogroup");
  expect(question.visibleChoices.length).toEqual(6);
});
test("getElementWrapperComponentName", (): any => {
  expect(getElementWrapperComponentName(null, "logo-image", false)).toEqual("svc-logo-image");
  expect(getElementWrapperComponentName(null, "logo-image", true)).toEqual("svc-logo-image");
  expect(getElementWrapperComponentName(null, "cell", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(null, "cell", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(null, "column-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(null, "column-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(null, "row-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(null, "row-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName({ parentQuestionValue: {} }, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName({ parentQuestionValue: {} }, "", true)).toEqual(undefined);
  expect(getElementWrapperComponentName(new QuestionTextModel(""), "", false)).toEqual("svc-question");
  expect(getElementWrapperComponentName(new QuestionTextModel(""), "", true)).toEqual("svc-cell-question");
  expect(getElementWrapperComponentName(new QuestionImageModel(""), "", false)).toEqual("svc-image-question");
  expect(getElementWrapperComponentName(new QuestionImageModel(""), "", true)).toEqual("svc-cell-question");
  expect(getElementWrapperComponentName(new QuestionRatingModel(""), "", false)).toEqual("svc-rating-question");
  expect(getElementWrapperComponentName(new QuestionRatingModel(""), "", true)).toEqual("svc-cell-question");
  expect(getElementWrapperComponentName(new QuestionDropdownModel(""), "", false)).toEqual("svc-dropdown-question");
  expect(getElementWrapperComponentName(new QuestionDropdownModel(""), "", true)).toEqual("svc-cell-dropdown-question");
  expect(getElementWrapperComponentName({ isContentElement: true }, "", false)).toEqual(undefined);
});
test("isStringEditable", (): any => {
  expect(isStringEditable({ isContentElement: true }, "")).toBeFalsy();
  expect(isStringEditable({ parentQuestionValue: {} }, "")).toBeFalsy();
  expect(isStringEditable({}, "")).toBeTruthy();
  expect(
    isStringEditable({ isEditableTemplateElement: true }, "")
  ).toBeTruthy();
  expect(
    isStringEditable(
      { isContentElement: true, isEditableTemplateElement: true },
      ""
    )
  ).toBeTruthy();
});
test("Test plug-ins in creator", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
    showEmbeddedSurveyTab: true
  });
  expect(creator.viewType).toEqual("designer");
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  var testPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(testPlugin.model).toBeFalsy();
  creator.makeNewViewActive("test");
  expect(designerPlugin.model).toBeFalsy();
  expect(testPlugin.model).toBeTruthy();
  var logicPlugin = <TabLogicPlugin>creator.getPlugin("logic");
  var translationPlugin = <TabTranslationPlugin>(
    creator.getPlugin("translation")
  );
  var embedPlugin = <TabEmbedPlugin>creator.getPlugin("embed");
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeFalsy();
  expect(embedPlugin.model).toBeFalsy();

  creator.makeNewViewActive("logic");
  expect(testPlugin.model).toBeFalsy();
  expect(logicPlugin.model).toBeTruthy();
  creator.makeNewViewActive("translation");
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeTruthy();
  creator.makeNewViewActive("embed");
  expect(translationPlugin.model).toBeFalsy();
  expect(embedPlugin.model).toBeTruthy();
  creator.makeNewViewActive("designer");
  expect(embedPlugin.model).toBeFalsy();
  expect(designerPlugin.model).toBeTruthy();
});
test("Test plug-ins JSON-Text in creator", (): any => {
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  var textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
  expect(textPlugin.model).toBeFalsy();
  creator.makeNewViewActive("editor");
  expect(textPlugin.model).toBeTruthy();
  expect(designerPlugin.model).toBeFalsy();
  creator.makeNewViewActive("designer");
  expect(designerPlugin.model).toBeTruthy();
  expect(textPlugin.model).toBeFalsy();
});
test("Test plug-ins JSON-Text in creator, autosave", (): any => {
  const creator = new CreatorTester();
  const json = {
    pages: [
      {
        elements: [{ type: "text", name: "q1" }]
      }
    ]
  };
  creator.JSON = json;
  creator.isAutoSave = true;
  let counter = 0;
  let changedType;
  creator.onModified.add((sender, options) => {
    counter++;
    changedType = options.type;
  });
  expect(creator.viewType).toEqual("designer");
  var textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
  expect(textPlugin.model).toBeFalsy();
  creator.makeNewViewActive("editor");
  expect(textPlugin.model).toBeTruthy();
  creator.makeNewViewActive("designer");
  expect(counter).toEqual(0);
  creator.makeNewViewActive("editor");
  json.pages[0].elements[0].name = "question1";
  textPlugin.model.text = JSON.stringify(json);
  textPlugin.model.isJSONChanged = true;
  creator.makeNewViewActive("designer");
  expect(creator.survey.getAllQuestions()[0].name).toEqual("question1");
  expect(counter).toEqual(1);
  expect(changedType).toEqual("JSON_EDITOR");
});

test("Test plug-ins JSON-Ace in creator", (): any => {
  var oldFunc = TabJsonEditorAcePlugin.hasAceEditor;
  TabJsonEditorAcePlugin.hasAceEditor = (): boolean => {
    return true;
  };
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  var textPlugin = <TabJsonEditorAcePlugin>creator.getPlugin("editor");
  expect(textPlugin.model).toBeFalsy();
  creator.makeNewViewActive("editor");
  expect(textPlugin.model).toBeTruthy();
  expect(designerPlugin.model).toBeFalsy();
  creator.makeNewViewActive("designer");
  expect(designerPlugin.model).toBeTruthy();
  expect(textPlugin.model).toBeFalsy();
  TabJsonEditorAcePlugin.hasAceEditor = oldFunc;
});
test("Test plug-ins check order change viewtype and activate/deactivate", (): any => {
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");

  let result = "";
  creator.addPlugin("one", <ICreatorPlugin>{
    activate: () => {
      expect(creator.viewType).toBe("designer");
      result += "one-activate";
    },
    deactivate: () => {
      expect(creator.viewType).toBe("one");
      result += "+one-deactivate";
      return true;
    }
  });

  creator.addPlugin("two", <ICreatorPlugin>{
    activate: () => {
      result += "+two-activate";
      expect(creator.viewType).toBe("one");
    },
    deactivate: () => {
      result += "+two-deactivate";
      return true;
    }
  });

  creator.makeNewViewActive("one");
  expect(result).toBe("one-activate");

  creator.makeNewViewActive("two");
  expect(result).toBe("one-activate+one-deactivate+two-activate");

});
test("Show/hide property grid", (): any => {
  const prevValue = settings.propertyGrid.allowCollapse;
  settings.propertyGrid.allowCollapse = true;
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      }
    ]
  };
  var settingsBarItem = creator.toolbarItems.filter((item) => {
    if (item.id === "svd-settings") return item;
  })[0];
  expect(creator.showPropertyGrid).toBeTruthy();
  expect(settingsBarItem).toBeTruthy();
  var propertyGridModel = creator.getPlugin("designer").propertyGrid as PropertyGridViewModel<SurveyModel>; // new PropertyGridViewModel(creator);
  expect(propertyGridModel.visible).toBeTruthy();
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  settingsBarItem.action();
  expect(creator.selectedElementName).toEqual("survey");

  var hidePropertyModelBarItem = propertyGridModel.toolbarItems.filter(
    (item) => {
      if (item.id === "svd-grid-hide") return item;
    }
  )[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showPropertyGrid).toBeFalsy();
  expect(propertyGridModel.visible).toBeFalsy();

  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  settingsBarItem.action();
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.showPropertyGrid).toBeTruthy();
  expect(propertyGridModel.visible).toBeTruthy();

  settings.propertyGrid.allowCollapse = prevValue;
});
test("Show/hide property grid and settings button active state", (): any => {
  const prevValue = settings.propertyGrid.allowCollapse;
  settings.propertyGrid.allowCollapse = true;
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      }
    ]
  };
  creator.showPropertyGrid = false;
  var settingsBarItem = creator.toolbarItems.filter((item) => {
    if (item.id === "svd-settings") return item;
  })[0];
  expect(creator.showPropertyGrid).toBeFalsy();
  expect(settingsBarItem.active).toBeFalsy();
  expect(creator.selectedElementName).toEqual("survey");
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  expect(settingsBarItem.active).toBeFalsy();
  var propertyGridModel = creator.getPlugin("designer").propertyGrid as PropertyGridViewModel<SurveyModel>; //new PropertyGridViewModel(creator);
  expect(propertyGridModel.visible).toBeFalsy();

  settingsBarItem.action();
  expect(creator.showPropertyGrid).toBeTruthy();
  expect(propertyGridModel.visible).toBeTruthy();
  expect(creator.selectedElementName).toEqual("survey");
  expect(settingsBarItem.active).toBeTruthy();

  var hidePropertyModelBarItem = propertyGridModel.toolbarItems.filter(
    (item) => {
      if (item.id === "svd-grid-hide") return item;
    }
  )[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showPropertyGrid).toBeFalsy();
  expect(propertyGridModel.visible).toBeFalsy();
  expect(creator.selectedElementName).toEqual("survey");
  expect(settingsBarItem.active).toBeFalsy();
  settings.propertyGrid.allowCollapse = prevValue;
});
test("Show/hide property grid by collapse/expand actions", (): any => {
  const prevValue = settings.propertyGrid.allowCollapse;
  settings.propertyGrid.allowCollapse = true;
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      }
    ]
  };
  const expandBarItem = creator.toolbarItems.filter((item) => {
    if (item.id === "svd-grid-expand") return item;
  })[0];
  const settingsBarItem = creator.getActionBarItem("svd-settings");
  const propertyGridModel = creator.getPlugin("designer").propertyGrid as PropertyGridViewModel<SurveyModel>; // new PropertyGridViewModel(creator);
  const hidePropertyModelBarItem = propertyGridModel.toolbarItems.filter(
    (item) => { if (item.id === "svd-grid-hide") return item; }
  )[0];

  expect(creator.showPropertyGrid).toBeTruthy();
  expect(expandBarItem).toBeTruthy();
  expect(expandBarItem.visible).toBeFalsy();
  expect(propertyGridModel.visible).toBeTruthy();
  expect(hidePropertyModelBarItem).toBeTruthy();
  expect(hidePropertyModelBarItem.visible).toBeTruthy();

  hidePropertyModelBarItem.action();
  expect(creator.showPropertyGrid).toBeFalsy();
  expect(propertyGridModel.visible).toBeFalsy();
  expect(expandBarItem.visible).toBeTruthy();

  expandBarItem.action();
  expect(creator.showPropertyGrid).toBeTruthy();
  expect(propertyGridModel.visible).toBeTruthy();
  expect(expandBarItem.visible).toBeFalsy();

  settings.propertyGrid.allowCollapse = prevValue;
});
test("Show survey in property grid on deleting last page", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "question1"
          }
        ]
      },
      {
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      }
    ]
  };
  creator.selectElement(creator.survey.pages[0]);
  expect(creator.selectedElementName).toEqual("page1");
  creator.deleteCurrentElement();
  expect(creator.selectedElementName).toEqual("page2");
  creator.deleteCurrentElement();
  expect(creator.selectedElementName).toEqual("survey");
});
test("Test TabDesignerViewModel.pageCount - reactive", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.pageCount).toEqual(1);
  creator.copyPage(creator.survey.pages[0]);
  expect(designerPlugin.model.pageCount).toEqual(2);
  creator.deleteElement(creator.survey.pages[1]);
  expect(designerPlugin.model.pageCount).toEqual(1);
});
test("PageViewModel and onElementAllowOperations", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.isPage) {
      options.allowDelete = sender.survey.pageCount > 1;
    }
  });
  var pageModel = new PageViewModel(creator, creator.survey.pages[0]);
  expect(pageModel.getActionById("delete").visible).toBeTruthy();
  creator.selectElement(creator.survey.pages[1]);
  creator.deleteCurrentElement();
  expect(creator.selectedElementName).toEqual("page1");
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  var pageModel2 = new PageViewModel(creator, creator.survey.pages[0]);
  expect(pageModel2.getActionById("delete").visible).toBeFalsy();
});
test("PageViewModel and creator readOnly", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.readOnly = true;
  creator.selectElement(creator.survey.pages[0]);
  var pageModel = new PageViewModel(creator, creator.survey.pages[0]);
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  expect(pageModel.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel.allowDragging).toBeFalsy();
});
test("PageViewModel, actions and isGhost", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  var designerPlugin = <TabDesignerPlugin<SurveyModel>>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeTruthy();
  var pageModel = new PageViewModel(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  expect(pageModel.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel.allowDragging).toBeFalsy();
});
test("QuestionAdornerViewModel and onElementAllowOperations", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "comment", name: "q2" }
    ]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.isQuestion) {
      options.allowChangeType = options.obj.getType() !== "comment";
      options.allowChangeRequired = options.obj.getType() !== "text";
    }
  });
  var q1Model = new QuestionAdornerViewModel(
    creator,
    creator.survey.getAllQuestions()[0],
    undefined
  );
  var q2Model = new QuestionAdornerViewModel(
    creator,
    creator.survey.getAllQuestions()[1],
    undefined
  );
  creator.selectElement(q1Model.surveyElement);
  expect(q1Model.getActionById("convertTo").visible).toBeTruthy();
  expect(q1Model.getActionById("isrequired").visible).toBeFalsy();
  creator.selectElement(q2Model.surveyElement);
  expect(q2Model.getActionById("convertTo").visible).toBeFalsy();
  expect(q2Model.getActionById("isrequired").visible).toBeTruthy();
});
test("QuestionAdornerViewModel and onElementAllowOperations on new elements", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "comment", name: "q2" }
    ]
  };
  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.isQuestion) {
      options.allowChangeType = false;
      options.allowChangeRequired = false;
    }
  });
  const newQuestion = creator.survey.pages[0].addNewQuestion("text", "q3");
  creator.selectElement(newQuestion);

  var newQuestionModel = new QuestionAdornerViewModel(
    creator,
    newQuestion,
    undefined
  );
  expect(newQuestionModel.getActionById("convertTo").visible).toBeFalsy();
  expect(newQuestionModel.getActionById("isrequired").visible).toBeFalsy();
});
test("QuestionAdornerViewModel for selectbase and creator.maximumChoicesCount", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = creator.survey.getAllQuestions()[0];
  creator.maximumChoicesCount = 3;
  var q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1.visibleChoices).toHaveLength(2 + 4);
  q1.choices.push(new ItemValue("item3"));
  expect(q1.visibleChoices).toHaveLength(3 + 3);
});
test("QuestionAdornerViewModel for selectbase and creator.readOnly", (): any => {
  const creator = new CreatorTester();
  creator.readOnly = true;
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = creator.survey.getAllQuestions()[0];
  var q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1.visibleChoices).toHaveLength(2);
});
test("Modify property editor settings on event", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyEditorCreated.add((sender, options) => {
    if (
      options.obj.getType() == "text" &&
      options.property.name === "placeHolder"
    ) {
      options.editor.textUpdateMode = "onTyping";
      options.editor.dataList = ["item1", "item2"];
    }
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeHolderQuestion = creator.getTabPropertyGrid("designer").survey.getQuestionByName("placeHolder");
  expect(placeHolderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeHolderQuestion.dataList).toHaveLength(2);
});
test("Set readOnly option", (): any => {
  try {
    const creator = new CreatorTester({ readOnly: true });
    expect(creator.readOnly).toBeTruthy();
  } catch (e) {
    expect(e).toBeNull();
  }
});
test("Set allowEditSurveyTitle option", (): any => {
  const creator = new CreatorTester({ allowEditSurveyTitle: false });
  expect(creator.allowEditSurveyTitle).toBeFalsy();
  expect(Serializer.findProperty("survey", "title").visible).toBeFalsy();
  creator.allowEditSurveyTitle = true;
  expect(Serializer.findProperty("survey", "title").visible).toBeTruthy();
});
test("creator.onActiveTabChanged", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  let tabName;
  let plugin;
  let model;
  creator.onActiveTabChanged.add((sender, options) => {
    tabName = options.tabName;
    plugin = options.plugin;
    model = options.model;
  });
  expect(creator.viewType).toEqual("designer");
  creator.makeNewViewActive("test");
  expect(tabName).toEqual("test");
  expect(plugin).toEqual(creator.getPlugin("test"));
  expect(model).toEqual(plugin.model);
  creator.makeNewViewActive("logic");
  expect(tabName).toEqual("logic");
  expect(plugin).toEqual(creator.getPlugin("logic"));
  expect(model).toEqual(plugin.model);
});
test("update tab content", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  const newJson = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const hasQ1 = (survey: SurveyModel) => !!survey.getQuestionByName("q1");
  expect(creator.viewType).toEqual("designer");
  expect(hasQ1(creator.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(creator.survey)).toBeTruthy();

  creator.JSON = {};
  creator.makeNewViewActive("test");
  expect(creator.viewType).toEqual("test");
  const testPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(hasQ1(testPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(testPlugin.model.survey)).toBeTruthy();

  creator.JSON = {};
  creator.makeNewViewActive("logic");
  expect(creator.viewType).toEqual("logic");
  const logicPlugin = <TabLogicPlugin>creator.getPlugin("logic");
  expect(hasQ1(logicPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(logicPlugin.model.survey)).toBeTruthy();

  creator.JSON = {};
  creator.makeNewViewActive("translation");
  expect(creator.viewType).toEqual("translation");
  const translationPlugin = <TabLogicPlugin>creator.getPlugin("translation");
  expect(hasQ1(translationPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(translationPlugin.model.survey)).toBeTruthy();
});

test("Keyboard Shortcuts", (): any => {
  const creator = new CreatorTester();
  let count = 0;

  creator.registerShortcut("increase", {
    hotKey: {
      keyCode: 107, //numpad '-'
    },
    execute: () => { count++; }
  });

  creator.registerShortcut("decrease", {
    hotKey: {
      keyCode: 109, //numpad '+'
    },
    execute: () => { count--; }
  });

  const fakeIncreaseEvent: any = { keyCode: 107 };
  creator["onKeyDownHandler"](fakeIncreaseEvent);
  expect(count).toEqual(1);

  const fakeDecreaseEvent: any = { keyCode: 109 };
  creator["onKeyDownHandler"](fakeDecreaseEvent);
  expect(count).toEqual(0);
});

test("LogicPlugin Fast entry: options.allowEditExpressionsInTextEditor", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  let logicTabActions = logicPlugin.createActions();
  expect(creator.allowEditExpressionsInTextEditor).toBeTruthy();
  expect(logicTabActions).toHaveLength(3);
  expect(logicTabActions[2].id).toEqual("svc-logic-fast-entry");

  creator.allowEditExpressionsInTextEditor = false;
  logicTabActions = logicPlugin.createActions();
  expect(logicTabActions).toHaveLength(2);
  expect(logicTabActions.filter(action => action.id === "svc-logic-fast-entry")).toHaveLength(0);
});

test("LogicPlugin Fast entry: fastEntryAction switch active", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  const fastEntryAction = logicPlugin.createActions().filter(action => action.id === "svc-logic-fast-entry")[0];

  expect(fastEntryAction.visible).toBeFalsy();

  logicPlugin.activate();
  expect(fastEntryAction.visible).toBeTruthy();

  logicPlugin.model.expressionEditorIsFastEntry = true;
  expect(fastEntryAction.active).toBeTruthy();

  logicPlugin.model.expressionEditorIsFastEntry = false;
  expect(fastEntryAction.active).toBeFalsy();
});

test("LogicPlugin Fast entry: fastEntryAction enabled", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  const fastEntryAction = logicPlugin.createActions().filter(action => action.id === "svc-logic-fast-entry")[0];

  expect(fastEntryAction.visible).toBeFalsy();

  logicPlugin.activate();
  expect(fastEntryAction.visible).toBeTruthy();
  expect(fastEntryAction.enabled).toBeFalsy();

  logicPlugin.model.expressionEditorCanShowBuilder = false;
  expect(fastEntryAction.enabled).toBeFalsy();

  logicPlugin.model.expressionEditorCanShowBuilder = true;
  expect(fastEntryAction.enabled).toBeTruthy();
});
test("getNewName get new element name", (): any => {
  const creator = new CreatorTester({ allowEditSurveyTitle: false });
  const getNewName = (elementType: string, isPanel?: boolean) => { return creator["getNewName"](elementType, isPanel); };

  let elementType = "rating";
  expect(getNewName(elementType)).toBe("question1");

  elementType = "page";
  expect(getNewName(elementType)).toBe("page2");

  elementType = "panel";
  let isPanel = true;
  expect(getNewName(elementType, isPanel)).toBe("panel1");

  elementType = "custompanel";
  isPanel = true;
  expect(getNewName(elementType, isPanel)).toBe("panel1");
});
test("change locale in several pages survey", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        title: {
          default: "Page 1",
          de: "Page 1 - de"
        },
        elements: [
          {
            type: "text",
            name: "q1",
            title: {
              default: "Question 1",
              de: "Question 1 - de"
            }
          }
        ]
      },
      {
        title: {
          default: "Page 2",
          de: "Page 2 - de"
        },
        elements: [
          {
            type: "text",
            name: "q2",
            title: {
              default: "Question 2",
              de: "Question 2 - de"
            }
          }
        ]
      }
    ]
  };
  expect(creator.survey.pages[0].locTitle.renderedHtml).toEqual("Page 1");
  expect(creator.survey.getAllQuestions()[0].locTitle.renderedHtml).toEqual("Question 1");
  expect(creator.survey.pages[1].locTitle.renderedHtml).toEqual("Page 2");
  expect(creator.survey.getAllQuestions()[1].locTitle.renderedHtml).toEqual("Question 2");
  const data = {};
  creator.survey.pages[0].locTitle.onChanged = () => {
    data["page1"] = true;
  };
  creator.survey.pages[1].locTitle.onChanged = () => {
    data["page2"] = true;
  };
  creator.survey.getAllQuestions()[0].locTitle.onChanged = () => {
    data["q1"] = true;
  };
  creator.survey.getAllQuestions()[1].locTitle.onChanged = () => {
    data["q2"] = true;
  };
  creator.survey.locale = "de";
  expect(data["page1"]).toBeTruthy();
  expect(data["page2"]).toBeTruthy();
  expect(data["q1"]).toBeTruthy();
  expect(data["q2"]).toBeTruthy();

});