import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, takeElementScreenshot, logicQuestionSelector, logicActionSelector, tableRulesSelector, logicAddNewRuleButton, getListItemByText, wrapVisualTest, resetHoverToCreator } from "../../helper";

const title = "Logic tab Screenshot";

fixture`${title}`.page`${url}`;

test("empty view", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);

    const tabContent = Selector(".svc-creator-tab");

    await t.click(getTabbedMenuItemByText(creatorTabLogicName));
    await takeElementScreenshot("logic-tab-empty.png", tabContent, t, comparer);
  });
});

test("new rule", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 700);

    const tabContent = Selector(".svc-creator-tab__content");

    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .click(logicAddNewRuleButton);
    await takeElementScreenshot("logic-tab-new-rule.png", tabContent, t, comparer);
  });
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
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON(jsonOneRule);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .hover(Selector(".sl-table__row"))
      .click(logicDetailButtonElement);
    const tabContent = Selector(".svc-creator-tab__content");
    await takeElementScreenshot("logic-tab-one-rule-content.png", tabContent, t, comparer);
  });
});

test("long question name", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON({
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
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .hover(Selector(".sl-table__row"))
      .click(logicDetailButtonElement);
    const tabContent = Selector(".sl-table__row.st-table__row--detail");
    await takeElementScreenshot("logic-tab-long-question-name-content.png", tabContent.filterVisible(), t, comparer);
  });
});

test("Check actions hover states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON(jsonOneRule);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName));
    await t.hover(logicDetailButtonElement);
    await takeElementScreenshot("logic-expand-hover.png", logicDetailButtonElement, t, comparer);
    const removeRuleSelector = Selector("#remove-row .sv-action-bar-item");
    await t.hover(removeRuleSelector);
    await takeElementScreenshot("logic-rule-remove-hover.png", removeRuleSelector, t, comparer);
    await t.click(logicDetailButtonElement);
    const questionOperator = Selector(".svc-logic-operator--question");
    await t.hover(questionOperator);
    await takeElementScreenshot("logic-question-action-hover.png", questionOperator, t, comparer);
    const operator = Selector(".svc-logic-operator--operator");
    await t.hover(operator);
    await takeElementScreenshot("logic-operator-hover.png", operator, t, comparer);
    const action = Selector(".svc-logic-operator--action");
    await t.hover(action);
    await takeElementScreenshot("logic-action-hover.png", action, t, comparer);
    const conditionRemoveSelector = Selector(".svc-logic-condition-remove.svc-icon-remove");
    await t
      .click(Selector(".sl-paneldynamic__add-btn.svc-logic-operator--operator"))
      .hover(questionOperator)
      .hover(conditionRemoveSelector);
    await takeElementScreenshot("logic-condition-remove-hover.png", conditionRemoveSelector, t, comparer);
    await t.hover(logicDetailButtonElement);
    await takeElementScreenshot("logic-collapse-hover.png", logicDetailButtonElement, t, comparer);
  });
});

test("Check logic error notifier", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
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
    await takeElementScreenshot("logic-error-notifier.png", Selector(".svc-notifier--error"), t, comparer);
  });
});

test("Check logic dropdown", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const patchNotifierLifeTime = ClientFunction(() => {
      window["creator"].notifier.timeout = 30000;
    });
    await t.resizeWindow(900, 900);
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
      .click(Selector(".svc-logic-operator--question"));
    await takeElementScreenshot("logic-dropdown.png", Selector(".sv-popup__container").filterVisible(), t, comparer);
    await t
      .click(Selector(".sv-list__item").withText("q1").filterVisible())
      .click(Selector(".svc-logic-operator--question"));
    await takeElementScreenshot("logic-dropdown-full.png", Selector(".sl-body").filterVisible(), t, comparer);
  });
});

test("Check logic Manual Entry", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
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
    await takeElementScreenshot("logic-fast-entry.png", conditionContentSelector, t, comparer);
    await t.click(Selector(".sl-comment")).pressKey("ctrl+a delete");
    await ClientFunction(() => { document.body.focus(); })();
    await takeElementScreenshot("logic-fast-entry-empty.png", conditionContentSelector, t, comparer);
  });
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
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON(jsonMultipleConditionsMultipleActions);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .hover(Selector(".sl-table__row"))
      .click(logicDetailButtonElement);
    await takeElementScreenshot("logic-tab-rule-content.png", ruleContent, t, comparer);
  });
});

test("rule rows", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    const ruleRows = Selector(".sl-table__cell--detail-panel .sl-row.sl-row--multiple");
    await setJSON(jsonMultipleConditionsMultipleActions);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .hover(Selector(".sl-table__row"))
      .click(logicDetailButtonElement)
      .hover(Selector(".sv-string-viewer").withText("If"));
    await takeElementScreenshot("logic-tab-rule-condition-row.png", ruleRows.nth(0), t, comparer);

    await t.hover(Selector(".sv-string-viewer").withText("then"));
    await takeElementScreenshot("logic-tab-rule-action-row.png", ruleRows.nth(2), t, comparer);
  });
});

test("unsaved rule", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 900);
    await setJSON(jsonOneRule);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .click(addNewRuleSelector)
      .click(doneButtonSelector);

    await takeElementScreenshot("logic-error-condition-question-name.png", ruleContent, t, comparer);
    await t
      .click(logicQuestionSelector)
      .click(getListItemByText("q1"))
      .click(doneButtonSelector);

    await takeElementScreenshot("logic-error-condition-question-value.png", ruleContent, t, comparer);

    await t
      .typeText(Selector(".sd-input.sd-input--error"), "test", { paste: true })
      .click(doneButtonSelector);

    await takeElementScreenshot("logic-error-action-empty.png", ruleContent, t, comparer);

    await t
      .click(logicActionSelector)
      .click(getListItemByText("Copy answer"))
      .click(doneButtonSelector);

    await takeElementScreenshot("logic-error-action-questions.png", ruleContent, t, comparer);
  });
});
const jsonAllActionTypes = {
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
          "visibleIf": "{question4} = ['Item 1']",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        },
        {
          "type": "dropdown",
          "name": "question5",
          "enableIf": "{question4} = ['Item 1']",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
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
test("logic actions", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await setJSON(jsonAllActionTypes);
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .click(tableRulesSelector.nth(0));
    await takeElementScreenshot("logic-panel-actions.png", Selector(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), t, comparer);

    await t.click(tableRulesSelector.nth(1));
    await resetHoverToCreator(t);
    await takeElementScreenshot("logic-question-actions.png", Selector(".sl-embedded-survey .svc-logic-paneldynamic").nth(1), t, comparer);
  });
});

test("Texts overflow the controls when showTitlesInExpressions is enabled #3192", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(800, 900);
    await setJSON({
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
    await ClientFunction(() => {
      window["creator"].setOptions({ showTitlesInExpressions: true });
    })();
    await t
      .click(getTabbedMenuItemByText(creatorTabLogicName))
      .hover(Selector(".sl-table__row"))
      .click(logicDetailButtonElement);
    await takeElementScreenshot("logic-condition-overflow-text.png", ruleContent, t, comparer);
  });
});