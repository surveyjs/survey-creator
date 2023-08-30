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
  QuestionCompositeModel,
  QuestionCustomModel,
  PageModel
} from "survey-core";
import { PageAdorner } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";
import { QuestionDropdownAdornerViewModel } from "../src/components/question-dropdown";
import { SurveyElementAdornerBase } from "../src/components/action-container-view-model";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TabLogicPlugin } from "../src/components/tabs/logic-plugin";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabJsonEditorAcePlugin } from "../src/components/tabs/json-editor-ace";
import { isTextInput } from "../src/creator-base";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { ToolboxToolViewModel } from "../src/components/toolbox/toolbox-tool";

import {
  getElementWrapperComponentData,
  getElementWrapperComponentName,
  getQuestionContentWrapperComponentName,
  ICreatorPlugin,
  isStringEditable
} from "../src/creator-base";
import { SurveyHelper } from "../src/survey-helper";
import { CreatorTester } from "./creator-tester";
import { EditorLocalization, editorLocalization } from "../src/editorLocalization";
import { EmptySurveyCreatorOptions, settings } from "../src/creator-settings";
import { PropertyGridEditorCollection } from "../src/property-grid/index";
import { PropertyGridEditorMatrixItemValues } from "../src/property-grid/matrices";
import { ObjectSelector } from "../src/property-grid/object-selector";
import { PagesController } from "../src/pages-controller";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { UndoRedoAction } from "../src/plugins/undo-redo/undo-redo-manager";
import { assert } from "console";

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
test("PageAdorner - remove page if: it is the last page, there is no elements and there is no properties set", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.survey.pages).toHaveLength(1);
  expect(desigerTab.newPage).toBeTruthy();
  let pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  expect(pageAdorner.isGhost).toBeTruthy();
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(2);
  creator.survey.pages[1].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(1);

  pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  expect(pageAdorner.isGhost).toBeTruthy();
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(2);

  pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  expect(pageAdorner.isGhost).toBeTruthy();
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(3);
  creator.survey.pages[2].title = "New title";

  creator.survey.pages[1].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(3);

  creator.survey.pages[2].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(3);
});
test("PageAdorner - remove page if: it is the only page, by survey was empty initially", (): any => {
  const savedNewJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  creator.JSON = {};
  expect(creator.survey.pages).toHaveLength(0);
  creator.survey.addNewPage("page1");
  creator.survey.pages[0].addNewQuestion("text", "q1");
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  creator.survey.pages[0].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(0);
  expect(creator.selectedElementName).toEqual("survey");
  settings.defaultNewSurveyJSON = savedNewJSON;
});

test("PageAdorner - do not remove page if it is last and empty but the name has been changed", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.survey.pages).toHaveLength(1);
  expect(desigerTab.newPage).toBeTruthy();
  let pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  expect(pageAdorner.isGhost).toBeTruthy();
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(2);
  creator.survey.pages[1].name = "newPage";

  creator.survey.pages[1].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(2);
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

test("PageNavigatorViewModel visibleItems", (): any => {
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
      },
      {
        elements: [{ type: "text", name: "question3" }]
      },
      {
        elements: [{ type: "text", name: "question4" }]
      },
      {
        elements: [{ type: "text", name: "question5" }]
      },
      {
        elements: [{ type: "text", name: "question6" }]
      },
      {
        elements: [{ type: "text", name: "question7" }]
      },
      {
        elements: [{ type: "text", name: "question8" }]
      },
      {
        elements: [{ type: "text", name: "question9" }]
      },
      {
        elements: [{ type: "text", name: "question10" }]
      },
      {
        elements: [{ type: "text", name: "question11" }]
      },
      {
        elements: [{ type: "text", name: "question12" }]
      },
      {
        elements: [{ type: "text", name: "question13" }]
      },
      {
        elements: [{ type: "text", name: "question14" }]
      },
      {
        elements: [{ type: "text", name: "question15" }]
      },
      {
        elements: [{ type: "text", name: "question16" }]
      }
    ]
  };
  const pages = creator.survey.pages;

  expect(model.items).toHaveLength(pages.length);
  expect(model.visibleItemsStartIndex).toEqual(0);
  expect(model.visibleItemsCount).toEqual(Number.MAX_VALUE);
  expect(model.visibleItems).toHaveLength(pages.length);

  model["updateVisibleItems"](230);
  expect(model.visibleItemsStartIndex).toEqual(0);
  expect(model.visibleItemsCount).toEqual(5);
  expect(model.visibleItems).toHaveLength(model.visibleItemsCount);

  model.currentPage = pages[1];
  expect(model.visibleItemsStartIndex).toEqual(0);
  model.currentPage = pages[2];
  expect(model.visibleItemsStartIndex).toEqual(0);
  model.currentPage = pages[3];
  expect(model.visibleItemsStartIndex).toEqual(0);
  model.currentPage = pages[4];
  expect(model.visibleItemsStartIndex).toEqual(0);
  model.currentPage = pages[5];
  expect(model.visibleItemsStartIndex).toEqual(1);

  model.currentPage = pages[14];
  expect(model.visibleItemsStartIndex).toEqual(10);
  model.currentPage = pages[15];
  expect(model.visibleItemsStartIndex).toEqual(11);
  model.currentPage = pages[14];
  expect(model.visibleItemsStartIndex).toEqual(11);

  model.currentPage = pages[5];
  expect(model.visibleItemsStartIndex).toEqual(5);
  model.currentPage = pages[4];
  expect(model.visibleItemsStartIndex).toEqual(4);
  model.currentPage = pages[3];
  expect(model.visibleItemsStartIndex).toEqual(3);
  model.currentPage = pages[2];
  expect(model.visibleItemsStartIndex).toEqual(2);
  model.currentPage = pages[1];
  expect(model.visibleItemsStartIndex).toEqual(1);
  model.currentPage = pages[0];
  expect(model.visibleItemsStartIndex).toEqual(0);

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

test("Creator bypage edit mode - add question to a new page", (): any => {
  const creator = new CreatorTester({ pageEditMode: "bypage" });
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  const model = new PageNavigatorViewModel(pagesController, "bypage");
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

  expect(pages).toHaveLength(2);
  expect(model.items).toHaveLength(3);
  model.items[2].action && model.items[2].action();
  creator.clickToolboxItem({ type: "boolean" });
  expect(pages).toHaveLength(3);
  expect(model.items).toHaveLength(4);
  expect(creator.JSON).toEqual({
    "pages": [
      {
        "elements": [
          {
            "name": "question1",
            "type": "text",
          },
        ],
        "name": "page1",
      },
      {
        "elements": [
          {
            "name": "question2",
            "type": "text",
          },
        ],
        "name": "page2",
      },
      {
        "elements": [
          {
            "name": "question3",
            "type": "boolean",
          },
        ],
        "name": "page3",
      },
    ],
  });
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
  creator.survey.pages[1].title = "New page";
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
test("Create new ghost on moving a question from one page to the ghost page", (): any => {
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
  let pageWrapperViewModel = new PageAdorner(creator, currentNewPage);
  expect(pageWrapperViewModel.isGhost).toBeTruthy();

  const question1 = creator.survey.pages[0].questions[0];
  creator.survey.startMovingQuestion();
  question1.delete();
  const question2 = new QuestionTextModel("q1");
  pageWrapperViewModel.page.elements.push(question2);
  creator.survey.stopMovingQuestion();

  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeTruthy();
  currentNewPage = designerPlugin.model.newPage;
  expect(currentNewPage.name).toEqual("page3");
  pageWrapperViewModel = new PageAdorner(creator, currentNewPage);
  expect(pageWrapperViewModel.isGhost).toBeTruthy();

  creator.survey.startMovingQuestion();
  question2.delete();
  const question3 = new QuestionTextModel("q1");
  creator.survey.pages[0].elements.push(question3);
  creator.survey.stopMovingQuestion();
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.newPage.name).toEqual("page2");
  expect(designerPlugin.model.pagesController.pages).toHaveLength(1);
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

test("Check survey settings button ", (): any => {
  const creator = new CreatorTester();
  const item = creator.getActionBarItem("svd-settings");
  expect(item.active).toBeTruthy();
  creator.selectElement(creator.survey.pages[0]);
  expect(item.active).toBeFalsy();
  creator.selectElement(creator.survey);
  expect(item.active).toBeTruthy();
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
  newPageModel.addNewQuestion(newPageModel, null);
  expect(newPageModel.isGhost).toBeFalsy();
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].name).toEqual("page2");
  expect(designerPlugin.model.newPage.name).toEqual("page3");

  newPageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  expect(newPageModel.isGhost).toBeTruthy();
  newPageModel.addNewQuestion(newPageModel, null);
  expect(newPageModel.isGhost).toBeFalsy();
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
test("fast copy from paneldynamic", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "question1",
            "templateElements": [
              {
                "type": "text",
                "name": "question2"
              }
            ]
          }
        ]
      }
    ]
  };
  expect(creator.survey.getQuestionByName("question1").template.elements.length).toEqual(1);
  creator.fastCopyQuestion(creator.survey.getQuestionByName("question1").template.elements[0]);
  expect(creator.survey.pages[0].questions).toHaveLength(1);
  expect(creator.survey.getQuestionByName("question3")).toBeTruthy();
  expect(creator.survey.getQuestionByName("question1").template.elements.length).toEqual(2);
  expect(creator.survey.getQuestionByName("question1").template.elements[1].name).toEqual("question3");
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
  expect(el.choices[0].value).toEqual("Item 1");
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

test("Question type selector", (): any => {
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);
  expect(creator.addNewQuestionText).toEqual("Add Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel =
    selectorModel.popupModel.contentComponentData.model;
  const ratingItem = listModel.actions.filter((item) => item.id == "rating")[0];
  listModel.onItemClick(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add Rating Scale");
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

  listModel.onItemClick(customItem);
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
  listModel.onItemClick(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add New Rating Scale");
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
  toolboxItem.json.placeholder = "Test holder";
  const survey: SurveyModel = creator.survey;
  creator.currentAddQuestionType = "text";
  creator.addNewQuestionInPage(() => { });
  const question = <QuestionTextModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("text");
  expect(question.placeholder).toEqual("Test holder");
  delete toolboxItem.json.placeholder;
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
test("getElementWrapperComponentName for new class", (): any => {
  class QuestionDropdownModel2 extends QuestionDropdownModel {
    getType() { return "dropdown2"; }
    getTemplate() { return "dropdown"; }
    getCssType() { return "dropdown"; }
  }
  Serializer.addClass("dropdown2", [], () => new QuestionDropdownModel2(""), "dropdown");
  expect(getElementWrapperComponentName(new QuestionDropdownModel2(""), "", false)).toEqual("svc-dropdown-question");

  Serializer.removeClass("dropdown2");
});
test("getQuestionContentWrapperComponentName", (): any => {
  expect(getQuestionContentWrapperComponentName(new QuestionRatingModel(""))).toEqual("svc-rating-question-content");
});

test("getQuestionContentWrapperComponentName for component", (): any => {
  ComponentCollection.Instance.add(<any>{
    name: "test",
    elementsJSON: [{ type: "rating", name: "rate1" }]
  });
  const creator = new CreatorTester();
  const survey = creator.createSurvey({ questions: [{ type: "test", name: "q1" }] });
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

test("getElementWrapperComponentName for inner component elements", () => {
  ComponentCollection
    .Instance
    .add(<any>{
      name: "myPanel",
      title: "Dynamic Panel (Custom)",
      questionJSON: {
        "type": "paneldynamic",
        "name": "myPanel1",
        "panelCount": 1,
        "templateElements": [
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    });
  const creator = new CreatorTester();
  const survey = creator.createSurvey({
    questions: [{
      "type": "mypanel",
      "name": "question1"
    }]
  });
  const qCustom = <QuestionCustomModel>survey.getAllQuestions()[0];
  const q = <QuestionPanelDynamicModel>qCustom.questionWrapper;
  expect(q.name).toBe("myPanel1");

  const panel = q.panels[0] as PanelModel;
  const question = panel.questions[0] as QuestionTextModel;

  expect(getElementWrapperComponentName(qCustom, "", false)).toEqual("svc-question");
  expect(getElementWrapperComponentName(q, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName(panel, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName(question, "", false)).toEqual(undefined);
  ComponentCollection.Instance.clear();
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
test("isStringEditable for matrix dynamic", (): any => {
  const matrix = new QuestionMatrixDynamicModel("q1");
  matrix.addColumn("col1");
  matrix.rowCount = 1;
  expect(isStringEditable(matrix.columns[0].templateQuestion, "")).toBeTruthy();
  expect(isStringEditable(matrix.visibleRows[0].cells[0].question, "")).toBeFalsy();
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
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeFalsy();

  creator.makeNewViewActive("logic");
  expect(testPlugin.model).toBeFalsy();
  expect(logicPlugin.model).toBeTruthy();
  creator.makeNewViewActive("translation");
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeTruthy();
  creator.makeNewViewActive("embed");
  expect(translationPlugin.model).toBeFalsy();
  creator.makeNewViewActive("designer");
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
test("Hide property grid is always visible in flyoutMode", (): any => {
  const creator = new CreatorTester();
  creator.allowCollapseSidebar = false;
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
  const hidePropertyModelBarItem = creator.sidebar.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];

  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
  expect(hidePropertyModelBarItem).toBeTruthy();
  expect(hidePropertyModelBarItem.visible).toBeFalsy();
  creator.sidebar.flyoutMode = true;
  expect(hidePropertyModelBarItem.visible).toBeTruthy();
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
test("PageAdorner and onElementAllowOperations, allowEdit", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    let page = null;
    if (options.obj.isPage) {
      page = options.obj;
    } else {
      page = options.obj.page;
    }
    if (!!page) {
      const isFirstPage = sender.survey.pages.indexOf(page) === 0;
      if (isFirstPage) {
        options.allowEdit = false;
        options.allowCopy = false;
      }
    }
  });
  const pageModel1 = new PageAdorner(creator, creator.survey.pages[0]);
  const pageModel2 = new PageAdorner(creator, creator.survey.pages[1]);
  creator.selectElement(creator.survey.pages[0]);
  expect(pageModel1.getActionById("duplicate").visible).toBeFalsy();
  expect(pageModel1.showAddQuestionButton).toBeFalsy();
  creator.selectElement(creator.survey.pages[1]);
  expect(pageModel2.getActionById("duplicate").visible).toBeTruthy();
  expect(pageModel2.showAddQuestionButton).toBeTruthy();
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
      { type: "comment", name: "q2" },
      { type: "text", name: "q3" },
      { type: "rating", name: "q4" },
    ]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.isQuestion) {
      options.allowChangeType = options.obj.getType() !== "comment";
      options.allowChangeRequired = options.obj.getType() !== "text";
      options.allowChangeInputType = options.obj.name !== "q1";
    }
  });
  const q1Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[0], undefined);
  const q2Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[1], undefined);
  const q3Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[2], undefined);
  const q4Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[3], undefined);
  creator.selectElement(q1Model.element);
  expect(q1Model.getActionById("convertTo").visible).toBeTruthy();
  expect(q1Model.getActionById("isrequired").visible).toBeFalsy();
  expect(q1Model.getActionById("convertInputType").visible).toBeFalsy();
  creator.selectElement(q2Model.element);
  expect(q2Model.getActionById("convertTo").visible).toBeFalsy();
  expect(q2Model.getActionById("isrequired").visible).toBeTruthy();
  expect(q2Model.getActionById("convertInputType")).toBeFalsy();
  creator.selectElement(q3Model.element);
  expect(q3Model.getActionById("convertTo").visible).toBeTruthy();
  expect(q3Model.getActionById("isrequired").visible).toBeFalsy();
  expect(q3Model.getActionById("convertInputType").visible).toBeTruthy();
  creator.selectElement(q4Model.element);
  expect(q4Model.getActionById("convertTo").visible).toBeTruthy();
  expect(q4Model.getActionById("isrequired").visible).toBeTruthy();
  expect(q4Model.getActionById("convertInputType").visible).toBeTruthy();
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
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(20);
  expect(items[0].id).toEqual("radiogroup");
  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("radiogroup");
  creator.convertCurrentQuestion("radiogroup");
  expect((<any>creator.selectedElement).id).toEqual(question.id);
});
test("ConvertTo, show it for a panel", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "panel", name: "panel" }
    ]
  };
  const panel = creator.survey.getPanelByName("panel");
  creator.selectElement(panel);

  const panelModel = new QuestionAdornerViewModel(
    creator,
    panel,
    undefined
  );
  const items = panelModel.getConvertToTypesActions();
  expect(items).toHaveLength(2);
  expect(items[0].id).toEqual("panel");
  expect(items[1].id).toEqual("paneldynamic");
  const popup = panelModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("panel");
  creator.convertCurrentQuestion("paneldynamic");
  expect((<any>creator.selectedElement).getType()).toEqual("paneldynamic");
});
test("Has one item type in convertTo", (): any => {
  CustomWidgetCollection.Instance.add({
    name: "text",
    title: "Single-Line Input",
    widgetIsLoaded: () => { return true; },
    isFit: () => (question) => { return question.getType() === "text"; }
  }, "customtype");
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  let counter = 0;
  creator.toolbox.itemNames.forEach(item => { if (item === "text") counter++; });
  expect(counter).toEqual(1);
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  counter = 0;
  list.actions.forEach(item => {
    if (item.id === "text") counter++;
  });
  expect(counter).toEqual(1);
  CustomWidgetCollection.Instance.clear();
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

test("ConvertTo separators", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" },
      { type: "panel", name: "panel" }
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
  expect(items).toHaveLength(20);
  expect(items.filter(i => i.id == "text")[0].needSeparator).toBeTruthy();
  expect(items.filter(i => i.id == "comment")[0].needSeparator).toBeFalsy();
  expect(items.filter(i => i.id == "multipletext")[0].needSeparator).toBeFalsy();
  expect(items.filter(i => i.id == "paneldynamic")[0].needSeparator).toBeTruthy();

  const panel = creator.survey.getPanelByName("panel");
  creator.selectElement(panel);

  const panelModel = new QuestionAdornerViewModel(
    creator,
    panel,
    undefined
  );
  const items2 = panelModel.getConvertToTypesActions();
  expect(items2).toHaveLength(2);
  expect(items2[0].needSeparator).toBeFalsy();
  expect(items2[1].needSeparator).toBeFalsy();

});
test("convertInputType, change inputType for a text question", (): any => {
  const creator = new CreatorTester();

  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  let question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  let questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  expect(questionModel.getActionById("convertInputType")).toBeFalsy();
  let action = questionModel.getActionById("convertTo");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("sv-action--convertTo-last") > -1).toBeTruthy();
  question = creator.survey.getQuestionByName("q2");
  creator.selectElement(question);
  questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  action = questionModel.getActionById("convertTo");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("sv-action--convertTo-last") > -1).toBeFalsy();
  action = questionModel.getActionById("convertInputType");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("sv-action--convertTo-last") > -1).toBeTruthy();
  expect(action.title).toBe("Text");
  const popup = action.popupModel;
  expect(popup).toBeTruthy();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("text");
  list.onSelectionChanged(list.actions.filter(item => item.id === "tel")[0]);
  expect(question.inputType).toBe("tel");
  expect(action.title).toBe("Phone Number");
  question.inputType = "password";
  expect(action.title).toBe("Password");
  expect(list.selectedItem.id).toEqual("password");
});
test("convertInputType, hide it for readOnly creator", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  let questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeTruthy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q2"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeTruthy();
  creator.readOnly = true;
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeFalsy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q2"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeFalsy();
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
  expect(q1.visibleChoices[4] === q1.newItem).toBeFalsy();
  expect(q1.visibleChoices).toHaveLength(3 + 3);
  expect(q1.visibleChoices[3].value).toEqual("item3");
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
test("QuestionAdornerViewModel for selectbase and creator.onItemValueAdded", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "radiogroup", name: "q1", choices: ["item1", "item2"] }]
  };
  creator.onItemValueAdded.add((sender, options) => {
    options.newItem.text = options.obj.getType() + ":" + options.propertyName + ","
      + options.newItem.value + "," + options.itemValues.length.toString();

  });
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.visibleChoices[2]);
  newItemAdorner.add(newItemAdorner);
  expect(q1.choices).toHaveLength(3);
  expect(q1.choices[2].text).toEqual("radiogroup:choices,item3,3");
});
test("QuestionAdornerViewModel question.newItem.value/text", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "radiogroup", name: "q1", choices: [{ value: 1, text: "Item 1" }, { value: 2, text: "Item 2" }] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.visibleChoices[2]);
  expect(q1.newItem.value).toEqual(3);
  expect(q1.newItem.text).toEqual("Item 3");
  newItemAdorner.add(newItemAdorner);
  expect(q1.choices).toHaveLength(3);
  expect(q1.choices[2].value).toEqual(3);
  expect(q1.choices[2].text).toEqual("Item 3");
  expect(q1.newItem.value).toEqual(4);
  expect(q1.newItem.text).toEqual("Item 4");
});

test("Modify property editor settings on event", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyEditorCreated.add((sender, options) => {
    if (
      options.obj.getType() == "text" &&
      options.property.name === "placeholder"
    ) {
      options.editor.textUpdateMode = "onTyping";
      options.editor.dataList = ["item1", "item2"];
    }
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeholderQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("placeholder");
  expect(placeholderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeholderQuestion.dataList).toHaveLength(2);
});
test("Modify property editor via property grid survey", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyGridSurveyCreated.add((sender, options) => {
    if (options.obj.getType() !== "text") return;
    const question = options.survey.getQuestionByName("placeholder");
    question.textUpdateMode = "onTyping";
    question.dataList = ["item1", "item2"];
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeholderQuestion = creator.sidebar.getTabById("propertyGrid").model.survey.getQuestionByName("placeholder");
  expect(placeholderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeholderQuestion.dataList).toHaveLength(2);
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
  expect(Serializer.findProperty("survey", "description").visible).toBeFalsy();
  expect(Serializer.findProperty("survey", "logo").visible).toBeFalsy();
  expect(Serializer.findProperty("survey", "logoFit").visible).toBeFalsy();
  expect(Serializer.findProperty("survey", "logoWidth").visible).toBeFalsy();
  expect(Serializer.findProperty("survey", "logoHeight").visible).toBeFalsy();
  creator.allowEditSurveyTitle = true;
  expect(Serializer.findProperty("survey", "title").visible).toBeTruthy();
  expect(Serializer.findProperty("survey", "description").visible).toBeTruthy();
  expect(Serializer.findProperty("survey", "logo").visible).toBeTruthy();
  expect(Serializer.findProperty("survey", "logoFit").visible).toBeTruthy();
  expect(Serializer.findProperty("survey", "logoWidth").visible).toBeTruthy();
  expect(Serializer.findProperty("survey", "logoHeight").visible).toBeTruthy();
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
test("active tab disableHide", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  expect(creator.viewType).toEqual("designer");
  expect(creator.tabs[0].active).toBeTruthy();
  expect(creator.tabs[0].disableHide).toBeTruthy();
  creator.makeNewViewActive("test");
  expect(creator.tabs[1].active).toBeTruthy();
  expect(creator.tabs[1].disableHide).toBeTruthy();
  expect(creator.tabs[0].active).toBeFalsy();
  expect(creator.tabs[0].disableHide).toBeFalsy();
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

test("logoPosition set right for emtpy survey only", () => {
  const creator = new CreatorTester();
  expect(creator.survey.logoPosition).toEqual("right");
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
  expect(creator.survey.logoPosition).toEqual("left");
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
  expect(creator.survey.logoPosition).toEqual("top");
  creator.text = "";
  expect(creator.survey.logoPosition).toEqual("right");
  creator.JSON = undefined;
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

  const panelAdornerModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[0],
    undefined
  );
  const panelAdornerModel2: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[1],
    undefined
  );
  const panelAdornerModel3: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[2],
    undefined
  );

  const pageAdornerModel = new PageAdorner(creator, creator.survey.pages[0]);
  const pageAdornerModel2 = new PageAdorner(creator, creator.survey.pages[1]);
  const pageAdornerModel3 = new PageAdorner(creator, creator.survey.pages[2]);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel3.addNewQuestionText).toEqual("Add Question");

  expect(creator.survey.getAllQuestions().length).toEqual(0);
  pageAdornerModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().length).toEqual(1);
  expect(panelAdornerModel.element.getElementsInDesign().length).toEqual(0);
  panelAdornerModel.addNewQuestion();
  expect(panelAdornerModel.element.getElementsInDesign().length).toEqual(1);

  const selectorModelPanel = panelAdornerModel.questionTypeSelectorModel;
  const listModelPanel: ListModel = selectorModelPanel.popupModel.contentComponentData.model;
  const ratingItem = listModelPanel.actions.filter((item) => item.id == "rating")[0];
  listModelPanel.onItemClick(ratingItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPanel2 = panelAdornerModel2.questionTypeSelectorModel;
  const listModelPanel2: ListModel = selectorModelPanel2.popupModel.contentComponentData.model;
  const commentItem = listModelPanel2.actions.filter((item) => item.id == "comment")[0];
  listModelPanel2.onItemClick(commentItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage = pageAdornerModel.questionTypeSelectorModel;
  const listModelPage: ListModel = selectorModelPage.popupModel.contentComponentData.model;
  const rankingItem = listModelPage.actions.filter((item) => item.id == "ranking")[0];
  listModelPage.onItemClick(rankingItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage2 = pageAdornerModel2.questionTypeSelectorModel;
  const listModelPage2: ListModel = selectorModelPage2.popupModel.contentComponentData.model;
  const htmlItem = listModelPage2.actions.filter((item) => item.id == "html")[0];
  listModelPage2.onItemClick(htmlItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add HTML");

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "text", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "text", "ranking", "comment", "html"]);

  pageAdornerModel.addNewQuestion(null, null);
  panelAdornerModel.addNewQuestion();
  pageAdornerModel2.addNewQuestion(null, null);
  panelAdornerModel2.addNewQuestion();

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment", "comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "comment", "html", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html"]);

  pageAdornerModel3.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html", "text"]);
  panelAdornerModel3.addNewQuestion();
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
  let pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  let panel = <PanelModel>creator.survey.getAllPanels()[0];
  let panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeFalsy();
  expect(panelModel.showAddQuestionButton).toBeFalsy();
  settings.designer.showAddQuestionButton = true;
  pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  panelModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeTruthy();
  expect(panelModel.showAddQuestionButton).toBeTruthy();
});
test("Add Questions with selection", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  const panel = <PanelModel>creator.survey.getAllPanels()[0];
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  panelModel.addNewQuestion();
  panelModel.addNewQuestion();
  creator.selectElement(panel.elements[1]);
  panelModel.addNewQuestion();
  creator.selectElement(panel);
  panelModel.addNewQuestion();
  expect(panel.elements).toHaveLength(5);
  expect(panel.elements[0].name).toEqual("question1");
  expect(panel.elements[1].name).toEqual("question2");
  expect(panel.elements[2].name).toEqual("question4");
  expect(panel.elements[3].name).toEqual("question3");
  expect(panel.elements[4].name).toEqual("question5");
  expect((<any>panel.elements[4]).visibleIndex).toBe(4);
});
test("Add Questions into detail panel", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{
      type: "matrixdynamic", name: "matrix", columns: [{ cellType: "text", name: "col1" }],
      detailPanelMode: "underRow", detailElements: [{ type: "text", name: "question1" }]
    }]
  };
  const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
  const row = matrix.visibleRows[0];
  row.showDetailPanel();
  const panel = row.detailPanel;
  expect(panel).toBeTruthy();
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  expect(panel.questions).toHaveLength(2);
  const question1 = panel.questions[0];
  const question2 = panel.questions[1];
  expect(question1.no).toBeFalsy();
  expect(question2.name).toBe("question2");
  expect(question2.no).toBeFalsy();
});
test("Page add new question when a selected question is inside a panel, Bug#4468", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{
      type: "panel", name: "panel1",
      elements: [{ type: "text", name: "question1" }]
    }]
  };
  creator.selectQuestionByName("question1");
  expect(creator.selectedElementName).toBe("question1");
  const panel = creator.survey.getPanelByName("panel1");
  const page = creator.survey.pages[0];
  expect(panel.elements).toHaveLength(1);
  expect(page.elements).toHaveLength(1);
  const pageAdornerModel = new PageAdorner(creator, page);
  pageAdornerModel.addNewQuestion(pageAdornerModel, null);
  expect(panel.elements).toHaveLength(1);
  expect(page.elements).toHaveLength(2);
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  expect(panel.elements).toHaveLength(2);
  expect(page.elements).toHaveLength(2);
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
test("Creator notify state, change the same property, isAutoSave=false", () => {
  let notifierLog = "";
  const creator = new CreatorTester();
  creator.notify = (msg, type) => {
    notifierLog += msg;
    if (type) {
      notifierLog += " - " + type;
    }
    notifierLog += (", ");
  };

  creator.saveSurveyFunc = function (no: number, doSaveCallback: (no: number, isSuccess: boolean) => void) {
    doSaveCallback(no, false);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  expect(notifierLog).toBe("");
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(creator.state).toEqual("modified");
  expect(notifierLog).toBe("Modified, ");
  notifierLog = "";
  creator.doSaveFunc();
  expect(creator.state).toEqual("modified");
  expect(notifierLog).toBe("Saving, Modified, Error! Editor content is not saved. - error, ");
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

test("allowEdit and onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "rating", name: "q1" }] };

  let allowEdit: any = undefined;
  creator.onElementAllowOperations.add((sender, options) => {
    options.allowEdit = allowEdit;
  });

  const pageModel = creator.survey.pages[0];
  const pageAdornerModel = new PageAdorner(creator, pageModel);
  const question = creator.survey.getQuestionByName("q1");
  const questionAdornerModel = new QuestionAdornerViewModel(creator, question, undefined);

  creator.sidebar.flyoutMode = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  creator.sidebar.flyoutMode = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();

  allowEdit = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  allowEdit = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();
});
test("Carry-forward banner", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "dropdown", name: "q2", choicesFromQuestion: "q1" },
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  const q2AdornerModel = new QuestionAdornerViewModel(creator, q2, undefined);
  expect(q2AdornerModel.isUsingCarryForward).toBeTruthy();
  q2.choicesFromQuestion = "";
  expect(q2AdornerModel.isUsingCarryForward).toBeFalsy();
  expect(q2AdornerModel.createCarryForwardParams()).toBeFalsy();
  q2.choicesFromQuestion = "q1";
  expect(q2AdornerModel.isUsingCarryForward).toBeTruthy();
  q1.name = "q11";
  expect(q2.choicesFromQuestion).toBe("q11");
  expect(q2AdornerModel.isUsingCarryForward).toBeTruthy();
  const params = q2AdornerModel.createCarryForwardParams();
  expect(params.question.name).toBe("q11");
  expect(params.text).toBe("Choices are copied from");
  creator.selectElement(q2);
  expect(creator.selectedElementName).toBe("q2");
  params.onClick();
  expect(creator.selectedElementName).toBe("q11");
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
test("onSurveyPropertyValueChanged event", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  let propertyName;
  let propertyValue;
  let objType;
  let counter = 0;
  creator.onSurveyPropertyValueChanged.add((sender, options) => {
    counter++;
    objType = options.obj.getType();
    propertyName = options.propertyName;
    propertyValue = options.value;
  });
  creator.survey.title = "New Survey";
  expect(counter).toEqual(1);
  expect(objType).toEqual("survey");
  expect(propertyName).toEqual("title");
  expect(propertyValue).toEqual("New Survey");
  creator.survey.getAllQuestions()[0].title = "New Question";
  expect(counter).toEqual(2);
  expect(objType).toEqual("text");
  expect(propertyName).toEqual("title");
  expect(propertyValue).toEqual("New Question");
});
test("showPropertyGrid: false generates error", () => {
  const options = { showPropertyGrid: false };
  const creator = new CreatorTester(options);
  expect(creator.sidebar.visible).toBeFalsy();
});
test("Test options, setting some of them can generate errors", () => {
  const options = {
    isAutoSave: true,
    showJSONEditorTab: false,
    showElementEditorAsPropertyGrid: true,
    showLogicTab: true,
    showEmbededSurveyTab: false,
    showSidebar: true,
    showSimulatorInTestSurveyTab: true,
    showTestSurveyTab: true,
    showPropertyGrid: "right",
    showToolbox: "right",
    showTranslationTab: false,
    showPagesToolbox: true,
    allowControlSurveyTitleVisibility: false,
    showState: true,
    showTitle: true,
    haveCommercialLicense: true
  };
  const creator = new CreatorTester(options);
  expect(creator.sidebar.visible).toBeTruthy();
});
test("Add and remove question immediately, incorrect selection", (): any => {
  const creator = new CreatorTester();
  creator.onQuestionAdded.add((sender, options) => {
    if (creator.survey.getAllQuestions().length > 1) {
      options.question.delete();
    }
  });
  creator.addNewQuestionInPage(() => { });
  creator.addNewQuestionInPage(() => { });
  expect(creator.survey.currentPage.elements).toHaveLength(1);
  expect(creator.selectedElementName).toEqual("question1");
});
test("Convert question type for a question on the last page with the only question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const newPage = creator.survey.addNewPage("page2");
  let newQuestion = newPage.addNewQuestion("text", "question2");
  creator.selectElement(newQuestion);
  creator.convertCurrentQuestion("comment");
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].questions[0].getType()).toEqual("comment");
  expect(creator.survey.pages[1].questions[0].name).toEqual("question2");
});
test("Allow to set survey JSON via text if errors in JSON is not critical", (): any => {
  const creator = new CreatorTester();
  creator.text = JSON.stringify({
    elements: [
      { type: "text", name: "question1" },
      { type: "text_custom", name: "question2" },
    ]
  });
  expect(creator.activeTab).toEqual("designer");
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  creator.text = JSON.stringify({
    elements: [
      { type: "text", name: "question1" },
      {
        type: "matrixdynamic",
        name: "question2",
        columns: [
          { name: "col1", choices: [1, 2, 3] }
        ]
      },
    ]
  });
  expect(creator.activeTab).toEqual("designer");
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
});
test("allowModifyPages=false", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  creator.getPlugin("designer").activate();
  let designer = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.allowModifyPages).toBeTruthy();
  expect(creator.pageEditMode).toEqual("standard");
  expect(designer.showNewPage).toBeTruthy();

  let pageModel = creator.survey.pages[0];
  let pageAdornerModel = new PageAdorner(creator, pageModel);
  pageAdornerModel.select(pageAdornerModel, { stopPropagation: () => { } } as any);
  expect(pageAdornerModel.getActionById("delete").visible).toBeTruthy();

  creator = new CreatorTester({ allowModifyPages: false });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  creator.getPlugin("designer").activate();
  designer = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.allowModifyPages).toBeFalsy();
  expect(creator.pageEditMode).toEqual("standard");
  expect(designer.showNewPage).toBeFalsy();

  pageModel = creator.survey.pages[0];
  pageAdornerModel = new PageAdorner(creator, pageModel);
  pageAdornerModel.select(pageAdornerModel, { stopPropagation: () => { } } as any);
  expect(pageAdornerModel.getActionById("delete").visible).toBeFalsy();
});
test("allowModifyPages=false", (): any => {
  const creator = new CreatorTester();
  creator.survey.pages[0].delete();
  expect(creator.survey.pages).toHaveLength(0);
  const enLocale = editorLocalization.getLocale("");
  const oldPageNewName = enLocale.ed.newPageName;
  enLocale.ed.newPageName = "MyPage";
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0].name).toEqual("MyPage1");
  enLocale.ed.newPageName = oldPageNewName;
});
test("Check QuestionDropdownAdornerViewModel", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.maxVisibleChoices = 1;
  creator.JSON = {
    questions: [
      {
        type: "dropdown",
        name: "test_dropdown",
        choices: [
          "item1",
          "item2"
        ]
      },
    ],
  };
  const question: QuestionDropdownModel = <QuestionDropdownModel>(creator.survey.getAllQuestions()[0]);
  const model: QuestionDropdownAdornerViewModel = new QuestionDropdownAdornerViewModel(creator, question, null);

  expect(question.getPropertyValue("isSelectedInDesigner")).toEqual(undefined);
  expect(model.needToCollapse).toBeTruthy();

  expect(model.getRenderedItems().length).toBe(1);
  expect(model.getButtonText()).toBe("Show more");
  expect(model.isCollapseView).toBeTruthy();

  question.setPropertyValue("isSelectedInDesigner", true);
  model.switchCollapse();
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.getButtonText()).toBe("Show less");
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", false);
  expect(model.getRenderedItems().length).toBe(1);
  expect(model.getButtonText()).toBe("Show more");
  expect(model.isCollapseView).toBeTruthy();

  const propertiesFilter = property => property.name == "isSelectedInDesigner" && property.key == "dropdownCollapseChecker";
  expect(question["onPropChangeFunctions"].filter(propertiesFilter).length).toBe(1);
  model.dispose();
  expect(question["onPropChangeFunctions"].filter(propertiesFilter).length).toBe(0);
});
test("Check QuestionDropdownAdornerViewModel with unset maxVisibleChoices", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.maxVisibleChoices = -1;
  creator.JSON = {
    questions: [
      {
        type: "dropdown",
        name: "test_dropdown",
        choices: [
          "item1",
          "item2"
        ]
      },
    ],
  };
  const question: QuestionDropdownModel = <QuestionDropdownModel>(creator.survey.getAllQuestions()[0]);
  const model: QuestionDropdownAdornerViewModel = new QuestionDropdownAdornerViewModel(creator, question, null);

  expect(question.getPropertyValue("isSelectedInDesigner")).toEqual(undefined);
  expect(model.needToCollapse).toBeFalsy();
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", true);
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", false);
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();
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
test("creator.onModified, type='ELEMENT_REORDERED'", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] }]
  };
  let counter = 0, totalCounter = 0, indexFrom, indexTo;
  creator.onModified.add(function (sender, options) {
    totalCounter++;
    if (options.type === "ELEMENT_REORDERED" && options.arrayName === "choices" && options.parent.name === "q1") {
      counter++;
      indexFrom = options.indexFrom;
      indexTo = options.indexTo;
    }
  });
  const q = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");
  const item = q.choices[1];
  creator.startUndoRedoTransaction();
  q.choices.splice(1, 1);
  q.choices.splice(4, 0, item);
  creator.stopUndoRedoTransaction();
  expect(q.choices[1].value).toBe(3);
  expect(q.choices[4].value).toBe(2);
  expect(counter).toBe(1);
  expect(totalCounter).toBe(1);
  expect(indexFrom).toBe(1);
  expect(indexTo).toBe(4);
  creator.undo();
  expect(q.choices[1].value).toBe(2);
  expect(q.choices[4].value).toBe(5);
  expect(counter).toBe(2);
  expect(totalCounter).toBe(2);
  expect(indexFrom).toBe(4);
  expect(indexTo).toBe(1);
});
test("Reordering on drag&drop", (): any => {
  const creator = new CreatorTester();
  creator.JSON;
  creator.onModified.add(function (sender, options) {
    // We use the question's name to display in the UI dropdown lists so keep it up to date
    if (options.type === "PROPERTY_CHANGED" && options.name === "title" && options.newValue !== "") {
      options.target.name = options.newValue;
    }
  });

  creator.onQuestionAdded.add(function (sender, options) {
    options.question.title = "default title";
  });
  const survey = creator.survey;
  const page = survey.addNewPage("page1");
  page.addNewQuestion("text", "q1");
  expect(survey.getAllQuestions()[0].title).toBe("default title");

  creator.survey.getAllQuestions()[0].title = "new title";

  creator.undo();
  expect(creator.undoRedoManager.canRedo()).toBeTruthy();
});

test("Reason of question Added from toolbox, onclicking add question button, on duplicated question, panel, page", (): any => {
  const creator = new CreatorTester();
  const reason = [];
  creator.onQuestionAdded.add(function (sender, options) {
    reason.push(options.reason);
  });

  creator.clickToolboxItem({ type: "text" });
  expect(reason).toHaveLength(1);
  expect(reason[0]).toEqual("ADDED_FROM_TOOLBOX");

  creator.fastCopyQuestion(creator.survey.getAllQuestions()[0]);
  expect(reason).toHaveLength(2);
  expect(reason[1]).toEqual("ELEMENT_COPIED");

  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(reason).toHaveLength(3);
  expect(reason[2]).toEqual("ADDED_FROM_PAGEBUTTON");

  creator.copyPage(creator.survey.pages[0]);
  expect(reason).toHaveLength(6);
  expect(reason[3]).toEqual("ELEMENT_COPIED");
  expect(reason[4]).toEqual("ELEMENT_COPIED");
  expect(reason[5]).toEqual("ELEMENT_COPIED");

  const toolboxViwer = new ToolboxToolViewModel(creator.toolbox.items[0], creator);
  toolboxViwer.click({});
  expect(reason).toHaveLength(7);
  expect(reason[6]).toEqual("ADDED_FROM_TOOLBOX");
  creator.onDragDropItemStart();
  creator.survey.pages[0].addNewQuestion("text", "qqq1");
  expect(reason).toHaveLength(8);
  expect(reason[7]).toEqual("DROPPED_FROM_TOOLBOX");
});
test("Initial Property Grid category expanded state", (): any => {
  const creator = new CreatorTester();
  let survey: SurveyModel;
  const getCategoryName = (): string => {
    if (!survey) return "";
    const panels = survey.getAllPanels();
    for (var i = 0; i < panels.length; i++) {
      const p = <PanelModel>panels[i];
      if (p.state === "expanded") return p.name;
    }
    return "";
  };
  creator.onPropertyGridSurveyCreated.add((sender, options) => {
    survey = options.survey;
  });
  const defaultJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  expect(getCategoryName()).toBeFalsy();
  creator.survey.addNewPage("page1");
  creator.selectElement(creator.survey.getPageByName("page1"));
  expect(getCategoryName()).toEqual("general");
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(getCategoryName()).toEqual("general");
  creator.clickToolboxItem({ type: "text" });
  expect(getCategoryName()).toEqual("general");
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(getCategoryName()).toEqual("general");
  creator.JSON = {};
  expect(getCategoryName()).toBeFalsy();
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"), "visibleIf");
  (<PanelModel>(survey.getPanelByName("logic"))).collapse();
  creator.selectElement(creator.survey.getQuestionByName("q2"));
  expect(getCategoryName()).toEqual("general");
  settings.defaultNewSurveyJSON = defaultJSON;
});
test("PageAdorner: check Add new question creates property grid only once", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  creator.getPlugin("designer").activate();
  creator = new CreatorTester({ allowModifyPages: false });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };

  creator.getPlugin("designer").activate();
  let pageModel = creator.survey.pages[0];
  let pageAdornerModel = new PageAdorner(creator, pageModel);
  let log = "";
  creator.onSelectedElementChanging.add(() => {
    log += "->changed";
  });
  pageAdornerModel.addNewQuestion(null, null);
  expect(log).toBe("->changed");
});
test("getNextItemValue test", (): any => {
  let creator = new CreatorTester();
  let question = new QuestionCheckboxModel("q");
  question.choices = ["a", "b"];
  expect(creator.getNextItemValue(question)).toBe("Item 1");

  question.choices = ["a1", "a2"];
  expect(creator.getNextItemValue(question)).toBe("a3");
});
test("Update choicesFromQuestion on question name change", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "checkbox", name: "q1", choices: [1, 2, 3] },
      { type: "radiogroup", name: "q2", choicesFromQuestion: "q1" }
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q2");
  expect(q2.choicesFromQuestion).toEqual("q1");
  q1.name = "q3";
  expect(q2.choicesFromQuestion).toEqual("q3");
});
test("creator.deleteLocaleStrings", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          de: "Title de"
        }
      }
    ]
  };
  creator.survey.locale = "de";
  const q = creator.survey.getQuestionByName("question1");
  expect(q.title).toEqual("Title de");
  creator.deleteLocaleStrings("de");
  expect(q.title).toEqual("question1");
});

test("Check onGetPageActions event", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const page = <PageModel>creator.survey.currentPage;
  const pageModel = new PageAdorner(creator, page);
  let log = "";
  creator.onGetPageActions.add((_, opt) => {
    expect(opt.page).toBe(creator.survey.currentPage);
    opt.actions.push({
      title: "test",
      action: () => {
        opt.addNewQuestion("panel");
      }
    });
    log += "->fired";
  });
  expect(pageModel.footerActionsBar.actions.length).toBe(2);
  expect(pageModel.footerActionsBar.actions[1].title).toBe("test");
  //check that footerActionsBar getter fires event only once
  expect(log).toBe("->fired");
  expect(page.rows.length).toBe(1);
  pageModel.footerActionsBar.actions[1].action();
  expect(page.rows.length).toBe(2);
  expect(page.rows[1].elements[0].getType()).toBe("panel");
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
test("Change column properties, isCorrectProperty", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrixdynamic", name: "q", columns: [{ cellType: "expression", name: "col1" }] }]
  };
  let propName;
  creator.onModified.add((sender, options) => {
    propName = options.name;
  });
  const matrix = creator.survey.getQuestionByName("q");
  const column = matrix.columns[0];
  expect(creator.undoRedoManager.isCorrectProperty(column, "expression")).toBeTruthy();
  column.title = "col title";
  expect(propName).toBe("title");
  column["expression"] = "today()";
  expect(propName).toBe("expression");
});
test("Deleted object shouldn't be disposed", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q" }]
  };
  const text = creator.survey.getQuestionByName("q");
  creator.deleteElement(text);
  expect(text.isDisposed).toBeFalsy();
});
test("Remove carry-forward property on deleting a question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [
    { type: "dropdown", name: "q1", choices: ["B", "A", "D", "C"] },
    { type: "dropdown", name: "q2", choicesFromQuestion: "q1" }
  ] };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = <QuestionDropdownModel>creator.survey.getQuestionByName("q2");
  expect(q2.choicesFromQuestion).toBe("q1");
  creator.deleteElement(q1);
  expect(q2.choicesFromQuestion).toBeFalsy();
});
