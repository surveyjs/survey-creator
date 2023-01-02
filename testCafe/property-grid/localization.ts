import { url, setJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

const setDELocale = ClientFunction(() => {
  window["creator"].locale = "de";
});

test("visibleIf property in de localization", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          { "type": "text", "name": "question2" }
        ]
      }
    ]
  };
  await setJSON(json);
  await setDELocale();

  const question1 = Selector("[data-name=\"question1\"]");
  const generalTab = Selector("h4").withExactText("Allgemein");
  const logicTab = Selector("h4").withExactText("Logik");
  const editVisibleIf = Selector("button").withExactText("Bearbeiten");
  const popup = Selector(".sv-popup__body-content");
  const chooseQuestion = popup.find(".sl-dropdown__value");
  const chooseQuestion2 = popup.find(".sd-list__item-body");
  const question2Text = popup.find(".sd-input");
  const applyBtn = Selector("button").withExactText("Anwenden");
  await t
    .click(question1)
    .click(generalTab)
    .click(logicTab)
    .click(editVisibleIf)
    .click(chooseQuestion)
    .click(chooseQuestion2)
    .typeText(question2Text, "val1")
    .click(applyBtn);
});
