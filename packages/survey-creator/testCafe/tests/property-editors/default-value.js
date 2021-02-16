import { url, init } from "../../settings";
import { Selector, ClientFunction } from "testcafe";
const title = `default-value property editor`;

fixture`Property editors: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`boolean question data`, async (t) => {
  const getDefaultValue = ClientFunction(() => {
    return creator.survey.getAllQuestions()[0].defaultValue;
  });

  await t.click(`[title~=Boolean]`);

  let defaultValue = await getDefaultValue();

  await t.expect(typeof defaultValue).eql("undefined");

  const dataAccorditionTabHeader = Selector(
    ".svd-accordion-tab-header[data-title='Data']"
  ).withText("Data");

  const yes = dataAccorditionTabHeader
    .nextSibling()
    .find("label")
    .withText("Default value")
    .nextSibling("form")
    .find("span")
    .withText("Yes");

  await t.click(dataAccorditionTabHeader).click(yes);

  defaultValue = await getDefaultValue();

  await t.expect(defaultValue).eql("true");
});
