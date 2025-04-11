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
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "checkbox",
            "name": "question2",
            "title": "question2",
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
  const question2 = Selector("[data-name=\"question2\"]");

  await t
    .click(question1)
    .click(Selector("h4").withExactText("Layout"))
    .click(question2)
    .expect(Selector("span").withExactText("Display the question on a new line").parent().find("input").visible).ok()
    .click(Selector("div [data-name=\"minWidth\"] input"))
    .click(question1)
    .expect(Selector("div [data-name=\"minWidth\"] input").focused).ok();
});

test("Show/hide panel header on entering/deleting the panel title, Bug#5720", async (t) => {
  const json = {
    elements: [
      {
        type: "panel",
        name: "panel1"
      }
    ]
  };
  const panel = Selector(".svc-panel__placeholder");
  const hiddenPanelHeader = Selector(".svc-element__header--hidden");
  const titleEditor = Selector("[data-name='title']").find("textarea");
  await setJSON(json);
  await t
    .click(panel)
    .expect(hiddenPanelHeader.exists).ok()
    .click(titleEditor)
    .typeText(titleEditor, "MyTitle")
    .expect(hiddenPanelHeader.exists).notOk()
    .expect(Selector(".sv-string-editor").withText("MyTitle").exists).ok()
    .selectText(titleEditor)
    .pressKey("delete")
    .expect(hiddenPanelHeader.exists).ok();
});