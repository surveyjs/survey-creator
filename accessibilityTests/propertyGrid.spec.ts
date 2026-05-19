import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, setJSON, updateCreatorModel, url } from "./helper";

test.describe("property grid a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await updateCreatorModel(page, { showOneCategoryInPropertyGrid: true });
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test("Check data category", async ({ page }) => {
    await setJSON(page, { "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }] }], });
    await page.click(".svc-sidebar__header-content .svc-sidebar__header-object-selector");
    await page.locator(".sd-menu-item__body", { hasText: "question1" }).click();
    await page.click(".svc-sidebar-tabs__item .sd-action[title='Data']");
    await expect(page.getByRole("button", { name: "Set Default Answer" })).toBeVisible();
    await checkA11y(page, ["#survey-creator", ".spg-page"], { axeOptions });
  });
});

