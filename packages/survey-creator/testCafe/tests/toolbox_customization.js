import { url, init, getListItemByText } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = `toolbox customization`;

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`answer custom question in test tab`, async t => {
  const addItem = ClientFunction(() => {
    const itemAsJson = {
      name: "countries",
      isCopied: true,
      iconName: "icon-default",
      title: "All countries",
      json: {
        type: "dropdown",
        choices: [
          "Afghanistan",
          "Cuba",
          "Virgin Islands (U.S.)",
          "São Tomé and Príncipe"
        ]
      }
    };

    creator.toolbox.addItem(itemAsJson);
  });
  const getTestTab = Selector(
    () => document.querySelectorAll(".svd_container ul li:nth-child(2)")[0]
  );

  await addItem();

  await t
    .click(`[title~=countries]`)
    .click(getTestTab)
    .wait(1000)
    .click(Selector(`div[data-name="question1"]`).filterVisible())
    .click(getListItemByText("Cuba"));
});
