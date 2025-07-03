import { test, expect } from "@playwright/test";
import { url, setJSON } from "./helper";

test.describe("Top Menu Screenshot", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Top menu on designer tab", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    const topBarElement = page.locator(".svc-top-bar");

    await expect(topBarElement).toHaveScreenshot("top-menu-designer-tab.png");

    await page.hover(".svc-tabbed-menu-item >> nth=1");
    await expect(topBarElement).toHaveScreenshot("top-menu-preview-hover.png");

    await page.click(".svc-toolbox");
    await page.click(".svc-toolbox");
    await expect(topBarElement).toHaveScreenshot("top-menu-undo-active.png");

    await page.hover("#action-undo");
    await expect(topBarElement).toHaveScreenshot("top-menu-undo-active-hovered.png");

    await page.hover("#action-redo");
    await expect(topBarElement).toHaveScreenshot("top-menu-redo-inactive-hovered.png");

    await page.click("#action-undo .sv-action-bar-item");
    await page.click(".svc-side-bar .spg-row >> nth=1");
    await expect(topBarElement).toHaveScreenshot("top-menu-undo-and-redo-active.png");

    await page.click("#action-undo .sv-action-bar-item");
    await page.click(".svc-side-bar .spg-row >> nth=1");
    await expect(topBarElement).toHaveScreenshot("top-menu-redo-active.png");

    await page.hover("[title='Survey settings']");
    await expect(topBarElement).toHaveScreenshot("top-menu-settings-checked-hovered.png");

    await page.evaluate(() => {
      (window as any)["creator"].toolbar.actions.forEach(a => a.pressed = true);
    });
    await expect(topBarElement).toHaveScreenshot("top-menu-pressed-buttons.png");
  });

  test("Top menu with single item", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    const topBarElement = page.locator(".svc-top-bar");

    await page.evaluate(() => {
      (window as any)["creator"].toolbarItems.forEach(a => a.visible = a.id == "svd-settings");
    });

    await expect(topBarElement).toHaveScreenshot("top-menu-designer-tab-single-item.png");
  });

  test("Tabbed menu: icons responsivity", async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 1080 });
    const topBarElement = page.locator(".svc-top-bar");
    await setJSON(page, {
      showQuestionNumbers: "on", pages: [{ name: "page1" }]
    });
    await page.evaluate(() => {
      (window as any).creator.tabResponsivenessMode = "icons";
    });
    await expect(topBarElement).toHaveScreenshot("top-menu-responsivity-icons-big.png");
    await page.setViewportSize({ width: 700, height: 1080 });
    await expect(topBarElement).toHaveScreenshot("top-menu-responsivity-icons-medium.png");
    await page.setViewportSize({ width: 600, height: 1080 });
    await expect(topBarElement).toHaveScreenshot("top-menu-responsivity-icons-small.png");
  });
});