import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, getPropertyGridCategory, generalGroupName, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "MultipleText Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "multipletext",
          "name": "question1",
          "items": [
            {
              "name": "text1"
            },
            {
              "name": "text2"
            }
          ]
        }
      ]
    }
  ]
};

test("Multiple text items", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(json);
    await t.wait(1000);

    await t
      .click(Selector(".sd-question"))
      .click(getPropertyGridCategory("Items"));
    await ClientFunction(() => document.body.focus())();
    await takeElementScreenshot("multiple-text-items.png", Selector(".svc-side-bar .spg-panel").nth(1), t, comparer);
  });
});