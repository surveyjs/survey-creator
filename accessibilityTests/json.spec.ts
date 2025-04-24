import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabJSONName, getTabbedMenuItemByText, url } from "./helper";

test.describe("json a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check json tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabJSONName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test.skip("Check json tab with errors", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabJSONName).click();
    const editor = page.getByRole("textbox", { name: "JSON Editor" });
    await editor.fill(JSON.stringify({
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question2"
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
    }));
    await editor.blur();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
