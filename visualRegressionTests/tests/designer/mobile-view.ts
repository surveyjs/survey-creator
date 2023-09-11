import { Selector } from "testcafe";
import { url, takeElementScreenshot, propertyGridSelector, setJSON, creatorContentSelector, wrapVisualTest } from "../../helper";

const title = "Mobile view / responsiveness";

fixture`${title}`.page`${url}`;

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "choices": ["One", "Two", "Three"]
        }
      ]
    },
  ]
};

test("check whole layout", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(500, 900);
    await setJSON(json);
    await takeElementScreenshot("creator-mobile-paddings.png", Selector(".svc-creator"), t, comparer);
  });
});
