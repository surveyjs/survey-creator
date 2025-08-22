import { url, test, expect } from "./helper";

const title = "TabbedMenu and Toolbox Disabled";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("TabbedMenu:Actions", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].tabs.map(t => t.enabled = false);
    });
    await page.getByText("Preview").click();
    await expect(page.getByText("Your form is empty")).toBeVisible();
  });

  test("Toolbox:Actions", async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 800 });
    await page.evaluate(() => {
      window["creator"].toolbox.enabled = false;
    });
    await page.getByText("Radio Button Group").click({ force: true });
    await expect(page.getByText("Your form is empty")).toBeVisible();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Space");
    await expect(page.getByText("Your form is empty")).toBeVisible();
  });

  test("Toolbox:Compact:Actions", async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 800 });
    await page.evaluate(() => {
      window["creator"].toolbox.enabled = false;
    });

    const toolboxItem = page.locator(".svc-toolbox__item").filter({ has: page.locator(":visible") }).nth(1);
    await page.setViewportSize({ width: 1240, height: 870 });
    await toolboxItem.first().hover({ force: true });

    const opacity = await page.locator(".svc-toolbox__item-banner").first().evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue("opacity");
    });

    await expect(opacity).toBe("0");
  });

  // test("Toolbox:Search", async ({ page }) => {
  //   await page.setViewportSize({ width: 1500, height: 800 });
  //   await page.evaluate(() => {
  //     window["creator"].toolbox.enabled = false;
  //   });
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   await page.keyboard.press("Tab");
  //   await page.keyboard.press("z");
  //   //  await page.locator(".svc-toolbox .svc-search__input").first().fill("Radio");
  //   await expect(page.getByText("Rating Scale")).toBeVisible();
  // });
});