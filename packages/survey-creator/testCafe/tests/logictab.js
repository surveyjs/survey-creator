import { url, init } from "../helper";
import page from "../page-model";
import { Selector } from "testcafe";
const title = `logictab_editor`;

fixture`General: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  var creatorOptions = { showLogicTab: true };
  await init(creatorOptions);
});

test(`Create logic: question visibility`, async (t) => {
  await t
    .click(page.toolBarQuestion("Dropdown"))
    .click(page.toolBarQuestion("Checkbox"))
    .click(page.toolBarQuestion("Single Input"))
    .click(page.toolBarQuestion("Single Input"))
    .expect(page.questions.count)
    .eql(4);

  await t
    .click(page.creatorTab("Survey Logic"))
    .click(page.buttonByValue("Add New"));

  await t
    .click(page.buttonByValue("Save and return"))
    .expect(
      Selector("span").withText(
        "The logic expression is empty or invalid. Please correct it."
      ).exists
    )
    .ok();

  const questionSelect = Selector(`div[name="questionName"]`).find("select");
  await t
    .click(questionSelect)
    .click(questionSelect.find("option").withText("question1"));
  const questionValue = Selector(`div[name="questionValue"]`).find("select");
  await t
    .click(questionValue)
    .click(questionValue.find("option").withText("item1"));

  await t
    .click(page.buttonByValue("Save and return"))
    .expect(
      Selector("span").withText("Please, fix problems in your action(s).")
        .exists
    )
    .ok();

  const actionSelect = Selector("select").withAttribute(
    "aria-label",
    "Select an action to add..."
  );
  await t
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Question visibility"));

  var visibilitySelect = Selector(".svd-logic-tab__item").find("select").nth(1);
  await t
    .click(visibilitySelect)
    .click(visibilitySelect.find("option").withText("question4"));

  await t.click(page.buttonByValue("Save and return"));
  await t
    .expect(Selector("span").withText("{question1} == 'item1'").exists)
    .ok();
  await t
    .expect(
      Selector("span").withText("Make question {question4} visible").exists
    )
    .ok();
});

test(`Check all actions`, async (t) => {
  await t
    .click(page.toolBarQuestion("Dropdown"))
    .click(page.toolBarQuestion("Checkbox"))
    .click(page.toolBarQuestion("Single Input"))
    .click(page.toolBarQuestion("Single Input"))
    .expect(page.questions.count)
    .eql(4);

  await t
    .click(page.creatorTab("Survey Logic"))
    .click(page.buttonByValue("Add New"));

  const actionSelect = Selector("[aria-label='Select an action to add...']");
  await t
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Question visibility"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Question enable/disable"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Question optional required"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Complete survey"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Set question value"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Copy question value"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Skip to question"))
    .click(actionSelect)
    .click(actionSelect.find("option").withText("Run custom expression"))
    .click(actionSelect)
    .click(
      actionSelect.find("option").withText("Custom 'Thank you page' text")
    );
});
