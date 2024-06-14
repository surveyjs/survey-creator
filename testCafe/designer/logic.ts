import { url, getTabbedMenuItemByText, setJSON, creatorTabDesignerName, creatorTabLogicName, logicQuestionSelector, logicOperatorSelector, logicActionSelector, logicQuestionValueSelector, logicOperatorConjuction, logicActionTriggerEditorElement, logicDetailButtonElement, logicDropdownValueSelector, getListItemByText, getBarItemByText, logicActionTriggerQuestionsElement, tableRulesSelector, logicAddNewRuleButton, getDropdownValue } from "../helper";
import { ClientFunction, Selector } from "testcafe";

const title = "Logic tab";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    }
  ]
};

const json2 = {
  questions: [
    {
      type: "dropdown",
      name: "q1",
      choices: [
        "Item 1",
        "Item 2",
        "Item 3"
      ]
    },
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

const conditionBuilder = Selector(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"panel\"]");
const conditionTextEdit = Selector(".sl-embedded-survey[data-name=\"conditions\"] div[data-name=\"textEditor\"]");

const newRuleDisplayText = "New rule";
const cellRules = Selector(tableRulesSelector.find(".sl-table__row.sd-table__row--has-panel .sl-table__cell:nth-of-type(2)"));
const removeRuleButton = Selector(".sl-table__remove-button").filterVisible();
const disabledClass = "svc-logic-tab__content-action--disabled";
const addButton = Selector(".sl-paneldynamic__add-btn ").filterVisible();
const removeButton = Selector(".svc-logic-condition-remove");
const doneButton = Selector("button").withExactText("Done").filterVisible();

const errorNotifyBalloonSelector = Selector(".svc-notifier.svc-notifier--error").filterVisible();
const notifyBalloonSelector = Selector(".svc-notifier").filterVisible();

const selectQuestionPlaceHolder = "Select...";
const selectActionTypePlaceHolder = "Select action...";

test("Create logic rule", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(Selector(".svc-logic-tab__content-empty").exists).ok()
    .expect(Selector(".svc-logic-tab__content-empty").visible).ok()
    .expect(logicAddNewRuleButton.classNames).notContains(disabledClass)

    .click(logicAddNewRuleButton)
    .expect(logicAddNewRuleButton.classNames).contains(disabledClass)
    .expect(Selector(".svc-logic-tab__content-empty").exists).notOk()
    .expect(cellRules.innerText).eql(newRuleDisplayText)
    .expect(logicQuestionSelector.count).eql(1)
    .expect(logicQuestionSelector.textContent).contains(selectQuestionPlaceHolder)
    .expect(logicOperatorSelector.textContent).contains("Equals")
    .expect(logicActionSelector.textContent).contains(selectActionTypePlaceHolder)
    .expect(logicQuestionValueSelector.exists).notOk()
    .expect(addButton.count).eql(0)
    .expect(removeButton.count).eql(0)
    .expect(logicOperatorConjuction.count).eql(0)

    .click(logicQuestionSelector)
    .click(getListItemByText("string_editor"))
    .expect(logicQuestionValueSelector.visible).ok()
    .expect(addButton.count).eql(1)
    .expect(removeButton.count).eql(0)

    .click(logicOperatorSelector)
    .click(getListItemByText("Does not equal"))
    .click(Selector(".sd-checkbox").filterVisible())

    .click(addButton)
    .expect(removeButton.count).eql(2)
    .expect(removeButton.filterVisible().count).eql(1) // this line is hovered
    .expect(logicOperatorConjuction.count).eql(1)
    .expect(logicQuestionSelector.count).eql(2)
    .expect(logicOperatorSelector.count).eql(2)

    .hover(logicQuestionSelector)
    .click(removeButton)
    .expect(logicQuestionSelector.count).eql(1)
    .expect(logicQuestionSelector.textContent).contains(selectQuestionPlaceHolder)
    .expect(logicOperatorSelector.textContent).contains("Equals")
    .expect(logicActionSelector.textContent).contains(selectActionTypePlaceHolder)
    .expect(logicQuestionValueSelector.exists).notOk()
    .expect(addButton.count).eql(0)
    .expect(removeButton.count).eql(0)
    .expect(logicOperatorConjuction.count).eql(0)

    .click(logicQuestionSelector)
    .click(getListItemByText("string_editor"))
    .click(logicOperatorSelector)
    .click(getListItemByText("Not empty"))
    .expect(addButton.count).eql(1)
    .expect(removeButton.count).eql(0)

    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"))
    .expect(logicActionTriggerEditorElement.exists).notOk()
    .expect(logicActionTriggerQuestionsElement.exists).notOk()
    .expect(addButton.count).eql(2)
    .expect(removeButton.count).eql(0)

    .click(logicActionSelector)
    .click(getListItemByText("Copy answer"))
    .expect(logicActionTriggerQuestionsElement.exists).ok()
    .expect(logicActionTriggerEditorElement.exists).notOk()
    .expect(addButton.count).eql(2)
    .expect(removeButton.count).eql(0)

    .click(addButton.nth(1))
    .expect(removeButton.count).eql(2)
    .expect(Selector(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error").filterVisible().count).eql(0)

    .click(logicActionSelector.nth(1))
    .click(getListItemByText("Complete survey"))

    .click(doneButton)
    .expect(errorNotifyBalloonSelector.innerText).eql("Please fix issues in your action(s).")
    .expect(Selector(".svc-logic-operator.svc-logic-operator--question.svc-logic-operator--error").filterVisible().count).eql(2)

    .hover(logicActionSelector)
    .click(removeButton.filterVisible())
    .expect(removeButton.count).eql(0)

    .expect(logicAddNewRuleButton.classNames).contains(disabledClass)
    .expect(cellRules.innerText).eql(newRuleDisplayText)

    .click(doneButton)
    .expect(logicAddNewRuleButton.classNames).notContains(disabledClass)
    .expect(notifyBalloonSelector.innerText).eql("Modified")
    .expect(cellRules.innerText).eql("If 'string_editor' Not empty, survey becomes completed")
    .expect(cellRules.find("span").getAttribute("title")).eql("If 'string_editor' Not empty, survey becomes completed");
});

test("Logic rules", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(0)

    .click(logicAddNewRuleButton)
    .click(logicQuestionSelector)
    .click(getListItemByText("string_editor"))
    .click(logicOperatorSelector)
    .click(getListItemByText("Not empty"))
    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"))
    .click(doneButton)
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'string_editor' Not empty, survey becomes completed")

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'string_editor' Not empty, survey becomes completed");
});

test("Edit Logic rule", async (t) => {
  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(1)

    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)

    .expect(logicQuestionSelector.textContent).contains("q1")
    .expect(logicOperatorSelector.textContent).contains("Equals")

    .expect(getDropdownValue(logicDropdownValueSelector)).eql("Item 1")
    .click(logicDropdownValueSelector)
    .click(getListItemByText("Item 2"))

    .expect(logicQuestionSelector.nth(-1).textContent).contains("q2")
    .click(logicQuestionSelector.nth(-1))
    .click(getListItemByText("q3"))

    .click(doneButton)
    .expect(tableRulesSelector.count).eql(1)
    .expect(tableRulesSelector.find("td").nth(1).innerText).eql("If 'q1' == \'Item 2\', make question 'q3' visible");
});

test("Filtering rules", async (t) => {
  await setJSON(json3);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(3)

    .click(getBarItemByText("All Questions"))
    .click(getListItemByText("q2"))
    .expect(tableRulesSelector.count).eql(2)
    .expect(getBarItemByText("q2").visible).ok()

    .click(getBarItemByText("All Action Types"))
    .click(getListItemByText("Skip to question"))
    .expect(tableRulesSelector.count).eql(1)
    .expect(getBarItemByText("Skip to question").visible).ok()

    .click(logicAddNewRuleButton)
    .click(logicQuestionSelector)
    .click(getListItemByText("q4"))
    .click(logicOperatorSelector)
    .click(getListItemByText("Not empty"))
    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"))
    .click(doneButton)
    .expect(tableRulesSelector.count).eql(4)
    .expect(getBarItemByText("All Action Types").visible).ok()
    .expect(getBarItemByText("All Questions").visible).ok();
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

test("Manual Entry of the editing condition", async (t) => {
  const fastEntryAction = getBarItemByText("Manual Entry");
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
    .typeText(conditionTextEdit, "{q1}='Item 1'", { replace: true })
    .expect(fastEntryAction.hasAttribute("disabled")).notOk()

    .click(logicAddNewRuleButton)
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
    .click(logicAddNewRuleButton)
    .expect(doneButton.visible).ok()

    .click(logicQuestionSelector)
    .click(getListItemByText("q4"))
    .expect(doneButton.visible).ok();
});

async function check1Rule(t: TestController, ruleCondition: string) {
  await t
    .expect(cellRules.nth(0).innerText).eql(ruleCondition)
    .expect(logicQuestionSelector.textContent).contains("q3")
    .expect(logicOperatorSelector.textContent).contains("Equals")
    .expect(logicQuestionValueSelector.find("input").value).eql("45")
    .expect(logicActionSelector.textContent).contains("Complete survey");
}
async function check2Rule(t: TestController) {
  await t
    .expect(cellRules.nth(1).innerText).eql(newRuleDisplayText)
    .expect(logicQuestionSelector.textContent).contains("q1")
    .expect(logicOperatorSelector.textContent).contains("Equals")
    .expect(getDropdownValue(logicDropdownValueSelector)).eql("Item 2")
    .expect(logicActionSelector.textContent).contains("Show/hide question")
    .expect(logicQuestionSelector.nth(1).textContent).contains("q3");
}

test("Modified rules without saving", async (t) => {
  const rule1Condition = "If 'q1' == 'Item 1', make question 'q2' visible";
  const additinalClass = "sl-table__row--additional";

  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(cellRules.nth(0).innerText).eql(rule1Condition)
    .expect(tableRulesSelector.nth(0).classNames).notContains(additinalClass)
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement.nth(0))
    .click(logicQuestionSelector)
    .click(getListItemByText("q3"))
    .typeText(logicQuestionValueSelector, "45", { replace: true, paste: true })
    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"));
  await check1Rule(t, rule1Condition);

  await t
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement.nth(0))
    .expect(tableRulesSelector.nth(0).classNames).contains(additinalClass)

    .click(logicAddNewRuleButton)
    .click(logicQuestionSelector)
    .click(getListItemByText("q1"))
    .click(logicDropdownValueSelector)
    .click(getListItemByText("Item 2"))
    .click(logicActionSelector)
    .click(getListItemByText("Show/hide question"))
    .click(logicQuestionSelector.nth(1))
    .click(getListItemByText("q3"));
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
    .expect(cellRules.nth(1).innerText).eql("If 'q1' == 'Item 2', make question 'q3' visible")
    .expect(tableRulesSelector.nth(0).classNames).contains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).notContains(additinalClass)

    .hover(tableRulesSelector)
    .click(logicDetailButtonElement)
    .click(doneButton)
    .expect(cellRules.nth(0).innerText).eql("If 'q3' == 45, survey becomes completed")
    .expect(tableRulesSelector.nth(0).classNames).notContains(additinalClass)
    .expect(tableRulesSelector.nth(1).classNames).notContains(additinalClass);
});

test("check button hover/focus state", async (t) => {
  const removeButtonIcon = Selector(".sl-table__remove-button .sv-action-bar-item__icon");
  const detailButtonIcon = Selector(".sl-table__detail-button .sv-action-bar-item__icon");
  const removeButton = Selector(".sl-table__remove-button .sv-action-bar-item");
  const detailButton = Selector(".sl-table__detail-button.sv-action-bar-item");
  const focusedClassName = "sv-focused--by-key";

  await setJSON(surveyJSON);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(tableRulesSelector.count).eql(2)
    .expect(removeButtonIcon.visible).notOk()
    .expect(detailButtonIcon.visible).notOk()

    .hover(tableRulesSelector.nth(0))
    .hover(removeButtonIcon.nth(0))
    .expect(removeButtonIcon.nth(0).visible).ok()
    .expect(removeButtonIcon.nth(1).visible).notOk()
    .click(detailButtonIcon)
    .click(detailButtonIcon)

    .hover(tableRulesSelector.nth(1))
    .hover(removeButtonIcon.nth(1))
    .expect(removeButtonIcon.nth(0).visible).notOk()
    .expect(removeButtonIcon.nth(1).visible).ok()

    .click(detailButtonIcon.nth(1))
    .click(detailButtonIcon.nth(1))
    .pressKey("tab tab")
    .hover(logicAddNewRuleButton)
    .expect(detailButtonIcon.nth(1).visible).notOk()
    .expect(detailButton.nth(1).classNames).notContains(focusedClassName)
    .expect(removeButtonIcon.nth(1).visible).ok()
    .expect(removeButton.nth(1).classNames).contains(focusedClassName)

    .pressKey("shift+tab")
    .pressKey("shift+tab")
    .expect(detailButtonIcon.nth(1).visible).ok()
    .expect(detailButton.nth(1).classNames).contains(focusedClassName)
    .expect(removeButtonIcon.nth(1).visible).notOk()
    .expect(removeButton.nth(1).classNames).notContains(focusedClassName);
});

test("Bug #2857: check scroll not appear", async (t) => {
  await setJSON(surveyJSON);

  const compareWidths = ClientFunction(() => {
    const scrollableSelector = <HTMLElement>document.querySelector(".svc-logic-tab__content");
    return scrollableSelector.offsetWidth >= scrollableSelector.scrollWidth;
  });

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .expect(compareWidths()).ok();
});

test("Availability of items", async (t) => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
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
            "type": "comment",
            "name": "passive_experience",
            "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
            "title": "What is the primary reason for your score?"
          }
        ],
        "title": "page1 -- title",
        "description": "page1 -- description"
      }
    ]
  };
  const visibleListItems = Selector(".sv-list__item").filterVisible();
  const visibleDisabledListItems = Selector(".sv-list__item.sv-list__item--disabled").filterVisible();
  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)

    .click(logicOperatorSelector.nth(1))
    .expect(visibleListItems.count).eql(8)
    .expect(visibleDisabledListItems.count).eql(0)
    .pressKey("esc")

    .click(logicOperatorSelector.nth(0))
    .expect(visibleListItems.count).eql(8)
    .expect(visibleDisabledListItems.count).eql(0)
    .click(getListItemByText("Greater than or equal to"))
    .click(logicOperatorSelector.nth(0))
    .expect(visibleListItems.count).eql(8)
    .expect(visibleDisabledListItems.count).eql(0)
    .pressKey("esc")

    .click(logicOperatorSelector.nth(1))
    .expect(visibleListItems.count).eql(8)
    .expect(visibleDisabledListItems.count).eql(0);
});

test("Could not change 'and' on 'or' in logic tab or in condition editor", async (t) => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
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
            "type": "comment",
            "name": "passive_experience",
            "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
            "title": "What is the primary reason for your score?"
          }
        ],
        "title": "page1 -- title",
        "description": "page1 -- description"
      }
    ]
  };
  const visibleListItems = Selector(".sv-list__item").filterVisible();

  await setJSON(json);
  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .hover(tableRulesSelector.nth(0))
    .click(logicDetailButtonElement)

    .click(logicOperatorConjuction)
    .expect(visibleListItems.count).eql(2)
    .expect(visibleListItems.nth(0).textContent).contains("and")
    .expect(visibleListItems.nth(1).textContent).contains("or");
});
test("Confirm dialog on leaving tab with an incorrect rule", async (t) => {
  const popupButtonSelector = Selector(".sv-popup__button");
  const cancelButton = popupButtonSelector.withText("I want to complete the rules");
  const applyButton = popupButtonSelector.withText("Yes");

  await setJSON(json2);

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicAddNewRuleButton)
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(Selector(".sv-string-viewer").withText("General").exists).ok()
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicAddNewRuleButton)
    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"))
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(applyButton)
    .expect(Selector(".sv-string-viewer").withText("General").exists).ok()
    .click(getTabbedMenuItemByText(creatorTabLogicName))
    .click(logicAddNewRuleButton)
    .click(logicActionSelector)
    .click(getListItemByText("Complete survey"))
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(cancelButton)
    .expect(Selector(".sv-string-viewer").withText("General").exists).notOk()
    .expect(logicActionSelector.exists).ok();
});
test("Logic Tab - The Search option is available", async (t) => {
  await setJSON({
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
            "rateCount": 11,
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
            "visibleIf": "{nps_score} > 6",
            "title": "What is the primary reason for your score?"
          },
          {
            "type": "comment",
            "name": "disappointed_experience",
            "title": "What do you miss and what was disappointing in your experience with us?"
          }
        ],
        "title": "page1 -- title",
        "description": "page1 -- description"
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "checkbox",
            "name": "question4",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "dropdown",
            "name": "question5",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      },
      {
        "name": "page4",
        "elements": [
          {
            "type": "rating",
            "name": "question6"
          }
        ]
      }
    ],
  });

  await t
    .click(getTabbedMenuItemByText(creatorTabLogicName))

    .hover(tableRulesSelector)

    .click(logicDetailButtonElement)
    .expect(logicQuestionSelector.parent().find(".sv-popup").visible).notOk()

    .click(logicQuestionSelector)
    .expect(logicQuestionSelector.parent().find(".sv-popup").visible).ok()
    .expect(logicQuestionSelector.parent().find(".sv-popup .sv-list__filter").visible).ok();
});