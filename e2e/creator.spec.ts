
import { url, test, expect } from "./helper";

const title = "Creator";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });
  test("Check tabbed menu responsiveness", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 1080 });
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true }).count()).toBe(0);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true }).count()).toBe(5);
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots").isVisible()).toBeFalsy();
    await page.setViewportSize({ width: 1200, height: 1080 });
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true })).toHaveCount(0);
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true })).toHaveCount(4);
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots")).toBeVisible();
    // The overflow menu renders its list when it opens first.
    await page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-dots__item").click();
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-popup")).toBeVisible();
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sd-menu-item")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-popup")).not.toBeVisible();
    await page.setViewportSize({ width: 800, height: 1080 });
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true })).toHaveCount(0);
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true })).toHaveCount(5);
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots")).toBeHidden();
    await page.setViewportSize({ width: 1200, height: 1080 });
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true })).toHaveCount(0);
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true })).toHaveCount(4);
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots")).toBeVisible();
    // The overflow menu renders its list when it opens first.
    await page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-dots__item").click();
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-popup")).toBeVisible();
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sd-menu-item")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots .sv-popup")).not.toBeVisible();
    await page.setViewportSize({ width: 1500, height: 1080 });
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true })).toHaveCount(0);
    await expect(page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true })).toHaveCount(5);
    await expect(page.locator(".svc-tabbed-menu-item-container.sv-dots")).toBeHidden();
  });

  test("Check removeSidebar property", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 1080 });
    expect(await page.locator(".svc-side-bar").filter({ visible: true }).count()).toBe(1);
    await page.evaluate(() => { window["creator"].removeSidebar = true; });
    expect(await page.locator(".svc-side-bar").filter({ visible: true }).count()).toBe(0);
  });
});
