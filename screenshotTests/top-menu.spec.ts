import { test, expect } from "@playwright/test";
import { url, setJSON, compareScreenshot } from "./helper";

test.describe("Top Menu Screenshot", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Top menu on designer tab", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true, pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    const topBarElement = page.locator(".svc-top-bar");

    await compareScreenshot(page, topBarElement, "top-menu-designer-tab.png");

    await page.hover(".svc-tabbed-menu-item >> nth=1");
    await compareScreenshot(page, topBarElement, "top-menu-preview-hover.png");

    await page.click(".svc-toolbox");
    await page.click(".svc-toolbox");
    await compareScreenshot(page, topBarElement, "top-menu-undo-active.png");

    await page.hover(".sv-action--action-undo");
    await compareScreenshot(page, topBarElement, "top-menu-undo-active-hovered.png");

    await page.hover(".sv-action--action-redo");
    await compareScreenshot(page, topBarElement, "top-menu-redo-inactive-hovered.png");

    await page.click(".sv-action--action-undo .sv-action-bar-item");
    await page.click(".svc-side-bar .spg-row >> nth=1");
    await compareScreenshot(page, topBarElement, "top-menu-undo-and-redo-active.png");

    await page.click(".sv-action--action-undo .sv-action-bar-item");
    await page.click(".svc-side-bar .spg-row >> nth=1");
    await compareScreenshot(page, topBarElement, "top-menu-redo-active.png");

    await page.hover("[title='Survey settings']");
    await compareScreenshot(page, topBarElement, "top-menu-settings-checked-hovered.png");

    await page.evaluate(() => {
      (window as any)["creator"].toolbar.actions.forEach(a => a.pressed = true);
    });
    await compareScreenshot(page, topBarElement, "top-menu-pressed-buttons.png");
  });

  test("Top menu with single item", async ({ page }) => {
    await setJSON(page, {
      showQuestionNumbers: true, pages: [{ name: "page1" }]
    });
    await page.setViewportSize({ width: 1920, height: 1080 });

    const topBarElement = page.locator(".svc-top-bar");

    await page.evaluate(() => {
      (window as any)["creator"].toolbarItems.forEach(a => a.visible = a.id == "svd-settings");
    });

    await compareScreenshot(page, topBarElement, "top-menu-designer-tab-single-item.png");
  });

  test("Tabbed menu: icons responsivity", async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 1080 });
    const topBarElement = page.locator(".svc-top-bar");
    await setJSON(page, {
      showQuestionNumbers: true, pages: [{ name: "page1" }]
    });
    await page.evaluate(() => {
      (window as any).creator.tabResponsivenessMode = "icons";
    });
    await compareScreenshot(page, topBarElement, "top-menu-responsivity-icons-big.png");
    await page.setViewportSize({ width: 700, height: 1080 });
    await compareScreenshot(page, topBarElement, "top-menu-responsivity-icons-medium.png");
    await page.setViewportSize({ width: 600, height: 1080 });
    await compareScreenshot(page, topBarElement, "top-menu-responsivity-icons-small.png");
  });
});