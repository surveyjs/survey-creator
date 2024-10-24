import { urlLocalized_de, getTabbedMenuItemByText, setJSON, creatorTabDesignerName, creatorTabLogicName, logicQuestionSelector, logicOperatorSelector, logicActionSelector, logicQuestionValueSelector, logicOperatorConjuction, logicActionTriggerEditorElement, logicDetailButtonElement, logicDropdownValueSelector, getListItemByText, getBarItemByText, logicActionTriggerQuestionsElement, tableRulesSelector, logicAddNewRuleButton, getDropdownValue } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Localization UI";
const customLogicTabName = "Miner Logik";

fixture(title)
  .page(urlLocalized_de)
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test("Change localization JSON", async (t) => {
  await t
    .click(getTabbedMenuItemByText(customLogicTabName))
    .expect(Selector(".svc-logic-tab__content-empty").exists).ok()
    .expect(Selector(".svc-logic-tab__content-empty").visible).ok();
});