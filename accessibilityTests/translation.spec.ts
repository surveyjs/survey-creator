import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabTranslationName, getTabbedMenuItemByText, setJSON, url } from "./helper";

test.describe("translation a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check translation tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabTranslationName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check translation tab with multiple languages", async ({ page }) => {
    await setJSON(page, {
      elements: [
        {
          type: "text",
          name: "q1",
          title: {
            default: "testEN",
            de: "testDE"
          }
        }
      ]
    });
    await getTabbedMenuItemByText(page, creatorTabTranslationName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
