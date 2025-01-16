import { Selector } from "testcafe";

import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "SelectBase Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  showQuestionNumbers: "on",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
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

test("Dropdown adorners", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(json);

    const question = Selector(".svc-question__content");
    await takeElementScreenshot("dropdown-not-selected.png", question, t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeElementScreenshot("dropdown-selected.png", question, t, comparer);
  });
});

test("Select base editing", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "ranking",
              "name": "question1",
              "choices": [
                "Item 1",
                "ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem2",
                "Item 3"
              ],
              "minWidth": "100px",
              "maxWidth": "220px"
            }
          ]
        }
      ]
    });

    const question = Selector(".svc-question__content");

    await takeElementScreenshot("ranking-long-item-text.png", question, t, comparer);
  });
});

test("Ranking item text overflow", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(json);

    const question = Selector(".svc-question__content");

    await t
      .click(Selector(".svc-string-editor").withText("Item 1"))
      .typeText(Selector(".sv-string-editor").withText("Item 1"), "JavaScript Form Builder Libraries. Building your own form management system has never been easier. Automate forms workflow and retain full ownership of respondent data.");
    await takeElementScreenshot("dropdown-long-item-text.png", question, t, comparer);
  });
});