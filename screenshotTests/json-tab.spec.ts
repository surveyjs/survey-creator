import { test, expect } from "@playwright/test";
import { url, setJSON, getTabbedMenuItemByText, compareScreenshot } from "./helper";

const title = "Json tab Screenshot";

test.describe(title, () => {

  test("one rule view", async ({ page }) => {
    await page.goto(`${url}`);
    await page.setViewportSize({ width: 1920, height: 900 });
    await setJSON(page, {});
    await getTabbedMenuItemByText(page, "JSON Editor").click();
    await page.locator(".svc-json-editor-tab__content-area").fill(JSON.stringify({
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    }, null, 2));
    const tabContent = page.locator(".svc-creator-tab__content");
    await compareScreenshot(page, tabContent, "json-tab-with-errors.png");
  });

  test("JSON Ace editor", async ({ page }) => {
    const widgetUrl = url.replace(/\/testcafe$/, "/testcafe-widget");
    await page.goto(`${widgetUrl}`);
    const skipIfNotReact = await page.evaluate(() => {
      return window["creator"].survey.platformName != "react";
    });
    // skip test fo non-react - core code
    if (skipIfNotReact) return;

    await page.setViewportSize({ width: 1920, height: 900 });
    const json = {
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "question1" }]
        }
      ]
    };
    await setJSON(page, json);
    await getTabbedMenuItemByText(page, "JSON Editor").click();
    const tabContent = page.locator(".svc-creator-tab__content");
    await tabContent.click();
    await compareScreenshot(page, tabContent, "json-tab-ace.png");

    await page.evaluate(() => {
      window["creator"].preferredColorPalette = "dark";
    });
    await getTabbedMenuItemByText(page, "Logic").click();
    await getTabbedMenuItemByText(page, "JSON Editor").click();

    await compareScreenshot(page, tabContent, "json-tab-ace-dark.png");
  });
});