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
  const languagesSelector = Selector(".svc-property-panel .spg-item.spg-checkbox");
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
    .expect(languageCaptionsSelector.nth(0).innerText).eql("Default (english)")

    .click(Selector(".spg-panel__title").withText("Languages").find(".sv-action-bar-item"))
    .click(Selector("span").withText("deutsch"))
    .expect(headerColumnSelector.count).eql(3)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.count).eql(2)
    .expect(languagesSelector.nth(0).classNames).contains(disabledClassName)
    .expect(languagesSelector.nth(0).classNames).contains(checkedClassName)
    .expect(languageCaptionsSelector.nth(0).innerText).eql("Default (english)")
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName)
    .expect(languageCaptionsSelector.nth(1).innerText).eql("deutsch")

    .click(languageCaptionsSelector.withText("deutsch"))
    .expect(headerColumnSelector.count).eql(2)
    .expect(stringsColumnSelector.count).eql(2)
    .expect(languagesSelector.nth(1).classNames).notContains(checkedClassName)

    .click(languageCaptionsSelector.withText("deutsch"))
    .expect(headerColumnSelector.count).eql(3)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName);
});