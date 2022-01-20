import { url, setJSON, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
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
              "item1",
              "item2",
              "item3"
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

  await ClientFunction(() => {
    window["creator"].showSidebar = true;
  })();

  await t
    .click(question1)
    .click(dataTab)
    .click(Selector("span").withExactText("Set Default value"))
    .click(Selector(".sv-popup--modal span").withExactText("item1"))
    .click(Selector(".sv-popup--modal button").withExactText("Apply"))
    .expect(Selector("span").withExactText("Change Default value").visible).ok();
  const resultJson = await getJSON();
  await t
    .expect(resultJson.pages[0].elements[0].defaultValue).eql(["item1"])
    .click(Selector("span").withExactText("Clear"))
    .expect(Selector("span").withExactText("Set Default value").visible).ok();
  const resultJson2 = await getJSON();
  await t
    .expect(resultJson2.pages[0].elements[0].defaultValue).eql(undefined);
});