import type { Locator, Page } from "@playwright/test";
import { expect, test as baseTest } from "@playwright/test";

export const url = "http://127.0.0.1:8080/testCafe/testcafe";

export async function compareScreenshot(page: Page, elementSelector: string | undefined, screenshotName: string, elementIndex = 0) {
  await page.addStyleTag({
    content: "textarea::-webkit-resizer { visibility: hidden !important; }"
  });

  if (!!elementSelector) {
    const element = page.locator(elementSelector).filter({ visible: true });
    await expect.soft(element.nth(elementIndex)).toBeVisible();
    await expect.soft(element.nth(elementIndex)).toHaveScreenshot(screenshotName, {
      timeout: 10000
    });
  } else {
    await expect.soft(page).toHaveScreenshot(screenshotName, {
      timeout: 10000
    });
  }
}
export const test = baseTest.extend<{page: void, skipJSErrors: boolean}>({
  skipJSErrors: [false, { option: false }],
  page: async ({ page, skipJSErrors }, use) => {
    const errors: Array<Error> = [];
    page.addListener("pageerror", (error) => {
      errors.push(error);
    });
    await use(page);
    if (!skipJSErrors) {
      expect(errors).toHaveLength(0);
    }
  }
});

export const setJSON = async (page: Page, json: object) => {
  await page.evaluate((json) => {
    window["creator"].text = JSON.stringify(json);
  }, json);
};

export { expect };