import { ClientFunction, Selector, t } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, checkElementScreenshot, logicQuestionSelector, getSelectOptionByText, logicActionSelector } from "../../helper";

const title = "Logic tab Screenshot";

fixture`${title}`.page`${url}`;

test("empty view", async (t) => {
  await t.resizeWindow(1920, 900);

  const tabContent = Selector(".svc-creator-tab__content");

  await t.click(getTabbedMenuItemByText(creatorTabLogicName));
  await checkElementScreenshot("logic-tab-empty.png", tabContent, t);
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
  await t.click(Selector(".sl-paneldynamic__add-btn.svc-logic-operator--operator")).hover(conditionRemoveSelector);
  await checkElementScreenshot("logic-condition-remove-hover.png", conditionRemoveSelector, t);
  await t.hover(logicDetailButtonElement);
  await checkElementScreenshot("logic-collapse-hover.png", logicDetailButtonElement, t);
});

test("Check logic error notifier", async (t) => {
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

test("Check logic fast entry", async (t) => {
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
    .click(logicDetailButtonElement);
  await checkElementScreenshot("logic-tab-rule-condition-row.png", ruleRows.nth(0), t);
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
    .click(getSelectOptionByText("q1"))
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-condition-question-value.png", ruleContent, t);

  await t
    .typeText(Selector(".sd-input.sd-input--error"), "test")
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-action-empty.png", ruleContent, t);

  await t
    .click(logicActionSelector)
    .click(getSelectOptionByText("Copy question value"))
    .click(doneButtonSelector);

  await checkElementScreenshot("logic-error-action-questions.png", ruleContent, t);
});