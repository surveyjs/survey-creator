import { Locator, Page } from "playwright/test";
import {
  url,
  test,
  expect,
  setJSON,
  getTabbedMenuItemByText,
  creatorTabDesignerName,
  creatorTabLogicName,
  getListItemByText
} from "../helper";

const title = "Logic tab";

const logicAddNewRuleButton = (page: Page) => page.locator(".svc-logic-tab__content-action").getByText("Add New Rule").locator("..");
const logicQuestionSelector = (page: Page) => page.locator(".svc-logic-operator.svc-logic-operator--question").filter({ visible: true });
const logicOperatorSelector = (page: Page) => page.locator(".svc-logic-operator.svc-logic-operator--operator:not(.sl-paneldynamic__add-btn)").filter({ visible: true });
const logicActionSelector = (page: Page) => page.locator(".svc-logic-operator--action").filter({ visible: true });
const logicQuestionValueSelector = (page: Page) => page.locator(".svc-logic-question-value input").filter({ visible: true });
const logicDropdownValueSelector = (page: Page) => page.locator(".sd-input.sd-dropdown .sd-dropdown__value").filter({ visible: true });
const logicOperatorConjuction = (page: Page) => page.locator(".svc-logic-operator.svc-logic-operator--conjunction").filter({ visible: true });
const logicActionTriggerEditorElement = (page: Page) => page.locator(".svc-logic_trigger-editor").filter({ visible: true });
const logicActionTriggerQuestionsElement = (page: Page) => page.locator(".svc-logic_trigger-questions").filter({ visible: true });
const logicDetailButtonElement = (page: Page) => page.locator(".sl-table__detail-button").filter({ visible: true });
const tableRulesSelector = (page: Page) => page.locator(".sl-table tbody .sl-table__row:not(.st-table__row--detail)").filter({ visible: true });

function getBarItemByText(page: Page, text: string): Locator {
  return page.locator(".sv-action-bar-item").filter({ has: page.locator(".sv-action-bar-item__title").getByText(text) }).filter({ visible: true });
}

async function listItemClick(page:Page, text: string) {
  await expect(getListItemByText(page, text)).toBeVisible();
  await getListItemByText(page, text).click();
  await page.waitForTimeout(100);
}

const json = { elements: [{ type: "checkbox", name: "string_editor", choices: ["Item 1", "Item 2", "Item 3"] }] };

const json2 = {
  elements: [
    { type: "dropdown", name: "q1", choices: ["Item 1", "Item 2", "Item 3"] },
    { type: "text", name: "q2", visibleIf: "{q1}='Item 1'" },
    { type: "text", name: "q3" }
  ]
};

const json3 = {
  pages: [
    {
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 1" },
        { type: "text", name: "q3", visibleIf: "{q2} = 2" },
        { type: "text", name: "q4", visibleIf: "{q1} = 3" },
      ],
    },
  ],
  triggers: [
    { type: "skip", expression: "{q1} = 1", gotoName: "q4" },
    { type: "copyvalue", expression: "{q2} = 2", setToName: "q3", fromName: "q4" }
  ],
};

const surveyJSON = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "visibleIf": "{question1} empty",
          "title": "question1-title"
        }
      ],
      "visibleIf": "{question2} contains 'qwqwqw'"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question2"
        }
      ]
    }
  ]
};

function cellRules(page: Page) {
  return page.locator(".sl-table .sl-table__row.sd-table__row--has-panel .sl-table__cell:nth-of-type(2)");
}
function removeRuleButton(page: Page) {
  return page.locator(".sl-table__remove-button");
}
function addButton(page: Page) {
  return page.locator(".sl-paneldynamic__add-btn");
}
function removeButton(page: Page) {
  return page.locator(".svc-logic-condition-remove");
}
function doneButton(page: Page) {
  return page.locator("button").getByText("Done", { exact: true });
}
function errorNotifyBalloonSelector(page: Page) {
  return page.locator(".svc-notifier.svc-notifier--error");
}
function notifyBalloonSelector(page: Page) {
  return page.locator(".svc-notifier");
}

const disabledClass = /svc-logic-tab__content-action--disabled/;
const newRuleDisplayText = "New rule";
const selectQuestionPlaceHolder = "Select...";
const selectActionTypePlaceHolder = "Select action...";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
  });

  test("Create logic rule", async ({ page }) => {
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(page.locator(".svc-logic-tab__content-empty")).toBeVisible();
    await expect(logicAddNewRuleButton(page)).not.toHaveClass(disabledClass);

    await logicAddNewRuleButton(page).click();
    await expect(logicAddNewRuleButton(page)).toHaveClass(disabledClass);
    await expect(page.locator(".svc-logic-tab__content-empty")).toHaveCount(0);
    await expect(cellRules(page)).toHaveText(newRuleDisplayText);
    await expect(logicQuestionSelector(page)).toHaveCount(1);
    await expect(logicQuestionSelector(page).first()).toContainText(selectQuestionPlaceHolder);
    await expect(logicOperatorSelector(page).first()).toContainText("Equals");
    await expect(logicActionSelector(page).first()).toContainText(selectActionTypePlaceHolder);
    await expect(logicQuestionValueSelector(page)).toHaveCount(0);
    await expect(addButton(page)).toHaveCount(0);
    await expect(removeButton(page)).toHaveCount(0);
    await expect(logicOperatorConjuction(page)).toHaveCount(0);

    await logicQuestionSelector(page).click();
    await listItemClick(page, "string_editor");
    await expect(logicQuestionValueSelector(page).first()).toBeVisible();
    await expect(addButton(page)).toHaveCount(1);
    await expect(removeButton(page)).toHaveCount(0);

    await logicOperatorSelector(page).first().click();
    await listItemClick(page, "Does not equal");
    await page.locator(".sd-checkbox").first().click();

    await addButton(page).click();
    await expect(removeButton(page)).toHaveCount(2);
    await expect(logicOperatorConjuction(page)).toHaveCount(1);
    await expect(logicQuestionSelector(page)).toHaveCount(2);
    await expect(logicOperatorSelector(page)).toHaveCount(2);

    await logicQuestionSelector(page).first().hover();
    await removeButton(page).first().click();
    await expect(logicQuestionSelector(page)).toHaveCount(1);
    await expect(logicQuestionSelector(page).first()).toContainText(selectQuestionPlaceHolder);
    await expect(logicOperatorSelector(page).first()).toContainText("Equals");
    await expect(logicActionSelector(page).first()).toContainText(selectActionTypePlaceHolder);
    await expect(logicQuestionValueSelector(page)).toHaveCount(0);
    await expect(addButton(page)).toHaveCount(0);
    await expect(removeButton(page)).toHaveCount(0);
    await expect(logicOperatorConjuction(page)).toHaveCount(0);

    await logicQuestionSelector(page).click();
    await listItemClick(page, "string_editor");
    await logicOperatorSelector(page).first().click();
    await listItemClick(page, "Not empty");
    await expect(addButton(page)).toHaveCount(1);
    await expect(removeButton(page)).toHaveCount(0);

    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await expect(logicActionTriggerEditorElement(page)).toHaveCount(0);
    await expect(logicActionTriggerQuestionsElement(page)).toHaveCount(0);
    await expect(addButton(page)).toHaveCount(2);
    await expect(removeButton(page)).toHaveCount(0);

    await logicActionSelector(page).first().click();
    await listItemClick(page, "Copy answer");
    await expect(logicActionTriggerQuestionsElement(page).first()).toBeVisible();
    await expect(logicActionTriggerEditorElement(page)).toHaveCount(0);
    await expect(addButton(page)).toHaveCount(2);
    await expect(removeButton(page)).toHaveCount(0);

    await addButton(page).nth(1).click();
    await expect(removeButton(page)).toHaveCount(2);
    await expect(page.locator(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error").first()).toHaveCount(0);

    await logicActionSelector(page).nth(1).click();
    await listItemClick(page, "Complete survey");

    await doneButton(page).click();
    await expect(errorNotifyBalloonSelector(page).first()).toHaveText("Please fix issues in your action(s).");
    await expect(page.locator(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error")).toHaveCount(2);

    await logicActionSelector(page).first().hover();
    await removeButton(page).first().click();
    await expect(removeButton(page)).toHaveCount(0);

    await expect(logicAddNewRuleButton(page)).toHaveClass(disabledClass);
    await expect(cellRules(page)).toHaveText(newRuleDisplayText);

    await doneButton(page).click();
    await expect(logicAddNewRuleButton(page)).not.toHaveClass(disabledClass);
    await expect(notifyBalloonSelector(page).first()).toHaveText("Modified");
    await expect(cellRules(page)).toHaveText("If 'string_editor' Not empty, survey becomes completed");
    await expect(cellRules(page).locator("span").first()).toHaveAttribute("title", "If 'string_editor' Not empty, survey becomes completed");
  });

  test("Logic rules", async ({ page }) => {
    await setJSON(page, json);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(0);

    await logicAddNewRuleButton(page).click();
    await logicQuestionSelector(page).click();
    await listItemClick(page, "string_editor");
    await logicOperatorSelector(page).first().click();
    await listItemClick(page, "Not empty");
    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await doneButton(page).click();
    await expect(tableRulesSelector(page)).toHaveCount(1);
    await expect(tableRulesSelector(page).locator("td").nth(1)).toHaveText("If 'string_editor' Not empty, survey becomes completed");

    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(1);
    await expect(tableRulesSelector(page).locator("td").nth(1)).toHaveText("If 'string_editor' Not empty, survey becomes completed");
  });

  test("Edit Logic rule", async ({ page }) => {
    await setJSON(page, json2);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(1);

    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();

    await expect(logicQuestionSelector(page).first()).toContainText("q1");
    await expect(logicOperatorSelector(page).first()).toContainText("Equals");

    expect(await logicDropdownValueSelector(page).first().locator(".sv-string-viewer").textContent()).toBe("Item 1");
    await expect(logicDropdownValueSelector(page).first()).toBeVisible();
    await logicDropdownValueSelector(page).first().click();

    const dropdownPopup = page.locator(".svc-logic-question-value .sv-popup__content");
    await expect(dropdownPopup).toBeVisible();
    await expect(dropdownPopup.locator(".sv-list__item").getByText("Item 2")).toBeVisible();
    await dropdownPopup.locator(".sv-list__item").getByText("Item 2").click();

    await expect(logicQuestionSelector(page).last()).toContainText("q2");
    await logicQuestionSelector(page).last().click();
    await listItemClick(page, "q3");

    await doneButton(page).click();
    await expect(tableRulesSelector(page)).toHaveCount(1);
    await expect(tableRulesSelector(page).locator("td").nth(1)).toHaveText("If 'q1' == \'Item 2\', make question 'q3' visible");
  });

  test("Filtering rules", async ({ page }) => {
    await setJSON(page, json3);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(3);

    await getBarItemByText(page, "All Questions").click();
    await listItemClick(page, "q2");
    await expect(tableRulesSelector(page)).toHaveCount(2);
    await expect(getBarItemByText(page, "q2")).toBeVisible();

    await getBarItemByText(page, "All Action Types").click();
    await listItemClick(page, "Skip to question");
    await expect(tableRulesSelector(page)).toHaveCount(1);
    await expect(getBarItemByText(page, "Skip to question")).toBeVisible();

    await logicAddNewRuleButton(page).click();
    await logicQuestionSelector(page).click();
    await listItemClick(page, "q4");
    await logicOperatorSelector(page).first().click();
    await listItemClick(page, "Not empty");
    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await doneButton(page).click();
    await expect(tableRulesSelector(page)).toHaveCount(4);
    await expect(getBarItemByText(page, "All Action Types")).toBeVisible();
    await expect(getBarItemByText(page, "All Questions")).toBeVisible();
  });

  test("Update rules", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(0);

    await setJSON(page, surveyJSON);
    await expect(tableRulesSelector(page)).toHaveCount(2);
    await expect(page.locator(".st-table__cell--actions")).toHaveCount(4);
    await expect(page.locator(".sl-table__detail-button")).toHaveCount(2);
    await expect(page.locator(".sl-table__remove-button")).toHaveCount(2);
  });

  test("Manual Entry of the editing condition", async ({ page }) => {
    const fastEntryAction = getBarItemByText(page, "Manual Entry");
    await setJSON(page, json2);

    const conditionBuilder = page.locator(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"panel\"]");
    const conditionTextEdit = page.locator(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"textEditor\"] textarea");

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(fastEntryAction).toHaveAttribute("disabled");

    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await expect(fastEntryAction).not.toHaveAttribute("disabled");
    await expect(conditionBuilder).toHaveCount(1);
    await expect(conditionTextEdit).toHaveCount(0);
    await expect(fastEntryAction).not.toHaveClass(/sv-action-bar-item--active/);

    await fastEntryAction.click();
    await expect(conditionBuilder).toHaveCount(0);
    await expect(conditionTextEdit).toHaveCount(1);
    await expect(fastEntryAction).toHaveClass(/sv-action-bar-item--active/);

    await fastEntryAction.click();
    await expect(conditionBuilder).toHaveCount(1);
    await expect(conditionTextEdit).toHaveCount(0);
    await expect(fastEntryAction).not.toHaveClass(/sv-action-bar-item--active/);

    await fastEntryAction.click();
    await expect(fastEntryAction).not.toHaveAttribute("disabled");
    await conditionTextEdit.first().fill("werwerwer");
    await expect(fastEntryAction).toHaveAttribute("disabled");
    await conditionTextEdit.first().fill("{q1}='Item 1'");
    await expect(fastEntryAction).not.toHaveAttribute("disabled");

    await logicAddNewRuleButton(page).click();
    await expect(conditionBuilder).toHaveCount(1);
    await expect(conditionTextEdit).toHaveCount(0);
    await expect(fastEntryAction).not.toHaveAttribute("disabled");
    await expect(fastEntryAction).not.toHaveClass(/sv-action-bar-item--active/);

    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await expect(conditionBuilder).toHaveCount(1);
    await expect(conditionTextEdit).toHaveCount(0);
    await expect(fastEntryAction).not.toHaveAttribute("disabled");
    await expect(fastEntryAction).not.toHaveClass(/sv-action-bar-item--active/);

    await tableRulesSelector(page).nth(1).hover();
    await removeRuleButton(page).nth(1).click();
    await expect(fastEntryAction).not.toHaveAttribute("disabled");

    await tableRulesSelector(page).first().hover();
    await removeRuleButton(page).first().click();
    await expect(fastEntryAction).toHaveAttribute("disabled");
  });

  test("Availability of the Done button", async ({ page }) => {
    await setJSON(page, json3);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await logicAddNewRuleButton(page).click();
    await expect(doneButton(page)).toBeVisible();

    await logicQuestionSelector(page).click();
    await listItemClick(page, "q4");
    await expect(doneButton(page)).toBeVisible();
  });

  async function check1Rule(page: Page, ruleCondition: string) {
    await expect(cellRules(page).first()).toHaveText(ruleCondition);
    await expect(logicQuestionSelector(page).first()).toContainText("q3");
    await expect(logicOperatorSelector(page).first()).toContainText("Equals");
    await expect(logicQuestionValueSelector(page).first()).toHaveValue("45");
    await expect(logicActionSelector(page).first()).toContainText("Complete survey");
  }

  async function check2Rule(page: Page) {
    await expect(cellRules(page).nth(1)).toHaveText(newRuleDisplayText);
    await expect(logicQuestionSelector(page).first()).toContainText("q1");
    await expect(logicOperatorSelector(page).first()).toContainText("Equals");
    expect(await logicDropdownValueSelector(page).first().locator(".sv-string-viewer").textContent()).toBe("Item 2");
    await expect(logicActionSelector(page).first()).toContainText("Show/hide question");
    await expect(logicQuestionSelector(page).nth(1)).toContainText("q3");
  }

  test("Modified rules without saving", async ({ page }) => {
    const rule1Condition = "If 'q1' == 'Item 1', make question 'q2' visible";
    const additinalClass = "sl-table__row--additional";

    await setJSON(page, json2);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(cellRules(page).first()).toHaveText(rule1Condition);
    await expect(tableRulesSelector(page).first()).not.toHaveClass(new RegExp(additinalClass));
    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await logicQuestionSelector(page).first().click();
    await listItemClick(page, "q3");
    await page.waitForTimeout(1000);
    await logicQuestionValueSelector(page).first().fill("45");
    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await check1Rule(page, rule1Condition);

    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await expect(tableRulesSelector(page).first()).toHaveClass(new RegExp(additinalClass));

    await logicAddNewRuleButton(page).click();
    await logicQuestionSelector(page).first().click();
    await listItemClick(page, "q1");

    await expect(logicDropdownValueSelector(page).first()).toBeVisible();
    await logicDropdownValueSelector(page).first().click();

    const dropdownPopup = page.locator(".svc-logic-question-value .sv-popup__content");
    await expect(dropdownPopup).toBeVisible();
    await expect(dropdownPopup.locator(".sv-list__item").getByText("Item 2")).toBeVisible();
    await dropdownPopup.locator(".sv-list__item").getByText("Item 2").click();

    await logicActionSelector(page).first().click();
    await listItemClick(page, "Show/hide question");
    await logicQuestionSelector(page).nth(1).click();
    await listItemClick(page, "q3");
    await check2Rule(page);

    await tableRulesSelector(page).nth(1).hover();
    await logicDetailButtonElement(page).nth(1).click();
    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await expect(tableRulesSelector(page).first()).not.toHaveClass(new RegExp(additinalClass));
    await expect(tableRulesSelector(page).nth(1)).toHaveClass(new RegExp(additinalClass));
    await check1Rule(page, rule1Condition);

    await tableRulesSelector(page).nth(1).hover();
    await logicDetailButtonElement(page).nth(1).click();
    await expect(tableRulesSelector(page).first()).toHaveClass(new RegExp(additinalClass));
    await expect(tableRulesSelector(page).nth(1)).not.toHaveClass(new RegExp(additinalClass));
    await check2Rule(page);

    await doneButton(page).click();
    await expect(cellRules(page).nth(1)).toHaveText("If 'q1' == 'Item 2', make question 'q3' visible");
    await expect(tableRulesSelector(page).first()).toHaveClass(new RegExp(additinalClass));
    await expect(tableRulesSelector(page).nth(1)).not.toHaveClass(new RegExp(additinalClass));

    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();
    await doneButton(page).click();
    await expect(cellRules(page).first()).toHaveText("If 'q3' == 45, survey becomes completed");
    await expect(tableRulesSelector(page).first()).not.toHaveClass(new RegExp(additinalClass));
    await expect(tableRulesSelector(page).nth(1)).not.toHaveClass(new RegExp(additinalClass));
  });

  test("check button hover/focus state", async ({ page }) => {
    const removeButtonIcon = page.locator(".sl-table__remove-button .sv-action-bar-item__icon");
    const detailButtonIcon = page.locator(".sl-table__detail-button .sv-action-bar-item__icon");
    const removeButtonRow = page.locator(".sl-table__remove-button .sv-action-bar-item");
    const detailButtonRow = page.locator(".sl-table__detail-button.sv-action-bar-item");
    const focusedClassName = "sv-focused--by-key";

    await setJSON(page, surveyJSON);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await expect(tableRulesSelector(page)).toHaveCount(2);
    await expect(removeButtonIcon.first()).toHaveCSS("opacity", "0");
    await expect(detailButtonIcon.first()).toHaveCSS("opacity", "0");

    await tableRulesSelector(page).first().hover();
    await removeButtonIcon.first().hover();
    await expect(removeButtonIcon.first()).toBeVisible();
    await expect(removeButtonIcon.nth(1)).toHaveCSS("opacity", "0");
    await detailButtonIcon.first().click();
    await detailButtonIcon.first().click();

    await tableRulesSelector(page).nth(1).hover();
    await removeButtonIcon.nth(1).hover();
    await expect(removeButtonIcon.first()).toHaveCSS("opacity", "0");
    await expect(removeButtonIcon.nth(1)).toBeVisible();

    await detailButtonIcon.nth(1).click();
    await detailButtonIcon.nth(1).click();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await logicAddNewRuleButton(page).hover();
    await expect(detailButtonIcon.nth(1)).toHaveCSS("opacity", "0");
    await expect(detailButtonRow.nth(1)).not.toHaveClass(new RegExp(focusedClassName));
    await expect(removeButtonIcon.nth(1)).toBeVisible();
    await expect(removeButtonRow.nth(1)).toHaveClass(new RegExp(focusedClassName));

    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Shift+Tab");
    await expect(detailButtonIcon.nth(1)).toBeVisible();
    await expect(detailButtonRow.nth(1)).toHaveClass(new RegExp(focusedClassName));
    await expect(removeButtonIcon.nth(1)).toHaveCSS("opacity", "0");
    await expect(removeButtonRow.nth(1)).not.toHaveClass(new RegExp(focusedClassName));
  });

  test("Bug #2857: check scroll not appear", async ({ page }) => {
    await setJSON(page, surveyJSON);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    const compareWidths = await page.evaluate(() => {
      const scrollableSelector = document.querySelector(".svc-logic-tab__content") as HTMLElement;
      return scrollableSelector && scrollableSelector.offsetWidth >= scrollableSelector.scrollWidth;
    });
    expect(compareWidths).toBeTruthy();
  });

  test("Availability of items", async ({ page }) => {
    const jsonAvailability = {
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "nps_score",
              title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)"
            },
            {
              type: "comment",
              name: "passive_experience",
              visibleIf: "{nps_score} > 6  and {nps_score} < 9",
              title: "What is the primary reason for your score?"
            }
          ],
          title: "page1 -- title",
          description: "page1 -- description"
        }
      ]
    };

    const visibleListItems = page.locator(".svc-list__item").filter({ visible: true });
    const visibleDisabledListItems = page.locator(".svc-list__item.svc-list__item--disabled").filter({ visible: true });

    await setJSON(page, jsonAvailability);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();

    await logicOperatorSelector(page).nth(1).click();
    await expect(visibleListItems).toHaveCount(8);
    await expect(visibleDisabledListItems).toHaveCount(0);
    await page.keyboard.press("Escape");

    await logicOperatorSelector(page).first().click();
    await expect(visibleListItems).toHaveCount(8);
    await expect(visibleDisabledListItems).toHaveCount(0);
    await listItemClick(page, "Greater than or equal to");
    await logicOperatorSelector(page).first().click();
    await expect(visibleListItems).toHaveCount(8);
    await expect(visibleDisabledListItems).toHaveCount(0);
    await page.keyboard.press("Escape");

    await logicOperatorSelector(page).nth(1).click();
    await expect(visibleListItems).toHaveCount(8);
    await expect(visibleDisabledListItems).toHaveCount(0);
  });

  test("Could not change 'and' on 'or' in logic tab or in condition editor", async ({ page }) => {
    const jsonAndOr = {
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "rating",
              name: "nps_score",
              title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)"
            },
            {
              type: "comment",
              name: "passive_experience",
              visibleIf: "{nps_score} > 6  and {nps_score} < 9",
              title: "What is the primary reason for your score?"
            }
          ],
          title: "page1 -- title",
          description: "page1 -- description"
        }
      ]
    };
    const visibleListItems = page.locator(".svc-list__item").filter({ visible: true });

    await setJSON(page, jsonAndOr);
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await tableRulesSelector(page).first().hover();
    await logicDetailButtonElement(page).first().click();

    await logicOperatorConjuction(page).first().click();
    await expect(visibleListItems).toHaveCount(2);
    await expect(visibleListItems.first()).toContainText("and");
    await expect(visibleListItems.nth(1)).toContainText("or");
  });

  test("Confirm dialog on leaving tab with an incorrect rule", async ({ page }) => {
    const cancelButton = page.locator(".sv-modal-popup__button").getByText("I want to complete the rules");
    const applyButton = page.locator(".sv-modal-popup__button").getByText("Yes");

    await setJSON(page, json2);

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await logicAddNewRuleButton(page).click();
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await expect(page.locator(".sv-string-viewer").getByText("General")).toBeVisible();
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await logicAddNewRuleButton(page).click();
    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await applyButton.click();
    await expect(page.locator(".sv-string-viewer").getByText("General")).toBeVisible();
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await logicAddNewRuleButton(page).click();
    await logicActionSelector(page).first().click();
    await listItemClick(page, "Complete survey");
    await getTabbedMenuItemByText(page, creatorTabDesignerName).click();
    await cancelButton.click();
    await expect(page.locator(".sv-string-viewer").getByText("General")).toHaveCount(0);
    await expect(logicActionSelector(page).first()).toBeVisible();
  });

  test("Logic Tab - The Search option is available", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).Survey.ListModel.MINELEMENTCOUNT = 2;
    });
    await setJSON(page, {
      pages: [
        {
          name: "page1",
          elements: [
            { type: "text", name: "question11" },
            {
              type: "rating",
              name: "nps_score",
              title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
              isRequired: true,
              rateCount: 11,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "(Most unlikely)",
              maxRateDescription: "(Most likely)"
            },
            {
              type: "checkbox",
              name: "promoter_features",
              title: "What features do you value the most?",
              isRequired: true,
              validators: [
                { type: "answercount", text: "Please select two features maximum.", maxCount: 2 }
              ],
              choices: ["Performance", "Stability", "User Interface", "Complete Functionality"],
              showOtherItem: true,
              otherText: "Other feature:",
              colCount: 2
            },
            {
              type: "comment",
              name: "passive_experience",
              visibleIf: "{nps_score} > 6",
              title: "What is the primary reason for your score?"
            },
            {
              type: "comment",
              name: "disappointed_experience",
              title: "What do you miss and what was disappointing in your experience with us?"
            }
          ],
          title: "page1 -- title",
          description: "page1 -- description"
        },
        {
          name: "page2",
          elements: [
            {
              type: "checkbox",
              name: "question4",
              choices: ["item1", "item2", "item3"]
            }
          ]
        },
        {
          name: "page3",
          elements: [
            {
              type: "dropdown",
              name: "question5",
              choices: ["item1", "item2", "item3"]
            }
          ]
        },
        {
          name: "page4",
          elements: [{ type: "rating", name: "question6" }]
        }
      ],
    });

    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await tableRulesSelector(page).first().hover();
    await expect(logicDetailButtonElement(page).first()).toBeVisible();

    await logicDetailButtonElement(page).first().click();
    await expect(logicQuestionSelector(page).first()).toBeVisible();
    await expect(logicQuestionSelector(page).first().locator("..").locator(".sv-popup")).not.toBeVisible();

    await logicQuestionSelector(page).first().click();
    await expect(logicQuestionSelector(page).first().locator("..").locator(".sv-popup")).toBeVisible();
    await expect(logicQuestionSelector(page).first().locator("..").locator(".sv-popup .svc-list__filter")).toBeVisible();
  });
});
