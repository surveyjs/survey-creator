import { url, setJSON, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const makeCreatorReadOnly = ClientFunction(() => {
  window["creator"].readOnly = true;
});

test("Default value", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const question1 = Selector("[data-name=\"question1\"]");
  const dataTab = Selector("h4").withExactText("Data");
  const item1PGEditorInput = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find("td").nth(1).find("input");

  await t
    .click(question1)
    .click(dataTab)
    .click(Selector("span").withExactText("Set Default Answer"))
    .click(Selector(".sv-popup--modal span").withExactText("Item 1"))
    .click(Selector(".sv-popup--modal button").withExactText("Apply"))
    .expect(Selector("span").withExactText("Change Default Answer").visible).ok();
  const resultJson = await getJSON();
  await t
    .expect(resultJson.pages[0].elements[0].defaultValue).eql(["Item 1"])
    .click(Selector("span").withExactText("Clear"))
    .expect(Selector("span").withExactText("Set Default Answer").visible).ok();
  const resultJson2 = await getJSON();
  await t
    .expect(resultJson2.pages[0].elements[0].defaultValue).eql(undefined);
});
test.only("Default value & readonly", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "rating",
            "name": "question1",
            "defaultValue": 3
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await makeCreatorReadOnly();

  const question1 = Selector("[data-name=\"question1\"]");
  const dataTab = Selector("h4").withExactText("Data");

  await t
    .click(question1)
    .click(dataTab)
    .expect(Selector("span").withExactText("Clear").exists).notOk()
    .click(Selector("span").withExactText("Change Default Answer"))
    .click(Selector(".sv-popup__body-header").withExactText("Default Answer"))
    .expect(Selector(".sv-popup--modal button").withExactText("Apply").filterVisible().exists).notOk()
    .click(Selector(".sv-popup--modal button").withExactText("Cancel"))
    .expect(Selector("span").withExactText("Change Default Answer").visible).ok();
});