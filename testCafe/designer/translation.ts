import { url, getTabbedMenuItemByText, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Translation tab";

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

fixture(title)
  .page(url)
  .beforeEach(async (t) => await t.maximizeWindow());

test("add language", async (t) => {
  const languageHeaderColumnSelector = Selector(".st-strings-header table tr").nth(0).find("th");
  const stringsColumnSelector = Selector(".st-strings table tr").nth(0).find("td");
  const languagesSelector = Selector(".spg-checkbox");
  const languageDefaultText = Selector(".spg-table__question-wrapper").withText("Default (English)");
  const languageDeText = Selector(".spg-table__question-wrapper").withText("Deutsch");
  const checkedClassName = "spg-checkbox--checked";
  const disabledClassName = "spg-checkbox--disabled";

  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText("Translation"))

    .expect(languageHeaderColumnSelector.count).eql(1)
    .expect(stringsColumnSelector.count).eql(2)

    .expect(languagesSelector.count).eql(1)
    .expect(languagesSelector.nth(0).classNames).contains(disabledClassName)
    .expect(languagesSelector.nth(0).classNames).contains(checkedClassName)
    .expect(languageDefaultText.exists).ok()

    .click(Selector(".spg-question__title").withText("Languages").find(".spg-action-button"))
    .click(Selector("span").withText("Deutsch"))
    .expect(languageHeaderColumnSelector.count).eql(2)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.count).eql(2)
    .expect(languagesSelector.nth(0).classNames).contains(disabledClassName)
    .expect(languagesSelector.nth(0).classNames).contains(checkedClassName)
    .expect(languageDefaultText.exists).ok()
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName)
    .expect(languageDeText.exists).ok()

    .click(languagesSelector.nth(1))
    .expect(languageHeaderColumnSelector.count).eql(1)
    .expect(stringsColumnSelector.count).eql(2)
    .expect(languagesSelector.nth(1).classNames).notContains(checkedClassName)

    .click(languagesSelector.nth(1))
    .expect(languageHeaderColumnSelector.count).eql(2)
    .expect(stringsColumnSelector.count).eql(3)
    .expect(languagesSelector.nth(1).classNames).contains(checkedClassName);
});