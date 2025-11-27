import { test, expect } from "@playwright/test";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, getListItemByText, resetHoverToCreator, compareScreenshot, resetFocusToBody } from "./helper";

const title = "Logic tab Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("empty view", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });

    const tabContent = page.locator(".svc-creator-tab");
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await compareScreenshot(page, tabContent, "logic-tab-empty.png");
  });

  test("new rule", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 700 });

    const tabContent = page.locator(".svc-creator-tab__content");
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.click(".svc-logic-tab__content-action");
    await compareScreenshot(page, tabContent, "logic-tab-new-rule.png");
  });

  const jsonOneRule = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "type": "text", "name": "q1" },
          { "type": "text", "name": "q2", "visibleIf": "{q1} = 1" },
          { "type": "text", "name": "q3" },
          { "type": "text", "name": "q4" }
        ]
      }
    ]
  };
  // const logicDetailButtonElement = page.locator(".sl-table__detail-button").filter({ hasText: "" });
  // const ruleContent = page.locator(".sl-table__cell--detail-panel");
  // const addNewRuleSelector = page.locator(".svc-logic-tab__content-action");
  // const doneButtonSelector = page.locator(".sl-panel__done-button");

  test("one rule view", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, jsonOneRule);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    const tabContent = page.locator(".svc-creator-tab__content");
    await compareScreenshot(page, tabContent, "logic-tab-one-rule-content.png");
  });

  test("long question name", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question with very long name that does not fit into logic"
            },
            {
              "type": "text",
              "name": "another question with long name that we want to set up",
              "visibleIf": "{question with very long name that does not fit into logic} = 'a'"
            }
          ]
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    const tabContent = page.locator(".sl-table__row.st-table__row--detail");
    await compareScreenshot(page, tabContent, "logic-tab-long-question-name-content.png");
  });

  test("Check actions hover states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, jsonOneRule);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.hover(".sl-table__detail-button");
    await compareScreenshot(page, page.locator(".sl-table__detail-button"), "logic-expand-hover.png");
    const removeRuleSelector = page.locator(".sl-table__remove-button .sv-action-bar-item");
    await removeRuleSelector.hover();
    await compareScreenshot(page, removeRuleSelector, "logic-rule-remove-hover.png");
    await page.click(".sl-table__detail-button");
    const questionOperator = page.locator(".svc-logic-operator--question");
    await questionOperator.first().hover();
    await compareScreenshot(page, questionOperator, "logic-question-action-hover.png");
    const operator = page.locator(".svc-logic-operator--operator");
    await operator.first().hover();
    await compareScreenshot(page, operator, "logic-operator-hover.png");
    const action = page.locator(".svc-logic-operator--action");
    await action.first().hover();
    await compareScreenshot(page, action, "logic-action-hover.png");
    const conditionRemoveSelector = page.locator(".svc-logic-condition-remove.svc-icon-remove");
    await page.click(".sl-paneldynamic__add-btn.svc-logic-operator--operator");
    await questionOperator.first().hover();
    await conditionRemoveSelector.first().hover();
    await compareScreenshot(page, conditionRemoveSelector, "logic-condition-remove-hover.png");
    await page.hover(".sl-table__detail-button");
    await compareScreenshot(page, page.locator(".sl-table__detail-button"), "logic-collapse-hover.png");
  });

  test("Check logic error notifier", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].notifier.timeout = 30000;
    });
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "q1" },
            { "type": "text", "name": "q2", },
          ]
        }
      ]
    });

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.click(".svc-logic-tab__content-action");
    await page.click(".sl-panel__done-button");
    await compareScreenshot(page, page.locator(".svc-notifier--error"), "logic-error-notifier.png");
  });

  test("Check logic dropdown", async ({ page }) => {
    await page.evaluate(() => {
      window["creator"].notifier.timeout = 30000;
    });
    await page.setViewportSize({ width: 900, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "q1" },
            { "type": "text", "name": "q2" },
          ]
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.click(".svc-logic-tab__content-action");
    await page.click(".svc-logic-operator--question");
    await compareScreenshot(page, page.locator(".sv-popup__container"), "logic-dropdown.png");
    await getListItemByText(page, "q1").click();
    await page.click(".svc-logic-operator--question");
    await compareScreenshot(page, page.locator(".sl-body"), "logic-dropdown-full.png");
  });

  test("Check logic Manual Entry", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "text", "name": "q1" },
            { "type": "text", "name": "q2", "visibleIf": "{q1} empty" },
          ]
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    await page.click(".sv-action--logic-fast-entry button");
    const conditionContentSelector = page.locator(".sl-table__cell--detail-panel .sl-panel");
    await compareScreenshot(page, conditionContentSelector, "logic-fast-entry.png");
    await page.click(".sl-comment");
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Delete");
    await resetFocusToBody(page);
    await compareScreenshot(page, conditionContentSelector, "logic-fast-entry-empty.png");
  });

  const jsonMultipleConditionsMultipleActions = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          { "type": "text", "name": "q1" },
          { "type": "text", "name": "q2", "visibleIf": "{q1} = 1 and {q2} = 2" },
          { "type": "text", "name": "q3" },
          { "type": "text", "name": "q4", "enableIf": "{q1} = 1 and {q2} = 2" }
        ]
      }
    ]
  };
  test("rule content", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, jsonMultipleConditionsMultipleActions);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-tab-rule-content.png");
  });

  test("rule rows", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    const ruleRows = page.locator(".sl-table__cell--detail-panel .sl-row.sl-row--multiple");
    await setJSON(page, jsonMultipleConditionsMultipleActions);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();

    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    await page.locator(".sv-string-viewer").filter({ hasText: "If" }).hover();
    await compareScreenshot(page, ruleRows.nth(0), "logic-tab-rule-condition-row.png");

    await page.locator(".sv-string-viewer").filter({ hasText: "then" }).hover();
    await compareScreenshot(page, ruleRows.nth(2), "logic-tab-rule-action-row.png");
  });

  test("unsaved rule", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, jsonOneRule);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();

    await page.click(".svc-logic-tab__content-action");
    await page.click(".sl-panel__done-button");

    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-error-condition-question-name.png");
    await page.click(".svc-logic-operator.svc-logic-operator--question");
    await getListItemByText(page, "q1").click();
    await page.waitForTimeout(500);
    await page.click(".sl-panel__done-button");

    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-error-condition-question-value.png");

    await page.fill(".sd-input.sd-input--error", "test");
    await page.click(".sl-panel__done-button");

    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-error-action-empty.png");

    await page.click(".svc-logic-operator--action");
    await getListItemByText(page, "Copy answer").click();
    await page.waitForTimeout(500);
    await page.click(".sl-panel__done-button");

    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-error-action-questions.png");
  });
  const jsonAllActionTypes = {
    showQuestionNumbers: true,
    "logoPosition": "right",
    "completedHtmlOnCondition": [
      {
        "expression": "{question4} = ['Item 1']",
        "html": "Thanks"
      }
    ],
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question11"
          },
          {
            "type": "rating",
            "name": "nps_score",
            "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Most unlikely)",
            "maxRateDescription": "(Most likely)"
          },
          {
            "type": "checkbox",
            "name": "promoter_features",
            "title": "What features do you value the most?",
            "isRequired": true,
            "validators": [
              {
                "type": "answercount",
                "text": "Please select two features maximum.",
                "maxCount": 2
              }
            ],
            "choices": [
              "Performance",
              "Stability",
              "User Interface",
              "Complete Functionality"
            ],
            "showOtherItem": true,
            "otherText": "Other feature:",
            "colCount": 2
          },
          {
            "type": "comment",
            "name": "passive_experience",
            "title": "What is the primary reason for your score?"
          },
          {
            "type": "comment",
            "name": "disappointed_experience",
            "title": "What do you miss and what was disappointing in your experience with us?"
          },
          {
            "type": "checkbox",
            "name": "question4",
            "visibleIf": "{question4} = ['Item 1']",
            "choices": ["Item 1", "Item 2", "Item 3"]
          },
          {
            "type": "dropdown",
            "name": "question5",
            "enableIf": "{question4} = ['Item 1']",
            "choices": ["Item 1", "Item 2", "Item 3"]
          },
          {
            "type": "rating",
            "name": "question6",
            "requiredIf": "{question4} = ['Item 1']"
          }
        ],
        "title": "page1 -- title",
        "description": "page1 -- description"
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "text",
                "name": "question1"
              }
            ]
          },
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "question2"
              }
            ],
            "visibleIf": "{question1} = 12"
          }
        ],
        "visibleIf": "{question1} = 12"
      }
    ],
    "triggers": [
      {
        "type": "complete",
        "expression": "{question4} = ['Item 1']"
      },
      {
        "type": "setvalue",
        "expression": "{question4} = ['Item 1']",
        "setToName": "question4",
        "setValue": [
          "Item 1",
          "Item 2"
        ]
      },
      {
        "type": "copyvalue",
        "expression": "{question4} = ['Item 1']",
        "fromName": "question6",
        "setToName": "question11"
      },
      {
        "type": "skip",
        "expression": "{question4} = ['Item 1']",
        "gotoName": "nps_score"
      },
      {
        "type": "runexpression",
        "expression": "{question4} = ['Item 1']",
        "setToName": "question11",
        "runExpression": "{sdfsd}"
      }
    ]
  };
  test("logic actions", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await setJSON(page, jsonAllActionTypes);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.locator(".sl-table tbody .sl-table__row:not(.st-table__row--detail)").nth(0).click();
    await compareScreenshot(page, page.locator(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), "logic-panel-actions.png");

    await page.locator(".sl-table tbody .sl-table__row:not(.st-table__row--detail)").nth(1).click();
    await resetHoverToCreator(page);
    await compareScreenshot(page, page.locator(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), "logic-question-actions.png");
  });

  test("Texts overflow the controls when useElementTitles is enabled #3192", async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "q1",
              "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?"
            },
            {
              "type": "text",
              "name": "q2",
              "title": "What do you miss or find disappointing in your experience with our products?",
              "visibleIf": "{q1} = 1"
            },
            {
              "type": "text",
              "name": "q3",
              "title": "What do you miss or find disappointing in your experience with our products?",
            },
            {
              "type": "text",
              "name": "q4",
              "title": "how likely are you to recommend our product to a friend or colleague",
            }
          ]
        }
      ]
    });
    await page.evaluate(() => {
      window["creator"].setOptions({ useElementTitles: true });
    });
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();

    await page.hover(".sl-table__row");
    await page.click(".sl-table__detail-button");
    await compareScreenshot(page, page.locator(".sl-table__cell--detail-panel"), "logic-condition-overflow-text.png");
  });
});
