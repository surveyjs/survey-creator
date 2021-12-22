import { Selector } from "testcafe";
import { url, setJSON, getTabbedMenuItemByText, creatorTabLogicName, checkElementScreenshot } from "../../helper";

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

test("one rule view", async (t) => {
  await t.resizeWindow(1920, 900);
  await setJSON(jsonOneRule);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicDetailButtonElement);
  const tabContent = Selector(".svc-creator-tab__content");
  await checkElementScreenshot("logic-tab-one-rule-content.png", tabContent, t);
});

const logicDetailButtonElement = Selector(".sl-table__cell--detail-button").filterVisible();
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

test.skip("rule content", async (t) => {
  await t.resizeWindow(1920, 900);
  const ruleContent = Selector(".sl-table__cell--detail-panel");
  await setJSON(jsonMultipleConditionsMultipleActions);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicDetailButtonElement);
  await checkElementScreenshot("logic-tab-rule-content.png", ruleContent, t);
});

test("rule rows", async (t) => {
  await t.resizeWindow(1920, 900);
  const ruleRows = Selector(".sl-table__cell--detail-panel .sl-row.sl-row--multiple");
  await setJSON(jsonMultipleConditionsMultipleActions);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicDetailButtonElement);
  await checkElementScreenshot("logic-tab-rule-condition-row.png", ruleRows.nth(0), t);
  await checkElementScreenshot("logic-tab-rule-action-row.png", ruleRows.nth(2), t);
});