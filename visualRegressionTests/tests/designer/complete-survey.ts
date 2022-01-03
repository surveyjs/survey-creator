import { Selector } from "testcafe";
import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

import { url, setJSON, getTabbedMenuItemByText, creatorTabPreviewName, checkElementScreenshot } from "../../helper";

const title = "Complete survey tab";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
        }
      ]
    }
  ]
};

test("Check the upper part of the page", async (t) => {
  await t.resizeWindow(1920, 1080);

  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  await setJSON(json);

  await t.click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"));

  await t.wait(1000);

  const thankYouMessage = Selector(".sd-completedpage h3");
  await checkElementScreenshot("complete-tab-thank-message.png", thankYouMessage, t);

  const startAgainButton = Selector(".svc-preview__test-again");
  await checkElementScreenshot("complete-tab-test-again.png", startAgainButton, t);

  const upperPart = Selector(".svc-test-tab__content");
  await checkElementScreenshot("complete-tab-upper-part.png", upperPart, t);
});
