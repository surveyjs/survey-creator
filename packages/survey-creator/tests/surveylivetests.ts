import * as Survey from "survey-knockout";
import { SurveyLiveTester } from "../src/tabs/test";
import { SurveyCreator } from "../src/editor";

export default QUnit.module("surveyLiveTests");

var surveyCreator = {
  createSurvey: (json) => new Survey.Survey(json),
};

QUnit.test("Create survey", function (assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({ questions: [{ type: "text", name: "q1" }] });
  assert.equal(
    test.survey.getQuestionByName("q1").name,
    "q1",
    "Survey was created"
  );
});

QUnit.test("koPages, koActive", function (assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3", questions: [{ type: "text", name: "q3" }] },
    ],
  });
  test.show();
  assert.equal(test.koPages().length, 3, "There are 3 pages");
  assert.equal(test.koPages()[0].koActive(), true, "The first page is active");
  assert.equal(test.koActivePage().name, "page1", "The active page is first");
  assert.equal(
    test.koPages()[1].koActive(),
    false,
    "The second page is inactive"
  );
  test.survey.nextPage();
  assert.equal(
    test.koPages()[0].koActive(),
    false,
    "The first page is inactive"
  );
  assert.equal(test.koPages()[1].koActive(), true, "The second page is active");
  assert.equal(test.koActivePage().name, "page2", "The active page is second");
  test.selectPageClick(test.koPages()[2]);
  assert.equal(
    test.survey.currentPage.name,
    "page3",
    "The current page is the third page"
  );
  assert.equal(test.koPages()[2].koActive(), true, "The third page is active");
});

QUnit.test("koPages, visibility", function (assert) {
  var test = new SurveyLiveTester(surveyCreator);
  test.setJSON({
    pages: [
      { questions: [{ type: "text", name: "q1" }] },
      { questions: [{ type: "text", name: "q2", visible: false }] },
      { questions: [{ type: "text", name: "q3" }] },
    ],
  });
  var q = test.survey.getQuestionByName("q2");
  test.show();
  assert.equal(test.koPages().length, 3, "There are 3 pages");
  assert.equal(
    test.koPages()[1].koVisible(),
    false,
    "The second page is invisible"
  );
  assert.equal(
    test.koPages()[1].koDisabled(),
    true,
    "The second page is disabled"
  );
  q.visible = true;
  assert.equal(
    test.koPages()[1].koVisible(),
    true,
    "The second page is visible"
  );
  assert.equal(
    test.koPages()[1].koDisabled(),
    false,
    "The second page is enabled"
  );
});

QUnit.test(
  "Reset options on show, Bug# https://surveyjs.answerdesk.io/ticket/details/T2147",
  function (assert) {
    var test = new SurveyLiveTester(surveyCreator);
    test.setJSON({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visible: false },
      ],
    });
    test.show();
    var q = test.survey.getQuestionByName("q2");
    assert.equal(q.isVisible, false, "The question is not visible");
    test.koShowInvisibleElements(true);
    assert.equal(
      test.survey.showInvisibleElements,
      true,
      "Survey property sets correctly"
    );
    assert.equal(q.isVisible, true, "The question is visible now");
    test.show();
    assert.equal(test.koShowInvisibleElements(), false, "Reset the property");
    assert.equal(
      test.survey.showInvisibleElements,
      false,
      "Reset the survey property"
    );
  }
);

QUnit.test("Use title for pages", function (assert) {
  var creator = new SurveyCreator();
  creator.JSON = {
    pages: [
      {
        name: "p1",
        title: "First Page",
        elements: [{ type: "text", name: "q1" }],
      },
      {
        name: "p2",
        title: "Second Page",
        elements: [{ type: "text", name: "q2" }],
      },
    ],
  };
  assert.equal(creator.survey.pages.length, 2, "There are two pages in survey");
  creator.showObjectTitles = true;
  creator.onGetObjectDisplayName.add(function (sender, options) {
    if (options.obj.name == "p2") options.displayName = "My Second Page";
  });
  creator.showTestSurvey();
  var test = new SurveyLiveTester(creator);
  test.onGetObjectDisplayName = (obj) => {
    return creator.getObjectDisplayName(obj, "survey-tester");
  };
  test.setJSON(creator.JSON);
  test.show(creator);
  assert.equal(
    test.survey.pages.length,
    2,
    "There are two pages in test survey"
  );
  assert.equal(test.koPages().length, 2, "There are two pages in selector");
  assert.equal(test.koPages()[0].title, "First Page", "Use Page title");
  assert.equal(test.koPages()[1].title, "My Second Page", "Use Page title");
});
function getLiveSurveyByCreator(creator: SurveyCreator): SurveyLiveTester {
  creator.showDesigner();
  var surveyTester = new SurveyLiveTester(creator);
  surveyTester.setJSON(creator.JSON);
  surveyTester.show(creator);
  return surveyTester;
}
QUnit.test(
  "showDefaultLanguageInTestSurveyTab: auto, true, false, all",
  function (assert) {
    var creator = new SurveyCreator();
    creator.JSON = {
      questions: [
        {
          type: "text",
          name: "q1",
        },
      ],
    };
    assert.equal(
      creator.showDefaultLanguageInTestSurveyTab,
      "auto",
      "Show if there are more than one language"
    );
    var test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      false,
      "There is one language"
    );

    creator.showDefaultLanguageInTestSurveyTab = true;
    test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      true,
      "true-1:Show languages"
    );
    assert.ok(test.koLanguages().length > 10, "true-1:Show all languages");

    creator.showDefaultLanguageInTestSurveyTab = "auto";
    creator.JSON = {
      questions: [
        {
          type: "text",
          name: "q1",
          title: { default: "1", de: "2" },
        },
      ],
    };
    test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      true,
      "auto:There are two language"
    );
    assert.equal(test.koLanguages().length, 2, "auto:There are two languages");
    assert.equal(test.koLanguages()[0].value, "en", "First locale is en");
    assert.equal(test.koLanguages()[1].value, "de", "Second locale is de");
    assert.equal(
      test.koLanguages()[1].text,
      "deutsch",
      "Second locale text is deutsch"
    );

    creator.showDefaultLanguageInTestSurveyTab = true;
    test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      true,
      "true-2: Show languages"
    );
    assert.equal(test.koLanguages().length, 2, "true-2: Show two languages");

    creator.showDefaultLanguageInTestSurveyTab = false;
    test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      false,
      "false: Do not show languages"
    );

    creator.showDefaultLanguageInTestSurveyTab = "all";
    test = getLiveSurveyByCreator(creator);
    assert.equal(
      test.koShowDefaultLanguageInTestSurveyTab(),
      true,
      "all: Show languages"
    );
    assert.ok(test.koLanguages().length > 10, "all: Show all languages");
  }
);
