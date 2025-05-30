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
    await page.click(".svc-sidebar__header-content .svc-menu-action__button");
    await page.locator(".svc-list__item-body", { hasText: "question1" }).click();
    await page.click(".svc-menu-action__button[title='Data']");
    await expect(page.getByRole("button", { name: "Set Default Answer" })).toBeVisible();
    await checkA11y(page, ".spg-page", { axeOptions });
  });
});
