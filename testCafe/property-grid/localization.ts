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
  const chooseQuestion2 = popup.find(".sl-list__item-body");
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

test("Matrix column editor in de localization", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "matrixdropdown",
            "name": "question1",
            "columns": [
              { "name": "Column 1" },
              { "name": "Column 2" },
              { "name": "Column 3" }
            ],
            "choices": [1, 2, 3, 4, 5],
            "rows": ["Row 1", "Row 2"]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await setDELocale();

  const row1Column1Cell = Selector(".sd-table__row").nth(0).find(".svc-matrix-cell").filterVisible().nth(1);
  const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();
  const popup = Selector(".svc-matrix-cell__popup.sv-popup--modal .sv-popup__body-content");
  const applyBtn = Selector("button").withExactText("Anwenden");
  const cancelBtn = Selector("button").withExactText("Abbrechen");

  await t
    .expect(Selector(".svc-question__content").exists).ok()
    .hover(row1Column1Cell, { speed: 0.5 })
    .click(editColumnButton)

    .expect(popup.visible).ok()
    .expect(applyBtn.exists).ok()
    .expect(applyBtn.visible).ok()
    .expect(cancelBtn.exists).ok()
    .expect(cancelBtn.visible).ok()

    .click(applyBtn)
    .expect(popup.visible).notOk();
});