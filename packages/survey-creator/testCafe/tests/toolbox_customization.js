import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const title = `toolbox customization`;

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`asnwer custom question in test tab`, async t => {
  const addItem = ClientFunction(() => {
    const itemAsJson = {
      name: "countries",
      isCopied: true,
      iconName: "icon-default",
      title: "All countries",
      json: {
        type: "dropdown",
        choicesByUrl: { url: "https://restcountries.eu/rest/v1/all" }
      }
    };

    creator.toolbox.addItem(itemAsJson);
  });
  const getTestTab = Selector(
    () => document.querySelectorAll(".svd_container ul li:nth-child(2)")[0]
  );

  await addItem();

  const dropdown = Selector("#surveyjsExample select").nth(3);
  const optionCuba = dropdown.find("option[value=Cuba]");

  await t
    .click(`[title~=countries]`)
    .click(getTestTab)
    .wait(1000)
    .click(dropdown)
    .click(optionCuba);
});
