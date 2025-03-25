import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabLogicName, getTabbedMenuItemByText, setJSON, updateCreatorModel, url } from "./helper";

test.describe("logic a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await updateCreatorModel(page, { showLogicTab: true });
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check logic tab empty", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check logic with new rule", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.getByRole("button", { name: "Add New Rule" }).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check logic with completed rule", async ({ page }) => {
    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question2",
              "visibleIf": "{question1} = 'test'"
            }
          ]
        }
      ],
      "triggers": [
        {
          "type": "complete",
          "expression": "{question1} = 1"
        }
      ],
    });
    await getTabbedMenuItemByText(page, creatorTabLogicName).click();
    await page.locator("button[title='Edit']").nth(0).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});
