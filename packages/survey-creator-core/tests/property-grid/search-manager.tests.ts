import { SurveyModel } from "survey-core";
import { SearchManager } from "../../src/property-grid/search-manager";

function createSurvey(): SurveyModel {
  return new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "q1",
        "title": "First"
      },
      {
        "type": "text",
        "name": "q2",
        "title": "Test"
      },
      {
        "type": "text",
        "name": "q3",
        "title": "Last"
      }
    ]
  });
}
test("SearchManager init state", () => {
  const searchManager = new SearchManager();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(0);
  expect(searchManager.matchCounterText).toBeUndefined();
});

test("SearchManager: highlightedEditorClass", () => {
  const highlightedEditorClass = "spg-editor--highlighted";
  const searchManager = new SearchManager();
  const survey = createSurvey();
  searchManager.setSurvey(survey);

  const getHighlightedEditors = () => {
    return survey.getAllQuestions().filter(q => q.getRootCss().indexOf(highlightedEditorClass) !== -1);
  };
  expect(getHighlightedEditors()).toHaveLength(0);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  const clearAction = searchManager.searchActionBar.visibleActions[2];
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("First");

  nextAction.action();
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("Test");

  nextAction.action();
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("Last");

  nextAction.action();
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("First");

  prevAction.action();
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("Last");

  clearAction.action();
  expect(getHighlightedEditors()).toHaveLength(0);

  searchManager.filterString = "Test";
  expect(getHighlightedEditors()).toHaveLength(1);
  expect(getHighlightedEditors()[0].title).toBe("Test");

  searchManager.filterString = "aaa";
  expect(getHighlightedEditors()).toHaveLength(0);
});

test("SearchManager: matchCounterText", () => {
  const searchManager = new SearchManager();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.enabled).toBeTruthy();
  expect(nextAction.enabled).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("1/3");

  nextAction.action();
  expect(searchManager.matchCounterText).toBe("2/3");

  nextAction.action();
  expect(searchManager.matchCounterText).toBe("3/3");

  nextAction.action();
  expect(searchManager.matchCounterText).toBe("1/3");

  prevAction.action();
  expect(searchManager.matchCounterText).toBe("3/3");
});

test("SearchManager: enabled searchActionBar items", () => {
  const searchManager = new SearchManager();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  const clearAction = searchManager.searchActionBar.visibleActions[2];
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.enabled).toBeTruthy();
  expect(nextAction.enabled).toBeTruthy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("1/3");

  searchManager.filterString = "aaa";
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.enabled).toBeFalsy();
  expect(nextAction.enabled).toBeFalsy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("0/0");

  searchManager.filterString = "First";
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.enabled).toBeTruthy();
  expect(nextAction.enabled).toBeTruthy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("1/1");

  clearAction.action();
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(0);
  expect(searchManager.filterString).toBe("");
});
