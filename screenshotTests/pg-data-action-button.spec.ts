import { test, url, setJSON, compareScreenshot } from "./helper";

const title = "ValueLink Actions in Data section Screenshot";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  test("Check states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    await setJSON(page, {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [{ "type": "text", "name": "question1" }]
        }
      ]
    });

    // await page.click(".svd-grid-expand");
    await page.locator(".svc-question__content").click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);
    await page.locator("div[id$='ariaTitle'][id^='sp']:has-text('General')").click();
    await page.locator("div[id$='ariaTitle'][id^='sp']:has-text('Data')").click();

    const buttonElement = page.locator(".svc-action-button.svc-link-value-button.svc-question-link__set-button");
    await compareScreenshot(page, buttonElement, "action-button-default.png");

    await buttonElement.first().hover();
    await compareScreenshot(page, buttonElement, "action-button-hovered.png");

    await page.evaluate(() => {
      (window as any).creator.survey.getAllQuestions()[0].defaultValue = "val";
    });
    const clearButtonElement = page.locator(".svc-link__button.svc-question-link__clear-button.svc-action-button");
    await clearButtonElement.hover();
    await compareScreenshot(page, clearButtonElement, "action-clear-button-hovered.png");
  });

  test("Default value clear button", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 870 });

    const generalTab = page.locator("div[id$='ariaTitle'][id^='sp']").filter({ hasText: "General" }).first();
    const dataTab = page.locator("div[id$='ariaTitle'][id^='sp']").filter({ hasText: "Data" }).first();

    await setJSON(page, {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "defaultValue": "text"
            }
          ]
        }
      ]
    });

    await page.locator(".svc-question__content").click();
    await generalTab.click();
    await dataTab.click();
    await page.locator(".svc-action-button.svc-question-link__set-button:has-text('Change Default Answer')").click();
    const buttons = page.locator(".spg-link");
    await compareScreenshot(page, buttons, "action-buttons-on-popup-open.png");
  });
});
