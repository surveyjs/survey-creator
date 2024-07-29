import {
  PanelModel,
  QuestionHtmlModel,
  ElementFactory,
  QuestionTextModel,
  Serializer,
  QuestionRadiogroupModel,
  QuestionMatrixDynamicModel,
  settings,
  SurveyModel,
  PopupModel,
  QuestionCheckboxModel,
  QuestionImageModel,
  Question,
  PageModel,
  ItemValue,
  QuestionPanelDynamicModel
} from "survey-core";
import { getNextValue, getNextItemText } from "../src/utils/utils";
import { editorLocalization } from "../src/editorLocalization";
import { ConditionEditor } from "../src/property-grid/condition-survey";
import { CreatorTester } from "./creator-tester";
export { PropertyGridEditorMatrix } from "../src/property-grid/matrices";
import { PropertyGridViewModel } from "../src/property-grid/property-grid-view-model";
import { ObjectSelectorModel } from "../src/property-grid/object-selector";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { QuestionAdornerViewModel } from "../src/components/question";
import { PagesController } from "../src/pages-controller";
import { settings as creatorSettings } from "../src/creator-settings";

export * from "../src/components/link-value";

settings.supportCreatorV2 = true;

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
              { value: 3, text: "third value" }
            ],
            type: "checkbox"
          }
        ]
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix"
          },
          { name: "question5", type: "rating" }
        ]
      }
    ]
  };
}
test("getNextValue", () => {
  const prefix = "item";
  expect(getNextValue(prefix, ["item4", "item5", "item3"])).toEqual("item6");
  expect(getNextValue(prefix, ["item1", "item5", "itemzzz", "zzz", 1])).toEqual(
    2
  );
  expect(getNextValue(prefix, ["item1", "item2", "item3"])).toEqual("item4");
  expect(
    getNextValue(prefix, ["item1", "item2", "item3", "item4", "item4"])
  ).toEqual("item5");
  expect(getNextValue(prefix, [])).toEqual("item1");
  expect(getNextValue(prefix, ["Column 1", "Column 3", "Column 2"])).toEqual(
    "Column 4"
  );
  expect(getNextValue(prefix, ["1", "3", "4"])).toEqual("5");
  expect(getNextValue(prefix, [1, 3, 4])).toEqual(5);
  expect(getNextValue(prefix, [1, 2, 3])).toEqual(4);
  expect(getNextValue(prefix, ["yes"])).toEqual("no");
  expect(getNextValue(prefix, ["No"])).toEqual("Yes");
  expect(getNextValue(prefix, ["TRUE"])).toEqual("FALSE");
  expect(
    getNextValue(prefix, [
      "12345671234567890",
      "12345671234567891",
      "12345671234567892"
    ])
  ).toEqual("12345671234567893");
  expect(getNextValue(prefix, ["1 day", "2 days", "3 days"])).toEqual("4 days");
  expect(getNextValue(prefix, ["a01"])).toEqual("a02");
  expect(getNextValue(prefix, ["a01", "a02"])).toEqual("a03");
  expect(getNextValue(prefix, ["aaa1bbb2ccc3"])).toEqual("aaa1bbb2ccc4");
});

test("getNextValue test", (): any => {
  const choices: Array<ItemValue> = [];
  expect(getNextItemText(choices)).toBeFalsy();
  choices.push(new ItemValue("a"));
  choices.push(new ItemValue("b"));
  expect(getNextItemText(choices)).toBeFalsy();
  choices.push(new ItemValue("c", "Item c"));
  expect(getNextItemText(choices)).toEqual("Item c1");
  choices.push(new ItemValue("c1", "Item c1"));
  expect(getNextItemText(choices)).toEqual("Item c2");
});

test("Set Text property", () => {
  const creator = new CreatorTester();
  const json = {
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
          "Citroen"
        ]
      }
    ]
  };
  creator.JSON = json;
  expect(creator.isDesignerShowing).toBeTruthy();
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  expect(creator.survey.getAllQuestions()[0].name).toEqual("car");
  let jsonText = JSON.stringify(json);
  jsonText = jsonText.substring(5);
  creator.text = jsonText;
  expect(creator.isDesignerShowing).toBeFalsy();
});

test("Escape HTML question string", () => {
  const jsonText = JSON.stringify({
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question3",
            html: '<img src="https://placehold.it/300x100" alt="test"/>'
          }
        ]
      }
    ]
  });
  //const jsonText = '{\"pages\":[{\"name\":\"page1\",\"elements\":[{\"type\":\"html\",\"name\":\"question3\",\"html\":\"<img src=\\\"https://placehold.it/300x100\\\" alt=\\\"test\\\"/>\"}]}]}';
  const creator = new CreatorTester();
  creator.text = jsonText;
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  const q3 = creator.survey.getQuestionByName("question3");
  expect(q3).toBeTruthy();
  expect((<QuestionHtmlModel>q3).html).toEqual(
    '<img src="https://placehold.it/300x100" alt="test"/>'
  );
  expect(creator.text.replace(/\s+|\t+|\n+/g, "")).toEqual(
    jsonText.replace(/\s+|\t+|\n+/g, "")
  );
});

test("At least one page should be available", () => {
  const creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.text = undefined;
  expect(creator.survey.pages).toHaveLength(1);
});

test("options.questionTypes", () => {
  const allTypes = ElementFactory.Instance.getAllToolboxTypes();
  let creator = new CreatorTester();
  expect(creator.toolbox.items).toHaveLength(allTypes.length);
  creator = new CreatorTester({
    questionTypes: ["text", "dropdown", "unknown"]
  });
  expect(creator.toolbox.items).toHaveLength(2);
});

test("Editor state property", () => {
  const creator = new CreatorTester();
  creator.showErrorOnFailedSave = false;
  let success = true;
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
  //Add a case for Bug #1447
  creator.showErrorOnFailedSave = true;
  let notifyMessage;
  let notifyType;
  creator.onNotify.add((sender: any, options: any) => {
    notifyMessage = options.message;
    notifyType = options.type;
  });
  creator.doSaveFunc();
  expect(notifyMessage).toBeTruthy();
  expect(notifyType).toEqual("error");
  expect(creator.state).toEqual("modified");
});

test("Do not reload surey on 'Designer' tab click", () => {
  const creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  const pageCount = creator.survey.PageCount;
  creator.addPage();
  expect(creator.survey.PageCount).toEqual(pageCount + 1);
  creator.showDesigner();
  expect(creator.survey.PageCount).toEqual(pageCount + 1);
});

test("SurveyJSON always return correct data, bug #53", () => {
  const creator = new CreatorTester();
  creator.survey.pages[0].addNewQuestion("text", "q1");
  creator.showTestSurvey();
  expect(JSON.stringify(creator.text).indexOf("q1") > -1).toBeTruthy();
});

test("onQuestionAdded event + undo/redo", () => {
  const creator = new CreatorTester();
  let counter = 0;
  creator.onQuestionAdded.add(function () {
    if (creator.isProcessingUndoRedo) return;
    counter++;
  });
  expect(counter).toEqual(0);
  creator.JSON = getSurveyJson();
  expect(counter).toEqual(0);
  creator.survey.pages[0].addNewQuestion("text", "q1");
  expect(counter).toEqual(1);
  creator.undo();
  creator.redo();
  expect(counter).toEqual(1);
});

test("onElementDeleting event", () => {
  const creator = new CreatorTester();
  let counter = 0;
  let canRemove = true;
  creator.onElementDeleting.add(function (editor, options) {
    options.allowing = canRemove;
    counter++;
  });
  const page = creator.survey.pages[0];
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  page.addNewQuestion("text", "q3");

  expect(page.questions).toHaveLength(3);
  creator.selectElement(creator.survey.getQuestionByName("q2"));
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(2);
  expect(counter).toEqual(1);

  canRemove = false;
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(2);
  expect(counter).toEqual(2);

  canRemove = true;
  creator.deleteCurrentElement();
  expect(page.questions).toHaveLength(1);
  expect(counter).toEqual(3);
});

test("Delete object and selectedElement property", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        title: "Page 1",
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
              { type: "text", name: "panel1_q4" }
            ]
          },
          { type: "text", name: "q3" }
        ]
      }
    ]
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
  expect(creator.selectedElementName).toEqual("survey");
  const newQuestion = creator.survey.pages[0].addNewQuestion("text");
  creator.survey.pages[0].title = "";
  creator.selectElement(newQuestion);
  creator.deleteCurrentObject();
  expect(creator.selectedElementName).toEqual("survey");
});

test("fast copy tests, copy a question", () => {
  const creator = new CreatorTester();
  const q1 = <QuestionTextModel>(
    creator.survey.pages[0].addNewQuestion("text", "question1")
  );
  q1.placeholder = "I'm here";
  creator.fastCopyQuestion(q1);
  expect(creator.survey.pages[0].questions).toHaveLength(2);
  const q2 = <QuestionTextModel>creator.survey.pages[0].questions[1];
  expect(q2.name).toEqual("question2");
  expect(q2.placeholder).toEqual("I'm here");
});

test("fast copy tests, copy a panel with questions and a nested panel", () => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  const p1 = survey.pages[0].addNewPanel("panel1");
  const q1 = p1.addNewQuestion("text", "question1");
  const p2 = p1.addNewPanel("panel2");
  const q2 = p2.addNewQuestion("text", "question2");
  (<any>creator.survey).selectedElement = p1;
  creator.fastCopyQuestion(p1);

  expect(survey.pages[0].elements).toHaveLength(2);
  const newPanel = <PanelModel>survey.pages[0].elements[1];
  expect(newPanel.name).toEqual("panel3");
  expect(newPanel.questions[0].name).toEqual("question3");
  const nestedPanel = <PanelModel>newPanel.elements[1];
  expect(nestedPanel.name).toEqual("panel4");
  expect(nestedPanel.questions[0].name).toEqual("question4");
});

test("Copy a page", () => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  const p1 = survey.pages[0].addNewPanel("panel1");
  const q1 = p1.addNewQuestion("text", "question1");
  const p2 = p1.addNewPanel("panel2");
  const q2 = p2.addNewQuestion("text", "question2");
  survey.addNewPage("page2");
  const page = creator.copyPage(survey.pages[0]);
  expect(survey.pages).toHaveLength(3);
  expect(survey.pages.indexOf(page)).toEqual(1);
  expect(page.name).toEqual("page3");
  expect(page.elements).toHaveLength(1);
  const newPanel = <PanelModel>page.elements[0];
  expect(newPanel.name).toEqual("panel3");
  expect(newPanel.questions[0].name).toEqual("question3");
  const nestedPanel = <PanelModel>newPanel.elements[1];
  expect(nestedPanel.name).toEqual("panel4");
  expect(nestedPanel.questions[0].name).toEqual("question4");
});

test("fast copy tests, set the correct parent", () => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  const p1 = creator.survey.pages[0].addNewPanel("panel1");
  const q1 = p1.addNewQuestion("text", "question1");
  const p2 = p1.addNewPanel("panel2");
  const q2 = p2.addNewQuestion("text", "question2");
  creator.selectElement(q2);
  creator.fastCopyQuestion(q2);
  expect(p2.questions).toHaveLength(2);
  const newQuestion = <QuestionTextModel>p2.questions[1];
  expect(newQuestion.name).toEqual("question3");
});

test("addQuestion into the QuestionPanelDynamic into second page", () => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  survey.addNewPage("p1");
  const page = survey.addNewPage("p2");
  const pnlQuestion = page.addNewQuestion("paneldynamic", "newQuestion");
  const newQuestion = pnlQuestion["template"].addNewQuestion("text", "question1");
  creator.selectElement(newQuestion);
  expect(creator.selectedElementName).toEqual(newQuestion.name);
});

test("generateValidJSON should be true by default, bug #135", () => {
  const creator = new CreatorTester();
  expect(creator.generateValidJSON).toBeTruthy();
});
test("Element name should be unique - property grid + Question Editor", () => {
  const creator = new CreatorTester();
  creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.survey.currentPage.addNewQuestion("text", "question2");
  const question = creator.survey.currentPage.addNewQuestion("text", "question");
  creator.selectElement(question);
  expect(creator["designerPropertyGrid"].obj).toBeTruthy();
  expect(creator["designerPropertyGrid"].obj).toEqual(question);
  const questionName = creator["designerPropertyGrid"].survey.getQuestionByName("name");
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
test("Element name should be unique in panel dynamic - property grid + Question Editor", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "paneldynamic", name: "q1", templateElements: [{ type: "text", name: "q2" }] },
      { type: "paneldynamic", name: "q3", templateElements: [{ type: "text", name: "q4" }] }
    ]
  };
  const panelQuestion = creator.survey.getQuestionByName("q3");
  expect(panelQuestion).toBeTruthy();
  const question = panelQuestion.template.getQuestionByName("q4");
  expect(question).toBeTruthy();
  creator.selectElement(question);
  const questionName = creator["designerPropertyGrid"].survey.getQuestionByName("name");
  expect(questionName).toBeTruthy();
  expect(questionName.value).toEqual("q4");
  questionName.value = "q2";
  expect(questionName.value).toEqual("q2");
  expect(questionName.hasErrors()).toBeTruthy();
  expect(question.name).toEqual("q4");
  questionName.value = "q4";
  expect(questionName.hasErrors()).toBeFalsy();
  expect(question.name).toEqual("q4");
  questionName.value = "q5";
  expect(questionName.hasErrors()).toBeFalsy();
  expect(question.name).toEqual("q5");
});

test("Validate Selected Element Errors", () => {
  const titleProp = Serializer.findProperty("question", "title");
  const oldIsRequired = titleProp.isRequired;
  titleProp.isRequired = true;
  const creator = new CreatorTester();
  const question = creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.selectedElement = question;
  expect(creator.validateSelectedElement()).toBeFalsy();
  const titleQuestion = creator["designerPropertyGrid"].survey.getQuestionByName("title");
  expect(titleQuestion.errors).toHaveLength(1);
  question.title = "My title";
  expect(creator.validateSelectedElement()).toBeTruthy();
  expect(titleQuestion.errors).toHaveLength(0);
  titleProp.isRequired = oldIsRequired;
});
test("Update conditions/expressions on changing question.name", () => {
  const creator = new CreatorTester();
  const page = creator.survey.currentPage;
  page.enableIf = "{question1} = 1";
  page.addNewQuestion("text", "question1");
  page.addNewQuestion("text", "question2");
  const q1 = creator.survey.getAllQuestions()[0];
  const q2 = creator.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  creator.selectElement(q1);
  const nameQuestion = creator["designerPropertyGrid"].survey.getQuestionByName("name");
  nameQuestion.value = "myUpdatedQuestion1";
  expect(q2.visibleIf).toEqual("{myUpdatedQuestion1} = 1");
  expect(page.enableIf).toEqual("{myUpdatedQuestion1} = 1");
});

test("Update conditions/expressions on changing question.valueName", () => {
  const creator = new CreatorTester();
  creator.survey.currentPage.addNewQuestion("text", "question1");
  creator.survey.currentPage.addNewQuestion("text", "question2");
  const q1 = creator.survey.getAllQuestions()[0];
  const q2 = creator.survey.getAllQuestions()[1];
  q2.visibleIf = "{question1} = 1";
  creator.selectElement(q1);
  const nameQuestion = creator["designerPropertyGrid"].survey.getQuestionByName("name");
  const valueNameQuestion = creator["designerPropertyGrid"].survey.getQuestionByName("valueName");
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
  const creator = new CreatorTester();
  creator.onPanelAdded.add(function (sender, options) {
    let parent = options.panel.parent;
    parent.removeElement(options.panel);
  });

  creator.clickToolboxItem({ name: "q1", type: "panel" });
  expect(creator.survey.getAllPanels()).toHaveLength(0);
});
test("Do not allow to select page object", () => {
  const creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  const question = creator.survey.getQuestionByName("question1");
  creator.selectedElement = question;
  expect(creator.selectedElement["name"]).toEqual("question1");
  creator.onSelectedElementChanging.add(function (c, options) {
    if (
      options.newSelectedElement != null &&
      options.newSelectedElement.getType() == "page"
    ) {
      options.newSelectedElement = creator.survey;
    }
  });
  creator.selectedElement = creator.survey.pages[0];
  expect(creator.selectedElement).toBeTruthy();
  expect(creator.selectedElement.getType()).toEqual("survey");
});
test("Do not allow to select page/survey objects", () => {
  const creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  creator.onSelectedElementChanging.add(function (c, options) {
    const el = options.newSelectedElement;
    if (!el || el.getType() == "page" || el.getType() == "survey") {
      options.newSelectedElement =
        creator.survey.getAllQuestions().length > 0
          ? creator.survey.getAllQuestions()[0]
          : null;
    }
  });
  creator.selectedElement = null;
  expect(creator.selectedElement).toBeTruthy();
  creator.JSON = getSurveyJson();
  creator.selectedElement = creator.survey.getQuestionByName("question1");
  expect(creator.selectedElement["name"]).toEqual("question1");
  creator.selectedElement = creator.survey.pages[0];
  expect(creator.selectedElement.getType()).toEqual("text");
});

test("Change elemenent page", () => {
  const creator = new CreatorTester();
  creator.JSON = getSurveyJson();
  const question = creator.survey.getQuestionByName("question1");
  creator.selectedElement = question;
  expect(creator.selectedElement["name"]).toEqual("question1");
  expect(creator.survey.currentPage.name).toEqual("page1");
  const pageEditor = creator["designerPropertyGrid"].survey.getQuestionByName("page");
  expect(pageEditor).toBeTruthy();
  pageEditor.value = "page2";
  expect(creator.selectedElement["name"]).toEqual("question1");
  expect(question.page.name).toEqual("page2");
});

test("Undo-redo creator add/remove page", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 2" },
      { type: "text", name: "q3", visibleIf: "{q1} = 3" }
    ]
  };
  expect(creator.survey.pages).toHaveLength(1);
  creator.addPage();
  expect(creator.survey.pages).toHaveLength(2);
  creator.undo();
  expect(creator.survey.pages).toHaveLength(1);
  creator.redo();
  expect(creator.survey.pages).toHaveLength(2);
});

test("The onModified event is called on property changed", () => {
  const creator = new CreatorTester(undefined);
  let counter;
  creator.onModified.add((sender, options) => {
    counter++;
  });
  const survey = creator.survey;

  survey.addNewPage("p");
  const question = <QuestionRadiogroupModel>(
    survey.pages[0].addNewQuestion("radiogroup", "q1")
  );
  creator.selectElement(question);
  const titleQuestion = creator["designerPropertyGrid"].survey.getQuestionByName("title");
  counter = 0;
  titleQuestion.value = "some title";
  expect(counter).toEqual(1);

  creator.undo();
  expect(counter).toEqual(2);

  creator.redo();
  expect(counter).toEqual(3);

  const choicesQuestion = <QuestionMatrixDynamicModel>(
    creator["designerPropertyGrid"].survey.getQuestionByName("choices")
  );
  counter = 0;
  const rows = choicesQuestion.visibleRows;
  choicesQuestion.addRow();
  expect(counter).toEqual(1);

  creator.undo();
  expect(counter).toEqual(2);

  choicesQuestion.removeRow(0);
  expect(counter).toEqual(3);
});

test("deleteElement function", () => {
  const creator = new CreatorTester();
  const page = creator.survey.pages[0];
  const q1 = page.addNewQuestion("text", "q1");
  const q2 = page.addNewQuestion("text", "q2");
  const q3 = page.addNewQuestion("text", "q3");

  creator.selectedElement = q2;
  creator.deleteElement(creator.selectedElement);
  expect(creator.selectedElementName).toEqual("q3");
  creator.deleteElement(creator.selectedElement);
  expect(creator.selectedElementName).toEqual("q1");
  creator.deleteElement(creator.selectedElement);
  expect(creator.selectedElementName).toEqual("survey");
});

test("Do not call onPageAdded on pages move", () => {
  const creator = new CreatorTester();
  let counter = 0;
  creator.onPageAdded.add(function (sender, options) {
    counter++;
  });
  creator.survey.addNewPage("page2");
  creator.survey.addNewPage("page3");
  expect(counter).toEqual(2);
  const page2 = creator.survey.pages[1];
  creator.survey.pages.splice(1, 1);
  creator.survey.pages.splice(0, 0, page2);
  expect(creator.survey.pages[0].name).toEqual("page2");
  expect(counter).toEqual(2);
});

test("creator collapseAllPropertyTabs expandAllPropertyTabs expandPropertyTab collapsePropertyTab, allowExpandMultipleCategories = true", () => {
  creatorSettings.propertyGrid.allowExpandMultipleCategories = true;
  const creator = new CreatorTester();
  const page = creator.survey.pages[0];
  const q1 = page.addNewQuestion("text", "q1");
  creator.selectElement(q1);
  const generalPanel = <PanelModel>(creator["designerPropertyGrid"].survey.getPanelByName("general"));
  const logicPanel = <PanelModel>(creator["designerPropertyGrid"].survey.getPanelByName("logic"));
  expect(generalPanel.isExpanded).toBeTruthy();
  creator.collapsePropertyTab("general");
  expect(generalPanel.isExpanded).toBeFalsy();
  creator.expandPropertyTab("general");
  expect(generalPanel.isExpanded).toBeTruthy();

  expect(logicPanel.isExpanded).toBeFalsy();
  creator.expandAllPropertyTabs();
  expect(logicPanel.isExpanded).toBeTruthy();
  creator.collapseAllPropertyTabs();
  expect(logicPanel.isExpanded).toBeFalsy();
  creatorSettings.propertyGrid.allowExpandMultipleCategories = false;
});

test("generate element name based on another survey", () => {
  const creator = new CreatorTester();
  creator.onGenerateNewName.add(function (sender, options) {
    if (options.name === "question3") {
      options.name = "question4";
    }
    if (options.name === "question5") {
      options.name = "question9";
    }
  });
  const survey = creator.survey;
  const page = survey.addNewPage("p1");
  page.addNewQuestion("text");
  expect(page.questions[0].name).toEqual("question1");
  page.addNewQuestion("text");
  expect(page.questions[1].name).toEqual("question2");
  page.addNewQuestion("text");
  expect(page.questions[2].name).toEqual("question4");
  page.addNewQuestion("text");
  expect(page.questions[3].name).toEqual("question9");
  page.addNewQuestion("text");
  expect(page.questions[4].name).toEqual("question10");
});

test("creator.onConditionQuestionsGetList, Bug#957", () => {
  const creator = new CreatorTester();
  creator.onConditionQuestionsGetList.add(function (sender, options) {
    options.list = options.list.filter(
      (item) => item.question.getType() === "text"
    );
  });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
      { name: "q3", type: "dropdown" },
      { name: "q4", type: "checkbox" },
      { name: "q5", type: "radiogroup" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const editor = new ConditionEditor(creator.survey, question, creator);
  expect(editor.panel.panels).toHaveLength(1);
  const panel = editor.panel.panels[0];
  const questionValue = panel.getQuestionByName("questionName");
  expect(questionValue).toBeTruthy();
  expect(questionValue.choices).toHaveLength(1);
  expect(questionValue.choices[0].value).toEqual("q2");
});
test("creator.onConditionQuestionsGetList, sortOrder", () => {
  const creator = new CreatorTester();
  creator.onConditionQuestionsGetList.add(function (sender, options) {
    options.sortOrder = "none";
    options.list = options.list.filter(
      (item) => item.question.getType() === "text"
    );
    options.list;
  });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      { name: "q3", type: "text" },
      { name: "q2", type: "text" },
      { name: "q4", type: "checkbox" },
      { name: "q5", type: "radiogroup" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const editor = new ConditionEditor(creator.survey, question, creator);
  expect(editor.panel.panels).toHaveLength(1);
  const panel = editor.panel.panels[0];
  const questionValue = panel.getQuestionByName("questionName");
  expect(questionValue).toBeTruthy();
  expect(questionValue.choices).toHaveLength(2);
  expect(questionValue.choices[0].value).toEqual("q3");
  expect(questionValue.choices[1].value).toEqual("q2");
});

test("creator.onGetObjectDisplayName, change visible name for objects", () => {
  const creator = new CreatorTester();
  let reason = "";
  let area = "";
  creator.onGetObjectDisplayName.add(function (sender, options) {
    reason = options.reason;
    area = options.area;
    options.displayName = options.obj.title + " [" + options.obj.name + "]";
  });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", title: "Question 2", type: "text" },
      { name: "q3", title: "Question 3", type: "dropdown" },
      { name: "q4", title: "Question 4", type: "checkbox" },
      { name: "q5", title: "Question 5", type: "radiogroup" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const editor = new ConditionEditor(creator.survey, question, creator);
  expect(editor.panel.panels).toHaveLength(1);
  expect(area).toEqual("condition-editor");
  const panel = editor.panel.panels[0];
  const questionName = panel.getQuestionByName("questionName");
  expect(questionName).toBeTruthy();
  expect(questionName.choices).toHaveLength(4);
  expect(questionName.choices[0].value).toEqual("q2");
  expect(questionName.choices[0].text).toEqual("Question 2 [q2]");
});

test(
  "use creator.onGetObjectDisplayName instead of creator.onGetObjectTextInPropertyGrid event, update on property changing",
  () => {
    const creator = new CreatorTester();
    creator.onGetObjectDisplayName.add(function (sender, options) {
      if (options.reason === "property-grid" && options.area === "property-grid-header:element-list") {
        if (!!options.obj.title) {
          options.displayName = options.obj.title;
        }
        if (!!options.obj.description) {
          options.displayName = options.obj.description;
        }
      }
      if (options.reason === "property-grid-title" && options.area === "property-grid-header:selected-element") {
        options.displayName = options.obj.name + " Properties";
      }
    });
    creator.JSON = {
      elements: [{ type: "text", name: "q1", title: "question1", description: "New Title" }],
    };
    creator.selectElement(creator.survey.getQuestionByName("q1"));
    const propertyGrid = creator.sidebar.getTabById("propertyGrid").model as PropertyGridViewModel;
    expect(propertyGrid).toBeTruthy();
    const selectorBarItem = propertyGrid.objectSelectionAction;
    expect(selectorBarItem).toBeTruthy();
    const popupModel = <PopupModel>selectorBarItem.popupModel;
    expect(popupModel).toBeTruthy();
    const selectorModel = <ObjectSelectorModel>(
      popupModel.contentComponentData.model
    );
    expect(selectorModel).toBeTruthy();
    expect(selectorModel.isVisible).toBeFalsy();
    expect(selectorModel.list).toBeFalsy();
    selectorBarItem.action();
    expect(popupModel.isVisible).toBeTruthy();
    expect(selectorModel.isVisible).toBeTruthy();
    expect(selectorModel.list.actions).toHaveLength(3);
    expect(selectorModel.list.actions[2].title).toEqual("New Title");

    expect(selectorBarItem.title).toEqual("q1 Properties");
  }
);

test("creator options.maxLogicItemsInCondition, hide `Add Condition` on exceeding the value", () => {
  const creator = new CreatorTester({ maxLogicItemsInCondition: 2 });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  const editor = new ConditionEditor(creator.survey, question, creator);
  expect(editor.panel.maxPanelCount).toEqual(1);

  editor.panel.addPanel();
  expect(editor.panel.maxPanelCount).toEqual(2);
});

test("creator.onAddQuestion and undo-redo manager, Bug#972", () => {
  const creator = new CreatorTester();
  creator.onQuestionAdded.add(function (sender, options) {
    options.question.title = "new title";
  });
  creator.JSON = {};
  creator.survey.currentPage.addNewQuestion("text", "q1");
  creator.survey.currentPage.addNewQuestion("text", "q2");
  creator.undo();
  creator.undo();
  expect(creator.survey.getAllQuestions()).toHaveLength(0);
});
test("creator.onAddPage and undo-redo manager, Bug#972", () => {
  const creator = new CreatorTester();
  creator.onPageAdded.add(function (sender, options) {
    options.page.title = "new title";
  });
  creator.JSON = {};
  creator.survey.addNewPage("p2");
  creator.survey.addNewPage("p3");
  creator.undo();
  creator.undo();
  expect(creator.survey.pages).toHaveLength(1);
});
test("creator.onAddPanel and undo-redo manager, Bug#972", () => {
  const creator = new CreatorTester();
  creator.onPanelAdded.add(function (sender, options) {
    options.panel.title = "new title";
  });
  creator.JSON = {};
  creator.survey.currentPage.addNewPanel("panel1");
  creator.survey.currentPage.addNewPanel("panel2");
  creator.undo();
  creator.undo();
  expect(creator.survey.getAllPanels()).toHaveLength(0);
});

test("SurveyPropertyConditionEditor, set correct locale into internal survey, Bug #953", () => {
  editorLocalization.currentLocale = "de";
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "text"
      }
    ]
  };
  expect(creator.survey.locale).toBeFalsy();
  expect(creator["designerPropertyGrid"].survey.locale).toEqual("de");
  const question = creator.survey.getQuestionByName("q2");
  const editor = new ConditionEditor(creator.survey, question, creator);
  expect(editor.editSurvey.locale).toEqual("de");
  editorLocalization.currentLocale = "";
});
test("creator.onSurveyInstanceCreated, can pass ConditionEditor as model", () => {
  editorLocalization.currentLocale = "de";
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "text",
        visibleIf: "{q1} notempty"
      }
    ]
  };
  let model;
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.reason === "condition-builder") {
      model = options.model;
    }
  });
  const question = creator.survey.getQuestionByName("q2");
  new ConditionEditor(creator.survey, question, creator, "visibleIf");
  expect(model).toBeTruthy();
  expect(model.text).toEqual("{q1} notempty");
});

test("Change names in copyElements", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
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
      }
    ]
  };
  const panel = new PanelModel("panel1");
  panel.addNewQuestion("text", "question1");
  panel.addNewQuestion("text", "question2");
  const newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.name).toEqual("panel2");
  expect(newPanel.questions[0].name).toEqual("question3");
  expect(newPanel.questions[1].name).toEqual("question4");
});
test("Update expressions in copyElements", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
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
      }
    ]
  };
  const panel = <PanelModel>creator.survey.getPanelByName("panel1");
  panel.questions[1].visibleIf = "{question1} = 'a'";
  const newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.survey).toBeTruthy();
  expect(newPanel.isDesignMode).toBeTruthy();
  expect(newPanel.questions[1].survey).toBeTruthy();
  expect(newPanel.questions[1].isDesignMode).toBeTruthy();
  expect(newPanel.questions[1].visibleIf).toEqual("{question3} = 'a'");
  expect(newPanel.questions[1].visible).toBeTruthy();
});
test("Update expressions on copyElements for panel dynamic", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "paneldynamic",
        name: "question1",
        templateElements: [
          {
            type: "text",
            name: "question2"
          },
          {
            type: "text",
            name: "question3",
            visibleIf: "{panel.question2} = 'a'"
          }
        ]
      }
    ]
  };
  const panel = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("question1");
  const newPanel = <QuestionPanelDynamicModel>creator.copyElement(panel);
  expect(newPanel.survey).toBeTruthy();
  expect(newPanel.isDesignMode).toBeTruthy();
  expect(newPanel.name).toBe("question4");
  expect(newPanel.templateElements).toHaveLength(2);
  expect(newPanel.templateElements[0].name).toBe("question5");
  expect(newPanel.templateElements[1].name).toBe("question6");
  expect((<Question>newPanel.templateElements[1]).visibleIf).toEqual("{panel.question5} = 'a'");
});
test("Update expressions on copyElements for matrix dynamic in detail panel", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "matrixdynamic",
        name: "question1",
        detailPanelMode: "underRow",
        detailElements: [
          {
            type: "text",
            name: "question2"
          },
          {
            type: "text",
            name: "question3",
            visibleIf: "{row.question2} = 'a'"
          }
        ],
        columns: [{ name: "col1", visibleIf: "{row.question2} = 'a'" }]
      }
    ]
  };
  const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("question1");
  const newMatrix = <QuestionMatrixDynamicModel>creator.copyElement(matrix);
  expect(newMatrix.survey).toBeTruthy();
  expect(newMatrix.isDesignMode).toBeTruthy();
  expect(newMatrix.name).toBe("question4");
  expect(newMatrix.detailElements).toHaveLength(2);
  expect(newMatrix.detailElements[0].name).toBe("question5");
  expect(newMatrix.detailElements[1].name).toBe("question6");
  expect((<Question>newMatrix.detailElements[1]).visibleIf).toEqual("{row.question5} = 'a'");
  expect(newMatrix.columns[0].visibleIf).toBe("{row.question5} = 'a'");
});
test("onModified options", () => {
  const creator = new CreatorTester();
  const modifiedOptions = [];
  creator.onModified.add(function (survey, options) {
    modifiedOptions.push(options);
  });
  creator.clickToolboxItem({
    name: "q1",
    choices: ["item1", "item2", "item3"],
    type: "checkbox"
  });
  expect(modifiedOptions).toHaveLength(2);
  let opts = modifiedOptions.pop();
  expect(opts.type).toEqual("ADDED_FROM_TOOLBOX");
  expect(opts.question.getType()).toEqual("checkbox");
  const question: QuestionCheckboxModel = opts.question;
  modifiedOptions.pop();
  creator.addPage();
  expect(modifiedOptions).toHaveLength(2);
  opts = modifiedOptions.pop();
  expect(opts.type).toEqual("PROPERTY_CHANGED");
  expect(opts.name).toEqual("pages");
  opts = modifiedOptions.pop();
  expect(opts.type).toEqual("PAGE_ADDED");
  expect(opts.oldValue).toBeFalsy();
  expect(opts.newValue.getType()).toEqual("page");
  let page = opts.newValue;

  creator.selectElement(question);
  question.title = "Some text";
  opts = modifiedOptions.pop();
  expect(opts.type).toEqual("PROPERTY_CHANGED");
  expect(opts.target).toEqual(question);
  expect(opts.name).toEqual("title");
  expect(opts.oldValue).toEqual("");
  expect(opts.newValue).toEqual("Some text");

  creator.selectElement(page);
  creator.deleteCurrentElement();
  expect(modifiedOptions).toHaveLength(2);
  opts = modifiedOptions.pop();
  expect(opts.type).toEqual("PROPERTY_CHANGED");
  expect(opts.name).toEqual("pages");
  opts = modifiedOptions.pop();
  expect(opts.type).toEqual("OBJECT_DELETED");
  expect(opts.target).toEqual(page);
});
test("getDisplayText https://surveyjs.answerdesk.io/ticket/details/T1380", () => {
  const creator = new CreatorTester();
  creator.showObjectTitles = true;
  creator.JSON = getSurveyJson();
  const model = new PageNavigatorViewModel(new PagesController(creator), "");
  expect(model.items[0].title).toEqual("Page 1");
});
test(
  "creator getMenuItems should respect property visibility (e.g. for image question) - https://github.com/surveyjs/survey-creator/issues/897",
  () => {
    const creator = new CreatorTester();
    let question: Question = new QuestionImageModel("qi");
    let questionAdorner = new QuestionAdornerViewModel(creator, question, undefined);
    expect(questionAdorner.getActionById("isrequired")).toBeFalsy();
    question = new QuestionTextModel("qt");
    questionAdorner = new QuestionAdornerViewModel(creator, question, undefined);
    expect(questionAdorner.getActionById("isrequired")).toBeTruthy();
    expect(questionAdorner.getActionById("isrequired").visible).toBeTruthy();
  }
);
test("creator getMenuItems should respect property readOnly - https://github.com/surveyjs/survey-creator/issues/1024", () => {
  const creator = new CreatorTester(undefined);
  const question = new QuestionTextModel("qt");
  creator.onGetPropertyReadOnly.add(function (sender, options) {
    if (options.property.name == "isRequired") {
      options.readOnly = true;
    }
  });
  let questionAdorner = new QuestionAdornerViewModel(creator, question, undefined);
  expect(questionAdorner.getActionById("isrequired")).toBeTruthy();
  expect(questionAdorner.getActionById("isrequired").visible).toBeFalsy();
});

test("addQuestion into the QuestionPanelDynamic into second page", () => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  survey.addNewPage("p1");
  const page = survey.addNewPage("p2");
  const pnlQuestion = page.addNewQuestion("paneldynamic", "newQuestion");
  const newQuestion = pnlQuestion["template"].addNewQuestion(
    "text",
    "question1"
  );
  creator.selectElement(newQuestion);
  expect(creator.selectedElement).toEqual(newQuestion);
  expect(creator.currentPage.name).toEqual("p2");
});

test("creator.onPageAdding", () => {
  const creator = new CreatorTester();
  let counter = 0;
  let allowAdd = true;
  creator.onPageAdding.add(function (sender, options) {
    counter++;
    options.allow = allowAdd;
  });
  creator.JSON = {};
  expect(counter).toBe(1);
  expect(creator.survey.pages).toHaveLength(1);
  creator.addPage(new PageModel("p2"));
  expect(counter).toBe(2);
  expect(creator.survey.pages).toHaveLength(2);
  allowAdd = false;
  creator.addPage(new PageModel("p3"));
  expect(counter).toBe(3);
  expect(creator.survey.pages).toHaveLength(2);
});
