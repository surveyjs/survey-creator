import { url, getTabbedMenuItemByText, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Translation tab";

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

fixture(title)
  .page(url)
  .beforeEach(async (t) => await t.maximizeWindow());

test("add language", async (t) => {
  const headerColumnSelector = Selector(".st-strings-header table tr").nth(0).find("th");
  const stringsColumnSelector = Selector(".st-strings table tr").nth(0).find("td");
  const languagesSelector = Selector(".svc-side-bar__container .spg-item.spg-checkbox");
  const languageCaptionsSelector = languagesSelector.find(".spg-checkbox__caption");
  const checkedClassName = "spg-checkbox--checked";
  const disabledClassName = "spg-checkbox--disabled";

  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText("Translation"))

    .expect(headerColumnSelector.count).eql(2)
    .expect(stringsColumnSelector.count).eql(2)

    .expect(languagesSelector.count).eql(1)
    .expect(languagesSelector.nth(0).classNames).contains(disabledClassName)
    .expect(languagesSelector.nth(0).classNames).contains(checkedClassName)
    .expect(languageCaptionsSelector.nth(0).innerText).eql("Default (English)")

    .click(Selector(".spg-panel__title").withText("Languages").find(".spg-action-button"))
    .click(Selector("span").withText("Deutsch"))
    .expect(headerColumnSelector.count).eql(3)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.count).eql(2)
    .expect(languagesSelector.nth(0).classNames).contains(disabledClassName)
    .expect(languagesSelector.nth(0).classNames).contains(checkedClassName)
    .expect(languageCaptionsSelector.nth(0).innerText).eql("Default (English)")
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName)
    .expect(languageCaptionsSelector.nth(1).innerText).eql("Deutsch")

    .click(languageCaptionsSelector.withText("Deutsch"))
    .expect(headerColumnSelector.count).eql(2)
    .expect(stringsColumnSelector.count).eql(2)
    .expect(languagesSelector.nth(1).classNames).notContains(checkedClassName)

    .click(languageCaptionsSelector.withText("Deutsch"))
    .expect(headerColumnSelector.count).eql(3)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName);
});