import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { axeOptions, creatorTabPreviewName, creatorTabThemeName, getTabbedMenuItemByText, setJSON, updateCreatorModel, url } from "./helper";

test.describe("themes a11y", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
    await updateCreatorModel(page, { showThemeTab: true, showOneCategoryInPropertyGrid: true });
    await injectAxe(page);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test("Check themes tab general tab", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check themes tab header settings", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await page.getByTitle("Header").click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
  test("Check themes tab appearance settings", async ({ page }) => {
    await getTabbedMenuItemByText(page, creatorTabThemeName).click();
    await page.getByTitle("Appearance").click();
    await checkA11y(page, ".svc-creator", { axeOptions });
  });
});