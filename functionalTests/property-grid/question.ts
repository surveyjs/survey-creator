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

test("Change rating auto-generate", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "rating",
            "name": "question1",
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const question1 = Selector("[data-name=\"question1\"]");
  const choicesTab = Selector("h4").withExactText("Rating Values");
  const items = Selector("[data-name=\"rateValues\"]");

  await t
    .click(question1)
    .click(choicesTab)
    .expect(items.visible).notOk()
    .click(Selector(".spg-button-group__item-caption").withExactText("Manual"))
    .expect(items.visible).ok()
    .click(Selector(".spg-button-group__item-caption").withExactText("Auto-generate"))
    .expect(items.visible).notOk();
});

test("Check survey settings button", async (t) => {
  const question1 = Selector("[data-name=\"q1\"]");
  const maskPage = Selector('.svc-menu-action__button[title="Input Mask Settings"]');
  const changeInputType = ClientFunction((val: string) => { window["creator"].survey.getQuestionByName("q1").inputType = val; });
  await ClientFunction(() => window["creator"].showOneCategoryInPropertyGrid = true)();
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "q1"
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await t
    .click(question1)
    .expect(maskPage.visible).ok();
  await changeInputType("date");
  await t.expect(maskPage.visible).notOk();
  await changeInputType("text");
  await t.expect(maskPage.visible).ok();
});