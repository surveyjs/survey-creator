import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, checkElementScreenshot, logicQuestionSelector, getSelectOptionByText, logicActionSelector, tableRulesSelector, logicAddNewRuleButton, getListItemByText } from "../../helper";

const title = "Logic tab Screenshot";

fixture`${title}`.page`${url}`;

test("empty view", async (t) => {
  await t.resizeWindow(1920, 900);

  const tabContent = Selector(".svc-creator-tab__content");

  await t.click(getTabbedMenuItemByText(creatorTabLogicName));
  await checkElementScreenshot("logic-tab-empty.png", tabContent, t);
});

test("new rule", async (t) => {
  await t.resizeWindow(1280, 700);

  const tabContent = Selector(".svc-creator-tab__content");

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicAddNewRuleButton);
  await checkElementScreenshot("logic-tab-new-rule.png", tabContent, t);
});

const jsonOneRule = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "q1"
        },
        {
          "type": "text",
          "name": "q2",
          "visibleIf": "{q1} = 1"
        },
        {
          "type": "text",
          "name": "q3"
        },
        {
          "type": "text",
          "name": "q4"
        }
      ]
    }
  ]
};
const logicDetailButtonElement = Selector(".sl-table__detail-button").filterVisible();
const ruleContent = Selector(".sl-table__cell--detail-panel");
const addNewRuleSelector = Selector(".svc-logic-tab__content-action");
const doneButtonSelector = Selector(".sl-panel__done-button");

test("one rule view", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON(jsonOneRule);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(Selector(".sl-table__row"))
    .click(logicDetailButtonElement);
  const tabContent = Selector(".svc-creator-tab__content");
  await checkElementScreenshot("logic-tab-one-rule-content.png", tabContent, t);
});

test("Check actions hover states", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON(jsonOneRule);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName));
  await t.hover(logicDetailButtonElement);
  await checkElementScreenshot("logic-expand-hover.png", logicDetailButtonElement, t);
  const removeRuleSelector = Selector("#remove-row .sv-action-bar-item");
  await t.hover(removeRuleSelector);
  await checkElementScreenshot("logic-rule-remove-hover.png", removeRuleSelector, t);
  await t.click(logicDetailButtonElement);
  const questionOperator = Selector(".svc-logic-operator--question");
  await t.hover(questionOperator);
  await checkElementScreenshot("logic-question-action-hover.png", questionOperator, t);
  const operator = Selector(".svc-logic-operator--operator");
  await t.hover(operator);
  await checkElementScreenshot("logic-operator-hover.png", operator, t);
  const action = Selector(".svc-logic-operator--action");
  await t.hover(action);
  await checkElementScreenshot("logic-action-hover.png", action, t);
  const conditionRemoveSelector = Selector(".svc-logic-condition-remove.svc-icon-remove");
  await t
    .click(Selector(".sl-paneldynamic__add-btn.svc-logic-operator--operator"))
    .hover(questionOperator)
    .hover(conditionRemoveSelector);
  await checkElementScreenshot("logic-condition-remove-hover.png", conditionRemoveSelector, t);
  await t.hover(logicDetailButtonElement);
  await checkElementScreenshot("logic-collapse-hover.png", logicDetailButtonElement, t);
});

test("Check logic error notifier", async (t) => {
  const patchNotifierLifeTime = ClientFunction(() => {
    window["creator"].notifier.timeout = 30000;
  });
  await t.resizeWindow(1920, 900);
  await patchNotifierLifeTime();
  await setJSON({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "q1"
          },
          {
            "type": "text",
            "name": "q2",
          },
        ]
      }
    ]
  });
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(addNewRuleSelector)
    .click(doneButtonSelector);
  await checkElementScreenshot("logic-error-notifier.png", Selector(".svc-notifier--error"), t);
});

test("Check logic Manual Entry", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "q1"
          },
          {
            "type": "text",
            "name": "q2",
            "visibleIf": "{q1} empty"
          },
        ]
      }
    ]
  });
  await t.click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(Selector(".sl-table__row"))
    .click(logicDetailButtonElement)
    .click("#svc-logic-fast-entry button");
  const conditionContentSelector = Selector(".sl-table__cell--detail-panel .sl-panel");
  await checkElementScreenshot("logic-fast-entry.png", conditionContentSelector, t);
  await t.click(Selector(".sl-comment")).pressKey("ctrl+a delete");
  await ClientFunction(() => { document.body.focus(); })();
  await checkElementScreenshot("logic-fast-entry-empty.png", conditionContentSelector, t);
});

const jsonMultipleConditionsMultipleActions = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "q1"
        },
        {
          "type": "text",
          "name": "q2",
          "visibleIf": "{q1} = 1 and {q2} = 2"
        },
        {
          "type": "text",
          "name": "q3"
        },
        {
          "type": "text",
          "name": "q4",
          "enableIf": "{q1} = 1 and {q2} = 2"
        }
      ]
    }
  ]
};
test("rule content", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON(jsonMultipleConditionsMultipleActions);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(Selector(".sl-table__row"))
    .click(logicDetailButtonElement);
  await checkElementScreenshot("logic-tab-rule-content.png", ruleContent, t);
});

test("rule rows", async (t) => {
  await t.resizeWindow(1920, 900);
  const ruleRows = Selector(".sl-table__cell--detail-panel .sl-row.sl-row--multiple");
  await setJSON(jsonMultipleConditionsMultipleActions);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(Selector(".sl-table__row"))
    .click(logicDetailButtonElement)
    .hover(Selector(".sv-string-viewer").withText("If"));
  await checkElementScreenshot("logic-tab-rule-condition-row.png", ruleRows.nth(0), t);

  await t.hover(Selector(".sv-string-viewer").withText("then"));
  await checkElementScreenshot("logic-tab-rule-action-row.png", ruleRows.nth(2), t);
});

test("unsaved rule", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON(jsonOneRule);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(addNewRuleSelector)
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-condition-question-name.png", ruleContent, t);
  await t
    .click(logicQuestionSelector)
    .click(getListItemByText("q1"))
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-condition-question-value.png", ruleContent, t);

  await t
    .typeText(Selector(".sd-input.sd-input--error"), "test")
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-action-empty.png", ruleContent, t);

  await t
    .click(logicActionSelector)
    .click(getListItemByText("Copy answer"))
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-action-questions.png", ruleContent, t);
});

const jsonAllActionTypes = {
  "logoPosition": "right",
  "completedHtmlOnCondition": [
    {
      "expression": "{question4} = ['item1']",
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
          "hasOther": true,
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
          "visibleIf": "{question4} = ['item1']",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        },
        {
          "type": "dropdown",
          "name": "question5",
          "enableIf": "{question4} = ['item1']",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
        },
        {
          "type": "rating",
          "name": "question6",
          "requiredIf": "{question4} = ['item1']"
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
      "expression": "{question4} = ['item1']"
    },
    {
      "type": "setvalue",
      "expression": "{question4} = ['item1']",
      "setToName": "question4",
      "setValue": [
        "item1",
        "item2"
      ]
    },
    {
      "type": "copyvalue",
      "expression": "{question4} = ['item1']",
      "fromName": "question6",
      "setToName": "question11"
    },
    {
      "type": "skip",
      "expression": "{question4} = ['item1']",
      "gotoName": "nps_score"
    },
    {
      "type": "runexpression",
      "expression": "{question4} = ['item1']",
      "setToName": "question11",
      "runExpression": "{sdfsd}"
    }
  ]
};
test("logic actions", async (t) => {
  await t.resizeWindow(2560, 1440);
  await setJSON(jsonAllActionTypes);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(tableRulesSelector.nth(0));
  await checkElementScreenshot("logic-panel-actions.png", Selector(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), t);

  await t.click(tableRulesSelector.nth(1));
  await checkElementScreenshot("logic-question-actions.png", Selector(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), t);
});
