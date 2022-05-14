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
  ItemValue,
  settings as surveySettings,
  QuestionPanelDynamicModel,
  CustomWidgetCollection,
  QuestionMatrixModel,
  Action,
  QuestionMatrixDynamicModel,
  QuestionCheckboxModel,
  ComponentCollection,
  QuestionCompositeModel
} from "survey-core";
import { PageAdorner } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";
import { SurveyElementAdornerBase } from "../src/components/action-container-view-model";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TabLogicPlugin } from "../src/components/tabs/logic-plugin";
import { TabEmbedPlugin } from "../src/components/tabs/embed";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabJsonEditorAcePlugin } from "../src/components/tabs/json-editor-ace";
import { DesignTimeSurveyModel, isTextInput } from "../src/creator-base";

import {
  getElementWrapperComponentData,
  getElementWrapperComponentName,
  getQuestionContentWrapperComponentName,
  ICreatorPlugin,
  isStringEditable
} from "../src/creator-base";
import { SurveyHelper } from "../src/survey-helper";
import { CreatorTester } from "./creator-tester";
import { editorLocalization } from "../src/editorLocalization";
import { EmptySurveyCreatorOptions, settings } from "../src/settings";
import { PropertyGridEditorCollection } from "../src/property-grid/index";
import { PropertyGridEditorMatrixItemValues } from "../src/property-grid/matrices";
import { ObjectSelector } from "../src/property-grid/object-selector";
import { PagesController } from "../src/pages-controller";
import { TabDesignerViewModel } from "../src/components/tabs/designer";

surveySettings.supportCreatorV2 = true;

test("options.questionTypes", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.isElementSelected(creator.survey)).toBeTruthy();
  const question = creator.survey.getAllQuestions()[0];
  creator.selectElement(question);
  expect(creator.selectedElementName).toEqual("q1");
  expect(creator.isElementSelected(question)).toBeTruthy();
  expect(creator.isElementSelected(creator.survey)).toBeFalsy();
});
test("init creator with showDesignerTab=false", (): any => {
  const creator = new CreatorTester({ showDesignerTab: false });
});
test("do not deactivate/activate tabs on selecting the active tab", (): any => {
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
  creator.survey.pages.splice(0, 1);
  expect(creator.survey.pages).toHaveLength(0);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0].elements).toHaveLength(1);
  expect(creator.selectedElementName).toEqual("question1");
  expect(creator.selectedElement.getType()).toEqual("text");
});
test("Click on toolbox and cancel survey.lazyRendering", (): any => {
  const creator = new CreatorTester();
  expect(creator.survey.isLazyRendering).toEqual(true);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.isLazyRendering).toEqual(false);
});
test("Click on toolbox and insert into correct index", (): any => {
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.activeTab).toEqual("designer");
  // eslint-disable-next-line no-self-assign
  creator.survey.currentPage = creator.survey.currentPage;
  let json: any = {
    type: "panel",
    elements: [{ type: "text", name: "question1" }]
  };
  json = creator.getJSONForNewElement(json);
  expect(json.name).toEqual("panel1");
  expect(json.type).toEqual("panel");
  expect(json.elements[0].name).toEqual("question2");
});
test("PageAdorner", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
  const pageModel = new PageAdorner(creator, creator.survey.currentPage);
  let counter = 0;
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
  const creator = new CreatorTester();
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  let counter = 0;
  pagesController.onPagesChanged.add((sender, options) => {
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
  const creator = new CreatorTester();
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  const model = new PageNavigatorViewModel(pagesController, "");
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

test("PageNavigatorViewModel currentPage", (): any => {
  const creator = new CreatorTester();
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  const model = new PageNavigatorViewModel(pagesController, "");
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
  const pages = creator.survey.pages;

  expect(model.items).toHaveLength(pages.length);
  expect(model.items[0].active).toBeTruthy();
  expect(model.items[1].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[0]);

  model.currentPage = pages[1];
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
  expect(model.currentPage).toEqual(pages[1]);
});

test("PageNavigatorViewModel bypage mode", (): any => {
  const creator = new CreatorTester({ pageEditMode: "bypage" });
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  const model = new PageNavigatorViewModel(pagesController, "bypage");
  expect(model.items).toHaveLength(2);
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
  const pages = creator.survey.pages;

  expect(model.items).toHaveLength(pages.length + 1);
  expect(model.items[0].active).toBeTruthy();
  expect(model.items[1].active).toBeFalsy();
  expect(model.items[2].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[0]);

  model.currentPage = pages[1];
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
  expect(model.items[2].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[1]);

  creator.deleteElement(pages[1]);
  expect(model.items).toHaveLength(2);
  expect(model.items[0].active).toBeTruthy();
  expect(model.items[1].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[0]);

  model.items[1].action();
  expect(model.items).toHaveLength(2);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
  expect(model.currentPage).toEqual(desigerTab.newPage);

  creator.addPage(desigerTab.newPage);
  expect(model.items).toHaveLength(3);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
  expect(model.items[2].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[1]);
  expect(model.items[2].data).toEqual(desigerTab.newPage);
});

test("SelectionHistoryController: Go to next/prev", (): any => {
  const creator = new CreatorTester();
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
  const controller = creator.selectionHistoryController;
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
  const json = {
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
  const creator = new CreatorTester();
  creator.JSON = json;

  const controller = creator.selectionHistoryController;
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeFalsy();
  creator.selectElement(creator.survey.pages[0]);
  expect(controller.hasPrev).toBeTruthy();
  creator.JSON = json;
  expect(controller.hasPrev).toBeFalsy();
  expect(controller.hasNext).toBeFalsy();
});
test("SelectionHistoryController: Update history on deleting elements", (): any => {
  const creator = new CreatorTester();
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
  const controller = creator.selectionHistoryController;
  const page = creator.survey.pages[1];
  creator.selectElement(page);
  const question = creator.survey.getQuestionByName("question1");
  creator.selectElement(question);
  const panel = <PanelModel>creator.survey.getPanelByName("panel1");
  creator.selectElement(panel);
  const question2 = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("question2");
  const column = question2.columns[0];
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
  question2.columns.splice(0, 1);
  expect(controller.hasInHistory(column)).toBeFalsy();
});
test("Update expressions on deleting a question", (): any => {
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
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
  let creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  let designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator = new CreatorTester();
  expect(creator.survey.pages).toHaveLength(1);
  designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  creator = new CreatorTester();
  creator.survey.pages[0].addNewQuestion("text", "question1");
  creator.survey.addNewPage("page2");
  expect(creator.survey.pages).toHaveLength(2);
  designerPlugin = <TabDesignerPlugin>(
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
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
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
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  let pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  designerPlugin.model.newPage.title = "Some title";
  expect(pageModel.isGhost).toBeFalsy();
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeFalsy();
  expect(designerPlugin.model.showNewPage).toBeFalsy();

  pageModel = new PageAdorner(creator, creator.survey.pages[1]);
  pageModel.page.description = "Some text";
  expect(creator.survey.pages).toHaveLength(2);

  creator.survey.pages[1].addNewQuestion("text", "q2");
  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
  designerPlugin.model.newPage.description = "Some description";
  expect(pageModel.isGhost).toBeFalsy();
  expect(creator.survey.pages).toHaveLength(3);
  expect(designerPlugin.model.showNewPage).toBeFalsy();
  expect(designerPlugin.model.newPage).toBeFalsy();
});
test("Create new page on changing title/description in ghost PageAdorner resets isGhost", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();

  let currentNewPage = designerPlugin.model.newPage;
  const pageWrapperViewModel = new PageAdorner(creator, currentNewPage);
  expect(pageWrapperViewModel.isGhost).toBeTruthy();

  designerPlugin.model.newPage.title = "Some title";
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeFalsy();

  pageWrapperViewModel.addNewQuestion(null, undefined);
  expect(designerPlugin.model.newPage).toBeTruthy();
});

test("Create new page, set empty JSON", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {};
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeFalsy();
});
test("Create new page, recreate designer survey via JSON", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  creator.showTestSurvey();
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  creator.JSON = {};
  creator.showDesigner();
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeFalsy();
});

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

test("Check survey settings button ", (): any => {
  const creator = new CreatorTester();
  const item = creator.getActionBarItem("svd-settings");
  expect(item.active).toBeTruthy();
  creator.selectElement(creator.survey.pages[0]);
  expect(item.active).toBeFalsy();
  creator.selectElement(creator.survey);
  expect(item.active).toBeTruthy();
});
test("Check survey undo/redo buttons ", (): any => {
  const creator = new CreatorTester();
  const undoItem = creator.getActionBarItem("icon-undo");
  const redoItem = creator.getActionBarItem("icon-redo");
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
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.pages[0].name).toEqual("page1");
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  let newPageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  expect(newPageModel.isGhost).toBeTruthy();
  newPageModel.addGhostPage();
  expect(newPageModel.isGhost).toBeFalsy();
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  creator.survey.pages[1].addNewQuestion("text", "question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  newPageModel = new PageAdorner(creator, designerPlugin.model.newPage);
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
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  expect(creator.survey.pages[1].elements).toHaveLength(1);
  expect(creator.survey.pages[1].elements[0].name).toEqual("question2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
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

test("fast copy tests, copy a question and check the index", (): any => {
  const creator = new CreatorTester();
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
  const creator = new CreatorTester();
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
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const action = creator.getActionBarItemByActions(
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
  const creator = new CreatorTester();
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
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const action = creator.getActionBarItemByActions(
    pageModel.actionContainer.actions,
    "duplicate"
  );
  action.action();

  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  let pageModelNew = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModelNew.addNewQuestion(pageModelNew, null);
  expect(creator.survey.pages[3].name).toEqual("page4");

});
test("Page duplicate and check actions visibility", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
    ]
  };
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const action = creator.getActionBarItemByActions(
    pageModel.actionContainer.actions,
    "duplicate"
  );
  expect(action.visible).toEqual(true);
  action.action();

  let pageModelNew = new PageAdorner(creator, creator.survey.pages[1]);
  const actionDuplicate = creator.getActionBarItemByActions(
    pageModelNew.actionContainer.actions,
    "duplicate"
  );

  expect(actionDuplicate.visible).toEqual(true);

});
test("Check action container for new added page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  const pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);
  expect(creator.survey.pages).toHaveLength(2);
  expect(pageModel.actionContainer.actions).toHaveLength(3);
});
test("Show error on entering non-unique column value", (): any => {
  const creator = new CreatorTester();
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
  const matrixQuestion = <QuestionMatrixDynamicModel>creator.survey.getAllQuestions()[0];
  creator.selectElement(matrixQuestion.columns[1]); //
  const questionName = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("name");
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
  const oldFunc = SurveyHelper.warnText;
  const warnings = [];
  SurveyHelper.warnText = (text: string): void => {
    warnings.push(text);
  };
  new CreatorTester(<any>"creator");
  expect(warnings).toHaveLength(1);
  expect(warnings[0].indexOf("constructor") > 0).toBeTruthy();
  const creator = new CreatorTester(
    <any>"creator",
    <any>{ showTranslationTab: true }
  );
  expect(warnings).toHaveLength(2);
  expect(warnings[1].indexOf("constructor") > 0).toBeTruthy();
  expect(creator.showTranslationTab).toBeTruthy();
  SurveyHelper.warnText = oldFunc;
});
test("pageEditMode='single'", (): any => {
  let creator = new CreatorTester();
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
  const designerPlugin = <TabDesignerPlugin>(
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
test("Check page actions for pageEditMode is 'single'", (): any => {
  const creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.pageEditMode).toEqual("single");
  creator.sidebar.flyoutMode = true;

  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  creator.selectElement(creator.survey.pages[0]);

  expect(pageModel.actionContainer.actions).toHaveLength(3);
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  expect(pageModel.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel.getActionById("settings").visible).toBeTruthy();
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
test("Convert checkbox into rating", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "question1", choices: [1, 2] }]
  };
  let q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("rating");
  let el = <QuestionRatingModel>creator.selectedElement;
  expect(el.getType()).toEqual("rating");
  expect(el.rateValues).toHaveLength(2);
  expect(el.rateValues[0].value).toEqual(1);
  creator.clickToolboxItem(creator.toolbox.getItemByName("checkbox").json);
  expect(creator.selectedElement.getType()).toEqual("checkbox");
  creator.convertCurrentQuestion("rating");
  el = <QuestionRatingModel>creator.selectedElement;
  expect(el.getType()).toEqual("rating");
  expect(el.rateValues).toHaveLength(0);
});

test("Convert text question into dropdown", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("dropdown");
  var el = <QuestionDropdownModel>creator.selectedElement;
  expect(el.getType()).toEqual("dropdown");
  expect(el.choices).toHaveLength(3);
  expect(el.choices[0].value).toEqual("item1");
});
test("Convert text question into single matrix", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  var q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("matrix");
  var el = <QuestionMatrixModel>creator.selectedElement;
  expect(el.getType()).toEqual("matrix");
  expect(el.columns).toHaveLength(3);
  expect(el.columns[0].value).toEqual("Column 1");
  expect(el.rows).toHaveLength(2);
  expect(el.rows[0].value).toEqual("Row 1");
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
  creator.survey.pages[0].addNewQuestion("text", "q1");
  creator.survey.pages[0].addNewQuestion("text", "q2");
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  creator.undo();
  creator.undo();
  expect(creator.survey.getAllQuestions()).toHaveLength(0);
  creator.redo();
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  creator.redo();
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
  expect(creator.survey.getAllQuestions()[0].name).toEqual("q1");
  expect(creator.survey.getAllQuestions()[1].name).toEqual("q2");
});

test("Question type selector", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);
  expect(creator.addNewQuestionText).toEqual("Add Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.actions.filter((item) => item.id == "rating")[0];
  listModel.selectItem(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add Rating");
  expect(survey.getAllQuestions().length).toEqual(1);
  expect(survey.getAllQuestions()[0].getType()).toEqual("rating");
  expect(creator.addNewQuestionInPage(() => { }));
  expect(survey.getAllQuestions().length).toEqual(2);
  expect(survey.getAllQuestions()[1].getType()).toEqual("rating");
});

test("Question type custom widgets", (): any => {
  const widget = {
    name: "test_widget",
    title: "Test Widget",
    iconName: "icon-editor",
    widgetIsLoaded: function () {
      return true;
    },
    isFit: function (question) {
      return question.getType() === "test_widget";
    },
    init() {
      //Register a new type using the empty question as the base.
      Serializer.addClass("test_widget", [], null, "empty");
    },
    htmlTemplate:
      "<div>This is test widget</div>",
    afterRender: function (question, element) {
    }
  };

  CustomWidgetCollection.Instance.add(widget, "customtype");

  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);
  expect(creator.addNewQuestionText).toEqual("Add Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const customItem = listModel.actions.filter((item) => item.id == "test_widget")[0];
  expect(customItem.title).toEqual("Test Widget");
  expect(customItem.iconName).toEqual("icon-editor");

  listModel.selectItem(customItem);
  expect(creator.addNewQuestionText).toEqual("Add Test Widget");
  expect(survey.getAllQuestions().length).toEqual(1);
  expect(survey.getAllQuestions()[0].getType()).toEqual("test_widget");
  expect(creator.addNewQuestionInPage(() => { }));
  expect(survey.getAllQuestions().length).toEqual(2);
  expect(survey.getAllQuestions()[1].getType()).toEqual("test_widget");
  CustomWidgetCollection.Instance.clear();
});

test("Question type selector localization", (): any => {
  const locStrings = editorLocalization.getLocale("");
  const oldAddNewQuestion = locStrings.ed.addNewQuestion;
  const oldAddNewTypeQuestion = locStrings.ed.addNewTypeQuestion;
  locStrings.ed.addNewQuestion = "Add New Question";
  locStrings.ed.addNewTypeQuestion = "Add New {0}";
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(creator.addNewQuestionText).toEqual("Add New Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.actions.filter((item) => item.id == "rating")[0];
  listModel.selectItem(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add New Rating");
  locStrings.ed.addNewQuestion = oldAddNewQuestion;
  locStrings.ed.addNewTypeQuestion = oldAddNewTypeQuestion;
});

test("Add question with default choices", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  creator.currentAddQuestionType = "radiogroup";
  creator.addNewQuestionInPage(() => { });
  const question = <QuestionRadiogroupModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("radiogroup");
  expect(question.visibleChoices.length).toEqual(6);
});
test("Add question based on json in toolbox", (): any => {
  const creator = new CreatorTester();
  const toolboxItem = creator.toolbox.getItemByName("text");
  toolboxItem.json.placeHolder = "Test holder";
  const survey: SurveyModel = creator.survey;
  creator.currentAddQuestionType = "text";
  creator.addNewQuestionInPage(() => { });
  const question = <QuestionTextModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("text");
  expect(question.placeHolder).toEqual("Test holder");
  delete toolboxItem.json.placeHolder;
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
  expect(getElementWrapperComponentName(new QuestionRatingModel(""), "", false)).toEqual("svc-question");
  expect(getElementWrapperComponentName(new QuestionRatingModel(""), "", true)).toEqual("svc-cell-question");
  expect(getElementWrapperComponentName(new QuestionDropdownModel(""), "", false)).toEqual("svc-dropdown-question");
  expect(getElementWrapperComponentName(new QuestionDropdownModel(""), "", true)).toEqual("svc-cell-dropdown-question");
  expect(getElementWrapperComponentName({ isContentElement: true }, "", false)).toEqual(undefined);
  const panelDynamic = new QuestionPanelDynamicModel("q1");
  const panelDynamictemplateQuestion = panelDynamic.template.addNewQuestion("dropdown", "q1_q1");
  expect(getElementWrapperComponentName(panelDynamictemplateQuestion, "", false)).toEqual("svc-dropdown-question");
});

test("getQuestionContentWrapperComponentName", (): any => {
  expect(getQuestionContentWrapperComponentName(new QuestionRatingModel(""))).toEqual("svc-rating-question-content");
});

test("getQuestionContentWrapperComponentName for component", (): any => {
  ComponentCollection.Instance.add({
    name: "test",
    elementsJSON: [{ type: "rating", name: "rate1" }]
  });
  const creator = new CreatorTester();
  const survey = new DesignTimeSurveyModel(creator, { questions: [{ type: "test", name: "q1" }] });
  const qCustom = <QuestionCompositeModel>survey.getAllQuestions()[0];
  const q = qCustom.panelWrapper.questions[0];
  expect(q.name).toBe("rate1");
  expect(survey.getQuestionContentWrapperComponentName(q)).toEqual("sv-template-renderer");
  ComponentCollection.Instance.clear();
});

test("getElementWrapperComponentData", (): any => {
  const testCreator: any = { test: "test" };
  expect(getElementWrapperComponentData(new QuestionTextModel(""), "", testCreator)).toEqual(testCreator);
  expect(getElementWrapperComponentData(new QuestionImageModel(""), "", testCreator)).toEqual(testCreator);
  expect(getElementWrapperComponentData(new QuestionRatingModel(""), "", testCreator)).toEqual(testCreator);
  expect(getElementWrapperComponentData(new QuestionDropdownModel(""), "", testCreator)).toEqual(testCreator);
  expect(getElementWrapperComponentData({ isContentElement: true }, "", testCreator)).toEqual(undefined);
  const panelDynamic = new QuestionPanelDynamicModel("q1");
  const panelDynamictemplateQuestion = panelDynamic.template.addNewQuestion("dropdown", "q1_q1");
  expect(getElementWrapperComponentData(panelDynamictemplateQuestion, "", testCreator)).toEqual(testCreator);
});

test("isStringEditable", (): any => {
  expect(isStringEditable({ isContentElement: true }, "")).toBeFalsy();
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
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  const testPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(testPlugin.model).toBeFalsy();
  creator.makeNewViewActive("test");
  expect(designerPlugin.model).toBeFalsy();
  expect(testPlugin.model).toBeTruthy();
  const logicPlugin = <TabLogicPlugin>creator.getPlugin("logic");
  const translationPlugin = <TabTranslationPlugin>(
    creator.getPlugin("translation")
  );
  const embedPlugin = <TabEmbedPlugin>creator.getPlugin("embed");
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
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  const textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
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
  const textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("editor");
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
  const oldFunc = TabJsonEditorAcePlugin.hasAceEditor;
  TabJsonEditorAcePlugin.hasAceEditor = (): boolean => {
    return true;
  };
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  const textPlugin = <TabJsonEditorAcePlugin>creator.getPlugin("editor");
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
  const creator = new CreatorTester();
  creator.allowCollapseSidebar = true;
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
  const settingsBarItem = creator.getActionBarItem("svd-settings");
  expect(creator.showSidebar).toBeTruthy();
  expect(settingsBarItem).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  settingsBarItem.action();
  expect(creator.selectedElementName).toEqual("survey");

  const hidePropertyModelBarItem = creator.sidebar.toolbar.actions.filter(item => { return item.id === "svd-grid-hide"; })[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();

  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  settingsBarItem.action();
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
});
test("Show/hide property grid and settings button active state", (): any => {
  const creator = new CreatorTester();
  creator.allowCollapseSidebar = true;
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
  creator.showSidebar = false;
  const settingsBarItem = creator.getActionBarItem("svd-settings");
  expect(creator.showSidebar).toBeFalsy();
  expect(settingsBarItem.active).toBeFalsy();
  expect(creator.selectedElementName).toEqual("survey");
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  expect(creator.selectedElementName).toEqual("question1");
  expect(settingsBarItem.active).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();

  settingsBarItem.action();
  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
  expect(creator.selectedElementName).toEqual("survey");
  expect(settingsBarItem.active).toBeTruthy();

  const hidePropertyModelBarItem = creator.sidebar.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();
  expect(creator.selectedElementName).toEqual("survey");
  expect(settingsBarItem.active).toBeFalsy();
});
test("set showSidebar is equivalent to action", (): any => {
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

  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.collapsedManually).toBeFalsy();
  expect(creator.sidebar.expandedManually).toBeFalsy();

  creator.showSidebar = false;
  const settingsBarItem = creator.getActionBarItem("svd-settings");
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.collapsedManually).toBeTruthy();
  expect(creator.sidebar.expandedManually).toBeFalsy();

  creator.sidebar.collapsedManually = false;
  creator.sidebar.expandedManually = false;
  settingsBarItem.action();
  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.collapsedManually).toBeFalsy();
  expect(creator.sidebar.expandedManually).toBeTruthy();

  creator.sidebar.collapsedManually = false;
  creator.sidebar.expandedManually = false;
  const hidePropertyModelBarItem = creator.sidebar.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();
  expect(creator.sidebar.collapsedManually).toBeTruthy();
  expect(creator.sidebar.expandedManually).toBeFalsy();
});
test("Show/hide property grid by collapse/expand actions", (): any => {
  const creator = new CreatorTester();
  creator.allowCollapseSidebar = true;
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
  const expandBarItem = creator.toolbarItems.filter((item) => { return item.id === "svd-grid-expand"; })[0];
  const hidePropertyModelBarItem = creator.sidebar.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];

  expect(creator.showSidebar).toBeTruthy();
  expect(expandBarItem).toBeTruthy();
  expect(expandBarItem.visible).toBeFalsy();
  expect(creator.sidebar.visible).toBeTruthy();
  expect(hidePropertyModelBarItem).toBeTruthy();
  expect(hidePropertyModelBarItem.visible).toBeTruthy();

  hidePropertyModelBarItem.action();
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();
  expect(expandBarItem.visible).toBeTruthy();

  expandBarItem.action();
  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
  expect(expandBarItem.visible).toBeFalsy();
});

test("Check property grid expand action is always last", (): any => {
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

  const index = creator.toolbar.renderedActions.length - 1;
  expect(creator.toolbar.renderedActions[index].id).toEqual("svd-grid-expand");
  creator.toolbarItems.push(new Action({
    id: "test-action",
    visible: true,
    title: "Test action",
    action: function () { }
  }));
  expect(creator.toolbar.renderedActions[index].id).toEqual("test-action");
  expect(creator.toolbar.renderedActions[index + 1].id).toEqual("svd-grid-expand");
});

test("Show survey in property grid on deleting last page", (): any => {
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
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.pageCount).toEqual(1);
  creator.copyPage(creator.survey.pages[0]);
  expect(designerPlugin.model.pageCount).toEqual(2);
  creator.deleteElement(creator.survey.pages[1]);
  expect(designerPlugin.model.pageCount).toEqual(1);
});
test("PageAdorner and onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.isPage) {
      options.allowDelete = sender.survey.pageCount > 1;
    }
  });
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  expect(pageModel.getActionById("delete").visible).toBeTruthy();
  creator.selectElement(creator.survey.pages[1]);
  creator.deleteCurrentElement();
  expect(creator.selectedElementName).toEqual("page1");
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  const pageModel2 = new PageAdorner(creator, creator.survey.pages[0]);
  expect(pageModel2.getActionById("delete").visible).toBeFalsy();
});
test("PageAdorner and creator readOnly", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.readOnly = true;
  creator.selectElement(creator.survey.pages[0]);
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  expect(pageModel.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel.allowDragging).toBeFalsy();
});
test("PageAdorner, actions and isGhost", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.newPage).toBeTruthy();
  const pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  expect(pageModel.isGhost).toBeTruthy();
  expect(pageModel.getActionById("delete").visible).toBeFalsy();
  expect(pageModel.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel.allowDragging).toBeFalsy();
});
test("QuestionAdornerViewModel and onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
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
  const q1Model = new QuestionAdornerViewModel(
    creator,
    creator.survey.getAllQuestions()[0],
    undefined
  );
  const q2Model = new QuestionAdornerViewModel(
    creator,
    creator.survey.getAllQuestions()[1],
    undefined
  );
  creator.selectElement(q1Model.element);
  expect(q1Model.getActionById("convertTo").visible).toBeTruthy();
  expect(q1Model.getActionById("isrequired").visible).toBeFalsy();
  creator.selectElement(q2Model.element);
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

  const newQuestionModel = new QuestionAdornerViewModel(
    creator,
    newQuestion,
    undefined
  );
  expect(newQuestionModel.getActionById("convertTo").visible).toBeFalsy();
  expect(newQuestionModel.getActionById("isrequired").visible).toBeFalsy();
});
test("ConvertTo, show the current question type selected", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(19);
  expect(items[0].id).toEqual("text");
  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("text");
  creator.convertCurrentQuestion("text");
  expect((<any>creator.selectedElement).id).toEqual(question.id);
});

test("ConverTo, change title of question item", (): any => {
  const creator = new CreatorTester();
  creator.toolbox.getItemByName("radiogroup").title = "Single selector";

  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const action = questionModel.getActionById("convertTo");
  expect(action.title).toEqual("Single selector");
});
test("ConvertTo, show custom widgets in ConvertTo action", (): any => {
  const widget = {
    name: "test_widget",
    title: "Test Widget",
    iconName: "icon-editor",
    widgetIsLoaded: function () {
      return true;
    },
    isFit: function (question) {
      return question.getType() === "test_widget";
    },
    init() {
      //Register a new type using the empty question as the base.
      Serializer.addClass("test_widget", [], null, "empty");
    },
    htmlTemplate:
      "<div>This is test widget</div>",
    afterRender: function (question, element) {
    }
  };

  CustomWidgetCollection.Instance.add(widget, "customtype");

  const creator = new CreatorTester({ questionTypes: ["text", "comment"] });
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" }
    ]
  };
  expect(creator.toolbox.items).toHaveLength(3);
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(3);
  expect(items[0].id).toEqual("text");
  expect(items[1].id).toEqual("comment");
  expect(items[2].id).toEqual("test_widget");
  expect(items[2].iconName).toEqual("icon-editor");
  CustomWidgetCollection.Instance.clear();
});
test("QuestionAdornerViewModel for selectbase and creator.maximumChoicesCount", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  creator.maximumChoicesCount = 3;
  const q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
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
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
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
  const placeHolderQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("placeHolder");
  expect(placeHolderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeHolderQuestion.dataList).toHaveLength(2);
});
test("Modify property editor via property grid survey", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyGridSurveyCreated.add((sender, options) => {
    if(options.obj.getType() !== "text") return;
    const question = options.survey.getQuestionByName("placeHolder");
    question.textUpdateMode = "onTyping";
    question.dataList = ["item1", "item2"];
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeHolderQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("placeHolder");
  expect(placeHolderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeHolderQuestion.dataList).toHaveLength(2);
});
test("Modify property editor titleActions on event", (): any => {
  PropertyGridEditorCollection.register(new PropertyGridEditorMatrixItemValues());
  const creator = new CreatorTester();
  creator.onPropertyEditorUpdateTitleActions.add((sender, options) => {
    const obj = options.obj;
    if (
      obj.getType() === "checkbox" &&
      options.property.name === "choices" &&
      obj.name === "q2"
    ) {
      options.titleActions.push({
        id: "test", title: "test", action: () => { obj.choices = [1, 2]; }
      });
    }
  });
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1" }, { type: "checkbox", name: "q2" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  let choicesQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("choices");
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.getType()).toEqual("matrixdynamic");
  expect(choicesQuestion.getTitleActions()).toHaveLength(3);
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[1];
  creator.selectElement(question);
  choicesQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("choices");
  expect(choicesQuestion.getTitleActions()).toHaveLength(4);
  expect(question.choices).toHaveLength(0);
  choicesQuestion.titleActions[3].action();
  expect(question.choices).toHaveLength(2);
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
test("Set allowEditSurveyTitle option with removed logoHeight property", (): any => {
  Serializer.removeProperty("survey", "logoHeight");
  const creator = new CreatorTester({ allowEditSurveyTitle: false });
  expect(creator.allowEditSurveyTitle).toBeFalsy();
  expect(Serializer.findProperty("survey", "logoWidth").visible).toBeFalsy();
  creator.allowEditSurveyTitle = true;
  expect(Serializer.findProperty("survey", "logoWidth").visible).toBeTruthy();
  Serializer.addProperty("survey", { name: "logoHeight", default: "200px", minValue: 0 });
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
  expect(creator.activeTab).toEqual("test");
  creator.makeNewViewActive("logic");
  expect(tabName).toEqual("logic");
  expect(plugin).toEqual(creator.getPlugin("logic"));
  expect(model).toEqual(plugin.model);
  expect(creator.activeTab).toEqual("logic");
});
test("creator.onActiveTabChaning", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  let tabName;
  let allow = true;
  creator.onActiveTabChanging.add((sender, options) => {
    tabName = options.tabName;
    options.allow = allow;
  });
  expect(creator.viewType).toEqual("designer");
  creator.makeNewViewActive("test");
  expect(tabName).toEqual("test");
  expect(creator.activeTab).toEqual("test");
  allow = false;
  creator.makeNewViewActive("logic");
  expect(tabName).toEqual("logic");
  expect(creator.activeTab).toEqual("test");
});
test("creator.onDragDropAllow", (): any => {
  const creator = new CreatorTester({});
  let fired = false;
  creator.onDragDropAllow.add((sender, options) => {
    fired = true;
  });

  const survey = creator.survey;
  const page = survey.addNewPage("page1");
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const target = new QuestionTextModel("q1");
  page.dragDropStart(q1, target);
  page.dragDropMoveTo(q2, true);

  expect(fired).toBeTruthy();
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

test("LogicPlugin Manual Entry: options.allowEditExpressionsInTextEditor", () => {
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

test("LogicPlugin Manual Entry: fastEntryAction switch active", () => {
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

test("LogicPlugin Manual Entry: fastEntryAction enabled", () => {
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

test("process shortcut for text inputs", (): any => {
  const creator = new CreatorTester({ showDesignerTab: false });
  let log = "";
  creator.registerShortcut("delete_test", {
    hotKey: {
      keyCode: 46,
    },
    macOsHotkey: {
      keyCode: 46,
    },
    execute: () => log += "->execute"
  });
  expect(log).toEqual("");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: {} });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "input" } });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "textarea" } });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "span" } });
  expect(log).toEqual("->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "div" } });
  expect(log).toEqual("->execute->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "span", isContentEditable: true } });
  expect(log).toEqual("->execute->execute->execute");
});

test("doClickQuestionCore", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question4"
          },
          {
            "type": "boolean",
            "name": "question1"
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
          },
          {
            "type": "rating",
            "name": "question3",
            "startWithNewLine": false
          }
        ]
      }
    ]
  };
  const q3 = creator.survey.getQuestionByName("question3");
  creator.selectElement(q3);
  const newQuestion1 = new QuestionTextModel("newQuestion1");
  creator["doClickQuestionCore"](newQuestion1);
  expect(creator.survey.getAllQuestions()[4].name).toEqual("newQuestion1");
  expect(creator.survey.getAllQuestions()[4].startWithNewLine).toEqual(true);
  expect(creator.survey.getAllQuestions()[3].startWithNewLine).toEqual(false);
});

test("logoPosition set right", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  };
  expect(creator.survey.logoPosition).toEqual("right");
  creator.JSON = {
    "logoPosition": "top",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1"
          }
        ]
      }
    ]
  };
  expect(creator.survey.logoPosition).toEqual("right");
});

test("Add new question to Panel and Page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "panel", name: "panel1" }]
      },
      {
        elements: [{ type: "panel", name: "panel2" }]
      },
      {
        elements: [{ type: "panel", name: "panel3" }]
      }
    ]
  };

  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[0],
    undefined
  );
  const panelModel2: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[1],
    undefined
  );
  const panelModel3: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[2],
    undefined
  );

  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const pageModel2 = new PageAdorner(creator, creator.survey.pages[1]);
  const pageModel3 = new PageAdorner(creator, creator.survey.pages[2]);

  expect(panelModel.addNewQuestionText).toEqual("Add Question");
  expect(panelModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageModel.addNewQuestionText).toEqual("Add Question");
  expect(pageModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageModel3.addNewQuestionText).toEqual("Add Question");

  expect(creator.survey.getAllQuestions().length).toEqual(0);
  pageModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().length).toEqual(1);
  expect(panelModel.element.getElementsInDesign().length).toEqual(0);
  panelModel.addNewQuestion();
  expect(panelModel.element.getElementsInDesign().length).toEqual(1);

  const selectorModelPanel = panelModel.questionTypeSelectorModel;
  const listModelPanel: ListModel = selectorModelPanel.popupModel.contentComponentData.model;
  const ratingItem = listModelPanel.actions.filter((item) => item.id == "rating")[0];
  listModelPanel.selectItem(ratingItem);

  expect(panelModel.addNewQuestionText).toEqual("Add Rating");
  expect(panelModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageModel.addNewQuestionText).toEqual("Add Question");
  expect(pageModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPanel2 = panelModel2.questionTypeSelectorModel;
  const listModelPanel2: ListModel = selectorModelPanel2.popupModel.contentComponentData.model;
  const commentItem = listModelPanel2.actions.filter((item) => item.id == "comment")[0];
  listModelPanel2.selectItem(commentItem);

  expect(panelModel.addNewQuestionText).toEqual("Add Rating");
  expect(panelModel2.addNewQuestionText).toEqual("Add Comment");
  expect(pageModel.addNewQuestionText).toEqual("Add Question");
  expect(pageModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage = pageModel.questionTypeSelectorModel;
  const listModelPage: ListModel = selectorModelPage.popupModel.contentComponentData.model;
  const rankingItem = listModelPage.actions.filter((item) => item.id == "ranking")[0];
  listModelPage.selectItem(rankingItem);

  expect(panelModel.addNewQuestionText).toEqual("Add Rating");
  expect(panelModel2.addNewQuestionText).toEqual("Add Comment");
  expect(pageModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage2 = pageModel2.questionTypeSelectorModel;
  const listModelPage2: ListModel = selectorModelPage2.popupModel.contentComponentData.model;
  const htmlItem = listModelPage2.actions.filter((item) => item.id == "html")[0];
  listModelPage2.selectItem(htmlItem);

  expect(panelModel.addNewQuestionText).toEqual("Add Rating");
  expect(panelModel2.addNewQuestionText).toEqual("Add Comment");
  expect(pageModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageModel2.addNewQuestionText).toEqual("Add HTML");

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "text", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "text", "ranking", "comment", "html"]);

  pageModel.addNewQuestion(null, null);
  panelModel.addNewQuestion();
  pageModel2.addNewQuestion(null, null);
  panelModel2.addNewQuestion();

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment", "comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "comment", "html", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html"]);

  pageModel3.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html", "text"]);
  panelModel3.addNewQuestion();
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html", "text", "text"]);
});
test("Use settings.designer.defaultAddQuestionType", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  settings.designer.defaultAddQuestionType = "radiogroup";
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const panel = <PanelModel>creator.survey.getAllPanels()[0];
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  pageModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions()[0].getType()).toEqual("radiogroup");
  panelModel.addNewQuestion();
  expect(panel.questions[0].getType()).toEqual("radiogroup");
});
test("Use settings.designer.showAddQuestionButton = false", (): any => {
  settings.designer.showAddQuestionButton = false;
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  let panel = <PanelModel>creator.survey.getAllPanels()[0];
  let panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeFalsy();
  expect(panelModel.showAddQuestionButton).toBeFalsy();
  settings.designer.showAddQuestionButton = true;
  panelModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeTruthy();
  expect(panelModel.showAddQuestionButton).toBeTruthy();
});
test("Creator state, change the same property, isAutoSave=false", () => {
  const creator = new CreatorTester();
  creator.saveSurveyFunc = function (
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    doSaveCallback(no, true);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(creator.state).toEqual("modified");
  creator.doSaveFunc();
  expect(creator.state).toEqual("saved");
  question.title = "Title 2";
  expect(creator.state).toEqual("modified");
});
test("Creator state, change the same property, isAutoSave=true", () => {
  const creator = new CreatorTester();
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  var counter = 0;
  var saveNo = 0;
  creator.saveSurveyFunc = function (
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    counter++;
    saveNo = no;
    doSaveCallback(no, true);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(counter).toEqual(1);
  expect(saveNo).toEqual(1);
  expect(creator.state).toEqual("saved");
  question.title = "Title 2";
  expect(counter).toEqual(2);
  expect(saveNo).toEqual(2);
  expect(creator.state).toEqual("saved");
});

test("hide top panel", () => {
  const oldValueShowTabs = settings.layout.showTabs;
  const oldValueShowToolbar = settings.layout.showToolbar;

  settings.layout.showTabs = false;
  settings.layout.showToolbar = false;

  const creator = new CreatorTester();
  expect(creator.showTabs).toEqual(false);
  expect(creator.showToolbar).toEqual(false);

  settings.layout.showTabs = oldValueShowTabs;
  settings.layout.showToolbar = oldValueShowToolbar;
});

test("creator showToolbox support", () => {
  const creator = new CreatorTester();
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = false;
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = <any>"left";
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = <any>"right";
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = <any>"none";
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = <any>"top";
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = true;
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("right");
});
test("init creator with pageEditModeValue=single", (): any => {
  try {
    let creator = new CreatorTester({ pageEditMode: "single" });
    expect(creator.showJSONEditorTab).toBeFalsy();
    creator = new CreatorTester({ pageEditModeValue: "single", showJSONEditorTab: true });
    expect(creator.showJSONEditorTab).toBeTruthy();
    creator = new CreatorTester({ pageEditMode: "single" });
    creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
    expect(surveySettings.allowShowEmptyTitleInDesignMode).toBeFalsy();
    expect(surveySettings.allowShowEmptyDescriptionInDesignMode).toBeFalsy();
    expect(creator.JSON.pages).toBeUndefined();
    expect(creator.JSON.elements).toBeDefined();
    expect(creator.text.indexOf("pages")).toBe(-1);

    var objects = new ObjectSelector(creator, creator.survey);
    const allQuestions = creator.survey.getAllQuestions();
    expect(objects.items).toHaveLength(1 + allQuestions.length); // survey + questions
    expect(objects.items[0].title).toEqual("Survey");
    expect(objects.items[0].data).toEqual(creator.survey);
    expect(objects.items[1].title).toEqual(allQuestions[0].name);
    expect(objects.items[1].data).toEqual(allQuestions[0]);

  } finally {
    surveySettings.allowShowEmptyTitleInDesignMode = true;
    surveySettings.allowShowEmptyDescriptionInDesignMode = true;
  }
});
test("get survey JSON with pageEditModeValue=single #2711", (): any => {
  try {
    let creator = new CreatorTester({ pageEditMode: "single" });
    creator.text = "";
    expect(creator.JSON).toStrictEqual({ "logoPosition": "right" });
  } finally {
    surveySettings.allowShowEmptyTitleInDesignMode = true;
    surveySettings.allowShowEmptyDescriptionInDesignMode = true;
  }
});
test("delete last question and selection with pageEditModeValue=single #2712", (): any => {
  try {
    let creator = new CreatorTester({ pageEditMode: "single" });
    creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
    const question = creator.survey.getAllQuestions()[0];
    creator.selectElement(question);
    expect(creator.selectedElement).toBe(question);
    creator.deleteElement(question);
    expect(creator.selectedElement).toBe(creator.survey);
  } finally {
    surveySettings.allowShowEmptyTitleInDesignMode = true;
    surveySettings.allowShowEmptyDescriptionInDesignMode = true;
  }
});

test("SurveyElementAdornerBase setSurveyElement updateActionsProperties", (): any => {
  const creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
  const question = creator.survey.getAllQuestions()[0];
  let count = 0;
  const adorderBase = new SurveyElementAdornerBase(creator, null);

  creator.onElementAllowOperations.add(function (_, options) {
    count++;
  });
  adorderBase["setSurveyElement"](question);
  expect(count).toBe(1);
});

test("isTextInput", (): any => {
  const textarea = document.createElement("textarea");
  expect(isTextInput(textarea)).toBeTruthy();
  const input = document.createElement("input");
  expect(isTextInput(input)).toBeTruthy();

  const div = document.createElement("div");
  expect(isTextInput(div)).toBeFalsy();
  (<any>div)["isContentEditable"] = true;
  expect(isTextInput(div)).toBeTruthy();

  const span = document.createElement("span");
  expect(isTextInput(span)).toBeFalsy();
  (<any>span)["isContentEditable"] = true;
  expect(isTextInput(span)).toBeTruthy();
});
