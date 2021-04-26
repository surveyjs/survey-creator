import {
  Base,
  PanelModel,
  SurveyModel,
  QuestionHtmlModel,
  ElementFactory,
  QuestionTextModel,
  Serializer,
  QuestionRadiogroupModel,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
} from "survey-core";
import { CreatorBase, ICreatorOptions } from "../src/creator-base";
import { PageViewModel } from "../src/components/page";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";

export class CreatorTester extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new SurveyModel(json);
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    var name = this.selectedElement["name"];
    if (!!name) return name;
    return this.selectedElement.getType();
  }
}

test("options.questionTypes", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }],
  };
  expect(creator.selectedElementName).toEqual("survey");
  expect(creator.isElementSelected(creator.survey)).toBeTruthy();
  var question = creator.survey.getAllQuestions()[0];
  creator.selectElement(question);
  expect(creator.selectedElementName).toEqual("q1");
  expect(creator.isElementSelected(question)).toBeTruthy();
  expect(creator.isElementSelected(creator.survey)).toBeFalsy();
});
test("do not deactivate/activate tabs on selecting the active tab", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }],
  };
  expect(creator.activeTab).toEqual("designer");
  expect(creator.makeNewViewActive("test")).toBeTruthy();
  creator.activeTab = "test";
  expect(creator.makeNewViewActive("test")).toBeFalsy();
  creator.activeTab = "test";
});
test("Select new added question", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }],
  };
  expect(creator.activeTab).toEqual("designer");
  creator.survey.currentPage = creator.survey.currentPage;
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question2");
});
test("Update JSON before drag&drop", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }],
  };
  expect(creator.activeTab).toEqual("designer");
  creator.survey.currentPage = creator.survey.currentPage;
  var json: any = {
    type: "panel",
    elements: [{ type: "text", name: "question1" }],
  };
  json = creator.getJSONForNewElement(json);
  expect(json.name).toEqual("panel1");
  expect(json.type).toEqual("panel");
  expect(json.elements[0].name).toEqual("question2");
});
test("PageViewModel", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }],
  };
  expect(creator.currentPage.onPropertyChanged.isEmpty).toBeTruthy();
  var pageModel = new PageViewModel(creator, creator.survey.currentPage);
  var counter = 0;
  pageModel.onPageSelectedCallback = () => {
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

test("PagesController", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }],
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
    elements: [{ type: "text", name: "question2" }],
  };
  expect(counter).toEqual(3);
});
test("PageNavigatorViewModel", () => {
  var creator = new CreatorTester();
  var model = new PageNavigatorViewModel(creator.pagesController);
  expect(model.items).toHaveLength(1);
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "text", name: "question1" }],
      },
      {
        elements: [{ type: "text", name: "question2" }],
      },
    ],
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

test("SelectionHistoryController: Go to next/prev", () => {
  var creator = new CreatorTester();
  creator.JSON = {
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
test("SelectionHistoryController: Reset history on changing survey", () => {
  var json = {
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
test("SelectionHistoryController: Update history on deleting elements", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "matrixdynamic",
            name: "question2",
            columns: [{ name: "col1" }, { name: "col2" }],
          },
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question3" }],
          },
        ],
      },
      {
        name: "page2",
      },
    ],
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
test("Update expressions on deleting a question", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        visibleIf: "{question2} = 1",
      },
      {
        type: "text",
        name: "question2",
      },
    ],
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(creator.survey.getQuestionByName("question2"));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
test("Update expressions on deleting a panel with questions", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        visibleIf: "{question2} = 1",
      },
      {
        type: "panel",
        name: "panel1",
        elements: [{ type: "text", name: "question2" }],
      },
    ],
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(<Base>(<any>creator.survey.getPanelByName("panel1")));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
test("Update expressions on deleting a page with questions", () => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            visibleIf: "{question2} = 1",
          },
        ],
      },
      {
        name: "page2",
        elements: [
          {
            type: "panel",
            name: "panel1",
            elements: [{ type: "text", name: "question2" }],
          },
        ],
      },
    ],
  };
  expect(creator.survey.getQuestionByName("question1").visibleIf).toEqual(
    "{question2} = 1"
  );
  creator.deleteElement(<Base>(<any>creator.survey.getPageByName("page2")));
  expect(creator.survey.getQuestionByName("question1").visibleIf).toBeFalsy();
});
