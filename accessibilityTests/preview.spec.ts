import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabPreviewName, getTabbedMenuItemByText, setJSON, url } from "./helper";

test.describe("preview a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check preview tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check preview tab with page navigator", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question2"
            }
          ]
        }
      ],
    });
    await getTabbedMenuItemByText(page, creatorTabPreviewName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});