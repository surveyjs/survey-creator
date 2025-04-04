import type { RunOptions } from "axe-core";
import type { Page } from "playwright";
export const url = "http://127.0.0.1:8080/testCafe/testcafe";

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const creatorTabTranslationName = "Translation";
export const creatorTabThemeName = "Themes";
export const creatorTabJSONName = "JSON Editor";

export function getTabbedMenuItemByText(page: Page, text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Themes") {
  return page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").getByText(text);
}
export async function setJSON(page: Page, json?: any) {
  await page.evaluate(([json]) => {
    (window as any).creator.JSON = json;
  }, [json]);
}

export async function updateCreatorModel(page: Page, options?: any, json?: any) {
  await page.evaluate(([options, json]) => {
    (window as any).updateCreatorModel(options, json);
    if(!!options) {
      Object.keys(options).forEach(key => {
        (window as any).creator[key] = options[key];
      });
    }
  }, [options, json]);
}

export const axeOptions: RunOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice", "section508", "wcag412"]
  },
  rules: {
    "color-contrast": {
      enabled: false
    },
    "document-title": {
      enabled: false
    },
    "landmark-one-main": {
      enabled: false
    },
    "page-has-heading-one": {
      enabled: false
    },
    "region": {
      enabled: false
    }
  }
};