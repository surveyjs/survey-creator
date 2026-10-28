import type { Page } from "@playwright/test";
import { url, urlPresets, test, expect, showPresets } from "./helper";

const title = "Unitless line-height";

async function useUnitlessLineHeight(page: Page): Promise<void> {
  await page.evaluate(() => {
    const style = document.createElement("style");
    style.textContent = ".sd-theme-root { --sjs2-typography-line-height-default: 1.5; }";
    document.head.appendChild(style);
  });
}

// Spacing tokens are calc()s. A probe inside the theme root resolves them to pixels.
async function readLength(page: Page, selector: string, value: string): Promise<number> {
  return page.locator(selector).first().evaluate((el, lengthValue) => {
    const host = el.closest(".sd-theme-root") ?? document.body;
    const probe = document.createElement("div");
    probe.style.cssText = "position:absolute;visibility:hidden;width:" + lengthValue;
    host.appendChild(probe);
    const width = probe.getBoundingClientRect().width;
    probe.remove();
    return width;
  }, value);
}

test.describe(title, () => {
  test("sizes stay valid when line-height is a number", async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 900 });
    const tabItem = page.locator(".svc-tabbed-menu-item").first();
    await expect(tabItem).toBeVisible();
    await useUnitlessLineHeight(page);

    const token = await tabItem.evaluate((el) => getComputedStyle(el).getPropertyValue("--sjs2-typography-line-height-default").trim());
    expect(token).toBe("1.5");

    const tabSpacing = await readLength(page, ".svc-tabbed-menu-item", "var(--sjs2-spacing-x500)");
    const tab = await tabItem.evaluate((el) => {
      el.style.padding = "0";
      const cs = getComputedStyle(el);
      const metrics = {
        minHeight: parseFloat(cs.minHeight),
        lineHeight: parseFloat(cs.lineHeight),
        fontSize: parseFloat(cs.fontSize)
      };
      el.style.padding = "";
      return metrics;
    });
    expect(Math.abs(tab.lineHeight - tab.fontSize * 1.5)).toBeLessThan(0.5);
    expect(Math.abs(tab.minHeight - (tab.lineHeight + tabSpacing))).toBeLessThan(1);

    await page.setViewportSize({ width: 1000, height: 900 });
    const showSidebarButton = page.locator("[title='Show Panel']");
    await expect(showSidebarButton).toBeVisible();
    await showSidebarButton.click();

    const panel = page.locator(".svc-side-bar--flyout.svc-side-bar--side-area .svc-side-bar__container-wrapper");
    const tabs = page.locator(".svc-sidebar-tabs");
    await expect(panel).toBeVisible();
    await expect(tabs).toBeVisible();

    const flyoutSpacing = await readLength(page, ".svc-side-bar--flyout.svc-side-bar--side-area .svc-side-bar__container-wrapper", "var(--sjs2-spacing-x500)");
    const flyout = await page.evaluate(() => {
      const panelEl = document.querySelector(".svc-side-bar--flyout.svc-side-bar--side-area .svc-side-bar__container-wrapper") as HTMLElement;
      const tabsEl = document.querySelector(".svc-sidebar-tabs") as HTMLElement;
      const cs = getComputedStyle(panelEl);
      const panelBox = panelEl.getBoundingClientRect();
      const tabsBox = tabsEl.getBoundingClientRect();
      return {
        lineHeight: parseFloat(cs.lineHeight),
        fontSize: parseFloat(cs.fontSize),
        inset: parseFloat(cs.insetInlineEnd),
        gap: Math.abs(panelBox.right - tabsBox.left)
      };
    });
    expect(Math.abs(flyout.lineHeight - flyout.fontSize * 1.5)).toBeLessThan(0.5);
    expect(Math.abs(flyout.inset - (flyout.lineHeight + flyoutSpacing))).toBeLessThan(1);
    expect(flyout.gap).toBeLessThanOrEqual(2);

    await page.goto(urlPresets);
    await page.setViewportSize({ width: 1920, height: 1400 });
    await expect(page.locator(".svc-creator")).toBeVisible();
    await useUnitlessLineHeight(page);
    await showPresets(page);
    await page.locator(".sps-navigation-bar .sd-action").nth(1).click();
    await page.locator(".sd-menu-list__container").filter({ visible: true }).getByText("Tabs").click();

    const emptyRow = page.locator(".sps-question--matrixdynamic table").nth(1).locator(".sps-table__row--empty");
    await expect(emptyRow).toBeVisible();
    const rowSpacingX400 = await readLength(page, ".sps-table__row--empty", "var(--sjs2-spacing-x400)");
    const rowSpacingX300 = await readLength(page, ".sps-table__row--empty", "var(--sjs2-spacing-x300)");
    const row = await emptyRow.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        lineHeight: parseFloat(cs.lineHeight),
        fontSize: parseFloat(cs.fontSize),
        height: parseFloat(cs.height)
      };
    });
    expect(Math.abs(row.lineHeight - row.fontSize * 1.5)).toBeLessThan(0.5);
    expect(Math.abs(row.height - (row.lineHeight + rowSpacingX400 + rowSpacingX300))).toBeLessThan(1);
  });
});
