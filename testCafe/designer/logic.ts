import { url, getTabbedMenuItemByText, setJSON, creatorTabDesignerName, creatorTabLogicName, logicQuestionSelector, logicOperatorSelector, logicActionSelector, logicQuestionValueSelector, logicOperatorConjuction, logicActionPanelElement, logicDetailButtonElement, logicDropdownValueSelector, getSelectOptionByText, getBarItemByText, getListItemByText } from "../helper";
import { ClientFunction, Selector } from "testcafe";

const title = "Logic tab";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

const json2 = {
  questions: [
    {
      type: "radiogroup",
      name: "q1",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    },
    { type: "text", name: "q2", visibleIf: "{q1}='item1'" },
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
    {
      type: "skip",
      expression: "{q1} = 1",
      gotoName: "q4",
    },
    {
      type: "copyvalue",
      expression: "{q2} = 2",
      setToName: "q3",
      fromName: "q4"
    }
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

fixture(title)
  .page(url)
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

const tableRulesSelector = Selector(".sl-table tbody .sl-table__row:not(.st-table__row--detail)").filterVisible();
const conditionBuilder = Selector(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"panel\"]");
const conditionTextEdit = Selector(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"textEditor\"]");

const newRuleCondition = "New rule is not set";
const newRuleActions = "Value is empty";
const cellRules = Selector(tableRulesSelector.find(".sl-table__cell[data-responsive-title=\"rules\"]"));
const removeRuleButton = Selector(".sv-action-bar-item[title=\"Remove\"]").filterVisible();
const disabledClass = "svc-logic-tab__content-action--disabled";
const addNewRuleButton = Selector(".svc-logic-tab__content-action").withText("Add New Rule");
const addButton = Selector(".sl-paneldynamic__add-btn ").filterVisible();
const removeButton = Selector(".svc-logic-condition-remove").filterVisible();
const doneButton = Selector("button").withExactText("Done").filterVisible();

const errorNotifyBalloonSelector = Selector(".svc-notifier.svc-notifier--error").filterVisible();
const notifyBalloonSelector = Selector(".svc-notifier").filterVisible();

test("Create logic rule", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(Selector(".svc-logic-tab__content-empty").exists).ok()
    .expect(Selector(".svc-logic-tab__content-empty").visible).ok()
    .expect(addNewRuleButton.classNames).notContains(disabledClass)

    .click(addNewRuleButton)
    .expect(addNewRuleButton.classNames).contains(disabledClass)
    .expect(Selector(".svc-logic-tab__content-empty").exists).notOk()
    .expect(cellRules.innerText).eql(newRuleCondition)
    .expect(logicQuestionSelector.count).eql(1)
    .expect(logicQuestionSelector.value).eql("")
    .expect(logicOperatorSelector.innerText).eql("equals")
    .expect(logicActionSelector.value).eql("")
    .expect(logicQuestionValueSelector.exists).notOk()
    .expect(addButton.count).eql(0)
    .expect(removeButton.count).eql(0)
    .expect(logicOperatorConjuction.count).eql(0)

    .click(logicQuestionSelector)
    .click(getSelectOptionByText("string_editor"))
    .expect(logicQuestionValueSelector.visible).ok()
    .expect(addButton.count).eql(1)
    .expect(removeButton.count).eql(0)

    .click(logicOperatorSelector)
    .click(getSelectOptionByText("not equals"))
    .click(Selector(".sd-checkbox").filterVisible())

    .click(addButton)
    .expect(removeButton.count).eql(2)
    .expect(logicOperatorConjuction.count).eql(1)
    .expect(logicQuestionSelector.count).eql(2)
    .expect(logicOperatorSelector.count).eql(2)

    .click(removeButton)
    .expect(logicQuestionSelector.count).eql(1)
    .expect(logicQuestionSelector.value).eql("")
    .expect(logicOperatorSelector.innerText).eql("equals")
    .expect(logicActionSelector.value).eql("")
    .expect(logicQuestionValueSelector.exists).notOk()
    .expect(addButton.count).eql(0)
    .expect(removeButton.count).eql(0)
    .expect(logicOperatorConjuction.count).eql(0)

    .click(logicQuestionSelector)
    .click(getSelectOptionByText("string_editor"))
    .click(logicOperatorSelector)
    .click(getSelectOptionByText("is not empty"))
    .expect(addButton.count).eql(1)
    .expect(removeButton.count).eql(0)

    .click(logicActionSelector)
    .click(getSelectOptionByText("Complete survey"))
    .expect(logicActionPanelElement.exists).notOk()
    .expect(addButton.count).eql(2)
    .expect(removeButton.count).eql(0)

    .click(logicActionSelector)
    .click(getSelectOptionByText("Copy question value"))
    .expect(logicActionPanelElement.exists).ok()
    .expect(addButton.count).eql(2)
    .expect(removeButton.count).eql(0)

    .click(addButton.nth(1))
    .expect(removeButton.count).eql(2)
    .expect(Selector(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error").filterVisible().count).eql(0)

    .click(logicActionSelector.nth(1))
    .click(getSelectOptionByText("Complete survey"))

    .click(doneButton)
    .expect(errorNotifyBalloonSelector.innerText).eql("Please, fix problems in your action(s).")
    .expect(Selector(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error").filterVisible().count).eql(2)

    .click(removeButton)
    .expect(removeButton.count).eql(0)

    .expect(addNewRuleButton.classNames).contains(disabledClass)
    .expect(cellRules.innerText).eql("New rule is not set")

    .click(doneButton)
    .expect(addNewRuleButton.classNames).notContains(disabledClass)
    .expect(notifyBalloonSelector.innerText).eql("Modified")
    .expect(cellRules.innerText).eql("If 'string_editor' is not empty, survey becomes completed")
    .expect(cellRules.find("span").getAttribute("title")).eql("If 'string_editor' is not empty, survey becomes completed");
});

test("Logic rules", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(0)

    .click(addNewRuleButton)
    .click(logicQuestionSelector)
    .click(getSelectOptionByText("string_editor"))
    .click(logicOperatorSelector)
    .click(getSelectOptionByText("is not empty"))
    .click(logicActionSelector)
    .click(getSelectOptionByText("Complete survey"))
    .click(doneButton)
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'string_editor' is not empty, survey becomes completed")

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'string_editor' is not empty, survey becomes completed");
});

test("Edit Logic rule", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(1)

    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)

    .expect(logicQuestionSelector.value).eql("q1")
    .expect(logicOperatorSelector.value).eql("equal")

    .expect(logicDropdownValueSelector.value).eql("item1")
    .click(logicDropdownValueSelector)
    .click(getSelectOptionByText("item2"))

    .expect(logicQuestionSelector.nth(-1).value).eql("q2")
    .click(logicQuestionSelector.nth(-1))
    .click(getSelectOptionByText("q3"))

    .click(doneButton)
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'q1' == \'item2\', make question 'q3' visible");
});

test("Filtering rules", async (t) => {
  await setJSON(json3);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(3)

    .click(getBarItemByText("Show all questions"))
    .click(getListItemByText("q2"))
    .expect(tableRulesSelector.count).eql(2)
    .expect(getBarItemByText("q2").visible).ok()

    .click(getBarItemByText("Show all action types"))
    .click(getListItemByText("Skip to question"))
    .expect(tableRulesSelector.count).eql(1)
    .expect(getBarItemByText("Skip to question").visible).ok()

    .click(addNewRuleButton)
    .click(logicQuestionSelector)
    .click(getSelectOptionByText("q4"))
    .click(logicOperatorSelector)
    .click(getSelectOptionByText("is not empty"))
    .click(logicActionSelector)
    .click(getSelectOptionByText("Complete survey"))
    .click(doneButton)
    .expect(tableRulesSelector.count).eql(4)
    .expect(getBarItemByText("Show all action types").visible).ok()
    .expect(getBarItemByText("Show all questions").visible).ok();
});

test("Update rules", async (t) => {
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(0);

  await setJSON(surveyJSON);
  await t
    .expect(tableRulesSelector.count).eql(2)
    .expect(Selector(".st-table__cell--actions").count).eql(4)
    .expect(Selector(".sl-table__detail-button").count).eql(2)
    .expect(Selector("#remove-row").count).eql(2);
});

test("Fast entry of the editing condition", async (t) => {
  const fastEntryAction = getBarItemByText("Fast Entry");
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(fastEntryAction.hasAttribute("disabled")).ok()

    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()
    .expect(conditionBuilder.exists).ok()
    .expect(conditionTextEdit.exists).notOk()
    .expect(fastEntryAction.classNames).notContains("sv-action-bar-item--active")

    .click(fastEntryAction)
    .expect(conditionBuilder.exists).notOk()
    .expect(conditionTextEdit.exists).ok()
    .expect(fastEntryAction.classNames).contains("sv-action-bar-item--active")

    .click(fastEntryAction)
    .expect(conditionBuilder.exists).ok()
    .expect(conditionTextEdit.exists).notOk()
    .expect(fastEntryAction.classNames).notContains("sv-action-bar-item--active")

    .click(fastEntryAction)
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()
    .typeText(conditionTextEdit, "werwerwer")
    .expect(fastEntryAction.hasAttribute("disabled")).ok()
    .typeText(conditionTextEdit, "{q1}='item1'", { replace: true })
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()

    .click(addNewRuleButton)
    .expect(conditionBuilder.exists).ok()
    .expect(conditionTextEdit.exists).notOk()
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()
    .expect(fastEntryAction.classNames).notContains("sv-action-bar-item--active")

    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)
    .expect(conditionBuilder.exists).ok()
    .expect(conditionTextEdit.exists).notOk()
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()
    .expect(fastEntryAction.classNames).notContains("sv-action-bar-item--active")

    .hover(tableRulesSelector.nth(1))
    .click(removeRuleButton.nth(1))
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()

    .hover(tableRulesSelector.nth(0))
    .click(removeRuleButton)
    .expect(fastEntryAction.hasAttribute("disabled")).ok();
});

test("Availability of the Done button", async (t) => {
  await setJSON(json3);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(addNewRuleButton)
    .expect(doneButton.visible).ok()

    .click(logicQuestionSelector)
    .click(getSelectOptionByText("q4"))
    .expect(doneButton.visible).ok();
});

async function check1Rule(t: TestController, ruleCondition: string) {
  await t
    .expect(cellRules.nth(0).innerText).eql(ruleCondition)
    .expect(logicQuestionSelector.value).eql("q3")
    .expect(logicOperatorSelector.value).eql("equal")
    .expect(logicQuestionValueSelector.find("input").value).eql("45")
    .expect(logicActionSelector.value).eql("trigger_complete");
}
async function check2Rule(t: TestController) {
  await t
    .expect(cellRules.nth(1).innerText).eql(newRuleCondition)
    .expect(logicQuestionSelector.value).eql("q1")
    .expect(logicOperatorSelector.value).eql("equal")
    .expect(logicDropdownValueSelector.value).eql("item2")
    .expect(logicActionSelector.value).eql("question_visibility")
    .expect(logicQuestionSelector.nth(1).value).eql("q3");
}

test("Modified rules without saving", async (t) => {
  const rule1Condition = "If 'q1' == 'item1', make question 'q2' visible";
  const additinalClass = "sl-table__row--additional";

  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(cellRules.nth(0).innerText).eql(rule1Condition)
    .expect(tableRulesSelector.nth(0).classNames).notContains(additinalClass)

    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement.nth(0))
    .click(logicQuestionSelector)
    .click(getSelectOptionByText("q3"))
    .typeText(logicQuestionValueSelector, "45", { replace: true })
    .click(logicActionSelector)
    .click(getSelectOptionByText("Complete survey"));
  await check1Rule(t, rule1Condition);

  await t
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement.nth(0))
    .expect(tableRulesSelector.nth(0).classNames).contains(additinalClass)

    .click(addNewRuleButton)
    .click(logicQuestionSelector)
    .click(getSelectOptionByText("q1"))
    .click(logicDropdownValueSelector)
    .click(getSelectOptionByText("item2"))
    .click(logicActionSelector)
    .click(getSelectOptionByText("Show (hide) question"))
    .click(logicQuestionSelector.nth(1))
    .click(getSelectOptionByText("q3"));
  await check2Rule(t);

  await t
    .hover(tableRulesSelector.nth(1))
    .click(logicDetailButtonElement.nth(1))
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement.nth(0))
    .expect(tableRulesSelector.nth(0).classNames).notContains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).contains(additinalClass);
  await check1Rule(t, rule1Condition);

  await t
    .hover(tableRulesSelector.nth(1))
    .click(logicDetailButtonElement.nth(1))
    .expect(tableRulesSelector.nth(0).classNames).contains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).notContains(additinalClass);
  await check2Rule(t);

  await t
    .click(doneButton)
    .expect(cellRules.nth(1).innerText).eql("If 'q1' == 'item2', make question 'q3' visible")
    .expect(tableRulesSelector.nth(0).classNames).contains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).notContains(additinalClass)

    .hover(tableRulesSelector)
    .click(logicDetailButtonElement)
    .click(doneButton)
    .expect(cellRules.nth(0).innerText).eql("If 'q3' == 45, survey becomes completed")
    .expect(tableRulesSelector.nth(0).classNames).notContains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).notContains(additinalClass);
});