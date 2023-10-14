import { url, setJSON, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Change question name and select another question", async (t) => {
  await ClientFunction(() => {
    window["creator"].JSON = {
      "elements": [
        { "type": "checkbox", "name": "question1" },
        { "type": "checkbox", "name": "question2" }
      ]
    };
  })();
  await t
    .click(Selector("[data-name=\"question1\"]"))
    .click(Selector("div [data-name=\"name\"] input"))
    .pressKey("ctrl+a A B C")
    .click(Selector("[data-name=\"question2\"]"))
    .click(Selector("[data-name=\"ABC\"]"))
    .expect(Selector("[data-name=\"ABC\"]").exists).ok();
});

