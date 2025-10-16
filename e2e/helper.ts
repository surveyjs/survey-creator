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

interface IDragToElementOptions {
  elementPosition?: {x: number, y: number};
  targetPosition?: {x: number, y: number};
  steps?: number;
}

export async function doDrag({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options?: IDragToElementOptions }):Promise<void> {
  if (options?.elementPosition) {
    await element.hover({ force: true, position: { x: (options.targetPosition?.x || 0), y: (options.targetPosition?.y || 0) } });
  } else {
    await element.hover({ force: true });
  }
  await page.mouse.down();
  await target.scrollIntoViewIfNeeded();
  const { x, y, width, height } = await <any>target.boundingBox();

  if (options?.targetPosition) {
    await page.mouse.move(x + (options?.targetPosition?.x || 0), y + (options?.targetPosition?.y || 0), { steps: options?.steps || 20 });
  } else {
    await page.mouse.move(x + width / 2, y + height / 2, { steps: options?.steps || 20 });

  }
}

export async function doDragDrop({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options?: IDragToElementOptions }):Promise<void> {
  await doDrag({ page, element, target, options: options || {} });
  await page.mouse.up();
}

export { expect };