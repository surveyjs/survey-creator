import { Selector } from "testcafe";
import { url, setJSON, checkElementScreenshot } from "../../helper";

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
  await t.resizeWindow(1920, 1080);

  await setJSON(json);

  // await t
  //   .click(Selector(".svd-grid-expand"));
  await t.click(Selector(".svc-question__content"), { offsetX: -10, offsetY: -10 });
  await t.wait(500);
  await t.click(Selector("h4[aria-label=General]"));
  await t.click(Selector("h4[aria-label=Data]"));

  const buttonElement = Selector(".svc-action-button.svc-link-value-button.svc-question-link__set-button");
  await checkElementScreenshot("action-button-default.png", buttonElement, t);

  await t.hover(buttonElement);
  await checkElementScreenshot("action-button-hovered.png", buttonElement, t);
});
