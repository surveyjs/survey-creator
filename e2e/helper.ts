import type { Locator, Page } from "@playwright/test";
import { expect, test as baseTest } from "@playwright/test";

export const url = "http://127.0.0.1:8080/testCafe/testcafe";

export async function compareScreenshot(page: Page, elementSelector: string | Locator | undefined, screenshotName: string, elementIndex = 0) {
  let currentElement = elementSelector;
  if (!!currentElement && typeof currentElement == "string") {
    currentElement = page.locator(currentElement);
  }

  if (!!currentElement) {
    const element = (<Locator>currentElement).filter({ visible: true });
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

export async function doDrag({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options: any }):Promise<void> {
  await element.hover({ force: true });
  await page.mouse.down();
  const { x, y, width, height } = await <any>target.boundingBox();

  await page.mouse.move(x + width / 2 + (options.destinationOffsetX || 0), y + height / 2 + (options.destinationOffsetY || 0), { steps: 20 });
}

export async function doDragDrop({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options: any }):Promise<void> {
  await doDrag({ page, element, target, options: options || {} });
  await page.mouse.up();
}

export { expect };