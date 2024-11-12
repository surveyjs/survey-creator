import { Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "ValueLink Actions in Data section Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    }
  ]
};

test("Check states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);

    await setJSON(json);

    // await t
    //   .click(Selector(".svd-grid-expand"));
    await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
    await t.wait(500);
    await t.click(Selector("h4[aria-label=General]"));
    await t.click(Selector("h4[aria-label=Data]"));

    const buttonElement = Selector(".svc-action-button.svc-link-value-button.svc-question-link__set-button");
    await takeElementScreenshot("action-button-default.png", buttonElement, t, comparer);

    await t.hover(buttonElement);
    await takeElementScreenshot("action-button-hovered.png", buttonElement, t, comparer);
  });
});
