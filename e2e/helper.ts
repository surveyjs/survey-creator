import type { Locator, Page } from "@playwright/test";
import { expect, test as baseTest } from "@playwright/test";

export const url = "http://127.0.0.1:8080/testCafe/testcafe";
export const urlByPage = "http://127.0.0.1:8080/testCafe/by-page";
export const urlPreviewThemeSwitcher = "http://127.0.0.1:8080/testCafe/preview-theme-switcher";
export const urlThemeForPreview = "http://127.0.0.1:8080/testCafe/theme-for-preview-option";
export const urlDropdownCollapseView = "http://127.0.0.1:8080/testCafe/dropdown-collapse-view";
export const urlLocalized_de = "http://127.0.0.1:8080/testCafe/testcafe_localized_ui";
export const urlPresets = "http://127.0.0.1:8080/testCafe/presets";

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
      // eslint-disable-next-line no-console
      console.log(`Uncaught exception: "${error}"`);
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

export const getJSON = async (page: Page) => {
  return await page.evaluate(() => {
    return JSON.parse(window["creator"].text);
  });
};

interface IDragToElementOptions {
  elementPosition?: {x?: number, y?: number};
  targetPosition?: {x?: number, y?: number};
  steps?: number;
}

export async function doDrag({ page, element, target, options }: { page: Page, element: Locator, target: Locator, options?: IDragToElementOptions }):Promise<void> {
  if (options?.elementPosition) {
    await element.hover({ force: true, position: { x: (options.elementPosition?.x || 0), y: (options.elementPosition?.y || 0) } });
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

export async function showCreatorSettings(page) {
  await page.locator(".svc-sidebar-tabs__bottom-container .svc-menu-action__button").click();
}
export async function showPresets(page) {
  await showCreatorSettings(page);
  await page.locator(".sps-launch__card").click();
}

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const creatorTabTranslationName = "Translation";
export const creatorTabThemeName = "Themes";
export const generalGroupName = "General";
export const logicGroupName = "Conditions";
export const inputMaskSettingsGroupName = "Input Mask Settings";

export function getTabbedMenuItemByText(page: Page, text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Miner Logik" | "Themes"): Locator {
  return page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").getByText(text).or(page.locator(".svc-tabbed-menu-item-container").filter({ has: page.locator("title").getByText(text) }));
}

export function getBarItemByTitle(page: Page, text: string): Locator {
  return page.locator(".sv-action-bar-item[title=\"" + text + "\"]");
}

export function getListItemByText(page: Page, text: string): Locator {
  return page.locator(".sv-popup__content .svc-list .svc-list__item").getByText(text, { exact: true });
}

export function getMenuItemByText(page: Page, text: string): Locator {
  return page.getByRole("menuitemradio", { name: text, exact: true });
}

export function getPropertyGridCategory(page: Page, categoryName: string): Locator {
  return page.locator(".spg-panel__title span").getByText(categoryName, { exact: true });
}

export const explicitErrorHandler = async (page: Page) => {
  await page.evaluate(() => {
    window.addEventListener("error", e => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
        e.message === "ResizeObserver loop limit exceeded") {
        e.stopImmediatePropagation();
      }
    });
  });
};

export async function changeToolboxScrolling(page: Page, hasScroll: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].toolbox.overflowBehavior = newVal ? "scroll" : "hideInMenu";
  }, hasScroll);
}

export async function changeToolboxSearchEnabled(page: Page, enabled: boolean) {
  await page.evaluate((newVal) => {
    window["creator"].toolbox.searchEnabled = newVal;
  }, enabled);
}

export async function changeToolboxLocation(page: Page, newVal: string) {
  await page.evaluate((val) => {
    window["creator"].toolboxLocation = val;
  }, newVal);
}

export async function getPagesLength(page: Page): Promise<number> {
  return await page.evaluate(() => window["creator"].survey.pages.length);
}
export async function getQuestionsLength(page: Page): Promise<number> {
  return await page.evaluate(() => window["creator"].survey.getAllQuestions().length);
}

export async function getQuestionNameByIndex(page: Page, index: number): Promise<string> {
  return await page.evaluate((i) => window["creator"].survey.getAllQuestions()[i].name, index);
}

export async function setAllowEditSurveyTitle(page: Page, newVal: boolean) {
  await page.evaluate((val) => {
    window["creator"].showSurveyHeader = val;
  }, newVal);
}

export async function handleShiftEnter(page: Page, selector: string) {
  await page.evaluate((sel: string) => {
    const el = document.querySelector(sel);
    if (el) {
      el.addEventListener("keypress", function (e: Event) {
        const ev = e as KeyboardEvent;
        if (ev.charCode === 13 && ev.shiftKey) {
          const editorEl = document.querySelector(sel) as HTMLElement;
          const selection = window.getSelection()!;
          const range = document.createRange();
          editorEl.innerHTML += "<div><br/></div>";
          range.setStart(editorEl, editorEl.childNodes.length);
          range.setEnd(editorEl, editorEl.childNodes.length);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });
    }
  }, selector);
}

export const selectedObjectTextSelector = ".svc-side-bar__container-header .sv-action--object-selector .sv-action-bar-item__title";

export async function addQuestionByAddQuestionButton(page: Page, text: string) {
  await page.locator(".svc-element__add-new-question .svc-element__question-type-selector").click();
  await page.locator(".svc-list__item span").getByText(text, { exact: true }).click();
}

export function getAddNewQuestionButton(page: Page): Locator {
  return page.locator(".svc-element__add-new-question > span").getByText("Add Question");
}

export function getToolboxItemByText(page: Page, text: string): Locator {
  return page.locator(".svc-toolbox__item-title").getByText(text, { exact: true });
}

export function getSubToolboxItemByText(page: Page, text: string): Locator {
  return page.locator(".svc-toolbox__item-subtype").getByText(text, { exact: true });
}

export { expect };