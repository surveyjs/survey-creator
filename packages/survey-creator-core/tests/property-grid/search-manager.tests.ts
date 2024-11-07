import { SurveyModel, settings } from "survey-core";
import { SearchManagerPropertyGrid } from "../../src/property-grid/search-manager";

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
function getHighlightedEditors(survey: SurveyModel) {
  const highlightedEditorClass = "spg-question--highlighted";
  return survey.getAllQuestions().filter(q => q.getRootCss().indexOf(highlightedEditorClass) !== -1);
}
test("SearchManager init state", () => {
  const searchManager = new SearchManagerPropertyGrid();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(0);
  expect(searchManager.matchCounterText).toBeUndefined();
});

test("SearchManager: highlightedEditorClass", () => {
  const searchManager = new SearchManagerPropertyGrid();
  const survey = createSurvey();
  searchManager.setSurvey(survey);

  expect(getHighlightedEditors(survey)).toHaveLength(0);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  const clearAction = searchManager.searchActionBar.visibleActions[2];
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("First");

  nextAction.action();
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("Test");

  nextAction.action();
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("Last");

  nextAction.action();
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("First");

  prevAction.action();
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("Last");

  clearAction.action();
  expect(getHighlightedEditors(survey)).toHaveLength(0);

  searchManager.filterString = "Test";
  expect(getHighlightedEditors(survey)).toHaveLength(1);
  expect(getHighlightedEditors(survey)[0].title).toBe("Test");

  searchManager.filterString = "aaa";
  expect(getHighlightedEditors(survey)).toHaveLength(0);
});

test("SearchManager: matchCounterText", () => {
  const searchManager = new SearchManagerPropertyGrid();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.visible).toBeTruthy();
  expect(nextAction.visible).toBeTruthy();
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
  const searchManager = new SearchManagerPropertyGrid();
  const survey = createSurvey();
  searchManager.setSurvey(survey);
  searchManager.filterString = "st";

  const prevAction = searchManager.searchActionBar.visibleActions[0];
  const nextAction = searchManager.searchActionBar.visibleActions[1];
  const clearAction = searchManager.searchActionBar.visibleActions[2];
  expect(searchManager.searchActionBar.actions).toHaveLength(3);
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(3);
  expect(prevAction.visible).toBeTruthy();
  expect(nextAction.visible).toBeTruthy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("1/3");

  searchManager.filterString = "aaa";
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(1);
  expect(prevAction.visible).toBeFalsy();
  expect(nextAction.visible).toBeFalsy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("No results found");

  searchManager.filterString = "First";
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(1);
  expect(prevAction.visible).toBeFalsy();
  expect(nextAction.visible).toBeFalsy();
  expect(clearAction.visible).toBeTruthy();
  expect(searchManager.matchCounterText).toBe("");

  clearAction.action();
  expect(searchManager.searchActionBar.visibleActions).toHaveLength(0);
  expect(searchManager.filterString).toBe("");
});

test("SearchManager: normalizeTextCallback", () => {
  const searchManager = new SearchManagerPropertyGrid();
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "q1",
        "title": "brouillé"
      },
      {
        "type": "text",
        "name": "q2",
        "title": "lle"
      },
      {
        "type": "text",
        "name": "q3",
        "title": "Last"
      }
    ]
  });
  searchManager.setSurvey(survey);
  searchManager.filterString = "le";
  expect(searchManager.allMatches).toHaveLength(1);

  settings.comparator.normalizeTextCallback = (str: string, reason: string): string => {
    return reason === "search" ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : str;
  };

  searchManager.filterString = "lle";
  expect(searchManager.allMatches).toHaveLength(2);

  settings.comparator.normalizeTextCallback = (str: string, reason: string): string => { return str; };
});

test("SearchManager: search by name and description", () => {
  const searchManager = new SearchManagerPropertyGrid();
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "q1",
        "title": "First",
        "description": "First description"
      },
      {
        "type": "text",
        "name": "q2",
        "title": "Second",
        "description": "Second description"
      },
      {
        "type": "text",
        "name": "q3",
        "title": "Last",
        "description": "Last description"
      }
    ]
  });
  searchManager.setSurvey(survey);
  searchManager.filterString = "First";
  expect(searchManager.allMatches).toHaveLength(1);

  searchManager.filterString = "q1";
  expect(searchManager.allMatches).toHaveLength(1);

  searchManager.filterString = "description";
  expect(searchManager.allMatches).toHaveLength(3);
});