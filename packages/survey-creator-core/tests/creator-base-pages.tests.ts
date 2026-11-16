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
  PageModel,
  ComputedUpdater,
  PopupDropdownViewModel,
  Question,
  SurveyElement,
} from "survey-core";
import { PageAdorner } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";
import { QuestionImageAdornerViewModel } from "../src/components/question-image";
import { QuestionDropdownAdornerViewModel } from "../src/components/question-dropdown";
import { SurveyElementAdornerBase } from "../src/components/survey-element-adorner-base";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TabLogicPlugin } from "../src/components/tabs/logic-plugin";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabJsonEditorAcePlugin } from "../src/components/tabs/json-editor-ace";
import { getRowWrapperComponentData, getRowWrapperComponentName, isTextInput } from "../src/creator-base";
import { ItemValueWrapperViewModel } from "../src/components/item-value";

import {
  getElementWrapperComponentData,
  getElementWrapperComponentName,
  getQuestionContentWrapperComponentName,
  isStringEditable
} from "../src/creator-base";
import { SurveyHelper } from "../src/survey-helper";
import { CreatorTester } from "./creator-tester";
import { EditorLocalization, editorLocalization } from "../src/editorLocalization";
import { ICreatorPlugin, settings } from "../src/creator-settings";
import { PropertyGridEditorCollection } from "../src/property-grid/index";
import { PropertyGridEditorMatrixItemValues } from "../src/property-grid/matrices";
// The named import above is unused in this file, so the transform drops it. This keeps the matrix
// property grid editors registered, as they were before creator-base-1.tests.ts was split.
import "../src/property-grid/matrices";
import { ObjectSelector } from "../src/property-grid/object-selector";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { ConfigureTablePropertyEditorEvent } from "../src/creator-events-api";
import { IQuestionToolboxItem } from "../src/toolbox";

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
  expect(creator.switchTab("preview")).toBeTruthy();
  creator.activeTab = "preview";
  expect(creator.switchTab("preview")).toBeFalsy();
  creator.activeTab = "preview";
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
class PageAdornerTester extends PageAdorner {
  public onPageSelectedCallback: () => void;
  public onPageSelected(): void {
    super.onPageSelected();
    this.onPageSelectedCallback && this.onPageSelectedCallback();
  }
}
test("PageAdorner and selection", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const getSubscriptions = () => (creator.currentPage as any).onPropChangeFunctions.filter(f => f.name == "isSelectedInDesigner");
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
  expect(getSubscriptions().length == 0).toBeTruthy();
  const pageModel = new PageAdornerTester(creator, creator.survey.currentPage);
  let counter = 0;
  pageModel.onPageSelectedCallback = (): any => {
    counter++;
  };
  // expect(creator.currentPage.onPropertyChanged.isEmpty).toBeFalsy();
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
  expect(getSubscriptions().length == 0).toBeFalsy();
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
  expect(getSubscriptions().length == 0).toBeTruthy();
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
  pageAdorner.isGhost = true;
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(2);
  creator.survey.pages[1].elements[0].delete();
  expect(creator.survey.pages).toHaveLength(1);

  pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  pageAdorner.isGhost = true;
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(creator.survey.pages).toHaveLength(2);

  pageAdorner = new PageAdorner(creator, desigerTab.newPage);
  pageAdorner.isGhost = true;
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
  pageAdorner.isGhost = true;
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
  creator.JSON = { pages: [{ name: "page1" }] };
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
  expect(model.popupModel.focusFirstInputSelector).toEqual(".sd-menu-item--selected");
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
  creator.JSON = { pages: [{ name: "page1" }] };
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
  creator.JSON = { pages: [{ name: "page1" }] };
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
  creator.JSON = { pages: [{ name: "page1" }] };
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
  expect(model.items).toHaveLength(3);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
  expect(model.items[2].active).toBeFalsy();
  expect(model.currentPage).not.toEqual(desigerTab.newPage);

  creator.addPage(desigerTab.newPage);
  expect(model.items).toHaveLength(4);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeFalsy();
  expect(model.items[2].active).toBeTruthy();
  expect(model.items[3].active).toBeFalsy();
  expect(model.currentPage).toEqual(pages[2]);
  expect(model.items[3].data).toEqual(desigerTab.newPage);
});
test("PageNavigatorViewModel bypage mode - create new page on selected ghost page, Bug#7053", (): any => {
  const creator = new CreatorTester({ pageEditMode: "bypage" });
  creator.JSON = { pages: [{ name: "page1" }] };
  expect(creator.survey.pages).toHaveLength(1);
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;
  const model = new PageNavigatorViewModel(pagesController, "bypage");
  expect(model.items).toHaveLength(2);
  let act = model.items[1].action;
  act && act();
  expect(creator.survey.pages).toHaveLength(2);
  expect(creator.selectedElementName).toEqual("page2");
  expect(model.items).toHaveLength(3);
  expect(model.items[0].active).toBeFalsy();
  expect(model.items[1].active).toBeTruthy();
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
test("Clear trigger references (setToName, fromName, gotoName) when referenced question is deleted, Bug#7661", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [
          { type: "boolean", name: "question1" },
          { type: "boolean", name: "question2" },
          { type: "dropdown", name: "question3", choices: ["Item 1", "Item 2"] }
        ]
      }
    ],
    triggers: [
      { type: "setvalue", expression: "{question1} = true", setToName: "question3", setValue: "Item 1" },
      { type: "setvalue", expression: "{question2} = false", setToName: "question3", setValue: "Item 2" },
      { type: "setvalue", expression: "{question1} = true", setToName: "question2", setValue: true },
      { type: "copyvalue", expression: "{question1} = true", setToName: "question2", fromName: "question3" },
      { type: "copyvalue", expression: "{question1} = true", setToName: "question3", fromName: "question2" },
      { type: "skip", expression: "{question1} = true", gotoName: "question3" },
      { type: "skip", expression: "{question2} = true", gotoName: "question2" }
    ]
  };
  creator.deleteElement(creator.survey.getQuestionByName("question3"));
  expect(creator.survey.triggers).toHaveLength(7);
  expect((<any>creator.survey.triggers[0]).setToName).toBeFalsy();
  expect((<any>creator.survey.triggers[1]).setToName).toBeFalsy();
  expect((<any>creator.survey.triggers[2]).setToName).toBe("question2");
  expect((<any>creator.survey.triggers[3]).setToName).toBe("question2");
  expect((<any>creator.survey.triggers[3]).fromName).toBeFalsy();
  expect((<any>creator.survey.triggers[4]).setToName).toBeFalsy();
  expect((<any>creator.survey.triggers[4]).fromName).toBe("question2");
  expect((<any>creator.survey.triggers[5]).gotoName).toBeFalsy();
  expect((<any>creator.survey.triggers[6]).gotoName).toBe("question2");
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

  let designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  expect(creator.survey.pages).toHaveLength(1);
  designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.survey.pages[0].addNewQuestion("text", "question1");
  creator.survey.addNewPage("page2");
  expect(creator.survey.pages).toHaveLength(2);
  designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  creator.survey.pages[1].addNewQuestion("text", "question2");
  creator.survey.pages[1].title = "New page";
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage.name).toBe("page3");

  creator.survey.pages[1].elements[0].delete();
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage.name).toBe("page3");

  creator.survey.pages[1].delete();
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage.name).toBe("page2");

  creator.survey.addNewPage("page3");
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();
});
test("Create new page with empty survey", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
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
test("Ghost page always should be visible", (): any => {
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  creator.survey.pages.splice(0, 1);
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();

  creator.addPage();
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
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
  pageModel.isGhost = true;
  designerPlugin.model.newPage.title = "Some title";
  pageModel.isGhost = false;
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(designerPlugin.model.showNewPage).toBeTruthy();

  pageModel = new PageAdorner(creator, creator.survey.pages[1]);
  pageModel.page.description = "Some text";
  expect(creator.survey.pages).toHaveLength(2);

  creator.survey.pages[1].addNewQuestion("text", "q2");
  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
  expect(designerPlugin.model.newPage).toBeTruthy();
  designerPlugin.model.newPage.description = "Some description";
  pageModel.isGhost = false;
  expect(creator.survey.pages).toHaveLength(3);
  expect(designerPlugin.model.showNewPage).toBeTruthy();
  expect(designerPlugin.model.newPage).toBeTruthy();
});
test("Create new page on changing title/description in ghost & creator.onModified", (): any => {
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
  const newPage = designerPlugin.model.newPage;
  let pageModel = new PageAdorner(creator, newPage);
  pageModel.isGhost = true;
  newPage.title = "Some title";
  pageModel.isGhost = false;
  const logs = new Array<any>();
  creator.onModified.add((sender, options) => {
    logs.push({ type: options.type, name: options.name });
  });
  newPage.description = "desc1";
  newPage.title = "title1";
  expect(logs).toStrictEqual([
    {
      type: "PROPERTY_CHANGED",
      name: "description"
    },
    {
      type: "PROPERTY_CHANGED",
      name: "title"
    }
  ]);
});
test("Don't add extra subscriptions and fully unsubscribe title/description changes in ghost page", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  designerPlugin.model.newPage.unRegisterFunctionOnPropertiesValueChanged(["title"]);
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();
  let pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
  const getTitleSubscriptions = () => designerPlugin.model.newPage["onPropChangeFunctions"].filter(f => f.name === "title" && f.key === "add_ghost");
  expect(getTitleSubscriptions().length).toBe(1);
  pageModel["attachElement"](designerPlugin.model.newPage);
  expect(getTitleSubscriptions().length).toBe(1);
  pageModel["detachElement"](designerPlugin.model.newPage);
  expect(getTitleSubscriptions().length).toBe(0);
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
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  expect(creator.survey.pages).toHaveLength(1);
  expect(designerPlugin.model.newPage).toBeTruthy();

  let currentNewPage = designerPlugin.model.newPage;
  const pageWrapperViewModel = new PageAdorner(creator, currentNewPage);
  pageWrapperViewModel.isGhost = true;
  expect(pageWrapperViewModel.showPlaceholder).toBeFalsy();

  designerPlugin.model.newPage.title = "Some title";
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeTruthy();
  pageWrapperViewModel.isGhost = false;
  expect(pageWrapperViewModel.showPlaceholder).toBeTruthy();

  pageWrapperViewModel.addNewQuestion(null, undefined);
  expect(designerPlugin.model.newPage).toBeTruthy();
  expect(pageWrapperViewModel.showPlaceholder).toBeFalsy();
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
  pageWrapperViewModel.isGhost = true;

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
  pageWrapperViewModel.isGhost = true;
  expect(pageWrapperViewModel.isGhost).toBeTruthy();

  creator.survey.startMovingQuestion();
  question2.delete();
  const question3 = new QuestionTextModel("q1");
  creator.survey.pages[0].elements.push(question3);
  creator.survey.stopMovingQuestion();
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.pages).toHaveLength(2);
  expect(designerPlugin.model.newPage).toBeTruthy();
});
test("Create new page, set empty JSON", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {};
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
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
  expect(creator.survey.pages).toHaveLength(0);
  expect(designerPlugin.model.newPage).toBeTruthy();
});

test("Check survey settings button ", (): any => {
  const creator = new CreatorTester();
  const item = creator.getActionBarItem("svd-settings");
  expect(item.active).toBeFalsy();
  creator.selectElement(creator.survey.pages[0]);
  expect(item.active).toBeFalsy();
  creator.selectElement(creator.survey);
  expect(item.active).toBeTruthy();
});

test("fast copy tests, copy a question and check the index", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2", startWithNewLine: false },
      { type: "text", name: "question3" }
    ], showQuestionNumbers: true
  };
  creator.copyQuestion(creator.survey.getQuestionByName("question1"));
  expect(creator.survey.pages[0].questions).toHaveLength(4);
  const question = creator.survey.getQuestionByName("question4");
  expect(question.startWithNewLine).toBeFalsy();
});
test("fast copy tests, copy a question and check the index", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" }
    ], showQuestionNumbers: true
  };
  creator.copyQuestion(creator.survey.getQuestionByName("question1"));
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
  creator.copyQuestion(creator.survey.getQuestionByName("question1").template.elements[0]);
  expect(creator.survey.pages[0].questions).toHaveLength(1);
  expect(creator.survey.getQuestionByName("question3")).toBeTruthy();
  expect(creator.survey.getQuestionByName("question1").template.elements.length).toEqual(2);
  expect(creator.survey.getQuestionByName("question1").template.elements[1].name).toEqual("question3");
});
test("fast copy tests, fastCopyQuestion method (obsolete)", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" }
    ], showQuestionNumbers: true
  };
  creator.fastCopyQuestion(creator.survey.getQuestionByName("question1"));
  expect(creator.survey.pages[0].questions).toHaveLength(4);
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
test("Page duplicate, the new created page should be selected and styled as selected, Bug#7846", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      }
    ]
  };
  expect(creator.survey.pages).toHaveLength(1);
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  creator.selectElement(creator.survey.pages[0]);

  const action = creator.getActionBarItemByActions(
    pageModel.actionContainer.actions,
    "duplicate"
  );
  action.action();

  expect(creator.survey.pages).toHaveLength(2);
  const newPage = creator.survey.pages[1];
  expect(creator.selectedElementName).toEqual(newPage.name);

  const newPageModel = new PageAdorner(creator, newPage);
  expect(newPageModel.isSelected).toBeTruthy();
  expect(newPageModel.css).toContain("svc-page__content--selected");
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
  pageModelNew.isGhost = true;
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
  creator.expandCollapseButtonVisibility = "never";
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  const pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
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
  const questionName = creator.sidebar.getPageById("propertyGrid").componentData.survey.getQuestionByName("name");
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
  const showProp = (className: string, propName: string): boolean => {
    const prop = Serializer.findProperty(className, propName);
    return creator.onCanShowPropertyCallback(undefined, prop, "", undefined, <any>undefined);
  };
  expect(showProp("survey", "pages")).toBeTruthy();
  expect(showProp("question", "page")).toBeTruthy();
  expect(showProp("panel", "page")).toBeTruthy();
  creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { elements: [{ type: "text", name: "question1" }] };
  expect(creator.pageEditMode).toEqual("single");
  expect(showProp("survey", "pages")).toBeFalsy();
  expect(showProp("question", "page")).toBeFalsy();
  expect(showProp("panel", "page")).toBeFalsy();
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model.showNewPage).toBeFalsy();
  expect(designerPlugin.model.newPage).toBeFalsy();
});
test("Check page actions for pageEditMode is 'single'", (): any => {
  const creator = new CreatorTester({ pageEditMode: "single" });
  creator.expandCollapseButtonVisibility = "never";
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
  expect(el.choices[0].text).toEqual("Item 1");
});
test("Convert radiogroup question into dropdown, onQuestionCoverting", (): any => {
  var creator = new CreatorTester();
  let objJSON: any = undefined;
  creator.onQuestionConverting.add((sender, options) => {
    options.json = objJSON;
  });
  const json = { elements: [{ type: "radiogroup", name: "q1", choices: [1, 2, 3, 4] }] };
  creator.JSON = json;
  creator.selectQuestionByName("q1");
  creator.convertCurrentQuestion("dropdown");
  var el = <QuestionDropdownModel>creator.selectedElement;
  expect(el.getType()).toEqual("dropdown");
  expect(el.choices).toHaveLength(3);
  expect(el.choices[0].value).toEqual("item1");

  objJSON = { choices: [5, 6] };
  creator.JSON = json;
  creator.selectQuestionByName("q1");
  creator.convertCurrentQuestion("dropdown");
  var el = <QuestionDropdownModel>creator.selectedElement;
  expect(el.getType()).toEqual("dropdown");
  expect(el.choices).toHaveLength(2);
  expect(el.choices[0].value).toBe(5);

  objJSON = {};
  creator.JSON = json;
  creator.selectQuestionByName("q1");
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
  expect(el.columns[0].value).toEqual("column1");
  expect(el.columns[0].text).toEqual("Column 1");
  expect(el.rows).toHaveLength(2);
  expect(el.rows[0].value).toEqual("row1");
  expect(el.rows[0].text).toEqual("Row 1");
});
test("Add panel after converting a panel into html generates a unique name, Bug#7793", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "panel", name: "panel1" },
      { type: "panel", name: "panel2" },
      { type: "panel", name: "panel3" }
    ]
  };
  creator.selectElement(creator.survey.getPanelByName("panel3"));
  creator.convertCurrentQuestion("html");
  const htmlQuestion = <Question>creator.selectedElement;
  expect(htmlQuestion.getType()).toEqual("html");
  expect(htmlQuestion.name).toEqual("panel3");

  creator.clickToolboxItem({ type: "panel" });
  const panels = creator.survey.getAllPanels();
  expect(panels).toHaveLength(3);
  expect(panels[2].name).toEqual("panel4");
});
test("Question type selector", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);
  expect(creator.addNewQuestionText).toEqual("Add Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel = selectorModel.popupModel.contentComponentData.model;
  const actionPopupViewModel = new PopupDropdownViewModel(selectorModel.popupModel); // need for popupModel.onShow
  selectorModel.popupModel.show();
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
  surveySettings.animationEnabled = false;
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
  const listModel: ListModel = selectorModel.popupModel.contentComponentData.model;
  selectorModel.popupModel.show();
  const actionPopupViewModel = new PopupDropdownViewModel(selectorModel.popupModel); // need for popupModel.onShow
  selectorModel.popupModel.show();
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
  surveySettings.animationEnabled = false;
  const locStrings = editorLocalization.getLocale("");
  const oldAddNewQuestion = locStrings.ed.addNewQuestion;
  const oldAddNewTypeQuestion = locStrings.ed.addNewTypeQuestion;
  locStrings.ed.addNewQuestion = "Add New Question";
  locStrings.ed.addNewTypeQuestion = "Add New {0}";
  const creator = new CreatorTester();
  const survey: SurveyModel = creator.survey;
  expect(creator.addNewQuestionText).toEqual("Add New Question");
  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel = selectorModel.popupModel.contentComponentData.model;
  const actionPopupViewModel = new PopupDropdownViewModel(selectorModel.popupModel); // need for popupModel.onShow
  selectorModel.popupModel.show();
  const ratingItem = listModel.actions.filter((item) => item.id == "rating")[0];
  listModel.onItemClick(ratingItem);
  expect(creator.addNewQuestionText).toEqual("Add New Rating Scale");
  locStrings.ed.addNewQuestion = oldAddNewQuestion;
  locStrings.ed.addNewTypeQuestion = oldAddNewTypeQuestion;
});

test("Question type selector popup displayMode", (): any => {
  let creator = new CreatorTester();
  let selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  expect(selectorModel.popupModel.displayMode).toBe("popup");
  creator.isTouch = true;
  selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  expect(selectorModel.popupModel.displayMode).toBe("overlay");
});

test("Question type selector with custom toolbox item", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  const customToolboxItem = <IQuestionToolboxItem>{
    "id": "panel1",
    "name": "panel1",
    "iconName": "icon-panel",
    "className": "",
    "title": "",
    "json": {
      "type": "panel",
      "name": "panel1",
      "elements": [{ "type": "text", "name": "question1" }],
    },
    "isCopied": false,
    "isUsed": true,
    "isStandard": false,
    "category": "Custom Questions"
  };
  creator.toolbox.addItem(customToolboxItem);

  const survey: SurveyModel = creator.survey;
  expect(survey.getAllQuestions().length).toEqual(0);

  const selectorModel = creator.getQuestionTypeSelectorModel(() => { });
  const listModel: ListModel = selectorModel.popupModel.contentComponentData.model;
  const actionPopupViewModel = new PopupDropdownViewModel(selectorModel.popupModel); // need for popupModel.onShow
  selectorModel.popupModel.show();
  const customItem = listModel.actions.filter((item) => item.id == "panel1")[0];
  listModel.onItemClick(customItem);
  expect(survey.getAllPanels().length).toEqual(1);
  expect(survey.getAllPanels()[0].getType()).toEqual("panel");

  const newQ = survey.getAllPanels()[0];
  expect(newQ.elements.length).toEqual(1);
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
test("getElementWrapperComponentName for cells for component and for matrices", (): any => {
  ComponentCollection
    .Instance
    .add(<any>{
      name: "matrix_comp",
      questionJSON: {
        "type": "matrixdropdown",
        "name": "question",
        "rows": ["row1"],
        "columns": [
          { name: "col1", cellType: "dropdown" }
        ]
      }
    });
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrix_comp", name: "q1" },
      {
        "type": "matrixdropdown",
        "name": "q2",
        "rows": ["row1"],
        "columns": [
          { name: "col1", cellType: "dropdown" }
        ]
      },
      {
        type: "paneldynamic", name: "panel1",
        templateElements: [
          {
            "type": "matrixdropdown",
            "name": "q3",
            "rows": ["row1"],
            "columns": [
              { name: "col1", cellType: "dropdown" }
            ]
          }
        ]
      }
    ]
  };
  const table1 = creator.survey.getQuestionByName("q1").contentQuestion.renderedTable;
  const table2 = creator.survey.getQuestionByName("q2").renderedTable;
  const table3 = creator.survey.getQuestionByName("panel1").panels[0].getQuestionByName("q3").renderedTable;
  expect(table1.headerRow.cells).toHaveLength(2);
  expect(table2.headerRow.cells).toHaveLength(2);
  expect(table1.rows).toHaveLength(2);
  expect(table2.rows).toHaveLength(2);
  expect(table1.rows[0].cells).toHaveLength(2);
  expect(table2.rows[0].cells).toHaveLength(2);

  expect(getElementWrapperComponentName(table2.headerRow.cells[1], "row-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table2.headerRow.cells[1], "row-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table2.rows[1].cells[0], "row-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table2.rows[1].cells[0], "row-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table2.rows[1].cells[1], "cell", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table2.rows[1].cells[1], "cell", true)).toEqual("svc-matrix-cell");

  expect(getElementWrapperComponentName(table1.headerRow.cells[1], "row-header", false)).toBeFalsy();
  expect(getElementWrapperComponentName(table1.headerRow.cells[1], "row-header", true)).toBeFalsy();
  expect(getElementWrapperComponentName(table1.rows[1].cells[0], "row-header", false)).toBeFalsy();
  expect(getElementWrapperComponentName(table1.rows[1].cells[0], "row-header", true)).toBeFalsy();
  expect(getElementWrapperComponentName(table1.rows[1].cells[1], "cell", false)).toBeFalsy();
  expect(getElementWrapperComponentName(table1.rows[1].cells[1], "cell", true)).toBeFalsy();

  expect(getElementWrapperComponentName(table3.headerRow.cells[1], "row-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table3.headerRow.cells[1], "row-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table3.rows[1].cells[0], "row-header", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table3.rows[1].cells[0], "row-header", true)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table3.rows[1].cells[1], "cell", false)).toEqual("svc-matrix-cell");
  expect(getElementWrapperComponentName(table3.rows[1].cells[1], "cell", true)).toEqual("svc-matrix-cell");

  ComponentCollection.Instance.remove("matrix_comp");
});
test("isStringEditable for cells for component and for matrices", (): any => {
  ComponentCollection
    .Instance
    .add(<any>{
      name: "matrix_comp",
      questionJSON: {
        "type": "matrixdropdown",
        "name": "question",
        "rows": ["row1"],
        "columns": [
          { name: "col1", cellType: "dropdown" }
        ]
      }
    });
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrix_comp", name: "q1" },
      {
        "type": "matrixdropdown",
        "name": "q2",
        "rows": ["row1"],
        "columns": [
          { name: "col1", cellType: "dropdown" }
        ]
      },
      {
        type: "paneldynamic", name: "panel1",
        templateElements: [
          {
            "type": "matrixdropdown",
            "name": "q3",
            "rows": ["row1"],
            "columns": [
              { name: "col1", cellType: "dropdown" }
            ]
          }
        ]
      }
    ]
  };
  const table1 = creator.survey.getQuestionByName("q1").contentQuestion.renderedTable;
  const table2 = creator.survey.getQuestionByName("q2").renderedTable;
  const table3 = creator.survey.getQuestionByName("panel1").panels[0].getQuestionByName("q3").renderedTable;

  const titleOwner1 = table1.headerRow.cells[1].locTitle.owner;
  const titleOwner2 = table2.headerRow.cells[1].locTitle.owner;
  const titleOwner3 = table3.headerRow.cells[1].locTitle.owner;
  expect(titleOwner1.isQuestion).toBeTruthy();
  expect(titleOwner2.isQuestion).toBeTruthy();
  expect(titleOwner2.isQuestion).toBeTruthy();
  expect(isStringEditable(titleOwner1, "title")).toBeFalsy();
  expect(isStringEditable(titleOwner2, "title")).toBeTruthy();
  expect(isStringEditable(titleOwner3, "title")).toBeTruthy();

  ComponentCollection.Instance.remove("matrix_comp");
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
  const survey = creator.createSurvey({ elements: [{ type: "test", name: "q1" }] });
  const qCustom = <QuestionCompositeModel>survey.getAllQuestions()[0];
  const q = qCustom.contentPanel.questions[0];
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
          },
          {
            type: "panel",
            name: "panel4",
            title: "Panel",
            elements: [{ "type": "text", "name": "question5" }],
          },
        ]
      }
    });
  const creator = new CreatorTester();
  const survey = creator.createSurvey({
    elements: [{
      "type": "mypanel",
      "name": "question1"
    }]
  }, "");
  const qCustom = <QuestionCustomModel>survey.getAllQuestions()[0];
  const q = <QuestionPanelDynamicModel>qCustom.contentQuestion;
  expect(q.name).toBe("myPanel1");

  const panel = q.panels[0] as PanelModel;
  const question = panel.questions[0] as QuestionTextModel;
  const innerPanel = panel.elements[1] as PanelModel;

  expect(getElementWrapperComponentName(qCustom, "", false)).toEqual("svc-question");
  expect(getElementWrapperComponentName(q, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName(panel, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName(question, "", false)).toEqual(undefined);
  expect(getElementWrapperComponentName(innerPanel, "", false)).toEqual(undefined);
  expect(panel.rows.length).toEqual(2);
  expect(getElementWrapperComponentName(panel.rows[0], "", false)).toEqual(undefined);
  expect(getRowWrapperComponentName(panel.rows[0])).toEqual(undefined);
  expect(getRowWrapperComponentData(panel.rows[0], creator)).toEqual(null);
  expect(innerPanel.rows.length).toEqual(1);
  expect(getElementWrapperComponentName(innerPanel.rows[0], "", false)).toEqual(undefined);
  expect(getRowWrapperComponentName(innerPanel.rows[0])).toEqual(undefined);
  expect(getRowWrapperComponentData(innerPanel.rows[0], creator)).toEqual(null);
  ComponentCollection.Instance.clear();
});

test("Test plug-ins in creator", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true
  });
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  const testPlugin = <TabTestPlugin>creator.getPlugin("preview");
  expect(testPlugin.model).toBeFalsy();
  creator.switchTab("test");
  expect(designerPlugin.model).toBeFalsy();
  expect(testPlugin.model).toBeTruthy();
  const logicPlugin = <TabLogicPlugin>creator.getPlugin("logic");
  const translationPlugin = <TabTranslationPlugin>(
    creator.getPlugin("translation")
  );
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeFalsy();

  creator.switchTab("logic");
  expect(testPlugin.model).toBeFalsy();
  expect(logicPlugin.model).toBeTruthy();
  creator.switchTab("translation");
  expect(logicPlugin.model).toBeFalsy();
  expect(translationPlugin.model).toBeTruthy();
  creator.switchTab("embed");
  expect(translationPlugin.model).toBeFalsy();
  creator.switchTab("designer");
  expect(designerPlugin.model).toBeTruthy();
});
test("Test plug-ins JSON-Text in creator", (): any => {
  const creator = new CreatorTester();
  expect(creator.viewType).toEqual("designer");
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  expect(designerPlugin.model).toBeTruthy();
  const textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  expect(textPlugin.model).toBeFalsy();
  creator.switchTab("json");
  expect(textPlugin.model).toBeTruthy();
  expect(designerPlugin.model).toBeFalsy();
  creator.switchTab("designer");
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
  creator.autoSaveEnabled = true;
  let counter = 0;
  let changedType;
  creator.onModified.add((sender, options) => {
    counter++;
    changedType = options.type;
  });
  expect(creator.viewType).toEqual("designer");
  const textPlugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  expect(textPlugin.model).toBeFalsy();
  creator.switchTab("json");
  expect(textPlugin.model).toBeTruthy();
  creator.switchTab("designer");
  expect(counter).toEqual(0);
  creator.switchTab("json");
  json.pages[0].elements[0].name = "question1";
  textPlugin.model.text = JSON.stringify(json);
  textPlugin.model.isJSONChanged = true;
  creator.switchTab("designer");
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
  const textPlugin = <TabJsonEditorAcePlugin>creator.getPlugin("json");
  expect(textPlugin.model).toBeFalsy();
  creator.switchTab("json");
  expect(textPlugin.model).toBeTruthy();
  expect(designerPlugin.model).toBeFalsy();
  creator.switchTab("designer");
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

  creator.switchTab("one");
  expect(result).toBe("one-activate");

  creator.switchTab("two");
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

  const hidePropertyModelBarItem = creator.sidebar.header.toolbar.actions.filter(item => { return item.id === "svd-grid-hide"; })[0];
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

  const hidePropertyModelBarItem = creator.sidebar.header.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];
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
  const hidePropertyModelBarItem = creator.sidebar.header.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];
  expect(hidePropertyModelBarItem).toBeTruthy();
  hidePropertyModelBarItem.action();
  expect(creator.showSidebar).toBeFalsy();
  expect(creator.sidebar.visible).toBeFalsy();
  expect(creator.sidebar.collapsedManually).toBeTruthy();
  expect(creator.sidebar.expandedManually).toBeFalsy();
});
test("set showSidebar in init and check manual flags", (): any => {
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

  creator.showSidebar = true;
  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.collapsedManually).toBeFalsy();
  expect(creator.sidebar.expandedManually).toBeTruthy();
});
test("Show/hide property grid by collapse/expand actions", (): any => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
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
  const hidePropertyModelBarItem = creator.sidebar.header.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];

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
  creator.propertyGridNavigationMode = "accordion";
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
  const hidePropertyModelBarItem = creator.sidebar.header.toolbar.actions.filter((item) => { return item.id === "svd-grid-hide"; })[0];

  expect(creator.showSidebar).toBeTruthy();
  expect(creator.sidebar.visible).toBeTruthy();
  expect(hidePropertyModelBarItem).toBeTruthy();
  expect(hidePropertyModelBarItem.visible).toBeFalsy();
  creator.sidebar.flyoutMode = true;
  expect(hidePropertyModelBarItem.visible).toBeTruthy();
});

test("Check property grid expand action is always last", (): any => {
  const creator = new CreatorTester({ propertyGridNavigationMode: "accordion" });
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

  creator.setShowSidebar(false);
  creator.toolbar.flushUpdates();
  const index = creator.toolbar.renderedActions.length - 1;
  expect(creator.toolbar.renderedActions[index].id).toEqual("svd-grid-expand");
  creator.toolbarItems.push(new Action({
    id: "test-action",
    visible: true,
    title: "Test action",
    action: function () { }
  }));
  creator.toolbar.flushUpdates();
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
test("deleteCurrentElement should not crash when survey is selected, Bug#7724", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  creator.selectElement(creator.survey.pages[0]);
  creator.deleteCurrentElement();
  creator.deleteCurrentElement();
  expect(creator.selectedElementName).toEqual("survey");
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
    if (options.element.isPage) {
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
    if (options.element.isPage) {
      page = options.element;
    } else {
      page = options.element.page;
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
test("PageAdorner and onElementAllowOperations, allowExpandCollapse", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "onhover";
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
  creator.onElementAllowOperations.add((sender, options) => {
    options.allowExpandCollapse = (options.element as SurveyElement).name == "page2";
  });
  const pageModel1 = new PageAdorner(creator, creator.survey.pages[0]);
  const pageModel2 = new PageAdorner(creator, creator.survey.pages[1]);
  expect(pageModel1.topActionContainer.getActionById("collapse").visible).toBeFalsy();
  expect(pageModel2.topActionContainer.getActionById("collapse").visible).toBeTruthy();
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
  pageModel.isGhost = true;
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
    if (options.element.isQuestion) {
      options.allowChangeType = options.element.getType() !== "comment";
      options.allowChangeRequired = options.element.getType() !== "text";
      options.allowChangeInputType = options.element.name !== "q1";
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

test("QuestionAdornerViewModel and onElementAllowOperations, allowExpandCollapse", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "onhover";
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  creator.survey.addNewPage("page2");
  creator.onElementAllowOperations.add((sender, options) => {
    options.allowExpandCollapse = (options.element as Question).name === "q1";
  });
  const q1Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[0], undefined);
  const q2Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[1], undefined);

  expect(q1Model.topActionContainer.getActionById("collapse").visible).toBeTruthy();
  expect(q2Model.topActionContainer.getActionById("collapse").visible).toBeFalsy();
});

test("QuestionAdornerViewModel actionContainer&topActionContainer on demand", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "onhover";
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  };
  let counter = 0;
  creator.onElementAllowOperations.add((sender, options) => {
    counter++;
  });
  const q1Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[0], undefined);
  expect(q1Model["actionContainerValue"]).toBeFalsy();
  expect(q1Model["topActionContainerValue"]).toBeFalsy();
  expect(q1Model.topActionContainer).toBeTruthy();
  expect(q1Model["actionContainerValue"]).toBeFalsy();
  expect(q1Model["topActionContainerValue"]).toBeTruthy();
  expect(q1Model.actionContainer).toBeTruthy();
  expect(q1Model["actionContainerValue"]).toBeTruthy();
  expect(q1Model["topActionContainerValue"]).toBeTruthy();

  const q2Model = new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[1], undefined);
  expect(q2Model["actionContainerValue"]).toBeFalsy();
  expect(q2Model["topActionContainerValue"]).toBeFalsy();
  expect(q2Model.actionContainer).toBeTruthy();
  expect(q2Model["actionContainerValue"]).toBeTruthy();
  expect(q2Model["topActionContainerValue"]).toBeFalsy();
  expect(q2Model.topActionContainer).toBeTruthy();
  expect(q2Model["actionContainerValue"]).toBeTruthy();
  expect(q2Model["topActionContainerValue"]).toBeTruthy();
  expect(counter).toEqual(2);
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
    if (options.element.isQuestion) {
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
