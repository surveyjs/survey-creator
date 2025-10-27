
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
    await page.waitForTimeout(1000);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true }).count()).toBe(0);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true }).count()).toBe(4);
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots").isVisible()).toBeTruthy();
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots .svc-list__item").count()).toBe(1);
    await page.setViewportSize({ width: 800, height: 1080 });
    await page.waitForTimeout(1000);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true }).count()).toBe(0);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true }).count()).toBe(5);
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots").isVisible()).toBeFalsy();
    await page.setViewportSize({ width: 1200, height: 1080 });
    await page.waitForTimeout(1000);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true }).count()).toBe(0);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true }).count()).toBe(4);
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots").isVisible()).toBeTruthy();
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots .svc-list__item").count()).toBe(1);
    await page.setViewportSize({ width: 1500, height: 1080 });
    await page.waitForTimeout(1000);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item.svc-tabbed-menu-item--icon").filter({ visible: true }).count()).toBe(0);
    expect(await page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item:not(.svc-tabbed-menu-item--icon)").filter({ visible: true }).count()).toBe(5);
    expect(await page.locator(".svc-tabbed-menu-item-container.sv-dots").isVisible()).toBeFalsy();
  });

  test("Check removeSidebar property", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 1080 });
    expect(await page.locator(".svc-side-bar")).toBeVisible();
    await page.evaluate(() => { window["creator"].removeSidebar = true; });
    expect(await page.locator(".svc-side-bar")).toBeHidden();
  });
});
