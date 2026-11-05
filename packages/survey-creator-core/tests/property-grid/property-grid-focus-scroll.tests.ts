import { PanelModel } from "survey-core";
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
