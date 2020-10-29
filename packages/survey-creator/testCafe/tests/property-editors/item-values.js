import { url, init } from "../../settings";
import { Selector, ClientFunction } from "testcafe";
const title = `item-values`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`element choices`, async (t) => {
  const choicesAccorditionTab = Selector(
    ".svd-accordion-tab-header[data-title='Choices']"
  ).withText("Choices");

  await t.click(`[title~=Radiogroup]`).click(choicesAccorditionTab);

  await t.click(
    choicesAccorditionTab
      .nextSibling()
      .find("[aria-label='Fast Entry'")
      .withText("Fast Entry")
  );

  await t.typeText(
    choicesAccorditionTab.nextSibling().find(`textarea`),
    "\nitem4"
  );

  await t.click(
    choicesAccorditionTab
      .nextSibling()
      .find("[aria-label='Form Entry'")
      .withText("Form Entry")
  );

  // -1 is the last one (item4)
  await t.click(
    choicesAccorditionTab.nextSibling().find("button").withText("Edit").nth(-1)
  );

  await t.click(
    choicesAccorditionTab
      .nextSibling()
      .find(".glyphicon-list-alt")
  );

  await t.click(
    choicesAccorditionTab.nextSibling().find(".svd-itemvalue-action").nth(-1)
  );
});
