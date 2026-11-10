import { PanelModel, QuestionMatrixDynamicModel, SurveyElement } from "survey-core";
import { CreatorTester } from "../creator-tester";

test("selectElement(element, propertyName) does not scroll the property grid to the category's first question", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  try {
    creator.showOneCategoryInPropertyGrid = false;
    creator.JSON = {
      elements: [
        { type: "text", name: "price" },
        { type: "text", name: "quantity" },
        { type: "expression", name: "total", expression: "{price} * {quantity}" }
      ]
    };
    const propertyGrid = creator["designerPropertyGrid"];
    const calls: Array<any> = [];
    let pgSurvey = propertyGrid.survey;
    pgSurvey.scrollElementToTop = (options: any) => { calls.push(options); };

    creator.selectElement(creator.survey.getQuestionByName("total"), "expression");
    // Selecting a new element may rebuild the property grid survey: spy on the current one as well.
    if (propertyGrid.survey !== pgSurvey) {
      pgSurvey = propertyGrid.survey;
      pgSurvey.scrollElementToTop = (options: any) => { calls.push(options); };
    }
    const general = <PanelModel>pgSurvey.getPanelByName("general");
    expect(general.isExpanded).toBeTruthy();
    expect(pgSurvey.getQuestionByName("expression").parent).toBe(general);
    vi.advanceTimersByTime(1000);

    const firstQuestion = general.getFirstQuestionToFocus(false);
    expect(firstQuestion.name).toBe("name");
    expect(calls.filter(opt => opt.element === firstQuestion || opt.question === firstQuestion)).toHaveLength(0);
  } finally {
    creator.dispose();
    vi.useRealTimers();
  }
});

// Bug#8140: a property-grid survey that is rebuilt (a column's cellType changed) focused its question before
// it was rendered. The lookup of the bare id ("sq_0") fell back to the document and found the designer's
// question with the same id - every survey numbers its elements from sq_0 - so the design surface scrolled.
test("Bug#8140: changing a column's cellType does not scroll the design surface", (): void => {
  vi.useFakeTimers();
  const creator = new CreatorTester();
  // The designer's question roots as the renderers drew them before the fix: the bare id.
  const designerRoot = document.createElement("div");
  const scrolledIds: Array<string> = [];
  const oldScrollElementToTop = SurveyElement.ScrollElementToTop;
  SurveyElement.ScrollElementToTop = (el: Element): boolean => {
    scrolledIds.push(!el ? "null" : (el.getAttribute("data-name") || el.id));
    return false;
  };
  try {
    const elements: Array<any> = [{ type: "text", name: "q0" }];
    for (let i = 1; i <= 14; i++) elements.push({ type: "comment", name: "q" + i });
    elements.push({ type: "matrixdynamic", name: "matrix", columns: [{ name: "column1" }] });
    creator.JSON = { elements: elements };
    creator.survey.getAllQuestions().forEach(q => {
      const el = document.createElement("div");
      el.id = q.id;
      el.setAttribute("data-name", "designer:" + q.name);
      designerRoot.appendChild(el);
    });
    document.body.appendChild(designerRoot);

    const column = (<QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix")).columns[0];
    creator.selectElement(column);
    vi.advanceTimersByTime(1000);
    scrolledIds.splice(0, scrolledIds.length);

    const cellTypeQuestion = creator.propertyGrid.getQuestionByName("cellType");
    expect(cellTypeQuestion.id).toBe("sq_0");
    cellTypeQuestion.value = "text";
    vi.advanceTimersByTime(1000);

    expect(column.cellType).toBe("text");
    expect(creator.propertyGrid.getQuestionByName("cellType").value).toBe("text");
    expect(scrolledIds.filter(id => id.indexOf("designer:") === 0)).toEqual([]);
  } finally {
    SurveyElement.ScrollElementToTop = oldScrollElementToTop;
    designerRoot.remove();
    creator.dispose();
    vi.useRealTimers();
  }
});
