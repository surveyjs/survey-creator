import { url, setJSON, getJSON } from "../helper";
import { Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Panel stay focused on question change", async (t) => {
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
          },
          {
            "type": "checkbox",
            "name": "question2",
            "title": "question2",
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
  const question2 = Selector("[data-name=\"question2\"]");

  await t
    .click(question1)
    .click(Selector("h4").withExactText("Layout"))
    .click(question2)
    .expect(Selector("span").withExactText("Is start with new line?").parent().find("input").focused).ok()
    .click(Selector("div [data-name=\"minWidth\"] input"))
    .click(question1)
    .expect(Selector("div [data-name=\"minWidth\"] input").focused).ok();
});