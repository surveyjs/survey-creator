import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, setJSON, updateCreatorModel, url } from "./helper";

test.describe("designer a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await updateCreatorModel(page, { showOneCategoryInPropertyGrid: true });
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check designer tab empty", async ({ page }) => {
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check designer tab with multiple pages", async ({ page }) => {
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
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
