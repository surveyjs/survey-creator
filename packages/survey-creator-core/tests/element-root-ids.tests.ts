import { QuestionCheckboxModel, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { SearchManagerPropertyGrid } from "../src/property-grid/search-manager";
import { QuestionColorModel } from "../src/custom-questions/question-color";
// Registers the "color" question type (the import above is used as a type only).
import "../src/custom-questions/question-color";

// Survey elements render their renderedId on their DOM root (the id with the survey's elementIdPrefix).
// Every creator survey has a prefix (the designer "dt-", the property grid "pg-", ...), so the creator
// must look elements up by renderedId: a bare id ("sq_0") is the same in every survey on the page.

const created: Array<HTMLElement> = [];
function addElement(id: string, parent?: HTMLElement): HTMLElement {
  const el = document.createElement("div");
  el.id = id;
  (parent || document.body).appendChild(el);
  if (!parent) created.push(el);
  return el;
}
afterEach(() => {
  created.splice(0, created.length).forEach(el => el.remove());
  vi.useRealTimers();
});

test("scrollToElement passes the element's renderedId to the survey", (): void => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const q1 = creator.survey.getQuestionByName("q1");
  const calls: Array<any> = [];
  creator.survey.scrollElementToTop = (options: any) => { calls.push(options); };
  creator.scrollToElement(q1.page, q1, document.createElement("div"));
  expect(q1.renderedId).toBe("dt-" + q1.id);
  expect(calls).toHaveLength(1);
  expect(calls[0].id).toBe(q1.renderedId);
  creator.dispose();
});

test("The element to scroll to is found by renderedId, a column by its matrix's renderedId", (): void => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [
    { type: "text", name: "q1" },
    { type: "matrixdynamic", name: "matrix", columns: [{ name: "col1" }] }
  ] };
  const q1 = creator.survey.getQuestionByName("q1");
  const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
  const root = addElement("creator-root");
  // A bare-id element first: it belongs to another survey and must not be found.
  addElement(q1.id, root);
  const q1El = addElement(q1.renderedId, root);
  const matrixEl = addElement(matrix.renderedId, root);
  creator["_rootElementValue"] = root;
  expect(creator["getHtmlElementForScroll"](q1)).toBe(q1El);
  expect(creator["getHtmlElementForScroll"](matrix.columns[0])).toBe(matrixEl);
  creator["_rootElementValue"] = undefined;
  creator.dispose();
});

test("Page navigator finds a page by its renderedId", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  creator.JSON = { pages: [
    { name: "page1", elements: [{ type: "text", name: "q1" }] },
    { name: "page2", elements: [{ type: "text", name: "q2" }] }
  ] };
  const pagesController = (creator.getPlugin("designer").model as TabDesignerViewModel).pagesController;
  const model = new PageNavigatorViewModel(pagesController, "");
  const page2 = creator.survey.pages[1];
  expect(page2.renderedId).toBe("dt-" + page2.id);
  addElement(page2.id);
  const page2El = addElement(page2.renderedId);
  Object.defineProperty(page2El, "offsetTop", { value: 0 });
  Object.defineProperty(page2El, "clientHeight", { value: 300 });
  const viewPort = <HTMLDivElement>addElement("view-port");
  Object.defineProperty(viewPort, "clientHeight", { value: 500 });

  const visiblePages = model.onContainerScroll(viewPort);
  expect(visiblePages.map(p => p.page.name)).toEqual(["page2"]);
  expect(model.currentPage?.name).toBe("page2");

  const scrolled: Array<string> = [];
  creator.scrollToElement = (page: any, selEl: any, el: HTMLElement) => { scrolled.push(page.name + ":" + el.id); };
  model.scrollToPage(page2);
  vi.advanceTimersByTime(100);
  expect(scrolled).toEqual(["page2:" + page2.renderedId]);
  creator.dispose();
});

test("Property grid search scrolls to the matched editor by its renderedId", (): void => {
  vi.useFakeTimers();
  const survey = new SurveyModel({ elements: [
    { type: "text", name: "q1", title: "First" },
    { type: "text", name: "q2", title: "Test" }
  ] });
  survey.elementIdPrefix = "pg-";
  const q2 = survey.getQuestionByName("q2");
  const root = addElement("pg-root");
  const bareEl = addElement(q2.id, root);
  const q2El = addElement(q2.renderedId, root);
  survey.rootElement = root;
  const scrolled: Array<string> = [];
  bareEl.scrollIntoView = () => { scrolled.push("bare"); };
  q2El.scrollIntoView = () => { scrolled.push("rendered"); };
  const searchManager = new SearchManagerPropertyGrid();
  searchManager.setSurvey(survey);
  searchManager.filterString = "Test";
  vi.advanceTimersByTime(1000);
  expect(scrolled).toEqual(["rendered"]);
});

test("Removing a choice focuses the next remove button inside the question found by renderedId", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }] };
  const question = <QuestionCheckboxModel>creator.survey.getQuestionByName("q1");
  const addRemoveButton = (parent: HTMLElement): HTMLButtonElement => {
    const button = document.createElement("button");
    button.className = "svc-item-value-controls__remove";
    parent.appendChild(button);
    return button;
  };
  // A question of another survey with the same bare id comes first in the document.
  addRemoveButton(addElement(question.id));
  const button = addRemoveButton(addElement(question.renderedId));
  const adorner = new ItemValueWrapperViewModel(creator, question, question.visibleChoices[1]);
  adorner["focusNextElementToRemove"](0);
  vi.advanceTimersByTime(200);
  expect(document.activeElement === button).toBeTruthy();
  creator.dispose();
});

test("Color question finds its sd-formbox root by renderedId", (): void => {
  const survey = new SurveyModel({ elements: [{ type: "color", name: "c1" }] });
  survey.elementIdPrefix = "pg-";
  const question = <QuestionColorModel>survey.getQuestionByName("c1");
  expect(question.getType()).toBe("color");
  const root = addElement(question.renderedId);
  root.className = "sd-formbox";
  const container = document.createElement("div");
  root.appendChild(container);
  expect(question["getPopupWidthTarget"](container) === root).toBeTruthy();
});
